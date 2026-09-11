import {
  automations as fallbackAutomations,
  projects as fallbackProjects,
  softwareProjects as fallbackSoftwareProjects,
  type Automation,
  type Project,
  type Shot,
  type SoftwareProject,
} from "@/data/projects";
import { resolveIcon } from "@/lib/icons/registry";
import { createPublicClient } from "@/lib/supabase/public";
import { isSupabaseConfigured } from "@/lib/supabase/is-configured";

const GALLERY_BUCKET = "project-gallery";

type SupabaseClient = ReturnType<typeof createPublicClient>;

type SoftwareProjectRow = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  role: string;
  stack: string[];
  color: string;
  url: string | null;
};

type GalleryShotRow = {
  id: string;
  project_id: string;
  caption: string;
  color: string;
  storage_path: string | null;
};

type AutomationRow = {
  slug: string;
  title: string;
  year: string;
  description: string;
  role: string;
  stack: string[];
  icon_name: string;
  color: string;
};

function mapShot(supabase: SupabaseClient, row: GalleryShotRow): Shot {
  return {
    caption: row.caption,
    color: row.color,
    src: row.storage_path
      ? supabase.storage.from(GALLERY_BUCKET).getPublicUrl(row.storage_path).data.publicUrl
      : undefined,
  };
}

function mapSoftwareProject(
  supabase: SupabaseClient,
  row: SoftwareProjectRow,
  shotRows: GalleryShotRow[],
): SoftwareProject {
  return {
    kind: "software",
    slug: row.slug,
    title: row.title,
    category: row.category,
    year: row.year,
    description: row.description,
    role: row.role,
    stack: row.stack,
    color: row.color,
    url: row.url ?? undefined,
    gallery: shotRows
      .filter((shot) => shot.project_id === row.id)
      .map((shot) => mapShot(supabase, shot)),
  };
}

function mapAutomation(row: AutomationRow): Automation {
  return {
    kind: "automation",
    slug: row.slug,
    title: row.title,
    year: row.year,
    description: row.description,
    role: row.role,
    stack: row.stack,
    icon: resolveIcon(row.icon_name),
    color: row.color,
  };
}

export async function getSoftwareProjects(): Promise<SoftwareProject[]> {
  if (!isSupabaseConfigured()) return fallbackSoftwareProjects;

  const supabase = createPublicClient();
  const { data: projectRows, error } = await supabase
    .from("software_projects")
    .select("id, slug, title, category, year, description, role, stack, color, url")
    .order("sort_order", { ascending: true });

  if (error || !projectRows) {
    console.error("[queries/projects] getSoftwareProjects failed, using fallback", error);
    return fallbackSoftwareProjects;
  }

  const ids = projectRows.map((row) => row.id);
  const { data: shotRows } = await supabase
    .from("project_gallery_shots")
    .select("id, project_id, caption, color, storage_path")
    .in("project_id", ids)
    .order("sort_order", { ascending: true });

  return projectRows.map((row) => mapSoftwareProject(supabase, row, shotRows ?? []));
}

export async function getAutomations(): Promise<Automation[]> {
  if (!isSupabaseConfigured()) return fallbackAutomations;

  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("automations")
    .select("slug, title, year, description, role, stack, icon_name, color")
    .order("sort_order", { ascending: true });

  if (error || !data) {
    console.error("[queries/projects] getAutomations failed, using fallback", error);
    return fallbackAutomations;
  }

  return data.map(mapAutomation);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  if (!isSupabaseConfigured()) {
    return fallbackProjects.find((project) => project.slug === slug);
  }

  const supabase = createPublicClient();

  const { data: projectRow } = await supabase
    .from("software_projects")
    .select("id, slug, title, category, year, description, role, stack, color, url")
    .eq("slug", slug)
    .maybeSingle();

  if (projectRow) {
    const { data: shotRows } = await supabase
      .from("project_gallery_shots")
      .select("id, project_id, caption, color, storage_path")
      .eq("project_id", projectRow.id)
      .order("sort_order", { ascending: true });

    return mapSoftwareProject(supabase, projectRow, shotRows ?? []);
  }

  const { data: automationRow } = await supabase
    .from("automations")
    .select("slug, title, year, description, role, stack, icon_name, color")
    .eq("slug", slug)
    .maybeSingle();

  return automationRow ? mapAutomation(automationRow) : undefined;
}
