"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function saveService(formData: FormData) {
  const id = formData.get("id");

  const row = {
    title: String(formData.get("title") ?? ""),
    description: String(formData.get("description") ?? ""),
    icon_name: String(formData.get("icon_name") ?? ""),
  };

  const supabase = await createClient();

  if (id) {
    const { error } = await supabase.from("services").update(row).eq("id", id);
    if (error) throw new Error(error.message);
  } else {
    const { count } = await supabase.from("services").select("*", { count: "exact", head: true });
    const { error } = await supabase.from("services").insert({ ...row, sort_order: count ?? 0 });
    if (error) throw new Error(error.message);
  }

  revalidatePath("/services");
  redirect("/admin/services");
}

export async function deleteService(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("services").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/services");
}

export async function reorderServices(orderedIds: string[]) {
  const supabase = await createClient();
  await Promise.all(
    orderedIds.map((id, index) =>
      supabase.from("services").update({ sort_order: index }).eq("id", id),
    ),
  );
  revalidatePath("/services");
}
