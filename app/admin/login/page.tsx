"use client";

import { useActionState } from "react";
import { signIn, type SignInState } from "./actions";

const initialState: SignInState = {};

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(signIn, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0f1a] px-6 font-sans">
      <form
        action={formAction}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-8"
      >
        <h1 className="font-serif text-2xl font-medium text-white">Andrés Gil</h1>
        <p className="font-nav mt-1 text-sm text-white/50">Panel de administración</p>

        <div className="mt-8 flex flex-col gap-4">
          <label className="font-nav flex flex-col gap-1.5 text-sm text-white/70">
            Email
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-[var(--hero-accent)]"
            />
          </label>

          <label className="font-nav flex flex-col gap-1.5 text-sm text-white/70">
            Contraseña
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-[var(--hero-accent)]"
            />
          </label>

          {state.error && (
            <p className="font-nav text-sm text-red-400">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="font-nav mt-2 rounded-full bg-[var(--hero-accent)] px-5 py-2.5 text-sm font-medium text-[#0a1420] transition-opacity disabled:opacity-50"
          >
            {isPending ? "Entrando…" : "Entrar"}
          </button>
        </div>
      </form>
    </div>
  );
}
