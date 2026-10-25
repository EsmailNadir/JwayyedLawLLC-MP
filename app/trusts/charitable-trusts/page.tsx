import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Charitable Trusts Lawyer in Ohio',
  description:
    'Charitable remainder and charitable lead trusts in Ohio: the IRC 664 payout rules, the tax deduction, Attorney General registration and typical cost.',
  keywords: [
    'charitable trusts Columbus OH',
    'charitable remainder trust Ohio',
    'charitable lead trust attorney Ohio',
    'CRT CRAT CRUT lawyer Columbus',
    'donor-advised funds Ohio',
    'charitable trust attorney Ohio',
    'Ohio attorney general charitable trust',
    'capital gains bypass trust Ohio',
    'estate planning charitable giving Ohio',
  ],
  openGraph: {
    title: 'Charitable Trusts Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Charitable remainder trusts, charitable lead trusts and other giving strategies in Ohio. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/charitable-trusts',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/trusts/charitable-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Charitable Trusts', href: '/trusts/charitable-trusts' },
];

const faqs = [
  {
    question: 'What is a charitable remainder trust (CRT)?',
    answer:
      "A CRT is an irrevocable trust you fund with appreciated assets. You or your named beneficiaries receive income, either a fixed annuity (CRAT) or a percentage of the trust's value revalued each year (CRUT), for a term of years or for life. When the term ends, what remains goes to one or more qualified charities. You get an immediate partial income tax deduction under IRC 170 in the year you contribute, based on the present value of the charity's expected remainder.",
  },
  {
    question: 'What is the difference between a CRT and a charitable lead trust (CLT)?',
    answer:
      'In a CRT you receive the income first and the charity gets the remainder. In a CLT the charity receives income first for a term of years and your heirs get the remainder. CLTs are used mainly to reduce gift or estate tax on transfers to heirs. CRTs are used mainly to create income for the donor and avoid an immediate capital gains hit on appreciated assets. The right choice depends on your wealth transfer goals, income needs and charitable priorities.',
  },
  {
    question: 'What are the income tax benefits of a charitable trust?',
    answer:
      "Funding a CRT gives you a charitable income tax deduction under IRC 170 equal to the present value of the charity's remainder, calculated with IRS tables and the applicable federal rate (AFR). For a $1 million CRT with a 5% annuity payout over 20 years, the deduction might be $300,000 to $500,000 depending on current interest rates. The trust also pays no capital gains tax when it sells appreciated property; the gain is spread over your income payments as you receive them.",
  },
  {
    question: 'What is the minimum payout rate for a CRT under IRC 664?',
    answer:
      "Under IRC 664(d)(1)(A) for CRATs and IRC 664(d)(2)(A) for CRUTs, the annual payout must be at least 5% of the initial net fair market value of the assets (CRAT) or 5% of the trust's assets revalued each year (CRUT). The payout cannot exceed 50%. For a CRAT, the IRS must determine that there is at least a 10% probability that the charitable remainder will equal at least 10% of the initial contribution.",
  },
  {
    question: 'Who can serve as trustee of a charitable trust in Ohio?',
    answer:
      'You may be your own trustee of a CRT or CLT in Ohio, though many donors name an independent corporate trustee or a community foundation to handle investments and distributions. The trustee owes fiduciary duties under ORC Chapter 5808, including prudent investment and impartiality between the income beneficiary (you) and the remainder beneficiary (the charity). For a CLT meant to qualify for the gift tax charitable deduction, an independent trustee is generally advisable.',
  },
  {
    question: 'When does a charitable lead trust (CLT) make more sense than a CRT?',
    answer:
      "When your main goal is passing wealth to children or grandchildren at a lower gift or estate tax cost, not income for yourself. CLTs work especially well when interest rates are low, because a lower Section 7520 rate used to value the charity's interest raises the present value of what passes tax-free to your heirs. They also fit when your own income needs are met and you want to benefit a charity and the next generation together.",
  },
  {
    question: 'How does the Ohio Attorney General oversee charitable trusts?',
    answer:
      "The Ohio Attorney General supervises charitable trusts under ORC 109.23 through ORC 109.33. Trustees must register with the AG's Charitable Law Section and file annual financial reports (Form CT-12F or equivalent). The AG may investigate misuse of charitable assets, compel accountings, seek removal of trustees and sue to enforce the charitable purposes. Ohio's Uniform Trust Code (ORC Chapter 5804) also governs charitable purpose trusts and requires that they be enforced only for their stated charitable purposes.",
  },
  {
    question: 'What does it typically cost to set up a charitable trust in Ohio?',
    answer:
      "Attorney fees to draft a CRT or CLT in Ohio generally range from $2,500 to $6,000, depending on complexity, the number of income beneficiaries, the type of vehicle and whether a private foundation or donor-advised fund is also being set up. Ongoing costs include corporate trustee fees if one manages the trust, annual tax preparation (Form 5227 must be filed with the IRS), and registration with and annual reports to the Ohio Attorney General's office.",
  },
];

const RELATED = [
  { href: '/trusts', title: 'All trust services', subtitle: 'Every type of trust the firm sets up' },
  { href: '/trusts/irrevocable-trusts', title: 'Irrevocable trusts', subtitle: 'ILITs, GRATs, SLATs and Medicaid trusts' },
  { href: '/other-services/estate-planning-wills', title: 'Estate planning and wills', subtitle: 'Where charitable gifts fit in the wider plan' },
  { href: '/trusts/dynasty-trusts', title: 'Dynasty trusts', subtitle: 'Wealth held for several generations' },
];

export default function CharitableTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Charitable trusts in Ohio"
        description="A charitable remainder trust can sell appreciated property without an immediate capital gains tax, pay you income for life and leave the rest to charity. A charitable lead trust reverses the order."
      />

      <KeyFacts
        facts={[
          { figure: '5% to 50%', label: 'allowed annual payout range for a charitable remainder trust under IRC 664' },
          { figure: '23.8%', label: 'top federal capital gains rate a CRT can help you defer (20% plus 3.8%)' },
          { figure: '$2,500 to $6,000', label: 'typical attorney fees to draft a CRT or CLT in Ohio' },
        ]}
      />

      <Section
        title="What a charitable trust can do"
        intro={
          <p>
            A charitable trust lets you support a cause while cutting federal income tax, avoiding an immediate capital gains tax on
            appreciated assets and removing value from your taxable estate.
          </p>
        }
      >
        <p>
          Ohio residents who own appreciated stock, real estate or a closely held business interest are often good candidates.
          Jwayyed Law LLC works with clients in Columbus, Cincinnati, Dayton and surrounding areas to set up a charitable trust that
          fits the rest of their estate plan.
        </p>
        <FactTable
          title="Tax figures for charitable planning"
          rows={[
            { label: 'Ohio estate tax', value: 'None. Repealed effective January 1, 2013.' },
            {
              label: 'Federal exemption',
              value: '$13.61 million per individual in 2024, scheduled to sunset to approximately $7 million after 2025 absent congressional action.',
            },
            { label: 'Capital gains', value: 'Up to 23.8% on an outright sale (20% long-term rate plus 3.8% net investment income tax).' },
            {
              label: 'Example deduction',
              value: 'A $1 million CRT with a 5% annuity payout over 20 years might produce a deduction of $300,000 to $500,000, depending on interest rates.',
            },
          ]}
          note="Even well below the federal exemption, the income tax deduction can deliver real value in the year you fund the trust."
        />
      </Section>

      <Section title="The rules that govern charitable trusts" tone="ice">
        <FactTable
          title="Federal and Ohio law"
          rows={[
            { label: 'IRC 664', value: 'Defines the payout rules and tax treatment of charitable remainder trusts.' },
            { label: 'IRC 170', value: 'Provides the income tax deduction.' },
            { label: 'IRC 2055 and 2522', value: 'Provide the estate and gift tax deductions for charitable transfers.' },
            { label: 'IRC 4940 through 4958', value: 'Compliance rules for private foundations.' },
            { label: 'ORC Chapter 5804', value: 'The Ohio Trust Code rules for charitable purpose trusts.' },
            { label: 'ORC 109.23 through 109.33', value: 'Ohio Attorney General supervision, including mandatory registration and annual reporting.' },
          ]}
        />
      </Section>

      <Section title="Charitable remainder trusts: CRAT or CRUT">
        <p>
          A CRT is an irrevocable split-interest trust. You (or other named individuals) receive income for a term, and what is left
          at the end goes to charity.
        </p>
        <PointGrid
          points={[
            {
              title: 'Charitable Remainder Annuity Trust (CRAT)',
              body: 'Pays a fixed dollar amount each year, set as a percentage of the initial contribution. The amount never changes with investment performance. No additional contributions.',
            },
            {
              title: 'Charitable Remainder Unitrust (CRUT)',
              body: 'Pays a fixed percentage (at least 5% under IRC 664) of the trust’s value, revalued each year. If the trust grows, your payments grow. Additional contributions are allowed.',
            },
          ]}
        />
        <h3>How the capital gains deferral works</h3>
        <Steps
          steps={[
            {
              title: 'Contribute the appreciated property',
              body: 'Selling low-basis real estate or stock yourself would trigger federal capital gains tax of up to 23.8%.',
            },
            { title: 'Take the deduction', body: 'You receive an immediate partial income tax deduction under IRC 170 in the year of the contribution.' },
            { title: 'The trust sells', body: 'It sells free of capital gains tax and invests the full proceeds to fund your income.' },
            {
              title: 'Gain is spread over your payments',
              body: 'The gain is not eliminated. It is taxed as you receive distributions, characterized under the IRS four-tier accounting rules.',
            },
          ]}
        />
        <Callout title="Choose the charity carefully">
          You must name one or more qualified charities as remainder beneficiaries: a public charity (a university, hospital,
          religious organization or community foundation), a donor-advised fund, or a private foundation you set up. You cannot
          change the remainder beneficiary in a way that disqualifies the trust under IRC 664.
        </Callout>
      </Section>

      <Section title="Charitable lead trusts and other options" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Charitable lead trust (CLT)',
              body: 'Pays charity first for a set term, then the principal passes to your heirs. A CLAT pays charity fixed annual amounts; a CLUT pays a percentage of assets revalued each year. Because the IRS values the heirs’ remainder with the Section 7520 rate, a low AFR means a low value on what passes to heirs, which reduces or eliminates the taxable gift.',
            },
            {
              title: 'Donor-advised fund (DAF)',
              body: 'You contribute to a sponsoring organization (a community foundation or a financial institution’s charitable arm), take an immediate deduction and recommend grants over time. No income stream, but often no cost to set up and the most flexibility.',
            },
            {
              title: 'Private foundation',
              body: 'More control, with higher administrative costs and stricter IRS compliance under IRC 4940 through 4958.',
            },
            {
              title: 'Choosing among them',
              body: 'Depends on your income needs, estate size, charitable goals and the assets you plan to give. The firm works with your financial advisor and CPA to model the after-tax result of each option first.',
            },
          ]}
        />
      </Section>

      <Section title="Ohio Attorney General oversight">
        <p>
          Under ORC 109.23 through ORC 109.33, any trustee holding assets for charitable purposes must register with the Ohio
          Attorney General&rsquo;s Charitable Law Section and file annual financial reports. Failing to register or report can lead
          to enforcement. The AG can audit charitable trusts, compel accountings in probate court, ask the court to modify or end a
          trust that has become impractical, and sue trustees who breach their fiduciary duties.
        </p>
        <p>
          That is separate from the federal duty to file IRS Form 5227 (Split-Interest Trust Information Return) each year for CRTs
          and CLTs. When the firm drafts a charitable trust, it prepares the registration materials and the first annual report as
          part of the engagement and advises on the recordkeeping that keeps the trust in good standing with the Ohio AG and the IRS.
        </p>
      </Section>

      <LocationsWeServe title="Charitable Trusts" />

      <Section title="Related trust pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
