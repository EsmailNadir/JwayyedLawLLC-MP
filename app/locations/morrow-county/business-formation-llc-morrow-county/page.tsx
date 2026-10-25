import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Business & LLC Formation in Morrow County',
  description:
    'LLC formation, farm LLCs and business law for Mt. Gilead, Cardington, Marengo and Edison under Ohio Chapter 1706. Call (614) 285-5482.',
  keywords: ['business lawyer Morrow County', 'LLC formation Mt. Gilead Ohio', 'Morrow County business attorney', 'farm LLC Ohio', 'small business attorney Cardington Ohio'],
  openGraph: {
    title: 'Business & LLC Formation in Morrow County | Jwayyed Law LLC',
    description: 'Business formation, farm LLCs and business law for Mt. Gilead, Cardington, Marengo and Edison.',
    url: 'https://www.jjlawohio.com/locations/morrow-county/business-formation-llc-morrow-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/morrow-county/business-formation-llc-morrow-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Morrow County', href: '/courts/morrow-county' },
  { label: 'Business & LLC Formation - Morrow County', href: '/locations/morrow-county/business-formation-llc-morrow-county' },
];

const faqs = [
  {
    question: 'How do I form an LLC in Ohio?',
    answer:
      "File Articles of Organization with the Ohio Secretary of State and pay the filing fee. Ohio LLCs are now governed by ORC Chapter 1706, the Ohio Revised Limited Liability Company Act, effective February 2022, which replaced the former Chapter 1705. After filing you must keep a statutory agent with an Ohio physical address (ORC 1705.06), prepare a written operating agreement, get a federal EIN and complete the required tax registrations. An attorney makes sure the formation is complete and the governing documents protect every owner's interests.",
  },
  {
    question: 'Can farmers and agricultural businesses benefit from forming an LLC in Morrow County?',
    answer:
      "Yes. Crop farms, livestock operations and agribusinesses in Morrow County can benefit a great deal. An LLC separates the business's debts and liabilities from the owners' personal assets, a shield that sole proprietorships and informal partnerships do not give. Under ORC Chapter 1706, a farm LLC can hold several family members with different ownership interests and management roles, and a good operating agreement covers succession so the farm keeps running if an owner dies or becomes incapacitated.",
  },
  {
    question: 'What is the difference between an LLC and a corporation in Ohio?',
    answer:
      'Ohio LLCs (ORC Chapter 1706) offer flexible management, pass-through taxation by default and lighter compliance than Ohio corporations (ORC Chapter 1701), which need a formal board of directors, officers, annual meetings and detailed records. For most small businesses, retail stores, service companies and agricultural operations in Morrow County, an LLC balances liability protection with simplicity. Businesses seeking outside investors or planning major growth may prefer a corporation.',
  },
  {
    question: 'What is an operating agreement and why does my Ohio LLC need one?',
    answer:
      "It is the internal governance document of your LLC. Under ORC Chapter 1706, many default rules can be changed by agreement, but only if a written agreement says so. For multi-member LLCs in Morrow County it is essential: it sets how profits and losses are allocated, how decisions are made, who can act for the LLC, how members transfer interests and what happens when a member leaves or dies. Without one, Ohio's default rules govern.",
  },
  {
    question: 'What types of businesses commonly form LLCs in rural Ohio counties like Morrow?',
    answer:
      'Agricultural and farming operations, small retail stores, service businesses (construction, landscaping, plumbing, electrical), food and hospitality, professional services (accounting, healthcare, consulting) and real estate holding companies. Almost any owner who wants to keep personal assets apart from business debts can benefit, and the process is straightforward.',
  },
  {
    question: 'What is a statutory agent and why is it required?',
    answer:
      "Ohio Revised Code 1705.06 (as incorporated into ORC Chapter 1706) requires every Ohio LLC to keep a statutory agent: a person or entity with a physical Ohio address authorized to receive legal process and government notices for the LLC. A P.O. Box is not enough. If the agent's information is out of date when the LLC is sued, you may miss the deadline to respond and face a default judgment.",
  },
  {
    question: 'What ongoing compliance obligations does an Ohio LLC have?',
    answer:
      'After formation, an Ohio LLC must: (1) keep a current statutory agent and update the Secretary of State if it changes; (2) file a biennial report with the Ohio Secretary of State (for LLCs registered as foreign entities); (3) keep records, including the operating agreement, financial statements and major decisions; (4) keep business and personal money separate with a dedicated business bank account; and (5) meet federal, state and local tax obligations. The firm walks new LLC clients through each of these.',
  },
  {
    question: 'Why should I hire an attorney for business formation in Morrow County?',
    answer:
      'Online formation services only process paperwork. They do not advise on whether an LLC is the right structure, how to draft an operating agreement that protects you, which tax elections are available, how to handle several owners or which licenses and permits apply to your Morrow County business. For a farm, structuring the business for succession and estate planning takes legal judgment that no online service provides.',
  },
];

export default function BusinessFormationLLCMorrowCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Business Formation and LLC in Morrow County',
    serviceType: 'Business Law',
    areaServed: { '@type': 'County', name: 'Morrow County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/morrow-county/business-formation-llc-morrow-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business and LLC formation in Morrow County"
        description="LLC formation and business law for Mt. Gilead, Cardington, Marengo and Edison, including farm LLCs built for succession."
      />

      <Section
        title="Businesses in Morrow County"
        intro={
          <p>
            Morrow County is a rural county north of Columbus. Its economy rests on agriculture, small retail and service businesses,
            and a growing number of residents who commute to Columbus and nearby metro areas.
          </p>
        }
      >
        <PointGrid
          points={[
            {
              title: 'Farm LLCs',
              body: 'Formalizing an agricultural operation to protect personal assets, with an operating agreement that covers family members joining or leaving and succession across generations.',
            },
            {
              title: 'Series LLCs for farm families',
              body: 'Chapter 1706 lets one LLC separate farming operations from other business activities.',
            },
            {
              title: 'Service businesses and practices',
              body: 'For two or more owners: how profits are divided, who decides and how disputes are resolved.',
            },
            {
              title: 'After formation',
              body: 'Customer and supplier contracts, employment agreements, commercial leases, Ohio tax registration, and for farms land use, easements and agricultural liability.',
            },
          ]}
        />
      </Section>

      <Section title="Ohio LLC law in brief" tone="ice">
        <FactTable
          title="The rules that apply"
          rows={[
            {
              label: 'Governing law',
              value: 'ORC Chapter 1706, the Ohio Revised Limited Liability Company Act, in effect since February 2022. It replaced Chapter 1705.',
            },
            {
              label: 'What changed',
              value: 'Series LLCs (one entity separating assets and liabilities across distinct activities), more flexible management, and clarity on what an operating agreement can customize.',
            },
            { label: 'Statutory agent', value: 'Required (ORC 1705.06), with a physical Ohio address; a P.O. Box is not enough.' },
            { label: 'Corporations', value: 'Governed by ORC Chapter 1701.' },
            { label: 'Ongoing duties', value: 'Current statutory agent, records, separate bank account and tax filings.' },
          ]}
        />
        <p>
          Generic online templates do not address your ownership and management arrangement. A customized operating agreement is one
          of the most useful things a Morrow County owner can have.
        </p>
        <p>
          Ohio business formation is handled through the Ohio Secretary of State, so the firm can help Morrow County clients wherever
          they are. Use <Link href="/contact">the contact page</Link> or call (614) 285-5482, or read about the firm&rsquo;s{' '}
          <Link href="/business">business law practice</Link>.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid
          links={[
            { href: '/locations/morrow-county', title: 'Morrow County', subtitle: 'Every service the firm offers in the county' },
            { href: '/business/llc-formation', title: 'LLC formation', subtitle: 'Forming an Ohio LLC step by step' },
            { href: '/business/employment-agreements', title: 'Employment agreements', subtitle: 'When you hire staff' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
