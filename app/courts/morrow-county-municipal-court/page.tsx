import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Morrow County Municipal Court Attorney',
  description:
    'OVI, misdemeanor and traffic cases at Morrow County Municipal Court, 48 E High St, Mount Gilead, which serves all of Morrow County, Ohio.',
  keywords: ['Morrow County Municipal Court attorney', 'Morrow County OVI lawyer', 'Mount Gilead misdemeanor defense', 'Morrow County criminal attorney', 'OVI lawyer Mount Gilead Ohio'],
  openGraph: {
    title: 'Morrow County Municipal Court Attorney | Jwayyed Law LLC',
    description: 'OVI, misdemeanor and traffic defense at Morrow County Municipal Court in Mount Gilead.',
    url: 'https://www.jjlawohio.com/courts/morrow-county-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/morrow-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Morrow County', href: '/courts/morrow-county' },
  { label: 'Morrow County Municipal Court', href: '/courts/morrow-county-municipal-court' },
];

const faqs = [
  {
    question: 'What types of cases does Morrow County Municipal Court handle?',
    answer:
      'Misdemeanor criminal offenses, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000 and small claims arising in Morrow County. Mount Gilead, the county seat, hosts the primary municipal court for the county. Felony charges are bound over to the Morrow County Common Pleas Court. The firm does not handle juvenile, probate or immigration matters in this court.',
  },
  {
    question: 'Where is Morrow County Municipal Court located?',
    answer:
      'At 48 E High St, Mount Gilead, OH 43338. Mount Gilead is the county seat of Morrow County, a rural county about 40 miles north of Columbus. The court serves all of Morrow County, which is crossed by US 42 (a key north-south route), SR 61 and other state routes. Court hours are generally Monday through Friday; an attorney can tell you the hearing schedule for your case.',
  },
  {
    question: 'What are the OVI penalties in Morrow County Municipal Court under HB 37?',
    answer:
      'Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI in Morrow County carries a mandatory minimum 3 days in jail (or a 3-day driver intervention program), fines of $565 to $1,075, a class five license suspension of 1 to 3 years, and 6 points on your license. A first high-tier OVI (BAC 0.17% or higher) carries a mandatory 6-day minimum. HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when the defendant installs an ignition interlock device, which allows faster access to limited driving privileges.',
  },
  {
    question: 'Does Morrow County Municipal Court handle traffic cases from US 42?',
    answer:
      'Yes. US 42 runs through Morrow County and is a primary enforcement corridor for the Ohio State Highway Patrol and local law enforcement. OVI, speeding and reckless operation charges from US 42 stops in the county are typically heard in Morrow County Municipal Court. SR 61 and other rural roads also produce traffic cases. The firm challenges both the validity of the stop and the basis for any charge that followed.',
  },
  {
    question: 'What is the deadline to appeal an Administrative License Suspension (ALS) after a Morrow County OVI arrest?',
    answer:
      'Under ORC 4511.191, an ALS takes effect at arrest when you test above the legal limit or refuse a chemical test. You have exactly 30 days from the arrest date to file an ALS appeal with Morrow County Municipal Court. Missing the deadline permanently forfeits your right to challenge the administrative suspension. An attorney files the appeal and supporting motion within the window and can challenge the stop and the chemical test at the same time.',
  },
  {
    question: 'What common misdemeanor charges are heard in Morrow County Municipal Court?',
    answer:
      'Misdemeanor assault (ORC 2903.13), domestic violence (ORC 2919.25), theft (ORC 2913.02), criminal trespass, disorderly conduct, drug possession (minor misdemeanor marijuana under 100g under ORC 2925.11) and other M1 to M4 offenses. Rural Morrow County also produces agricultural trespass, hunting violation and property-related cases. Under ORC 2929.21, an M1 conviction can include up to 180 days in jail and a $1,000 fine.',
  },
  {
    question: 'Can I get limited driving privileges in Morrow County Municipal Court after an OVI?',
    answer:
      'Yes. The court can grant limited driving privileges (LDP) for work, school, medical and other necessary purposes under ORC 4510.021. Under HB 37, for non-refusal first OVI offenses, the 15-day hard suspension before LDP is available has been eliminated when an ignition interlock device is installed. That matters in rural Morrow County, where public transportation is limited. The firm petitions for LDP as quickly as possible.',
  },
  {
    question: 'Do I need an attorney for Morrow County Municipal Court charges?',
    answer:
      'For any misdemeanor, OVI or serious traffic matter, it is important. In a smaller rural county, a conviction can weigh on your reputation and employment, and local employers commonly run background checks. An attorney can file suppression motions, negotiate with prosecutors, and defend your case at trial if needed.',
  },
];

export default function MorrowCountyMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Morrow County Municipal Court"
        description="Morrow County Municipal Court at 48 E High St in Mount Gilead hears misdemeanor, OVI and traffic cases from all of Morrow County, including stops on US 42."
      />

      <Section
        title="The court at a glance"
        intro={<p>Morrow County is a rural county about 40 miles north of Columbus. Mount Gilead, the county seat, hosts its municipal court.</p>}
      >
        <FactTable
          title="Morrow County Municipal Court"
          rows={[
            { label: 'Address', value: '48 E High St, Mount Gilead, OH 43338' },
            { label: 'Hours', value: 'Generally Monday through Friday; ask an attorney about the hearing schedule for your case' },
            { label: 'Covers', value: 'All of Morrow County' },
            {
              label: 'Hears',
              value: 'Misdemeanor criminal offenses, OVI/DUI under ORC 4511.19, traffic violations, civil disputes up to $15,000, small claims',
            },
            { label: 'Felonies', value: 'Bound over to the Morrow County Common Pleas Court' },
            { label: 'Roads', value: 'US 42 and SR 61' },
          ]}
        />
      </Section>

      <Section title="OVI cases in Morrow County" tone="ice">
        <p>
          The Ohio State Highway Patrol actively patrols US 42 through Morrow County. OVI arrests in the county often follow traffic
          stops on US 42 and SR 61.
        </p>
        <FactTable
          title="First OVI under ORC 4511.19 and HB 37 (effective April 9, 2025)"
          rows={[
            { label: 'Jail', value: 'Mandatory minimum 3 days, or a 3-day driver intervention program' },
            { label: 'Fines', value: '$565 to $1,075' },
            { label: 'License', value: 'Class five suspension of 1 to 3 years; 6 points' },
            { label: 'High-tier first OVI', value: 'BAC 0.17% or higher: mandatory 6-day minimum' },
            {
              label: 'Hard suspension',
              value: 'HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed',
            },
          ]}
          note="Keeping limited driving privileges matters for rural residents who depend on their vehicles."
        />
        <Callout title="Appeal the license suspension within 30 days">
          The 30-day deadline to appeal the Administrative License Suspension under ORC 4511.191 starts at arrest.
        </Callout>
        <PointGrid
          points={[
            { title: 'The stop', body: 'The basis for every stop.' },
            { title: 'Field sobriety tests', body: 'How the standardized tests were administered.' },
            { title: 'Breath testing', body: 'Calibration and maintenance records for the instrument.' },
            { title: 'Driving privileges', body: 'Limited driving privileges under ORC 4510.021.' },
          ]}
        />
      </Section>

      <Section title="Misdemeanor charges in Morrow County">
        <p>The court also hears assault, domestic violence, theft, drug possession and disorderly conduct charges.</p>
        <FactTable
          title="Penalties"
          rows={[{ label: 'M1 maximum', value: 'Up to 180 days in jail and a $1,000 fine (ORC 2929.21)' }]}
        />
        <p>
          In a small rural county, a misdemeanor conviction can have an outsized effect on community standing and employment. The
          firm looks at every defense and seeks suppression or dismissal where the facts support it.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <p>
          Call (614) 285-5482 or use the <Link href="/contact">contact page</Link> for representation in Morrow County Municipal Court.
        </p>
        <LinkGrid
          links={[
            { href: '/courts/morrow-county', title: 'Morrow County courts', subtitle: 'Every court in the county' },
            { href: '/ovi-dui-defense', title: 'OVI/DUI defense', subtitle: 'Penalties and defenses across Ohio' },
            { href: '/criminal-defense', title: 'Criminal defense', subtitle: 'Misdemeanor charges across Ohio' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
