import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Irrevocable Trusts Lawyer in Ohio | Columbus',
  description: 'Ohio attorney helping clients establish irrevocable trusts for estate tax planning, Medicaid planning, and asset protection.',
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
    title: 'Irrevocable Trusts Lawyer in Ohio | Columbus',
    description: 'Ohio attorney helping clients establish irrevocable trusts for estate tax planning, Medicaid planning, and asset protection. Call (614) 285-5482.',
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
    question: `What makes a trust irrevocable under Ohio law?`,
    answer: `Under ORC 5801.10, a trust is irrevocable if the settlor has not reserved the power to revoke it. An irrevocable trust cannot be unilaterally taken back or changed by the person who created it — the grantor gives up ownership and control of the transferred assets. This loss of control is precisely what creates the legal and tax benefits of an irrevocable trust: because the grantor no longer owns the assets, they are generally not reachable by the grantor's creditors (subject to fraudulent transfer limitations), not included in the grantor's taxable estate for estate tax purposes (depending on trust structure), and not counted as the grantor's resources for Medicaid eligibility purposes (subject to the five-year lookback period). Irrevocability is the trade-off you make to gain these protections.`,
  },
  {
    question: `What is an Irrevocable Life Insurance Trust (ILIT) and why would I need one in Ohio?`,
    answer: `An Irrevocable Life Insurance Trust (ILIT) is an irrevocable trust that owns a life insurance policy on the grantor's life. Without an ILIT, life insurance proceeds paid at death are included in your taxable estate if you held any "incidents of ownership" in the policy — the right to change beneficiaries, borrow against the policy, or surrender it. In 2025, the federal estate tax exemption is $13.99 million, but it is scheduled to drop roughly in half when current tax law sunsets after 2025. For Ohio clients with larger estates, removing life insurance from the taxable estate through an ILIT can generate significant tax savings. The trust owns the policy, pays premiums using contributions from the grantor (via Crummey powers that qualify contributions as annual exclusion gifts), and receives the death benefit entirely outside of the grantor's taxable estate. Proceeds can then be used by the trustee to provide liquidity to pay estate taxes without the proceeds themselves being taxed.`,
  },
  {
    question: `What is a Grantor Retained Annuity Trust (GRAT) and is it useful in Ohio?`,
    answer: `A Grantor Retained Annuity Trust (GRAT) is an irrevocable trust in which the grantor transfers appreciating assets and retains the right to receive fixed annuity payments for a term of years. At the end of the term, any appreciation above the IRS hurdle rate (called the Section 7520 rate) passes to beneficiaries free of gift tax. GRATs are particularly effective when interest rates are low and when the transferred assets are expected to grow significantly — such as business interests before a liquidity event or concentrated stock positions. Ohio has no state gift tax (Ohio eliminated it in 2013), so the only tax consideration is federal. A "zeroed-out" GRAT — structured so that the actuarial value of the retained annuity equals the value transferred in — results in a near-zero taxable gift while still passing appreciation to heirs. GRATs involve precise calculations and must be drafted carefully to avoid adverse tax consequences.`,
  },
  {
    question: `How does an irrevocable trust help with Ohio Medicaid planning?`,
    answer: `Medicaid, which pays for long-term care in nursing facilities, is available to Ohio residents who meet income and asset limits. Single individuals may keep roughly $2,000 in countable assets; married couples have a higher community spouse resource allowance. To qualify for Medicaid without spending down all assets, many Ohioans transfer assets into an irrevocable Medicaid Asset Protection Trust (MAPT). The grantor cannot receive distributions of principal from the trust — only income — and gives up control of the assets. Ohio Medicaid then looks back five years (60 months) at all asset transfers; transfers made within the lookback period can result in a period of Medicaid ineligibility. Transfers made more than five years before applying for benefits are generally protected. The MAPT strategy requires advance planning — ideally five or more years before nursing home care is needed.`,
  },
  {
    question: `Can an irrevocable trust be modified or terminated in Ohio?`,
    answer: `Despite the name, Ohio law provides several pathways to modify or terminate an irrevocable trust. Under ORC 5804.11, a trust can be modified or terminated without court approval through a Non-Judicial Settlement Agreement (NJSA) if all qualified beneficiaries and the trustee consent and the modification does not violate a material purpose of the trust. For trust terms that cannot be changed by consent — such as charitable interests — modification requires a court petition under the cy pres doctrine (ORC 5804.09), which allows a court to substitute a revised charitable purpose when the original one has become impractical. Trusts can also be decanted — the trustee distributes assets from an old trust into a new trust with updated terms — under ORC 5808.18. These modification options make irrevocable trusts less rigid in practice than their name suggests, though the process requires legal guidance.`,
  },
  {
    question: `What is a charitable remainder trust and what tax benefits does it offer?`,
    answer: `A Charitable Remainder Trust (CRT) is an irrevocable trust in which the grantor contributes assets — often appreciated property — and retains the right to receive income distributions for life or a term of years. At the end of the trust term, the remaining assets pass to one or more designated charities. A CRT allows the grantor to: (1) avoid immediate capital gains tax on the sale of appreciated assets transferred to the trust; (2) receive a partial charitable income tax deduction in the year of contribution; and (3) generate an income stream for retirement. Ohio has no state estate tax and no state gift tax, so the federal income tax deduction and capital gains deferral are the primary tax drivers. CRTs work well for Ohio clients who own highly appreciated real estate, farmland, closely held business interests, or investment portfolios and want to generate retirement income while benefiting a charity.`,
  },
  {
    question: `What are the trustee's duties for an irrevocable trust in Ohio?`,
    answer: `Trustees of irrevocable trusts in Ohio are fiduciaries subject to the full range of duties under the Ohio Trust Code (ORC Chapter 5808). These include: the duty of loyalty — acting solely in the interest of the beneficiaries; the duty of prudent administration — investing trust assets using the Ohio Uniform Prudent Investor Act standard (ORC 5809); the duty of impartiality — balancing the interests of current income beneficiaries and remainder beneficiaries; the duty to inform and report — providing regular accountings and notifications to beneficiaries; and the duty to keep trust assets separate from personal assets. Trustee misconduct — self-dealing, imprudent investment, or failure to account — can give rise to a breach of fiduciary duty claim and personal liability to the trustee. Selecting a knowledgeable and reliable trustee, and providing clear trust terms, are critical to the trust's long-term success.`,
  },
  {
    question: `Does Ohio have an estate tax that irrevocable trusts can help minimize?`,
    answer: `No. Ohio repealed its state estate tax effective January 1, 2013. Ohio residents now only face the federal estate tax, which applies to estates exceeding the federal exemption — $13.99 million per individual (or $27.98 million for a married couple with portability) in 2025. However, this exemption is scheduled to revert to approximately $7 million (inflation-adjusted) after December 31, 2025, when provisions of the Tax Cuts and Jobs Act sunset absent congressional action. For Ohio families with estates in the $7–14 million range, the post-2025 sunset creates urgency to establish irrevocable trusts (ILITs, GRATs, Spousal Lifetime Access Trusts) now to lock in the higher exemption. Even for smaller estates, Medicaid planning trusts and charitable trusts provide significant non-tax benefits. Our firm monitors federal tax law developments and provides clients with timely planning recommendations.`,
  },
];

export default function IrrevocableTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Irrevocable Trusts Lawyer"
        description="Helping Ohio clients establish irrevocable trusts for estate tax reduction, Medicaid planning, life insurance planning, and charitable giving — with guidance on modification options when circumstances change."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Irrevocable Trusts in Ohio: Types, Benefits, and When to Use Them
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An irrevocable trust is a trust that the grantor cannot unilaterally revoke or amend after creation. Under ORC 5801.10, a trust is irrevocable to the extent that the settlor has not reserved a power of revocation. That loss of control is intentional and strategic: by relinquishing ownership of the transferred assets, the grantor places them beyond the reach of personal creditors, removes them from the taxable estate, and — with proper structuring — protects them from Medicaid asset counting after the applicable lookback period. Irrevocable trusts are not one-size-fits-all instruments. They come in many forms — Irrevocable Life Insurance Trusts (ILITs), Grantor Retained Annuity Trusts (GRATs), Charitable Remainder Trusts (CRTs), Medicaid Asset Protection Trusts (MAPTs), Spousal Lifetime Access Trusts (SLATs), and Ohio Legacy Trusts — each designed to solve a specific planning problem.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio eliminated its state estate tax in 2013, making Ohio one of the more estate-tax-friendly states for residents. However, the federal estate tax — currently applicable to estates over $13.99 million in 2025 — looms for high-net-worth families, especially given that the Tax Cuts and Jobs Act\'s doubled exemption is scheduled to sunset after December 31, 2025, potentially cutting the exemption to roughly $7 million. This creates a narrow window for Ohio families with estates in that range to transfer assets into irrevocable trusts and lock in current high exemption amounts. Jwayyed Law LLC works with clients to evaluate their estate\'s exposure to federal estate tax and recommend trust structures that efficiently transfer wealth to the next generation.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For Ohio seniors planning for the potential need for Medicaid-funded long-term care, the irrevocable Medicaid Asset Protection Trust (MAPT) is a cornerstone planning tool. Ohio Medicaid applies a five-year (60-month) lookback period to asset transfers: if you transfer assets to an irrevocable trust within five years of applying for Medicaid nursing home benefits, Ohio Job and Family Services will impose a period of ineligibility proportional to the value transferred. Assets transferred more than five years before the application date are generally protected. The earlier you plan, the more assets you can protect. The MAPT must be structured so that the grantor retains no power to reach the principal — income distributions may be permitted — and the trust must be genuinely irrevocable with no grantor beneficial control.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Common Types of Irrevocable Trusts for Ohio Residents
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>Irrevocable Life Insurance Trust (ILIT):</strong> Owns a life insurance policy outside the grantor\'s taxable estate. Death benefits flow to trust beneficiaries free of estate tax. Premiums are funded through annual exclusion gifts using "Crummey" notices. Particularly useful for Ohio business owners whose estate is otherwise illiquid and whose heirs will need cash to pay estate taxes or buy out business interests.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>Grantor Retained Annuity Trust (GRAT):</strong> Transfers appreciating assets to a trust while the grantor retains annuity payments for a fixed term. Appreciation above the IRS Section 7520 hurdle rate passes to beneficiaries gift-tax-free. Ideal for low-interest-rate environments and for assets expected to appreciate significantly — business interests before a sale, pre-IPO shares, or real estate in a rising market.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>Charitable Remainder Trust (CRT):</strong> Contributes appreciated assets to a trust; grantor receives income for life or a term; remainder passes to charity. Avoids immediate capital gains on the sale of appreciated property and generates a partial charitable income tax deduction. Common for Ohio clients selling farm land, commercial real estate, or closely held business interests.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>Spousal Lifetime Access Trust (SLAT):</strong> One spouse gifts assets to an irrevocable trust that names the other spouse as a discretionary beneficiary. The gifting spouse removes the assets from the taxable estate; the other spouse retains indirect access to trust assets through discretionary distributions. SLATs allow married couples to lock in the high federal exemption while retaining some access to funds through the beneficiary spouse.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Modifying an Irrevocable Trust in Ohio: NJSAs, Decanting, and Court Petitions
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Despite their name, irrevocable trusts are not always permanent. Ohio law provides several mechanisms for modification. Under ORC 5804.11, a <strong>Non-Judicial Settlement Agreement (NJSA)</strong> allows all qualified beneficiaries and the trustee to agree in writing to modify or terminate a trust, without court involvement, as long as the change does not violate a material purpose of the trust. An NJSA can address trustee succession, administrative provisions, distribution standards, and even trust duration in some circumstances. For irrevocable trusts with charitable beneficiaries, modification may require a court petition under the <strong>cy pres doctrine</strong> (ORC 5804.09) if the charitable purpose has become impractical or wasteful. <strong>Decanting</strong> under ORC 5808.18 is another option — the trustee distributes assets from an old trust into a new trust with updated terms, effectively rewriting provisions that no longer serve the beneficiaries' needs. Our firm advises trustees and beneficiaries on which modification pathway is available and appropriate for each situation.
            </p>

            <LocationsWeServe title="Trusts" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/trusts/revocable-living-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Revocable Living Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Probate avoidance and flexible lifetime control</span>
              </Link>
              <Link href="/trusts/asset-protection-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Ohio Legacy Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Self-settled asset protection under ORC Chapter 5816</span>
              </Link>
              <Link href="/trusts/medicaid-asset-protection-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Medicaid Asset Protection Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Long-term care planning with the five-year lookback</span>
              </Link>
              <Link href="/trusts/irrevocable-life-insurance-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Irrevocable Life Insurance Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Remove life insurance from your taxable estate</span>
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
