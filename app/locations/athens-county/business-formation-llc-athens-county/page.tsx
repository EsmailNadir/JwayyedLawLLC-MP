import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Athens County Business Attorney',
  description:
    'LLC formation, operating agreements and contracts for Athens County businesses, from Ohio University startups to Nelsonville firms. Call (614) 285-5482.',
  keywords: ['business lawyer Athens County', 'LLC formation Athens Ohio', 'Athens County business attorney', 'LLC formation Ohio University area', 'small business attorney Athens Ohio'],
  openGraph: {
    title: 'Athens County Business Attorney | Jwayyed Law LLC',
    description: 'Business formation and LLC law for Athens, Albany, Nelsonville, The Plains and the Ohio University community.',
    url: 'https://www.jjlawohio.com/locations/athens-county/business-formation-llc-athens-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/athens-county/business-formation-llc-athens-county' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Athens County', href: '/locations/athens-county' },
  { label: 'Business & LLC Formation - Athens County', href: '/locations/athens-county/business-formation-llc-athens-county' },
];

const faqs = [
  {
    question: 'How do I form an LLC in Ohio?',
    answer:
      'File Articles of Organization with the Ohio Secretary of State and pay the filing fee. Under Ohio Revised Code Chapter 1706, the Ohio Revised Limited Liability Company Act effective February 2022, the LLC exists once the Secretary of State processes the filing. You should also designate a statutory agent (ORC 1705.06), prepare an operating agreement covering management and member rights, and get a federal Employer Identification Number (EIN) from the IRS. An attorney makes sure the filing is correct and the governing documents match how the business will actually run.',
  },
  {
    question: 'What is the difference between an LLC and a corporation in Ohio?',
    answer:
      'Ohio LLCs are governed by ORC Chapter 1706. They allow member-managed or manager-managed structures, pass-through taxation by default and fewer formalities than corporations. Ohio corporations are governed by ORC Chapter 1701 and need a board of directors, officers, annual meetings and detailed records. A corporation may suit a business that plans to raise outside capital, issue several classes of stock or go public. LLCs usually suit small businesses, service firms and professional practices that want simplicity and flexibility.',
  },
  {
    question: 'What is an operating agreement, and do I need one for my Ohio LLC?',
    answer:
      'An operating agreement is the internal governance document for your LLC. Under ORC Chapter 1706 it can be written or oral, but a written agreement is strongly recommended for any LLC with more than one member, and for single-member LLCs too. It sets how profits and losses are allocated, how decisions are made, what happens when a member leaves, dies or becomes disabled, and how the LLC is dissolved. Without one, Ohio default rules govern the LLC, and they may not match your intentions.',
  },
  {
    question: 'What is a statutory agent and why does Ohio require one?',
    answer:
      "Ohio Revised Code 1705.06 (referencing Chapter 1706) requires every Ohio LLC to name a statutory agent: a person or entity authorized to receive legal papers and government notices for the LLC. The agent needs a physical street address in Ohio; a P.O. Box is not enough. If your agent information is out of date when the LLC is sued or receives a notice, you may miss a legal deadline. Jwayyed Law LLC can serve as your statutory agent or advise on the designation.",
  },
  {
    question: 'Are there business formation opportunities specific to the Ohio University area?',
    answer:
      'Yes. Ohio University creates room for technology startups, student-facing service businesses and professional services for the university community. Appalachian Ohio also has economic development programs and grants through state and regional agencies aimed at new businesses. An attorney can help an Athens County entrepreneur structure the venture, protect intellectual property and use the resources available.',
  },
  {
    question: 'What is the Ohio Secretary of State filing process for a new LLC?',
    answer:
      "File Articles of Organization (Form 533A) with the Ohio Secretary of State, online or by mail, with the filing fee. The articles list the LLC's name, principal office address, the statutory agent's name and address, the management structure (member-managed or manager-managed) and the organizers' signatures. Once filed and processed, the LLC exists. Next steps are an EIN, a business bank account, and registration with the Ohio Department of Taxation if you will collect sales tax.",
  },
  {
    question: 'Do I need an EIN for my new Ohio LLC?',
    answer:
      "An EIN from the IRS is required if your LLC has more than one member, has employees or elects to be taxed as a corporation. A single-member LLC with no employees can technically use the owner's Social Security Number, but an EIN is strongly recommended: most banks require one for a business account, and it keeps your SSN off documents. Getting an EIN is free and can be done online through the IRS website.",
  },
  {
    question: 'Why should I hire an attorney instead of forming my LLC myself?',
    answer:
      "The Secretary of State's website allows self-service filing, but owners who form entities without counsel often choose the wrong structure, skip an adequate operating agreement, misread the tax effects or leave personal assets exposed. An attorney makes sure the formation documents match your goals, the operating agreement protects every member, the statutory agent obligations are met and you know your ongoing compliance duties. Proper formation usually costs far less than fixing problems later.",
  },
];

export default function BusinessFormationLLCAthensCountyPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Business Formation and LLC in Athens County',
    serviceType: 'Business Law',
    areaServed: { '@type': 'County', name: 'Athens County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/athens-county/business-formation-llc-athens-county',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Athens County business formation and LLC attorney"
        description="LLC formation and business counsel for Athens, Albany, Nelsonville, The Plains and the Ohio University community, under Ohio's LLC Act, Chapter 1706."
      />

      <Section
        title="Starting a business in Athens County"
        intro={
          <p>
            Athens County is home to Ohio University and an entrepreneurial community in Appalachian Ohio, from student founders to
            local professionals and established owners.
          </p>
        }
      >
        <PointGrid
          points={[
            { title: 'Student and university startups', body: 'Technology ventures and student-facing businesses, including intellectual property developed in connection with Ohio University.' },
            { title: 'Local service companies', body: 'Professionals forming a service company in Athens, Nelsonville, Albany or The Plains.' },
            { title: 'Restructuring or expanding', body: 'Established owners changing structure or adding members.' },
            {
              title: 'Appalachian incentive programs',
              body: 'Help with the legal structure an entity needs to qualify for Appalachian Ohio economic development programs.',
            },
          ]}
        />
        <p>
          Athens County businesses also bring the firm contracts with vendors and customers and questions about Ohio tax registration
          and licensing.
        </p>
      </Section>

      <Section title="Ohio business law for LLCs, in brief" tone="ice">
        <FactTable
          title="The rules that apply"
          rows={[
            {
              label: 'Governing law',
              value: 'Ohio Revised Code Chapter 1706, the Ohio Revised Limited Liability Company Act, effective February 2022. It replaced Chapter 1705.',
            },
            {
              label: 'What changed',
              value: 'Series LLCs (separate assets and liability within one entity), more flexible management, clearer rules on what an operating agreement can waive or modify, and corporate-style governance options.',
            },
            { label: 'Filing', value: 'Articles of Organization (Form 533A) with the Ohio Secretary of State.' },
            { label: 'Statutory agent', value: 'Required (ORC 1705.06), with a physical Ohio street address.' },
            { label: 'Corporations', value: 'Governed by ORC Chapter 1701, with a board, officers and annual meetings.' },
          ]}
        />
        <h3>The operating agreement</h3>
        <p>
          Skipping a thorough operating agreement is one of the most common and costly mistakes. Without one, the default rules of
          Chapter 1706 govern, and they may not match how you and your partners want to run the business. The firm drafts agreements
          for your business, covering profit and loss allocation, management authority, voting, buy-sell terms and what happens when a
          member leaves, dies or becomes incapacitated.
        </p>
      </Section>

      <Section title="How an Ohio LLC is formed">
        <Steps
          steps={[
            { title: 'Choose the structure', body: 'LLC or corporation, member-managed or manager-managed.' },
            { title: 'File the articles', body: 'Articles of Organization (Form 533A) with the Secretary of State, with the statutory agent named.' },
            { title: 'Draft the operating agreement', body: 'Governance, money, exits and dissolution.' },
            { title: 'Finish setup', body: 'EIN, business bank account and Ohio Department of Taxation registration if you collect sales tax.' },
          ]}
        />
        <p>
          Ohio LLCs are formed through the Secretary of State under state law, so the firm can help clients in Athens County and
          anywhere in Ohio. Use <Link href="/contact">the contact page</Link> or call (614) 285-5482, or read about the firm&rsquo;s{' '}
          <Link href="/business">business law services</Link>.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid
          links={[
            { href: '/locations/athens-county', title: 'Athens County', subtitle: 'Every service the firm offers in the county' },
            { href: '/business/llc-formation', title: 'LLC formation', subtitle: 'Forming an Ohio LLC step by step' },
            { href: '/business/contract-drafting-review', title: 'Contract drafting and review', subtitle: 'Vendor and customer agreements' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
