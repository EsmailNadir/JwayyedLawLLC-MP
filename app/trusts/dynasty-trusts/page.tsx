import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Dynasty Trusts Lawyer in Ohio',
  description:
    'Ohio abolished the rule against perpetuities for trusts in 2012, so a dynasty trust can last indefinitely. GST exemption, spendthrift terms and trustees.',
  keywords: [
    'dynasty trusts Columbus OH',
    'dynasty trust attorney Ohio',
    'Ohio estate attorney',
    'Ohio trust laws',
    'perpetual trust Ohio',
    'multi-generational wealth trust Ohio',
    'GST tax exemption Ohio',
    'Ohio rule against perpetuities abolished',
    'generation skipping trust Ohio',
    'estate planning lawyer Columbus Ohio',
    'spendthrift dynasty trust Ohio',
  ],
  openGraph: {
    title: 'Dynasty Trusts Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Perpetual dynasty trusts for Ohio families, built around the federal GST exemption. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/dynasty-trusts',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/trusts/dynasty-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Dynasty Trusts', href: '/trusts/dynasty-trusts' },
];

const faqs = [
  {
    question: 'What is a dynasty trust?',
    answer:
      "A dynasty trust is a long-term irrevocable trust that holds and grows family wealth across several generations while minimizing estate, gift and generation-skipping transfer (GST) taxes. Its assets are not in any beneficiary's taxable estate, so the same dollars can pass from grandchildren to great-grandchildren to great-great-grandchildren without estate tax at each generation. Ohio is one of the most favorable states for dynasty trusts because it abolished the rule against perpetuities in 2012, so these trusts can last indefinitely.",
  },
  {
    question: 'How long can a dynasty trust last in Ohio?',
    answer:
      'Indefinitely. There is no mandatory termination date. Ohio abolished the common-law rule against perpetuities for interests in trusts when it amended ORC 5801.04(A)(2) effective in 2012. A trust can hold assets in perpetuity for every descendant in your family line, not just children and grandchildren. States that still apply the common-law rule (approximately 90 years) or a version of the Uniform Statutory Rule Against Perpetuities do not allow this.',
  },
  {
    question: 'What is the generation-skipping transfer (GST) tax and how does a dynasty trust help?',
    answer:
      'The GST tax is a federal tax on transfers to people more than one generation below you, usually grandchildren or more remote descendants. Its rate equals the top estate tax rate (currently 40%). Each person has a lifetime GST exemption ($13.61 million in 2024). If you allocate your exemption to a dynasty trust when you fund it, all future growth in the trust is permanently shielded from GST tax. A trust funded with $5 million today and growing at 7% a year for 50 years could exceed $150 million, all of which would pass to your descendants free of estate and GST tax if the exemption was properly allocated at funding.',
  },
  {
    question: 'Who should consider a dynasty trust?',
    answer:
      'Families whose estates are likely to exceed the federal exemption after the scheduled 2025 sunset, projected to fall to approximately $7 million per individual. Also younger high-earning professionals, business owners expecting a liquidity event, and anyone who wants asset and creditor protection for their descendants. A family with $5 to 10 million or more in net worth that wants to preserve wealth across generations should look at dynasty trust planning.',
  },
  {
    question: 'Who serves as trustee of a dynasty trust, and how does trustee succession work?',
    answer:
      'For a trust meant to last indefinitely, most clients combine a family member (or trust protector) with an independent corporate trustee. The trust should spell out how successor trustees are named when a trustee resigns, dies or becomes incapacitated. A trust protector, an independent third party with limited powers to modify the trust, change trustees or update distribution standards, is strongly recommended for any trust expected to last more than one generation.',
  },
  {
    question: 'How do distributions work in a dynasty trust?',
    answer:
      "The grantor sets the standards in the trust document. Common approaches are mandatory distributions for health, education, maintenance and support (HEMS), fully discretionary distributions at the trustee's sole discretion, or tiered distributions that grow as beneficiaries show financial responsibility. Distributions are taxable income to the recipient (to the extent of distributable net income), so the trustee should consider each beneficiary's tax bracket. Income kept in the trust may be taxed more heavily at the compressed trust rates, so timing matters.",
  },
  {
    question: 'Can a dynasty trust be modified or terminated after it is created?',
    answer:
      "Ohio law gives several routes. Under ORC 5804.11, the trustee and all qualified beneficiaries can agree to modify the trust's administrative terms. Under ORC 5804.12, a court can modify a trust if circumstances changed in a way the grantor did not anticipate. A trust protector clause can let a named person modify certain terms without going to court. Full termination is generally difficult, so the initial drafting should anticipate foreseeable family changes and build in room to adapt over generations.",
  },
  {
    question: 'How does an Ohio dynasty trust compare to a Delaware dynasty trust?',
    answer:
      'Delaware has long led for dynasty trusts because of its directed trust statutes and no state income tax on trust income accumulated for non-Delaware beneficiaries. Ohio has largely caught up: it abolished the rule against perpetuities, has strong asset protection statutes (including the Ohio Legacy Trust Act, ORC Chapter 5816) and has no state estate tax. Ohio residents can usually get equivalent results with an Ohio-sited trust, without a Delaware entity or Delaware corporate trustee. For very large estates with complex asset protection needs, a multi-state approach may still make sense.',
  },
];

const RELATED = [
  { href: '/trusts', title: 'All trust services', subtitle: 'Every type of trust the firm sets up' },
  { href: '/trusts/irrevocable-trusts', title: 'Irrevocable trusts', subtitle: 'ILITs, GRATs, SLATs and modification options' },
  { href: '/trusts/spendthrift-trusts', title: 'Spendthrift trusts', subtitle: 'How the creditor protection works' },
  { href: '/other-services/estate-planning-wills', title: 'Estate planning and wills', subtitle: 'The wider plan a dynasty trust anchors' },
];

export default function DynastyTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Dynasty trusts in Ohio"
        description="Ohio abolished the rule against perpetuities for trusts in 2012, so a dynasty trust here can hold family wealth indefinitely. With your GST exemption allocated, its growth stays free of the 40% GST tax."
      />

      <KeyFacts
        facts={[
          { figure: '2012', label: 'year Ohio abolished the rule against perpetuities for trusts' },
          { figure: '40%', label: 'federal GST tax rate, equal to the top estate tax rate' },
          { figure: '$13.61 million', label: 'lifetime GST exemption per individual in 2024' },
        ]}
      />

      <Section
        title="What a dynasty trust does"
        intro={
          <p>
            A dynasty trust combines three things: Ohio&rsquo;s repeal of the rule against perpetuities, the federal GST tax
            exemption and spendthrift protection under the Ohio Trust Code.
          </p>
        }
      >
        <p>
          Together they let assets keep growing inside the trust, out of reach of estate taxes, creditors and divorcing spouses, for
          every generation of your family. Jwayyed Law LLC advises families in Columbus, Cincinnati, Dayton and across Ohio on setting
          up dynasty trusts.
        </p>
        <p>
          Ohio eliminated the rule against perpetuities for trusts through an amendment to ORC 5801.04(A)(2) that took effect in 2012.
          Under the old common-law rule, a trust interest had to vest within 21 years after the death of a measuring life in being when
          the trust was created, which limited most trusts to roughly 80 to 100 years. That puts Ohio among the trust-friendly
          jurisdictions alongside Delaware, South Dakota and Nevada.
        </p>
      </Section>

      <Section title="The GST exemption and federal tax figures" tone="ice">
        <p>
          The GST exemption is what makes the tax side work. If your attorney allocates your exemption to the trust when you fund it,
          the whole trust, including all future appreciation and income, is permanently exempt from GST tax. The assets also leave
          your taxable estate.
        </p>
        <FactTable
          title="Federal figures for dynasty trust planning"
          rows={[
            { label: 'GST tax rate', value: '40%, equal to the highest estate tax rate.' },
            { label: 'GST exemption, 2024', value: '$13.61 million per individual (indexed for inflation).' },
            { label: 'Lifetime gift exemption, 2024', value: '$13.61 million.' },
            { label: 'Annual exclusion, 2024', value: '$18,000 per beneficiary.' },
            { label: 'Scheduled sunset', value: 'The exemption is projected to fall to approximately $7 million per individual after 2025.' },
            {
              label: 'Growth example',
              value: '$5 million growing at 7% a year for 50 years could exceed $150 million, passing free of estate and GST tax if the exemption was properly allocated.',
            },
          ]}
          note="Families with $10 million or more in wealth see the largest effect from tax-free compounding across generations."
        />
      </Section>

      <Section title="Funding the trust">
        <Steps
          steps={[
            { title: 'Draft the trust', body: 'Set the distribution standards, the trustee line and a trust protector.' },
            {
              title: 'Choose the funding',
              body: 'Gifts during life, transfers at death, or both: annual exclusion gifts ($18,000 per beneficiary in 2024), gifts using the lifetime exemption ($13.61 million in 2024), or life insurance owned by the trust in an ILIT structure.',
            },
            { title: 'Allocate your GST exemption', body: 'At the time of funding, so the entire trust and its future growth are exempt.' },
            {
              title: 'Plan trustee succession',
              body: 'The order of succession, how a new trustee is named when one resigns or dies, and whether beneficiaries or a trust protector can change trustees.',
            },
          ]}
        />
        <p>
          Once assets are in the irrevocable trust they are no longer yours, so they are out of your estate and away from your
          creditors. With the exemption high, funding before the scheduled 2025 sunset was a central planning question for
          high-net-worth Ohio families. Many clients start with a family member as trustee and a bank or trust company as co-trustee,
          then move to full corporate management as the trust grows and the founding generation passes. Ohio has many qualified
          corporate trust companies that can serve.
        </p>
      </Section>

      <Section title="Protecting beneficiaries across generations" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Spendthrift protection',
              body: 'Under ORC 5805.01 a beneficiary cannot assign their interest and creditors cannot reach assets before distribution. That covers credit card companies, judgment creditors and a divorcing spouse seeking to divide marital property.',
            },
            {
              title: 'Distribution standards',
              body: 'A HEMS baseline, with optional discretionary standards, incentive terms (such as distributions matched to earned income) or milestone distributions (such as age-based percentages). The aim is real support while preserving most of the principal.',
            },
            {
              title: 'Trust protector',
              body: 'An independent third party who can remove and replace trustees, change administrative or distribution terms when the law or the family changes, add or remove beneficiaries in set circumstances, and move the trust between Ohio and another state’s law.',
            },
            {
              title: 'Who it suits',
              body: 'Business owners planning a sale, professionals with growing investment portfolios, and families that have already built significant wealth.',
            },
          ]}
        />
        <Callout title="Recommended for any multi-generation trust">
          The firm strongly recommends a trust protector for dynasty trusts expected to last generations. Call (614) 285-5482 to
          schedule a consultation.
        </Callout>
      </Section>

      <LocationsWeServe title="Dynasty Trusts" />

      <Section title="Related trust pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
