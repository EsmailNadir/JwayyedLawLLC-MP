import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Partnership Disputes Lawyer in Ohio | ORC 1776 | Columbus | Jwayyed Law LLC',
  description: 'Ohio partnership disputes attorney handling fiduciary breaches, profit-sharing conflicts, judicial dissolution, and partner expulsion under ORC Chapter 1776. Columbus, Franklin County. Call (614) 285-5482.',
  keywords: ['partnership disputes lawyer Columbus OH', 'Ohio partnership dispute attorney', 'ORC 1776 attorney', 'partnership dissolution Ohio', 'fiduciary duty partner Ohio', 'Franklin County partnership attorney'],
  openGraph: {
    title: 'Partnership Disputes Lawyer in Ohio | ORC 1776 | Columbus | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/business/partnership-disputes',
  },
  alternates: { canonical: '/business/partnership-disputes' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Partnership Disputes', href: '/business/partnership-disputes' },
];

const faqs = [
  {
    question: `What law governs partnerships in Ohio?`,
    answer: `General partnerships in Ohio are governed by the Ohio Uniform Partnership Act, codified at Ohio Revised Code (ORC) Chapter 1776. Limited partnerships are governed separately under ORC Chapter 1782. These statutes set default rules for partner rights, duties, and dissolution procedures that apply whenever a partnership agreement is silent on a particular issue. A written partnership agreement can modify many of these defaults, but it cannot eliminate core fiduciary duties owed between partners without the express consent of all affected partners.`,
  },
  {
    question: `What are the most common types of partnership disputes in Ohio?`,
    answer: `The most common partnership disputes Ohio attorneys handle include: (1) profit-sharing and capital account disagreements, where partners dispute how earnings are allocated or how contributions are valued; (2) breach of fiduciary duty, including a managing partner's self-dealing or diverting business opportunities; (3) management deadlock, where equal partners cannot agree on business direction; (4) wrongful dissociation, where one partner exits in violation of the partnership agreement; (5) expulsion of a partner, which must comply with procedures in the agreement or ORC 1776.51; and (6) disputes over the valuation of a departing partner's interest. Each type requires different legal strategies and remedies.`,
  },
  {
    question: `What fiduciary duties do Ohio partners owe each other?`,
    answer: `Under ORC 1776.35, each general partner owes the partnership and fellow partners two core fiduciary duties: the duty of loyalty and the duty of care. The duty of loyalty requires partners to account for and hold as trustee any property, profit, or benefit derived from the conduct of partnership business; to refrain from dealing with the partnership as an adverse party; and to refrain from competing with the partnership before dissolution. The duty of care requires partners to act in the same manner as a reasonably prudent person in a like position under similar circumstances. Ohio courts have allowed partnership agreements to limit—but not entirely eliminate—these duties.`,
  },
  {
    question: `Can a court judicially dissolve a partnership in Ohio?`,
    answer: `Yes. Under ORC 1776.66, a partner may petition an Ohio Common Pleas Court for judicial dissolution if: another partner has engaged in wrongful conduct that adversely affects the partnership business; another partner has willfully or persistently breached the partnership agreement or acted in a manner making it not reasonably practicable to carry on business in partnership with that partner; or it is not otherwise reasonably practicable to carry on the partnership business in conformity with the partnership agreement. Courts have broad equitable authority to fashion remedies, including ordering a buyout in lieu of dissolution to avoid unnecessary business destruction.`,
  },
  {
    question: `What is a buy-sell agreement and why does it matter in partnership disputes?`,
    answer: `A buy-sell agreement (sometimes called a buyout agreement) is a contractual provision — either within the partnership agreement itself or as a separate document — that governs what happens to a partner's ownership interest when triggering events occur, such as death, disability, retirement, divorce, or a desire to exit. A well-drafted buy-sell agreement sets a valuation method (fixed price, formula, or independent appraisal), payment terms, and right-of-first-refusal provisions. Without such an agreement, a departing partner under ORC 1776.54 is entitled to a buyout at the greater of liquidation value or the value based on a sale of the entire business as a going concern, which can create significant valuation disputes litigated in Common Pleas Court.`,
  },
  {
    question: `Can a partner bring a lawsuit on behalf of the partnership?`,
    answer: `Yes. Ohio law permits derivative actions, where a partner sues on behalf of the partnership for wrongs done to the partnership itself (as opposed to a direct claim for wrongs done to the individual partner). Derivative suits are governed by Ohio Rules of Civil Procedure Rule 23.1 and require the plaintiff-partner to allege that the partnership has failed or refused to pursue the claim on its own. Common derivative claims include breach of fiduciary duty by a managing partner, misappropriation of partnership assets, and improper self-dealing. An attorney can help determine whether a claim should be brought directly or derivatively, as the distinction affects remedies and standing.`,
  },
  {
    question: `How are damages calculated in Ohio partnership disputes?`,
    answer: `Damages in Ohio partnership disputes depend on the type of wrong. For breach of fiduciary duty involving self-dealing or misappropriation, Ohio courts may order disgorgement of profits the wrongdoer improperly retained. For breach of the partnership agreement, the injured partner may recover expectation damages — the value they would have received had the agreement been performed. For wrongful dissolution, ORC 1776.80 entitles partners to damages for loss caused by the wrongful act, plus the right to continue the business. Courts may also award attorney fees where the partnership agreement so provides or where a statutory basis exists. Punitive damages may be available for fraud or egregious misconduct.`,
  },
  {
    question: `Should I try mediation before litigating a partnership dispute?`,
    answer: `In many Ohio partnership disputes, mediation or arbitration is worth exploring before filing in court, for several reasons. First, partnership disputes often involve ongoing business relationships that litigation can destroy permanently. Second, Franklin County Common Pleas Court's business docket and courts in Montgomery, Hamilton, and other counties may schedule complex business cases months out. Third, many partnership agreements include mandatory arbitration clauses — meaning litigation may not even be an option. An attorney can review the partnership agreement, assess whether alternative dispute resolution is required or advisable, and represent you effectively in either setting.`,
  },
];

export default function PartnershipDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Partnership Disputes Lawyer"
        description="Experienced representation for fiduciary breaches, profit-sharing conflicts, partner expulsion, and judicial dissolution under ORC Chapter 1776."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Partnership Disputes in Ohio: What You Need to Know
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A business partnership can be one of the most valuable professional relationships you have — or one of the most contentious. When partners disagree over how profits are shared, how decisions are made, or whether one partner has violated their duties to the others, the consequences can threaten the entire enterprise. Ohio\'s Uniform Partnership Act, codified at <strong>ORC Chapter 1776</strong>, provides a detailed legal framework governing the rights and obligations of general partners. Limited partnerships are separately addressed under <strong>ORC Chapter 1782</strong>. At Jwayyed Law LLC, we represent both individual partners and partnerships in disputes across Columbus and central Ohio, helping clients understand their rights, pursue remedies, and — when possible — preserve the business relationship.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Partnership disputes rarely arise in isolation. A single triggering event — an unexpected exit, a discovered financial irregularity, or a major strategic disagreement — frequently reveals underlying tensions that have been building for months or years. What begins as a conversation about profit distributions can escalate into claims of breach of fiduciary duty, demands for an accounting, and ultimately litigation seeking judicial dissolution. Understanding the full legal landscape before taking action is critical. A step taken without legal advice — such as unilaterally transferring partnership assets, locking a co-partner out of business accounts, or purporting to expel a partner without following the agreement\'s procedures — can create serious liability even for the aggrieved party.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio law imposes two primary fiduciary duties on general partners under <strong>ORC 1776.35</strong>: the duty of loyalty and the duty of care. The duty of loyalty requires each partner to account for and hold as trustee any profit derived from partnership business, refrain from competing with the partnership before dissolution, and avoid self-dealing transactions without the consent of partners. The duty of care requires partners to act as a reasonably prudent person would in a similar position. Violations of these duties — such as diverting a business opportunity to a separate venture, paying oneself excessive compensation, or failing to disclose a material conflict of interest — can give rise to claims for disgorgement of profits, compensatory damages, and in egregious cases, punitive damages.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When a partnership relationship has deteriorated beyond repair, Ohio courts have authority to order judicial dissolution. Under <strong>ORC 1776.66</strong>, a partner may petition the Common Pleas Court for dissolution if another partner has engaged in wrongful conduct affecting the partnership business, persistently breached the partnership agreement, or made it not reasonably practicable to carry on the business. Ohio courts, however, will often consider ordering a buyout in lieu of dissolution — particularly where the business is profitable and dissolution would destroy value unnecessarily. Litigating or negotiating dissolution requires careful attention to partnership agreement provisions, valuation methodologies, and the equitable arguments available to each side. Our firm has the experience to guide clients through this process in Franklin County and throughout Ohio.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Types of Partnership Disputes We Handle
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              Our firm handles the full spectrum of partnership disputes, including:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Profit-sharing and capital account disputes:</strong> Disagreements over how earnings are allocated, how capital contributions are valued, and whether draws or distributions comply with the partnership agreement.</li>
              <li><strong>Breach of fiduciary duty claims:</strong> Claims that a managing partner engaged in self-dealing, diverted business opportunities, competed against the partnership, or concealed material information from co-partners.</li>
              <li><strong>Partner expulsion and wrongful dissociation:</strong> Disputes about whether a partner was properly expelled under the agreement and <strong>ORC 1776.51</strong>, or whether a partner\'s exit constituted wrongful dissociation triggering liability under <strong>ORC 1776.80</strong>.</li>
              <li><strong>Accounting and books-and-records access:</strong> Demands for full accountings and inspection of partnership financial records under <strong>ORC 1776.34</strong>, where a partner suspects financial misconduct.</li>
              <li><strong>Buy-sell agreement enforcement and valuation:</strong> Disputes over the triggering of buy-sell provisions and the valuation of a departing partner\'s interest under the applicable formula or appraisal process.</li>
              <li><strong>Judicial dissolution and winding up:</strong> Petitions under <strong>ORC 1776.66</strong> and the subsequent winding-up process under <strong>ORC 1776.69</strong> through <strong>1776.78</strong>.</li>
              <li><strong>Derivative actions:</strong> Suits brought on behalf of the partnership against a wrongdoing partner or third party under Ohio Rules of Civil Procedure Rule 23.1.</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              The Ohio Litigation Process for Partnership Disputes
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              Partnership disputes in Ohio are typically filed in the Common Pleas Court of the county where the partnership\'s principal office is located. Franklin County Common Pleas Court handles a significant volume of business disputes from Columbus-area partnerships. Before filing, counsel will usually send a formal demand letter identifying the alleged breach, the requested remedy, and a deadline to respond. Many disputes settle at this stage or through structured mediation. If the partnership agreement contains an arbitration clause, the dispute may need to go to the American Arbitration Association (AAA) or JAMS rather than a court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Where litigation is required, the case proceeds through the standard Ohio civil litigation phases: complaint and answer, discovery (including depositions of partners and financial record reviews), pre-trial motions, and — if no settlement is reached — trial. Partnership cases frequently involve forensic accounting to reconstruct financial records and quantify damages. Courts may also issue temporary restraining orders (TROs) or preliminary injunctions under Ohio Rule of Civil Procedure 65 to preserve the status quo while litigation is pending — for example, to prevent a departing partner from taking confidential client lists or redirecting payments away from the partnership. See our page on <Link href="/business/business-litigation" className="text-[#b87333] underline hover:opacity-80">Ohio business litigation</Link> for more about the full litigation process.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              How Jwayyed Law LLC Can Help
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Whether you are a partner who has been wronged or a partner facing accusations, Jwayyed Law LLC provides strategic, knowledgeable representation at every stage. We start by carefully reviewing the partnership agreement — because the agreement is the cornerstone of every dispute — and then assess claims under ORC Chapter 1776 and applicable Ohio case law. We help clients understand the realistic range of outcomes, pursue informal resolution where possible, and litigate aggressively when necessary to protect their financial interests and legal rights. Our practice also extends to drafting and reviewing partnership agreements and buy-sell provisions to help prevent disputes before they arise. Related services include <Link href="/business/business-litigation" className="text-[#b87333] underline hover:opacity-80">business litigation</Link> and <Link href="/civil/breach-of-contract" className="text-[#b87333] underline hover:opacity-80">breach of contract claims</Link>. Learn more about our full range of <Link href="/business" className="text-[#b87333] underline hover:opacity-80">Ohio business law services</Link>.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Call <a href="tel:6142855482" className="text-[#b87333] underline hover:text-[#a06828]">(614) 285-5482</a> or <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">schedule a consultation online</Link>. Learn more about our <Link href="/business" className="text-[#b87333] underline hover:text-[#a06828]">business law practice</Link>.
            </p>

            <LocationsWeServe title="Business Law" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/business/shareholder-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Shareholder Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Minority shareholder rights and corporate disputes</span>
              </Link>
              <Link href="/business/business-litigation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Business Litigation</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Commercial disputes and business lawsuits</span>
              </Link>
              <Link href="/business/business-dissolution" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Business Dissolution</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Winding down and dissolving an Ohio business</span>
              </Link>
              <Link href="/business/contract-drafting-review" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Contract Drafting & Review</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Business contracts, NDAs, and vendor agreements</span>
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
