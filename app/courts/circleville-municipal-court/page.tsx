import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Circleville Municipal Court Attorney',
  description:
    'OVI, misdemeanor and traffic cases at Circleville Municipal Court, 111 S Paint St, which hears cases from across Pickaway County, Ohio.',
  keywords: ['Circleville Municipal Court attorney', 'Pickaway County OVI lawyer', 'Circleville misdemeanor defense', 'Circleville Ohio criminal attorney', 'Pickaway County DUI attorney'],
  openGraph: {
    title: 'Circleville Municipal Court Attorney | Jwayyed Law LLC',
    description: 'OVI, misdemeanor and traffic defense at Circleville Municipal Court in Pickaway County.',
    url: 'https://www.jjlawohio.com/courts/circleville-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/circleville-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Pickaway County', href: '/courts/pickaway-county' },
  { label: 'Circleville Municipal Court', href: '/courts/circleville-municipal-court' },
];

const faqs = [
  {
    question: 'What types of cases does Circleville Municipal Court handle?',
    answer:
      'Misdemeanor criminal cases, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000, small claims and landlord-tenant disputes arising within Pickaway County. Circleville is the county seat and hosts the primary municipal court for the county. Felony charges are bound over to the Pickaway County Common Pleas Court. The firm does not handle juvenile, probate or immigration matters in this court.',
  },
  {
    question: 'Where is Circleville Municipal Court located?',
    answer:
      'At 111 S Paint St, Circleville, OH 43113. Circleville sits on the US 23 corridor about 30 miles south of Columbus. The court hears OVI and traffic charges from US 23 enforcement as well as SR 56 and US 22. If you were stopped on US 23 in Pickaway County, your case will likely be heard in Circleville Municipal Court or the Pickaway County Common Pleas Court, depending on how serious the charges are.',
  },
  {
    question: 'What are the OVI penalties in Circleville Municipal Court?',
    answer:
      'Under ORC 4511.19 and HB 37 (effective April 9, 2025), a first OVI carries a mandatory 3 days in jail (or a 3-day driver intervention program), fines of $565 to $1,075, a class five license suspension of 1 to 3 years, and 6 points on your license. For a high-tier first OVI (BAC 0.17% or higher, or a test refusal with a prior refusal), the mandatory minimum is 6 days in jail. HB 37 also eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device is installed, so limited driving privileges can come sooner.',
  },
  {
    question: 'Does Circleville Municipal Court handle OVI charges arising from US 23?',
    answer:
      'Yes. US 23 is a major north-south highway through Pickaway County, and the Ohio State Highway Patrol and Circleville Police Department enforce OVI and traffic laws along it. Charges from US 23 stops in Pickaway County are typically handled in Circleville Municipal Court (misdemeanor OVI) or the Pickaway County Common Pleas Court (felony OVI). The firm builds the defense around how the stop on US 23 was made.',
  },
  {
    question: 'What is the 30-day ALS appeal deadline after a Pickaway County OVI arrest?',
    answer:
      'An Administrative License Suspension (ALS) under ORC 4511.191 starts at arrest when you test above 0.08% BAC or refuse a chemical test in Pickaway County. You have 30 days from the date of arrest to file an ALS appeal with Circleville Municipal Court. The deadline is absolute: missing it forfeits your right to challenge the suspension. An attorney files the appeal and supporting memorandum within the window and can pursue suppression of the stop or the test at the same time.',
  },
  {
    question: 'What misdemeanor criminal charges are common in Circleville Municipal Court?',
    answer:
      "Assault (ORC 2903.13), domestic violence (ORC 2919.25), theft (ORC 2913.02), criminal trespass, disorderly conduct, and minor misdemeanor drug possession (marijuana under 100g, ORC 2925.11). Pickaway County's rural character also produces agricultural and property-related misdemeanor cases. Under ORC 2929.21, an M1 offense carries up to 180 days in jail and a $1,000 fine. An attorney can look at diversion, plea negotiation or suppression.",
  },
  {
    question: 'Can I get limited driving privileges after a Circleville Municipal Court OVI charge?',
    answer:
      'Yes. Under ORC 4510.021, Circleville Municipal Court can grant limited driving privileges for work, school, medical appointments and other essential travel while your OVI case is pending and after a conviction. Under HB 37, for non-refusal first OVI offenses, the former mandatory 15-day hard suspension before LDP is available has been eliminated when an ignition interlock device is installed. The firm petitions for LDP as early as possible so you can keep working.',
  },
  {
    question: 'Can misdemeanor convictions from Circleville Municipal Court be sealed?',
    answer:
      'Yes. Most misdemeanor convictions, M1 through M4, are eligible for record sealing under ORC 2953.32 after a one-year waiting period from final discharge. Dismissed charges and not-guilty verdicts can be sealed immediately under ORC 2953.52 with no waiting period. OVI/DUI convictions under ORC 4511.19 are not sealable in Ohio. Once sealed, the record is removed from most background checks and you may lawfully answer no on most private employer applications that ask about prior convictions.',
  },
];

export default function CirclevilleMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Circleville Municipal Court"
        description="Circleville Municipal Court at 111 S Paint St hears misdemeanor, OVI and traffic cases from across Pickaway County, including stops on US 23."
      />

      <Section
        title="The court at a glance"
        intro={
          <p>
            Pickaway County is a rural county south of Columbus on the US 23 corridor. Circleville, the county seat, hosts its primary
            municipal court.
          </p>
        }
      >
        <FactTable
          title="Circleville Municipal Court"
          rows={[
            { label: 'Address', value: '111 S Paint St, Circleville, OH 43113' },
            { label: 'Location', value: 'About 30 miles south of Columbus on US 23' },
            {
              label: 'Hears',
              value:
                'Misdemeanor criminal cases, OVI/DUI under ORC 4511.19, traffic violations, civil disputes up to $15,000, small claims, landlord-tenant disputes',
            },
            { label: 'Felonies', value: 'Bound over to the Pickaway County Common Pleas Court' },
            { label: 'Roads', value: 'US 23, SR 56 and US 22' },
          ]}
        />
        <Callout title="Former Assistant Law Director of Circleville">
          Attorney Jwayyed is a former prosecutor who has worked alongside and trained law enforcement. That background covers police
          procedures, case preparation and courtroom strategy in this court.
        </Callout>
      </Section>

      <Section title="OVI cases in Circleville" tone="ice">
        <p>
          On US 23 in Pickaway County, OVI enforcement comes from both the Ohio State Highway Patrol and the Circleville Police
          Department. Stops on SR 56 also come to this court.
        </p>
        <FactTable
          title="First OVI under ORC 4511.19 and HB 37 (effective April 9, 2025)"
          rows={[
            { label: 'Jail', value: 'Mandatory 3 days, or a 3-day driver intervention program' },
            { label: 'Fines', value: '$565 to $1,075' },
            { label: 'License', value: 'Class five suspension of 1 to 3 years; 6 points' },
            { label: 'High-tier first OVI', value: 'BAC 0.17% or higher, or a test refusal with a prior refusal: mandatory minimum 6 days in jail' },
            {
              label: 'Hard suspension',
              value: 'HB 37 eliminated the 15-day hard suspension for non-refusal first OVI offenses when an ignition interlock device (IID) is installed',
            },
          ]}
        />
        <Callout title="Appeal the license suspension within 30 days">
          The Administrative License Suspension (ALS) under ORC 4511.191 can be appealed only within 30 days from the date of arrest.
          Contact the office as soon as you can.
        </Callout>
        <PointGrid
          points={[
            { title: 'The stop', body: 'Whether reasonable articulable suspicion supported the traffic stop.' },
            { title: 'Field sobriety tests', body: 'Whether the standardized tests were given properly.' },
            { title: 'Breath and blood testing', body: 'Whether the testing instrument was properly maintained.' },
            { title: 'Driving privileges', body: 'Limited driving privileges under ORC 4510.021 while the case is pending and after it.' },
          ]}
        />
      </Section>

      <Section title="Misdemeanor charges in Pickaway County">
        <p>The court also hears misdemeanor assault, domestic violence, theft, disorderly conduct and drug possession charges.</p>
        <FactTable
          title="Penalties and sealing"
          rows={[
            { label: 'M1 maximum', value: 'Up to 180 days in jail and a $1,000 fine (ORC 2929.21)' },
            { label: 'Record sealing', value: 'Many misdemeanor convictions can be sealed after one year under ORC 2953.32' },
          ]}
        />
        <p>
          The firm looks at the defenses, files suppression motions where they apply, and works toward dismissal or reduced charges
          to protect your record.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <p>
          Call (614) 285-5482 or use the <Link href="/contact">contact page</Link> if you have a matter in Circleville Municipal Court.
        </p>
        <LinkGrid
          links={[
            { href: '/courts/pickaway-county', title: 'Pickaway County courts', subtitle: 'Every court in the county' },
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
