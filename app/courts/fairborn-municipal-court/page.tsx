import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Fairborn Municipal Court Attorney',
  description:
    'OVI, misdemeanor and traffic cases at Fairborn Municipal Court, 1148 Kauffman Ave, which hears cases from Fairborn, Beavercreek and Bath Township.',
  keywords: ['Fairborn Municipal Court attorney', 'Greene County OVI lawyer', 'Fairborn misdemeanor defense', 'Wright-Patterson AFB OVI defense', 'Beavercreek criminal attorney'],
  openGraph: {
    title: 'Fairborn Municipal Court Attorney | Jwayyed Law LLC',
    description: 'OVI, misdemeanor and traffic defense at Fairborn Municipal Court in Greene County.',
    url: 'https://www.jjlawohio.com/courts/fairborn-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/fairborn-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'Fairborn Municipal Court', href: '/courts/fairborn-municipal-court' },
];

const faqs = [
  {
    question: 'What types of cases does Fairborn Municipal Court handle?',
    answer:
      "Misdemeanor criminal offenses, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000 and small claims arising within the court's territorial jurisdiction in Greene County. That jurisdiction includes Fairborn, Bath Township, Beavercreek, Beavercreek Township and other communities. Felony cases are bound over to the Greene County Common Pleas Court. The firm does not handle juvenile, probate or immigration matters.",
  },
  {
    question: 'Where is Fairborn Municipal Court located?',
    answer:
      'At 1148 Kauffman Ave, Fairborn, OH 45324. Fairborn is in western Greene County, next to Wright-Patterson Air Force Base and Dayton. The court handles a large volume of OVI and traffic cases, including charges from SR 444 (the main access road to Wright-Patterson AFB), US 35 and I-675.',
  },
  {
    question: 'What are the OVI penalties in Fairborn Municipal Court under current Ohio law?',
    answer:
      'Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI carries a mandatory minimum 3 days in jail (or a 3-day driver intervention program), fines of $565 to $1,075, a class five license suspension of 1 to 3 years, and 6 points on your license. A high-tier first OVI (BAC 0.17%+ or a test refusal with a prior refusal on record) carries a mandatory 6-day minimum in jail. Under HB 37, the 15-day hard suspension for non-refusal first OVI offenses is eliminated when an ignition interlock device is installed.',
  },
  {
    question: 'Does an OVI conviction in Fairborn affect military status or security clearances?',
    answer:
      'It can. For active-duty military, reservists and government contractors near Wright-Patterson AFB, an OVI conviction in Fairborn Municipal Court can carry consequences beyond the criminal sentence. The military services have their own administrative processes for misconduct on or off base, and an OVI conviction, or in some cases an arrest, may trigger review of a security clearance under Executive Order 12968 and related guidelines. The firm advises on how the criminal case intersects with those consequences and works for the criminal outcome that limits them.',
  },
  {
    question: 'What is the 30-day ALS appeal deadline after a Fairborn or Greene County OVI arrest?',
    answer:
      'An Administrative License Suspension (ALS) under ORC 4511.191 takes effect at arrest when you test above 0.08% BAC or refuse a chemical test. You have 30 days from the date of arrest to file an ALS appeal with Fairborn Municipal Court. Missing the deadline forfeits your right to challenge the suspension. The firm files the appeal and supporting motion promptly and pursues suppression of the traffic stop and the chemical test at the same time.',
  },
  {
    question: 'What misdemeanor criminal charges are common in Fairborn Municipal Court?',
    answer:
      "Misdemeanor assault (ORC 2903.13), domestic violence (ORC 2919.25), theft (ORC 2913.02), disorderly conduct, drug possession and other M1 to M4 charges. The Beavercreek and Fairborn area's retail corridors produce many theft and disorderly conduct cases. Under ORC 2929.21, an M1 conviction carries up to 180 days in jail and a $1,000 fine. Many misdemeanor convictions are eligible for sealing under ORC 2953.32 after a one-year waiting period from final discharge.",
  },
  {
    question: 'Can I get limited driving privileges after an OVI charge in Fairborn Municipal Court?',
    answer:
      'Yes. Fairborn Municipal Court can grant limited driving privileges (LDP) for work, school, medical appointments and other essential travel under ORC 4510.021. Under HB 37, for non-refusal first OVI offenses, the former mandatory 15-day hard suspension before LDP is available has been eliminated when an ignition interlock device is installed. The firm pursues LDP at the earliest opportunity so you can keep working while the case proceeds.',
  },
  {
    question: 'Does Fairborn Municipal Court handle charges from Beavercreek and Bath Township?',
    answer:
      "Yes. The court's territorial jurisdiction includes Beavercreek, Bath Township and other communities as well as the city of Fairborn. Beavercreek is a large suburban community next to Fairborn, and traffic enforcement along SR 35, I-675 and US 35 produces cases heard here. If you were cited or arrested in Beavercreek or Bath Township, your case will typically be filed in Fairborn Municipal Court, unless the charge is a felony, which goes to the Greene County Common Pleas Court.",
  },
];

export default function FairbornMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Fairborn Municipal Court"
        description="Fairborn Municipal Court at 1148 Kauffman Ave hears misdemeanor, OVI and traffic cases from Fairborn, Beavercreek, Bath Township and the area around Wright-Patterson Air Force Base."
      />

      <Section
        title="The court at a glance"
        intro={<p>The court serves western Greene County, next to Wright-Patterson Air Force Base and Dayton.</p>}
      >
        <FactTable
          title="Fairborn Municipal Court"
          rows={[
            { label: 'Address', value: '1148 Kauffman Ave, Fairborn, OH 45324' },
            { label: 'Covers', value: 'Fairborn, Bath Township, Beavercreek, Beavercreek Township and other communities' },
            {
              label: 'Hears',
              value: 'Misdemeanor criminal offenses, OVI/DUI under ORC 4511.19, traffic violations, civil disputes up to $15,000, small claims',
            },
            { label: 'Felonies', value: 'Bound over to the Greene County Common Pleas Court' },
            { label: 'Roads', value: 'SR 444 (the main access road to Wright-Patterson AFB), US 35 and I-675' },
          ]}
        />
      </Section>

      <Section title="OVI cases in Fairborn and Beavercreek" tone="ice">
        <p>Traffic is heavy on US 35, SR 444 and I-675, and OVI enforcement is active on all three.</p>
        <FactTable
          title="First OVI under ORC 4511.19 and HB 37 (effective April 9, 2025)"
          rows={[
            { label: 'Jail', value: 'Mandatory minimum 3 days, or a 3-day driver intervention program' },
            { label: 'Fines', value: '$565 to $1,075' },
            { label: 'License', value: 'Class five suspension of 1 to 3 years; 6 points' },
            { label: 'High-tier first OVI', value: 'BAC 0.17%+ or a test refusal with a prior refusal on record: mandatory 6-day minimum' },
            {
              label: 'Hard suspension',
              value: 'HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed',
            },
          ]}
        />
        <Callout title="Appeal the license suspension within 30 days">
          The 30-day window to appeal the Administrative License Suspension under ORC 4511.191 runs from the date of arrest. Contact
          the office right away.
        </Callout>
        <h3>Military personnel and contractors</h3>
        <p>
          For military personnel and government contractors near Wright-Patterson AFB, an OVI conviction carries risks beyond the
          sentence, including possible security clearance review. The firm uses suppression motions, the ALS appeal and plea
          negotiation to protect both your record and your career.
        </p>
      </Section>

      <Section title="Misdemeanor charges in Greene County">
        <p>The court also hears misdemeanor assault, domestic violence (ORC 2919.25), theft, drug possession and disorderly conduct.</p>
        <FactTable
          title="Penalties and sealing"
          rows={[
            { label: 'M1 maximum', value: 'Up to 180 days in jail and a $1,000 fine (ORC 2929.21)' },
            { label: 'Record sealing', value: 'Many misdemeanor convictions can be sealed under ORC 2953.32 after a one-year waiting period' },
          ]}
        />
        <PointGrid
          points={[
            { title: 'Suppression', body: 'Challenging evidence from an unlawful stop or search.' },
            { title: 'Plea negotiation', body: 'Working toward a reduced charge.' },
            { title: 'Diversion', body: 'Where the case and your record qualify.' },
            { title: 'Sealing', body: 'Clearing an eligible conviction after the waiting period.' },
          ]}
        />
      </Section>

      <Section title="Related pages" tone="ice">
        <p>
          Call (614) 285-5482 or use the <Link href="/contact">contact page</Link> for representation in Fairborn Municipal Court.
        </p>
        <LinkGrid
          links={[
            { href: '/courts/greene-county', title: 'Greene County courts', subtitle: 'Every court in the county' },
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
