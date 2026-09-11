import { AutomationList } from "@/components/sections/automation-list";
import { ProjectGrid } from "@/components/sections/project-grid";
import { PageShell } from "@/components/layout/page-shell";
import { getAutomations, getSoftwareProjects } from "@/lib/queries/projects";

export default async function WorkPage() {
  const [softwareProjects, automations] = await Promise.all([
    getSoftwareProjects(),
    getAutomations(),
  ]);

  return (
    <PageShell eyebrow="Trabajos realizados" title="Proyectos" maxWidth="max-w-6xl">
      <section className="mt-14">
        <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
          <h2 className="font-serif text-2xl font-medium text-white">Software</h2>
        </div>
        <div className="mt-7">
          <ProjectGrid projects={softwareProjects} />
        </div>
      </section>

      <section className="mt-18 border-t border-white/10 pt-10">
        <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
          <h2 className="font-serif text-2xl font-medium text-white">
            Automatizaciones
          </h2>
          <p className="font-nav text-[13px] text-white/45">
            Encargos puntuales que resuelven una tarea concreta.
          </p>
        </div>
        <div className="mt-3">
          <AutomationList automations={automations} />
        </div>
      </section>
    </PageShell>
  );
}
