# Current State & Remaining Tasks

Based on review of the codebase. Use this when implementing JJ/Coach Greg changes.

---

## ⚠️ 2026 Ohio law requirement

**All new and updated legal content must use current 2026 Ohio laws.** This includes:

- New pages (Criminal Damaging, Marijuana Possession, Franklin County Municipal Court content).
- Any penalties, fines, jail ranges, license consequences, ORC citations.
- Record sealing / expungement eligibility (ORC 2953) as of 2026.
- OVI/DUI penalties (HB 37 and current law).
- Marijuana possession penalties and decriminalization thresholds as of 2026.

When writing, use “current 2026 Ohio law,” “Ohio law as of 2026,” or “under Ohio Revised Code (current 2026)” where appropriate.

---

## What We Have

### Navbar (`components/navbar.tsx`)
- **Criminal Defense** subLinks (lines 36–47): Ohio Criminal Defense Attorney, Assault, Domestic Violence, Criminal Mischief, Criminal Trespass, Petty Theft, Resisting Arrest, Obstruction of Official Business, Speeding Tickets, Driving Under Suspension, No Operator's License, Expungement / Record Sealing, All Criminal Defense Areas. **No Criminal Damaging, no Marijuana Possession.**
- **Trusts:** Top-level item (lines 125–140) with Columbus Trusts Attorney + all trust sub-pages. **Not under Estate Planning.**
- **Other Services → Estate Planning** (lines 146–151): Estate Planning & Wills, Powers of Attorney, Guardianships only. **No Trusts link here.**
- OVI, Personal Injury, Civil, Business, Courts match expected structure.

### SearchBar (`components/SearchBar.tsx`)
- **Criminal Defense** (lines 84–91): Columbus Criminal Defense Attorney, Assault Charges, Domestic Violence, **Juvenile Offenses** (`/criminal-defense/juvenile-offenses`), Expungement / Record Sealing. **Missing:** Criminal Mischief, Criminal Trespass, Petty Theft, Resisting Arrest, Obstruction, Speeding Tickets, Driving Under Suspension, No Operator's License. **Juvenile Offenses** points to a route that **does not exist** (no `app/criminal-defense/juvenile-offenses/`).
- **Estate Planning** (lines 168–170): Has `{ name: 'Trusts', href: '/other-services/trusts' }` — **wrong URL**; real Trusts page is `/trusts`.
- Courts: Has Franklin County Juvenile Court; confirm that page exists if keeping.

### Criminal Defense Pages (existing)
- **Exist:** assault-charges, criminal-mischief, criminal-trespass, domestic-violence, driving-under-suspension, expungement-record-sealing, no-operators-license, obstruction-of-official-business, petty-theft, resisting-arrest, speeding-tickets, page.tsx (hub).
- **Do not exist:** criminal-damaging, marijuana-possession, juvenile-offenses.

### Franklin County (`app/courts/franklin-county/page.tsx`)
- **Line 35–36:** Says firm does "misdemeanor defense, OVI/DUI charges, traffic violations, and civil disputes" in Franklin County — **wrong** (JJ: civil, business, estate planning only).
- **Line 41–42:** Card says "Misdemeanor cases, OVI/DUI, traffic violations, and civil disputes" — **wrong**.
- **Lines 45–46:** "Why Choose" paragraph doesn’t say criminal/OVI/traffic excluded; needs to say only civil, business, estate planning in Franklin.

### Assault (`app/criminal-defense/assault-charges/page.tsx`)
- **Line 94:** Heading "Types of Assault Charges in Ohio" — change per JJ (no "types of Assault").
- **Line 294:** "We handle all types of assault cases, from simple…" — remove "all types of".

### OVI Pages – OVIReviews placement
- **first-ovi:** OVIReviews at line 202 (after main section, before FAQ). **Move to right after PageHero** (after line 55).
- **Main OVI page** (`app/ovi-dui-defense/page.tsx`): OVIReviews at line 299 (after section). **Move to after PageHero** (after line 65).
- Same pattern for all other OVI sub-pages: move `<OVIReviews />` to immediately after `</PageHero>`.

### Personal Injury (and similar) – Columbus/Franklin wording
- **Change "Columbus, Franklin County, and throughout Ohio" → "throughout Ohio"** and **"judicial preferences in Columbus and throughout Ohio" → "judicial preferences throughout Ohio"** in:
  - `app/personal-injury/page.tsx` (lines 200, 283, 291)
  - `app/personal-injury/car-accidents/page.tsx` (162, 166)
  - `app/personal-injury/truck-accidents/page.tsx` (160, 164)
  - `app/personal-injury/slip-and-fall/page.tsx` (159, 163)
  - `app/personal-injury/pedestrian-accidents/page.tsx` (160, 164)
  - `app/personal-injury/motorcycle-accidents/page.tsx` (159, 163)
  - Plus wrongful-death, workplace-injuries, premises-liability, nursing-home-abuse, medical-malpractice, dog-bites, catastrophic-injuries (representation line only, if present).

### Trusts page (`app/trusts/page.tsx`)
- **Lines 59–61:** First intro paragraph. **Add** one sentence that Trusts are part of estate planning (e.g. after first sentence or at end of first paragraph).

---

## Tasks Checklist (in order)

**Reminder:** All legal content must reflect **2026 Ohio law** (ORC, penalties, sentencing, expungement, OVI, marijuana, etc.).

### New pages (use 2026 Ohio law)
1. Add **Criminal Damaging** page at `app/criminal-defense/criminal-damaging/page.tsx` (pattern: criminal-mischief). Content: ORC 2909.06, penalties, defenses, expungement — **2026 Ohio law.**
2. Add **Marijuana Possession** page at `app/criminal-defense/marijuana-possession/page.tsx` (pattern: criminal-mischief). Content: ORC 2925.11, current penalties, decriminalization/thresholds, record sealing — **2026 Ohio law.**
3. **Franklin County Municipal Court page** (`app/courts/franklin-county-municipal-court/page.tsx`): Add/update with client’s full content (title, subheading, phone (614) 285-5482, Schedule Consultation to `/contact`, court address 375 S. High Street, Columbus OH 43215, Court Services and Case Types, How We Can Help, Why Choose, CTA). **Disclaimer:** Firm only handles civil, business, estate planning in Franklin County (no criminal, OVI, traffic). Add FAQ with his five questions + written answers (2026 court info; firm scope). Use **2026 Ohio law** where relevant.

### New nav & SearchBar
4. In **navbar**: Add Criminal Damaging and Marijuana Possession to Criminal Defense subLinks (e.g. after Criminal Mischief).
5. In **SearchBar**: Replace Criminal Defense block with full list matching navbar (Ohio Criminal Defense Attorney, Assault, Domestic Violence, Criminal Mischief, Criminal Trespass, Petty Theft, Resisting Arrest, Obstruction, Speeding Tickets, Driving Under Suspension, No Operator's License, Criminal Damaging, Marijuana Possession, Expungement, All Criminal Defense Areas). **Remove** Juvenile Offenses. **Fix** Estate Planning → Trusts to `href: '/trusts'`.
6. **Navbar – Trusts under Estate Planning:** Add `{ name: 'Trusts', href: '/trusts' }` under Other Services → Estate Planning. Remove the top-level Trusts nav item (lines 125–140).

### New copy (one sentence)
7. **Trusts page:** Add one sentence in intro that Trusts are part of estate planning (e.g. “Trusts are a core part of estate planning.”).

### Edits to existing content
8. **Assault:** Line 94 heading (“Types of Assault Charges in Ohio” → “Assault Charges in Ohio”) + line 294 sentence (remove “all types of”).
9. **Franklin County hub** (`app/courts/franklin-county/page.tsx`): Rewrite lines 35–36, 41–42, 45–46 to civil/business/estate planning only (no criminal, OVI, traffic).
10. **PI (and other) pages:** “Columbus, Franklin County, and throughout Ohio” / “judicial preferences in Columbus and throughout Ohio” → “throughout Ohio” only (see list in Personal Injury section above).
11. **OVI pages (all 11):** Move `<OVIReviews />` to right after `</PageHero>`.

### Optional
12. Traffic subsection on criminal defense hub page (heading + group Speeding Tickets, DUS, No Operator's License).
13. Estate planning/wills for Morrow & Athens (after client confirms): links on location pages or new pages.

---

*Generated from code review. All legal content must be current 2026 Ohio law. Update this file when tasks are completed.*
