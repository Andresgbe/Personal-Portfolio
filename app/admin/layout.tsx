import type { ReactNode } from "react";
import { isSupabaseConfigured } from "@/lib/supabase/is-configured";

// Wraps every /admin route, including /admin/login — the one thing both
// need in common is "don't crash if Supabase isn't set up yet." Auth itself
// (and the admin chrome) live in app/admin/(protected)/layout.tsx, since the
// login page must NOT be gated by "is there a signed-in user."
export default function AdminRootLayout({ children }: { children: ReactNode }) {
  if (!isSupabaseConfigured()) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0f1a] px-6 text-center font-sans">
        <div>
          <p className="font-serif text-2xl text-white">Supabase no está configurado</p>
          <p className="font-nav mt-3 max-w-md text-sm text-white/60">
            Seguí los pasos de{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-white/80">
              supabase/SETUP.md
            </code>{" "}
            para activar el panel de admin.
          </p>
        </div>
      </div>
    );
  }

  return children;
}
