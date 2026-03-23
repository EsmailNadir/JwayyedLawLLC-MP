import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Asset Protection Trusts Lawyer in Ohio',
  description: 'Ohio attorney helping individuals establish Ohio Legacy Trusts under ORC Chapter 5816 to protect assets from future creditors.',
  keywords: [
    'asset protection trust Ohio',
    'Ohio Legacy Trust attorney',
    'domestic asset protection trust Ohio',
    'ORC 5816 trust attorney',
    'spendthrift trust Columbus OH',
    'creditor protection trust Ohio',
    'asset protection lawyer Columbus',
    'Ohio DAPT attorney',
  ],
  openGraph: {
    title: 'Asset Protection Trusts Lawyer in Ohio',
    description: 'Ohio attorney helping individuals establish Ohio Legacy Trusts under ORC Chapter 5816 to protect assets from future creditors. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/asset-protection-trusts',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/trusts/asset-protection-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Asset Protection Trusts', href: '/trusts/asset-protection-trusts' },
];

const faqs = [
  {
    question: `What is the Ohio Legacy Trust and how does it work?`,
    answer: `The Ohio Legacy Trust (OLT) is Ohio's domestic asset protection trust (DAPT), authorized under ORC Chapter 5816. It is a self-settled irrevocable trust in which the grantor can be a discretionary beneficiary — meaning you can transfer assets into a trust that protects them from future creditors while you remain eligible to receive distributions from that same trust at the trustee's discretion. The trust must be irrevocable, must contain a spendthrift provision prohibiting the beneficiary's creditors from reaching trust assets, and must be governed by Ohio law. A qualified trustee — at least one of whom must be an Ohio resident individual or an Ohio-authorized trust company — must administer the trust. The trustee has sole discretion over distributions and cannot be instructed by the grantor to make a distribution.`,
  },
  {
    question: `What is the 18-month seasoning period for Ohio Legacy Trusts?`,
    answer: `Under ORC 5816.05, creditor protection under an Ohio Legacy Trust does not take effect immediately upon transfer. A qualifying transfer must "season" for 18 months (one year and six months) before it is protected from creditors whose claims arose before the transfer. More precisely, the protection applies to claims that arose after the transfer once the seasoning period has elapsed, and to pre-transfer creditors only if the transfer was not a fraudulent conveyance. For maximum protection, an Ohio Legacy Trust should be established and funded well in advance of any known or reasonably foreseeable creditor threat — not as a last-minute response to pending litigation.`,
  },
  {
    question: `What are "qualified dispositions" under ORC Chapter 5816?`,
    answer: `A "qualified disposition" under ORC 5816.02 is a transfer of property to an Ohio Legacy Trust by the settlor, directly or indirectly, that satisfies the statutory requirements: the trust is irrevocable; contains a spendthrift provision; designates at least one qualified trustee; is governed by Ohio law; and is made with the intent to defraud no one. At the time of the transfer, the settlor must also execute a qualified affidavit — a sworn statement confirming, among other things, that the transfer does not render the settlor insolvent, that no pending or threatened litigation exists, and that the assets transferred are not proceeds of any wrongful act. The qualified affidavit is a critical procedural requirement that must be completed contemporaneously with the transfer.`,
  },
  {
    question: `What assets can be transferred into an Ohio Legacy Trust?`,
    answer: `Ohio places no categorical restriction on the type of assets that can be transferred into an OLT. Common assets include: cash and investment accounts, real estate (by deed), business interests (LLC membership interests, partnership interests, shares), intellectual property, and other personal property. However, practical limitations apply. Real estate subject to a mortgage may require lender consent under a due-on-sale clause. Retirement accounts (IRAs, 401(k)s) cannot be transferred into a trust without triggering immediate taxation — they should be coordinated through beneficiary designations rather than retitling. Transfers made within 30 days of incurring a debt are treated differently than transfers made on a longer time horizon. An experienced attorney should review every asset before transfer.`,
  },
  {
    question: `What are the fraudulent transfer limitations on Ohio Legacy Trusts?`,
    answer: `An Ohio Legacy Trust does not shield assets from fraudulent transfers. Under Ohio's Uniform Fraudulent Transfer Act (ORC 1336.04), a transfer is fraudulent if made with actual intent to hinder, delay, or defraud any creditor, or if made without receiving reasonably equivalent value at a time when the transferor was insolvent. Creditors who prove a fraudulent conveyance can void the transfer. Ohio Legacy Trusts are designed for prospective planning — protecting assets from creditors whose claims arise in the future — not for sheltering assets from known, present claims. If a lawsuit is already filed or threatened, attempting to fund an OLT may constitute a fraudulent transfer and expose the settlor and attorney to significant liability.`,
  },
  {
    question: `How does an Ohio Legacy Trust compare to an LLC for asset protection?`,
    answer: `Both LLCs and Ohio Legacy Trusts are legitimate asset protection tools, but they work differently. An LLC (limited liability company) protects the LLC's business assets from the personal creditors of its members, and protects personal assets from the business's liabilities — but only when properly structured and maintained. An Ohio Legacy Trust protects assets transferred into the trust from the grantor's personal creditors, with the 18-month seasoning limitation. For many clients, a combined strategy is optimal: business assets held in a properly structured LLC, and excess personal investment assets held in an Ohio Legacy Trust. Neither tool is a guarantee, and both require careful ongoing compliance. Our firm assists clients with both structures as part of a comprehensive asset protection plan.`,
  },
  {
    question: `Is an Ohio Legacy Trust appropriate for Medicaid planning?`,
    answer: `No. An Ohio Legacy Trust is not an appropriate Medicaid planning tool and should not be confused with Medicaid asset protection trusts. For Medicaid planning, an irrevocable Medicaid trust must be structured so that the grantor retains no beneficial interest and has no ability to receive distributions of principal — requirements fundamentally at odds with the Ohio Legacy Trust's defining feature of allowing the grantor to be a discretionary beneficiary. Using an OLT in Medicaid planning would likely result in the trust assets being counted as available resources by Ohio Medicaid. If your goal is Medicaid planning for long-term care, speak with us about a properly structured irrevocable trust or the Medicaid five-year lookback planning strategies.`,
  },
  {
    question: `How do I establish an Ohio Legacy Trust with Jwayyed Law LLC?`,
    answer: `Establishing an Ohio Legacy Trust requires careful planning and precise drafting. The process begins with a comprehensive review of your assets, liabilities, and goals. We then draft the trust document with all statutory requirements — irrevocability, spendthrift provision, Ohio law governing provision, qualified trustee designation — and prepare the qualified affidavit required by ORC 5816.05. We coordinate with you to identify and transfer qualifying assets into the trust, preparing deeds, assignment agreements, and account transfer letters as needed. We also advise on how the trust interacts with your overall estate plan, including your revocable living trust, will, and beneficiary designations. Call our Columbus office at (614) 285-5482 to schedule a consultation.`,
  },
];

export default function AssetProtectionTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Asset Protection Trusts Lawyer"
        description="Helping Ohio individuals and business owners establish Ohio Legacy Trusts under ORC Chapter 5816 to protect assets from future creditors and unforeseen liability."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Ohio Legacy Trusts: Domestic Asset Protection Under ORC Chapter 5816
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio is one of a growing number of states that authorizes domestic asset protection trusts (DAPTs) — trusts in which the grantor can be a discretionary beneficiary of the very trust that protects assets from the grantor\'s creditors. Ohio\'s version is called the Ohio Legacy Trust (OLT), and it is governed by ORC Chapter 5816, the Ohio Legacy Trust Act. Before Ohio joined this group of states, residents who wanted this type of protection had to use offshore trusts or trusts in states like Nevada or Delaware, often at significant complexity and expense. The Ohio Legacy Trust Act, effective in 2013, brought that option home — allowing Ohioans to establish powerful creditor protection structures under familiar Ohio law, administered by Ohio trustees, with the full benefit of Ohio\'s spendthrift trust provisions under ORC Chapter 5805.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The core concept of an Ohio Legacy Trust is straightforward: you transfer assets into an irrevocable trust, name at least one qualified Ohio trustee to administer it, and include a spendthrift provision that prohibits your creditors from reaching the trust assets. Unlike a traditional irrevocable trust — where the grantor must give up all beneficial interest — an OLT allows you to remain a <em>discretionary</em> beneficiary. The trustee has sole discretion to make or withhold distributions to you; you cannot demand a distribution or direct the trustee. Because you lack the ability to compel distributions, creditors cannot step into your shoes to compel them either. After an 18-month seasoning period under ORC 5816.05, the trust assets are protected from claims that arose after the transfer date.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Legacy Trusts are most appropriate for individuals who have accumulated significant assets and want to protect them against future unforeseen liability — a professional (physician, attorney, contractor, business owner) exposed to malpractice or commercial litigation risk, a real estate investor with multiple properties, or an individual who wants to ensure that a catastrophic judgment or divorce settlement cannot wipe out a lifetime of savings. The planning must be done prospectively and in good faith. The trust cannot be used to shelter assets from existing or reasonably anticipated creditors, and transfers made with intent to hinder, delay, or defraud a creditor remain voidable under Ohio\'s fraudulent transfer law (ORC Chapter 1336).
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Statutory Requirements and the Qualified Affidavit
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              To qualify for protection under ORC Chapter 5816, an Ohio Legacy Trust must satisfy several mandatory requirements. The trust must be <strong>irrevocable</strong> — the grantor cannot retain the right to take assets back. It must contain a <strong>spendthrift provision</strong> that prevents both voluntary and involuntary assignment of the grantor\'s beneficial interest. At least one <strong>qualified trustee</strong> must be either an Ohio resident individual or a trust company authorized to conduct trust business in Ohio — and that trustee must maintain custody of assets, maintain trust records, and prepare accountings. The trust must be expressly governed by <strong>Ohio law</strong>.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Before or simultaneously with each transfer into the trust, the grantor must execute a <strong>qualified affidavit</strong> under ORC 5816.05, swearing that: the transfer does not render the grantor insolvent or unable to pay debts as they come due; the grantor is not about to file for bankruptcy and has not filed within the preceding 5 years; no pending or threatened civil or criminal actions exist against the grantor (with certain exceptions); the transferred assets were not derived from any unlawful activity; and the grantor is not in default on any child support obligation. Failure to execute a proper qualified affidavit can void the statutory protections for that transfer. This is not a form document — it must be tailored to the grantor\'s specific circumstances and executed with the assistance of legal counsel.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Ohio Legacy Trust vs. Other Asset Protection Strategies
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio residents have several asset protection options, and an Ohio Legacy Trust is one piece of a broader strategy. Retirement accounts (IRAs and 401(k)s) enjoy strong federal and state creditor protection and should be maximized before considering a trust transfer. Ohio homestead exemption protects up to $145,425 in home equity from most creditor claims under ORC 2329.66. A properly structured LLC provides liability protection for business assets and separates personal assets from business risk. Life insurance cash value and annuities enjoy statutory protection under ORC 3911.10 and 3911.14. An Ohio Legacy Trust complements these tools by protecting the investment assets — brokerage accounts, real estate beyond the homestead, business sale proceeds — that do not fit into other protected categories. An experienced attorney can help you map your entire asset picture against these protections and design a coordinated strategy.
            </p>

            <LocationsWeServe title="Trusts" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/trusts/irrevocable-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Irrevocable Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Estate tax planning, Medicaid planning, and more</span>
              </Link>
              <Link href="/trusts/revocable-living-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Revocable Living Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Probate avoidance and incapacity planning</span>
              </Link>
              <Link href="/trusts/spendthrift-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Spendthrift Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Protecting beneficiaries from their own creditors</span>
              </Link>
              <Link href="/trusts/medicaid-asset-protection-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Medicaid Asset Protection Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Long-term care planning with the five-year lookback</span>
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
