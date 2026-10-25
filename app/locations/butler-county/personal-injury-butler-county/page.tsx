import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Butler County Personal Injury Attorney',
  description:
    'Injury claims from I-75, SR 129, US 27 and SR 4 crashes and falls in Hamilton, Oxford, West Chester and Middletown. Call (614) 285-5482.',
  keywords: ['personal injury Butler County', 'injury lawyer Hamilton Ohio', 'Butler County accident attorney', 'car accident lawyer Butler County', 'personal injury West Chester Ohio', 'Oxford Ohio injury attorney'],
  openGraph: {
    title: 'Butler County Personal Injury Attorney | Jwayyed Law LLC',
    description: 'Personal injury claims in Hamilton, Oxford, West Chester, Fairfield, Middletown and Mason, and the two-year Ohio deadline.',
    url: 'https://www.jjlawohio.com/locations/butler-county/personal-injury-butler-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/butler-county/personal-injury-butler-county' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Butler County', href: '/locations/butler-county' },
  { label: 'Personal Injury - Butler County', href: '/locations/butler-county/personal-injury-butler-county' },
];

const faqs = [
  {
    question: 'What is the statute of limitations for personal injury claims in Ohio?',
    answer:
      'Ohio Revised Code 2305.10 sets a two-year statute of limitations for most personal injury claims, running from the date the cause of action accrues, generally the date of injury. If you were hurt in Hamilton, Oxford, West Chester, Fairfield, Middletown or anywhere in Butler County, you must file within two years or lose the right to compensation. The clock runs even while you are treating or negotiating with an insurer.',
  },
  {
    question: "How does Ohio's comparative negligence law affect my Butler County injury case?",
    answer:
      'Under Ohio Revised Code 2315.33, Ohio follows modified comparative negligence with a 50% bar. Your recovery is reduced by your share of fault, and at 50% or more you recover nothing. In claims from I-75, SR 129 (Princeton Pike), US 27 and SR 4 (Dixie Highway), insurers routinely try to assign fault to the injured person, so the firm gathers the evidence to keep the allocation accurate.',
  },
  {
    question: 'What types of personal injury cases does Jwayyed Law LLC handle in Butler County?',
    answer:
      'Car accidents on I-75 and SR 129, truck and commercial vehicle accidents on the I-75 corridor, slip and fall at retail locations in West Chester and Hamilton, premises liability, dog bites, workplace injuries, pedestrian accidents near Miami University in Oxford, and wrongful death. That includes injuries at a West Chester shopping center, on US 42 in Mason or at a worksite in Middletown.',
  },
  {
    question: 'Where are personal injury lawsuits filed in Butler County?',
    answer:
      'Cases valued over $15,000 are filed at the Butler County Common Pleas Court, 315 High Street, Hamilton, OH 45011. Claims under $15,000 may be filed in the appropriate municipal or area court. The firm knows Butler County court procedures and local rules.',
  },
  {
    question: 'What damages are recoverable in a Butler County personal injury case?',
    answer:
      'Economic damages (past and future medical expenses, lost wages and loss of future earning capacity) and non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life and loss of consortium for a spouse). Punitive damages may be available for malicious, reckless or intentional misconduct. The claim should account for long-term care needs and the effect on your working life.',
  },
  {
    question: 'Does Ohio allow punitive damages in personal injury cases?',
    answer:
      'Yes, in cases involving actual malice: a conscious disregard for the rights and safety of others that has a great probability of causing substantial harm. Ohio Revised Code 2315.21 governs punitive damages. They are awarded on top of compensatory damages to punish egregious conduct and deter it. They are not available in every case, and the firm evaluates each case for them.',
  },
  {
    question: 'What should I know about uninsured and underinsured motorist claims in Butler County?',
    answer:
      'Uninsured and underinsured motorist (UM/UIM) coverage, governed by Ohio Revised Code 3937.18, pays you from your own policy when the at-fault driver has no insurance or not enough. I-75, US 27 and SR 4 carry heavy traffic, and not every driver is adequately insured. After a crash with an uninsured or underinsured driver in Hamilton, Oxford, West Chester or elsewhere in the county, your own UM/UIM policy may be your most important source of recovery.',
  },
  {
    question: 'How do contingency fees work for personal injury cases in Ohio?',
    answer:
      'At Jwayyed Law LLC, personal injury cases are handled on a contingency fee basis. The fee is a percentage of the recovery, agreed at the outset, so you can pursue the claim whatever your finances. Costs such as filing fees and expert witness expenses are discussed upfront.',
  },
];

export default function PersonalInjuryButlerCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Personal Injury in Butler County',
    serviceType: 'Personal Injury',
    areaServed: { '@type': 'County', name: 'Butler County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/butler-county/personal-injury-butler-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Butler County personal injury attorney"
        description="Butler County injury cases over $15,000 are filed at the Common Pleas Court, 315 High Street in Hamilton. Most Ohio injury claims must be filed within two years."
      />

      <Section
        title="Butler County accident and injury claims"
        intro={
          <p>
            Butler County is one of Ohio&rsquo;s most populated counties. Its roads, including I-75, SR 129 (Princeton Pike), US 27,
            US 42 and SR 4 (Dixie Highway), carry heavy traffic and many serious crashes each year.
          </p>
        }
      >
        <PointGrid
          points={[
            { title: 'I-75 corridor', body: 'A major commercial trucking route between Cincinnati and Dayton, where car and truck crashes are common and often severe.' },
            { title: 'West Chester and Mason', body: 'Retail corridors along SR 129 and US 42 bring slip and fall and premises liability cases at shopping centers, grocery stores and restaurants.' },
            { title: 'Oxford', body: 'Miami University students walking and cycling near traffic create pedestrian injury exposure.' },
            { title: 'Hamilton and Middletown', body: 'Manufacturing injuries may support claims against third parties even when workers’ compensation applies.' },
          ]}
        />
        <FactTable
          title="Where a Butler County injury case is filed"
          rows={[
            { label: 'Over $15,000', value: 'Butler County Common Pleas Court, 315 High Street, Hamilton, OH 45011' },
            { label: 'Under $15,000', value: 'The appropriate municipal or area court' },
            { label: 'Communities served', value: 'Hamilton, Oxford, West Chester, Fairfield, Middletown, Monroe and Mason' },
          ]}
        />
      </Section>

      <Section title="Ohio deadlines and damages rules" tone="ice">
        <FactTable
          title="How Ohio law decides an injury case"
          rows={[
            { label: 'Filing deadline', value: 'Two years for most claims (ORC 2305.10(A)). Missing it forfeits any recovery.' },
            {
              label: 'Comparative fault',
              value: 'Modified comparative negligence (ORC 2315.33): damages reduced by your share, and no recovery at 50% or more.',
            },
            { label: 'Punitive damages', value: 'Available for actual malice (ORC 2315.21).' },
            {
              label: 'Collateral sources',
              value: 'ORC 2315.36 addresses whether health insurance, disability or other collateral payments are deducted from the defendant’s liability.',
            },
            { label: 'UM/UIM', value: 'Governed by ORC 3937.18.' },
            { label: 'Dog bites', value: 'Strict liability under ORC 955.28.' },
          ]}
        />
        <p>
          The firm gathers accident reports, surveillance footage, witness statements and expert analysis to establish liability, and
          handles the case from investigation through settlement or trial on a contingency fee basis.
        </p>
      </Section>

      <Section title="Talk to the firm">
        <p>
          Use <Link href="/contact">the contact page</Link> or call (614) 285-5482. More on the firm&rsquo;s{' '}
          <Link href="/personal-injury">personal injury practice</Link> throughout Ohio.
        </p>
        <LinkGrid
          links={[
            { href: '/locations/butler-county', title: 'Butler County', subtitle: 'Every service the firm offers in the county' },
            { href: '/personal-injury/truck-accidents', title: 'Truck accident claims', subtitle: 'Crashes on the I-75 corridor' },
            { href: '/personal-injury/pedestrian-accidents', title: 'Pedestrian accident claims', subtitle: 'Including near campus in Oxford' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
