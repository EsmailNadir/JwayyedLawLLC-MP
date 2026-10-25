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
  title: 'Columbus OVI Defense Attorney',
  description:
    'Columbus OVI cases are heard at Franklin County Municipal Court, 375 S. High Street. Penalties under HB 37, the 30-day ALS appeal and defenses.',
  keywords: [
    'Columbus OVI lawyer',
    'Columbus DUI attorney',
    'Columbus OVI defense',
    'Franklin County Municipal Court OVI',
    'Columbus DUI defense attorney',
    'OVI lawyer Columbus Ohio',
    'Columbus Ohio drunk driving lawyer',
  ],
  openGraph: {
    title: 'Columbus OVI Defense Attorney | Jwayyed Law LLC',
    description: 'OVI defense at Franklin County Municipal Court: penalties, the ALS appeal and every OVI charge.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'OVI Defense in Columbus', href: '/locations/franklin-county/ovi-dui-defense-columbus' },
];

const faqs = [
  {
    question: 'Where are Columbus OVI cases heard?',
    answer:
      'OVI arrests in Columbus go to Franklin County Municipal Court, 375 S. High Street, Columbus, OH 43215 (floors 12 to 15), phone (614) 645-8186. It is the busiest municipal court in Ohio, handling tens of thousands of OVI, criminal, traffic and civil cases each year. Every Columbus OVI arraignment, ALS appeal, pretrial hearing and trial happens there. The 30-day ALS appeal deadline runs from the date of arrest and cannot be extended.',
  },
  {
    question: 'What are the OVI penalties in Columbus under HB 37?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI carries a mandatory minimum of 3 days in jail or 3 days in a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. A high-tier OVI (BAC 0.17% or above) carries at least 6 mandatory days. A second OVI within 10 years carries at least 10 consecutive days, fines of $715 to $1,625 and a suspension of 1 to 7 years. The reinstatement fee is $315.',
  },
  {
    question: 'How do I appeal my ALS after an OVI arrest in Columbus?',
    answer:
      'Under ORC 4511.191 you have 30 days from the date of arrest to file an Administrative License Suspension appeal at Franklin County Municipal Court (375 S. High Street). The ALS is separate from the criminal case and takes effect at the arrest. Missing the 30-day deadline forfeits your right to contest the suspension for good. The firm files the appeal once retained and asks for a stay so you can keep driving while it is pending.',
  },
  {
    question: 'What OVI defenses apply in Columbus?',
    answer:
      'Defenses include whether the Columbus Division of Police, the Ohio State Highway Patrol or another agency had reasonable suspicion for the stop; what the body-cam and dash-cam footage shows about the field sobriety tests; whether NHTSA procedures were followed for the HGN, walk-and-turn and one-leg stand tests; the breathalyzer maintenance and calibration records; the chain of custody for a blood draw; and a rising BAC defense when the result is near the threshold.',
  },
  {
    question: 'Can I get limited driving privileges after a Columbus OVI?',
    answer:
      'Yes. Franklin County Municipal Court can grant limited privileges for work, school, medical appointments and other essential driving during an OVI suspension. Under HB 37, a first-time defendant who agrees to a certified ignition interlock may have the standard 15-day hard suspension waived, which allows limited privileges almost right away. The reinstatement fee after an OVI suspension is $315. The firm files the petition and meets the court requirements.',
  },
  {
    question: 'Will an OVI in Columbus affect my professional license?',
    answer:
      "Yes. OVI convictions are reportable to Ohio licensing boards and can lead to investigations by the State Medical Board, the Ohio Board of Nursing, the Ohio Bar Association, the Ohio Real Estate Commission, and the BMV for CDL holders. The firm weighs licensing consequences alongside the criminal case and works toward outcomes, such as a reduction to reckless operation under ORC 4511.20, that limit the long-term effect on your career.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus OVI?',
    answer:
      'Jwayyed Law LLC defends OVI cases throughout Columbus and Franklin County. The firm appears regularly at Franklin County Municipal Court, knows its dockets and the prosecutors who handle OVI cases, and files ALS appeals within the 30-day deadline, which cannot be extended. Call (614) 285-5482 as soon as you can after the arrest.',
  },
];

const CHARGES = [
  { href: '/locations/franklin-county/first-ovi-columbus', title: 'First OVI', subtitle: 'First offense penalties, DIP in place of jail, ALS appeal, ignition interlock' },
  { href: '/locations/franklin-county/second-ovi-columbus', title: 'Second OVI', subtitle: '10-day mandatory minimum, house arrest alternative, vehicle immobilization' },
  { href: '/locations/franklin-county/third-ovi-columbus', title: 'Third OVI', subtitle: '30-day mandatory minimum, vehicle forfeiture, 2 to 12 year suspension' },
  { href: '/locations/franklin-county/felony-ovi-columbus', title: 'Felony OVI', subtitle: 'Fourth or later offense, F4 felony, Common Pleas, mandatory prison' },
  { href: '/locations/franklin-county/high-tier-ovi-columbus', title: 'High-tier OVI (BAC 0.17%+)', subtitle: 'Higher mandatory minimums' },
  { href: '/locations/franklin-county/underage-ovi-columbus', title: 'Underage OVI', subtitle: 'Zero tolerance under R.C. 4511.19(B), 0.02% threshold' },
  { href: '/locations/franklin-county/cdl-ovi-columbus', title: 'CDL and commercial driver OVI', subtitle: 'Federal disqualification, 0.04% threshold' },
  { href: '/locations/franklin-county/ovi-with-accident-columbus', title: 'OVI with an accident', subtitle: 'Aggravated vehicular assault, civil exposure, added charges' },
  { href: '/locations/franklin-county/refusal-ovi-columbus', title: 'Refusal OVI', subtitle: 'Implied consent, 1-year refusal ALS, higher minimums' },
  { href: '/locations/franklin-county/marijuana-ovi-columbus', title: 'Marijuana OVI', subtitle: 'THC per se limits, impairment evidence, the adult-use law' },
];

export default function ColumbusOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: OVI/DUI Defense in Columbus", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI and DUI defense in Columbus"
        description="An OVI arrest in Columbus means a case at Franklin County Municipal Court, 375 S. High Street. The license suspension starts at arrest, and you have 30 days to appeal it."
      />

      <Section title="Find your OVI charge" intro={<p>Each page covers the penalties, the process and the defenses for that charge in Columbus.</p>}>
        <LinkGrid links={CHARGES} />
      </Section>

      <KeyFacts
        facts={[
          { figure: '30 days', label: 'from arrest to appeal the ALS; no extension' },
          { figure: '0.08%', label: 'BAC for a low-tier OVI (0.17% or above is high tier)' },
          { figure: '10 years', label: 'lookback for counting prior OVIs' },
          { figure: '$315', label: 'license reinstatement fee' },
        ]}
      />

      <Section
        title="Franklin County Municipal Court hears Columbus OVI cases"
        tone="ice"
        intro={
          <p>
            The Columbus Division of Police, the Ohio State Highway Patrol and Franklin County Sheriff&rsquo;s deputies all make OVI
            arrests in Columbus. Every one of those cases goes to {FCMC.name}.
          </p>
        }
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: 'Floors 12 to 15.' },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'Judges', value: '14 general division judges and one environmental division judge.' },
            { label: 'What it hears', value: 'Arraignments, ALS appeals, pretrial hearings, motions and trials for every Columbus OVI.' },
          ]}
        />
        <p>
          It is the busiest municipal court in Ohio, with a high-volume docket. Knowing the court&rsquo;s procedural expectations and the
          practices of its prosecutors matters, and the firm appears there regularly.
        </p>
        <h3>Where Columbus OVI stops happen</h3>
        <p>
          Columbus has a dense urban core, nightlife along High Street and the Short North, and highway corridors (I-70, I-71, I-270 and
          SR-315) under constant enforcement. High Street, the Short North, German Village, the Arena District and the neighborhoods
          around Ohio State University produce many late-night stops. Checkpoints and saturation patrols on I-270 and I-71 add more.
        </p>
        <h3>Specialized dockets</h3>
        <p>The court runs three specialized dockets that may offer an alternative to traditional prosecution for some defendants:</p>
        <ul>
          <li>HART Court, a recovery docket for defendants with opioid use disorder.</li>
          <li>MAVS Court, a mental health docket for defendants with serious mental illness.</li>
          <li>CATCH Court, for adult female victims of human trafficking and sexual exploitation.</li>
        </ul>
      </Section>

      <Section title="OVI penalties in Columbus under HB 37">
        <p>
          House Bill 37, effective April 9, 2025, restructured the mandatory minimums under R.C. 4511.19. A judge cannot go below them;
          avoiding them takes a successful defense or a reduced charge.
        </p>
        <FactTable
          title="Penalties by offense (within 10 years)"
          rows={[
            {
              label: 'First, low tier (BAC 0.08% to 0.169%)',
              value: '3 days in jail or a 3-day certified Driver Intervention Program; $565 to $1,075; 1 to 3 years suspension.',
            },
            {
              label: 'First, high tier (BAC 0.17%+)',
              value: '6 days minimum (3 days in jail plus a 3-day DIP, or 6 days in jail if the DIP is unavailable).',
            },
            {
              label: 'Second',
              value: '10 consecutive days; $715 to $1,625; 1 to 7 years suspension; 90-day vehicle immobilization and 90-day plate impound.',
            },
            {
              label: 'Third',
              value: '30 consecutive days; $1,040 to $2,750; 2 to 12 years suspension; criminal forfeiture of the vehicle.',
            },
            {
              label: 'Fourth or later',
              value: 'A fourth-degree felony, heard in the Franklin County Court of Common Pleas instead of the Municipal Court.',
            },
          ]}
          note="The license reinstatement fee is $315. Under HB 37, a first-time defendant who agrees to a certified ignition interlock may have the 15-day hard suspension waived and get limited privileges almost right away."
        />
      </Section>

      <Section title="The 30-day ALS appeal" tone="ice">
        <p>
          At arrest, the officer issues a notice of Administrative License Suspension under ORC 4511.191. Your license is taken on the
          spot, and a 15-day hard suspension begins during which you cannot drive. You have 30 days from the date of arrest to file an ALS
          appeal in Franklin County Municipal Court. There is no extension.
        </p>
        <Steps
          steps={[
            { title: 'File and ask for a stay', body: 'The firm files the appeal once retained and asks for a stay so you can keep driving.' },
            {
              title: 'Procedural challenges',
              body: 'Whether the officer properly advised you of the consequences of refusal or submission under ORC 4511.191(B)(2), whether the device was maintained and certified, and whether the paperwork was filed on time.',
            },
            { title: 'Outcome', body: 'A successful appeal can restore your driving privileges entirely; a partial win shortens the suspension.' },
          ]}
        />
      </Section>

      <Section title="Defending a Columbus OVI">
        <PointGrid
          points={[
            {
              title: 'The traffic stop',
              body: 'The Fourth Amendment requires reasonable articulable suspicion. "Driving too carefully," minor movement within the lane or a brief turn signal does not always meet that standard. An invalid stop suppresses everything gathered after it.',
            },
            {
              title: 'Field sobriety tests',
              body: 'NHTSA sets standards for the HGN, walk-and-turn and one-leg stand tests. Deviations in the instructions, the terrain or the scoring make a test unreliable. The firm compares the recording against those standards frame by frame.',
            },
            { title: 'Breath and blood tests', body: 'Maintenance and calibration records for the breath instrument; chain-of-custody documents and lab records for blood.' },
            { title: 'Rising BAC', body: 'Near 0.08% or 0.17%, your BAC may have been below the threshold while driving and risen by the time of the test.' },
          ]}
        />
      </Section>

      <Section title="What the firm does on a Columbus OVI" tone="ice">
        <PointGrid
          points={[
            { title: 'ALS appeal', body: 'Filed within the 30-day deadline with a stay requested, on procedural and substantive grounds under ORC 4511.191.' },
            { title: 'Stop validity', body: 'A Fourth Amendment analysis of the basis for the stop.' },
            { title: 'Test challenges', body: 'Field sobriety tests against NHTSA standards; breath calibration, blood chain of custody and lab procedures.' },
            { title: 'Limited driving privileges', body: 'A petition for work, school and medical driving during the suspension.' },
            { title: 'Reckless operation', body: 'An R.C. 4511.20 plea that keeps expungement possible.' },
            { title: 'Professional licenses', body: 'Weighing career consequences and limiting licensing board exposure.' },
          ]}
        />
        <p>
          The firm handles each case from the ALS appeal through pretrial motions, hearings and trial if needed, as part of its{' '}
          <Link href="/ovi-dui-defense">OVI and DUI defense practice</Link>. Call <a href="tel:6142855482">(614) 285-5482</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link>.
        </p>
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
