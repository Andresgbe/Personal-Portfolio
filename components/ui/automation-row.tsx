import type { Automation } from "@/data/projects";

export function AutomationRow({ automation }: { automation: Automation }) {
  const { icon: Icon } = automation;

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-surface/70 p-6 backdrop-blur-sm transition-all duration-200 hover:border-ink/20 hover:bg-surface/90">
      <div>
        <div className="flex items-center justify-between gap-3">
          <div
            className="flex size-11 items-center justify-center rounded-xl shadow-sm"
            style={{
              backgroundColor: `${automation.color}18`,
              border: `1px solid ${automation.color}40`,
            }}
          >
            <Icon
              className="size-5"
              style={{ color: automation.color }}
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>
          <span className="font-mono rounded-full border border-secondary/25 bg-secondary/10 px-2.5 py-0.5 text-[10px] text-secondary uppercase">
            {automation.role}
          </span>
        </div>

        <h3 className="font-display mt-4 text-lg font-medium text-ink">
          {automation.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">
          {automation.description}
        </p>
      </div>

      <div className="mt-5 border-t border-ink/8 pt-4">
        <ul className="font-mono flex flex-wrap gap-1.5">
          {automation.stack.map((tool) => (
            <li
              key={tool}
              className="rounded-md border border-ink/10 bg-bg/75 px-2.5 py-1 text-[11px] text-ink/75"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
