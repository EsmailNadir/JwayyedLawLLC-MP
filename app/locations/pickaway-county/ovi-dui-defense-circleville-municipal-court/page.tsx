import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'OVI Defense Lawyer in Circleville',
  description:
    'OVI/DUI defense at Circleville Municipal Court for Pickaway County, including US 23 stops: HB 37 penalties and the 30-day ALS appeal.',
  keywords: ['OVI defense Pickaway County', 'DUI attorney Circleville Municipal Court', 'Pickaway County OVI lawyer', 'Circleville DUI defense'],
  openGraph: {
    title: 'OVI Defense Lawyer in Circleville | Jwayyed Law LLC',
    description: 'OVI defense at Circleville Municipal Court: penalties under HB 37, the 30-day ALS appeal and defenses.',
    url: 'https://www.jjlawohio.com/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Pickaway County', href: '/courts/pickaway-county' },
  { label: 'OVI/DUI Defense - Circleville Municipal Court', href: '/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court' },
];

const faqs = [
  {
    question: 'What are the penalties for OVI in Circleville Municipal Court?',
    answer:
      'Circleville Municipal Court applies state law, Ohio Revised Code 4511.19, and the penalties depend on the offense level. A first OVI carries 3-180 days in jail (3 days mandatory minimum), fines of $565-$1,075 (the minimum rose under HB 37, effective April 2025) and a 1 to 3 years license suspension. The license reinstatement fee is $315. Later offenses carry higher penalties.',
  },
  {
    question: 'Can I get limited driving privileges in Pickaway County?',
    answer:
      'Often, yes. Whether limited privileges are available after an OVI suspension depends on the offense level and your circumstances. Privileges may require an ignition interlock device and limit driving to work, school, treatment and other necessary trips. An attorney can check your eligibility and apply for them.',
  },
  {
    question: 'How do I appeal an administrative license suspension in Pickaway County?',
    answer:
      'File an appeal with Circleville Municipal Court within 30 days of arrest. The appeal can challenge the suspension on procedural issues, testing procedures or other legal grounds. An attorney can file it, request a stay of the suspension and protect your driving privileges.',
  },
  {
    question: 'What should I do if I am charged with OVI in Pickaway County?',
    answer:
      'Use your right to remain silent and do not discuss the case without your attorney present. Contact an OVI defense attorney right away: you have only 30 days to appeal the administrative license suspension.',
  },
  {
    question: 'Do I need a local attorney for OVI in Pickaway County?',
    answer:
      'You can hire any Ohio attorney. An attorney who knows Circleville Municipal Court, its procedures and the local prosecutors knows how the court schedules OVI cases, what it expects in filings and how pretrial conferences tend to run.',
  },
  {
    question: 'What is the 30-day ALS appeal deadline after a Pickaway County OVI arrest?',
    answer:
      'Under Ohio Revised Code 4511.191, an administrative license suspension (ALS) takes effect immediately on a Pickaway County OVI arrest if you refuse a chemical test or test over the legal limit. You have 30 days from the date of arrest to appeal it at Circleville Municipal Court. If you miss the deadline, the right to appeal is permanently waived and the suspension runs its full length: one year for a first refusal or 90 days for a first test failure. Filing promptly also lets your attorney request a stay of the suspension while the appeal is pending.',
  },
  {
    question: 'What OVI enforcement activity occurs on US 23 in Pickaway County?',
    answer:
      "US 23 is the main north-south corridor through Pickaway County between Columbus and Chillicothe, and it is a known focus of OVI enforcement by the Ohio State Highway Patrol and Pickaway County Sheriff deputies. It carries heavy commuter and commercial traffic, and patrols for impaired drivers increase on weekend nights and holiday weekends. Sobriety checkpoints have been run along the US 23 corridor in the county. Stops on US 23 are often recorded on dashcam, which can be important defense evidence. An attorney can review the dashcam and body camera footage, challenge the basis for the stop and find weaknesses in the prosecution's evidence.",
  },
  {
    question: 'What HB 37 changes apply to first OVI offenses in Circleville Municipal Court?',
    answer:
      'House Bill 37, effective April 9, 2025, changed several rules for first-time OVI defendants in Circleville Municipal Court. The minimum fine for a first OVI rose from $375 to $565, with a maximum of $1,075. The license reinstatement fee fell from $475 to $315. HB 37 also lets judges waive the 15-day hard suspension before limited driving privileges, but only for non-refusal first offenses where the defendant has no prior alcohol-related arrests. First offenders who refused the chemical test are not eligible for the waiver and still serve the 15-day period.',
  },
];

const RELATED = [
  { href: '/courts/circleville-municipal-court', title: 'Circleville Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/pickaway-county', title: 'Pickaway County', subtitle: 'Every service the firm offers in the county' },
  {
    href: '/locations/pickaway-county/criminal-misdemeanor-defense-circleville-municipal-court',
    title: 'Misdemeanor defense in Circleville',
    subtitle: 'Assault, theft, drug and traffic charges',
  },
  { href: '/ovi-dui-defense/first-ovi', title: 'First OVI', subtitle: 'Penalties and defenses for a first offense' },
  { href: '/ovi-dui-defense/high-tier-ovi', title: 'High-tier OVI', subtitle: 'A BAC of 0.17% or higher' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving to work and school during a suspension' },
];

export default function PickawayOVIDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: OVI/DUI Defense in Pickaway County',
    serviceType: 'OVI DUI Defense',
    areaServed: { '@type': 'County', name: 'Pickaway County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI defense at Circleville Municipal Court"
        description="OVI cases from anywhere in Pickaway County, including stops on US 23, are heard at Circleville Municipal Court. You have 30 days from arrest to appeal the license suspension there."
      />

      <Section
        title="Where a Pickaway County OVI is heard"
        intro={
          <p>
            Circleville Municipal Court is the main court for OVI/DUI cases from Circleville, Ashville, Commercial Point, Orient and
            the rest of Pickaway County in central Ohio.
          </p>
        }
      >
        <FactTable
          title="Circleville Municipal Court at a glance"
          rows={[
            { label: 'Address', value: '115 E. Main St, Circleville, OH 43113' },
            { label: 'Hears', value: 'All misdemeanor OVI/DUI cases arising in Pickaway County' },
            { label: 'Communities', value: 'Circleville, Ashville, Commercial Point and Orient' },
            { label: 'ALS appeal', value: 'Filed at this court within 30 days of the arrest' },
            { label: 'Hearings', value: 'OVI cases are usually set for arraignment, pretrial conferences and hearings' },
          ]}
        />
        <p>
          The court follows Ohio Revised Code 4511.19 for penalties and procedure, but local practice, prosecutor policy and the
          judge&rsquo;s approach shape how a case resolves. The firm&rsquo;s attorney previously served as Municipal Prosecutor and
          Assistant Law Director for the City of Circleville, and the firm works with the clerk&rsquo;s office on the court&rsquo;s
          filing deadlines and motion requirements.
        </p>
        <h3>OVI enforcement on US 23</h3>
        <p>
          US 23 runs north and south through the county between Columbus and Chillicothe. The Ohio State Highway Patrol and Pickaway
          County Sheriff deputies patrol it for impaired drivers, especially on weekend nights and holiday weekends, and sobriety
          checkpoints have been run along the corridor. Stops there are often recorded on dashcam, and that footage is one of the
          first things the firm requests.
        </p>
      </Section>

      <Section title="OVI penalties in Pickaway County" tone="ice">
        <p>Pickaway County applies the statewide penalties in ORC 4511.19, as updated by HB 37 (effective April 2025).</p>
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
          A Pickaway County OVI arrest opens the criminal case in Circleville Municipal Court and an administrative license
          suspension (ALS) through the Ohio Bureau of Motor Vehicles. The ALS starts immediately if you refuse a chemical test or test
          over the legal limit.
        </p>
        <Callout title="30 days to appeal the suspension">
          The ALS appeal must be filed within 30 days of the arrest in Circleville Municipal Court, the court of jurisdiction for ALS
          appeals in this region. The firm files it right away, asks for a stay of the suspension and challenges it on procedure and
          testing. Winning keeps you driving to work and treatment while the criminal case continues.
        </Callout>
        <Steps
          steps={[
            { title: 'ALS appeal', body: 'Filed within 30 days, with a request to stay the suspension.' },
            { title: 'Arraignment', body: 'Your first appearance at Circleville Municipal Court.' },
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

      <Section title="What the firm does on a Pickaway County OVI">
        <PointGrid
          points={[
            { title: 'Files the ALS appeal', body: 'Within 30 days, with a request to stay the suspension.' },
            { title: 'Reviews the evidence', body: 'Police reports, breathalyzer records and field sobriety test videos.' },
            { title: 'Files motions', body: 'To suppress evidence, challenge procedures or dismiss charges when appropriate.' },
            { title: 'Negotiates', body: 'With Pickaway County prosecutors for reduced charges, alternative sentencing or a better plea agreement.' },
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
