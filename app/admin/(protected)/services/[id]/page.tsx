import { notFound } from "next/navigation";
import { ServiceForm } from "@/components/admin/service-form";
import { createClient } from "@/lib/supabase/server";

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: service } = await supabase
    .from("services")
    .select("id, title, description, icon_name")
    .eq("id", id)
    .maybeSingle();

  if (!service) notFound();

  return (
    <div>
      <h1 className="font-serif text-3xl font-medium text-white">{service.title}</h1>
      <div className="mt-8 max-w-2xl">
        <ServiceForm values={service} />
      </div>
    </div>
  );
}
