import { Callout, FactTable, type LinkCard, type Row } from '@/components/practice';
import { FCMC, type SuburbData } from '@/data/franklin-county-reference';

/*
 * Pieces shared by the Franklin County suburb templates. Each suburb page
 * leads with what is true of that place (its court, schedule, police agency,
 * roads), so these helpers turn the reference data into those blocks.
 */

export function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

/** The court that first hears a case from the suburb. */
export function localCourt(suburb: string, data: SuburbData) {
  const { mayorsCourt } = data;
  const hasMayorsCourt = mayorsCourt.active;
  return {
    hasMayorsCourt,
    courtName: hasMayorsCourt ? `${suburb} Mayor's Court` : FCMC.name,
    courtAddress: hasMayorsCourt ? mayorsCourt.address! : FCMC.address,
    courtPhone: hasMayorsCourt ? mayorsCourt.phone! : FCMC.clerkPhone,
    courtSchedule: hasMayorsCourt ? mayorsCourt.schedule ?? null : null,
  };
}

/** The suburb at a glance: its court, police agency, roads and size. */
export function SuburbAtAGlance({ suburb, data, title }: { suburb: string; data: SuburbData; title?: string }) {
  const { mayorsCourt } = data;
  const court = localCourt(suburb, data);
  const rows: Row[] = [];
  if (court.hasMayorsCourt) {
    rows.push({ label: 'Local court', value: court.courtName });
    rows.push({ label: 'Address', value: court.courtAddress });
    rows.push({ label: 'Phone', value: court.courtPhone });
    if (court.courtSchedule) rows.push({ label: 'Schedule', value: court.courtSchedule });
    if (mayorsCourt.clerkEmail) rows.push({ label: 'Clerk email', value: mayorsCourt.clerkEmail });
  } else {
    rows.push({ label: 'Mayor’s court', value: mayorsCourt.note ?? 'None' });
    rows.push({ label: 'Court', value: FCMC.name });
    rows.push({ label: 'Address', value: `${FCMC.address} (${FCMC.floors})` });
    rows.push({ label: 'Clerk phone', value: FCMC.clerkPhone });
  }
  rows.push({ label: 'Police agency', value: data.policeAgency });
  rows.push({ label: 'Main roads', value: data.keyRoads.join('; ') });
  rows.push({ label: 'County', value: data.county });
  rows.push({ label: 'Population', value: `About ${data.population2020.toLocaleString()} residents` });

  return (
    <FactTable
      title={title ?? `${suburb} at a glance`}
      rows={rows}
      note={court.hasMayorsCourt && mayorsCourt.note ? mayorsCourt.note : undefined}
    />
  );
}

/** Franklin County Municipal Court, where transfers, ALS appeals and court-of-record cases go. */
export function FcmcTable({ hears }: { hears: string }) {
  return (
    <FactTable
      title={FCMC.name}
      rows={[
        { label: 'Address', value: `${FCMC.address} (${FCMC.floors})` },
        { label: 'Clerk phone', value: FCMC.clerkPhone },
        { label: 'What it hears', value: hears },
      ]}
    />
  );
}

/** The attorney's former prosecutor role in this suburb, when the data records one. */
export function ProsecutorNote({ title }: { title?: string }) {
  if (!title) return null;
  return (
    <Callout title={title}>
      As a former prosecutor who has worked alongside and trained law enforcement, attorney Jwayyed brings insight into
      police procedures, case preparation and courtroom strategy.
    </Callout>
  );
}

// Suburbs with their own mayor's court guide under app/locations/franklin-county.
const MAYORS_COURT_PAGES = new Set([
  'bexley', 'canal-winchester', 'dublin', 'grove-city', 'groveport', 'hilliard', 'obetz',
  'pickerington', 'reynoldsburg', 'upper-arlington', 'westerville', 'whitehall', 'worthington',
]);

const SUBURB_SERVICES = [
  { prefix: 'ovi-dui-defense', title: 'OVI / DUI defense', subtitle: 'Drunk or drugged driving charges and the 30-day ALS appeal' },
  { prefix: 'assault-defense', title: 'Assault defense', subtitle: 'Misdemeanor and felony assault under R.C. 2903.13' },
  { prefix: 'domestic-violence-defense', title: 'Domestic violence defense', subtitle: 'DV charges, protection orders and firearm rights' },
  { prefix: 'drug-possession-defense', title: 'Drug possession defense', subtitle: 'Marijuana limits, controlled substances and ILC' },
  { prefix: 'theft-defense', title: 'Theft and shoplifting defense', subtitle: 'Petty theft and felony theft by value' },
  { prefix: 'disorderly-conduct-defense', title: 'Disorderly conduct defense', subtitle: 'Minor misdemeanor and M4 charges' },
  { prefix: 'open-container-defense', title: 'Open container defense', subtitle: 'Open container citations in vehicles and public places' },
  { prefix: 'mayors-court', title: 'Mayor’s court guide', subtitle: 'How the local mayor’s court works' },
];

/** The other service pages for the same suburb (every one of these routes exists). */
export function suburbLinks(suburb: string, current: string): LinkCard[] {
  const slug = slugify(suburb);
  return SUBURB_SERVICES.filter((s) => s.prefix !== current)
    .filter((s) => s.prefix !== 'mayors-court' || MAYORS_COURT_PAGES.has(slug))
    .map((s) => ({
      href: `/locations/franklin-county/${s.prefix}-${slug}`,
      title: s.prefix === 'mayors-court' ? `${suburb} Mayor’s Court` : `${s.title} in ${suburb}`,
      subtitle: s.subtitle,
    }));
}
