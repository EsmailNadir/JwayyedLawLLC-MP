import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Business Compliance Lawyer',
  description:
    'Ongoing compliance for Ohio LLCs and corporations: statutory agents, corporate formalities, CAT and tax registration, licensing and employment law.',
  keywords: ['business compliance lawyer Columbus OH', 'Ohio LLC compliance attorney', 'corporate formalities Ohio', 'Ohio Secretary of State filing attorney', 'Ohio CAT tax attorney', 'pierce corporate veil Ohio', 'ORC 1705 attorney'],
  openGraph: {
    title: 'Ohio Business Compliance Lawyer | Jwayyed Law LLC',
    description: 'What Ohio LLCs and corporations must keep doing after formation to protect the liability shield.',
    url: 'https://www.jjlawohio.com/business/business-compliance',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/business/business-compliance' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Business Compliance', href: '/business/business-compliance' },
];

const faqs = [
  {
    question: 'What are the ongoing filing requirements for Ohio LLCs and corporations?',
    answer:
      "Ohio LLCs under ORC Chapter 1705 (and soon the Ohio LLC Act, ORC Chapter 1706) and corporations under ORC Chapter 1701 do not currently file annual reports with the Ohio Secretary of State; Ohio eliminated mandatory annual reports for existing entities. Businesses must still (1) keep a valid statutory agent (registered agent) with a physical Ohio address at all times, or the Secretary of State can cancel the entity's authority to do business; (2) file an updated agent statement within 30 days of an agent change (Form 521 for LLCs, Form 521 for corporations); (3) file amendments when the name, principal office, or articles or operating agreement provisions change; and (4) file biennial reports if required for certain professional associations. Out-of-state entities doing business in Ohio must keep their foreign qualification current. Failure can lead to administrative dissolution.",
  },
  {
    question: 'What corporate formalities must Ohio corporations and LLCs observe?',
    answer:
      'Formalities show the entity operates as a separate legal person, not an alter ego of its owners. For corporations under ORC Chapter 1701: annual shareholder meetings (or written consents instead) under ORC 1701.40; board meetings for major decisions; written minutes and formal resolutions for significant actions; stock certificates or a stock ledger; and current, accessible records (minutes book, articles, bylaws, financial records). For LLCs under ORC Chapter 1705 the formalities are lighter: the operating agreement should govern major decisions, significant member and manager actions should be documented in written resolutions, and financial records should be kept apart from members\' personal finances. These practices are the foundation of the liability protection.',
  },
  {
    question: 'What is "piercing the corporate veil" and how do Ohio courts analyze it?',
    answer:
      "It is when a court disregards the entity's separate existence and holds the owners personally liable for its debts. Ohio courts apply a two-prong test: (1) control, meaning the owner so dominated the entity that it had no separate mind, will or existence (signs include commingled funds, ignored formalities, undercapitalization, paying personal expenses from the entity and treating it as a personal bank account); and (2) improper conduct, meaning that control was used to commit fraud, an illegal act or another wrong that harmed the plaintiff. Both prongs must be proven. Consistent formalities are the best protection: separate bank accounts, meetings, documented decisions, and never treating the business as a personal financial instrument.",
  },
  {
    question: 'Does Ohio require businesses to register for the Commercial Activity Tax (CAT)?',
    answer:
      "The CAT is a business privilege tax on the gross receipts of businesses doing business in Ohio. Anyone with Ohio taxable gross receipts of $150,000 or more in a calendar year must register and file with the Ohio Department of Taxation. Businesses below $150,000 are exempt (the threshold was raised from $150,000 effective 2024, and under 2023 Ohio legislation the first $3 million in receipts is also excluded from the CAT base). Registration is through the Ohio Business Gateway. Businesses selling taxable goods or services also need a Vendor's License for Ohio sales tax. Failing to register and pay brings back taxes, interest and civil penalties.",
  },
  {
    question: 'What business licenses and permits does my Ohio company need?',
    answer:
      "It depends on the business type, industry and location. Many professions are licensed by Ohio boards: attorneys (Supreme Court of Ohio), physicians (State Medical Board of Ohio), contractors (Ohio Construction Industry Licensing Board), real estate brokers (Ohio Division of Real Estate) and others. A Vendor's License is required to sell taxable goods or services. Most Ohio cities and counties require business registration and may impose local business income taxes; Columbus's city income tax, for example, applies to business net profits. Some industries also need federal licenses (alcohol, firearms and others). A compliance audit can identify every requirement that applies.",
  },
  {
    question: 'What are the employment law compliance obligations for Ohio employers?',
    answer:
      "(1) Minimum wage under ORC Chapter 4111, higher than the federal minimum and adjusted annually; (2) wage payment timing and permissible deductions under ORC Chapter 4113; (3) workers' compensation, through the Ohio system or approval as a self-insurer under ORC Chapter 4123; (4) unemployment insurance, registering with the Ohio Department of Job and Family Services and paying state unemployment taxes under ORC Chapter 4141; (5) anti-discrimination, under the Ohio Civil Rights Act (ORC Chapter 4112), covering race, color, religion, sex, national origin, disability, age (40 and older) and ancestry; and (6) mandatory workplace postings (minimum wage, workers' comp, OSHA and others). Violations bring government investigations, lawsuits and significant penalties.",
  },
  {
    question: 'What is a compliance audit and why would my Ohio business need one?',
    answer:
      "A systematic review of the business's legal obligations (governance, tax registration, licensing, employment law, contracts and industry rules) to find gaps before they become enforcement actions or lawsuits. The best times are at startup, when the business crosses key thresholds (new employees, revenue levels that trigger tax registration), when ownership or management changes, after a major contract or transaction, and periodically after that. An attorney-led audit also brings attorney-client privilege to the findings, shielding sensitive compliance communications from disclosure in later litigation.",
  },
  {
    question: "What is Ohio's statutory agent requirement and what happens if I fail to maintain one?",
    answer:
      "Every Ohio LLC and corporation, domestic or foreign, must always have a statutory agent (registered agent) with a physical Ohio street address, under ORC 1705.06 for LLCs and ORC 1701.07 for corporations. The agent accepts legal process and official correspondence for the company. A P.O. Box is not allowed. If the agent resigns or the information goes out of date and the company does not update it within 30 days (Form 521 with the Ohio Secretary of State), the Secretary of State may cancel the entity's authority to do business in Ohio, which can leave owners personally exposed. A business law attorney can serve as statutory agent or set up a compliant arrangement.",
  },
];

const RELATED = [
  { href: '/business/business-formation', title: 'Business formation', subtitle: 'Starting an Ohio business with the right structure' },
  { href: '/business/llc-formation', title: 'LLC formation', subtitle: 'Forming an Ohio LLC under ORC Chapter 1706' },
  { href: '/business/contract-drafting-review', title: 'Contract drafting and review', subtitle: 'Business contracts that meet Ohio legal requirements' },
  { href: '/business/business-dissolution', title: 'Business dissolution', subtitle: 'Closing an Ohio LLC or corporation properly' },
];

export default function BusinessCompliancePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business compliance in Ohio"
        description="Compliance does not end at formation. An Ohio entity that does not update its statutory agent within 30 days of a change can lose its authority to do business, and one that ignores its formalities can lose its owners' liability shield."
      />

      <Section
        title="Compliance lasts as long as the business"
        intro={
          <p>
            Owners focus on the <Link href="/business/business-formation">formation process</Link>: operating agreements, articles and
            bank accounts. The obligations that follow last for the life of the business.
          </p>
        }
      >
        <p>
          Ohio LLCs are primarily governed by ORC Chapter 1705, with the newer Ohio LLC Act at ORC Chapter 1706 now available for new
          formations. Corporations operate under ORC Chapter 1701. Both require a valid statutory agent, corporate formalities,
          financial records and tax registration. Neglect can mean administrative dissolution or personal liability for owners.
        </p>
        <p>
          The firm helps Ohio businesses meet these obligations as part of its <Link href="/business">Ohio business law services</Link>.
          For choosing an entity, see the firm&rsquo;s post on{' '}
          <Link href="/our-law-firm/blog/starting-business-ohio-llc-vs-corporation">starting a business in Ohio: LLC vs. corporation</Link>.
        </p>
      </Section>

      <Section title="Secretary of State and statutory agent requirements" tone="ice">
        <FactTable
          title="Filing obligations"
          rows={[
            { label: 'Annual reports', value: 'Not currently required for existing entities; Ohio eliminated mandatory annual reports.' },
            { label: 'Statutory agent', value: 'Required at all times, with a physical Ohio street address (ORC 1705.06 for LLCs, ORC 1701.07 for corporations). No P.O. Boxes.' },
            { label: 'Agent changes', value: 'Updated within 30 days on Form 521 with the Ohio Secretary of State.' },
            { label: 'Amendments', value: 'Changes to the name, principal office, articles of incorporation or articles of organization.' },
            { label: 'Biennial reports', value: 'If required for certain professional associations.' },
            { label: 'Foreign entities', value: 'Must keep their foreign qualification current.' },
          ]}
          note="Missing these can lead to administrative dissolution or cancellation of the authority to do business in Ohio."
        />
      </Section>

      <LocationsWeServe title="Business Law" />

      <Section title="Formalities and the corporate veil" tone="ice">
        <p>
          Ohio courts pierce the veil on a two-prong test: domination and control of the entity, used for improper conduct that harmed
          the plaintiff. Commingled funds, ignored formalities, undercapitalization and personal expenses paid by the business are the
          usual signs. When the veil is pierced, homes, savings and personal assets are exposed.
        </p>
        <PointGrid
          points={[
            { title: 'Meetings', body: 'Annual shareholder meetings or written consents (ORC 1701.40), and board meetings for major decisions.' },
            { title: 'Minutes and resolutions', body: 'Written records of meetings and of significant decisions by the board, members or managers.' },
            { title: 'Records', body: 'The minutes book, officer and director lists, stock ledger and financial records, kept current under ORC 1701.37 and 1705.22.' },
            { title: 'Separate money', body: 'Separate bank accounts and no use of business assets for personal expenses.' },
          ]}
        />
      </Section>

      <Section title="Tax registration and licensing">
        <FactTable
          title="Tax and license obligations"
          rows={[
            {
              label: 'Commercial Activity Tax',
              value: 'Register through the Ohio Business Gateway at $150,000 or more in Ohio taxable gross receipts in a calendar year. Since 2023 tax year legislation, the first $3 million in taxable gross receipts is excluded from the base.',
            },
            { label: 'Vendor’s License', value: 'Required to sell taxable goods or services and collect Ohio sales tax.' },
            { label: 'Employer registrations', value: 'Ohio employer withholding, unemployment insurance with the Ohio Department of Job and Family Services (ORC Chapter 4141) and workers’ compensation (ORC Chapter 4123).' },
            { label: 'Municipal income tax', value: 'Local registration. Columbus, for example, taxes business net profits under the Columbus City Code.' },
            { label: 'Professional licenses', value: 'Kept in good standing and renewed on time with the right Ohio board, with supervision rules for unlicensed staff.' },
          ]}
          note="Unregistered or unpaid taxes bring back taxes, interest and civil penalties."
        />
      </Section>

      <Section title="Employment law compliance" tone="ice">
        <PointGrid
          points={[
            { title: 'Civil rights (ORC Chapter 4112)', body: 'Bars discrimination based on race, color, religion, sex, national origin, disability, age and ancestry, for employers with four or more employees, broader than federal Title VII.' },
            { title: 'Wages (ORC Chapters 4111 and 4113)', body: 'Minimum wage indexed annually to inflation, payday timing and permissible deductions.' },
            { title: 'Insurance and postings', body: 'Workers’ compensation coverage and mandatory workplace postings.' },
            { title: 'Federal law', body: 'FMLA, ADA and FLSA, plus I-9 verification for new hires.' },
            { title: 'Classification', body: 'Treating employees as contractors is heavily audited by Ohio and federal tax authorities.' },
            { title: 'Policies', body: 'Written employment policies that do not accidentally create contractual obligations.' },
          ]}
        />
        <Callout title="Track your contracts too">
          Review material contracts so obligations are met and renewal and notice deadlines are not missed, and update form contracts
          when Ohio law changes.
        </Callout>
      </Section>

      <Section title="How a compliance audit works">
        <p>
          Gaps usually surface as problems: a lawsuit shows formalities were never kept, a tax audit finds years of unregistered
          liability, a contract dispute reveals a missed notice deadline. Finding them first costs much less.
        </p>
        <Steps
          steps={[
            { title: 'Review', body: 'Governance records, tax registrations, licensing status, employment practices and contract obligations.' },
            { title: 'Prioritize', body: 'The gaps, ranked by risk.' },
            { title: 'Fix', body: 'A practical action plan to close them, with the findings protected by attorney-client privilege.' },
            { title: 'Revisit at growth points', body: 'The first hire, new revenue thresholds, ownership changes, major new contracts or new markets.' },
          ]}
        />
        <p>
          Related services include <Link href="/business/llc-formation">Ohio LLC formation</Link> and{' '}
          <Link href="/business/contract-drafting-review">contract drafting and review</Link>.{' '}
          <Link href="/contact">Contact Jwayyed Law LLC</Link> to schedule a compliance consultation.
        </p>
      </Section>

      <Section title="Related business matters" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
