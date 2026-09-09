import type { NextConfig } from "next";

// Supabase Storage's own hostname — derived from the project URL so nothing
// needs a manual edit once supabase/SETUP.md's env vars are filled in.
const supabaseHostname = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  : undefined;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: supabaseHostname
      ? [
          {
            protocol: "https",
            hostname: supabaseHostname,
            pathname: "/storage/v1/object/public/**",
          },
        ]
      : [],
  },
  experimental: {
    serverActions: {
      // Default (1MB) is too small for real screenshot uploads.
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
