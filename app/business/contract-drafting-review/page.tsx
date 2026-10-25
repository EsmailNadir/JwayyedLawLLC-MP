import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Contract Drafting & Review Lawyer in Ohio',
  description:
    'Business contract drafting and review in Ohio: the clauses every agreement needs, the UCC rules for goods, and what to check before you sign.',
  keywords: ['contract drafting lawyer Columbus OH', 'contract review attorney Ohio', 'business contract lawyer', 'Franklin County contract attorney', 'contract drafting and review lawyer Ohio', 'Ohio contract law attorney', 'Ohio business attorney'],
  openGraph: {
    title: 'Contract Drafting & Review Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Drafting, reviewing and negotiating business contracts under Ohio law.',
    url: 'https://www.jjlawohio.com/business/contract-drafting-review',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/business/contract-drafting-review' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Contract Drafting & Review', href: '/business/contract-drafting-review' },
];

const faqs = [
  {
    question: 'Why should I have a contract reviewed by an attorney before signing?',
    answer:
      'A review finds unfavorable terms, hidden liabilities, ambiguous language and provisions that shift risk to you, before you are bound by them. An attorney knows how courts read contract language, can spot terms that are hard to enforce or have unexpected consequences under Ohio law, and can negotiate changes. One-sided or poorly drafted contracts regularly lead to disputes that cost far more than the review would have.',
  },
  {
    question: 'What is the statute of limitations for contract disputes in Ohio?',
    answer:
      'Under ORC 2305.06, you have 6 years from the date the claim accrues (usually the date of breach) to sue on a written contract. For oral contracts, ORC 2305.07 also provides a 6-year period for most actions, though some claims have different periods. For the sale of goods under Ohio UCC Article 2 (ORC Chapter 1302), the limit is 4 years under ORC 1302.98. Missing a deadline can permanently bar the claim.',
  },
  {
    question: 'What makes a contract enforceable in Ohio?',
    answer:
      "Under Ohio common law, four elements: (1) offer, a proposal of definite terms; (2) acceptance of those terms without material change; (3) consideration, something of value from each side (money, a promise to perform, or not doing something); and (4) mutual assent on the essential terms. Both parties must also have legal capacity (age of majority and mental competence), and the contract's purpose must be legal. Contracts for the sale of goods over $500 generally must be in writing under Ohio UCC Article 2 (ORC 1302.04, the statute of frauds). So must certain others, such as real estate contracts and contracts that cannot be performed within 1 year.",
  },
  {
    question: 'What are common mistakes in DIY or template contracts?',
    answer:
      "Generic language that does not fit the transaction or Ohio law; missing terms such as a payment schedule, termination rights or a dispute resolution clause; no force majeure clause for when a party cannot perform; no intellectual property ownership terms in service or development agreements; no limitation of liability cap; overly broad or unenforceable non-compete language; and no governing law clause. Templates are also often out of date with current Ohio case law and statutes.",
  },
  {
    question: 'What is an indemnification clause and why does it matter?',
    answer:
      "In an indemnification clause, one party agrees to defend and hold the other harmless against certain claims, losses or liabilities arising from the contract or the indemnifying party's actions. It can shift substantial financial risk. A broad clause might make you pay the other side's legal fees and damages even for claims only loosely connected to your work. Ohio courts generally enforce these clauses, but the language must be clear: ambiguous indemnity provisions are construed against the party seeking indemnification.",
  },
  {
    question: 'How do non-compete clauses work in Ohio contracts?',
    answer:
      'A non-compete (restrictive covenant) bars a party, usually an employee or a business seller, from competing within a defined area for a defined period after the contract ends. Ohio courts enforce them if they are reasonable in scope, geography and duration and protect a legitimate business interest such as trade secrets, customer relationships or specialized training. Overly broad restrictions are not enforced. Under Ohio\'s "blue pencil" doctrine, a court may narrow an unreasonable non-compete instead of voiding it. The firm\'s non-compete agreements page covers enforceability in more detail.',
  },
  {
    question: 'What is an integration or merger clause?',
    answer:
      "It states that the written contract is the complete and final agreement and supersedes all earlier or contemporaneous discussions, representations and agreements. It invokes Ohio's parol evidence rule: courts generally will not admit evidence of earlier oral or written discussions to add to, change or contradict a fully integrated written contract. Verbal promises that are not in the contract may be unenforceable. Read the whole contract, boilerplate included, before signing.",
  },
  {
    question: 'What happens when a contract contains a dispute resolution clause?',
    answer:
      "Common provisions include mandatory mediation before litigation, binding arbitration (often with no jury trial), a venue clause naming a specific county or state court, and a choice of law clause. Under ORC 2711.01, arbitration clauses in Ohio contracts are generally valid and enforceable. If the contract requires arbitration, a lawsuit filed in court may be stayed and sent to arbitration. These clauses can change your rights and remedies, so understand them before you sign. The firm's dispute resolution page covers the options.",
  },
];

const RELATED = [
  { href: '/business/business-formation', title: 'Business formation', subtitle: 'The foundational documents a new Ohio business needs' },
  { href: '/business/employment-agreements', title: 'Employment agreements', subtitle: 'Employment contracts under Ohio at-will law' },
  { href: '/business/non-compete-agreements', title: 'Non-compete agreements', subtitle: 'Enforcing or challenging restrictive covenants in Ohio' },
  { href: '/business/business-litigation', title: 'Business litigation', subtitle: 'Pursuing or defending a contract dispute in Ohio courts' },
  { href: '/other-services/dispute-resolution', title: 'Dispute resolution in Ohio', subtitle: 'Mediation, arbitration and other options' },
];

export default function ContractDraftingReviewPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Contract drafting and review in Ohio"
        description="A business contract sets who owes what, who carries the risk and how disputes get resolved. In Ohio, a written contract claim can be brought for 6 years, and a sale of goods for $500 or more must be in writing."
      />

      <Section
        title="Goods, services and the law that governs them"
        intro={
          <p>
            Ohio treats contracts for the sale of goods and contracts for services differently, and the difference changes the default
            rules on warranties, remedies and modifications.
          </p>
        }
      >
        <p>
          Contract drafting and review is a core part of the firm&rsquo;s <Link href="/business">Ohio business law services</Link>, for
          businesses and individuals in Columbus, Cincinnati, Dayton and throughout Ohio: service agreements, vendor contracts,
          commercial leases, operating agreements and more.
        </p>
        <FactTable
          title="Which rules apply"
          rows={[
            { label: 'Sale of goods', value: 'Ohio Revised Code Chapter 1302, Ohio’s version of UCC Article 2.' },
            { label: 'Statute of frauds', value: 'ORC 1302.04: a sale of goods for $500 or more must be in writing to be enforceable.' },
            { label: 'Goods: time to sue', value: '4 years for breach of a sales contract (ORC 1302.98).' },
            { label: 'Services', value: 'Ohio common law (construction, consulting and employment agreements, for example).' },
            { label: 'Written contract: time to sue', value: '6 years (ORC 2305.06).' },
            { label: 'Oral contract: time to sue', value: '6 years for most actions (ORC 2305.07).' },
          ]}
        />
      </Section>

      <Section title="What makes a contract enforceable under Ohio contract law" tone="ice">
        <PointGrid
          points={[
            { title: 'Offer', body: 'One party proposes definite terms.' },
            { title: 'Acceptance', body: 'The other agrees without material change.' },
            { title: 'Consideration', body: 'Each side gives something of value: money, a promise to perform, or forbearance.' },
            { title: 'Mutual assent', body: 'Agreement on the essential terms, by parties with legal capacity, for a legal purpose.' },
          ]}
        />
        <p>
          Real estate contracts and contracts that cannot be performed within 1 year must also be in writing.
        </p>
      </Section>

      <LocationsWeServe title="Business Law" />

      <Section title="Clauses most business contracts need" tone="ice">
        <PointGrid
          points={[
            { title: 'Term and scope', body: 'What work is being done and for how long.' },
            { title: 'Payment', body: 'Amount, schedule and remedies for non-payment.' },
            { title: 'Intellectual property', body: 'Who owns work product created under the agreement.' },
            { title: 'Confidentiality', body: 'What each side must keep private.' },
            { title: 'Termination', body: 'Rights to end the contract, for cause and without cause.' },
            { title: 'Limitation of liability', body: 'A cap on each party’s maximum financial exposure.' },
            { title: 'Indemnification', body: 'Who answers for third-party claims. Ambiguous indemnity language is construed against the party seeking indemnification.' },
            { title: 'Dispute resolution and governing law', body: 'Mediation, arbitration or a litigation venue, and which state’s law applies. Arbitration clauses are generally enforceable under ORC 2711.01.' },
            { title: 'Integration', body: 'States that the written contract is the complete agreement.' },
            { title: 'Force majeure', body: 'Excuses performance after unforeseeable events beyond a party’s control. It drew new attention after the COVID-19 pandemic and belongs in any long-term contract.' },
          ]}
        />
        <Callout title="Get every promise in writing">
          With an integration clause in place, Ohio&rsquo;s parol evidence rule generally keeps out earlier oral discussions. A vendor&rsquo;s
          verbal promise that is not in the signed contract may not be enforceable.
        </Callout>
      </Section>

      <Section title="How a contract review works">
        <Steps
          steps={[
            { title: 'Understand the deal', body: 'Your business, your goals and the risks this contract carries.' },
            { title: 'Review or draft', body: 'Flag unusual, one-sided or missing provisions, or draft terms fitted to the transaction.' },
            { title: 'Negotiate', body: 'Push back on one-sided terms and propose language that protects you.' },
            { title: 'Sign and revisit', body: 'Update the contract as Ohio law, your circumstances or past disputes call for.' },
          ]}
        />
        <p>
          Contracts the firm commonly drafts or reviews include service agreements, vendor and supplier contracts, commercial leases,{' '}
          <Link href="/business/employment-agreements">employment agreements</Link>, independent contractor agreements, NDAs,{' '}
          <Link href="/business/non-compete-agreements">non-compete agreements</Link>, LLC operating agreements, buy-sell agreements and
          letters of intent for acquisitions. If a dispute has already started, see{' '}
          <Link href="/business/business-litigation">business litigation</Link>. If you are starting out, see{' '}
          <Link href="/business/business-formation">business formation</Link>.
        </p>
      </Section>

      <Section title="What a contract attorney does on your agreement" tone="ice">
        <PointGrid
          points={[
            { title: 'Drafts', body: 'Contracts fitted to your transaction and industry, not generic templates.' },
            { title: 'Reviews', body: 'Unfavorable terms, ambiguous language, hidden liabilities and missing provisions, before you sign.' },
            { title: 'Negotiates', body: 'Changes to one-sided provisions.' },
            { title: 'Assesses risk', body: 'Limitation of liability, indemnification and insurance terms, and your maximum exposure.' },
            { title: 'Checks restrictive covenants', body: 'Whether non-compete and NDA terms are enforceable under Ohio law.' },
            { title: 'Updates old contracts', body: 'For current Ohio law, changed circumstances or lessons from past disputes.' },
          ]}
        />
        <p>
          <Link href="/contact">Contact Jwayyed Law LLC</Link> at (614) 285-5482 to schedule a consultation about a contract.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
