import type { Currency, Lang } from "@/lib/content";

const SPANISH_COUNTRIES = new Set([
  "ES", "MX", "AR", "CO", "CL", "PE", "VE", "EC", "GT", "CU", "BO", "DO", "HN",
  "PY", "SV", "NI", "CR", "PA", "UY", "PR", "GQ",
]);

const EURO_COUNTRIES = new Set([
  "AT", "BE", "HR", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT", "LV", "LT",
  "LU", "MT", "NL", "PT", "SK", "SI", "ES", "AD", "MC", "SM", "VA", "ME", "XK",
]);

function fallbackFromBrowser(reason: string): { lang: Lang; currency: Currency } {
  const browserLang = (typeof navigator !== "undefined" ? navigator.language : "").toLowerCase();
  const result = { lang: (browserLang.startsWith("es") ? "es" : "en") as Lang, currency: "usd" as Currency };
  // eslint-disable-next-line no-console
  console.warn(`[geo] usando fallback do navegador (${reason}). navigator.language="${browserLang}" ->`, result);
  return result;
}

/**
 * Detecta idioma e moeda direto no navegador do visitante, consultando o
 * país pelo IP público dele. Roda inteiramente client-side — não depende de
 * nenhum servidor/backend, então funciona em qualquer hospedagem (inclusive
 * builds estáticos) e reflete corretamente IPs de VPN.
 *
 * IMPORTANTE: não trocar isso de volta para uma server function
 * (createServerFn / geo.functions.ts) — foi trocado de propósito porque o
 * domínio de preview não roda backend, e a versão server-side sempre falha
 * silenciosamente e cai em inglês/USD.
 */
export async function detectLocaleFromIp(): Promise<{ lang: Lang; currency: Currency }> {
  const providers = ["https://ipapi.co/json/", "https://ipwho.is/", "https://api.country.is/"];

  for (const url of providers) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3000);
      // eslint-disable-next-line no-console
      console.info(`[geo] consultando ${url}...`);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);
      if (!res.ok) {
        console.warn(`[geo] ${url} respondeu status ${res.status}`);
        continue;
      }

      const data = await res.json();
      const country = String(data?.country_code ?? data?.country ?? "").toUpperCase();
      console.info(`[geo] ${url} respondeu país="${country}"`, data);
      if (!/^[A-Z]{2}$/.test(country)) continue;

      const result = {
        lang: (SPANISH_COUNTRIES.has(country) ? "es" : "en") as Lang,
        currency: (EURO_COUNTRIES.has(country) ? "eur" : "usd") as Currency,
      };
      console.info(`[geo] resultado final:`, result);
      return result;
    } catch (err) {
      // Se isso disparar "Content Security Policy" ou "CORS" no console, é
      // a hospedagem bloqueando a chamada — não um bug deste código.
      console.warn(`[geo] falha ao consultar ${url}:`, err);
    }
  }

  return fallbackFromBrowser("todos os provedores falharam");
}
