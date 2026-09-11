"use client";

import { useMotion } from "@/components/providers/motion-provider";

export function MotionToggle() {
  const { enabled, toggle } = useMotion();
  // The switch shows "Light version" (no animations), which is the inverse
  // of `enabled` (animations playing).
  const lightVersion = !enabled;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={lightVersion}
      onClick={toggle}
      className="flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-white/90"
    >
      <span className="hidden sm:inline">Light version</span>
      {/* The switch's own position is driven by CSS off `html[data-motion]`
          rather than by `lightVersion`, so this markup renders identically on
          the server and the client (no hydration mismatch) and is already in
          the right position on first paint — the inline script in the root
          layout sets the attribute before the browser paints. */}
      <span className="motion-switch relative h-6 w-11 rounded-full border border-white/20 transition-colors duration-200">
        <span className="motion-switch-knob absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200" />
      </span>
    </button>
  );
}
