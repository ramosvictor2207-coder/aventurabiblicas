import type { Currency, Lang } from "@/lib/content";

const SPANISH_COUNTRIES = new Set([
  "ES", "MX", "AR", "CO", "CL", "PE", "VE", "EC", "GT", "CU", "BO", "DO", "HN",
  "PY", "SV", "NI", "CR", "PA", "UY", "PR", "GQ",
]);

const EURO_COUNTRIES = new Set([
  "AT", "BE", "HR", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT", "LV", "LT",
  "LU", "MT", "NL", "PT", "SK", "SI", "ES", "AD", "MC", "SM", "VA", "ME", "XK",
]);

function fallbackFromBrowser(): { lang: Lang; currency: Currency } {
  const browserLang = (typeof navigator !== "undefined" ? navigator.language : "").toLowerCase();
  return { lang: browserLang.startsWith("es") ? "es" : "en", currency: "usd" };
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
  const providers = ["https://ipapi.co/json/", "https://ipwho.is/"];

  for (const url of providers) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 2500);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);
      if (!res.ok) continue;

      const data = await res.json();
      const country = String(data?.country_code ?? data?.country ?? "").toUpperCase();
      if (!/^[A-Z]{2}$/.test(country)) continue;

      return {
        lang: SPANISH_COUNTRIES.has(country) ? "es" : "en",
        currency: EURO_COUNTRIES.has(country) ? "eur" : "usd",
      };
    } catch {
      // tenta o próximo provedor
    }
  }

  return fallbackFromBrowser();
}
