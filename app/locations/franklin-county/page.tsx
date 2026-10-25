import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';
import { FCMC } from '@/data/franklin-county-reference';

export const metadata: Metadata = {
  title: 'Franklin County OVI & Criminal Defense',
  description:
    'OVI, criminal defense and personal injury across Franklin County: Columbus, Dublin, Hilliard, Westerville and nearby suburbs. Jwayyed Law LLC, (614) 285-5482.',
  keywords: [
    'Franklin County criminal defense attorney',
    'Franklin County OVI lawyer',
    'Columbus OVI defense attorney',
    'Franklin County misdemeanor attorney',
    'Dublin OVI lawyer',
    'Hilliard criminal defense',
    'Westerville OVI attorney',
    'Upper Arlington criminal lawyer',
    'Grove City OVI defense',
    'Franklin County Municipal Court attorney',
  ],
  openGraph: {
    title: 'Franklin County OVI & Criminal Defense | Jwayyed Law LLC',
    description: 'OVI and criminal defense in Columbus, its suburbs and their mayor’s courts, plus county-wide personal injury and business work.',
    url: 'https://www.jjlawohio.com/locations/franklin-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county' },
};

const breadcrumbItems = [{ label: 'Franklin County', href: '/locations/franklin-county' }];

const suburbs = [
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

const oviLinks = [
  { title: 'OVI defense in Columbus', subtitle: 'Every OVI charge, from the ALS appeal to trial', href: '/locations/franklin-county/ovi-dui-defense-columbus' },
  { title: 'First OVI', href: '/locations/franklin-county/first-ovi-columbus' },
  { title: 'Second OVI', href: '/locations/franklin-county/second-ovi-columbus' },
  { title: 'Third OVI', href: '/locations/franklin-county/third-ovi-columbus' },
  { title: 'Felony OVI', href: '/locations/franklin-county/felony-ovi-columbus' },
  { title: 'High-tier OVI', href: '/locations/franklin-county/high-tier-ovi-columbus' },
  { title: 'Refusal OVI', href: '/locations/franklin-county/refusal-ovi-columbus' },
  { title: 'Underage OVI', href: '/locations/franklin-county/underage-ovi-columbus' },
  { title: 'CDL and commercial OVI', href: '/locations/franklin-county/cdl-ovi-columbus' },
  { title: 'Marijuana OVI', href: '/locations/franklin-county/marijuana-ovi-columbus' },
  { title: 'OVI with an accident', href: '/locations/franklin-county/ovi-with-accident-columbus' },
];

const criminalLinks = [
  { title: 'Theft and shoplifting', href: '/locations/franklin-county/theft-defense-columbus' },
  { title: 'Drug possession', href: '/locations/franklin-county/drug-possession-defense-columbus' },
  { title: 'Marijuana possession', href: '/locations/franklin-county/marijuana-possession-columbus' },
  { title: 'Domestic violence', href: '/locations/franklin-county/domestic-violence-defense-columbus' },
  { title: 'Assault', href: '/locations/franklin-county/assault-defense-columbus' },
  { title: 'Disorderly conduct', href: '/locations/franklin-county/disorderly-conduct-defense-columbus' },
  { title: 'Open container', href: '/locations/franklin-county/open-container-defense-columbus' },
  { title: 'Expungement', href: '/locations/franklin-county/expungement-columbus' },
];

const countyWideLinks = [
  { title: 'OVI at Franklin County Municipal Court', href: '/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court' },
  { title: 'Criminal cases at Franklin County Municipal Court', href: '/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court' },
  { title: "Mayor's courts in Franklin County", href: '/locations/franklin-county/mayors-courts-franklin-county' },
  { title: 'Expungement in Franklin County', href: '/locations/franklin-county/expungement-franklin-county' },
  { title: 'Personal injury in Franklin County', href: '/locations/franklin-county/personal-injury-franklin-county' },
  { title: 'Business formation and LLCs', href: '/locations/franklin-county/business-formation-llc-franklin-county' },
];

const courtLinks = [
  { title: 'Franklin County Municipal Court', subtitle: 'Court guide', href: '/courts/franklin-county-municipal-court' },
  { title: 'Franklin County courts', subtitle: 'Every court in the county', href: '/courts/franklin-county' },
  { title: "Mayor's courts", subtitle: 'Which suburbs have one and what they hear', href: '/locations/franklin-county/mayors-courts-franklin-county' },
];

const suburbCharges = (slug: string, hasMayorsCourt: boolean) => [
  { label: 'OVI / DUI', href: `/locations/franklin-county/ovi-dui-defense-${slug}` },
  { label: 'Theft', href: `/locations/franklin-county/theft-defense-${slug}` },
  { label: 'Domestic violence', href: `/locations/franklin-county/domestic-violence-defense-${slug}` },
  { label: 'Assault', href: `/locations/franklin-county/assault-defense-${slug}` },
  { label: 'Drug possession', href: `/locations/franklin-county/drug-possession-defense-${slug}` },
  { label: 'Disorderly conduct', href: `/locations/franklin-county/disorderly-conduct-defense-${slug}` },
  { label: 'Open container', href: `/locations/franklin-county/open-container-defense-${slug}` },
  ...(hasMayorsCourt ? [{ label: "Mayor's court", href: `/locations/franklin-county/mayors-court-${slug}` }] : []),
];

const faqs = [
  {
    question: 'What areas of Franklin County does Jwayyed Law LLC serve?',
    answer:
      "All of Franklin County, including Columbus, Dublin, Hilliard, Westerville, Upper Arlington, Bexley, Grove City, Reynoldsburg, Whitehall, Worthington, Canal Winchester, Groveport, Pickerington, New Albany, Grandview Heights, Marble Cliff and Obetz. The firm appears at Franklin County Municipal Court, the Franklin County Court of Common Pleas and every active mayor's court in the county.",
  },
  {
    question: 'What practice areas does the firm handle in Franklin County?',
    answer:
      'OVI/DUI defense (first through felony OVI, high-tier, refusal, CDL, underage and marijuana OVI); criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container and expungement); personal injury (car accidents, premises liability and wrongful death); business formation and disputes; civil litigation; and estate planning and probate. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Franklin County?',
    answer:
      'After an OVI arrest anywhere in Franklin County, the officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have 30 days from the date of the ALS to appeal it at Franklin County Municipal Court. Missing the deadline waives your right to contest the suspension for good, even if the OVI charge is later dismissed or reduced. Contact the firm soon after the arrest so the deadline is met.',
  },
  {
    question: "Which Franklin County suburbs have mayor's courts?",
    answer:
      "Active mayor's courts in Franklin County include Bexley, Canal Winchester, Dublin, Grove City, Groveport, Hilliard, New Albany, Obetz, Pickerington, Reynoldsburg, Upper Arlington, Westerville, Whitehall and Worthington. A mayor's court handles minor misdemeanor and traffic charges from inside the municipality. First-degree misdemeanor and OVI charges may be arraigned in mayor's court but usually transfer to Franklin County Municipal Court. The firm appears regularly in all of them.",
  },
  {
    question: 'Can a misdemeanor conviction be expunged in Franklin County?',
    answer:
      'Many Franklin County misdemeanor convictions can be sealed (commonly called expungement) under ORC 2953.32. The waiting period is generally one year after final discharge. OVI convictions, most traffic offenses, first- or second-degree offenses of violence and sexually oriented offenses are permanently ineligible. If an OVI was reduced to reckless operation by plea agreement, the reckless operation conviction may qualify. The firm reviews eligibility and files sealing applications in Franklin County Municipal Court.',
  },
  {
    question: 'How does the firm approach criminal defense in Franklin County?',
    answer:
      "The firm gets all available evidence before weighing any plea offer: police reports, dash-cam and body-cam footage, dispatch logs, lab results and witness statements. It looks for constitutional issues such as unlawful stops, improperly given field sobriety tests and Miranda violations, and it works with the local practices of each municipality's prosecutor and each mayor's court magistrate. The aim is a dismissal, a reduction or a diversion program that avoids a permanent record.",
  },
];

export default function FranklinCountyLocationsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal defense and OVI in Franklin County"
        description="Columbus cases go to Franklin County Municipal Court, and most suburbs also run a mayor's court. The firm appears in both, and in the Court of Common Pleas."
      />

      <Section
        title="What we handle in Franklin County"
        intro={
          <p>
            Franklin County is home to Columbus and more than a dozen incorporated suburbs, each with its own police department and
            prosecutor, and often a mayor&apos;s court.
          </p>
        }
      >
        <h3>OVI and DUI charges in Columbus</h3>
        <LinkGrid links={oviLinks} />
        <h3>Criminal charges in Columbus</h3>
        <LinkGrid links={criminalLinks} />
        <h3>County-wide pages</h3>
        <LinkGrid links={countyWideLinks} />
      </Section>

      <Section title="Franklin County courts" tone="ice">
        <p>
          Misdemeanor and OVI cases from Columbus are heard at{' '}
          <Link href="/courts/franklin-county-municipal-court">Franklin County Municipal Court</Link>. Felonies go to the Court of
          Common Pleas. Charges from a suburb with a mayor&apos;s court may start there.
        </p>
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'Specialized dockets', value: FCMC.specializedDockets.join('; ') },
          ]}
        />
        <LinkGrid links={courtLinks} />
      </Section>

      <Section
        title="Charged in a suburb?"
        intro={<p>Find your community, then your charge. Suburbs marked with a mayor&apos;s court have their own court page.</p>}
      >
        <FactTable
          title="Franklin County suburbs"
          rows={suburbs.map(({ suburb, slug, hasMayorsCourt }) => ({
            label: hasMayorsCourt ? `${suburb} (mayor's court)` : suburb,
            value: (
              <span className="flex flex-wrap gap-x-4 gap-y-1">
                {suburbCharges(slug, hasMayorsCourt).map(({ label, href }) => (
                  <Link key={href} href={href} className="text-sky-deep underline underline-offset-2 hover:text-navy-950">
                    {label}
                  </Link>
                ))}
              </span>
            ),
          }))}
        />
      </Section>

      <Section title="After an arrest" tone="ice">
        <Callout title="OVI arrests have a 30-day deadline">
          The ALS appeal must be filed within 30 days. Call <a href="tel:6142855482" className="text-sky-deep underline underline-offset-2">(614) 285-5482</a> or{' '}
          <Link href="/contact" className="text-sky-deep underline underline-offset-2">schedule a consultation online</Link>.
        </Callout>
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
