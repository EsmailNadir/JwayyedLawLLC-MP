import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  // Root layout applies the "%s | Jwayyed Law LLC" template — no suffix here.
  title: "Johnstown Mayor's Court Attorney | Licking County",
  description:
    "Cited into Johnstown Mayor's Court in Licking County, Ohio? OVI, traffic, and ordinance defense. Court sits the 1st and 3rd Wednesday. Call (614) 285-5482.",
  keywords: [
    "Johnstown Mayor's Court attorney",
    "Johnstown Mayor's Court lawyer",
    "Johnstown Ohio traffic lawyer",
    "Johnstown Ohio OVI attorney",
    "Licking County mayor's court defense",
    "Johnstown Ohio speeding ticket lawyer",
    "Licking County Municipal Court appeal attorney",
  ],
  openGraph: {
    title: "Johnstown Mayor's Court Attorney | Jwayyed Law LLC",
    url: 'https://www.jjlawohio.com/courts/johnstown-mayors-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/johnstown-mayors-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: "Johnstown Mayor's Court", href: '/courts/johnstown-mayors-court' },
];

const courtFacts = [
  { label: 'Court', value: "Johnstown Mayor's Court (City of Johnstown, Licking County, Ohio)" },
  { label: 'Address', value: '599 S. Main Street, Johnstown, OH 43031 — sessions are held in Council Chambers' },
  { label: 'Court sessions', value: 'The 1st and 3rd Wednesday of each month' },
  { label: 'Presiding officer', value: "A licensed attorney sitting as the mayor's court magistrate" },
  { label: 'Clerk of Court', value: '(740) 967-5961 · mayorscourt@johnstownohio.org' },
  { label: 'Clerk office hours', value: 'Monday–Friday, 8:00 a.m. – 4:00 p.m. (after-hours drop box on the south side of the building)' },
  { label: 'Charging agency', value: 'Johnstown Police Department, 599 S. Main Street; Ohio State Highway Patrol on state routes' },
  { label: 'Transfers & appeals go to', value: 'Licking County Municipal Court, 40 W. Main Street, 3rd Floor, Newark, OH 43055 · (740) 670-7800' },
];

const faqs = [
  {
    question: "Where is Johnstown Mayor's Court and when does it meet?",
    answer:
      "Johnstown Mayor's Court sits in the Council Chambers at 599 S. Main Street, Johnstown, OH 43031, in western Licking County. Court is held on the 1st and 3rd Wednesday of each month. The Mayor's Court Clerk can be reached at (740) 967-5961 or mayorscourt@johnstownohio.org, and the clerk's office is open Monday through Friday from 8:00 a.m. to 4:00 p.m., with an after-hours drop box on the south side of the building. Because the court only convenes twice a month, a missed date can push your case out several weeks and may trigger a warrant — call Jwayyed Law LLC at (614) 285-5482 before your date, not after.",
  },
  {
    question: "What kinds of cases does Johnstown Mayor's Court handle?",
    answer:
      "Under R.C. 1905.01, an Ohio mayor's court has limited jurisdiction over violations of the municipality's own ordinances and over moving traffic violations of state law committed on streets and state highways inside the corporate limits. In Johnstown that means speeding, assured clear distance and failure-to-control citations, stop sign and traffic control device violations, driving under suspension and no-operator's-license charges, OVI under R.C. 4511.19 in qualifying first-offense cases, open container and other minor misdemeanor citations, and local code and nuisance violations. A mayor's court cannot hear felony charges, cannot conduct a jury trial, and cannot hear state-law criminal offenses that fall outside its statutory grant — those cases go to Licking County Municipal Court in Newark.",
  },
  {
    question: "Can Johnstown Mayor's Court hear my OVI charge?",
    answer:
      "Only in a genuine first-offense posture. R.C. 1905.01 permits a mayor's court to hear an OVI charge only if the defendant has not, within ten years of the date of the offense charged, been convicted of or pleaded guilty to a prior OVI under R.C. 4511.19 or an equivalent municipal, out-of-state, or federal offense — including a reduced charge that arose out of a dismissed OVI. If a qualifying prior exists within that ten-year window, the statute requires the case to be transferred immediately to Licking County Municipal Court. This look-back is one of the first things our attorney checks, because it determines which courthouse your case will actually be resolved in and what the realistic sentencing exposure is.",
  },
  {
    question: 'What are the penalties for a first OVI in Ohio in 2026?',
    answer:
      "Under R.C. 4511.19 as amended by House Bill 37 (effective April 9, 2025), a first OVI conviction carries a mandatory minimum of 3 days in jail or a 3-day driver intervention program, fines of $565–$1,075, a class five license suspension of 1 to 3 years, and 6 points on your Ohio driving record. A high-tier first offense — a breath test of .17 or higher, or a refusal with a prior refusal — carries 6 mandatory days. HB 37 eliminated the former 15-day hard suspension for non-refusal first offenses when an ignition interlock device is installed, which means limited driving privileges can be sought sooner. These penalties apply identically whether the case is resolved in Johnstown Mayor's Court or in Licking County Municipal Court.",
  },
  {
    question: "Is my Administrative License Suspension handled in Johnstown Mayor's Court?",
    answer:
      "No — and this is the deadline people most often miss. An Administrative License Suspension under R.C. 4511.191 takes effect at the moment of arrest when you test over the limit or refuse a chemical test, and it runs independently of the criminal case. The ALS appeal must be filed within 30 days, and it is heard by the court with jurisdiction over the underlying charge, not by the mayor's court. For a Johnstown arrest that means the appeal is filed in Licking County Municipal Court at 40 W. Main Street in Newark. Waiting for your first Johnstown Mayor's Court date — which may be two to four weeks out — can consume most of that 30-day window.",
  },
  {
    question: "Can I get a jury trial in Johnstown Mayor's Court?",
    answer:
      "No. Ohio mayor's courts are not courts of record and do not empanel juries. If you are entitled to and demand a jury trial, the case must move to Licking County Municipal Court. Separately, R.C. 1905.032 allows the mayor to transfer a case to municipal court, county court, or common pleas at any time before final disposition, and requires transfer whenever the charge falls outside the mayor's court's jurisdiction. Deciding whether to push for transfer or to resolve the matter in Johnstown is a strategic call — the prosecutors, the sentencing practices, and the diversion options are not the same in both venues.",
  },
  {
    question: "How do I appeal a Johnstown Mayor's Court conviction?",
    answer:
      "You appeal to Licking County Municipal Court, and the deadline is short. Under R.C. 1905.22, an appeal from a mayor's court is taken to the municipal or county court with jurisdiction over the municipality. Under R.C. 1905.23, the notice of appeal must be filed with the mayor's court within ten days of judgment. Under R.C. 1905.25, that appeal proceeds as a trial de novo — the case is tried over from scratch in Newark, with no deference given to what happened in Johnstown. The ten-day window is unforgiving, so if you were convicted or entered a plea at a Johnstown Mayor's Court session, call (614) 285-5482 immediately rather than waiting.",
  },
  {
    question: "Does a Johnstown Mayor's Court conviction show up on a background check?",
    answer:
      "Yes. A conviction entered in Johnstown Mayor's Court is a valid Ohio conviction with the same legal effect as one entered in Licking County Municipal Court. It reports to the Ohio BMV, appears on criminal background checks, and an OVI conviction from a mayor's court counts as a prior for Ohio's ten-year OVI look-back. Many eligible misdemeanor convictions can later be sealed or expunged under R.C. 2953.32 after the applicable waiting period, though OVI convictions are statutorily excluded from sealing. Our firm evaluates long-term record consequences before advising on any plea.",
  },
  {
    question: "What happens if I miss my Johnstown Mayor's Court date?",
    answer:
      "Failing to appear on a citation can result in a bench warrant, an additional failure-to-appear charge, and a BMV registration or license block on unpaid traffic matters. Because Johnstown Mayor's Court convenes only on the 1st and 3rd Wednesday of each month, rescheduling is not immediate. For many minor traffic and ordinance citations an attorney can enter an appearance and handle the matter on your behalf so you do not need to take time off work; for OVI and other charges carrying possible jail time, a personal appearance is generally required. Call the Mayor's Court Clerk at (740) 967-5961 to confirm your date, and call our office at (614) 285-5482 before it arrives.",
  },
  {
    question: "Do I need a lawyer for Johnstown Mayor's Court?",
    answer:
      "You have the right to counsel for any charge carrying possible incarceration, and it is worth exercising for anything beyond a routine minor citation. Mayor's court sessions move quickly and the practical decisions — whether to seek transfer to Licking County Municipal Court, whether the ten-year OVI look-back applies, whether a plea will cost you points or a commercial license, whether a de novo appeal is worth filing — are made in a matter of minutes if you are unrepresented. Jwayyed Law LLC handles OVI, traffic, and misdemeanor defense in Johnstown Mayor's Court and in Licking County Municipal Court. Call (614) 285-5482 or schedule a consultation online.",
  },
];

export default function JohnstownMayorsCourtPage() {
  const courthouseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Courthouse',
    'name': "Johnstown Mayor's Court",
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '599 S. Main Street',
      'addressLocality': 'Johnstown',
      'addressRegion': 'OH',
      'postalCode': '43031',
      'addressCountry': 'US',
    },
    'telephone': '+17409675961',
    'email': 'mayorscourt@johnstownohio.org',
    'containedInPlace': {
      '@type': 'City',
      'name': 'Johnstown',
      'containedInPlace': {
        '@type': 'County',
        'name': 'Licking County',
        'containedInPlace': { '@type': 'State', 'name': 'Ohio' },
      },
    },
    'url': 'https://www.jjlawohio.com/courts/johnstown-mayors-court',
  };

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': "Jwayyed Law LLC — Johnstown Mayor's Court Defense",
    'serviceType': ['Criminal Defense', 'OVI/DUI Defense', 'Traffic Violation Defense'],
    'areaServed': {
      '@type': 'City',
      'name': 'Johnstown',
      'containedInPlace': {
        '@type': 'County',
        'name': 'Licking County',
        'containedInPlace': { '@type': 'State', 'name': 'Ohio' },
      },
    },
    'provider': {
      '@type': 'LegalService',
      '@id': 'https://www.jjlawohio.com',
      'name': 'Jwayyed Law LLC',
      'telephone': '(614) 285-5482',
      'url': 'https://www.jjlawohio.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '100 E. Campus View Blvd, Suite 250',
        'addressLocality': 'Columbus',
        'addressRegion': 'OH',
        'postalCode': '43235',
        'addressCountry': 'US',
      },
    },
    'url': 'https://www.jjlawohio.com/courts/johnstown-mayors-court',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courthouseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Johnstown Mayor's Court Attorney"
        description="OVI, traffic, and misdemeanor ordinance defense in Johnstown Mayor's Court, Licking County, Ohio. Court meets the 1st and 3rd Wednesday of each month at 599 S. Main Street."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Johnstown Mayor&apos;s Court — Licking County Traffic, OVI, and Ordinance Defense
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Johnstown Mayor&apos;s Court sits in the Council Chambers at 599 S. Main Street in Johnstown, Ohio, and hears cases on the <strong>1st and 3rd Wednesday of each month</strong>. It is a limited-jurisdiction court established under <strong>R.C. Chapter 1905</strong>, and defendants appear before a licensed attorney serving as the mayor&apos;s court magistrate. Nearly every citation written by the Johnstown Police Department inside the city limits — and many written by the Ohio State Highway Patrol on U.S. 62 and S.R. 37 where those routes run through town — starts here. Jwayyed Law LLC represents drivers and defendants in Johnstown Mayor&apos;s Court and in{' '}
              <Link href="/courts" className="text-[#b87333] underline hover:opacity-80">Ohio courts statewide</Link>. Call{' '}
              <a href="tel:+16142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Johnstown is no longer the quiet village it was a decade ago. The 2020 census put its population at 5,182 — enough to advance it to city status — and the arrival of Intel&apos;s <em>Ohio One</em> semiconductor campus in neighboring Jersey Township, together with the New Albany International Business Park build-out along S.R. 161, has put heavy commuter and construction traffic on U.S. 62, S.R. 37, and S.R. 310. Traffic enforcement has grown with it. What used to be a routine speeding ticket is now, for many people, a points problem, a CDL problem, or an insurance problem — and mayor&apos;s court moves fast enough that those consequences are locked in before most defendants realize a decision was made.
            </p>

            <div className="not-prose border border-gray-200 rounded-lg overflow-hidden mb-10">
              <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 px-5 py-4 bg-gray-50 border-b border-gray-200">
                Johnstown Mayor&apos;s Court — Court Information
              </h3>
              <dl className="divide-y divide-gray-200">
                {courtFacts.map(({ label, value }) => (
                  <div key={label} className="grid sm:grid-cols-3 gap-1 sm:gap-4 px-5 py-3">
                    <dt className="font-['Inter',_'Arial',_sans-serif] text-sm font-semibold text-gray-900">
                      {label}
                    </dt>
                    <dd className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-700 sm:col-span-2 leading-relaxed">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="font-['Inter',_'Arial',_sans-serif] text-xs text-gray-500 px-5 py-3 bg-gray-50 border-t border-gray-200">
                Court schedules and staffing change. Confirm your date with the Mayor&apos;s Court Clerk at (740) 967-5961 before relying on this listing.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              What Johnstown Mayor&apos;s Court Can — and Cannot — Decide
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>R.C. 1905.01</strong> authorizes a mayor&apos;s court in an Ohio municipality with a population over 200 that does not have its own municipal court. Its jurisdiction reaches violations of the municipality&apos;s ordinances, parking and standing violations, and moving traffic violations of state law committed on streets and state highways within the corporate limits. In practice, Johnstown Mayor&apos;s Court handles speeding and assured-clear-distance citations, traffic control device violations, driving under suspension and no-operator&apos;s-license charges, open container and other minor misdemeanor citations, local code violations, and qualifying first-offense OVI charges.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              What it cannot do matters just as much. A mayor&apos;s court is <em>not a court of record</em>. It cannot hear felony charges, it cannot empanel a jury, and it cannot retain a case that falls outside the statutory grant. Under <strong>R.C. 1905.032</strong>, the mayor must transfer a case that exceeds the court&apos;s jurisdiction and may transfer any case to municipal court, county court, or common pleas at any time before final disposition. Every transfer out of Johnstown lands in the same place: <strong>Licking County Municipal Court</strong>, 40 W. Main Street, 3rd Floor, Newark, OH 43055.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI in Johnstown Mayor&apos;s Court and the Ten-Year Look-Back
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An OVI charge can be heard in Johnstown Mayor&apos;s Court, but only in a clean first-offense posture. <strong>R.C. 1905.01</strong> permits the mayor&apos;s court to hear a charge under <strong>R.C. 4511.19</strong> only where the defendant has not, within ten years of the date of the offense charged, been convicted of or pleaded guilty to a prior OVI, an equivalent municipal ordinance, a substantially similar out-of-state or federal offense, or a reduced charge that arose out of a dismissed OVI. If a qualifying prior falls inside that window, the statute requires the case to be transferred immediately. Checking that look-back correctly is the first move in any Johnstown OVI case, because it determines the venue, the prosecutor, and the realistic sentencing range.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The penalties do not soften because the case stays local. Under <strong>House Bill 37</strong>, effective April 9, 2025, a first OVI conviction carries a mandatory minimum of 3 days in jail or a 3-day driver intervention program, fines of <strong>$565–$1,075</strong>, a class five license suspension of 1 to 3 years, and 6 points. A high-tier first offense — a breath test of .17 or higher, or a refusal with a prior refusal — carries 6 mandatory days. HB 37 did eliminate the former 15-day hard suspension for non-refusal first offenses where an ignition interlock device is installed, which means{' '}
              <Link href="/ovi-dui-defense/limited-driving-privileges" className="text-[#b87333] underline hover:opacity-80">limited driving privileges</Link>{' '}
              can be sought earlier than under prior law. See our{' '}
              <Link href="/ovi-dui-defense/first-ovi" className="text-[#b87333] underline hover:opacity-80">first OVI</Link> and{' '}
              <Link href="/ovi-dui-defense/high-tier-ovi" className="text-[#b87333] underline hover:opacity-80">high-tier OVI</Link> pages for the full breakdown.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              One deadline sits outside the mayor&apos;s court entirely. An <strong>Administrative License Suspension</strong> under <strong>R.C. 4511.191</strong> takes effect at arrest when a driver tests over the limit or refuses testing, and it runs on its own clock — the appeal is due within <strong>30 days</strong> and is filed with the court having jurisdiction over the underlying charge, which for a Johnstown arrest means Licking County Municipal Court in Newark. Because Johnstown Mayor&apos;s Court convenes only twice a month, simply waiting for your first court date can burn most of that window.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Traffic Enforcement on U.S. 62, S.R. 37, and the Silicon Heartland Corridor
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              U.S. 62 and S.R. 37 cross in the middle of downtown Johnstown, funneling traffic between Columbus, Newark, Mount Vernon, and the New Albany corridor through a village-scale grid with abrupt speed-limit transitions at the corporate limits. Add construction convoys and shift traffic bound for the Intel <em>Ohio One</em> site in Jersey Township and the surrounding business park, and the result is sustained enforcement on the routes most Johnstown defendants are cited on. Speed, assured clear distance, failure to yield, and following-too-close citations dominate the docket.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Points are the quiet consequence. Under <strong>R.C. 4510.036</strong>, accumulating 12 points within two years triggers a mandatory license suspension, and each conviction reports to the BMV and to your insurer. For CDL holders the exposure is worse — a conviction that a private motorist absorbs can end a commercial driving career. Our attorney works to keep the disposition off your record where possible: dismissal, amendment to a non-moving or zero-point violation, or a negotiated resolution that protects your license. See our{' '}
              <Link href="/criminal-defense/speeding-tickets" className="text-[#b87333] underline hover:opacity-80">speeding ticket</Link>,{' '}
              <Link href="/criminal-defense/driving-under-suspension" className="text-[#b87333] underline hover:opacity-80">driving under suspension</Link>, and{' '}
              <Link href="/ovi-dui-defense/commercial-dui-cdl" className="text-[#b87333] underline hover:opacity-80">CDL OVI</Link> pages.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Appealing a Johnstown Mayor&apos;s Court Decision — Ten Days, Tried From Scratch
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio gives mayor&apos;s court defendants an unusually strong second chance, and an unusually short deadline to claim it. Under <strong>R.C. 1905.22</strong>, an appeal from a mayor&apos;s court is taken to the municipal or county court with jurisdiction over the municipality — Licking County Municipal Court, for Johnstown. Under <strong>R.C. 1905.23</strong>, the notice of appeal must be filed with the mayor&apos;s court within <strong>ten days</strong> of judgment. And under <strong>R.C. 1905.25</strong>, that appeal proceeds as a <strong>trial de novo</strong>: the case is retried in Newark from the beginning, with no weight given to the mayor&apos;s court&apos;s finding.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              That combination is a real strategic tool. A defendant who appeared unrepresented, pleaded on the spot, and only afterward understood the license or employment consequences may still have a path — but only for ten days. If you were convicted or entered a plea at a recent Johnstown Mayor&apos;s Court session, contact our office immediately rather than waiting for the fine notice to arrive.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Your Record After Johnstown Mayor&apos;s Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A conviction entered in Johnstown Mayor&apos;s Court carries the same legal weight as one entered in any other Ohio court. It reports to the BMV, it appears on background checks, and an OVI conviction from a mayor&apos;s court counts as a prior for Ohio&apos;s ten-year look-back. Many eligible misdemeanor convictions can later be sealed or expunged under <strong>R.C. 2953.32</strong> once the applicable waiting period runs, though OVI convictions are statutorily excluded from sealing. We evaluate those long-term consequences before advising on any plea — see our{' '}
              <Link href="/criminal-defense/expungement-record-sealing" className="text-[#b87333] underline hover:opacity-80">expungement and record sealing</Link> page.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Jwayyed Law LLC defends OVI, traffic, and misdemeanor cases in Johnstown Mayor&apos;s Court and on appeal in Licking County Municipal Court. Call{' '}
              <a href="tel:+16142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>. For broader background, see our{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">OVI/DUI defense</Link> and{' '}
              <Link href="/criminal-defense" className="text-[#b87333] underline hover:opacity-80">criminal defense</Link> practice areas.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
