"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function parseStack(raw: FormDataEntryValue | null): string[] {
  return String(raw ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function saveAutomation(formData: FormData) {
  const id = formData.get("id");

  const row = {
    slug: String(formData.get("slug") ?? ""),
    title: String(formData.get("title") ?? ""),
    year: String(formData.get("year") ?? ""),
    description: String(formData.get("description") ?? ""),
    role: String(formData.get("role") ?? ""),
    stack: parseStack(formData.get("stack")),
    icon_name: String(formData.get("icon_name") ?? ""),
    status: String(formData.get("status") ?? "in-progress"),
    color: String(formData.get("color") ?? "#7c3aed"),
  };

  const supabase = await createClient();

  if (id) {
    const { error } = await supabase.from("automations").update(row).eq("id", id);
    if (error) throw new Error(error.message);
  } else {
    const { count } = await supabase
      .from("automations")
      .select("*", { count: "exact", head: true });

    const { error } = await supabase.from("automations").insert({ ...row, sort_order: count ?? 0 });
    if (error) throw new Error(error.message);
  }

  revalidatePath("/work");
  redirect("/admin/automations");
}

export async function deleteAutomation(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("automations").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/work");
}

export async function reorderAutomations(orderedIds: string[]) {
  const supabase = await createClient();
  await Promise.all(
    orderedIds.map((id, index) =>
      supabase.from("automations").update({ sort_order: index }).eq("id", id),
    ),
  );
  revalidatePath("/work");
}
