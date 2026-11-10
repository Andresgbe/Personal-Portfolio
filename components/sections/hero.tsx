import { HillsBackground } from "@/components/sections/hills-background";
import { HeroShowcase } from "@/components/sections/hero-showcase";
import { ButtonLink } from "@/components/ui/buttons";
import { getSiteSettings } from "@/lib/queries/site-settings";

function highlightKeyword(text: string) {
  return text.split(/\*([^*]+)\*/g).map((chunk, index) =>
    index % 2 === 1 ? (
      <span key={index} className="text-secondary">
        {chunk}
      </span>
    ) : (
      chunk
    ),
  );
}

export async function Hero() {
  const { heroTitle, heroTagline } = await getSiteSettings();

  return (
    <section className="hero-sky bg-tech-grid relative flex min-h-svh flex-col justify-center overflow-hidden pt-36 pb-20 lg:pt-40 lg:pb-24">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Columna izquierda: Mensaje claro y directo */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-surface/80 px-4 py-1.5 backdrop-blur-md">
              <span className="size-2 rounded-full bg-primary" />
              <span className="font-mono text-[11px] font-medium tracking-[0.16em] text-ink/85 uppercase">
                AGM Software Agency · Desarrollo Web &amp; Automatización
              </span>
            </div>

            <h1 className="font-display mt-6 text-4xl leading-[1.06] tracking-tight text-balance text-ink sm:text-6xl">
              {highlightKeyword(heroTitle)}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-balance text-muted sm:text-lg">
              {highlightKeyword(heroTagline)}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row">
              <ButtonLink href="/contact">Cotizar proyecto</ButtonLink>
              <ButtonLink href="/projects" variant="secondary">
                Ver trabajos realizados
              </ButtonLink>
            </div>

            <div className="font-mono mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink/60">
              <span>✓ Trato directo con nosotros</span>
              <span>✓ Entregas que puedes ver funcionando</span>
              <span>✓ Sin tecnicismos ni vueltas</span>
            </div>
          </div>

          {/* Columna derecha: Demostración visual e intuitiva */}
          <div className="lg:col-span-5">
            <HeroShowcase />
          </div>
        </div>
      </div>

      <HillsBackground className="top-36 bottom-0 sm:top-44" />
    </section>
  );
}
