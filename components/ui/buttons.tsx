import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

// The site's button system in AGM Software Agency's palette:
//   ButtonLink primary   — solid accent pill; the arrow advances on hover
//   ButtonLink secondary — ghost outline that fills faintly on hover
//   IconLink / BackLink  — 44px bordered circle
//   ArrowLink            — accent text link whose arrow lifts away on hover
const FOCUS =
  "rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const PILL = `group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 ${FOCUS}`;

const VARIANT = {
  primary:
    "bg-primary text-bg shadow-[0_8px_20px_-8px_rgba(232,112,58,0.45)] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-8px_rgba(232,112,58,0.65)]",
  secondary:
    "border border-ink/20 bg-surface/50 text-ink/90 backdrop-blur-sm hover:-translate-y-0.5 hover:border-secondary/40 hover:bg-ink/10 hover:text-ink",
} as const;

const CIRCLE =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-ink/5 transition-colors duration-200 group-hover:border-ink/30 group-hover:bg-ink/10";

export function ButtonLink({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: keyof typeof VARIANT;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={`${PILL} ${VARIANT[variant]}`}>
      {children}
      {variant === "primary" && (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

export function IconLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <Link href={href} aria-label={label} className={`group inline-flex ${FOCUS}`}>
      <span className={`${CIRCLE} text-ink/75 group-hover:text-ink`}>
        <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
      </span>
    </Link>
  );
}

export function BackLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-sm text-ink/60 transition-colors duration-200 hover:text-ink ${FOCUS}`}
    >
      <span className={`${CIRCLE} text-ink/75 group-hover:text-ink`}>
        <ArrowLeft
          className="size-[18px] transition-transform duration-200 group-hover:-translate-x-0.5"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </span>
      {children}
    </Link>
  );
}

export function ArrowLink({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
}) {
  const className = `group inline-flex items-center gap-1.5 text-[15px] font-medium text-primary transition-colors duration-200 hover:text-secondary ${FOCUS}`;

  const content = (
    <>
      <span className="underline-offset-[3px] group-hover:underline">{children}</span>
      <ArrowUpRight
        className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        strokeWidth={1.75}
        aria-hidden="true"
      />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
