import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Expungement Attorney Ohio',
  description:
    'Sealing a criminal record in Ohio under ORC 2953.32: who qualifies, the waiting periods and the court process. Call Jwayyed Law LLC at (614) 285-5482.',
  keywords: ['expungement lawyer Ohio', 'record sealing attorney Columbus', 'Ohio expungement ORC 2953', 'criminal record sealing Ohio', 'expungement attorney Franklin County'],
  openGraph: {
    title: 'Expungement Attorney Ohio | Jwayyed Law LLC',
    description: 'Eligibility, waiting periods and the court process for sealing or expunging a criminal record in Ohio.',
    url: 'https://www.jjlawohio.com/criminal-defense/expungement-record-sealing',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/criminal-defense/expungement-record-sealing' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Expungement / Record Sealing', href: '/criminal-defense/expungement-record-sealing' },
];

const faqs = [
  {
    question: 'What is the difference between expungement and record sealing in Ohio?',
    answer:
      'People use the terms interchangeably, but under ORC Chapter 2953 they are different kinds of relief. Record sealing under ORC 2953.32 closes the record from public view: most employers, landlords and members of the public cannot see it, but law enforcement, courts and certain government agencies can. Expungement under ORC 2953.38 goes further and destroys the record. For most purposes sealing is enough: a sealed record does not show up on standard background checks, and you may lawfully answer "no" on most job applications that ask about prior convictions. The firm can tell you which form of relief applies to your case.',
  },
  {
    question: 'Who is eligible for record sealing in Ohio under ORC 2953.32?',
    answer:
      'Eligibility depends on the type of offense, the number of prior convictions, whether you completed every condition of your sentence, and whether the waiting period has run. The Ohio legislature has significantly expanded eligibility, most recently in 2023 and 2024. Most misdemeanors (all degrees) and low-level felonies (F4 and F5, and many F3 offenses) are eligible. Some offenses are ineligible no matter what: first- and second-degree felonies (with limited exceptions), crimes of violence under ORC 2901.01(A)(9), sexually oriented offenses, offenses with minor victims, and most traffic offenses (OVI/DUI under ORC 4511.19 cannot be sealed). An attorney can review your record and advise on eligibility.',
  },
  {
    question: 'What are the waiting periods for record sealing in Ohio?',
    answer:
      'Under ORC 2953.32 (as amended through 2024), waiting periods run from final discharge: the end of all incarceration, probation and parole, and payment of all fines, costs and restitution. They are: minor misdemeanors, 1 year; misdemeanors of the first through fourth degree, 1 year; fourth- and fifth-degree felonies, 1 year; third-degree felonies (one conviction), 3 years; third-degree felonies (two convictions), 3 years. Arrests and charges that did not end in a conviction (dismissals, not-guilty verdicts, no-bills) have no waiting period, so you can apply right away. The court will not grant sealing until all fines, court costs and restitution are paid.',
  },
  {
    question: 'Can felony records be sealed in Ohio?',
    answer:
      'Yes, many can, under ORC 2953.32 as expanded by recent legislation. Fourth- and fifth-degree felonies are eligible after a 1-year waiting period, and many third-degree felonies after 3 years. Under 2023 Ohio legislation, some second-degree felony convictions became eligible for offenses committed after July 1, 2023, with conditions. Ineligible felonies include first-degree felonies (generally), crimes of violence as defined by ORC 2901.01(A)(9), sexually oriented offenses, offenses with mandatory prison terms, and offenses with a minor victim. Ohio law also caps the number of prior convictions you can have. An attorney can review your felony conviction or convictions and tell you whether sealing is possible.',
  },
  {
    question: 'Can dismissed charges or not-guilty verdicts be sealed in Ohio?',
    answer:
      'Yes. Dismissed charges, not-guilty verdicts, no-billed charges (where a grand jury declined to indict) and cases where the prosecutor entered a nolle prosequi (declined to prosecute) can be sealed under ORC 2953.52 with no waiting period. These records still show up on background checks and can hurt your job and housing prospects even though there was no conviction. You can apply any time after the case ends, and courts generally look favorably on the application when there was no conviction.',
  },
  {
    question: 'What is the process for getting a record sealed in Ohio?',
    answer:
      'There are six steps. (1) Eligibility: confirm the offense type, the waiting period and the number of prior convictions. (2) Application: draft and file the application for expungement or sealing in the court of conviction (the original sentencing court), with any required affidavits or documents. (3) Notice: the court notifies the prosecuting attorney, who has 60 days to object. (4) Hearing: usually brief; the court weighs your interests against any legitimate government interest in keeping the record. (5) Order: if granted, the court sends a sealing order to every relevant repository (Ohio BCI, courts, law enforcement agencies). (6) Updates: the agencies update their records. The firm handles every step, from the eligibility review to follow-up after the order.',
  },
  {
    question: 'Does sealing a record allow me to say I have no criminal record on job applications?',
    answer:
      'Generally yes, with important exceptions. Once a record is sealed under ORC 2953.32, the law says that in most circumstances you "shall be treated as if he had not been convicted of or pleaded guilty to the offense." So you may lawfully answer "no" on most private employer applications that ask about prior convictions. Ohio law still requires disclosure of a sealed record in some situations: law enforcement job applications; applications that require a criminal background check under Ohio law (certain licensed professions, jobs working with children or vulnerable adults, firearm purchases); and federal employment applications, since Ohio sealing orders do not govern federal law. An attorney can tell you which disclosure rules apply to you.',
  },
  {
    question: "What records does Ohio's expungement order actually seal?",
    answer:
      'A sealing order under ORC 2953.32 directs every official repository to seal the records: court records (the docket, case file and judgment entry), Ohio Bureau of Criminal Investigation (BCI) records, law enforcement agency records and the arresting agency\'s records. The Ohio Revised Code requires BCI to keep a sealed index that only courts (for sentencing) and law enforcement agencies can access. Commercial background check companies must remove sealed records once notified, but some databases take time to update and some private companies may keep the information, so it is worth checking your background report after sealing. A sealed record will not appear on most Ohio BCI checks used by private employers and landlords.',
  },
];

const RELATED = [
  { href: '/criminal-defense/assault-charges', title: 'Assault charges', subtitle: 'Simple and aggravated assault defense in Ohio' },
  { href: '/criminal-defense/domestic-violence', title: 'Domestic violence defense', subtitle: 'Ohio DV charges and protection order defense' },
  { href: '/criminal-defense/petty-theft', title: 'Petty theft', subtitle: 'Shoplifting and theft defense in Ohio' },
  { href: '/criminal-defense/driving-under-suspension', title: 'Driving under suspension', subtitle: 'Suspended license defense in Ohio' },
];

export default function ExpungementRecordSealingPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Expungement and record sealing in Ohio"
        description="Under ORC 2953.32, most misdemeanors and fourth- and fifth-degree felonies can be sealed 1 year after final discharge. Dismissed charges can be sealed right away."
      />

      <KeyFacts
        facts={[
          { figure: '1 year', label: 'waiting period for misdemeanors and F4 and F5 felonies, from final discharge' },
          { figure: '3 years', label: 'waiting period for third-degree felonies' },
          { figure: 'None', label: 'waiting period for dismissed charges and not-guilty verdicts (ORC 2953.52)' },
          { figure: '60 days', label: 'for the prosecutor to object after the application is filed' },
        ]}
      />

      <Section
        title="What sealing a record does"
        intro={
          <p>
            Record sealing under <strong>ORC 2953.32</strong> takes a conviction out of public view, so it stops showing up on the
            background checks employers, landlords, licensing boards and schools run.
          </p>
        }
      >
        <p>
          Even a minor misdemeanor can follow you for years. Ohio has significantly expanded its sealing and expungement laws in recent
          years, and many people who were ineligible before may now qualify. Jwayyed Law LLC helps clients throughout Ohio check
          eligibility, file the application and complete the process.
        </p>
        <p>
          Once a record is sealed, Ohio law says that in most circumstances you &quot;shall be treated as if he had not been convicted
          of or pleaded guilty to the offense.&quot; Most private employers and landlords running standard checks will not see it, and
          you may lawfully answer &quot;no&quot; on most job applications that ask about prior convictions.
        </p>
        <Callout title="When you still have to disclose">
          Law enforcement jobs, certain licensed professions, positions working with children or vulnerable adults, and federal
          employment applications require disclosure of sealed records. Knowing which of these apply to you is part of planning after
          the record is sealed.
        </Callout>
      </Section>

      <Section title="Who qualifies for record sealing" tone="ice">
        <p>
          Eligibility turns on the nature of the offense, the number of prior convictions, whether every condition of the sentence is
          complete, and whether the waiting period has run. Most misdemeanor convictions and many felony convictions are eligible,
          including fourth- and fifth-degree felonies after one year and third-degree felonies after three years.
        </p>
        <FactTable
          title="Waiting periods under ORC 2953.32, from final discharge"
          rows={[
            { label: 'Minor misdemeanors', value: '1 year' },
            { label: 'Misdemeanors (M1 to M4)', value: '1 year' },
            { label: 'Fourth- and fifth-degree felonies', value: '1 year' },
            { label: 'Third-degree felonies (one or two convictions)', value: '3 years' },
            { label: 'Dismissed charges and non-conviction records (ORC 2953.52)', value: 'No waiting period' },
          ]}
          note="Final discharge means the end of all incarceration, probation and parole, and payment of all fines, costs and restitution. All fines and costs must be paid before filing. The number of prior convictions affects eligibility for higher-degree offenses."
        />
        <FactTable
          title="Offenses that cannot be sealed"
          rows={[
            { label: 'OVI/DUI', value: 'Convictions under ORC 4511.19.' },
            { label: 'Crimes of violence', value: 'As defined by ORC 2901.01(A)(9).' },
            { label: 'Sexually oriented offenses', value: 'Ineligible.' },
            { label: 'Minor victims', value: 'Offenses where the victim was a minor.' },
            { label: 'High-level felonies', value: 'Most F1 and F2 felonies; first-degree felonies in most circumstances.' },
          ]}
        />
        <p>
          Because eligibility has expanded under recent legislation, a review of your actual record is the surest way to know whether
          you qualify.
        </p>
      </Section>

      <Section title="Sealing charges that never led to a conviction">
        <p>
          Arrests and cases that ended without a conviction are often overlooked. Dismissed charges, charges no-billed by a grand jury,
          cases where the prosecutor entered a nolle prosequi, and acquittals (not-guilty verdicts) can all be sealed under{' '}
          <strong>ORC 2953.52</strong> with no waiting period.
        </p>
        <p>
          These records still show up on background checks and can mislead employers and landlords. Sealing them is often the fastest
          and most useful record relief available in Ohio.
        </p>
      </Section>

      <Section title="How the sealing process works" tone="ice">
        <Steps
          steps={[
            {
              title: 'Eligibility review',
              body: 'A review of your full record across Ohio courts to find every sealable offense, confirm the waiting periods have run, and flag any ineligible offense that could complicate the application.',
            },
            {
              title: 'Application and filing',
              body: 'The application is filed in the court of original conviction (the sentencing court, not just any court), with supporting documents.',
            },
            {
              title: 'Prosecutor response',
              body: 'The prosecuting attorney has 60 days to respond. Any objection gets a response.',
            },
            {
              title: 'Hearing',
              body: 'The firm appears on your behalf, presents the case for sealing, and answers any concerns from the judge or objections from the prosecutor.',
            },
            {
              title: 'Follow-up after the order',
              body: 'The firm confirms the sealing order reached every relevant agency, including BCI, law enforcement repositories and court records offices.',
            },
          ]}
        />
      </Section>

      <Section title="Related reading and services">
        <p>
          If you have a criminal record in Ohio, <Link href="/contact">contact Jwayyed Law LLC</Link> to find out whether sealing is
          available to you. Read the firm&rsquo;s articles on{' '}
          <Link href="/our-law-firm/blog/ohio-new-expungement-laws-clear-record">Ohio&rsquo;s new expungement laws</Link> and{' '}
          <Link href="/our-law-firm/blog/what-is-expungement-ohio-2024">how expungement works in Ohio</Link>. Related services include{' '}
          <Link href="/criminal-defense">Ohio criminal defense</Link> and <Link href="/ovi-dui-defense">OVI/DUI defense</Link>. OVI
          convictions under ORC 4511.19 cannot be sealed.
        </p>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <LocationsWeServe title="Criminal Defense" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
