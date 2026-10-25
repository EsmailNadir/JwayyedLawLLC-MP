import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Athens County OVI Attorney',
  description:
    'OVI/DUI defense at Athens Municipal Court for Athens, Nelsonville, The Plains and Albany: HB 37 penalties and the 30-day ALS appeal. Call (614) 285-5482.',
  keywords: ['OVI defense Athens County', 'DUI attorney Athens Municipal Court', 'Athens County OVI lawyer', 'Athens DUI defense'],
  openGraph: {
    title: 'Athens County OVI Attorney | Jwayyed Law LLC',
    description: 'OVI defense at Athens Municipal Court: penalties under HB 37, the 30-day ALS appeal and defenses.',
    url: 'https://www.jjlawohio.com/locations/athens-county/ovi-dui-defense-athens-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/athens-county/ovi-dui-defense-athens-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Athens County', href: '/locations/athens-county' },
  { label: 'OVI/DUI Defense - Athens Municipal Court', href: '/locations/athens-county/ovi-dui-defense-athens-municipal-court' },
];

const faqs = [
  {
    question: 'What are the penalties for OVI in Athens Municipal Court?',
    answer:
      'Athens Municipal Court applies state law, Ohio Revised Code 4511.19, and the penalties depend on the offense level. A first OVI carries 3-180 days in jail (3 days mandatory minimum), fines of $565-$1,075 (the minimum rose under HB 37, effective April 2025) and a 1 to 3 years license suspension. The license reinstatement fee is $315. Later offenses carry higher penalties.',
  },
  {
    question: 'Can I get limited driving privileges in Athens County?',
    answer:
      'Often, yes. Whether limited privileges are available after an OVI suspension depends on the offense level and your circumstances. Privileges may require an ignition interlock device and limit driving to work, school, treatment and other necessary trips. An attorney can check your eligibility and apply for them.',
  },
  {
    question: 'How do I appeal an administrative license suspension in Athens County?',
    answer:
      'File an appeal with the Athens County Municipal Court within 30 days of arrest. The appeal can challenge the suspension on procedural issues, testing procedures or other legal grounds. An attorney can file it, request a stay of the suspension and protect your driving privileges.',
  },
  {
    question: 'What should I do if I am charged with OVI in Athens County?',
    answer:
      'Use your right to remain silent and do not discuss the case without your attorney present. Contact an OVI defense attorney right away: you have only 30 days to appeal the administrative license suspension.',
  },
  {
    question: 'Do I need a local attorney for OVI in Athens County?',
    answer:
      'You can hire any Ohio attorney. An attorney who knows Athens Municipal Court, its procedures and the local prosecutors knows how the court schedules OVI cases, what it expects in filings and how pretrial conferences tend to run.',
  },
  {
    question: 'What is the 30-day ALS appeal deadline and what happens if it is missed in Athens County?',
    answer:
      'Under Ohio Revised Code 4511.191, if you are arrested for OVI in Athens County and refuse a chemical test or test over the legal limit, an administrative license suspension (ALS) takes effect immediately. You have 30 days from the date of arrest to appeal it at Athens Municipal Court. If you miss the deadline, the right to appeal is permanently waived and the suspension runs its full length: one year for a first refusal or 90 days for a first test failure. You also lose the chance to request a stay of the suspension while an appeal is pending.',
  },
  {
    question: 'How does proximity to Ohio University affect OVI enforcement in Athens County?',
    answer:
      'Athens County is home to Ohio University, and Athens Municipal Court handles a large volume of alcohol-related OVI cases tied to the university community. Police in Athens know the busy periods around Ohio University events, football games and the college bar districts, and patrols are often stepped up at those times. Officers making OVI stops in Athens may have a lot of experience with sobriety testing, and prosecutors there handle alcohol cases routinely. A defense attorney who knows how the court handles these cases can look for procedural defenses, challenge the testing and negotiate from that knowledge.',
  },
  {
    question: 'What changed for first OVI offenses under HB 37 effective April 9, 2025?',
    answer:
      'House Bill 37, effective April 9, 2025, changed several rules for first-time OVI offenders statewide, including those charged in Athens Municipal Court. The minimum fine for a first OVI rose from $375 to $565, with a maximum of $1,075. The license reinstatement fee fell from $475 to $315. HB 37 also lets judges waive the 15-day hard suspension before limited driving privileges begin, but only for non-refusal first offenses where the driver has no prior alcohol-related arrests. A first offender who refused the chemical test still serves the 15-day hard suspension before limited privileges.',
  },
];

const RELATED = [
  { href: '/courts/athens-municipal-court', title: 'Athens Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/athens-county', title: 'Athens County', subtitle: 'Every service the firm offers in the county' },
  {
    href: '/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court',
    title: 'Misdemeanor defense in Athens',
    subtitle: 'Open container, disorderly conduct and other charges',
  },
  { href: '/ovi-dui-defense/first-ovi', title: 'First OVI', subtitle: 'Penalties and defenses for a first offense' },
  { href: '/ovi-dui-defense/high-tier-ovi', title: 'High-tier OVI', subtitle: 'A BAC of 0.17% or higher' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving to work and school during a suspension' },
];

export default function AthensOVIDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: OVI/DUI Defense in Athens County',
    serviceType: 'OVI DUI Defense',
    areaServed: { '@type': 'County', name: 'Athens County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/athens-county/ovi-dui-defense-athens-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI defense at Athens Municipal Court"
        description="OVI cases from anywhere in Athens County are heard at Athens Municipal Court in Athens. The license suspension starts at arrest, and you have 30 days to appeal it there."
      />

      <Section
        title="Where an Athens County OVI is heard"
        intro={
          <p>
            Athens Municipal Court is the main court for OVI/DUI cases from Athens, Nelsonville, The Plains, Albany and the rest of
            Athens County in southeastern Ohio.
          </p>
        }
      >
        <FactTable
          title="Athens Municipal Court at a glance"
          rows={[
            { label: 'Address', value: '8 E. Washington St, Athens, OH 45701' },
            { label: 'Hears', value: 'All misdemeanor OVI/DUI cases arising in Athens County' },
            { label: 'Communities', value: 'Athens, Nelsonville, The Plains, Albany and the Ohio University area' },
            { label: 'ALS appeal', value: 'Filed at this court within 30 days of the arrest' },
            { label: 'Hearings', value: 'OVI cases are usually set for arraignment, pretrial conferences and hearings' },
          ]}
        />
        <p>
          The court follows Ohio Revised Code 4511.19 for penalties and procedure, but local practice, prosecutor policy and the
          judge&rsquo;s approach shape how a case resolves. The firm works with the clerk&rsquo;s office and tracks the court&rsquo;s
          filing deadlines and motion requirements.
        </p>
        <h3>Ohio University and OVI enforcement</h3>
        <p>
          Because Ohio University is here, the court handles a large share of alcohol-related OVI cases tied to the university.
          Patrols tend to increase around university events, football games and the bar districts, and the officers and prosecutors
          see these cases often. That makes the details of the stop and the testing worth examining closely.
        </p>
      </Section>

      <Section title="OVI penalties in Athens County" tone="ice">
        <p>Athens County applies the statewide penalties in ORC 4511.19, as updated by HB 37 (effective April 2025).</p>
        <FactTable
          title="First OVI"
          rows={[
            { label: 'Jail', value: '3 days mandatory minimum, or 3 days in a driver intervention program.' },
            { label: 'Fines', value: '$565 to $1,075 (the minimum rose from $375).' },
            { label: 'License', value: '1 to 3 years suspension. Reinstatement fee $315 (reduced from $475).' },
            { label: 'Other orders', value: 'The court may order vehicle immobilization, an ignition interlock device and alcohol/drug treatment.' },
            {
              label: 'Limited privileges',
              value: 'Judges can now waive the 15-day waiting period for first offenders with no prior alcohol arrests.',
            },
          ]}
        />
        <FactTable
          title="Second OVI within 10 years"
          rows={[
            { label: 'Jail', value: '10 days to 6 months (10 days mandatory minimum).' },
            { label: 'Fines', value: '$715 to $1,625 (the minimum rose from $525).' },
            { label: 'License', value: '1 to 7 years suspension; $315 reinstatement fee.' },
            {
              label: 'Mandatory orders',
              value:
                'Vehicle immobilization for 90 days; an ignition interlock device for limited privileges (45-day or 90-day waiting period); alcohol/drug treatment.',
            },
          ]}
        />
        <FactTable
          title="High-tier OVI (BAC 0.17% or higher)"
          rows={[
            { label: 'Jail', value: '6 days mandatory, or 3 days in jail plus 3 days in a driver intervention program, even for a first offense.' },
            { label: 'Fines', value: '$565 to $1,075 (the minimum rose from $375).' },
            { label: 'License', value: '1 to 3 years suspension; $315 reinstatement fee.' },
          ]}
          note="These are mandatory minimums. Negotiation can sometimes lead to reduced penalties or alternative sentencing."
        />
      </Section>

      <Section title="Two cases start at the arrest">
        <p>
          An Athens County OVI arrest opens the criminal case in Athens Municipal Court and an administrative license suspension
          (ALS) through the Ohio Bureau of Motor Vehicles. The ALS starts immediately if you refuse a chemical test or test over the
          legal limit.
        </p>
        <Callout title="30 days to appeal the suspension">
          The ALS appeal must be filed within 30 days of the arrest in Athens County Municipal Court, the court of jurisdiction for
          ALS appeals in this region. The firm files it right away, asks for a stay of the suspension and challenges it on procedure
          and testing. Winning keeps you driving to work and treatment while the criminal case continues.
        </Callout>
        <Steps
          steps={[
            { title: 'ALS appeal', body: 'Filed within 30 days, with a request to stay the suspension.' },
            { title: 'Arraignment', body: 'Your first appearance at Athens Municipal Court.' },
            { title: 'Pretrial conferences', body: 'Evidence review, motions and negotiation with the prosecutor.' },
            { title: 'Resolution or trial', body: 'A negotiated outcome, or trial when the case does not resolve.' },
          ]}
        />
      </Section>

      <Section title="Common OVI defenses" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Breathalyzer challenges',
              body: 'Accuracy, calibration, maintenance records, operator certification and testing procedure. Results can be excluded if procedures were not followed.',
            },
            {
              title: 'Field sobriety tests',
              body: 'These tests are subjective and can be challenged for improper administration, medical conditions or the conditions at the scene.',
            },
            {
              title: 'The traffic stop',
              body: 'If the stop was not based on reasonable suspicion, the evidence that followed may be suppressed.',
            },
            {
              title: 'Miranda violations',
              body: 'Statements can be challenged if Miranda warnings were not given or questioning continued after you invoked the right to remain silent.',
            },
            {
              title: 'Rising BAC',
              body: 'Your BAC may have been below the legal limit while driving and risen above it by the time of the test.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on an Athens County OVI">
        <PointGrid
          points={[
            { title: 'Files the ALS appeal', body: 'Within 30 days, with a request to stay the suspension.' },
            { title: 'Reviews the evidence', body: 'Police reports, breathalyzer records and field sobriety test videos.' },
            { title: 'Files motions', body: 'To suppress evidence, challenge procedures or dismiss charges when appropriate.' },
            { title: 'Negotiates', body: 'With Athens County prosecutors for reduced charges, alternative sentencing or a better plea agreement.' },
            { title: 'Tries the case', body: 'When it cannot be resolved through negotiation.' },
            { title: 'Gets you driving', body: 'Prepares the limited driving privilege application and its requirements.' },
          ]}
        />
        <h3>Limited driving privileges</h3>
        <p>
          Limited privileges may be available after an OVI conviction for work, school, treatment and other necessary trips. They may
          require an ignition interlock device, set times and places you can drive, and ask for proof of employment or treatment
          enrollment.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
