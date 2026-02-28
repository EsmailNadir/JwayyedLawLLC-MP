# Navbar redesign – layout (how to fix it)

This doc shows **current** vs **proposed** so you can see exactly what changes and where everything goes.

---

## CURRENT (what you have now)

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│  [Logo]   Criminal Defense ▼   OVI/DUI ▼   Personal Injury ▼   Civil ▼   Business ▼   Other Services ▼   Courts ▼   Our Firm ▼   Contact   │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

- **9 top-level items** in the bar.
- Each one opens a **mega menu** with many links (dozens total).
- Phone number and “Schedule” are **not** in the bar (they’re in the footer).
- Result: bar looks very busy; lots of choices at once.

**Where things live today:**  
All practice areas, courts, locations, firm pages = in the navbar dropdowns.

---

## PROPOSED (simplified bar – what the engineer suggested)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│  [Logo]    Practice Areas    About    [ 🔍 Search... ]    (614) 285-5482    [ Schedule consultation ]              │
└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Only a few things in the bar:** Logo, “Practice Areas”, “About”, search, phone, one button.
- **Phone** and **Schedule** are visible immediately (no scrolling to footer).
- **“Practice Areas”** = one link that goes to a page that lists everything (see below).
- **Search** = how people find “OVI”, “Franklin County Court”, “estate planning”, etc. without a huge menu.

So: **no**, there shouldn’t be a bunch of stuff in the navbar. There should be this short list + search + phone + CTA.

---

## Where do “all the practices” live so users still see them?

### 1. Practice Areas page (one page that lists everything)

When someone clicks **“Practice Areas”** in the nav, they go to a **single page** that looks like this:

```
Practice Areas – Jwayyed Law

Criminal Defense
  → Ohio Criminal Defense Attorney
  → Assault, Domestic Violence, Theft, Expungement, etc.

OVI / DUI
  → First OVI, Second OVI, Refusal, CDL, etc.

Personal Injury
  → Car Accidents, Truck Accidents, Slip and Fall, etc.

Civil
  → Breach of Contract, Landlord–Tenant, Evictions, etc.

Business
  → Business Formation, LLC, Contracts, etc.

Other Services
  → Estate Planning, Trusts, Probate, Mediation, etc.

Courts we serve
  → Franklin County, Delaware, Butler, etc. (link to /courts or court pages)
```

So: **one link in the navbar** (“Practice Areas”) → **one page** with the full list and links to every practice area. Users **do** see all practices; they’re just not all in the top bar.

### 2. Search bar

If someone already knows what they want (e.g. “OVI” or “Franklin County court”), they type in the **search bar** and go straight to that page. They don’t need to see every practice in the menu.

### 3. Footer (same as now, or expanded)

Your **footer** can keep (or add) a full list of practice areas, courts, and locations. So:

- **Navbar** = short (Practice Areas, About, Search, Phone, Schedule).
- **Footer** = full list of practices/courts/locations for people who scroll down.

### 4. Homepage

The **homepage** can have a section like “Our practice areas” with buttons or links to Criminal Defense, OVI/DUI, Personal Injury, etc. So before anyone touches the nav, they can see the main categories.

---

## Side‑by‑side summary

| Item | Current | Proposed |
|------|--------|----------|
| **Navbar** | 9 items + mega menus (dozens of links) | 3–4 items: Practice Areas, About, Search, Phone, “Schedule” button |
| **All practice areas** | In navbar dropdowns | On **Practice Areas** page + **footer** + **search** + **homepage** |
| **Courts / locations** | In “Courts” dropdown | On **Practice Areas** page (or “Courts” link there), **footer**, **search** |
| **Phone** | Footer only | **In the navbar** (and footer) |
| **Call to action** | Not prominent in nav | **“Schedule consultation”** (or “Call now”) **in the navbar** |

---

## What you actually change in the project

1. **Navbar component**  
   - Replace the 9 mega-menu items with: **Practice Areas**, **About** (or “Our Firm”), **Search** (you already have search), **phone number**, **Schedule** button.  
   - Keep the same logo and mobile hamburger behavior; only the desktop nav items and layout change.

2. **Add or use a “Practice Areas” page**  
   - If you don’t have one, create a page at e.g. `/practice-areas` (or `/our-services`) that lists every practice area and court with links.  
   - Point the navbar link “Practice Areas” to this page.

3. **Footer**  
   - Keep (or add) a clear list of practice areas and courts so “all practices” are visible there too.

4. **Search**  
   - Keep search in the navbar (or make it more visible). Same data as now (nav items / SearchBar), so users can still find any practice or court by typing.

5. **Phone + CTA**  
   - Add `(614) 285-5482` and a “Schedule consultation” (or “Call now”) button/link in the navbar.

---

## One-sentence answer to “shouldn’t there be a bunch in the navbar?”

**No — the navbar should stay short (Practice Areas, About, Search, Phone, Schedule); “all the practices” are still on the site on the Practice Areas page, footer, homepage, and via search, so users can still see and find everything.**

If you want, next step can be: implement this in `components/navbar.tsx` (new layout + link to Practice Areas page) and add or update the Practice Areas page.
