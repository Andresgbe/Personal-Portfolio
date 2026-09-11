@AGENTS.md

# Portfolio project

Personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS v4.

## Structure

- `app/` — routes only (`layout.tsx`, `page.tsx`, route segments). Keep this folder limited to Next.js routing files.
- `components/ui/` — small reusable atoms (e.g. `Hill`).
- `components/sections/` — landing sections (`Hero`, `ProjectGrid`, etc.).
- `components/layout/` — persistent site chrome (`Header`), rendered from `app/(marketing)/layout.tsx` so it appears on every public route. `/admin` is a sibling route (outside the `(marketing)` group) with its own chrome — it does not get this Header.
- `data/` — types plus **fallback** content (projects, services, etc.), imported via `@/data/...`. Real content lives in Supabase and is edited from `/admin`; these arrays only render when Supabase isn't configured (see `supabase/SETUP.md`) and double as the seed data in `supabase/migrations/0001_init.sql`.
- `lib/queries/` — the actual data-fetching functions pages call (`getSoftwareProjects()`, `getServices()`, etc.) — Supabase-backed, falling back to `data/*.ts` when unconfigured.
- `lib/supabase/` — Supabase client factories (browser/server/middleware) and the `isSupabaseConfigured()` guard.
- `lib/icons/registry.ts` — curated string-name → `LucideIcon` map, since DB rows store icon names, not components.
- `app/admin/` — the CMS: Supabase Auth–gated (`proxy.ts` + `app/admin/(protected)/layout.tsx`), one section per content type, each with its own `actions.ts` (Server Actions) alongside its pages.
- `public/` — static assets (images, icons).

The `@/*` path alias resolves to the project root (see `tsconfig.json`), so prefer `@/components/...` and `@/data/...` over relative imports across folders.

## Conventions

- No default create-next-app boilerplate content — `app/page.tsx` and `app/layout.tsx` have been cleared of the starter template.
- Keep content (text, project lists, etc.) in `data/` rather than hardcoded in components, so pages stay presentational.
- The 4 landing categories are separate routes in English — `/services`, `/work`, `/about`, `/contact` — not anchor-scroll sections on the home page. `app/page.tsx` is just the `Hero`. On-page copy/labels stay in Spanish.
- App-wide typeface is Fraunces (`--font-sans` / `--font-serif` in `globals.css`) — the intended fallback for the licensed "Means Web", since it has no free `@font-face` source. If Means Web is licensed later, swap the `@font-face` in `globals.css` and keep Fraunces as the CSS fallback stack.
- Custom `--font-*` theme keys beyond `sans`/`serif`/`mono` don't get an auto-generated Tailwind utility (verified against the compiled CSS) — write a plain `.font-<name> { font-family: ... }` rule instead (see `.font-nav`).

## Buttons

All four button shapes live in `components/ui/buttons.tsx`. These were chosen deliberately from a set of options — **use them instead of hand-rolling button classes**, and extend that file rather than adding a fifth shape to a page.

| Component | Where it goes | Its move on hover |
| --- | --- | --- |
| `ButtonLink` (default `primary`) | The one main action per page — "Ver proyectos", "Ver en vivo" | Arrow advances 4px; warm shadow underneath |
| `ButtonLink variant="secondary"` | The alternative beside it — "Contactar" | Outline fills faintly (`white/10`) |
| `IconLink` / `BackLink` | Icon-only controls, and "volver" | 44px circle brightens; back arrow nudges left 2px |
| `ArrowLink` | Text links inside a paragraph or a spec list | Underline appears; arrow lifts up-right 2px |

Rules that hold the set together:

- **44px minimum touch target.** The pills get there via `py-3` over a 20px line box; the circle is `size-11`. Don't shrink either.
- **Arrows are lucide icons, never the `←` / `↗` characters** — they align on the text baseline and can be animated independently of the label.
- **Focus is an `outline`, not a `ring`.** The 2px gap has to show whatever background the control sits on, and the hero gradient and the flat section background are different colours.
- **The accent is the primary action's colour.** Don't spend it on "volver" or on secondary controls, or the real call to action stops reading as the loudest thing on the page.
- **A back control keeps its label visible** (that's `BackLink`, not `IconLink`) — on touch there is no hover to reveal where it goes.
