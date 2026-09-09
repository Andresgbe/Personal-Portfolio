import { Check } from "lucide-react";
import type { ProjectStatus } from "@/data/projects";

const LABELS: Record<ProjectStatus, string> = {
  "in-progress": "En curso",
  done: "Finalizado",
};

// Same visual language everywhere: a pulsing accent dot means the work is
// live, a muted check means it shipped.
function Dot() {
  return (
    <span className="relative inline-flex size-1.5 shrink-0">
      <span className="absolute inset-0 animate-ping rounded-full bg-[var(--hero-accent)] opacity-60" />
      <span className="relative block size-1.5 rounded-full bg-[var(--hero-accent)]" />
    </span>
  );
}

type StatusPillProps = {
  status: ProjectStatus;
  /** Appended after the label, e.g. the year — "En curso · 2026". */
  suffix?: string;
  className?: string;
};

export function StatusPill({ status, suffix, className }: StatusPillProps) {
  const inProgress = status === "in-progress";

  return (
    <span
      className={`font-nav inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${
        inProgress
          ? "border-[var(--hero-accent)]/45 text-[var(--hero-accent)]"
          : "border-white/20 text-white/75"
      }${className ? ` ${className}` : ""}`}
    >
      {inProgress ? (
        <Dot />
      ) : (
        <Check className="size-3" strokeWidth={3} aria-hidden="true" />
      )}
      {suffix ? `${LABELS[status]} · ${suffix}` : LABELS[status]}
    </span>
  );
}

// Pill overlaid on a project card's image.
export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <StatusPill
      status={status}
      className="absolute top-3 left-3 bg-[#050810]/55 px-2.5 py-[5px] text-[11px] backdrop-blur-sm"
    />
  );
}

// Small circle tucked into the corner of an automation's icon tile.
export function StatusMarker({ status }: { status: ProjectStatus }) {
  const inProgress = status === "in-progress";

  return (
    <span
      className={`absolute -right-1.5 -bottom-1.5 inline-flex items-center justify-center rounded-full border bg-[var(--section-bg)] ${
        inProgress
          ? "border-[var(--hero-accent)]/50 px-[7px] py-1"
          : "size-5 border-white/20 text-white/70"
      }`}
    >
      {inProgress ? (
        <Dot />
      ) : (
        <Check className="size-2.5" strokeWidth={3} aria-hidden="true" />
      )}
      <span className="sr-only">{LABELS[status]}</span>
    </span>
  );
}
