import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Dayton Municipal Court Attorney',
  description:
    'OVI, misdemeanor, traffic and civil cases at Dayton Municipal Court, 301 W Third St, including its driving under suspension docket.',
  keywords: ['Dayton Municipal Court attorney', 'Montgomery County OVI lawyer', 'Dayton misdemeanor defense', 'Dayton Ohio criminal attorney', 'Montgomery County DUI lawyer'],
  openGraph: {
    title: 'Dayton Municipal Court Attorney | Jwayyed Law LLC',
    description: 'OVI, misdemeanor, traffic and civil cases at Dayton Municipal Court in downtown Dayton.',
    url: 'https://www.jjlawohio.com/courts/dayton-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/dayton-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
  { label: 'Dayton Municipal Court', href: '/courts/dayton-municipal-court' },
];

const faqs = [
  {
    question: 'What types of cases does Dayton Municipal Court handle?',
    answer:
      'Misdemeanor criminal charges, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000 and small claims under $6,000 arising within the city of Dayton and portions of Montgomery County. The court also keeps specialty dockets for driving under suspension and domestic violence matters. Felony cases are bound over to the Montgomery County Common Pleas Court. The firm does not handle juvenile, probate or immigration matters.',
  },
  {
    question: 'Where is Dayton Municipal Court located?',
    answer:
      "At 301 W Third St, Dayton, OH 45402, in downtown Dayton. It serves the city of Dayton and surrounding unincorporated areas of Montgomery County within the court's territorial jurisdiction. The court handles a high volume of criminal, OVI, traffic and civil cases, and hearings are scheduled by division, so local procedure matters.",
  },
  {
    question: 'What are the OVI penalties in Dayton Municipal Court under current Ohio law?',
    answer:
      'Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI carries a 3-day mandatory minimum jail term (or a 3-day driver intervention program), fines of $565 to $1,075, a class five license suspension of 1 to 3 years, and 6 points on your license. A first high-tier OVI (BAC 0.17+ or a test refusal with a prior test refusal) carries a mandatory 6 days in jail. HB 37 eliminated the mandatory 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed, which helps preserve driving privileges.',
  },
  {
    question: 'Does Dayton Municipal Court have a specialty driving under suspension docket?',
    answer:
      'Yes. The court actively prosecutes driving under OVI-related suspension under ORC 4510.14, which carries a mandatory minimum 30 days in jail for a first offense when the underlying suspension was OVI-related. It also handles driving under a financial responsibility law suspension (ORC 4510.16) and other suspension categories. These charges often come alongside an OVI and need their own analysis and defense.',
  },
  {
    question: 'How does the 30-day ALS appeal deadline work after a Dayton OVI arrest?',
    answer:
      'An Administrative License Suspension (ALS) under ORC 4511.191 takes effect at arrest when a driver in Dayton tests above the legal limit or refuses a chemical test. You have 30 days from the date of arrest to appeal it to Dayton Municipal Court. Missing the deadline forfeits your right to challenge the suspension. The firm files the appeal promptly, challenges the probable cause for the stop, and contests the validity of the BAC test or refusal to give the ALS the best chance of being terminated.',
  },
  {
    question: 'What misdemeanor drug offenses are handled in Dayton Municipal Court?',
    answer:
      'Possession of marijuana under 100 grams (a minor misdemeanor under ORC 2925.11), possession of drug paraphernalia (ORC 2925.14) and other minor drug misdemeanors. More serious drug charges, such as larger quantities of controlled substances or trafficking, are felonies handled in the Montgomery County Common Pleas Court. Misdemeanor drug convictions can often be sealed under ORC 2953.32 after a one-year waiting period.',
  },
  {
    question: 'Can I get limited driving privileges after an OVI charge in Dayton Municipal Court?',
    answer:
      'Yes. Dayton Municipal Court can grant limited driving privileges (LDP) for work, school, medical and other essential purposes under ORC 4510.021. Under HB 37, the mandatory 15-day hard suspension before LDP is available has been eliminated for non-refusal first OVI offenses when the defendant agrees to install an ignition interlock device, so LDP can often be obtained soon after an arrest. The firm petitions for LDP at the earliest opportunity.',
  },
  {
    question: 'What should I do after being charged in Dayton Municipal Court?',
    answer:
      'First, retain an attorney before your arraignment; a not-guilty plea preserves all your options. Second, if the charge is OVI, note the exact date of arrest, because the 30-day ALS appeal deadline runs from that date. Third, do not discuss your case with police, insurance adjusters or anyone other than your attorney. Fourth, preserve evidence such as dashcam footage, witness contact information and other documents. Fifth, contact Jwayyed Law LLC promptly to start on your defense.',
  },
];

export default function DaytonMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Dayton Municipal Court"
        description="Dayton Municipal Court at 301 W Third St hears misdemeanor, OVI, traffic and civil cases for the city of Dayton and parts of Montgomery County."
      />

      <Section
        title="The court at a glance"
        intro={<p>Dayton Municipal Court is one of Ohio&rsquo;s busiest municipal courts, and its hearings are scheduled by division.</p>}
      >
        <FactTable
          title="Dayton Municipal Court"
          rows={[
            { label: 'Address', value: '301 W Third St, Dayton, OH 45402 (downtown Dayton)' },
            { label: 'Covers', value: 'The city of Dayton and surrounding unincorporated areas of Montgomery County within its territorial jurisdiction' },
            {
              label: 'Hears',
              value: 'Misdemeanor criminal charges, OVI/DUI under ORC 4511.19, traffic violations, civil disputes up to $15,000, small claims under $6,000',
            },
            { label: 'Specialty dockets', value: 'Driving under suspension; domestic violence' },
            { label: 'Felonies', value: 'Bound over to the Montgomery County Common Pleas Court' },
          ]}
        />
      </Section>

      <Section title="OVI cases in Dayton" tone="ice">
        <FactTable
          title="First OVI under ORC 4511.19 and HB 37 (effective April 9, 2025)"
          rows={[
            { label: 'Jail', value: '3-day mandatory minimum, or a 3-day driver intervention program' },
            { label: 'Fines', value: '$565 to $1,075' },
            { label: 'License', value: 'Class five suspension of 1 to 3 years; 6 points' },
            { label: 'High-tier first OVI', value: 'BAC 0.17+ or a test refusal with a prior test refusal: mandatory 6 days in jail' },
            {
              label: 'Hard suspension',
              value: 'HB 37 eliminated the mandatory 15-day hard suspension for non-refusal first OVI offenses when the defendant agrees to install an ignition interlock device',
            },
          ]}
        />
        <Callout title="Appeal the license suspension within 30 days">
          The deadline to appeal an Administrative License Suspension (ALS) under ORC 4511.191 is 30 days from the date of arrest.
        </Callout>
        <h3>Where the defense looks</h3>
        <PointGrid
          points={[
            { title: 'The stop', body: 'Whether the initial traffic stop was legal.' },
            { title: 'Field sobriety tests', body: 'Whether the standardized tests (SFSTs) followed NHTSA protocols.' },
            { title: 'The breath instrument', body: 'Maintenance and calibration records, typically for a DataMaster DMT.' },
            { title: 'Driving privileges', body: 'Limited driving privileges under ORC 4510.021 as early as the court allows.' },
          ]}
        />
      </Section>

      <Section title="Driving under suspension and misdemeanor charges">
        <p>
          The court&rsquo;s driving under suspension docket is particularly active. These charges often come alongside an OVI and need
          their own defense.
        </p>
        <FactTable
          title="Charges heard here"
          rows={[
            {
              label: 'Driving under OVI suspension',
              value: 'ORC 4510.14: mandatory minimum 30 days in jail for a first offense when the underlying suspension was OVI-related',
            },
            { label: 'Financial responsibility suspension', value: 'ORC 4510.16' },
            { label: 'Assault', value: 'ORC 2903.13' },
            { label: 'Domestic violence', value: 'ORC 2919.25' },
            { label: 'Theft', value: 'ORC 2913.02' },
            { label: 'Drug misdemeanors', value: 'Marijuana under 100 grams (minor misdemeanor, ORC 2925.11); paraphernalia (ORC 2925.14)' },
            { label: 'M1 maximum', value: 'Up to 180 days in jail and $1,000 in fines (ORC 2929.21)' },
          ]}
          note="Disorderly conduct, criminal trespass and other misdemeanors are also heard here. Larger drug quantities and trafficking are felonies in Common Pleas Court."
        />
        <p>The firm looks at each case for constitutional challenges, suppression motions and negotiated resolutions.</p>
        <h3>After a charge</h3>
        <Steps
          steps={[
            { title: 'Retain an attorney before arraignment', body: 'A not-guilty plea preserves all your options.' },
            { title: 'Note the arrest date', body: 'On an OVI, the 30-day ALS appeal deadline runs from it.' },
            { title: 'Talk only to your attorney', body: 'Not police, not insurance adjusters.' },
            { title: 'Preserve evidence', body: 'Dashcam footage, witness contact information and other documents.' },
          ]}
        />
      </Section>

      <Section title="Related pages" tone="ice">
        <p>
          Call (614) 285-5482 or use the <Link href="/contact">contact page</Link> for representation in Dayton Municipal Court.
        </p>
        <LinkGrid
          links={[
            { href: '/courts/montgomery-county', title: 'Montgomery County courts', subtitle: 'Every court in the county' },
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
