import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Business & LLC Formation Lawyer in Franklin County, Ohio | Columbus | Jwayyed Law LLC',
  description: 'Business attorney serving Franklin County, Columbus, Dublin, Westerville, Hilliard, Gahanna, Grove City, and Worthington. LLC formation, business law, contracts. Call (614) 285-5482.',
  keywords: ['business lawyer Franklin County', 'LLC formation Columbus Ohio', 'Franklin County business attorney', 'LLC formation Dublin Ohio', 'small business attorney Columbus Ohio'],
  openGraph: {
    title: 'Business & LLC Formation Lawyer in Franklin County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/business-formation-llc-franklin-county',
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
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business & LLC Formation Lawyer in Franklin County, Ohio"
        description="Serving Columbus, Dublin, Westerville, Hilliard, Gahanna, Grove City, Reynoldsburg, Worthington, and surrounding communities with business formation and LLC law."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Business & LLC Formation in Franklin County
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County is the commercial and governmental heart of Ohio. Columbus — the state capital and Ohio&apos;s largest city — anchors a county that also includes Dublin, Westerville, Hilliard, Gahanna, Grove City, Reynoldsburg, and Worthington. The county&apos;s diverse economy spans technology, healthcare, finance, higher education, professional services, manufacturing, retail, and hospitality. Jwayyed Law LLC is a Columbus-based firm, and business formation in Franklin County is a central part of our practice. We help entrepreneurs and business owners throughout the county form LLCs, corporations, and other business entities correctly under current Ohio law.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio LLCs are governed by the Ohio Revised Limited Liability Company Act, ORC Chapter 1706, which became effective February 2022 and replaced the former Chapter 1705. Chapter 1706 represents a significant modernization of Ohio LLC law — introducing series LLC capabilities, enhanced management flexibility, and clearer rules governing the operating agreement. Ohio corporations remain under ORC Chapter 1701. As a Columbus firm with direct experience in Ohio&apos;s business formation landscape, our attorney provides clear and current guidance on entity selection and structure.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The operating agreement is the single most important document in any multi-member LLC — and one of the most frequently neglected. Online formation services provide generic templates that leave critical questions unaddressed: how are profits really shared? Who has the final say when co-owners disagree? What happens if one owner wants to sell their interest, becomes incapacitated, or passes away? In Columbus&apos;s active startup and professional services environment, co-founder disputes and ownership disagreements are a leading cause of early business failure. Our attorney prepares operating agreements tailored to your specific ownership, industry, and management structure.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County&apos;s professional services sector — law firms, medical practices, accounting firms, consulting businesses, and technology companies — may have specific legal structure requirements. Ohio licensed professionals in medicine, law, and other regulated fields may be required to use professional corporations (PCs) or professional LLCs (PLLCs). Real estate investors in Columbus benefit from LLC holding company structures that separate individual properties and limit cross-liability. Our attorney advises on these industry-specific and asset-specific formation needs.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              As a Columbus-based law firm, Jwayyed Law LLC serves Franklin County business clients with local knowledge and statewide capability. Ohio business formation is handled through the Ohio Secretary of State and our services are available to clients across Ohio. Contact us at{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> or call (614) 285-5482 to discuss your business formation needs. Learn more about our{' '}
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
