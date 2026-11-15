"use client";

import { useState } from "react";
import {
  Bot,
  Check,
  Copy,
  LayoutDashboard,
  Rocket,
  Send,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

type SolutionOption = {
  id: string;
  label: string;
  timeline: string;
  stack: string;
  icon: typeof Rocket;
};

const SOLUTIONS: SolutionOption[] = [
  {
    id: "webapp",
    label: "Plataforma Web / SaaS",
    timeline: "3 – 5 semanas",
    stack: "Next.js 16 + Supabase + Auth",
    icon: Rocket,
  },
  {
    id: "landing",
    label: "Landing Page Alta Conversión",
    timeline: "1 – 2 semanas",
    stack: "Next.js + Framer Motion + SEO",
    icon: Sparkles,
  },
  {
    id: "ai",
    label: "Automatización & Bot IA",
    timeline: "1 – 3 semanas",
    stack: "n8n / Make + IA + WhatsApp API",
    icon: Bot,
  },
  {
    id: "dashboard",
    label: "Dashboard / ERP Interno",
    timeline: "2 – 4 semanas",
    stack: "React + PostgreSQL + Roles",
    icon: LayoutDashboard,
  },
  {
    id: "migration",
    label: "Modernización / Rediseño",
    timeline: "2 – 3 semanas",
    stack: "Next.js App Router + Cloud",
    icon: Wrench,
  },
];

const URGENCY_OPTIONS = [
  "Lo antes posible (Este mes)",
  "En las próximas 2 a 4 semanas",
  "Explorando opciones y presupuesto",
];

export function ContactEstimator() {
  const [selectedSolution, setSelectedSolution] = useState<SolutionOption>(
    SOLUTIONS[0],
  );
  const [urgency, setUrgency] = useState<string>(URGENCY_OPTIONS[0]);
  const [name, setName] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const generatedMessage = `Hola equipo de AGM Software Agency 👋${
    name.trim() ? `, soy ${name.trim()}` : ""
  }. Me interesa cotizar un proyecto de *${selectedSolution.label}* (Tiempo estimado: ${
    selectedSolution.timeline
  }).\n• Prioridad: ${urgency}${
    details.trim() ? `\n• Detalles: ${details.trim()}` : ""
  }`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  }

  return (
    <SpotlightCard className="p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 pb-5">
        <div>
          <p className="font-mono text-xs tracking-[0.16em] text-secondary uppercase">
            Cotizador Interactivo
          </p>
          <h2 className="font-display mt-1 text-2xl text-ink">
            Configura el alcance de tu proyecto
          </h2>
        </div>
        <span className="font-mono rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs text-primary">
          Respuesta &lt; 24h
        </span>
      </div>

      {/* Step 1: Solution type */}
      <div className="mt-6">
        <label className="font-mono text-[11px] tracking-[0.14em] text-ink/55 uppercase">
          1. ¿Qué necesitas construir o automatizar?
        </label>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((item) => {
            const Icon = item.icon;
            const active = selectedSolution.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedSolution(item)}
                className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${
                  active
                    ? "border-primary bg-primary/12 text-ink shadow-sm"
                    : "border-ink/12 bg-bg/55 text-ink/70 hover:border-ink/25 hover:text-ink"
                }`}
              >
                <Icon
                  className={`mt-0.5 size-4 shrink-0 ${
                    active ? "text-primary" : "text-secondary"
                  }`}
                />
                <div>
                  <p className="text-xs font-semibold">{item.label}</p>
                  <p className="font-mono mt-1 text-[10px] text-ink/50">
                    {item.timeline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Urgency */}
      <div className="mt-6">
        <label className="font-mono text-[11px] tracking-[0.14em] text-ink/55 uppercase">
          2. ¿Para cuándo planeas iniciar?
        </label>
        <div className="mt-3 flex flex-wrap gap-2">
          {URGENCY_OPTIONS.map((option) => {
            const active = urgency === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setUrgency(option)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                  active
                    ? "border-secondary bg-secondary/15 text-ink"
                    : "border-ink/12 bg-bg/55 text-ink/65 hover:border-ink/25 hover:text-ink"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3: Name & Brief */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="client-name"
            className="font-mono text-[11px] tracking-[0.14em] text-ink/55 uppercase"
          >
            3. Tu nombre o empresa
          </label>
          <input
            id="client-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej. Carlos — Clínica Conecta"
            className="mt-2 w-full rounded-xl border border-ink/15 bg-bg/70 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="client-details"
            className="font-mono text-[11px] tracking-[0.14em] text-ink/55 uppercase"
          >
            4. Idea o requerimiento clave
          </label>
          <input
            id="client-details"
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Ej. Reservas online + recordatorios por WhatsApp"
            className="mt-2 w-full rounded-xl border border-ink/15 bg-bg/70 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      {/* Real-time architectural estimation box */}
      <div className="mt-6 rounded-xl border border-ink/12 bg-bg/80 p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] tracking-wider text-ink/45 uppercase">
              Estimación Técnica Preliminar
            </span>
            <p className="font-display mt-0.5 text-lg text-ink">
              Entrega estimada:{" "}
              <span className="text-secondary">
                {selectedSolution.timeline}
              </span>
            </p>
          </div>
          <div className="text-left sm:text-right">
            <span className="font-mono text-[10px] tracking-wider text-ink/45 uppercase">
              Stack Recomendado
            </span>
            <p className="font-mono mt-0.5 text-xs text-primary">
              {selectedSolution.stack}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-4">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-surface px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-secondary/50"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-secondary" />
                <span>¡Resumen copiado al portapapeles!</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5 text-secondary" />
                <span>Copiar resumen para enviar</span>
              </>
            )}
          </button>

          <a
            href="https://instagram.com/andruu.gil"
            target="_blank"
            rel="noreferrer"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-bg shadow-[0_8px_20px_-6px_rgba(232,112,58,0.5)] transition-transform hover:-translate-y-0.5"
          >
            <Send className="size-3.5" />
            <span>Copiar brief y abrir mensaje directo</span>
          </a>
        </div>
      </div>
    </SpotlightCard>
  );
}
