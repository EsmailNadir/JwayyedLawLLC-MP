import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Butler County OVI Attorney',
  description:
    'OVI/DUI defense in Butler County Area Courts I, II and III and Hamilton Municipal Court, for Hamilton, Oxford and West Chester. Call (614) 285-5482.',
  keywords: ['OVI lawyer Hamilton Ohio', 'DUI attorney Butler County', 'OVI defense Butler County', 'Butler County Area Court OVI', 'Oxford Ohio OVI attorney', 'West Chester OVI lawyer'],
  openGraph: {
    title: 'Butler County OVI Attorney | Jwayyed Law LLC',
    description: 'OVI defense in the Butler County area courts: which court hears your case, HB 37 penalties and the 30-day ALS appeal.',
    url: 'https://www.jjlawohio.com/locations/butler-county/ovi-dui-defense-butler-county-area-courts',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/butler-county/ovi-dui-defense-butler-county-area-courts' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Butler County', href: '/locations/butler-county' },
  { label: 'OVI/DUI Defense - Butler County Area Courts', href: '/locations/butler-county/ovi-dui-defense-butler-county-area-courts' },
];

const faqs = [
  {
    question: 'What are the penalties for a first OVI in Butler County under HB 37?',
    answer:
      'Under Ohio Revised Code 4511.19, as updated by House Bill 37 (effective April 9, 2025), a first-offense OVI in Butler County carries a mandatory minimum of 3 days in jail (or a driver intervention program instead of jail), fines of $565 to $1,075, a license suspension of 1 to 3 years and a $315 license reinstatement fee. A BAC of 0.17% or higher (high-tier OVI) brings higher penalties, and they rise further for second and later offenses. An attorney can challenge the evidence and pursue dismissal or a reduction.',
  },
  {
    question: 'What is the deadline to appeal an administrative license suspension in Butler County?',
    answer:
      'At an OVI arrest in Butler County, the officer usually takes your license, issues a 15-day temporary permit and forwards paperwork that triggers an Administrative License Suspension (ALS) under ORC 4511.191. You have 30 days from the date of arrest to appeal it in the court of jurisdiction: Butler County Area Court I (Oxford), Area II (Hamilton), Area III (West Chester) or Hamilton Municipal Court (700 Hanover St), depending on where the arrest occurred. Missing the deadline waives your right to challenge the ALS. The firm files appeals right away and asks for a stay.',
  },
  {
    question: 'What is a high-tier OVI and what does a BAC of 0.17% or higher mean for my case?',
    answer:
      'Ohio separates standard OVI (BAC of 0.08% to 0.169%) from high-tier OVI (BAC of 0.17% or higher). A high-tier first OVI carries a minimum of 6 days in jail, or 3 days in jail plus 3 days in a driver intervention program (DIP). It also brings more restrictive license suspensions and more obstacles to limited driving privileges, and Butler County Area Courts take readings at that level seriously. The firm reviews the testing procedure, calibration records and chain of custody to challenge the high-tier designation where possible.',
  },
  {
    question: 'What is a driver intervention program (DIP) in Ohio?',
    answer:
      'A Driver Intervention Program (DIP) is a state-certified, multi-day residential program on alcohol and substance use. Under ORC 4511.19, a court may let a first-time OVI defendant attend a DIP instead of serving 3 days in jail (or 3 days of a 6-day high-tier sentence). DIPs typically run 72 hours with evaluation, education sessions and counseling, and completion satisfies the mandatory minimum jail component. Not every defendant qualifies, and the court can require jail instead.',
  },
  {
    question: 'Can the court waive the hard suspension and allow an ignition interlock device instead under HB 37?',
    answer:
      'Yes. House Bill 37, effective April 9, 2025, expanded the court’s authority to waive the mandatory 15-day hard suspension, when no driving is allowed at all, if the defendant agrees to install an ignition interlock device (IID). The IID needs a clean breath sample before the vehicle will start. That gives defendants in Butler County Area Courts and Hamilton Municipal Court a way to avoid a complete driving blackout. Eligibility and terms vary by court and case.',
  },
  {
    question: 'What are standard field sobriety test procedures in Butler County, and can they be challenged?',
    answer:
      "Butler County officers, including the Butler County Sheriff, Hamilton Police, Oxford Police, West Chester Township Police and the Ohio State Highway Patrol, typically give the three NHTSA Standardized Field Sobriety Tests: Horizontal Gaze Nystagmus (HGN), Walk-and-Turn and One-Leg Stand. They are only scientifically reliable when given in strict compliance with NHTSA protocols. Improper instructions, uneven surfaces, poor lighting, officer error or a defendant's medical conditions can all invalidate the results. The firm reviews body camera footage and police reports for departures from procedure.",
  },
  {
    question: 'How does a local attorney help with OVI defense in Butler County courts?',
    answer:
      'Butler County Area Courts I (Oxford), II (Hamilton) and III (West Chester), and Hamilton Municipal Court at 700 Hanover Street, each have their own practices, procedures and judges. Knowing who is presiding, how local prosecutors evaluate OVI cases, what plea offers are typical and how scheduling and motions work in each court shapes the strategy, whether that is a motion to suppress, a negotiated reduction or trial. Jwayyed Law LLC represents OVI defendants in all Butler County courts.',
  },
  {
    question: 'Can an OVI conviction be expunged or sealed in Ohio?',
    answer:
      'No. OVI convictions, including a first offense, cannot be expunged or sealed. Ohio Revised Code 2953.36 excludes them however much time has passed and whatever the rest of your record looks like. The conviction stays permanently on background checks, insurance databases and BMV records, which is why the charge is worth fighting from the start. If the charge is reduced to a non-OVI offense, that offense may be eligible after the waiting period.',
  },
];

const RELATED = [
  { href: '/courts/hamilton-municipal-court', title: 'Hamilton Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/butler-county', title: 'Butler County', subtitle: 'Every service the firm offers in the county' },
  {
    href: '/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts',
    title: 'Misdemeanor defense in Butler County',
    subtitle: 'Charges near Miami University and across the county',
  },
  { href: '/ovi-dui-defense/first-ovi', title: 'First OVI', subtitle: 'Penalties and defenses for a first offense' },
  { href: '/ovi-dui-defense/high-tier-ovi', title: 'High-tier OVI', subtitle: 'A BAC of 0.17% or higher' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving to work and school during a suspension' },
];

export default function ButlerOVIDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: OVI/DUI Defense in Butler County',
    serviceType: 'OVI DUI Defense',
    areaServed: { '@type': 'County', name: 'Butler County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/butler-county/ovi-dui-defense-butler-county-area-courts',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI defense in Butler County"
        description="A Butler County OVI is heard in Area Court I, II or III or Hamilton Municipal Court, depending on where you were arrested. The 30-day suspension appeal goes to the same court."
      />

      <Section
        title="Which court hears your OVI"
        intro={<p>OVI charges in Butler County go to one of four courts, each with its own procedures, judges and local practice.</p>}
      >
        <FactTable
          title="Butler County OVI courts"
          rows={[
            { label: 'Area Court I', value: 'Oxford' },
            { label: 'Area Court II', value: 'Hamilton' },
            { label: 'Area Court III', value: 'West Chester' },
            { label: 'Hamilton Municipal Court', value: '700 Hanover Street, Hamilton' },
          ]}
          note="The court is set by where the arrest occurred. The ALS appeal is filed in that same court."
        />
        <h3>Where Butler County OVI arrests happen</h3>
        <p>
          The I-75 corridor is a high-enforcement zone. The Ohio State Highway Patrol regularly runs traffic enforcement along I-75
          and SR 129 (Princeton Pike), and checkpoints are not uncommon. Oxford, home to Miami University, sees elevated OVI arrests
          during the academic year, often near campus on or around High Street and College Avenue. West Chester Township Police
          actively patrol the SR 129 commercial corridor. More on the firm&rsquo;s{' '}
          <Link href="/ovi-dui-defense">OVI/DUI defense practice</Link> throughout Ohio.
        </p>
      </Section>

      <Section title="OVI penalties under HB 37" tone="ice">
        <p>Penalties follow Ohio Revised Code 4511.19 as updated by HB 37, effective April 9, 2025.</p>
        <FactTable
          title="First OVI"
          rows={[
            { label: 'Jail', value: '3 days mandatory minimum, or a driver intervention program.' },
            { label: 'Fines', value: '$565 to $1,075.' },
            { label: 'License', value: '1 to 3 years suspension; $315 reinstatement fee.' },
            {
              label: 'Hard suspension',
              value: 'The court can waive the 15-day hard suspension if you agree to an ignition interlock device (IID).',
            },
          ]}
        />
        <FactTable
          title="High tier and later offenses"
          rows={[
            { label: 'Standard OVI', value: 'BAC of 0.08% to 0.169%.' },
            { label: 'High tier', value: 'BAC of 0.17% or higher: 6 days minimum jail, or 3 days jail plus 3 days in a driver intervention program.' },
            { label: 'Second and later', value: 'Longer jail terms and mandatory IID requirements.' },
            { label: 'Record', value: 'OVI convictions cannot be expunged (ORC 2953.36).' },
          ]}
        />
      </Section>

      <Section title="The 30-day ALS appeal window">
        <p>
          A Butler County OVI arrest starts the criminal case and an Administrative License Suspension under ORC 4511.191. The BMV
          imposes the ALS on the officer&rsquo;s report, and it takes effect immediately.
        </p>
        <Callout title="Appeal within 30 days in the court of jurisdiction">
          The firm files the appeal promptly, asks for a stay and challenges the suspension on procedural problems, improper implied
          consent advisements or issues with the test.
        </Callout>
      </Section>

      <Section title="What the firm reviews" tone="ice">
        <PointGrid
          points={[
            { title: 'The stop', body: 'Whether the officer had a lawful basis to pull you over.' },
            { title: 'Field sobriety tests', body: 'HGN, Walk-and-Turn and One-Leg Stand against NHTSA protocols, using body camera footage.' },
            { title: 'Chemical testing', body: 'Procedure, calibration records and chain of custody for breath or blood results.' },
            { title: 'Implied consent', body: 'Whether the advisements were given properly.' },
            { title: 'Blood draws', body: 'Chain of custody for any blood sample.' },
            { title: 'DIP and interlock', body: 'Eligibility for a driver intervention program and IID arrangements.' },
          ]}
        />
        <p>
          Contact the firm through <Link href="/contact">the contact page</Link> or call (614) 285-5482.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
