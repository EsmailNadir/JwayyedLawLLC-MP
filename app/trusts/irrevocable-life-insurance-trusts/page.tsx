import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Irrevocable Life Insurance Trusts (ILIT) Lawyer Ohio | Columbus | Jwayyed Law LLC',
  description: 'Ohio ILIT attorney serving Columbus, Cincinnati, and Dayton. Remove life insurance from your taxable estate under IRC 2042. Crummey powers, 3-year rule, premium funding, second-to-die policies. Call (614) 285-5482.',
  keywords: [
    'irrevocable life insurance trust Columbus OH',
    'ILIT attorney Ohio',
    'life insurance estate tax Ohio',
    'Crummey powers Ohio',
    'IRC 2042 life insurance',
    'second-to-die ILIT Ohio',
    'ILIT lawyer Columbus',
    'estate planning life insurance trust Ohio',
    '3-year rule life insurance transfer Ohio',
  ],
  openGraph: {
    title: 'Irrevocable Life Insurance Trusts (ILIT) Lawyer Ohio | Columbus | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/trusts/irrevocable-life-insurance-trusts',
  },
  alternates: { canonical: '/trusts/irrevocable-life-insurance-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Irrevocable Life Insurance Trusts', href: '/trusts/irrevocable-life-insurance-trusts' },
];

const faqs = [
  {
    question: `What is an Irrevocable Life Insurance Trust (ILIT)?`,
    answer: `An ILIT is an irrevocable trust that owns one or more life insurance policies. Because the trust — not you — owns the policy, the death benefit is excluded from your taxable estate under IRC 2042. When you die, the proceeds are paid to the trust rather than directly to your estate, which means they are not subject to federal estate tax. The trustee then distributes the proceeds to your beneficiaries according to the trust's terms. Ohio has no state estate tax, but federal estate tax applies to estates exceeding the federal exemption (currently $13.61 million in 2024, scheduled to drop after 2025).`,
  },
  {
    question: `How does an ILIT save estate taxes?`,
    answer: `Under IRC 2042, life insurance proceeds are included in the insured's taxable estate if the insured held any "incidents of ownership" in the policy at death — including the right to change beneficiaries, borrow against the policy, or cancel it. By transferring the policy to an ILIT (or having the trust purchase the policy from the outset), you give up all incidents of ownership. If you survive the transfer by three years (the IRC 2035 three-year rule), the proceeds are excluded from your estate. For a $5 million life insurance policy and an estate already at the federal exemption threshold, keeping that policy out of your estate can save up to $2 million in federal estate tax.`,
  },
  {
    question: `What are Crummey powers and why do they matter?`,
    answer: `Crummey powers (named after the 1968 case Crummey v. Commissioner) are temporary withdrawal rights given to ILIT beneficiaries each time the grantor makes a premium gift to the trust. They matter because gifts to a trust are normally future-interest gifts, which do not qualify for the annual gift tax exclusion ($18,000 per recipient in 2024). By giving each beneficiary a 30-day window to withdraw their proportionate share of each premium payment, the gift becomes a present-interest gift and qualifies for the annual exclusion. The trustee sends written "Crummey notices" to beneficiaries each year documenting this right. Beneficiaries typically do not exercise the right to withdraw, but the notice must be genuine and the window must be real.`,
  },
  {
    question: `Can I be the trustee of my own ILIT?`,
    answer: `No. If you serve as trustee of your ILIT, the IRS will argue you retained incidents of ownership over the policy through your trustee powers, causing the death benefit to be pulled back into your estate under IRC 2042. The trustee must be someone other than the insured — typically a spouse (though this raises its own issues), an adult child, a trusted friend, or a corporate trustee. The trustee must be independent enough that they could in theory exercise their trustee powers in a way that would adversely affect you.`,
  },
  {
    question: `What is the three-year rule under IRC 2035?`,
    answer: `If you transfer an existing life insurance policy to an ILIT (rather than having the trust purchase a new policy), IRC 2035 requires you to survive the transfer by three years for the proceeds to be excluded from your estate. If you die within three years of transferring the policy, the full death benefit is pulled back into your taxable estate as if the transfer never happened. This rule applies to transfers of life insurance; it does not apply if the trust purchases the policy directly from the insurer. For clients who already own significant policies and want to establish an ILIT, the three-year risk must be carefully considered and weighed against the potential estate tax savings.`,
  },
  {
    question: `Can you cancel a life insurance policy held in an ILIT?`,
    answer: `The trustee — not you — has the authority to surrender or cancel a policy held in an ILIT. You cannot instruct the trustee to cancel the policy, change the policy terms, or take a loan against the cash value, as doing so would give you incidents of ownership and defeat the estate tax exclusion under IRC 2042. If the trust runs out of funds to pay premiums and the trustee cannot get enough contributions from the grantor (via Crummey gifts) to keep the policy in force, the trustee may have to use the policy's cash value to pay premiums, convert the policy to a reduced paid-up policy, or, as a last resort, surrender the policy.`,
  },
  {
    question: `What are the ongoing administration requirements for an ILIT?`,
    answer: `An ILIT requires disciplined annual administration. Each year, the grantor makes a gift to the trust in an amount sufficient to cover the insurance premium. The trustee sends Crummey notices to all beneficiaries documenting their withdrawal rights. After the withdrawal window closes (typically 30 days), the trustee uses the trust funds to pay the insurance premium. The trustee should maintain detailed records of all notices, acknowledgments, and premium payments. Failure to follow these formalities can cause the IRS to disregard the Crummey structure and treat the premiums as direct gifts that do not qualify for the annual exclusion.`,
  },
  {
    question: `How is an ILIT different from a revocable living trust?`,
    answer: `A revocable living trust can hold life insurance policies as an asset and can serve as the beneficiary of a policy, but it provides no estate tax benefit — assets in a revocable trust are fully included in your taxable estate because you retain the right to revoke or amend the trust. An ILIT is irrevocable: once established, you cannot take the policy back or change the trust's terms without the consent of the beneficiaries and a court order. In exchange for giving up that control, the policy proceeds are excluded from your estate and avoid probate. The key tradeoff is control for estate tax savings.`,
  },
];

export default function IrrevocableLifeInsuranceTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Irrevocable Life Insurance Trusts (ILIT) Lawyer"
        description="Life insurance death benefits are included in your taxable estate under IRC 2042 unless owned by an ILIT. Our Columbus attorneys help Ohio families remove life insurance from their estates, fund premiums with Crummey gifts, and use ILIT proceeds to pay estate taxes or purchase estate assets."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Irrevocable Life Insurance Trusts in Ohio: Removing Life Insurance from Your Taxable Estate
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Many Ohio families are surprised to learn that life insurance death benefits are generally included in the insured\'s federal taxable estate under IRC 2042 if the insured held any "incidents of ownership" in the policy at death. For a business owner or professional with $2–3 million in term or permanent life insurance, this can push an otherwise non-taxable estate over the federal exemption threshold — resulting in a significant and avoidable estate tax bill. An Irrevocable Life Insurance Trust (ILIT) solves this problem by shifting ownership of the policy from you to the trust, removing the death benefit from your estate while keeping the proceeds available to support your family or fund your estate\'s liquidity needs. Jwayyed Law LLC helps clients throughout Columbus, Cincinnati, Dayton, and surrounding Ohio communities design and administer ILITs as part of a comprehensive estate plan.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio does not impose a state estate tax (it was repealed effective January 1, 2013), so ILIT planning is exclusively a federal estate tax strategy for Ohio residents. The federal estate tax exemption is $13.61 million per individual in 2024, but this exemption is scheduled to sunset after December 31, 2025, to approximately $7 million (adjusted for inflation) absent congressional action. For Ohio families with significant life insurance, business interests, or investment portfolios, now is the time to evaluate ILIT planning while the exemption is at its historic high.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under IRC 2042, life insurance proceeds are included in the insured\'s gross estate if (1) the proceeds are payable to the insured\'s estate or executor, or (2) the insured possessed any incidents of ownership in the policy at death. Incidents of ownership include the right to change beneficiaries, to borrow against the policy\'s cash value, to cancel or surrender the policy, or to assign the policy. This is an extremely broad definition — even holding the policy in a revocable living trust does not remove it from your estate because you remain the trust owner with the ability to revoke.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              How Crummey Powers Make the ILIT Work
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An ILIT is irrevocable and the trust itself owns the policy. To keep the policy in force, someone must pay the premiums. Typically, you (as the grantor) make annual gifts to the trust in an amount equal to the premium. The challenge is that gifts to a trust are treated as gifts of a future interest — they do not qualify for the annual gift tax exclusion of $18,000 per beneficiary (2024 amount, indexed for inflation) unless the beneficiaries have the present right to demand the gifted funds.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Crummey powers solve this problem. Each time you make a premium gift to the trust, the trustee sends formal written notices — Crummey notices — to each trust beneficiary, informing them that they have the right to withdraw their proportionate share of the contribution within a defined window (typically 30 days). Because beneficiaries have this present-right demand power, the contribution qualifies as a present-interest gift and uses your annual exclusion. In practice, beneficiaries almost never exercise the right to withdraw because doing so would reduce the trust assets and ultimately their inheritance — but the right must be genuine, the notices must be real, and the 30-day window must actually be available. The IRS scrutinizes ILIT Crummey notices carefully, and failure to follow through can cause the premium gifts to be treated as taxable gifts that use your lifetime exemption.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If you have multiple beneficiaries, each one\'s annual exclusion can be leveraged. A couple with three adult children as ILIT beneficiaries can contribute up to $54,000 per year (three children × $18,000) free of gift tax using their annual exclusions. This allows substantial premium funding without eating into the lifetime exemption, making the ILIT an especially efficient vehicle for high-face-value permanent life insurance policies.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Transferring an Existing Policy vs. Trust-Purchased Policy: The Three-Year Rule
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The most elegant way to use an ILIT is to have the trust purchase a new policy directly from the insurer from the outset. Because the trust was always the owner and applicant, you never held incidents of ownership and the three-year rule of IRC 2035 does not apply. If you die the next day, the death benefit is still excluded from your estate.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If you already own a life insurance policy and want to transfer it to an ILIT, IRC 2035 creates a three-year lookback. If you die within three years of transferring the policy to the trust, the full death benefit is pulled back into your taxable estate as if the transfer never happened. The three-year rule applies only to life insurance transfers (and a few other transfers specifically included in the estate tax); it does not apply to transfers of most other assets. Despite this risk, the potential long-term estate tax savings often justify the transfer — particularly for younger, healthier insureds who are likely to survive the three-year period. For very ill or elderly clients, having the trust purchase a new policy (if insurable) is the safer approach.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Second-to-die (survivorship) life insurance policies — which pay out upon the death of the second of two insureds, typically spouses — are particularly well-suited for ILITs. Estate tax is generally deferred until the second spouse dies (due to the unlimited marital deduction), so the policy payout aligns with when the estate tax bill comes due. Second-to-die policies are also less expensive than single-life policies of equivalent face value. When the survivor dies, the ILIT receives the death benefit free of estate tax and can use the proceeds to purchase illiquid assets from the estate (such as real estate or a closely held business interest) at fair market value, providing estate liquidity without a forced sale.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Using ILIT Proceeds to Fund Estate Taxes and Purchase Estate Assets
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              One of the most powerful uses of ILIT proceeds is estate liquidity planning. If your estate consists largely of illiquid assets — a family farm in central Ohio, a closely held manufacturing business in Columbus, or investment real estate — your heirs may be forced to sell those assets at a discount to pay estate taxes within nine months of your death. An ILIT provides a pool of liquid funds that the trustee can use to purchase those illiquid assets from your estate at fair market value or to loan funds to your estate. The ILIT itself is not part of your estate, so these proceeds are available tax-free to address the tax bill without a forced liquidation.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Properly establishing and administering an ILIT requires careful attention to the Ohio Trust Code under ORC Chapter 5801, the IRC 2042 incidents-of-ownership rules, IRC 2035's three-year rule, and the Crummey notice requirements. Our Columbus estate planning attorneys at Jwayyed Law LLC draft the trust document, prepare the annual Crummey notice templates, and advise your trustee on ongoing administration so that the ILIT delivers the estate tax benefits it was designed to provide. Call us at (614) 285-5482 to get started.
            </p>

            <LocationsWeServe title="Irrevocable Life Insurance Trusts" />

            <div className="grid sm:grid-cols-2 gap-4 mt-8 mb-8">
              <Link href="/trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                All Trust Services
              </Link>
              <Link href="/trusts/irrevocable-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                Irrevocable Trusts
              </Link>
              <Link href="/trusts/dynasty-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                Dynasty Trusts
              </Link>
              <Link href="/other-services/estate-planning-wills" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                Estate Planning &amp; Wills
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
