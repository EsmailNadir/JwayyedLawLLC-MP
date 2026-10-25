import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Special Needs Trusts Lawyer | Columbus',
  description:
    'Ohio special needs trusts hold money for a loved one with a disability without counting against the $2,000 SSI and Medicaid asset limit.',
  keywords: [
    'special needs trust Columbus OH',
    'special needs trust attorney Ohio',
    'disability trust lawyer Ohio',
    'Medicaid trust Ohio',
    'SSI trust Ohio',
    'first party special needs trust Ohio',
    'third party special needs trust Ohio',
    'ABLE account Ohio',
    'pooled trust Ohio',
  ],
  openGraph: {
    title: 'Special Needs Trusts Lawyer | Columbus | Jwayyed Law LLC',
    description: 'Provide for a loved one with a disability while preserving Medicaid and SSI eligibility. (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/special-needs-trusts',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/trusts/special-needs-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Special Needs Trusts', href: '/trusts/special-needs-trusts' },
];

const faqs = [
  {
    question: 'Why does a person with disabilities need a special needs trust instead of simply inheriting money directly?',
    answer:
      'Medicaid and Supplemental Security Income (SSI) are needs-based programs with strict asset limits, generally $2,000 for an individual under SSI rules. An outright inheritance or gift above that suspends Medicaid and SSI eligibility until the money is "spent down." A properly drafted special needs trust (SNT) holds assets for the beneficiary without counting as the beneficiary\'s resource, so eligibility continues and the trust can pay for supplemental expenses. The trust must bar the trustee from making distributions that substitute for benefits the beneficiary is otherwise entitled to.',
  },
  {
    question: 'What is the difference between a first-party and a third-party special needs trust?',
    answer:
      "A first-party SNT (also called a self-settled or (d)(4)(A) trust, after 42 U.S.C. § 1396p(d)(4)(A)) is funded with the disabled person's own assets, such as a personal injury settlement, an inheritance already received or retroactive Social Security benefits. It must be set up by a parent, grandparent, legal guardian or court; the beneficiary must be under age 65; and at the beneficiary's death the remaining funds must first reimburse the state Medicaid program (the Medicaid payback provision). A third-party SNT is funded with someone else's assets, usually a parent or grandparent leaving money to a disabled child. It has no Medicaid payback at death, which is why families generally prefer it when they have a choice.",
  },
  {
    question: 'Who can establish a special needs trust in Ohio?',
    answer:
      "Under ORC Chapter 5815 and federal law, a first-party SNT must be set up by a parent, grandparent, legal guardian or a court. The disabled beneficiary cannot set up their own first-party SNT. Anyone else can create a third-party SNT, most often parents, grandparents or other relatives, and there is no age limit. A court can also set up an SNT for settlement proceeds. If no suitable family member is available and the beneficiary's own funds need protecting, a pooled trust run by a nonprofit is another option in Ohio.",
  },
  {
    question: 'What can trust funds be spent on without affecting government benefits?',
    answer:
      'Goods and services that supplement, but do not replace, what government programs provide. Common examples: personal care items and clothing not covered by Medicaid; medical and dental costs Medicaid does not pay; education, tutoring and vocational training; transportation, a vehicle and its upkeep; recreation, entertainment and travel; technology (computers, smartphones, adaptive devices); home modifications and furniture; and legal and professional fees. The trustee must not hand the beneficiary cash (it counts as an SSI resource) or pay for food and shelter in a way that triggers the SSI in-kind support and maintenance rules, which can reduce the monthly SSI payment.',
  },
  {
    question: 'What is the Ohio ABLE program and how does it compare to a special needs trust?',
    answer:
      "Ohio's ABLE (Achieving a Better Life Experience) program, created under the federal ABLE Act and run through the Ohio Treasurer's office, lets people whose disability began before age 26 open a tax-advantaged savings account. Up to $100,000 in an ABLE account is excluded from SSI resource counting. Contributions are capped at the annual gift tax exclusion ($18,000 in 2024). ABLE accounts are simpler and cheaper to set up than an SNT, but the limits make them a poor fit for large inheritances or settlements. Many families use both: an SNT for larger assets and an ABLE account for smaller everyday expenses.",
  },
  {
    question: 'What is a pooled special needs trust in Ohio?',
    answer:
      "A pooled trust is run by a nonprofit that pools many beneficiaries' assets for investment while keeping a separate sub-account for each. Several Ohio nonprofits operate pooled trusts. They can take a disabled person's own assets (first-party) without the under-65 age requirement, so they work when a first-party SNT is unavailable because the person is over 65. At death, part of what remains in a first-party account must repay Medicaid, and the nonprofit keeps the balance. Pooled trusts suit smaller accounts where a standalone trust would cost too much.",
  },
  {
    question: 'What happens to the money in a special needs trust when the beneficiary dies?',
    answer:
      'For a first-party SNT, federal and Ohio Medicaid law require payback: the state Medicaid agency is repaid for all Medicaid benefits paid during the beneficiary\'s lifetime before anything goes to other heirs. Anything left then passes under the trust\'s remainder terms. A third-party SNT has no payback; the remaining funds go entirely to the remainder beneficiaries the grantor chose, usually other relatives or charities. Mixing first-party and third-party money in one trust can expose the third-party funds to Medicaid payback, so the drafting matters.',
  },
  {
    question: 'How do I select a trustee for a special needs trust?',
    answer:
      "The trustee must understand trust administration and the beneficiary's practical needs, keep detailed records of every distribution, and know which distributions could put benefits at risk. Options are a willing and capable family member, a professional or corporate trustee (a bank or trust company), or a nonprofit that specializes in disability trusts. Many families name a family member, who knows the beneficiary, together with a professional trustee for financial and legal compliance. Jwayyed Law LLC can help you weigh the options and draft succession terms so someone is always in place to serve.",
  },
];

const RELATED = [
  { href: '/trusts/revocable-living-trusts', title: 'Revocable living trusts', subtitle: 'Avoid probate and keep control of your estate' },
  { href: '/trusts/irrevocable-trusts', title: 'Irrevocable trusts', subtitle: 'Medicaid planning and estate tax strategies' },
  { href: '/other-services/guardianships', title: 'Guardianships', subtitle: 'Legal protection for adults and minors who need a guardian' },
  { href: '/other-services/powers-of-attorney', title: 'Powers of attorney', subtitle: 'Financial and healthcare decision-making authority' },
];

export default function SpecialNeedsTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Special needs trusts in Ohio"
        description="SSI and Medicaid generally cap an individual's countable assets at $2,000. A special needs trust holds an inheritance or settlement for a loved one with a disability without counting against that limit."
      />

      <KeyFacts
        facts={[
          { figure: '$2,000', label: 'countable asset limit for an individual under SSI rules' },
          { figure: 'Under 65', label: 'age a beneficiary must be for a first-party special needs trust' },
          { figure: '$100,000', label: 'in an ABLE account excluded from SSI resource counting' },
          { figure: '$18,000', label: 'annual ABLE contribution limit (2024)' },
        ]}
      />

      <Section
        title="Why a direct inheritance can cost benefits"
        intro={
          <p>
            Medicaid pays for healthcare, in-home support, residential services and therapies for many Ohioans with disabilities.
            SSI pays monthly cash assistance. Both limit countable assets to generally $2,000 for an individual.
          </p>
        }
      >
        <p>
          An inheritance, settlement award or gift above that limit can suspend both programs at once. A properly drafted special
          needs trust (SNT), governed by ORC Chapter 5815 and federal law (42 U.S.C. § 1396p(d)(4)(A)), holds assets for the
          beneficiary&rsquo;s supplemental needs without counting as the beneficiary&rsquo;s own resource.
        </p>
        <p>
          Jwayyed Law LLC sets up, funds and administers special needs trusts for families in Columbus and across Ohio: parents
          planning for a child with autism or cerebral palsy, grandparents leaving a bequest, personal injury attorneys who need a
          settlement vehicle for a client with disabilities, and adults who have received an unexpected inheritance or settlement.
          The rules are technical and mistakes can cost benefits.
        </p>
      </Section>

      <Section title="First-party or third-party trust" tone="ice">
        <p>The first question is whose money funds the trust.</p>
        <FactTable
          title="First-party SNT: the beneficiary's own money"
          rows={[
            { label: 'Common sources', value: 'A personal injury settlement, retroactive Social Security Disability benefits, or an inheritance already received outright.' },
            { label: 'Who sets it up', value: 'A parent, grandparent, legal guardian or court, not the beneficiary personally (42 U.S.C. § 1396p(d)(4)(A)).' },
            { label: 'Beneficiary', value: 'The disabled person must be the sole lifetime beneficiary.' },
            { label: 'Age', value: 'Must be established before the beneficiary’s 65th birthday.' },
            { label: 'At death', value: 'Medicaid payback: the state Medicaid agency is reimbursed for all benefits paid before anything passes to heirs.' },
          ]}
        />
        <FactTable
          title="Third-party SNT: someone else's money"
          rows={[
            { label: 'Common sources', value: 'A parent or grandparent planning ahead for a disabled child.' },
            { label: 'Funding', value: 'Several family members can fund it over time, including through wills and beneficiary designations.' },
            { label: 'Age', value: 'No age limit.' },
            { label: 'At death', value: 'No Medicaid payback. Remaining funds go to whoever the grantor named.' },
          ]}
        />
        <Callout title="Leaving money to a grandchild with a disability">
          Leave it to a third-party SNT. Never leave it outright to the grandchild, and never to the grandchild&rsquo;s parents to
          hold informally, which creates its own legal and tax problems.
        </Callout>
      </Section>

      <Section title="What the trustee can and cannot pay for">
        <p>
          Every distribution raises two questions: will it reduce a government benefit, and does it serve the beneficiary&rsquo;s
          supplemental needs?
        </p>
        <PointGrid
          points={[
            {
              title: 'Usually safe to pay',
              body: 'Medical and dental costs Medicaid does not cover, personal care and hygiene items, clothing, transportation and vehicle costs, recreation and travel, education and vocational training, technology and adaptive equipment, home furnishings, and legal and professional fees.',
            },
            {
              title: 'Cash to the beneficiary',
              body: 'Counts as an SSI resource in the month received and as income the following month.',
            },
            {
              title: 'Food and shelter',
              body: 'Can trigger the SSI in-kind support and maintenance (ISM) rules and reduce the monthly SSI payment by up to one-third plus $20.',
            },
            {
              title: 'Records',
              body: 'Trustees must keep careful records and give annual accountings in line with their fiduciary duties under Ohio trust law.',
            },
          ]}
        />
      </Section>

      <Section title="ABLE accounts and pooled trusts" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Ohio ABLE account',
              body: 'A tax-advantaged savings account for people whose disability began before age 26. Up to $100,000 is excluded from SSI resource counting, and it covers a wide range of disability-related costs. The annual contribution limit ($18,000 in 2024) makes it unsuitable for large settlements or inheritances.',
            },
            {
              title: 'Using both',
              body: 'Many families pair a third-party SNT for larger assets with an ABLE account for routine spending, which gives the beneficiary more say over smaller purchases.',
            },
            {
              title: 'Pooled trust',
              body: 'Run by a nonprofit with a sub-account for each beneficiary. It can take the person’s own assets after age 65, and suits smaller amounts.',
            },
            {
              title: 'Choosing a trustee',
              body: 'A family member, a professional or corporate trustee, or a disability-trust nonprofit. Many families name a family member and a professional together.',
            },
          ]}
        />
      </Section>

      <LocationsWeServe title="Trusts" />

      <Section title="Related planning" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
