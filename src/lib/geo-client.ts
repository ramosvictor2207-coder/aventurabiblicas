import type { Currency, Lang } from "@/lib/content";

const SPANISH_COUNTRIES = new Set([
  "ES", "MX", "AR", "CO", "CL", "PE", "VE", "EC", "GT", "CU", "BO", "DO", "HN",
  "PY", "SV", "NI", "CR", "PA", "UY", "PR", "GQ",
]);

const EURO_COUNTRIES = new Set([
  "AT", "BE", "HR", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT", "LV", "LT",
  "LU", "MT", "NL", "PT", "SK", "SI", "ES", "AD", "MC", "SM", "VA", "ME", "XK",
]);

function toResult(country: string): { lang: Lang; currency: Currency } {
  return {
    lang: SPANISH_COUNTRIES.has(country) ? "es" : "en",
    currency: EURO_COUNTRIES.has(country) ? "eur" : "usd",
  };
}

function fallbackFromBrowser(reason: string): { lang: Lang; currency: Currency } {
  const browserLang = (typeof navigator !== "undefined" ? navigator.language : "").toLowerCase();
  const result = { lang: (browserLang.startsWith("es") ? "es" : "en") as Lang, currency: "usd" as Currency };
  console.warn(`[geo] usando fallback do navegador (${reason}). navigator.language="${browserLang}" ->`, result);
  return result;
}

async function fetchJson(url: string, timeoutMs: number): Promise<any> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error(`status ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Passo 1 (preferencial): pega o IPv4 puro do visitante via um serviço que só
 * tem registro DNS "A" (nunca "AAAA") — então o navegador é OBRIGADO a usar
 * IPv4, mesmo em rede dual-stack onde o IPv6 venceria por padrão (Happy
 * Eyeballs) e vazaria o IP real por fora de uma VPN só-IPv4.
 */
async function detectViaForcedIpv4(): Promise<string> {
  console.info("[geo] passo 1: pegando IPv4 puro via ipify (só tem registro A, sem AAAA)...");
  const data = await fetchJson("https://api.ipify.org?format=json", 2500);
  const ip = String(data?.ip ?? "");
  if (!/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) throw new Error("ipify não retornou um IPv4 válido");
  console.info(`[geo] IPv4 confirmado: ${ip}`);

  const geo = await fetchJson(`https://ipapi.co/${ip}/json/`, 2500);
  const country = String(geo?.country_code ?? geo?.country ?? "").toUpperCase();
  console.info(`[geo] país do IPv4 forçado: "${country}"`, geo);
  if (!/^[A-Z]{2}$/.test(country)) throw new Error("país inválido na resposta");
  return country;
}

/** Passo 2 (fallback): detecção "normal", que usa o IP que o navegador escolher (IPv4 ou IPv6). */
async function detectViaDefaultStack(): Promise<string> {
  const providers = ["https://ipapi.co/json/", "https://ipwho.is/", "https://api.country.is/"];
  for (const url of providers) {
    try {
      console.info(`[geo] fallback: consultando ${url}...`);
      const data = await fetchJson(url, 3000);
      const country = String(data?.country_code ?? data?.country ?? "").toUpperCase();
      console.info(`[geo] ${url} respondeu país="${country}"`, data);
      if (/^[A-Z]{2}$/.test(country)) return country;
    } catch (err) {
      console.warn(`[geo] falha ao consultar ${url}:`, err);
    }
  }
  throw new Error("todos os provedores de fallback falharam");
}

/**
 * Detecta idioma e moeda direto no navegador do visitante, pelo IP público
 * dele. Roda 100% client-side (não depende de backend). Tenta primeiro
 * forçar IPv4 (evita vazamento de IPv6 em VPNs só-IPv4); se falhar, usa o
 * IP padrão do navegador; se tudo falhar, cai no idioma do navegador.
 *
 * IMPORTANTE: não trocar isso de volta para uma server function
 * (createServerFn / geo.functions.ts) — o domínio de hospedagem não roda
 * backend, e a versão server-side sempre falha silenciosamente e cai em
 * inglês/USD.
 */
export async function detectLocaleFromIp(): Promise<{ lang: Lang; currency: Currency }> {
  try {
    const country = await detectViaForcedIpv4();
    const result = toResult(country);
    console.info("[geo] resultado final (via IPv4 forçado):", result);
    return result;
  } catch (err) {
    console.warn("[geo] passo 1 (IPv4 forçado) falhou, tentando fallback:", err);
  }

  try {
    const country = await detectViaDefaultStack();
    const result = toResult(country);
    console.info("[geo] resultado final (via fallback padrão):", result);
    return result;
  } catch (err) {
    console.warn("[geo] fallback padrão também falhou:", err);
  }

  return fallbackFromBrowser("todos os provedores falharam");
}
