import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Morrow County',
  description:
    'Injury claims from US 42, SR 95 and rural roads in Mt. Gilead, Cardington, Marengo and Morrow County: car accidents, farm equipment and falls.',
  keywords: ['personal injury Morrow County', 'injury lawyer Mt. Gilead Ohio', 'Morrow County accident attorney', 'car accident lawyer Cardington Ohio', 'slip and fall Morrow County'],
  openGraph: {
    title: 'Personal Injury Lawyer in Morrow County | Jwayyed Law LLC',
    description: 'Personal injury claims in Mt. Gilead, Cardington, Marengo and Edison, and the two-year Ohio deadline.',
    url: 'https://www.jjlawohio.com/locations/morrow-county/personal-injury-morrow-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/morrow-county/personal-injury-morrow-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Morrow County', href: '/courts/morrow-county' },
  { label: 'Personal Injury - Morrow County', href: '/locations/morrow-county/personal-injury-morrow-county' },
];

const faqs = [
  {
    question: "What is Ohio's statute of limitations for personal injury claims?",
    answer:
      'Under Ohio Revised Code 2305.10, most personal injury claims must be filed within two years from the date the cause of action accrues, usually the date of injury. If you were hurt in Morrow County and do not file in time, you lose the right to recover. Medical malpractice has a shorter one-year statute with a four-year repose period. Talk to an attorney soon after any injury.',
  },
  {
    question: "How does Ohio's comparative negligence rule affect my recovery?",
    answer:
      'Ohio Revised Code 2315.33 sets modified comparative fault. If you are 50% or more at fault, you recover nothing. Under 50%, your damages are reduced by your share. Rural roads in Morrow County, including US 42 and SR 95, produce complicated crashes involving farm equipment, animals or poor road conditions, so fault has to be established carefully.',
  },
  {
    question: 'What damages can I recover after an injury in Morrow County?',
    answer:
      'Economic damages (past and future medical expenses, lost wages, loss of future earning capacity and property damage) and non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life and loss of consortium for a spouse). Punitive damages may be available for gross negligence, recklessness or malicious conduct.',
  },
  {
    question: 'Are agriculture-related personal injury claims handled differently in Ohio?',
    answer:
      'Agricultural injury claims in Morrow County can come from collisions with farm equipment on rural roads, accidents on private farmland, livestock on highways or defective agricultural products. Ohio premises liability and negligence law generally applies, but the injured person’s status on the property (invitee, licensee or trespasser) changes the duty of care owed. ORC 955.28 governs dog bite strict liability.',
  },
  {
    question: 'What should I do after an accident on rural roads in Morrow County?',
    answer:
      'After any accident in Morrow County: (1) call 911 and get medical attention, and note exactly where you are, since emergency response on farm roads and rural highways can be slow; (2) photograph the vehicles, the roadway, any signs and your injuries; (3) get contact information from witnesses; (4) report the accident to law enforcement; (5) do not give recorded statements to the other side’s insurer before speaking to an attorney; and (6) contact Jwayyed Law LLC promptly.',
  },
  {
    question: 'What is uninsured motorist coverage and does it apply to rural accidents?',
    answer:
      "Yes. Uninsured and underinsured motorist (UM/UIM) coverage applies statewide, including on Morrow County's rural roads. Under Ohio law including ORC 3345.21, if the at-fault driver has no insurance or not enough, your own UM/UIM policy pays up to your limits. Rural counties can have higher rates of uninsured drivers, so a UM/UIM claim may be central to recovery after a crash in Mt. Gilead, Cardington or elsewhere in the county.",
  },
  {
    question: 'How does a contingency fee arrangement work for personal injury cases?',
    answer:
      'Jwayyed Law LLC handles personal injury cases on a contingency fee basis. The fee is a set percentage of the recovery, deducted when the case concludes, with no upfront payment or hourly charge.',
  },
  {
    question: 'Where are personal injury lawsuits filed in Morrow County?',
    answer:
      'At the Morrow County Common Pleas Court, 48 E. High St, Mt. Gilead, OH 43338. Smaller claims may be handled in the Morrow County Court. The firm makes sure the case is filed in the proper venue and served correctly.',
  },
];

export default function PersonalInjuryMorrowCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Personal Injury in Morrow County',
    serviceType: 'Personal Injury',
    areaServed: { '@type': 'County', name: 'Morrow County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/morrow-county/personal-injury-morrow-county',
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <PageHero
        title="Personal injury claims in Morrow County"
        description="Injury lawsuits from Mt. Gilead, Cardington, Marengo and Edison are filed at the Morrow County Common Pleas Court. Most Ohio injury claims must be filed within two years."
      />

      <Section
        title="Injuries in Morrow County"
        intro={
          <p>
            Morrow County is rural, north of Columbus, with agricultural land, rural state routes and small communities. US 42 and SR
            95 are its main corridors.
          </p>
        }
      >
        <p>
          Injury cases here often involve farm equipment collisions, livestock on the road, poorly maintained rural roads and slow
          emergency response that makes injuries worse. On US 42 and SR 95, rear-end crashes, sideswipes and collisions with farm
          machinery crossing the road during planting and harvest are common. The firm reviews accident reports, road conditions,
          sight lines and vehicle data to establish liability.
        </p>
        <FactTable
          title="Where a Morrow County injury case is filed"
          rows={[
            { label: 'Most lawsuits', value: 'Morrow County Common Pleas Court, 48 E. High St, Mt. Gilead, OH 43338' },
            { label: 'Smaller claims', value: 'Morrow County Court' },
            { label: 'Communities served', value: 'Mt. Gilead, Cardington, Marengo and Edison' },
          ]}
        />
      </Section>

      <Section title="Ohio deadlines and fault rules" tone="ice">
        <FactTable
          title="The rules that decide an Ohio injury claim"
          rows={[
            {
              label: 'Filing deadline',
              value: 'Two years from the date of injury for most claims (ORC 2305.10). It does not move while you are still treating or negotiating.',
            },
            { label: 'Medical malpractice', value: 'One-year statute, with a four-year repose period.' },
            {
              label: 'Comparative fault',
              value: 'Modified comparative negligence (ORC 2315.33). You can recover as long as you are less than 50% at fault.',
            },
            { label: 'Farm property', value: 'The duty owed depends on whether you were an invitee, licensee or trespasser.' },
            { label: 'Fees', value: 'Personal injury cases are handled on a contingency fee basis.' },
          ]}
        />
      </Section>

      <Section title="Claims the firm handles">
        <PointGrid
          points={[
            { title: 'Rural road crashes', body: 'US 42, SR 95 and county roads, including farm machinery and livestock.' },
            { title: 'Premises liability', body: 'Injuries at local businesses in Mt. Gilead and Cardington.' },
            { title: 'Dog bites', body: 'Strict liability claims under ORC 955.28.' },
            { title: 'Workplace accidents', body: 'Where a third party bears liability.' },
            { title: 'Wrongful death', body: 'For families after a fatal injury.' },
            { title: 'UM/UIM claims', body: 'Against your own insurer when the at-fault driver has no or too little coverage.' },
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
            { href: '/locations/morrow-county', title: 'Morrow County', subtitle: 'Every service the firm offers in the county' },
            { href: '/personal-injury/car-accidents', title: 'Car accident claims', subtitle: 'Ohio crash claims and insurance' },
            { href: '/personal-injury/dog-bites', title: 'Dog bite claims', subtitle: 'Strict liability under Ohio law' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
