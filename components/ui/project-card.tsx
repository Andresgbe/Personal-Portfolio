import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowUpRight, Globe, Layers } from "lucide-react";
import { coverShot, type SoftwareProject } from "@/data/projects";

export function ProjectCard({ project }: { project: SoftwareProject }) {
  const cover = coverShot(project);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-2xl border border-ink/10 bg-surface/75 p-3.5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-surface hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.65)]"
    >
      <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
        <div
          className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-[0_16px_32px_-16px_rgba(0,0,0,0.5)]"
          style={{ backgroundColor: project.color }}
        >
          {cover?.src ? (
            <Image
              src={cover.src}
              alt={cover.caption}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-black/25 via-black/40 to-black/70 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 rounded-full bg-black/35 px-2.5 py-1 backdrop-blur-md">
                  <span className="size-2 rounded-full bg-white/60" />
                  <span className="size-2 rounded-full bg-white/35" />
                  <span className="font-mono ml-1 text-[10px] text-white/80">
                    {project.slug}.app
                  </span>
                </div>
                <span className="flex size-8 items-center justify-center rounded-full bg-black/35 text-white/90 backdrop-blur-md transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>

              <div className="rounded-lg border border-white/15 bg-black/35 p-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Layers className="size-3.5 text-white/75" />
                  <span className="font-mono text-[10px] tracking-wider text-white/80 uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="mt-2 flex gap-1.5">
                  <span className="h-1.5 w-12 rounded-full bg-white/50" />
                  <span className="h-1.5 w-8 rounded-full bg-white/25" />
                </div>
              </div>
            </div>
          )}

          {/* Badge si tiene web en vivo activa */}
          {project.url && (
            <div className="absolute top-3 right-3 z-10">
              <span className="font-mono inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-bg/90 px-2.5 py-1 text-[10.5px] font-semibold text-emerald-300 shadow-md backdrop-blur-md">
                <Globe className="size-3 animate-pulse" />
                Web en vivo
              </span>
            </div>
          )}
        </div>
      </ViewTransition>

      <div className="mt-4 flex flex-1 flex-col justify-between px-1 pb-1">
        <div>
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-[11px] tracking-wider text-secondary uppercase">
              {project.category} · {project.year}
            </p>
            <span className="font-mono inline-flex items-center gap-1 text-xs text-ink/50 transition-colors group-hover:text-primary">
              Ver detalles
              <ArrowUpRight className="size-3.5" />
            </span>
          </div>

          <h3 className="font-display mt-1.5 text-xl font-medium text-ink transition-colors group-hover:text-primary">
            {project.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/65">
            {project.description}
          </p>
        </div>

        <ul className="font-mono mt-4 flex flex-wrap gap-1.5 border-t border-ink/8 pt-3">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-ink/10 bg-bg/60 px-2 py-0.5 text-[11px] text-ink/70"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
