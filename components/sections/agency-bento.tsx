"use client";

import {
  Bot,
  Code2,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase / PostgreSQL",
  "Tailwind CSS",
  "Python",
  "OpenAI / Gemini",
  "n8n & Make",
  "WhatsApp API",
];

export function AgencyBento() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.16em] text-secondary uppercase">
              Qué hacemos en AGM
            </p>
            <h2 className="font-display mt-2.5 text-3xl tracking-tight text-ink sm:text-4xl">
              Software práctico, rápido y{" "}
              <span className="text-secondary">hecho a tu medida</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Nos enfocamos en resolver problemas reales de tu negocio: que te
            encuentren online, que gestiones mejor tu operación y que no pierdas
            tiempo en tareas repetitivas.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-12">
          {/* Card 1: Web & Sistemas (7 cols) */}
          <SpotlightCard className="p-7 md:col-span-7">
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Code2 className="size-3.5" />
                  <span>Desarrollo Web &amp; Sistemas</span>
                </div>
                <h3 className="font-display mt-4 text-2xl text-ink">
                  Páginas web, aplicaciones y paneles administrativos
                </h3>
                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-ink/70">
                  Desde una landing page moderna para captar clientes hasta un
                  sistema completo con base de datos e inicio de sesión para
                  controlar ventas, citas, inventario o clientes desde cualquier
                  dispositivo.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="rounded-xl border border-ink/10 bg-bg/60 p-3.5">
                  <Layers className="size-4 text-secondary" />
                  <p className="font-display mt-2 text-sm text-ink">
                    Diseño Propio
                  </p>
                  <p className="mt-0.5 text-xs text-ink/55">
                    Adaptado a tu marca
                  </p>
                </div>
                <div className="rounded-xl border border-ink/10 bg-bg/60 p-3.5">
                  <Database className="size-4 text-primary" />
                  <p className="font-display mt-2 text-sm text-ink">
                    Base de Datos
                  </p>
                  <p className="mt-0.5 text-xs text-ink/55">
                    Toda tu info organizada
                  </p>
                </div>
                <div className="rounded-xl border border-ink/10 bg-bg/60 p-3.5">
                  <Zap className="size-4 text-secondary" />
                  <p className="font-display mt-2 text-sm text-ink">
                    Súper Rápido
                  </p>
                  <p className="mt-0.5 text-xs text-ink/55">
                    En celular y computadora
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2: Automatización & Bots (5 cols) */}
          <SpotlightCard
            className="p-7 md:col-span-5"
            spotlightColor="rgba(94, 194, 204, 0.16)"
          >
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                  <Bot className="size-3.5" />
                  <span>Automatización &amp; Bots con IA</span>
                </div>
                <h3 className="font-display mt-4 text-2xl text-ink">
                  Tu negocio respondiendo y trabajando 24/7
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/70">
                  Conectamos tus herramientas (WhatsApp, Instagram, Google
                  Sheets, correo y CRM) para que las citas se agenden solas, las
                  facturas se registren automáticamente y tus clientes reciban
                  respuesta al instante.
                </p>
              </div>

              <div className="rounded-xl border border-ink/10 bg-bg/70 p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono flex items-center gap-1.5 text-ink/75">
                    <Workflow className="size-3.5 text-secondary" />
                    Ejemplos reales
                  </span>
                  <span className="font-mono text-primary">Cero trabajo manual</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[
                    "Bots de WhatsApp",
                    "Google Sheets ↔ CRM",
                    "Lectura de Facturas",
                    "Reportes Automáticos",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono rounded-md border border-ink/10 bg-surface px-2 py-1 text-[11px] text-ink/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 3: Tecnologías (12 cols) */}
          <SpotlightCard className="p-6 md:col-span-12">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-ink/15 bg-bg/70">
                  <Cpu className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-ink">
                    Tecnologías modernas con las que trabajamos
                  </h3>
                  <p className="mt-0.5 text-xs text-muted">
                    Herramientas actuales que permiten lanzar rápido, con bajo
                    costo de mantenimiento y listas para crecer.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono inline-flex items-center gap-1.5 rounded-lg border border-ink/12 bg-bg/70 px-3 py-1.5 text-xs text-ink/85 transition-colors hover:border-primary/40 hover:text-ink"
                  >
                    <Sparkles className="size-3 text-secondary" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
