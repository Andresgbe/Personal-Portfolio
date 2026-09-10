import { services as fallbackServices, type Service } from "@/data/services";
import { isSupabaseConfigured } from "@/lib/supabase/is-configured";
import { createClient } from "@/lib/supabase/server";

type ServiceRow = {
  title: string;
  description: string;
  icon_name: string;
};

// Returns icon_name (a string), not a resolved icon component — ServiceCard
// is a Client Component, and a resolved component reference can't cross the
// Server→Client boundary as prop data (only already-rendered elements can).
// ServiceCard resolves the icon itself.
export async function getServices(): Promise<Service[]> {
  if (!isSupabaseConfigured()) return fallbackServices;

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("services")
    .select("title, description, icon_name")
    .order("sort_order", { ascending: true });

  if (error || !data) {
    console.error("[queries/services] getServices failed, using fallback", error);
    return fallbackServices;
  }

  return (data as ServiceRow[]).map((row) => ({
    title: row.title,
    description: row.description,
    icon_name: row.icon_name,
  }));
}
