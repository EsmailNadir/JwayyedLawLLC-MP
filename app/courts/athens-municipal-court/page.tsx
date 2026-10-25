import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Athens Municipal Court Attorney',
  description:
    'OVI, misdemeanor and traffic cases at Athens Municipal Court, 8 E Washington St, next to Ohio University, including student charges.',
  keywords: ['Athens Municipal Court attorney', 'Athens County OVI lawyer', 'Athens misdemeanor defense', 'Ohio University OVI defense', 'Athens Ohio criminal attorney'],
  openGraph: {
    title: 'Athens Municipal Court Attorney | Jwayyed Law LLC',
    description: 'OVI, misdemeanor and traffic defense at Athens Municipal Court, including Ohio University students.',
    url: 'https://www.jjlawohio.com/courts/athens-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/athens-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Athens County', href: '/courts/athens-county' },
  { label: 'Athens Municipal Court', href: '/courts/athens-municipal-court' },
];

const faqs = [
  {
    question: 'What types of cases does Athens Municipal Court handle?',
    answer:
      "Misdemeanor criminal offenses, OVI/DUI charges under ORC 4511.19, traffic violations, civil disputes up to $15,000 and small claims under $6,000 arising within the court's territorial jurisdiction in Athens County. The court also handles landlord-tenant matters and temporary protection orders. Felony cases are bound over to the Athens County Common Pleas Court. The firm does not handle juvenile, probate or immigration matters.",
  },
  {
    question: 'Where is Athens Municipal Court located?',
    answer:
      "At 8 E Washington St, Athens, OH 45701, in the center of Athens next to Ohio University's campus area. Court hours are generally Monday through Friday, and parking is available near the courthouse. Because the court sits beside a large university, OVI and alcohol-related misdemeanor charges are among its most common cases.",
  },
  {
    question: 'What are the penalties for a first OVI conviction in Athens Municipal Court?',
    answer:
      'Under ORC 4511.19 as updated by HB 37 (effective April 9, 2025), a first OVI carries a mandatory minimum 3 days in jail (or a 3-day driver intervention program), fines of $565 to $1,075, a class five license suspension of 1 to 3 years, and 6 points on your license. A first high-tier OVI (BAC 0.17+ or refusing a prior test) carries a mandatory 6 days in jail and higher fines. Ignition interlock device (IID) conditions are common. An attorney can pursue dismissal, a reduction or the minimum penalties.',
  },
  {
    question: "How does Ohio's 30-day deadline for ALS appeals work after an Athens County OVI arrest?",
    answer:
      'If you are arrested for OVI in Athens County and test above 0.08% BAC or refuse a chemical test, the Ohio Bureau of Motor Vehicles imposes an Administrative License Suspension (ALS) under ORC 4511.191. You have 30 days from the date of arrest to appeal it to Athens Municipal Court. Missing the deadline forfeits your right to challenge the suspension administratively. An attorney files the appeal promptly and can challenge the constitutionality of the stop and the chemical testing procedures at the same time.',
  },
  {
    question: 'What happens if I have an Ohio University-related charge in Athens Municipal Court?',
    answer:
      'Ohio University students and staff charged in Athens Municipal Court can face both the court case and University disciplinary proceedings under the Student Code of Conduct. The two run separately: a conviction can lead to academic discipline, suspension or expulsion regardless of how the criminal case ends. The firm represents you in court and advises on how the criminal defense and the university process affect each other. It serves Athens County residents, students, faculty and visitors.',
  },
  {
    question: 'Can misdemeanor charges in Athens Municipal Court affect my criminal record long-term?',
    answer:
      "Yes. A misdemeanor conviction creates a permanent criminal record that shows on background checks. Under ORC 2929.21, misdemeanor sentences can include up to 180 days in jail (M1), fines and probation. Ohio's record sealing statute (ORC 2953.32) allows many misdemeanor convictions to be sealed after a one-year waiting period from final discharge, if you meet the eligibility rules. An attorney can fight the charge to avoid a conviction, or advise on sealing afterward.",
  },
  {
    question: 'Do I need an attorney for Athens Municipal Court matters?',
    answer:
      'For any criminal or OVI matter, it is strongly advisable. Municipal court misdemeanor convictions carry jail time, fines, license suspension and a permanent record. Challenging the legality of the traffic stop, the calibration of breath testing devices or the validity of field sobriety tests takes legal knowledge. An attorney can negotiate plea agreements, file suppression motions and represent you at trial.',
  },
  {
    question: 'What should I bring to my Athens Municipal Court arraignment?',
    answer:
      'At arraignment you are formally told the charges and asked to enter a plea. Bring any paperwork you received at arrest (citation, ALS notice, bond paperwork), photo identification, and contact information for any witnesses. You do not need to plead guilty at arraignment; your attorney will typically enter a not guilty plea to keep all options open and allow time to review the evidence. If you have not hired an attorney yet, contact one before your arraignment date.',
  },
];

export default function AthensMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Athens Municipal Court"
        description="Athens Municipal Court at 8 E Washington St hears misdemeanor, OVI, traffic and civil cases in Athens County, many of them involving Ohio University students."
      />

      <Section
        title="The court at a glance"
        intro={
          <p>
            Ohio University makes Athens Municipal Court one of the more active municipal courts in southeastern Ohio for
            alcohol-related offenses.
          </p>
        }
      >
        <FactTable
          title="Athens Municipal Court"
          rows={[
            { label: 'Address', value: "8 E Washington St, Athens, OH 45701, in the center of Athens next to Ohio University's campus area" },
            { label: 'Hours', value: 'Generally Monday through Friday' },
            { label: 'Parking', value: 'Available near the courthouse' },
            {
              label: 'Hears',
              value:
                'Misdemeanor criminal offenses, OVI/DUI under ORC 4511.19, traffic violations, civil disputes up to $15,000, small claims under $6,000, landlord-tenant matters, temporary protection orders',
            },
            { label: 'Felonies', value: 'Bound over to the Athens County Common Pleas Court' },
          ]}
        />
        <h3>What to bring to arraignment</h3>
        <Steps
          steps={[
            { title: 'Your arrest paperwork', body: 'The citation, the ALS notice and any bond paperwork.' },
            { title: 'Photo identification', body: 'You will need it at the courthouse.' },
            { title: 'Witness contact information', body: 'Names and numbers for anyone who saw what happened.' },
            { title: 'An attorney', body: 'Your attorney will typically enter a not guilty plea, which keeps every option open.' },
          ]}
        />
      </Section>

      <Section title="OVI cases in Athens" tone="ice">
        <p>
          An OVI charge can rest on a breath test result above the 0.08% legal limit or on an officer&rsquo;s observation of
          impairment. Either way, the evidence needs careful review.
        </p>
        <FactTable
          title="First OVI under ORC 4511.19 and HB 37 (effective April 9, 2025)"
          rows={[
            { label: 'Jail', value: 'Mandatory minimum 3 days, or a 3-day driver intervention program' },
            { label: 'Fines', value: '$565 to $1,075' },
            { label: 'License', value: 'Class five suspension of 1 to 3 years; 6 points' },
            { label: 'High-tier first OVI', value: 'BAC 0.17+ or refusing a prior test: mandatory 6 days in jail and higher fines' },
            { label: 'Ignition interlock', value: 'IID conditions are common' },
            {
              label: 'Hard suspension',
              value: 'Under HB 37, a first non-refusal OVI no longer carries a mandatory 15-day hard suspension if the defendant installs an ignition interlock device',
            },
          ]}
        />
        <Callout title="Appeal the license suspension within 30 days">
          The 30-day window to appeal an Administrative License Suspension (ALS) under ORC 4511.191 begins at arrest.
        </Callout>
        <PointGrid
          points={[
            { title: 'The stop', body: 'The basis for the traffic stop.' },
            { title: 'Field sobriety tests', body: 'How the standardized tests (SFSTs) were administered.' },
            { title: 'Breath and blood testing', body: 'Whether the instrument was properly calibrated and maintained.' },
            {
              title: 'Ohio University discipline',
              body: 'For students and staff, the Student Code of Conduct process runs separately from the court case, and the firm advises on both.',
            },
          ]}
        />
      </Section>

      <Section title="Misdemeanor charges in Athens County">
        <p>
          Beyond OVI, the court hears assault (ORC 2903.13), theft (ORC 2913.02), drug possession misdemeanors, disorderly conduct,
          criminal trespass and domestic violence.
        </p>
        <FactTable
          title="Penalties and sealing"
          rows={[
            { label: 'First-degree misdemeanor', value: 'Up to 180 days in jail and a $1,000 fine (ORC 2929.21)' },
            { label: 'Record sealing', value: 'Many misdemeanor convictions can be sealed one year after final discharge under ORC 2953.32' },
          ]}
        />
        <p>
          The firm looks at constitutional challenges to the stop or search, factual challenges to the state&rsquo;s evidence, and
          mitigation for sentencing. Many misdemeanor charges here can be resolved through diversion programs, reduced charges or
          dismissal.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <p>
          Call (614) 285-5482 or use the <Link href="/contact">contact page</Link> if you are facing charges in Athens Municipal Court.
        </p>
        <LinkGrid
          links={[
            { href: '/courts/athens-county', title: 'Athens County courts', subtitle: 'Every court in the county' },
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
