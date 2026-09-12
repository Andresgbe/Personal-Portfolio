import { createClient } from "@supabase/supabase-js";

// Cookie-free client for reading published content.
//
// The cookie-backed client in ./server.ts must NOT be used for public reads:
// touching `cookies()` opts the route out of static prerendering, which turned
// /, /projects and /services dynamic and left the admin's `revalidatePath` calls
// with nothing to revalidate. None of this data depends on who is asking —
// RLS grants `anon` read-only access — so no session is needed.
export function createPublicClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
