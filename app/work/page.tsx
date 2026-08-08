import { ProjectGrid } from "@/components/sections/project-grid";

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pt-28 pb-16">
      <h1 className="mb-8 text-2xl font-semibold tracking-tight">
        Proyectos
      </h1>
      <ProjectGrid />
    </div>
  );
}
