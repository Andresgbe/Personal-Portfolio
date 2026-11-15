import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { ProjectHero } from "@/components/sections/project-hero";
import { ArrowLink, BackLink } from "@/components/ui/buttons";
import { NextProjectBand } from "@/components/ui/next-project-band";
import { galleryFor, nextProject } from "@/data/projects";
import { getProjectBySlug, getSoftwareProjects } from "@/lib/queries/projects";

const META_LABEL = "font-mono text-[11px] tracking-[0.16em] text-ink/40 uppercase";

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);

  if (!project || project.kind === "automation") notFound();

  const siblings = await getSoftwareProjects();

  return (
    <main className="bg-[var(--section-bg)]">
      <div className="mx-auto w-full max-w-4xl px-6 pt-40 pb-20">
        <div className="flex items-center justify-between">
          <BackLink href="/projects">Volver a proyectos</BackLink>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-xs font-semibold text-ink transition-all hover:border-primary hover:bg-primary hover:text-bg"
            >
              <span>Visitar sitio en vivo</span>
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>

        <div className="mt-6">
          <ProjectHero project={project} />
        </div>

        <div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-baseline">
          <div>
            <h1 className="font-display text-[clamp(1.875rem,5vw,3rem)] leading-[1.05] font-medium tracking-[-0.02em] text-ink">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/65 sm:text-base">
              {project.description}
            </p>
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group mt-2 inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-bg shadow-[0_10px_24px_-8px_rgba(232,112,58,0.55)] transition-transform hover:-translate-y-0.5 sm:mt-0"
            >
              <span>Ver en producción</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-ink/10 py-6 sm:grid-cols-3">
          <div>
            <dt className={META_LABEL}>Año</dt>
            <dd className="mt-2 text-sm text-ink/85">{project.year}</dd>
          </div>
          <div>
            <dt className={META_LABEL}>Rol</dt>
            <dd className="mt-2 text-sm text-ink/85">{project.role}</dd>
          </div>
          <div>
            <dt className={META_LABEL}>Stack</dt>
            <dd className="mt-2 text-sm text-ink/85">
              {project.stack.join(" · ")}
            </dd>
          </div>
          {project.url && (
            <div>
              <dt className={META_LABEL}>Sitio web</dt>
              <dd className="mt-2">
                <ArrowLink href={project.url} external>
                  {project.url.replace(/^https?:\/\//, "")}
                </ArrowLink>
              </dd>
            </div>
          )}
        </dl>

        <ProjectGallery shots={galleryFor(project)} />
        <NextProjectBand project={nextProject(project, siblings)} />
      </div>
    </main>
  );
}
