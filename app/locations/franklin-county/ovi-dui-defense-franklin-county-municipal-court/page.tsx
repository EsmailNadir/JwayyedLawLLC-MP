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
  title: 'Franklin County Municipal Court OVI',
  description:
    'OVI defense at Franklin County Municipal Court, 375 S. High St. The ALS appeal deadline is 30 days from arrest. Penalties under HB 37 and every OVI charge.',
  keywords: ['Franklin County Municipal Court OVI lawyer', 'Franklin County OVI defense attorney', 'Columbus OVI Municipal Court', 'Franklin County DUI defense 375 S High St', 'Franklin County Municipal Court ALS appeal'],
  openGraph: {
    title: 'Franklin County Municipal Court OVI | Jwayyed Law LLC',
    description: 'How an OVI moves through Franklin County Municipal Court, from the ALS appeal to trial.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'OVI Defense at Franklin County Municipal Court', href: '/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court' },
];

const faqs = [
  {
    question: 'What are the OVI penalties at Franklin County Municipal Court under HB 37?',
    answer:
      'Under R.C. 4511.19 and HB 37 (effective April 9, 2025), a first OVI carries 3 to 180 days in jail (a mandatory minimum of 3 days, or a driver intervention program), fines of $565 to $1,075 and a 1 to 3 year license suspension. A high-tier first OVI (BAC 0.17%+) has a 6-day mandatory minimum: 3 days in jail plus 3 days of DIP, or 6 days in jail. A second OVI within 10 years has a 10-day mandatory minimum and fines of $715 to $1,625. A third OVI within 10 years has a 30-day mandatory minimum. The mandatory minimums apply whatever the circumstances.',
  },
  {
    question: 'How do I appeal an ALS at Franklin County Municipal Court?',
    answer:
      'Under R.C. 4511.191 you have 30 days from the date of arrest to file an Administrative License Suspension appeal at Franklin County Municipal Court, 375 S. High St., Columbus, OH 43215. The ALS takes effect at the arrest. The firm files the appeal the day it is retained, asks for an immediate stay, and challenges the suspension on procedural and substantive grounds, including whether the officer had reasonable grounds for the arrest and gave the proper advisory.',
  },
  {
    question: 'Can the 15-day hard suspension be waived at Franklin County Municipal Court?',
    answer:
      'Yes. HB 37 (effective April 9, 2025) allows Franklin County Municipal Court to waive the standard 15-day hard suspension for first-time OVI defendants who agree to install a certified ignition interlock. A first offender may then get limited privileges for work, school or medical appointments almost right away, at the court’s discretion and subject to interlock compliance. The firm advises on interlock eligibility and the waiver procedure at FCMC.',
  },
  {
    question: 'What OVI defenses does Jwayyed Law LLC use at Franklin County Municipal Court?',
    answer:
      'The firm challenges each element of the case: whether the stop had reasonable suspicion; whether the field sobriety tests (HGN, Walk-and-Turn, One-Leg-Stand) met NHTSA standards; the calibration records for the Intoxilyzer 8000 used by the Columbus Division of Police and other Franklin County agencies; blood test chain of custody and lab methods; rising BAC for results near the threshold; and, in marijuana OVI cases, the difference between per se limits and actual impairment.',
  },
  {
    question: 'Which law enforcement agencies make OVI arrests that end up at Franklin County Municipal Court?',
    answer:
      "Several agencies: the Columbus Division of Police (the largest source), the Ohio State Highway Patrol (active on I-270, I-71, I-670 and SR 315), the Franklin County Sheriff's Office (county roads and unincorporated areas), and suburban police departments such as Westerville, Dublin, Hilliard, Reynoldsburg and Grove City, whose OVI cases transfer from mayor's courts or are filed directly at FCMC. Each agency has its own procedures and equipment, and the firm knows the practices of the major ones.",
  },
  {
    question: 'What happens at an OVI arraignment at Franklin County Municipal Court?',
    answer:
      'You enter a plea, usually not guilty, and the court sets bond conditions and any driving restrictions. The court also deals with the ALS: if an appeal has been filed, it may set a hearing. The firm appears at the arraignment, files the ALS appeal beforehand where it can, and asks for the best available bond conditions and driving privileges from the start.',
  },
  {
    question: 'Does the OVI charge stay at Franklin County Municipal Court or does it transfer?',
    answer:
      "Most OVI charges, first through third offense with no accident injuries, stay at Franklin County Municipal Court. Felony charges (a fourth offense within 10 years, a prior felony OVI, or an OVI causing serious physical harm under R.C. 2903.08) are bound over to the Franklin County Court of Common Pleas. OVI arrests from suburban mayor's courts transfer to Franklin County Municipal Court for trial. The firm handles OVI cases in both FCMC and Common Pleas.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for an OVI at Franklin County Municipal Court?',
    answer:
      'Franklin County Municipal Court handles more OVI cases than any other court in Ohio, and the 30-day ALS appeal deadline runs from the arrest. Missing it forfeits the right to challenge the administrative suspension. Jwayyed Law LLC files ALS appeals right away, appears at the court regularly and builds each defense around the evidence and the arresting agency. Call (614) 285-5482.',
  },
];

const CHARGES = [
  { href: '/locations/franklin-county/first-ovi-columbus', title: 'First OVI', subtitle: '3-day mandatory minimum, DIP option, ALS of 90 days to 3 years' },
  { href: '/locations/franklin-county/second-ovi-columbus', title: 'Second OVI', subtitle: '10-day mandatory minimum, vehicle immobilization, 1 to 7 year suspension' },
  { href: '/locations/franklin-county/third-ovi-columbus', title: 'Third OVI', subtitle: '30-day mandatory minimum, vehicle forfeiture, 2 to 12 year suspension' },
  { href: '/locations/franklin-county/high-tier-ovi-columbus', title: 'High-tier OVI (BAC 0.17%+)', subtitle: '6-day mandatory minimum, calibration and margin-of-error challenges' },
  { href: '/locations/franklin-county/refusal-ovi-columbus', title: 'OVI refusal', subtitle: '1-year ALS, higher minimums, no BAC evidence' },
  { href: '/locations/franklin-county/underage-ovi-columbus', title: 'Underage OVI', subtitle: '0.02% zero-tolerance threshold, OVUAC, consequences for OSU students' },
  { href: '/locations/franklin-county/cdl-ovi-columbus', title: 'CDL OVI', subtitle: '0.04% threshold, federal 1-year or lifetime disqualification' },
  { href: '/locations/franklin-county/marijuana-ovi-columbus', title: 'Marijuana OVI', subtitle: 'Per se THC limits, DRE evaluation challenges, legalization' },
  { href: '/locations/franklin-county/ovi-with-accident-columbus', title: 'OVI with an accident', subtitle: 'Vehicular assault F4/F3, civil exposure, accident reconstruction' },
  { href: '/locations/franklin-county/felony-ovi-columbus', title: 'Felony OVI', subtitle: 'Fourth offense, bound over to Common Pleas, mandatory prison' },
];

export default function FCMCOVIDefensePage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: OVI/DUI Defense in Franklin County", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI defense at Franklin County Municipal Court"
        description="Every OVI arrest in Columbus and most across Franklin County is charged at 375 S. High Street. The ALS appeal deadline is 30 days from the arrest, not the first court date."
      />

      <Section
        title="The court at a glance"
        intro={<p>{FCMC.name} processes more OVI cases than any other court in Ohio.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'First through third offense OVI, ALS appeals, and arraignments for felony OVI before bind-over.' },
            {
              label: 'Who makes the arrests',
              value: "Columbus Division of Police, the Ohio State Highway Patrol, the Franklin County Sheriff's Office and suburban police departments.",
            },
          ]}
        />
        <p>
          Jwayyed Law LLC defends OVI charges at Franklin County Municipal Court and files the ALS appeal once retained. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <KeyFacts
        facts={[
          { figure: '30 days', label: 'from arrest to appeal the ALS' },
          { figure: '3 days', label: 'mandatory minimum for a first OVI (6 days at high tier)' },
          { figure: '$565 to $1,075', label: 'first OVI fine under HB 37' },
          { figure: '15 days', label: 'hard suspension that HB 37 lets the court waive with an interlock' },
        ]}
      />

      <Section title="Two cases start at the arrest" tone="ice">
        <p>
          An OVI arrest in Franklin County starts the criminal case at Franklin County Municipal Court and an Administrative License
          Suspension (ALS) imposed by the Ohio BMV. The ALS takes effect at the arrest, and its 30-day appeal deadline runs on its own
          clock. People who focus on the criminal case and miss it can lose their driving privileges for 90 days to a year before the case
          is resolved. The firm files the ALS appeal and asks for a stay the day it is retained.
        </p>
        <Steps
          steps={[
            { title: 'ALS appeal', body: 'Within 30 days of the arrest, with a request to stay the suspension.' },
            { title: 'Arraignment', body: 'A plea (usually not guilty), bond conditions and driving restrictions.' },
            { title: 'Discovery and pretrial hearings', body: 'The evidence is gathered and challenged.' },
            { title: 'Resolution', body: 'A negotiated outcome or trial.' },
          ]}
        />
        <p>
          Ohio&rsquo;s mandatory minimums mean any OVI conviction carries a jail term or driver intervention program the court cannot
          reduce. Evidence challenges, suppression motions and negotiation toward a non-OVI charge are the way to avoid them.
        </p>
      </Section>

      <Section title="OVI penalties under HB 37">
        <p>
          R.C. 4511.19, as amended by HB 37 effective April 9, 2025, sets mandatory jail, driver intervention programs and license
          suspensions up to three years for a first offense, with higher minimums at high tier (BAC 0.17%+) or after a refusal.
        </p>
        <FactTable
          title="Mandatory minimums by offense"
          rows={[
            { label: 'First OVI', value: '3 to 180 days in jail, with a mandatory minimum of 3 days or a driver intervention program; $565 to $1,075; 1 to 3 year suspension.' },
            { label: 'High-tier first OVI', value: '6 days: 3 days in jail plus 3 days of DIP, or 6 days in jail.' },
            { label: 'Second OVI (within 10 years)', value: '10 days; $715 to $1,625.' },
            { label: 'Third OVI (within 10 years)', value: '30 days.' },
          ]}
        />
      </Section>

      <Section title="Every OVI charge filed at FCMC" tone="ice">
        <LinkGrid links={CHARGES} />
      </Section>

      <Section title="How the firm defends an OVI here">
        <p>
          The firm requests the police report, body-cam and dash-cam footage, field sobriety test documents, breath or blood test records,
          and the calibration and maintenance records for the specific Intoxilyzer 8000 used. The Columbus Division of Police and the Ohio
          State Highway Patrol make most arrests at this court, and the firm knows the procedures and equipment each uses.
        </p>
        <PointGrid
          points={[
            {
              title: 'Field sobriety tests',
              body: 'HGN onset, step deviations on the Walk-and-Turn and raised-foot height on the One-Leg-Stand are documented in every arrest. Any departure from the NHTSA protocol can undermine the test.',
            },
            {
              title: 'The Intoxilyzer 8000',
              body: 'Its calibration records are checked against Ohio Department of Health certification standards.',
            },
            {
              title: 'Margin of error',
              body: 'Near 0.08% or 0.17%, the certified margin of error may put the true reading under the threshold even when the reported number is above it.',
            },
            { title: 'The stop', body: 'Whether the officer had reasonable suspicion to make it.' },
          ]}
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>. The ALS appeal deadline
          is 30 days from arrest.
        </p>
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
