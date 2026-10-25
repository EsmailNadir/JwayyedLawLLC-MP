import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Breach of Contract Lawyer in Ohio',
  description:
    'Breach of contract claims in Ohio: 6 years to sue on a written contract, 4 on an oral one, and the damages you can recover. Call (614) 285-5482.',
  keywords: ['breach of contract lawyer Columbus OH', 'contract dispute attorney Ohio', 'contract lawyer', 'contract attorney Ohio', 'Ohio contract law', 'Franklin County contract attorney'],
  openGraph: {
    title: 'Breach of Contract Lawyer in Ohio | Jwayyed Law LLC',
    description: 'The elements, deadlines and remedies for a breach of contract claim in Ohio.',
    url: 'https://www.jjlawohio.com/civil/breach-of-contract',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/civil/breach-of-contract' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Breach of Contract', href: '/civil/breach-of-contract' },
];

const faqs = [
  {
    question: 'What constitutes breach of contract in Ohio?',
    answer:
      'A breach happens when one party fails to perform its obligations under a contract without legal justification. That can mean failing to perform, performing defectively, performing late or refusing to perform. To prove it, you must show a valid contract existed, the other party breached it, and you suffered damages as a result.',
  },
  {
    question: 'What are the remedies for breach of contract in Ohio?',
    answer:
      'Remedies can include money damages (compensatory damages for your losses, consequential damages for foreseeable losses, and liquidated damages if the contract specifies them), specific performance (a court order requiring performance), rescission (cancelling the contract) and restitution (returning payments or benefits). Which ones apply depends on the type of contract, how serious the breach was and the circumstances.',
  },
  {
    question: 'What is the statute of limitations for breach of contract in Ohio?',
    answer:
      'Under Ohio Revised Code 2305.06 and 2305.07 (current as of 2026), you have 6 years to sue on a written contract and 4 years on an oral contract. Missing the deadline bars recovery, so talk to an attorney soon after the breach.',
  },
  {
    question: 'Do I need a breach of contract attorney?',
    answer:
      'You can handle a claim yourself. An attorney can analyze the contract, identify the breach, calculate damages, negotiate a settlement and represent you in court if it comes to that. Most attorneys work on hourly or contingency fee arrangements.',
  },
  {
    question: 'Can I recover attorney fees for breach of contract?',
    answer:
      'Generally not, unless the contract provides for them, a statute authorizes them, or they are awarded as part of punitive damages for egregious conduct. Many contracts include a clause requiring the losing party to pay attorney fees. An attorney can check whether yours does.',
  },
  {
    question: 'What are the elements of a breach of contract claim in Ohio?',
    answer:
      'A plaintiff must prove four elements by a preponderance of the evidence: (1) a valid, enforceable contract between the parties; (2) the plaintiff performed its obligations, or had a valid excuse for not performing; (3) the defendant breached, by failing to perform a contractual duty; and (4) the plaintiff suffered damages as a direct and proximate result of the breach. Without all four, the claim fails.',
  },
  {
    question: 'How long do I have to sue for breach of a written or oral contract in Ohio?',
    answer:
      'Under Ohio Revised Code 2305.06, you have 6 years from the date of the breach to sue on a written contract. Under ORC 2305.07, as amended in June 2021, the limit for an oral contract was reduced to 4 years. Missing these deadlines generally bars recovery entirely, however strong the claim.',
  },
  {
    question: 'What damages are available for breach of contract in Ohio?',
    answer:
      'Compensatory (expectation) damages are the most common: they put you where you would have been had the contract been performed. Consequential damages cover losses that were foreseeable when the contract was made. A court may order specific performance when money is not enough, as with unique goods or real property. Rescission and restitution may be available when the contract is voided for a material breach or fraud. Punitive damages are rare in contract cases and need egregious conduct beyond the breach itself.',
  },
];

const RELATED = [
  { href: '/civil/construction-disputes', title: 'Construction disputes', subtitle: 'Mechanics’ liens, defective workmanship and payment disputes on construction projects' },
  { href: '/civil/employment-disputes', title: 'Employment disputes', subtitle: 'Wrongful termination, discrimination and workplace retaliation claims' },
  { href: '/civil/real-estate-disputes', title: 'Real estate disputes', subtitle: 'Title disputes, boundary issues, quiet title actions and property litigation' },
  { href: '/civil/debt-collection-defense', title: 'Debt collection defense', subtitle: 'Defending a collection lawsuit and unfair collection practices' },
];

export default function BreachOfContractPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Breach of contract claims in Ohio"
        description="You have 6 years to sue on a written contract in Ohio and 4 years on an oral one. After that, the claim is barred however strong it is."
      />

      <KeyFacts
        facts={[
          { figure: '6 years', label: 'to sue on a written contract (ORC 2305.06)' },
          { figure: '4 years', label: 'to sue on an oral contract (ORC 2305.07, amended June 2021)' },
          { figure: '4 elements', label: 'you must prove: contract, your performance, breach, damages' },
        ]}
      />

      <Section
        title="What counts as a breach of contract under Ohio law"
        intro={
          <p>
            A breach happens when a party fails to perform what the contract requires, without legal justification. It can mean not
            performing at all, performing defectively, performing late or refusing to perform.
          </p>
        }
      >
        <p>
          The firm handles breach of contract claims in Columbus, Cincinnati, Dayton and throughout Ohio as part of its{' '}
          <Link href="/civil">civil litigation practice</Link>. Claims are governed by Ohio Revised Code 2305.06 and 2305.07 for timing.
        </p>
        <PointGrid
          points={[
            { title: 'A valid contract', body: 'An enforceable agreement between the parties.' },
            { title: 'Your performance', body: 'You did what the contract required, or had a valid excuse for not doing it.' },
            { title: 'The breach', body: 'The other party failed to perform a contractual duty.' },
            { title: 'Damages', body: 'You lost money as a direct and proximate result of the breach.' },
          ]}
        />
      </Section>

      <Section title="Filing deadlines" tone="ice">
        <FactTable
          title="Statute of limitations for contract claims"
          rows={[
            { label: 'Written contract', value: '6 years from the breach (ORC 2305.06).' },
            { label: 'Oral contract', value: '4 years (ORC 2305.07, reduced in June 2021).' },
          ]}
          note="Current as of 2026. Missing the deadline bars recovery entirely."
        />
        <p>
          Acting early also preserves the documents and the evidence of damages. To discuss a contract dispute,{' '}
          <Link href="/contact">contact the firm</Link>.
        </p>
      </Section>

      <LocationsWeServe title="Civil" />

      <Section title="What you can recover" tone="ice">
        <FactTable
          title="Money damages"
          rows={[
            { label: 'Compensatory', value: 'Direct losses from the breach: the cost to complete performance, lost profits and expenses incurred.' },
            { label: 'Consequential', value: 'Foreseeable losses that follow from the breach, such as lost opportunities and business losses.' },
            { label: 'Liquidated', value: 'Damages the contract sets in advance. Enforceable if reasonable and not punitive.' },
            { label: 'Punitive', value: 'Rare. Available only for egregious conduct or fraud.' },
          ]}
        />
        <FactTable
          title="Equitable remedies"
          rows={[
            { label: 'Specific performance', value: 'A court order to perform the contract, when money damages are inadequate.' },
            { label: 'Rescission', value: 'Cancelling the contract and returning the parties to where they were. Available for a material breach or fraud.' },
            { label: 'Restitution', value: 'Return of payments or benefits received under a rescinded contract.' },
          ]}
        />
        <Callout title="Attorney fees">
          In Ohio you generally cannot recover attorney fees for a breach unless the contract provides for them, a statute authorizes
          them, or they come with punitive damages for egregious conduct. Many contracts include a clause making the losing party pay.
        </Callout>
      </Section>

      <Section title="The breach of contract claims process">
        <Steps
          steps={[
            {
              title: 'Contract analysis',
              body: 'Reviewing the contract to confirm it is valid and enforceable, identify the breach, calculate direct and consequential damages, and see which remedies apply.',
            },
            {
              title: 'Demand and negotiation',
              body: 'A demand letter sets out the breach and the damages and usually opens settlement talks. Most contract disputes settle at this stage.',
            },
            {
              title: 'Litigation',
              body: 'If talks fail: a complaint, discovery, depositions, expert testimony and possibly trial. Most cases still settle before trial.',
            },
            {
              title: 'Enforcement',
              body: 'A judgment can be collected through wage garnishment, bank levies or property liens.',
            },
          ]}
        />
      </Section>

      <Section title="How a contract attorney handles your dispute" tone="ice">
        <PointGrid
          points={[
            { title: 'Analyzes the contract', body: 'Validity, enforceability, the terms and obligations, the breach and any defenses the other side may raise.' },
            { title: 'Calculates damages', body: 'Direct, consequential and liquidated damages, plus lost profits or opportunities.' },
            { title: 'Sends the demand', body: 'A demand letter that sets out the breach and the damages and opens negotiation.' },
            { title: 'Negotiates', body: 'Settlement talks, mediation or other alternative dispute resolution, with a clear read of each offer.' },
            { title: 'Litigates', body: 'Files suit when needed, runs discovery, takes depositions and represents you in court.' },
            { title: 'Enforces the judgment', body: 'Wage garnishment, bank levies or property liens when collection is needed.' },
          ]}
        />
      </Section>

      <Section title="Related civil matters">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
