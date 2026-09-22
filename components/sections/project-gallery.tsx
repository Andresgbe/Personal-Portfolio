import { ShotFrame } from "@/components/ui/shot-frame";
import type { Shot } from "@/data/projects";

// A contained two-column grid rather than a full-bleed rail: smaller frames,
// no horizontal scrolling to explain, and it collapses to one column on
// narrow screens on its own.
export function ProjectGallery({ shots }: { shots: Shot[] }) {
  if (shots.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="font-mono text-[11px] tracking-[0.16em] text-ink/40 uppercase">
        Piezas del proyecto
      </h2>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {shots.map((shot, index) => (
          <figure key={shot.caption}>
            <ShotFrame
              shot={shot}
              className="aspect-[16/9]"
              sizes="(max-width: 640px) 100vw, 420px"
            />
            <figcaption className="font-mono mt-2.5 text-xs text-ink/45">
              <span className="text-secondary">
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
