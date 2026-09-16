import Link from "next/link";
import type { Automation } from "@/data/projects";

// No screenshot to show here — an icon tile plus the stack carries it.
export function AutomationRow({ automation }: { automation: Automation }) {
  const { icon: Icon } = automation;

  return (
    <Link
      href={`/projects/${automation.slug}`}
      className="group flex items-start gap-6 border-b border-ink/10 py-6.5 last:border-b-0"
    >
      <div
        className="flex size-14 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: automation.color }}
      >
        <Icon
          className="size-[22px] text-bg"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-display text-[19px] font-medium text-ink transition-colors group-hover:text-primary">
          {automation.title}
        </h3>
        <p className="mt-1 text-[13px] text-ink/50">
          {automation.description}
        </p>
        <ul className="font-mono mt-3 flex flex-wrap gap-2">
          {automation.stack.map((tool) => (
            <li
              key={tool}
              className="rounded-md border border-ink/10 bg-ink/5 px-2.5 py-1 text-[11px] text-ink/60"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <p className="font-mono w-16 shrink-0 text-right text-[13px] text-ink/45">
        {automation.year}
      </p>
    </Link>
  );
}
