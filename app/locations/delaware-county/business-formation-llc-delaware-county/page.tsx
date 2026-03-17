import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Business & LLC Formation Lawyer in Delaware County, Ohio | Delaware & Powell | Jwayyed Law LLC',
  description: 'Business attorney serving Delaware County, Delaware, Powell, Westerville, Dublin, and Lewis Center. LLC formation, business law, contracts, and operating agreements. Call (614) 285-5482.',
  keywords: ['business lawyer Delaware County', 'LLC formation Delaware Ohio', 'Delaware County business attorney', 'LLC formation Powell Ohio', 'small business attorney Lewis Center Ohio'],
  openGraph: {
    title: 'Business & LLC Formation Lawyer in Delaware County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/delaware-county/business-formation-llc-delaware-county',
  },
  alternates: { canonical: '/locations/delaware-county/business-formation-llc-delaware-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Delaware County', href: '/courts/delaware-county' },
  { label: 'Business & LLC Formation - Delaware County', href: '/locations/delaware-county/business-formation-llc-delaware-county' },
];

const faqs = [
  {
    question: `How do I form an LLC in Ohio?`,
    answer: `To form an Ohio LLC, you file Articles of Organization with the Ohio Secretary of State and pay the required filing fee. Ohio LLCs are governed by ORC Chapter 1706 — the Ohio Revised Limited Liability Company Act, effective February 2022. After filing, you should designate a statutory agent with an Ohio physical address (ORC 1705.06), prepare a written operating agreement, obtain a federal EIN, open a business bank account, and register with the Ohio Department of Taxation if applicable. An attorney ensures every step is completed correctly and that your governing documents reflect how you actually want your business to operate.`,
  },
  {
    question: `What is the difference between an LLC and a corporation in Delaware County?`,
    answer: `Both LLCs and corporations provide limited liability protection, shielding your personal assets from most business debts and lawsuits. Ohio LLCs (ORC Chapter 1706) are flexible, have pass-through taxation by default, and require less ongoing formality than corporations (ORC Chapter 1701). Corporations have a more rigid structure — board of directors, officers, annual meetings — but are preferred when seeking venture capital, issuing multiple stock classes, or planning a future IPO. Delaware County is home to many professional services firms and tech companies; the right structure depends on your industry, ownership, and growth plans. Our attorney helps you make the right choice.`,
  },
  {
    question: `What is an operating agreement and is it required for an Ohio LLC?`,
    answer: `Ohio does not require a written operating agreement for LLCs, but ORC Chapter 1706 strongly encourages one — and for multi-member LLCs, it is practically essential. An operating agreement defines ownership percentages, profit and loss allocations, management responsibilities, voting rights, member exit procedures, buy-sell provisions, and dissolution terms. Without a written agreement, Ohio's default statutory rules apply, which may conflict with what you and your partners actually intend. In Delaware County's active business environment, where co-founders may have very different expectations, a detailed written agreement prevents costly disputes.`,
  },
  {
    question: `Why is Delaware County experiencing business growth, and what legal needs does it create?`,
    answer: `Delaware County is one of Ohio's fastest-growing counties. Rapid residential development in Powell, Lewis Center, and Sunbury has created strong demand for professional services, healthcare, retail, and technology businesses. Many Columbus-area companies are expanding operations north into Delaware County. This growth creates a wide range of business formation needs: new LLCs for service businesses, professional corporations for licensed practitioners, and holding company structures for real estate investors. Our attorney helps Delaware County entrepreneurs and business owners navigate entity selection, formation, and ongoing business law needs.`,
  },
  {
    question: `What is a statutory agent and why does Ohio require one?`,
    answer: `Ohio Revised Code 1705.06 requires every Ohio LLC to maintain a designated statutory agent — an individual or entity with an Ohio physical address authorized to receive service of legal process and official government notices on the LLC's behalf. Your statutory agent information must be kept current with the Secretary of State. If you move, change agents, or allow your statutory agent's address to lapse, your LLC may miss lawsuits or regulatory correspondence. Jwayyed Law LLC can serve as your statutory agent or assist you in designating a compliant agent.`,
  },
  {
    question: `How do I register for Ohio taxes when starting a new business?`,
    answer: `Ohio businesses that sell taxable goods or services must register with the Ohio Department of Taxation for a vendor's license to collect and remit sales tax. Businesses with employees must register for employer withholding tax and unemployment insurance. Depending on your industry, you may also need local business licenses through Delaware City, Powell, or other municipalities. Our attorney advises new Delaware County business owners on all state and local tax registration and licensing requirements so your business is fully compliant from day one.`,
  },
  {
    question: `Do I need an EIN for my Ohio LLC?`,
    answer: `An Employer Identification Number (EIN), issued by the IRS, is required for Ohio LLCs with more than one member, LLCs with employees, or LLCs electing to be taxed as a corporation or S corporation. Even single-member LLCs benefit from obtaining an EIN — most banks require one to open a business account, and it keeps your Social Security Number off business paperwork. Obtaining an EIN is free through the IRS website and takes only minutes. Our attorney advises all LLC clients to obtain an EIN during the formation process.`,
  },
  {
    question: `Why hire an attorney for business formation rather than doing it myself?`,
    answer: `Online LLC formation services are inexpensive but provide no legal advice. They cannot analyze whether an LLC or corporation is right for your situation, draft a customized operating agreement that protects all members, advise on tax elections, help you structure ownership to minimize liability, or identify industry-specific compliance obligations. In Delaware County's growing and competitive business environment, building on a solid legal foundation matters. Attorney-guided formation is an investment in your business's long-term stability, and the cost is modest compared to fixing problems caused by improper formation.`,
  },
];

export default function BusinessFormationLLCDelawareCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business & LLC Formation Lawyer in Delaware County, Ohio"
        description="Serving Delaware, Powell, Westerville, Dublin, Lewis Center, Sunbury, and surrounding communities with business formation and LLC law."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Business & LLC Formation in Delaware County
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County is one of Ohio&apos;s most rapidly growing counties, with thriving communities in Delaware, Powell, Westerville, Lewis Center, Sunbury, and the northern edges of Dublin. The county attracts small businesses, professional service firms, and technology companies relocating from Columbus, as well as entrepreneurs serving the county&apos;s expanding residential population. Jwayyed Law LLC provides experienced business formation and LLC counsel to Delaware County entrepreneurs under Ohio&apos;s current business statutes, helping you build your new venture on a solid legal foundation.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio LLCs are governed by the Ohio Revised Limited Liability Company Act, ORC Chapter 1706, which replaced the former Chapter 1705 in February 2022. Chapter 1706 modernized Ohio LLC law — offering series LLC capabilities, enhanced flexibility in management structure, and clearer rules on what the operating agreement can and cannot modify. Ohio corporations remain under ORC Chapter 1701. Our attorney explains the differences clearly so you can choose the structure that best serves your specific goals, tax preferences, and ownership arrangement.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              One area where many Delaware County business owners shortchange themselves is the operating agreement. Online formation services provide generic templates that fail to address the specific dynamics of your ownership group — particularly in two- or three-member LLCs where disagreements about management, profit sharing, or exit are common. Our attorney prepares operating agreements that are customized to your business, your co-owners, and your industry, addressing the scenarios most likely to cause conflict and providing clear resolution mechanisms.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County&apos;s professional services sector — including medical practices, law firms, consulting firms, and technology companies — has specific formation needs. Licensed professionals in Ohio may be required to form professional corporations (PCs) or professional LLCs (PLLCs) rather than standard LLCs. Real estate investors benefit from holding company structures that separate properties and limit cross-liability. Our attorney advises on industry-specific requirements and structures business entities to give owners maximum liability protection and operational flexibility.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Ohio business formation is administered through the Ohio Secretary of State, so our attorney can assist Delaware County clients regardless of their specific location. Contact us at{' '}
              <Link href="/contact" className="text-[#b87333] underline hover:opacity-80">our contact page</Link> or call (614) 285-5482 to discuss your business formation needs. Learn more about our{' '}
              <Link href="/business-law" className="text-[#b87333] underline hover:opacity-80">business law practice</Link> for Ohio entrepreneurs and business owners.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
