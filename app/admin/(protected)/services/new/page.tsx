import { ServiceForm } from "@/components/admin/service-form";

export default function NewServicePage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-medium text-ink">Nuevo servicio</h1>
      <div className="mt-8 max-w-2xl">
        <ServiceForm />
      </div>
    </div>
  );
}
