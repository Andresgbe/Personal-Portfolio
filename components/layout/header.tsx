import Link from "next/link";
import { MotionToggle } from "@/components/ui/motion-toggle";

// Each category is its own route (English paths); labels stay Spanish (page copy).
const NAV_LINKS = [
  { label: "Servicios", href: "/services" },
  { label: "Trabajos realizados", href: "/work" },
  { label: "Sobre mí", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

// Absolutely positioned (not fixed): it must only ever sit on top of the
// hero's dark gradient, which it scrolls away with. No background/border of
// its own, so it reads as part of the hero rather than a separate bar.
export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="font-nav flex w-full flex-wrap items-center gap-x-10 gap-y-2 px-12 pt-12 pb-6 sm:px-20 lg:px-28">
        <Link
          href="/"
          className="text-lg font-semibold text-[var(--hero-accent)]"
        >
          Andrés Gil
        </Link>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto">
          <MotionToggle />
        </div>
      </nav>
    </header>
  );
}
