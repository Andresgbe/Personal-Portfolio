import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { ProjectHero } from "@/components/sections/project-hero";
import { NextProjectBand } from "@/components/ui/next-project-band";
import { StatusPill } from "@/components/ui/status-indicator";
import { galleryFor, nextProject } from "@/data/projects";
import { getAutomations, getProjectBySlug, getSoftwareProjects } from "@/lib/queries/projects";

// Same gutters as the header, so the title lines up with "Andrés Gil".
const GUTTER = "px-12 sm:px-20 lg:px-28";

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const siblings =
    project.kind === "software" ? await getSoftwareProjects() : await getAutomations();

  return (
    <main className="bg-[var(--section-bg)]">
      <ProjectHero project={project} />

      {/* Título montado sobre el borde inferior del hero. */}
      <div className={`relative z-20 -mt-24 sm:-mt-33 ${GUTTER}`}>
        <StatusPill
          status={project.status}
          suffix={project.year}
          className="bg-[#050810]/50 backdrop-blur-sm"
        />
        <h1 className="font-serif mt-5 text-5xl leading-[0.98] font-medium tracking-[-0.03em] text-white sm:text-7xl lg:text-[88px]">
          {project.title}
        </h1>
      </div>

      <div className={`mt-12 ${GUTTER}`}>
        <div className="flex flex-col gap-8 border-y border-white/10 py-7 lg:flex-row lg:items-start lg:gap-16">
          <p className="font-nav max-w-xl flex-1 text-[17px] leading-relaxed text-white/70">
            {project.description}
          </p>
          <dl className="font-nav flex flex-wrap gap-x-14 gap-y-6">
            <div>
              <dt className="text-[11px] tracking-[0.16em] text-white/40 uppercase">
                Rol
              </dt>
              <dd className="mt-2 text-[15px] text-white/85">{project.role}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.16em] text-white/40 uppercase">
                Stack
              </dt>
              <dd className="mt-2 text-[15px] text-white/85">
                {project.stack.join(" · ")}
              </dd>
            </div>
            {project.url && (
              <div>
                <dt className="text-[11px] tracking-[0.16em] text-white/40 uppercase">
                  Sitio
                </dt>
                <dd className="mt-2 text-[15px]">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--hero-accent)] transition-colors hover:text-white"
                  >
                    Ver en vivo ↗
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      <ProjectGallery shots={galleryFor(project)} />
      <NextProjectBand project={nextProject(project, siblings)} />
    </main>
  );
}
