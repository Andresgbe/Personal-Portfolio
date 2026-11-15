"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "theme-mode";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot(): "dark" | "light" {
  try {
    return window.localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function getServerSnapshot(): "dark" | "light" {
  return "dark";
}

function toggleTheme() {
  const next = getSnapshot() === "light" ? "dark" : "light";
  try {
    window.localStorage.setItem(THEME_KEY, next);
  } catch {
    // ignore storage errors
  }
  if (next === "light") {
    document.documentElement.dataset.theme = "light";
  } else {
    delete document.documentElement.dataset.theme;
  }
  for (const listener of listeners) listener();
}

export function MotionToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label="Cambiar entre modo oscuro y modo claro"
      onClick={toggleTheme}
      className="-my-2 flex items-center gap-2 rounded-full px-2 py-1.5 text-xs font-medium text-ink/75 transition-colors hover:text-ink"
    >
      {isLight ? (
        <Sun className="size-3.5 text-primary" aria-hidden="true" />
      ) : (
        <Moon className="size-3.5 text-secondary" aria-hidden="true" />
      )}
      <span className="hidden sm:inline">
        {isLight ? "Modo claro" : "Modo oscuro"}
      </span>
      <span className="theme-switch relative h-6 w-11 rounded-full border border-ink/20 transition-colors duration-200">
        <span className="theme-switch-knob absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-ink shadow transition-transform duration-200" />
      </span>
    </button>
  );
}
