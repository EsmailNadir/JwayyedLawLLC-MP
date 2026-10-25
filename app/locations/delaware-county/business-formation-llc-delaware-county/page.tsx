import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Delaware County Business Attorney',
  description:
    'LLC formation and business law for Delaware, Powell, Dublin and Lewis Center: professional practices, tech firms and real estate holdings. (614) 285-5482.',
  keywords: ['business lawyer Delaware County', 'LLC formation Delaware Ohio', 'Delaware County business attorney', 'LLC formation Powell Ohio', 'small business attorney Lewis Center Ohio'],
  openGraph: {
    title: 'Delaware County Business Attorney | Jwayyed Law LLC',
    description: 'Business formation and LLC law for Delaware, Powell, Westerville, Dublin, Lewis Center and Sunbury.',
    url: 'https://www.jjlawohio.com/locations/delaware-county/business-formation-llc-delaware-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/delaware-county/business-formation-llc-delaware-county' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Delaware County', href: '/locations/delaware-county' },
  { label: 'Business & LLC Formation - Delaware County', href: '/locations/delaware-county/business-formation-llc-delaware-county' },
];

const faqs = [
  {
    question: 'How do I form an LLC in Ohio?',
    answer:
      'File Articles of Organization with the Ohio Secretary of State and pay the filing fee. Ohio LLCs are governed by ORC Chapter 1706, the Ohio Revised Limited Liability Company Act, effective February 2022. After filing, designate a statutory agent with an Ohio physical address (ORC 1705.06), prepare a written operating agreement, get a federal EIN, open a business bank account and register with the Ohio Department of Taxation if it applies. An attorney makes sure each step is right and the documents match how you want to run the business.',
  },
  {
    question: 'What is the difference between an LLC and a corporation in Delaware County?',
    answer:
      'Both protect personal assets from most business debts and lawsuits. Ohio LLCs (ORC Chapter 1706) are flexible, have pass-through taxation by default and need fewer formalities than corporations (ORC Chapter 1701), which have a board of directors, officers and annual meetings. Corporations fit when seeking venture capital, issuing several stock classes or planning an IPO. Delaware County has many professional services and tech companies, and the right choice depends on industry, ownership and growth plans.',
  },
  {
    question: 'What is an operating agreement and is it required for an Ohio LLC?',
    answer:
      "Ohio does not require a written operating agreement, but ORC Chapter 1706 strongly encourages one, and for multi-member LLCs it is practically essential. It defines ownership percentages, profit and loss allocation, management duties, voting rights, member exits, buy-sell terms and dissolution. Without it, Ohio's default rules apply and may conflict with what you and your partners intend. Where co-founders have different expectations, a detailed written agreement prevents costly disputes.",
  },
  {
    question: 'Why is Delaware County experiencing business growth, and what legal needs does it create?',
    answer:
      "Delaware County is one of Ohio's fastest-growing counties. Residential development in Powell, Lewis Center and Sunbury has driven demand for professional services, healthcare, retail and technology businesses, and many Columbus-area companies are expanding north into the county. That growth creates needs for new service LLCs, professional corporations for licensed practitioners and holding company structures for real estate investors.",
  },
  {
    question: 'What is a statutory agent and why does Ohio require one?',
    answer:
      "Ohio Revised Code 1705.06 requires every Ohio LLC to keep a designated statutory agent: a person or entity with an Ohio physical address authorized to receive legal process and official notices for the LLC. The agent information must be kept current with the Secretary of State. If you move, change agents or let the agent's address lapse, the LLC may miss a lawsuit or regulatory notice. Jwayyed Law LLC can serve as your statutory agent or help you designate one.",
  },
  {
    question: 'How do I register for Ohio taxes when starting a new business?',
    answer:
      "Businesses that sell taxable goods or services must register with the Ohio Department of Taxation for a vendor's license to collect and remit sales tax. Businesses with employees must register for employer withholding and unemployment insurance. Depending on the industry, you may also need local licenses through Delaware City, Powell or other municipalities.",
  },
  {
    question: 'Do I need an EIN for my Ohio LLC?',
    answer:
      'An EIN from the IRS is required for Ohio LLCs with more than one member, with employees, or electing to be taxed as a corporation or S corporation. Single-member LLCs benefit too: most banks require one for a business account, and it keeps your Social Security Number off business paperwork. It is free through the IRS website and takes minutes, and the firm has every LLC client get one during formation.',
  },
  {
    question: 'Why hire an attorney for business formation rather than doing it myself?',
    answer:
      'Online formation services are cheap but give no legal advice. They cannot analyze whether an LLC or corporation fits, draft an operating agreement that protects every member, advise on tax elections, structure ownership to limit liability or flag industry compliance duties. Attorney-guided formation costs little compared with fixing problems caused by improper formation.',
  },
];

export default function BusinessFormationLLCDelawareCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Business Formation and LLC in Delaware County',
    serviceType: 'Business Law',
    areaServed: { '@type': 'County', name: 'Delaware County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/delaware-county/business-formation-llc-delaware-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business and LLC formation in Delaware County"
        description="LLC formation and business counsel for Delaware, Powell, Westerville, Dublin, Lewis Center and Sunbury, as Columbus companies and new founders move north."
      />

      <Section
        title="Businesses in Delaware County"
        intro={
          <p>
            Delaware County is one of Ohio&rsquo;s most rapidly growing counties. It draws small businesses, professional firms and
            technology companies relocating from Columbus, plus entrepreneurs serving its expanding residential population.
          </p>
        }
      >
        <PointGrid
          points={[
            {
              title: 'Licensed professionals',
              body: 'Medical practices, law firms and other licensed professionals may need a professional corporation (PC) or professional LLC (PLLC) instead of a standard LLC.',
            },
            { title: 'Technology and consulting', body: 'Entity choice for investors and growth, from LLC to corporation.' },
            { title: 'Real estate investors', body: 'Holding company structures that separate properties and limit cross-liability.' },
            {
              title: 'Small co-owned LLCs',
              body: 'In two- or three-member LLCs, disagreements over management, profit sharing or exit are common, and a customized operating agreement sets the rules in advance.',
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
              value: 'ORC Chapter 1706, the Ohio Revised Limited Liability Company Act, which replaced Chapter 1705 in February 2022.',
            },
            {
              label: 'What changed',
              value: 'Series LLC capabilities, more flexible management and clearer rules on what an operating agreement can and cannot modify.',
            },
            { label: 'Statutory agent', value: 'Required (ORC 1705.06), with an Ohio physical address.' },
            { label: 'Corporations', value: 'Remain under ORC Chapter 1701.' },
            { label: 'Local licenses', value: 'Possibly through Delaware City, Powell or other municipalities.' },
          ]}
        />
        <p>
          Generic templates from online formation services do not address the dynamics of your ownership group. The firm prepares
          operating agreements for your business, co-owners and industry, with clear ways to resolve the conflicts most likely to
          arise.
        </p>
        <p>
          Formation is administered through the Ohio Secretary of State, so the firm can help Delaware County clients wherever they
          are. Use <Link href="/contact">the contact page</Link> or call (614) 285-5482, or read about the firm&rsquo;s{' '}
          <Link href="/business">business law practice</Link>.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid
          links={[
            { href: '/locations/delaware-county', title: 'Delaware County', subtitle: 'Every service the firm offers in the county' },
            { href: '/business/llc-formation', title: 'LLC formation', subtitle: 'Forming an Ohio LLC step by step' },
            { href: '/business/business-formation', title: 'Business formation', subtitle: 'Choosing the right entity' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
