import { ServicesGrid } from "@/components/sections/services-grid";
import { PageShell } from "@/components/layout/page-shell";

export default function ServicesPage() {
  return (
    <PageShell title="Servicios" maxWidth="max-w-5xl">
      <div className="mt-12">
        <ServicesGrid />
      </div>
    </PageShell>
  );
}
