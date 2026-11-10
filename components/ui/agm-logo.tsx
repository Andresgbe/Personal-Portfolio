import Link from "next/link";

type AgmLogoProps = {
  showSubtitle?: boolean;
  className?: string;
};

// Official AGM Software Agency isometric mark + typographic lockup,
// extracted directly from the agency SVG brand kit.
export function AgmLogo({ showSubtitle = true, className = "" }: AgmLogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-lg ${className}`}
      aria-label="AGM Software Agency — Inicio"
    >
      <div className="relative flex size-10 shrink-0 items-center justify-center rounded-xl border border-ink/12 bg-surface/90 shadow-inner shadow-white/5 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_24px_-4px_rgba(232,112,58,0.45)]">
        <svg
          viewBox="24 18 152 164"
          className="size-7 overflow-visible"
          fill="none"
          aria-hidden="true"
        >
          {/* Top orange diamond — lifts subtly on hover */}
          <g className="transition-transform duration-300 ease-out group-hover:-translate-y-1">
            <path d="M100 28 L162 64 L100 100 L38 64 Z" fill="#E8703A" />
            <path
              d="M100 42 L138 64 L100 86 L62 64 Z"
              fill="#F7F5F1"
              opacity="0.26"
            />
          </g>
          {/* Left deep petrol face */}
          <path d="M38 64 L100 100 L100 172 L38 136 Z" fill="#0A2026" />
          <path d="M52 82 L88 103 L88 152 L52 131 Z" fill="#184752" />
          {/* Right slate-teal face */}
          <path d="M100 100 L162 64 L162 136 L100 172 Z" fill="#4C7C82" />
          <path d="M112 103 L148 82 L148 131 L112 152 Z" fill="#385F65" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[0.06em] text-ink">
          AGM<span className="text-primary">.</span>
        </span>
        {showSubtitle && (
          <span className="font-mono mt-0.5 text-[9.5px] font-semibold tracking-[0.22em] text-secondary/85 uppercase">
            Software Agency
          </span>
        )}
      </div>
    </Link>
  );
}
