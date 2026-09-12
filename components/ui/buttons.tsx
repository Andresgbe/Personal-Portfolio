import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

// The site's button system.
//   ButtonLink primary   — solid accent pill; the arrow advances on hover
//   ButtonLink secondary — ghost outline that fills faintly on hover
//   IconLink / BackLink  — 44px bordered circle, the same shape the Services
//                          cards already use for their icons
//   ArrowLink            — accent text link whose arrow lifts away on hover
//
// `py-3` over a 20px line box puts the pills at exactly 44px, the minimum
// comfortable touch target; the circle is `size-11` for the same reason.
// Focus uses `outline` rather than a ring so the 2px gap shows whatever
// background the control actually sits on (the hero gradient and the flat
// section background are different colours).
const FOCUS =
  "rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--hero-accent)]";

const PILL = `font-nav group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200 ${FOCUS}`;

const VARIANT = {
  primary:
    "bg-[var(--hero-accent)] text-[#0a1420] hover:shadow-[0_10px_20px_-10px_rgba(242,184,128,0.5)]",
  secondary:
    "border border-white/20 text-white/90 backdrop-blur-sm hover:border-white/30 hover:bg-white/10 hover:text-white",
} as const;

// The circle shared by IconLink and BackLink. Reacts to hover on the parent,
// so the whole control lights up together rather than just the disc.
const CIRCLE =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors duration-200 group-hover:border-white/30 group-hover:bg-white/10";

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
          strokeWidth={1.75}
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

// Icon-only control. `label` is the accessible name, since there's no text.
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
      <span className={`${CIRCLE} text-white/75 group-hover:text-white`}>
        <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
      </span>
    </Link>
  );
}

// The circle plus a visible label. Keeping the label out of the hover state
// matters on touch, where there is no hover to reveal where "back" goes.
export function BackLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`font-nav group inline-flex items-center gap-3 text-sm text-white/60 transition-colors duration-200 hover:text-white ${FOCUS}`}
    >
      <span className={`${CIRCLE} text-white/75 group-hover:text-white`}>
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
  const className = `font-nav group inline-flex items-center gap-1.5 text-[15px] text-[var(--hero-accent)] transition-colors duration-200 hover:text-[#f7cba3] ${FOCUS}`;

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
