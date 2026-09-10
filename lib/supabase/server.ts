import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Server Components and Server Actions both go through this — one client per
// request, backed by the request's own cookie jar.
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          // A Server Component can't set cookies (no response to write to) —
          // this throws there and is a no-op by design; middleware refreshes
          // the session on every request, so an expired-but-unwritten cookie
          // self-heals on the next navigation.
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // ignore — see comment above
          }
        },
      },
    },
  );
}
