import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'ILIT Lawyer Ohio | Life Insurance Trusts',
  description:
    'Remove life insurance from your taxable estate with an Ohio ILIT under IRC 2042. Crummey powers, the 3-year rule and annual administration explained.',
  keywords: [
    'irrevocable life insurance trust Columbus OH',
    'ILIT attorney Ohio',
    'life insurance estate tax Ohio',
    'Crummey powers Ohio',
    'IRC 2042 life insurance',
    'second-to-die ILIT Ohio',
    'ILIT lawyer Columbus',
    'Columbus estate planning attorneys',
    'estate planning life insurance trust Ohio',
    '3-year rule life insurance transfer Ohio',
  ],
  openGraph: {
    title: 'ILIT Lawyer Ohio | Life Insurance Trusts | Jwayyed Law LLC',
    description: 'Keep life insurance out of your taxable estate with an irrevocable life insurance trust. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/irrevocable-life-insurance-trusts',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/trusts/irrevocable-life-insurance-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Irrevocable Life Insurance Trusts', href: '/trusts/irrevocable-life-insurance-trusts' },
];

const faqs = [
  {
    question: 'What is an Irrevocable Life Insurance Trust (ILIT)?',
    answer:
      "An ILIT is an irrevocable trust that owns one or more life insurance policies. Because the trust owns the policy and you do not, the death benefit is excluded from your taxable estate under IRC 2042. At your death the proceeds are paid to the trust rather than your estate, so they are not subject to federal estate tax, and the trustee distributes them under the trust's terms. Ohio has no state estate tax, but federal estate tax applies to estates over the federal exemption (currently $13.61 million in 2024, scheduled to drop after 2025).",
  },
  {
    question: 'How does an ILIT save estate taxes?',
    answer:
      'Under IRC 2042, life insurance proceeds are in your taxable estate if you held any "incidents of ownership" at death, including the right to change beneficiaries, borrow against the policy or cancel it. Transferring the policy to an ILIT, or having the trust buy it from the start, gives up all of them. If you survive a transfer by three years (the IRC 2035 three-year rule), the proceeds are excluded. For a $5 million policy and an estate already at the federal exemption, keeping that policy out of the estate can save up to $2 million in federal estate tax.',
  },
  {
    question: 'What are Crummey powers and why do they matter?',
    answer:
      'Crummey powers (named after the 1968 case Crummey v. Commissioner) are temporary withdrawal rights given to ILIT beneficiaries each time you make a premium gift to the trust. Gifts to a trust are normally future-interest gifts, which do not qualify for the annual gift tax exclusion ($18,000 per recipient in 2024). Giving each beneficiary a 30-day window to withdraw their share makes the gift a present-interest gift that qualifies. The trustee sends written Crummey notices each year documenting the right. Beneficiaries usually do not withdraw, but the notice must be genuine and the window real.',
  },
  {
    question: 'Can I be the trustee of my own ILIT?',
    answer:
      'No. If you serve as trustee, the IRS will argue you kept incidents of ownership through your trustee powers, which pulls the death benefit back into your estate under IRC 2042. The trustee must be someone other than the insured: typically a spouse (which raises its own issues), an adult child, a trusted friend or a corporate trustee. The trustee must be independent enough that, in theory, they could use their powers in a way that adversely affects you.',
  },
  {
    question: 'What is the three-year rule under IRC 2035?',
    answer:
      'If you transfer an existing policy to an ILIT, rather than having the trust buy a new one, IRC 2035 requires you to survive the transfer by three years for the proceeds to be excluded. If you die within three years, the full death benefit is pulled back into your taxable estate as if the transfer never happened. The rule does not apply if the trust buys the policy directly from the insurer. If you already own large policies, weigh the three-year risk against the potential estate tax savings.',
  },
  {
    question: 'Can you cancel a life insurance policy held in an ILIT?',
    answer:
      "The trustee has the authority to surrender or cancel the policy. You do not. You cannot tell the trustee to cancel the policy, change its terms or borrow against the cash value, because that would give you incidents of ownership and defeat the exclusion under IRC 2042. If the trust runs short of premium money and your Crummey gifts cannot keep the policy in force, the trustee may use the policy's cash value to pay premiums, convert it to a reduced paid-up policy, or, as a last resort, surrender it.",
  },
  {
    question: 'What are the ongoing administration requirements for an ILIT?',
    answer:
      'Each year you gift enough to the trust to cover the premium. The trustee sends Crummey notices to every beneficiary documenting their withdrawal rights. After the withdrawal window closes (typically 30 days), the trustee pays the premium from trust funds. The trustee should keep records of all notices, acknowledgments and premium payments. Skipping these formalities can lead the IRS to disregard the Crummey structure and treat the premiums as direct gifts that do not qualify for the annual exclusion.',
  },
  {
    question: 'How is an ILIT different from a revocable living trust?',
    answer:
      "A revocable living trust can hold a policy or be named its beneficiary, but it gives no estate tax benefit: its assets are fully in your taxable estate because you can revoke or amend it. An ILIT is irrevocable. Once it is set up, you cannot take the policy back or change the trust's terms without the beneficiaries' consent and a court order. In exchange, the proceeds are excluded from your estate and avoid probate. You trade control for estate tax savings.",
  },
];

const RELATED = [
  { href: '/trusts', title: 'All trust services', subtitle: 'Every type of trust the firm sets up' },
  { href: '/trusts/irrevocable-trusts', title: 'Irrevocable trusts', subtitle: 'GRATs, SLATs, CRTs and Medicaid trusts' },
  { href: '/trusts/dynasty-trusts', title: 'Dynasty trusts', subtitle: 'Wealth held for several generations' },
  { href: '/other-services/estate-planning-wills', title: 'Estate planning and wills', subtitle: 'The documents an ILIT sits alongside' },
];

export default function IrrevocableLifeInsuranceTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Irrevocable life insurance trusts (ILITs) in Ohio"
        description="Under IRC 2042, a life insurance death benefit counts in your taxable estate unless you held no incidents of ownership. An ILIT owns the policy instead, so the proceeds pass outside your estate."
      />

      <KeyFacts
        facts={[
          { figure: '3 years', label: 'you must survive after transferring an existing policy (IRC 2035)' },
          { figure: '30 days', label: 'typical Crummey withdrawal window for each premium gift' },
          { figure: '$18,000', label: 'annual gift tax exclusion per beneficiary (2024 amount, indexed for inflation)' },
          { figure: '9 months', label: 'after death, when heirs may have to pay estate taxes' },
        ]}
      />

      <Section
        title="How life insurance ends up in your taxable estate"
        intro={
          <p>
            Under IRC 2042, life insurance proceeds are in your gross estate if (1) they are payable to your estate or executor, or
            (2) you held any incidents of ownership in the policy at death.
          </p>
        }
      >
        <p>
          Incidents of ownership include the right to change beneficiaries, borrow against the cash value, cancel or surrender the
          policy, or assign it. The definition is broad. Holding the policy in a revocable living trust does not remove it from your
          estate, because you still own that trust and can revoke it.
        </p>
        <p>
          For a business owner or professional with $2 to 3 million in term or permanent life insurance, that can push an
          otherwise non-taxable estate over the federal exemption. An ILIT moves ownership of the policy from you to the trust, so the
          death benefit leaves your estate and stays available to support your family or give your estate cash. Jwayyed Law LLC
          designs and administers ILITs for clients in Columbus, Cincinnati, Dayton and surrounding Ohio communities.
        </p>
        <FactTable
          title="Estate tax figures for ILIT planning"
          rows={[
            { label: 'Ohio estate tax', value: 'None. Repealed effective January 1, 2013, so ILIT planning is a federal estate tax strategy only.' },
            { label: 'Federal exemption, 2024', value: '$13.61 million per individual.' },
            {
              label: 'Scheduled change',
              value: 'The exemption is scheduled to sunset after December 31, 2025, to approximately $7 million (adjusted for inflation) absent congressional action.',
            },
            { label: 'Example savings', value: 'A $5 million policy kept out of an estate already at the exemption can save up to $2 million in federal estate tax.' },
          ]}
        />
      </Section>

      <Section title="How Crummey powers fund the premiums" tone="ice">
        <p>
          The trust owns the policy, so someone has to pay the premiums. Usually you gift the premium amount to the trust each year.
          Gifts to a trust are future-interest gifts, which do not qualify for the annual exclusion of $18,000 per beneficiary (2024
          amount, indexed for inflation) unless the beneficiaries have a present right to demand the money. Crummey powers give them
          that right.
        </p>
        <Steps
          steps={[
            { title: 'You gift the premium', body: 'You make a gift to the trust equal to the premium.' },
            {
              title: 'The trustee sends Crummey notices',
              body: 'Each beneficiary is told in writing they may withdraw their share of the contribution within a set window, typically 30 days.',
            },
            { title: 'The window closes', body: 'Beneficiaries almost never withdraw, since that would shrink their inheritance. The right must still be genuine and the window actually available.' },
            { title: 'The trustee pays the premium', body: 'From trust funds, keeping records of every notice, acknowledgment and payment.' },
          ]}
        />
        <p>
          Each beneficiary&rsquo;s exclusion counts. A couple with three adult children as beneficiaries can contribute up to
          $54,000 per year (three children times $18,000) free of gift tax, without touching the lifetime exemption. The IRS
          scrutinizes Crummey notices, and if the formalities slip, the premium gifts can be treated as taxable gifts that use your
          lifetime exemption.
        </p>
      </Section>

      <Section title="New policy or existing policy">
        <PointGrid
          points={[
            {
              title: 'The trust buys a new policy',
              body: 'The trust is the owner and applicant from the start, so you never held incidents of ownership and the IRC 2035 three-year rule does not apply. If you die the next day, the death benefit is still excluded.',
            },
            {
              title: 'You transfer a policy you own',
              body: 'If you die within three years of the transfer, the full death benefit is pulled back into your taxable estate. The rule covers life insurance transfers (and a few other transfers named in the estate tax), not most other assets.',
            },
            {
              title: 'Who should transfer',
              body: 'For younger, healthier insureds likely to survive three years, the long-term savings often justify the transfer.',
            },
            {
              title: 'Who should buy new',
              body: 'For very ill or elderly clients, having the trust buy a new policy (if they are insurable) is the safer approach.',
            },
          ]}
        />
        <Callout title="Second-to-die policies">
          A survivorship policy pays on the death of the second of two insureds, usually spouses. The unlimited marital deduction
          generally defers estate tax until the second death, so the payout arrives when the tax comes due, and these policies cost
          less than single-life policies of the same face value.
        </Callout>
      </Section>

      <Section title="Using ILIT proceeds to pay estate taxes" tone="ice">
        <p>
          If your estate is mostly illiquid (a family farm in central Ohio, a closely held manufacturing business in Columbus,
          investment real estate), your heirs may have to sell at a discount to pay estate taxes within nine months of your death.
          The ILIT gives the trustee a pool of cash to buy those assets from the estate at fair market value, or to lend money to the
          estate. The ILIT is outside your estate, so the proceeds are available tax-free and no forced sale is needed.
        </p>
        <h3>What the firm does</h3>
        <p>
          An ILIT has to satisfy the Ohio Trust Code under ORC Chapter 5801, the IRC 2042 incidents-of-ownership rules, the IRC
          2035 three-year rule and the Crummey notice requirements. Jwayyed Law LLC drafts the trust document, prepares the annual
          Crummey notice templates and advises your trustee on ongoing administration. Call (614) 285-5482 to get started.
        </p>
      </Section>

      <LocationsWeServe title="Irrevocable Life Insurance Trusts" />

      <Section title="Related trust pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
        <p>
          See also <Link href="/trusts/revocable-living-trusts">revocable living trusts</Link>, which hold a policy without any
          estate tax benefit.
        </p>
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
