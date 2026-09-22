import { HillsBackground } from "@/components/sections/hills-background";
import { ButtonLink } from "@/components/ui/buttons";
import { getSiteSettings } from "@/lib/queries/site-settings";

// The manual reserves the secondary cyan for "la palabra clave del titular" —
// one or two words, never a whole paragraph. Wrapping a word in *asterisks*
// marks it, so which word gets the accent stays editable from /admin instead
// of being frozen in this file.
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
    <section className="hero-sky relative flex min-h-[90vh] flex-col overflow-hidden">
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="animate-float font-display text-5xl text-ink sm:text-7xl">
          {highlightKeyword(heroTitle)}
        </h1>
        <p className="mt-5 max-w-xl text-balance text-muted sm:text-lg">
          {highlightKeyword(heroTagline)}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/projects">Ver proyectos</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contactar
          </ButtonLink>
        </div>
      </div>

      <HillsBackground className="top-28 bottom-0 sm:top-36" />
    </section>
  );
}
