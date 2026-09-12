"use client";

import { MotionConfig } from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const STORAGE_KEY = "motion-enabled";

type MotionContextValue = {
  enabled: boolean;
  toggle: () => void;
};

const MotionContext = createContext<MotionContextValue | null>(null);

// A tiny external store over localStorage. The preference is client-only, so
// it can't be read during server rendering — `useSyncExternalStore` is built
// for exactly that: React uses `getServerSnapshot` for both SSR and the
// hydration render, then re-renders with the real value, so there's no
// hydration mismatch to paper over.
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  // Another tab flipping the switch should update this one too.
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== "false";
  } catch {
    return true;
  }
}

function getServerSnapshot() {
  return true;
}

function setMotionEnabled(next: boolean) {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(next));
  } catch {
    // localStorage unavailable (e.g. private browsing) — the DOM attribute
    // still carries the change for the current session.
  }
  document.documentElement.dataset.motion = next ? "on" : "off";
  for (const listener of listeners) listener();
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    // Reads the store rather than `enabled` so it can never write the server
    // default over the real preference. In production this just rewrites what
    // the inline script in the root layout already set before first paint; in
    // development it restores the attribute after React's Strict Mode remount
    // resets <html> to only the attributes it manages from JSX.
    document.documentElement.dataset.motion = getSnapshot() ? "on" : "off";
  }, []);

  return (
    <MotionContext.Provider
      value={{ enabled, toggle: () => setMotionEnabled(!enabled) }}
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
