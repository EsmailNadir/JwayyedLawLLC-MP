import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'OVI / DUI Lawyer for Mount Gilead, Ohio',
  description:
    'OVI/DUI defense at Morrow County Municipal Court for Mount Gilead, Cardington and rural US 42 stops: first and second OVI under HB 37.',
  keywords: ['OVI lawyer Mount Gilead Ohio', 'DUI attorney Morrow County', 'OVI defense Morrow County', 'Morrow County Municipal Court OVI'],
  openGraph: {
    title: 'OVI / DUI Lawyer for Mount Gilead, Ohio | Jwayyed Law LLC',
    description: 'OVI defense at Morrow County Municipal Court: penalties under HB 37, the 30-day ALS appeal and defenses.',
    url: 'https://www.jjlawohio.com/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Morrow County', href: '/courts/morrow-county' },
  { label: 'OVI/DUI Defense - Morrow County Municipal Court', href: '/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court' },
];

const faqs = [
  {
    question: 'What are the penalties for OVI in Morrow County Municipal Court?',
    answer:
      'Morrow County Municipal Court applies state law, Ohio Revised Code 4511.19, and the penalties depend on the offense level. A first OVI carries 3-180 days in jail (3 days mandatory minimum), fines of $565-$1,075 (the minimum rose under HB 37, effective April 2025) and a 1 to 3 years license suspension. The license reinstatement fee is $315. Later offenses carry higher penalties.',
  },
  {
    question: 'Can I get limited driving privileges in Morrow County?',
    answer:
      'Often, yes. Whether limited privileges are available after an OVI suspension depends on the offense level and your circumstances. Privileges may require an ignition interlock device and limit driving to work, school, treatment and other necessary trips. An attorney can check your eligibility and apply for them.',
  },
  {
    question: 'How do I appeal an administrative license suspension in Morrow County?',
    answer:
      'File an appeal with the Morrow County Municipal Court within 30 days of arrest. The appeal can challenge the suspension on procedural issues, testing procedures or other legal grounds. An attorney can file it, request a stay of the suspension and protect your driving privileges.',
  },
  {
    question: 'What should I do if I am charged with OVI in Morrow County?',
    answer:
      'Use your right to remain silent and do not discuss the case without your attorney present. Contact an OVI defense attorney right away: you have only 30 days to appeal the administrative license suspension.',
  },
  {
    question: 'Do I need a local attorney for OVI in Morrow County?',
    answer:
      'You can hire any Ohio attorney. An attorney who knows Morrow County Municipal Court, its procedures and the local prosecutors knows how the court schedules OVI cases, what it expects in filings and how pretrial conferences tend to run.',
  },
  {
    question: 'What is the 30-day ALS appeal deadline after a Morrow County OVI arrest?',
    answer:
      'Under Ohio Revised Code 4511.191, an administrative license suspension (ALS) takes effect immediately on a Morrow County OVI arrest if you refuse a chemical test or test over the legal limit. You have 30 days from the date of arrest to appeal it at Morrow County Municipal Court. Missing the deadline permanently waives the right to appeal, and the suspension runs its full length: one year for a first refusal or 90 days for a first test failure. Filing promptly also lets your attorney request a stay of the suspension while the appeal is pending.',
  },
  {
    question: 'How does rural road OVI enforcement on US 42 differ from urban OVI stops?',
    answer:
      'Rural stops on roads like US 42 often involve single-vehicle accidents, farm equipment traffic and long stretches with few traffic signals, which affects how an officer builds reasonable suspicion for a stop. The Ohio State Highway Patrol and Morrow County Sheriff deputies patrol these highways and may run checkpoints or targeted enforcement. Because emergency response times are longer in rural Morrow County, officers may watch closely for impaired driving on these routes. Rural stops also open defense questions: the quality of dashcam footage, whether witnesses are available, and field sobriety tests given on uneven road surfaces.',
  },
  {
    question: 'What are the consequences of a first OVI conviction for rural Morrow County residents who depend on their vehicle for work?',
    answer:
      'A first OVI conviction in Morrow County Municipal Court carries a mandatory license suspension of one to three years under ORC 4511.19, which is hard on rural residents with no public transportation. Many residents drive to work in Mount Gilead, Cardington or neighboring counties. Limited driving privileges may be available under ORC 4510.021, but they restrict driving to purposes such as work, school and medical appointments and may require an ignition interlock device. Under HB 37 (effective April 9, 2025), judges can waive the 15-day hard suspension for non-refusal first offenders, which allows earlier privileges.',
  },
];

const RELATED = [
  { href: '/courts/morrow-county-municipal-court', title: 'Morrow County Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/morrow-county', title: 'Morrow County', subtitle: 'Every service the firm offers in the county' },
  {
    href: '/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court',
    title: 'Misdemeanor defense in Morrow County',
    subtitle: 'Trespass, theft, assault and other charges',
  },
  { href: '/ovi-dui-defense/first-ovi', title: 'First OVI', subtitle: 'Penalties and defenses for a first offense' },
  { href: '/ovi-dui-defense/second-ovi', title: 'Second OVI', subtitle: 'Mandatory jail for a repeat offense' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving to work and school during a suspension' },
];

export default function MorrowOVIDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: OVI/DUI Defense in Morrow County',
    serviceType: 'OVI DUI Defense',
    areaServed: { '@type': 'County', name: 'Morrow County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI defense for Mount Gilead and Morrow County"
        description="OVI cases from Mount Gilead, Cardington and the rest of Morrow County are heard at Morrow County Municipal Court. You have 30 days from arrest to appeal the license suspension there."
      />

      <Section
        title="Where a Morrow County OVI is heard"
        intro={
          <p>
            Morrow County Municipal Court is the main court for OVI/DUI cases from Mount Gilead, Cardington, Edison, Marengo and the
            rest of Morrow County in north-central Ohio.
          </p>
        }
      >
        <FactTable
          title="Morrow County Municipal Court at a glance"
          rows={[
            { label: 'Address', value: '48 E. High St, Mt. Gilead, OH 43338' },
            { label: 'Hears', value: 'All misdemeanor OVI/DUI cases arising in Morrow County' },
            { label: 'Communities', value: 'Mount Gilead, Cardington, Edison and Marengo' },
            { label: 'ALS appeal', value: 'Filed at this court within 30 days of the arrest' },
            { label: 'Hearings', value: 'OVI cases are usually set for arraignment, pretrial conferences and hearings' },
          ]}
        />
        <p>
          The court follows Ohio Revised Code 4511.19 for penalties and procedure, but local practice, prosecutor policy and the
          judge&rsquo;s approach shape how a case resolves. The firm works with the clerk&rsquo;s office and tracks the court&rsquo;s
          filing deadlines and motion requirements.
        </p>
        <h3>Rural stops on US 42</h3>
        <p>
          Most Morrow County OVI stops happen on rural highways such as US 42, patrolled by the Ohio State Highway Patrol and Morrow
          County Sheriff deputies. Long stretches with few signals, farm equipment and uneven shoulders all bear on whether the stop
          was justified and whether field sobriety tests were fair.
        </p>
        <h3>When you depend on your vehicle</h3>
        <p>
          With no public transportation, a 1 to 3 year suspension can cost a rural resident the commute to work in Mount Gilead,
          Cardington or a neighboring county. Limited driving privileges under ORC 4510.021 are often the first thing the firm works
          on.
        </p>
      </Section>

      <Section title="OVI penalties in Morrow County" tone="ice">
        <p>Morrow County applies the statewide penalties in ORC 4511.19, as updated by HB 37 (effective April 2025).</p>
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
          A Morrow County OVI arrest opens the criminal case in Morrow County Municipal Court and an administrative license
          suspension (ALS) through the Ohio Bureau of Motor Vehicles. The ALS starts immediately if you refuse a chemical test or test
          over the legal limit.
        </p>
        <Callout title="30 days to appeal the suspension">
          The ALS appeal must be filed within 30 days of the arrest in Morrow County Municipal Court, the court of jurisdiction for
          ALS appeals in this region. The firm files it right away, asks for a stay of the suspension and challenges it on procedure
          and testing. Winning keeps you driving to work and treatment while the criminal case continues.
        </Callout>
        <Steps
          steps={[
            { title: 'ALS appeal', body: 'Filed within 30 days, with a request to stay the suspension.' },
            { title: 'Arraignment', body: 'Your first appearance at Morrow County Municipal Court.' },
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

      <Section title="What the firm does on a Morrow County OVI">
        <PointGrid
          points={[
            { title: 'Files the ALS appeal', body: 'Within 30 days, with a request to stay the suspension.' },
            { title: 'Reviews the evidence', body: 'Police reports, breathalyzer records and field sobriety test videos.' },
            { title: 'Files motions', body: 'To suppress evidence, challenge procedures or dismiss charges when appropriate.' },
            { title: 'Negotiates', body: 'With Morrow County prosecutors for reduced charges, alternative sentencing or a better plea agreement.' },
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
