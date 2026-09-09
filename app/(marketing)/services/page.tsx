import { ServicesGrid } from "@/components/sections/services-grid";
import { PageShell } from "@/components/layout/page-shell";
import { getServices } from "@/lib/queries/services";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <PageShell title="Servicios" maxWidth="max-w-5xl">
      <div className="mt-12">
        <ServicesGrid services={services} />
      </div>
    </PageShell>
  );
}
