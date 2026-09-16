import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

const SECTIONS = [
  { href: "/admin/projects", label: "Proyectos", table: "software_projects" },
  { href: "/admin/automations", label: "Automatizaciones", table: "automations" },
  { href: "/admin/services", label: "Servicios", table: "services" },
] as const;

export default async function AdminDashboard() {
  const supabase = await createClient();

  const counts = await Promise.all(
    SECTIONS.map(async (section) => {
      const { count } = await supabase
        .from(section.table)
        .select("*", { count: "exact", head: true });
      return count ?? 0;
    }),
  );

  return (
    <div>
      <h1 className="font-display text-3xl font-medium text-ink">Dashboard</h1>
      <p className="mt-2 text-sm text-ink/50">
        Editá el contenido del sitio desde acá.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SECTIONS.map((section, index) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-2xl border border-ink/10 bg-ink/[0.03] p-6 transition-colors hover:border-ink/20 hover:bg-ink/[0.06]"
          >
            <p className="font-display text-3xl text-ink">{counts[index]}</p>
            <p className="mt-1 text-sm text-ink/60">{section.label}</p>
          </Link>
        ))}
      </div>

      <Link
        href="/admin/settings"
        className="mt-6 inline-block text-sm text-ink/50 hover:text-ink"
      >
        Ajustes del sitio →
      </Link>
    </div>
  );
}
