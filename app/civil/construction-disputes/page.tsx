import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Construction Disputes Lawyer in Ohio',
  description:
    "Ohio construction disputes: mechanics' liens filed within 75 days, payment bond claims, defective work and payment disputes. Call (614) 285-5482.",
  keywords: ['construction disputes lawyer Columbus OH', 'construction attorney Ohio', 'contractor disputes lawyer', 'Franklin County construction attorney'],
  openGraph: {
    title: 'Construction Disputes Lawyer in Ohio | Jwayyed Law LLC',
    description: "Mechanics' liens, bond claims, defects and payment disputes for owners, contractors and suppliers in Ohio.",
    url: 'https://www.jjlawohio.com/civil/construction-disputes',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/civil/construction-disputes' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Construction Disputes', href: '/civil/construction-disputes' },
];

const faqs = [
  {
    question: "What is a mechanics' lien in Ohio?",
    answer:
      "A mechanics' lien under Ohio Revised Code Chapter 1311 is a security interest on real property for contractors, subcontractors, laborers or material suppliers who have not been paid for work or materials on that property. It clouds the title, which makes the property hard or impossible to sell or refinance until the lien is resolved. Ohio's lien law applies to residential and commercial projects.",
  },
  {
    question: "How do you file a mechanics' lien in Ohio?",
    answer:
      "It takes strict compliance with ORC Chapter 1311. A general contractor must serve a Notice of Furnishing on the property owner under ORC 1311.06 before filing. Subcontractors and material suppliers must serve a Notice of Commencement under ORC 1311.04 and a Notice of Furnishing to preserve lien rights. The lien itself must be filed with the recorder of the county where the property is located within 75 days after the last day work was performed or materials were furnished (ORC 1311.09). After filing, the claimant must sue to enforce the lien within 6 years under ORC 1311.15.",
  },
  {
    question: "What is the deadline to file a mechanics' lien in Ohio?",
    answer:
      'Under ORC 1311.09, 75 days after the last day the claimant performed work or furnished materials on the project. The deadline is strictly enforced: missing it ends your lien rights entirely, and courts cannot extend it. If you suspect you will not be paid, talk to an attorney well before day 75. Once filed, the lien must be enforced by a lawsuit within 6 years under ORC 1311.15, or it expires.',
  },
  {
    question: 'What are my options if a contractor did defective work on my property?',
    answer:
      'Under Ohio common law and Ohio Construction Industry Licensing Board (OCILB) regulations, contractors must work in a workmanlike manner. If they do not, you may bring breach of contract claims and tort claims for property damage. Under ORC 4722.02, the Home Construction Service Suppliers Act requires contractors doing residential work to be registered and to provide written contracts for work over $25. A contractor who violates these rules may face additional liability. The statute of limitations for defect claims depends on whether the claim is in contract or tort, generally 4 to 10 years from completion.',
  },
  {
    question: 'How do payment disputes between contractors and owners get resolved?',
    answer:
      "Through negotiation, mediation, arbitration or litigation, depending on the contract and the dispute. Unpaid contractors may file mechanics' liens and sue for breach of contract. Owners who dispute charges may raise breach of contract, failure to perform in a workmanlike manner, change order disputes and delay claims. Many construction contracts require arbitration instead of court, so the first step is always reading the contract.",
  },
  {
    question: 'What is a payment bond claim on a public construction project in Ohio?',
    answer:
      "On Ohio public projects, general contractors must provide a payment bond under ORC 153.57. It protects unpaid subcontractors and material suppliers, who claim against the bond because a mechanics' lien cannot be filed against public property. To preserve bond rights, claimants typically must give timely notice and file the claim within 90 days after the last date of work or furnishing materials.",
  },
  {
    question: 'What is the statute of limitations for construction disputes in Ohio?',
    answer:
      'It depends on the claim. Breach of a written construction contract: 6 years under ORC 2305.06. Breach of an oral construction contract: 6 years under ORC 2305.07. Property damage from construction defects: generally 4 years from discovery under ORC 2305.09. Ohio also has a 10-year statute of repose for improvements to real property under ORC 2305.131: claims arising more than 10 years after substantial completion are generally barred no matter when the defect was found.',
  },
  {
    question: 'Do I need an attorney for a construction dispute in Ohio?',
    answer:
      "Construction disputes turn on contract interpretation, lien law, licensing rules and technical questions about workmanship. An attorney can review your contracts, make sure lien rights are preserved before deadlines pass, identify the strongest claims and defenses, and handle negotiation, mediation or litigation. Because the mechanics' lien deadline under ORC 1311.09 is strict, talk to an attorney before you lose your lien rights.",
  },
];

const RELATED = [
  { href: '/civil/breach-of-contract', title: 'Breach of contract', subtitle: 'Enforcing or defending contract obligations and recovering damages' },
  { href: '/civil/real-estate-disputes', title: 'Real estate disputes', subtitle: 'Title disputes, boundary issues, quiet title actions and property litigation' },
  { href: '/civil/debt-collection-defense', title: 'Debt collection defense', subtitle: 'Defending a collection lawsuit and unfair collection practices' },
  { href: '/civil/employment-disputes', title: 'Employment disputes', subtitle: 'Wrongful termination, discrimination and workplace retaliation claims' },
];

export default function ConstructionDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Construction disputes in Ohio"
        description="Unpaid work, defective work, delays and change orders. A mechanics' lien must be filed within 75 days of the last day of work, and courts cannot extend that deadline."
      />

      <KeyFacts
        facts={[
          { figure: '75 days', label: "to file a mechanics' lien after the last day of work (ORC 1311.09)" },
          { figure: '6 years', label: 'to sue to enforce a filed lien (ORC 1311.15)' },
          { figure: '90 days', label: 'to file a payment bond claim on a public project' },
          { figure: '10 years', label: 'statute of repose after substantial completion (ORC 2305.131)' },
        ]}
      />

      <Section
        title="What construction disputes involve"
        intro={
          <p>
            Owners, general contractors, subcontractors and material suppliers can all end up in a dispute that stalls a project, clouds
            a title and costs real money.
          </p>
        }
      >
        <p>
          The firm handles construction disputes in Columbus, Cincinnati, Dayton and throughout Ohio as part of its{' '}
          <Link href="/civil">civil litigation practice</Link>, including the mechanics&rsquo; lien process under ORC Chapter 1311.
        </p>
        <PointGrid
          points={[
            { title: 'Payment disputes', body: 'An owner refuses to pay for completed work, or a contractor disputes the owner’s right to withhold payment.' },
            { title: 'Defective workmanship', body: 'Work that fails applicable standards, damages the property or needs costly remediation.' },
            { title: 'Delay claims', body: 'A project runs over schedule and each side blames the other.' },
            { title: 'Change order disputes', body: 'The scope of work grows without written authorization and the parties disagree about who owes what.' },
            { title: 'Subcontractor and owner disputes', body: 'A subcontractor with no direct contract with the owner must rely on lien rights or bond claims to get paid.' },
          ]}
        />
      </Section>

      <Section title="Mechanics' liens under ORC Chapter 1311" tone="ice">
        <p>
          A properly filed lien attaches to the real property and clouds the title, so the owner cannot sell or refinance until it is
          released or resolved. Every notice and deadline must be met.
        </p>
        <FactTable
          title="Lien requirements"
          rows={[
            { label: 'Notice of Furnishing', value: 'A general contractor serves it on the owner before filing (ORC 1311.06). Subcontractors and suppliers serve one as well.' },
            { label: 'Notice of Commencement', value: 'Subcontractors and material suppliers serve it to preserve lien rights (ORC 1311.04).' },
            { label: 'Filing the lien', value: 'With the county recorder where the property is located, within 75 days of the last day of work or materials (ORC 1311.09).' },
            { label: 'Enforcing the lien', value: 'A lawsuit within 6 years (ORC 1311.15), or the lien expires.' },
          ]}
          note="Missing any requirement can mean losing lien rights completely."
        />
        <Callout title="Public projects use bonds">
          A mechanics&rsquo; lien cannot be filed against publicly owned property. Under ORC 153.57, the general contractor must provide a
          payment bond, and unpaid subcontractors and suppliers claim against it, typically within 90 days after the last date of work
          or materials, with timely notice.
        </Callout>
      </Section>

      <LocationsWeServe title="Civil" />

      <Section title="Licensing and filing deadlines" tone="ice">
        <p>
          Ohio regulates contractors through the Ohio Construction Industry Licensing Board (OCILB) and the Home Construction Service
          Suppliers Act (ORC 4722.02). Residential contractors doing work worth $25 or more must provide written contracts with
          specific disclosures and must be registered. A contractor who did not comply can give the homeowner more grounds for recovery.
        </p>
        <FactTable
          title="Statutes of limitations for construction claims"
          rows={[
            { label: 'Written contract', value: '6 years (ORC 2305.06).' },
            { label: 'Oral contract', value: '6 years (ORC 2305.07).' },
            { label: 'Property damage from defects', value: 'Generally 4 years from discovery (ORC 2305.09).' },
            { label: 'Defect claims overall', value: 'Generally 4 to 10 years from completion, depending on whether the claim is in contract or tort.' },
            { label: 'Statute of repose', value: '10 years after substantial completion of an improvement to real property (ORC 2305.131).' },
          ]}
          note="Missing these deadlines can permanently bar the claim."
        />
      </Section>

      <Section title="How a construction dispute is resolved">
        <Steps
          steps={[
            { title: 'Read the contract', body: 'The terms decide the claims, the defenses and whether an arbitration clause takes the dispute out of court.' },
            { title: 'Protect lien or bond rights', body: 'Serve the notices and file the lien or bond claim before the deadline.' },
            { title: 'Negotiate or mediate', body: 'Many payment and defect disputes resolve here.' },
            { title: 'Arbitrate or litigate', body: 'Enforce the lien, sue for breach, or defend against the claim.' },
          ]}
        />
        <p>
          If you are facing a construction dispute, <Link href="/contact">contact Jwayyed Law LLC</Link> to schedule a consultation.
        </p>
      </Section>

      <Section title="What the firm does on a construction dispute" tone="ice">
        <PointGrid
          points={[
            { title: 'Analyzes the contract', body: 'Identifies breaches and weighs the claims and defenses.' },
            { title: "Files mechanics' liens", body: 'Before the 75-day deadline under ORC 1311.09.' },
            { title: 'Enforces liens', body: 'Within the 6-year deadline under ORC 1311.15.' },
            { title: 'Files bond claims', body: 'On public projects under ORC 153.57.' },
            { title: 'Pursues defect claims', body: 'Damages for defective workmanship.' },
            { title: 'Mediates and arbitrates', body: 'Represents clients in alternative dispute resolution.' },
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
