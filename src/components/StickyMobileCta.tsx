import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Barra de compra fixa no rodapé, só no mobile. Aparece depois que a pessoa
 * rola um pouco (não compete com o hero) e some perto da seção de oferta
 * real (não duplica o CTA bem na hora em que a pessoa já está decidindo).
 */
export function StickyMobileCta({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const offerEl = document.getElementById("offer");

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const reachedOffer = offerEl ? offerEl.getBoundingClientRect().top < window.innerHeight * 0.6 : false;
      setVisible(pastHero && !reachedOffer);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-2xl backdrop-blur transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <Button asChild variant="purchase" size="purchase" className="w-full">
        <a href={href} onClick={onClick}>{label}</a>
      </Button>
    </div>
  );
}
