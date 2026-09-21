import { createFileRoute, redirect } from "@tanstack/react-router";
import { detectVisitorLocale } from "@/lib/geo.functions";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    let lang: "en" | "es" = "en";
    try {
      lang = (await detectVisitorLocale()).lang;
    } catch {
      lang = "en";
    }
    throw redirect({ to: lang === "es" ? "/es" : "/en" });
  },
  component: () => null,
});
