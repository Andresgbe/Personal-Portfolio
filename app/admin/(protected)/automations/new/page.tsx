import { AutomationForm } from "@/components/admin/automation-form";

export default function NewAutomationPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl font-medium text-white">Nueva automatización</h1>
      <div className="mt-8 max-w-2xl">
        <AutomationForm />
      </div>
    </div>
  );
}
