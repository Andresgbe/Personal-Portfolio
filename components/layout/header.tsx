import Link from "next/link";
import { MotionToggle } from "@/components/ui/motion-toggle";

// Each category is its own route (English paths); labels stay Spanish (page copy).
const NAV_LINKS = [
  { label: "Servicios", href: "/services" },
  { label: "Trabajos realizados", href: "/projects" },
  { label: "Sobre mí", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

// Absolutely positioned (not fixed): it must only ever sit on top of the
// hero's dark gradient, which it scrolls away with. No background/border of
// its own, so it reads as part of the hero rather than a separate bar.
export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* Below `lg` the links drop to their own full-width row and the switch
          moves up next to the logo, so the header is always exactly two rows
          instead of wrapping unpredictably into three. The `lg:` resets
          restore the single-row desktop layout. Keeping this capped matters:
          the header is absolutely positioned, so pages have to reserve their
          own clearance for it (see PageShell). */}
      <nav className="flex w-full flex-wrap items-center gap-x-6 gap-y-2 px-6 pt-8 pb-4 sm:gap-x-10 sm:px-20 sm:pt-12 sm:pb-6 lg:px-28">
        {/* The wordmark from the brand manual: the name in ink, the period in
            the primary blue. The dot is the whole logo — it's the one place
            the accent appears in the header, so the nav stays quiet. */}
        <Link href="/" className="font-display -my-2 py-2 text-lg text-ink">
          Andrés Gil<span className="text-primary">.</span>
        </Link>
        <ul className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-6 lg:order-none lg:w-auto">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex min-h-10 items-center text-sm text-ink/80 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="order-2 ml-auto lg:order-none">
          <MotionToggle />
        </div>
      </nav>
    </header>
  );
}
