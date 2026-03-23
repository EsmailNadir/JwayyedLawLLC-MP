import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Business & LLC Formation | Morrow County, Ohio',
  description: 'Business attorney serving Morrow County, Mt. Gilead, Cardington, Marengo, and surrounding Ohio communities. LLC formation, business law, farm LLCs.',
  keywords: ['business lawyer Morrow County', 'LLC formation Mt. Gilead Ohio', 'Morrow County business attorney', 'farm LLC Ohio', 'small business attorney Cardington Ohio'],
  openGraph: {
    title: 'Business & LLC Formation | Morrow County, Ohio',
    url: 'https://www.jjlawohio.com/locations/morrow-county/business-formation-llc-morrow-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
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
    question: `How do I form an LLC in Ohio?`,
    answer: `To form an Ohio LLC, you file Articles of Organization with the Ohio Secretary of State and pay the required filing fee. Ohio LLCs are now governed by ORC Chapter 1706 — the Ohio Revised Limited Liability Company Act, effective February 2022 — which replaced the former Chapter 1705. After filing, you must maintain a statutory agent with an Ohio physical address (ORC 1705.06), prepare a written operating agreement, obtain a federal EIN, and complete required tax registrations. An attorney ensures your formation is properly completed and that your governing documents protect all owners' interests from day one.`,
  },
  {
    question: `Can farmers and agricultural businesses benefit from forming an LLC in Morrow County?`,
    answer: `Yes. Agricultural operations in Morrow County — including crop farms, livestock operations, and agribusinesses — can benefit significantly from LLC formation. An LLC separates the business's debts and liabilities from the personal assets of the farm owners, providing a legal shield that sole proprietorships and informal partnerships do not offer. Under ORC Chapter 1706, farm LLCs can be structured to accommodate multiple family members with different ownership interests and management roles. A well-drafted operating agreement addresses succession planning and ensures the farm can continue operating if an owner passes away or becomes incapacitated.`,
  },
  {
    question: `What is the difference between an LLC and a corporation in Ohio?`,
    answer: `Ohio LLCs (ORC Chapter 1706) provide flexible management, pass-through taxation by default, and less ongoing compliance burden than Ohio corporations (ORC Chapter 1701). Corporations require a formal board of directors, officers, annual meetings, and detailed record-keeping. For most small businesses, retail stores, service companies, and agricultural operations in Morrow County, an LLC offers the best balance of liability protection and operational simplicity. Some businesses — particularly those seeking outside investors or planning significant growth — may prefer a corporate structure. Our attorney explains the trade-offs and helps you choose wisely.`,
  },
  {
    question: `What is an operating agreement and why does my Ohio LLC need one?`,
    answer: `An operating agreement is the internal governance document of your Ohio LLC. Under ORC Chapter 1706, many of the default statutory rules can be modified by agreement — but only if you have a written agreement that says so. For multi-member LLCs in Morrow County, an operating agreement is essential: it specifies how profits and losses are allocated, how decisions are made, who has authority to act on the LLC's behalf, how members can transfer their interests, and what happens when a member wants to leave or passes away. Without one, Ohio's default rules govern — and they may not match what you intended.`,
  },
  {
    question: `What types of businesses commonly form LLCs in rural Ohio counties like Morrow?`,
    answer: `In rural Ohio counties like Morrow, common LLC formations include agricultural and farming operations, small retail stores, service businesses (construction, landscaping, plumbing, electrical), food and hospitality establishments, professional services (accounting, healthcare, consulting), and real estate holding companies. Any small business owner who wants to protect personal assets from business debts and liabilities — which is almost every business owner — can benefit from LLC formation. The process is straightforward, and the liability protection an LLC provides far outweighs the modest cost of proper formation.`,
  },
  {
    question: `What is a statutory agent and why is it required?`,
    answer: `Ohio Revised Code 1705.06 (as incorporated into ORC Chapter 1706) requires every Ohio LLC to maintain a statutory agent — an individual or entity with a physical Ohio address authorized to receive service of legal process and government notices on the LLC's behalf. A P.O. Box is not sufficient. If your statutory agent's information is outdated or incorrect and your LLC is sued, you may miss the deadline to respond and a default judgment may be entered against you. Maintaining a current, valid statutory agent is one of the most basic ongoing compliance obligations for Ohio LLCs.`,
  },
  {
    question: `What ongoing compliance obligations does an Ohio LLC have?`,
    answer: `After formation, Ohio LLCs must: (1) maintain a current statutory agent and update the Secretary of State if the agent changes; (2) file a biennial report with the Ohio Secretary of State (for LLCs registered as foreign entities); (3) maintain proper records including the operating agreement, financial statements, and records of major decisions; (4) keep business and personal finances separate by using a dedicated business bank account; and (5) comply with applicable federal, state, and local tax obligations. Our attorney advises new LLC clients on all of these ongoing requirements so nothing falls through the cracks.`,
  },
  {
    question: `Why should I hire an attorney for business formation in Morrow County?`,
    answer: `Online formation services are inexpensive but limited to processing paperwork. They do not advise you on whether an LLC is the right structure, how to draft an operating agreement that protects your interests, what tax elections are available, how to handle multi-member ownership arrangements, or what licenses and permits apply to your Morrow County business. For agricultural operations, the question of how to structure the business for succession and estate planning purposes requires legal expertise that no online service provides. An attorney-guided formation is an affordable investment that protects your assets and sets your business up for long-term success.`,
  },
];

export default function BusinessFormationLLCMorrowCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business & LLC Formation | Morrow County, Ohio"
        description="Serving Mt. Gilead, Cardington, Marengo, Edison, and surrounding communities with business formation, farm LLCs, and business law."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Business & LLC Formation in Morrow County
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Morrow County is a rural Ohio county north of Columbus, home to Mt. Gilead, Cardington, Marengo, and Edison. Its economy is anchored by agriculture, small retail and service businesses, and an increasing number of residents who commute to Columbus and surrounding metropolitan areas. Whether you are a farmer looking to protect personal assets by formalizing your agricultural operation as an LLC, a small business owner forming a service company, or a professional setting up a practice, Jwayyed Law LLC provides experienced business formation and LLC counsel for Morrow County clients.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio LLCs are governed by the Ohio Revised Limited Liability Company Act, ORC Chapter 1706, which took effect in February 2022 and replaced the former Chapter 1705. Chapter 1706 is a significant modernization — it introduces series LLCs (allowing one entity to separate assets and liabilities across distinct business activities), provides more flexible management structures, and clarifies what can be customized in an operating agreement versus what is mandatory by law. Morrow County farm families can use these features to separate farming operations from other business activities within a single LLC structure.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              One of the most valuable things any Morrow County business owner can do is work with an attorney to prepare a customized operating agreement. Generic online templates do not address the specific dynamics of your ownership and management arrangement. For family farming operations, the operating agreement should address what happens to the farm when an owner passes away, how family members can join or leave the business, and how succession will be handled across generations. For service businesses with two or more owners, it should specify exactly how profits are divided, who makes decisions, and how disputes are resolved.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Beyond entity formation, Morrow County business owners benefit from legal guidance on contracts with customers and suppliers, employment agreements if they have staff, commercial lease review, and ongoing compliance with Ohio&apos;s tax registration and reporting requirements. For farm operations with specialized needs, our attorney can also address issues related to land use, easements, and agricultural liability.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Ohio business formation is handled through the Ohio Secretary of State, so Jwayyed Law LLC can assist Morrow County clients regardless of location. Contact us at{' '}
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
