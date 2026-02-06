# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
| `/criminal-defense/*` | 10 criminal defense practice area sub-pages |
| `/ovi-dui-defense/*` | 10 OVI/DUI defense sub-pages |
| `/personal-injury/*` | 12 personal injury sub-pages |
| `/civil/*` | 10 civil litigation sub-pages |
| `/business/*` | 10 business law sub-pages |
| `/trusts/*` | 9 trust-related sub-pages |
| `/other-services/*` | 16 additional legal services (estate planning, immigration, mediation, etc.) |
| `/courts/*` | 17 Ohio court information pages |
| `/locations/*` | 6 county-specific landing pages |
| `/our-law-firm/*` | About, attorneys, testimonials, blog (with `[slug]` dynamic route), case results |
| `/contact` | Contact form + Calendly scheduling embed |

### Root Layout (`app/layout.tsx`)

Wraps all pages with: sticky Navbar, Footer, and comprehensive SEO metadata (Open Graph, Twitter Cards, JSON-LD `LegalService` schema). `metadataBase` is set to `https://www.jjlawohio.com`.

### Shared Components (`components/`)

- **`navbar.tsx`** (682 lines) — Complex responsive mega-menu (desktop dropdowns + mobile drawer). Contains all navigation item definitions inline.
- **`SearchBar.tsx`** — Client-side fuzzy search using **Fuse.js** over navigation items, keyboard-navigable.
- **`ContactCTA.tsx`** — Reusable contact call-to-action with form submitting to **Formspree** (`xyzjyzgv`).
- **`FAQ.tsx`** — Accordion FAQ with JSON-LD `FAQPage` schema markup.
- **`Breadcrumbs.tsx`** — Breadcrumb nav with JSON-LD `BreadcrumbList` schema.
- **`PageHero.tsx`** — Reusable dark-gradient hero banner for service pages.
- **`OVIReviews.tsx`** — Review carousel for OVI/DUI pages.
- **`ServiceCard.tsx`** — Card component for service listings.
- **`LoadingOptimizer.tsx`** — Client-side preloader for critical images/video.
- **`calendly.tsx`** — Calendly scheduling widget embed.
- **`footer.tsx`** — Disclaimer footer.

### Homepage (`app/page.tsx`)

Large single-file client component (~519 lines) with its own inline Navbar/Footer (separate from `components/`), video hero, "Why Choose Us" section, and a 23-review testimonials carousel auto-rotating every 6 seconds.

### SEO

- `app/robots.ts` — Programmatic robots.txt (allows all, disallows `/api/` and `/_next/`)
- `app/sitemap.ts` — Dynamic XML sitemap with 90+ URLs, priorities, and change frequencies
- Per-page `Metadata` exports with structured data
- Google Search Console verification file in `public/`

## Configuration Details

### Tailwind Theme (`tailwind.config.ts`)

Custom design tokens:
- **Font:** `Playfair Display` (serif)
- **Colors:** `primary` (#1a1a2e deep charcoal / #2d3436 dark slate), `accent` (#b87333 bronze), `secondary` (#2d6a4f forest green)

### Next.js Config (`next.config.ts`)

- Wrapped with `next-videos` for MP4 support
- Image optimization: WebP + AVIF, 30-day cache TTL
- Package import optimization for `lucide-react`
- Compression enabled, `poweredByHeader` disabled

### External Services

- **Formspree** — Contact form backend (`xyzjyzgv`)
- **Calendly** — Appointment scheduling (`calendly.com/jjlawohio`)
- **Git LFS** — Tracks `.mp4` video files (configured in `.gitattributes`)

## Deployment

Deployed to **Vercel**. No CI/CD pipeline config files exist — relies on Vercel's GitHub integration for automatic deploys.
