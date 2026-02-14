# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jwayyed Law, LLC marketing website — a law firm based in Columbus, Ohio. Next.js App Router with static content-as-code (no CMS or database). All page content is inline in page files.

## Commands

```bash
npm run dev          # Dev server with Turbopack (default)
npm run dev:webpack  # Dev server with Webpack (fallback)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint via next lint
```

No test framework is configured.

## Tech Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS 4** with custom theme in `tailwind.config.ts`
- **Fuse.js** for client-side search
- **Swiper** for review carousels
- **Formspree** for contact form submissions (ID: `xyzjyzgv`)
- **Lucide React** for icons
- **Sharp CLI** for image optimization (WebP/AVIF)

## Architecture

### Routing

File-based routing under `app/`. Six main practice area hubs with nested subpages:
- `/criminal-defense/*`, `/ovi-dui-defense/*`, `/personal-injury/*`, `/civil/*`, `/business/*`, `/other-services/*`
- `/courts/*` — 19 county court info pages
- `/locations/*` — 9 county-specific service pages
- `/our-law-firm/*`, `/about`, `/contact`

### Service Page Pattern

Every service page follows the same structure:
1. `export const metadata` — SEO (title, description, keywords, OpenGraph, canonical URL)
2. Breadcrumb config array
3. FAQ data array (question/answer pairs)
4. Component tree: `<Breadcrumbs>` → `<PageHero>` → content sections → `<FAQ>` → `<ContactCTA>`

### Key Components (`components/`)

| Component | Purpose |
|-----------|---------|
| `navbar.tsx` | Mega-menu navigation with mobile hamburger; contains the master nav data structure |
| `SearchBar.tsx` | Fuse.js search built from a **duplicated** copy of nav items (must be updated alongside navbar) |
| `PageHero.tsx` | Reusable hero section (title, description, CTA, background) |
| `FAQ.tsx` | Accordion with FAQPage Schema.org markup |
| `ContactCTA.tsx` | Contact form (Formspree) and firm info |
| `Breadcrumbs.tsx` | Breadcrumbs with BreadcrumbList Schema.org markup |
| `LocationsWeServe.tsx` | Links to 9 Ohio county pages; accepts `criminalDisclaimer` prop for Franklin County note |
| `OVIReviewsSwiper.tsx` | Swiper carousel for 25+ client reviews |

### Important Data Duplication

Navigation items are defined in **both** `components/navbar.tsx` and `components/SearchBar.tsx`. When adding or modifying nav links, both files must be updated to keep search results in sync.

### SEO

- `app/robots.ts` — robots.txt generation
- `app/sitemap.ts` — dynamic sitemap with 180+ routes
- Schema.org structured data: LegalService (root layout), FAQPage (FAQ component), BreadcrumbList (Breadcrumbs)
- Every page exports a `metadata` object with canonical URL

## Design Tokens (Tailwind)

- **Primary:** `#1a1a2e` (dark navy)
- **Accent:** `#b87333` (bronze/copper) — the firm's signature color
- **Secondary:** `#2d6a4f` (forest green)
- **Serif font:** Playfair Display (`font-serif` class)

## Path Alias

`@/*` maps to the project root (configured in `tsconfig.json`).

## Static Assets

Images in `public/assets/`, videos in `public/videos/`. Next.js image optimization is configured for WebP and AVIF with 30-day cache TTL.
## Brand Voice
- Professional but approachable
- Authoritative on Ohio law
- Modern and trustworthy
- Target audience: Ohio residents needing legal help
