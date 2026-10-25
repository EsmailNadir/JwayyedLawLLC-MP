import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Pickaway County',
  description:
    'Injury claims from US 23 crashes and other accidents in Circleville, Ashville and Pickaway County, filed at Common Pleas. Call (614) 285-5482.',
  keywords: ['personal injury Pickaway County', 'injury lawyer Circleville Ohio', 'Pickaway County accident attorney', 'car accident US 23 Ohio', 'personal injury Ashville Ohio'],
  openGraph: {
    title: 'Personal Injury Lawyer in Pickaway County | Jwayyed Law LLC',
    description: 'Personal injury claims in Circleville, Ashville and along US 23, and the two-year Ohio deadline.',
    url: 'https://www.jjlawohio.com/locations/pickaway-county/personal-injury-pickaway-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/pickaway-county/personal-injury-pickaway-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Pickaway County', href: '/courts/pickaway-county' },
  { label: 'Personal Injury - Pickaway County', href: '/locations/pickaway-county/personal-injury-pickaway-county' },
];

const faqs = [
  {
    question: "What is Ohio's statute of limitations for personal injury claims?",
    answer:
      'Ohio Revised Code 2305.10 sets a two-year statute of limitations for most personal injury claims, running from the date the cause of action accrues, which is usually the injury date. If you were hurt in Pickaway County and do not file within two years, the case is time-barred. Medical malpractice has a one-year limitation with a four-year repose period. Talk to an attorney promptly.',
  },
  {
    question: 'US 23 through Pickaway County has a high accident rate. How does that affect my case?',
    answer:
      'US 23 runs directly through Pickaway County, connecting Columbus to Circleville and communities further south. High speeds, heavy traffic and frequent turning movements create real crash risk. A US 23 case may involve commercial vehicles, distracted drivers or road design defects. The firm investigates these crashes to establish liability and the full damages picture under Ohio law, including ORC 2315.33 on comparative fault.',
  },
  {
    question: 'What damages can I recover after a Pickaway County personal injury?',
    answer:
      "Economic damages (past and future medical expenses, lost wages, loss of earning capacity and property damage) and non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life and a spouse's loss of consortium). Punitive damages may be awarded in egregious cases involving intentional or malicious harm. The damages assessment should cover the long-term effect of the injury as well as current costs.",
  },
  {
    question: "How does Ohio's modified comparative negligence rule work?",
    answer:
      'Under ORC 2315.33, if you are 50% or more at fault for the accident, you recover nothing. If you are less than 50% at fault, your recovery is reduced by your share. For example, at 25% fault on $80,000 in damages, you recover $60,000. Insurers routinely argue that the injured person carries more fault than the evidence supports, and the firm contests those arguments.',
  },
  {
    question: 'What should I do after an accident in Circleville or on US 23?',
    answer:
      'After any accident in Pickaway County: (1) get emergency medical care, even if injuries seem minor; (2) photograph the scene, vehicles, road conditions and your injuries from several angles; (3) write down the names and contact information of all witnesses; (4) file a police report; (5) do not make statements about fault at the scene or to an insurance adjuster before speaking with an attorney; and (6) call Jwayyed Law LLC at (614) 285-5482 as soon as possible.',
  },
  {
    question: 'Does uninsured/underinsured motorist coverage apply in Pickaway County accidents?',
    answer:
      'Yes. Ohio law, including ORC 3345.21, lets you claim against your own auto insurance under UM/UIM coverage when the at-fault driver has no insurance or not enough. This matters in rural Ohio, where uninsured motorist rates can be higher. If you carry UM/UIM and an uninsured driver hit you on US 23 or elsewhere in the county, the firm can pursue your own insurer for fair compensation.',
  },
  {
    question: 'Do I need to pay attorney fees to start a personal injury case?',
    answer:
      'No. Jwayyed Law LLC handles personal injury cases on a contingency fee basis. The fee is a percentage of the recovery, deducted when the case ends by settlement or verdict.',
  },
  {
    question: 'Where are personal injury lawsuits filed in Pickaway County?',
    answer:
      'At the Pickaway County Common Pleas Court, 207 S. Court St, Circleville, OH 43113. Smaller claims may go to Circleville Municipal Court or Pickaway County Court depending on the amount in controversy. The firm files in the correct venue so every procedural protection is kept.',
  },
];

export default function PersonalInjuryPickawayCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Personal Injury in Pickaway County',
    serviceType: 'Personal Injury',
    areaServed: { '@type': 'County', name: 'Pickaway County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/pickaway-county/personal-injury-pickaway-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal injury claims in Pickaway County"
        description="Injury lawsuits from Circleville, Ashville and the US 23 corridor are filed at the Pickaway County Common Pleas Court. Most Ohio injury claims must be filed within two years."
      />

      <Section
        title="Injuries in Pickaway County"
        intro={
          <p>
            Pickaway County sits directly south of Columbus on US 23, which carries heavy commuter and commercial traffic between the
            capital and Circleville, Ashville, Commercial Point, South Bloomfield and Williamsport.
          </p>
        }
      >
        <p>
          The county mixes rural land with fast suburban growth, and US 23 is where much of the crash risk sits. In US 23 claims,
          insurers often argue the injured driver contributed to the crash through speed or following distance. The firm answers that
          with accident reconstruction, vehicle data and road condition records.
        </p>
        <FactTable
          title="Where a Pickaway County injury case is filed"
          rows={[
            { label: 'Most lawsuits', value: 'Pickaway County Common Pleas Court, 207 S. Court St, Circleville, OH 43113' },
            { label: 'Smaller claims', value: 'Circleville Municipal Court or Pickaway County Court, depending on the amount in controversy' },
            { label: 'Communities served', value: 'Circleville, Ashville, Commercial Point, South Bloomfield and Williamsport' },
          ]}
        />
      </Section>

      <Section title="Ohio deadlines and fault rules" tone="ice">
        <FactTable
          title="The rules that decide an Ohio injury claim"
          rows={[
            {
              label: 'Filing deadline',
              value: 'Two years for most claims (ORC 2305.10). It does not pause while you are still in treatment or negotiating with an insurer.',
            },
            { label: 'Medical malpractice', value: 'One-year limitation, with a four-year repose period.' },
            {
              label: 'Comparative fault',
              value: 'Modified comparative negligence (ORC 2315.33). At 50% or more at fault you recover nothing; under 50%, damages are reduced by your share.',
            },
            { label: 'UM/UIM coverage', value: 'Your own policy may pay when the at-fault driver has no insurance or too little.' },
            { label: 'Fees', value: 'Personal injury cases are handled on a contingency fee basis.' },
          ]}
        />
        <p>
          From the first day the firm preserves scene evidence, gathers police reports, identifies witnesses and documents your
          damages before evidence fades.
        </p>
      </Section>

      <Section title="Claims the firm handles">
        <PointGrid
          points={[
            { title: 'Highway crashes', body: 'US 23 collisions, including those involving commercial vehicles.' },
            { title: 'Slip and fall', body: 'Falls at retail establishments in Circleville.' },
            { title: 'Premises liability', body: 'Injuries on the county’s agricultural and commercial properties.' },
            { title: 'Dog bites', body: 'Strict liability claims under ORC 955.28.' },
            { title: 'Workplace accidents', body: 'Where a third party’s negligence caused the injury.' },
            { title: 'Wrongful death', body: 'For families when a negligently caused injury proves fatal.' },
          ]}
        />
        <p>
          Use <Link href="/contact">the contact page</Link> or call (614) 285-5482. More on the firm&rsquo;s{' '}
          <Link href="/personal-injury">personal injury practice</Link> across Ohio.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid
          links={[
            { href: '/locations/pickaway-county', title: 'Pickaway County', subtitle: 'Every service the firm offers in the county' },
            { href: '/personal-injury/car-accidents', title: 'Car accident claims', subtitle: 'Ohio crash claims and insurance' },
            { href: '/personal-injury/truck-accidents', title: 'Truck accident claims', subtitle: 'Crashes with commercial vehicles' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
