/**
 * Single source of truth for the site's navigation tree.
 *
 * Both the navbar dropdowns and the SearchBar's Fuse index are built from this
 * array. They previously kept separate hand-maintained copies, which drifted:
 * the navbar had eight flat links while SearchBar indexed a full hierarchy of
 * sub-pages that no menu ever exposed. Adding a destination here surfaces it in
 * the menu and makes it searchable at the same time.
 *
 * A node carries either `subLinks` (one flat list) or `subDropdowns` (named
 * groups, rendered as columns). Nodes with neither are plain links.
 */

export interface NavLink {
  name: string;
  href: string;
}

export interface NavGroup {
  name: string;
  links: NavLink[];
}

export interface NavNode {
  name: string;
  href: string;
  /** Short line shown as the dropdown's lead-in. Menu only; not indexed. */
  tagline?: string;
  subLinks?: NavLink[];
  subDropdowns?: NavGroup[];
}

export const siteNav: NavNode[] = [
  {
    name: 'Criminal Defense',
    href: '/criminal-defense',
    tagline: 'Felony and misdemeanor charges across Ohio.',
    subLinks: [
      { name: 'Ohio Criminal Defense Attorney', href: '/criminal-defense' },
      { name: 'Assault Charges', href: '/criminal-defense/assault-charges' },
      { name: 'Domestic Violence', href: '/criminal-defense/domestic-violence' },
      { name: 'Criminal Mischief', href: '/criminal-defense/criminal-mischief' },
      { name: 'Criminal Trespass', href: '/criminal-defense/criminal-trespass' },
      { name: 'Petty Theft', href: '/criminal-defense/petty-theft' },
      { name: 'Resisting Arrest', href: '/criminal-defense/resisting-arrest' },
      { name: 'Obstruction of Official Business', href: '/criminal-defense/obstruction-of-official-business' },
      { name: 'Speeding Tickets', href: '/criminal-defense/speeding-tickets' },
      { name: 'Driving Under Suspension', href: '/criminal-defense/driving-under-suspension' },
      { name: "No Operator's License", href: '/criminal-defense/no-operators-license' },
      { name: 'Criminal Damaging', href: '/criminal-defense/criminal-damaging' },
      { name: 'Expungement / Record Sealing', href: '/criminal-defense/expungement-record-sealing' },
    ],
  },
  {
    name: 'OVI / DUI',
    href: '/ovi-dui-defense',
    tagline: 'Protecting your license, your record, and your job.',
    subLinks: [
      { name: 'Ohio OVI Attorney', href: '/ovi-dui-defense' },
      { name: 'First OVI', href: '/ovi-dui-defense/first-ovi' },
      { name: 'Second OVI', href: '/ovi-dui-defense/second-ovi' },
      { name: 'Third OVI', href: '/ovi-dui-defense/third-ovi' },
      { name: 'High-Tier OVI', href: '/ovi-dui-defense/high-tier-ovi' },
      { name: 'Refusal OVI', href: '/ovi-dui-defense/refusal-ovi' },
      { name: 'Underage OVI', href: '/ovi-dui-defense/underage-ovi' },
      { name: 'Commercial DUI (CDL)', href: '/ovi-dui-defense/commercial-dui-cdl' },
      { name: 'OVI with Accident', href: '/ovi-dui-defense/ovi-with-accident' },
      { name: 'Driving Under OVI Suspension', href: '/ovi-dui-defense/driving-under-ovi-suspension' },
      { name: 'Limited Driving Privileges', href: '/ovi-dui-defense/limited-driving-privileges' },
    ],
  },
  {
    name: 'Personal Injury',
    href: '/personal-injury',
    tagline: 'Contingency-fee representation. No recovery, no fee.',
    subLinks: [
      { name: 'Ohio Personal Injury Attorney', href: '/personal-injury' },
      { name: 'Car Accidents', href: '/personal-injury/car-accidents' },
      { name: 'Truck Accidents', href: '/personal-injury/truck-accidents' },
      { name: 'Motorcycle Accidents', href: '/personal-injury/motorcycle-accidents' },
      { name: 'Pedestrian Accidents', href: '/personal-injury/pedestrian-accidents' },
      { name: 'Slip and Fall', href: '/personal-injury/slip-and-fall' },
      { name: 'Premises Liability', href: '/personal-injury/premises-liability' },
      { name: 'Dog Bites', href: '/personal-injury/dog-bites' },
      { name: 'Medical Malpractice', href: '/personal-injury/medical-malpractice' },
      { name: 'Nursing Home Abuse', href: '/personal-injury/nursing-home-abuse' },
      { name: 'Workplace Injuries', href: '/personal-injury/workplace-injuries' },
      { name: 'Wrongful Death', href: '/personal-injury/wrongful-death' },
      { name: 'Catastrophic Injuries', href: '/personal-injury/catastrophic-injuries' },
    ],
  },
  {
    name: 'Civil',
    href: '/civil',
    tagline: 'Contract, property, and employment disputes.',
    subLinks: [
      { name: 'Ohio Civil Attorney', href: '/civil' },
      { name: 'Breach of Contract', href: '/civil/breach-of-contract' },
      { name: 'Real Estate Disputes', href: '/civil/real-estate-disputes' },
      { name: 'Evictions', href: '/civil/evictions' },
      { name: 'Construction Disputes', href: '/civil/construction-disputes' },
      { name: 'Debt Collection Defense', href: '/civil/debt-collection-defense' },
      { name: 'Employment Disputes', href: '/civil/employment-disputes' },
      { name: 'Civil Protection Orders', href: '/civil/civil-protection-orders' },
      { name: 'Appeals', href: '/civil/appeals' },
    ],
  },
  {
    name: 'Business',
    href: '/business',
    tagline: 'Counsel for Ohio owners, founders, and partners.',
    subLinks: [
      { name: 'Ohio Business Attorney', href: '/business' },
      { name: 'Business Formation', href: '/business/business-formation' },
      { name: 'LLC Formation', href: '/business/llc-formation' },
      { name: 'Contract Drafting & Review', href: '/business/contract-drafting-review' },
      { name: 'Business Litigation', href: '/business/business-litigation' },
      { name: 'Partnership Disputes', href: '/business/partnership-disputes' },
      { name: 'Shareholder Disputes', href: '/business/shareholder-disputes' },
      { name: 'Non-Compete Agreements', href: '/business/non-compete-agreements' },
      { name: 'Employment Agreements', href: '/business/employment-agreements' },
      { name: 'Business Compliance', href: '/business/business-compliance' },
      { name: 'Business Dissolution', href: '/business/business-dissolution' },
    ],
  },
  {
    name: 'Other Services',
    href: '/other-services',
    tagline: 'Estate planning, probate, and dispute resolution.',
    subDropdowns: [
      {
        name: 'Estate Planning',
        links: [
          { name: 'Estate Planning & Wills', href: '/other-services/estate-planning-wills' },
          { name: 'Trusts', href: '/trusts' },
          { name: 'Revocable Living Trusts', href: '/trusts/revocable-living-trusts' },
          { name: 'Powers of Attorney', href: '/other-services/powers-of-attorney' },
          { name: 'Guardianships', href: '/other-services/guardianships' },
        ],
      },
      {
        name: 'Probate',
        links: [
          { name: 'Probate', href: '/other-services/probate' },
          { name: 'Probate Administration', href: '/other-services/probate-administration' },
          { name: 'Will Contests', href: '/other-services/will-contests' },
          { name: 'Estate Disputes', href: '/other-services/estate-disputes' },
        ],
      },
      {
        name: 'Dispute Resolution',
        links: [
          { name: 'Mediation', href: '/other-services/mediation' },
          { name: 'Arbitration', href: '/other-services/arbitration' },
        ],
      },
    ],
  },
  {
    name: 'Courts',
    href: '/courts',
    tagline: 'Local guides to the courts we appear in.',
    subDropdowns: [
      {
        name: 'Franklin County',
        links: [
          { name: 'Franklin County Courts', href: '/courts/franklin-county' },
          { name: 'Franklin County Municipal Court', href: '/courts/franklin-county-municipal-court' },
        ],
      },
      {
        name: 'Delaware County',
        links: [{ name: 'Delaware County Municipal Court', href: '/courts/delaware-county-municipal-court' }],
      },
      {
        name: 'Pickaway County',
        links: [{ name: 'Circleville Municipal Court', href: '/courts/circleville-municipal-court' }],
      },
      {
        name: 'Athens County',
        links: [{ name: 'Athens Municipal Court', href: '/courts/athens-municipal-court' }],
      },
      {
        name: 'Morrow County',
        links: [{ name: 'Morrow County Municipal Court', href: '/courts/morrow-county-municipal-court' }],
      },
      {
        name: 'Clinton County',
        links: [
          { name: 'Clinton County Courts', href: '/courts/clinton-county' },
          { name: 'Wilmington Municipal Court', href: '/courts/wilmington-municipal-court' },
        ],
      },
      {
        name: 'Butler County',
        links: [
          { name: 'Butler County Courts', href: '/courts/butler-county' },
          { name: 'Area I Court (Oxford)', href: '/courts/butler-county#area-i-court' },
          { name: 'Area II Court (Hamilton)', href: '/courts/butler-county#area-ii-court' },
          { name: 'Area III Court (West Chester)', href: '/courts/butler-county#area-iii-court' },
          { name: 'Hamilton Municipal Court', href: '/courts/hamilton-municipal-court' },
        ],
      },
      {
        name: 'Greene County',
        links: [{ name: 'Fairborn Municipal Court', href: '/courts/fairborn-municipal-court' }],
      },
      {
        name: 'Montgomery County',
        links: [{ name: 'Dayton Municipal Court', href: '/courts/dayton-municipal-court' }],
      },
    ],
  },
  {
    name: 'Our Firm',
    href: '/our-law-firm/our-attorneys',
    tagline: 'The people handling your matter.',
    subLinks: [
      { name: 'About Us', href: '/our-law-firm/about-us' },
      { name: 'Our Staff', href: '/our-law-firm/our-attorneys' },
      { name: 'Case Results', href: '/our-law-firm/case-results' },
      { name: 'Document Templates', href: '/our-law-firm/document-templates' },
      { name: 'Blog', href: '/our-law-firm/blog' },
    ],
  },
];

/** Plain destinations that belong in search but are not navbar dropdowns. */
export const auxiliaryNav: NavNode[] = [
  { name: 'All Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

// ============================================================================
// PRIMARY NAV — what the navbar actually renders
// ============================================================================

function node(name: string): NavNode {
  const found = siteNav.find((n) => n.name === name);
  if (!found) throw new Error(`navigation: no node named "${name}"`);
  return found;
}

/** Longest list a menu column shows before deferring to its overview page. */
const LINKS_PER_COLUMN = 6;

/** One practice area rendered as a menu column, trimmed to fit. */
function areaColumn(name: string): NavGroup {
  const source = node(name);
  // Most areas list their pages flat in `subLinks`, where the first entry is
  // the area page itself and is dropped because the column heading already
  // links there. "Other Services" instead nests its pages under named groups,
  // so those are flattened rather than yielding an empty column.
  const flat = source.subLinks ? source.subLinks.slice(1) : (source.subDropdowns ?? []).flatMap((g) => g.links);
  return {
    name: source.name,
    links: [...flat.slice(0, LINKS_PER_COLUMN), { name: `All ${source.name} →`, href: source.href }],
  };
}

/**
 * The navbar shows five grouped entries rather than one per practice area.
 *
 * The centred pill in the design cannot hold eight chevroned items at common
 * desktop widths, so the practice areas collapse into a single mega menu. No
 * destination is lost: every link here still renders in the HTML, and the
 * complete per-area lists remain in `siteNav`, which feeds site search.
 */
export const primaryNav: NavNode[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Practice areas',
    href: '/services',
    tagline: 'Six practice areas across Ohio.',
    subDropdowns: [
      areaColumn('Criminal Defense'),
      areaColumn('OVI / DUI'),
      areaColumn('Personal Injury'),
      areaColumn('Civil'),
      areaColumn('Business'),
      areaColumn('Other Services'),
    ],
  },
  {
    name: 'Courts',
    href: '/courts',
    tagline: 'Local guides to the courts we appear in.',
    subDropdowns: node('Courts').subDropdowns,
  },
  {
    name: 'How we work',
    href: '/our-law-firm/about-us',
    tagline: 'The people handling your matter.',
    subLinks: node('Our Firm').subLinks,
  },
  { name: 'Reviews', href: '/our-law-firm/case-results' },
];
