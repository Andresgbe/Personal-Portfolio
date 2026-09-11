import Link from "next/link";
import { ViewTransition } from "react";
import type { SoftwareProject } from "@/data/projects";

// Image-led card: the flat color stands in for a screenshot until there is one.
export function ProjectCard({ project }: { project: SoftwareProject }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      {/* `default="none"` keeps the other cards on the page from each running
          their own crossfade on every navigation — only this card morphs into
          the detail hero. The explicit `share` is required alongside it: with
          `default="none"` and no `share`, the pair silently stops morphing. */}
      <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
        <div
          className="aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1"
          style={{ backgroundColor: project.color }}
        />
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
