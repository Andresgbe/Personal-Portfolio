import { Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/buttons";

export function CtaBanner() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface via-surface to-bg p-8 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.75)] sm:p-14">
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-primary/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-secondary/15 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
                <Sparkles className="size-3.5" />
                <span>¿Listo para dar el siguiente paso?</span>
              </div>
              <h2 className="font-display mt-4 text-3xl tracking-tight text-ink sm:text-4xl">
                Convierte tu idea o proceso manual en un{" "}
                <span className="text-secondary">sistema real en semanas</span>.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Cuéntanos qué necesitas construir o automatizar. Te respondemos
                en menos de 24 horas con una propuesta técnica clara, tiempos de
                entrega y presupuesto transparente.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink href="/contact">Cotizar mi proyecto</ButtonLink>
              <ButtonLink href="/projects" variant="secondary">
                Ver portafolio
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
