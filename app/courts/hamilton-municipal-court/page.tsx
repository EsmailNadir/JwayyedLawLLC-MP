import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Hamilton Municipal Court Attorney',
  description:
    'OVI/DUI defense, misdemeanor criminal charges and traffic cases at Hamilton Municipal Court, now at 700 Hanover Street in Hamilton, the Butler County seat.',
  keywords: ['Hamilton Municipal Court attorney', 'Butler County OVI lawyer', 'Hamilton Ohio misdemeanor defense', 'Hamilton Ohio criminal attorney', 'Butler County DUI lawyer', 'Hamilton OVI defense attorney', 'Hamilton DUI attorney', 'Hamilton criminal defense attorney'],
  openGraph: {
    title: 'Hamilton Municipal Court Attorney | Jwayyed Law LLC',
    description: 'OVI, misdemeanor and traffic defense at Hamilton Municipal Court in Butler County.',
    url: 'https://www.jjlawohio.com/courts/hamilton-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/hamilton-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Butler County', href: '/courts/butler-county' },
  { label: 'Hamilton Municipal Court', href: '/courts/hamilton-municipal-court' },
];

const faqs = [
  {
    question: 'What types of cases does Hamilton Municipal Court handle?',
    answer:
      'Misdemeanor criminal cases, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000 and small claims arising within the city of Hamilton and its surrounding jurisdictional area in Butler County. The court also handles landlord-tenant eviction matters and protection orders. Felony charges are bound over to the Butler County Common Pleas Court. The firm does not handle juvenile, probate or immigration matters in this court.',
  },
  {
    question: 'Where is Hamilton Municipal Court located?',
    answer:
      'At 700 Hanover Street, Hamilton, OH 45011. The court moved to this location in 2025. Hamilton is the county seat of Butler County in southwestern Ohio, about 20 miles north of Cincinnati. The court serves the city of Hamilton, which is crossed by US 27, SR 4 (Dixie Highway) and other corridors with active traffic enforcement.',
  },
  {
    question: 'What are the OVI penalties in Hamilton Municipal Court under current Ohio law?',
    answer:
      'Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI carries a mandatory minimum 3 days in jail (or a 3-day driver intervention program), fines of $565 to $1,075, a class five license suspension of 1 to 3 years, and 6 points on your license. A first high-tier OVI (BAC 0.17% or higher, or a test refusal with a prior refusal on record) carries a mandatory 6-day minimum. HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed.',
  },
  {
    question: 'What is the 30-day ALS appeal deadline after a Hamilton OVI arrest?',
    answer:
      'Under ORC 4511.191, an Administrative License Suspension (ALS) takes effect at arrest when you test above 0.08% BAC or refuse a chemical test in Hamilton or anywhere in Butler County. You have exactly 30 days from the date of arrest to file an ALS appeal with Hamilton Municipal Court, with a supporting memorandum of law. Missing the deadline forfeits your right to challenge the suspension. Contact the office right after an OVI arrest in the Hamilton area to preserve your appeal rights.',
  },
  {
    question: 'Does Hamilton Municipal Court handle traffic violations on US 27 and SR 4?',
    answer:
      'Yes. The court has jurisdiction over traffic violations and OVI charges arising within the city of Hamilton, and US 27 and SR 4 (Dixie Highway) run through the city and are actively patrolled. Under ORC 4510.036, 12 points in two years triggers a mandatory license suspension, so the firm challenges the underlying violation to keep points off your record. Speeding, reckless operation and driving under suspension charges from these corridors are among the most common cases here.',
  },
  {
    question: 'What misdemeanor criminal charges are common in Hamilton Municipal Court?',
    answer:
      'Misdemeanor assault (ORC 2903.13), domestic violence (ORC 2919.25), theft (ORC 2913.02), disorderly conduct, criminal trespass, drug possession (minor misdemeanor marijuana under 100g under ORC 2925.11) and other M1 to M4 offenses. Hamilton is a mid-size city with active commercial and residential areas, and the court hears a broad range of misdemeanors. Under ORC 2929.21, an M1 offense carries up to 180 days in jail and a $1,000 fine.',
  },
  {
    question: 'Can I get limited driving privileges after an OVI in Hamilton Municipal Court?',
    answer:
      'Yes. Hamilton Municipal Court can grant limited driving privileges (LDP) for work, school, medical appointments and other essential purposes under ORC 4510.021. Under HB 37, the mandatory 15-day hard suspension before LDP is available has been eliminated for non-refusal first OVI offenses when an ignition interlock device is installed. The firm petitions for LDP as early as possible, at or shortly after arraignment.',
  },
  {
    question: 'Can misdemeanor convictions from Hamilton Municipal Court be sealed?',
    answer:
      'Yes. Most misdemeanor convictions, M1 through M4 and minor misdemeanors, are eligible for sealing under ORC 2953.32 after a one-year waiting period from final discharge (completion of all incarceration and probation, and payment of fines and costs). Dismissed charges and not-guilty verdicts can be sealed immediately under ORC 2953.52 with no waiting period. OVI convictions under ORC 4511.19 are not sealable in Ohio. Once sealed, the record will not appear on standard background checks, and you may lawfully answer no on most private employer applications that ask about prior convictions.',
  },
];

export default function HamiltonMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Hamilton Municipal Court"
        description="Hamilton Municipal Court moved to 700 Hanover Street in 2025. It hears misdemeanor, OVI, traffic and civil cases for the city of Hamilton in Butler County."
      />

      <Section
        title="The court at a glance"
        intro={<p>Hamilton is the county seat of Butler County in southwestern Ohio, about 20 miles north of Cincinnati.</p>}
      >
        <FactTable
          title="Hamilton Municipal Court"
          rows={[
            { label: 'Address', value: '700 Hanover Street, Hamilton, OH 45011 (since 2025)' },
            { label: 'Covers', value: 'The city of Hamilton and its surrounding jurisdictional area in Butler County' },
            {
              label: 'Hears',
              value:
                'Misdemeanor criminal cases, OVI/DUI under ORC 4511.19, traffic violations, civil disputes up to $15,000, small claims, evictions, protection orders',
            },
            { label: 'Felonies', value: 'Bound over to the Butler County Common Pleas Court' },
            { label: 'Roads', value: 'US 27 and SR 4 (Dixie Highway)' },
          ]}
        />
      </Section>

      <Section title="OVI defense in Hamilton Municipal Court" tone="ice">
        <p>US 27 and SR 4 both see active OVI and traffic enforcement.</p>
        <FactTable
          title="First OVI under ORC 4511.19 and HB 37 (effective April 9, 2025)"
          rows={[
            { label: 'Jail', value: 'Mandatory minimum 3 days, or a 3-day driver intervention program' },
            { label: 'Fines', value: '$565 to $1,075' },
            { label: 'License', value: 'Class five suspension of 1 to 3 years; 6 points' },
            { label: 'High-tier first OVI', value: 'BAC 0.17% or higher, or a test refusal with a prior refusal on record: mandatory 6-day minimum' },
            {
              label: 'Hard suspension',
              value: 'HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device (IID) is installed, allowing earlier limited driving privileges',
            },
          ]}
        />
        <Callout title="Appeal the license suspension within 30 days">
          The 30-day window to appeal the Administrative License Suspension (ALS) under ORC 4511.191 runs from the date of arrest.
        </Callout>
        <PointGrid
          points={[
            { title: 'The stop', body: 'The basis for the traffic stop.' },
            { title: 'Field sobriety tests', body: 'How the tests were administered.' },
            { title: 'The breath test', body: 'Calibration of the breath testing instrument.' },
            { title: 'Points', body: 'Under ORC 4510.036, 12 points in two years means a mandatory suspension. The firm challenges the underlying traffic violation to keep points from accumulating.' },
          ]}
        />
      </Section>

      <Section title="Misdemeanor defense in Hamilton and Butler County">
        <p>The court hears domestic violence (ORC 2919.25), assault, theft, drug possession and disorderly conduct, among others.</p>
        <FactTable
          title="Penalties and sealing"
          rows={[
            { label: 'M1 maximum', value: 'Up to 180 days in jail and a $1,000 fine (ORC 2929.21)' },
            { label: 'Sealing the record', value: 'Many misdemeanor convictions can be sealed under ORC 2953.32 after a one-year waiting period' },
          ]}
        />
        <p>The firm files suppression motions, challenges the evidence, negotiates with prosecutors, and tries cases when needed.</p>
      </Section>

      <Section title="Related pages" tone="ice">
        <p>
          Call (614) 285-5482 or use the <Link href="/contact">contact page</Link> for representation in Hamilton Municipal Court.
        </p>
        <LinkGrid
          links={[
            { href: '/courts/butler-county', title: 'Butler County courts', subtitle: 'Every court in the county' },
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
