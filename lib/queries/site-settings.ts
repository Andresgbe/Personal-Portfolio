import { isSupabaseConfigured } from "@/lib/supabase/is-configured";
import { createClient } from "@/lib/supabase/server";

export type SiteSettings = {
  heroTitle: string;
  heroTagline: string;
};

// Same copy as today's hardcoded hero — the fallback when Supabase isn't
// configured (see supabase/SETUP.md).
const FALLBACK: SiteSettings = {
  heroTitle: "Andrés Gil",
  heroTagline: "Programador web. Construyo lo que sueñas.",
};

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSupabaseConfigured()) return FALLBACK;

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("site_settings")
    .select("hero_title, hero_tagline")
    .eq("id", 1)
    .maybeSingle();

  if (error || !data) {
    console.error("[queries/site-settings] getSiteSettings failed, using fallback", error);
    return FALLBACK;
  }

  return { heroTitle: data.hero_title, heroTagline: data.hero_tagline };
}
