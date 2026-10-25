import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Clinton County Personal Injury Attorney',
  description:
    'Injury claims from US 68, SR 73 and rural roads in Wilmington, Sabina and Blanchester, filed at Clinton County Common Pleas. Call (614) 285-5482.',
  keywords: ['personal injury Clinton County', 'injury lawyer Wilmington Ohio', 'Clinton County accident attorney', 'car accident lawyer Wilmington Ohio', 'slip and fall Clinton County'],
  openGraph: {
    title: 'Clinton County Personal Injury Attorney | Jwayyed Law LLC',
    description: 'Personal injury claims in Wilmington, Sabina, Blanchester, Clarksville and Port William, and the two-year Ohio deadline.',
    url: 'https://www.jjlawohio.com/locations/clinton-county/personal-injury-clinton-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/clinton-county/personal-injury-clinton-county' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Clinton County', href: '/locations/clinton-county' },
  { label: 'Personal Injury - Clinton County', href: '/locations/clinton-county/personal-injury-clinton-county' },
];

const faqs = [
  {
    question: 'What is the deadline to file a personal injury claim in Ohio?',
    answer:
      'Ohio Revised Code 2305.10 sets the statute of limitations for most personal injury claims at two years from the date the cause of action accrues, generally the date of injury. If you were hurt in Clinton County and do not file in time, the court will dismiss the case and you cannot recover. Some exceptions exist, such as for minors or latent injuries, but do not count on one: talk to an attorney promptly.',
  },
  {
    question: 'How does comparative negligence work in an Ohio car accident case?',
    answer:
      "Ohio follows modified comparative negligence under ORC 2315.33. If you are 50% or more at fault, you recover nothing. Under 50%, your recovery is reduced by your share of fault. Crashes on Clinton County's rural roads, including US 68 and SR 73, often involve disputed fault, so the crash needs to be investigated and the other side's version tested.",
  },
  {
    question: 'What damages can I recover after an accident in Clinton County?',
    answer:
      'Economic damages (past and future medical expenses, lost income, loss of future earning capacity and property damage) and non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life and loss of consortium). Punitive damages may be available for reckless or intentional misconduct. The full claim covers more than the immediate medical bills.',
  },
  {
    question: 'Are agricultural and farm-related injuries covered under personal injury law?',
    answer:
      "Yes. Clinton County's rural and agricultural setting means farm-related injuries happen: equipment accidents, animals on the road and hazardous conditions on farmland can all support a claim. The legal standard can differ depending on whether the injury happened on a public road, private property open to visitors, or purely private farmland. Ohio premises liability and negligence law governs most of these cases.",
  },
  {
    question: 'What should I do right after an accident in Wilmington or Clinton County?',
    answer:
      "After any accident in Clinton County: (1) get medical attention right away, since injuries like whiplash or internal trauma are not always apparent; (2) photograph the scene and collect witness contact information; (3) file a police report for any vehicle accident; (4) notify your insurer, but do not give a recorded statement to the at-fault party's insurer before speaking to an attorney; and (5) contact Jwayyed Law LLC to schedule a consultation before the statute of limitations runs.",
  },
  {
    question: 'Does uninsured motorist coverage apply if I am hit by an uninsured driver in Clinton County?',
    answer:
      'Yes. If you carry uninsured or underinsured motorist (UM/UIM) coverage on your own policy, you may recover from your own insurer when the at-fault driver lacks enough coverage. Ohio law, including ORC 3345.21 and related provisions, governs these claims. Insurers do not always make it easy, and claims can be disputed. An attorney can explain your policy, document your damages and negotiate the settlement.',
  },
  {
    question: 'How does a contingency fee arrangement work, and do I have to pay upfront?',
    answer:
      "At Jwayyed Law LLC, personal injury cases are usually handled on a contingency fee basis. The attorney's fee is a percentage of the recovery, deducted at settlement or judgment, so there are no upfront costs or hourly bills.",
  },
  {
    question: 'Where are personal injury lawsuits filed in Clinton County?',
    answer:
      'Claims above the small claims threshold are filed at the Clinton County Common Pleas Court, 46 S. South St, Wilmington, OH 45177. Smaller claims may be filed in Wilmington Municipal Court. The firm makes sure the case is filed in the correct court.',
  },
];

export default function PersonalInjuryClintonCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Personal Injury in Clinton County',
    serviceType: 'Personal Injury',
    areaServed: { '@type': 'County', name: 'Clinton County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/clinton-county/personal-injury-clinton-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal injury claims in Clinton County"
        description="Injury lawsuits from Wilmington, Sabina, Blanchester, Clarksville and Port William are filed at the Clinton County Common Pleas Court. Most Ohio injury claims must be filed within two years."
      />

      <Section
        title="Injuries in Clinton County"
        intro={
          <p>
            Clinton County is rural southwestern Ohio, and the US 68 and SR 73 corridors carry many of its serious collisions.
          </p>
        }
      >
        <p>
          The county&rsquo;s agricultural character brings farm-related injuries, animal-vehicle collisions and rural road hazards.
          Insurance adjusters here sometimes argue that a driver was speeding on a country road or failed to allow for farm equipment
          or animals. The firm reviews the evidence to challenge inflated fault claims.
        </p>
        <FactTable
          title="Where a Clinton County injury case is filed"
          rows={[
            { label: 'Most lawsuits', value: 'Clinton County Common Pleas Court, 46 S. South St, Wilmington, OH 45177' },
            { label: 'Smaller claims', value: 'Wilmington Municipal Court' },
            { label: 'Communities served', value: 'Wilmington, Sabina, Blanchester, Clarksville and Port William' },
          ]}
        />
      </Section>

      <Section title="Ohio deadlines and fault rules" tone="ice">
        <FactTable
          title="The rules that decide an Ohio injury claim"
          rows={[
            { label: 'Filing deadline', value: 'Two years from the date of injury for most claims (ORC 2305.10).' },
            {
              label: 'Comparative fault',
              value: 'Modified comparative negligence (ORC 2315.33). As long as your share of fault is below 50%, you can recover.',
            },
            { label: 'UM/UIM coverage', value: 'Your own policy may pay when the at-fault driver has no insurance or too little.' },
            { label: 'Fees', value: 'Personal injury cases are handled on a contingency fee basis.' },
          ]}
        />
        <p>
          Acting quickly protects the claim and the evidence. Accident reconstruction, surveillance footage, witness memories and
          medical records all get harder to obtain as time passes, so the firm starts investigating as soon as you retain it.
        </p>
      </Section>

      <Section title="Claims the firm handles">
        <PointGrid
          points={[
            { title: 'Car accidents', body: 'Including crashes on US 68, SR 73 and county roads.' },
            { title: 'Farm and animal collisions', body: 'Farm equipment, livestock and other rural road hazards.' },
            { title: 'Slip and fall', body: 'Falls at local businesses and other premises liability cases.' },
            { title: 'Dog bites', body: 'Claims under ORC 955.28.' },
            { title: 'Workplace injuries', body: 'Where a third party’s negligence is involved.' },
          ]}
        />
        <p>
          Use <Link href="/contact">the contact page</Link> or call (614) 285-5482 to schedule a consultation. More on the
          firm&rsquo;s <Link href="/personal-injury">personal injury services</Link> throughout Ohio.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid
          links={[
            { href: '/locations/clinton-county', title: 'Clinton County', subtitle: 'Every service the firm offers in the county' },
            { href: '/personal-injury/car-accidents', title: 'Car accident claims', subtitle: 'Ohio crash claims and insurance' },
            { href: '/personal-injury/slip-and-fall', title: 'Slip and fall claims', subtitle: 'Injuries from unsafe floors and walkways' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
