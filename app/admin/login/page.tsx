"use client";

import { useActionState } from "react";
import { signIn, type SignInState } from "./actions";

const initialState: SignInState = {};

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(signIn, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0f13] px-6 font-sans">
      <form
        action={formAction}
        className="w-full max-w-sm rounded-2xl border border-ink/10 bg-ink/[0.03] p-8"
      >
        <h1 className="font-display text-2xl font-medium text-ink">Andrés Gil</h1>
        <p className="mt-1 text-sm text-ink/50">Panel de administración</p>

        <div className="mt-8 flex flex-col gap-4">
          <label className="flex flex-col gap-1.5 text-sm text-ink/70">
            Email
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className="rounded-lg border border-ink/15 bg-ink/5 px-3 py-2.5 text-ink outline-none focus:border-primary"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm text-ink/70">
            Contraseña
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="rounded-lg border border-ink/15 bg-ink/5 px-3 py-2.5 text-ink outline-none focus:border-primary"
            />
          </label>

          {state.error && (
            <p className="text-sm text-red-400">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="mt-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-bg transition-opacity disabled:opacity-50"
          >
            {isPending ? "Entrando…" : "Entrar"}
          </button>
        </div>
      </form>
    </div>
  );
}
