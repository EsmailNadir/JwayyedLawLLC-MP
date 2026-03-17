import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business Dissolution Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio business dissolution attorney helping you close your business properly. Skilled representation for business dissolution in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['business dissolution lawyer Columbus OH', 'business dissolution attorney Ohio', 'close business lawyer', 'Franklin County business dissolution attorney'],
  openGraph: {
    title: 'Business Dissolution Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/business/business-dissolution',
  },
  alternates: { canonical: '/business/business-dissolution' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Business Dissolution', href: '/business/business-dissolution' },
];

const faqs = [
  {
    question: `What is business dissolution in Ohio?`,
    answer: `Business dissolution is the formal legal process of terminating a business entity's existence in Ohio. Dissolution involves filing the required documents with the Ohio Secretary of State, winding up the business's affairs (collecting assets, paying creditors, and distributing remaining assets to owners), canceling licenses and permits, and filing final state and federal tax returns. Proper dissolution under Ohio law protects owners from ongoing liabilities and obligations. Without formal dissolution, an entity may remain legally active — continuing to accumulate filing fees, tax obligations, and potential personal liability for owners even after operations cease.`,
  },
  {
    question: `What is the difference between voluntary and judicial dissolution in Ohio?`,
    answer: `Voluntary dissolution occurs when the owners of a business (members of an LLC, shareholders of a corporation) choose to dissolve the entity themselves. For Ohio LLCs, voluntary dissolution is governed by ORC 1706.472; for Ohio corporations, ORC 1701.86 controls. Judicial dissolution is court-ordered and typically arises when owners cannot agree on dissolution, when a minority owner petitions the court due to oppressive or fraudulent conduct by those in control, or when the business cannot pay its debts as they come due. An Ohio common pleas court may order judicial dissolution of an LLC under ORC 1705.43 or a corporation under ORC 1701.91. Voluntary dissolution is far simpler and less expensive than judicial dissolution.`,
  },
  {
    question: `How do I dissolve an LLC versus a corporation in Ohio?`,
    answer: `To voluntarily dissolve an Ohio LLC, members must authorize dissolution consistent with the operating agreement, then file Articles of Dissolution with the Ohio Secretary of State along with the required fee. The winding-up process for an Ohio LLC is governed by ORC 1706.476, which requires collecting assets, paying debts and liabilities, and distributing any remaining assets to members in accordance with the operating agreement. For Ohio corporations, dissolution requires board and shareholder approval under ORC 1701.86, followed by filing a Certificate of Dissolution (or Articles of Dissolution) with the Secretary of State. The winding-up process for corporations is governed by ORC 1701.88. Both entity types must also file final tax returns and cancel relevant registrations.`,
  },
  {
    question: `What are the creditor notification requirements during Ohio business dissolution?`,
    answer: `Ohio law requires that dissolving businesses properly notify creditors before making final distributions to owners. For dissolving Ohio corporations, ORC 1701.88(B) requires the corporation to notify known creditors in writing and give them a reasonable opportunity to present their claims. For LLCs under ORC 1706.476, the winding-up manager must apply assets first to pay or provide for the payment of debts and liabilities. Failure to properly notify creditors and satisfy valid claims before distributing assets to owners can expose members and officers to personal liability for those unpaid obligations. An attorney can help structure proper creditor notification procedures to protect owners from post-dissolution claims.`,
  },
  {
    question: `What happens to a business's debts during dissolution?`,
    answer: `Dissolution does not eliminate a business's debts. During the winding-up process, the business must pay all known debts and liabilities from business assets before distributing anything to owners. The order of priority is: first, expenses of winding up (including legal and accounting fees); second, obligations to creditors; and third, distributions to members or shareholders. If the business does not have sufficient assets to pay all debts, creditors may not be paid in full, but owners generally are not personally liable for business debts unless they personally guaranteed them, committed fraud, or failed to maintain the separateness of the entity (piercing the corporate veil). An attorney can help you navigate debt settlement during dissolution.`,
  },
  {
    question: `What tax obligations arise during Ohio business dissolution?`,
    answer: `Dissolving a business in Ohio triggers several tax obligations. The business must file a final federal income tax return (marking it as "final") for the period ending on the dissolution date, and final Ohio state income tax or pass-through entity tax returns. LLCs and corporations that were registered with the Ohio Department of Taxation for Commercial Activity Tax (CAT) must cancel their CAT registration. Businesses with employees must file final employer withholding returns and Forms W-2. If the business collected sales tax, a final sales tax return must be filed and the vendor's license canceled. Failing to file final returns or cancel registrations can result in ongoing tax obligations and penalties even after the business ceases operations.`,
  },
  {
    question: `What is the difference between dissolution and administrative dissolution?`,
    answer: `Voluntary dissolution is initiated by the business owners and follows the statutory process to formally wind up and terminate the entity. Administrative dissolution, by contrast, is imposed by the Ohio Secretary of State when a business entity fails to meet its ongoing compliance obligations — such as failing to file annual reports, maintain a statutory agent, or pay required fees. Under Ohio law, the Secretary of State may administratively dissolve an entity for these compliance failures. Administrative dissolution does not protect owners from liability the way proper voluntary dissolution does — the entity still technically exists but loses its good standing and legal protections. Reinstatement is possible by curing the deficiencies and paying fees, but it is far better to dissolve properly from the outset if you intend to close the business.`,
  },
  {
    question: `Do I need an attorney for business dissolution in Ohio?`,
    answer: `Ohio law does not require an attorney to dissolve a business, but the dissolution process involves legal and tax complexities that can expose owners to ongoing liabilities if handled incorrectly. An attorney can ensure that dissolution documents are properly prepared and filed with the Ohio Secretary of State, that creditors are notified in compliance with ORC 1701.88 or ORC 1706.476, that assets are distributed in the correct order and amount, and that all regulatory registrations are properly canceled. Mistakes in the dissolution process — such as distributing assets before paying creditors or failing to file final tax returns — can result in personal liability for business owners. At Jwayyed Law LLC, our attorney helps Ohio businesses dissolve properly and efficiently, protecting owners at every step.`,
  },
];

export default function BusinessDissolutionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Business Dissolution Lawyer"
        description="Experienced legal assistance with business dissolution. Helping you close your business properly and protect your interests throughout Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Business Dissolution in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Closing a business is not as simple as stopping operations. In Ohio, formally dissolving a business entity requires following specific legal procedures set out in the Ohio Revised Code — and failing to do so properly can leave owners exposed to ongoing liabilities, tax obligations, and regulatory penalties long after the business has stopped operating. Business dissolution is part of our comprehensive <Link href="/business" className="text-[#b87333] underline hover:text-[#a06828]">Ohio business law services</Link>. At Jwayyed Law LLC, we assist business owners in Columbus, Cincinnati, Dayton, and throughout Ohio with the full dissolution process for LLCs, corporations, and other entities. Ohio LLC dissolution is governed by ORC 1706.472 (voluntary) and ORC 1705.43 (judicial), while corporation dissolution is governed by ORC 1701.86 (voluntary) and ORC 1701.91 (judicial). Our attorney understands the legal requirements and can guide you through every step of the process to protect your interests and minimize your exposure.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The dissolution process for most Ohio businesses involves two distinct phases: the formal dissolution filing and the winding-up process. For LLCs, dissolution typically begins with the members voting to dissolve the entity in accordance with the operating agreement, followed by filing Articles of Dissolution with the Ohio Secretary of State. For corporations, dissolution requires approval by the board of directors and shareholders under ORC 1701.86, followed by the filing of a Certificate of Dissolution. Filing the dissolution documents begins the winding-up period — during which the entity continues to exist legally for the limited purpose of completing its affairs. During winding up, the business must collect outstanding receivables, notify creditors, pay or make provision for all debts and liabilities, cancel licenses and permits, file final tax returns, and ultimately distribute any remaining assets to members or shareholders.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Creditor notification is one of the most legally significant aspects of business dissolution. Under ORC 1701.88(B) for corporations, the dissolving entity must notify known creditors in writing and give them a reasonable opportunity to submit claims. Ohio LLC winding-up rules under ORC 1706.476 similarly require that business assets be applied first to satisfy debts and liabilities before any distribution to members. Business owners who distribute assets to themselves before paying known creditors can face personal liability for those unpaid claims. An attorney can help structure proper creditor notification procedures, establish a claims review process, and ensure that all distributions are made in the correct order — protecting members and shareholders from post-dissolution personal liability.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Business owners must also understand the difference between voluntary dissolution and administrative dissolution. Voluntary dissolution — initiated by the owners following the statutory process — properly terminates the entity and, when done correctly, cuts off ongoing liability. Administrative dissolution is imposed by the Ohio Secretary of State when a business fails to comply with ongoing requirements, such as maintaining a statutory agent, filing annual reports, or paying required fees. An administratively dissolved entity does not benefit from the liability protections of a properly wound-up voluntary dissolution. Reinstating an administratively dissolved entity requires curing the compliance failures and paying reinstatement fees. If your goal is to permanently close the business, voluntary dissolution is the correct path — not simply allowing the entity to fall out of good standing. For ongoing compliance needs, see our <Link href="/business/business-compliance" className="text-[#b87333] underline hover:text-[#a06828]">business compliance</Link> page.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Before deciding to dissolve, business owners should consider whether selling the business might be a better option. A dissolution terminates the entity and distributes its assets; a sale transfers ownership of the business as a going concern, potentially delivering significantly more value to the owners. The best approach depends on the nature of the business, its assets, its liabilities, and the owners' goals. If dissolution is the right choice, owners must also carefully address member or <Link href="/business/shareholder-disputes" className="text-[#b87333] underline hover:text-[#a06828]">shareholder disagreements</Link> about the process — including disputes about asset valuation, creditor priority, or the allocation of remaining assets. When owners cannot agree, Ohio law provides for judicial dissolution through the courts. At Jwayyed Law LLC, we can help you evaluate your options and choose the most favorable path forward. For related matters, see our pages on <Link href="/business/business-formation" className="text-[#b87333] underline hover:text-[#a06828]">business formation</Link> and <Link href="/business/contract-drafting-review" className="text-[#b87333] underline hover:text-[#a06828]">contract drafting and review</Link>.
            </p>

            <LocationsWeServe title="Business Law" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Business Dissolution Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Filing Dissolution Documents:</strong> Prepare and file Articles of Dissolution or Certificate of Dissolution with the Ohio Secretary of State under ORC 1706.472 or ORC 1701.86</li>
              <li><strong>Winding Up the Business:</strong> Guide the winding-up process under ORC 1706.476 or ORC 1701.88, including asset collection and creditor payment</li>
              <li><strong>Creditor Notification:</strong> Structure proper creditor notification procedures to comply with Ohio law and protect owners from personal liability</li>
              <li><strong>Debt Settlement:</strong> Assist with reviewing and resolving creditor claims before making distributions to members or shareholders</li>
              <li><strong>Tax Compliance:</strong> Coordinate with your accountant to ensure final federal and Ohio tax returns are filed and all registrations (CAT, employer withholding, vendor license) are canceled</li>
              <li><strong>Asset Distribution:</strong> Ensure remaining assets are distributed to members or shareholders in the correct order and proportions under the operating agreement or articles of incorporation</li>
              <li><strong>Member or Shareholder Disputes:</strong> Advise on resolving disagreements about dissolution terms, asset valuation, or distribution among owners</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC for Ohio Business Dissolution</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated business dissolution assistance throughout Ohio. We understand that closing a business — whether it has been a rewarding venture or a difficult experience — requires proper legal procedures to protect owners from ongoing exposure. Our attorney works diligently to guide you through every step of the dissolution process, ensure compliance with all Ohio statutory requirements, and protect your interests at every stage. If you are considering closing an Ohio LLC or corporation, <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">contact Jwayyed Law LLC</Link> at (614) 285-5482 to schedule a consultation.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/business/business-formation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Business Formation</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Start a new Ohio business entity with proper legal foundation</span>
              </Link>
              <Link href="/business/business-compliance" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Business Compliance</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Maintain good standing and avoid administrative dissolution</span>
              </Link>
              <Link href="/business/shareholder-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Shareholder Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Resolve ownership conflicts that may lead to dissolution</span>
              </Link>
              <Link href="/business/partnership-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Partnership Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Handle partner disagreements over dissolution and winding up</span>
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
