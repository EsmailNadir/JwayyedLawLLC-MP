import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Franklin County Personal Injury Lawyer',
  description:
    'Injury claims from Columbus and Franklin County suburbs are filed at the Court of Common Pleas, 369 S. High St. Ohio allows two years to sue.',
  keywords: ['personal injury Franklin County', 'injury lawyer Columbus Ohio', 'Franklin County accident attorney', 'car accident lawyer Columbus Ohio', 'personal injury Dublin Ohio'],
  openGraph: {
    title: 'Franklin County Personal Injury Lawyer | Jwayyed Law LLC',
    description: 'Car accidents, premises liability, dog bites and UM/UIM claims in Columbus and Franklin County.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/personal-injury-franklin-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/personal-injury-franklin-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Personal Injury in Franklin County', href: '/locations/franklin-county/personal-injury-franklin-county' },
];

const faqs = [
  {
    question: 'What is the statute of limitations for personal injury claims in Franklin County?',
    answer:
      'Ohio Revised Code 2305.10 sets a two-year statute of limitations for most personal injury claims, starting when the cause of action accrues, usually the date of injury. If you were hurt in Columbus or anywhere in Franklin County, you must file within two years or lose the right to recover. Medical malpractice has a one-year statute with a four-year repose period. Contact Jwayyed Law LLC soon after an injury so these deadlines are protected.',
  },
  {
    question: 'Does the firm handle personal injury cases in Franklin County even though it also does criminal work there?',
    answer:
      'Yes. Jwayyed Law LLC handles personal injury cases throughout Franklin County, including Columbus, Dublin, Westerville, Hilliard, Gahanna, Grove City, Reynoldsburg, Worthington, Bexley and Upper Arlington. Franklin County is where the firm is based, and personal injury work here is a core part of the practice.',
  },
  {
    question: 'What types of damages are recoverable after a Columbus-area personal injury?',
    answer:
      "Ohio law allows economic damages (past and future medical expenses, lost income, loss of future earning capacity and property damage) and non-economic damages such as pain and suffering, emotional distress, loss of enjoyment of life and a spouse's loss of consortium. When the misconduct was malicious, reckless or intentional, a jury may also award punitive damages. The firm accounts for every part of your damages, including long-term care needs and the effect on your working life.",
  },
  {
    question: "How does Ohio's comparative negligence law apply in Franklin County accident cases?",
    answer:
      "Under ORC 2315.33, Ohio's modified comparative fault rule reduces your recovery by your percentage of fault and bars recovery entirely if you are 50% or more at fault. On busy Columbus corridors such as I-270, I-71, I-670 and US 33, crashes often involve several vehicles and disputed fault, and insurers routinely try to shift fault onto the injured person. The firm investigates and gathers the evidence so your share of fault is set accurately.",
  },
  {
    question: 'What are common personal injury scenarios in Franklin County?',
    answer:
      'Car and truck crashes on Columbus interstates and city streets are the most common. Slip and fall cases at commercial properties, shopping centers, apartment complexes and restaurants across the suburbs are frequent. The firm also handles pedestrian and bicycle accidents, dog bites under ORC 955.28, rideshare accidents, construction zone injuries and wrongful death cases for Franklin County clients.',
  },
  {
    question: 'What should I do after a car accident in Columbus or the Columbus suburbs?',
    answer:
      "(1) Get medical care right away, even for injuries that seem minor: concussion and internal injuries often show up after the adrenaline wears off. (2) Photograph the vehicles, the road, signs and your injuries. (3) Collect witness names, phone numbers and emails. (4) File a police report. (5) Do not give a recorded statement to the other driver's insurer before talking to an attorney. (6) Contact Jwayyed Law LLC as soon as you can, so the claim and the evidence are preserved.",
  },
  {
    question: 'What is UM/UIM coverage, and why does it matter in the Columbus area?',
    answer:
      'Uninsured/underinsured motorist (UM/UIM) coverage, governed by Ohio law including ORC 3345.21, pays you from your own auto policy when the at-fault driver has no insurance or not enough to cover your injuries. Columbus has a significant uninsured driver population, so if an uninsured driver hits you anywhere in Franklin County, your own UM/UIM policy may be your most important source of recovery. The firm pursues UM/UIM claims so your insurer pays what it owes.',
  },
  {
    question: 'Where are personal injury lawsuits filed in Franklin County?',
    answer:
      "Most are filed at the Franklin County Common Pleas Court, 369 S. High St, Columbus, OH 43215. Smaller claims may be filed in Franklin County Municipal Court or one of the area's other municipal courts, depending on the amount and the location. Jwayyed Law LLC is based in Columbus and knows Franklin County's courts, procedures and local rules.",
  },
];

const RELATED = [
  { href: '/personal-injury', title: 'Personal injury in Ohio', subtitle: 'The firm’s injury practice statewide' },
  { href: '/personal-injury/car-accidents', title: 'Car accidents', subtitle: 'Claims after a crash' },
  { href: '/personal-injury/truck-accidents', title: 'Truck accidents', subtitle: 'FMCSA rules and carrier liability' },
  { href: '/personal-injury/slip-and-fall', title: 'Slip and fall', subtitle: 'Injuries on someone else’s property' },
  { href: '/personal-injury/dog-bites', title: 'Dog bites', subtitle: 'Strict liability under ORC 955.28' },
  { href: '/personal-injury/wrongful-death', title: 'Wrongful death', subtitle: 'Claims for the family' },
];

export default function PersonalInjuryFranklinCountyPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Personal Injury in Franklin County", "serviceType": "Personal Injury", "areaServed": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/personal-injury-franklin-county"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal injury claims in Franklin County"
        description="Ohio gives you two years from the injury to file suit, and Franklin County cases are usually filed at the Court of Common Pleas in Columbus."
      />

      <KeyFacts
        facts={[
          { figure: '2 years', label: 'to file most personal injury claims under ORC 2305.10' },
          { figure: '1 year', label: 'statute of limitations for medical malpractice, with a four-year repose period' },
          { figure: '50%', label: 'share of fault at or above which Ohio bars recovery (ORC 2315.33)' },
        ]}
      />

      <Section
        title="Where a Franklin County injury case is filed"
        intro={<p>Franklin County is Ohio&rsquo;s most populous county and where Jwayyed Law LLC is based.</p>}
      >
        <FactTable
          title="Franklin County Court of Common Pleas"
          rows={[
            { label: 'Address', value: '369 S. High Street, Columbus, OH 43215' },
            { label: 'What it hears', value: 'Most personal injury lawsuits arising in Franklin County.' },
            { label: 'Smaller claims', value: 'May go to Franklin County Municipal Court or another municipal court in the county, depending on the amount and location.' },
          ]}
        />
        <p>
          The firm represents injured people in Columbus and its suburbs, including Dublin, Westerville, Hilliard, Gahanna, Grove City,
          Reynoldsburg, Worthington, Bexley and Upper Arlington, in car and truck accidents, slip and fall and premises liability,
          pedestrian and bicycle injuries, dog bites and wrongful death. The two-year deadline under ORC 2305.10 is firm, and courts do
          not extend it. Work starts on evidence and damages as soon as the firm is retained. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <Section title="Car and truck accidents on Columbus roads" tone="ice">
        <p>
          Columbus&rsquo;s highways (I-270, I-71, I-70, I-670, US-33 and SR-315) carry heavy commuter traffic, commercial trucks and
          constant construction. Rear-end collisions on the I-270 outer belt, sideswipes at I-71 interchanges and intersection crashes in
          city neighborhoods are common. In Dublin, Westerville, Hilliard and Reynoldsburg, intersection and rear-end crashes cluster on
          SR-161, US-23 and other busy arterials.
        </p>
        <p>
          Fault allocation under ORC 2315.33 is often the central fight. Insurers routinely try to assign partial fault to the injured
          person to cut or eliminate compensation. The firm gathers police reports, traffic camera footage, electronic data from commercial
          vehicles and accident reconstruction evidence to establish who was responsible and by how much. When a commercial truck is
          involved, federal FMCSA regulations and hours-of-service logs add further routes to carrier and driver liability.
        </p>
      </Section>

      <Section title="Slip and fall and premises liability">
        <p>
          Shopping centers, restaurant strips, apartment complexes, office parks and stores across Columbus and the suburbs produce many
          premises liability claims. Ohio property owners owe lawful visitors reasonable care. An owner who leaves a wet floor unmarked,
          lets ice and snow build up at an entrance, leaves cracked pavement unrepaired or keeps broken fixtures in use is responsible for
          the resulting injuries under Ohio common law and ORC 2305.10.
        </p>
        <Steps
          steps={[
            { title: 'Preservation letters', body: 'Sent right away, because surveillance footage is often overwritten within days.' },
            { title: 'Records', body: 'Inspection logs, maintenance records and prior incident reports that show the owner knew of the hazard.' },
            { title: 'Standard of care', body: 'The property condition measured against the applicable standard, whether the fall was at a Columbus grocery store, a Dublin office complex, a Hilliard apartment building or a Westerville restaurant.' },
          ]}
        />
      </Section>

      <Section title="Dog bites and UM/UIM claims" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Dog bites under ORC 955.28',
              body: 'Ohio imposes strict liability on dog owners: the owner is liable whether or not the dog had bitten before or shown any danger, and you do not need to prove negligence. ORC 955.28(B) allows recovery of all damages the dog caused, including medical expenses, lost wages and pain and suffering. Dense residential areas in Columbus, Westerville, Upper Arlington and Grove City produce many of these cases.',
            },
            {
              title: 'Uninsured and underinsured drivers',
              body: 'When the at-fault driver has no insurance or not enough, your own UM/UIM coverage becomes the main source of recovery. Ohio law requires insurers to offer UM/UIM coverage, and many Columbus-area drivers carry it without knowing when it applies. The firm identifies and pursues these claims against your own carrier, including arbitration when the insurer will not pay full value.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a Franklin County injury claim">
        <PointGrid
          points={[
            { title: 'Investigates fault', body: 'Police reports, camera footage, vehicle data and reconstruction evidence.' },
            { title: 'Preserves evidence', body: 'Preservation letters and records requests before footage and logs disappear.' },
            { title: 'Values the claim', body: 'Every part of your damages, including long-term care needs and the effect on your work.' },
            { title: 'Pursues every source', body: 'The at-fault driver’s insurer, commercial carriers and your own UM/UIM coverage.' },
          ]}
        />
        <p>
          Jwayyed Law LLC handles personal injury cases on a contingency fee basis. Call <a href="tel:6142855482">(614) 285-5482</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link>. Read more about the firm&rsquo;s{' '}
          <Link href="/personal-injury">personal injury practice</Link> throughout Ohio.
        </p>
      </Section>

      <Section title="Related injury pages" tone="ice">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
