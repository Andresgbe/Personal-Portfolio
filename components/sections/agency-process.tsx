"use client";

import { useState } from "react";
import { Compass, Layers, Rocket, Terminal } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const STEPS = [
  {
    number: "01",
    title: "Escuchamos tu idea",
    duration: "Paso 1",
    summary:
      "Nos cuentas qué necesitas resolver. Te decimos de forma directa cómo lo haríamos, cuánto cuesta y en cuánto tiempo estará listo.",
    deliverables: [
      "Propuesta clara y sin rodeos",
      "Presupuesto cerrado",
      "Tiempo de entrega definido",
    ],
    icon: Compass,
  },
  {
    number: "02",
    title: "Diseño y estructura",
    duration: "Paso 2",
    summary:
      "Armamos la interfaz y el flujo de tu página o sistema para que veas cómo va a quedar antes de terminar toda la programación.",
    deliverables: [
      "Diseño moderno y limpio",
      "Adaptado a celulares y PC",
      "Ajustes contigo en el camino",
    ],
    icon: Layers,
  },
  {
    number: "03",
    title: "Programación y pruebas",
    duration: "Paso 3",
    summary:
      "Desarrollamos el sistema, conectamos la base de datos o las automatizaciones y te compartimos avances reales que puedes ir probando.",
    deliverables: [
      "Enlace para ver avances en vivo",
      "Base de datos y panel listos",
      "Automatizaciones probadas",
    ],
    icon: Terminal,
  },
  {
    number: "04",
    title: "Entrega y soporte",
    duration: "Paso 4",
    summary:
      "Dejamos todo publicado y funcionando en tu dominio, te explicamos cómo usarlo fácilmente y quedamos disponibles si necesitas soporte.",
    deliverables: [
      "Publicación lista para tus clientes",
      "Panel fácil de administrar",
      "Soporte continuo opcional",
    ],
    icon: Rocket,
  },
];

export function AgencyProcess() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.16em] text-secondary uppercase">
              Cómo trabajamos
            </p>
            <h2 className="font-display mt-2.5 text-3xl tracking-tight text-ink sm:text-4xl">
              De tu idea a un proyecto real,{" "}
              <span className="text-secondary">paso a paso</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Comunicación directa con nosotros durante todo el proyecto y
            entregas que puedes ver funcionando desde el principio.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isSelected = activeIndex === index;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer"
              >
                <SpotlightCard
                  className={`h-full p-6 transition-all duration-300 ${
                    isSelected
                      ? "border-primary/50 bg-surface shadow-[0_20px_40px_-20px_rgba(232,112,58,0.28)]"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-semibold tracking-widest uppercase ${
                        isSelected ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="font-mono rounded-full border border-ink/10 bg-bg/60 px-2.5 py-0.5 text-[10px] text-ink/60">
                      {step.duration}
                    </span>
                  </div>

                  <div className="mt-4 flex size-10 items-center justify-center rounded-xl border border-ink/12 bg-bg/65">
                    <Icon
                      className={`size-5 ${
                        isSelected ? "text-primary" : "text-secondary"
                      }`}
                    />
                  </div>

                  <h3 className="font-display mt-4 text-lg text-ink">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-ink/65">
                    {step.summary}
                  </p>

                  <ul className="mt-5 space-y-1.5 border-t border-ink/8 pt-4">
                    {step.deliverables.map((item) => (
                      <li
                        key={item}
                        className="font-mono flex items-center gap-2 text-[11px] text-ink/75"
                      >
                        <span className="size-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
