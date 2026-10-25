import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Franklin County Attorney: Columbus, Ohio',
  description:
    'The Franklin County courts in Columbus, with addresses, and the OVI, criminal, civil, business and estate cases the firm handles there. Call (614) 285-5482.',
  keywords: [
    'Franklin County attorney Columbus Ohio',
    'Columbus OVI lawyer',
    'Franklin County criminal defense attorney',
    'Columbus criminal defense lawyer',
    'Franklin County Municipal Court attorney',
    'Columbus estate planning attorney',
    'Franklin County business attorney',
    'landlord tenant attorney Columbus',
  ],
  openGraph: {
    title: 'Franklin County Attorney: Columbus, Ohio | Jwayyed Law LLC',
    description: 'Franklin County courts, addresses and the cases the firm handles in Columbus and the suburbs.',
    url: 'https://www.jjlawohio.com/courts/franklin-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/franklin-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
];

const faqs = [
  {
    question: 'What practice areas does Jwayyed Law LLC handle in Franklin County?',
    answer:
      'OVI/DUI defense; misdemeanor criminal defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container and more); traffic violations; civil litigation in Franklin County Municipal Court and Common Pleas Court; business formation and disputes; landlord-tenant and eviction proceedings; estate planning (wills, trusts, powers of attorney); and probate administration in Franklin County Probate Court. Call (614) 285-5482 to discuss your case.',
  },
  {
    question: 'What courts are in Franklin County, Ohio?',
    answer:
      "Franklin County Municipal Court (375 S. High St, Columbus) handles misdemeanor criminal, OVI, traffic and civil matters up to $15,000. The Franklin County Court of Common Pleas has a General Division (369 S. High St) for civil cases over $15,000, a Criminal Division for felonies, and a Domestic Relations Division. Franklin County Probate Court (373 S. High St) hears estates, guardianships and trusts. There are also mayor's courts in Dublin, Hilliard, Westerville, Bexley, Reynoldsburg, Upper Arlington, Whitehall, Worthington and other suburbs. The 10th District Court of Appeals in Columbus hears appeals from all Franklin County trial courts.",
  },
  {
    question: 'What are the OVI penalties in Franklin County?',
    answer:
      "Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. A high-tier OVI (BAC 0.17% or above) carries higher mandatory minimums. A second OVI within 10 years carries a minimum of 10 consecutive days, fines of $715 to $1,625, and a 1 to 7 year suspension with vehicle immobilization. OVI charges in the suburbs are typically heard first in that suburb's mayor's court before any bindover. The firm handles OVI defense across Franklin County.",
  },
  {
    question: "What is a mayor's court and which Franklin County suburbs have one?",
    answer:
      "A mayor's court is a local court that hears minor misdemeanor and traffic cases arising inside that municipality's limits. In Franklin County, active mayor's courts include Dublin, Hilliard, Westerville, Bexley, Canal Winchester, Grove City, Groveport, New Albany, Obetz, Pickerington, Reynoldsburg, Upper Arlington, Whitehall and Worthington. In most circumstances mayor's courts do not have jurisdiction over first-degree misdemeanors; those cases transfer to Franklin County Municipal Court. A local magistrate presides rather than an elected judge. Defense in a mayor's court differs from Franklin County Municipal Court because the local police, prosecutors and magistrates have their own practices.",
  },
  {
    question: 'How does probate work in Franklin County Probate Court?',
    answer:
      'Franklin County Probate Court is at 373 S. High Street, Columbus, OH 43215. When a Franklin County resident dies, assets titled solely in their name typically pass through probate under ORC Chapter 2113. The executor named in the will (or a court-appointed administrator if there is no will) opens the estate, inventories assets, publishes notice to creditors, pays lawful debts and taxes, and distributes what remains to the heirs. Probate in Ohio generally takes 6 to 12 months for a straightforward estate. Trusts, beneficiary designations and joint ownership can reduce or avoid probate. The firm handles both probate administration and the estate planning that simplifies it.',
  },
  {
    question: 'How does the eviction process work in Franklin County Municipal Court?',
    answer:
      "Residential evictions in Franklin County are governed by ORC Chapter 1923 and heard in Franklin County Municipal Court's Housing Division at 375 S. High Street. The landlord first serves proper written notice: typically a 3-day notice for nonpayment of rent or a 30-day notice for other lease violations under ORC Chapter 5321. If the tenant does not comply, the landlord files an eviction complaint. The court schedules a hearing within 30 days under ORC 1923.07. If the landlord prevails, the court issues a judgment for possession, and after the appeal period a writ of restitution authorizes the bailiff to remove the tenant. Procedural errors, such as improper notice or failure to meet habitability requirements, can lead to dismissal and delay.",
  },
  {
    question: 'Can a misdemeanor conviction be expunged in Franklin County?',
    answer:
      'Many misdemeanor convictions are eligible for record sealing (expungement) under Ohio Revised Code 2953.32. The waiting period is 1 year after final discharge for most misdemeanors. Permanently ineligible offenses include OVI convictions under R.C. 4511.19, traffic violations, offenses of violence of the 1st or 2nd degree, and sexually oriented offenses. If an OVI charge is reduced to reckless operation (R.C. 4511.20) by plea agreement, the reckless operation conviction may be eligible for sealing after the waiting period. Franklin County Municipal Court handles sealing applications, and the firm evaluates eligibility and files them there.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Franklin County legal matters?',
    answer:
      "The firm represents clients throughout Franklin County, in Columbus and the suburbs. It works in Franklin County Municipal Court and in the suburban mayor's courts, each with its own prosecutors and practices. It handles first-offense OVI cases, where the 30-day ALS appeal deadline matters most, misdemeanor charges that can affect your career and housing, civil disputes, and estate planning for Columbus families. Call (614) 285-5482 to schedule a consultation.",
  },
];

const OVI_PAGES = [
  { href: '/locations/franklin-county/ovi-dui-defense-columbus', title: 'Columbus OVI hub', subtitle: 'Every Columbus OVI page' },
  { href: '/locations/franklin-county/first-ovi-columbus', title: '1st OVI' },
  { href: '/locations/franklin-county/second-ovi-columbus', title: '2nd OVI' },
  { href: '/locations/franklin-county/third-ovi-columbus', title: '3rd OVI' },
  { href: '/locations/franklin-county/felony-ovi-columbus', title: 'Felony OVI' },
  { href: '/locations/franklin-county/high-tier-ovi-columbus', title: 'High-tier OVI', subtitle: '0.17% or higher' },
  { href: '/locations/franklin-county/refusal-ovi-columbus', title: 'Refusal OVI' },
  { href: '/locations/franklin-county/underage-ovi-columbus', title: 'Underage OVI' },
  { href: '/locations/franklin-county/cdl-ovi-columbus', title: 'CDL OVI' },
  { href: '/locations/franklin-county/marijuana-ovi-columbus', title: 'Marijuana OVI' },
  { href: '/locations/franklin-county/ovi-with-accident-columbus', title: 'OVI with accident' },
];

const CRIMINAL_PAGES = [
  { href: '/locations/franklin-county/theft-defense-columbus', title: 'Theft and shoplifting' },
  { href: '/locations/franklin-county/drug-possession-defense-columbus', title: 'Drug possession' },
  { href: '/locations/franklin-county/marijuana-possession-columbus', title: 'Marijuana possession' },
  { href: '/locations/franklin-county/domestic-violence-defense-columbus', title: 'Domestic violence' },
  { href: '/locations/franklin-county/assault-defense-columbus', title: 'Assault' },
  { href: '/locations/franklin-county/disorderly-conduct-defense-columbus', title: 'Disorderly conduct' },
  { href: '/locations/franklin-county/open-container-defense-columbus', title: 'Open container' },
  { href: '/locations/franklin-county/expungement-columbus', title: 'Expungement' },
];

const COUNTY_PAGES = [
  { href: '/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court', title: 'OVI defense', subtitle: 'Franklin County Municipal Court' },
  {
    href: '/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court',
    title: 'Criminal defense',
    subtitle: 'Franklin County Municipal Court',
  },
  { href: '/locations/franklin-county/mayors-courts-franklin-county', title: "Mayor's courts", subtitle: 'All Franklin County suburbs' },
  { href: '/locations/franklin-county/expungement-franklin-county', title: 'Expungement', subtitle: 'Franklin County' },
];

const SUBURBS = [
  { suburb: 'Bexley', slug: 'bexley', hasMayorsCourt: true },
  { suburb: 'Canal Winchester', slug: 'canal-winchester', hasMayorsCourt: true },
  { suburb: 'Dublin', slug: 'dublin', hasMayorsCourt: true },
  { suburb: 'Grandview Heights', slug: 'grandview-heights', hasMayorsCourt: false },
  { suburb: 'Grove City', slug: 'grove-city', hasMayorsCourt: true },
  { suburb: 'Groveport', slug: 'groveport', hasMayorsCourt: true },
  { suburb: 'Hilliard', slug: 'hilliard', hasMayorsCourt: true },
  { suburb: 'Marble Cliff', slug: 'marble-cliff', hasMayorsCourt: false },
  { suburb: 'New Albany', slug: 'new-albany', hasMayorsCourt: false },
  { suburb: 'Obetz', slug: 'obetz', hasMayorsCourt: true },
  { suburb: 'Pickerington', slug: 'pickerington', hasMayorsCourt: true },
  { suburb: 'Reynoldsburg', slug: 'reynoldsburg', hasMayorsCourt: true },
  { suburb: 'Upper Arlington', slug: 'upper-arlington', hasMayorsCourt: true },
  { suburb: 'Westerville', slug: 'westerville', hasMayorsCourt: true },
  { suburb: 'Whitehall', slug: 'whitehall', hasMayorsCourt: true },
  { suburb: 'Worthington', slug: 'worthington', hasMayorsCourt: true },
];

function suburbLinks(slug: string, hasMayorsCourt: boolean) {
  return [
    { label: 'OVI / DUI', href: `/locations/franklin-county/ovi-dui-defense-${slug}` },
    { label: 'Theft', href: `/locations/franklin-county/theft-defense-${slug}` },
    { label: 'Domestic violence', href: `/locations/franklin-county/domestic-violence-defense-${slug}` },
    { label: 'Assault', href: `/locations/franklin-county/assault-defense-${slug}` },
    { label: 'Drug possession', href: `/locations/franklin-county/drug-possession-defense-${slug}` },
    { label: 'Disorderly conduct', href: `/locations/franklin-county/disorderly-conduct-defense-${slug}` },
    { label: 'Open container', href: `/locations/franklin-county/open-container-defense-${slug}` },
    ...(hasMayorsCourt ? [{ label: "Mayor's court", href: `/locations/franklin-county/mayors-court-${slug}` }] : []),
  ];
}

export default function FranklinCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County courts in Columbus, Ohio"
        description="Most Franklin County cases are heard in a few buildings on S. High Street in Columbus, or in a suburban mayor's court. After an OVI arrest you have 30 days to appeal the license suspension."
      />

      <Section
        title="Find your court"
        intro={
          <p>
            Franklin County is the most populous county in Ohio, with over 1.3 million residents, and home to Columbus, the state
            capital. Its courts run from the suburban mayor&rsquo;s courts to Franklin County Municipal Court, with the Court of Common
            Pleas and Probate Court steps away.
          </p>
        }
      >
        <FactTable
          title="Franklin County Municipal Court"
          rows={[
            { label: 'Address', value: '375 S. High Street, Columbus, OH 43215' },
            { label: 'Phone', value: '(614) 645-8186' },
            {
              label: 'Hears',
              value:
                'OVI/DUI, misdemeanor criminal cases, traffic violations, civil claims up to $15,000, evictions, small claims (up to $6,000), and the HART, MAVS and CATCH specialty dockets',
            },
          ]}
        />
        <FactTable
          title="Franklin County mayor's courts"
          rows={[
            {
              label: 'Located in',
              value:
                'Bexley, Canal Winchester, Dublin, Grove City, Groveport, Hilliard, New Albany, Obetz, Pickerington, Reynoldsburg, Upper Arlington, Westerville, Whitehall, Worthington',
            },
            { label: 'Hears', value: 'Minor misdemeanor traffic and OVI arraignments. Cases may transfer to Franklin County Municipal Court for higher charges.' },
          ]}
        />
        <FactTable
          title="Franklin County Court of Common Pleas: General Division"
          rows={[
            { label: 'Address', value: '369 S. High Street, Columbus, OH 43215' },
            { label: 'Hears', value: 'Civil cases over $15,000, felony criminal cases, business disputes, contract litigation, Domestic Relations' },
          ]}
        />
        <FactTable
          title="Franklin County Probate Court"
          rows={[
            { label: 'Address', value: '373 S. High Street, Columbus, OH 43215' },
            { label: 'Hears', value: 'Estate administration, guardianships, trust matters, will contests (ORC Ch. 2101–2131)' },
          ]}
        />
        <FactTable
          title="10th District Court of Appeals"
          rows={[
            { label: 'Address', value: '373 S. High Street, Columbus, OH 43215' },
            { label: 'Hears', value: 'Appeals from all Franklin County trial courts in civil, criminal and OVI matters' },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[
            { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court guide', subtitle: 'Divisions, dockets and how cases move' },
            { href: '/locations/franklin-county/mayors-courts-franklin-county', title: "Franklin County mayor's courts", subtitle: 'Court by court' },
          ]}
        />
        <p>
          The firm handles OVI and DUI defense, misdemeanor defense, traffic violations, civil litigation, business matters,
          landlord-tenant proceedings, estate planning and probate administration in these courts. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a> to discuss your matter.
        </p>
      </Section>

      <Section title="OVI arrests in Franklin County" tone="ice">
        <p>
          OVI arrests are common along I-270, I-71, I-70, US-33, US-23 and the major suburban corridors. The arresting agency may be
          Columbus Police, the Franklin County Sheriff, the Ohio State Highway Patrol or a suburban police department. Either way, the
          arrest starts two proceedings: the criminal case under <Link href="/ovi-dui-defense">Ohio Revised Code 4511.19</Link> and the
          Administrative License Suspension (ALS) under ORC 4511.191.
        </p>
        <Callout title="The 30-day ALS appeal">
          You have 30 days from the date of arrest to appeal the ALS in Franklin County Municipal Court. Missing the deadline
          permanently forfeits your right to contest the suspension.
        </Callout>
        <FactTable
          title="OVI penalties under HB 37 (effective April 9, 2025)"
          rows={[
            {
              label: 'First OVI',
              value: 'Mandatory minimum 3 days in jail or a certified Driver Intervention Program; fines of $565 to $1,075; license suspension of 1 to 3 years.',
            },
            { label: 'High-tier OVI', value: 'BAC 0.17% or above: higher mandatory minimums, even for a first offense.' },
            {
              label: 'Second OVI within 10 years',
              value: '10 consecutive days minimum; $715 to $1,625 in fines; 1 to 7 year suspension with 90-day vehicle immobilization.',
            },
          ]}
        />
        <p>
          The firm handles OVI cases at <Link href="/courts/franklin-county-municipal-court">Franklin County Municipal Court</Link> and
          at every mayor&rsquo;s court in the Franklin County suburbs it serves.
        </p>
      </Section>

      <Section title="Misdemeanor charges in Franklin County">
        <p>Franklin County Municipal Court hears misdemeanor charges for Columbus and every Franklin County municipality.</p>
        <FactTable
          title="Common charges"
          rows={[
            { label: 'Theft and shoplifting', value: 'ORC 2913.02. M1 for amounts under $1,000: up to 180 days in jail and a $1,000 fine.' },
            {
              label: 'Domestic violence',
              value: "ORC 2919.25. Any misdemeanor DV conviction triggers the federal Lautenberg Amendment's permanent firearm prohibition.",
            },
            { label: 'Assault', value: 'ORC 2903.13.' },
            { label: 'Drug possession', value: 'ORC 2925.11.' },
            { label: 'Disorderly conduct', value: 'ORC 2917.11.' },
            { label: 'Open container', value: 'ORC 4301.62.' },
          ]}
          note="For cases involving drug addiction or mental illness, the court's HART and MAVS dockets may offer treatment-based alternatives to prosecution."
        />
        <p>
          A misdemeanor conviction creates a permanent record that employers, landlords and professional licensing boards can see.
          Reviewing all the evidence, spotting constitutional issues and knowing the local prosecutor&rsquo;s practices can lead to a
          dismissal, a reduced charge, or a diversion program that leaves no permanent record. The firm gets all available evidence
          before weighing any plea offer.
        </p>
      </Section>

      <Section title="Columbus defense pages" tone="ice" intro={<p>Charged in Columbus or at Franklin County Municipal Court? Pick your charge.</p>}>
        <h3>OVI / DUI in Columbus</h3>
        <LinkGrid links={OVI_PAGES} />
        <h3>Criminal defense in Columbus</h3>
        <LinkGrid links={CRIMINAL_PAGES} />
        <h3>County-wide pages</h3>
        <LinkGrid links={COUNTY_PAGES} columns={2} />
      </Section>

      <Section title="Franklin County suburbs" intro={<p>Charged in a suburb? Find your community and charge.</p>}>
        <ul>
          {SUBURBS.map(({ suburb, slug, hasMayorsCourt }) => (
            <li key={slug}>
              <strong>{suburb}</strong>
              {hasMayorsCourt ? ' (has a mayor’s court)' : ''}:{' '}
              {suburbLinks(slug, hasMayorsCourt).map(({ label, href }, i) => (
                <span key={href}>
                  {i > 0 && ', '}
                  <Link href={href}>{label}</Link>
                </span>
              ))}
            </li>
          ))}
        </ul>
        <p>
          An OVI arrest on I-270, a theft charge in Hilliard, a domestic violence allegation in Westerville, an estate plan or a new
          Columbus business: call <a href="tel:6142855482">(614) 285-5482</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link>. For an OVI, the ALS appeal must be filed within 30 days of arrest.
        </p>
      </Section>

      <LocationsWeServe title="Franklin County & Ohio Legal Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
