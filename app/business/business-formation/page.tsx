import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Business Formation Lawyer in Ohio',
  description:
    'Forming a business in Ohio: choosing an LLC, corporation or partnership, the $99 state filing, statutory agents and the documents to adopt.',
  keywords: ['business formation lawyer Ohio', 'Columbus business formation attorney', 'Cincinnati business formation attorney', 'Dayton business formation attorney', 'LLC formation lawyer Ohio', 'business formation process Ohio', 'Ohio business formation costs'],
  openGraph: {
    title: 'Business Formation Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Choosing a structure and forming a business in Ohio, step by step.',
    url: 'https://www.jjlawohio.com/business/business-formation',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/business/business-formation' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Business Formation', href: '/business/business-formation' },
];

const faqs = [
  {
    question: 'What is required to form a business in Ohio?',
    answer:
      'You file articles of incorporation or organization with the Ohio Secretary of State, get the licenses and permits you need, adopt an operating agreement or bylaws, get an EIN from the IRS, and meet other state and federal requirements. The structure (LLC, corporation or partnership) changes what is required.',
  },
  {
    question: 'What is the difference between an LLC and corporation in Ohio?',
    answer:
      'Both offer liability protection. An LLC is flexible in management and taxation (it can be taxed as a pass-through entity). A corporation has a more formal structure and can raise capital by issuing stock. The choice depends on your business, your tax goals and your growth plans.',
  },
  {
    question: 'How long does business formation take in Ohio?',
    answer:
      'Days to weeks, depending on the structure, how you file and what else is required. Online filings with the Ohio Secretary of State are usually processed faster than paper filings. EINs, licenses and permits can take additional time.',
  },
  {
    question: 'Do I need a business formation attorney?',
    answer:
      'You can form a business yourself. An attorney can help choose the structure, make sure every requirement is met, draft the operating agreement or bylaws, identify the licenses and permits you need, and avoid mistakes that cost money later.',
  },
  {
    question: 'What are the costs of business formation in Ohio?',
    answer:
      'The Ohio Secretary of State filing fee is $99 for an LLC and $99 for a corporation. An EIN is free from the IRS. License and permit fees vary, and there are attorney fees. Total cost depends on the structure and the services you need.',
  },
  {
    question: 'What business structures are available in Ohio?',
    answer:
      'LLCs, governed by ORC Chapter 1706, offer liability protection with flexible taxation and management. Corporations, governed by ORC Chapter 1701, can be C-corps or S-corps and have more formal governance. General and limited partnerships, governed by ORC Chapters 1775 and 1776 respectively, offer pass-through taxation with varying liability protection for partners. Sole proprietorships need no state filing and are the simplest, but offer no liability protection.',
  },
  {
    question: 'How do LLCs and S-corporations compare for Ohio small businesses?',
    answer:
      "Both offer pass-through taxation: profits and losses flow to the owners' personal returns, avoiding double corporate taxation. With an S-corporation election, owner-employees can split income between W-2 wages and distributions, and only the wages are subject to self-employment taxes, which can save payroll tax at higher incomes. An LLC taxed as a sole proprietorship or partnership pays self-employment tax on all net earnings. An Ohio LLC can elect S-corporation taxation by filing IRS Form 2553. An attorney or tax advisor can tell you which fits your revenue level.",
  },
  {
    question: 'What is a statutory agent in Ohio and who can serve in that role?',
    answer:
      'Under Ohio Revised Code 1706.05, every Ohio LLC must designate and keep a statutory agent (also called a registered agent) with a physical street address in Ohio. The agent receives legal and government correspondence for the business, including service of process, notices from the Ohio Secretary of State and tax correspondence. Any Ohio resident with a physical Ohio address can serve, as can a domestic or foreign corporation or LLC authorized to do business in Ohio. The agent must be available during regular business hours. Failing to keep a valid statutory agent can lead to administrative cancellation of the entity.',
  },
];

const RELATED = [
  { href: '/business/llc-formation', title: 'LLC formation', subtitle: 'Forming an Ohio LLC under ORC Chapter 1706' },
  { href: '/business/contract-drafting-review', title: 'Contract drafting and review', subtitle: 'The contracts and agreements a new business needs' },
  { href: '/business/business-compliance', title: 'Business compliance', subtitle: 'Corporate formalities and Ohio regulatory requirements' },
  { href: '/business/business-dissolution', title: 'Business dissolution', subtitle: 'Closing an Ohio business and limiting ongoing liability' },
];

export default function BusinessFormationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business formation in Ohio"
        description="An Ohio LLC or corporation starts with a $99 filing with the Secretary of State. The structure you choose decides your liability protection, your taxes and how you can raise money."
      />

      <Section
        title="Choosing a structure"
        intro={
          <p>
            The structure is one of the first and most lasting decisions a new business makes. It sets liability protection, tax
            treatment, management and the ability to raise capital.
          </p>
        }
      >
        <p>
          The firm helps clients in Columbus, Cincinnati, Dayton and throughout Ohio form businesses under the Ohio Revised Code
          (current as of 2026), as part of its <Link href="/business">Ohio business law practice</Link>. For LLCs specifically, see{' '}
          <Link href="/business/llc-formation">Ohio LLC formation</Link>. The firm&rsquo;s blog also covers{' '}
          <Link href="/our-law-firm/blog/starting-business-ohio-llc-vs-corporation">starting a business in Ohio: LLC vs. corporation</Link>{' '}
          and <Link href="/our-law-firm/blog/ohio-business-formation-llc-vs-corp">Ohio business formation: LLC vs. corp</Link>.
        </p>
        <PointGrid
          points={[
            {
              title: 'Limited liability company (LLC)',
              body: 'ORC Chapter 1706. Liability protection for members, flexible management, pass-through taxation available and less formal record-keeping than a corporation. Common for small and mid-sized businesses.',
            },
            {
              title: 'Corporation (C-corp or S-corp)',
              body: 'ORC Chapter 1701. Liability protection and the ability to sell stock. A C-corp is taxed separately from its owners (double taxation); an S-corp is pass-through, with restrictions. Requires bylaws, a board and shareholder meetings. Suited to raising capital or going public.',
            },
            {
              title: 'Partnership',
              body: 'ORC Chapters 1775 and 1776. Owners share profits and losses with pass-through taxation and a partnership agreement. General partners have no liability protection; limited partners have limited liability.',
            },
            {
              title: 'Sole proprietorship',
              body: 'No separate legal entity and no state filing. The owner has unlimited personal liability and reports income personally. Fits very small, low-risk businesses.',
            },
          ]}
        />
      </Section>

      <Section title="Ohio business formation costs and requirements" tone="ice">
        <FactTable
          title="Forming an Ohio business"
          rows={[
            { label: 'State filing fee', value: '$99 for an LLC; $99 for a corporation (Ohio Secretary of State).' },
            { label: 'EIN', value: 'Free from the IRS.' },
            { label: 'Licenses and permits', value: 'Fees vary by industry and location.' },
            { label: 'Statutory agent', value: 'Required for every Ohio LLC (ORC 1706.05), with a physical Ohio street address, available during regular business hours.' },
            { label: 'Timing', value: 'Days to weeks. Online filings are usually faster than paper.' },
          ]}
          note="Losing your statutory agent can lead to administrative cancellation of the entity."
        />
      </Section>

      <Section title="The business formation process">
        <Steps
          steps={[
            { title: 'Pick the structure', body: 'Based on your goals, tax situation and growth plans.' },
            {
              title: 'File with the Ohio Secretary of State',
              body: 'Articles of incorporation for a corporation, or articles of organization for an LLC, with the business name, registered agent, purpose and other required information.',
            },
            {
              title: 'Adopt the governing documents',
              body: 'An operating agreement for an LLC or bylaws for a corporation, covering governance, management, ownership interests, profit distribution and dispute resolution.',
            },
            {
              title: 'Licenses, EIN and tax registration',
              body: (
                <>
                  Industry and local licenses and permits, an EIN from the IRS, and state tax registration if it applies. For what comes
                  after formation, see <Link href="/business/business-compliance">business compliance</Link>.
                </>
              ),
            },
          ]}
        />
      </Section>

      <Section title="What a business formation lawyer does on a new business" tone="ice">
        <PointGrid
          points={[
            { title: 'Helps choose the structure', body: 'Weighing liability protection, taxation, management and capital needs.' },
            { title: 'Prepares and files', body: 'The formation documents with the Ohio Secretary of State.' },
            { title: 'Drafts the governing documents', body: 'Operating agreements or bylaws that set governance, ownership and dispute resolution.' },
            { title: 'Covers compliance', body: 'Licenses, permits, tax registration and ongoing obligations.' },
            { title: 'Checks the name', body: 'Name availability and trademark registration when needed.' },
            { title: 'Stays on after formation', body: 'Contract review, compliance and other business law matters as the business runs.' },
          ]}
        />
        <p>
          If you are starting a business in Columbus, Cincinnati, Dayton or anywhere in Ohio,{' '}
          <Link href="/contact">contact Jwayyed Law LLC</Link> to schedule a consultation.
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
