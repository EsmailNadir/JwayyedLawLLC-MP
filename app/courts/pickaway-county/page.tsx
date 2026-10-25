import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Pickaway County Court Representation',
  description:
    'Circleville Municipal Court and Pickaway County Common Pleas Court: addresses, what each hears, and the OVI, criminal, injury and business cases the firm handles.',
  keywords: [
    'Pickaway County court attorney',
    'OVI lawyer Pickaway County Ohio',
    'Circleville Municipal Court attorney',
    'Pickaway County criminal defense attorney',
    'Circleville DUI lawyer',
    'U.S. 23 OVI attorney',
  ],
  openGraph: {
    title: 'Pickaway County Court Representation | Jwayyed Law LLC',
    description: 'The two Pickaway County courts in Circleville and the cases the firm handles there, including U.S. 23 OVI stops.',
    url: 'https://www.jjlawohio.com/courts/pickaway-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/pickaway-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Pickaway County', href: '/courts/pickaway-county' },
];

const faqs = [
  {
    question: 'What courts handle OVI and criminal cases in Pickaway County?',
    answer:
      'Pickaway County has two main courts. Circleville Municipal Court at 141 S. Court St, Circleville, OH 43113 handles misdemeanor criminal cases, OVI/DUI charges, traffic violations and civil disputes under $15,000. Pickaway County Common Pleas Court at 207 S. Court St, Circleville, OH 43113 handles felony cases, major civil disputes, domestic relations and probate. An OVI or misdemeanor charge in Circleville, Ashville, Commercial Point, South Bloomfield, Williamsport, Kingston or Tarlton will generally start in Circleville Municipal Court. Felony charges go through Common Pleas. The firm represents clients in both courts.',
  },
  {
    question: 'I was stopped for OVI on U.S. 23 in Pickaway County. What should I do?',
    answer:
      'U.S. Route 23 is one of the busiest corridors in Pickaway County, and police patrol it regularly for OVI. If you were arrested on U.S. 23 or elsewhere in the county, contact an OVI defense attorney right away. Under ORC 4511.19, a first-offense OVI is a first-degree misdemeanor with mandatory minimums: fines of $375 to $1,075, a license suspension of one to three years, and either three days in jail or a mandatory driver intervention program. You also have only 30 days from your arrest to appeal the Administrative License Suspension in Circleville Municipal Court; missing that window forfeits your right to challenge it. Call Jwayyed Law LLC at (614) 285-5482 as soon as you can.',
  },
  {
    question: 'What is the ALS appeal and why is the 30-day deadline so important in Pickaway County?',
    answer:
      "An Administrative License Suspension (ALS) is an automatic suspension of your Ohio license at an OVI arrest if you refuse or fail a chemical test (breath, blood or urine). You have exactly 30 days from the arrest date to file an ALS appeal with Circleville Municipal Court. Miss it, and the suspension becomes final and cannot be challenged through the appeal process. In a county of rural and suburban areas where most residents depend on their vehicles, losing your license can affect your job, your family's daily needs and even getting to court. A successful appeal can restore limited or full driving privileges while the OVI case is pending.",
  },
  {
    question: 'What misdemeanor charges are commonly handled in Circleville Municipal Court?',
    answer:
      'Disorderly conduct, domestic violence, petty theft, criminal damaging, drug paraphernalia possession, assault, and driving offenses such as driving under suspension and reckless operation. The Pickaway County Pumpkin Show, held every year in Circleville and drawing hundreds of thousands of visitors, sometimes brings a spike in disorderly conduct, underage alcohol consumption and related charges. A first-degree misdemeanor carries up to 180 days in jail and fines up to $1,000. The firm looks at every case, from a routine traffic matter to a serious charge, for ways to challenge the evidence, negotiate or pursue dismissal.',
  },
  {
    question: 'Can I get a Pickaway County conviction expunged from my record?',
    answer:
      'Many people are eligible for expungement (record sealing) under ORC 2953.31. For misdemeanor convictions, you may petition one year after your sentence is complete. For eligible felony convictions, the waiting period is generally three years. Sealing removes the record from most public databases, which helps with employment, housing and professional licensing. OVI convictions, most domestic violence convictions and certain violent offenses cannot be sealed, but many first-time and non-violent convictions can. The firm can assess your eligibility and file the petition in Pickaway County Common Pleas Court.',
  },
  {
    question: 'Does Jwayyed Law LLC handle personal injury cases in Pickaway County?',
    answer:
      "Yes. That includes car accidents on U.S. Route 23, State Route 56 and other Pickaway County roads, premises liability claims, dog bites and other injuries. Ohio's statute of limitations for personal injury is two years under ORC 2305.10, so you must file within two years of the injury or lose the right to recover. The firm can investigate the accident, gather evidence, deal with the insurance carriers, and pursue compensation for medical bills, lost wages, and pain and suffering.",
  },
  {
    question: 'Can Jwayyed Law LLC help with business formation in Pickaway County?',
    answer:
      "Yes. The county's growing suburbs on the U.S. 23 corridor, such as Commercial Point and South Bloomfield, and its rural towns have an active small business community. The firm forms LLCs under ORC Chapter 1706, which give owners personal liability protection and operational flexibility. It drafts Articles of Organization and Operating Agreements, advises on the choice of entity, and handles commercial contracts, landlord-tenant disputes for business owners and general business matters.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Pickaway County legal matter?',
    answer:
      'Pickaway County is about 30 to 40 minutes south of Columbus, and the firm regularly serves clients there, in Circleville Municipal Court and Pickaway County Common Pleas Court. On an OVI or criminal charge, a conviction can affect your career and family. On a civil or business matter, early advice can prevent a costly mistake. Call (614) 285-5482 or use the online form to schedule a consultation.',
  },
];

const linkClass = 'text-sky-deep underline';

const SERVICES = [
  {
    href: '/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court',
    title: 'OVI/DUI defense',
    subtitle: 'Stops, field sobriety and chemical tests, and ALS appeals within the 30-day deadline',
  },
  {
    href: '/locations/pickaway-county/criminal-misdemeanor-defense-circleville-municipal-court',
    title: 'Misdemeanor criminal defense',
    subtitle: 'Disorderly conduct, domestic violence, petty theft, drug offenses and more',
  },
  { href: '/locations/pickaway-county/personal-injury-pickaway-county', title: 'Personal injury', subtitle: 'Claims within the two-year limit under ORC 2305.10' },
  {
    href: '/locations/pickaway-county/business-formation-llc-pickaway-county',
    title: 'Business formation and LLC',
    subtitle: 'LLCs under ORC Chapter 1706, operating agreements, commercial contracts',
  },
];

export default function PickawayCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Pickaway County courts"
        description="Pickaway County cases are heard on S. Court St in Circleville: misdemeanors, OVI and traffic in Circleville Municipal Court, felonies in Common Pleas."
      />

      <Section
        title="Find your court"
        intro={
          <p>
            Pickaway County lies 30 to 40 minutes south of Columbus on the U.S. Route 23 corridor and is one of the fastest-growing
            counties in central Ohio. Circleville, the county seat, is known for its annual Pumpkin Show. Commercial Point, South
            Bloomfield and Ashville are growing suburbs; Kingston, Tarlton and Williamsport are among its rural towns.
          </p>
        }
      >
        <FactTable
          title="Circleville Municipal Court"
          rows={[
            { label: 'Address', value: '141 S. Court St, Circleville, OH 43113' },
            { label: 'Hears', value: 'Misdemeanors, OVI/DUI, traffic violations, civil claims under $15,000' },
            {
              label: 'Directions',
              value: (
                <a className={linkClass} href="https://www.google.com/maps?q=141+S+Court+St,+Circleville,+OH+43113" target="_blank" rel="noopener noreferrer">
                  Get directions (Google Maps)
                </a>
              ),
            },
          ]}
        />
        <FactTable
          title="Pickaway County Common Pleas Court"
          rows={[
            { label: 'Address', value: '207 S. Court St, Circleville, OH 43113' },
            { label: 'Hears', value: 'Felony cases, major civil disputes, domestic relations, probate' },
            {
              label: 'Directions',
              value: (
                <a className={linkClass} href="https://www.google.com/maps?q=207+S+Court+St,+Circleville,+OH+43113" target="_blank" rel="noopener noreferrer">
                  Get directions (Google Maps)
                </a>
              ),
            },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[{ href: '/courts/circleville-municipal-court', title: 'Circleville Municipal Court guide', subtitle: 'OVI, misdemeanors and U.S. 23 stops' }]}
        />
      </Section>

      <Section title="OVI charges on U.S. 23 and across the county" tone="ice">
        <p>
          Under <Link href="/ovi-dui-defense">ORC 4511.19</Link>, Ohio prohibits driving with a BAC of 0.08 or higher, or while impaired
          by alcohol, controlled substances or other drugs. U.S. Route 23 runs north-south through the county from Columbus to
          Chillicothe, is actively patrolled, and produces many OVI arrests.
        </p>
        <FactTable
          title="First OVI"
          rows={[
            { label: 'Level', value: 'First-degree misdemeanor' },
            { label: 'Jail', value: 'Three days, or a driver intervention program' },
            { label: 'Fines', value: '$375 to $1,075' },
            { label: 'License', value: 'Suspension of one to three years' },
            { label: 'High tier', value: 'BAC 0.17 or above triggers higher mandatory minimums' },
          ]}
        />
        <Callout title="Appeal the license suspension within 30 days">
          If you refuse or fail a chemical test, your license is suspended at arrest. You have only 30 days to appeal in Circleville
          Municipal Court.
        </Callout>
      </Section>

      <Section title="Misdemeanor charges in Pickaway County">
        <p>
          Circleville Municipal Court at 141 S. Court St hears charges from disorderly conduct and petty theft to domestic violence and
          drug offenses. The Pumpkin Show, one of the largest free street festivals in the United States, can add misdemeanor charges
          each October. Under Ohio law, first-degree misdemeanors (ORC 2929.24) carry up to 180 days in jail and $1,000 in fines, and a
          conviction creates a permanent record that follows you into jobs, housing and licensing.
        </p>
        <p>
          The firm investigates each case, challenges the evidence, and pursues dismissal, a reduction or diversion. Eligible records
          can later be sealed under ORC 2953.31.
        </p>
      </Section>

      <Section title="Business and injury matters" tone="ice">
        <p>
          Injury claims from accidents on U.S. 23 or county roads must be filed within Ohio&rsquo;s two-year statute of limitations under
          ORC 2305.10. For business owners on the U.S. 23 growth corridor, the firm handles LLC formation under ORC Chapter 1706,
          commercial contract drafting and landlord-tenant disputes.
        </p>
      </Section>

      <Section title="What the firm handles in Pickaway County">
        <LinkGrid links={SERVICES} columns={2} />
        <p>
          Jwayyed Law LLC is based in Columbus and regularly serves clients in central and southern Ohio, including Pickaway County.
          Call (614) 285-5482 or reach out online to schedule a consultation. The firm does not handle immigration, juvenile or probate
          matters.
        </p>
      </Section>

      <LocationsWeServe title="Pickaway County Legal Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
