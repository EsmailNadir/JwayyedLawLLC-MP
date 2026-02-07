# Page Design Patterns — Jwayyed Law LLC

Use these patterns when adding or editing pages so new work matches the existing site.

---

## ⚠️ Ohio law and dates

**All legal content must reflect current 2026 Ohio law.** When writing or updating pages (criminal defense, OVI, traffic, drug charges, courts, etc.):

- Cite Ohio Revised Code (ORC) sections as current for 2026.
- Penalties, fines, jail ranges, and license consequences must match 2026 Ohio law (including any post-HB 37 OVI changes and current misdemeanor/felony sentencing).
- Use phrasing like “current 2026 Ohio law,” “Ohio law as of 2026,” or “under current Ohio Revised Code” where appropriate.
- Marijuana possession, criminal damaging, and any other offense pages must use 2026 penalties and eligibility (e.g. record sealing/expungement).

---

## 1. Criminal Defense Sub-Pages (e.g. Criminal Mischief, Petty Theft, Obstruction)

### File structure
- Single file: `app/criminal-defense/[slug]/page.tsx`
- Server component (no `'use client'`)

### Imports
```tsx
import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';
```

### Metadata
- **title:** `'[Topic] Lawyer in Ohio | [Subtitle] | Jwayyed Law LLC'`
- **description:** Ends with `Schedule consultation: (614) 285-5482`
- **keywords:** Array of 8–10 relevant terms
- **openGraph:** title, description, url `https://www.jjlawohio.com/criminal-defense/[slug]`
- **alternates.canonical:** `'/criminal-defense/[slug]'`

### Breadcrumbs
```tsx
const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: '[Page Title]', href: '/criminal-defense/[slug]' },
];
```

### Page structure (order)
1. `Breadcrumbs items={breadcrumbItems}`
2. `PageHero` with `title` and `description` (no extra props unless needed)
3. Main content `<section className="py-16 bg-white">`
4. `FAQ faqs={faqs}`
5. `ContactCTA`

### Main content wrapper
```tsx
<section className="py-16 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="prose prose-lg max-w-none">
      {/* content */}
    </div>
  </div>
</section>
```

### Typography (criminal defense style)
- **H2 (page intro):** `className="text-3xl font-bold text-gray-900 mb-6"`
- **H3 (sections):** `className="text-2xl font-bold text-gray-900 mt-8 mb-4"`
- **H4 (subsections):** `className="font-semibold text-gray-900 mb-4"` or `className="font-semibold text-gray-900 mt-6 mb-4"`
- **Body:** `className="text-gray-700 mb-6 leading-relaxed"`
- **Body inside boxes:** `className="text-gray-700 mb-4"`

### Content boxes
- **Single box:** `className="bg-gray-50 p-6 rounded-lg mb-6"` or `mb-8`
- **Lists:** `className="list-disc pl-6 space-y-3 text-gray-700 mb-4"`

### Related practice areas (before closing `</div>` of prose)
```tsx
<div className="bg-accent/10 border-l-4 border-accent p-6 mb-8">
  <h4 className="font-semibold text-gray-900 mb-2">Related Practice Areas</h4>
  <div className="flex flex-wrap gap-3">
    <Link href="/criminal-defense/..." className="text-accent hover:underline">...</Link>
  </div>
</div>
```

### FAQ
- 5 items typical; each `{ question: string, answer: string }`.
- Pass to `<FAQ faqs={faqs} />`.

---

## 2. OVI Sub-Pages (e.g. First OVI, High-Tier OVI)

### Same as criminal defense, plus:
- **Import:** `import OVIReviews from '@/components/OVIReviews';`
- **OVIReviews placement (per JJ):** Place **immediately after PageHero** so reviews are “in their faces”:
  ```tsx
  <Breadcrumbs ... />
  <PageHero ... />
  <OVIReviews />
  <section className="py-16 bg-white">
  ```
- **Typography:** OVI pages use explicit fonts: `font-['Playfair_Display',_'Georgia',_serif]` for h2/h3 and `font-['Inter',_'Arial',_sans-serif]` for body (optional; criminal defense pages often omit these and use the prose defaults).

---

## 3. Personal Injury / Other Content Pages

- Same layout: Breadcrumbs → PageHero → section → FAQ → ContactCTA.
- Some use `font-['Playfair_Display',_'Georgia',_serif]` on h2/h3 and `font-['Inter',_'Arial',_sans-serif]` on paragraphs.
- Link cards: `className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all"` (or `hover:border-accent` on criminal defense hub).

---

## 4. PageHero

- **Props:** `title`, `description`, optional `phoneNumber`, `showCTA` (default true), `className`.
- Background: `/assets/hero-bg.jpg` with gradient overlay.
- CTA: phone link + “Schedule Consultation” link to `/contact`.

---

## 5. ContactCTA

- No props required (uses default phone, email, address).
- Dark section `#2c2c2c`, form with `#b87333` accent.

---

## 6. Colors

- **Theme accent (bronze):** `#b87333` or Tailwind `accent` (used in criminal defense cards and “Related Practice Areas”).
- **Tailwind orange:** `orange-500` used in Breadcrumbs, FAQ, SearchBar, many link hovers.
- **Content boxes:** `bg-gray-50`; **Related strip:** `bg-accent/10 border-l-4 border-accent`.

---

## 7. New Criminal Defense Page Checklist

When adding a new page (e.g. Criminal Damaging, Marijuana Possession):

1. **Use 2026 Ohio law** for all ORC citations, penalties, sentencing, and expungement/record sealing (see “Ohio law and dates” at top of this file).
2. Create `app/criminal-defense/[slug]/page.tsx`.
3. Follow criminal-mischief/petty-theft structure: Metadata, breadcrumbItems, faqs, then Breadcrumbs → PageHero → section (prose) → Related Practice Areas strip → FAQ → ContactCTA.
4. Use criminal defense typography: `text-3xl font-bold`, `text-2xl font-bold`, `text-gray-700 mb-6 leading-relaxed`, `bg-gray-50 p-6 rounded-lg`, `bg-accent/10 border-l-4 border-accent` for related links.
5. Add the page to **navbar** (`components/navbar.tsx`) in the Criminal Defense `subLinks` array.
6. Add the page to **SearchBar** (`components/SearchBar.tsx`) in the Criminal Defense section so it matches the navbar.

---

## 8. Franklin County Municipal Court page

When updating `app/courts/franklin-county-municipal-court/page.tsx` with client content:

- Use client’s structure: title, subheading, phone (614) 285-5482, Schedule Consultation → `/contact`, court address 375 S. High Street, Columbus OH 43215, Court Services and Case Types, How We Can Help, Why Choose, FAQ.
- **Disclaimer:** Firm only handles civil, business, estate planning in Franklin County (no criminal, OVI, traffic). “How We Can Help” and “Our firm provides” must list only those services.
- FAQ: use client’s five questions; write answers using **2026 Ohio law** and court info; state firm’s Franklin County scope (civil, business, estate planning only).

---

*Last updated for JJ/330 client changes. All legal content: 2026 Ohio law. Use this when implementing new pages or edits.*
