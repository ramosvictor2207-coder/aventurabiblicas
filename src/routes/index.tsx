import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookHeart, BookOpen, Check, ChevronDown, Church, Clock3, Gift, Globe2, Heart, Palette, ShieldCheck, Sparkles, Tag, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import bannerAsset from "@/assets/bible-animals-banner.png.asset.json";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bible Animals Coloring Book | My Little Bible Adventures" },
      { name: "description", content: "One Bible Animals booklet for $7.90, or the five-book collection with bonus printables for $15.80. Pay in USD or EUR." },
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
  const [currency, setCurrency] = useState<"usd" | "eur">("usd");
  const price = (usd: number, eur: number) => (currency === "usd" ? `$${usd.toFixed(2)}` : `€${eur.toFixed(2)}`);
  const altPrice = (usd: number, eur: number) => (currency === "usd" ? `€${eur.toFixed(2)}` : `$${usd.toFixed(2)}`);
  const currencyName = currency === "usd" ? "USD" : "EUR";

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
          <a href="#offer">Get Bible Animals — From $7.90</a>
        </Button>
      </header>

      <section className="mx-auto mb-20 max-w-6xl px-4 sm:px-6">
        <div className="relative">
          <img src={bannerAsset.url} alt="My Little Bible Adventures Bible Animals book collection" className="aspect-[3/2] w-full rounded-3xl object-cover shadow-2xl" />
          <div className="absolute -bottom-7 right-3 rotate-3 rounded-2xl bg-accent p-4 text-accent-foreground shadow-xl sm:right-8 sm:p-6">
            <p className="text-xs font-bold uppercase">Starting at</p>
            <p className="font-display text-3xl font-bold leading-none sm:text-4xl">$7.90</p>
            <p className="mt-1 text-xs font-semibold">or €7.90 · 5 books for $15.80</p>
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

      <section className="border-y border-border bg-secondary px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase text-primary">For parents who want something better</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">Entertainment can be fun, creative, and rooted in faith.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Finding an activity that holds your child’s attention without losing sight of your family’s values can be difficult. Bible Animals gives you an easy, meaningful option for quiet moments at home.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              [Clock3, "A calmer kind of play", "Offer a colorful activity for afternoons, weekends, travel, or moments when you want less screen time."],
              [Users, "Time that brings you closer", "Sit together, color the pages, and let each story open a natural conversation about faith."],
              [Church, "Values you feel good about", "Choose entertainment inspired by familiar Bible stories and created for growing hearts."],
            ].map(([Icon, title, copy]) => {
              const BenefitIcon = Icon as typeof Clock3;
              return <article key={title as string} className="rounded-2xl border border-border bg-background p-7 shadow-sm">
                <BenefitIcon className="size-7 text-primary" />
                <h3 className="mt-5 font-display text-xl font-bold">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy as string}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 md:grid-cols-[0.85fr_1.15fr]">
            <div className="overflow-hidden rounded-3xl bg-sky-soft p-4 shadow-xl">
              <img src={bannerAsset.url} alt="Colorful My Little Bible Adventures collection for Christian family time" className="aspect-[4/5] w-full rounded-2xl object-cover object-[47%_center]" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase text-primary">What your child will discover</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">Five little adventures in one joyful book.</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Friendly animals, expressive characters, and simple coloring scenes make each story feel welcoming. Your child can explore the pages at their own pace while you help connect the pictures to the message behind them.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  [BookOpen, "Story-led pages", "Pictures inspired by beloved moments from the Bible."],
                  [Palette, "Coloring fun", "Bold, inviting scenes made to spark imagination."],
                  [BookHeart, "Faith conversations", "A gentle starting point for talking about God together."],
                  [Gift, "Easy to share", "A thoughtful choice for your own child or a Christian family."],
                ].map(([Icon, title, copy]) => {
                  const DetailIcon = Icon as typeof BookOpen;
                  return <div key={title as string} className="flex gap-4 rounded-xl bg-muted p-4">
                    <DetailIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div><h3 className="font-display font-bold">{title as string}</h3><p className="mt-1 text-sm leading-5 text-muted-foreground">{copy as string}</p></div>
                  </div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase text-primary">Made for real family moments</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">One book, many ways to enjoy it together.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              ["01", "Choose an adventure", "Let your child pick the story or animal that catches their attention first."],
              ["02", "Color side by side", "Slow down together and bring each scene to life with their favorite colors."],
              ["03", "Talk about the story", "Ask what they noticed, what they felt, and what the story can teach your family."],
            ].map(([number, title, copy]) => (
              <article key={number}>
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">{number}</span>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
          <Button asChild variant="sunshine" size="purchase" className="mt-12">
            <a href="#offer">Create Our Faith-Filled Moment — From $7.90</a>
          </Button>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase text-primary">Questions from parents</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Everything you may want to know.</h2>
          </div>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {[
              ["Who is Bible Animals for?", "It is made for parents, grandparents, caregivers, and Christian families who want a creative, faith-centered activity to enjoy with a child."],
              ["What does the book include?", "Bible Animals brings together five Bible stories with child-friendly illustrations to color, learn from, and explore together."],
              ["Does my child need to read independently?", "No. The experience is designed to be shared, so an adult can guide the story and conversation while the child enjoys the illustrations and coloring."],
              ["When can we use it?", "It can fit naturally into quiet afternoons, family time, Sunday activities, travel, or any moment when you want purposeful entertainment away from a screen."],
              ["Is this a replacement for a children’s Bible?", "No. It is a creative companion for family faith time, designed to spark curiosity and encourage conversations about Bible stories."],
              ["Which currencies are accepted?", "You can pay in US dollars or euros at the same simple price: $7.90 or €7.90 for one booklet, $15.80 or €15.80 for the five-book collection."],
              ["What is the difference between the two offers?", "For $7.90 you receive one booklet with many pages to color, learn, and explore. For $15.80 you receive five booklets plus the bonus printables — five for the price of two, so you save $23.70."],
              ["Why do families choose the five-book collection?", "One booklet per child means no sharing battles, and there is always one ready to give to a cousin, a grandchild, or a family at your church. It works well for Sunday school, travel days, and grandparents' houses."],
            ].map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold">
                  {question}<ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="max-w-2xl pt-3 text-sm leading-6 text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="offer" className="bg-sky-soft px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-display text-2xl font-semibold text-primary">My Little Bible Adventures</p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Bring Bible Animals home today.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Start with one little book, or bring home the whole collection and give every child a story of their own.</p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full bg-background p-1 shadow-sm" role="group" aria-label="Choose your currency">
            {([["usd", "USD"], ["eur", "EUR"]] as const).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setCurrency(value)}
                aria-pressed={currency === value}
                className={cn(
                  "cursor-pointer rounded-full px-5 py-2 text-xs font-bold uppercase transition-colors",
                  currency === value ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-9 grid items-stretch gap-6 text-left md:grid-cols-2">
            <article className="flex flex-col rounded-3xl bg-background p-7 shadow-xl sm:p-9">
              <p className="text-sm font-bold uppercase text-primary">Option one</p>
              <h3 className="mt-2 font-display text-2xl font-bold">One Little Adventure</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">One booklet with many pages to color, learn, and explore — a gentle way to begin.</p>
              <p className="mt-6 font-display text-5xl font-bold leading-none">{price(7.9, 7.9)}</p>
              <p className="mt-2 text-xs font-semibold uppercase text-muted-foreground">One-time payment · also {altPrice(7.9, 7.9)}</p>
              <ul className="mt-7 space-y-3 text-sm leading-6">
                {["1 Bible Animals booklet", "Many coloring pages inside", "Five stories to read together", "Perfect for trying it at home"].map((item) => (
                  <li key={item} className="flex items-start gap-3"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success"><Check className="size-3" /></span>{item}</li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button variant="outline" size="purchase" className="w-full">Get 1 Book — {price(7.9, 7.9)}</Button>
              </div>
            </article>

            <article className="relative flex flex-col rounded-3xl border-2 border-primary bg-background p-7 pb-9 shadow-2xl sm:p-9">
              <span className="absolute -top-4 left-7 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase text-accent-foreground shadow-lg">Best value</span>
              <p className="text-sm font-bold uppercase text-primary">Option two</p>
              <h3 className="mt-2 font-display text-2xl font-bold">The Five-Book Collection</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Five booklets plus bonus printables — one for each child, one to share, one to keep.</p>
              <p className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="font-display text-5xl font-bold leading-none">{price(15.8, 15.8)}</span>
                <span className="pb-1.5 text-base font-semibold text-muted-foreground line-through">{price(39.5, 39.5)}</span>
              </p>
              <p className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-success-soft px-3 py-1.5 text-xs font-bold uppercase text-success"><Tag className="size-3.5" /> 5 for the price of 2 · Save {price(23.7, 23.7)}</p>
              <ul className="mt-7 space-y-3 text-sm leading-6">
                <li className="flex items-start gap-3"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success"><Check className="size-3" /></span>5 complete booklets, each with many pages</li>
                <li className="flex items-start gap-3"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success"><Check className="size-3" /></span>Everything in the single book, five times over</li>
                <li className="flex items-start gap-3"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/25 text-accent"><Gift className="size-3" /></span>Bonus: printable story-time certificates</li>
                <li className="flex items-start gap-3"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/25 text-accent"><Gift className="size-3" /></span>Bonus: family conversation guide for every story</li>
                <li className="flex items-start gap-3"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/25 text-accent"><Gift className="size-3" /></span>Bonus: extra coloring sheets and printable bookmarks</li>
              </ul>
              <p className="mt-5 rounded-xl bg-sky-soft px-4 py-3 text-center text-xs font-semibold text-primary">Most chosen by families with more than one child, grandparents, and Sunday school teachers.</p>
              <div className="mt-auto pt-8">
                <Button variant="sunshine" size="purchase" className="w-full">Get 5 Books + Bonuses — {price(15.8, 15.8)}</Button>
              </div>
            </article>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-background p-6 shadow-sm">
            <p className="text-sm font-bold uppercase text-primary">Inside every booklet</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">A Bible story to read together, many pages to color, a verse to remember, and a question to talk about — enough for weeks of small, faith-filled moments.</p>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1"><ShieldCheck className="size-4" /> Secure purchase</span>
            <span className="flex items-center gap-1"><Globe2 className="size-4" /> Pay in USD &amp; EUR</span>
            <span className="flex items-center gap-1"><Sparkles className="size-4" /> Showing {currencyName} prices</span>
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
