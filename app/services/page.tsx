import { ServicesGrid } from "@/components/sections/services-grid";
import { HillsBackground } from "@/components/sections/hills-background";

export default function ServicesPage() {
  return (
    <section className="section-sky relative overflow-hidden">
      <HillsBackground className="top-0 h-[42rem] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] sm:h-[48rem]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-32 pb-24 sm:pt-40">
        <h1 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">
          Servicios
        </h1>
        <p className="font-nav mt-3 max-w-xl text-white/70">
          Seis formas de resolver lo que tu proyecto necesita, de la idea al
          mantenimiento.
        </p>

        <div className="mt-12">
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
}
