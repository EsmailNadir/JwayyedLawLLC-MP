import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Business Litigation Lawyer Ohio | ORC 2307',
  description:
    'Ohio business litigation for plaintiffs and defendants: contract disputes, fraud, trade secrets, tortious interference and emergency TROs in Common Pleas Court.',
  keywords: ['business litigation lawyer Columbus OH', 'Ohio business dispute attorney', 'ORC 2307 attorney', 'contract dispute Ohio', 'business fraud lawyer Ohio', 'Franklin County business litigation', 'temporary restraining order Ohio'],
  openGraph: {
    title: 'Business Litigation Lawyer Ohio | ORC 2307 | Jwayyed Law LLC',
    description: 'Business disputes in Ohio courts, from the demand letter to trial and appeal.',
    url: 'https://www.jjlawohio.com/business/business-litigation',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/business/business-litigation' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Business Litigation', href: '/business/business-litigation' },
];

const faqs = [
  {
    question: 'What court handles business litigation in Ohio?',
    answer:
      "Mostly the Court of Common Pleas in the county where the defendant resides or the dispute arose. It is a court of general jurisdiction under ORC Chapter 2305, hearing civil cases over $15,000 (smaller cases go to Municipal Court or County Court). Franklin County Common Pleas Court, which serves Columbus, has one of the busiest commercial dockets in the state, and some counties have specialized business or commercial dockets. The Ohio Court of Claims hears suits against the State of Ohio. Federal courts (the Southern and Northern Districts of Ohio) hear business disputes involving federal law, or with complete diversity of citizenship and more than $75,000 in controversy.",
  },
  {
    question: 'What types of claims constitute business litigation in Ohio?',
    answer:
      'Breach of contract (governed in part by ORC 1302 for goods under the Ohio UCC); fraud and misrepresentation; breach of fiduciary duty by directors, officers, partners and LLC managers; unfair competition, including tortious interference, trade defamation (trade libel) and passing off; trade secret misappropriation under ORC 1333.61 through 1333.69; conversion of business property; and torts such as negligent misrepresentation and unjust enrichment. Partnership and shareholder disputes often combine several of these.',
  },
  {
    question: 'What is a temporary restraining order (TRO) and when is it used in Ohio business litigation?',
    answer:
      'A TRO is an emergency order under Ohio Rule of Civil Procedure 65 requiring a party to stop (or sometimes start) specific conduct right away, before the other side can fully respond. Businesses seek TROs to stop a former employee from using stolen trade secrets or violating a non-compete, keep a partner from moving or draining shared assets, halt a breach causing irreparable harm, and preserve the status quo until a full hearing. The moving party must show (1) a strong likelihood of success on the merits; (2) irreparable harm without the order; (3) that the balance of hardships favors it; and (4) that the public interest is not harmed. TROs typically last up to 14 days and are followed by a preliminary injunction hearing where the other side responds.',
  },
  {
    question: 'What damages can I recover in Ohio business litigation?',
    answer:
      'Compensatory damages make you whole: for breach of contract, usually expectation damages (the benefit of the bargain) or reliance damages (out-of-pocket losses). Consequential damages such as lost profits are recoverable if they were foreseeable when the contract was made, under the Hadley v. Baxendale rule Ohio courts follow. For fraud and intentional torts, ORC 2315.21 allows punitive damages on a showing of actual malice, capped at the greater of two times compensatory damages or $350,000. Under the "American Rule," attorney fees are generally not recoverable unless a contract, statute or recognized exception provides for them. Courts can also order injunctions, specific performance and an accounting when money is not enough.',
  },
  {
    question: 'What does the Ohio business litigation process look like from start to finish?',
    answer:
      'It follows the Ohio Rules of Civil Procedure. First, pre-litigation evaluation: assessing claims, sending demand letters and trying to resolve the dispute. If a lawsuit is needed, the plaintiff files a Complaint in the right Common Pleas Court. The defendant is served under Ohio Civ.R. 4 and has 28 days to answer. Discovery under Civ.R. 26 through 37 follows: interrogatories, document requests, requests for admission and depositions, often heavy on financial records, emails, contracts and accounting data. Then dispositive motions, especially summary judgment under Civ.R. 56. Most cases settle before trial. Otherwise the case goes to a jury or bench trial and possibly to the Ohio Court of Appeals and the Ohio Supreme Court. Simple cases can resolve in under a year; complex disputes regularly take 2 to 4 years.',
  },
  {
    question: 'What is tortious interference with a business relationship in Ohio?',
    answer:
      "It is a business tort under Ohio common law that makes a third party liable for wrongfully disrupting an existing or prospective business relationship. Interference with a contract means inducing a party to breach an existing contract. Interference with a prospective relationship means disrupting an expected deal that is not yet formalized. The interference must be improper: competition, even aggressive competition, is not tortious. Courts weigh the defendant's conduct, the interests it was pursuing, the social interest in protecting the plaintiff's relationship, and how directly the conduct caused the harm. These claims are often brought with breach of contract and trade secret claims against former employees and competitors.",
  },
  {
    question: 'Should I try to resolve my business dispute before filing a lawsuit?',
    answer:
      'Usually, yes. An attorney\'s demand letter defines the claim, shows you are serious and gives the other side a chance to resolve it without litigation. Mediation, a structured negotiation led by a neutral third party, resolves many business disputes and is confidential, unlike court. Arbitration, when a contract requires it, is often faster and cheaper than court, with narrower discovery and appeal rights. But if assets are being drained, confidential information is being misused or a former employee is violating a non-compete, waiting can cause irreparable harm, and immediate injunctive relief may be the right move.',
  },
  {
    question: 'How much does Ohio business litigation cost and how are attorneys typically paid?',
    answer:
      'It depends on complexity, the amount in dispute, the number of parties, the scope of discovery and whether there is a trial. A simple contract dispute may cost a few thousand dollars in attorney fees; complex multi-party litigation with heavy discovery and experts can cost hundreds of thousands. Fee arrangements are usually hourly (billed monthly), contingency (a percentage of the recovery, typically in fraud or tort cases with clear liability) or flat fee (for defined tasks such as a demand letter or contract review). When the amount at stake is small, an attorney can offer limited-scope representation, or help you decide whether Ohio Small Claims Court (claims up to $6,000) or Municipal Court is the better route.',
  },
];

const RELATED = [
  { href: '/business/contract-drafting-review', title: 'Contract drafting and review', subtitle: 'Business contracts, NDAs and vendor agreements' },
  { href: '/business/shareholder-disputes', title: 'Shareholder disputes', subtitle: 'Minority shareholder rights and corporate disputes' },
  { href: '/business/partnership-disputes', title: 'Partnership disputes', subtitle: 'Partnership dissolution and fiduciary duty claims' },
  { href: '/business/non-compete-agreements', title: 'Non-compete agreements', subtitle: 'Enforcing and defending restrictive covenants' },
  { href: '/civil/breach-of-contract', title: 'Breach of contract', subtitle: 'Elements, deadlines and remedies for Ohio contract claims' },
];

export default function BusinessLitigationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business litigation in Ohio"
        description="Contract disputes, fraud, trade secrets and unfair competition, for plaintiffs and defendants. A served defendant has 28 days to answer, and a TRO can stop harmful conduct within days."
      />

      <KeyFacts
        facts={[
          { figure: '28 days', label: 'for a served defendant to answer the Complaint' },
          { figure: '14 days', label: 'typical maximum length of a TRO before a preliminary injunction hearing' },
          { figure: '$15,000', label: 'amount above which civil cases go to Common Pleas Court' },
          { figure: '2 to 4 years', label: 'for a complex business dispute to resolve, regularly' },
        ]}
      />

      <Section
        title="When a business dispute goes to court"
        intro={
          <p>
            Contracts get breached, partners disagree and competitors cross the line. When a dispute cannot be resolved informally, it
            usually goes to the Court of Common Pleas.
          </p>
        }
      >
        <p>
          Ohio&rsquo;s civil litigation framework, under the Ohio Rules of Civil Procedure and statutes including ORC Chapter 2307,
          lets a business compel documents, take depositions, seek emergency injunctions and get a judgment enforceable against the
          other side&rsquo;s assets. The firm represents plaintiffs and defendants in Franklin County and throughout Ohio as part of
          its <Link href="/business">Ohio business law services</Link>.
        </p>
        <FactTable
          title="Where business cases are heard"
          rows={[
            { label: 'Court of Common Pleas', value: 'General jurisdiction under ORC Chapter 2305, for civil cases over $15,000, in the county where the defendant resides or the dispute arose. Some counties have business or commercial dockets.' },
            { label: 'Municipal or County Court', value: 'Cases under $15,000.' },
            { label: 'Small Claims Court', value: 'Claims up to $6,000.' },
            { label: 'Ohio Court of Claims', value: 'Suits against the State of Ohio.' },
            { label: 'Federal court', value: 'Southern and Northern Districts of Ohio: federal claims, or complete diversity with more than $75,000 in controversy.' },
          ]}
        />
      </Section>

      <Section title="Claims the firm handles" tone="ice">
        <PointGrid
          points={[
            { title: 'Breach of contract', body: 'Purchase agreements, service, construction and licensing contracts. The Ohio UCC (ORC Chapter 1302) governs the sale of goods.' },
            { title: 'Fraud and misrepresentation', body: 'Being induced into a deal by intentional or negligent false statements. Common-law and statutory claims may both apply.' },
            { title: 'Breach of fiduciary duty', body: 'Against directors, LLC managers, partners and officers who breached duties of loyalty and care. Often paired with accounting and disgorgement claims.' },
            { title: 'Trade secret misappropriation', body: 'Under the Ohio Uniform Trade Secrets Act (ORC 1333.61 through 1333.69).' },
            { title: 'Tortious interference', body: 'Third parties who induced a breach or disrupted a prospective relationship by improper means. Ordinary competition does not count.' },
            { title: 'Unfair competition', body: 'Deceptive trade practices, false advertising and passing off, under Ohio common law and the Ohio Deceptive Trade Practices Act, ORC 4165.' },
            { title: 'Restrictive covenants', body: 'TROs and injunctions to stop former employees or business sellers from violating non-compete and non-solicitation terms.' },
            {
              title: 'Owner disputes',
              body: (
                <>
                  Closely held ownership conflicts. See <Link href="/business/partnership-disputes">partnership disputes</Link> and{' '}
                  <Link href="/business/shareholder-disputes">shareholder disputes</Link>.
                </>
              ),
            },
          ]}
        />
      </Section>

      <LocationsWeServe title="Business Law" />

      <Section title="Before filing, and when you cannot wait" tone="ice">
        <p>
          Many disputes, including contract claims, payment disputes and some fraud allegations, settle after a demand letter or a short
          attorney-to-attorney negotiation. The letter documents the claim and creates a formal record. Mediation is confidential and can
          produce solutions a court cannot order. If the contract requires mediation or arbitration, that comes before, or instead of,
          a court filing.
        </p>
        <Callout title="Emergency relief under Civ.R. 65">
          A TRO can be obtained within days to stop misuse of trade secrets, a non-compete violation, the draining of disputed assets or
          interference with a business relationship. You must show a likelihood of success, irreparable harm without the order, and a
          balance of hardships in your favor. The firm can move quickly when the situation calls for it.
        </Callout>
      </Section>

      <Section title="How a business case moves through an Ohio court">
        <p>
          A straightforward commercial case in Franklin County Common Pleas Court might resolve in 9 to 18 months. A complex case with
          heavy discovery, several parties and experts can take 3 years or more.
        </p>
        <Steps
          steps={[
            { title: 'Pre-litigation (weeks to months)', body: 'Demand letters, investigation, evidence preservation, and negotiation or mediation.' },
            { title: 'Pleadings (1 to 3 months)', body: 'The Complaint, service under Civ.R. 4, the Answer (due within 28 days), counterclaims and third-party claims.' },
            {
              title: 'Discovery (6 to 18 months or more in complex cases)',
              body: 'Interrogatories, document requests and requests for admission under Civ.R. 26 to 36, then depositions of witnesses and experts. Often large document productions and forensic review of financial records.',
            },
            { title: 'Motions', body: 'Dispositive motions, especially summary judgment under Civ.R. 56, which can end the case or narrow it when no material fact is genuinely disputed.' },
            { title: 'Trial', body: 'Jury or bench, under the Ohio Rules of Evidence. Most cases settle first, often during or after discovery.' },
            { title: 'Appeal', body: 'To the Ohio Court of Appeals (First, Second, Fifth, Tenth or another district, by county), and possibly the Ohio Supreme Court on questions of public or great general interest.' },
          ]}
        />
      </Section>

      <Section title="What a successful claim can recover" tone="ice">
        <FactTable
          title="Remedies in Ohio business litigation"
          rows={[
            { label: 'Expectation damages', value: 'What you would have had if the contract had been performed, plus foreseeable consequential damages such as lost profits, subject to the duty to mitigate.' },
            { label: 'Punitive damages', value: 'For fraud and intentional torts with actual malice (ORC 2315.21), capped at the greater of two times compensatory damages or $350,000.' },
            { label: 'Trade secrets', value: 'Actual damages and the defendant’s unjust enrichment (ORC 1333.61), plus attorney fees for willful misappropriation.' },
            { label: 'Equitable relief', value: 'Injunctions, specific performance and an accounting of profits obtained through wrongful conduct.' },
            { label: 'Attorney fees', value: 'Generally not recoverable unless a contract, statute or recognized exception provides for them.' },
          ]}
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>.
        </p>
      </Section>

      <Section title="Related business matters">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
