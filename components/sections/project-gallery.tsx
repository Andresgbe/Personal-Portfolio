import { ShotFrame } from "@/components/ui/shot-frame";
import type { Shot } from "@/data/projects";

// Horizontal rail that runs off the right edge of the page — the tiles keep
// going past the gutter, so it reads as "there's more" without a control.
export function ProjectGallery({ shots }: { shots: Shot[] }) {
  return (
    <section className="mt-16">
      <div className="flex items-baseline justify-between gap-6 px-12 sm:px-20 lg:px-28">
        <h2 className="font-nav text-[11px] tracking-[0.16em] text-white/40 uppercase">
          Piezas del proyecto
        </h2>
        <p className="font-nav text-xs text-white/35">
          Deslizá para ver las {shots.length} →
        </p>
      </div>

      {/* scroll-px matches the gutter — otherwise mandatory snapping parks the
          first tile against the viewport edge and eats the left padding. */}
      <div
        role="region"
        aria-label="Galería del proyecto"
        tabIndex={0}
        className="mt-6 flex snap-x snap-mandatory scroll-px-12 gap-6 overflow-x-auto px-12 pb-2 [scrollbar-width:none] sm:scroll-px-20 sm:px-20 lg:scroll-px-28 lg:px-28 [&::-webkit-scrollbar]:hidden"
      >
        {shots.map((shot, index) => (
          <figure
            key={shot.caption}
            className="w-[620px] max-w-[85vw] shrink-0 snap-start"
          >
            <ShotFrame
              shot={shot}
              className="aspect-[16/10]"
              sizes="(max-width: 768px) 85vw, 620px"
            />
            <figcaption className="font-nav mt-3.5 text-[13px] text-white/45">
              <span className="text-[var(--hero-accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="ml-2">{shot.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
