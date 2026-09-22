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
- The 4 landing categories are separate routes in English — `/services`, `/projects`, `/about`, `/contact` — not anchor-scroll sections on the home page. `app/page.tsx` is just the `Hero`. On-page copy/labels stay in Spanish.
- Custom `--font-*` theme keys beyond `sans`/`serif`/`mono` don't get an auto-generated Tailwind utility (verified against the compiled CSS) — write a plain `.font-<name> { font-family: ... }` rule instead (see `.font-display`).

## Brand

The site implements the **Andrés Gil "Dark Dev"** brand manual (official palette, September 2026). The tokens in `globals.css` carry the manual's own names, so a value in the PDF can be grepped for directly.

| Token | Value | What it's for |
| --- | --- | --- |
| `--bg` / `bg-bg` | `#0B0F13` | The base of almost every surface — roughly 60% of any view |
| `--surface` / `bg-surface` | `#12171C` | Cards, one step up from the base |
| `--text` / `text-ink` | `#F5F6F7` | Headlines and body. **Never `#FFFFFF`** — the manual specifies a soft white |
| `--muted` / `text-muted` | `#8D96A0` | Secondary text |
| `--primary` / `*-primary` | `#3D8BFF` | Buttons, CTAs, links, the dot in the wordmark — ~10% |
| `--secondary` / `*-secondary` | `#00D4C8` | One or two keywords, icons, terminal-style detail — ~5% |

Three typefaces, each with one job:

- **Space Grotesk** (`.font-display`, 700) — headlines only.
- **Inter** (body default) — everything else: nav, buttons, paragraphs, form fields.
- **JetBrains Mono** (`font-mono`) — eyebrows, meta labels, tag chips and figure numbers. The manual's "etiquetas, comandos, HEX".

Rules the manual makes explicit, and where they already bite:

- **One dominant accent per view.** The blue is the CTA colour; cyan is a garnish. Today cyan appears in exactly three places — the service-card icons, the gallery figure numbers, and the hero keyword — which is about the 5% it's budgeted.
- **Cyan marks one or two words, never a paragraph.** `Hero` renders `*asterisks*` in `hero_title` / `hero_tagline` as cyan, so which word gets the accent is editable from `/admin/settings` instead of frozen in the component.
- **Dark text on a coloured fill** (`text-bg` on `bg-primary`). White on blue is only 3.1:1 — large titles at most, never a button label.
- **No gradients between blue and cyan, no extra neons, no colour outside the palette** except red/green for app states. The hero's hills are neutral tints derived from `--bg`/`--surface` for this reason.

Verified against the manual's own contrast table: text/bg 17.8:1, cyan/bg 10.3:1, blue/bg 5.8:1 — all four published ratios reproduce exactly.

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
- **The primary blue is the primary action's colour.** Don't spend it on "volver" or on secondary controls, or the real call to action stops reading as the loudest thing on the page. `ArrowLink` is the one exception — links are blue per the manual — and it shifts to cyan on hover rather than inventing a lighter blue.
- **A back control keeps its label visible** (that's `BackLink`, not `IconLink`) — on touch there is no hover to reveal where it goes.
