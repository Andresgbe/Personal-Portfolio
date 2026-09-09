import { type NextRequest, NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase/is-configured";
import { updateSession } from "@/lib/supabase/middleware";

export async function proxy(request: NextRequest) {
  // No Supabase project configured yet (see supabase/SETUP.md) — /admin
  // can't work either way, so skip the auth check rather than redirect-loop.
  if (!isSupabaseConfigured()) return NextResponse.next();

  return updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Run on everything except static assets, so the session cookie stays
     * fresh site-wide, but skip the cost on things that can't need auth.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
