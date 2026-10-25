import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';
import { FCMC } from '@/data/franklin-county-reference';

export const metadata: Metadata = {
  title: 'First OVI Defense Attorney Columbus Ohio',
  description:
    'A first OVI in Columbus goes to Franklin County Municipal Court: 3 days jail or DIP, a $565 to $1,075 fine and a 30-day window to appeal the ALS.',
  keywords: [
    'first OVI Columbus Ohio',
    'first offense DUI Columbus',
    'Columbus first OVI lawyer',
    'first OVI defense Columbus',
    'first OVI penalty Ohio 2025',
    'Franklin County first OVI attorney',
  ],
  openGraph: {
    title: 'First OVI Defense Attorney Columbus Ohio | Jwayyed Law LLC',
    description: 'Penalties, the 30-day ALS appeal and defenses for a first OVI at Franklin County Municipal Court.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/first-ovi-columbus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/first-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'First OVI in Columbus', href: '/locations/franklin-county/first-ovi-columbus' },
];

const faqs = [
  {
    question: 'What are the mandatory penalties for a first OVI in Columbus?',
    answer:
      'Under R.C. 4511.19 and HB 37 (effective April 9, 2025), a first low-tier OVI (BAC 0.08% to 0.169%) carries a mandatory minimum of 3 days in jail or 3 days in a certified Driver Intervention Program, a fine of $565 to $1,075, a license suspension of 1 to 3 years and a $315 reinstatement fee. A high-tier OVI (BAC 0.17% or more) raises the minimum to 6 days: 3 days in jail plus a 3-day DIP, or 6 days in jail if the DIP is unavailable. A judge cannot go below these minimums.',
  },
  {
    question: 'Can the 15-day hard suspension be waived for a first Columbus OVI?',
    answer:
      'Yes. HB 37 allows Franklin County Municipal Court to waive the 15-day hard suspension before limited driving privileges when a first-time defendant agrees to install a certified ignition interlock device. A first offender who accepts an interlock may be able to drive to work, school and medical appointments soon after the arrest. Under prior law, the 15-day wait came before any privileges.',
  },
  {
    question: 'What is a Driver Intervention Program and how does it work in Columbus?',
    answer:
      'A certified Driver Intervention Program (DIP) is a 3-day alcohol education and treatment program that Ohio courts can accept in place of 3 days in jail for a first low-tier OVI. It is held at certified facilities and must be finished within the time the court sets. Franklin County Municipal Court regularly accepts DIP completion in place of jail for first offenders. The firm looks at whether a DIP fits your case and helps you find a certified program.',
  },
  {
    question: 'What is the ALS and why is the 30-day deadline critical for a Columbus first OVI?',
    answer:
      'The Administrative License Suspension (ALS) is a civil action that starts at the moment of the OVI arrest and runs separately from the criminal case. You have 30 days from the arrest to appeal it at Franklin County Municipal Court. Miss the deadline and you lose the right to contest the suspension for good. The firm files the appeal, asks for a stay so you can keep driving while it is pending, and checks whether every procedural requirement of ORC 4511.191 was met.',
  },
  {
    question: 'Can a first OVI in Columbus be reduced to reckless operation?',
    answer:
      'In some cases, yes. A first OVI can be reduced by plea agreement to reckless operation under R.C. 4511.20 (a "wet reckless"). Reckless operation has no mandatory minimum jail, and unlike an OVI it can be expunged under ORC 2953.32 after the waiting period. Whether it is available depends on the facts of your case and on the prosecutor at Franklin County Municipal Court.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus first OVI?',
    answer:
      'Three things in a first Columbus OVI need early action: the 30-day ALS appeal deadline, whether a DIP can replace jail, and whether a reduction to reckless operation is possible. Jwayyed Law LLC appears regularly at Franklin County Municipal Court and handles first OVI cases from the ALS appeal to the final resolution. Call (614) 285-5482 before your arraignment.',
  },
];

const RELATED = [
  { href: '/locations/franklin-county/ovi-dui-defense-columbus', title: 'OVI defense in Columbus', subtitle: 'Every OVI charge heard at Franklin County Municipal Court' },
  { href: '/locations/franklin-county/second-ovi-columbus', title: 'Second OVI in Columbus', subtitle: 'What a prior within 10 years changes' },
  { href: '/locations/franklin-county/high-tier-ovi-columbus', title: 'High-tier OVI in Columbus', subtitle: 'A BAC of 0.17% or more' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
  { href: '/ovi-dui-defense/first-ovi', title: 'First OVI in Ohio', subtitle: 'The statewide rules for a first offense' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving to work and school during a suspension' },
];

export default function ColumbusFirstOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: First OVI Defense in Columbus", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/first-ovi-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="First OVI defense in Columbus"
        description="A first OVI arrest in Columbus is heard at Franklin County Municipal Court. The license suspension starts at arrest, and you have 30 days to appeal it."
      />

      <KeyFacts
        facts={[
          { figure: '30 days', label: 'from arrest to appeal the ALS at Franklin County Municipal Court' },
          { figure: '3 days', label: 'mandatory minimum in jail or a Driver Intervention Program (low tier)' },
          { figure: '$565 to $1,075', label: 'fine range for a first OVI under HB 37' },
          { figure: '1 to 3 years', label: 'court-ordered license suspension' },
        ]}
      />

      <Section
        title="Where a first Columbus OVI is heard"
        intro={
          <p>
            An OVI arrest in Columbus goes to {FCMC.name}. Both the criminal case and the ALS appeal are filed there.
          </p>
        }
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'The OVI charge, the ALS appeal and requests for limited driving privileges.' },
          ]}
        />
        <p>
          For many Columbus residents a first OVI is their first time in a criminal court. Ohio Revised Code 4511.19, revised by
          HB 37 effective April 9, 2025, still sets mandatory minimums that the judge cannot go below, even for a first offense.
          Jwayyed Law LLC appears regularly at Franklin County Municipal Court. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a> soon after the arrest: the ALS appeal deadline is 30 days from that date.
        </p>
      </Section>

      <Section title="First OVI penalties under HB 37" tone="ice">
        <p>HB 37 revised the mandatory minimums effective April 9, 2025. Your BAC decides which tier applies.</p>
        <FactTable
          title="Low-tier first OVI (BAC 0.08% to 0.169%)"
          rows={[
            { label: 'Jail', value: '3 consecutive days, or 3 days in a certified Driver Intervention Program instead.' },
            { label: 'Fine', value: '$565 to $1,075.' },
            { label: 'License', value: '1 to 3 years suspension; $315 reinstatement fee.' },
          ]}
        />
        <FactTable
          title="High-tier first OVI (BAC 0.17% or above)"
          rows={[
            { label: 'Jail', value: '6 days: 3 days in jail plus a 3-day DIP, or 6 days in jail if the DIP is unavailable.' },
            { label: 'Fine', value: '$565 to $1,075.' },
            { label: 'License', value: '1 to 3 years suspension.' },
          ]}
        />
        <h3>Driving again after a first OVI</h3>
        <p>
          HB 37 lets a first-time defendant who agrees to a certified ignition interlock (a breath-testing device installed in the
          vehicle) have the 15-day hard suspension waived before limited driving privileges. That can mean driving to work, school and
          medical appointments soon after the arrest instead of waiting out the hard suspension.
        </p>
      </Section>

      <Section title="The ALS appeal comes first">
        <p>
          The Administrative License Suspension takes effect when the officer takes your license and serves the notice, before any court
          date or conviction. You have 30 days from the date of arrest to file an appeal in Franklin County Municipal Court, and the
          deadline cannot be extended.
        </p>
        <Steps
          steps={[
            { title: 'File the appeal', body: 'Within 30 days of the arrest, with a request to stay the suspension so you can keep driving.' },
            { title: 'Test the procedure', body: 'The appeal asks whether every requirement of ORC 4511.191 was met.' },
            { title: 'Defend the criminal case', body: 'Arraignment, discovery and motions on the stop and the testing follow in the same court.' },
          ]}
        />
      </Section>

      <Section title="Defenses to a first Columbus OVI" tone="ice">
        <p>
          The defense starts with the stop and works through each piece of evidence. The firm gets the body-cam and dash-cam footage,
          the breathalyzer maintenance records and the blood test documents before weighing any offer.
        </p>
        <PointGrid
          points={[
            { title: 'The traffic stop', body: 'Whether the officer had a lawful basis to stop you under the Fourth Amendment.' },
            { title: 'Field sobriety tests', body: 'Whether the officer gave them the way NHTSA requires, checked against the body-cam footage.' },
            { title: 'Breath and blood tests', body: 'Breathalyzer calibration and the chain of custody for a blood sample.' },
            { title: 'A BAC near the line', body: 'Close to 0.08% or near 0.17%, rising BAC and the reliability of the instrument can decide the tier or the case.' },
            { title: 'Reckless operation', body: 'When the BAC evidence is strong but other parts of the case are weak, a reduction may be available.' },
            { title: 'Diversion', body: 'For first-time defendants with no prior record and mitigating facts, diversion is occasionally available at Franklin County Municipal Court.' },
          ]}
        />
      </Section>

      <Section title="What a conviction costs beyond the sentence">
        <p>
          OVI convictions under R.C. 4511.19 cannot be expunged in Ohio, so a first conviction stays on background checks for jobs,
          housing and professional licenses indefinitely. After reinstatement you will need SR-22 insurance, and premiums can triple or
          quadruple. Nurses, teachers, attorneys, financial advisers and others in regulated fields may have to report the conviction to
          a licensing board.
        </p>
        <p>
          The 10-year lookback keeps a first conviction relevant for a decade. A second OVI within 10 years doubles the mandatory
          minimum and extends the license suspension to 1 to 7 years.
        </p>
      </Section>

      <Section title="What the firm does on a first Columbus OVI" tone="ice">
        <PointGrid
          points={[
            { title: 'ALS appeal', body: 'Filed within 30 days, with a stay of the suspension requested.' },
            { title: 'Traffic stop review', body: 'A Fourth Amendment analysis of the basis for the stop.' },
            { title: 'Field sobriety tests', body: 'NHTSA compliance compared against the body-cam footage.' },
            { title: 'Breathalyzer records', body: 'Subpoenas for the maintenance and calibration records.' },
            { title: 'DIP and interlock', body: 'Advice on a Driver Intervention Program in place of jail, and on an interlock to waive the 15-day hard suspension.' },
            { title: 'Reckless operation', body: 'Pursuing an R.C. 4511.20 plea that keeps expungement possible.' },
          ]}
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>.
        </p>
      </Section>

      <Section title="Related Columbus OVI pages">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
