import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Check, Globe2, Heart, Palette, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import bannerAsset from "@/assets/bible-animals-banner.png.asset.json";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bible Animals Coloring Book | My Little Bible Adventures" },
      { name: "description", content: "Five beloved Bible stories to color, learn, and explore for only $5.90 or €5.90." },
      { property: "og:title", content: "Bible Animals | My Little Bible Adventures" },
      { property: "og:description", content: "A joyful way to help little hearts discover God's Word through coloring and story." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="px-5 pb-8 pt-10 text-center sm:px-6 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-soft px-4 py-2 text-xs font-bold uppercase text-primary">
          <Sparkles className="size-4" /> A little adventure with a big purpose
        </span>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
          Help Your Little One <span className="text-primary">Fall in Love With Bible Stories</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">
          A joyful coloring adventure that turns five beloved Bible stories into meaningful moments of creativity, curiosity, and faith.
        </p>
        <Button asChild variant="sunshine" size="purchase" className="mt-8">
          <a href="#offer">Get Bible Animals — $5.90</a>
        </Button>
      </header>

      <section className="mx-auto mb-20 max-w-6xl px-4 sm:px-6">
        <div className="relative">
          <img src={bannerAsset.url} alt="My Little Bible Adventures Bible Animals book collection" className="aspect-[3/2] w-full rounded-3xl object-cover shadow-2xl" />
          <div className="absolute -bottom-7 right-3 rotate-3 rounded-2xl bg-accent p-4 text-accent-foreground shadow-xl sm:right-8 sm:p-6">
            <p className="text-xs font-bold uppercase">One special price</p>
            <p className="font-display text-3xl font-bold leading-none sm:text-4xl">$5.90</p>
            <p className="mt-1 text-xs font-semibold">or €5.90</p>
          </div>
        </div>
      </section>

      <section className="bg-muted px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-4xl gap-10 text-center md:grid-cols-3">
          {[
            [BookOpen, "5 Bible Stories", "One inviting book filled with stories made for children to color, learn, and explore."],
            [Palette, "Creative Faith Time", "Give little hands something meaningful to do while their hearts discover God's Word."],
            [Heart, "Made for Togetherness", "Create a simple moment to slow down, connect, and talk about faith as a family."],
          ].map(([Icon, title, copy]) => {
            const FeatureIcon = Icon as typeof BookOpen;
            return <article key={title as string}>
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-background text-primary shadow-sm"><FeatureIcon className="size-6" /></span>
              <h2 className="mt-5 font-display text-xl font-bold">{title as string}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy as string}</p>
            </article>;
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-bold uppercase text-primary">Color. Learn. Explore.</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">A screen-free activity with a story that matters.</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Bright, friendly illustrations invite children into the world of Bible animals. Each page creates an easy opening for questions, imagination, and conversations about God.
          </p>
          <ul className="mt-7 space-y-4">
            {["Five Bible stories in one book", "Child-friendly coloring illustrations", "A thoughtful gift for a little believer"].map((item) => (
              <li key={item} className="flex items-center gap-3 font-medium"><span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-success-soft text-success"><Check className="size-4" /></span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-3xl bg-sky-soft p-4 shadow-xl sm:p-7">
          <img src={bannerAsset.url} alt="Bible Animals book with colorful Bible story books and pencils" className="aspect-square w-full rounded-2xl object-cover object-center" />
        </div>
      </section>

      <section id="offer" className="bg-sky-soft px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl font-semibold text-primary">My Little Bible Adventures</p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Bring Bible Animals home today.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">One beautiful book. Five stories. Countless little moments to color, learn, and grow together.</p>
          <div className="mx-auto mt-9 max-w-md rounded-3xl bg-background p-7 shadow-xl sm:p-9">
            <p className="text-sm font-bold uppercase text-primary">Choose your currency</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border-2 border-primary bg-sky-soft px-4 py-3 font-display text-2xl font-bold">$5.90 <span className="block font-body text-xs font-semibold text-muted-foreground">USD</span></div>
              <div className="rounded-xl border border-border px-4 py-3 font-display text-2xl font-bold">€5.90 <span className="block font-body text-xs font-semibold text-muted-foreground">EUR</span></div>
            </div>
            <Button variant="sunshine" size="purchase" className="mt-5 w-full">Secure My Copy</Button>
            <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
              <span className="flex items-center gap-1"><ShieldCheck className="size-4" /> Secure purchase</span>
              <span className="flex items-center gap-1"><Globe2 className="size-4" /> USD & EUR</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-footer px-6 py-12 text-center text-footer-foreground">
        <p className="font-display text-2xl font-bold">Small hands. Big faith. Beautiful memories.</p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 opacity-70">My Little Bible Adventures makes story time a chance to create, connect, and explore God's Word together.</p>
      </footer>
    </main>
  );
}
