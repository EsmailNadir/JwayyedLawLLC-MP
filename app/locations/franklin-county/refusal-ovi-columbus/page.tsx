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
  title: 'Columbus OVI Refusal Defense Attorney',
  description:
    'Refused the breath or blood test in Columbus? A first refusal brings a 1-year ALS and higher OVI minimums. You have 30 days to appeal.',
  keywords: ['Columbus OVI refusal lawyer', 'refused breath test Columbus Ohio', 'implied consent OVI Columbus', 'Columbus DUI refusal attorney', 'OVI refusal Franklin County defense'],
  openGraph: {
    title: 'Columbus OVI Refusal Defense Attorney | Jwayyed Law LLC',
    description: 'The 1-year refusal ALS, the appeal and the defense of a refusal OVI at Franklin County Municipal Court.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/refusal-ovi-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/refusal-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'OVI Refusal in Columbus', href: '/locations/franklin-county/refusal-ovi-columbus' },
];

const faqs = [
  {
    question: 'What happens when you refuse a breath test in Columbus?',
    answer:
      "Under Ohio's implied consent law (ORC 4511.191), refusing a breath, blood or urine test after an OVI arrest triggers an immediate Administrative License Suspension: 1 year for a first refusal, 2 years for a second refusal within 10 years, 3 years for a third. The refusal ALS is longer than the ALS after a failed test and has a longer hard suspension before limited privileges. Refusing does not make the OVI charge go away: the Columbus Division of Police or the prosecutor will rely on the officer's observations and the field sobriety test results.",
  },
  {
    question: 'Does refusing the breath test in Columbus help or hurt your OVI case?',
    answer:
      "Both. Refusing removes the BAC evidence, often the prosecution's strongest proof, but the OVI charge can still go forward on the officer's observations, the field sobriety tests and any other evidence. In exchange, you face a longer ALS and higher mandatory minimums on the criminal charge. The firm weighs how the refusal affects both the ALS and the criminal case.",
  },
  {
    question: 'What are the enhanced OVI penalties for a Columbus refusal?',
    answer:
      'Under R.C. 4511.19(A)(2), a first OVI with a refusal carries higher mandatory minimums than a standard first OVI: 6 days in jail (or 3 days in jail plus 3 days in a DIP) instead of 3 days. Fines stay at $565 to $1,075 and the suspension at 1 to 3 years. In effect, a refusal is treated like a high-tier OVI for the mandatory minimum.',
  },
  {
    question: 'Can the 1-year refusal ALS be appealed in Columbus?',
    answer:
      'Yes. You can appeal it at Franklin County Municipal Court within 30 days of the arrest, the same deadline as any other ALS. Refusal appeals usually challenge whether the officer properly advised you of the consequences of refusing under ORC 4511.191(B)(2), whether the refusal was voluntary and unambiguous, and whether the procedural requirements were met. A successful appeal can reduce or end the 1-year suspension.',
  },
  {
    question: 'Can an OVI refusal case be won without BAC evidence?',
    answer:
      "Yes. Without a BAC reading the prosecution has to rely on the officer's observations and the field sobriety tests, which are easier to contest. If the stop was invalid, the tests were given improperly, or the observations do not prove the charge beyond a reasonable doubt, the case can be won or reduced. The defense is built around challenging that subjective evidence.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus OVI refusal case?',
    answer:
      "A refusal means a longer ALS, higher criminal penalties and a defense that has to work without BAC evidence. Jwayyed Law LLC files refusal ALS appeals within the 30-day deadline, challenges whether the officer gave the required advisory, and builds the criminal defense around the field sobriety evidence and the officer's observations. Call (614) 285-5482.",
  },
];

const RELATED = [
  { href: '/locations/franklin-county/ovi-dui-defense-columbus', title: 'OVI defense in Columbus', subtitle: 'Every OVI charge heard at Franklin County Municipal Court' },
  { href: '/locations/franklin-county/first-ovi-columbus', title: 'First OVI in Columbus', subtitle: 'Penalties and the ALS appeal for a first offense' },
  { href: '/locations/franklin-county/high-tier-ovi-columbus', title: 'High-tier OVI in Columbus', subtitle: 'A BAC of 0.17% or more' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
  { href: '/ovi-dui-defense/refusal-ovi', title: 'Refusal OVI in Ohio', subtitle: 'The statewide rules' },
];

export default function ColumbusRefusalOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: OVI Refusal Defense in Columbus", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/refusal-ovi-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI refusal defense in Columbus"
        description="Refusing the breath or blood test after a Columbus OVI arrest brings a 1-year license suspension for a first refusal. You have 30 days to appeal it."
      />

      <KeyFacts
        facts={[
          { figure: '1 year', label: 'ALS for a first refusal (2 years for a second within 10 years, 3 years for a third)' },
          { figure: '30 days', label: 'from arrest to appeal the ALS at Franklin County Municipal Court' },
          { figure: '6 days', label: 'mandatory minimum for a first OVI with a refusal, instead of 3' },
        ]}
      />

      <Section
        title="Where a Columbus refusal case is heard"
        intro={<p>The refusal ALS appeal and the OVI charge are both handled at {FCMC.name}.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'The OVI charge and the refusal ALS appeal.' },
          ]}
        />
        <p>
          Refusing the test removes the BAC evidence but not the charge. The Columbus Division of Police and Franklin County prosecutors
          routinely go forward on refusal cases using the officer&rsquo;s observations, the field sobriety results and dash-cam and
          body-cam footage. Call <a href="tel:6142855482">(614) 285-5482</a>: the ALS appeal deadline is 30 days.
        </p>
      </Section>

      <Section title="What a refusal costs" tone="ice">
        <p>
          Ohio Revised Code 4511.191 sets up implied consent: anyone who drives in Ohio consents to chemical testing after a lawful OVI
          arrest. Refusing brings its own suspension and raises the criminal minimums.
        </p>
        <FactTable
          title="Refusal ALS (ORC 4511.191)"
          rows={[
            { label: 'First refusal', value: '1 year.' },
            { label: 'Second refusal within 10 years', value: '2 years.' },
            { label: 'Third refusal', value: '3 years.' },
            { label: 'Compared with a failed test', value: '1 year for a refusal against 90 days, with a longer hard suspension before limited privileges.' },
            { label: 'Appeal', value: 'At Franklin County Municipal Court within 30 days of arrest, with a request to stay the suspension.' },
          ]}
        />
        <FactTable
          title="First OVI with a refusal (R.C. 4511.19(A)(2))"
          rows={[
            { label: 'Jail', value: '6 days mandatory: 3 days in jail plus a 3-day DIP, or 6 days in jail if no DIP is available. A standard first OVI is 3 days.' },
            { label: 'Fine', value: '$565 to $1,075.' },
            { label: 'License', value: '1 to 3 years.' },
          ]}
          note="The refusal can also be used as evidence of guilt at trial."
        />
        <p>
          The trade is losing the BAC evidence, which the prosecution would otherwise lead with. Whether that helps you depends on the
          strength of the rest of the evidence, and the firm looks at the whole picture before advising on strategy.
        </p>
      </Section>

      <Section title="The refusal ALS appeal">
        <p>
          The appeal is filed in Franklin County Municipal Court within 30 days of arrest and follows the same procedure as any ALS
          appeal. The grounds differ.
        </p>
        <Steps
          steps={[
            {
              title: 'The advisory',
              body: 'Whether the officer gave the warning ORC 4511.191(B)(2) requires about the consequences of refusing, before the refusal can trigger the longer ALS.',
            },
            {
              title: 'The refusal itself',
              body: 'Whether it was a clear refusal, or hesitation, a request to speak with a lawyer, or an attempt to comply that the officer mischaracterized.',
            },
            { title: 'The paperwork', body: 'Whether every administrative prerequisite, including proper completion of the forms, was met.' },
          ]}
        />
        <p>A successful appeal can reduce or end the 1-year suspension and restore driving while the criminal case is pending.</p>
      </Section>

      <Section title="Defending a refusal OVI without BAC evidence" tone="ice">
        <p>
          Without a BAC reading, the prosecution relies on what the officer saw and the field sobriety tests. Those tests are subjective,
          and departures from NHTSA standards, poor surface conditions, medical conditions and the officer&rsquo;s credibility can all be
          challenged.
        </p>
        <PointGrid
          points={[
            { title: 'The video', body: 'The firm gets all body-cam and dash-cam footage and checks the tests second by second against NHTSA standards.' },
            { title: 'The report', body: "Whether the officer's written observations match what the video shows." },
            {
              title: 'The refusal at trial',
              body: 'Ohio law allows the refusal as evidence, and Columbus prosecutors routinely argue it shows consciousness of guilt. The firm prepares rebuttal evidence and jury instruction arguments, including your actual condition at the stop and other reasons for refusing.',
            },
            { title: 'The ALS', body: 'Appeals filed right away, with a stay of the suspension requested.' },
          ]}
        />
      </Section>

      <Section title="What a refusal conviction means later">
        <p>
          A refusal OVI conviction carries every consequence of an OVI, plus the refusal on your driving record. OVI convictions under
          R.C. 4511.19 cannot be expunged in Ohio, so it will appear on background checks and driving record reports indefinitely.
          Insurance rates typically double or triple, some high-risk insurers decline to renew, and the SR-22 requirement after
          reinstatement adds cost for years. The 1-year refusal ALS alone can cut off your way to work, particularly in Columbus suburbs
          with limited public transit.
        </p>
        <p>
          People in licensed fields (healthcare, education, law, financial services, real estate) must disclose an OVI conviction to
          Ohio licensing boards, and the refusal may draw more scrutiny in a character and fitness review. A first conviction also starts
          the 10-year lookback: a second OVI within 10 years doubles the mandatory minimum and extends the suspension. For a first-time
          defendant, those long-term costs are the reason to contest a refusal charge before accepting a plea.
        </p>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>. The 30-day ALS
          deadline is the same after a refusal.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
