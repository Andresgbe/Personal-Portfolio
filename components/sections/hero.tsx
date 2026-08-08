import { Hill } from "@/components/ui/hill";

// Organic multi-bump curves (cubic Bézier) — back-to-front, darkest to lightest.
const HILLS = [
  {
    path: "M0,160 C240,100 480,220 720,150 C960,90 1200,190 1440,130 L1440,320 L0,320 Z",
    color: "var(--hero-hill-back)",
    opacity: 0.9,
    duration: 11,
    bottom: "-2%",
    className: "hidden sm:block",
  },
  {
    path: "M0,200 C180,140 360,240 540,190 C720,140 900,260 1080,200 C1260,150 1350,220 1440,190 L1440,320 L0,320 Z",
    color: "var(--hero-hill-mid)",
    opacity: 0.95,
    duration: 9,
    bottom: "-4%",
  },
  {
    path: "M0,240 C150,160 300,280 480,220 C660,160 840,300 1020,230 C1200,170 1320,260 1440,220 L1440,320 L0,320 Z",
    color: "var(--hero-hill-front)",
    opacity: 1,
    duration: 7,
    bottom: "-6%",
  },
] as const;

export function Hero() {
  return (
    <section className="hero-sky relative flex min-h-[90vh] flex-col overflow-hidden">
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-6xl">
          Andrés Gil
        </h1>
        <p className="mt-4 max-w-xl text-balance text-white/70 sm:text-lg">
          Frontend Developer construyendo productos web con React, Vue y
          Supabase
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#work"
            className="rounded-full bg-[var(--hero-accent)] px-6 py-3 text-sm font-medium text-[#0a1420] transition-transform hover:-translate-y-0.5"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Contactar
          </a>
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 z-0 h-[45%] sm:h-[55%]">
        {HILLS.map((hill) => (
          <Hill key={hill.bottom} {...hill} />
        ))}
      </div>
    </section>
  );
}
