# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for **Jwayyed Law LLC** (a.k.a. JJ Law Ohio), a Columbus-based Ohio law firm. Built with Next.js App Router (Next 16) + React 19 + TypeScript + Tailwind v4. Content-as-code: there is no CMS or database — every page, service description, blog post, and case result lives in TS files in `app/` or `data/`.

The site exists to rank in Ohio for legal-consumer searches (criminal defense, OVI/DUI, personal injury, civil, business, trusts/estate, probate) and convert visitors via Calendly + Formspree. SEO and structured data are first-class concerns; treat them as part of "the feature," not a polish step.

## Commands

```bash
npm run dev          # Dev server on :3000 with Turbopack
npm run dev:webpack  # Fall back to plain Next dev (use if Turbopack misbehaves)
npm run build        # Production build
npm run start        # Serve the production build
npm run lint         # next lint (uses default Next ESLint config)
```

There is no test runner configured. There is no typecheck script — `tsc --noEmit` runs implicitly during `next build`; if you need an isolated check run `npx tsc --noEmit`.

## Architecture

### Content-as-code routing

All routes are file-based under `app/`. Each practice area is a top-level segment with sub-route pages per offering:

- `app/criminal-defense/`, `app/ovi-dui-defense/`, `app/personal-injury/`, `app/civil/`, `app/business/`, `app/other-services/`, `app/trusts/` — practice-area landing pages plus per-topic sub-pages.
- `app/courts/<county>/`, `app/courts/<court-name>/` — court-specific guides.
- `app/locations/<county>/<service-county>/` — location × practice-area landing pages (e.g. `locations/franklin-county/personal-injury-franklin-county/`). This is the local-SEO matrix; new practice areas in new counties go here.
- `app/our-law-firm/` — firm content: `about-us/`, `our-attorneys/<slug>/`, `case-results/`, `document-templates/`, `blog/<slug>/`.

Shared content lives in `data/`:
- `data/services.ts` — typed `ServiceCard[]` arrays imported by the practice-area landing pages to render their sub-page grids.
- `data/blog-posts.ts` — full blog post bodies as HTML strings inside a typed `BlogPost[]`. The blog index, individual `[slug]` page, and sitemap all derive from this array.
- `data/team-members.ts` — attorney bios.

When adding a new sub-page: create the route folder + `page.tsx`, then add a matching `ServiceCard` to `data/services.ts` so the parent landing page picks it up, **and** add the URL to `app/sitemap.ts` (see SEO section below).

### Path alias

`tsconfig.json` maps `@/*` → repo root, so always import with `@/components/...`, `@/data/...`, `@/app/...` rather than relative `../../`.

### SEO is wired in three places

1. **Per-page `metadata`** — every `page.tsx` exports a `Metadata` object with `title`, `description`, `keywords`, `openGraph`, and `alternates.canonical`. Copy the pattern from a sibling page when creating a new one; do not invent new shapes.
2. **`app/layout.tsx`** — root `metadata`, OG defaults, favicon/manifest wiring, the global LegalService **JSON-LD** block (`@type: LegalService`, address, geo, hours, services). Update the JSON-LD here when firm-level facts change (new service category, address, phone, social links).
3. **`app/sitemap.ts`** — the master URL list. **It is hand-maintained, not auto-generated from the filesystem.** Any new route must be added here or it will not appear in the sitemap. Blog posts are the only exception — they're derived from `data/blog-posts.ts`. There's also `app/robots.ts`.

`metadataBase` and the canonical URL come from `process.env.NEXT_PUBLIC_SITE_URL` (defaults to `https://www.jjlawohio.com`).

### Redirects

URL redirects (e.g., the removed Immigration practice area pointing to `/other-services`) live in `next.config.ts` under `redirects()`, **not** in middleware. Add new permanent redirects there. Removed practice-area code is preserved in `_archived/` for reference — do not re-import from it.

### Layout, navigation, and third-party widgets

- `app/layout.tsx` wraps every page with `AnnouncementBar`, `Navbar`, `<main>`, `Footer`, and the Tidio chat script (loaded via `next/script` `afterInteractive`). `TidioChatLabelHide` is a client component that suppresses Tidio's default label.
- `components/navbar.tsx` is the source of truth for the top-level nav (8 items, no dropdowns). Update `mainNavItems` there when adding a new top-level section.
- `components/SearchBar.tsx` builds an in-memory Fuse.js search index from nav items at runtime. If you add navigable destinations that should be searchable, expose them through the nav structure SearchBar consumes.
- Common page primitives: `PageHero`, `Breadcrumbs`, `FAQ`, `ContactCTA`, `ServiceCard`. Practice-area pages follow a consistent pattern: `<Breadcrumbs/> + <PageHero/> + service grid (from data/services.ts) + <FAQ/> + <ContactCTA/>`. Match this pattern when adding new landing pages.

### Forms and scheduling

- **Contact form**: posts to Formspree (`https://formspree.io/f/xyzjyzgv`) directly from `app/contact/page.tsx`. No backend code.
- **Scheduling**: `components/calendly.tsx` injects the Calendly widget script and embeds `https://calendly.com/jjlawohio`.
- **Chat**: Tidio script in `app/layout.tsx`. The navbar manages widget visibility on mobile (hides the accessibility widget when chat is present).

### Styling

- Tailwind v4 via `@tailwindcss/postcss` (config in `tailwind.config.ts`, plus `postcss.config.{js,mjs}`). Global styles in `app/globals.css`.
- Brand color: `#b87333` (copper) — used widely as accent. Fonts are `DM Sans` (body) and `Playfair Display` (headings), loaded via `next/font/google` in `app/layout.tsx`.

### Images and video

- `next.config.ts` enables AVIF/WebP, custom device/image sizes, and 30-day cache TTL. Always use `next/image` — never raw `<img>`.
- Videos are handled by `next-videos` (the config wraps `nextConfig` with `withVideos`). MP4 assets in `public/assets/` are tracked via Git LFS (see `.gitattributes`).
- `experimental.optimizePackageImports: ['lucide-react']` is on — import individual icons (`import { Phone } from 'lucide-react'`), don't `import * as`.

### Client vs. server components

Pages default to server components (so `metadata` exports work). Components that need state, effects, or browser APIs (`Navbar`, `SearchBar`, `Calendly`, `HomePageClient`, `PageHero`) are explicitly marked `'use client'`. The home route splits into `app/page.tsx` (server, exports `metadata`) and `app/HomePageClient.tsx` (client, all the interactive UI) — follow this split when a page needs both metadata and client behavior.
