import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import { LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Courts',
  description:
    'Guides to the Ohio county, municipal and mayor’s courts where Jwayyed Law LLC represents clients in criminal, OVI and civil cases.',
  keywords: ['Ohio courts attorney', 'county court lawyer', 'municipal court attorney', 'Franklin County court lawyer'],
  openGraph: {
    title: 'Ohio Courts | Jwayyed Law LLC',
    description: 'Court guides for the Ohio counties and municipal courts the firm practices in.',
    url: 'https://www.jjlawohio.com/courts',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts' },
};

const breadcrumbItems = [{ label: 'Courts', href: '/courts' }];

const COUNTIES = [
  { href: '/courts/franklin-county', title: 'Franklin County', subtitle: 'Columbus' },
  { href: '/courts/delaware-county', title: 'Delaware County' },
  { href: '/courts/butler-county', title: 'Butler County' },
  { href: '/courts/greene-county', title: 'Greene County' },
  { href: '/courts/montgomery-county', title: 'Montgomery County', subtitle: 'Dayton' },
  { href: '/courts/pickaway-county', title: 'Pickaway County' },
  { href: '/courts/athens-county', title: 'Athens County' },
  { href: '/courts/morrow-county', title: 'Morrow County' },
  { href: '/courts/clinton-county', title: 'Clinton County' },
];

const MUNICIPAL_COURTS = [
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Franklin County' },
  { href: '/courts/delaware-county-municipal-court', title: 'Delaware County Municipal Court', subtitle: 'Delaware County' },
  { href: '/courts/circleville-municipal-court', title: 'Circleville Municipal Court', subtitle: 'Pickaway County' },
  { href: '/courts/athens-municipal-court', title: 'Athens Municipal Court', subtitle: 'Athens County' },
  { href: '/courts/morrow-county-municipal-court', title: 'Morrow County Municipal Court', subtitle: 'Morrow County' },
  { href: '/courts/wilmington-municipal-court', title: 'Wilmington Municipal Court', subtitle: 'Clinton County' },
  { href: '/courts/hamilton-municipal-court', title: 'Hamilton Municipal Court', subtitle: 'Butler County' },
  { href: '/courts/fairborn-municipal-court', title: 'Fairborn Municipal Court', subtitle: 'Greene County' },
  { href: '/courts/dayton-municipal-court', title: 'Dayton Municipal Court', subtitle: 'Montgomery County' },
];

const MAYORS_COURTS = [
  { href: '/courts/johnstown-mayors-court', title: 'Johnstown Mayor’s Court', subtitle: 'Licking County' },
  { href: '/locations/franklin-county/mayors-courts-franklin-county', title: 'Franklin County mayor’s courts', subtitle: 'The mayor’s courts inside Franklin County' },
];

const AREA_LINKS = [
  { href: '/locations/franklin-county/personal-injury-franklin-county', title: 'Franklin County', subtitle: 'Personal injury' },
  { href: '/locations/franklin-county/business-formation-llc-franklin-county', title: 'Franklin County', subtitle: 'Business formation' },
  { href: '/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court', title: 'Delaware County', subtitle: 'Criminal defense' },
  { href: '/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court', title: 'Delaware County', subtitle: 'OVI/DUI defense' },
  { href: '/locations/delaware-county/personal-injury-delaware-county', title: 'Delaware County', subtitle: 'Personal injury' },
  { href: '/locations/delaware-county/business-formation-llc-delaware-county', title: 'Delaware County', subtitle: 'Business formation' },
  { href: '/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts', title: 'Butler County', subtitle: 'Criminal defense' },
  { href: '/locations/butler-county/ovi-dui-defense-butler-county-area-courts', title: 'Butler County', subtitle: 'OVI/DUI defense' },
  { href: '/locations/butler-county/personal-injury-butler-county', title: 'Butler County', subtitle: 'Personal injury' },
  { href: '/locations/butler-county/business-formation-llc-butler-county', title: 'Butler County', subtitle: 'Business formation' },
  { href: '/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court', title: 'Greene County', subtitle: 'Criminal defense' },
  { href: '/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court', title: 'Greene County', subtitle: 'OVI/DUI defense' },
  { href: '/locations/greene-county/personal-injury-greene-county', title: 'Greene County', subtitle: 'Personal injury' },
  { href: '/locations/greene-county/business-formation-llc-greene-county', title: 'Greene County', subtitle: 'Business formation' },
  { href: '/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court', title: 'Montgomery County', subtitle: 'Criminal defense' },
  { href: '/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court', title: 'Montgomery County', subtitle: 'OVI/DUI defense' },
  { href: '/locations/montgomery-county/personal-injury-montgomery-county', title: 'Montgomery County', subtitle: 'Personal injury' },
  { href: '/locations/montgomery-county/business-formation-llc-montgomery-county', title: 'Montgomery County', subtitle: 'Business formation' },
  { href: '/locations/pickaway-county/criminal-misdemeanor-defense-circleville-municipal-court', title: 'Pickaway County', subtitle: 'Criminal defense' },
  { href: '/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court', title: 'Pickaway County', subtitle: 'OVI/DUI defense' },
  { href: '/locations/pickaway-county/personal-injury-pickaway-county', title: 'Pickaway County', subtitle: 'Personal injury' },
  { href: '/locations/pickaway-county/business-formation-llc-pickaway-county', title: 'Pickaway County', subtitle: 'Business formation' },
  { href: '/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court', title: 'Athens County', subtitle: 'Criminal defense' },
  { href: '/locations/athens-county/ovi-dui-defense-athens-municipal-court', title: 'Athens County', subtitle: 'OVI/DUI defense' },
  { href: '/locations/athens-county/personal-injury-athens-county', title: 'Athens County', subtitle: 'Personal injury' },
  { href: '/locations/athens-county/business-formation-llc-athens-county', title: 'Athens County', subtitle: 'Business formation' },
  { href: '/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court', title: 'Morrow County', subtitle: 'Criminal defense' },
  { href: '/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court', title: 'Morrow County', subtitle: 'OVI/DUI defense' },
  { href: '/locations/morrow-county/personal-injury-morrow-county', title: 'Morrow County', subtitle: 'Personal injury' },
  { href: '/locations/morrow-county/business-formation-llc-morrow-county', title: 'Morrow County', subtitle: 'Business formation' },
  { href: '/locations/clinton-county/criminal-misdemeanor-defense-clinton-county-wilmington-municipal-court', title: 'Clinton County', subtitle: 'Criminal defense' },
  { href: '/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court', title: 'Clinton County', subtitle: 'OVI/DUI defense' },
  { href: '/locations/clinton-county/personal-injury-clinton-county', title: 'Clinton County', subtitle: 'Personal injury' },
  { href: '/locations/clinton-county/business-formation-llc-clinton-county', title: 'Clinton County', subtitle: 'Business formation' },
];

export default function CourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio court guides"
        description="Which court hears your case depends on where it happened. These guides cover the county, municipal and mayor's courts where the firm represents clients."
      />

      <Section
        title="Find your court"
        intro={<p>Start with the county where you were charged or where the dispute arose. Each county page lists its courts.</p>}
      >
        <h3>By county</h3>
        <LinkGrid links={COUNTIES} />
        <h3>Municipal courts</h3>
        <LinkGrid links={MUNICIPAL_COURTS} />
        <h3>Mayor&rsquo;s courts</h3>
        <p>
          Ohio mayor&rsquo;s courts operate under R.C. Chapter 1905 and handle local ordinance violations, traffic citations, and
          qualifying first-offense OVI charges arising inside a municipality&rsquo;s limits. A conviction there carries the same weight
          as one entered in municipal court, and appeals must be filed within ten days.
        </p>
        <LinkGrid links={MAYORS_COURTS} columns={2} />
      </Section>

      <Section title="What these courts hear" tone="ice">
        <p>
          Ohio county and municipal courts handle misdemeanor criminal cases, OVI/DUI charges under Ohio Revised Code 4511.19
          (including changes under House Bill 37, effective April 2025), traffic offenses, and civil disputes within their
          jurisdictional limits. Some courts also hear small claims and landlord-tenant matters.
        </p>
        <p>
          A county may have one municipal court or several, and Columbus and the greater Cincinnati area each span more than one
          court. Individual courts can have local rules, procedures and filing requirements that differ from general Ohio practice,
          so the first question in any case is which court has jurisdiction and how that court runs.
        </p>
        <p>
          The firm represents clients in Columbus, Cincinnati, Dayton and the counties listed on this page. If you are not sure which
          court your case belongs in, call the office or schedule a consultation.
        </p>
      </Section>

      <Section
        title="Practice areas by county"
        intro={<p>Criminal defense, OVI/DUI, personal injury and business formation, with the local courts for each.</p>}
      >
        <LinkGrid links={AREA_LINKS} />
      </Section>

      <ContactCTA />
    </>
  );
}
