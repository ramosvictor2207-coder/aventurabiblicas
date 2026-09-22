import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { detectLocaleFromIp } from "@/lib/geo-client";

export const Route = createFileRoute("/")({
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
