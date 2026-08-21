import Link from "next/link";
import { ViewTransition } from "react";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {projects.map((project) => (
        <Link key={project.slug} href={`/work/${project.slug}`}>
          <ViewTransition name={`project-${project.slug}`}>
            <div
              className="aspect-square rounded-xl"
              style={{ backgroundColor: project.color }}
            />
          </ViewTransition>
          <p className="font-nav mt-2 text-sm font-medium text-white">
            {project.title}
          </p>
        </Link>
      ))}
    </div>
  );
}
