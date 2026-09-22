import Link from "next/link";
import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { signOut } from "@/app/admin/actions";
import { createClient } from "@/lib/supabase/server";

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/projects", label: "Proyectos" },
  { href: "/admin/automations", label: "Automatizaciones" },
  { href: "/admin/services", label: "Servicios" },
  { href: "/admin/settings", label: "Ajustes" },
];

export default async function ProtectedAdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Middleware already redirects unauthenticated requests here — this is a
  // defensive fallback, not the primary gate.
  if (!user) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-[#0b0f13] font-sans text-ink">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 px-8 py-4">
        <nav className="flex flex-wrap items-center gap-6 text-sm">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink/70 hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-xs text-ink/50">
          <span>{user.email}</span>
          <form action={signOut}>
            <button type="submit" className="text-ink/60 hover:text-ink">
              Cerrar sesión
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-8 py-10">{children}</main>
    </div>
  );
}
