import { CheckCircle2, Sparkles } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ButtonLink } from "@/components/ui/buttons";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { getServices } from "@/lib/queries/services";

const GUARANTEES = [
  {
    title: "Tecnología moderna y rápida",
    detail:
      "Trabajamos con Next.js, TypeScript y Supabase para que tu sitio o sistema cargue rápido, sea seguro y pueda crecer contigo.",
  },
  {
    title: "El proyecto es 100% tuyo",
    detail:
      "Sin ataduras. Todo el código, dominio y base de datos queda bajo el control de tu negocio.",
  },
  {
    title: "Avances que puedes probar en vivo",
    detail:
      "Desde el inicio te compartimos un enlace para que veas y pruebes cómo va quedando en tu teléfono o computadora.",
  },
];

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <PageShell
      eyebrow="Lo que ofrecemos"
      title="Servicios"
      description="Desarrollamos páginas web, sistemas a medida y automatizaciones pensadas para ahorrar tiempo y atraer clientes."
      maxWidth="max-w-6xl"
    >
      <div className="mt-12">
        <ServicesGrid services={services} />
      </div>

      <section className="mt-20 border-t border-ink/10 pt-16">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.16em] text-secondary uppercase">
              Cómo entregamos
            </p>
            <h2 className="font-display mt-2 text-2xl text-ink sm:text-3xl">
              ¿Qué incluye cada trabajo que hacemos?
            </h2>
          </div>
          <span className="font-mono inline-flex items-center gap-1.5 text-xs text-primary">
            <Sparkles className="size-3.5" /> Trato claro de principio a fin
          </span>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {GUARANTEES.map((item) => (
            <SpotlightCard key={item.title} className="p-6">
              <CheckCircle2 className="size-5 text-secondary" />
              <h3 className="font-display mt-4 text-lg text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {item.detail}
              </p>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-primary/30 bg-surface/80 p-7 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-xl text-ink">
              ¿Tienes una idea o necesitas combinar varios servicios?
            </h3>
            <p className="mt-1 text-sm text-muted">
              Cuéntanos qué tienes en mente y te damos una propuesta clara con
              precio y tiempo de entrega.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <ButtonLink href="/contact">Cotizar ahora</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
