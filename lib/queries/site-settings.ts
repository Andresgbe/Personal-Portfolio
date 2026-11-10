import { isSupabaseConfigured } from "@/lib/supabase/is-configured";
import { createPublicClient } from "@/lib/supabase/public";

export type SiteSettings = {
  heroTitle: string;
  heroTagline: string;
};

const FALLBACK: SiteSettings = {
  heroTitle: "Creamos el software que tu negocio *necesita*.",
  heroTagline:
    "Desarrollamos páginas web, sistemas a medida y *automatizaciones* para que vendas más y ahorres horas de trabajo manual.",
};

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSupabaseConfigured()) return FALLBACK;

  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("site_settings")
    .select("hero_title, hero_tagline")
    .eq("id", 1)
    .maybeSingle();

  if (error || !data) {
    console.error("[queries/site-settings] getSiteSettings failed, using fallback", error);
    return FALLBACK;
  }

  if (data.hero_title?.trim() === "Andrés Gil") {
    return FALLBACK;
  }

  return { heroTitle: data.hero_title, heroTagline: data.hero_tagline };
}
