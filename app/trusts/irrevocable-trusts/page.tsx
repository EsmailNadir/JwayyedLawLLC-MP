import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Irrevocable Trusts Lawyer in Ohio',
  description:
    'Irrevocable trusts in Ohio for federal estate tax planning, Medicaid planning and asset protection, and how to modify one when circumstances change.',
  keywords: [
    'irrevocable trust Columbus OH',
    'irrevocable trust attorney Ohio',
    'ILIT Ohio',
    'GRAT Ohio',
    'Medicaid trust Ohio',
    'charitable remainder trust Ohio',
    'estate tax trust Ohio',
    'non-judicial settlement agreement Ohio',
    'ORC 5804.11 trust modification',
  ],
  openGraph: {
    title: 'Irrevocable Trusts Lawyer in Ohio | Jwayyed Law LLC',
    description:
      'Irrevocable trusts in Ohio for estate tax planning, Medicaid planning and asset protection. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/irrevocable-trusts',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/trusts/irrevocable-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Irrevocable Trusts', href: '/trusts/irrevocable-trusts' },
];

const faqs = [
  {
    question: 'What makes a trust irrevocable under Ohio law?',
    answer:
      "Under ORC 5801.10, a trust is irrevocable if the settlor has not reserved the power to revoke it. The person who created it cannot take it back or change it alone: the grantor gives up ownership and control of the assets transferred. That loss of control creates the benefits. Because the grantor no longer owns the assets, they are generally out of reach of the grantor's creditors (subject to fraudulent transfer limits), not in the grantor's taxable estate (depending on the structure), and not counted as the grantor's resources for Medicaid (subject to the five-year lookback).",
  },
  {
    question: 'What is an Irrevocable Life Insurance Trust (ILIT) and why would I need one in Ohio?',
    answer:
      'An ILIT is an irrevocable trust that owns a life insurance policy on your life. Without one, the death benefit is in your taxable estate if you held any "incidents of ownership" in the policy: the right to change beneficiaries, borrow against it or surrender it. In 2025 the federal estate tax exemption is $13.99 million, and it is scheduled to drop roughly in half when current tax law sunsets after 2025. The trust owns the policy and pays premiums from your contributions (Crummey powers make them annual exclusion gifts). It receives the death benefit outside your taxable estate, and the trustee can use the proceeds to pay estate taxes without the proceeds themselves being taxed.',
  },
  {
    question: 'What is a Grantor Retained Annuity Trust (GRAT) and is it useful in Ohio?',
    answer:
      'In a GRAT you transfer appreciating assets to an irrevocable trust and keep fixed annuity payments for a term of years. At the end of the term, growth above the IRS hurdle rate (the Section 7520 rate) passes to beneficiaries free of gift tax. GRATs work best when interest rates are low and the assets are expected to grow a lot, such as business interests before a liquidity event or concentrated stock. Ohio has no state gift tax (Ohio eliminated it in 2013), so only federal tax applies. A "zeroed-out" GRAT, where the retained annuity equals the value transferred, makes a near-zero taxable gift while still passing growth to heirs. The calculations are precise and the drafting must be careful.',
  },
  {
    question: 'How does an irrevocable trust help with Ohio Medicaid planning?',
    answer:
      'Medicaid pays for nursing facility care for Ohio residents who meet income and asset limits. A single person may keep roughly $2,000 in countable assets; married couples have a higher community spouse resource allowance. Many Ohioans transfer assets into an irrevocable Medicaid Asset Protection Trust (MAPT) so they can qualify without spending everything down. You may receive income but not principal, and you give up control. Ohio Medicaid looks back five years (60 months) at transfers; a transfer inside that window can cause a period of ineligibility, while transfers made more than five years before applying are generally protected. Ideally you plan five or more years before care is needed.',
  },
  {
    question: 'Can an irrevocable trust be modified or terminated in Ohio?',
    answer:
      'Yes, in several ways. Under ORC 5804.11, a Non-Judicial Settlement Agreement (NJSA) can modify or terminate a trust without court approval if all qualified beneficiaries and the trustee consent and the change does not violate a material purpose of the trust. Terms that consent cannot change, such as charitable interests, need a court petition under the cy pres doctrine (ORC 5804.09), which lets a court substitute a revised charitable purpose when the original has become impractical. A trustee can also decant under ORC 5808.18: distribute the assets of the old trust into a new trust with updated terms.',
  },
  {
    question: 'What is a charitable remainder trust and what tax benefits does it offer?',
    answer:
      'In a Charitable Remainder Trust (CRT) you contribute assets, often appreciated property, and keep an income stream for life or a term of years. When the term ends, what remains goes to the charities you named. A CRT lets you (1) avoid immediate capital gains tax when the trust sells appreciated assets, (2) take a partial charitable income tax deduction in the year you contribute and (3) create retirement income. Ohio has no state estate tax and no state gift tax, so the federal deduction and capital gains deferral drive the decision. CRTs suit Ohio clients with highly appreciated real estate, farmland, closely held business interests or investment portfolios.',
  },
  {
    question: "What are the trustee's duties for an irrevocable trust in Ohio?",
    answer:
      'Trustees are fiduciaries under the Ohio Trust Code (ORC Chapter 5808). Their duties include loyalty (acting solely for the beneficiaries), prudent administration (investing under the Ohio Uniform Prudent Investor Act standard, ORC 5809), impartiality between current income beneficiaries and remainder beneficiaries, informing and reporting to beneficiaries with regular accountings, and keeping trust assets separate from personal assets. Self-dealing, imprudent investment or failure to account can support a breach of fiduciary duty claim and make the trustee personally liable.',
  },
  {
    question: 'Does Ohio have an estate tax that irrevocable trusts can help minimize?',
    answer:
      'No. Ohio repealed its estate tax effective January 1, 2013. Ohio residents face only the federal estate tax, which applies above the federal exemption: $13.99 million per individual (or $27.98 million for a married couple with portability) in 2025. That exemption is scheduled to revert to approximately $7 million (inflation-adjusted) after December 31, 2025, when provisions of the Tax Cuts and Jobs Act sunset absent congressional action. For Ohio families with estates in the $7 to 14 million range, that gives a reason to set up irrevocable trusts (ILITs, GRATs, Spousal Lifetime Access Trusts) now to lock in the higher exemption. Smaller estates still use Medicaid planning trusts and charitable trusts for their non-tax benefits. The firm monitors federal tax law and tells clients when a change affects their plan.',
  },
];

const RELATED = [
  { href: '/trusts/revocable-living-trusts', title: 'Revocable living trusts', subtitle: 'Probate avoidance and flexible lifetime control' },
  { href: '/trusts/asset-protection-trusts', title: 'Ohio Legacy Trusts', subtitle: 'Self-settled asset protection under ORC Chapter 5816' },
  { href: '/trusts/medicaid-asset-protection-trusts', title: 'Medicaid asset protection trusts', subtitle: 'Long-term care planning with the five-year lookback' },
  { href: '/trusts/irrevocable-life-insurance-trusts', title: 'Irrevocable life insurance trusts', subtitle: 'Remove life insurance from your taxable estate' },
];

export default function IrrevocableTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Irrevocable trusts in Ohio"
        description="Once you fund an irrevocable trust, the assets leave your control, your taxable estate and, after a five-year lookback, your Medicaid resources. Ohio law still offers ways to modify one later."
      />

      <KeyFacts
        facts={[
          { figure: '$13.99 million', label: 'federal estate tax exemption per individual in 2025' },
          { figure: '2013', label: 'Ohio repealed its state estate tax, effective January 1, 2013' },
          { figure: '5 years', label: 'Ohio Medicaid lookback on asset transfers (60 months)' },
          { figure: '$2,000', label: 'roughly what a single Medicaid applicant may keep in countable assets' },
        ]}
      />

      <Section
        title="What makes a trust irrevocable"
        intro={
          <p>
            Under ORC 5801.10, a trust is irrevocable to the extent the settlor has not reserved a power of revocation. You cannot
            take it back or amend it on your own after it is created.
          </p>
        }
      >
        <p>
          Giving up control is the point. Once you no longer own the transferred assets, they are beyond the reach of your personal
          creditors and out of your taxable estate. With the right structure they are also protected from Medicaid asset counting
          after the lookback period.
        </p>
        <p>
          Irrevocable trusts come in many forms, each built for one planning problem: Irrevocable Life Insurance Trusts (ILITs),
          Grantor Retained Annuity Trusts (GRATs), Charitable Remainder Trusts (CRTs), Medicaid Asset Protection Trusts (MAPTs),
          Spousal Lifetime Access Trusts (SLATs) and Ohio Legacy Trusts.
        </p>
      </Section>

      <Section title="Federal estate tax and the 2025 sunset" tone="ice">
        <p>
          Ohio eliminated its state estate tax in 2013, so only the federal estate tax applies to Ohio residents. Jwayyed Law LLC
          reviews how exposed your estate is to that tax and recommends trust structures to pass wealth to the next generation.
        </p>
        <FactTable
          title="Estate and gift tax figures on this page"
          rows={[
            { label: 'Ohio estate tax', value: 'Repealed effective January 1, 2013.' },
            { label: 'Ohio gift tax', value: 'None (Ohio eliminated it in 2013). Only federal gift tax applies.' },
            { label: 'Federal exemption, 2025', value: '$13.99 million per individual, or $27.98 million for a married couple with portability.' },
            {
              label: 'Scheduled change',
              value:
                "The Tax Cuts and Jobs Act's doubled exemption is scheduled to sunset after December 31, 2025, reverting to approximately $7 million (inflation-adjusted) absent congressional action.",
            },
            { label: 'Families most affected', value: 'Estates in the $7 to 14 million range, which could lock in the higher exemption with irrevocable trusts.' },
          ]}
        />
      </Section>

      <Section title="Medicaid planning with an irrevocable trust">
        <p>
          For Ohio seniors who may need Medicaid-funded long-term care, the irrevocable Medicaid Asset Protection Trust (MAPT) is the
          main planning tool. It must be structured so you keep no power to reach the principal (income distributions may be
          permitted), and it must be truly irrevocable, with no beneficial control left to you.
        </p>
        <Steps
          steps={[
            { title: 'Plan early', body: 'Ideally five or more years before nursing home care is needed. The earlier you plan, the more you can protect.' },
            { title: 'Transfer assets to the MAPT', body: 'You give up control and may receive income only, not principal.' },
            {
              title: 'Wait out the lookback',
              body: 'Ohio Medicaid applies a five-year (60-month) lookback. A transfer inside that window leads Ohio Job and Family Services to impose a period of ineligibility in proportion to the value transferred.',
            },
            { title: 'Apply for benefits', body: 'Assets transferred more than five years before the application date are generally protected.' },
          ]}
        />
        <p>
          See <Link href="/trusts/medicaid-asset-protection-trusts">Medicaid asset protection trusts</Link> for the full planning
          process.
        </p>
      </Section>

      <Section title="Common irrevocable trusts for Ohio residents" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Irrevocable Life Insurance Trust (ILIT)',
              body: 'Owns a life insurance policy outside your taxable estate, so the death benefit reaches beneficiaries free of estate tax. Premiums are funded with annual exclusion gifts using Crummey notices. Useful for business owners whose estate is otherwise illiquid and whose heirs will need cash for estate taxes or a buyout.',
            },
            {
              title: 'Grantor Retained Annuity Trust (GRAT)',
              body: 'You transfer appreciating assets and keep annuity payments for a fixed term. Growth above the IRS Section 7520 hurdle rate passes to beneficiaries gift-tax-free. Best with low interest rates and assets expected to grow: a business before a sale, pre-IPO shares, real estate in a rising market.',
            },
            {
              title: 'Charitable Remainder Trust (CRT)',
              body: 'You contribute appreciated assets, receive income for life or a term, and the remainder goes to charity. Avoids immediate capital gains on the sale and gives a partial charitable income tax deduction. Common when selling farmland, commercial real estate or a closely held business.',
            },
            {
              title: 'Spousal Lifetime Access Trust (SLAT)',
              body: 'One spouse gifts assets to a trust naming the other spouse as a discretionary beneficiary. The assets leave the gifting spouse’s taxable estate, and the couple keeps indirect access through distributions to the beneficiary spouse.',
            },
          ]}
        />
      </Section>

      <Section title="Changing an irrevocable trust">
        <p>Ohio law gives several ways to modify a trust that is called irrevocable.</p>
        <PointGrid
          points={[
            {
              title: 'Non-Judicial Settlement Agreement',
              body: 'Under ORC 5804.11, all qualified beneficiaries and the trustee can agree in writing to modify or terminate the trust without court involvement, if the change does not violate a material purpose. An NJSA can address trustee succession, administrative terms, distribution standards and, in some cases, trust duration.',
            },
            {
              title: 'Cy pres petition',
              body: 'For a trust with charitable beneficiaries, a court petition under the cy pres doctrine (ORC 5804.09) may be needed if the charitable purpose has become impractical or wasteful.',
            },
            {
              title: 'Decanting',
              body: 'Under ORC 5808.18 the trustee distributes the assets of the old trust into a new trust with updated terms.',
            },
          ]}
        />
        <Callout title="Which route applies">
          The firm advises trustees and beneficiaries on which modification route is available for their trust.
        </Callout>
      </Section>

      <LocationsWeServe title="Trusts" />

      <Section title="Related trust pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
