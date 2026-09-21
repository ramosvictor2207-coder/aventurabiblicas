import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";

const SPANISH_COUNTRIES = new Set([
  "ES", "MX", "AR", "CO", "CL", "PE", "VE", "EC", "GT", "CU", "BO", "DO", "HN",
  "PY", "SV", "NI", "CR", "PA", "UY", "PR", "GQ",
]);

const EURO_COUNTRIES = new Set([
  "AT", "BE", "HR", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT", "LV", "LT",
  "LU", "MT", "NL", "PT", "SK", "SI", "ES", "AD", "MC", "SM", "VA", "ME", "XK",
]);

export const detectVisitorLocale = createServerFn({ method: "GET" }).handler(async () => {
  const country = (
    getRequestHeader("cf-ipcountry") ||
    getRequestHeader("x-vercel-ip-country") ||
    getRequestHeader("x-country-code") ||
    ""
  ).toUpperCase();

  const acceptLanguage = (getRequestHeader("accept-language") || "").toLowerCase();

  const lang: "en" | "es" =
    SPANISH_COUNTRIES.has(country) || (!country && acceptLanguage.startsWith("es")) ? "es" : "en";

  const currency: "usd" | "eur" = EURO_COUNTRIES.has(country) ? "eur" : "usd";

  return { lang, currency };
});
