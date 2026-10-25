import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Franklin County Municipal Court Attorney',
  description:
    'OVI, criminal and civil cases at Franklin County Municipal Court, 375 S. High St., Columbus: what the court hears and how cases move. Call (614) 285-5482.',
  keywords: [
    'Franklin County Municipal Court attorney',
    'Columbus Municipal Court OVI lawyer',
    'criminal defense Franklin County Municipal Court',
    'eviction attorney Columbus',
    'Franklin County Municipal Court criminal lawyer',
  ],
  openGraph: {
    title: 'Franklin County Municipal Court Attorney | Jwayyed Law LLC',
    description: 'OVI, misdemeanor, civil and eviction cases at Franklin County Municipal Court in Columbus.',
    url: 'https://www.jjlawohio.com/courts/franklin-county-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/franklin-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Franklin County Municipal Court', href: '/courts/franklin-county-municipal-court' },
];

const faqs = [
  {
    question: 'What types of cases does Jwayyed Law LLC handle in Franklin County Municipal Court?',
    answer:
      "OVI/DUI defense; misdemeanor criminal defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container and more); traffic defense; and civil matters, including contract disputes, evictions, landlord-tenant proceedings and business collections within the court's $15,000 civil jurisdictional limit. Call (614) 285-5482 to discuss your case.",
  },
  {
    question: 'What are the OVI penalties in Franklin County Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. A high-tier OVI (BAC 0.17% or above) carries a mandatory minimum of 6 days. A second OVI within 10 years carries a minimum of 10 consecutive days, fines of $715 to $1,625, and a suspension of 1 to 7 years. Felony OVI (4th degree) applies when there are 3 or more prior OVI convictions within 10 years.',
  },
  {
    question: 'How do I appeal an Administrative License Suspension (ALS) in Franklin County?',
    answer:
      'Under ORC 4511.191, you have 30 days from the date of arrest to file an ALS appeal in Franklin County Municipal Court at 375 S. High Street, Columbus, OH 43215. The ALS takes effect at arrest and is a civil proceeding separate from the criminal OVI case. An attorney can file the appeal, request a stay of the suspension, and challenge it on procedural or substantive grounds. Missing the 30-day window permanently forfeits your right to contest the ALS.',
  },
  {
    question: 'What criminal misdemeanor cases are heard in Franklin County Municipal Court?',
    answer:
      "All misdemeanor charges arising within the court's jurisdiction, including OVI/DUI, theft and shoplifting (M1 for amounts under $1,000), domestic violence (R.C. 2919.25), assault (R.C. 2903.13), drug possession (R.C. 2925.11), disorderly conduct (R.C. 2917.11), open container (R.C. 4301.62), driving under suspension, criminal damaging, criminal mischief, criminal trespass, obstructing official business and resisting arrest. The court also handles felony arraignments before cases are bound over to Franklin County Common Pleas Court.",
  },
  {
    question: 'What is the civil jurisdictional limit of Franklin County Municipal Court?',
    answer:
      'The court hears civil disputes where the amount in controversy does not exceed $15,000, excluding interest and costs. Claims above $15,000 must be filed in the Franklin County Court of Common Pleas (General Division). Small claims go to the Small Claims Division, which has a $6,000 limit. If you are unsure which court fits your dispute, an attorney can evaluate the amount in controversy and choose the right one.',
  },
  {
    question: 'How does the eviction process work in Franklin County Municipal Court?',
    answer:
      "Ohio's eviction process (forcible entry and detainer) is governed by ORC Chapter 1923. It starts when the landlord serves proper written notice: typically a 3-day notice for nonpayment of rent, or a 30-day notice for other lease violations. If the tenant does not comply, the landlord files an eviction complaint in Franklin County Municipal Court. Under ORC 1923.07, the court schedules a hearing within 30 days of filing. If the landlord wins, the court issues a judgment for possession. After the appeal period, a writ of restitution authorizes law enforcement to remove the tenant. Procedural errors can lead to dismissal, so compliance with ORC Chapter 1923 matters.",
  },
  {
    question: 'What specialized dockets does Franklin County Municipal Court operate?',
    answer:
      'HART Court is a recovery docket for defendants with opioid addiction, offering treatment as an alternative to incarceration. MAVS Court is a mental health docket for defendants with serious mental illness. CATCH Court is a docket for adult female victims of human trafficking and sexual exploitation. Eligibility can open a path to treatment and dismissal of charges. An attorney can evaluate whether you may qualify and ask for placement.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Franklin County Municipal Court case?',
    answer:
      "The firm represents clients across the court's criminal, OVI, traffic, civil and eviction divisions and knows the specialized dockets open to some defendants. On an OVI, it files the ALS appeal (30-day deadline from arrest), gathers the evidence and builds the defense around your case. Call (614) 285-5482 to discuss your Franklin County Municipal Court case.",
  },
];

export default function FranklinCountyMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Municipal Court"
        description="The court at 375 S. High Street in Columbus hears misdemeanor, OVI, traffic and civil cases for Columbus and Franklin County. After an OVI arrest you have 30 days to appeal the license suspension here."
      />

      <KeyFacts
        facts={[
          { figure: '30 days', label: 'from arrest to appeal an administrative license suspension' },
          { figure: '$15,000', label: 'civil jurisdictional limit, excluding interest and costs' },
          { figure: '$6,000', label: 'limit in the Small Claims Division' },
          { figure: '3', label: 'specialized dockets: HART, MAVS and CATCH' },
        ]}
      />

      <Section
        title="The court at a glance"
        intro={
          <p>
            Franklin County Municipal Court is the busiest municipal court in Ohio, hearing tens of thousands of criminal, OVI,
            traffic and civil cases each year for Columbus and the surrounding Franklin County communities.
          </p>
        }
      >
        <FactTable
          title="Franklin County Municipal Court"
          rows={[
            { label: 'Address', value: '375 S. High Street, Columbus, OH 43215 (floors 12–15)' },
            { label: 'Criminal', value: 'Misdemeanors, OVI/DUI, traffic, and felony arraignments before bindover to Common Pleas Court' },
            { label: 'Civil', value: 'Disputes up to $15,000, excluding interest and costs' },
            { label: 'Small Claims Division', value: 'Simpler disputes up to $6,000' },
            { label: 'Housing Division', value: 'Residential evictions under ORC Chapter 1923, housing code enforcement, certain landlord-tenant matters' },
            { label: 'Over $15,000', value: 'Filed in Franklin County Court of Common Pleas (General Division)' },
          ]}
        />
        <p>
          Jwayyed Law LLC represents clients in every division of this court. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a> to speak with an attorney about your case.
        </p>
      </Section>

      <Section title="OVI cases at Franklin County Municipal Court" tone="ice">
        <p>
          OVI charges under <Link href="/ovi-dui-defense">Ohio Revised Code 4511.19</Link> are among the most frequently litigated
          matters in this court. The penalties were revised under HB 37, effective April 9, 2025.
        </p>
        <FactTable
          title="OVI penalties"
          rows={[
            {
              label: 'First OVI',
              value: 'Mandatory minimum 3 days in jail or a certified Driver Intervention Program; fines of $565 to $1,075; license suspension of 1 to 3 years.',
            },
            { label: 'High-tier OVI', value: 'BAC 0.17% or above: higher mandatory minimums, even for a first offense.' },
            {
              label: 'Second OVI within 10 years',
              value: 'Minimum 10 consecutive days in jail; fines of $715 to $1,625; suspension of 1 to 7 years.',
            },
          ]}
        />
        <Callout title="The 30-day ALS appeal">
          After an OVI arrest anywhere in Franklin County, the officer issues an Administrative License Suspension (ALS) notice under
          ORC 4511.191. The ALS is a civil proceeding separate from the criminal case, and you have 30 days from the date of arrest to
          appeal it in this court. The firm files right away and asks for a stay so you can keep driving during the appeal. Missing
          the window permanently forfeits your right to contest the suspension, and it cannot be extended.
        </Callout>
        <h3>Where an OVI defense starts</h3>
        <PointGrid
          points={[
            { title: 'The traffic stop', body: 'Whether the initial stop was constitutional.' },
            {
              title: 'Field sobriety tests',
              body: 'Body-cam and dash-cam footage, checked against the NHTSA-standardized procedures for the HGN, walk-and-turn and one-leg stand tests.',
            },
            {
              title: 'Breath and blood results',
              body: 'Breathalyzer maintenance and calibration records, and blood-draw chain-of-custody documentation.',
            },
            {
              title: 'Rising BAC',
              body: 'A BAC below 0.08% while driving can rise past it before the test. This matters when the result is near the legal threshold.',
            },
          ]}
        />
        <p>For clients whose careers depend on it, the firm also looks at how an OVI affects professional licenses regulated by Ohio boards.</p>
      </Section>

      <Section title="Misdemeanor charges heard here">
        <p>The court handles the full range of misdemeanor charges for Columbus and every Franklin County municipality.</p>
        <FactTable
          title="Common charges"
          rows={[
            {
              label: 'Theft and shoplifting',
              value: 'ORC 2913.02. Misdemeanor of the first degree for amounts under $1,000: up to 180 days in jail and a $1,000 fine.',
            },
            {
              label: 'Domestic violence',
              value:
                "ORC 2919.25. M1 for physical harm, M4 for threats. Any misdemeanor DV conviction triggers the federal Lautenberg Amendment's permanent firearm prohibition.",
            },
            { label: 'Assault', value: 'ORC 2903.13. M1 baseline, rising to a felony in certain circumstances.' },
            { label: 'Drug possession', value: 'ORC 2925.11.' },
            { label: 'Disorderly conduct', value: 'ORC 2917.11.' },
            { label: 'Open container', value: 'ORC 4301.62.' },
          ]}
        />
        <p>
          Because the caseload is heavy, the firm gathers the evidence before weighing any plea offer: body-cam footage, incident
          reports, witness statements and any forensic evidence. Franklin County prosecutors routinely offer diversion programs to
          first-time offenders in appropriate cases. Whether to take diversion or push for dismissal or trial depends on the case. A
          misdemeanor conviction creates a permanent record that employers, landlords and licensing boards can see.
        </p>
      </Section>

      <Section
        title="Specialized dockets: HART, MAVS and CATCH"
        tone="ice"
        intro={<p>Three dockets offer treatment-based alternatives to traditional prosecution. Finishing the program can end in dismissal of the charges.</p>}
      >
        <PointGrid
          points={[
            {
              title: 'HART Court',
              body: 'A recovery docket for defendants with opioid use disorder, with structured treatment as an alternative to incarceration for eligible drug-related offenses.',
            },
            {
              title: 'MAVS Court',
              body: 'A mental health docket for defendants with serious mental illness, connecting them with community mental health services as part of the case.',
            },
            {
              title: 'CATCH Court',
              body: 'A docket for adult female victims of human trafficking and sexual exploitation, with social services and legal advocacy.',
            },
            { title: 'Getting placed', body: 'An attorney can evaluate eligibility and ask the court for placement in the right docket.' },
          ]}
        />
      </Section>

      <Section title="Civil cases, collections and evictions">
        <p>
          The Civil Division handles contract disputes, property damage claims and commercial collections up to $15,000. The Small
          Claims Division takes simpler disputes up to $6,000, and the Housing Division hears evictions.
        </p>
        <h3>How an eviction moves</h3>
        <Steps
          steps={[
            {
              title: 'Written notice',
              body: 'The landlord serves the right notice: typically a 3-day notice to vacate for nonpayment of rent, or a 30-day notice for other material lease violations under ORC Chapter 5321.',
            },
            { title: 'Complaint', body: 'If the notice period runs out without compliance, the landlord files an eviction complaint in the Housing Division.' },
            { title: 'Hearing', body: 'Under ORC 1923.07, the court must schedule a hearing within 30 days.' },
            {
              title: 'Judgment and writ',
              body: 'If the landlord prevails, the court issues a judgment for possession. After the appeal period, a writ of restitution authorizes law enforcement to remove the tenant.',
            },
          ]}
        />
        <p>
          Procedural errors (an improper notice, failure to meet ORC 5321 habitability requirements, or a filing in the wrong court) can
          lead to dismissal and long delay.
        </p>
        <FactTable
          title="After a civil judgment"
          rows={[
            { label: 'Wage garnishment', value: 'ORC 2716.02, up to 25% of disposable earnings' },
            { label: 'Bank account levy', value: 'ORC 2716.11' },
            { label: 'Judgment lien on real property', value: 'ORC 2329.02' },
            { label: 'Debtor exemptions', value: 'Ohio property exemptions under ORC 2329.66' },
          ]}
          note="The firm handles both creditor-side collections and debtor-side defense in post-judgment proceedings here."
        />
      </Section>

      <LocationsWeServe title="Franklin County & Ohio" />

      <Section title="What the firm handles at this court" tone="ice">
        <PointGrid
          points={[
            {
              title: 'OVI / DUI defense',
              body: 'ALS appeals (30-day deadline), first, second and third offenses, high-tier OVI, CDL OVI, limited driving privileges.',
            },
            {
              title: 'Criminal misdemeanor defense',
              body: 'Theft, domestic violence, assault, drug possession, disorderly conduct, open container, driving under suspension and more.',
            },
            { title: 'Traffic violations', body: 'Speeding, reckless operation, failure to comply, marked lanes and other traffic charges.' },
            { title: 'Expungement', body: 'Sealing eligible misdemeanor convictions after the waiting periods under R.C. 2953.32.' },
            { title: 'Civil disputes', body: 'Contract claims, property damage and commercial collections within the $15,000 limit.' },
            { title: 'Evictions', body: 'Residential and commercial evictions in the Housing Division under ORC Chapter 1923.' },
            { title: 'Post-judgment enforcement', body: 'Wage garnishment, bank levies and judgment lien filings.' },
          ]}
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>. After an OVI
          arrest, contact the firm early: the 30-day ALS deadline does not move.
        </p>
        <LinkGrid
          columns={2}
          links={[
            { href: '/courts/franklin-county', title: 'Franklin County courts', subtitle: 'Every court in the county' },
            { href: '/ovi-dui-defense', title: 'OVI/DUI defense', subtitle: 'Penalties and defenses statewide' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
