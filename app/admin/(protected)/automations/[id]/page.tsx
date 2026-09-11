import { notFound } from "next/navigation";
import { AutomationForm } from "@/components/admin/automation-form";
import { createClient } from "@/lib/supabase/server";

export default async function EditAutomationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: automation } = await supabase
    .from("automations")
    .select("id, slug, title, year, description, role, stack, icon_name, color")
    .eq("id", id)
    .maybeSingle();

  if (!automation) notFound();

  return (
    <div>
      <h1 className="font-serif text-3xl font-medium text-white">{automation.title}</h1>
      <div className="mt-8 max-w-2xl">
        <AutomationForm values={automation} />
      </div>
    </div>
  );
}
