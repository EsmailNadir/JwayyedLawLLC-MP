import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Business & LLC Formation in Greene County',
  description:
    'LLC formation and business law for Xenia, Fairborn, Beavercreek and Yellow Springs, including defense contractors near Wright-Patterson AFB.',
  keywords: ['business lawyer Greene County', 'LLC formation Xenia Ohio', 'Greene County business attorney', 'LLC formation Fairborn Ohio', 'small business attorney Beavercreek Ohio'],
  openGraph: {
    title: 'Business & LLC Formation in Greene County | Jwayyed Law LLC',
    description: 'Business formation and LLC law for Xenia, Fairborn, Beavercreek and Yellow Springs, near Wright-Patterson AFB.',
    url: 'https://www.jjlawohio.com/locations/greene-county/business-formation-llc-greene-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/greene-county/business-formation-llc-greene-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'Business & LLC Formation - Greene County', href: '/locations/greene-county/business-formation-llc-greene-county' },
];

const faqs = [
  {
    question: 'How do I form an LLC in Ohio?',
    answer:
      "File Articles of Organization with the Ohio Secretary of State and pay the filing fee. The LLC is governed by Ohio Revised Code Chapter 1706, the Ohio Revised Limited Liability Company Act, effective February 2022. After formation you must keep a statutory agent with an Ohio physical address (ORC 1705.06), adopt a written operating agreement, get a federal EIN and complete any required tax registrations. An attorney makes sure each step is done correctly and the governing documents fit your business and ownership.",
  },
  {
    question: 'What business opportunities exist near Wright-Patterson AFB in Greene County?',
    answer:
      'Wright-Patterson Air Force Base is one of the largest employers in Ohio and drives a lot of business in Greene County. Defense contractors, technology consultants, engineering companies, logistics providers and professional service firms operate in the WPAFB corridor across Fairborn and Beavercreek. Many must meet federal contracting requirements that call for formal legal structures, operating agreements and clear liability protection, and the firm helps them form the entity and keep the governance records contractors need.',
  },
  {
    question: 'What is the difference between an LLC and a corporation in Ohio?',
    answer:
      'Ohio LLCs (ORC Chapter 1706) offer flexible management, pass-through taxation by default and simpler compliance than Ohio corporations (ORC Chapter 1701), which need a board of directors, officers, annual meetings and formal records. Many defense contractors and technology companies near WPAFB choose corporations or S corporations for tax reasons or investor requirements. Small service businesses and professional practices in Xenia and Yellow Springs usually prefer LLCs.',
  },
  {
    question: 'What is an operating agreement and do I need one for my Ohio LLC?',
    answer:
      "It is the internal governance document of your LLC. Ohio law does not require a written operating agreement, but under ORC Chapter 1706 the statutory defaults apply wherever there is no contrary agreement, and they may not reflect your intentions. A customized agreement sets ownership percentages, profit and loss allocation, management authority, voting rights, transfer restrictions, buy-sell terms and dissolution. For multi-member LLCs in Greene County, a written agreement prevents disputes and protects every owner.",
  },
  {
    question: "What is a statutory agent and how do I comply with Ohio's requirement?",
    answer:
      "Ohio Revised Code 1705.06 requires every Ohio LLC to designate a statutory agent: a person or entity with a physical Ohio address authorized to receive legal process and government notices for the LLC. The agent's information must be kept current with the Ohio Secretary of State. If it goes out of date, the LLC may miss a lawsuit or a regulatory notice. Jwayyed Law LLC can serve as your statutory agent or advise on choosing and keeping one.",
  },
  {
    question: "How does Ohio's LLC law (ORC Chapter 1706) differ from the old law?",
    answer:
      'The Ohio Revised Limited Liability Company Act (ORC Chapter 1706), effective February 2022, replaced the former Chapter 1705. It introduced series LLCs (one LLC with separate series holding distinct assets, liabilities and members), clarified which operating agreement terms are mandatory and which are defaults that can be modified or waived, made management more flexible and aligned Ohio with modern LLC practice. Businesses formed before 2022 automatically moved to Chapter 1706.',
  },
  {
    question: 'Do I need an EIN for my new Ohio LLC?',
    answer:
      'An EIN is required for multi-member LLCs, LLCs with employees and LLCs that elect corporate tax treatment. Even a single-member LLC with no employees should get one: most banks require it for a business account, and it protects your Social Security Number. For defense contractors and technology companies in Greene County, an EIN is also important for federal contracting. Getting one is free and takes minutes online through the IRS website.',
  },
  {
    question: 'Why should I work with an attorney on business formation?',
    answer:
      'Online formation services are cheap but give no legal analysis. They cannot weigh whether an LLC, S corporation or C corporation fits your Greene County defense or technology business, draft a customized operating agreement, advise on federal contracting compliance or identify industry licensing and regulatory duties. For businesses in the specialized WPAFB contracting environment, legal guidance at formation is especially useful.',
  },
];

export default function BusinessFormationLLCGreeneCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Business Formation and LLC in Greene County',
    serviceType: 'Business Law',
    areaServed: { '@type': 'County', name: 'Greene County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/greene-county/business-formation-llc-greene-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business and LLC formation in Greene County"
        description="LLC formation and business counsel for Xenia, Fairborn, Beavercreek and Yellow Springs, including defense contractors and technology firms near Wright-Patterson AFB."
      />

      <Section
        title="Businesses in Greene County"
        intro={
          <p>
            Wright-Patterson Air Force Base, one of the largest military installations in the United States, shapes much of Greene
            County&rsquo;s economy. Xenia, Yellow Springs and Centerville add a varied small business community.
          </p>
        }
      >
        <PointGrid
          points={[
            {
              title: 'Defense contractors',
              body: 'In Fairborn and Beavercreek, the choice of LLC, S corporation or C corporation has tax and federal compliance effects, and documented governance may be needed for contract eligibility.',
            },
            { title: 'Technology and engineering', body: 'Entity choice for investor requirements, plus an EIN for federal contracting.' },
            { title: 'Small businesses', body: 'Service businesses and professional practices in Xenia and Yellow Springs that want an LLC’s simplicity.' },
            {
              title: 'Contracts',
              body: 'Vendor and customer agreements, employment agreements, NDAs and non-compete provisions drafted to be enforceable in Ohio.',
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
            { label: 'What changed', value: 'Series LLCs, clearer operating agreement modification rights and more flexible management.' },
            { label: 'Statutory agent', value: 'Required (ORC 1705.06), with a physical Ohio address kept current with the Secretary of State.' },
            { label: 'Corporations', value: 'Remain under ORC Chapter 1701.' },
          ]}
        />
        <h3>The operating agreement</h3>
        <p>
          The operating agreement is one of the most important parts of formation and one of the most often skipped. Without a
          written, customized one, Chapter 1706&rsquo;s default rules govern. In multi-member LLCs, disagreements over profit sharing,
          decision-making and exits are common, and a well-drafted agreement settles them in advance.
        </p>
        <p>
          Formation is handled through the Ohio Secretary of State, so the firm can help Greene County clients wherever they are.
          Use <Link href="/contact">the contact page</Link> or call (614) 285-5482, or read about the firm&rsquo;s{' '}
          <Link href="/business">business law services</Link>.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid
          links={[
            { href: '/locations/greene-county', title: 'Greene County', subtitle: 'Every service the firm offers in the county' },
            { href: '/business/llc-formation', title: 'LLC formation', subtitle: 'Forming an Ohio LLC step by step' },
            { href: '/business/non-compete-agreements', title: 'Non-compete agreements', subtitle: 'Enforceable restrictions in Ohio' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
