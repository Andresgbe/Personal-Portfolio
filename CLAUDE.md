@AGENTS.md

# AGM Software Agency — Web & CMS

Sitio oficial y portafolio de **AGM Software Agency**, construido con Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion y Supabase.

## Structure

- `app/` — routes only (`layout.tsx`, `page.tsx`, route segments). Keep this folder limited to Next.js routing files.
- `components/ui/` — reusable atoms (`AgmLogo`, `SpotlightCard`, `Hill`, `buttons`, `ServiceCard`, `ProjectCard`, `AutomationRow`).
- `components/sections/` — landing & page sections (`Hero`, `HeroShowcase`, `AgencyBento`, `AgencyProcess`, `CtaBanner`, `ContactEstimator`, `ProjectGrid`, `ServicesGrid`, `AutomationList`, etc.).
- `components/layout/` — persistent site chrome (`Header`, `Footer`, `PageShell`), rendered from `app/(marketing)/layout.tsx` so it appears on every public route. `/admin` is a sibling route (outside the `(marketing)` group) with its own chrome.
- `data/` — types plus **fallback** content (projects, services, etc.), imported via `@/data/...`. Real content lives in Supabase and is edited from `/admin`; these arrays render when Supabase isn't configured (see `supabase/SETUP.md`) and double as seed data.
- `lib/queries/` — the data-fetching functions pages call (`getSoftwareProjects()`, `getServices()`, `getSiteSettings()`, etc.) — Supabase-backed, falling back to `data/*.ts` when unconfigured.
- `lib/supabase/` — Supabase client factories (browser/server/middleware) and the `isSupabaseConfigured()` guard.
- `lib/icons/registry.ts` — curated string-name → `LucideIcon` map, since DB rows store icon names, not components.
- `app/admin/` — the CMS: Supabase Auth–gated (`proxy.ts` + `app/admin/(protected)/layout.tsx`), one section per content type, each with its own `actions.ts` (Server Actions) alongside its pages.
- `public/brand/` — official AGM Software Agency SVG and PNG brand assets.

## Brand — AGM Software Agency ("Deep Petrol & Terracotta Tech")

| Token | Value | Purpose |
| --- | --- | --- |
| `--bg` / `bg-bg` | `#07161B` | Deep petrol base (~60% of any view) |
| `--surface` / `bg-surface` | `#0F262E` | Elevated cards and panels |
| `--text` / `text-ink` | `#F7F5F1` | Soft warm off-white for headlines and body |
| `--muted` / `text-muted` | `#8CA8AE` | Technical slate-teal for secondary copy |
| `--primary` / `*-primary` | `#E8703A` | Vibrant Terracotta Orange — CTAs, primary accents |
| `--secondary` / `*-secondary` | `#5EC2CC` | Luminous Teal — keywords, terminal badges, icons |

Three typefaces:
- **Space Grotesk** (`.font-display`, 700) — headlines.
- **Inter** (body default) — navigation, buttons, paragraphs, form fields.
- **JetBrains Mono** (`font-mono`) — eyebrows, meta labels, tag chips, and figure numbers.
