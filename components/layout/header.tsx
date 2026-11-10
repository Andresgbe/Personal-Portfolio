"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { AgmLogo } from "@/components/ui/agm-logo";
import { MotionToggle } from "@/components/ui/motion-toggle";

// Each category is its own route (English paths); labels stay Spanish (page copy).
const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/services" },
  { label: "Proyectos & IA", href: "/projects" },
  { label: "Nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2.5 rounded-2xl border border-ink/12 bg-bg/80 px-4 py-3 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:px-6">
        <AgmLogo />

        <ul className="order-3 flex w-full flex-wrap items-center justify-center gap-1 border-t border-ink/8 pt-2 sm:gap-1.5 lg:order-none lg:w-auto lg:border-t-0 lg:pt-0">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative flex min-h-9 items-center rounded-full px-3.5 py-1.5 text-xs font-medium transition-all sm:text-sm ${
                    isActive
                      ? "bg-ink/10 text-ink shadow-inner shadow-white/5"
                      : "text-ink/70 hover:bg-ink/5 hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="mr-1.5 size-1.5 rounded-full bg-primary"
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="order-2 ml-auto flex items-center gap-3 lg:order-none lg:ml-0">
          <MotionToggle />
          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 text-xs font-semibold text-ink transition-all hover:border-primary hover:bg-primary hover:text-bg sm:inline-flex"
          >
            <Sparkles className="size-3.5 text-primary group-hover:text-bg" />
            Cotizar proyecto
          </Link>
        </div>
      </nav>
    </header>
  );
}
