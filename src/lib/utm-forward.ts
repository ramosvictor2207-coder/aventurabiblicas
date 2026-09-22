// Parâmetros de atribuição que precisam "viajar" da landing page até o
// checkout na Eduzz, para a Utmify conseguir casar a venda com a campanha
// (Meta, Google, TikTok) que trouxe o visitante.
const TRACKING_PARAMS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id",
  "fbclid", "gclid", "ttclid", "src", "sck", "xcod",
];

/** Repassa os parâmetros de UTM/clique da URL atual para a URL de checkout. */
export function withTrackingParams(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;
  try {
    const current = new URL(window.location.href);
    const target = new URL(baseUrl);
    for (const key of TRACKING_PARAMS) {
      const value = current.searchParams.get(key);
      if (value) target.searchParams.set(key, value);
    }
    return target.toString();
  } catch {
    return baseUrl;
  }
}
