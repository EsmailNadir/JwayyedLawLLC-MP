import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Business & LLC Formation | Greene County, Ohio',
  description: 'Business attorney serving Greene County, Xenia, Fairborn, Beavercreek, Yellow Springs, and surrounding Ohio communities. LLC formation, business law.',
  keywords: ['business lawyer Greene County', 'LLC formation Xenia Ohio', 'Greene County business attorney', 'LLC formation Fairborn Ohio', 'small business attorney Beavercreek Ohio'],
  openGraph: {
    title: 'Business & LLC Formation | Greene County, Ohio',
    url: 'https://www.jjlawohio.com/locations/greene-county/business-formation-llc-greene-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/locations/greene-county/business-formation-llc-greene-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'Business & LLC Formation - Greene County', href: '/locations/greene-county/business-formation-llc-greene-county' },
];

const faqs = [
  {
    question: `How do I form an LLC in Ohio?`,
    answer: `To form an Ohio LLC, you file Articles of Organization with the Ohio Secretary of State and pay the required filing fee. Your LLC is governed by Ohio Revised Code Chapter 1706 — the Ohio Revised Limited Liability Company Act, effective February 2022. After formation, you must maintain a statutory agent with an Ohio physical address (ORC 1705.06), adopt a written operating agreement, obtain a federal EIN, and complete any required tax registrations. An attorney ensures all steps are completed correctly and that your LLC's governing documents are tailored to your specific business and ownership structure.`,
  },
  {
    question: `What business opportunities exist near Wright-Patterson AFB in Greene County?`,
    answer: `Wright-Patterson Air Force Base is one of the largest employers in Ohio and generates substantial business opportunity in Greene County. Defense contractors, technology consulting firms, engineering companies, logistics providers, and professional service businesses all operate in the WPAFB corridor spanning Fairborn and Beavercreek. Many of these businesses must comply with federal contracting requirements that necessitate formal legal structures, operating agreements, and clear liability protection. Our attorney helps Greene County defense and technology businesses form proper entities and maintain the governance documentation federal contractors require.`,
  },
  {
    question: `What is the difference between an LLC and a corporation in Ohio?`,
    answer: `Ohio LLCs (governed by ORC Chapter 1706) offer flexible management, pass-through taxation by default, and simpler ongoing compliance than Ohio corporations (ORC Chapter 1701). Corporations require a board of directors, officers, annual meetings, and formal record-keeping. Many defense contractors and technology companies in the WPAFB area choose corporations or S corporations for specific tax reasons or investor requirements. Small service businesses and professional practices in Xenia and Yellow Springs typically prefer LLCs for simplicity and flexibility. Our attorney analyzes your specific situation and recommends the right structure.`,
  },
  {
    question: `What is an operating agreement and do I need one for my Ohio LLC?`,
    answer: `An operating agreement is the internal governance document of your Ohio LLC. While Ohio law does not mandate a written operating agreement, ORC Chapter 1706 makes clear that absent contrary provisions in an agreement, statutory defaults apply — and those defaults may not reflect your intentions. A customized operating agreement specifies ownership percentages, profit and loss allocations, management authority, voting rights, membership transfer restrictions, buy-sell provisions, and dissolution procedures. For multi-member LLCs in Greene County's active business community, a written operating agreement is essential to prevent disputes and protect all owners.`,
  },
  {
    question: `What is a statutory agent and how do I comply with Ohio's requirement?`,
    answer: `Ohio Revised Code 1705.06 requires every Ohio LLC to designate a statutory agent — an individual or entity with a physical Ohio address authorized to receive legal process and government notices on the LLC's behalf. The agent's information must be kept current with the Ohio Secretary of State. If you change your business address or replace your statutory agent and fail to update the state's records, your LLC may miss a lawsuit or miss critical regulatory notices. Jwayyed Law LLC can serve as your statutory agent or advise you on selecting and maintaining a compliant agent.`,
  },
  {
    question: `How does Ohio's LLC law (ORC Chapter 1706) differ from the old law?`,
    answer: `The Ohio Revised Limited Liability Company Act (ORC Chapter 1706), effective February 2022, replaced the former Chapter 1705 and introduced several important changes. Chapter 1706 introduced series LLCs — allowing a single LLC to have separate series with distinct assets, liabilities, and members. It also clarified what provisions of the operating agreement are mandatory and which are default rules that can be modified or waived. Management structures are more flexible, and the act aligns more closely with modern LLC practice. Businesses formed before 2022 automatically transitioned to Chapter 1706 governance. Our attorney helps clients understand and take advantage of these modern provisions.`,
  },
  {
    question: `Do I need an EIN for my new Ohio LLC?`,
    answer: `A federal Employer Identification Number (EIN) is required for multi-member LLCs, LLCs with employees, and LLCs that elect corporate tax treatment. Even single-member LLCs with no employees should obtain an EIN — most banks require one to open a business bank account, and it protects your Social Security Number. For defense contractors and technology companies in Greene County, an EIN is particularly important for federal contracting purposes. Obtaining an EIN is free and can be completed online through the IRS website in minutes.`,
  },
  {
    question: `Why should I work with an attorney on business formation?`,
    answer: `Online formation services are inexpensive but provide no legal analysis or advice. They cannot evaluate whether an LLC, S corporation, or C corporation is right for your Greene County defense contracting or technology business, draft a customized operating agreement that protects your interests, advise on federal contracting compliance requirements, or identify industry-specific licensing and regulatory obligations. Attorney-guided business formation is an investment that protects your personal assets, minimizes the risk of disputes among owners, and ensures your business structure is well-matched to your long-term goals. For businesses operating in the specialized WPAFB contracting environment, professional legal guidance at the formation stage is especially valuable.`,
  },
];

export default function BusinessFormationLLCGreeneCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business & LLC Formation | Greene County, Ohio"
        description="Serving Xenia, Fairborn, Beavercreek, Yellow Springs, and surrounding communities near Wright-Patterson AFB with business formation and LLC law."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Business & LLC Formation in Greene County
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Greene County&apos;s economy is shaped in significant part by the proximity of Wright-Patterson Air Force Base — one of the largest military installations in the United States — which supports a robust community of defense contractors, technology companies, engineering firms, and professional service businesses in Fairborn and Beavercreek. Beyond the defense sector, Greene County&apos;s communities of Xenia, Yellow Springs, and Centerville support a diverse small business economy. Jwayyed Law LLC provides experienced business formation and LLC counsel for Greene County entrepreneurs across all industries.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio LLCs are governed by the Ohio Revised Limited Liability Company Act, ORC Chapter 1706, effective February 2022. Chapter 1706 represents a significant modernization of Ohio LLC law — introducing series LLCs, clarifying operating agreement modification rights, and providing more flexible management options. Ohio corporations remain under ORC Chapter 1701. For businesses in Greene County&apos;s defense contracting sector, the choice between LLC, S corporation, and C corporation often has significant tax and federal compliance implications. Our attorney analyzes your specific situation and recommends the right structure.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Operating agreements are one of the most important — and most frequently overlooked — elements of proper business formation. Without a written, customized operating agreement, your LLC is governed by the default rules of ORC Chapter 1706, which may not reflect your ownership arrangement or management intentions. In multi-member LLCs, disputes over profit sharing, decision-making authority, and exit procedures are common causes of business failure. A well-drafted operating agreement addresses these issues before they arise, protecting all owners and providing a clear framework for running the business.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Greene County entrepreneurs also benefit from legal guidance on contracts — vendor agreements, customer service contracts, employment agreements, non-disclosure agreements, and non-compete provisions all require careful legal drafting to be enforceable in Ohio. For defense contractors operating in Fairborn and Beavercreek, proper documentation of business structure and governance may also be a compliance requirement for federal contract eligibility.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Ohio business formation is handled through the Ohio Secretary of State, so our attorney can assist Greene County clients wherever they are located. Contact us at{' '}
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
