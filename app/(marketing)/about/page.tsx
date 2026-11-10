import { Code2, Cpu, ShieldCheck, Users, Workflow, Zap } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/buttons";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const BLOCKS = [
  {
    label: "Qué hacemos",
    icon: Code2,
    items: [
      "Landing pages, sitios web y plataformas a medida",
      "Sistemas administrativos y paneles de gestión",
      "Automatizaciones (n8n, Make, Zapier, bots con IA)",
    ],
  },
  {
    label: "Para quién",
    icon: Users,
    items: [
      "Profesionales e independientes que ofrecen servicios",
      "Pymes y negocios que quieren digitalizar su operación",
      "Personas con una idea clara que quieren materializarla",
    ],
  },
  {
    label: "Cómo trabajamos",
    icon: Workflow,
    items: [
      "Stack moderno que permite lanzar rápido: Next.js, Vercel y Supabase",
      "Comunicación directa y constante durante todo el proyecto",
      "Entregas que puedes ver funcionando, no promesas",
    ],
  },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Sobre Nosotros"
      title="AGM Software Agency"
      maxWidth="max-w-5xl"
    >
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
        Hacemos software rápido, práctico y bien comunicado para negocios que ya
        saben lo que quieren.{" "}
        <span className="text-secondary">Técnico, directo</span> y sin vueltas.
      </p>

      {/* 3 Bloques principales */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BLOCKS.map((block) => {
          const Icon = block.icon;
          return (
            <SpotlightCard key={block.label} className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-[11px] tracking-[0.16em] text-secondary uppercase">
                  {block.label}
                </h2>
                <Icon className="size-4 text-primary" />
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-ink/80 before:mr-2 before:text-primary before:content-['—']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Pilares de trabajo */}
      <div className="mt-10 grid gap-4 rounded-2xl border border-ink/10 bg-surface/65 p-6 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <Zap className="mt-0.5 size-4 shrink-0 text-primary" />
          <div>
            <p className="font-display text-sm text-ink">Entregas rápidas</p>
            <p className="mt-0.5 text-xs text-muted">
              Avances reales que puedes probar en semanas, no meses.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Cpu className="mt-0.5 size-4 shrink-0 text-secondary" />
          <div>
            <p className="font-display text-sm text-ink">
              Automatización práctica
            </p>
            <p className="mt-0.5 text-xs text-muted">
              Ahorra horas conectando tus herramientas y bots con IA.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
          <div>
            <p className="font-display text-sm text-ink">
              Comunicación clara
            </p>
            <p className="mt-0.5 text-xs text-muted">
              Te explicamos todo en tu idioma, sin tecnicismos innecesarios.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/contact">Hablemos de tu proyecto</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          Ver proyectos realizados
        </ButtonLink>
      </div>
    </PageShell>
  );
}
