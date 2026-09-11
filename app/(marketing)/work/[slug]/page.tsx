import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { ProjectHero } from "@/components/sections/project-hero";
import { ArrowLink, BackLink } from "@/components/ui/buttons";
import { NextProjectBand } from "@/components/ui/next-project-band";
import { galleryFor, nextProject } from "@/data/projects";
import { getAutomations, getProjectBySlug, getSoftwareProjects } from "@/lib/queries/projects";

const META_LABEL = "font-nav text-[11px] tracking-[0.16em] text-white/40 uppercase";

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const siblings =
    project.kind === "software" ? await getSoftwareProjects() : await getAutomations();

  return (
    <main className="bg-[var(--section-bg)]">
      {/* One narrow column for the whole page — the detail view is something
          you read, so it stays tighter than the grid on /work. Top padding
          matches PageShell so the content clears the floating header. */}
      <div className="mx-auto w-full max-w-4xl px-6 pt-40 pb-20">
        <BackLink href="/work">Proyectos</BackLink>

        <div className="mt-6">
          <ProjectHero project={project} />
        </div>

        <div className="mt-7">
          <h1 className="font-serif text-[clamp(1.875rem,5vw,3rem)] leading-[1.05] font-medium tracking-[-0.02em] text-white">
            {project.title}
          </h1>
          <p className="font-nav mt-4 max-w-2xl text-[15px] leading-relaxed text-white/65 sm:text-base">
            {project.description}
          </p>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-white/10 py-6 sm:grid-cols-3">
          <div>
            <dt className={META_LABEL}>Año</dt>
            <dd className="font-nav mt-2 text-sm text-white/85">{project.year}</dd>
          </div>
          <div>
            <dt className={META_LABEL}>Rol</dt>
            <dd className="font-nav mt-2 text-sm text-white/85">{project.role}</dd>
          </div>
          <div>
            <dt className={META_LABEL}>Stack</dt>
            <dd className="font-nav mt-2 text-sm text-white/85">
              {project.stack.join(" · ")}
            </dd>
          </div>
          {project.url && (
            <div>
              <dt className={META_LABEL}>Sitio</dt>
              <dd className="mt-2">
                <ArrowLink href={project.url} external>
                  Ver en vivo
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
