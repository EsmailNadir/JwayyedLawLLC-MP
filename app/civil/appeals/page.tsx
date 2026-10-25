import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Appeals Lawyer in Ohio',
  description:
    'Appealing a court decision in Ohio: the 30-day notice of appeal deadline, standards of review, briefs under App.R. 16 and which district hears your case.',
  keywords: ['appeals lawyer Columbus OH', 'appeals attorney Ohio', 'appellate lawyer', 'Franklin County appeals attorney'],
  openGraph: {
    title: 'Appeals Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Civil appeals in the Ohio District Courts of Appeals and the Ohio Supreme Court.',
    url: 'https://www.jjlawohio.com/civil/appeals',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/civil/appeals' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Appeals', href: '/civil/appeals' },
];

const faqs = [
  {
    question: 'What is an appeal in Ohio?',
    answer:
      "An appeal under Ohio Revised Code Chapter 2505 asks a higher court to review a lower court's decision for legal errors. Appellate courts do not hear new testimony or evidence. They review whether the lower court made legal errors that materially affected the outcome. Assignments of error must be identified precisely in the appellate brief, and errors not objected to at trial are generally waived.",
  },
  {
    question: 'What is the deadline for filing an appeal in Ohio?',
    answer:
      'Under Ohio App.R. 4 and ORC 2505.07, the notice of appeal is generally due within 30 days of the entry of the final judgment or order being appealed. Missing it almost always bars the appeal, and courts have very limited power to extend it. The 30-day clock starts when the clerk journalizes the judgment, not when you receive notice of it. If you received an adverse ruling, talk to an appellate attorney right away.',
  },
  {
    question: 'What is the difference between de novo review and abuse of discretion?',
    answer:
      "De novo review applies to pure questions of law: the appellate court looks at the issue fresh, with no deference to the trial court. Abuse of discretion review applies to discretionary decisions such as evidentiary rulings, sentencing decisions and case management orders; the court reverses only if the trial court acted unreasonably, arbitrarily or unconscionably. Manifest weight of the evidence review applies when a party argues the factual findings went against the weight of the evidence. The standard that applies shapes the whole appeal.",
  },
  {
    question: 'Which courts handle appeals in Ohio?',
    answer:
      "Ohio has a three-tier structure. Decisions from Municipal Courts and Common Pleas Courts are appealed to one of Ohio's 12 District Courts of Appeals. The 10th District handles Franklin County; the 12th District covers Butler, Clinton, Greene and Warren Counties; the 2nd District covers Montgomery County (the Dayton area); the 4th District covers Athens and Pickaway Counties; and the 9th District covers Morrow County and several others. After that, parties may seek discretionary review at the Ohio Supreme Court, which generally accepts only cases involving constitutional questions or significant issues of public or legal interest.",
  },
  {
    question: 'How are appellate briefs written in Ohio?',
    answer:
      "Ohio App.R. 16 governs their content and format. The appellant's brief must have a table of contents, a statement of facts, assignments of error, and an argument on each assignment of error with citations to the record and legal authority. The appellee then files an answer brief, and the appellant may file a reply brief. Word limits, formatting rules and filing deadlines are strict.",
  },
  {
    question: 'How long does an appeal take in Ohio?',
    answer:
      'Typically 12 to 24 months from the notice of appeal to a final decision, depending on the district and the complexity of the case. The record has to be assembled, the case briefed and oral argument scheduled. Emergency or interlocutory appeals may move faster. If the Ohio Supreme Court accepts review, that may add another year or more. While the appeal is pending, the trial court judgment may or may not be stayed, depending on the circumstances and whether a supersedeas bond is posted.',
  },
  {
    question: 'Can new evidence be introduced on appeal?',
    answer:
      'Generally, no. The appellate court reviews only the record made in the trial court: the transcripts, exhibits and pleadings. That is why timely, specific objections at trial matter. Evidence or arguments not raised in the trial court are usually waived and cannot be raised for the first time on appeal, except in very limited circumstances such as plain error.',
  },
  {
    question: 'How much does an appeal cost in Ohio?',
    answer:
      'Ohio appeals are generally handled on an hourly fee basis, because assembling the record, researching the issues, drafting briefs and arguing take substantial time. Costs include filing fees, transcript preparation fees (which can be significant after a long trial) and attorney fees. Jwayyed Law LLC offers consultations to discuss your appellate options and the fee structure.',
  },
];

const RELATED = [
  { href: '/civil/breach-of-contract', title: 'Breach of contract', subtitle: 'Enforcing or defending contract obligations and recovering damages' },
  { href: '/civil/employment-disputes', title: 'Employment disputes', subtitle: 'Wrongful termination, discrimination and workplace retaliation claims' },
  { href: '/civil/real-estate-disputes', title: 'Real estate disputes', subtitle: 'Title disputes, boundary issues, quiet title actions and property litigation' },
  { href: '/criminal-defense', title: 'Criminal defense', subtitle: 'Criminal appeals and post-conviction relief in Ohio courts' },
];

export default function AppealsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Civil appeals in Ohio"
        description="A notice of appeal in Ohio is generally due within 30 days of the final judgment entry. Miss it and the right to appeal is almost always gone."
      />

      <KeyFacts
        facts={[
          { figure: '30 days', label: 'to file the notice of appeal, from journalization of the judgment' },
          { figure: '12', label: 'District Courts of Appeals in Ohio' },
          { figure: '12 to 24 months', label: 'typical time from notice of appeal to decision' },
        ]}
      />

      <Section
        title="What an appeal can and cannot do"
        intro={
          <p>
            An appeal asks a higher court to correct legal errors that affected the outcome. It is not a second trial: no new testimony
            and no new evidence.
          </p>
        }
      >
        <p>
          Appeals run under Ohio Revised Code Chapter 2505 and the Ohio Rules of Appellate Procedure. The firm handles civil appeals
          from Columbus, Cincinnati, Dayton and anywhere in Ohio as part of its <Link href="/civil">civil litigation practice</Link>.
          Appellate work rests on legal analysis, precise writing and the standards of review.
        </p>
        <Callout title="Errors must be preserved at trial">
          Ohio appellate courts will not review errors, including improper jury instructions, evidentiary rulings or constitutional
          violations, that were not raised and objected to in the trial court. Plain error review is the narrow exception.
        </Callout>
      </Section>

      <Section title="Which court hears your appeal" tone="ice">
        <FactTable
          title="Ohio appellate structure"
          rows={[
            { label: 'Trial courts', value: 'Municipal Courts and Common Pleas Courts.' },
            { label: '10th District', value: 'Sits in Columbus. Franklin County.' },
            { label: '12th District', value: 'Butler, Warren, Greene and Clinton Counties.' },
            { label: '2nd District', value: 'Montgomery County (the Dayton area).' },
            { label: '4th District', value: 'Athens and Pickaway Counties.' },
            { label: '9th District', value: 'Morrow County and others.' },
            { label: 'Ohio Supreme Court', value: 'Discretionary review under Ohio App.R. 26. Accepts a fraction of cases, generally constitutional questions or cases of significant public interest.' },
          ]}
        />
      </Section>

      <LocationsWeServe title="Civil" />

      <Section title="How an Ohio appeal proceeds" tone="ice">
        <Steps
          steps={[
            { title: 'Notice of appeal', body: 'Within 30 days of the final judgment entry (App.R. 4, ORC 2505.07).' },
            { title: 'The record', body: 'Transcripts, exhibits and pleadings from the trial court are assembled.' },
            {
              title: 'Briefs',
              body: 'Under App.R. 16: the appellant’s brief with assignments of error, a statement of facts cited to the record and argument with authority; the appellee’s answer brief; and an optional reply.',
            },
            { title: 'Oral argument', body: 'When allowed, a chance to answer the panel’s questions and press the strongest arguments.' },
            { title: 'Decision and further review', body: 'The district court rules. A party may then ask the Ohio Supreme Court to take the case.' },
          ]}
        />
      </Section>

      <Section title="Standards of review">
        <PointGrid
          points={[
            { title: 'De novo', body: 'Pure questions of law. No deference to the trial court.' },
            { title: 'Abuse of discretion', body: 'Discretionary rulings such as evidence and case management. Reversal only if the trial court acted unreasonably, arbitrarily or unconscionably.' },
            { title: 'Manifest weight', body: 'Factual findings that went against the weight of the evidence.' },
            { title: 'Plain error', body: 'A narrow route for errors that were not objected to at trial.' },
          ]}
        />
      </Section>

      <Section title="Whether to appeal" tone="ice">
        <p>
          Not every adverse judgment is worth appealing. Appeals are expensive and slow, and they succeed only when a real legal error
          affected the outcome. The trial record has to be reviewed to find preserved errors and weigh the chance of success against
          the cost. An appeal may be well worth it when liability is clear but damages were reduced by a questionable legal ruling. In
          other cases a post-judgment settlement or a request for reconsideration in the trial court is the better path.
        </p>
        <p>
          <Link href="/contact">Contact Jwayyed Law LLC</Link> for an honest assessment of your appeal. Appeals also arise in{' '}
          <Link href="/criminal-defense">criminal defense</Link> cases, where trial objections matter just as much.
        </p>
      </Section>

      <Section title="What the firm does on an appeal">
        <PointGrid
          points={[
            { title: 'Evaluates the appeal', body: 'Reviews the trial record for preserved assignments of error with merit.' },
            { title: 'Writes the briefs', body: 'Under Ohio App.R. 16.' },
            { title: 'Argues', body: 'Before the District Courts of Appeals or the Ohio Supreme Court.' },
            { title: 'Manages procedure', body: 'Deadlines, record preparation and every appellate filing.' },
            { title: 'Gives a straight answer', body: 'Whether appealing is in your interest at all.' },
          ]}
        />
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
