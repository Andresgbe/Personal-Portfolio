@AGENTS.md

# Portfolio project

Personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS v4.

## Structure

- `app/` — routes only (`layout.tsx`, `page.tsx`, route segments). Keep this folder limited to Next.js routing files.
- `components/ui/` — small reusable atoms (e.g. `Hill`).
- `components/sections/` — landing sections (`Hero`, `ProjectGrid`, etc.).
- `components/layout/` — persistent site chrome (`Header`), rendered from the root layout so it appears on every route.
- `data/` — static content (projects, experience, links, etc.) consumed by pages/components, imported via `@/data/...`.
- `public/` — static assets (images, icons).

The `@/*` path alias resolves to the project root (see `tsconfig.json`), so prefer `@/components/...` and `@/data/...` over relative imports across folders.

## Conventions

- No default create-next-app boilerplate content — `app/page.tsx` and `app/layout.tsx` have been cleared of the starter template.
- Keep content (text, project lists, etc.) in `data/` rather than hardcoded in components, so pages stay presentational.
- The 4 landing categories are separate routes in English — `/services`, `/work`, `/about`, `/contact` — not anchor-scroll sections on the home page. `app/page.tsx` is just the `Hero`. On-page copy/labels stay in Spanish.
- App-wide typeface is Fraunces (`--font-sans` / `--font-serif` in `globals.css`) — the intended fallback for the licensed "Means Web", since it has no free `@font-face` source. If Means Web is licensed later, swap the `@font-face` in `globals.css` and keep Fraunces as the CSS fallback stack.
- Custom `--font-*` theme keys beyond `sans`/`serif`/`mono` don't get an auto-generated Tailwind utility (verified against the compiled CSS) — write a plain `.font-<name> { font-family: ... }` rule instead (see `.font-nav`).
