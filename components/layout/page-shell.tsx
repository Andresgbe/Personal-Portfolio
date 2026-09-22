import type { ReactNode } from "react";
import { HillsBackground } from "@/components/sections/hills-background";

type PageShellProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  maxWidth?: string;
  children?: ReactNode;
};

// Same dark hills backdrop as the Hero on every category page, so the
// landscape feels continuous when navigating between them.
export function PageShell({
  eyebrow,
  title,
  description,
  maxWidth = "max-w-3xl",
  children,
}: PageShellProps) {
  // min-h-svh so the gradient and the hills always have room to finish.
  // Without it a page with little content collapses to the height of its own
  // text, the hills get sliced mid-slope, and the raw body background shows
  // through underneath as a hard horizontal seam.
  return (
    <section className="section-sky relative min-h-svh overflow-hidden">
      <HillsBackground className="top-0 h-[42rem] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] sm:h-[48rem]" />

      {/* pt reserves clearance for the absolutely-positioned Header. Below
          `lg` the header is two rows tall, so it needs more — and the worst
          case is a PageShell with no eyebrow (`/services`), where the h1
          starts 12px higher than everywhere else. Measured across 320-1920. */}
      <div className={`relative z-10 mx-auto w-full ${maxWidth} px-6 pt-44 pb-24 lg:pt-40`}>
        {eyebrow && (
          <p className="font-mono text-[13px] tracking-[0.15em] text-ink/50 uppercase">
            {eyebrow}
          </p>
        )}
        {title && (
          <h1
            className={`font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl${
              eyebrow ? " mt-3" : ""
            }`}
          >
            {title}
          </h1>
        )}
        {description && (
          <p className="mt-3 max-w-xl text-ink/70">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
