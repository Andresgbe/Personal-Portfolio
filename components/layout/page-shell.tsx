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
  return (
    <section className="section-sky relative overflow-hidden">
      <HillsBackground className="top-0 h-[42rem] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] sm:h-[48rem]" />

      <div className={`relative z-10 mx-auto w-full ${maxWidth} px-6 pt-32 pb-24 sm:pt-40`}>
        {eyebrow && (
          <p className="font-nav text-[13px] tracking-[0.15em] text-white/50 uppercase">
            {eyebrow}
          </p>
        )}
        {title && (
          <h1
            className={`font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl${
              eyebrow ? " mt-3" : ""
            }`}
          >
            {title}
          </h1>
        )}
        {description && (
          <p className="font-nav mt-3 max-w-xl text-white/70">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
