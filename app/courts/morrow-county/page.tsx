import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Morrow County Court Representation',
  description:
    'Morrow County Municipal Court and Common Pleas Court in Mt. Gilead: addresses, what each hears, and the OVI, criminal, injury and business cases the firm handles.',
  keywords: [
    'Morrow County court attorney',
    'OVI lawyer Morrow County Ohio',
    'Morrow County Municipal Court attorney',
    'Mt. Gilead criminal defense attorney',
    'Morrow County DUI lawyer',
    'rural Ohio OVI attorney',
  ],
  openGraph: {
    title: 'Morrow County Court Representation | Jwayyed Law LLC',
    description: 'The two Morrow County courts in Mt. Gilead and the cases the firm handles there.',
    url: 'https://www.jjlawohio.com/courts/morrow-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/morrow-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Morrow County', href: '/courts/morrow-county' },
];

const faqs = [
  {
    question: 'What courts handle OVI and criminal cases in Morrow County?',
    answer:
      'Morrow County has two main courts. Morrow County Municipal Court at 60 E. High St, Mt. Gilead, OH 43338 handles misdemeanor criminal cases, OVI/DUI charges, traffic violations and civil disputes under $15,000. Morrow County Common Pleas Court at 48 E. High St, Mt. Gilead, OH 43338 handles felony cases and larger civil matters. An OVI or misdemeanor charge in Mt. Gilead, Cardington, Marengo, Edison or Chesterville will most likely be heard in Municipal Court. A fourth- or fifth-offense felony OVI, or any other felony, goes through Common Pleas. The firm represents clients in both courts.',
  },
  {
    question: 'I was stopped for OVI on a rural road in Morrow County. What are my rights?',
    answer:
      "Ohio's OVI statute, ORC 4511.19, prohibits operating a vehicle with a BAC of 0.08 or higher, or while impaired by alcohol or drugs. In rural Morrow County, police may stop drivers based on observed driving, and sobriety checkpoints are permitted under Ohio law. You have the right to remain silent beyond providing your license, registration and proof of insurance. Field sobriety tests are voluntary, though a refusal can still be used as evidence. Refusing a chemical test (breath, blood or urine) triggers an automatic Administrative License Suspension, which you then have 30 days to appeal in Morrow County Municipal Court. An OVI attorney can challenge the stop, the field sobriety tests and the chemical test results.",
  },
  {
    question: 'What is the 30-day ALS appeal deadline and how does it affect Morrow County residents?',
    answer:
      "When a Morrow County driver is arrested for OVI and refuses or fails a chemical test, the Ohio Bureau of Motor Vehicles automatically suspends the license. This is the Administrative License Suspension (ALS). You have exactly 30 days from the date of arrest to file an ALS appeal with Morrow County Municipal Court. In a rural county with essentially no public transportation, where most residents rely on their vehicles for work, family and errands, a suspension can be economically devastating. A timely ALS appeal, and possibly limited driving privileges while the case is pending, is one of the most important early steps. Contact Jwayyed Law LLC right after an OVI arrest.",
  },
  {
    question: 'What misdemeanor charges are common in Morrow County courts?',
    answer:
      'Disorderly conduct, domestic violence (often a first-degree misdemeanor under ORC 2919.25), criminal damaging, petty theft, drug paraphernalia possession and assault, along with traffic offenses such as reckless operation, driving under suspension and hit-and-run. A first-degree misdemeanor carries up to 180 days in jail and fines up to $1,000. Under ORC 2935.26, officers may issue a citation instead of an arrest for minor misdemeanors, but more serious misdemeanors mean a formal arrest and court process. The firm looks at every case for defenses from the first court appearance through resolution.',
  },
  {
    question: 'Can I get my Morrow County conviction expunged?',
    answer:
      "Many people are eligible to have past convictions sealed under Ohio's expungement statute, ORC 2953.31. For misdemeanor convictions, you may apply one year after completing your sentence. For eligible felony convictions, the waiting period is generally three years. Sealing hides the record from public view, which helps with employment, housing and professional licensing. OVI convictions, most violent felonies and certain sex offenses cannot be sealed, but many first-time, non-violent offenders qualify. The firm can review your Morrow County record and explain your options.",
  },
  {
    question: 'Does Jwayyed Law LLC handle personal injury cases in Morrow County?',
    answer:
      'Yes: car accidents on U.S. Route 42, State Route 61 and other Morrow County roads, slip-and-fall incidents, dog bites and other injuries. Under ORC 2305.10, Ohio has a two-year statute of limitations for most personal injury claims, so you must file within two years of the injury or lose the right to recover. The firm can evaluate your claim, deal with the insurance companies, and pursue compensation for medical expenses, lost wages, and pain and suffering.',
  },
  {
    question: 'Can Jwayyed Law LLC help me start a small business or farm operation in Morrow County?',
    answer:
      'Yes. The firm forms limited liability companies (LLCs) under ORC Chapter 1706, which protect your personal assets from business debts and liabilities, and also works with general partnerships, sole proprietorships and other structures. For agricultural operations it can help with land use agreements, contracts for goods and services, and business succession planning. It also handles commercial landlord-tenant disputes and contract review for business clients in Morrow County and central Ohio.',
  },
  {
    question: 'Why should I hire a Columbus-area attorney for my Morrow County case?',
    answer:
      'Morrow County is about 45 minutes north of Columbus, inside the firm’s regular service area, and the firm regularly represents clients in central Ohio courts, including Morrow County Municipal Court and Common Pleas Court. An attorney can challenge the evidence, find procedural defects, negotiate with prosecutors, and push for diversion, dismissal or reduced charges. On an OVI, breath testing, field sobriety tests and ALS appeals are technical. Call (614) 285-5482 to schedule a consultation.',
  },
];

const linkClass = 'text-sky-deep underline';

const SERVICES = [
  {
    href: '/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court',
    title: 'OVI/DUI defense',
    subtitle: 'Breath and blood test challenges and ALS appeals within the 30-day deadline',
  },
  {
    href: '/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court',
    title: 'Misdemeanor criminal defense',
    subtitle: 'Disorderly conduct, domestic violence, petty theft, drug offenses and more',
  },
  { href: '/locations/morrow-county/personal-injury-morrow-county', title: 'Personal injury', subtitle: 'Claims within the two-year limit under ORC 2305.10' },
  {
    href: '/locations/morrow-county/business-formation-llc-morrow-county',
    title: 'Business formation and LLC',
    subtitle: 'LLCs under ORC Chapter 1706, operating agreements, contracts for businesses and farms',
  },
];

export default function MorrowCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Morrow County courts"
        description="Morrow County cases are heard in Mt. Gilead, in Municipal Court for misdemeanors, OVI and traffic or in Common Pleas for felonies. After an OVI arrest you have 30 days to appeal the suspension."
      />

      <Section
        title="Find your court"
        intro={
          <p>
            Morrow County is a rural county about 45 minutes north of Columbus, bordered by Knox, Delaware, Marion and Richland
            counties. Mt. Gilead, the county seat, is home to both courts; Cardington, Marengo, Edison and Chesterville are among its
            other communities.
          </p>
        }
      >
        <FactTable
          title="Morrow County Municipal Court"
          rows={[
            { label: 'Address', value: '60 E. High St, Mt. Gilead, OH 43338' },
            { label: 'Hears', value: 'Misdemeanors, OVI/DUI, traffic violations, civil claims under $15,000' },
            {
              label: 'Directions',
              value: (
                <a className={linkClass} href="https://www.google.com/maps?q=60+E+High+St,+Mt+Gilead,+OH+43338" target="_blank" rel="noopener noreferrer">
                  Get directions (Google Maps)
                </a>
              ),
            },
          ]}
        />
        <FactTable
          title="Morrow County Common Pleas Court"
          rows={[
            { label: 'Address', value: '48 E. High St, Mt. Gilead, OH 43338' },
            { label: 'Hears', value: 'Felony cases, major civil disputes, domestic relations, probate' },
            {
              label: 'Directions',
              value: (
                <a className={linkClass} href="https://www.google.com/maps?q=48+E+High+St,+Mt+Gilead,+OH+43338" target="_blank" rel="noopener noreferrer">
                  Get directions (Google Maps)
                </a>
              ),
            },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[{ href: '/courts/morrow-county-municipal-court', title: 'Morrow County Municipal Court guide', subtitle: 'OVI, misdemeanors and US 42 traffic cases' }]}
        />
      </Section>

      <Section title="OVI charges in Morrow County" tone="ice">
        <p>
          Under <Link href="/ovi-dui-defense">ORC 4511.19</Link>, it is illegal to drive with a BAC of 0.08 or higher, or while impaired
          by alcohol, drugs or both.
        </p>
        <FactTable
          title="First-offense OVI"
          rows={[
            { label: 'Level', value: 'First-degree misdemeanor' },
            { label: 'Jail', value: 'Three-day term, or a mandatory driver intervention program' },
            { label: 'Fines', value: '$375 to $1,075' },
            { label: 'License', value: 'Suspension of one to three years' },
            { label: 'High tier', value: 'A BAC of 0.17 or higher brings steeper minimums' },
          ]}
        />
        <Callout title="Appeal the license suspension within 30 days">
          You have 30 days to appeal the Administrative License Suspension in Morrow County Municipal Court. With no real public
          transit, a suspension hits rural residents especially hard.
        </Callout>
      </Section>

      <Section title="Misdemeanor charges in Morrow County">
        <p>
          Morrow County Municipal Court at 60 E. High St, Mt. Gilead hears everything from disorderly conduct and petty theft to domestic
          violence and drug-related offenses. Under ORC 2935.26, minor misdemeanors may lead to a citation instead of an arrest. First-
          and second-degree misdemeanors carry up to 180 days in jail and fines up to $1,000, and create a permanent record.
        </p>
        <p>
          The firm looks for constitutional violations, weak evidence and room to negotiate reduced charges or dismissal. It also files
          expungement petitions under ORC 2953.31 for clients who have finished their sentences.
        </p>
      </Section>

      <Section title="Business, farm and injury matters" tone="ice">
        <p>
          Agriculture, small businesses and family farms drive the local economy. The firm forms LLCs under ORC Chapter 1706 and handles
          contract disputes, landlord-tenant matters and other civil litigation.
        </p>
        <p>
          For injuries from vehicle accidents on U.S. Route 42 or State Route 61, premises liability or other claims, Ohio&rsquo;s two-year
          statute of limitations under ORC 2305.10 applies.
        </p>
      </Section>

      <Section title="What the firm handles in Morrow County">
        <LinkGrid links={SERVICES} columns={2} />
        <p>
          Jwayyed Law LLC is based in Columbus and regularly serves central Ohio counties, including Morrow County, from the first
          consultation through court appearances in Mt. Gilead. Call (614) 285-5482 or contact the firm online. The firm does not handle
          immigration, juvenile or probate matters.
        </p>
      </Section>

      <LocationsWeServe title="Morrow County Legal Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
