import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Franklin County Municipal Court OVI Defense | Jwayyed Law LLC',
  description: 'OVI/DUI defense at Franklin County Municipal Court (375 S. High St). ALS appeals, HB 37 penalties, all OVI charge types. Jwayyed Law LLC. (614) 285-5482.',
  keywords: ['Franklin County Municipal Court OVI lawyer', 'Franklin County OVI defense attorney', 'Columbus OVI Municipal Court', 'Franklin County DUI defense 375 S High St', 'Franklin County Municipal Court ALS appeal'],
  openGraph: {
    title: 'Franklin County Municipal Court OVI Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'OVI Defense — Franklin County Municipal Court', href: '/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court' },
];

const faqs = [
  {
    question: 'What are the OVI penalties at Franklin County Municipal Court under HB 37?',
    answer: 'Under R.C. 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction at Franklin County Municipal Court carries: 3–180 days in jail (mandatory minimum 3 days, or driver intervention program); fines of $565–$1,075; and a 1–3 year license suspension. High-tier first OVI (BAC 0.17%+): 6-day mandatory minimum (3 days jail + 3 days DIP or 6 days straight). Second OVI within 10 years: 10-day mandatory minimum, fines of $715–$1,625. Third OVI within 10 years: 30-day mandatory minimum. All mandatory minimums apply regardless of circumstances.',
  },
  {
    question: 'How do I appeal an ALS at Franklin County Municipal Court?',
    answer: 'Under R.C. 4511.191, you have 30 days from the date of arrest to file an Administrative License Suspension appeal at Franklin County Municipal Court, 375 S. High St., Columbus, OH 43215. The ALS takes effect immediately upon arrest. Our firm files ALS appeals the same day we are retained, seeks an immediate stay of suspension, and challenges the suspension on procedural and substantive grounds — including whether the officer had reasonable grounds for the arrest and whether proper advisory was given. Acting within the 30-day deadline is critical.',
  },
  {
    question: 'Can the 15-day hard suspension be waived at Franklin County Municipal Court?',
    answer: 'Yes. HB 37 (effective April 9, 2025) authorizes Franklin County Municipal Court to waive the standard 15-day hard suspension waiting period for first-time OVI defendants who agree to install a certified ignition interlock device. Under this provision, first offenders can potentially obtain limited driving privileges for work, school, or medical appointments almost immediately, subject to court discretion and interlock compliance. Our firm advises clients on ignition interlock eligibility and the waiver procedure at FCMC.',
  },
  {
    question: 'What OVI defenses does Jwayyed Law LLC use at Franklin County Municipal Court?',
    answer: 'Our firm challenges every element of OVI cases at Franklin County Municipal Court: the constitutional validity of the traffic stop (reasonable suspicion); the field sobriety test administration against NHTSA standards (HGN, Walk-and-Turn, One-Leg-Stand); breathalyzer calibration records for the Intoxilyzer 8000 used by Columbus Division of Police and other Franklin County agencies; blood test chain of custody and laboratory methodology; rising BAC arguments for near-threshold results; and the distinction between per se limits and actual impairment in marijuana OVI cases.',
  },
  {
    question: 'Which law enforcement agencies make OVI arrests that end up at Franklin County Municipal Court?',
    answer: 'Franklin County Municipal Court OVI cases come from multiple enforcement agencies: Columbus Division of Police (the largest source), Ohio State Highway Patrol (active on I-270, I-71, I-670, and SR 315), Franklin County Sheriff\'s Office (county roads and unincorporated areas), and suburb police departments — Westerville, Dublin, Hilliard, Reynoldsburg, Grove City, and others — whose OVI cases transfer from mayor\'s courts or are filed directly at FCMC. Each agency uses specific procedures and equipment; our firm understands the practices of each major arresting agency in Franklin County.',
  },
  {
    question: 'What happens at an OVI arraignment at Franklin County Municipal Court?',
    answer: 'At an OVI arraignment at Franklin County Municipal Court, the defendant enters a plea (typically not guilty), and the court addresses bond conditions and any driving restrictions. For OVI defendants, the court will also address the ALS — if an ALS appeal has been filed, the court may schedule a hearing. Our firm appears at OVI arraignments on behalf of our clients, files the ALS appeal before arraignment where possible, and seeks the best available bond conditions and driving privilege arrangements from the outset.',
  },
  {
    question: 'Does the OVI charge stay at Franklin County Municipal Court or does it transfer?',
    answer: 'Most OVI charges — first through third offense, without accident injuries — remain at Franklin County Municipal Court throughout the proceedings. OVI arrests that produce felony charges (fourth offense within 10 years, prior felony OVI, or OVI resulting in serious physical harm under R.C. 2903.08) are bound over to Franklin County Court of Common Pleas. OVI arrests from Franklin County suburb mayor\'s courts transfer to Franklin County Municipal Court for trial. Our firm handles OVI cases at both FCMC and Common Pleas depending on the charge level.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for an OVI at Franklin County Municipal Court?',
    answer: 'Franklin County Municipal Court handles more OVI cases than any other court in Ohio. The 30-day ALS appeal deadline runs from the moment of arrest — and missing it forfeits the right to challenge the administrative suspension entirely. Jwayyed Law LLC files ALS appeals immediately, appears at Franklin County Municipal Court regularly, and builds OVI defenses tailored to the specific evidence and arresting agency in each case. Call (614) 285-5482.',
  },
];

export default function FCMCOVIDefensePage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — OVI/DUI Defense in Franklin County", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court"};

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
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
        title="Franklin County Municipal Court OVI Defense Attorney"
        description="OVI charge at Franklin County Municipal Court (375 S. High St.)? 30-day ALS deadline, HB 37 penalties, all OVI types. Jwayyed Law LLC. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              OVI / DUI Defense at Franklin County Municipal Court
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court at 375 S. High Street, Columbus processes more OVI cases than any other court in Ohio. Every OVI arrest in Columbus — and the vast majority of OVI arrests anywhere in Franklin County — results in charges handled at this courthouse. Ohio&apos;s OVI statute, R.C. 4511.19 as amended by HB 37 (effective April 9, 2025), imposes mandatory minimum jail sentences, mandatory driver intervention programs, license suspensions up to three years, and — for high-tier BAC (0.17%+) or refusal cases — enhanced mandatory minimums that cannot be reduced by the court regardless of circumstances. The 30-day ALS appeal deadline runs from the moment of arrest, not from the first court date. Missing that deadline forfeits the only opportunity to challenge the administrative license suspension. Jwayyed Law LLC defends OVI charges at Franklin County Municipal Court and files ALS appeals immediately upon being retained. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              — every day that passes narrows your options.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI at Franklin County Municipal Court — What the Charge Involves
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An OVI arrest in Franklin County immediately produces two parallel proceedings: the criminal OVI case at Franklin County Municipal Court, and the Administrative License Suspension (ALS) imposed by the Ohio BMV upon arrest. These are separate — the ALS is an administrative action that takes effect immediately upon arrest, and its 30-day appeal deadline is independent of the criminal case schedule. Many defendants focus on the criminal case and miss the ALS appeal deadline, surrendering their driving privileges for 90 days to a year before the criminal case is even resolved. Our firm files the ALS appeal and requests a stay of suspension on the same day we are retained.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The criminal OVI case at Franklin County Municipal Court proceeds through arraignment, pretrial hearings, discovery, and either a negotiated resolution or trial. Ohio&apos;s mandatory minimum sentencing structure means that a conviction on any OVI charge carries an irreducible minimum jail term or driver intervention program — the court has no discretion to impose less. This makes contesting the charge — through evidence challenges, suppression motions, and plea negotiations toward non-OVI alternatives — the only path to avoiding those mandatory minimums.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI Charge Types at Franklin County Municipal Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court handles OVI charges in all their forms. Our firm defends every category of OVI case filed at FCMC:
            </p>
            <ul className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed space-y-2 list-disc pl-6">
              <li><Link href="/locations/franklin-county/first-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">First OVI</Link> — 3-day mandatory minimum, driver intervention program option, ALS 90 days–3 years</li>
              <li><Link href="/locations/franklin-county/second-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Second OVI</Link> — 10-day mandatory minimum, vehicle immobilization, 1–7 year suspension</li>
              <li><Link href="/locations/franklin-county/third-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Third OVI</Link> — 30-day mandatory minimum, vehicle forfeiture, 2–12 year suspension</li>
              <li><Link href="/locations/franklin-county/high-tier-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">High-Tier OVI (BAC 0.17%+)</Link> — 6-day mandatory minimum, calibration and margin-of-error challenges</li>
              <li><Link href="/locations/franklin-county/refusal-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">OVI Refusal</Link> — 1-year ALS, enhanced mandatory minimums, no BAC evidence defense</li>
              <li><Link href="/locations/franklin-county/underage-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Underage OVI</Link> — 0.02% zero-tolerance threshold, OVUAC charge, OSU student consequences</li>
              <li><Link href="/locations/franklin-county/cdl-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">CDL OVI</Link> — 0.04% threshold, federal 1-year/lifetime disqualification, career consequences</li>
              <li><Link href="/locations/franklin-county/marijuana-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Marijuana OVI</Link> — per se THC limits, DRE evaluation challenges, post-legalization implications</li>
              <li><Link href="/locations/franklin-county/ovi-with-accident-columbus" className="text-[#b87333] underline hover:opacity-80">OVI With Accident</Link> — vehicular assault F4/F3, civil exposure, accident reconstruction</li>
              <li><Link href="/locations/franklin-county/felony-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Felony OVI</Link> — fourth offense, bound over to Franklin County Common Pleas, mandatory prison</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI Defense Strategy at Franklin County Municipal Court
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI defense at Franklin County Municipal Court begins before the first hearing. Our firm immediately requests all discoverable materials — the police report, body-cam and dash-cam footage, the field sobriety test documentation, the breathalyzer or blood test records, and the calibration and maintenance records for the specific Intoxilyzer 8000 instrument used. Columbus Division of Police and the Ohio State Highway Patrol are the most common arresting agencies at Franklin County Municipal Court; our firm is familiar with the specific procedures and equipment each agency uses.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Field sobriety test challenges are evaluated against NHTSA administration standards. HGN nystagmus onset, step deviations on the Walk-and-Turn, and raised-foot height on the One-Leg-Stand are documented in every DUI arrest — and any deviation from the certified protocol can undermine the test&apos;s validity in court. Breathalyzer accuracy is examined through the Intoxilyzer 8000&apos;s calibration records and Ohio Department of Health certification standards. For near-threshold results (close to 0.08% or 0.17%), the instrument&apos;s certified margin of error may bring the reading within the threshold even when the reported number is above it.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation</Link>.
              The ALS appeal deadline is 30 days from arrest — call immediately.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
