// Every data fetcher checks this before touching Supabase, so the site keeps
// rendering its fallback content on any host/environment where the project
// hasn't been provisioned yet (see supabase/SETUP.md).
export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}
