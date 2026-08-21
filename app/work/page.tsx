import { ProjectGrid } from "@/components/sections/project-grid";
import { PageShell } from "@/components/layout/page-shell";

export default function WorkPage() {
  return (
    <PageShell title="Proyectos">
      <div className="mt-12">
        <ProjectGrid />
      </div>
    </PageShell>
  );
}
