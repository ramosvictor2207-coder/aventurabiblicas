import { createFileRoute } from "@tanstack/react-router";
import { SalesPage } from "@/components/SalesPage";
import { content } from "@/lib/content";

const t = content.es;

export const Route = createFileRoute("/")({
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
  component: () => <SalesPage lang="es" initialCurrency="usd" />,
});
