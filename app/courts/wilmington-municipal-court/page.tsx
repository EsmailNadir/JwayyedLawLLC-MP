import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Wilmington Municipal Court Attorney',
  description:
    'OVI, misdemeanor and traffic cases at Wilmington Municipal Court (Clinton County Municipal Court), 69 N South Street, serving all of Clinton County.',
  keywords: ['Wilmington Municipal Court attorney', 'Clinton County OVI lawyer', 'Wilmington Ohio misdemeanor defense', 'Clinton County criminal attorney', 'Clinton County DUI lawyer'],
  openGraph: {
    title: 'Wilmington Municipal Court Attorney | Jwayyed Law LLC',
    description: 'OVI, misdemeanor and traffic defense at Wilmington Municipal Court in Clinton County.',
    url: 'https://www.jjlawohio.com/courts/wilmington-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/wilmington-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Clinton County', href: '/courts/clinton-county' },
  { label: 'Wilmington Municipal Court', href: '/courts/wilmington-municipal-court' },
];

const faqs = [
  {
    question: 'What types of cases does Wilmington Municipal Court handle?',
    answer:
      'Wilmington Municipal Court (officially the Clinton County Municipal Court) handles misdemeanor criminal cases, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000 and small claims arising throughout Clinton County. Wilmington, the county seat, hosts the primary municipal court for the whole county. Felony charges are bound over to the Clinton County Common Pleas Court. The firm does not handle juvenile, probate or immigration matters in this court.',
  },
  {
    question: 'Where is Wilmington Municipal Court located?',
    answer:
      'At 69 N South Street, Wilmington, OH 45177. Wilmington is the county seat of Clinton County, a rural county in southwestern Ohio. The court serves all of Clinton County, including Sabina, Blanchester, Clarksville and Port William. US 68 runs north-south through the county and is a common source of OVI and traffic charges heard here.',
  },
  {
    question: 'What are the OVI penalties in Wilmington Municipal Court under current Ohio law?',
    answer:
      'Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI carries a mandatory minimum 3 days in jail (or a 3-day driver intervention program), fines of $565 to $1,075, a class five license suspension of 1 to 3 years, and 6 points on your license. A high-tier first OVI (BAC 0.17% or higher, or a test refusal with a prior refusal) carries a mandatory minimum of 6 days in jail. HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed, which matters for rural Clinton County residents who rely on their vehicles.',
  },
  {
    question: 'What is the 30-day ALS appeal deadline after a Clinton County OVI arrest?',
    answer:
      'Under ORC 4511.191, an Administrative License Suspension (ALS) takes effect at arrest when you test above 0.08% BAC or refuse a chemical test in Clinton County. You have exactly 30 days from the arrest date to appeal it to Wilmington Municipal Court. Missing the deadline permanently forfeits your right to challenge the suspension administratively. An attorney files the appeal and supporting memorandum within the window and can challenge the traffic stop and the chemical test at the same time.',
  },
  {
    question: 'Does Wilmington Municipal Court handle rural road OVI charges, including animal-vehicle collision scenarios?',
    answer:
      "Yes. In rural Clinton County, OVI charges sometimes follow accidents involving deer, farm equipment or other hazards on roads such as US 68 and SR 73. An accident alone does not establish impairment. The firm challenges both the basis for the OVI charge and the accident causation analysis, and investigates road conditions, sight lines and the circumstances of the incident.",
  },
  {
    question: 'What misdemeanor criminal charges are common in Wilmington Municipal Court?',
    answer:
      "Misdemeanor assault (ORC 2903.13), domestic violence (ORC 2919.25), theft (ORC 2913.02), criminal trespass, disorderly conduct and drug possession (minor misdemeanor marijuana under 100g, ORC 2925.11). The county's agricultural character also produces property-related misdemeanor cases. Under ORC 2929.21, an M1 conviction carries up to 180 days in jail and a $1,000 fine. Many misdemeanor convictions can be sealed under ORC 2953.32 after a one-year waiting period from final discharge.",
  },
  {
    question: 'Can I get limited driving privileges after a Clinton County OVI charge?',
    answer:
      'Yes. Wilmington Municipal Court can grant limited driving privileges (LDP) for work, school, medical appointments and other essential travel under ORC 4510.021. Under HB 37, the 15-day hard suspension before LDP is available has been eliminated for non-refusal first OVI offenses when an ignition interlock device is installed. For rural Clinton County residents without public transit, keeping privileges matters, and the firm petitions for LDP as early as possible.',
  },
  {
    question: 'Do I need an attorney for Wilmington Municipal Court charges?',
    answer:
      'For any criminal, OVI or serious traffic matter, it is strongly advisable. In a smaller rural county, misdemeanor and OVI convictions can carry real community and professional consequences. An attorney can file suppression motions, challenge the admissibility of evidence, negotiate with the Clinton County prosecuting attorney, and represent you at trial. The firm represents defendants in Clinton County Municipal Court and across southwestern Ohio.',
  },
];

export default function WilmingtonMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Wilmington Municipal Court"
        description="Wilmington Municipal Court, officially the Clinton County Municipal Court, sits at 69 N South Street and hears misdemeanor, OVI and traffic cases from all of Clinton County."
      />

      <Section
        title="The court at a glance"
        intro={<p>Clinton County is a rural county in southwestern Ohio on US 68, between Columbus and Cincinnati. Wilmington is the county seat.</p>}
      >
        <FactTable
          title="Wilmington Municipal Court (Clinton County Municipal Court)"
          rows={[
            { label: 'Address', value: '69 N South Street, Wilmington, OH 45177' },
            { label: 'Covers', value: 'All of Clinton County, including Sabina, Blanchester, Clarksville and Port William' },
            {
              label: 'Hears',
              value: 'Misdemeanor criminal cases, OVI/DUI under ORC 4511.19, traffic violations, civil disputes up to $15,000, small claims',
            },
            { label: 'Felonies', value: 'Bound over to the Clinton County Common Pleas Court' },
            { label: 'Roads', value: 'US 68 and SR 73' },
          ]}
        />
      </Section>

      <Section title="OVI cases in Clinton County" tone="ice">
        <p>
          OVI arrests in Clinton County often come from US 68 and SR 73 enforcement. On rural roads, an accident with an animal, bad
          road conditions or farm equipment can be mistaken for an impairment-related event.
        </p>
        <FactTable
          title="First OVI under ORC 4511.19 and HB 37 (effective April 9, 2025)"
          rows={[
            { label: 'Jail', value: 'Mandatory minimum 3 days, or a 3-day driver intervention program' },
            { label: 'Fines', value: '$565 to $1,075' },
            { label: 'License', value: 'Class five suspension of 1 to 3 years; 6 points' },
            { label: 'High-tier first OVI', value: 'BAC 0.17% or higher, or a test refusal with a prior refusal: mandatory minimum 6 days in jail' },
            {
              label: 'Hard suspension',
              value: 'HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed',
            },
          ]}
          note="For rural residents who depend on their vehicles, the path to limited driving privileges matters."
        />
        <Callout title="Appeal the license suspension within 30 days">
          The 30-day ALS appeal window under ORC 4511.191 runs from the date of arrest. Contact the office right away.
        </Callout>
        <PointGrid
          points={[
            { title: 'The full circumstances', body: 'Road conditions, sight lines and what caused any accident.' },
            { title: 'The stop', body: 'The legal basis for stopping you.' },
            { title: 'Field sobriety tests', body: 'How they were given and under what conditions.' },
            { title: 'The breath test', body: 'Calibration of the testing instrument.' },
          ]}
        />
      </Section>

      <Section title="Misdemeanor charges in Clinton County">
        <p>The court also hears misdemeanor assault, domestic violence (ORC 2919.25), theft, drug possession and disorderly conduct.</p>
        <FactTable
          title="Penalties"
          rows={[{ label: 'M1 maximum', value: 'Up to 180 days in jail and a $1,000 fine (ORC 2929.21)' }]}
        />
        <p>
          In a smaller rural county, a misdemeanor conviction can carry real reputational and professional consequences. The firm
          files suppression motions, seeks dismissal or reduced charges, and tries cases when needed.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <p>
          Call (614) 285-5482 or use the <Link href="/contact">contact page</Link> for representation in Wilmington Municipal Court.
        </p>
        <LinkGrid
          links={[
            { href: '/courts/clinton-county', title: 'Clinton County courts', subtitle: 'Every court in the county' },
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
