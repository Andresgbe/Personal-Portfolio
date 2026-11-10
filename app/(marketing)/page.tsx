import { AgencyBento } from "@/components/sections/agency-bento";
import { AgencyProcess } from "@/components/sections/agency-process";
import { AutomationList } from "@/components/sections/automation-list";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { ProjectGrid } from "@/components/sections/project-grid";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ArrowLink } from "@/components/ui/buttons";
import { getAutomations, getSoftwareProjects } from "@/lib/queries/projects";
import { getServices } from "@/lib/queries/services";

export default async function Home() {
  const [services, softwareProjects, automations] = await Promise.all([
    getServices(),
    getSoftwareProjects(),
    getAutomations(),
  ]);

  return (
    <main className="bg-[var(--section-bg)]">
      <Hero />

      <AgencyBento />

      {/* Featured Services Section */}
      <section className="relative border-t border-ink/8 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.16em] text-secondary uppercase">
                Nuestras Soluciones
              </p>
              <h2 className="font-display mt-2.5 text-3xl tracking-tight text-ink sm:text-4xl">
                Servicios de desarrollo &amp;{" "}
                <span className="text-secondary">automatización</span>
              </h2>
            </div>
            <ArrowLink href="/services">Ver todos los servicios</ArrowLink>
          </div>

          <div className="mt-12">
            <ServicesGrid services={services} />
          </div>
        </div>
      </section>

      {/* Featured Projects & Automations Section */}
      <section className="relative border-t border-ink/8 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.16em] text-secondary uppercase">
                Portafolio en Producción
              </p>
              <h2 className="font-display mt-2.5 text-3xl tracking-tight text-ink sm:text-4xl">
                Proyectos y sistemas{" "}
                <span className="text-secondary">destacados</span>
              </h2>
            </div>
            <ArrowLink href="/projects">Explorar todo el portafolio</ArrowLink>
          </div>

          <div className="mt-12">
            <ProjectGrid projects={softwareProjects.slice(0, 3)} />
          </div>

          <div className="mt-16 border-t border-ink/10 pt-12">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-medium text-ink">
                  Automatizaciones &amp; Agentes IA en operación
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Flujos autónomos que conectan WhatsApp, CRMs, facturación y
                  bases de datos sin intervención manual.
                </p>
              </div>
              <ArrowLink href="/projects">Ver todas las automatizaciones</ArrowLink>
            </div>

            <div className="mt-8">
              <AutomationList automations={automations} />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-ink/8">
        <AgencyProcess />
      </div>

      <CtaBanner />
    </main>
  );
}
