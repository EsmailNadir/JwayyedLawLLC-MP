import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Special Needs Trusts Lawyer in Ohio | Columbus | Jwayyed Law LLC',
  description: 'Ohio attorney helping families establish special needs trusts to protect loved ones with disabilities while preserving Medicaid and SSI eligibility. Serving Columbus and all of Ohio. Call (614) 285-5482.',
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
    title: 'Special Needs Trusts Lawyer in Ohio | Columbus | Jwayyed Law LLC',
    description: 'Ohio attorney helping families establish special needs trusts to protect loved ones with disabilities while preserving Medicaid and SSI eligibility. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/special-needs-trusts',
  },
  alternates: { canonical: '/trusts/special-needs-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Special Needs Trusts', href: '/trusts/special-needs-trusts' },
];

const faqs = [
  {
    question: `Why does a person with disabilities need a special needs trust instead of simply inheriting money directly?`,
    answer: `Medicaid and Supplemental Security Income (SSI) are needs-based programs with strict asset limits — generally $2,000 for an individual under SSI rules. If a person with disabilities receives an outright inheritance or gift above that threshold, their eligibility for Medicaid and SSI is suspended until the funds are "spent down." A properly drafted special needs trust (SNT) holds assets for the beneficiary's benefit without being counted as the beneficiary's resource, preserving eligibility while still allowing the trust to pay for supplemental expenses that improve quality of life. The key is that the trust must contain language restricting the trustee from making distributions that would substitute for government benefits the beneficiary is otherwise entitled to receive.`,
  },
  {
    question: `What is the difference between a first-party and a third-party special needs trust?`,
    answer: `A first-party SNT (also called a self-settled or (d)(4)(A) trust, after 42 U.S.C. § 1396p(d)(4)(A)) is funded with the disabled person's own assets — for example, a personal injury settlement, an inheritance already received, or retroactive Social Security benefits. It must be established by a parent, grandparent, legal guardian, or court; the beneficiary must be under age 65; and at the beneficiary's death, any remaining funds must first reimburse the state Medicaid program for benefits paid — this is called the Medicaid payback provision. A third-party SNT is funded with assets belonging to someone other than the beneficiary — typically a parent or grandparent who wants to leave money to a disabled child. Third-party trusts have no Medicaid payback requirement at death, making them generally preferred when the family has a choice.`,
  },
  {
    question: `Who can establish a special needs trust in Ohio?`,
    answer: `Under ORC Chapter 5815 and federal law, a first-party SNT must be established by a parent, grandparent, legal guardian, or a court. The disabled beneficiary cannot establish their own first-party SNT. A third-party SNT can be created by any third party — most commonly parents, grandparents, or other family members — and there is no age limit. A court can also establish an SNT for settlement proceeds. If no appropriate family member is available and the beneficiary's own funds need to be protected, a pooled trust administered by a nonprofit organization is another option available in Ohio.`,
  },
  {
    question: `What can trust funds be spent on without affecting government benefits?`,
    answer: `The trustee of a special needs trust can make distributions for goods and services that supplement — but do not replace — what government programs provide. Permissible distributions commonly include: personal care items and clothing not covered by Medicaid; medical and dental expenses not paid by Medicaid; education, tutoring, and vocational training; transportation, vehicle purchase, and vehicle maintenance; recreation, entertainment, and travel; technology (computers, smartphones, adaptive devices); home modifications and furniture; and legal and professional fees. What the trustee must not do is provide cash directly to the beneficiary (which counts as an SSI resource) or pay for food and shelter in a way that triggers the SSI in-kind support and maintenance rules, which can reduce the monthly SSI payment.`,
  },
  {
    question: `What is the Ohio ABLE program and how does it compare to a special needs trust?`,
    answer: `Ohio's ABLE (Achieving a Better Life Experience) program, created under the federal ABLE Act and administered through the Ohio Treasurer's office, allows individuals whose disability onset occurred before age 26 to open a tax-advantaged savings account. Funds in an ABLE account (up to $100,000) are excluded from SSI resource calculations. Contributions are limited to the annual gift tax exclusion amount ($18,000 in 2024). ABLE accounts are simpler and less expensive to establish than an SNT, but have lower contribution limits and are generally unsuitable for large inheritances or settlements. Many families use both tools — an SNT for larger assets and an ABLE account for smaller day-to-day supplemental expenses — as part of a comprehensive disability planning strategy.`,
  },
  {
    question: `What is a pooled special needs trust in Ohio?`,
    answer: `A pooled trust is managed by a nonprofit organization that pools the assets of many individual beneficiaries for investment purposes while maintaining separate sub-accounts for each beneficiary. In Ohio, several nonprofit organizations operate pooled trusts. Pooled trusts can be funded with a disabled person's own assets (first-party) and do not require the beneficiary to be under age 65 for first-party funding — making them a solution when a first-party SNT is otherwise unavailable because the person is over 65. At death, some portion of the remaining funds must repay Medicaid (for first-party accounts), with the balance retained by the nonprofit. Pooled trusts are particularly useful for smaller accounts where the cost of a standalone trust would be disproportionate.`,
  },
  {
    question: `What happens to the money in a special needs trust when the beneficiary dies?`,
    answer: `For a first-party SNT funded with the beneficiary's own assets, federal and Ohio Medicaid law requires a payback provision: upon the beneficiary's death, the state Medicaid agency must be paid back for all Medicaid benefits paid on behalf of the beneficiary during their lifetime, before any funds are distributed to other heirs. If funds remain after payback, they pass according to the trust's remainder provisions. A third-party SNT has no Medicaid payback obligation — remaining funds pass entirely to whatever remainder beneficiaries the grantor designated, typically other family members or charitable organizations. This distinction makes proper trust drafting critical: commingling first-party and third-party assets in the same trust can unintentionally subject third-party funds to Medicaid payback.`,
  },
  {
    question: `How do I select a trustee for a special needs trust?`,
    answer: `Trustee selection is one of the most important decisions in SNT planning. The trustee must understand both the legal requirements of trust administration and the practical needs of the beneficiary, must keep detailed records of every distribution, and must know how to avoid distributions that could jeopardize government benefits. Options include a family member who is willing and capable, a professional or corporate trustee (a bank or trust company), or a nonprofit organization that specializes in disability trust administration. Many families co-name a family member (for knowledge of the beneficiary's personal needs) and a professional trustee (for financial and legal compliance). Ohio attorneys at Jwayyed Law LLC can help you evaluate the options and draft trustee succession provisions to ensure someone is always in place to serve.`,
  },
];

export default function SpecialNeedsTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Special Needs Trusts Lawyer"
        description="Helping Ohio families protect loved ones with disabilities by establishing special needs trusts that preserve Medicaid and SSI eligibility while funding a better quality of life."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Special Needs Trusts in Ohio: Protecting Benefits While Providing for Your Loved One
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For families with a child or adult loved one who has a disability, one of the most consequential planning decisions is how to provide financially for that person without destroying their eligibility for the government benefits they depend on. Medicaid pays for essential healthcare, in-home support, residential services, and therapies for millions of Ohioans with disabilities. Supplemental Security Income (SSI) provides monthly cash assistance. Both programs impose strict resource limits — generally $2,000 in countable assets for an individual — and a direct inheritance, settlement award, or gift above that limit can immediately suspend these critical benefits. A properly drafted special needs trust (SNT), governed by ORC Chapter 5815 and federal law (42 U.S.C. § 1396p(d)(4)(A)), holds assets for a disabled beneficiary\'s supplemental benefit without being counted as the beneficiary\'s own resource, preserving benefits eligibility while dramatically improving quality of life.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio attorneys at Jwayyed Law LLC work with families across Columbus and throughout the state to establish, fund, and administer special needs trusts. Whether you are a parent planning for a child with autism or cerebral palsy, a grandparent who wants to leave a bequest, a personal injury attorney seeking a structured settlement vehicle for a client with disabilities, or an adult who has received an unexpected inheritance or legal settlement — the rules governing SNTs are technical, and the consequences of errors are severe. We bring practical knowledge of Ohio Medicaid rules and SSA program policy to every special needs trust we draft.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              First-Party vs. Third-Party Special Needs Trusts
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The most important threshold question in SNT planning is whose money will fund the trust. A <strong>first-party SNT</strong> (also called a self-settled or (d)(4)(A) trust) is funded with the disabled person\'s own assets. Common scenarios include a personal injury settlement, retroactive Social Security Disability benefits, or an inheritance that was already received outright. Federal law (42 U.S.C. § 1396p(d)(4)(A)) requires these trusts to: (1) be established by a parent, grandparent, legal guardian, or court — not by the beneficiary personally; (2) name the beneficiary as the sole lifetime beneficiary; (3) be established before the beneficiary\'s 65th birthday; and (4) include a Medicaid payback provision requiring that upon the beneficiary\'s death, the state Medicaid agency is reimbursed for all benefits paid before any remaining funds pass to heirs.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A <strong>third-party SNT</strong> is funded with assets belonging to someone other than the beneficiary — most commonly a parent or grandparent who wants to plan ahead for a disabled child. Third-party SNTs carry no Medicaid payback requirement, meaning that remaining trust funds at the beneficiary\'s death pass entirely to whomever the grantor designated. They have no age limit, can be funded by multiple family members over time (including through wills and beneficiary designations), and are the preferred vehicle whenever the family has a choice. When a grandparent wants to leave a bequest to a grandchild with a disability, the bequest should go to a third-party SNT — never outright to the grandchild, and never to the grandchild\'s parents to hold informally (which creates its own legal and tax complications).
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Permissible Distributions and Trustee Responsibilities
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The trustee of a special needs trust wields significant discretion — and significant responsibility. Every distribution must be evaluated against two questions: will this distribution reduce a government benefit, and does it genuinely serve the beneficiary\'s supplemental needs? Cash paid directly to the beneficiary counts as an SSI resource in the month received and as income the following month. Payments for food and shelter can trigger the SSI in-kind support and maintenance (ISM) rules, potentially reducing the beneficiary\'s monthly SSI payment by up to one-third plus $20. Permissible distributions — those that do not count against benefits — typically include medical and dental expenses not covered by Medicaid, personal care and hygiene items, clothing and accessories, transportation and vehicle expenses, recreation and travel, education and vocational training, technology and adaptive equipment, home furnishings, and legal and professional fees. Trustees must keep meticulous records and issue annual accountings consistent with their fiduciary duties under Ohio trust law.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio families who want a simpler alternative for smaller amounts should consider the Ohio ABLE program — a tax-advantaged savings account available to individuals whose disability began before age 26. ABLE accounts (up to $100,000) are excluded from SSI resource counting and can be used for a wide range of disability-related expenses. However, annual contribution limits ($18,000 in 2024) make them unsuitable for large settlements or inheritances. Many comprehensive disability plans combine a third-party SNT (for larger assets) with an ABLE account (for routine supplemental spending), giving trustees flexibility and giving beneficiaries greater autonomy over smaller purchases.
            </p>

            <LocationsWeServe title="Trusts" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/trusts/revocable-living-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Revocable Living Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Avoid probate and maintain control of your estate</span>
              </Link>
              <Link href="/trusts/irrevocable-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Irrevocable Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Medicaid planning and estate tax strategies</span>
              </Link>
              <Link href="/other-services/guardianships" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Guardianships</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Legal protection for adults and minors who need a guardian</span>
              </Link>
              <Link href="/other-services/powers-of-attorney" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Powers of Attorney</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Financial and healthcare decision-making authority</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
