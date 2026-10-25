import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { LinkGrid, PointGrid, Section, Steps } from '@/components/practice';
import { getSuburb, FCMC, FIRM_NAP } from '@/data/franklin-county-reference';
import { FcmcTable, ProsecutorNote, SuburbAtAGlance, slugify, suburbLinks } from './shared';

interface Props {
  suburb: string;
}

export default function MayorsCourtTemplate({ suburb }: Props) {
  const suburbData = getSuburb(suburb);
  if (!suburbData) throw new Error(`No reference data found for suburb: ${suburb}`);

  const { mayorsCourt, policeAgency, keyRoads, formerProsecutorTitle } = suburbData;

  if (!mayorsCourt.active) {
    throw new Error(`MayorsCourtTemplate used for suburb without active mayor's court: ${suburb}. Use a different template.`);
  }

  const { address, phone, schedule } = mayorsCourt;
  const slug = slugify(suburb);
  const tel = `tel:${FIRM_NAP.phoneRaw.replace('+', '')}`;

  const breadcrumbItems = [
    { label: 'Locations', href: '/locations' },
    { label: 'Franklin County', href: '/locations/franklin-county' },
    { label: `${suburb} Mayor's Court`, href: `/locations/franklin-county/mayors-court-${slug}` },
  ];

  const faqs = [
    {
      question: `What is ${suburb} Mayor's Court and how does it work?`,
      answer: `${suburb} Mayor's Court is a limited-jurisdiction Ohio court that handles minor misdemeanor criminal charges and most traffic violations arising within ${suburb} city limits. The ${suburb} mayor or a designated magistrate presides, rather than a licensed judge. Court schedule: ${schedule}. Cases are heard at ${address}. Mayor's courts can accept pleas, impose fines, and sentence defendants on eligible offenses, but they cannot hold jury trials. Cases with a jury demand, felony charges, or matters beyond the court's jurisdiction transfer to Franklin County Municipal Court at ${FCMC.address}.`,
    },
    {
      question: `What charges are heard in ${suburb} Mayor's Court?`,
      answer: `${suburb} Mayor's Court has jurisdiction over minor misdemeanors and first, second, third, and fourth-degree misdemeanor criminal charges arising within ${suburb}, including OVI, speeding, traffic violations, disorderly conduct, open container, minor drug possession citations, petty theft, and most other misdemeanor offenses. It does not handle felony charges (which go to Franklin County Municipal Court and then Common Pleas) and does not hold jury trials. If you demand a jury trial, your case transfers to Franklin County Municipal Court.`,
    },
    {
      question: `Can I just pay my ${suburb} Mayor's Court fine online or by mail?`,
      answer: `For minor traffic citations you may be able to pay a fine without appearing. Call ${suburb} Mayor's Court at ${phone} to confirm whether your charge allows a no-appearance payment. Misdemeanor criminal charges (including OVI, disorderly conduct, theft, and most others) generally require a personal appearance at arraignment. Failing to appear on a misdemeanor charge results in a bench warrant and default judgment. An attorney can often appear for you on minor matters, so you do not have to take time off work.`,
    },
    {
      question: `When does a ${suburb} Mayor's Court case transfer to Franklin County Municipal Court?`,
      answer: `A ${suburb} Mayor's Court case transfers to Franklin County Municipal Court when the defendant demands a jury trial; when the charge is a first-degree misdemeanor and the case cannot be resolved by plea; when a felony charge arises from the same facts; or when the mayor's court lacks jurisdiction over the offense. OVI charges are often resolved at the mayor's court, but the ALS appeal (30-day deadline under ORC 4511.191) is always filed directly in Franklin County Municipal Court at ${FCMC.address}.`,
    },
    {
      question: `Does a conviction in ${suburb} Mayor's Court create a permanent record?`,
      answer: `Yes. A conviction in ${suburb} Mayor's Court is a criminal conviction under Ohio law and creates a permanent public record with the same effect as a conviction in any other Ohio court. It appears on criminal background checks and follows the same expungement rules under ORC 2953.32. Many misdemeanor convictions are eligible for expungement after the waiting periods. The firm reviews expungement eligibility in every case.`,
    },
    {
      question: `Do I need an attorney for ${suburb} Mayor's Court?`,
      answer: `You have the right to an attorney in ${suburb} Mayor's Court for any charge that could lead to jail. Minor traffic violations can sometimes be handled without counsel, but any misdemeanor criminal charge (OVI, disorderly conduct, theft, assault) benefits from representation. An attorney can spot defenses you may not know about, negotiate with the prosecutor before your court date, and pursue dismissal or diversion options that unrepresented defendants do not get. Call Jwayyed Law LLC at (614) 285-5482 before your ${suburb} Mayor's Court date.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`${suburb} Mayor's Court: Franklin County, Ohio`}
        description={`${suburb} Mayor's Court, at ${address}, hears most misdemeanor and traffic charges from ${suburb}. Jury trials and felonies go to Franklin County Municipal Court.`}
      />

      <Section
        title={`${suburb} Mayor's Court at a glance`}
        intro={
          <p>
            {suburb} Mayor&apos;s Court handles the first stage of most misdemeanor criminal charges and traffic violations from
            inside {suburb} city limits: OVI, speeding, disorderly conduct, open container, petty theft and others.
          </p>
        }
      >
        <SuburbAtAGlance suburb={suburb} data={suburbData} title={`${suburb} Mayor's Court`} />
        <ProsecutorNote title={formerProsecutorTitle} />
        <p>
          The <strong>{policeAgency}</strong> makes most of the arrests and writes most of the citations that come into {suburb}{' '}
          Mayor&apos;s Court. Traffic stops on {keyRoads[0]} and the other main corridors through {suburb} account for much of the
          caseload: OVI stops, speeding citations, open container finds and other traffic-related criminal charges.
        </p>
        <p>
          Decisions made here, including whether to enter a plea and which one, can decide whether you leave with a permanent
          criminal record. The firm represents clients in {suburb} Mayor&apos;s Court and, when cases transfer, at Franklin County
          Municipal Court. Call <a href={tel}>{FIRM_NAP.phone}</a> before your court date.
        </p>
      </Section>

      <Section title="What a mayor's court is under Ohio law" tone="ice">
        <p>
          Mayor&apos;s courts are an Ohio institution authorized by Ohio Revised Code 1905.01. Municipalities set them up to handle
          minor criminal and traffic matters from inside city limits without a full-time municipal court. The mayor (or a
          magistrate the mayor appoints) presides, rather than a licensed attorney or judge.
        </p>
        <p>
          A mayor&apos;s court can accept pleas, impose fines and sentence defendants, but it does not hold jury trials. Any
          defendant who demands a jury trial has the case transferred to Franklin County Municipal Court.
        </p>
        <p>
          Mayor&apos;s courts hear minor misdemeanor, M4, M3, M2 and M1 criminal charges from the municipality, plus traffic
          violations under Ohio&apos;s motor vehicle laws. They have no jurisdiction over felonies; felony arraignments are held in
          Franklin County Municipal Court. For OVI, {suburb} Mayor&apos;s Court can hear the criminal charge, but the Administrative
          License Suspension (ALS) appeal must be filed separately in Franklin County Municipal Court within 30 days of arrest.
        </p>
      </Section>

      <Section title={`How a ${suburb} Mayor's Court case moves`}>
        <Steps
          steps={[
            {
              title: 'Citation or summons',
              body: `When the ${policeAgency} cites or arrests someone for a mayor's court offense, the citation or summons sets a date at ${address}. Court schedule: ${schedule}.`,
            },
            {
              title: 'Arraignment',
              body: 'You are told the charges and your rights and asked for a plea: not guilty (the case continues to a later date), guilty (convicted immediately and sentenced that day or later), or no contest (not admitting guilt but not disputing the evidence, treated like a guilty plea for conviction purposes).',
            },
            {
              title: 'Discovery and negotiation',
              body: 'An attorney at arraignment can often enter a not guilty plea, request all police evidence and negotiate with the prosecutor before the next hearing.',
            },
            {
              title: 'Resolution',
              body: 'In many first-offense minor misdemeanor and M4 cases, pretrial negotiation ends in dismissal, diversion or a reduced charge without a trial.',
            },
          ]}
        />
        <p>
          Having an attorney at arraignment, or better, before it, is the most useful single step you can take. The firm appears
          at {suburb} Mayor&apos;s Court for clients, which often means you can skip a personal appearance on minor matters.
        </p>
      </Section>

      <Section title={`When a case leaves ${suburb} Mayor's Court`} tone="ice">
        <p>A {suburb} Mayor&apos;s Court case goes to Franklin County Municipal Court when:</p>
        <ol>
          <li>the defendant demands a jury trial, which the mayor&apos;s court cannot hold;</li>
          <li>the charge is a felony (arraignments and all proceedings on felony charges must be in Franklin County Municipal Court);</li>
          <li>the case is an OVI with an ALS appeal (filed in Franklin County Municipal Court wherever the criminal case is pending);</li>
          <li>the mayor&apos;s court otherwise lacks jurisdiction; or</li>
          <li>the mayor&apos;s court and prosecutor agree to transfer for administrative convenience.</li>
        </ol>
        <FcmcTable hears="Jury trials, felony arraignments, ALS appeals, and cases transferred from mayor's courts" />
        <p>The firm handles cases at both levels, so your representation continues whichever court has the case.</p>
      </Section>

      <Section title={`Charges heard in ${suburb} Mayor's Court`}>
        <ul>
          <li>OVI/DUI charges under R.C. 4511.19 (first appearances only; ALS appeals go to Franklin County Municipal Court)</li>
          <li>Speeding and traffic violations</li>
          <li>Disorderly conduct under R.C. 2917.11</li>
          <li>Open container under R.C. 4301.62</li>
          <li>Petty theft and shoplifting under R.C. 2913.02 (misdemeanor level)</li>
          <li>Minor drug possession citations (minor misdemeanor marijuana under adult-use amounts)</li>
          <li>Driving under suspension, failure to control and marked lanes violations</li>
          <li>Other misdemeanor charges under Ohio&apos;s criminal code or {suburb}&apos;s municipal ordinances</li>
        </ul>
        <p>Each charge has its own procedure and defenses, and the firm prepares for the specific charge you face.</p>
        <h3>What the firm does at {suburb} Mayor&apos;s Court</h3>
        <PointGrid
          points={[
            { title: 'Arraignment representation', body: `Appearing at your first ${suburb} Mayor's Court date to enter a not guilty plea and obtain discovery.` },
            { title: 'Pretrial negotiation', body: 'Talking with the prosecutor before any hearing about diversion, dismissal or a reduced charge.' },
            { title: 'OVI defense', body: 'Defending the criminal OVI at the mayor’s court and filing the ALS appeal at Franklin County Municipal Court at the same time.' },
            { title: 'Traffic defense', body: 'Challenging speeding, failure to control and other traffic citations that affect your driving record and insurance rates.' },
            { title: 'Transfer coordination', body: 'Continuing representation if your case moves to Franklin County Municipal Court.' },
            { title: 'Record protection', body: 'Checking diversion and expungement eligibility to limit the long-term effect on your record.' },
          ]}
        />
        <p>
          If you have a citation or summons for {suburb} Mayor&apos;s Court, call <a href={tel}>{FIRM_NAP.phone}</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link>. The firm handles mayor&apos;s court appearances throughout
          Franklin County, often without your personal appearance on minor matters.
        </p>
      </Section>

      <Section title={`More for ${suburb} and Franklin County`} tone="ice">
        <LinkGrid links={suburbLinks(suburb, 'mayors-court')} />
        <h3>Franklin County courts</h3>
        <LinkGrid
          columns={2}
          links={[
            { href: '/locations/franklin-county/mayors-courts-franklin-county', title: 'Franklin County mayor’s courts', subtitle: 'Every suburb mayor’s court in the county' },
            { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide: location, dockets and what to expect' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
