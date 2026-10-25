import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Clinton County Business Attorney',
  description:
    'LLC formation and business law for Wilmington, Sabina and Blanchester: farms, logistics and service businesses under Ohio Chapter 1706. Call (614) 285-5482.',
  keywords: ['business lawyer Clinton County', 'LLC formation Wilmington Ohio', 'Clinton County business attorney', 'small business attorney Wilmington Ohio', 'LLC formation Ohio'],
  openGraph: {
    title: 'Clinton County Business Attorney | Jwayyed Law LLC',
    description: 'Business formation and LLC law for Wilmington, Sabina, Blanchester, Clarksville and Port William.',
    url: 'https://www.jjlawohio.com/locations/clinton-county/business-formation-llc-clinton-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/clinton-county/business-formation-llc-clinton-county' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Clinton County', href: '/locations/clinton-county' },
  { label: 'Business & LLC Formation - Clinton County', href: '/locations/clinton-county/business-formation-llc-clinton-county' },
];

const faqs = [
  {
    question: 'How do I form an LLC in Ohio?',
    answer:
      "File Articles of Organization with the Ohio Secretary of State and pay the filing fee. Under Ohio Revised Code Chapter 1706, the Ohio Revised Limited Liability Company Act effective February 2022, the LLC is created when the Secretary of State processes the filing. You must also designate a statutory agent with an Ohio street address under ORC 1705.06. After formation, prepare a written operating agreement and get a federal EIN. An attorney makes sure the formation is complete and the operating agreement protects every member's interests.",
  },
  {
    question: 'What is the difference between an LLC and a corporation in Ohio?',
    answer:
      'Ohio LLCs (ORC Chapter 1706) offer flexible management, pass-through taxation by default and simpler ongoing compliance than corporations (ORC Chapter 1701), which need a board of directors, annual meetings, minutes and more formal records. Corporations usually suit businesses seeking outside investment or planning a public offering. LLCs suit small businesses, service companies, agricultural operations and professional practices that want simplicity and liability protection.',
  },
  {
    question: 'What is an operating agreement and why does my Ohio LLC need one?',
    answer:
      'It is the internal governing document of your LLC. ORC Chapter 1706 allows a lot of flexibility, but the default statutory rules apply wherever the operating agreement is silent. A written agreement sets how profits and losses are shared, how management decisions are made, who can bind the LLC, what happens when a member exits and how disputes are resolved. The firm drafts agreements for your business and ownership arrangement.',
  },
  {
    question: 'What businesses are common in Clinton County, and how can an attorney help?',
    answer:
      "Clinton County's economy includes agriculture, logistics (building on the legacy of air cargo operations near Wilmington), light manufacturing, and retail and service businesses. Family farms, agribusinesses and food processors often benefit from an LLC that separates business and personal liability. Logistics and warehousing businesses near Wilmington may need contracts, employment agreements and structure advice. Service businesses in Blanchester and Sabina benefit from clear operating agreements and ongoing counsel.",
  },
  {
    question: 'What is a statutory agent and how do I designate one for my Ohio LLC?',
    answer:
      "Ohio law requires every LLC to keep a statutory agent: a person or entity in Ohio, with a physical Ohio street address, authorized to receive legal process and official correspondence for the LLC. You name the agent in the Articles of Organization and must update it promptly if it changes. Without a current agent, the LLC can miss service of a lawsuit or a regulatory notice. The firm can serve as your statutory agent or set up a compliant designation.",
  },
  {
    question: 'Do I need to register with the Ohio Department of Taxation when forming my business?',
    answer:
      'Yes, if you sell taxable goods or services in Ohio, you must register with the Ohio Department of Taxation to collect and remit sales tax. With employees you may also need to register for employer withholding. Depending on your industry, local licenses or permits may be required through the City of Wilmington or Clinton County.',
  },
  {
    question: 'What does an Ohio LLC operating agreement need to cover?',
    answer:
      "The LLC's name and principal address; member names, ownership percentages and capital contributions; profit and loss allocation; management structure (member-managed or manager-managed) and voting rights; limits on transferring membership interests; what happens when a member dies, becomes incapacitated or wants to exit; admitting new members; dissolution; and dispute resolution. Under ORC Chapter 1706 many default rules can be changed in the agreement, which is why a tailored document beats a generic template.",
  },
  {
    question: 'Why hire an attorney for business formation instead of using an online service?',
    answer:
      'Online services file the basic paperwork but give no legal advice. They cannot tell you whether an LLC or corporation suits you, how to structure the operating agreement, which tax elections are available, how to handle disputes among several owners, or what contracts and compliance duties apply to your industry. Mistakes at formation (the wrong structure, a generic operating agreement, a business that is not properly capitalized) can be expensive or impossible to fix later.',
  },
];

export default function BusinessFormationLLCClintonCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Business Formation and LLC in Clinton County',
    serviceType: 'Business Law',
    areaServed: { '@type': 'County', name: 'Clinton County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/clinton-county/business-formation-llc-clinton-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business and LLC formation in Clinton County"
        description="LLC formation and business counsel for Wilmington, Sabina, Blanchester, Clarksville and Port William, from family farms to logistics companies near Wilmington."
      />

      <Section
        title="Businesses in Clinton County"
        intro={
          <p>
            Clinton County&rsquo;s economy spans agriculture, logistics, light manufacturing and the small and mid-sized businesses
            that serve Wilmington, Sabina, Blanchester, Clarksville and Port William.
          </p>
        }
      >
        <PointGrid
          points={[
            {
              title: 'Farms and food processing',
              body: 'Family farms, agribusinesses and food processors run as sole proprietorships or informal partnerships expose their owners to unlimited personal liability. An LLC or corporation separates business debts from personal assets.',
            },
            {
              title: 'Logistics and warehousing',
              body: 'For businesses in the Wilmington area: customer and vendor contracts, employment agreements and a sound entity structure.',
            },
            {
              title: 'Service businesses',
              body: 'Clear operating agreements and ongoing counsel for owners in Blanchester, Sabina and across the county.',
            },
            {
              title: 'Local registrations',
              body: 'Sales tax and withholding registration, and any City of Wilmington or Clinton County licenses or permits.',
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
              value: 'ORC Chapter 1706, the Ohio Revised Limited Liability Company Act, in effect since February 2022. It replaced Chapter 1705.',
            },
            {
              label: 'Flexibility',
              value: 'Member-managed or manager-managed, optional corporate governance features, and series LLCs that separate assets and liabilities across business activities.',
            },
            { label: 'Statutory agent', value: 'Required (ORC 1705.06), with an Ohio street address.' },
            { label: 'Corporations', value: 'Remain under ORC Chapter 1701.' },
          ]}
        />
        <h3>The operating agreement</h3>
        <p>
          The operating agreement is often overlooked. Without a written, customized one, Chapter 1706&rsquo;s default rules govern,
          and they may not reflect how you and your co-owners plan to run the business, divide profits or handle a member who wants
          out. The firm drafts agreements that address those questions before they become disputes.
        </p>
        <p>
          Ohio business formation is handled through the Ohio Secretary of State, so the firm can help Clinton County clients wherever
          they are in Ohio. Use <Link href="/contact">the contact page</Link> or call (614) 285-5482, or read about the firm&rsquo;s{' '}
          <Link href="/business">business law services</Link>.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid
          links={[
            { href: '/locations/clinton-county', title: 'Clinton County', subtitle: 'Every service the firm offers in the county' },
            { href: '/business/llc-formation', title: 'LLC formation', subtitle: 'Forming an Ohio LLC step by step' },
            { href: '/business/employment-agreements', title: 'Employment agreements', subtitle: 'When you hire staff' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
