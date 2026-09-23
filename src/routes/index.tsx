import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { detectLocaleFromIp } from "@/lib/geo-client";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Little Bible Adventures | Christian Coloring Books" },
      { name: "description", content: "Faith-centered Bible story coloring books created for meaningful family moments." },
      { property: "og:title", content: "My Little Bible Adventures" },
      { property: "og:description", content: "Faith-centered Bible story coloring books created for meaningful family moments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndexRedirect,
});

function IndexRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    detectLocaleFromIp().then(({ lang }) => {
      if (active) navigate({ to: lang === "es" ? "/es" : "/en", replace: true });
    });
    return () => {
      active = false;
    };
  }, [navigate]);

  return null;
}
