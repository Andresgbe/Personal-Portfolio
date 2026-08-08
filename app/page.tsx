import { Hero } from "@/components/sections/hero";
import { ProjectGrid } from "@/components/sections/project-grid";

export default function Home() {
  return (
    <>
      <Hero />

      <section
        id="services"
        className="mx-auto w-full max-w-3xl scroll-mt-24 px-6 py-16"
      >
        <h2 className="text-2xl font-semibold tracking-tight">Servicios</h2>
      </section>

      <section
        id="work"
        className="mx-auto w-full max-w-3xl scroll-mt-24 px-6 py-16"
      >
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">
          Trabajos realizados
        </h2>
        <ProjectGrid />
      </section>

      <section
        id="about"
        className="mx-auto w-full max-w-3xl scroll-mt-24 px-6 py-16"
      >
        <h2 className="text-2xl font-semibold tracking-tight">Sobre mí</h2>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-3xl scroll-mt-24 px-6 py-16"
      >
        <h2 className="text-2xl font-semibold tracking-tight">Contacto</h2>
      </section>
    </>
  );
}
