import { AutomationList } from "@/components/sections/automation-list";
import { ProjectGrid } from "@/components/sections/project-grid";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/buttons";
import { getAutomations, getSoftwareProjects } from "@/lib/queries/projects";

export default async function WorkPage() {
  const [softwareProjects, automations] = await Promise.all([
    getSoftwareProjects(),
    getAutomations(),
  ]);

  return (
    <PageShell
      eyebrow="Portafolio & Casos de Estudio"
      title="Proyectos y Sistemas en Producción"
      description="Plataformas web, paneles internos y automatizaciones con Inteligencia Artificial construidos para resolver problemas reales de negocio."
      maxWidth="max-w-6xl"
    >
      <section className="mt-14">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/10 pb-4">
          <div className="flex items-baseline gap-3">
            <h2 className="font-display text-2xl font-medium text-ink">
              Plataformas &amp; Software
            </h2>
            <span className="font-mono rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs text-primary">
              {softwareProjects.length} casos
            </span>
          </div>
          <p className="text-xs text-muted">
            Haz clic en cualquier proyecto para explorar su arquitectura y galería.
          </p>
        </div>
        <div className="mt-8">
          <ProjectGrid projects={softwareProjects} />
        </div>
      </section>

      <section className="mt-20 border-t border-ink/10 pt-12">
        <div className="flex flex-wrap items-baseline justify-between gap-3.5">
          <div>
            <div className="flex items-baseline gap-3">
              <h2 className="font-display text-2xl font-medium text-ink">
                Automatizaciones &amp; Agentes IA
              </h2>
              <span className="font-mono rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-0.5 text-xs text-secondary">
                {automations.length} flujos activos
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">
              Sistemas autónomos que conectan APIs, leen documentos y atienden
              clientes sin intervención manual.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <AutomationList automations={automations} />
        </div>
      </section>

      <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink/12 bg-surface/80 p-7 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-display text-xl text-ink">
            ¿Quieres que tu próximo sistema sea el siguiente caso de éxito?
          </h3>
          <p className="mt-1 text-sm text-muted">
            Construyamos juntos una solución rápida, escalable y con retorno de
            inversión medible.
          </p>
        </div>
        <ButtonLink href="/contact">Iniciar proyecto</ButtonLink>
      </div>
    </PageShell>
  );
}
