import { Camera, MapPin, Music2 } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { ArrowLink } from "@/components/ui/buttons";

// Only the channels the brand manual actually lists. No email here on purpose:
// there isn't one in the manual, and a public page is the wrong place to guess
// at one — see the note in the page body.
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
    <PageShell eyebrow="Contacto" title="Hablemos">
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        Cuéntame qué necesitas construir y te digo si puedo hacerlo,{" "}
        <span className="text-secondary">cuánto cuesta</span> y en cuánto tiempo.
      </p>

      <ul className="mt-12 flex flex-col gap-4 sm:max-w-md">
        {CHANNELS.map(({ label, handle, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-surface p-5 transition-colors hover:border-ink/25"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-ink/5 transition-colors group-hover:border-ink/30">
                <Icon className="size-[18px] text-secondary" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="font-mono text-[11px] tracking-[0.16em] text-ink/40 uppercase">
                  {label}
                </span>
                <span className="mt-0.5 text-[15px] text-ink group-hover:text-primary">
                  {handle}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 flex items-center gap-2 text-sm text-muted">
        <MapPin className="size-4 text-ink/35" strokeWidth={1.75} aria-hidden="true" />
        Caracas, Venezuela — trabajo con clientes de donde sea, en remoto.
      </p>

      <p className="mt-8 text-sm text-muted">
        Si prefieres ver trabajo antes de escribir,{" "}
        <ArrowLink href="/projects">mira los proyectos</ArrowLink>
      </p>
    </PageShell>
  );
}
