import Link from "next/link";
import type { Project } from "@/data/projects";

// Closes the page with the obvious next move — a contained card, so it sits
// in the same column as everything above it instead of spanning the viewport.
export function NextProjectBand({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group mt-12 flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-ink/[0.03] p-4 transition-colors hover:border-ink/20 hover:bg-ink/[0.06] sm:p-5"
    >
      <div className="flex min-w-0 items-center gap-4">
        <div
          className="size-11 shrink-0 rounded-xl sm:size-12"
          style={{ backgroundColor: project.color }}
        />
        <div className="min-w-0">
          <p className="font-mono text-[11px] tracking-[0.16em] text-ink/40 uppercase">
            Siguiente proyecto
          </p>
          <p className="font-display mt-1 truncate text-lg text-ink sm:text-xl">
            {project.title}
          </p>
        </div>
      </div>
      <span
        aria-hidden="true"
        className="shrink-0 text-xl text-primary transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
