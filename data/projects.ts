import {
  FileText,
  MessageCircle,
  RefreshCw,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

// One frame of a project's gallery. Until there are real screenshots, `src` is
// omitted and the flat `color` stands in for the image.
export type Shot = {
  caption: string;
  color: string;
  src?: string;
};

type ProjectBase = {
  slug: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  year: string;
  color: string;
  url?: string;
  gallery?: Shot[];
};

// Two kinds of work, shown differently on /projects: software gets an image-led
// card grid, automations a compact list (no screenshot to show — what matters
// is what it solves and with what).
export type SoftwareProject = ProjectBase & {
  kind: "software";
  category: string;
};

export type Automation = ProjectBase & {
  kind: "automation";
  icon: LucideIcon;
};

export type Project = SoftwareProject | Automation;

// Fallback data — used by lib/queries/projects.ts only when Supabase isn't
// configured (see supabase/SETUP.md). Once it is, this is edited from
// /admin, not here; kept in sync as the seed data in
// supabase/migrations/0001_init.sql.
export const softwareProjects: SoftwareProject[] = [
  {
    kind: "software",
    slug: "estudio-lumen",
    title: "Estudio Lumen",
    category: "Diseño web y branding",
    year: "2026",
    description:
      "Rediseño de identidad y sitio para un estudio fotográfico que necesitaba que su trabajo, y no la interfaz, fuera lo primero que se ve.",
    role: "Diseño y desarrollo",
    stack: ["Next.js", "Tailwind"],
    color: "#6366f1",
  },
  {
    kind: "software",
    slug: "panel-orbit",
    title: "Panel Orbit",
    category: "Dashboard interno",
    year: "2026",
    description:
      "Panel de analítica para un equipo de operaciones que vivía entre planillas sueltas.",
    role: "Producto y frontend",
    stack: ["React", "PostgreSQL"],
    color: "#f59e0b",
  },
  {
    kind: "software",
    slug: "app-vento",
    title: "App Vento",
    category: "Producto digital",
    year: "2025",
    description:
      "App de reservas para un negocio de servicios, pensada para que el turno se saque en menos de un minuto.",
    role: "Diseño y desarrollo",
    stack: ["Next.js", "Supabase"],
    color: "#22c55e",
  },
  {
    kind: "software",
    slug: "sitio-marea",
    title: "Sitio Marea",
    category: "Sitio institucional",
    year: "2025",
    description:
      "Sitio corporativo con foco en confianza y claridad: menos ruido, más respuestas.",
    role: "Diseño y desarrollo",
    stack: ["Next.js", "CMS"],
    color: "#ef4444",
  },
  {
    kind: "software",
    slug: "landing-nimbus",
    title: "Landing Nimbus",
    category: "Landing page",
    year: "2024",
    description:
      "Landing de lanzamiento para un producto SaaS, optimizada para convertir visitas en pruebas gratuitas.",
    role: "Diseño y desarrollo",
    stack: ["Next.js", "Tailwind"],
    color: "#14b8a6",
  },
];

export const automations: Automation[] = [
  {
    kind: "automation",
    slug: "sync-sheets-crm",
    title: "Sincronización Sheets ↔ CRM",
    year: "2026",
    description:
      "Los contactos cargados en la planilla entran al CRM sin copiar y pegar.",
    role: "Automatización",
    stack: ["Make", "Google Sheets"],
    icon: RefreshCw,
    color: "#7c3aed",
  },
  {
    kind: "automation",
    slug: "bot-turnos-whatsapp",
    title: "Bot de turnos por WhatsApp",
    year: "2025",
    description:
      "Toma el turno, lo confirma y lo agenda solo, sin intervención humana.",
    role: "Automatización",
    stack: ["n8n", "WhatsApp API"],
    icon: MessageCircle,
    color: "#0ea5e9",
  },
  {
    kind: "automation",
    slug: "reporte-semanal",
    title: "Reporte semanal automático",
    year: "2025",
    description:
      "Cada lunes llega el resumen de ventas armado y listo para leer.",
    role: "Automatización",
    stack: ["Python", "Cron"],
    icon: BarChart3,
    color: "#d97706",
  },
  {
    kind: "automation",
    slug: "carga-facturas",
    title: "Carga automática de facturas",
    year: "2024",
    description:
      "Lee la factura que llega por mail y la registra en la contabilidad.",
    role: "Automatización",
    stack: ["Make", "OCR"],
    icon: FileText,
    color: "#059669",
  },
];

// Flat list for /projects/[slug] lookups — both kinds live under the same route.
export const projects: Project[] = [...softwareProjects, ...automations];

// Placeholder frames, tinted from the project's own color so a gallery reads as
// several distinct shots. Give a project its own `gallery` to replace them.
const PLACEHOLDER_SHOTS: Array<{ caption: string; mix: string }> = [
  { caption: "Vista principal", mix: "100%, transparent" },
  { caption: "Detalle de interfaz", mix: "78%, #050810" },
  { caption: "Versión mobile", mix: "72%, #ffffff" },
];

// The first gallery frame that carries a real image — the project's cover,
// used by both its card on /projects and the hero on its own page. Undefined
// while a project has no screenshots yet, and then the flat `color` stands in.
export function coverShot(project: Project): Shot | undefined {
  return project.gallery?.find((shot) => Boolean(shot.src));
}

export function galleryFor(project: Project): Shot[] {
  if (project.gallery && project.gallery.length > 0) return project.gallery;

  return PLACEHOLDER_SHOTS.map(({ caption, mix }) => ({
    caption,
    color: `color-mix(in oklab, ${project.color} ${mix})`,
  }));
}

// Wraps around, so the last project points back at the first of its kind.
// Takes the sibling list explicitly (rather than reaching for the static
// arrays itself) so callers fetching from Supabase can pass their own.
export function nextProject(project: Project, siblings: Project[]): Project {
  const index = siblings.findIndex((p) => p.slug === project.slug);
  return siblings[(index + 1) % siblings.length];
}
