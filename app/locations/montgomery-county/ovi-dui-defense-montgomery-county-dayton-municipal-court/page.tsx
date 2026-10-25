import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'OVI / DUI Lawyer for Dayton, Ohio',
  description:
    'OVI/DUI defense at Dayton Municipal Court and Kettering Municipal Court for Dayton, Kettering, Huber Heights and Montgomery County, under HB 37.',
  keywords: ['OVI lawyer Dayton Ohio', 'DUI attorney Montgomery County', 'OVI defense Kettering Ohio', 'Dayton Municipal Court OVI', 'Montgomery County OVI attorney'],
  openGraph: {
    title: 'OVI / DUI Lawyer for Dayton, Ohio | Jwayyed Law LLC',
    description: 'OVI defense in Dayton and Kettering Municipal Courts: which court hears your case, HB 37 penalties and the 30-day ALS appeal.',
    url: 'https://www.jjlawohio.com/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
  { label: 'OVI/DUI Defense - Montgomery County Courts', href: '/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court' },
];

const faqs = [
  {
    question: 'What are the OVI penalties in Dayton Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Dayton Municipal Court carries 3 to 180 days in jail (a 3-day mandatory minimum or a driver intervention program), fines of $565 to $1,075, and a license suspension of 1 to 3 years. The license reinstatement fee is $315. A high-tier OVI (BAC 0.17% or above) carries higher mandatory jail minimums. A second OVI within 10 years brings at least 10 days in jail and fines of $715 to $1,625.',
  },
  {
    question: 'What is the difference between Dayton Municipal Court and Kettering Municipal Court for OVI?',
    answer:
      'It depends on where the offense happened. Dayton Municipal Court, 301 W. Third St, Dayton, hears cases from Dayton, Trotwood, Huber Heights, Vandalia and Englewood. Kettering Municipal Court, 2325 Wilmington Pike, Kettering, hears cases from Kettering, Miamisburg, Centerville and surrounding areas. Each court has its own local rules, docketing and prosecutorial practice. Jwayyed Law LLC practices in both.',
  },
  {
    question: 'How do I appeal an ALS in Montgomery County?',
    answer:
      'Under ORC 4511.191, you have 30 days from the date of your OVI arrest to file an Administrative License Suspension appeal in the right court: Dayton Municipal Court or Kettering Municipal Court. The ALS starts on the day of arrest and is separate from the criminal case. The firm files the appeal as soon as it is retained and asks for a stay so you can keep driving while it is pending.',
  },
  {
    question: 'Can the 15-day hard suspension be waived in Montgomery County under HB 37?',
    answer:
      'Yes. HB 37 (effective April 9, 2025) lets courts in Montgomery County waive the 15-day hard suspension before limited driving privileges if a first-time OVI defendant agrees to install and use a certified ignition interlock device. In a county where many residents need a vehicle to get to work, that matters, and an attorney can present the request to the court.',
  },
  {
    question: 'What OVI defenses are available in Montgomery County courts?',
    answer:
      'The firm looks at the legality of the traffic stop under the Fourth Amendment; whether SFSTs were given to NHTSA standards; breathalyzer calibration, maintenance records and operator certification; chain of custody for blood draws; and grounds to suppress evidence under ORC 2935.26. Urban stop-and-investigate encounters in Dayton can raise Fourth Amendment issues. The firm gets all available video and records before evaluating any offer from the Montgomery County prosecutor.',
  },
  {
    question: 'Can I get limited driving privileges in Montgomery County after an OVI?',
    answer:
      'Yes. Dayton Municipal Court and Kettering Municipal Court can grant limited driving privileges for work, school, medical and treatment purposes. Under HB 37, first-time defendants who accept ignition interlock may avoid the standard waiting period. In a spread-out metro area, getting privileges quickly is often essential, so the firm petitions right away and helps you meet the conditions.',
  },
  {
    question: 'Does a Montgomery County OVI affect CDL holders?',
    answer:
      "Yes. Commercial driver's license holders face federal consequences on top of Ohio penalties. Under federal law, a CDL holder convicted of OVI in a personal vehicle faces a one-year CDL disqualification for a first offense and lifetime disqualification for a second. Montgomery County's large trucking and transportation sector makes this a real concern, and the firm builds CDL consequences into the defense plan.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Montgomery County OVI?',
    answer:
      "The firm defends OVI/DUI charges in Dayton Municipal Court and Kettering Municipal Court. Montgomery County is Ohio's fourth-largest county, and these courts handle a high volume of OVI cases. The firm files ALS appeals under ORC 4511.191 right away, gets all of the evidence and builds the defense around your case. Call (614) 285-5482 to schedule a consultation.",
  },
];

const RELATED = [
  { href: '/courts/dayton-municipal-court', title: 'Dayton Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/montgomery-county', title: 'Montgomery County', subtitle: 'Every service the firm offers in the county' },
  {
    href: '/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court',
    title: 'Misdemeanor defense in Dayton',
    subtitle: 'Assault, drug, theft and domestic violence charges',
  },
  { href: '/ovi-dui-defense/commercial-dui-cdl', title: 'Commercial DUI and CDL', subtitle: 'Federal disqualification rules for drivers' },
  { href: '/ovi-dui-defense/high-tier-ovi', title: 'High-tier OVI', subtitle: 'A BAC of 0.17% or higher' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving to work and school during a suspension' },
];

export default function MontgomeryOVIDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: OVI/DUI Defense in Montgomery County',
    serviceType: 'OVI DUI Defense',
    areaServed: { '@type': 'County', name: 'Montgomery County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI defense in Dayton and Montgomery County"
        description="A Montgomery County OVI goes to Dayton Municipal Court or Kettering Municipal Court, depending on where you were stopped. Either way, you have 30 days to appeal the license suspension."
      />

      <Section
        title="Which court hears your OVI"
        intro={
          <p>
            Montgomery County is Ohio&rsquo;s fourth-largest county, with Dayton as its urban center. OVI cases are heard in two
            primary municipal courts, and the one you go to depends on where the offense occurred.
          </p>
        }
      >
        <FactTable
          title="Dayton Municipal Court"
          rows={[
            { label: 'Address', value: '301 W. Third St, Dayton, OH 45402' },
            { label: 'Cases from', value: 'Dayton, Trotwood, Huber Heights, Vandalia and Englewood' },
            { label: 'Character', value: 'A high-volume urban court, which can affect scheduling and negotiation' },
          ]}
        />
        <FactTable
          title="Kettering Municipal Court"
          rows={[
            { label: 'Address', value: '2325 Wilmington Pike, Kettering, OH 45420' },
            { label: 'Cases from', value: 'Kettering, Miamisburg, Centerville and surrounding communities' },
            { label: 'Character', value: 'A more suburban court with its own staffing and docket management' },
          ]}
          note="Both courts apply Ohio's OVI statutes but have distinct local rules, docketing schedules, prosecutorial offices and judicial practices. The firm practices in both."
        />
        <h3>Who makes OVI stops here</h3>
        <p>
          Enforcement is heavy on I-75, I-70, US 35 and the state routes connecting Dayton&rsquo;s suburbs. The Dayton Police
          Department, Kettering Police Department, Montgomery County Sheriff&rsquo;s Office and Ohio State Highway Patrol all make OVI
          stops in the county, each with its own procedures, which shapes how the firm reviews a stop. The firm provides{' '}
          <Link href="/ovi-dui-defense">OVI defense</Link> in both courts under Ohio Revised Code 4511.19.
        </p>
      </Section>

      <Section title="OVI penalties under HB 37" tone="ice">
        <p>HB 37, effective April 9, 2025, updated the mandatory minimums under ORC 4511.19. They apply in both courts.</p>
        <FactTable
          title="First OVI"
          rows={[
            { label: 'Jail', value: '3 to 180 days. At least 3 days in jail or 3 days in a certified driver intervention program.' },
            { label: 'Fines', value: '$565 to $1,075.' },
            { label: 'License', value: '1 to 3 years suspension; $315 reinstatement fee.' },
            {
              label: 'Limited privileges',
              value: 'Courts can waive the 15-day hard suspension when a first-time defendant agrees to ignition interlock.',
            },
          ]}
        />
        <FactTable
          title="High-tier and second OVI"
          rows={[
            { label: 'High tier (BAC 0.17%+)', value: 'At least 6 days in jail, or 3 days in jail plus 3 days in a driver intervention program, even on a first offense.' },
            { label: 'Second OVI within 10 years', value: 'At least 10 days in jail, fines of $715 to $1,625 and a 1-to-7-year suspension.' },
            {
              label: 'CDL holders',
              value: 'Federal disqualification on top of Ohio penalties: one year for a first offense, lifetime for a second.',
            },
          ]}
        />
      </Section>

      <Section title="The 30-day ALS deadline">
        <p>
          An OVI arrest in Montgomery County immediately triggers an Administrative License Suspension under ORC 4511.191. It is a
          civil administrative proceeding separate from the criminal case and starts on the day of arrest.
        </p>
        <Callout title="Appeal within 30 days in the court that has your case">
          The appeal goes to Dayton Municipal Court or Kettering Municipal Court, depending on where the offense occurred. The
          deadline is strict and cannot be waived. The firm files it as soon as it is retained and asks for a stay at the same time.
        </Callout>
        <p>
          ALS appeals succeed when the officer did not properly advise you of your rights under ORC 4511.191, the testing device lacked
          current calibration or maintenance records, or the testing procedure departed from approved methods. With many agencies in
          one county, procedural inconsistencies happen. Even a partial win can shorten the suspension and help the criminal case.
        </p>
      </Section>

      <Section title="Defenses in Dayton and Kettering courts" tone="ice">
        <PointGrid
          points={[
            { title: 'The stop', body: 'Whether there was genuine reasonable articulable suspicion, or the stop was pretextual.' },
            {
              title: 'Field sobriety tests',
              body: 'Body-cam and dash-cam footage checked against NHTSA protocols for horizontal gaze nystagmus, walk-and-turn and one-leg stand.',
            },
            { title: 'The breath test', body: 'Calibration logs and operator certification for the specific instrument used.' },
            { title: 'Blood tests', body: 'Chain-of-custody documentation for the blood draw.' },
            { title: 'Rising BAC', body: 'When you drank shortly before driving and were below the limit at the time of driving.' },
            { title: 'Suppression', body: 'Grounds to suppress evidence under ORC 2935.26 and the Fourth Amendment.' },
          ]}
        />
        <p>
          If you are facing an OVI in Montgomery County, call (614) 285-5482. The firm will review the case, identify the defenses
          and plan for the court that will hear it.
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
