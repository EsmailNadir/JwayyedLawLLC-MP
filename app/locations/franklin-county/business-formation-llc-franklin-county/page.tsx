import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Business & LLC Formation in Franklin County',
  description:
    'Forming an LLC or corporation in Columbus and Franklin County under ORC Chapter 1706 and 1701: filings, operating agreements and entity choice.',
  keywords: ['business lawyer Franklin County', 'LLC formation Columbus Ohio', 'Franklin County business attorney', 'LLC formation Dublin Ohio', 'small business attorney Columbus Ohio'],
  openGraph: {
    title: 'Business & LLC Formation in Franklin County | Jwayyed Law LLC',
    description: 'LLC and corporation formation for Columbus and Franklin County businesses under current Ohio law.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/business-formation-llc-franklin-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/business-formation-llc-franklin-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Business & LLC Formation in Franklin County', href: '/locations/franklin-county/business-formation-llc-franklin-county' },
];

const faqs = [
  {
    question: 'How do I form an LLC in Ohio?',
    answer:
      'You file Articles of Organization with the Ohio Secretary of State and pay the filing fee. Ohio LLCs are governed by ORC Chapter 1706, the Ohio Revised Limited Liability Company Act, effective February 2022, which replaced the former Chapter 1705. After formation you must keep a statutory agent with a physical Ohio address (ORC 1705.06), adopt a written operating agreement, get a federal EIN and complete the tax registrations that apply. An attorney makes sure the formation is complete and that the operating agreement reflects how the business will actually run.',
  },
  {
    question: 'What is the difference between an LLC and a corporation in Ohio?',
    answer:
      'Ohio LLCs (ORC Chapter 1706) offer flexible management, pass-through taxation by default and lighter ongoing compliance than Ohio corporations (ORC Chapter 1701). Corporations need a board of directors, officers, annual meetings and formal record-keeping, but are preferred by businesses seeking venture capital, planning several classes of stock or working toward a public offering. Whether an LLC, S corporation or C corporation fits your Franklin County business depends on your industry, funding plans and ownership. The firm helps you choose and set it up correctly from the start.',
  },
  {
    question: 'Why is Franklin County a strong location for business formation?',
    answer:
      "Franklin County is Ohio's largest county by population and home to Columbus, the state capital and Ohio's largest city. It has a technology sector, a large university and healthcare presence through Ohio State University and major hospital systems, and small businesses in every industry. Whether you are forming a startup, a professional practice, a real estate holding company or a retail or service business, proper legal formation is the starting point.",
  },
  {
    question: 'What is an operating agreement and why is it critical for my Ohio LLC?',
    answer:
      "It is your LLC's internal governance document. Under ORC Chapter 1706, many default statutory rules apply unless the operating agreement says otherwise, and those defaults may not match what you intend. A custom agreement covers ownership percentages, profit and loss allocations, management, voting rights, limits on transferring membership interests, buy-sell terms for member exits and dissolution. For Columbus-area LLCs with several founders or partners, a detailed written agreement prevents costly disputes.",
  },
  {
    question: 'What is a statutory agent and how do I maintain that requirement?',
    answer:
      "Ohio Revised Code 1705.06 (incorporated into Chapter 1706) requires every Ohio LLC to name a statutory agent: a person or entity with a physical Ohio address authorized to receive legal process and government notices for the LLC. The information must stay current with the Ohio Secretary of State. If you move, change agents or let it lapse, the LLC can miss a lawsuit or a regulatory notice. Jwayyed Law LLC can serve as your statutory agent or advise you on designating and maintaining one.",
  },
  {
    question: "What are the key features of Ohio's Revised LLC Act (ORC Chapter 1706)?",
    answer:
      'ORC Chapter 1706, effective February 11, 2022, replaced the former Chapter 1705. It authorizes series LLCs, so one entity can hold distinct series with separate assets and liabilities. It sets out more detailed default rules on what the operating agreement must include and what it may change. It allows more flexible management, including corporate-style governance inside an LLC, and streamlines various LLC procedures. Every Ohio LLC, whether formed before or after 2022, is now governed by Chapter 1706. The firm reviews operating agreements for consistency with current law.',
  },
  {
    question: 'What is the Ohio Secretary of State filing process for a new LLC or corporation?',
    answer:
      "For an LLC, file Articles of Organization (Form 533A) online or by mail with the Ohio Secretary of State, with the filing fee. For a corporation, file Articles of Incorporation (Form 532A). Both can be filed through the Secretary of State's online Business Services portal at OhioSOS.gov. Once processed, the entity legally exists. After that: designate a statutory agent, prepare governing documents (an operating agreement or bylaws), get an EIN, register for state taxes and obtain any required local licenses.",
  },
  {
    question: 'Why hire an attorney for business formation in Columbus rather than using an online service?',
    answer:
      'Online services file the paperwork but cannot advise you on entity choice, tax strategy, operating agreement terms or industry-specific compliance. Technology companies, healthcare providers, professional service firms and retailers in Columbus each have their own legal needs. The firm gives specific advice on structure, ownership, operating agreement terms and post-formation obligations. Jwayyed Law LLC is based in Columbus and serves Franklin County business clients as it does clients across Ohio.',
  },
];

const RELATED = [
  { href: '/business', title: 'Business law in Ohio', subtitle: 'The firm’s business practice' },
  { href: '/business/llc-formation', title: 'LLC formation', subtitle: 'Forming an Ohio LLC' },
  { href: '/business/business-formation', title: 'Business formation', subtitle: 'Choosing and forming an entity' },
  { href: '/business/contract-drafting-review', title: 'Contract drafting and review', subtitle: 'Agreements for your business' },
  { href: '/business/partnership-disputes', title: 'Partnership disputes', subtitle: 'When owners disagree' },
  { href: '/business/business-compliance', title: 'Business compliance', subtitle: 'Staying current after formation' },
];

export default function BusinessFormationLLCFranklinCountyPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Business Formation and LLC in Franklin County", "serviceType": "Business Law", "areaServed": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/business-formation-llc-franklin-county"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business and LLC formation in Franklin County"
        description="Ohio LLCs have been governed by ORC Chapter 1706 since February 11, 2022, and corporations by Chapter 1701. A Columbus-based firm forming entities across the county."
      />

      <Section
        title="Forming a business in Franklin County"
        intro={
          <p>
            Jwayyed Law LLC is based in Columbus, and business formation in Franklin County is a central part of its practice.
          </p>
        }
      >
        <p>
          Columbus, the state capital and Ohio&rsquo;s largest city, anchors a county that also includes Dublin, Westerville, Hilliard,
          Gahanna, Grove City, Reynoldsburg and Worthington. The county&rsquo;s economy spans technology, healthcare, finance, higher
          education, professional services, manufacturing, retail and hospitality. The firm helps owners across the county form LLCs,
          corporations and other entities under current Ohio law: ORC Chapter 1706 for LLCs and ORC Chapter 1701 for corporations. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
        <FactTable
          title="Filing with the Ohio Secretary of State"
          rows={[
            { label: 'LLC', value: 'Articles of Organization (Form 533A), online or by mail, with the filing fee.' },
            { label: 'Corporation', value: 'Articles of Incorporation (Form 532A).' },
            { label: 'Where', value: "The Secretary of State's online Business Services portal at OhioSOS.gov." },
            { label: 'Statutory agent', value: 'A person or entity with a physical Ohio address, under ORC 1705.06 (incorporated into Chapter 1706).' },
          ]}
        />
      </Section>

      <Section title="Ohio LLCs under ORC Chapter 1706" tone="ice">
        <p>
          The Ohio Revised Limited Liability Company Act, ORC Chapter 1706, took effect February 11, 2022, replaced the former Chapter 1705
          and governs every Ohio LLC, whenever it was formed.
        </p>
        <PointGrid
          points={[
            { title: 'Series LLCs', body: 'One entity can maintain distinct series with separate assets and liabilities.' },
            { title: 'Default rules', body: 'Clearer rules on what the operating agreement must address and which defaults apply when it is silent.' },
            { title: 'Management', body: 'More room for corporate-style management structures inside an LLC.' },
            { title: 'Procedures', body: 'Streamlined steps for member admission, withdrawal and dissolution.' },
          ]}
        />
        <h3>After the LLC is formed</h3>
        <Steps
          steps={[
            { title: 'Statutory agent', body: 'Designate one with a physical Ohio address and keep the information current with the Secretary of State.' },
            { title: 'EIN', body: 'Get a federal Employer Identification Number.' },
            { title: 'Operating agreement', body: 'Adopt a written agreement.' },
            { title: 'Registrations', body: 'Complete the state and local tax registrations and licenses that apply.' },
          ]}
        />
      </Section>

      <Section title="LLC or corporation">
        <p>
          Ohio LLCs offer flexible management, pass-through taxation by default and lighter ongoing compliance than corporations.
          Corporations under ORC Chapter 1701 need a board of directors, formal officer appointments, annual shareholder meetings and
          detailed record-keeping, but they are the usual structure for businesses seeking venture capital, planning several classes of
          stock or working toward a public offering. Columbus&rsquo;s technology and startup companies include both, depending on funding
          strategy and investor expectations.
        </p>
        <p>
          An S corporation election, a federal tax election available to qualifying Ohio corporations and LLCs, gives pass-through
          taxation with corporate formality and is common among Columbus-area professional firms and closely held businesses. C
          corporations are required for businesses expecting significant outside investment or issuing preferred stock. The right choice
          depends on your industry, ownership, funding plans and tax situation, and the firm&rsquo;s advice is based on those facts.
        </p>
      </Section>

      <Section title="Operating agreements" tone="ice">
        <p>
          Under ORC Chapter 1706 many default rules apply unless the operating agreement says otherwise, and those defaults often do not
          match what the owners intend. Generic templates leave gaps that surface only when a dispute starts, which is the worst time to
          learn the document does not say what the owners thought.
        </p>
        <FactTable
          title="What a custom operating agreement covers"
          rows={[
            { label: 'Ownership', value: 'Ownership percentages and capital contributions.' },
            { label: 'Money', value: 'Profit and loss allocations.' },
            { label: 'Control', value: 'Management authority and voting rights.' },
            { label: 'Transfers', value: 'Restrictions on transferring membership interests.' },
            { label: 'Exits', value: 'Buy-sell terms when a member leaves or dies.' },
            { label: 'Disputes and dissolution', value: 'Dispute resolution procedures and how the LLC winds down.' },
          ]}
        />
        <p>
          For multi-member LLCs in the Columbus area, whether technology startups, professional practices, real estate ventures or family
          businesses, the firm drafts the agreement around your ownership, industry and management model.
        </p>
      </Section>

      <Section title="Professional, series and holding structures">
        <PointGrid
          points={[
            {
              title: 'Professional entities',
              body: 'Medical practices, law firms, accounting firms and other licensed professions in medicine, law, dentistry, optometry and other regulated fields may have to form a professional LLC (PLLC) or professional corporation (PC) under Ohio licensing rules, or risk violating licensure requirements. The firm checks the formation against the licensing board’s rules.',
            },
            {
              title: 'Series LLCs for real estate',
              body: 'Columbus-area real estate investors often use series LLCs under ORC Chapter 1706: one LLC with legally separate series, each with its own assets, liabilities and members, which reduces cross-liability between properties.',
            },
            {
              title: 'Holding companies',
              body: 'Several LLCs can isolate risk across rental properties, commercial real estate or development projects. The firm designs holding structures for liability protection while keeping formation and administrative costs down.',
            },
            {
              title: 'Statutory agent service',
              body: 'Jwayyed Law LLC can serve as your statutory agent.',
            },
          ]}
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>. Read more about the
          firm&rsquo;s <Link href="/business">business law services</Link> for Ohio owners.
        </p>
      </Section>

      <Section title="Related business pages" tone="ice">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
