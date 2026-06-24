import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Columbus OVI Defense Attorney | Jwayyed Law LLC',
  description: 'OVI and DUI defense in Columbus, Ohio. Franklin County Municipal Court. ALS appeals (30-day deadline), first & second offense OVI, HB 37. Call (614) 285-5482.',
  keywords: [
    'Columbus OVI lawyer',
    'Columbus DUI attorney',
    'Columbus OVI defense',
    'Franklin County Municipal Court OVI',
    'Columbus DUI defense attorney',
    'OVI lawyer Columbus Ohio',
    'Columbus Ohio drunk driving lawyer',
  ],
  openGraph: {
    title: 'Columbus OVI Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'OVI Defense — Columbus', href: '/locations/franklin-county/ovi-dui-defense-columbus' },
];

const faqs = [
  {
    question: 'Where are Columbus OVI cases heard?',
    answer: 'OVI arrests in Columbus, Ohio are processed at Franklin County Municipal Court, located at 375 S. High Street, Columbus, OH 43215 (floors 12–15), reachable at (614) 645-8186. Franklin County Municipal Court is the busiest municipal court in Ohio, handling tens of thousands of OVI, criminal, traffic, and civil cases each year. All Columbus OVI arraignments, ALS appeals, pretrial hearings, and trials occur there. The 30-day ALS appeal deadline runs from the date of arrest — it cannot be extended.',
  },
  {
    question: 'What are the OVI penalties in Columbus under HB 37?',
    answer: 'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Columbus carries a mandatory minimum of 3 days in jail or 3 days in a certified Driver Intervention Program, fines of $565–$1,075, and a license suspension of 1–3 years. High-tier OVI (BAC 0.17% or above) carries 6 mandatory days minimum. A second OVI within 10 years carries a minimum of 10 consecutive days, fines of $715–$1,625, and suspension of 1–7 years. The reinstatement fee is $315.',
  },
  {
    question: 'How do I appeal my ALS after an OVI arrest in Columbus?',
    answer: 'Under ORC 4511.191, you have 30 days from the date of arrest to file an Administrative License Suspension appeal at Franklin County Municipal Court (375 S. High Street). The ALS is separate from the criminal OVI case and takes effect the moment of arrest. Missing the 30-day deadline permanently forfeits your right to contest the suspension. Our firm files ALS appeals immediately after being retained and requests a stay of suspension so you can continue driving during the appeal.',
  },
  {
    question: 'What OVI defenses apply in Columbus?',
    answer: 'Columbus OVI defenses include: challenging whether the Columbus Division of Police, Ohio State Highway Patrol, or other arresting agency had reasonable suspicion for the traffic stop; reviewing body-cam and dash-cam footage of field sobriety test administration; challenging whether NHTSA-standardized procedures were followed for HGN, walk-and-turn, and one-leg stand tests; obtaining breathalyzer maintenance and calibration records; analyzing blood-draw chain-of-custody documentation; and asserting the rising BAC defense where the BAC result is near the threshold.',
  },
  {
    question: 'Can I get limited driving privileges after a Columbus OVI?',
    answer: 'Yes. Franklin County Municipal Court can grant limited driving privileges for work, school, medical appointments, and other essential purposes after an OVI suspension. Under HB 37, first-time defendants who agree to install a certified ignition interlock device may waive the standard 15-day hard suspension waiting period, allowing near-immediate limited privileges. The reinstatement fee after an OVI suspension is $315. Our firm petitions quickly and meets all court requirements.',
  },
  {
    question: 'Will an OVI in Columbus affect my professional license?',
    answer: 'Yes. OVI convictions are reportable to Ohio professional licensing boards and can trigger investigations by the State Medical Board, Ohio Board of Nursing, Ohio Bar Association, Ohio Real Estate Commission, and the BMV for CDL holders. Columbus is Ohio\'s largest city with a large concentration of licensed professionals. Our firm evaluates professional licensing consequences alongside the criminal case and works to achieve outcomes — such as reduction to reckless operation under ORC 4511.20 — that minimize long-term career impact.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus OVI?',
    answer: 'Jwayyed Law LLC provides experienced OVI defense throughout Columbus and Franklin County. We appear regularly at Franklin County Municipal Court, understand its judges, dockets, and the prosecutors who handle OVI cases, and act immediately to file ALS appeals within the 30-day deadline. Early intervention is critical — the ALS appeal deadline cannot be extended. Call (614) 285-5482 as soon as possible after your Columbus OVI arrest.',
  },
];

export default function ColumbusOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — OVI/DUI Defense in Columbus", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-columbus"};

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
        title="Columbus OVI / DUI Defense Attorney"
        description="OVI and DUI defense in Columbus, Ohio. Jwayyed Law LLC represents clients at Franklin County Municipal Court. ALS appeals (30-day deadline). Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              OVI / DUI Defense in Columbus, Ohio
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus is Ohio&apos;s largest city and one of the fastest-growing cities in the Midwest, with a dense urban core, an active nightlife along High Street and Short North, and major highway corridors — I-70, I-71, I-270, and SR-315 — that see constant police enforcement activity. The Columbus Division of Police, the Ohio State Highway Patrol, and Franklin County Sheriff&apos;s deputies all make OVI arrests in Columbus and throughout Franklin County. An OVI arrest in Columbus means a case in{' '}
              <strong>Franklin County Municipal Court</strong> at 375 S. High Street — the busiest municipal court in Ohio. Jwayyed Law LLC provides experienced{' '}
              <Link href="/ovi-dui-defense" className="text-[#b87333] underline hover:opacity-80">OVI and DUI defense</Link>{' '}
              for Columbus residents and visitors charged in Franklin County Municipal Court. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              immediately — the ALS appeal deadline is 30 days from your arrest.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus&apos;s size and density mean that OVI enforcement is constant throughout the city. High Street, the Short North, German Village, the Arena District, and the neighborhoods surrounding Ohio State University generate a high volume of late-night traffic stops. Interstate checkpoints and saturation patrols on I-270 and I-71 increase OVI arrests on major corridors. Our firm handles Columbus OVI cases at every stage — from the emergency ALS appeal on the day after arrest through pretrial motions, hearings, and trial if necessary at Franklin County Municipal Court.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              OVI Penalties in Columbus Under HB 37
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s House Bill 37, effective April 9, 2025, restructured the mandatory minimum penalties for OVI under R.C. 4511.19. A first OVI conviction — low-tier (BAC 0.08%–0.169%) — carries a mandatory minimum of 3 days in jail or 3 days in a certified Driver Intervention Program, fines of $565–$1,075, and a license suspension of 1–3 years. High-tier OVI (BAC 0.17% or above) carries a mandatory minimum of 6 days (3 days jail plus 3-day DIP, or 6 days jail if DIP unavailable). The license reinstatement fee is $315. Under HB 37, first-time defendants who agree to install a certified ignition interlock device may have the standard 15-day hard suspension waiting period waived, allowing near-immediate limited driving privileges.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A second OVI within 10 years carries a minimum of 10 consecutive days in jail, fines of $715–$1,625, and a suspension of 1–7 years, plus 90-day vehicle immobilization and 90-day plate impound. A third OVI within 10 years carries a minimum of 30 consecutive days, fines of $1,040–$2,750, and a suspension of 2–12 years with criminal forfeiture of the vehicle. A fourth or subsequent OVI within 10 years is a fourth-degree felony, processed in Franklin County Court of Common Pleas rather than municipal court. These mandatory minimums cannot be reduced by a judge — avoiding them requires a successful defense or charge reduction.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Administrative License Suspension — The 30-Day Emergency
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When a Columbus driver is arrested for OVI, the arresting officer immediately issues a notice of Administrative License Suspension under ORC 4511.191. The ALS takes effect on the spot — your license is seized and suspended, and a 15-day hard suspension period begins during which no driving is permitted. You have <strong>exactly 30 days from the date of arrest</strong> to file an ALS appeal in Franklin County Municipal Court. Missing this deadline is permanent — no extension exists, and the right to challenge the suspension is lost entirely.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm treats every Columbus ALS appeal as an emergency. We file immediately after being retained, request a stay of the suspension so you can continue driving during the appeal, and challenge the suspension on procedural and substantive grounds. Procedural challenges include whether the officer properly advised you of the consequences of refusal or submission under ORC 4511.191(B)(2), whether the testing device was properly maintained and certified, and whether all documentation was timely filed. A successful ALS appeal can restore your driving privileges entirely — and even a partial victory reduces the suspension period.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Franklin County Municipal Court — Columbus OVI Proceedings
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court at 375 S. High Street, Columbus, OH 43215 (floors 12–15) is the venue for all Columbus OVI matters — arraignments, ALS appeals, pretrial hearings, motions, and trials. With 14 general division judges and one environmental division judge, the court runs a high-volume docket. Understanding the court&apos;s procedural expectations and the practices of its prosecutors is an important advantage. Our firm appears regularly at Franklin County Municipal Court and understands how OVI cases move through this specific court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court also operates three specialized dockets that may be relevant to some OVI defendants. HART Court is a recovery-focused docket for defendants with opioid use disorder. MAVS Court is a mental health docket for defendants with serious mental illness. CATCH Court is for adult female victims of human trafficking and sexual exploitation. Eligibility for these dockets may provide an alternative to traditional prosecution in appropriate cases.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Columbus OVI Defense Strategies
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Every Columbus OVI defense begins with the traffic stop. The Fourth Amendment requires reasonable articulable suspicion to justify a stop — vague observations like &ldquo;driving too carefully,&rdquo; minor lane position variation within the lane, or brief use of a turn signal do not always satisfy that standard. We obtain all body-cam and dash-cam footage and evaluate the stop&apos;s constitutional validity before any other analysis. An invalid stop suppresses all evidence gathered after it.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If the stop was valid, we scrutinize the field sobriety tests. The National Highway Traffic Safety Administration publishes detailed standards for administering the Horizontal Gaze Nystagmus, walk-and-turn, and one-leg stand tests. Officers who deviate from those standards — whether in the instructions given, the terrain chosen, or the scoring — administer unreliable tests. We compare the recorded test administration frame-by-frame against NHTSA standards. For breath tests, we subpoena maintenance and calibration records to establish whether the instrument was properly certified and functioning. For blood tests, we obtain chain-of-custody documentation and laboratory records. Where the BAC is near the threshold — 0.08% or 0.17% — a rising BAC defense may apply, arguing that BAC was below the threshold at the time of driving and rose by the time of testing.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Specific Columbus OVI Defense Pages
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><Link href="/locations/franklin-county/first-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Columbus First OVI Defense</Link> — First offense penalties, DIP alternatives, ALS appeal, ignition interlock</li>
              <li><Link href="/locations/franklin-county/second-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Columbus Second OVI Defense</Link> — 10-day mandatory minimum, house arrest alternative, vehicle immobilization</li>
              <li><Link href="/locations/franklin-county/third-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Columbus Third OVI Defense</Link> — 30-day mandatory minimum, vehicle forfeiture, 2–12 year suspension</li>
              <li><Link href="/locations/franklin-county/felony-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Columbus Felony OVI Defense</Link> — 4th+ offense F4 felony, Common Pleas, mandatory prison</li>
              <li><Link href="/locations/franklin-county/high-tier-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Columbus High-Tier OVI (BAC 0.17%+)</Link> — Enhanced mandatory minimums, aggravated penalties</li>
              <li><Link href="/locations/franklin-county/underage-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Columbus Underage OVI</Link> — Zero-tolerance under R.C. 4511.19(B), 0.02% threshold</li>
              <li><Link href="/locations/franklin-county/cdl-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Columbus CDL / Commercial Driver OVI</Link> — Federal disqualification, 0.04% threshold, career consequences</li>
              <li><Link href="/locations/franklin-county/ovi-with-accident-columbus" className="text-[#b87333] underline hover:opacity-80">Columbus OVI With Accident</Link> — Aggravated vehicular assault, civil exposure, enhanced charges</li>
              <li><Link href="/locations/franklin-county/refusal-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Columbus Refusal OVI</Link> — Implied consent, 1-year refusal ALS, enhanced mandatory minimums</li>
              <li><Link href="/locations/franklin-county/marijuana-ovi-columbus" className="text-[#b87333] underline hover:opacity-80">Columbus Marijuana OVI</Link> — THC per se limits, impairment evidence, adult-use law context</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Can Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>ALS appeal (30-day deadline):</strong> Emergency filing, stay of suspension, procedural and substantive challenges under ORC 4511.191</li>
              <li><strong>Stop validity:</strong> Fourth Amendment analysis of the traffic stop basis</li>
              <li><strong>Field sobriety test defense:</strong> Comparing recorded administration against NHTSA standards</li>
              <li><strong>Breathalyzer and blood test challenges:</strong> Calibration records, chain of custody, lab procedures</li>
              <li><strong>Rising BAC defense:</strong> Where BAC is near the threshold and timing of absorption supports the argument</li>
              <li><strong>Limited driving privileges:</strong> Petition for work/school/medical driving during suspension</li>
              <li><strong>Reckless operation reduction:</strong> R.C. 4511.20 plea to preserve expungement eligibility</li>
              <li><strong>Professional licensing impact:</strong> Evaluating career consequences and minimizing licensing board exposure</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have been arrested for OVI in Columbus or anywhere in Franklin County, contact Jwayyed Law LLC immediately at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>.
              The 30-day ALS appeal deadline runs from the moment of arrest — it cannot be extended, and waiting even a few days reduces your options. Early attorney involvement is the most important step you can take.
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
