import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Business & LLC Formation | Franklin County | Jwayyed Law LLC',
  description: 'Business attorney serving Franklin County, Columbus, Dublin, Westerville, Hilliard, Gahanna, Grove City, and Worthington. LLC formation, business law.',
  keywords: ['business lawyer Franklin County', 'LLC formation Columbus Ohio', 'Franklin County business attorney', 'LLC formation Dublin Ohio', 'small business attorney Columbus Ohio'],
  openGraph: {
    title: 'Business & LLC Formation | Franklin County | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/business-formation-llc-franklin-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/locations/franklin-county/business-formation-llc-franklin-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Business & LLC Formation - Franklin County', href: '/locations/franklin-county/business-formation-llc-franklin-county' },
];

const faqs = [
  {
    question: `How do I form an LLC in Ohio?`,
    answer: `To form an Ohio LLC, you file Articles of Organization with the Ohio Secretary of State and pay the required filing fee. Ohio LLCs are governed by ORC Chapter 1706 — the Ohio Revised Limited Liability Company Act, effective February 2022 — which replaced the former Chapter 1705. After formation, you must maintain a statutory agent with a physical Ohio address (ORC 1705.06), adopt a written operating agreement, obtain a federal EIN, and complete applicable tax registrations. An attorney ensures the formation is complete and legally sound, and that your operating agreement reflects how your business will actually operate.`,
  },
  {
    question: `What is the difference between an LLC and a corporation in Ohio?`,
    answer: `Ohio LLCs (ORC Chapter 1706) offer flexible management, pass-through taxation by default, and lower ongoing compliance burdens than Ohio corporations (ORC Chapter 1701). Corporations require a board of directors, officers, annual meetings, and formal record-keeping, but are preferred by businesses seeking venture capital, planning to issue multiple stock classes, or working toward a public offering. Columbus has a dynamic startup and technology ecosystem; whether an LLC, S corporation, or C corporation is right for your Franklin County business depends on your industry, funding plans, and ownership structure. Our attorney helps you choose and structure correctly from the start.`,
  },
  {
    question: `Why is Franklin County a strong location for business formation?`,
    answer: `Franklin County is Ohio's largest county by population and home to Columbus — the state capital and the largest city in Ohio. Columbus is consistently ranked among the top cities in the Midwest for business growth, with a thriving technology sector, a large university and healthcare presence through Ohio State University and major hospital systems, and a robust small business community across all industries. Whether you are forming a startup, a professional practice, a real estate holding company, or a retail or service business, Franklin County's economic environment offers excellent opportunities — and proper legal formation is the foundation of long-term success.`,
  },
  {
    question: `What is an operating agreement and why is it critical for my Ohio LLC?`,
    answer: `An operating agreement is the internal governance document of your Ohio LLC. Under ORC Chapter 1706, many default statutory rules apply in the absence of a contrary provision in an operating agreement — and those defaults may not reflect your intentions. A customized operating agreement addresses ownership percentages, profit and loss allocations, management structure, voting rights, restrictions on transfer of membership interests, buy-sell provisions for member exits, and dissolution procedures. For Columbus-area LLCs — whether tech startups with multiple founders or professional practices with several partners — a detailed written operating agreement is essential to prevent costly disputes and protect all members.`,
  },
  {
    question: `What is a statutory agent and how do I maintain that requirement?`,
    answer: `Ohio Revised Code 1705.06 (incorporated into Chapter 1706) requires every Ohio LLC to designate a statutory agent — an individual or entity with a physical Ohio address authorized to receive service of legal process and official government notices on the LLC's behalf. Your statutory agent information must remain current with the Ohio Secretary of State. If you change your business address, hire a new registered agent, or allow the information to lapse, your LLC may miss a lawsuit or fail to receive critical regulatory notices. Jwayyed Law LLC can serve as your statutory agent or advise you on proper designation and maintenance.`,
  },
  {
    question: `What are the key features of Ohio's Revised LLC Act (ORC Chapter 1706)?`,
    answer: `The Ohio Revised Limited Liability Company Act (ORC Chapter 1706), effective February 11, 2022, replaced the former Chapter 1705 and modernized Ohio LLC governance. Key features include: authorization for series LLCs, allowing one entity to maintain distinct series with separate assets and liabilities; more detailed default rules distinguishing what the operating agreement must include versus what it may modify; enhanced flexibility in management structure including corporate-style governance within an LLC; and streamlined procedures for various LLC actions. All Ohio LLCs — whether formed before or after 2022 — are now governed by Chapter 1706. Our attorney helps clients ensure their operating agreements are consistent with current law.`,
  },
  {
    question: `What is the Ohio Secretary of State filing process for a new LLC or corporation?`,
    answer: `To form an Ohio LLC, you file Articles of Organization (Form 533A) online or by mail with the Ohio Secretary of State, along with the filing fee. To form an Ohio corporation, you file Articles of Incorporation (Form 532A). Both can be filed through the Secretary of State's online Business Services portal at OhioSOS.gov. Once processed, your entity legally exists. Post-formation requirements include designating a statutory agent, preparing governing documents (operating agreement or corporate bylaws), obtaining an EIN, registering for state taxes, and obtaining any required local licenses. Our attorney guides you through the complete process.`,
  },
  {
    question: `Why hire an attorney for business formation in Columbus rather than using an online service?`,
    answer: `Online formation services file the paperwork but cannot advise you on entity selection, tax strategy, operating agreement drafting, or industry-specific compliance. In Columbus's competitive business environment — where technology companies, healthcare providers, professional service firms, and retail businesses all have specific legal needs — proper attorney-guided formation is an investment that pays dividends throughout the life of your business. Our attorney provides substantive advice on structure, ownership arrangement, operating agreement terms, and post-formation obligations that no online service can replicate. As a Columbus-based firm, Jwayyed Law LLC is well-positioned to serve Franklin County business clients with the same quality counsel we provide across Ohio.`,
  },
];

export default function BusinessFormationLLCFranklinCountyPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Business Formation and LLC in Franklin County", "serviceType": "Business Law", "areaServed": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/business-formation-llc-franklin-county"};

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((f: { question: string; answer: string }) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.answer },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map(
      (item: { label: string; href: string }, idx: number) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': item.label,
        'item': `https://www.jjlawohio.com${item.href}`,
      })
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business & LLC Formation | Franklin County"
        description="Serving Columbus, Dublin, Westerville, Hilliard, Gahanna, Grove City, Reynoldsburg, Worthington, and surrounding communities with business formation and LLC law."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Business & LLC Formation in Franklin County
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County is the commercial and governmental heart of Ohio. Columbus — the state capital and Ohio&apos;s largest city — anchors a county that also includes Dublin, Westerville, Hilliard, Gahanna, Grove City, Reynoldsburg, and Worthington. The county&apos;s diverse economy spans technology, healthcare, finance, higher education, professional services, manufacturing, retail, and hospitality. Jwayyed Law LLC is a Columbus-based firm, and business formation in Franklin County is a central part of our practice. We help entrepreneurs and business owners throughout the county form LLCs, corporations, and other business entities correctly under current Ohio law — ORC Chapter 1706 for LLCs and ORC Chapter 1701 for corporations. Call{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              to discuss your formation needs.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ohio LLC Formation Under ORC Chapter 1706
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio LLCs are governed by the Ohio Revised Limited Liability Company Act, ORC Chapter 1706, effective February 11, 2022. Chapter 1706 replaced the former Chapter 1705 and significantly modernized Ohio LLC law. Key features include authorization for series LLCs (allowing one entity to maintain distinct series with separate assets and liabilities); more detailed default governance rules clarifying which provisions the operating agreement must address versus which defaults apply in silence; enhanced flexibility for corporate-style management structures within an LLC; and streamlined procedures for member admission, withdrawal, and dissolution. All Ohio LLCs — whether formed before or after 2022 — are now governed by Chapter 1706.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Formation requires filing Articles of Organization (Form 533A) with the Ohio Secretary of State and paying the applicable filing fee. Once processed, the LLC exists as a legal entity. Post-formation obligations include designating a statutory agent with a physical Ohio address under ORC 1705.06 (incorporated into Chapter 1706), obtaining a federal Employer Identification Number, preparing a written operating agreement, and completing any applicable state and local tax registrations. Our attorney guides clients through the complete formation process — from entity selection through post-formation compliance.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              LLC vs. Corporation — Choosing the Right Entity for Your Columbus Business
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio LLCs offer flexible management, pass-through taxation by default, and lower ongoing compliance requirements than Ohio corporations. Corporations (ORC Chapter 1701) require a board of directors, formal officer appointments, annual shareholder meetings, and detailed record-keeping — but they are the preferred structure for businesses seeking venture capital investment, planning to issue multiple classes of stock, or working toward a public offering. Columbus&apos;s growing technology and startup ecosystem includes both LLC-based companies and corporations depending on funding strategy and investor expectations.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              S corporations — a federal tax election available to qualifying Ohio corporations and LLCs — provide pass-through taxation while maintaining corporate formality, and are frequently used by Columbus-area professional service firms and closely held businesses. C corporations are required for businesses anticipating significant outside investment or issuing preferred stock to investors. The right entity for your Franklin County business depends on your industry, ownership structure, funding plans, and tax situation. Our attorney provides specific guidance — not generic recommendations — based on your actual business circumstances.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Operating Agreements — The Foundation of Every Franklin County LLC
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The operating agreement is the most important document in any Ohio LLC. Under ORC Chapter 1706, many default statutory rules apply in the absence of a contrary provision in an operating agreement — and those defaults often do not reflect a business&apos;s actual intentions. A customized operating agreement addresses ownership percentages and capital contributions, profit and loss allocations, management authority and voting rights, restrictions on transfer of membership interests, buy-sell provisions for member exits or death, dispute resolution procedures, and dissolution mechanics. For Columbus-area multi-member LLCs — whether technology startups, professional practices, real estate ventures, or family businesses — a detailed written operating agreement is the foundation that prevents costly disputes and protects all members.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Online formation services file the paperwork but cannot draft a meaningful operating agreement. Generic templates leave critical gaps that only surface when a dispute arises — typically the worst possible time to discover that the document does not say what the owners thought it said. In Columbus&apos;s active startup environment, co-founder disagreements and ownership disputes are a leading cause of early business failure. Our attorney drafts operating agreements tailored to your specific ownership structure, industry, and management model.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Professional LLCs, Series LLCs, and Real Estate Holding Structures
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County&apos;s professional services sector — medical practices, law firms, accounting firms, and other licensed professions — may be required to form professional LLCs (PLLCs) or professional corporations (PCs) under Ohio licensing regulations. Ohio licensed professionals in medicine, law, dentistry, optometry, and other regulated fields must use the appropriate entity type or risk operating in violation of licensure requirements. Our attorney advises on Ohio&apos;s professional entity requirements and ensures formation is compliant with the applicable licensing board&apos;s rules.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Columbus-area real estate investors frequently benefit from series LLC structures under ORC Chapter 1706, which allow a single LLC to maintain legally separate series — each with its own assets, liabilities, and members — reducing cross-liability between properties. Holding company structures using multiple LLCs can further isolate risk across a portfolio of rental properties, commercial real estate, or development projects. Our attorney designs holding structures that provide maximum liability protection while minimizing formation and administrative costs.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              As a Columbus-based law firm, Jwayyed Law LLC serves Franklin County business clients with local knowledge and statewide capability. Contact us at{' '}
              <a href="tel:6142855482" className="text-[#b87333] underline hover:opacity-80">(614) 285-5482</a>{' '}
              or{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">schedule a consultation online</Link>{' '}
              to discuss your business formation needs. Learn more about our{' '}
              <Link href="/business-law" className="text-[#b87333] underline hover:opacity-80">business law services</Link> for Ohio entrepreneurs and business owners.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
