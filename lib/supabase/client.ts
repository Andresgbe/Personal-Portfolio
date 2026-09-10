import { createBrowserClient } from "@supabase/ssr";

// For client components that need a Supabase session directly. Nothing in
// the admin panel needs this yet (forms submit through Server Actions), kept
// for the one case that does come up (e.g. a client-side auth state listener).
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
