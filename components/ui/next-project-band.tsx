import Link from "next/link";
import type { Project } from "@/data/projects";

// Edge-to-edge band closing the page — the only thing left to do is keep going.
export function NextProjectBand({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group mt-22 block border-t border-white/10 bg-white/[0.02] transition-colors hover:bg-white/5"
    >
      <div className="flex items-center justify-between gap-8 px-12 py-11 sm:px-20 lg:px-28">
        <div className="flex items-center gap-6">
          <div
            className="size-19 shrink-0 rounded-2xl"
            style={{ backgroundColor: project.color }}
          />
          <div>
            <p className="font-nav text-[11px] tracking-[0.16em] text-white/40 uppercase">
              Siguiente proyecto
            </p>
            <p className="font-serif mt-2.5 text-3xl leading-none text-white sm:text-4xl">
              {project.title}
            </p>
          </div>
        </div>
        <span
          aria-hidden="true"
          className="text-4xl text-[var(--hero-accent)] transition-transform duration-300 group-hover:translate-x-2"
        >
          →
        </span>
      </div>
    </Link>
  );
}
