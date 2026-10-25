import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Real Estate Disputes Lawyer in Ohio',
  description:
    'Boundary, title, easement and purchase agreement disputes in Ohio, including quiet title, partition and adverse possession. Call (614) 285-5482.',
  keywords: ['real estate disputes lawyer Columbus OH', 'real estate attorney Ohio', 'property disputes lawyer', 'Franklin County real estate attorney'],
  openGraph: {
    title: 'Real Estate Disputes Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Title, boundary, easement and purchase agreement disputes in Ohio, and the deadlines that apply.',
    url: 'https://www.jjlawohio.com/civil/real-estate-disputes',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/civil/real-estate-disputes' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Real Estate Disputes', href: '/civil/real-estate-disputes' },
];

const faqs = [
  {
    question: 'What types of real estate disputes can arise in Ohio?',
    answer:
      'They include boundary disputes, easement disputes, title disputes, purchase agreement disputes, seller disclosure disputes, inspection disputes, closing disputes, construction disputes, property damage disputes, quiet title actions, adverse possession claims and landlord-tenant disputes.',
  },
  {
    question: 'What is a quiet title action in Ohio?',
    answer:
      'A quiet title action under Ohio Revised Code 5303.01 is a court proceeding that resolves a title dispute and establishes clear ownership. It may be needed when there are competing claims to the property, title defects, liens or other clouds on title.',
  },
  {
    question: 'What is the statute of limitations for real estate disputes?',
    answer:
      'It depends on the claim. Breach of contract: 6 years for a written contract, 4 years for an oral contract (ORC 2305.06 and 2305.07, as amended June 2021). Property damage: 4 years. Fraud: 4 years from discovery. Missing a deadline bars recovery, so talk to an attorney early.',
  },
  {
    question: 'Do I need a real estate disputes attorney?',
    answer:
      'An attorney can analyze title issues, resolve boundary disputes, handle quiet title actions, negotiate settlements and represent you in court if needed. Most attorneys work on hourly fee arrangements and offer consultations.',
  },
  {
    question: 'Can real estate disputes be resolved without litigation?',
    answer:
      'Yes. Many are resolved through negotiation, mediation or arbitration, which can save time and money. Some, such as quiet title actions and other title issues, need litigation. An attorney can help you decide which route fits.',
  },
  {
    question: 'What types of real estate disputes are handled in Ohio courts?',
    answer:
      'Ohio courts hear title disputes (competing claims to ownership), boundary disputes between neighbors, easement issues over rights of access or use, partition actions under ORC Chapter 5307 when co-owners cannot agree on the use or sale of property, adverse possession claims under ORC 2305.04, seller disclosure violations under ORC 5302.30, purchase agreement breaches, construction defect claims and landlord-tenant disputes. Each has its own legal standards and procedures, and many resolve through negotiation or alternative dispute resolution before trial.',
  },
  {
    question: 'What is adverse possession in Ohio and how long does it take?',
    answer:
      "Under Ohio Revised Code 2305.04, a person can acquire title to another's property by occupying it openly, notoriously, continuously, exclusively and hostilely (without the true owner's permission) for 21 years. All five elements must be present for the whole period. Ohio courts strictly enforce the 21-year requirement, and any permissive use, abandonment of possession or interruption by the true owner restarts the clock. A successful claim still needs a quiet title action in the Court of Common Pleas to establish legal ownership.",
  },
  {
    question: 'What is a partition action in Ohio and when is it used?',
    answer:
      "A partition action under ORC Chapter 5307 is used when two or more co-owners of real property, such as tenants in common or joint tenants, cannot agree on what to do with it. Any co-owner may file a complaint in the Court of Common Pleas. The court may divide the property physically if that is practicable. If not, it may order a sheriff's sale and divide the proceeds by ownership interest. Partition actions are common in estates, property disputes connected to a divorce, and disagreements between co-investors.",
  },
];

const RELATED = [
  { href: '/civil/construction-disputes', title: 'Construction disputes', subtitle: 'Mechanics’ liens, defective workmanship and payment disputes on construction projects' },
  { href: '/civil', title: 'All civil matters', subtitle: 'Including landlord-tenant disputes, security deposit claims and habitability issues' },
  { href: '/civil/breach-of-contract', title: 'Breach of contract', subtitle: 'Enforcing or defending contract obligations and recovering damages' },
  { href: '/civil/evictions', title: 'Evictions', subtitle: 'Landlord eviction proceedings and tenant eviction defense in Ohio' },
];

export default function RealEstateDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Real estate disputes in Ohio"
        description="Boundary lines, title defects, easements and broken purchase agreements. A contract claim over property must be filed within 6 years if the contract was written, 4 if oral."
      />

      <KeyFacts
        facts={[
          { figure: '6 years', label: 'to sue on a written real estate contract' },
          { figure: '4 years', label: 'for an oral contract, property damage, or fraud from discovery' },
          { figure: '21 years', label: 'of continuous possession for an adverse possession claim' },
        ]}
      />

      <Section
        title="Kinds of real estate disputes"
        intro={
          <p>
            Real estate disputes often involve valuable property and turn on surveys, deeds, title records and contracts. The firm
            handles them in Columbus, Cincinnati, Dayton and throughout Ohio as part of its{' '}
            <Link href="/civil">civil litigation practice</Link>.
          </p>
        }
      >
        <PointGrid
          points={[
            {
              title: 'Boundary disputes',
              body: 'Neighbors disagree about property lines, fences or structures. Resolving them may take surveys, title research and property records, then negotiation or litigation.',
            },
            {
              title: 'Title disputes',
              body: 'Competing claims to the property, title defects, liens or other clouds on title. A quiet title action under Ohio Revised Code 5303.01 can establish clear ownership.',
            },
            {
              title: 'Purchase agreement disputes',
              body: 'Breach of contract, seller disclosure issues, inspection disputes, closing disputes or financing issues. These can delay or stop a sale.',
            },
            {
              title: 'Easement disputes',
              body: 'Rights to use another person’s property for a specific purpose, such as access or utilities. They turn on the easement agreement and the property records.',
            },
            {
              title: 'Partition',
              body: 'Co-owners who cannot agree on the use or sale of property can ask the Court of Common Pleas to divide it or order it sold (ORC Chapter 5307).',
            },
            {
              title: 'Adverse possession',
              body: 'A claim to title based on 21 years of open, notorious, continuous, exclusive and hostile possession (ORC 2305.04).',
            },
          ]}
        />
      </Section>

      <Section title="Deadlines and governing statutes" tone="ice">
        <FactTable
          title="Statutes of limitations"
          rows={[
            { label: 'Written contract', value: '6 years (ORC 2305.06, as amended June 2021).' },
            { label: 'Oral contract', value: '4 years (ORC 2305.07, as amended June 2021).' },
            { label: 'Property damage', value: '4 years.' },
            { label: 'Fraud', value: '4 years from discovery.' },
          ]}
          note="Missing a deadline may bar recovery."
        />
        <FactTable
          title="Statutes that govern common claims"
          rows={[
            { label: 'Quiet title', value: 'ORC 5303.01.' },
            { label: 'Partition', value: 'ORC Chapter 5307, filed in the Court of Common Pleas.' },
            { label: 'Adverse possession', value: 'ORC 2305.04: 21 years, all five elements throughout. Permissive use, abandonment or interruption restarts the clock.' },
            { label: 'Seller disclosure', value: 'ORC 5302.30.' },
          ]}
        />
        <p>
          To discuss a property dispute, <Link href="/contact">contact Jwayyed Law LLC</Link>.
        </p>
      </Section>

      <LocationsWeServe title="Civil" />

      <Section title="How a real estate dispute is resolved" tone="ice">
        <Steps
          steps={[
            {
              title: 'Investigation',
              body: 'Reviewing property records, surveys, title documents, contracts and other evidence, and running title searches.',
            },
            {
              title: 'Negotiation',
              body: 'Many disputes settle without a lawsuit. Mediation or arbitration can save time and money, and a settlement is put in writing.',
            },
            {
              title: 'Litigation or quiet title',
              body: 'If negotiation fails: a lawsuit, quiet title action or other proceeding, with discovery, depositions, expert testimony and possibly trial.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a property dispute">
        <PointGrid
          points={[
            { title: 'Analyzes the property issue', body: 'Title problems, boundary and easement disputes and other property law questions, to set out your rights and options.' },
            { title: 'Researches title', body: 'Title searches and a review of property records, surveys and documents.' },
            { title: 'Files quiet title actions', body: 'Under Ohio Revised Code 5303.01, to establish clear ownership.' },
            { title: 'Reviews the contracts', body: 'Purchase agreements, easement agreements and other documents behind the dispute.' },
            { title: 'Negotiates and mediates', body: 'Settlement talks, mediation or arbitration, and drafting the settlement agreement.' },
            { title: 'Litigates', body: 'Files suit when needed, runs discovery, takes depositions and represents you in court.' },
          ]}
        />
      </Section>

      <Section title="Related civil matters" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
