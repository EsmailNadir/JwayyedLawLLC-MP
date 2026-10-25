import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section } from '@/components/practice';
import { FCMC } from '@/data/franklin-county-reference';

export const metadata: Metadata = {
  title: 'Third OVI Defense Attorney Columbus Ohio',
  description:
    'A third OVI within 10 years in Columbus carries 30 days in jail, criminal forfeiture of the vehicle and a 2 to 12 year suspension.',
  keywords: ['third OVI Columbus Ohio', 'third offense DUI Columbus', 'Columbus 3rd OVI lawyer', '3rd OVI defense Columbus', 'third OVI penalty Ohio'],
  openGraph: {
    title: 'Third OVI Defense Attorney Columbus Ohio | Jwayyed Law LLC',
    description: 'Penalties, vehicle forfeiture, the monitoring alternative and prior conviction challenges for a third OVI in Columbus.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/third-ovi-columbus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/third-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Third OVI in Columbus', href: '/locations/franklin-county/third-ovi-columbus' },
];

const faqs = [
  {
    question: 'What are the mandatory penalties for a third OVI in Columbus?',
    answer:
      'A third low-tier OVI within 10 years carries 30 consecutive days in jail (or 15 days plus 55 days of continuous monitoring), fines of $1,040 to $2,750, a license suspension of 2 to 12 years, and criminal forfeiture of the vehicle. A high-tier third OVI (BAC 0.17%+) carries 60 consecutive days (or 30 days plus 110 days of monitoring). Forfeiture, which is permanent, replaces the immobilization that applies to a second offense.',
  },
  {
    question: 'Does a third Columbus OVI stay at Franklin County Municipal Court?',
    answer:
      'Yes. A third OVI within 10 years is still a first-degree misdemeanor and is handled at Franklin County Municipal Court, 375 S. High Street. A fourth OVI within 10 years becomes a fourth-degree felony and must go to the Franklin County Court of Common Pleas. The firm handles both courts for clients facing repeat OVI charges.',
  },
  {
    question: 'What is criminal vehicle forfeiture for a third Columbus OVI?',
    answer:
      'A second OVI brings 90-day immobilization. A third OVI conviction brings criminal forfeiture: the vehicle you were driving at the time is permanently transferred to the state. Hardship exceptions may be available in narrow cases involving innocent co-owners. The firm challenges forfeiture where there are legal grounds, including innocent co-owner claims.',
  },
  {
    question: 'How can the prior convictions be challenged in a Columbus third OVI?',
    answer:
      'For the third-offense minimums and forfeiture to apply, the prosecution must prove two prior qualifying OVI convictions within the 10-year lookback. The firm reviews each prior: its date, the jurisdiction, whether it was an actual OVI under R.C. 4511.19 or an equivalent, and whether the records are complete and accurate. Incomplete records, or an out-of-state conviction that is not an equivalent, can defeat the higher penalties.',
  },
  {
    question: 'What defenses are available for a third Columbus OVI?',
    answer:
      'Every standard OVI defense applies: the validity of the stop, how the field sobriety tests were given, breathalyzer calibration, blood test chain of custody and rising BAC. The firm also checks the prior conviction records and whether the lookback was calculated correctly. Defeating one prior can turn a third offense into a second offense with much lower mandatory minimums.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus third OVI?',
    answer:
      'A third OVI means forfeiture of your vehicle, at least 30 days of mandatory jail and a 2 to 12 year suspension. Jwayyed Law LLC appears at Franklin County Municipal Court and reviews every defense, from the validity of the stop to the accuracy of the prior conviction record. Call (614) 285-5482.',
  },
];

const RELATED = [
  { href: '/locations/franklin-county/ovi-dui-defense-columbus', title: 'OVI defense in Columbus', subtitle: 'Every OVI charge in Franklin County' },
  { href: '/locations/franklin-county/second-ovi-columbus', title: 'Second OVI in Columbus', subtitle: 'If a prior conviction falls away' },
  { href: '/locations/franklin-county/felony-ovi-columbus', title: 'Felony OVI in Columbus', subtitle: 'A fourth OVI within 10 years' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
  { href: '/ovi-dui-defense/third-ovi', title: 'Third OVI in Ohio', subtitle: 'The statewide rules for a third offense' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving with an interlock during a suspension' },
];

export default function ColumbusThirdOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Third OVI Defense in Columbus", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/third-ovi-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Third OVI defense in Columbus"
        description="A third OVI within 10 years carries 30 consecutive days in jail, a 2 to 12 year suspension and criminal forfeiture of the vehicle, whatever your work or family situation."
      />

      <KeyFacts
        facts={[
          { figure: '30 days', label: 'mandatory jail for a low-tier third OVI (60 at high tier)' },
          { figure: '$1,040 to $2,750', label: 'fine range' },
          { figure: '2 to 12 years', label: 'license suspension' },
          { figure: 'Forfeiture', label: 'of the vehicle you were driving' },
        ]}
      />

      <Section
        title="Where a third Columbus OVI is heard"
        intro={<p>A third OVI within 10 years stays a misdemeanor and is handled at {FCMC.name}.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'The OVI charge, the ALS appeal and limited driving privileges.' },
          ]}
        />
        <p>
          The defense challenges the underlying case, checks the prior conviction records and pursues every available option. Jwayyed Law
          LLC handles third OVI cases at Franklin County Municipal Court. Call <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <Section title="Third OVI penalties" tone="ice">
        <FactTable
          title="Low-tier third OVI (BAC 0.08% to 0.169%)"
          rows={[
            { label: 'Jail', value: '30 consecutive days, or 15 days in jail plus 55 days of continuous electronic alcohol monitoring.' },
            { label: 'Fine', value: '$1,040 to $2,750.' },
            { label: 'License', value: '2 to 12 years suspension.' },
            { label: 'Vehicle', value: 'Criminal forfeiture.' },
          ]}
        />
        <FactTable
          title="High-tier third OVI (BAC 0.17%+)"
          rows={[
            { label: 'Jail', value: '60 consecutive days, or 30 days plus 110 days of monitoring.' },
            { label: 'Fine, license, vehicle', value: 'The same fines and suspension, and criminal forfeiture.' },
          ]}
          note="The monitoring alternative is not automatic. The court decides, and the firm argues for it where it fits."
        />
        <h3>Continuous electronic alcohol monitoring</h3>
        <p>
          CEAM uses an ankle bracelet or similar device that tests sweat for alcohol and reports violations. Drinking any alcohol during the
          monitoring period sends you back to jail for the rest of the term. The firm advises on whether CEAM is likely in your case and what
          conditions will apply.
        </p>
      </Section>

      <Section title="Vehicle forfeiture">
        <p>
          A second offense carries only 90-day immobilization. On a third conviction, under ORC 4503.234, the vehicle is seized and the title
          is transferred to the state. An innocent co-owner, such as a spouse on the title, may have a claim that overrides forfeiture, but it
          has to be raised before the forfeiture is completed. The firm files innocent co-owner challenges promptly.
        </p>
      </Section>

      <Section title="Defending a third OVI" tone="ice">
        <PointGrid
          points={[
            {
              title: 'The prior convictions',
              body: 'The firm gets the prior records from Franklin County Municipal Court and any other jurisdiction, checks the dates and offense designations, and looks for errors. If one of the two priors falls outside the 10-year lookback, the charge is a second offense.',
            },
            { title: 'The traffic stop', body: 'The Columbus Division of Police must have had articulable reasonable suspicion.' },
            { title: 'Field sobriety tests', body: 'They must have been given in line with NHTSA standards.' },
            { title: 'Breath and blood tests', body: 'Breath instruments must be calibrated within certified intervals; blood needs an unbroken chain of custody.' },
          ]}
        />
        <p>None of these standards relax because you have prior convictions.</p>
      </Section>

      <Section title="The license after a third OVI">
        <FactTable
          title="Administrative License Suspension (R.C. 4511.191)"
          rows={[
            { label: 'Test over the per se limit', value: 'Two years.' },
            { label: 'Test refusal', value: 'Three years.' },
            { label: 'Appeal', value: 'Within 30 days of the arrest at Franklin County Municipal Court, with a stay requested.' },
          ]}
        />
        <p>
          After the case resolves, a conviction carries a mandatory 2 to 12 year suspension. Limited driving privileges require an ignition
          interlock for the full period, and a failed test, tampering or a missed calibration can cost you those privileges.
        </p>
      </Section>

      <Section title="What a third conviction costs" tone="ice">
        <p>
          Licensing boards treat a third OVI as a pattern of alcohol-related conduct. A 2 to 12 year suspension, compared with 1 to 3 years for
          a first offense, means years of relying on others to get around. For CDL holders it means lifetime federal CDL disqualification.
          Forfeiture takes a major asset and may leave you without a way to work even after limited privileges return.
        </p>
        <p>
          Third OVI convictions are not eligible for expungement under R.C. 2953.32. The conviction stays on your record and counts toward the
          lookback: a fourth OVI within 10 years becomes a felony.
        </p>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>. The ALS appeal must be
          filed within 30 days of arrest.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
