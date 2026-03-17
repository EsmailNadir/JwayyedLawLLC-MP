import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Ohio Business Compliance Lawyer | ORC 1705, 1701 | Columbus | Jwayyed Law LLC',
  description: 'Ohio business compliance attorney helping LLCs and corporations meet Ohio Secretary of State requirements, maintain corporate formalities, register for the CAT tax, and avoid piercing the corporate veil. Call (614) 285-5482.',
  keywords: ['business compliance lawyer Columbus OH', 'Ohio LLC compliance attorney', 'corporate formalities Ohio', 'Ohio Secretary of State filing attorney', 'Ohio CAT tax attorney', 'pierce corporate veil Ohio', 'ORC 1705 attorney'],
  openGraph: {
    title: 'Ohio Business Compliance Lawyer | ORC 1705, 1701 | Columbus | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/business/business-compliance',
  },
  alternates: { canonical: '/business/business-compliance' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Business Compliance', href: '/business/business-compliance' },
];

const faqs = [
  {
    question: `What are the ongoing filing requirements for Ohio LLCs and corporations?`,
    answer: `Ohio LLCs governed by ORC Chapter 1705 (and soon the Ohio LLC Act, ORC Chapter 1706) and corporations governed by ORC Chapter 1701 do not currently file annual reports with the Ohio Secretary of State — Ohio eliminated mandatory annual report filings for existing entities. However, businesses must still: (1) maintain a valid statutory agent (registered agent) with a physical Ohio address at all times — failure to do so can result in the Secretary of State canceling the entity's authority to do business; (2) file an updated agent statement within 30 days if the statutory agent changes (Form 521 for LLCs, Form 521 for corporations); (3) file amendments if the company name, principal office, or articles/operating agreement provisions change; and (4) file biennial reports if required for certain professional associations. Out-of-state entities doing business in Ohio must also maintain their foreign qualification with the Secretary of State. Failing to maintain these requirements can result in administrative dissolution.`,
  },
  {
    question: `What corporate formalities must Ohio corporations and LLCs observe?`,
    answer: `Corporate formalities are the internal governance practices that demonstrate the entity is operating as a legitimate separate legal person — not merely as an alter ego of its owners. For Ohio corporations under ORC Chapter 1701, formalities include: holding annual shareholder meetings (or obtaining written consents in lieu of meetings) under ORC 1701.40; holding board of directors meetings for major decisions; maintaining written minutes of all meetings and formal written resolutions for significant corporate actions; issuing stock certificates or maintaining a stock ledger; and keeping the corporate records (minutes book, articles, bylaws, financial records) current and accessible. For Ohio LLCs under ORC Chapter 1705, the formalities are somewhat less rigorous but still important: the operating agreement should govern major decisions, member and manager actions on significant matters should be documented in written resolutions, and financial records should be maintained separately from member personal finances. These practices are not just procedural — they are the foundation of the liability protection the business form provides.`,
  },
  {
    question: `What is "piercing the corporate veil" and how do Ohio courts analyze it?`,
    answer: `Piercing the corporate veil is the legal doctrine under which Ohio courts disregard the separate legal existence of a corporation or LLC and hold the owners personally liable for the entity's debts or obligations. Ohio courts apply a two-prong test: (1) control — the shareholder or member must so dominate the entity that it has no separate mind, will, or existence of its own (factors include commingling of funds, failure to observe formalities, undercapitalization, using the entity to pay personal expenses, and treating the entity as a personal bank account); and (2) improper conduct — the control must have been used to commit fraud, illegality, or some other improper act that caused harm to the plaintiff. Both prongs must be established. The strongest protection against veil-piercing is consistent adherence to corporate formalities: maintaining separate bank accounts, holding meetings, documenting decisions, and never treating the business as a personal financial instrument.`,
  },
  {
    question: `Does Ohio require businesses to register for the Commercial Activity Tax (CAT)?`,
    answer: `Ohio's Commercial Activity Tax (CAT) is a business privilege tax imposed on the gross receipts of businesses doing business in Ohio. Any person or entity with Ohio taxable gross receipts of $150,000 or more in a calendar year must register and file with the Ohio Department of Taxation. Businesses with receipts below $150,000 are exempt from the CAT (the threshold was raised from $150,000 effective 2024, and the first $3 million in receipts is also now excluded from the CAT base under 2023 Ohio legislation). Registration is done through the Ohio Business Gateway. Businesses must also register for a Vendor's License if they sell taxable goods or services subject to Ohio sales tax. Failure to register and remit required taxes exposes Ohio businesses to back taxes, interest, and civil penalties administered by the Ohio Department of Taxation.`,
  },
  {
    question: `What business licenses and permits does my Ohio company need?`,
    answer: `Licensing requirements in Ohio depend on your business type, industry, and location. At the state level, many professional services are licensed by Ohio regulatory boards — examples include attorneys (Supreme Court of Ohio), physicians (State Medical Board of Ohio), contractors (Ohio Construction Industry Licensing Board), real estate brokers (Ohio Division of Real Estate), and many others. Ohio also requires a Vendor's License for businesses selling taxable goods or taxable services. At the local level, most Ohio cities and counties require business registration and may impose local business income taxes — Columbus's city income tax, for example, applies to business net profits. Some industries face additional federal licensing (alcohol, firearms, and others). A compliance audit conducted by an attorney can identify all applicable licensing requirements and help you get into — and stay in — full compliance.`,
  },
  {
    question: `What are the employment law compliance obligations for Ohio employers?`,
    answer: `Ohio employers must navigate a layered set of employment law requirements: (1) Minimum wage — ORC Chapter 4111 sets Ohio's minimum wage, which is higher than the federal minimum and adjusts annually; (2) Wage payment — ORC Chapter 4113 governs timing of paychecks and permissible deductions; (3) Workers' compensation — Ohio requires most employers to participate in the Ohio workers' compensation system or obtain approval as a self-insurer under ORC Chapter 4123; (4) Unemployment insurance — Ohio employers must register with the Ohio Department of Job and Family Services and pay state unemployment taxes under ORC Chapter 4141; (5) Anti-discrimination laws — the Ohio Civil Rights Act (ORC Chapter 4112) prohibits discrimination in employment based on race, color, religion, sex, national origin, disability, age (40 and older), and ancestry; (6) Posting requirements — mandatory notices (minimum wage, workers' comp, OSHA, etc.) must be posted in the workplace. Failure to comply with these requirements exposes Ohio employers to government investigations, civil lawsuits, and significant financial penalties.`,
  },
  {
    question: `What is a compliance audit and why would my Ohio business need one?`,
    answer: `A compliance audit is a systematic review of your business's legal obligations across all relevant areas — corporate governance, tax registration, licensing, employment law, contract compliance, and industry-specific regulations — to identify gaps and areas of exposure before they become enforcement actions or lawsuits. Ohio businesses benefit most from compliance audits at several inflection points: when the business is starting up (to ensure proper initial compliance); when the business grows past key thresholds (new employees triggering employment law obligations, revenue thresholds triggering tax registration); when ownership or management changes; after a significant contract or transaction; and periodically as ongoing maintenance. An attorney-led compliance audit not only identifies issues but also provides attorney-client privilege protection for the findings, shielding sensitive compliance communications from disclosure in subsequent litigation.`,
  },
  {
    question: `What is Ohio's statutory agent requirement and what happens if I fail to maintain one?`,
    answer: `Every Ohio LLC and corporation — domestic or foreign — must at all times maintain a statutory agent (also called a registered agent) with a physical street address in Ohio, per ORC 1705.06 for LLCs and ORC 1701.07 for corporations. The statutory agent is the person or entity designated to accept legal process (lawsuits, official government correspondence) on behalf of the company. Using a P.O. Box is not permitted for the agent's address. If a statutory agent resigns or their information becomes outdated and the company fails to update it within 30 days (by filing Form 521 with the Ohio Secretary of State), the Secretary of State may cancel the entity's authority to do business in Ohio — leaving owners personally exposed to claims that would otherwise be limited to the entity. A business law attorney can serve as statutory agent or help businesses establish a compliant registered agent arrangement.`,
  },
];

export default function BusinessCompliancePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Business Compliance Lawyer"
        description="Helping Ohio LLCs and corporations maintain corporate formalities, meet Secretary of State requirements, manage tax registrations, and protect against liability."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Business Compliance in Ohio: What Every LLC and Corporation Must Know
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When Ohio business owners form an LLC or corporation, they often focus intensely on the <Link href="/business/business-formation" className="text-[#b87333] underline hover:text-[#a06828]">formation process</Link> — drafting operating agreements, filing articles of organization or incorporation, and opening bank accounts. What many do not fully appreciate is that compliance is not a one-time event at formation; it is an ongoing obligation that persists for the entire life of the business. Ohio LLCs are primarily governed by <strong>ORC Chapter 1705</strong> (with the newer Ohio LLC Act at <strong>ORC Chapter 1706</strong> now available for new formations), while Ohio corporations operate under <strong>ORC Chapter 1701</strong>. Both statutory frameworks impose continuing obligations — maintaining a valid statutory agent, observing corporate formalities, keeping financial records, and complying with tax registration requirements — the neglect of which can have serious consequences ranging from administrative dissolution to personal liability for owners. Business compliance is a critical component of our <Link href="/business" className="text-[#b87333] underline hover:text-[#a06828]">Ohio business law services</Link>. At Jwayyed Law LLC, we help Ohio businesses understand and meet their compliance obligations, protecting the liability shield that is the primary reason to operate as an LLC or corporation in the first place. For more on choosing the right entity type, see our blog post on <Link href="/our-law-firm/blog/starting-business-ohio-llc-vs-corporation" className="text-[#b87333] underline hover:text-[#a06828]">starting a business in Ohio: LLC vs. corporation</Link>.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              One of the most significant risks of compliance failure is the doctrine of "piercing the corporate veil." Under Ohio law, courts can disregard the separate legal existence of an LLC or corporation — holding owners personally liable for the entity's debts — when owners have used the entity as an alter ego: commingling personal and business funds, failing to observe formalities, keeping the entity inadequately capitalized, or using business assets for personal expenses without proper documentation. Ohio courts apply a two-prong test requiring both a showing of domination and control and improper conduct. The practical consequence is stark: everything that proper compliance protects — homes, savings accounts, personal assets — becomes exposed when the veil is pierced. Consistent corporate governance is the best protection: holding meetings (or documenting written consents), maintaining separate accounts, documenting major decisions in writing, and never using the business as a personal financial instrument.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's Commercial Activity Tax (CAT) is a compliance obligation that catches many small business owners off guard. Imposed by the Ohio Department of Taxation on gross receipts of businesses doing business in Ohio, the CAT requires registration through the Ohio Business Gateway when a business exceeds applicable thresholds (effective with 2023 tax year legislation, the first $3 million in taxable gross receipts is excluded from the CAT base, and businesses with total receipts below $150,000 are generally exempt). In addition to the CAT, Ohio businesses that sell taxable goods or services must obtain a Vendor's License and collect and remit Ohio sales tax. Ohio businesses with employees must also register with the Ohio Department of Job and Family Services for unemployment insurance purposes and comply with Ohio workers' compensation requirements under <strong>ORC Chapter 4123</strong>. Failure to properly register and remit taxes creates back-tax liability, interest, and civil penalties that can far exceed the cost of getting it right from the start.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Employment law compliance is among the most complex ongoing obligations for Ohio businesses with employees. The Ohio Civil Rights Act, <strong>ORC Chapter 4112</strong>, prohibits employment discrimination based on race, color, religion, sex, national origin, disability, age, and ancestry — and applies to employers with four or more employees (broader coverage than federal Title VII). Ohio's Wage Payment Act, <strong>ORC Chapter 4113</strong>, governs the timing of paychecks and permissible deductions, while <strong>ORC Chapter 4111</strong> governs minimum wage (currently indexed annually to inflation). Beyond these statutes, Ohio employers must maintain required workplace postings, provide proper workers' compensation coverage, and comply with applicable federal employment laws (FMLA, ADA, FLSA). Payroll misclassification — treating employees as independent contractors — is one of the most audited areas by both Ohio and federal tax authorities and can expose businesses to substantial back-tax liability and civil lawsuits.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Key Ohio Business Compliance Obligations by Area
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Statutory agent maintenance:</strong> All Ohio LLCs (ORC 1705.06) and corporations (ORC 1701.07) must maintain a valid statutory agent with a physical Ohio address at all times; updates must be filed within 30 days of any change via Form 521 with the Ohio Secretary of State.</li>
              <li><strong>Entity amendments:</strong> Changes to company name, principal office address, articles of incorporation, or articles of organization must be filed with the Secretary of State; unauthorized amendments can create confusion about the entity's legal status and expose it to challenge.</li>
              <li><strong>Corporate formalities:</strong> Annual meetings (or written consents), board and member resolutions documenting major decisions, updated officer and director lists, and maintenance of the minutes book under ORC 1701.37 and 1705.22.</li>
              <li><strong>Tax registration:</strong> Ohio CAT registration through the Ohio Business Gateway when applicable thresholds are met; Vendor's License for taxable retail sales; Ohio employer withholding registration; local municipal income tax registration (Columbus, for example, imposes income tax on business net profits under Columbus City Code).</li>
              <li><strong>Professional licensing:</strong> State-specific professional licenses maintained in good standing; license renewals filed timely with the applicable Ohio regulatory board; supervision compliance for licensed professionals employing unlicensed staff.</li>
              <li><strong>Employment law compliance:</strong> Compliance with ORC Chapters 4111, 4112, and 4113; workers' compensation coverage under ORC Chapter 4123; mandatory workplace postings; proper I-9 verification for new hires; written employment policies that do not inadvertently create contractual obligations.</li>
              <li><strong>Contract compliance:</strong> Ongoing review of material contracts to ensure obligations are being met and renewal/notice deadlines are tracked; updating standard form contracts when Ohio law changes.</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              How Jwayyed Law LLC Can Help with Business Compliance
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              Many Ohio business owners do not discover compliance gaps until they become problems — a lawsuit exposes the fact that formalities were never observed, a tax audit reveals years of unregistered liability, or a contract dispute reveals that notice deadlines were missed. Proactive legal guidance is substantially less expensive than reactive litigation. Our firm conducts compliance audits that systematically review your entity's governance records, tax registrations, licensing status, employment practices, and contract obligations. We identify gaps, prioritize the most significant risks, and provide a practical action plan for remediation.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We also provide ongoing compliance counsel to Ohio businesses at key growth stages: when the business hires its first employees, when it crosses revenue thresholds triggering new tax obligations, when ownership changes hands, and when the business takes on significant new contracts or enters new markets. Related services include <Link href="/business/llc-formation" className="text-[#b87333] underline hover:text-[#a06828]">Ohio LLC formation</Link> and <Link href="/business/contract-drafting-review" className="text-[#b87333] underline hover:text-[#a06828]">contract drafting and review</Link>. <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">Contact Jwayyed Law LLC</Link> to schedule a compliance consultation.
            </p>

            <LocationsWeServe title="Business Law" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/business/business-formation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Business Formation</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Start your Ohio business with the right legal structure</span>
              </Link>
              <Link href="/business/llc-formation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">LLC Formation</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Form an Ohio LLC under ORC Chapter 1706</span>
              </Link>
              <Link href="/business/contract-drafting-review" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Contract Drafting & Review</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Ensure your business contracts meet Ohio legal requirements</span>
              </Link>
              <Link href="/business/business-dissolution" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Business Dissolution</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Properly close your Ohio LLC or corporation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
