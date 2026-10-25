import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Delaware County Personal Injury Attorney',
  description:
    'Injury claims from US 23, SR 36 and SR 37 crashes and falls in Delaware, Powell, Dublin and Lewis Center, filed at Common Pleas. (614) 285-5482.',
  keywords: ['personal injury Delaware County', 'injury lawyer Delaware Ohio', 'Delaware County accident attorney', 'car accident lawyer Powell Ohio', 'personal injury Westerville Ohio'],
  openGraph: {
    title: 'Delaware County Personal Injury Attorney | Jwayyed Law LLC',
    description: 'Personal injury claims in Delaware, Powell, Westerville, Dublin, Lewis Center and Sunbury, and the two-year Ohio deadline.',
    url: 'https://www.jjlawohio.com/locations/delaware-county/personal-injury-delaware-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/delaware-county/personal-injury-delaware-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Delaware County', href: '/courts/delaware-county' },
  { label: 'Personal Injury - Delaware County', href: '/locations/delaware-county/personal-injury-delaware-county' },
];

const faqs = [
  {
    question: 'What is the statute of limitations for personal injury claims in Ohio?',
    answer:
      'Under Ohio Revised Code 2305.10, most personal injury claims must be filed within two years from the date the cause of action accrues, usually the date of injury. If you were hurt in Delaware County, you must file within that window or lose the right to recover. Exceptions exist for latent injuries discovered later and for minors, but do not assume one applies. Talk to an attorney promptly.',
  },
  {
    question: 'US 23 and SR 36/37 are major accident corridors in Delaware County. How can you help?',
    answer:
      'US 23, SR 36 and SR 37 carry heavy commuter traffic between Columbus and Powell, Lewis Center, Delaware and Sunbury, and crashes on them are common and can be serious. The firm reviews police reports, witness statements, traffic camera footage and physical evidence to establish liability under Ohio law, including ORC 2315.33 on comparative negligence.',
  },
  {
    question: 'What damages can I recover after an injury in Delaware County?',
    answer:
      'Economic damages (past and future medical expenses, lost wages, loss of earning capacity and property damage) and non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life and loss of consortium for a spouse). Punitive damages are available in exceptional cases of egregious conduct. The claim should count long-term effects as well as immediate costs.',
  },
  {
    question: 'What should I do immediately after a car accident in Delaware County?',
    answer:
      "After any accident in Delaware County: (1) call 911 and get medical care, since adrenaline can mask serious injuries; (2) photograph the vehicles, road conditions, skid marks and your injuries; (3) collect witness names and contact information; (4) do not admit fault or apologize at the scene; (5) notify your insurer but decline a recorded statement to the other driver's insurer until you speak with an attorney; and (6) contact Jwayyed Law LLC as soon as possible.",
  },
  {
    question: "How does Ohio's comparative negligence rule affect my personal injury case?",
    answer:
      'Ohio uses modified comparative fault under ORC 2315.33. At 50% or more responsibility, you receive nothing. Under 50%, your damages are reduced by your share. For example, at 15% fault on $200,000 in damages, you recover $170,000. Insurers often try to assign more fault than the evidence supports, and the firm contests that.',
  },
  {
    question: 'What is uninsured/underinsured motorist (UM/UIM) coverage and do I need it?',
    answer:
      'UM/UIM coverage protects you when the at-fault driver has no insurance or not enough. Under ORC 3345.21 and related Ohio provisions, your own insurer pays up to your UM/UIM limits when the responsible driver cannot. With the number of uninsured drivers in Ohio, the coverage is important, and the firm pursues these claims after crashes with uninsured motorists in Delaware County.',
  },
  {
    question: 'Do I have to pay attorney fees upfront to hire Jwayyed Law LLC?',
    answer:
      "No. Jwayyed Law LLC handles personal injury cases on a contingency fee basis. The attorney's fee is a percentage of the total recovery, deducted when the case resolves, with no hourly costs or upfront retainer.",
  },
  {
    question: 'Where are personal injury lawsuits filed in Delaware County?',
    answer:
      'At the Delaware County Common Pleas Court, 91 N. Sandusky St, Delaware, OH 43015. Smaller claims may be handled at the Delaware Municipal Court or Delaware County Court depending on the amount. The firm files in the venue that fits the claim.',
  },
];

export default function PersonalInjuryDelawareCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Personal Injury in Delaware County',
    serviceType: 'Personal Injury',
    areaServed: { '@type': 'County', name: 'Delaware County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/delaware-county/personal-injury-delaware-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal injury claims in Delaware County"
        description="Injury lawsuits from Delaware, Powell, Westerville, Dublin, Lewis Center and Sunbury are filed at the Delaware County Common Pleas Court. Most must be filed within two years."
      />

      <Section
        title="Injuries in Delaware County"
        intro={
          <p>
            Delaware County is one of Ohio&rsquo;s fastest-growing counties. Expansion along US 23, SR 36 and SR 37 brings more
            traffic, new construction zones and more crashes.
          </p>
        }
      >
        <p>
          On busy commuter routes like US 23 through Lewis Center and Powell, insurers often try to share blame with the injured
          driver. Suburban growth also brings construction zone accidents, defective sidewalks, dangerous parking lots and premises
          claims at retail and commercial properties. The firm investigates the facts and retains experts when the case calls for
          them.
        </p>
        <FactTable
          title="Where a Delaware County injury case is filed"
          rows={[
            { label: 'Most lawsuits', value: 'Delaware County Common Pleas Court, 91 N. Sandusky St, Delaware, OH 43015' },
            { label: 'Smaller claims', value: 'Delaware Municipal Court or Delaware County Court, depending on the amount' },
            { label: 'Communities served', value: 'Delaware, Powell, Westerville, Dublin, Lewis Center and Sunbury' },
          ]}
        />
      </Section>

      <Section title="Ohio deadlines and fault rules" tone="ice">
        <FactTable
          title="The rules that decide an Ohio injury claim"
          rows={[
            {
              label: 'Filing deadline',
              value: 'Two years from the date of injury (ORC 2305.10). The clock runs even while you are treating or negotiating.',
            },
            {
              label: 'Comparative fault',
              value: 'Modified comparative negligence (ORC 2315.33). At 50% or more at fault you recover nothing; under 50%, damages are reduced by your share.',
            },
            { label: 'UM/UIM coverage', value: 'Your own policy may pay when the at-fault driver has no insurance or too little.' },
            { label: 'Fees', value: 'Contingency fee basis.' },
          ]}
        />
        <p>The firm starts on the case as soon as it is retained, preserving evidence, interviewing witnesses and documenting damages.</p>
      </Section>

      <Section title="Claims the firm handles">
        <PointGrid
          points={[
            { title: 'Car and truck accidents', body: 'Including crashes on US 23, SR 36 and SR 37.' },
            { title: 'Motorcycle crashes', body: 'Riders hurt by negligent drivers.' },
            { title: 'Slip and fall and premises', body: 'Sidewalks, parking lots and retail and commercial properties.' },
            { title: 'Construction zones', body: 'Crashes and injuries in work zones on growing roads.' },
            { title: 'Dog bites', body: 'Claims under ORC 955.28.' },
            { title: 'Wrongful death', body: 'For families after a fatal injury.' },
          ]}
        />
        <p>
          Use <Link href="/contact">the contact page</Link> or call (614) 285-5482. More in the firm&rsquo;s{' '}
          <Link href="/personal-injury">personal injury practice overview</Link>.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid
          links={[
            { href: '/locations/delaware-county', title: 'Delaware County', subtitle: 'Every service the firm offers in the county' },
            { href: '/personal-injury/car-accidents', title: 'Car accident claims', subtitle: 'Ohio crash claims and insurance' },
            { href: '/personal-injury/premises-liability', title: 'Premises liability', subtitle: 'Injuries from unsafe property' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
