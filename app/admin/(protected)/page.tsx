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
      <h1 className="font-serif text-3xl font-medium text-white">Dashboard</h1>
      <p className="font-nav mt-2 text-sm text-white/50">
        Editá el contenido del sitio desde acá.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SECTIONS.map((section, index) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
          >
            <p className="font-serif text-3xl text-white">{counts[index]}</p>
            <p className="font-nav mt-1 text-sm text-white/60">{section.label}</p>
          </Link>
        ))}
      </div>

      <Link
        href="/admin/settings"
        className="font-nav mt-6 inline-block text-sm text-white/50 hover:text-white"
      >
        Ajustes del sitio →
      </Link>
    </div>
  );
}
