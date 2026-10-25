import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import { Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Case Results',
  description:
    'Anonymized outcomes from Jwayyed Law LLC in OVI/DUI, criminal defense and personal injury cases in Ohio. Past results do not guarantee a future outcome.',
  keywords: ['law firm case results', 'attorney success rate', 'Ohio law firm results'],
  openGraph: {
    title: 'Case Results | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/our-law-firm/case-results',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/our-law-firm/case-results' },
};

const breadcrumbItems = [
  { label: 'Our Law Firm', href: '/our-law-firm' },
  { label: 'Case Results', href: '/our-law-firm/case-results' },
];

/** Each case: what the client faced, what was done, and the result. */
const caseExamples = [
  {
    area: 'OVI/DUI Defense',
    charge: 'First-time OVI',
    outcome: 'Reduced to reckless operation',
    story:
      'Client was stopped for a lane violation and arrested for OVI with BAC 0.12%. The firm challenged the legality of the traffic stop and identified issues with the breath test administration.',
    result:
      'Charges reduced to reckless operation. Client avoided an OVI conviction, kept a license with limited privileges, and avoided the mandatory DIP program.',
    href: '/ovi-dui-defense/first-ovi',
  },
  {
    area: 'OVI/DUI Defense',
    charge: 'License suspension after refusal',
    outcome: 'ALS appeal won',
    story:
      'Client refused the chemical test after arrest. The firm filed a timely ALS appeal, and at the hearing cross-examination revealed procedural gaps in the arrest documentation.',
    result: 'ALS reversed. Client kept driving privileges while the criminal case proceeded.',
    href: '/ovi-dui-defense',
  },
  {
    area: 'Criminal Defense',
    charge: 'Assault',
    outcome: 'Dismissed',
    story:
      'Client was charged with assault after a physical altercation. The firm gathered witness statements and surveillance footage showing the other party was the aggressor.',
    result: 'Charges dismissed after the self-defense evidence was presented to the prosecutor.',
    href: '/criminal-defense/assault-charges',
  },
  {
    area: 'Personal Injury',
    charge: 'Rear-end collision, low first offer',
    outcome: 'Full settlement',
    story:
      "Client suffered neck and back injuries in a rear-end collision. The at-fault driver's insurer first offered a low settlement. The firm documented medical treatment, lost wages and ongoing limitations.",
    result: 'Settlement covering medical bills, lost wages, and pain and suffering.',
    href: '/personal-injury/car-accidents',
  },
  {
    area: 'Personal Injury',
    charge: 'Slip and fall at a retail store',
    outcome: 'Settled',
    story:
      'Client fell on a wet floor in a store with no warning signs. The firm established that the store had notice of the condition and failed to warn.',
    result: 'Settlement for medical expenses and pain and suffering.',
    href: '/personal-injury/slip-and-fall',
  },
];

export default function CaseResultsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Case results"
        description="Outcomes for clients in Columbus and across Ohio in OVI/DUI, criminal defense and personal injury cases. Past results do not guarantee a future outcome."
      />

      <section className="bg-white text-navy-950 py-16 sm:py-24" aria-labelledby="results-heading">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="results-heading" className="jw-display lg:col-span-6 text-[clamp(1.875rem,1.3rem+2vw,3rem)] leading-[1.08]">
              Representative outcomes
            </h2>
            <p className="lg:col-span-6 text-navy-950/75">
              Every case turns on its own facts. These are anonymized examples from{' '}
              <Link href="/criminal-defense" className="text-sky-deep underline underline-offset-4">criminal defense</Link>,{' '}
              <Link href="/ovi-dui-defense" className="text-sky-deep underline underline-offset-4">OVI/DUI defense</Link> and{' '}
              <Link href="/personal-injury" className="text-sky-deep underline underline-offset-4">personal injury</Link> matters.
            </p>
          </div>

          <ol className="mt-14 grid gap-4">
            {caseExamples.map((c) => (
              <li key={c.charge} className="bg-ice px-6 sm:px-10 py-8 sm:py-10 grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="text-[length:var(--step-small)] font-semibold text-sky-deep">{c.area}</p>
                  <p className="mt-3 jw-display text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] leading-tight">
                    <span className="text-navy-950/45">{c.charge}</span>
                    <span className="sr-only">: </span>
                    <span className="block text-sky-deep">{c.outcome}</span>
                  </p>
                </div>
                <div className="lg:col-span-7 grid gap-4 content-start">
                  <p className="text-navy-950/80 leading-relaxed">{c.story}</p>
                  <p className="leading-relaxed">
                    <strong className="font-semibold">Result: </strong>
                    {c.result}
                  </p>
                  <Link href={c.href} className="group inline-flex items-center gap-2 font-semibold text-sky-deep hover:text-navy-950 transition-colors">
                    More on {c.area.toLowerCase()}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section title="Your case" tone="ice">
        <p>
          If you are facing charges or need representation, <Link href="/contact">contact the firm</Link> to schedule a consultation
          and talk through your options.
        </p>
      </Section>
      <ContactCTA />
    </>
  );
}
