import { Camera, Clock, Globe2, MapPin, Music2 } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { ContactEstimator } from "@/components/sections/contact-estimator";
import { ArrowLink } from "@/components/ui/buttons";

const CHANNELS = [
  {
    label: "Instagram",
    handle: "@andruu.gil",
    href: "https://instagram.com/andruu.gil",
    icon: Camera,
  },
  {
    label: "TikTok",
    handle: "@andruu.gil",
    href: "https://tiktok.com/@andruu.gil",
    icon: Music2,
  },
];

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contacto & Cotizaciones"
      title="Construyamos tu próximo sistema"
      maxWidth="max-w-5xl"
    >
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Cuéntanos qué necesitas desarrollar o automatizar y te diremos cómo lo
        construimos, <span className="text-secondary">cuánto cuesta</span> y en
        cuánto tiempo estará en producción.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        {/* Interactive Estimator (8 cols) */}
        <div className="lg:col-span-8">
          <ContactEstimator />
        </div>

        {/* Direct Channels & Agency Info (4 cols) */}
        <div className="flex flex-col justify-between gap-6 lg:col-span-4">
          <div>
            <p className="font-mono text-xs tracking-[0.16em] text-ink/45 uppercase">
              Canales Directos
            </p>
            <ul className="mt-4 flex flex-col gap-3.5">
              {CHANNELS.map(({ label, handle, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-surface/80 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-bg/70 transition-colors group-hover:border-primary/40">
                      <Icon
                        className="size-[18px] text-secondary transition-colors group-hover:text-primary"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-mono text-[11px] tracking-[0.16em] text-ink/40 uppercase">
                        {label}
                      </span>
                      <span className="mt-0.5 text-[15px] font-medium text-ink group-hover:text-primary">
                        {handle}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-ink/10 bg-surface/60 p-5 text-sm text-muted">
            <p className="flex items-center gap-2.5 text-ink/85">
              <MapPin
                className="size-4 shrink-0 text-primary"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span>Caracas, Venezuela · Operación Global</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Globe2
                className="size-4 shrink-0 text-secondary"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span>Trabajamos 100% remoto con clientes en cualquier país.</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Clock
                className="size-4 shrink-0 text-primary"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span>Tiempo de respuesta promedio: &lt; 24 horas.</span>
            </p>
          </div>

          <p className="text-sm text-muted">
            ¿Prefieres revisar nuestros casos antes de escribir?{" "}
            <ArrowLink href="/projects">Explorar proyectos</ArrowLink>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
