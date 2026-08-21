import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { PageShell } from "@/components/layout/page-shell";
import { projects } from "@/data/projects";

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <PageShell>
      <Link href="/work" className="font-nav text-sm text-white/60">
        ← Proyectos
      </Link>
      <ViewTransition name={`project-${project.slug}`}>
        <div
          className="mt-6 aspect-video w-full rounded-xl"
          style={{ backgroundColor: project.color }}
        />
      </ViewTransition>
      <h1 className="font-serif mt-6 text-2xl font-medium tracking-tight text-white">
        {project.title}
      </h1>
      <p className="font-nav mt-2 text-white/70">{project.description}</p>
    </PageShell>
  );
}
