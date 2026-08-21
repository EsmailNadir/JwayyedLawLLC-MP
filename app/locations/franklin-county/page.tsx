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
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: `https://www.jjlawohio.com${item.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Criminal Defense & OVI Attorney"
        description="Experienced legal representation across all of Franklin County — Columbus, Dublin, Hilliard, Westerville, Upper Arlington, Grove City, Bexley, and every suburb in between. Call (614) 285-5482."
      />

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 text-lg leading-relaxed">
            Franklin County is Ohio&apos;s most populous county, home to Columbus and more than a dozen incorporated suburbs — each with its own police department, prosecutor, and often a mayor&apos;s court. Jwayyed Law LLC represents clients at{' '}
            <Link href="/courts/franklin-county-municipal-court" className="text-[#b87333] underline hover:opacity-80">
              Franklin County Municipal Court
            </Link>
            , the Court of Common Pleas, and every active mayor&apos;s court in the county. Call{' '}
            <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>.
          </p>
        </div>
      </section>

      {/* Columbus Practice Area Cards */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mb-1">
              Charged in Columbus?
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-500 text-sm">
              Select your practice area below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {/* OVI Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-[#b87333] px-5 py-4">
                <span className="font-['Playfair_Display',_'Georgia',_serif] text-white font-bold text-base">OVI / DUI Defense</span>
                <span className="block font-['Inter',_'Arial',_sans-serif] text-white/80 text-xs mt-0.5">Columbus</span>
              </div>
              <div className="flex flex-col divide-y divide-gray-100 flex-1">
                {oviLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-[#b87333]/5 group transition-colors"
                  >
                    <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-700 group-hover:text-[#b87333] transition-colors">{label}</span>
                    <span className="text-gray-300 group-hover:text-[#b87333] transition-colors text-xs ml-2">→</span>
                  </Link>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-gray-100">
                <Link
                  href="/locations/franklin-county/ovi-dui-defense-columbus"
                  className="block text-center text-xs font-semibold font-['Inter',_'Arial',_sans-serif] text-[#b87333] border border-[#b87333] rounded-lg py-2 hover:bg-[#b87333] hover:text-white transition-colors"
                >
                  View OVI hub →
                </Link>
              </div>
            </div>

            {/* Criminal Defense Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-[#b87333] px-5 py-4">
                <span className="font-['Playfair_Display',_'Georgia',_serif] text-white font-bold text-base">Criminal Defense</span>
                <span className="block font-['Inter',_'Arial',_sans-serif] text-white/80 text-xs mt-0.5">Columbus</span>
              </div>
              <div className="flex flex-col divide-y divide-gray-100 flex-1">
                {criminalLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-[#b87333]/5 group transition-colors"
                  >
                    <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-700 group-hover:text-[#b87333] transition-colors">{label}</span>
                    <span className="text-gray-300 group-hover:text-[#b87333] transition-colors text-xs ml-2">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* County-Wide Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-gray-700 px-5 py-4">
                <span className="font-['Playfair_Display',_'Georgia',_serif] text-white font-bold text-base">County-Wide Pages</span>
                <span className="block font-['Inter',_'Arial',_sans-serif] text-white/80 text-xs mt-0.5">Franklin County Municipal Court & county</span>
              </div>
              <div className="flex flex-col divide-y divide-gray-100 flex-1">
                {countyWideLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-[#b87333]/5 group transition-colors"
                  >
                    <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-700 group-hover:text-[#b87333] transition-colors">{label}</span>
                    <span className="text-gray-300 group-hover:text-[#b87333] transition-colors text-xs ml-2">→</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Suburb Card Grid */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mb-1">
              Charged in a Suburb?
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-500 text-sm">
              Find your community and select your charge.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {suburbs.map(({ suburb, slug, hasMayorsCourt }) => (
              <div
                key={slug}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#b87333]/40 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 text-base">
                    {suburb}
                  </h3>
                  {hasMayorsCourt && (
                    <span className="font-['Inter',_'Arial',_sans-serif] text-[10px] font-semibold uppercase tracking-wide text-[#b87333] bg-[#b87333]/10 px-2 py-0.5 rounded-full">
                      Mayor&apos;s Court
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {suburbCharges(slug, hasMayorsCourt).map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="inline-block font-['Inter',_'Arial',_sans-serif] text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-[#b87333] hover:text-white transition-colors whitespace-nowrap"
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
      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 leading-relaxed">
            Facing a charge anywhere in Franklin County? Call{' '}
            <a href="tel:6142855482" className="text-[#b87333] font-semibold underline hover:opacity-80">(614) 285-5482</a>{' '}
            or{' '}
            <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
            For OVI arrests, the 30-day ALS appeal deadline is critical — contact us immediately.
          </p>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
