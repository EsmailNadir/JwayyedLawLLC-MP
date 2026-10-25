import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Greene County Personal Injury Lawyer',
  description:
    'Injury claims from US 35 and SR 675 crashes and falls in Xenia, Fairborn and Beavercreek, filed at Greene County Common Pleas. Call (614) 285-5482.',
  keywords: ['personal injury Greene County', 'injury lawyer Xenia Ohio', 'Greene County accident attorney', 'car accident lawyer Fairborn Ohio', 'personal injury Beavercreek Ohio'],
  openGraph: {
    title: 'Greene County Personal Injury Lawyer | Jwayyed Law LLC',
    description: 'Personal injury claims in Xenia, Fairborn, Beavercreek, Centerville and Yellow Springs, and the two-year Ohio deadline.',
    url: 'https://www.jjlawohio.com/locations/greene-county/personal-injury-greene-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/greene-county/personal-injury-greene-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'Personal Injury - Greene County', href: '/locations/greene-county/personal-injury-greene-county' },
];

const faqs = [
  {
    question: 'What is the statute of limitations for personal injury claims in Ohio?',
    answer:
      'Under Ohio Revised Code 2305.10, most personal injury claims must be filed within two years of the date the cause of action accrues, usually the injury date. If you were hurt in Greene County and miss the deadline, you lose the right to recover however strong the case. Medical malpractice claims have a one-year statute with a four-year statute of repose. Contact the firm promptly so the deadlines are met.',
  },
  {
    question: "How does Ohio's modified comparative negligence law affect my injury claim?",
    answer:
      'Ohio Revised Code 2315.33 sets modified comparative fault. If you are 50% or more responsible, you recover nothing. Under 50%, your damages are reduced by your share. Insurers often raise comparative fault in Greene County crashes, particularly on US 35 and SR 675, to cut settlements, and the firm contests inflated fault claims.',
  },
  {
    question: 'What types of damages are available in a Greene County personal injury case?',
    answer:
      'Economic damages (past and future medical expenses, lost wages, loss of earning capacity and property damage) and non-economic damages (pain and suffering, emotional distress and loss of enjoyment of life). Spouses may recover for loss of consortium. Courts may award punitive damages for willful, reckless or malicious conduct.',
  },
  {
    question: 'Are there unique accident risks near Wright-Patterson Air Force Base in Greene County?',
    answer:
      'Yes. The area around Wright-Patterson AFB in Fairborn and Beavercreek carries heavy traffic from military personnel, contractors and civilian workers, and US 35 and SR 444 near the base see elevated accident rates. Contractors and workers on base property may face their own premises liability and third-party negligence issues. Depending on the facts, a claim may arise under Ohio law or federal tort law.',
  },
  {
    question: 'What should I do after a car accident in Greene County?',
    answer:
      "After an accident in Greene County: (1) get medical attention right away, since delays can hurt both your health and your claim; (2) photograph the damage, road conditions and visible injuries; (3) get witness names and contact information; (4) file a police report; (5) do not give a recorded statement to the at-fault driver's insurer before speaking with an attorney; and (6) contact Jwayyed Law LLC as soon as possible.",
  },
  {
    question: 'Does UM/UIM coverage protect me if the other driver has no insurance?',
    answer:
      'Yes. Uninsured and underinsured motorist (UM/UIM) coverage, governed by Ohio law including ORC 3345.21, pays you from your own policy when the at-fault driver has no insurance or not enough. Many Ohio drivers are uninsured. After a crash with an uninsured driver in Xenia, Fairborn, Beavercreek or elsewhere in Greene County, a UM/UIM claim may be your main path to recovery.',
  },
  {
    question: 'How do contingency fees work for personal injury cases?',
    answer:
      'Jwayyed Law LLC handles personal injury cases on a contingency fee basis. The fee is a percentage of the gross recovery and is deducted when the case concludes.',
  },
  {
    question: 'Where are personal injury lawsuits filed in Greene County?',
    answer:
      "At the Greene County Common Pleas Court, 45 N. Detroit St, Xenia, OH 45385. Smaller claims may be filed in one of the county's municipal courts. The firm files in the venue that fits the claim.",
  },
];

export default function PersonalInjuryGreeneCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Personal Injury in Greene County',
    serviceType: 'Personal Injury',
    areaServed: { '@type': 'County', name: 'Greene County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/greene-county/personal-injury-greene-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal injury claims in Greene County"
        description="Injury lawsuits from Xenia, Fairborn, Beavercreek, Centerville and Yellow Springs are filed at the Greene County Common Pleas Court in Xenia. Most must be filed within two years."
      />

      <Section
        title="Injuries in Greene County"
        intro={
          <p>
            Greene County is home to Xenia (the county seat), Fairborn, Beavercreek, Yellow Springs and Centerville, near
            Wright-Patterson Air Force Base and the Dayton metro area.
          </p>
        }
      >
        <p>
          US 35 and SR 675 are major crash corridors, carrying heavy traffic between Xenia, Fairborn and Beavercreek, and those crashes
          often raise shared-fault questions. Around the base, US 35 and SR 444 see elevated accident rates. Retail stores, restaurants,
          parking lots and public spaces in Beavercreek and the Fairborn commercial corridor bring slip and fall and premises claims.
        </p>
        <FactTable
          title="Where a Greene County injury case is filed"
          rows={[
            { label: 'Most lawsuits', value: 'Greene County Common Pleas Court, 45 N. Detroit St, Xenia, OH 45385' },
            { label: 'Smaller claims', value: "One of the county's municipal courts" },
            { label: 'Near the base', value: 'Some claims involving base property may fall under federal tort law' },
          ]}
        />
      </Section>

      <Section title="Ohio deadlines and fault rules" tone="ice">
        <FactTable
          title="The rules that decide an Ohio injury claim"
          rows={[
            { label: 'Filing deadline', value: 'Two years from the date of injury for most claims (ORC 2305.10). Missing it usually bars the claim.' },
            { label: 'Medical malpractice', value: 'One-year statute, with a four-year statute of repose.' },
            {
              label: 'Comparative fault',
              value: 'Modified comparative negligence (ORC 2315.33). You can recover if you are less than 50% at fault, reduced by your share.',
            },
            { label: 'UM/UIM coverage', value: 'Your own policy may pay when the at-fault driver has no insurance or too little.' },
            { label: 'Fees', value: 'Contingency fee basis.' },
          ]}
        />
        <p>The firm starts by preserving evidence, getting witness statements and documenting the full extent of your damages.</p>
      </Section>

      <Section title="Claims the firm handles">
        <PointGrid
          points={[
            { title: 'Car accidents', body: 'Crashes on US 35, SR 675, SR 444 and local roads.' },
            { title: 'Slip and fall and premises', body: 'Stores, restaurants, parking lots and public spaces.' },
            { title: 'Dog bites', body: 'Claims under ORC 955.28.' },
            { title: 'Workplace third-party claims', body: 'Including contractors and workers on base property.' },
            { title: 'Motorcycle and bicycle', body: 'Riders injured by negligent drivers.' },
            { title: 'Wrongful death', body: 'For families after a fatal injury.' },
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
            { href: '/locations/greene-county', title: 'Greene County', subtitle: 'Every service the firm offers in the county' },
            { href: '/personal-injury/car-accidents', title: 'Car accident claims', subtitle: 'Ohio crash claims and insurance' },
            { href: '/personal-injury/motorcycle-accidents', title: 'Motorcycle accident claims', subtitle: 'Injured riders' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
