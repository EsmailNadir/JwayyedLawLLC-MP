import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';
import { civilServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Ohio Civil Attorney',
  description:
    'Civil disputes in Columbus, Cincinnati, Dayton and across Ohio: contracts, real estate, evictions, debt collection and more, with the filing deadlines that apply.',
  keywords: ['Ohio civil attorney', 'Columbus civil attorney', 'Cincinnati civil attorney', 'Dayton civil attorney', 'Ohio civil lawyer', 'civil litigation attorney', 'contract disputes lawyer'],
  openGraph: {
    title: 'Ohio Civil Attorney | Jwayyed Law LLC',
    description: 'Civil litigation in Columbus, Cincinnati, Dayton and throughout Ohio. Schedule a consultation.',
    url: 'https://www.jjlawohio.com/civil',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/civil' },
};

const breadcrumbItems = [{ label: 'Civil', href: '/civil' }];

const faqs = [
  {
    question: 'What is civil litigation in Ohio?',
    answer:
      'Civil litigation is a legal dispute between parties over money damages or another remedy, as opposed to a criminal charge. Common civil cases include contract disputes, real estate disputes, landlord-tenant disputes, evictions, debt collection defense, employment disputes and defamation. Civil cases are decided on a preponderance of the evidence, not beyond a reasonable doubt.',
  },
  {
    question: 'What is the statute of limitations for civil cases in Ohio?',
    answer:
      'It depends on the type of case, under ORC Chapter 2305. Written contracts: 6 years. Oral contracts: 4 years (ORC 2305.06 and 2305.07, as amended June 2021). Property damage: 4 years. Personal injury: 2 years. Defamation: 1 year. Missing the deadline bars recovery, so talk to an attorney as soon as a dispute starts.',
  },
  {
    question: 'Do I need a civil attorney for my dispute?',
    answer:
      'You can represent yourself in a civil case. An attorney knows civil procedure, the rules of evidence and court requirements, handles the documents, deals with the other side, negotiates settlements and represents you in court if needed. Most civil attorneys work on hourly or contingency fee arrangements.',
  },
  {
    question: 'What is the difference between civil and criminal cases?',
    answer:
      'A civil case is a dispute between parties over money damages or another remedy. A criminal case is the state prosecuting someone for a crime. Civil cases are decided on a preponderance of the evidence; criminal cases need proof beyond a reasonable doubt. Civil cases end in money judgments, while criminal cases can end in fines, probation or incarceration.',
  },
  {
    question: 'How long does a civil case take?',
    answer:
      'It depends on how complex the case is, the court’s schedule and whether it goes to trial. Simple cases may resolve in months; complex ones may take years. Most cases settle before trial, but preparation and negotiation still take time. An attorney can give you a realistic timeline for your case.',
  },
  {
    question: 'What is the difference between a jury trial and a bench trial in Ohio civil cases?',
    answer:
      'In Ohio civil cases, a party has the right to a jury trial for legal claims (such as breach of contract or personal injury) involving amounts over $1,000, under Article I, Section 5 of the Ohio Constitution and Ohio Civil Rule 38. A jury of six or eight jurors decides the disputed facts and applies the law as the judge instructs. In a bench trial (also called a court trial) the judge alone decides both the facts and the law. Equitable claims, such as requests for specific performance, injunctions or other non-monetary relief, are generally tried to the bench, not a jury.',
  },
  {
    question: "How does Ohio's preponderance of evidence standard work in civil cases?",
    answer:
      'The party with the burden of proof, usually the plaintiff, must prove its claims by a preponderance of the evidence: it must be more likely than not (greater than 50%) that the claimed facts are true. That is a much lower bar than beyond a reasonable doubt in criminal cases. A single credible witness, a persuasive document or a modest weight of circumstantial evidence can tip the scales. Some claims, such as fraud, need clear and convincing evidence, which is higher than a preponderance but still lower than beyond a reasonable doubt.',
  },
  {
    question: 'What is a default judgment in Ohio and how can it be vacated?',
    answer:
      'Under Ohio Civil Rule 55, a default judgment may be entered against a defendant who fails to appear or respond to a properly served complaint within the time the rules allow. It has the same effect as any other judgment and can be enforced through wage garnishment, bank levies or liens on property. To vacate it, the defendant can file a motion under Ohio Civil Rule 60(B), which allows relief for mistake, excusable neglect, newly discovered evidence, fraud or any other reason justifying relief. The motion must be filed within a reasonable time and, for certain grounds, within 1 year of the judgment.',
  },
];

export default function CivilPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Civil disputes in Ohio"
        description="Contract, real estate, eviction, debt and employment disputes in Columbus, Cincinnati, Dayton and across Ohio. Some claims must be filed within 1 year."
      />

      <Section title="Find your matter" intro={<p>Each page covers the deadlines, the process and the options for that kind of dispute.</p>}>
        <LinkGrid links={civilServices.map((s) => ({ href: s.href, title: s.title, subtitle: s.description }))} />
        <p>
          Contract disputes and breaches can arise under ORC Chapter 1301. Evictions are handled for both landlords and tenants, and
          appeals cover civil cases decided in the trial courts.
        </p>
      </Section>

      <KeyFacts
        facts={[
          { figure: '6 years', label: 'to sue on a written contract' },
          { figure: '4 years', label: 'for an oral contract or property damage' },
          { figure: '2 years', label: 'for a personal injury claim' },
          { figure: '1 year', label: 'for defamation' },
        ]}
      />

      <Section
        title="What a civil case is"
        tone="ice"
        intro={
          <p>
            A civil case is a dispute between private parties over money damages or another remedy. The state is not prosecuting
            anyone.
          </p>
        }
      >
        <p>
          The firm takes civil clients in Columbus, Cincinnati, Dayton and throughout Ohio, under the Ohio Revised Code. Civil cases
          include contract disputes, real estate matters, landlord-tenant disputes, evictions, debt collection, employment disputes,
          defamation and other civil wrongs.
        </p>
        <p>
          Civil cases are decided on a preponderance of the evidence: more likely than not. That is a lower standard than the proof
          beyond a reasonable doubt that criminal cases require, so a civil case can be won without overwhelming evidence. It still
          has to be prepared and presented well.
        </p>
      </Section>

      <LocationsWeServe title="Civil" />

      <Section title="Filing deadlines and the rules that decide a case" tone="ice">
        <FactTable
          title="Statutes of limitations (ORC Chapter 2305)"
          rows={[
            { label: 'Written contracts', value: '6 years (ORC 2305.06, as amended June 2021).' },
            { label: 'Oral contracts', value: '4 years (ORC 2305.07, as amended June 2021).' },
            { label: 'Property damage', value: '4 years.' },
            { label: 'Personal injury', value: '2 years.' },
            { label: 'Defamation', value: '1 year.' },
          ]}
          note="Missing the deadline bars recovery. Talk to an attorney as soon as the dispute starts."
        />
        <FactTable
          title="Burden of proof and remedies"
          rows={[
            { label: 'Standard of proof', value: 'Preponderance of the evidence (more likely than not). Fraud and some other claims need clear and convincing evidence.' },
            { label: 'Money damages', value: 'Compensatory and punitive.' },
            { label: 'Injunctive relief', value: 'A court order requiring or prohibiting certain actions.' },
            { label: 'Specific performance', value: 'An order requiring a party to perform the contract.' },
            { label: 'Declaratory judgment', value: 'A ruling that determines the parties’ rights.' },
          ]}
          note="The right remedy depends on the type of case and the circumstances."
        />
      </Section>

      <Section title="How a civil lawsuit moves through an Ohio court">
        <Steps
          steps={[
            {
              title: 'Filing the complaint',
              body: 'The complaint states the claims and the relief sought. The defendant must be properly served and has a limited time to respond. Counterclaims and defenses come back in the answer.',
            },
            {
              title: 'Discovery',
              body: 'Both sides exchange evidence, take depositions, request documents and investigate. Improper discovery requests can be challenged.',
            },
            {
              title: 'Pretrial motions and settlement',
              body: 'Motions can resolve issues, dismiss claims or limit evidence. Most civil cases settle at this stage, through negotiation or mediation.',
            },
            {
              title: 'Trial and judgment',
              body: 'If the case does not settle, a judge or jury decides it. A judgment can then be enforced through collection methods such as wage garnishment, bank levies or property liens.',
            },
          ]}
        />
        <p>Preparing for trial from the start strengthens the position at the negotiating table, even though most cases settle.</p>
      </Section>

      <Section title="What the firm does on a civil case" tone="ice">
        <PointGrid
          points={[
            { title: 'Evaluates the case', body: 'Strengths and weaknesses, the legal claims available, and the potential recovery or exposure.' },
            { title: 'Sets the strategy', body: 'Whether the goal is recovering damages, defending against claims or resolving the dispute.' },
            { title: 'Drafts the filings', body: 'Complaints, answers, motions, discovery requests and other documents the case needs.' },
            { title: 'Runs discovery', body: 'Depositions, document requests and interrogatories to build the case and learn the other side’s.' },
            { title: 'Negotiates', body: 'Settlement talks, mediation or other alternative dispute resolution, and an honest read of each offer.' },
            { title: 'Tries the case and enforces the judgment', body: 'Trial representation, then wage garnishment, bank levies or property liens when collection is needed.' },
          ]}
        />
        <p>
          Statutes of limitations run and evidence goes stale, so it helps to act early. Contact the firm to schedule a consultation
          about a civil dispute in Columbus, Cincinnati, Dayton or anywhere in Ohio.
        </p>
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
