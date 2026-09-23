import { useEffect, useState } from "react";
import { ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRICE_BUNDLE, PRICE_SINGLE, type Currency, type Lang } from "@/lib/content";

// Nomes comuns nos mercados de língua inglesa e espanhola (EUA, México, Espanha, Peru, Colômbia, etc.)
const NAMES = [
  "Giovanni", "Sofía", "Michael", "Camila", "John", "Valentina", "Carlos",
  "Emma", "Lucas", "Isabella", "Daniel", "Mariana", "James", "Ana",
  "Matthew", "Lucía", "David", "Fernanda", "Andrés", "Olivia", "Diego",
  "Grace", "Santiago", "Chloe", "Miguel", "Regina", "Thomas", "Renata",
  "Joseph", "Ximena",
] as const;

// Localidades por idioma — combina países de fala inglesa e espanhola
const LOCATIONS: Record<Lang, string[]> = {
  en: [
    "United States", "Canada", "United Kingdom", "Australia", "Texas, US",
    "California, US", "Florida, US", "New York, US", "Ireland",
  ],
  es: [
    "Perú", "México", "España", "Colombia", "Argentina", "Chile",
    "Ecuador", "Bolivia", "Paraguay", "Uruguay",
  ],
};

const TIME_LABELS: Record<Lang, string[]> = {
  en: ["just now", "1 minute ago", "2 minutes ago", "3 minutes ago"],
  es: ["ahora mismo", "hace 1 minuto", "hace 2 minutos", "hace 3 minutos"],
};

const VERB: Record<Lang, string> = { en: "just bought", es: "acaba de comprar" };
const PRODUCT_LABEL: Record<Lang, [string, string]> = {
  en: ["Bible Animals", "Bible Animals + Bible Heroes"],
  es: ["Animales de la Biblia", "Animales de la Biblia + Héroes de la Biblia"],
};

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function buildNotification(lang: Lang, currency: Currency) {
  const isBundle = Math.random() < 0.35;
  const value = isBundle ? PRICE_BUNDLE : PRICE_SINGLE;
  const symbol = currency === "usd" ? "$" : "€";
  return {
    id: `${Date.now()}-${Math.random()}`,
    name: pick(NAMES),
    location: pick(LOCATIONS[lang]),
    time: pick(TIME_LABELS[lang]),
    product: PRODUCT_LABEL[lang][isBundle ? 1 : 0],
    price: `${symbol}${value.toFixed(2)}`,
  };
}

export function PurchaseNotifications({ lang, currency }: { lang: Lang; currency: Currency }) {
  const [current, setCurrent] = useState<ReturnType<typeof buildNotification> | null>(null);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    let showTimeout: ReturnType<typeof setTimeout>;
    let hideTimeout: ReturnType<typeof setTimeout>;
    let cycleTimeout: ReturnType<typeof setTimeout>;

    const cycle = (isFirst: boolean) => {
      showTimeout = setTimeout(() => {
        setCurrent(buildNotification(lang, currency));
        setVisible(true);

        hideTimeout = setTimeout(() => {
          setVisible(false);
          cycleTimeout = setTimeout(() => cycle(false), 4000 + Math.random() * 4000);
        }, 5000);
      }, isFirst ? 4000 : 0);
    };

    cycle(true);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearTimeout(cycleTimeout);
    };
  }, [lang, currency, dismissed]);

  if (dismissed || !current) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "pointer-events-none fixed bottom-4 left-4 z-50 flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-2xl border border-border bg-background p-3.5 pr-4 shadow-2xl transition-all duration-500 sm:max-w-sm",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
      )}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
        <ShoppingBag className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold leading-tight">
          {current.name} <span className="font-normal text-muted-foreground">· {current.location}</span>
        </p>
        <p className="mt-0.5 truncate text-xs leading-tight text-muted-foreground">
          {VERB[lang]} <span className="font-semibold text-foreground">{current.product}</span> — {current.price}
        </p>
        <p className="mt-0.5 text-[11px] font-medium text-muted-foreground/70">{current.time}</p>
      </div>
      <button
        type="button"
        aria-label={lang === "es" ? "Cerrar" : "Dismiss"}
        onClick={() => setDismissed(true)}
        className="pointer-events-auto shrink-0 rounded-full p-1 text-muted-foreground/60 transition-colors hover:bg-muted hover:text-foreground"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
