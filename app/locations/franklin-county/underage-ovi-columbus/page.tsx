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
  title: 'Columbus Underage OVI Defense Attorney',
  description:
    'Drivers under 21 can be charged at a BAC of 0.02% under R.C. 4511.19(B). Columbus cases are heard at Franklin County Municipal Court.',
  keywords: ['Columbus underage OVI lawyer', 'under 21 DUI Columbus Ohio', 'underage drunk driving Columbus', 'minor OVI Columbus attorney', 'zero tolerance OVI Ohio Columbus'],
  openGraph: {
    title: 'Columbus Underage OVI Defense Attorney | Jwayyed Law LLC',
    description: 'The 0.02% limit, OVUAC penalties, the ALS appeal and defenses for drivers under 21 in Columbus.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/underage-ovi-columbus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/underage-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Underage OVI in Columbus', href: '/locations/franklin-county/underage-ovi-columbus' },
];

const faqs = [
  {
    question: 'What is the legal BAC limit for underage drivers in Columbus?',
    answer:
      'Ohio applies a zero-tolerance standard to drivers under 21 under R.C. 4511.19(B). A person under 21 who drives with a BAC of 0.02% or above, which a breathalyzer can detect, is guilty of underage OVI, also called OVUAC (operating a vehicle after underage alcohol consumption). It is a separate offense from standard OVI, which requires 0.08%, and has its own penalties.',
  },
  {
    question: 'What are the penalties for an underage OVI in Columbus?',
    answer:
      'An OVUAC conviction under R.C. 4511.19(B) carries up to 60 days in a driver intervention program or equivalent treatment, fines of $250 to $1,000, and a license suspension of 90 days to 2 years. An underage driver with a BAC of 0.08% or above is charged under the standard R.C. 4511.19(A) OVI statute as well and faces the same mandatory minimums as an adult.',
  },
  {
    question: 'Does an underage OVI in Columbus count as a prior OVI for future look-back purposes?',
    answer:
      'Yes. Under Ohio law an OVUAC conviction counts as a prior OVI within the 10-year lookback. Someone convicted of underage OVI at 19 who is charged with another OVI at 28 faces the higher second-offense mandatory minimums. That long tail is the reason to fight an underage OVI that looks minor.',
  },
  {
    question: 'Can an underage OVI in Columbus affect college enrollment or financial aid?',
    answer:
      'Yes. An OVUAC or OVI conviction creates a criminal record that college admissions offices, scholarship committees and employers can see. Drug and alcohol convictions can also affect eligibility for some federal financial aid programs. For students at OSU, Columbus State or other schools, the effects reach past the penalties, and the firm reviews them in every underage OVI case.',
  },
  {
    question: 'What defenses apply to an underage OVI in Columbus?',
    answer:
      'The standard OVI defenses apply: whether the Columbus Division of Police had reasonable suspicion for the stop, whether the breath or blood test was given properly, and whether the BAC reading was accurate. With a very low BAC (0.02% to 0.07%), the breathalyzer margin of error can carry real weight. The firm also checks whether police were required to contact a parent before questioning a minor.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus underage OVI?',
    answer:
      'Even a zero-tolerance OVUAC with a very low BAC creates a criminal record, counts as a prior OVI for 10 years and can affect school and work. Jwayyed Law LLC defends underage OVI charges at Franklin County Municipal Court. The ALS appeal deadline of 30 days from arrest applies to underage cases too. Call (614) 285-5482.',
  },
];

const RELATED = [
  { href: '/locations/franklin-county/ovi-dui-defense-columbus', title: 'OVI defense in Columbus', subtitle: 'Every OVI charge in Franklin County' },
  { href: '/locations/franklin-county/first-ovi-columbus', title: 'First OVI in Columbus', subtitle: 'When the BAC is 0.08% or above' },
  { href: '/locations/franklin-county/expungement-columbus', title: 'Expungement in Columbus', subtitle: 'Sealing a record in Franklin County' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
  { href: '/ovi-dui-defense/underage-ovi', title: 'Underage OVI in Ohio', subtitle: 'The statewide rules for drivers under 21' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving to class and work during a suspension' },
];

export default function ColumbusUnderageOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Underage OVI Defense in Columbus", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/underage-ovi-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Underage OVI defense in Columbus"
        description="A driver under 21 can be charged at a BAC of 0.02%, which a single drink can produce. The conviction counts as a prior OVI for 10 years."
      />

      <KeyFacts
        facts={[
          { figure: '0.02%', label: 'BAC limit for drivers under 21 under R.C. 4511.19(B)' },
          { figure: '$250 to $1,000', label: 'fine range for an OVUAC conviction' },
          { figure: '90 days to 2 years', label: 'court-ordered license suspension' },
          { figure: '30 days', label: 'from arrest to appeal the ALS' },
        ]}
      />

      <Section
        title="Underage OVI stops in Columbus"
        intro={
          <p>
            Columbus has Ohio State University, Columbus State, Franklin University, Capital University and many other schools. Students
            and nightlife on High Street, in the Short North and in the Arena District mean a large number of underage alcohol-related
            driving stops each year.
          </p>
        }
      >
        <p>
          Stops are made by the Columbus Division of Police or the Ohio State University Police, and the case is heard at {FCMC.name}.
        </p>
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'The OVUAC or OVI charge and the ALS appeal.' },
          ]}
        />
        <p>
          Jwayyed Law LLC defends underage OVI charges at Franklin County Municipal Court. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <Section title="Ohio's zero-tolerance standard" tone="ice">
        <p>
          R.C. 4511.19(B) bars anyone under 21 from driving with a BAC of 0.02% or above, separate from the standard 0.08% OVI limit.
          A BAC of 0.02% to 0.079% leads to an OVUAC charge rather than a full OVI, but it is still a criminal conviction with its own
          penalties. At 0.08% or above, an underage driver faces both the OVUAC charge and the standard OVI under R.C. 4511.19(A), with
          the full adult mandatory minimums.
        </p>
        <FactTable
          title="OVUAC penalties (R.C. 4511.19(B))"
          rows={[
            { label: 'Programming', value: 'Mandatory driver intervention programming of up to 60 days.' },
            { label: 'Fine', value: '$250 to $1,000.' },
            { label: 'License', value: '90 days to 2 years suspension.' },
            { label: 'Lookback', value: 'Counts as a prior OVI for 10 years. A conviction at 20 followed by an OVI at 29 brings second-offense penalties.' },
          ]}
        />
        <FactTable
          title="Administrative License Suspension"
          rows={[
            { label: 'First underage test (BAC 0.02%+)', value: '90 days.' },
            { label: 'Refusal', value: '1 year.' },
            { label: 'Appeal deadline', value: 'Within 30 days of the arrest, in Franklin County Municipal Court.' },
          ]}
          note="The ALS starts at arrest, independent of any conviction. A successful appeal can restore full driving privileges while the criminal case is pending."
        />
      </Section>

      <Section title="Defenses to an underage OVI">
        <PointGrid
          points={[
            {
              title: 'The traffic stop',
              body: 'Police need reasonable, articulable suspicion of a violation. A pretextual stop, a hunch, or being near a bar at closing time without more can be challenged under the Fourth Amendment, and the evidence may be suppressed.',
            },
            {
              title: 'Breathalyzer margin of error',
              body: 'Ohio instruments have certified margins of error. A reading near 0.02% (0.02% to 0.04%) may fall inside that margin. The firm subpoenas the maintenance and calibration records for the instrument used.',
            },
            { title: 'Field sobriety tests', body: 'Whether they were given correctly.' },
            { title: 'Questioning a minor', body: 'Whether police were required to contact a parent before questioning.' },
          ]}
        />
        <p>The firm reviews the police report and all body-cam and dash-cam footage before weighing any plea.</p>
      </Section>

      <Section title="School, aid and work" tone="ice">
        <p>
          Many scholarship programs require a clean criminal record, and a conviction can trigger review or revocation under the program
          terms. Internships, co-ops, certifications and licensing in healthcare, law, education and financial services ask about
          convictions, and the background check record lasts for years.
        </p>
        <p>
          Because of the 10-year lookback, a student convicted at 19 who is charged with another OVI before 29 faces second-offense
          mandatory minimums. Seeking dismissal, diversion or a reduction before any conviction is worth it, even in a case that looks
          simple.
        </p>
      </Section>

      <Section title="Sealing an underage OVI">
        <p>
          An OVUAC conviction under R.C. 4511.19(B) is eligible for expungement under R.C. 2953.32 after the waiting period that follows
          final discharge. HB 96, effective September 30, 2025, shortened waiting periods for many low-level convictions. Once sealed, the
          conviction is removed from public records seen on standard background checks.
        </p>
        <p>
          Sealing does not erase the lookback: a sealed OVUAC still counts as a prior OVI for 10 years in a future case. It helps the
          background check, but avoiding the conviction is better.
        </p>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>. The 30-day ALS deadline
          applies to underage cases.
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
