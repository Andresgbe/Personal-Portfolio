"use client";

import { MotionConfig } from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "motion-enabled";

type MotionContextValue = {
  enabled: boolean;
  toggle: () => void;
};

const MotionContext = createContext<MotionContextValue | null>(null);

export function MotionProvider({ children }: { children: ReactNode }) {
  // Read synchronously on first render instead of in an effect — by the time
  // this runs client-side, the blocking init script (see layout.tsx) has
  // already set localStorage/the DOM attribute, so there's nothing to
  // "catch up" to afterward.
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      return window.localStorage.getItem(STORAGE_KEY) !== "false";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "on" : "off";
    try {
      window.localStorage.setItem(STORAGE_KEY, String(enabled));
    } catch {
      // localStorage unavailable (e.g. private browsing) — the toggle still
      // works for the current session via the DOM attribute.
    }
  }, [enabled]);

  return (
    <MotionContext.Provider
      value={{ enabled, toggle: () => setEnabled((e) => !e) }}
    >
      <MotionConfig reducedMotion={enabled ? "user" : "always"}>
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  );
}

export function useMotion() {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error("useMotion must be used within a MotionProvider");
  return ctx;
}
