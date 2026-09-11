import { ViewTransition } from "react";
import { ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";

// The project's cover. A contained card rather than a full-bleed banner, so
// the page reads at a calmer scale — and deliberately the same plain colour
// block and radius as the card on /work, which makes the morph between the
// two read as one object moving rather than two things swapping.
export function ProjectHero({ project }: { project: Project }) {
  return (
    <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
      <div
        className="relative flex aspect-[3/2] max-h-[380px] w-full items-center justify-center overflow-hidden rounded-2xl shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)] sm:aspect-[16/9]"
        style={{ backgroundColor: project.color }}
      >
        <ImageIcon
          className="size-10 text-white/35"
          strokeWidth={1}
          aria-hidden="true"
        />
      </div>
    </ViewTransition>
  );
}
