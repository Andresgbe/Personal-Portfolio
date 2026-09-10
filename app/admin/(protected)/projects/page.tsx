import Link from "next/link";
import { SortableAdminList } from "@/components/admin/sortable-list";
import { createClient } from "@/lib/supabase/server";
import { deleteProject, reorderProjects } from "./actions";

type ProjectRow = {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: "in-progress" | "done";
  color: string;
};

export default async function ProjectsAdminPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("software_projects")
    .select("id, slug, title, category, status, color")
    .order("sort_order", { ascending: true });

  const projects = (data ?? []) as ProjectRow[];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-3xl font-medium text-white">Proyectos</h1>
        <Link
          href="/admin/projects/new"
          className="font-nav rounded-full bg-[var(--hero-accent)] px-4 py-2 text-sm font-medium text-[#0a1420]"
        >
          Nuevo proyecto
        </Link>
      </div>

      <div className="mt-8">
        <SortableAdminList
          onDelete={deleteProject}
          onReorder={reorderProjects}
          emptyLabel="Todavía no hay proyectos."
          confirmDeleteLabel="¿Eliminar este proyecto? También se borran sus imágenes."
          items={projects.map((project) => ({
            id: project.id,
            editHref: `/admin/projects/${project.id}`,
            content: (
              <div className="flex items-center gap-3">
                <div
                  className="size-9 shrink-0 rounded-md"
                  style={{ backgroundColor: project.color }}
                />
                <div className="min-w-0">
                  <p className="font-nav truncate text-sm font-medium text-white">
                    {project.title}
                  </p>
                  <p className="font-nav truncate text-xs text-white/45">
                    {project.category} ·{" "}
                    {project.status === "in-progress" ? "En curso" : "Finalizado"}
                  </p>
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
}
