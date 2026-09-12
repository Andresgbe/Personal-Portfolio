import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { coverShot, type SoftwareProject } from "@/data/projects";

// Image-led card: shows the project's first screenshot, and the flat colour
// only while it has none. Matching the hero's cover on the detail page is what
// makes the morph between them read as one object rather than a swap.
export function ProjectCard({ project }: { project: SoftwareProject }) {
  const cover = coverShot(project);

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      {/* `default="none"` keeps the other cards on the page from each running
          their own crossfade on every navigation — only this card morphs into
          the detail hero. The explicit `share` is required alongside it: with
          `default="none"` and no `share`, the pair silently stops morphing. */}
      <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
        {/* 16:9 — the same ratio the screenshots are captured at, so a cover
            fills the frame exactly: nothing cropped off the sides (which would
            chop a site's logo and nav) and no letterbox bands. Keep captures
            at 1440x810 and this stays true. */}
        <div
          className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1"
          style={{ backgroundColor: project.color }}
        >
          {cover?.src && (
            <Image
              src={cover.src}
              alt={cover.caption}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          )}
        </div>
      </ViewTransition>
      <h3 className="font-serif mt-3.5 text-lg font-medium text-white">
        {project.title}
      </h3>
      <p className="font-nav mt-1 text-[13px] text-white/55">
        {project.category} · {project.year}
      </p>
      <p className="font-nav mt-1.5 text-[13px] leading-relaxed text-white/45">
        {project.description}
      </p>
    </Link>
  );
}
