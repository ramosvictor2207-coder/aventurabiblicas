import { createFileRoute } from "@tanstack/react-router";
import { SalesPage } from "@/components/SalesPage";
import { content } from "@/lib/content";

const t = content.en;

export const Route = createFileRoute("/en")({
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
  component: () => <SalesPage lang="en" initialCurrency="usd" />,
});
