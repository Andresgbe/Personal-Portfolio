import Link from "next/link";
import { ViewTransition } from "react";
import { ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";

// Scrim over the hero image: dark at the top so the header stays readable,
// clear through the middle, settling into the page background at the bottom.
const SCRIM =
  "linear-gradient(180deg, rgba(5,8,16,0.75) 0%, rgba(5,8,16,0.15) 32%, rgba(13,27,46,0.55) 78%, var(--section-bg) 100%)";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative h-[70vh] max-h-[640px] min-h-[26rem] overflow-hidden">
      <ViewTransition name={`project-${project.slug}`}>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: project.color }}
        >
          <ImageIcon
            className="size-14 text-white/35"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>
      </ViewTransition>

      <div className="absolute inset-0" style={{ background: SCRIM }} />

      <Link
        href="/work"
        className="font-nav absolute top-28 left-12 z-10 text-sm text-white/75 transition-colors hover:text-white sm:left-20 lg:left-28"
      >
        ← Proyectos
      </Link>
    </section>
  );
}
