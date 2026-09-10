import { ProjectCard } from "@/components/ui/project-card";
import type { SoftwareProject } from "@/data/projects";

export function ProjectGrid({ projects }: { projects: SoftwareProject[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
