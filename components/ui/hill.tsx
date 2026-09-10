type HillProps = {
  path: string;
  color: string;
  opacity: number;
  duration: number;
  bottom: string;
  className?: string;
};

// Stacking is by source order (back layer first, front layer last) — no
// explicit z-index needed as long as callers render back-to-front.
export function Hill({ path, color, opacity, duration, bottom, className }: HillProps) {
  return (
    <svg
      viewBox="0 0 1440 600"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`hill-layer absolute inset-x-0 h-full w-full${className ? ` ${className}` : ""}`}
      style={{ bottom, opacity, animationDuration: `${duration}s` }}
    >
      <path d={path} fill={color} />
    </svg>
  );
}
