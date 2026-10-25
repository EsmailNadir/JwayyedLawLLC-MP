import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'LLC Formation Lawyer Ohio | ORC 1706',
  description:
    'LLC formation in Ohio under ORC Chapter 1706: the $99 Articles of Organization filing, statutory agents, operating agreements and keeping the liability shield.',
  keywords: ['LLC formation lawyer Columbus OH', 'LLC formation attorney Ohio', 'Ohio LLC operating agreement attorney', 'ORC 1706 LLC lawyer', 'business formation attorney Columbus', 'Ohio LLC formation', 'starting an LLC in Ohio', 'forming an LLC in Ohio'],
  openGraph: {
    title: 'LLC Formation Lawyer Ohio | ORC 1706 | Jwayyed Law LLC',
    description: 'Articles of Organization, operating agreements and statutory agents for Ohio LLCs.',
    url: 'https://www.jjlawohio.com/business/llc-formation',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/business/llc-formation' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'LLC Formation', href: '/business/llc-formation' },
];

const faqs = [
  {
    question: 'What is an LLC under Ohio law and what are its benefits?',
    answer:
      "An Ohio limited liability company is a business entity formed under ORC Chapter 1706 (the Ohio LLC Act). Members are generally not personally responsible for the LLC's debts and obligations beyond their investment. By default, a single-member LLC is taxed as a sole proprietorship and a multi-member LLC as a partnership, both avoiding corporate double taxation. LLCs need less formal governance than corporations while giving similar liability protection, which makes the LLC the most common business structure in Ohio.",
  },
  {
    question: 'How do I form an LLC in Ohio under ORC Chapter 1706?',
    answer:
      '(1) Choose a name that is distinguishable from other registered names and includes "LLC," "L.L.C." or "Limited Liability Company"; (2) designate a statutory agent (registered agent) with an Ohio address; (3) file Articles of Organization with the Ohio Secretary of State online or by mail, for a $99 fee; (4) draft an operating agreement (not legally required but strongly recommended); (5) get an EIN from the IRS; and (6) get any business licenses and permits that apply.',
  },
  {
    question: 'What are the costs of forming an LLC in Ohio?',
    answer:
      'The main state cost is the $99 Ohio Secretary of State fee for the Articles of Organization. Optional extras include a name reservation ($39), expedited processing and a certified copy. An EIN is free from the IRS. Attorney fees depend on how complex the operating agreement and other work are. Ongoing costs can include a professional statutory agent service and municipal business license fees.',
  },
  {
    question: 'Is an operating agreement required for an Ohio LLC?',
    answer:
      "Ohio law does not require one, but it is strongly recommended for any multi-member LLC and advisable for a single-member LLC. An operating agreement under ORC 1706.08 covers member rights, ownership percentages, capital contributions, profit and loss allocation, management authority, voting rights, admission and withdrawal of members, and dissolution. Without one, the default rules of ORC Chapter 1706 apply, and they may not match what the members intended.",
  },
  {
    question: 'What is the difference between member-managed and manager-managed Ohio LLCs?',
    answer:
      'In a member-managed LLC, all members take part in day-to-day management. In a manager-managed LLC, designated managers (who may or may not be members) run operations. The choice decides who can bind the LLC to contracts and other transactions. Member-managed fits smaller businesses where every owner is active; manager-managed fits LLCs with passive investors, members with different roles, or plans to expand. The structure should be stated in the Articles of Organization and spelled out in the operating agreement.',
  },
  {
    question: "How does Ohio's commercial activity tax (CAT) affect my LLC?",
    answer:
      'Ohio imposes the CAT under ORC Chapter 5751 on businesses with Ohio taxable gross receipts above $150,000 a year. LLCs owe it based on Ohio gross receipts no matter how they are taxed federally. The rate is 0.26% of gross receipts above the $1 million annual threshold, with a minimum tax for businesses with lower receipts. LLCs must register with the Ohio Department of Taxation once they meet the filing thresholds.',
  },
  {
    question: 'Can an LLC protect me from personal liability for business debts in Ohio?',
    answer:
      "Yes, with limits. Under ORC 1706.26, members are generally protected from personal liability for the LLC's debts and obligations. The shield can be lost (\"pierced\") if (1) the LLC is a mere alter ego of the member, with personal and business funds mixed; (2) the LLC was undercapitalized; (3) the member personally guaranteed a debt; or (4) the member personally committed a tort. Keep separate bank accounts, keep proper records, and avoid personally guaranteeing LLC obligations where you can.",
  },
  {
    question: 'Do I need an attorney to form an LLC in Ohio, or can I do it myself?',
    answer:
      'You can file the Articles of Organization yourself. An attorney adds an operating agreement fitted to your business, advice on management structure and capital contributions, the right tax setup, industry licensing requirements, and guidance on keeping the liability protection. Self-filing may be enough for a single owner with no employees and simple operations. For multi-member LLCs or businesses with significant assets or several investors, attorney-drafted documents are worth it.',
  },
];

const RELATED = [
  { href: '/business/business-formation', title: 'Business formation', subtitle: 'Choosing the right structure for an Ohio company' },
  { href: '/business/contract-drafting-review', title: 'Contract drafting and review', subtitle: 'The contracts and agreements your LLC signs' },
  { href: '/business/business-compliance', title: 'Business compliance', subtitle: 'Keeping your LLC in good standing in Ohio' },
  { href: '/business/partnership-disputes', title: 'Partnership disputes', subtitle: 'Disagreements in multi-member LLCs and partnerships' },
  { href: '/business/business-dissolution', title: 'Business dissolution', subtitle: 'Winding up an Ohio LLC' },
];

export default function LLCFormationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Forming an LLC in Ohio"
        description="Starting an LLC in Ohio means filing Articles of Organization with the Secretary of State for $99. The operating agreement and how you run the company decide how well it protects you."
      />

      <KeyFacts
        facts={[
          { figure: '$99', label: 'Ohio Secretary of State fee for Articles of Organization' },
          { figure: '$39', label: 'optional name reservation' },
          { figure: 'Free', label: 'an EIN from the IRS' },
        ]}
      />

      <Section
        title="What an Ohio LLC gives you"
        intro={
          <p>
            An LLC formed under ORC Chapter 1706, the Ohio LLC Act, shields members from the company&rsquo;s debts under ORC 1706.26, allows pass-through
            taxation and needs less formal governance than a corporation.
          </p>
        }
      >
        <p>
          That combination makes the LLC the most commonly chosen structure for new Ohio businesses. LLC formation is one of the most
          requested services in the firm&rsquo;s <Link href="/business">Ohio business law practice</Link>, from the Articles of
          Organization through the operating agreement and compliance after formation. For other entity types, see{' '}
          <Link href="/business/business-formation">the overall business formation process</Link>.
        </p>
        <p>
          The firm&rsquo;s blog walks through{' '}
          <Link href="/our-law-firm/blog/forming-llc-ohio-step-by-step">forming an LLC in Ohio step by step</Link> and{' '}
          <Link href="/our-law-firm/blog/do-i-need-llc-for-business">whether you need an LLC for your business</Link>.
        </p>
      </Section>

      <Section title="The Ohio LLC formation process" tone="ice">
        <Steps
          steps={[
            { title: 'Choose a name', body: 'Distinguishable from other registered names, and including "LLC," "L.L.C." or "Limited Liability Company."' },
            { title: 'Designate a statutory agent', body: 'A registered agent with an Ohio address, who receives legal notices for the LLC.' },
            { title: 'File the Articles of Organization', body: 'With the Ohio Secretary of State, online or by mail. The current fee is $99. State the management structure.' },
            {
              title: 'Draft the operating agreement',
              body: 'Not required under ORC 1706.08, but strongly advisable. It sets ownership percentages, profit and loss allocation, management, voting, and member withdrawal or dissolution.',
            },
            { title: 'Get an EIN and licenses', body: 'An EIN from the IRS and any business licenses and permits that apply.' },
          ]}
        />
      </Section>

      <LocationsWeServe title="Business" />

      <Section title="Management, taxes and costs" tone="ice">
        <PointGrid
          points={[
            { title: 'Member-managed', body: 'Every member takes part in daily management. Suits small businesses where all owners are active.' },
            { title: 'Manager-managed', body: 'Designated managers, members or not, run operations. Suits passive investors, different member roles or planned growth.' },
          ]}
        />
        <FactTable
          title="LLC formation costs, taxes and ongoing fees"
          rows={[
            { label: 'Federal default', value: 'Single-member: taxed as a sole proprietorship. Multi-member: taxed as a partnership. S-corp or C-corp elections are available.' },
            {
              label: 'Commercial Activity Tax',
              value: 'ORC Chapter 5751. Applies above $150,000 in Ohio taxable gross receipts a year. 0.26% of gross receipts above the $1 million annual threshold, with a minimum tax for lower receipts. Registration with the Ohio Department of Taxation once the threshold is met.',
            },
            { label: 'Optional filing extras', value: 'Name reservation ($39), expedited processing and a certified copy.' },
            { label: 'Ongoing', value: 'Professional statutory agent fees, if you use one, and municipal business license fees.' },
          ]}
        />
      </Section>

      <Section title="Keeping the liability shield">
        <p>
          ORC 1706.26 protects members from the LLC&rsquo;s debts, but Ohio courts can pierce the veil when the LLC is a mere alter ego
          of its owners.
        </p>
        <PointGrid
          points={[
            { title: 'Mixed funds', body: 'Personal and business money run through the same accounts.' },
            { title: 'Undercapitalization', body: 'The LLC never had enough capital to cover its obligations.' },
            { title: 'Personal guarantees', body: 'A member who guarantees a debt is personally liable for it.' },
            { title: 'Personal torts', body: 'A member who personally commits a tort remains liable for it.' },
          ]}
        />
        <Callout title="Habits that preserve the shield">
          Separate bank accounts, adequate capital, documented decisions and transactions, and no personal guarantees of LLC
          obligations where they can be avoided.
        </Callout>
      </Section>

      <Section title="What the firm does on an LLC formation" tone="ice">
        <PointGrid
          points={[
            { title: 'Files the Articles', body: 'Prepares and files them, with the statutory agent and management structure properly designated.' },
            { title: 'Drafts the operating agreement', body: 'Ownership, management, capital contributions, profit distribution and dispute resolution under ORC 1706.08.' },
            { title: 'Covers tax and compliance', body: 'EIN registration, CAT obligations under ORC Chapter 5751 and business licensing.' },
            { title: 'Compares entity types', body: 'LLC, corporation and other Ohio structures, against your goals and tax situation.' },
            { title: 'Stays on as you grow', body: 'Contracts, disputes and day-to-day legal matters.' },
          ]}
        />
        <p>
          To discuss forming an LLC, <Link href="/contact">contact Jwayyed Law LLC</Link> at (614) 285-5482. Related services include{' '}
          <Link href="/business/contract-drafting-review">contract drafting and review</Link> and{' '}
          <Link href="/business/business-dissolution">business dissolution</Link>.
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
