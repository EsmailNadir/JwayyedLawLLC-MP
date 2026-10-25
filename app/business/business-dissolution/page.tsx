import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Business Dissolution Lawyer in Ohio',
  description:
    'Dissolving an Ohio LLC or corporation: the filings, winding up, creditor notice, final taxes, and why administrative dissolution does not protect owners.',
  keywords: ['business dissolution lawyer Columbus OH', 'business dissolution attorney Ohio', 'close business lawyer', 'Franklin County business dissolution attorney'],
  openGraph: {
    title: 'Business Dissolution Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Closing an Ohio business properly, from the dissolution filing to the final distribution.',
    url: 'https://www.jjlawohio.com/business/business-dissolution',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/business/business-dissolution' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Business Dissolution', href: '/business/business-dissolution' },
];

const faqs = [
  {
    question: 'What is business dissolution in Ohio?',
    answer:
      "It is the formal legal process of ending a business entity's existence. It involves filing the required documents with the Ohio Secretary of State, winding up (collecting assets, paying creditors and distributing what remains to the owners), canceling licenses and permits, and filing final state and federal tax returns. Done properly, it protects owners from ongoing liabilities. Without it, the entity may stay legally active, piling up filing fees, tax obligations and potential personal liability after operations stop.",
  },
  {
    question: 'What is the difference between voluntary and judicial dissolution in Ohio?',
    answer:
      'Voluntary dissolution is chosen by the owners: members of an LLC under ORC 1706.472, or shareholders of a corporation under ORC 1701.86. Judicial dissolution is ordered by a court, usually when owners cannot agree, when a minority owner petitions over oppressive or fraudulent conduct by those in control, or when the business cannot pay its debts as they come due. A common pleas court may order judicial dissolution of an LLC under ORC 1705.43 or a corporation under ORC 1701.91. Voluntary dissolution is far simpler and cheaper.',
  },
  {
    question: 'How do I dissolve an LLC versus a corporation in Ohio?',
    answer:
      'For an LLC, the members authorize dissolution as the operating agreement requires, then file Articles of Dissolution with the Ohio Secretary of State with the fee. Winding up under ORC 1706.476 means collecting assets, paying debts and liabilities, and distributing what remains to members under the operating agreement. For a corporation, the board and shareholders approve under ORC 1701.86, then file a Certificate of Dissolution (or Articles of Dissolution). Corporate winding up is governed by ORC 1701.88. Both must file final tax returns and cancel registrations.',
  },
  {
    question: 'What are the creditor notification requirements during Ohio business dissolution?',
    answer:
      'A dissolving corporation must notify known creditors in writing and give them a reasonable chance to present claims, under ORC 1701.88(B). For LLCs, ORC 1706.476 requires the winding-up manager to apply assets first to paying or providing for debts and liabilities. Distributing to owners before properly notifying creditors and paying valid claims can make members and officers personally liable for those debts.',
  },
  {
    question: "What happens to a business's debts during dissolution?",
    answer:
      'Dissolution does not erase them. During winding up, the business pays known debts from business assets before distributing anything to owners. The order is: first, the expenses of winding up (including legal and accounting fees); second, creditors; third, members or shareholders. If assets fall short, creditors may not be paid in full, but owners are generally not personally liable unless they personally guaranteed the debt, committed fraud or failed to keep the entity separate (piercing the corporate veil).',
  },
  {
    question: 'What tax obligations arise during Ohio business dissolution?',
    answer:
      'A final federal income tax return (marked "final") for the period ending on the dissolution date, and final Ohio income tax or pass-through entity tax returns. Cancel any Commercial Activity Tax (CAT) registration with the Ohio Department of Taxation. Employers file final withholding returns and Forms W-2. If you collected sales tax, file a final sales tax return and cancel the vendor\'s license. Missing these can leave ongoing tax obligations and penalties after the business closes.',
  },
  {
    question: 'What is the difference between dissolution and administrative dissolution?',
    answer:
      'Voluntary dissolution is started by the owners and follows the statutory process to wind up and end the entity. Administrative dissolution is imposed by the Ohio Secretary of State when an entity fails its ongoing obligations, such as filing annual reports, keeping a statutory agent or paying fees. It does not protect owners the way a proper voluntary dissolution does: the entity technically still exists but loses its good standing and legal protections. Reinstatement is possible by curing the problems and paying fees, but if you mean to close the business, dissolve it properly.',
  },
  {
    question: 'Do I need an attorney for business dissolution in Ohio?',
    answer:
      'Ohio law does not require one. An attorney makes sure the dissolution documents are prepared and filed correctly with the Ohio Secretary of State, that creditors are notified in line with ORC 1701.88 or ORC 1706.476, that assets are distributed in the right order and amounts, and that every registration is canceled. Mistakes such as paying owners before creditors or skipping final tax returns can make owners personally liable.',
  },
];

const RELATED = [
  { href: '/business/business-formation', title: 'Business formation', subtitle: 'Starting a new Ohio entity on a proper legal foundation' },
  { href: '/business/business-compliance', title: 'Business compliance', subtitle: 'Keeping good standing and avoiding administrative dissolution' },
  { href: '/business/shareholder-disputes', title: 'Shareholder disputes', subtitle: 'Ownership conflicts that may lead to dissolution' },
  { href: '/business/partnership-disputes', title: 'Partnership disputes', subtitle: 'Partner disagreements over dissolution and winding up' },
  { href: '/business/contract-drafting-review', title: 'Contract drafting and review', subtitle: 'Contracts to settle, assign or end before closing' },
];

export default function BusinessDissolutionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Dissolving a business in Ohio"
        description="Stopping operations does not end an Ohio LLC or corporation. Until it is formally dissolved and wound up, owners can keep facing fees, taxes and liability."
      />

      <Section
        title="Voluntary and judicial dissolution"
        intro={
          <p>
            Formally dissolving an Ohio entity means following the Ohio Revised Code. Skipping steps can leave owners with liabilities,
            tax obligations and penalties long after the doors close.
          </p>
        }
      >
        <p>
          The firm handles dissolution of LLCs, corporations and other entities for owners in Columbus, Cincinnati, Dayton and
          throughout Ohio, as part of its <Link href="/business">Ohio business law services</Link>.
        </p>
        <FactTable
          title="The governing statutes"
          rows={[
            { label: 'LLC, voluntary', value: 'ORC 1706.472. Winding up under ORC 1706.476.' },
            { label: 'LLC, judicial', value: 'ORC 1705.43.' },
            { label: 'Corporation, voluntary', value: 'ORC 1701.86, with board and shareholder approval. Winding up under ORC 1701.88.' },
            { label: 'Corporation, judicial', value: 'ORC 1701.91.' },
            { label: 'When courts step in', value: 'Owners cannot agree, a minority owner alleges oppressive or fraudulent conduct, or the business cannot pay its debts as they come due.' },
          ]}
        />
      </Section>

      <Section title="How dissolution and winding up work" tone="ice">
        <Steps
          steps={[
            { title: 'Authorize', body: 'LLC members vote as the operating agreement requires; a corporation’s board and shareholders approve under ORC 1701.86.' },
            { title: 'File', body: 'Articles of Dissolution for an LLC, or a Certificate of Dissolution for a corporation, with the Ohio Secretary of State. The entity then exists only to finish its affairs.' },
            { title: 'Notify creditors', body: 'Known creditors in writing, with a reasonable chance to present claims (ORC 1701.88(B)).' },
            { title: 'Pay in order', body: 'Winding-up expenses first, including legal and accounting fees; then creditors; then owners.' },
            { title: 'Close the registrations', body: 'Cancel licenses and permits, CAT registration, employer withholding and the vendor’s license, and file final federal and Ohio returns and Forms W-2.' },
            { title: 'Distribute', body: 'What remains goes to members or shareholders under the operating agreement or articles of incorporation.' },
          ]}
        />
        <Callout title="Pay creditors before owners">
          Owners who distribute assets to themselves before paying known creditors can be personally liable for the unpaid claims.
        </Callout>
      </Section>

      <LocationsWeServe title="Business Law" />

      <Section title="Administrative dissolution is not a shortcut" tone="ice">
        <p>
          The Ohio Secretary of State imposes administrative dissolution when an entity fails ongoing requirements such as keeping a
          statutory agent, filing annual reports or paying fees. The entity loses its good standing but does not get the liability
          protection of a properly wound-up voluntary dissolution. Reinstatement means curing the failures and paying reinstatement
          fees. To close for good, dissolve voluntarily. For staying in good standing, see{' '}
          <Link href="/business/business-compliance">business compliance</Link>.
        </p>
      </Section>

      <Section title="Before you dissolve">
        <PointGrid
          points={[
            { title: 'Consider a sale', body: 'A sale transfers the business as a going concern and may return much more to the owners than dissolving and distributing assets.' },
            {
              title: 'Settle owner disagreements',
              body: (
                <>
                  Valuation, creditor priority and how remaining assets are split often divide members or{' '}
                  <Link href="/business/shareholder-disputes">shareholders</Link>. If they cannot agree, a court can order judicial
                  dissolution.
                </>
              ),
            },
            { title: 'Check personal exposure', body: 'Personal guarantees, fraud or a failure to keep the entity separate can leave owners liable for business debts.' },
            { title: 'Line up the tax work', body: 'Coordinate final returns and cancellations with your accountant.' },
          ]}
        />
        <p>
          For related matters, see <Link href="/business/business-formation">business formation</Link> and{' '}
          <Link href="/business/contract-drafting-review">contract drafting and review</Link>.
        </p>
      </Section>

      <Section title="What the firm does on a dissolution" tone="ice">
        <PointGrid
          points={[
            { title: 'Files the documents', body: 'Articles or a Certificate of Dissolution under ORC 1706.472 or ORC 1701.86.' },
            { title: 'Runs the winding up', body: 'Under ORC 1706.476 or ORC 1701.88, from asset collection to creditor payment.' },
            { title: 'Handles creditor notice', body: 'A notice and claims review process that protects owners from personal liability.' },
            { title: 'Resolves claims', body: 'Reviews and settles creditor claims before any distribution.' },
            { title: 'Coordinates tax compliance', body: 'Final federal and Ohio returns and cancellation of CAT, withholding and vendor registrations, with your accountant.' },
            { title: 'Distributes the rest', body: 'In the right order and proportions, and advises on disputes among owners.' },
          ]}
        />
        <p>
          If you are considering closing an Ohio LLC or corporation, <Link href="/contact">contact Jwayyed Law LLC</Link> at (614)
          285-5482 to schedule a consultation.
        </p>
      </Section>

      <Section title="Related business matters">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
