import Link from "next/link";
import { HillsBackground } from "@/components/sections/hills-background";
import { getSiteSettings } from "@/lib/queries/site-settings";

export async function Hero() {
  const { heroTitle, heroTagline } = await getSiteSettings();

  return (
    <section className="hero-sky relative flex min-h-[90vh] flex-col overflow-hidden">
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="animate-float font-serif text-4xl font-medium tracking-tight text-white sm:text-6xl">
          {heroTitle}
        </h1>
        <p className="mt-4 max-w-xl text-balance text-white/70 sm:text-lg">
          {heroTagline}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/work"
            className="rounded-full bg-[var(--hero-accent)] px-6 py-3 text-sm font-medium text-[#0a1420] transition-transform hover:-translate-y-0.5"
          >
            Ver proyectos
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Contactar
          </Link>
        </div>
      </div>

      <HillsBackground className="top-28 bottom-0 sm:top-36" />
    </section>
  );
}
