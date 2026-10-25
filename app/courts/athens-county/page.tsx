import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Athens County Court Representation',
  description:
    'Athens Municipal Court and Athens County Common Pleas Court: addresses, what each hears, and the OVI, criminal, injury and business cases the firm handles.',
  keywords: [
    'Athens County court attorney',
    'OVI lawyer Athens Ohio',
    'Athens Municipal Court attorney',
    'Ohio University OVI defense',
    'Athens County criminal defense attorney',
    'Athens County DUI lawyer',
  ],
  openGraph: {
    title: 'Athens County Court Representation | Jwayyed Law LLC',
    description: 'The Athens County courts and the cases the firm handles there, including Ohio University student charges.',
    url: 'https://www.jjlawohio.com/courts/athens-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/athens-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Athens County', href: '/courts/athens-county' },
];

const faqs = [
  {
    question: 'I was charged with OVI near Ohio University. What should I do first?',
    answer:
      'An OVI charge near Ohio University goes to Athens Municipal Court at 8 E. Washington St, Athens, OH 45701. Contact an OVI defense attorney right away. Under ORC 4511.19, an OVI conviction brings fines, license suspension and possible jail time. You have only 30 days from the date of arrest to request an Administrative License Suspension (ALS) appeal with the court; missing that deadline makes the suspension final. For a student, a conviction can also affect financial aid, housing and academic standing. Call Jwayyed Law LLC at (614) 285-5482 as soon as you can after the arrest.',
  },
  {
    question: 'What types of cases does Athens Municipal Court handle?',
    answer:
      "Athens Municipal Court at 8 E. Washington St, Athens, OH 45701 handles misdemeanor criminal cases, OVI and DUI charges, traffic violations, and civil cases where the amount in dispute is under $15,000. That includes first- and second-degree misdemeanors such as disorderly conduct, minor in possession (MIP), criminal trespassing, petty theft and domestic violence. Charges arising on or near Ohio University's campus are typically heard there. Felony charges are transferred to Athens County Common Pleas Court at 1 S. Court St. The firm represents clients in both courts.",
  },
  {
    question: 'What is the ALS appeal deadline and why does it matter in Athens County?',
    answer:
      'If your license was administratively suspended at your OVI arrest in Athens County, which happens automatically when you refuse or fail a breath, blood or urine test, you have exactly 30 days to file an Administrative License Suspension (ALS) appeal with Athens Municipal Court. The deadline is set by Ohio statute and cannot be extended. A successful appeal can restore your driving privileges while the criminal case is pending. With limited transportation options in Athens and the surrounding Appalachian region, a suspension can hit your job and, for students, your academic schedule hard. The firm can file the ALS appeal quickly and contest the suspension.',
  },
  {
    question: 'What are the penalties for a misdemeanor conviction in Ohio?',
    answer:
      'Ohio has five tiers of misdemeanor. A first-degree misdemeanor (M1), the most serious, carries up to 180 days in jail and fines up to $1,000 under ORC 2929.24 and 2929.28. A second-degree misdemeanor (M2) carries up to 90 days in jail and fines up to $750. Third- and fourth-degree misdemeanors carry lesser penalties, and minor misdemeanors carry only a fine of up to $150 with no jail time. Common Athens County charges such as disorderly conduct, open container, underage alcohol consumption and petty theft are often M4s or minor misdemeanors, but OVI is typically an M1. Even minor convictions can show on background checks and affect jobs and academic opportunities.',
  },
  {
    question: 'Am I eligible for expungement of my Athens County conviction?',
    answer:
      "Ohio's expungement law (ORC 2953.31 et seq.) allows many misdemeanor and some felony convictions to be sealed from public record. For misdemeanors, you are generally eligible to apply one year after your case concludes. For felonies, the waiting period is typically three years. Some convictions are not eligible, including most OVI/DUI convictions, first-degree misdemeanor domestic violence and some violent offenses. The firm can evaluate your eligibility and handle the petition in Athens County Common Pleas Court.",
  },
  {
    question: 'Can Jwayyed Law LLC help me form a business in Athens County?',
    answer:
      'Yes. The firm helps with business formation and structure under Ohio law. A limited liability company (LLC) under ORC Chapter 1706 is a common choice for small business owners because it offers personal liability protection and tax flexibility. The firm can prepare your Articles of Organization, draft an Operating Agreement, advise on registered agent requirements, and explain your obligations as a new business owner, whether you are opening a restaurant, a retail shop or a professional services firm in Athens or the surrounding communities.',
  },
  {
    question: 'What is the difference between Athens Municipal Court and Athens County Common Pleas Court?',
    answer:
      'Athens Municipal Court (8 E. Washington St) is a court of limited jurisdiction. It handles misdemeanor criminal cases, traffic matters, OVI charges and civil claims under $15,000. Athens County Common Pleas Court (1 S. Court St, Athens, OH 45701) is the court of general jurisdiction. It handles felony criminal cases, civil disputes over $15,000, domestic relations matters and the probate of estates. A felony charge, such as felony OVI (fourth or fifth offense), drug trafficking or felony assault, is heard in Common Pleas. The firm represents clients in both courts.',
  },
  {
    question: 'Why should I hire an attorney for a charge in Athens County rather than just paying the fine?',
    answer:
      "Paying the fine is a guilty plea. Even a minor misdemeanor conviction creates a permanent criminal record that can affect employment, professional licensing, housing applications and educational opportunities. For Ohio University students, a conviction may trigger disciplinary proceedings under the university's student code of conduct. Even a first OVI under ORC 4511.19 brings a mandatory license suspension, fines and possible jail time. An attorney can challenge the evidence, negotiate reduced charges, pursue diversion programs or, in some cases, get the charge dismissed.",
  },
];

const linkClass = 'text-sky-deep underline';

const SERVICES = [
  {
    href: '/locations/athens-county/ovi-dui-defense-athens-municipal-court',
    title: 'OVI/DUI defense',
    subtitle: 'Breath and blood test challenges, ALS appeals, dismissals and reduced charges',
  },
  {
    href: '/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court',
    title: 'Misdemeanor criminal defense',
    subtitle: 'Disorderly conduct, MIP, petty theft, drug paraphernalia, domestic violence',
  },
  {
    href: '/locations/athens-county/personal-injury-athens-county',
    title: 'Personal injury',
    subtitle: 'Claims within the two-year limit under ORC 2305.10',
  },
  {
    href: '/locations/athens-county/business-formation-llc-athens-county',
    title: 'Business formation and LLC',
    subtitle: 'LLC formation under ORC Chapter 1706, operating agreements, commercial contracts',
  },
];

export default function AthensCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Athens County courts"
        description="Athens County cases are heard in two courts a few blocks apart in Athens: Athens Municipal Court for misdemeanors, OVI and traffic, and Common Pleas for felonies."
      />

      <Section
        title="Find your court"
        intro={
          <p>
            Athens, the county seat, is home to Ohio University, so both courts regularly hear cases involving students, faculty and
            staff alongside the rest of the county.
          </p>
        }
      >
        <FactTable
          title="Athens Municipal Court"
          rows={[
            { label: 'Address', value: '8 E. Washington St, Athens, OH 45701' },
            { label: 'Hears', value: 'Misdemeanors, OVI/DUI, traffic violations, civil claims under $15,000' },
            {
              label: 'Directions',
              value: (
                <a className={linkClass} href="https://www.google.com/maps?q=8+E+Washington+St,+Athens,+OH+45701" target="_blank" rel="noopener noreferrer">
                  Get directions (Google Maps)
                </a>
              ),
            },
          ]}
        />
        <FactTable
          title="Athens County Common Pleas Court"
          rows={[
            { label: 'Address', value: '1 S. Court St, Athens, OH 45701' },
            { label: 'Hears', value: 'Felony cases, major civil disputes, domestic relations, probate' },
            {
              label: 'Directions',
              value: (
                <a className={linkClass} href="https://www.google.com/maps?q=1+S+Court+St,+Athens,+OH+45701" target="_blank" rel="noopener noreferrer">
                  Get directions (Google Maps)
                </a>
              ),
            },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[{ href: '/courts/athens-municipal-court', title: 'Athens Municipal Court guide', subtitle: 'Arraignment, OVI and student charges' }]}
        />
        <p>
          The firm represents clients from across the county, including Albany, The Plains, Nelsonville, Coolville and Glouster.
        </p>
      </Section>

      <Section title="OVI charges in Athens County" tone="ice">
        <p>
          OVI charges under <Link href="/ovi-dui-defense">ORC 4511.19</Link> are among the most frequently prosecuted offenses in
          Athens County, in large part because of the college campus.
        </p>
        <FactTable
          title="First-offense OVI"
          rows={[
            { label: 'Level', value: 'First-degree misdemeanor' },
            { label: 'Jail', value: 'Three-day mandatory minimum, or a mandatory driver intervention program' },
            { label: 'Fines', value: 'Between $375 and $1,075' },
            { label: 'License', value: 'Suspension of one to three years' },
            { label: 'High tier', value: 'A BAC of 0.17 or higher brings significantly higher penalties' },
          ]}
        />
        <Callout title="Appeal the license suspension within 30 days">
          Under Ohio&rsquo;s Administrative License Suspension law, your license is suspended at arrest if you refuse or fail a
          chemical test. You have 30 days to appeal in Athens Municipal Court.
        </Callout>
      </Section>

      <Section title="Misdemeanor charges in Athens County">
        <p>
          Many of the misdemeanor cases in Athens Municipal Court involve students and young adults: disorderly conduct, criminal
          trespassing, petty theft, minor in possession of alcohol (MIP), drug paraphernalia possession and domestic violence. Under
          ORC 2935.26, officers may issue a citation instead of an arrest for minor misdemeanors. For first- and second-degree
          misdemeanors, a formal court process is typical.
        </p>
        <FactTable
          title="Ohio misdemeanor penalties"
          rows={[
            { label: 'First degree (M1)', value: 'Up to 180 days in jail and fines up to $1,000' },
            { label: 'Second degree (M2)', value: 'Up to 90 days in jail and fines up to $750' },
            { label: 'Third and fourth degree', value: 'Lesser penalties' },
            { label: 'Minor misdemeanor', value: 'A fine of up to $150, no jail' },
          ]}
        />
        <p>
          The firm looks at every case for defenses, plea negotiations and diversion that can keep a conviction off your record.
          Eligible convictions can later be sealed under ORC 2953.31.
        </p>
      </Section>

      <Section title="Injury, business and civil matters" tone="ice">
        <p>
          Personal injury claims, including car accidents on U.S. Route 33 and State Route 50 and premises liability incidents, are
          governed by Ohio&rsquo;s two-year statute of limitations under ORC 2305.10. Missing the deadline ends your right to
          compensation.
        </p>
        <p>
          Athens&rsquo;s economy is anchored by Ohio University and supports many restaurants, retail shops and service businesses. The
          firm handles LLC formation under ORC Chapter 1706, partnership agreements, commercial contract drafting and landlord-tenant
          disputes.
        </p>
      </Section>

      <Section title="What the firm handles in Athens County">
        <LinkGrid links={SERVICES} columns={2} />
        <p>
          Jwayyed Law LLC is based in Columbus and serves clients across Ohio, including Athens County and southeastern Ohio.
          Consultations are available by phone. Call (614) 285-5482 or contact the firm online. The firm does not handle immigration,
          juvenile or probate matters.
        </p>
      </Section>

      <LocationsWeServe title="Athens County Legal Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
