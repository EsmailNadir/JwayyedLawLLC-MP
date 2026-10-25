import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'OVI / DUI Lawyer for Fairborn & Xenia',
  description:
    'OVI/DUI defense at Fairborn and Xenia Municipal Courts for Fairborn, Beavercreek, Xenia and Wright-Patterson AFB personnel, under HB 37.',
  keywords: ['OVI lawyer Fairborn Ohio', 'DUI attorney Greene County', 'OVI defense Beavercreek Ohio', 'Fairborn Municipal Court OVI', 'military OVI attorney Ohio'],
  openGraph: {
    title: 'OVI / DUI Lawyer for Fairborn & Xenia | Jwayyed Law LLC',
    description: 'OVI defense in Fairborn and Xenia Municipal Courts, including military consequences near Wright-Patterson AFB.',
    url: 'https://www.jjlawohio.com/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'OVI/DUI Defense - Greene County Courts', href: '/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court' },
];

const faqs = [
  {
    question: 'What are the OVI penalties in Fairborn Municipal Court and Xenia Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction carries 3 to 180 days in jail (a 3-day mandatory minimum or a driver intervention program), fines of $565 to $1,075, and a license suspension of 1 to 3 years. The license reinstatement fee is $315. Fairborn Municipal Court (1 W. Main St, Fairborn) and Xenia Municipal Court (101 N. Detroit St, Xenia) both apply these state minimums, though local judicial practice may differ.',
  },
  {
    question: 'How does an OVI arrest affect military personnel at Wright-Patterson Air Force Base?',
    answer:
      'Military personnel stationed at Wright-Patterson AFB who are charged with OVI in Greene County face two tracks: the Ohio criminal case in Fairborn or Xenia Municipal Court and possible disciplinary action under the Uniform Code of Military Justice (UCMJ). A conviction can cost a security clearance, lead to a reduction in rank or end in discharge. The firm works to limit both the civilian and the military exposure.',
  },
  {
    question: 'How do I appeal an ALS in Greene County?',
    answer:
      'Under ORC 4511.191, you have 30 days from the date of your OVI arrest to file an Administrative License Suspension appeal in the court of jurisdiction: Fairborn Municipal Court or Xenia Municipal Court, depending on where the arrest happened. The ALS takes effect immediately on arrest, and missing the deadline forfeits the right to contest it. The firm files the appeal right away and asks for a stay of the suspension.',
  },
  {
    question: 'Can the 15-day hard suspension be waived in Greene County under HB 37?',
    answer:
      'Yes. HB 37 (effective April 9, 2025) lets both Fairborn Municipal Court and Xenia Municipal Court waive the 15-day hard suspension before limited driving privileges if a first-time OVI defendant agrees to use a certified ignition interlock device. For military members who need to reach Wright-Patterson AFB, that can matter a great deal.',
  },
  {
    question: 'What OVI defenses are available in Greene County courts?',
    answer:
      'Challenging the traffic stop for lack of reasonable suspicion; disputing field sobriety test administration under NHTSA standards; challenging breathalyzer calibration records and operator certification; the rising BAC defense; and motions to suppress improperly obtained evidence under ORC 2935.26. The firm gets all available body-cam and dash-cam footage and breathalyzer maintenance logs before assessing any offer.',
  },
  {
    question: 'Which court handles my OVI: Fairborn Municipal Court or Xenia Municipal Court?',
    answer:
      'It depends on where the offense happened. Fairborn Municipal Court, 1 W. Main St, Fairborn, hears cases from Fairborn, Beavercreek and surrounding areas. Xenia Municipal Court, 101 N. Detroit St, Xenia, hears cases from Xenia, Yellow Springs, Centerville portions and other Greene County communities. The firm practices in both.',
  },
  {
    question: 'Can I get limited driving privileges in Greene County after an OVI?',
    answer:
      'Yes. Both Fairborn and Xenia Municipal Courts can grant limited driving privileges for work, school, medical and court-ordered program purposes. Under HB 37, first-time defendants who accept ignition interlock may avoid the standard waiting period entirely. For military personnel, commuting to Wright-Patterson AFB can be argued as a work-related need. The firm petitions for privileges as quickly as possible.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Greene County OVI?',
    answer:
      'The firm defends OVI/DUI charges in both Fairborn Municipal Court and Xenia Municipal Court, accounts for the military consequences facing personnel near Wright-Patterson AFB, files ALS appeals under ORC 4511.191 right away and builds the defense from a full review of the evidence. Call (614) 285-5482 to schedule a consultation.',
  },
];

const RELATED = [
  { href: '/courts/fairborn-municipal-court', title: 'Fairborn Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/greene-county', title: 'Greene County', subtitle: 'Every service the firm offers in the county' },
  {
    href: '/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court',
    title: 'Misdemeanor defense in Fairborn and Xenia',
    subtitle: 'Including military consequences',
  },
  { href: '/ovi-dui-defense/first-ovi', title: 'First OVI', subtitle: 'Penalties and defenses for a first offense' },
  { href: '/ovi-dui-defense/high-tier-ovi', title: 'High-tier OVI', subtitle: 'A BAC of 0.17% or higher' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving to work, and to the base, during a suspension' },
];

export default function GreeneOVIDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: OVI/DUI Defense in Greene County',
    serviceType: 'OVI DUI Defense',
    areaServed: { '@type': 'County', name: 'Greene County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI defense in Fairborn, Xenia and Greene County"
        description="A Greene County OVI goes to Fairborn Municipal Court or Xenia Municipal Court, depending on where you were stopped. Military personnel at Wright-Patterson AFB also face the UCMJ."
      />

      <Section
        title="Which court hears your OVI"
        intro={<p>Greene County OVI and DUI cases are handled by two municipal courts. The place of the offense decides which one.</p>}
      >
        <FactTable
          title="Fairborn Municipal Court"
          rows={[
            { label: 'Address', value: '1 W. Main St, Fairborn, OH 45324' },
            { label: 'Cases from', value: 'Fairborn, Beavercreek and surrounding areas' },
          ]}
        />
        <FactTable
          title="Xenia Municipal Court"
          rows={[
            { label: 'Address', value: '101 N. Detroit St, Xenia, OH 45385' },
            { label: 'Cases from', value: 'Xenia, Yellow Springs, Centerville and other Greene County communities' },
          ]}
          note="Both courts apply the same state minimums, but local judicial practice may differ. The firm provides OVI defense in both."
        />
        <h3>Wright-Patterson Air Force Base</h3>
        <p>
          Greene County is home to Wright-Patterson Air Force Base, one of the largest Air Force installations in the United States.
          Many OVI arrests around Fairborn and Beavercreek involve active-duty members, veterans or civilian base employees. Beyond the
          Ohio case, military personnel may face action under the Uniform Code of Military Justice (UCMJ) that puts security
          clearances, promotions and careers at risk. Charges are brought under{' '}
          <Link href="/ovi-dui-defense">Ohio Revised Code 4511.19</Link>; see the firm&rsquo;s OVI defense practice for more.
        </p>
      </Section>

      <Section title="OVI penalties under HB 37" tone="ice">
        <p>HB 37, effective April 9, 2025, sets the mandatory minimums under ORC 4511.19 in both courts.</p>
        <FactTable
          title="First OVI"
          rows={[
            { label: 'Jail', value: '3 to 180 days. At least 3 days in jail or 3 days in a certified driver intervention program.' },
            { label: 'Fines', value: '$565 to $1,075.' },
            { label: 'License', value: '1 to 3 years suspension; $315 reinstatement fee.' },
            {
              label: 'Limited privileges',
              value: 'The court can waive the 15-day hard suspension for first-time defendants who agree to ignition interlock, which matters for personnel who must reach the base for duty.',
            },
          ]}
        />
        <FactTable
          title="High-tier and second OVI"
          rows={[
            { label: 'High tier (BAC 0.17%+)', value: 'At least 6 days in jail, or 3 days in jail plus 3 days in a driver intervention program, on a first offense.' },
            { label: 'Second OVI within 10 years', value: 'At least 10 mandatory days in jail, fines of $715 to $1,625 and a 1 to 7 year suspension.' },
          ]}
          note="Penalties climb with each offense, which is why the first charge is worth fighting before a conviction goes on the record."
        />
      </Section>

      <Section title="The 30-day ALS deadline">
        <p>
          A Greene County OVI arrest triggers an immediate Administrative License Suspension under ORC 4511.191. It is separate from
          the criminal case and starts on the day of arrest.
        </p>
        <Callout title="Appeal within 30 days at Fairborn or Xenia">
          The appeal goes to the municipal court where the offense occurred. The firm files it as soon as it is retained and asks for
          a stay so you can keep driving, which for military personnel also protects reporting obligations and base access.
        </Callout>
        <p>
          ALS appeals can be won on procedure: failure to properly advise you of the consequences of refusal, improper chemical test
          administration, or breathalyzer maintenance problems. Even an appeal that only shortens the suspension gives real relief.
        </p>
      </Section>

      <Section title="Defenses in Greene County courts" tone="ice">
        <PointGrid
          points={[
            { title: 'The stop', body: 'Whether it was supported by reasonable articulable suspicion.' },
            { title: 'Field sobriety tests', body: 'Whether SFSTs were given in strict compliance with NHTSA protocols.' },
            { title: 'The breath test', body: 'Whether the instrument was properly calibrated and maintained.' },
            { title: 'Suppression', body: 'Grounds to suppress evidence under ORC 2935.26 or constitutional protections.' },
            { title: 'Video', body: 'All available body-cam and dash-cam footage.' },
            { title: 'Rising BAC', body: 'When the BAC result is close to 0.08% and the drinking happened shortly before driving.' },
          ]}
        />
      </Section>

      <Section title="Military OVI defense near Wright-Patterson AFB">
        <p>
          For active-duty members and civilian base employees, a conviction or even an arrest can trigger a security clearance review,
          which can end a career that depends on classified access. Non-judicial punishment or court-martial proceedings under the
          UCMJ may run alongside the civilian case. The firm communicates with military defense counsel when appropriate and works
          toward civilian outcomes, such as a reduction to reckless operation under ORC 4511.20 or dismissal, that lower the risk of
          adverse UCMJ action.
        </p>
        <p>
          If you are facing an OVI in Greene County, call (614) 285-5482. You have 30 days from arrest to appeal the suspension.
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
