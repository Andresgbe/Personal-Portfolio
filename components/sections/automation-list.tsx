import { AutomationRow } from "@/components/ui/automation-row";
import type { Automation } from "@/data/projects";

export function AutomationList({ automations }: { automations: Automation[] }) {
  return (
    <div className="grid grid-cols-1 gap-4.5 md:grid-cols-2">
      {automations.map((automation) => (
        <AutomationRow key={automation.slug} automation={automation} />
      ))}
    </div>
  );
}
