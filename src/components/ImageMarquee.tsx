type MarqueeImage = { src: string; alt: string };

/**
 * Esteira contínua de imagens, rolando da direita para a esquerda, em loop
 * infinito via CSS puro (sem dependência externa). Full-bleed (ocupa a
 * largura inteira da tela, ignorando o container), com fade nas bordas e
 * pausa ao passar o mouse. Respeita prefers-reduced-motion automaticamente
 * (regra global já definida em styles.css).
 */
export function ImageMarquee({ images }: { images: MarqueeImage[] }) {
  const track = [...images, ...images];

  return (
    <div className="marquee-pause relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-28" />
      <div className="animate-marquee-rtl flex w-max items-center gap-4 py-2 sm:gap-6">
        {track.map((img, i) => (
          <img
            key={`${img.src}-${i}`}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            draggable={false}
            className="h-32 w-auto shrink-0 rounded-2xl object-cover shadow-xl min-[420px]:h-36 sm:h-52 lg:h-60"
          />
        ))}
      </div>
    </div>
  );
}
