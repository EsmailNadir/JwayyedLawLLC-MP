import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Franklin County OVI & Criminal Defense | Jwayyed Law LLC',
  description:
    'OVI, criminal defense & personal injury across Franklin County — Columbus, Dublin, Hilliard, Westerville & nearby. Jwayyed Law LLC. (614) 285-5482.',
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
    url: 'https://www.jjlawohio.com/locations/franklin-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county' },
};

const breadcrumbItems = [
  { label: 'Franklin County', href: '/locations/franklin-county' },
];

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
  { label: '1st OVI', href: '/locations/franklin-county/first-ovi-columbus' },
  { label: '2nd OVI', href: '/locations/franklin-county/second-ovi-columbus' },
  { label: '3rd OVI', href: '/locations/franklin-county/third-ovi-columbus' },
  { label: 'Felony OVI', href: '/locations/franklin-county/felony-ovi-columbus' },
  { label: 'High-Tier OVI', href: '/locations/franklin-county/high-tier-ovi-columbus' },
  { label: 'Refusal OVI', href: '/locations/franklin-county/refusal-ovi-columbus' },
  { label: 'Underage OVI', href: '/locations/franklin-county/underage-ovi-columbus' },
  { label: 'CDL / Commercial', href: '/locations/franklin-county/cdl-ovi-columbus' },
  { label: 'Marijuana OVI', href: '/locations/franklin-county/marijuana-ovi-columbus' },
  { label: 'OVI With Accident', href: '/locations/franklin-county/ovi-with-accident-columbus' },
];

const criminalLinks = [
  { label: 'Theft / Shoplifting', href: '/locations/franklin-county/theft-defense-columbus' },
  { label: 'Drug Possession', href: '/locations/franklin-county/drug-possession-defense-columbus' },
  { label: 'Marijuana Possession', href: '/locations/franklin-county/marijuana-possession-columbus' },
  { label: 'Domestic Violence', href: '/locations/franklin-county/domestic-violence-defense-columbus' },
  { label: 'Assault', href: '/locations/franklin-county/assault-defense-columbus' },
  { label: 'Disorderly Conduct', href: '/locations/franklin-county/disorderly-conduct-defense-columbus' },
  { label: 'Open Container', href: '/locations/franklin-county/open-container-defense-columbus' },
  { label: 'Expungement', href: '/locations/franklin-county/expungement-columbus' },
];

const countyWideLinks = [
  { label: 'OVI — FCMC', href: '/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court' },
  { label: 'Criminal — FCMC', href: '/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court' },
  { label: "Mayor's Courts", href: '/locations/franklin-county/mayors-courts-franklin-county' },
  { label: 'Expungement', href: '/locations/franklin-county/expungement-franklin-county' },
  { label: 'Personal Injury', href: '/locations/franklin-county/personal-injury-franklin-county' },
  { label: 'Business / LLC', href: '/locations/franklin-county/business-formation-llc-franklin-county' },
];

const suburbCharges = (slug: string, hasMayorsCourt: boolean) => [
  { label: 'OVI / DUI', href: `/locations/franklin-county/ovi-dui-defense-${slug}` },
  { label: 'Theft', href: `/locations/franklin-county/theft-defense-${slug}` },
  { label: 'Domestic Violence', href: `/locations/franklin-county/domestic-violence-defense-${slug}` },
  { label: 'Assault', href: `/locations/franklin-county/assault-defense-${slug}` },
  { label: 'Drug Possession', href: `/locations/franklin-county/drug-possession-defense-${slug}` },
  { label: 'Disorderly Conduct', href: `/locations/franklin-county/disorderly-conduct-defense-${slug}` },
  { label: 'Open Container', href: `/locations/franklin-county/open-container-defense-${slug}` },
  ...(hasMayorsCourt ? [{ label: "Mayor's Court", href: `/locations/franklin-county/mayors-court-${slug}` }] : []),
];

const faqs = [
  {
    question: 'What areas of Franklin County does Jwayyed Law LLC serve?',
    answer:
      'Jwayyed Law LLC serves all of Franklin County — including Columbus, Dublin, Hilliard, Westerville, Upper Arlington, Bexley, Grove City, Reynoldsburg, Whitehall, Worthington, Canal Winchester, Groveport, Pickerington, New Albany, Grandview Heights, Marble Cliff, and Obetz. We appear at Franklin County Municipal Court, the Franklin County Court of Common Pleas, and all active mayor\'s courts throughout the county.',
  },
  {
    question: 'What practice areas does the firm handle in Franklin County?',
    answer:
      'Our Franklin County practice covers: OVI/DUI defense (first through felony OVI, high-tier, refusal, CDL, underage, and marijuana OVI); criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container, expungement); personal injury (car accidents, premises liability, wrongful death); business formation and disputes; civil litigation; and estate planning and probate. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Franklin County?',
    answer:
      'After an OVI arrest anywhere in Franklin County, the arresting officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have only 30 days from the date of the ALS to appeal it at Franklin County Municipal Court. Missing this deadline permanently waives your right to contest the suspension — even if the underlying OVI charge is later dismissed or reduced. Contact our office immediately after an OVI arrest to protect this deadline.',
  },
  {
    question: "Which Franklin County suburbs have mayor's courts?",
    answer:
      "Active mayor's courts in Franklin County include: Bexley, Canal Winchester, Dublin, Grove City, Groveport, Hilliard, New Albany, Obetz, Pickerington, Reynoldsburg, Upper Arlington, Westerville, Whitehall, and Worthington. Mayor's courts handle minor misdemeanor and traffic charges arising within the municipality. First-degree misdemeanor and OVI charges may be arraigned in mayor's court but typically transfer to Franklin County Municipal Court for further proceedings. Our firm appears regularly in all Franklin County mayor's courts.",
  },
  {
    question: 'Can a misdemeanor conviction be expunged in Franklin County?',
    answer:
      'Many Franklin County misdemeanor convictions are eligible for record sealing (commonly called expungement) under ORC 2953.32. The waiting period is generally one year after final discharge. Permanently ineligible offenses include OVI convictions, most traffic offenses, first- or second-degree offenses of violence, and sexually oriented offenses. If an OVI was reduced to reckless operation by plea agreement, the reckless operation conviction may qualify. Our firm evaluates eligibility and files sealing applications in Franklin County Municipal Court.',
  },
  {
    question: 'How does the firm approach criminal defense in Franklin County?',
    answer:
      'We obtain all available evidence before evaluating any plea offer — police reports, dashcam and bodycam footage, dispatch logs, lab results, and witness statements. We identify constitutional issues (unlawful stops, improper field sobriety testing, Miranda violations), understand the local practices of each Franklin County municipality\'s prosecutor, and know the tendencies of each mayor\'s court magistrate. Early, informed advocacy often means the difference between a conviction and a dismissal, reduction, or diversion program that avoids a permanent record.',
  },
];

export default function FranklinCountyLocationsPage() {


  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Criminal Defense & OVI Attorney"
        description="Experienced legal representation across all of Franklin County — Columbus, Dublin, Hilliard, Westerville, Upper Arlington, Grove City, Bexley, and every suburb in between. Call (614) 285-5482."
      />

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-navy-950/80 text-lg leading-relaxed">
            Franklin County is Ohio&apos;s most populous county, home to Columbus and more than a dozen incorporated suburbs — each with its own police department, prosecutor, and often a mayor&apos;s court. Jwayyed Law LLC represents clients at{' '}
            <Link href="/courts/franklin-county-municipal-court" className="text-sky-deep underline hover:opacity-80">
              Franklin County Municipal Court
            </Link>
            , the Court of Common Pleas, and every active mayor&apos;s court in the county. Call{' '}
            <a href="tel:6142855482" className="text-sky-deep underline hover:opacity-80">(614) 285-5482</a>.
          </p>
        </div>
      </section>

      {/* Columbus Practice Area Cards */}
      <section className="py-12 bg-ice border-t border-navy-950/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="jw-serif text-2xl font-bold text-navy-950 mb-1">
              Charged in Columbus?
            </h2>
            <p className="text-navy-950/60 text-sm">
              Select your practice area below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {/* OVI Card */}
            <div className="bg-white border border-navy-950/10 overflow-hidden flex flex-col">
              <div className="bg-navy-950 px-5 py-4">
                <span className="jw-serif text-white font-bold text-base">OVI / DUI Defense</span>
                <span className="block text-white/80 text-xs mt-0.5">Columbus</span>
              </div>
              <div className="flex flex-col divide-y divide-navy-950/10 flex-1">
                {oviLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-sky-deep/5 group transition-colors"
                  >
                    <span className="text-sm text-navy-950/80 group-hover:text-sky-deep transition-colors">{label}</span>
                    <span className="text-white/80 group-hover:text-sky-deep transition-colors text-xs ml-2">→</span>
                  </Link>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-navy-950/10">
                <Link
                  href="/locations/franklin-county/ovi-dui-defense-columbus"
                  className="block text-center text-xs font-semibold text-sky-deep border border-sky-deep py-2 hover:bg-navy-950 hover:text-white transition-colors"
                >
                  View OVI hub →
                </Link>
              </div>
            </div>

            {/* Criminal Defense Card */}
            <div className="bg-white border border-navy-950/10 overflow-hidden flex flex-col">
              <div className="bg-navy-950 px-5 py-4">
                <span className="jw-serif text-white font-bold text-base">Criminal Defense</span>
                <span className="block text-white/80 text-xs mt-0.5">Columbus</span>
              </div>
              <div className="flex flex-col divide-y divide-navy-950/10 flex-1">
                {criminalLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-sky-deep/5 group transition-colors"
                  >
                    <span className="text-sm text-navy-950/80 group-hover:text-sky-deep transition-colors">{label}</span>
                    <span className="text-white/80 group-hover:text-sky-deep transition-colors text-xs ml-2">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* County-Wide Card */}
            <div className="bg-white border border-navy-950/10 overflow-hidden flex flex-col">
              <div className="bg-navy-800 px-5 py-4">
                <span className="jw-serif text-white font-bold text-base">County-Wide Pages</span>
                <span className="block text-white/80 text-xs mt-0.5">Franklin County Municipal Court & county</span>
              </div>
              <div className="flex flex-col divide-y divide-navy-950/10 flex-1">
                {countyWideLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-sky-deep/5 group transition-colors"
                  >
                    <span className="text-sm text-navy-950/80 group-hover:text-sky-deep transition-colors">{label}</span>
                    <span className="text-white/80 group-hover:text-sky-deep transition-colors text-xs ml-2">→</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Suburb Card Grid */}
      <section className="py-12 bg-white border-t border-navy-950/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="jw-serif text-2xl font-bold text-navy-950 mb-1">
              Charged in a Suburb?
            </h2>
            <p className="text-navy-950/60 text-sm">
              Find your community and select your charge.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {suburbs.map(({ suburb, slug, hasMayorsCourt }) => (
              <div
                key={slug}
                className="bg-white border border-navy-950/10 p-5 hover:border-sky-deep/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="jw-serif font-bold text-navy-950 text-base">
                    {suburb}
                  </h3>
                  {hasMayorsCourt && (
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-sky-deep bg-sky-deep/10 px-2 py-0.5 rounded-full">
                      Mayor&apos;s Court
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {suburbCharges(slug, hasMayorsCourt).map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="inline-block text-xs font-medium px-3 py-1.5 rounded-full bg-ice text-navy-950/80 hover:bg-navy-950 hover:text-white transition-colors whitespace-nowrap"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA text */}
      <section className="py-10 bg-ice border-t border-navy-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy-950/80 leading-relaxed">
            Facing a charge anywhere in Franklin County? Call{' '}
            <a href="tel:6142855482" className="text-sky-deep font-semibold underline hover:opacity-80">(614) 285-5482</a>{' '}
            or{' '}
            <Link href="/contact" className="text-sky-deep underline hover:opacity-80">schedule a consultation online</Link>.
            For OVI arrests, the 30-day ALS appeal deadline is critical — contact us immediately.
          </p>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
