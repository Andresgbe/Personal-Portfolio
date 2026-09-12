import Image from "next/image";
import { ViewTransition } from "react";
import { ImageIcon } from "lucide-react";
import { coverShot, type Project } from "@/data/projects";

// The project's cover: its first real screenshot, or the flat colour while it
// has none. A contained card rather than a full-bleed banner, so the page
// reads at a calmer scale — and deliberately the same radius as the card on
// /projects, which makes the morph between the two read as one object moving.
export function ProjectHero({ project }: { project: Project }) {
  const cover = coverShot(project);

  return (
    <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
      <div
        className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-2xl shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]"
        style={{ backgroundColor: project.color }}
      >
        {cover?.src ? (
          <Image
            src={cover.src}
            alt={cover.caption}
            fill
            // The column is 896px at its widest; full width below that.
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            priority
          />
        ) : (
          <ImageIcon
            className="size-10 text-white/35"
            strokeWidth={1}
            aria-hidden="true"
          />
        )}
      </div>
    </ViewTransition>
  );
}
