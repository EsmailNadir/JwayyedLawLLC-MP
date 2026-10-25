import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Butler County Business Attorney',
  description:
    'LLC formation and business law for Hamilton, Oxford, West Chester, Mason and Fairfield: filing fees, operating agreements and CAT. Call (614) 285-5482.',
  keywords: ['business lawyer Butler County', 'LLC formation Hamilton Ohio', 'Butler County business attorney', 'business formation Ohio', 'LLC attorney West Chester Ohio', 'Oxford Ohio business lawyer'],
  openGraph: {
    title: 'Butler County Business Attorney | Jwayyed Law LLC',
    description: 'Business formation, LLC formation and operating agreements for Butler County businesses.',
    url: 'https://www.jjlawohio.com/locations/butler-county/business-formation-llc-butler-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/butler-county/business-formation-llc-butler-county' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Butler County', href: '/locations/butler-county' },
  { label: 'Business & LLC Formation - Butler County', href: '/locations/butler-county/business-formation-llc-butler-county' },
];

const faqs = [
  {
    question: 'How do I form an LLC in Ohio under ORC Chapter 1706?',
    answer:
      "Ohio's Revised Limited Liability Company Act, Ohio Revised Code Chapter 1706, governs new LLCs formed after February 11, 2022. File Articles of Organization with the Ohio Secretary of State (online at ohio.gov/business) and pay the $99 filing fee. Draft an operating agreement: Ohio does not require it in writing, but it protects the members and governs the relationship. Designate a statutory agent under ORC 1706.16, get a federal EIN from the IRS and register for the Ohio taxes that apply.",
  },
  {
    question: 'What is the difference between LLC and S-Corp taxation in Ohio?',
    answer:
      "By default a single-member LLC is taxed as a sole proprietorship and a multi-member LLC as a partnership, both passing profits and losses through to the members' personal returns. An LLC can elect S-Corp status with the IRS, which may reduce self-employment taxes for owners who pay themselves a reasonable salary. Ohio imposes the Commercial Activity Tax (CAT) under ORC Chapter 5751 on businesses with gross receipts over $150,000 a year, whatever the entity type. The right choice depends on expected income, business type and long-term plans.",
  },
  {
    question: 'What are the Ohio Secretary of State filing fees for business formation?',
    answer:
      'The Ohio Secretary of State charges $99 to file Articles of Organization for a new LLC and $125 to file Articles of Incorporation for a corporation. The fees are paid at filing at ohio.gov/business and are non-refundable. Expedited processing costs extra. Foreign entities (formed in another state but doing business in Ohio) must register with the Secretary of State and pay a separate registration fee.',
  },
  {
    question: 'What is an operating agreement and do I need one for my Ohio LLC?',
    answer:
      'It is the governing document for your LLC: member ownership percentages, profit and loss allocation, management structure, voting rights, and procedures for adding members or dissolving. ORC Chapter 1706 does not require a written operating agreement, but without one, member disputes are settled under default rules that may not match your intentions. For multi-member LLCs in West Chester, Hamilton or Oxford, a well-drafted agreement is essential.',
  },
  {
    question: "What are Ohio's statutory agent requirements for a Butler County LLC?",
    answer:
      "Every Ohio LLC must keep a statutory agent (also called a registered agent) with a physical Ohio street address where legal papers and official notices can be served. Under ORC 1706.16, the agent must be an individual Ohio resident or a business entity authorized to do business in Ohio. A P.O. box is not enough. Failing to keep a current agent can lead the Secretary of State to cancel the LLC's articles. The firm can serve as your statutory agent or help you designate one.",
  },
  {
    question: 'When does the Ohio Commercial Activity Tax (CAT) apply to my business?',
    answer:
      'The CAT, governed by ORC Chapter 5751, applies to businesses with taxable gross receipts over $150,000 a year. Businesses below that threshold owe no CAT; above it, CAT is calculated at a set rate on gross receipts. It applies to most entity types (LLCs, corporations and sole proprietorships) doing business in Ohio. Butler County businesses above the threshold must register with the Ohio Department of Taxation and file CAT returns.',
  },
  {
    question: 'Do I need an attorney to form an LLC in Butler County, Ohio?',
    answer:
      "Ohio law does not require one, and the Secretary of State's online portal lets you file Articles of Organization yourself. Do-it-yourself formation often goes wrong, though: the wrong entity type, no operating agreement, misunderstood liability protection, a mishandled EIN and tax registration, or generic templates that do not fit the business. An attorney structures the business correctly from the start so your personal assets are protected.",
  },
  {
    question: 'What are the most common mistakes in DIY LLC formation in Ohio?',
    answer:
      'They include: (1) online templates that do not reflect Ohio law or your arrangement; (2) no written operating agreement, so disputes fall to default rules; (3) mixing personal and business finances, which can pierce the liability veil; (4) not getting an EIN or registering for Ohio CAT when required under ORC Chapter 5751; (5) a name that conflicts with an existing registered name; and (6) no proper statutory agent under ORC 1706.16, leading to missed legal notices.',
  },
];

export default function BusinessFormationLLCButlerCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Business Formation and LLC in Butler County',
    serviceType: 'Business Law',
    areaServed: { '@type': 'County', name: 'Butler County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/butler-county/business-formation-llc-butler-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business and LLC formation in Butler County"
        description="LLC formation, operating agreements and business law for Hamilton, Oxford, West Chester, Mason and Fairfield. An Ohio LLC costs $99 to file with the Secretary of State."
      />

      <Section
        title="Businesses in Butler County"
        intro={<p>Butler County is one of the most economically active counties in southwestern Ohio.</p>}
      >
        <PointGrid
          points={[
            { title: 'West Chester and Mason', body: 'Major commercial corridors and corporate offices.' },
            { title: 'Oxford', body: 'Home to Miami University, with small businesses, retail and service providers.' },
            { title: 'Hamilton', body: 'A strong manufacturing and industrial base.' },
            { title: 'The I-75 corridor', body: 'A logistics and commercial hub running through the county.' },
          ]}
        />
        <p>
          The right entity depends on your goals, tax situation and risk tolerance. An LLC under ORC Chapter 1706 gives liability
          protection, flexible management and pass-through taxation. A corporation under ORC Chapter 1701 may suit businesses seeking
          investment, issuing stock or with complex ownership. Sole proprietorships and general partnerships are simple but leave owners
          personally exposed. The firm analyzes the options, then handles formation from start to finish.
        </p>
      </Section>

      <Section title="Forming an Ohio LLC: costs and requirements" tone="ice">
        <FactTable
          title="What formation involves"
          rows={[
            { label: 'Governing law', value: 'ORC Chapter 1706, for LLCs formed after February 11, 2022.' },
            { label: 'LLC filing fee', value: '$99 for Articles of Organization, at ohio.gov/business.' },
            { label: 'Corporation filing fee', value: '$125 for Articles of Incorporation.' },
            { label: 'Statutory agent', value: 'An Ohio street address, designated under ORC 1706.16.' },
            { label: 'EIN', value: 'From the IRS, free.' },
            { label: 'Commercial Activity Tax', value: 'Registration under ORC Chapter 5751 if gross receipts will exceed $150,000.' },
          ]}
        />
        <Steps
          steps={[
            { title: 'Choose the entity', body: 'LLC, corporation or another structure, and the tax election that fits.' },
            { title: 'File the articles', body: 'With the Ohio Secretary of State, naming the statutory agent.' },
            { title: 'Adopt the operating agreement', body: 'Drafted for a sole member, equal co-owners or partners with unequal contributions.' },
            { title: 'Register for taxes', body: 'EIN, Ohio tax accounts and CAT where it applies.' },
          ]}
        />
      </Section>

      <Section title="LLCs formed before 2022">
        <p>
          The Revised LLC Act took effect February 11, 2022. LLCs formed under the prior act (ORC Chapter 1705) were allowed to
          continue under that law until 2026, when transition to Chapter 1706 happens automatically. A Butler County business formed
          before February 2022 may still be governed by Chapter 1705 and may need its documents reviewed and updated.
        </p>
        <p>
          Beyond formation, the firm helps Butler County businesses with contract drafting and review, business disputes, partnership
          and operating agreement amendments, and compliance. Use <Link href="/contact">the contact page</Link> or call (614) 285-5482,
          or read about the firm&rsquo;s <Link href="/business/business-formation">business formation practice</Link>.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid
          links={[
            { href: '/locations/butler-county', title: 'Butler County', subtitle: 'Every service the firm offers in the county' },
            { href: '/business/llc-formation', title: 'LLC formation', subtitle: 'Forming an Ohio LLC step by step' },
            { href: '/business/contract-drafting-review', title: 'Contract drafting and review', subtitle: 'Agreements for new businesses' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
