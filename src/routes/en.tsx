import { createFileRoute } from "@tanstack/react-router";
import { SalesPage } from "@/components/SalesPage";
import { content } from "@/lib/content";
import { detectVisitorLocale } from "@/lib/geo.functions";

const t = content.en;

export const Route = createFileRoute("/en")({
  loader: async () => {
    try {
      const { currency } = await detectVisitorLocale();
      return { currency };
    } catch {
      return { currency: "usd" as const };
    }
  },
  head: () => ({
    meta: [
      { title: t.meta.title },
      { name: "description", content: t.meta.description },
      { property: "og:title", content: t.meta.ogTitle },
      { property: "og:description", content: t.meta.ogDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EnglishPage,
});

function EnglishPage() {
  const { currency } = Route.useLoaderData();
  return <SalesPage lang="en" initialCurrency={currency} />;
}
