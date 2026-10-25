import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Montgomery County Business & LLC Formation',
  description:
    'LLC formation and business law for Dayton, Kettering, Miamisburg and Trotwood: startups, healthcare practices and manufacturers. Call (614) 285-5482.',
  keywords: ['business lawyer Montgomery County', 'LLC formation Dayton Ohio', 'Montgomery County business attorney', 'LLC formation Kettering Ohio', 'small business attorney Dayton Ohio'],
  openGraph: {
    title: 'Montgomery County Business & LLC Formation | Jwayyed Law LLC',
    description: 'Business formation and LLC law for Dayton, Kettering, Trotwood, Huber Heights, Miamisburg and Vandalia.',
    url: 'https://www.jjlawohio.com/locations/montgomery-county/business-formation-llc-montgomery-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/montgomery-county/business-formation-llc-montgomery-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
  { label: 'Business & LLC Formation - Montgomery County', href: '/locations/montgomery-county/business-formation-llc-montgomery-county' },
];

const faqs = [
  {
    question: 'How do I form an LLC in Ohio?',
    answer:
      'File Articles of Organization with the Ohio Secretary of State and pay the filing fee. Ohio LLCs are governed by ORC Chapter 1706, the Ohio Revised Limited Liability Company Act, effective February 2022. After filing you must keep a statutory agent with an Ohio physical address (ORC 1705.06), prepare a written operating agreement, get a federal EIN and complete the tax registrations that apply with the Ohio Department of Taxation. An attorney makes sure the formation is complete and the operating agreement protects every owner.',
  },
  {
    question: 'What is the difference between an LLC and a corporation in Ohio?',
    answer:
      "Ohio LLCs (ORC Chapter 1706) are flexible, have pass-through taxation by default and need less formal compliance than Ohio corporations (ORC Chapter 1701), which require a board of directors, annual meetings, officers and formal records. Montgomery County's tech, manufacturing and professional services businesses have different needs: some prefer an LLC for simplicity, others an S or C corporation for investor flexibility or a particular tax treatment.",
  },
  {
    question: 'What business opportunities exist in the Dayton and Montgomery County area?',
    answer:
      'Dayton has deep roots in manufacturing and aviation and a growing startup and technology scene. The Dayton Development Coalition and other regional resources support business formation and expansion. The county is home to healthcare, professional services, manufacturing, logistics, real estate and a rising number of technology startups, so formation needs range from single-member professional LLCs to multi-member holding companies and manufacturing corporations.',
  },
  {
    question: 'What is an operating agreement and why is it critical for my Ohio LLC?',
    answer:
      "It is the internal governing document that decides how your LLC runs. ORC Chapter 1706 allows wide flexibility in what it can set, including how profits and losses are allocated, how decisions are made, who can bind the LLC, limits on transferring membership interests, and how members exit or are bought out. Without a written, customized agreement, Ohio's default rules apply, and they may not match your intentions or protect your investment.",
  },
  {
    question: 'What is a statutory agent and how do I maintain compliance?',
    answer:
      "Ohio law (ORC 1705.06 as incorporated into Chapter 1706) requires every Ohio LLC to designate a statutory agent: a person or entity with an Ohio physical address authorized to receive lawsuits, government notices and other official correspondence for the LLC. The agent's information must be kept current with the Secretary of State. If it goes out of date, the LLC can miss a legal deadline. Jwayyed Law LLC can serve as your statutory agent or help you set up the designation.",
  },
  {
    question: "How does Ohio's Revised LLC Act (ORC Chapter 1706) affect my business?",
    answer:
      'The Ohio Revised Limited Liability Company Act took effect February 11, 2022, replacing the former Chapter 1705. Every Ohio LLC, whenever it was formed, is now governed by Chapter 1706. Key changes include series LLCs (one entity can segregate assets and liabilities across distinct series), more detailed rules on which operating agreement terms are mandatory and which are defaults, more flexible management, and alignment with modern practice. If your LLC was formed before 2022, review the operating agreement under Chapter 1706.',
  },
  {
    question: 'Do I need an EIN for my Ohio LLC?',
    answer:
      'An EIN is required for Ohio LLCs with more than one member, with employees, or electing corporate tax treatment. A single-member LLC without employees may use the owner’s SSN, but an EIN is strongly recommended: banks typically require one for a business account, and it keeps your SSN off business documents. Healthcare and professional services businesses in Montgomery County also need an EIN for billing and contracting. Getting one is free through the IRS website.',
  },
  {
    question: 'Why hire an attorney for business formation instead of using an online service?',
    answer:
      'Online services handle the basic paperwork but give no legal advice. They cannot tell you whether an LLC, S corporation or C corporation fits your Dayton-area business, how to draft an operating agreement for your ownership arrangement, which tax elections apply, or what industry licensing and compliance duties you face. Attorney-guided formation protects personal assets, lowers the risk of owner disputes and structures the business around your goals.',
  },
];

export default function BusinessFormationLLCMontgomeryCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Business Formation and LLC in Montgomery County',
    serviceType: 'Business Law',
    areaServed: { '@type': 'County', name: 'Montgomery County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/montgomery-county/business-formation-llc-montgomery-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business and LLC formation in Montgomery County"
        description="LLC formation and business counsel for Dayton, Kettering, Trotwood, Huber Heights, Miamisburg and Vandalia, from startups in Dayton's urban core to professional practices in Kettering."
      />

      <Section
        title="Businesses in Montgomery County"
        intro={
          <p>
            Montgomery County is one of Ohio&rsquo;s major urban and economic centers. Dayton, the birthplace of aviation, has a long
            manufacturing heritage and a growing technology and healthcare economy.
          </p>
        }
      >
        <PointGrid
          points={[
            {
              title: 'Healthcare providers',
              body: 'Licensed providers may need professional corporations or PLLCs, plus an EIN for billing and contracting.',
            },
            { title: 'Manufacturers', body: 'Clear ownership structures and contracts with suppliers and customers.' },
            {
              title: 'Technology startups',
              body: 'Intellectual property assignments and equity arrangements for founders and early investors.',
            },
            {
              title: 'Regional resources',
              body: 'The Dayton Development Coalition and other regional groups support formation and expansion.',
            },
          ]}
        />
      </Section>

      <Section title="Ohio LLC law in brief" tone="ice">
        <FactTable
          title="The rules that apply"
          rows={[
            {
              label: 'Governing law',
              value: 'ORC Chapter 1706, the Ohio Revised Limited Liability Company Act, effective February 2022. It replaced Chapter 1705.',
            },
            {
              label: 'What changed',
              value: 'Series LLCs that separate assets across distinct lines of operation, more flexible management and clearer rules on customizing operating agreements.',
            },
            { label: 'Statutory agent', value: 'Required (ORC 1705.06), with an Ohio physical address kept current with the Secretary of State.' },
            { label: 'Corporations', value: 'Remain under ORC Chapter 1701.' },
          ]}
        />
        <h3>The operating agreement</h3>
        <p>
          For a multi-member LLC, the operating agreement carries the most weight. Chapter 1706&rsquo;s default rules were written for
          the average case, not your ownership percentages or management plans. A well-drafted agreement sets profit sharing,
          decision-making, member exits and dispute resolution before problems arise.
        </p>
        <p>
          Formation is handled through the Ohio Secretary of State, so the firm can help Montgomery County clients anywhere in Ohio.
          Use <Link href="/contact">the contact page</Link> or call (614) 285-5482, or read about the firm&rsquo;s{' '}
          <Link href="/business">business law services</Link>.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid
          links={[
            { href: '/locations/montgomery-county', title: 'Montgomery County', subtitle: 'Every service the firm offers in the county' },
            { href: '/business/llc-formation', title: 'LLC formation', subtitle: 'Forming an Ohio LLC step by step' },
            { href: '/business/shareholder-disputes', title: 'Shareholder disputes', subtitle: 'When owners disagree' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
