import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Delaware County Municipal Court Attorney',
  description:
    'OVI, misdemeanor and traffic cases at Delaware County Municipal Court, 70 N. Union St, Delaware, Ohio, about 25 miles north of Columbus.',
  keywords: ['Delaware County Municipal Court attorney', 'Delaware County OVI lawyer', 'Delaware County misdemeanor defense', 'Delaware Ohio criminal attorney', 'OVI lawyer Delaware Ohio'],
  openGraph: {
    title: 'Delaware County Municipal Court Attorney | Jwayyed Law LLC',
    description: 'OVI, misdemeanor and traffic defense at Delaware County Municipal Court.',
    url: 'https://www.jjlawohio.com/courts/delaware-county-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/delaware-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Delaware County', href: '/courts/delaware-county' },
  { label: 'Delaware County Municipal Court', href: '/courts/delaware-county-municipal-court' },
];

const faqs = [
  {
    question: 'What types of cases does Delaware County Municipal Court handle?',
    answer:
      'Misdemeanor criminal cases, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000 and small claims arising in Delaware County. The court covers Delaware city and the unincorporated areas and townships of the county. Felony charges are bound over to the Delaware County Common Pleas Court. The firm does not handle juvenile, probate or immigration matters.',
  },
  {
    question: 'Where is Delaware County Municipal Court located?',
    answer:
      "At 70 N. Union St, Delaware, OH 43015, in downtown Delaware, the county seat, about 25 miles north of Columbus on US 23. The court handles a growing volume of OVI and traffic cases as Delaware County's residential and commercial development grows along US 23 and State Route 36/37.",
  },
  {
    question: 'What are the OVI penalties in Delaware County Municipal Court?',
    answer:
      'Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI carries a mandatory minimum 3 days in jail (or a 3-day driver intervention program), fines of $565 to $1,075, a class five license suspension of 1 to 3 years, and 6 points on your license. A high-tier first OVI (BAC 0.17+ or a test refusal with a prior refusal) carries 6 mandatory days. HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed, so limited driving privileges can be restored faster.',
  },
  {
    question: 'How do I appeal my Administrative License Suspension (ALS) after a Delaware County OVI arrest?',
    answer:
      'If you tested above 0.08% or refused a chemical test, an ALS under ORC 4511.191 takes effect at arrest. You have 30 days from the arrest date to appeal it to Delaware County Municipal Court. The appeal and supporting motion must be filed within that window, or you lose the right to challenge the suspension administratively. The firm files ALS appeals promptly and challenges the stop, the testing procedures and the basis for the field sobriety tests at the same time.',
  },
  {
    question: 'Does Delaware County Municipal Court handle traffic offenses on US 23?',
    answer:
      "Yes. US 23 is one of the main north-south corridors through Delaware County, and the court hears many speeding, reckless operation and OVI charges from US 23 enforcement. State Route 36/37 and US 42 also produce traffic cases in the court's jurisdiction. Points on an Ohio license are governed by ORC 4510.036: 12 points in two years triggers a mandatory license suspension. An attorney can challenge the underlying violation to keep points off your record.",
  },
  {
    question: 'Can I get limited driving privileges after a Delaware County OVI charge?',
    answer:
      'Yes. Delaware County Municipal Court can grant limited driving privileges (LDP) for work, school, medical appointments and other essential purposes under ORC 4510.021. Under HB 37, the former 15-day hard suspension before LDP eligibility has been eliminated for non-refusal first OVI offenses when the defendant installs an ignition interlock device. The firm petitions for LDP at the earliest opportunity.',
  },
  {
    question: 'What misdemeanor criminal charges are common in Delaware County Municipal Court?',
    answer:
      "Misdemeanor assault (ORC 2903.13), domestic violence (ORC 2919.25), theft (ORC 2913.02), criminal trespass, drug possession (minor misdemeanor marijuana under 100g under ORC 2925.11), disorderly conduct and other M1 to M4 offenses. The county's population growth has also increased cases from residential developments in the Powell, Lewis Center and Westerville areas the court serves. The maximum penalty under ORC 2929.21 for an M1 offense is 180 days in jail and a $1,000 fine.",
  },
  {
    question: 'Do I need an attorney for Delaware County Municipal Court?',
    answer:
      'For any criminal, OVI or serious traffic matter, yes. Misdemeanor convictions, including OVI, create permanent criminal records, bring license suspensions and can affect employment. An attorney can file suppression motions challenging the stop or the chemical test, negotiate with prosecutors for reduced charges or dismissal, and represent you at trial. Delaware County has an active prosecutor’s office.',
  },
];

export default function DelawareCountyMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Delaware County Municipal Court"
        description="Delaware County Municipal Court at 70 N. Union St hears misdemeanor, OVI and traffic cases from Delaware city and the county's townships, including stops on US 23."
      />

      <Section
        title="The court at a glance"
        intro={
          <p>
            Delaware County is one of Ohio&rsquo;s fastest-growing counties: a suburban area north of Columbus on the US 23 corridor,
            with communities like Powell, Lewis Center and Dublin.
          </p>
        }
      >
        <FactTable
          title="Delaware County Municipal Court"
          rows={[
            { label: 'Address', value: '70 N. Union St, Delaware, OH 43015' },
            { label: 'Location', value: 'Downtown Delaware, the county seat, about 25 miles north of Columbus on US 23' },
            { label: 'Covers', value: 'Delaware city and the unincorporated areas and townships of Delaware County' },
            {
              label: 'Hears',
              value: 'Misdemeanor criminal cases, OVI/DUI under ORC 4511.19, traffic violations, civil disputes up to $15,000, small claims',
            },
            { label: 'Felonies', value: 'Bound over to the Delaware County Common Pleas Court' },
            { label: 'Roads', value: 'US 23, SR 36/37, SR 315 and US 42' },
          ]}
        />
      </Section>

      <Section title="OVI cases in Delaware County" tone="ice">
        <p>
          State highway enforcement is active on US 23, SR 36/37 and SR 315. OVI arrests often happen in the US 23 corridor and near
          the entertainment districts in Powell and Lewis Center.
        </p>
        <FactTable
          title="First OVI under ORC 4511.19 and HB 37 (effective April 9, 2025)"
          rows={[
            { label: 'Jail', value: 'Mandatory minimum 3 days, or a 3-day driver intervention program' },
            { label: 'Fines', value: '$565 to $1,075' },
            { label: 'License', value: 'Class five suspension of 1 to 3 years; 6 points' },
            { label: 'High-tier first OVI', value: 'BAC 0.17+ or a test refusal with a prior refusal: 6 mandatory days' },
            {
              label: 'Hard suspension',
              value: 'HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed',
            },
          ]}
        />
        <Callout title="Appeal the license suspension within 30 days">
          The 30-day deadline to appeal the Administrative License Suspension under ORC 4511.191 starts at arrest. Contact the office
          right away.
        </Callout>
        <PointGrid
          points={[
            { title: 'The stop', body: 'The basis for the traffic stop.' },
            { title: 'Field sobriety tests', body: 'How the standardized tests were administered.' },
            { title: 'The breath test', body: 'The DataMaster breath instrument records.' },
            { title: 'Points', body: 'Under ORC 4510.036, 12 points in two years triggers a mandatory suspension, so the underlying violation is worth challenging.' },
          ]}
        />
      </Section>

      <Section title="Misdemeanor charges in Delaware County">
        <p>
          The court hears domestic violence (ORC 2919.25), assault, theft, disorderly conduct and drug possession, among other
          misdemeanors.
        </p>
        <FactTable
          title="Penalties and sealing"
          rows={[
            { label: 'M1 maximum', value: 'Up to 180 days in jail and a $1,000 fine (ORC 2929.21)' },
            {
              label: 'Record sealing',
              value: 'Many misdemeanor convictions can be sealed under ORC 2953.32 after a one-year waiting period, removing the record from most background checks',
            },
          ]}
        />
        <p>The firm works toward dismissal, diversion or reduced charges, depending on the facts of your case.</p>
      </Section>

      <Section title="Related pages" tone="ice">
        <p>
          Call (614) 285-5482 or use the <Link href="/contact">contact page</Link> for representation in Delaware County Municipal
          Court.
        </p>
        <LinkGrid
          links={[
            { href: '/courts/delaware-county', title: 'Delaware County courts', subtitle: 'Every court in the county' },
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
