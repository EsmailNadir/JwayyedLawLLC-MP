# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Before Starting Any Task

1. Read this entire CLAUDE.md first
2. Identify which files will be affected
3. State your plan and wait for approval before writing code
4. After making changes, run `npm run build` to verify no errors
5. Show a summary of all changes before committing

## Project Overview

Marketing website for **Jwayyed Law LLC**, a Columbus, Ohio law firm. Live at `https://www.jjlawohio.com`.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Turbopack (dev)

## Commands

```bash
npm run dev      # Dev server with Turbopack
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint via Next.js
```

No test framework is configured.

## Architecture

### Routing (`app/`)

All pages use the Next.js App Router with file-based routing. Major route groups:

| Route | Content |
|---|---|
| `/` | Homepage with video hero, testimonials carousel, search |
| `/criminal-defense/*` | Criminal defense practice area sub-pages |
| `/ovi-dui-defense/*` | OVI/DUI defense sub-pages |
| `/personal-injury/*` | Personal injury sub-pages |
| `/civil/*` | Civil litigation sub-pages |
| `/business/*` | Business law sub-pages |
| `/trusts/*` | Trust-related sub-pages |
| `/other-services/*` | Additional legal services (estate planning, immigration, mediation, etc.) |
| `/courts/*` | Ohio court information pages |
| `/locations/*` | County-specific landing pages |
| `/our-law-firm/*` | About, attorneys, testimonials, blog (with `[slug]` dynamic route), case results |
| `/contact` | Contact form + Calendly scheduling embed |

### Homepage vs. Inner Pages (Important Gotcha)

`app/page.tsx` is a large `'use client'` component with **its own inline Navbar and Footer** that are completely separate from `components/navbar.tsx` and `components/footer.tsx`. Changes to the shared navbar/footer will NOT affect the homepage, and vice versa. The root layout (`app/layout.tsx`) wraps all pages with the shared Navbar and Footer, but the homepage renders its own on top.

### Service Page Pattern

Nearly all practice area sub-pages follow a consistent structure. Use any existing page (e.g., `app/criminal-defense/assault-charges/page.tsx`) as a template:

1. `Metadata` export with title, description, keywords, openGraph, canonical URL
2. `breadcrumbItems` array
3. `faqs` array of `{ question, answer }` objects
4. Page component renders: `Breadcrumbs` → `PageHero` → content sections → `FAQ` → `ContactCTA`

### Navigation Data Duplication

Navigation items are defined inline in **two separate places** that must stay in sync:
- `components/navbar.tsx` — `navItems` array (line ~31)
- `components/SearchBar.tsx` — duplicated `navItems` for Fuse.js search index

When adding/removing pages, update both files **and** `app/sitemap.ts`.

### SEO

- `app/sitemap.ts` — Dynamic XML sitemap (90+ URLs). Must be updated when adding new pages.
- `app/robots.ts` — Programmatic robots.txt
- Per-page `Metadata` exports with structured data (JSON-LD)
- `FAQ` and `Breadcrumbs` components auto-generate `FAQPage` and `BreadcrumbList` JSON-LD schema

### Tailwind CSS 4

Uses `@import "tailwindcss"` in `app/globals.css` (not the old `@tailwind base/components/utilities` directives). Custom theme tokens are in `tailwind.config.ts`:
- **Font:** `Playfair Display` (serif)
- **Colors:** `primary` (#1a1a2e / #2d3436), `accent` (#b87333 bronze), `secondary` (#2d6a4f forest green)

### Next.js Config

`next.config.ts` uses **CommonJS** (`require`/`module.exports`), not ESM — required by the `next-videos` wrapper.

## Hardcoded Service IDs

No environment variables are used. All external service IDs are inline:

| Service | ID/URL | Locations |
|---|---|---|
| **Formspree** | `xyzjyzgv` | `components/ContactCTA.tsx`, `app/contact/page.tsx` (×2) |
| **Calendly** | `calendly.com/jjlawohio` | `components/calendly.tsx` |
| **Site URL** | `jjlawohio.com` | `app/layout.tsx`, `app/sitemap.ts`, `components/Breadcrumbs.tsx`, individual page metadata |

## Coding Rules

- **NEVER** install, add, or upgrade any dependency without explicit approval
- **NEVER** modify shared components (Navbar, Footer, ContactCTA, SearchBar) without explicit approval
- **NEVER** delete or rename existing files without explicit approval
- When creating new practice area pages, **ALWAYS** follow the existing service page pattern exactly (Metadata → Breadcrumbs → PageHero → content → FAQ → ContactCTA)
- When adding new pages, update **ALL THREE**: `components/navbar.tsx` navItems, `components/SearchBar.tsx` navItems, and `app/sitemap.ts`
- Always run `npm run build` before committing to catch errors
- Keep commits atomic — one logical change per commit with a descriptive message
- If unsure about anything, **ASK** before making changes

## Git Workflow

- All work happens on the `dev` branch
- PRs go from `dev` → `main`
- Push using the **EsmailNadir** GitHub account (already configured via `gh auth`)
- **NEVER** push directly to `main`
- Always commit before moving to a new task

## Known Issues & Tech Debt

- **Homepage has its own inline Navbar/Footer** — `app/page.tsx` does NOT use the shared components from `components/`. Any nav/footer changes must be made in BOTH places until this is unified.
- **Navigation data is duplicated** between `navbar.tsx` and `SearchBar.tsx` — must be kept in sync manually.
- **Formspree ID is hardcoded in 3 separate files** — changing it requires updating `components/ContactCTA.tsx` and `app/contact/page.tsx` (×2).

## Deployment

Deployed to **Vercel** via GitHub integration (automatic deploys on push). No CI/CD config files.

Git LFS tracks `public/assets/*.mp4` (configured in `.gitattributes`).
