import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franklin County Attorney — Columbus, Ohio | Jwayyed Law LLC',
  description: 'OVI defense, criminal misdemeanor defense, civil litigation, business, and estate planning in Franklin County and Columbus, Ohio. Call (614) 285-5482.',
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
    title: 'Franklin County Attorney — Columbus, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/franklin-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/franklin-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
];

const faqs = [
  {
    question: `What practice areas does Jwayyed Law LLC handle in Franklin County?`,
    answer: `Jwayyed Law LLC provides full-service legal representation in Franklin County, including: OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container, and more), traffic violations, civil litigation in Franklin County Municipal Court and Common Pleas Court, business formation and disputes, landlord-tenant and eviction proceedings, estate planning (wills, trusts, powers of attorney), and probate administration in Franklin County Probate Court. Call (614) 285-5482 to discuss your case.`,
  },
  {
    question: `What courts are in Franklin County, Ohio?`,
    answer: `Franklin County is served by: Franklin County Municipal Court (375 S. High St, Columbus) — handles misdemeanor criminal, OVI, traffic, and civil matters up to $15,000; Franklin County Court of Common Pleas — General Division (369 S. High St) for civil cases over $15,000, Criminal Division for felonies, and Domestic Relations Division; Franklin County Probate Court (373 S. High St) for estates, guardianships, and trusts; plus mayor's courts in Dublin, Hilliard, Westerville, Bexley, Reynoldsburg, Upper Arlington, Whitehall, Worthington, and other Franklin County suburbs. The 10th District Court of Appeals in Columbus hears appeals from all Franklin County trial courts.`,
  },
  {
    question: `What are the OVI penalties in Franklin County?`,
    answer: `Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. High-tier OVI (BAC 0.17% or above) carries enhanced mandatory minimums. A second OVI within 10 years escalates to a minimum of 10 consecutive days, fines of $715 to $1,625, and 1 to 7 year suspension with vehicle immobilization. OVI charges in Franklin County suburbs are typically heard first in that suburb's mayor's court before any bindover. Our firm handles OVI defense across all of Franklin County.`,
  },
  {
    question: `What is a mayor's court and which Franklin County suburbs have one?`,
    answer: `A mayor's court is a local court that hears minor misdemeanor and traffic cases arising within that municipality's limits. In Franklin County, active mayor's courts include those in Dublin, Hilliard, Westerville, Bexley, Canal Winchester, Grove City, Groveport, New Albany, Obetz, Pickerington, Reynoldsburg, Upper Arlington, Whitehall, and Worthington. Mayor's courts do not have jurisdiction over first-degree misdemeanors in most circumstances — those cases transfer to Franklin County Municipal Court. Cases are presided over by a local magistrate rather than an elected judge. Defense strategy in mayor's court differs from Franklin County Municipal Court because local police agencies, prosecutors, and magistrates have their own practices and expectations.`,
  },
  {
    question: `How does probate work in Franklin County Probate Court?`,
    answer: `The Franklin County Probate Court is located at 373 S. High Street, Columbus, OH 43215. When a Franklin County resident dies, assets titled solely in their name typically must pass through probate under ORC Chapter 2113. The executor named in the will (or court-appointed administrator if no will exists) files to open the estate, inventories assets, publishes notice to creditors, pays lawful debts and taxes, and distributes the remaining assets to heirs. The probate process in Ohio generally takes 6 to 12 months for straightforward estates. Proper estate planning — including trusts, beneficiary designations, and joint ownership — can minimize or eliminate the need for probate. Our firm assists with both probate administration and the estate planning needed to simplify or avoid it.`,
  },
  {
    question: `How does the eviction process work in Franklin County Municipal Court?`,
    answer: `Residential evictions in Franklin County are governed by ORC Chapter 1923 and heard in Franklin County Municipal Court's Housing Division at 375 S. High Street. A landlord must first serve the tenant with proper written notice — typically a 3-day notice for nonpayment of rent or a 30-day notice for other lease violations under ORC Chapter 5321. If the tenant does not comply, the landlord files an eviction complaint. The court schedules a hearing within 30 days under ORC 1923.07. If the landlord prevails, the court issues a judgment for possession; after the appeal period, a writ of restitution authorizes the bailiff to remove the tenant. Procedural errors at any stage — improper notice, failure to comply with habitability requirements — can result in dismissal and delay.`,
  },
  {
    question: `Can a misdemeanor conviction be expunged in Franklin County?`,
    answer: `Many misdemeanor convictions in Franklin County are eligible for record sealing (expungement) under Ohio Revised Code 2953.32. The waiting period is 1 year after final discharge for most misdemeanors. Permanently ineligible offenses include OVI convictions under R.C. 4511.19, traffic violations, offenses of violence of the 1st or 2nd degree, and sexually oriented offenses. However, if an OVI charge is reduced to reckless operation (R.C. 4511.20) by plea agreement, the reckless operation conviction may be eligible for sealing after the applicable waiting period. Franklin County Municipal Court handles sealing applications. Our firm evaluates eligibility and files applications in Franklin County Municipal Court.`,
  },
  {
    question: `Why choose Jwayyed Law LLC for Franklin County legal matters?`,
    answer: `Jwayyed Law LLC provides experienced, full-service legal representation throughout Franklin County — from Columbus to the suburbs. Our attorney understands Franklin County Municipal Court procedures, the mayor's courts in each Franklin County suburb, and the practices of local prosecutors across the county. We handle everything from first-offense OVI cases where the 30-day ALS appeal deadline is critical, to serious misdemeanor charges that can affect your career and housing, to civil disputes and estate planning for Columbus families. We combine the accessibility of a small firm with substantive knowledge of Ohio law. Call (614) 285-5482 for a consultation.`,
  },
];

export default function FranklinCountyCourtsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((f: { question: string; answer: string }) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.answer },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map(
      (item: { label: string; href: string }, idx: number) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': item.label,
        'item': `https://www.jjlawohio.com${item.href}`,
      })
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Attorney — Columbus, Ohio"
        description="Full-service legal representation in Franklin County: OVI defense, criminal misdemeanor defense, civil litigation, business formation, estate planning, and probate. Serving Columbus and all Franklin County suburbs."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Full-Service Legal Representation in Franklin County, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County is the most populous county in Ohio and home to Columbus, the state capital. With over 1.3 million residents, the county is served by a multi-tiered court system — from the mayor's courts in Dublin, Hilliard, Westerville, Bexley, and a dozen other suburbs, to Franklin County Municipal Court at 375 S. High Street, to the Court of Common Pleas and Probate Court just steps away. Jwayyed Law LLC provides experienced legal representation across every practice area in every Franklin County court — OVI and DUI defense, criminal misdemeanor defense, traffic violations, civil litigation, business matters, landlord-tenant proceedings, estate planning, and probate administration. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              to discuss your Franklin County legal matter.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI / DUI Defense in Franklin County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI arrests in Franklin County are common along I-270, I-71, I-70, US-33, US-23, and the major suburban corridors. Whether you were stopped by Columbus Police, the Franklin County Sheriff, the Ohio State Highway Patrol, or a suburban police department, an OVI arrest triggers two separate proceedings that both require immediate attention: the criminal OVI case under{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">Ohio Revised Code 4511.19</Link>{' '}
              and the Administrative License Suspension (ALS) under ORC 4511.191. You have only <strong>30 days from the date of arrest</strong> to appeal the ALS in Franklin County Municipal Court — missing this deadline permanently forfeits your right to contest the suspension.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under HB 37, effective April 9, 2025, a first OVI conviction in Franklin County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. High-tier OVI (BAC 0.17% or above) carries enhanced mandatory minimums even for first offenses. A second OVI within 10 years escalates significantly: 10 consecutive days minimum, $715 to $1,625 in fines, and 1 to 7 year suspension with 90-day vehicle immobilization. Our firm handles OVI cases at{' '}
              <Link href="/courts/franklin-county-municipal-court" className="text-[#b87333] underline hover:opacity-80">Franklin County Municipal Court</Link>{' '}
              and at every mayor's court in the Franklin County suburbs we serve.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Criminal Misdemeanor Defense in Franklin County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court handles misdemeanor criminal charges for Columbus and all Franklin County municipalities. Our firm defends the full range of misdemeanor charges heard in this court, including theft and shoplifting under ORC 2913.02 (M1 for amounts under $1,000 — up to 180 days in jail and a $1,000 fine), domestic violence under ORC 2919.25 (with significant collateral consequences including the federal Lautenberg Amendment's permanent firearm prohibition triggered by any misdemeanor DV conviction), assault under ORC 2903.13, drug possession under ORC 2925.11, disorderly conduct under ORC 2917.11, and open container under ORC 4301.62. For cases involving drug addiction or mental illness, the court's HART and MAVS specialized dockets may offer treatment-based alternatives to traditional prosecution.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A misdemeanor conviction creates a permanent criminal record accessible to employers, landlords, and professional licensing boards. Early, informed advocacy — reviewing all evidence, identifying constitutional issues, understanding the local prosecutor's practices — can make the difference between a conviction and a dismissal, a reduced charge, or a diversion program that leaves no permanent record. Our firm obtains all available evidence before evaluating any plea offer and fights every case from the first hearing to the last.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Franklin County Courts — Where Your Case Will Be Heard
            </h3>

            <div className="grid md:grid-cols-1 gap-6 mb-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Franklin County Municipal Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">375 S. High Street, Columbus, OH 43215 — (614) 645-8186</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  OVI/DUI defense &bull; Misdemeanor criminal defense &bull; Traffic violations &bull; Civil claims up to $15,000 &bull; Evictions &bull; Small Claims (up to $6,000) &bull; HART, MAVS, and CATCH specialty dockets
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Franklin County Mayor&apos;s Courts
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">Located in: Bexley, Canal Winchester, Dublin, Grove City, Groveport, Hilliard, New Albany, Obetz, Pickerington, Reynoldsburg, Upper Arlington, Westerville, Whitehall, Worthington</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Minor misdemeanor traffic and OVI arraignments &bull; Cases may transfer to Franklin County Municipal Court for higher charges
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Franklin County Court of Common Pleas — General Division
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">369 S. High Street, Columbus, OH 43215</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Civil cases over $15,000 &bull; Felony criminal cases &bull; Business disputes &bull; Contract litigation &bull; Domestic Relations
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Franklin County Probate Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">373 S. High Street, Columbus, OH 43215</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Estate administration &bull; Guardianships &bull; Trust matters &bull; Will contests (ORC Ch. 2101–2131)
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  10th District Court of Appeals
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">373 S. High Street, Columbus, OH 43215</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Appeals from all Franklin County trial courts in civil, criminal, and OVI matters
                </p>
              </div>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-2">
              Columbus Defense Pages
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Charged in Columbus or at Franklin County Municipal Court? Select your practice area below.
            </p>

            {/* Columbus Practice Area Cards */}
            <div className="not-prose grid md:grid-cols-3 gap-5 mb-10">

              {/* OVI Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                <div className="bg-[#b87333] px-5 py-4">
                  <span className="font-['Playfair_Display',_'Georgia',_serif] text-white font-bold text-base">OVI / DUI Defense</span>
                  <span className="block font-['Inter',_'Arial',_sans-serif] text-white/80 text-xs mt-0.5">Columbus</span>
                </div>
                <div className="flex flex-col divide-y divide-gray-100 flex-1">
                  {[
                    { label: '1st OVI', href: '/locations/franklin-county/first-ovi-columbus' },
                    { label: '2nd OVI', href: '/locations/franklin-county/second-ovi-columbus' },
                    { label: '3rd OVI', href: '/locations/franklin-county/third-ovi-columbus' },
                    { label: 'Felony OVI', href: '/locations/franklin-county/felony-ovi-columbus' },
                    { label: 'High-Tier OVI (0.17%+)', href: '/locations/franklin-county/high-tier-ovi-columbus' },
                    { label: 'Refusal OVI', href: '/locations/franklin-county/refusal-ovi-columbus' },
                    { label: 'Underage OVI', href: '/locations/franklin-county/underage-ovi-columbus' },
                    { label: 'CDL OVI', href: '/locations/franklin-county/cdl-ovi-columbus' },
                    { label: 'Marijuana OVI', href: '/locations/franklin-county/marijuana-ovi-columbus' },
                    { label: 'OVI With Accident', href: '/locations/franklin-county/ovi-with-accident-columbus' },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href} className="flex items-center justify-between px-4 py-2.5 hover:bg-[#b87333]/5 group transition-colors">
                      <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-700 group-hover:text-[#b87333] transition-colors">{label}</span>
                      <span className="text-gray-300 group-hover:text-[#b87333] transition-colors text-xs ml-2">→</span>
                    </Link>
                  ))}
                </div>
                <div className="px-4 py-3 border-t border-gray-100">
                  <Link href="/locations/franklin-county/ovi-dui-defense-columbus" className="block text-center text-xs font-semibold font-['Inter',_'Arial',_sans-serif] text-[#b87333] border border-[#b87333] rounded-lg py-2 hover:bg-[#b87333] hover:text-white transition-colors">
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
                  {[
                    { label: 'Theft / Shoplifting', href: '/locations/franklin-county/theft-defense-columbus' },
                    { label: 'Drug Possession', href: '/locations/franklin-county/drug-possession-defense-columbus' },
                    { label: 'Marijuana Possession', href: '/locations/franklin-county/marijuana-possession-columbus' },
                    { label: 'Domestic Violence', href: '/locations/franklin-county/domestic-violence-defense-columbus' },
                    { label: 'Assault', href: '/locations/franklin-county/assault-defense-columbus' },
                    { label: 'Disorderly Conduct', href: '/locations/franklin-county/disorderly-conduct-defense-columbus' },
                    { label: 'Open Container', href: '/locations/franklin-county/open-container-defense-columbus' },
                    { label: 'Expungement', href: '/locations/franklin-county/expungement-columbus' },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href} className="flex items-center justify-between px-4 py-2.5 hover:bg-[#b87333]/5 group transition-colors">
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
                  <span className="block font-['Inter',_'Arial',_sans-serif] text-white/80 text-xs mt-0.5">Franklin County Municipal Court &amp; county</span>
                </div>
                <div className="flex flex-col divide-y divide-gray-100 flex-1">
                  {[
                    { label: 'OVI Defense — FCMC', href: '/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court' },
                    { label: 'Criminal Defense — FCMC', href: '/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court' },
                    { label: "Mayor's Courts — All Suburbs", href: '/locations/franklin-county/mayors-courts-franklin-county' },
                    { label: 'Expungement — Franklin County', href: '/locations/franklin-county/expungement-franklin-county' },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href} className="flex items-center justify-between px-4 py-2.5 hover:bg-[#b87333]/5 group transition-colors">
                      <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-700 group-hover:text-[#b87333] transition-colors">{label}</span>
                      <span className="text-gray-300 group-hover:text-[#b87333] transition-colors text-xs ml-2">→</span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-2">
              Franklin County Suburbs
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              Charged in a Franklin County suburb? Find your community below.
            </p>

            <div className="not-prose grid sm:grid-cols-2 gap-4 mb-10">
              {[
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
              ].map(({ suburb, slug, hasMayorsCourt }) => (
                <div key={slug} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#b87333]/40 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 text-base">{suburb}</h4>
                    {hasMayorsCourt && (
                      <span className="font-['Inter',_'Arial',_sans-serif] text-[10px] font-semibold uppercase tracking-wide text-[#b87333] bg-[#b87333]/10 px-2 py-0.5 rounded-full">
                        Mayor&apos;s Court
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: 'OVI / DUI', href: `/locations/franklin-county/ovi-dui-defense-${slug}` },
                      { label: 'Theft', href: `/locations/franklin-county/theft-defense-${slug}` },
                      { label: 'Domestic Violence', href: `/locations/franklin-county/domestic-violence-defense-${slug}` },
                      { label: 'Assault', href: `/locations/franklin-county/assault-defense-${slug}` },
                      { label: 'Drug Possession', href: `/locations/franklin-county/drug-possession-defense-${slug}` },
                      { label: 'Disorderly Conduct', href: `/locations/franklin-county/disorderly-conduct-defense-${slug}` },
                      { label: 'Open Container', href: `/locations/franklin-county/open-container-defense-${slug}` },
                      ...(hasMayorsCourt ? [{ label: "Mayor's Court", href: `/locations/franklin-county/mayors-court-${slug}` }] : []),
                    ].map(({ label, href }) => (
                      <Link key={href} href={href} className="inline-block font-['Inter',_'Arial',_sans-serif] text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-[#b87333] hover:text-white transition-colors whitespace-nowrap">
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <LocationsWeServe title="Franklin County & Ohio Legal Services" />

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Whether you are facing an OVI arrest on I-270, a theft charge in Hilliard, a domestic violence allegation in Westerville, or need to plan your estate or form a Columbus business, Jwayyed Law LLC is ready to help. Contact us at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              For OVI cases, time is critical — the ALS appeal must be filed within 30 days of arrest.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
