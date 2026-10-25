import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Montgomery County',
  description:
    'Injury claims from I-75, I-70 and US 35 crashes and Dayton-area falls, filed at Montgomery County Common Pleas. Call (614) 285-5482.',
  keywords: ['personal injury Montgomery County', 'injury lawyer Dayton Ohio', 'Montgomery County accident attorney', 'car accident lawyer Dayton Ohio', 'personal injury Kettering Ohio'],
  openGraph: {
    title: 'Personal Injury Lawyer in Montgomery County | Jwayyed Law LLC',
    description: 'Personal injury claims in Dayton, Kettering, Huber Heights and Miamisburg, and the two-year Ohio deadline.',
    url: 'https://www.jjlawohio.com/locations/montgomery-county/personal-injury-montgomery-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/montgomery-county/personal-injury-montgomery-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
  { label: 'Personal Injury - Montgomery County', href: '/locations/montgomery-county/personal-injury-montgomery-county' },
];

const faqs = [
  {
    question: 'What is the statute of limitations for personal injury in Ohio?',
    answer:
      'Ohio Revised Code 2305.10 requires most personal injury claims to be filed within two years from the date the cause of action accrues, generally the date of injury. If you were hurt in Montgomery County, Dayton or anywhere else in Ohio and miss the deadline, the case will be dismissed. Medical malpractice carries a one-year statute with a four-year repose period. Talk to an attorney promptly.',
  },
  {
    question: "How does Ohio's comparative negligence law apply to Dayton-area car accidents?",
    answer:
      "Ohio's modified comparative fault rule, ORC 2315.33, lets you recover if you are less than 50% at fault. At 50% or more, you recover nothing. Below that, your recovery is reduced by your share. Multi-vehicle crashes in the busy I-75 and I-70 corridors through Dayton and Kettering often involve disputed fault, so liability has to be established with evidence.",
  },
  {
    question: 'What damages are available in a Montgomery County personal injury case?',
    answer:
      'Economic damages (past and future medical bills, lost wages, loss of future earning capacity and property damage) and non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life and consortium claims). Punitive damages may be available for reckless, malicious or grossly negligent conduct. The claim should reflect the full effect of the injury, now and later.',
  },
  {
    question: 'What are the most common personal injury scenarios in Montgomery County?',
    answer:
      "The county's dense urban and suburban population produces many kinds of injury cases. Car and truck crashes on I-75, I-70 and US 35 are frequent and often severe. Slip and fall accidents at commercial properties, shopping centers and restaurants in Dayton, Kettering and Huber Heights are common. The firm also handles workplace injuries involving third-party equipment or contractors, dog bites, pedestrian and bicycle accidents and wrongful death claims.",
  },
  {
    question: 'What should I do right after an injury in the Dayton area?',
    answer:
      "After any injury in Montgomery County: (1) get medical treatment right away; (2) photograph the scene, your injuries and the conditions that caused the accident; (3) collect witness contact information; (4) file a police report for any traffic accident; (5) do not give recorded statements to the at-fault party's insurer without counsel; and (6) call Jwayyed Law LLC at (614) 285-5482 before the statute of limitations runs.",
  },
  {
    question: 'What is UM/UIM coverage, and why does it matter in Montgomery County?',
    answer:
      'Uninsured/underinsured motorist (UM/UIM) coverage pays you when the at-fault driver has no insurance or not enough. Under Ohio law including ORC 3345.21, your own insurer steps in up to your UM/UIM limits. With the volume of traffic and the number of uninsured drivers on Dayton-area roads, it is an important safety net, and the firm pursues these claims when the other driver is uninsured or underinsured.',
  },
  {
    question: 'Do I need to pay upfront for a personal injury attorney?',
    answer:
      'No. Jwayyed Law LLC represents personal injury clients on a contingency fee basis. The fee is a percentage of the final recovery, deducted at settlement or judgment. The fee structure is explained at your initial consultation.',
  },
  {
    question: 'Where are personal injury cases filed in Montgomery County?',
    answer:
      'At the Montgomery County Common Pleas Court, 41 N. Perry St, Dayton, OH 45422. Smaller claims may be filed in Dayton Municipal Court or other area municipal courts. The firm files in the venue that fits the claim.',
  },
];

export default function PersonalInjuryMontgomeryCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Personal Injury in Montgomery County',
    serviceType: 'Personal Injury',
    areaServed: { '@type': 'County', name: 'Montgomery County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/montgomery-county/personal-injury-montgomery-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal injury claims in Montgomery County"
        description="Injury lawsuits from Dayton, Kettering, Trotwood, Huber Heights, Englewood, Miamisburg and Vandalia are filed at the Montgomery County Common Pleas Court. Most must be filed within two years."
      />

      <Section
        title="Injuries in Montgomery County"
        intro={
          <p>
            Montgomery County is one of Ohio&rsquo;s most populous urban counties. I-75, I-70 and US 35 intersect here, making it a
            major transportation hub where serious crashes happen regularly.
          </p>
        }
      >
        <p>
          Urban density also brings slip and fall and premises cases: retail stores, restaurants, parking lots and commercial
          properties in Dayton, Kettering and Miamisburg must keep conditions safe for visitors. In crash claims, insurers often argue
          you were speeding or following too closely. The firm investigates early, because evidence disappears quickly in a busy metro
          area.
        </p>
        <FactTable
          title="Where a Montgomery County injury case is filed"
          rows={[
            { label: 'Most lawsuits', value: 'Montgomery County Common Pleas Court, 41 N. Perry St, Dayton, OH 45422' },
            { label: 'Smaller claims', value: 'Dayton Municipal Court or other area municipal courts' },
            { label: 'Communities served', value: 'Dayton, Kettering, Trotwood, Huber Heights, Englewood, Miamisburg and Vandalia' },
          ]}
        />
      </Section>

      <Section title="Ohio deadlines and fault rules" tone="ice">
        <FactTable
          title="The rules that decide an Ohio injury claim"
          rows={[
            { label: 'Filing deadline', value: 'Two years from the date of injury (ORC 2305.10). Miss it and the case is dismissed, whatever its merits.' },
            { label: 'Medical malpractice', value: 'One-year statute, with a four-year repose period.' },
            {
              label: 'Comparative fault',
              value: 'Modified comparative negligence (ORC 2315.33). You can recover if you are less than 50% at fault; your share reduces the award.',
            },
            { label: 'UM/UIM coverage', value: 'Your own policy may pay when the at-fault driver has no insurance or too little.' },
            { label: 'Fees', value: 'Contingency fee basis.' },
          ]}
        />
      </Section>

      <Section title="Claims the firm handles">
        <PointGrid
          points={[
            { title: 'Car and truck accidents', body: 'Crashes on I-75, I-70, US 35 and county roads.' },
            { title: 'Slip and fall and premises', body: 'Stores, restaurants, parking lots and commercial properties.' },
            { title: 'Dog bites', body: 'Claims under ORC 955.28.' },
            { title: 'Workplace third-party claims', body: 'Injuries involving third-party equipment or contractors.' },
            { title: 'Pedestrian and bicycle', body: 'Accidents on city and suburban streets.' },
            { title: 'Catastrophic injury and wrongful death', body: 'The most serious cases, for injured people and families.' },
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
            { href: '/locations/montgomery-county', title: 'Montgomery County', subtitle: 'Every service the firm offers in the county' },
            { href: '/personal-injury/truck-accidents', title: 'Truck accident claims', subtitle: 'Interstate crashes with commercial vehicles' },
            { href: '/personal-injury/slip-and-fall', title: 'Slip and fall claims', subtitle: 'Injuries from unsafe floors and walkways' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
