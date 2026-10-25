import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { AttorneyVideo, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';
import { businessServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Ohio Business Attorney',
  description:
    'Business law in Columbus, Cincinnati, Dayton and across Ohio: forming an LLC or corporation, contracts, compliance, disputes and dissolution.',
  keywords: ['Ohio business attorney', 'Columbus business attorney', 'Cincinnati business attorney', 'Dayton business attorney', 'Ohio business lawyer', 'LLC formation attorney', 'business litigation lawyer', 'Ohio business laws', 'business formation requirements Ohio', 'Ohio contract law attorney', 'business dissolution attorney Ohio'],
  openGraph: {
    title: 'Ohio Business Attorney | Jwayyed Law LLC',
    description: 'Business law in Columbus, Cincinnati, Dayton and throughout Ohio. Schedule a consultation.',
    url: 'https://www.jjlawohio.com/business',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/business' },
};

const breadcrumbItems = [{ label: 'Business', href: '/business' }];

const faqs = [
  {
    question: 'What is required to form a business in Ohio?',
    answer:
      'You file articles of incorporation or organization with the Ohio Secretary of State, get the licenses and permits you need, adopt an operating agreement or bylaws, get an EIN from the IRS, and meet other state and federal requirements. The structure you choose (LLC, corporation or partnership) changes what is required.',
  },
  {
    question: 'What is the difference between an LLC and corporation in Ohio?',
    answer:
      'Both offer liability protection. They differ in structure, taxation and management. An LLC is flexible in how it is managed and taxed (it can be taxed as a pass-through entity). A corporation has a more formal structure and can raise capital by issuing stock. The right choice depends on your business, your tax goals and your growth plans.',
  },
  {
    question: 'Do I need a business attorney for contract drafting?',
    answer:
      'You can draft contracts yourself. An attorney makes sure they are enforceable, spots problems, negotiates terms and writes them clearly. Poorly drafted contracts lead to disputes, litigation and financial losses.',
  },
  {
    question: 'What is business litigation?',
    answer:
      'Legal disputes arising from business operations: contract disputes, partnership disputes, shareholder disputes, employment disputes, breach of fiduciary duty, business torts and intellectual property disputes.',
  },
  {
    question: 'What should I do if my business is involved in a dispute?',
    answer:
      'Talk to a business attorney right away. Gather the relevant documents, preserve evidence, avoid statements that could hurt your position, and document every communication. Early legal advice can often keep a dispute from escalating.',
  },
  {
    question: 'What is a fiduciary duty in Ohio business law and who owes it?',
    answer:
      "A fiduciary duty is an obligation to act in another party's best interests rather than your own. For Ohio LLCs, ORC 1706.30 sets the duties of members and managers, including the duty of loyalty (avoiding conflicts of interest and self-dealing) and the duty of care (acting in good faith and in a way reasonably believed to be in the company's best interests). For Ohio corporations, ORC 1701.59 imposes duties of care and loyalty on directors and officers. A breach can make members, managers, directors or officers personally liable for the losses it causes.",
  },
  {
    question: 'What is piercing the corporate veil in Ohio and how is it prevented?',
    answer:
      'Piercing the veil lets a court hold owners personally liable for business debts or judgments when the entity was misused. Under ORC 1706.26 and Ohio common law, courts pierce the veil when the entity was used to commit fraud, formalities were ignored, the business was undercapitalized, or personal and business finances were mixed. To prevent it, keep separate business bank accounts and accurate records, do not use business assets for personal expenses, capitalize the business adequately, and meet governance requirements such as annual meetings.',
  },
  {
    question: 'What is the Ohio Commercial Activity Tax (CAT) and which businesses must register?',
    answer:
      'The CAT, under ORC Chapter 5751, is a tax on the privilege of doing business in Ohio, imposed on taxable gross receipts from business activity in the state. It applies to most businesses with taxable gross receipts over $150,000 a year, whether or not they are profitable and whatever their structure. Businesses at or below $150,000 are generally exempt. The rate is 0.26% on taxable gross receipts above the threshold. LLCs, corporations, partnerships and sole proprietors may all owe it. Businesses register with the Ohio Department of Taxation and file annually or quarterly depending on their gross receipts.',
  },
];

const COUNTIES = [
  { href: '/locations/franklin-county/business-formation-llc-franklin-county', title: 'Franklin County', subtitle: 'Columbus and surrounding areas' },
  { href: '/locations/delaware-county/business-formation-llc-delaware-county', title: 'Delaware County', subtitle: 'Delaware and Powell' },
  { href: '/locations/butler-county/business-formation-llc-butler-county', title: 'Butler County', subtitle: 'Hamilton, Oxford and West Chester' },
  { href: '/locations/greene-county/business-formation-llc-greene-county', title: 'Greene County', subtitle: 'Fairborn and Xenia' },
  { href: '/locations/montgomery-county/business-formation-llc-montgomery-county', title: 'Montgomery County', subtitle: 'Dayton and surrounding areas' },
  { href: '/locations/pickaway-county/business-formation-llc-pickaway-county', title: 'Pickaway County', subtitle: 'Circleville and surrounding areas' },
  { href: '/locations/athens-county/business-formation-llc-athens-county', title: 'Athens County', subtitle: 'Athens and surrounding areas' },
  { href: '/locations/morrow-county/business-formation-llc-morrow-county', title: 'Morrow County', subtitle: 'Mount Gilead, Cardington and surrounding areas' },
  { href: '/locations/clinton-county/business-formation-llc-clinton-county', title: 'Clinton County', subtitle: 'Wilmington and surrounding areas' },
];

export default function BusinessPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business law in Ohio"
        description="Forming an Ohio LLC or corporation, drafting the contracts it runs on, staying compliant, and resolving disputes between owners, partners and shareholders."
      />

      <AttorneyVideo
        src="/videos/business-contract.mp4"
        title="Attorney Jwayyed on business contracts"
        intro={<p>Why the contracts behind a business matter, and how the firm drafts and reviews them.</p>}
      />

      <Section title="Find your matter" intro={<p>Each page covers the Ohio rules, the process and the options for that matter.</p>}>
        <LinkGrid links={businessServices.map((s) => ({ href: s.href, title: s.title, subtitle: s.description }))} />
        <p>
          Business formation covers LLCs, corporations and partnerships under Ohio law. Business transactions such as purchases, sales
          and mergers are handled with the same care for documentation.
        </p>
      </Section>

      <Section
        title="What Ohio business laws cover"
        tone="ice"
        intro={
          <p>
            The firm advises business clients in Columbus, Cincinnati, Dayton and throughout Ohio under the Ohio Revised Code (current as
            of 2026).
          </p>
        }
      >
        <p>
          The work runs from formation through contract drafting and review, business litigation, partnership and shareholder disputes,
          employment and non-compete agreements, compliance and dissolution. The structure you choose (LLC, corporation or partnership)
          shapes your liability protection, taxes, management and ability to raise capital. Well-drafted contracts, operating agreements
          and employment agreements head off many disputes before they start.
        </p>
        <p>
          Disputes come from contract breaches, partner disagreements, shareholder conflicts, employment issues and compliance problems.
          They can disrupt operations, damage relationships and cost real money. They can be resolved through negotiation or, when
          needed, litigation.
        </p>
      </Section>

      <Section title="Ohio business structures and business formation requirements">
        <FactTable
          title="Choosing and forming an entity"
          rows={[
            { label: 'Structures', value: 'LLCs, corporations (C-corp and S-corp), partnerships (general, limited and limited liability) and sole proprietorships.' },
            { label: 'Formation', value: 'Articles of incorporation or organization filed with the Ohio Secretary of State, licenses and permits, an operating agreement or bylaws, and an EIN from the IRS.' },
            { label: 'Ongoing compliance', value: 'Annual reports, tax filings, license renewals, employment law and corporate governance requirements.' },
            { label: 'Risk of falling behind', value: 'Penalties, loss of liability protection or dissolution of the business.' },
          ]}
        />
        <FactTable
          title="Rules every Ohio owner should know"
          rows={[
            { label: 'LLC fiduciary duties', value: 'ORC 1706.30: duty of loyalty and duty of care for members and managers.' },
            { label: 'Corporate fiduciary duties', value: 'ORC 1701.59: duties of care and loyalty for directors and officers.' },
            { label: 'Veil piercing', value: 'ORC 1706.26 and common law: fraud, ignored formalities, undercapitalization or commingled finances.' },
            { label: 'Commercial Activity Tax', value: 'ORC Chapter 5751: 0.26% on taxable gross receipts above $150,000 a year.' },
          ]}
        />
      </Section>

      <Section title="What an Ohio business attorney does for your company" tone="ice">
        <PointGrid
          points={[
            { title: 'Forms the business', body: 'Helps choose the structure, files with the Ohio Secretary of State and drafts the operating agreement or bylaws.' },
            { title: 'Drafts and reviews contracts', body: 'Clear, enforceable terms, problems flagged before signing, and negotiation of the terms.' },
            { title: 'Keeps you compliant', body: 'Ohio business law, regulations, licensing, tax obligations and employment law.' },
            { title: 'Resolves disputes', body: 'Negotiation, mediation, arbitration or litigation when needed.' },
            { title: 'Handles employment matters', body: 'Employment agreements, non-competes, employment policies and employment disputes.' },
            { title: 'Documents transactions', body: 'Business purchases, sales and mergers.' },
            { title: 'Winds the business down', body: 'Dissolution and a proper winding up.' },
          ]}
        />
        <p>
          To schedule a consultation about a business matter in Columbus, Cincinnati, Dayton or anywhere in Ohio, contact Jwayyed Law
          LLC.
        </p>
      </Section>

      <Section title="Business law in these Ohio counties" intro={<p>Each county page covers forming an LLC or business there.</p>}>
        <LinkGrid links={COUNTIES} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
