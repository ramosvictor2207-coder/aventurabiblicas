import { detectVisitorLocale } from "@/lib/geo.functions";
import type { Currency, Lang } from "@/lib/content";

// Chamado no navegador: pede ao servidor o idioma/moeda conforme o IP do
// visitante. Em caso de falha, mantém inglês + dólar.
export async function detectLocaleFromIp(): Promise<{ lang: Lang; currency: Currency }> {
  try {
    return await detectVisitorLocale();
  } catch {
    return { lang: "en", currency: "usd" };
  }
}
