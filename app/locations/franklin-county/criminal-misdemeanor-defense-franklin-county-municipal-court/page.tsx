import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Franklin County Criminal Defense Attorney',
  description:
    'Misdemeanor defense at Franklin County Municipal Court, 375 S. High St.: assault, theft, domestic violence and drug charges, penalties, diversion and ILC.',
  keywords: ['Franklin County Municipal Court criminal defense', 'Franklin County Municipal Court lawyer', 'Columbus misdemeanor defense attorney', 'Franklin County Municipal Court misdemeanor', 'criminal defense 375 S High St Columbus'],
  openGraph: {
    title: 'Franklin County Criminal Defense Attorney | Jwayyed Law LLC',
    description: 'Misdemeanor charges at Franklin County Municipal Court: the court, the penalties and the alternatives to conviction.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Criminal Defense at Franklin County Municipal Court', href: '/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court' },
];

const faqs = [
  {
    question: 'What types of criminal cases does Franklin County Municipal Court handle?',
    answer:
      "Franklin County Municipal Court (375 S. High St., Columbus) handles all misdemeanor criminal cases arising in Franklin County. That includes assault (R.C. 2903.13), domestic violence (R.C. 2919.25), theft and shoplifting (R.C. 2913.02), drug possession (R.C. 2925.11), disorderly conduct (R.C. 2917.11), open container (R.C. 4301.62), criminal trespass (R.C. 2911.21), criminal damaging (R.C. 2909.06), menacing (R.C. 2903.22) and violations of protection orders (R.C. 2919.27). It also takes cases transferred from suburban mayor's courts when a charge is beyond a mayor's court's jurisdiction.",
  },
  {
    question: 'What are the misdemeanor penalties at Franklin County Municipal Court?',
    answer:
      'The court follows the Ohio Revised Code sentencing structure. First-degree misdemeanors (M1): up to 180 days in jail and fines up to $1,000. Second-degree misdemeanors (M2): up to 90 days and fines up to $750. Third-degree misdemeanors (M3): up to 60 days and fines up to $500. Fourth-degree misdemeanors (M4): up to 30 days and fines up to $250. Minor misdemeanors: no jail, fines up to $150. The court can also order probation, community service, treatment programs and other alternatives to jail.',
  },
  {
    question: 'Where is Franklin County Municipal Court located and when does it operate?',
    answer:
      "Franklin County Municipal Court is at 375 S. High Street, Columbus, OH 43215, on floors 12 through 15 of the Franklin County Common Pleas courthouse. The court's phone number is (614) 645-8186. The clerk's office is open Monday through Friday, 8:00 a.m. to 5:00 p.m. Criminal arraignments are usually held on weekday mornings. The firm appears regularly at the court and knows its scheduling and procedures.",
  },
  {
    question: 'What is Intervention in Lieu of Conviction (ILC) at Franklin County Municipal Court?',
    answer:
      'Intervention in Lieu of Conviction (ILC) under R.C. 2951.041 is a diversion program at Franklin County Municipal Court for first-time offenders charged with drug-related offenses or offenses driven by substance use or mental health issues. If you complete the program (treatment, drug testing and any other conditions the court sets), the charge is dismissed without a conviction. ILC requires the prosecutor\'s consent and the court\'s approval. The firm checks ILC availability in every drug possession and substance-related misdemeanor case at FCMC.',
  },
  {
    question: 'Can I get a misdemeanor conviction expunged in Franklin County?',
    answer:
      'Yes. Most misdemeanor convictions from Franklin County Municipal Court can be expunged under R.C. 2953.32. Waiting periods from final discharge: six months for minor misdemeanors, one year for M4 through M1 misdemeanors. H.B. 96 (effective September 30, 2025) raised the number of convictions that can be sealed and lowered barriers to eligibility. OVI and domestic violence convictions cannot be expunged under Ohio law. The firm files expungement petitions at Franklin County Municipal Court.',
  },
  {
    question: 'How does Franklin County Municipal Court handle domestic violence cases?',
    answer:
      "Domestic violence charges there are prosecuted by the Columbus City Attorney's office for Columbus arrests, or the Franklin County Prosecutor for arrests in unincorporated Franklin County. Prosecution usually goes forward whether or not the alleged victim wants it to. Ohio law also requires the court to ask about firearms possession, and it may impose firearm restrictions. A domestic violence conviction permanently triggers the Lautenberg Amendment firearm ban under 18 U.S.C. § 922(g)(9). The firm pursues non-DV resolutions, including disorderly conduct pleas, in appropriate cases.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Franklin County Municipal Court criminal case?',
    answer:
      'Cases at Franklin County Municipal Court move quickly, deadlines are strict, and the prosecutors and the court have established practices that defense counsel needs to know. Jwayyed Law LLC practices regularly at the court and knows its prosecutors, judges and procedures. Whether the charge is assault, theft, domestic violence, drug possession or disorderly conduct, the firm pursues dismissal, diversion, reduction or suppression to protect your record. Call (614) 285-5482.',
  },
  {
    question: 'Do I need a lawyer for a minor misdemeanor at Franklin County Municipal Court?',
    answer:
      'It helps. A minor misdemeanor conviction is a criminal record: it appears on background checks, affects professional licensing and can be used against you later. A defense attorney can often get a dismissal, diversion or a plea arrangement that avoids a conviction record, which is much harder without counsel. Talk to an attorney before your first court date.',
  },
];

const CHARGES = [
  { href: '/locations/franklin-county/assault-defense-columbus', title: 'Assault (R.C. 2903.13)', subtitle: 'M1, with felony escalation when the victim is in a protected class' },
  { href: '/locations/franklin-county/domestic-violence-defense-columbus', title: 'Domestic violence (R.C. 2919.25)', subtitle: 'M1 baseline; a conviction brings the permanent Lautenberg firearm ban' },
  { href: '/locations/franklin-county/theft-defense-columbus', title: 'Theft and shoplifting (R.C. 2913.02)', subtitle: 'M1 for amounts up to $1,000; civil demand letters and employer consequences' },
  { href: '/locations/franklin-county/drug-possession-defense-columbus', title: 'Drug possession (R.C. 2925.11)', subtitle: 'Misdemeanor amounts, ILC eligibility and Fourth Amendment suppression' },
  { href: '/locations/franklin-county/marijuana-possession-columbus', title: 'Marijuana possession', subtitle: 'Above adult-use limits, under-21 possession and weight challenges' },
  { href: '/locations/franklin-county/disorderly-conduct-defense-columbus', title: 'Disorderly conduct (R.C. 2917.11)', subtitle: 'MM baseline; M4 if intoxicated or persistent' },
  { href: '/locations/franklin-county/open-container-defense-columbus', title: 'Open container (R.C. 4301.62)', subtitle: 'Vehicle and public-place citations, and ORA zone edge cases' },
];

export default function FCMCCriminalDefensePage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Criminal Defense in Franklin County", "serviceType": "Criminal Defense", "areaServed": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Misdemeanor defense at Franklin County Municipal Court"
        description="Every misdemeanor charged in Franklin County is heard at 375 S. High Street, whether filed there or transferred from a mayor's court. A first-degree misdemeanor carries up to 180 days in jail."
      />

      <Section
        title="Franklin County Municipal Court at a glance"
        intro={
          <p>
            A conviction here is a real criminal conviction with lasting record consequences. Call{' '}
            <a href="tel:6142855482">(614) 285-5482</a> as soon as you get a summons or are released from custody.
          </p>
        }
      >
        <FactTable
          title="Franklin County Municipal Court"
          rows={[
            { label: 'Address', value: '375 S. High Street, Columbus, OH 43215' },
            { label: 'Courtrooms', value: 'Floors 12 through 15 of the Franklin County courthouse complex.' },
            { label: 'Phone', value: '(614) 645-8186' },
            { label: "Clerk's office", value: 'Monday through Friday, 8:00 a.m. to 5:00 p.m.' },
            { label: 'Arraignments', value: 'Usually weekday mornings.' },
            { label: 'Criminal cases', value: 'All misdemeanor criminal cases arising in Franklin County.' },
            { label: 'OVI', value: 'All Administrative License Suspension (ALS) appeals, which must be filed within 30 days of an OVI arrest.' },
            { label: 'Civil', value: 'Civil cases up to $15,000 and small claims up to $6,000.' },
          ]}
        />
        <h3>Where the cases come from</h3>
        <p>
          The court takes transfers from the thirteen active suburban mayor&rsquo;s courts (Bexley, Canal Winchester, Dublin, Grove City,
          Groveport, Hilliard, Obetz, Pickerington, Reynoldsburg, Upper Arlington, Westerville, Whitehall and Worthington). Cases from
          Columbus, Grandview Heights, Marble Cliff and New Albany go directly to the Municipal Court. See{' '}
          <Link href="/locations/franklin-county/mayors-courts-franklin-county">mayor&rsquo;s courts in Franklin County</Link>.
        </p>
      </Section>

      <Section title="Charges the firm defends here" tone="ice">
        <p>
          Assault, domestic violence, theft, shoplifting, drug possession, disorderly conduct, open container and criminal damaging are
          heard daily in the courtrooms on floors 12 through 15.
        </p>
        <LinkGrid links={CHARGES} columns={2} />
      </Section>

      <Section title="Misdemeanor penalties in Ohio">
        <FactTable
          title="Maximum sentences by degree"
          rows={[
            { label: 'First-degree misdemeanor (M1)', value: 'Up to 180 days in jail; fine up to $1,000.' },
            { label: 'Second-degree misdemeanor (M2)', value: 'Up to 90 days; fine up to $750.' },
            { label: 'Third-degree misdemeanor (M3)', value: 'Up to 60 days; fine up to $500.' },
            { label: 'Fourth-degree misdemeanor (M4)', value: 'Up to 30 days; fine up to $250.' },
            { label: 'Minor misdemeanor', value: 'No jail; fine up to $150.' },
          ]}
          note="The court can also order probation, community service, treatment programs and other alternatives to jail."
        />
      </Section>

      <Section title="Ways to avoid a conviction at FCMC" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Intervention in Lieu of Conviction',
              body: 'ILC under R.C. 2951.041 covers drug-related or substance-driven offenses when you agree to complete treatment. Finishing it ends in dismissal.',
            },
            {
              title: 'Pre-trial diversion',
              body: "Offered separately through the prosecutor's office for some first-time, low-level offenses.",
            },
            {
              title: 'Specialty dockets',
              body: 'A drug court, a mental health docket and a veterans court for people whose charges stem from health or service-related issues. They offer close supervision and support in place of jail.',
            },
            {
              title: 'Expungement later',
              body: (
                <>
                  Most misdemeanor convictions here can be sealed. See{' '}
                  <Link href="/locations/franklin-county/expungement-franklin-county">expungement in Franklin County</Link>.
                </>
              ),
            },
          ]}
        />
        <p>The firm checks ILC, diversion and specialty docket eligibility in every case and argues for placement where it fits.</p>
      </Section>

      <Section title="How the court works">
        <p>
          Franklin County Municipal Court handles one of the highest volumes of criminal cases of any court in Ohio, and it moves on
          tight schedules for arraignments, pretrial hearings and trial dates. Prosecutors carry heavy caseloads and respond to defense
          counsel who have reviewed the case and come to negotiations with a clear factual and legal position. Attorneys who appear
          there regularly know its procedures, how dockets are assigned, and how particular judges handle suppression motions, plea
          negotiations and sentencing.
        </p>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>.
        </p>
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
