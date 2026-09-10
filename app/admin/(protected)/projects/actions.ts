"use server";

import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const GALLERY_BUCKET = "project-gallery";

function parseStack(raw: FormDataEntryValue | null): string[] {
  return String(raw ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function revalidateProjectPages() {
  revalidatePath("/work");
  // Broad on purpose: reordering/editing one project can change another's
  // "next project" sibling link on its detail page.
  revalidatePath("/work/[slug]", "page");
}

export async function saveProject(formData: FormData) {
  const id = formData.get("id");

  const row = {
    slug: String(formData.get("slug") ?? ""),
    title: String(formData.get("title") ?? ""),
    category: String(formData.get("category") ?? ""),
    year: String(formData.get("year") ?? ""),
    description: String(formData.get("description") ?? ""),
    role: String(formData.get("role") ?? ""),
    stack: parseStack(formData.get("stack")),
    status: String(formData.get("status") ?? "in-progress"),
    color: String(formData.get("color") ?? "#6366f1"),
    url: formData.get("url") ? String(formData.get("url")) : null,
  };

  const supabase = await createClient();

  if (id) {
    const { error } = await supabase.from("software_projects").update(row).eq("id", id);
    if (error) throw new Error(error.message);
  } else {
    const { count } = await supabase
      .from("software_projects")
      .select("*", { count: "exact", head: true });

    const { error } = await supabase
      .from("software_projects")
      .insert({ ...row, sort_order: count ?? 0 });
    if (error) throw new Error(error.message);
  }

  revalidateProjectPages();
  redirect("/admin/projects");
}

export async function deleteProject(id: string) {
  const supabase = await createClient();
  // project_gallery_shots rows cascade-delete with the project; their
  // uploaded files in Storage do not — an orphaned file with no DB row is a
  // low-cost edge case, not worth a bucket-listing cleanup step here.
  const { error } = await supabase.from("software_projects").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidateProjectPages();
}

export async function reorderProjects(orderedIds: string[]) {
  const supabase = await createClient();
  await Promise.all(
    orderedIds.map((id, index) =>
      supabase.from("software_projects").update({ sort_order: index }).eq("id", id),
    ),
  );
  revalidateProjectPages();
}

export async function uploadGalleryImage(projectId: string, formData: FormData) {
  const file = formData.get("image");
  const caption = String(formData.get("caption") ?? "");
  const color = String(formData.get("color") ?? "#6366f1");

  if (!(file instanceof File) || file.size === 0) {
    throw new Error("Elegí una imagen para subir.");
  }
  if (!caption) {
    throw new Error("La imagen necesita un título.");
  }

  const supabase = await createClient();
  const path = `${projectId}/${randomUUID()}-${file.name}`;

  const { error: uploadError } = await supabase.storage
    .from(GALLERY_BUCKET)
    .upload(path, file, { contentType: file.type });
  if (uploadError) throw new Error(uploadError.message);

  const { count } = await supabase
    .from("project_gallery_shots")
    .select("*", { count: "exact", head: true })
    .eq("project_id", projectId);

  const { error: insertError } = await supabase.from("project_gallery_shots").insert({
    project_id: projectId,
    caption,
    color,
    storage_path: path,
    sort_order: count ?? 0,
  });
  if (insertError) throw new Error(insertError.message);

  revalidateProjectPages();
}

export async function deleteGalleryShot(shotId: string) {
  const supabase = await createClient();

  const { data: shot } = await supabase
    .from("project_gallery_shots")
    .select("storage_path")
    .eq("id", shotId)
    .maybeSingle();

  if (shot?.storage_path) {
    await supabase.storage.from(GALLERY_BUCKET).remove([shot.storage_path]);
  }

  const { error } = await supabase.from("project_gallery_shots").delete().eq("id", shotId);
  if (error) throw new Error(error.message);

  revalidateProjectPages();
}

export async function reorderGalleryShots(orderedIds: string[]) {
  const supabase = await createClient();
  await Promise.all(
    orderedIds.map((id, index) =>
      supabase.from("project_gallery_shots").update({ sort_order: index }).eq("id", id),
    ),
  );
  revalidateProjectPages();
}
