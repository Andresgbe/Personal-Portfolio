import { AutomationRow } from "@/components/ui/automation-row";
import type { Automation } from "@/data/projects";

export function AutomationList({ automations }: { automations: Automation[] }) {
  return (
    <div>
      {automations.map((automation) => (
        <AutomationRow key={automation.slug} automation={automation} />
      ))}
    </div>
  );
}
