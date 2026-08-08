import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { projects } from "@/data/projects";

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-28 pb-16">
      <Link href="/work" className="text-sm text-zinc-500">
        ← Proyectos
      </Link>
      <ViewTransition name={`project-${project.slug}`}>
        <div
          className="mt-6 aspect-video w-full rounded-xl"
          style={{ backgroundColor: project.color }}
        />
      </ViewTransition>
      <h1 className="mt-6 text-2xl font-semibold tracking-tight">
        {project.title}
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
    </div>
  );
}
