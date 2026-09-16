import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/buttons";

// Copy comes from the brand manual's discovery brief — what he sells, who for,
// and why him — so the page says the same thing the rest of the identity does.
const BLOCKS = [
  {
    label: "Qué hago",
    items: [
      "Landing pages y webs personales",
      "Sistemas administrativos a medida",
      "Automatizaciones (Make, Zapier, bots)",
    ],
  },
  {
    label: "Para quién",
    items: [
      "Independientes que ofrecen servicios",
      "Pymes y empresas medianas",
      "Gente con una idea clara que quiere materializarla",
    ],
  },
  {
    label: "Cómo trabajo",
    items: [
      "Stack que permite lanzar rápido y barato: GitHub, Vercel y Supabase",
      "Comunicación directa durante todo el proyecto",
      "Entregas que puedes ver funcionando, no promesas",
    ],
  },
];

export default function AboutPage() {
  return (
    <PageShell eyebrow="Sobre mí" title="Andrés Gil">
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        Hago software rápido, práctico y bien comunicado para negocios que ya
        saben lo que quieren. <span className="text-secondary">Técnico, directo</span>{" "}
        y sin vueltas.
      </p>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BLOCKS.map((block) => (
          <section
            key={block.label}
            className="rounded-2xl border border-ink/10 bg-surface p-6"
          >
            <h2 className="font-mono text-[11px] tracking-[0.16em] text-ink/40 uppercase">
              {block.label}
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-ink/75 before:mr-2 before:text-ink/25 before:content-['—']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/projects">Ver proyectos</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contactar
        </ButtonLink>
      </div>
    </PageShell>
  );
}
