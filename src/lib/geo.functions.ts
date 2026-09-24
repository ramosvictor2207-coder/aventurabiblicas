import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";

const SPANISH_COUNTRIES = new Set([
  "ES", "MX", "AR", "CO", "CL", "PE", "VE", "EC", "GT", "CU", "BO", "DO", "HN",
  "PY", "SV", "NI", "CR", "PA", "UY", "PR", "GQ",
]);

const ENGLISH_COUNTRIES = new Set([
  "US", "GB", "CA", "AU", "NZ", "IE", "ZA", "JM", "TT", "BS", "BB", "BZ",
  "GY", "AG", "DM", "GD", "KN", "LC", "VC", "PH",
]);

const EURO_COUNTRIES = new Set([
  "AT", "BE", "HR", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT", "LV", "LT",
  "LU", "MT", "NL", "PT", "SK", "SI", "ES", "AD", "MC", "SM", "VA", "ME", "XK",
]);

// Cabeçalhos de país de IP usados por diferentes provedores (Cloudflare, Vercel,
// AWS CloudFront, Fastly, GCP...). Nem toda hospedagem injeta um desses — por
// isso existe o fallback por consulta de IP logo abaixo.
const COUNTRY_HEADERS = [
  "cf-ipcountry",
  "x-vercel-ip-country",
  "x-country-code",
  "x-appengine-country",
  "cloudfront-viewer-country",
  "fastly-country-code",
  "x-geo-country",
  "x-forwarded-country",
];

function getCountryFromHeaders(): string {
  for (const header of COUNTRY_HEADERS) {
    const value = getRequestHeader(header);
    if (value) return value.toUpperCase();
  }
  return "";
}

function getClientIp(): string {
  const forwardedFor = getRequestHeader("x-forwarded-for");
  const firstForwarded = forwardedFor?.split(",")[0]?.trim();
  return (
    getRequestHeader("cf-connecting-ip") ||
    firstForwarded ||
    getRequestHeader("x-real-ip") ||
    ""
  );
}

// Fallback: quando a hospedagem não manda header de país (ex.: preview da
// Lovable), consulta o país direto pelo IP do visitante.
async function lookupCountryByIp(ip: string): Promise<string> {
  if (!ip || ip === "127.0.0.1" || ip === "::1") return "";
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1500);
    const res = await fetch(`https://ipapi.co/${ip}/country/`, { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) return "";
    const text = (await res.text()).trim().toUpperCase();
    return /^[A-Z]{2}$/.test(text) ? text : "";
  } catch {
    return "";
  }
}

export const detectVisitorLocale = createServerFn({ method: "GET" }).handler(async () => {
  let country = getCountryFromHeaders();

  if (!country) {
    country = await lookupCountryByIp(getClientIp());
  }

  const acceptLanguage = (getRequestHeader("accept-language") || "").toLowerCase();

  // Espanhol é o idioma padrão do site. Inglês só quando o país é claramente
  // anglófono ou, sem país, o navegador prefere inglês.
  const lang: "en" | "es" =
    SPANISH_COUNTRIES.has(country) ||
    (!country && !acceptLanguage.startsWith("en")) ||
    (Boolean(country) && !ENGLISH_COUNTRIES.has(country))
      ? "es"
      : "en";

  const currency: "usd" | "eur" = EURO_COUNTRIES.has(country) ? "eur" : "usd";

  return { lang, currency };
});
