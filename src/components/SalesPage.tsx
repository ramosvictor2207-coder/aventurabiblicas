import { useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  BookHeart, BookOpen, Check, ChevronDown, Church, Clock3, Gift, Globe2,
  Heart, Palette, ShieldCheck, Sparkles, Timer, Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PurchaseNotifications } from "@/components/PurchaseNotifications";
import { ImageMarquee } from "@/components/ImageMarquee";
import { detectLocaleFromIp } from "@/lib/geo-client";
import { withTrackingParams } from "@/lib/utm-forward";
import { trackAddToCart, trackInitiateCheckout, trackViewContent } from "@/lib/tracking";
import {
  CHECKOUT_BUNDLE, CHECKOUT_SINGLE, FULL_PRICE_BUNDLE, FULL_PRICE_SINGLE, PRICE_BUNDLE, PRICE_SINGLE,
  content, type Currency, type Lang,
} from "@/lib/content";
import bannerEn from "@/assets/bible-animals-banner.png.asset.json";
import bannerEs from "@/assets/bible-animals-banner-es.png.asset.json";
import noahsArkRainbow from "@/assets/noahs-ark-rainbow.jpeg.asset.json";
import noahBuildsTheArk from "@/assets/noah-builds-the-ark.jpeg.asset.json";
import davidProtectsTheSheep from "@/assets/david-protects-the-sheep.png.asset.json";
import jesusLovesChildren from "@/assets/jesus-loves-children.png.asset.json";
import jonahGreatStorm from "@/assets/jonah-great-storm.png.asset.json";
import danielIsBlessed from "@/assets/daniel-is-blessed.webp.asset.json";
import jonahPreaches from "@/assets/jonah-preaches.webp.asset.json";

const galleryImages = [
  { src: noahsArkRainbow.url, alt: "Noah's Ark with a rainbow" },
  { src: noahBuildsTheArk.url, alt: "Noah building the ark" },
  { src: davidProtectsTheSheep.url, alt: "David protecting the sheep" },
  { src: jesusLovesChildren.url, alt: "Jesus with the little children" },
  { src: jonahGreatStorm.url, alt: "Jonah and the great storm" },
  { src: danielIsBlessed.url, alt: "Daniel blessed in the lions' den" },
  { src: jonahPreaches.url, alt: "Jonah preaching in Nineveh" },
];

const featureIcons = [BookOpen, Palette, Heart];
const parentIcons = [Clock3, Users, Church];
const discoverIcons = [BookOpen, Palette, BookHeart, Gift];

export function SalesPage({ lang, initialCurrency }: { lang: Lang; initialCurrency: Currency }) {
  const t = content[lang];
  const banner = lang === "es" ? bannerEs : bannerEn;
  const navigate = useNavigate();
  // Idioma e moeda vêm 100% do IP do visitante, detectado no navegador dele —
  // sem opção de troca manual. `initialCurrency` só serve de placeholder até a
  // detecção real (rápida, mas assíncrona) terminar.
  const [currency, setCurrency] = useState<Currency>(initialCurrency);
  const [singleCheckoutHref, setSingleCheckoutHref] = useState(CHECKOUT_SINGLE);
  const [bundleCheckoutHref, setBundleCheckoutHref] = useState(CHECKOUT_BUNDLE);
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Intl.DateTimeFormat(t.promo.locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date()));
  }, [t.promo.locale]);

  useEffect(() => {
    let active = true;
    detectLocaleFromIp().then((detected) => {
      if (!active) return;
      if (detected.lang !== lang) {
        navigate({ to: detected.lang === "es" ? "/es" : "/en", replace: true });
        return;
      }
      setCurrency(detected.currency);
    });
    return () => {
      active = false;
    };
  }, [lang, navigate]);

  useEffect(() => {
    // Repassa utm_source/utm_campaign/fbclid etc. da landing page pro checkout
    // da Eduzz, pra Utmify conseguir atribuir a venda à campanha certa.
    setSingleCheckoutHref(withTrackingParams(CHECKOUT_SINGLE));
    setBundleCheckoutHref(withTrackingParams(CHECKOUT_BUNDLE));
  }, []);

  useEffect(() => {
    trackViewContent({
      content_name: "Bible Animals",
      content_ids: ["bible-animals"],
      value: PRICE_SINGLE,
      currency: currency === "usd" ? "USD" : "EUR",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckoutClick = (isBundle = false) => {
    const eventPayload = {
      content_name: isBundle ? "Bible Animals + Bible Heroes" : "Bible Animals",
      content_ids: isBundle ? ["bible-animals", "bible-heroes"] : ["bible-animals"],
      value: isBundle ? PRICE_BUNDLE : PRICE_SINGLE,
      currency: (currency === "usd" ? "USD" : "EUR") as "USD" | "EUR",
    };
    trackAddToCart(eventPayload);
    trackInitiateCheckout(eventPayload);
  };

  // Leva o visitante ao checkout da Eduzz de forma explícita (via JavaScript),
  // em vez de depender só do comportamento padrão do <a>. Assim, se algum
  // script de terceiros (Pixel, Utmify, navegador embutido do Instagram/Facebook)
  // interferir no clique, a navegação ainda acontece. O href continua no <a>
  // como plano B (SEO, clique com botão direito, abrir em nova aba).
  const goToCheckout = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    baseUrl: string,
    isBundle = false,
  ) => {
    // Deixa o navegador agir normalmente em Ctrl/Cmd+clique, clique do meio etc.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    try {
      handleCheckoutClick(isBundle);
    } catch (err) {
      console.warn("[checkout] falha ao disparar eventos de tracking:", err);
    }

    // URL montada NO MOMENTO do clique, já com as UTMs atuais.
    const url = withTrackingParams(baseUrl);
    // Pequeno respiro para o Pixel enviar o evento antes de sair da página.
    window.setTimeout(() => {
      window.location.assign(url);
    }, 150);
  };

  const price = (value: number) => (currency === "usd" ? `$${value.toFixed(2)}` : `€${value.toFixed(2)}`);
  const altPrice = (value: number) => (currency === "usd" ? `€${value.toFixed(2)}` : `$${value.toFixed(2)}`);
  const currencyName = currency === "usd" ? "USD" : "EUR";

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <PurchaseNotifications lang={lang} currency={currency} />

      <div className="bg-urgent px-4 py-3 text-urgent-foreground shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 text-center text-xs font-extrabold uppercase sm:text-sm">
          <Timer className="size-4 shrink-0" aria-hidden="true" />
          <span>{t.promo.label}{today ? ` — ${today}` : ""}</span>
        </div>
      </div>

      <header className="px-5 pb-8 pt-10 text-center sm:px-6 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-soft px-4 py-2 text-xs font-bold uppercase text-primary">
          <Sparkles className="size-4" /> {t.hero.badge}
        </span>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
          {t.hero.title} <span className="text-primary">{t.hero.titleAccent}</span>
        </h1>
      </header>

      <section className="mx-auto mb-20 max-w-6xl px-4 sm:px-6">
        <div className="relative">
          <img src={banner.url} alt={t.hero.bannerAlt} className="aspect-[3/2] w-full rounded-3xl object-cover shadow-2xl" />
          <div className="absolute -bottom-7 right-3 rotate-3 rounded-2xl bg-urgent p-4 text-urgent-foreground shadow-xl sm:right-8 sm:p-6">
            <p className="text-xs font-bold uppercase">{t.hero.startingAt}</p>
            <p className="mt-1 text-sm font-bold opacity-80 line-through">{price(FULL_PRICE_SINGLE)}</p>
            <p className="font-display text-3xl font-bold leading-none sm:text-4xl">{price(PRICE_SINGLE)}</p>
            <p className="mt-1 text-xs font-semibold">{t.hero.bannerNote}</p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">
            {t.hero.subtitle}
          </p>
          <Button asChild variant="purchase" size="purchase" className="mt-8">
            <a href="#offer">{t.hero.cta} — {price(PRICE_SINGLE)}</a>
          </Button>
        </div>
      </section>


      <section className="bg-muted px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-4xl gap-10 text-center md:grid-cols-3">
          {t.features.map(([title, copy], i) => {
            const Icon = featureIcons[i]!;
            return (
              <article key={title}>
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-background text-primary shadow-sm"><Icon className="size-6" /></span>
                <h2 className="mt-5 font-display text-xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-4 pt-16 text-center sm:pt-20">
        <p className="text-sm font-bold uppercase text-primary">{t.gallery.kicker}</p>
        <h2 className="mx-auto mt-3 max-w-2xl font-display text-2xl font-bold sm:text-4xl">{t.gallery.title}</h2>
      </section>

      <div className="pb-16 pt-8 sm:pb-20">
        <ImageMarquee images={galleryImages} />
      </div>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase text-primary">{t.stories.kicker}</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">{t.stories.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{t.stories.intro}</p>
          <ul className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            {t.stories.list.map((story, i) => (
              <li key={story} className="flex items-center gap-4 rounded-2xl border border-border bg-muted p-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">{i + 1}</span>
                <span className="font-display text-lg font-bold">{story}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 md:grid-cols-2 md:pb-24">
        <div>
          <p className="text-sm font-bold uppercase text-primary">{t.product.kicker}</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">{t.product.title}</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{t.product.copy}</p>
          <ul className="mt-7 space-y-4">
            {t.product.bullets.map((item) => (
              <li key={item} className="flex items-center gap-3 font-medium"><span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-success-soft text-success"><Check className="size-4" /></span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-3xl bg-sky-soft p-4 shadow-xl sm:p-7">
          <img src={banner.url} alt={t.product.imageAlt} className="aspect-square w-full rounded-2xl object-cover object-center" />
        </div>
      </section>

      <section className="border-y border-border bg-secondary px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase text-primary">{t.parents.kicker}</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">{t.parents.title}</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{t.parents.copy}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.parents.items.map(([title, copy], i) => {
              const Icon = parentIcons[i]!;
              return (
                <article key={title} className="rounded-2xl border border-border bg-background p-7 shadow-sm">
                  <Icon className="size-7 text-primary" />
                  <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 md:grid-cols-[0.85fr_1.15fr]">
            <div className="overflow-hidden rounded-3xl bg-sky-soft p-4 shadow-xl">
              <img src={banner.url} alt={t.discover.imageAlt} className="aspect-[4/5] w-full rounded-2xl object-cover object-[47%_center]" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase text-primary">{t.discover.kicker}</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">{t.discover.title}</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t.discover.copy}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.discover.items.map(([title, copy], i) => {
                  const Icon = discoverIcons[i]!;
                  return (
                    <div key={title} className="flex gap-4 rounded-xl bg-muted p-4">
                      <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                      <div><h3 className="font-display font-bold">{title}</h3><p className="mt-1 text-sm leading-5 text-muted-foreground">{copy}</p></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="bg-sky-soft px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-display text-2xl font-semibold text-primary">{t.offer.brand}</p>
          <p className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full bg-urgent px-4 py-2 text-xs font-extrabold uppercase text-urgent-foreground shadow-md">
            <Timer className="size-4" /> {t.offer.discount}
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{t.offer.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{t.offer.subtitle}</p>

          <div className="mt-9 grid items-stretch gap-6 text-left md:grid-cols-2">
            <article className="relative flex flex-col rounded-3xl border-2 border-urgent bg-background p-7 shadow-2xl sm:p-9">
              <p className="text-sm font-bold uppercase text-urgent">{t.offer.one.kicker}</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{t.offer.one.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.offer.one.copy}</p>
              <div className="mt-6 flex items-end gap-3">
                <p className="pb-1 text-sm font-bold text-muted-foreground"><span className="uppercase">{t.offer.was}</span> <span className="line-through">{price(FULL_PRICE_SINGLE)}</span></p>
                <span className="rounded-md bg-urgent-soft px-2 py-1 text-xs font-extrabold text-urgent">-60%</span>
              </div>
              <p className="mt-2 font-display text-5xl font-bold leading-none text-urgent"><span className="mr-2 align-middle text-xs font-extrabold uppercase">{t.offer.now}</span>{price(PRICE_SINGLE)}</p>
              <p className="mt-2 text-xs font-semibold uppercase text-muted-foreground">{t.offer.one.payment} {altPrice(PRICE_SINGLE)}</p>
              <ul className="mt-7 space-y-3 text-sm leading-6">
                {t.offer.one.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success"><Check className="size-3" /></span>{item}</li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-muted px-4 py-3 text-center text-xs font-semibold text-muted-foreground">{t.offer.one.note}</p>
              <div className="mt-auto pt-8">
                <Button asChild variant="purchase" size="purchase" className="w-full">
                   <a href={singleCheckoutHref} onClick={(e) => goToCheckout(e, CHECKOUT_SINGLE)}>{t.offer.one.cta} {price(PRICE_SINGLE)}</a>
                </Button>
              </div>
            </article>

            <article className="relative flex flex-col rounded-3xl border-2 border-urgent bg-background p-7 pb-9 shadow-xl sm:p-9">
              <span className="absolute -top-4 left-7 rounded-full bg-urgent px-4 py-1.5 text-xs font-bold uppercase text-urgent-foreground shadow-lg">{t.offer.two.badge}</span>
              <p className="text-sm font-bold uppercase text-urgent">{t.offer.two.kicker}</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{t.offer.two.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.offer.two.copy}</p>
              <div className="mt-6 flex items-end gap-3">
                <p className="pb-1 text-sm font-bold text-muted-foreground"><span className="uppercase">{t.offer.was}</span> <span className="line-through">{price(FULL_PRICE_BUNDLE)}</span></p>
                <span className="rounded-md bg-urgent-soft px-2 py-1 text-xs font-extrabold text-urgent">-60%</span>
              </div>
              <p className="mt-2 font-display text-5xl font-bold leading-none text-urgent"><span className="mr-2 align-middle text-xs font-extrabold uppercase">{t.offer.now}</span>{price(PRICE_BUNDLE)}</p>
              <ul className="mt-7 space-y-3 text-sm leading-6">
                {t.offer.two.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success"><Check className="size-3" /></span>{item}</li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-sky-soft px-4 py-3 text-center text-xs font-semibold text-primary">{t.offer.two.note}</p>
              <div className="mt-auto pt-8">
                <Button asChild variant="purchase" size="purchase" className="w-full">
                  <a href={bundleCheckoutHref} onClick={(e) => goToCheckout(e, CHECKOUT_BUNDLE, true)}>{t.offer.two.cta} {price(PRICE_BUNDLE)}</a>
                </Button>
              </div>
            </article>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-background p-6 shadow-sm">
            <p className="text-sm font-bold uppercase text-primary">{t.offer.inside.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.offer.inside.copy}</p>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1"><ShieldCheck className="size-4" /> {t.offer.trust[0]}</span>
            <span className="flex items-center gap-1"><Globe2 className="size-4" /> {t.offer.trust[1]}</span>
            <span className="flex items-center gap-1"><Sparkles className="size-4" /> {t.offer.trust[2]} {currencyName}</span>
          </div>
        </div>
      </section>

      <section className="bg-muted px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase text-primary">{t.steps.kicker}</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">{t.steps.title}</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {t.steps.items.map(([number, title, copy]) => (
              <article key={number}>
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">{number}</span>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
          <Button asChild variant="purchase" size="purchase" className="mt-12">
            <a href="#offer">{t.steps.cta} — {price(PRICE_SINGLE)}</a>
          </Button>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase text-primary">{t.faq.kicker}</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">{t.faq.title}</h2>
          </div>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {t.faq.items.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold">
                  {question}<ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="max-w-2xl pt-3 text-sm leading-6 text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="font-display text-2xl font-bold">{t.faq.closingTitle}</p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{t.faq.closingCopy}</p>
            <Button asChild variant="purchase" size="purchase" className="mt-7">
              <a href="#offer">{t.faq.closingCta}</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-footer px-6 py-12 text-center text-footer-foreground">
        <p className="font-display text-2xl font-bold">{t.footer.title}</p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 opacity-70">{t.footer.copy}</p>
      </footer>
    </main>
  );
}
