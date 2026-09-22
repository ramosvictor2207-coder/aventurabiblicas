declare global {
  interface Window {
    fbq?: any;
    _fbq?: unknown;
    pixelId?: string;
  }
}

const META_PIXEL_ID = "1824149778940030";
const UTMIFY_PIXEL_SRC = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
const UTMIFY_PIXEL_ID = "6ab1ca48414c314723ad82d1";

let initialized = false;

/** Injeta o Meta Pixel e o Pixel da Utmify. Chame uma única vez, no client. */
export function initPixels(): void {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;

  // --- Meta Pixel ---
  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      (fbq as any).callMethod
        ? (fbq as any).callMethod.apply(fbq, args)
        : (fbq as any).queue.push(args);
    };
    window.fbq = fbq;
    window._fbq = fbq;
    (fbq as any).push = fbq;
    (fbq as any).loaded = true;
    (fbq as any).version = "2.0";
    (fbq as any).queue = [];

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq?.("init", META_PIXEL_ID);
  window.fbq?.("track", "PageView");

  // --- Pixel Utmify ---
  window.pixelId = UTMIFY_PIXEL_ID;
  const utmifyScript = document.createElement("script");
  utmifyScript.src = UTMIFY_PIXEL_SRC;
  utmifyScript.async = true;
  utmifyScript.defer = true;
  document.head.appendChild(utmifyScript);
}

/** Dispara uma nova visualização de página no Meta Pixel (útil em navegação SPA entre /en e /es). */
export function trackPageView(): void {
  window.fbq?.("track", "PageView");
}

type ProductEventPayload = {
  content_name: string;
  content_ids?: string[];
  content_type?: "product";
  value: number;
  currency: "USD" | "EUR";
};

export function trackViewContent(payload: ProductEventPayload): void {
  window.fbq?.("track", "ViewContent", { content_type: "product", ...payload });
}

export function trackAddToCart(payload: ProductEventPayload): void {
  window.fbq?.("track", "AddToCart", { content_type: "product", ...payload });
}

export function trackInitiateCheckout(payload: ProductEventPayload): void {
  window.fbq?.("track", "InitiateCheckout", { content_type: "product", ...payload });
}
