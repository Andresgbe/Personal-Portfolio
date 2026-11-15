import Link from "next/link";
import { AgmLogo } from "@/components/ui/agm-logo";
import { ArrowLink } from "@/components/ui/buttons";

const FOOTER_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/services" },
  { label: "Proyectos & Automatizaciones", href: "/projects" },
  { label: "Nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink/10 bg-bg/95">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <AgmLogo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Desarrollo de páginas web, sistemas a medida y automatizaciones
              con Inteligencia Artificial para negocios que buscan crecer y
              ahorrar tiempo.
            </p>
            <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-secondary/25 bg-secondary/8 px-3.5 py-1.5">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-secondary" />
              </span>
              <span className="font-mono text-[11px] tracking-wider text-ink/85 uppercase">
                Disponibles para nuevos proyectos
              </span>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.16em] text-ink/40 uppercase">
              Navegación
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.16em] text-ink/40 uppercase">
              Contacto
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Caracas, Venezuela — trabajamos en remoto con clientes de donde
              sea.
            </p>
            <div className="mt-4 flex flex-col items-start gap-2">
              <ArrowLink href="/contact">Hablemos de tu proyecto</ArrowLink>
              <ArrowLink href="https://instagram.com/andruu.gil" external>
                Instagram @andruu.gil
              </ArrowLink>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/8 pt-6 text-xs text-ink/45 sm:flex-row">
          <p className="font-mono">
            © {new Date().getFullYear()} AGM Software Agency. Todos los derechos
            reservados.
          </p>
          <p className="font-mono">
            Desarrollo Web · Sistemas · Automatización IA
          </p>
        </div>
      </div>
    </footer>
  );
}
