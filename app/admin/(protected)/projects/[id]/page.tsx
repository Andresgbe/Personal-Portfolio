import { notFound } from "next/navigation";
import { GalleryManager } from "@/components/admin/gallery-manager";
import { ProjectForm } from "@/components/admin/project-form";
import { createClient } from "@/lib/supabase/server";

type ProjectRow = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  role: string;
  stack: string[];
  status: "in-progress" | "done";
  color: string;
  url: string | null;
};

type ShotRow = {
  id: string;
  caption: string;
  color: string;
  storage_path: string | null;
};

const GALLERY_BUCKET = "project-gallery";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: project } = await supabase
    .from("software_projects")
    .select("id, slug, title, category, year, description, role, stack, status, color, url")
    .eq("id", id)
    .maybeSingle();

  if (!project) notFound();

  const { data: shotRows } = await supabase
    .from("project_gallery_shots")
    .select("id, caption, color, storage_path")
    .eq("project_id", id)
    .order("sort_order", { ascending: true });

  const shots = ((shotRows ?? []) as ShotRow[]).map((shot) => ({
    id: shot.id,
    caption: shot.caption,
    color: shot.color,
    src: shot.storage_path
      ? supabase.storage.from(GALLERY_BUCKET).getPublicUrl(shot.storage_path).data.publicUrl
      : undefined,
  }));

  return (
    <div>
      <h1 className="font-serif text-3xl font-medium text-white">{project.title}</h1>

      <div className="mt-8 max-w-2xl">
        <ProjectForm values={project as ProjectRow} />
      </div>

      <div className="mt-12 max-w-2xl border-t border-white/10 pt-8">
        <h2 className="font-serif text-xl font-medium text-white">Galería</h2>
        <div className="mt-5">
          <GalleryManager projectId={project.id} shots={shots} />
        </div>
      </div>
    </div>
  );
}
