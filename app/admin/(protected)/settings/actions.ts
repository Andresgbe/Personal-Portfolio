"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function saveSiteSettings(formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("site_settings")
    .update({
      hero_title: String(formData.get("hero_title") ?? ""),
      hero_tagline: String(formData.get("hero_tagline") ?? ""),
    })
    .eq("id", 1);

  if (error) throw new Error(error.message);

  revalidatePath("/");
}
