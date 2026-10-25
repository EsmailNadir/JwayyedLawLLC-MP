import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Business & LLC Formation in Pickaway County',
  description:
    'LLC formation and business law for Circleville, Ashville, Commercial Point and the US 23 corridor, including farm LLCs. Call (614) 285-5482.',
  keywords: ['business lawyer Pickaway County', 'LLC formation Circleville Ohio', 'Pickaway County business attorney', 'small business attorney Ashville Ohio', 'LLC formation Ohio south Columbus'],
  openGraph: {
    title: 'Business & LLC Formation in Pickaway County | Jwayyed Law LLC',
    description: 'Business formation and LLC law for Circleville, Ashville, Commercial Point, South Bloomfield and Williamsport.',
    url: 'https://www.jjlawohio.com/locations/pickaway-county/business-formation-llc-pickaway-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/pickaway-county/business-formation-llc-pickaway-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Pickaway County', href: '/courts/pickaway-county' },
  { label: 'Business & LLC Formation - Pickaway County', href: '/locations/pickaway-county/business-formation-llc-pickaway-county' },
];

const faqs = [
  {
    question: 'How do I form an LLC in Ohio?',
    answer:
      'File Articles of Organization with the Ohio Secretary of State and pay the filing fee. Ohio LLCs are governed by ORC Chapter 1706, the Ohio Revised Limited Liability Company Act, effective February 2022. After formation you must keep a statutory agent with a physical Ohio address (ORC 1705.06), adopt a written operating agreement, get a federal EIN and register with the Ohio Department of Taxation as needed. An attorney makes sure each step is correct and the governing documents reflect how you want the business to run.',
  },
  {
    question: 'What is the difference between an LLC and a corporation in Ohio?',
    answer:
      'Ohio LLCs (ORC Chapter 1706) have pass-through taxation by default and few ongoing formalities. Ohio corporations (ORC Chapter 1701) need a board of directors, officers, annual meetings and detailed records. For most Pickaway County small businesses (service companies, retail stores, agricultural operations and professional practices) an LLC combines liability protection with simple operation. A corporation fits better when outside investment or several stock classes are needed.',
  },
  {
    question: 'What types of businesses are common in Pickaway County?',
    answer:
      "Pickaway County's economy includes agriculture, small manufacturing, construction, retail and food service, and a growing number of service and professional businesses serving Circleville and the fast-developing suburban communities of Commercial Point, Ashville and South Bloomfield along the US 23 corridor. The Honda manufacturing plant in Marysville (Union County) also influences the regional economy. An LLC suits most of these, from a sole owner's service company to a construction company with several partners.",
  },
  {
    question: 'What is an operating agreement and why does my Ohio LLC need one?',
    answer:
      "It is the internal governance document of your LLC. Under ORC Chapter 1706, members can customize how the business runs, but only through a written operating agreement. Without one, Ohio's default rules govern, and they may not match your intentions. A good agreement covers profit and loss allocation, management authority, voting rights, limits on transferring membership interests, what happens when a member exits or dies, and how disputes are resolved. For multi-member LLCs in Pickaway County, a customized agreement prevents costly disputes.",
  },
  {
    question: 'What is a statutory agent and how do I designate one?',
    answer:
      "Ohio Revised Code 1705.06 (incorporated into Chapter 1706) requires every Ohio LLC to keep a statutory agent: a person or entity with a physical Ohio address who receives lawsuits and official notices for the LLC. You name the agent in the Articles of Organization and must update the Secretary of State promptly if the agent or address changes. Without a current agent, the LLC can miss a lawsuit or regulatory notice. The firm can serve as your statutory agent or guide the designation.",
  },
  {
    question: 'How does the Ohio Revised LLC Act (ORC Chapter 1706) differ from the old law?',
    answer:
      'The Ohio Revised Limited Liability Company Act took effect February 11, 2022, replacing Chapter 1705 for all Ohio LLCs. It authorizes series LLCs (one LLC can create distinct series with separate assets, liabilities and members), clarifies what an operating agreement can modify or waive, allows more flexible management including corporate-style governance, and fits modern business practice better. An LLC formed before 2022 under Chapter 1705 automatically became subject to Chapter 1706, so reviewing an older operating agreement is advisable.',
  },
  {
    question: 'Do I need to register my Pickaway County business with state tax authorities?',
    answer:
      "Yes, if you sell taxable goods or services: you need a vendor's license from the Ohio Department of Taxation to collect and remit sales tax. With employees, you must register for employer withholding and unemployment insurance. Depending on the business and where it is in the county, local licensing or zoning approval may also be needed from the City of Circleville or the township. The firm advises new business clients on each registration that applies.",
  },
  {
    question: 'Why is it worth hiring an attorney to form my business in Pickaway County?',
    answer:
      'Online formation services process paperwork but give no legal advice. They cannot tell you whether an LLC or S corporation fits better, how to draft an operating agreement that protects your investment, which tax elections are available, or how to structure ownership among family members. For businesses in the US 23 growth corridor with real estate, employees or several owners, proper formation matters most. Attorney-guided formation costs little next to fixing personal liability exposure, ownership disputes or tax penalties later.',
  },
];

export default function BusinessFormationLLCPickawayCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Business Formation and LLC in Pickaway County',
    serviceType: 'Business Law',
    areaServed: { '@type': 'County', name: 'Pickaway County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/pickaway-county/business-formation-llc-pickaway-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business and LLC formation in Pickaway County"
        description="LLC formation for Circleville, Ashville, Commercial Point, South Bloomfield and Williamsport, from farm operations to new businesses on the US 23 corridor."
      />

      <Section
        title="Businesses in Pickaway County"
        intro={
          <p>
            Pickaway County sits directly south of Columbus along US 23, where residential and commercial growth is pushing out from
            the capital region. Commercial Point, Ashville and South Bloomfield are growing fast, and Circleville remains the county
            seat with a mix of agriculture, retail and service businesses.
          </p>
        }
      >
        <PointGrid
          points={[
            {
              title: 'Farms and agribusiness',
              body: 'Crop farms, livestock operations and agribusinesses get liability protection that sole proprietorships and informal partnerships lack. A farm LLC can be set up for succession, family ownership and separation from personal finances.',
            },
            {
              title: 'Service and retail in Circleville',
              body: 'Proper formation with a real operating agreement, not a generic online template that leaves the hard questions open.',
            },
            {
              title: 'The US 23 growth corridor',
              body: 'Businesses with real estate, employees or several owners, where structure matters most.',
            },
            {
              title: 'Local registrations',
              body: 'Vendor’s license, employer accounts, and any City of Circleville or township licensing or zoning approval.',
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
              value: 'Series LLC authority, more flexible management, and clearer rules on which operating agreement terms are mandatory and which can be modified.',
            },
            { label: 'Statutory agent', value: 'Required (ORC 1705.06), with a physical Ohio address.' },
            { label: 'Corporations', value: 'Remain under ORC Chapter 1701.' },
          ]}
        />
        <h3>Why the operating agreement matters</h3>
        <p>
          A common mistake is forming an LLC without a real operating agreement. When owners disagree or a member wants out, a missing
          or vague agreement turns into expensive conflict. The firm drafts agreements for your ownership arrangement, and for farm
          families it covers succession and the move from one generation to the next.
        </p>
      </Section>

      <Section title="How an Ohio LLC is formed">
        <Steps
          steps={[
            { title: 'Choose the structure', body: 'LLC or corporation, and the tax elections that fit.' },
            { title: 'File the articles', body: 'Articles of Organization with the Ohio Secretary of State, naming the statutory agent.' },
            { title: 'Draft the operating agreement', body: 'Management, money, exits, succession and disputes.' },
            { title: 'Register and set up', body: 'EIN, Ohio Department of Taxation registration and local approvals.' },
          ]}
        />
        <p>
          Formation is administered through the Ohio Secretary of State, so the firm can help Pickaway County clients from anywhere in
          Ohio. Use <Link href="/contact">the contact page</Link> or call (614) 285-5482, or read about the firm&rsquo;s{' '}
          <Link href="/business">business law practice</Link>.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid
          links={[
            { href: '/locations/pickaway-county', title: 'Pickaway County', subtitle: 'Every service the firm offers in the county' },
            { href: '/business/llc-formation', title: 'LLC formation', subtitle: 'Forming an Ohio LLC step by step' },
            { href: '/business/partnership-disputes', title: 'Partnership disputes', subtitle: 'When owners disagree' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
