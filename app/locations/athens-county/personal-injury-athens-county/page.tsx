import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Athens County Personal Injury Attorney',
  description:
    'Injury claims from Athens County roads, rentals and campus: car accidents, slip and fall and more, filed at Athens County Common Pleas. Call (614) 285-5482.',
  keywords: ['personal injury Athens County', 'injury lawyer Athens Ohio', 'Athens County accident attorney', 'car accident lawyer Athens Ohio', 'slip and fall Athens County'],
  openGraph: {
    title: 'Athens County Personal Injury Attorney | Jwayyed Law LLC',
    description: 'Personal injury claims in Athens County, Nelsonville, The Plains and Albany, and the two-year Ohio deadline.',
    url: 'https://www.jjlawohio.com/locations/athens-county/personal-injury-athens-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/athens-county/personal-injury-athens-county' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Athens County', href: '/locations/athens-county' },
  { label: 'Personal Injury - Athens County', href: '/locations/athens-county/personal-injury-athens-county' },
];

const faqs = [
  {
    question: 'What is the statute of limitations for personal injury claims in Ohio?',
    answer:
      'Under Ohio Revised Code 2305.10, most personal injury claims must be filed within two years from the date the cause of action accrues, which is usually the date of injury. If you were hurt in Athens County and wait too long, you can lose the right to recover anything. Medical malpractice has a one-year statute with a four-year repose period. Talk to an attorney soon after any injury.',
  },
  {
    question: "How does Ohio's comparative negligence law affect my personal injury case?",
    answer:
      'Ohio follows a modified comparative negligence rule under ORC 2315.33. If you are 50% or more at fault for your own injury, you recover nothing. If you are less than 50% at fault, your damages are reduced by your share. For example, at 20% fault on $100,000 in damages, you recover $80,000. Insurers often try to push your share of fault higher, which an attorney can contest.',
  },
  {
    question: 'What damages can I recover after a personal injury in Athens County?',
    answer:
      'Economic damages such as past and future medical expenses, lost wages, loss of earning capacity and property damage. Non-economic damages such as pain and suffering, emotional distress, loss of enjoyment of life, and loss of consortium for a spouse. Punitive damages may be available when the conduct was egregious. An attorney can value the claim based on your circumstances.',
  },
  {
    question: 'What should I do after a car accident in Athens County?',
    answer:
      'After a car accident in Athens County or anywhere in Ohio: (1) call 911 and get medical attention even if you feel fine, because injuries often appear hours or days later; (2) photograph the vehicles, road conditions and injuries; (3) exchange insurance and contact information with the other driver; (4) do not admit fault or give recorded statements to insurance adjusters before speaking with an attorney; and (5) contact Jwayyed Law LLC as soon as possible.',
  },
  {
    question: 'Does Jwayyed Law LLC handle personal injury cases for Ohio University students?',
    answer:
      "Yes. Ohio University brings thousands of students and visitors to Athens each year, and injuries happen on campus, at local businesses, in rental properties and on area roads. The firm represents injured students, faculty, staff and visitors in Athens County, whether the injury came from an off-campus party, a vehicle accident on US 33 or a landlord's negligence.",
  },
  {
    question: 'What is uninsured or underinsured motorist (UM/UIM) coverage, and why does it matter?',
    answer:
      'Ohio Revised Code 3345.21 and related provisions govern uninsured and underinsured motorist coverage in Ohio. If a driver with no insurance, or not enough, hits you, your own UM/UIM policy may pay for medical bills, lost wages and other damages. A UM/UIM claim has its own process, and insurers do not always offer fair settlements. An attorney can handle the claim and negotiate for you.',
  },
  {
    question: 'How does a contingency fee arrangement work for personal injury cases?',
    answer:
      "At Jwayyed Law LLC, personal injury cases are usually handled on a contingency fee basis: the attorney's fee is a percentage of any recovery. That lets injured people in Athens County and across Ohio hire a lawyer whatever their finances. Fee arrangements are explained at your initial consultation.",
  },
  {
    question: 'Where are personal injury cases filed in Athens County?',
    answer:
      'Personal injury lawsuits in Athens County are filed at the Athens County Common Pleas Court, 1 S. Court St, Athens, OH 45701. Smaller claims may go to Athens Municipal Court or Athens County Court depending on the amount in controversy. The firm files in the venue that fits the claim.',
  },
];

export default function PersonalInjuryAthensCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Personal Injury in Athens County',
    serviceType: 'Personal Injury',
    areaServed: { '@type': 'County', name: 'Athens County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/athens-county/personal-injury-athens-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal injury claims in Athens County"
        description="Injury lawsuits from Athens, Nelsonville, The Plains and Albany are filed at the Athens County Common Pleas Court. Most Ohio injury claims must be filed within two years."
      />

      <Section
        title="Injuries in Athens County"
        intro={
          <p>
            Athens County sits in Appalachian southeastern Ohio. Its main roads, US 33, US 50 and SR 56, carry a lot of the
            county&rsquo;s serious crashes.
          </p>
        }
      >
        <p>
          Ohio University shapes the local injury picture. Pedestrian and bicycle accidents are common near campus, and injuries in
          rental housing, where landlords fail to keep conditions safe, are an ongoing problem. Around Nelsonville and Albany, rural
          roads and agricultural areas bring serious collisions and equipment-related injuries.
        </p>
        <FactTable
          title="Where an Athens County injury case is filed"
          rows={[
            { label: 'Most lawsuits', value: 'Athens County Common Pleas Court, 1 S. Court St, Athens, OH 45701' },
            { label: 'Smaller claims', value: 'Athens Municipal Court or Athens County Court, depending on the amount in controversy' },
            { label: 'Communities served', value: 'Athens, Nelsonville, The Plains, Albany and the Ohio University area' },
          ]}
        />
      </Section>

      <Section title="Ohio deadlines and fault rules" tone="ice">
        <FactTable
          title="The rules that decide an Ohio injury claim"
          rows={[
            { label: 'Filing deadline', value: 'Two years from the date of injury for most claims (ORC 2305.10). Missing it forfeits the claim.' },
            { label: 'Medical malpractice', value: 'One-year statute of limitations, with a four-year repose period.' },
            {
              label: 'Comparative fault',
              value: 'Modified comparative negligence (ORC 2315.33). At 50% or more at fault you recover nothing; under 50%, damages are reduced by your share.',
            },
            { label: 'UM/UIM coverage', value: 'Your own policy may pay when the at-fault driver has no insurance or too little.' },
            { label: 'Fees', value: 'Personal injury cases are usually handled on a contingency fee basis.' },
          ]}
        />
        <p>
          Acting early matters for more than the deadline. Evidence is easier to preserve and witnesses are easier to find. Insurers
          often argue that the injured person shares the blame; the firm investigates each case to keep any fault assigned to you as
          low as the evidence allows.
        </p>
      </Section>

      <Section title="Claims the firm handles">
        <PointGrid
          points={[
            { title: 'Car accidents', body: 'Crashes on US 33, US 50, SR 56 and rural county roads.' },
            { title: 'Slip and fall and premises', body: 'Dangerous conditions at businesses and in rental properties.' },
            { title: 'Pedestrian and bicycle', body: 'Accidents near campus and in town.' },
            { title: 'Dog attacks and workplace incidents', body: 'And other injuries caused by another party’s negligence.' },
          ]}
        />
        <p>
          To discuss your injury claim, use <Link href="/contact">the contact page</Link> or call (614) 285-5482. More on the
          firm&rsquo;s <Link href="/personal-injury">personal injury practice</Link> across Ohio.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid
          links={[
            { href: '/locations/athens-county', title: 'Athens County', subtitle: 'Every service the firm offers in the county' },
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
