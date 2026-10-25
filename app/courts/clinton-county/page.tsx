import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Clinton County Court Representation',
  description:
    'Wilmington Municipal Court (Clinton County Municipal Court) and Clinton County Common Pleas Court: what each hears, and the OVI defense, criminal and civil cases the firm handles.',
  keywords: [
    'Clinton County OVI attorney',
    'Wilmington Municipal Court lawyer',
    'Clinton County criminal defense',
    'Wilmington Ohio OVI attorney',
    'Clinton County DUI attorney',
    'Blanchester criminal defense',
    'Sabina Ohio attorney',
    'Clinton County Common Pleas',
    'Clinton County Municipal Court',
    'Wilmington DUI attorney',
    'Wilmington criminal defense attorney',
  ],
  openGraph: {
    title: 'Clinton County Court Representation | Jwayyed Law LLC',
    description: 'The two Clinton County courts in Wilmington and the OVI, criminal and civil cases the firm handles there.',
    url: 'https://www.jjlawohio.com/courts/clinton-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/clinton-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Clinton County', href: '/courts/clinton-county' },
];

const faqs = [
  {
    question: 'What does Wilmington Municipal Court handle in Clinton County?',
    answer:
      'Wilmington Municipal Court, also called Clinton County Municipal Court (69 N. South St, Wilmington, OH 45177), is the main trial court for misdemeanor criminal cases, OVI and DUI charges, traffic violations, civil claims up to $15,000, small claims and evictions in Clinton County. It also holds arraignments and preliminary hearings for felony arrests before those cases are bound over to Clinton County Common Pleas Court. If you are charged with OVI, assault, theft, drug possession or any other misdemeanor anywhere in the county, including Wilmington, Sabina, Blanchester, Clarksville and the rural townships, your case will be heard there. You must appear at arraignment, and having an attorney at that first court appearance protects your rights.',
  },
  {
    question: 'What are the OVI penalties for a first offense in Clinton County?',
    answer:
      'Under ORC 4511.19, a first-offense OVI is a first-degree misdemeanor. The mandatory minimums are at least 3 days in jail (or a 3-day driver intervention program instead), a fine of $375 to $1,075, a license suspension of 1 to 3 years, and possible vehicle immobilization for 30 days. With a BAC of 0.17% or higher (a "high test"), the minimum jail time doubles to 6 days. The Administrative License Suspension (ALS) under ORC 4511.191 takes effect at arrest and is separate from any court-imposed suspension, so the two can overlap. An OVI defense attorney can challenge the stop, the field sobriety tests and the accuracy of the chemical test to seek dismissal, a reduction or lighter penalties.',
  },
  {
    question: 'How long do I have to appeal an Administrative License Suspension after an OVI arrest in Clinton County?',
    answer:
      'You have 30 days from the date of arrest to file an ALS appeal in Wilmington Municipal Court. The window is set by ORC 4511.197 and is a hard deadline: miss it and you lose the right to challenge the ALS in court. The ALS takes effect 30 days after the arrest for those who take the chemical test and fail, or immediately (with a longer suspension) for those who refuse. An appeal can argue that the officer lacked reasonable suspicion for the stop, did not properly explain the ALS consequences, or administered the test improperly. Winning can restore your driving privileges while the criminal case is pending. Contact Jwayyed Law LLC right after an OVI arrest in Clinton County.',
  },
  {
    question: 'What misdemeanor charges are commonly handled in Wilmington Municipal Court?',
    answer:
      'OVI (ORC 4511.19); domestic violence (ORC 2919.25; a first offense is a first-degree misdemeanor); assault (ORC 2903.13); theft under $1,000 (ORC 2913.02, first-degree misdemeanor); possession of marijuana up to 100 grams (ORC 2925.11, minor misdemeanor); disorderly conduct (ORC 2917.11); criminal damaging (ORC 2909.06); and traffic offenses including driving under suspension (ORC 4510.11) and reckless operation (ORC 4511.20). ORC 2935.26 lets officers issue citations instead of arrests for most misdemeanors other than first-degree misdemeanors. For clients with no prior record, an attorney can often negotiate reduced charges, diversion or community service in place of jail.',
  },
  {
    question: 'What is the difference between Wilmington Municipal Court and Clinton County Common Pleas Court?',
    answer:
      'Wilmington Municipal Court handles misdemeanors (maximum 180 days in jail) and civil cases up to $15,000. Clinton County Common Pleas Court (46 S. South St, Wilmington, OH 45177) handles felony cases (which carry more than one year in prison), civil cases over $15,000, domestic relations (divorce, custody) and probate. A felony arrest in Clinton County starts in Wilmington Municipal Court for arraignment; the case is then dismissed, reduced to a misdemeanor, or bound over to Common Pleas for grand jury proceedings and trial. OVI can become a felony (F4 or F3) on a third or fourth offense within 10 years under ORC 4511.19(G), and is then prosecuted in Common Pleas with prison time possible.',
  },
  {
    question: 'How does an attorney help with a Clinton County OVI case compared to representing myself?',
    answer:
      'OVI law is technical. It involves Fourth Amendment search and seizure issues, NHTSA standards for field sobriety tests, Ohio Administrative Code requirements for breath instrument calibration and operator certification, and strict timelines for ALS appeals. One missed deadline or procedural misstep can permanently harm your case. An OVI attorney reviews the discovery, finds weaknesses in the evidence, files suppression motions, negotiates with the Clinton County prosecutor for reduced charges (such as a "wet reckless" or physical control), and advocates for you at sentencing. A conviction means a lost license, higher insurance, possible job loss and a permanent criminal record.',
  },
  {
    question: 'Am I eligible to have a conviction sealed or expunged in Clinton County?',
    answer:
      "Ohio expanded its record-sealing law through Senate Bill 288 (effective October 2023). Under ORC 2953.32, many misdemeanor convictions become eligible for sealing one year after you complete your sentence, including probation. Some offenses are permanently excluded: OVI convictions, most traffic offenses, domestic violence convictions and certain sex offenses. If you are eligible, you file in Clinton County Common Pleas Court, which holds a hearing where the judge weighs your interest in rehabilitation against the state's interest in keeping the record. Sealed records are generally not available to private employers or landlords. The firm can review your record, tell you whether sealing is available, and handle the application and hearing.",
  },
  {
    question: 'What civil matters does Jwayyed Law LLC handle in Clinton County?',
    answer:
      'Contract disputes, landlord-tenant cases (evictions and security deposit claims under ORC Chapter 5321), personal injury claims and small claims help. Civil claims up to $15,000 are filed in Wilmington Municipal Court; larger claims go to Clinton County Common Pleas Court. The firm also handles business formation (LLCs under ORC Chapter 1706, operating agreements, business contracts) and estate planning documents, including wills and powers of attorney, for Wilmington and surrounding residents.',
  },
];

const SERVICES = [
  { href: '/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court', title: 'OVI/DUI defense', subtitle: 'Wilmington Municipal Court' },
  { href: '/locations/clinton-county/criminal-misdemeanor-defense-clinton-county-wilmington-municipal-court', title: 'Misdemeanor criminal defense', subtitle: 'Wilmington Municipal Court' },
  { href: '/locations/clinton-county/personal-injury-clinton-county', title: 'Personal injury', subtitle: 'Clinton County' },
  { href: '/locations/clinton-county/business-formation-llc-clinton-county', title: 'Business formation and LLC', subtitle: 'Clinton County' },
];

export default function ClintonCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Clinton County courts"
        description="Every Clinton County case starts in one of two courts on South Street in Wilmington. Misdemeanors, OVI and felony arraignments go to Wilmington Municipal Court, also called Clinton County Municipal Court."
      />

      <Section
        title="Find your court"
        intro={
          <p>
            Clinton County is a rural county in southwest Ohio centered on Wilmington, the county seat. Its two courts serve
            Wilmington, Sabina, Blanchester, Clarksville, Port William, Midland and Martinsville.
          </p>
        }
      >
        <FactTable
          title="Wilmington Municipal Court (Clinton County Municipal Court)"
          rows={[
            { label: 'Address', value: '69 N. South St, Wilmington, OH 45177' },
            { label: 'Hears', value: 'OVI, misdemeanor criminal cases, traffic violations, civil claims up to $15,000, small claims, evictions' },
            { label: 'Felony arrests', value: 'Arraignments and preliminary hearings before bindover to Common Pleas' },
          ]}
        />
        <FactTable
          title="Clinton County Common Pleas Court"
          rows={[
            { label: 'Address', value: '46 S. South St, Wilmington, OH 45177' },
            { label: 'Hears', value: 'Felony criminal cases, civil cases over $15,000, domestic relations, probate' },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[{ href: '/courts/wilmington-municipal-court', title: 'Wilmington Municipal Court guide', subtitle: 'OVI, misdemeanors and rural road cases' }]}
        />
      </Section>

      <Section title="OVI defense in Clinton County" tone="ice">
        <p>
          Ohio&rsquo;s OVI law, ORC 4511.19, is among the most litigated statutes in the state, because the consequences are severe
          and the process has several stages where constitutional and procedural errors happen.
        </p>
        <PointGrid
          points={[
            { title: 'The stop', body: 'Must be supported by reasonable articulable suspicion under the Fourth Amendment.' },
            { title: 'Field sobriety tests', body: 'Must follow the NHTSA standardized protocols.' },
            { title: 'The breath or blood test', body: 'Calibration records and officer certification records.' },
            { title: 'The footage', body: 'Body camera footage and police reports, reviewed against all of the above.' },
          ]}
        />
        <Callout title="HB 37 (effective April 9, 2025)">
          Ohio&rsquo;s 2025 OVI changes added provisions on ignition interlock devices and the hard suspension after an arrest. Under
          the updated law, courts may waive the 15-day hard suspension if the defendant agrees to install an ignition interlock device,
          which gives more options for limited driving privileges while the case is pending.
        </Callout>
      </Section>

      <Section title="Misdemeanor criminal defense in Clinton County">
        <p>
          ORC 2935.26 allows officers to issue a citation instead of an arrest for misdemeanors that are not first-degree. First-degree
          misdemeanors, including OVI, first-offense domestic violence and assault, usually mean arrest and arraignment.
        </p>
        <p>
          At arraignment, bail or bond conditions may be set. Defendants who appear without counsel risk waiving rights or entering
          pleas they do not fully understand. An attorney from the first court appearance through sentencing or trial makes sure every defense and
          mitigation argument reaches Wilmington Municipal Court.
        </p>
        <FactTable
          title="Traffic charges the firm handles"
          rows={[
            { label: 'Driving under suspension', value: 'ORC 4510.11' },
            { label: 'Reckless operation', value: 'ORC 4511.20' },
            { label: 'ALS appeals', value: 'Under ORC 4511.191, 30-day deadline' },
          ]}
        />
      </Section>

      <Section title="Civil, business and estate matters" tone="ice">
        <p>
          A Wilmington landlord evicting a non-paying tenant under ORC Chapter 1923, a Blanchester business owner with a contract
          dispute, a Sabina resident hurt in a car accident: the firm handles landlord-tenant matters in Wilmington Municipal Court,
          larger civil claims in Clinton County Common Pleas Court, and business formation and estate planning for residents across the
          county.
        </p>
        <PointGrid
          points={[
            { title: 'Civil litigation', body: 'Contract disputes, landlord-tenant evictions, security deposit claims (ORC Chapter 5321).' },
            { title: 'Personal injury', body: 'Auto accidents, premises liability and other tort claims.' },
            { title: 'Business formation', body: 'LLCs under ORC Chapter 1706 and business contracts.' },
            { title: 'Estate planning', body: 'Wills and powers of attorney.' },
          ]}
        />
      </Section>

      <Section title="What the firm handles in Clinton County">
        <LinkGrid links={SERVICES} columns={2} />
        <p>
          You work directly with the attorney from the first consultation through the final resolution; cases are not handed off to
          associates. Call <strong>(614) 285-5482</strong> or contact the firm online to schedule a consultation.
        </p>
        <h3>Neighboring counties</h3>
        <LinkGrid
          links={[
            { href: '/courts/greene-county', title: 'Greene County' },
            { href: '/courts/montgomery-county', title: 'Montgomery County' },
            { href: '/courts/franklin-county', title: 'Franklin County' },
          ]}
        />
      </Section>

      <LocationsWeServe title="Clinton County Legal Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
