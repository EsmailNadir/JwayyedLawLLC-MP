import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Revocable Living Trusts Lawyer in Ohio',
  description: 'Ohio attorney helping you set up a revocable living trust to avoid probate, protect privacy, and ensure a smooth transfer of assets.',
  keywords: [
    'revocable living trust Columbus OH',
    'living trust attorney Ohio',
    'avoid probate Ohio',
    'estate planning lawyer Columbus',
    'revocable trust Ohio',
    'pour-over will Ohio',
    'trust funding Ohio',
    'Ohio Trust Code attorney',
  ],
  openGraph: {
    title: 'Revocable Living Trusts Lawyer in Ohio',
    description: 'Ohio attorney helping you set up a revocable living trust to avoid probate, protect privacy, and ensure a smooth transfer of assets. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/trusts/revocable-living-trusts',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/trusts/revocable-living-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Revocable Living Trusts', href: '/trusts/revocable-living-trusts' },
];

const faqs = [
  {
    question: `What is a revocable living trust under Ohio law?`,
    answer: `A revocable living trust is a legal arrangement governed by the Ohio Trust Code (ORC Chapters 5801–5811) in which you — as the grantor — transfer ownership of your assets to the trust during your lifetime while retaining the right to amend or revoke it at any time under ORC 5805.06. You typically serve as your own trustee, maintaining full control of the assets. Upon your death or incapacity, a successor trustee you have named steps in to manage and distribute the trust property according to your written instructions — entirely outside of probate court.`,
  },
  {
    question: `How does a revocable living trust avoid probate in Ohio?`,
    answer: `Probate in Ohio is the court-supervised process of validating a will and authorizing distribution of assets through the Franklin County or other county probate court. Because trust assets are legally owned by the trust — not by you individually at death — they are not subject to that court process. A properly funded revocable trust allows your successor trustee to transfer real estate, bank accounts, investments, and other property to beneficiaries within weeks rather than the six-to-twelve months Ohio probate often takes, and without filing fees that can range from one to four percent of the estate.`,
  },
  {
    question: `What is a pour-over will and why do I need one with my trust?`,
    answer: `A pour-over will is a companion document that captures any assets you forgot to transfer into the trust during your lifetime and directs them into the trust at death, so they are ultimately distributed according to the trust's terms. Those assets will still pass through probate, but the will ensures nothing is left out of your overall plan. Ohio law requires a valid will to comply with ORC 2107.03 formalities — two witnesses and notarization — and Jwayyed Law LLC always drafts a pour-over will alongside every revocable living trust.`,
  },
  {
    question: `What does "funding the trust" mean and what happens if I forget?`,
    answer: `Funding means re-titling assets in the name of your trust — for example, changing your real estate deed to read "John Smith, Trustee of the John Smith Revocable Living Trust dated January 1, 2025" and updating beneficiary designations on bank and investment accounts. An unfunded or partially funded trust is the most common estate planning mistake. Assets that were never transferred into the trust must go through probate. Our firm helps clients complete funding by preparing Ohio deeds, drafting assignment documents for business interests, and providing account change instructions.`,
  },
  {
    question: `Can I change or revoke my revocable living trust?`,
    answer: `Yes. Under ORC 5805.06, a revocable trust may be amended, restated, or entirely revoked by the grantor at any time while the grantor has legal capacity, unless the trust instrument provides otherwise. A full restatement — replacing the entire trust document — is often cleaner than multiple amendments when circumstances change significantly. Upon revocation, assets retitled in the trust's name must be retitled back to you individually. Changes require no court approval and can be completed quickly with the help of an attorney.`,
  },
  {
    question: `How does a revocable living trust compare to a will?`,
    answer: `Both documents direct who receives your property at death, but they operate very differently. A will must be probated — filed with the county probate court, published in a legal notice, and supervised by a judge. It becomes a public record. A revocable trust passes assets privately and immediately upon death or incapacity. A trust also provides incapacity planning: if you become disabled, your successor trustee manages your affairs without a court-appointed guardian. The trade-off is cost — a trust-based plan costs more to draft and requires the ongoing work of funding, but typically saves significantly in probate costs and delays.`,
  },
  {
    question: `Who should serve as successor trustee?`,
    answer: `A successor trustee takes over management of trust assets if you die or become incapacitated. This person or institution should be trustworthy, organized, and willing to follow detailed legal and financial responsibilities. Common choices include an adult child, sibling, trusted friend, or a corporate trustee such as a bank trust department. Under ORC 5808.01, trustees have duties of loyalty, prudent administration, and impartiality among beneficiaries. Our firm counsels clients on successor trustee selection and can prepare detailed letters of instruction to guide the trustee through their duties.`,
  },
  {
    question: `Does a revocable living trust protect assets from creditors or reduce estate taxes?`,
    answer: `No — and this is one of the most common misconceptions. Because you retain full control and the right to revoke the trust, the IRS and Ohio courts treat trust assets as your personal assets. Creditors can reach them during your lifetime, and they are included in your taxable estate. A revocable trust provides probate avoidance and privacy, not asset protection or estate tax reduction. Ohio eliminated its state estate tax in 2013, so for most Ohio residents the focus is on federal estate tax planning (applicable for estates over $13.99 million in 2025) and probate avoidance — the latter being exactly what a revocable trust delivers.`,
  },
];

export default function RevocableLivingTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Revocable Living Trusts Lawyer"
        description="Helping Ohio families avoid probate, protect privacy, and ensure a seamless transfer of assets through a properly drafted and funded revocable living trust."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Revocable Living Trusts in Ohio: What They Are and Why They Matter
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A revocable living trust is one of the most versatile and widely used estate planning tools available to Ohio residents. Governed by the Ohio Trust Code — ORC Chapters 5801 through 5811 — a revocable trust allows you to transfer ownership of your home, bank accounts, investments, and other property into a legal arrangement that you control completely during your lifetime. You serve as your own trustee, manage the assets exactly as you did before, and can amend or revoke the trust at any time under ORC 5805.06. The difference only becomes apparent when you die or become incapacitated: your named successor trustee steps in and distributes your estate according to your written instructions — without probate, without court supervision, and without delays measured in months or years.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Probate in Ohio — the court process of validating a will and supervising asset distribution — runs through county probate courts. In Franklin County, for example, a modest estate can take six to eighteen months to close, and statutory fees paid to the executor and attorney are set by ORC 2113.35 and can consume one to four percent of the gross estate. A fully funded revocable trust bypasses this process entirely. Assets titled in the trust name pass immediately to beneficiaries, saving both time and money. The trust document is also private — unlike a probated will, which becomes a public court record that anyone can search.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For Ohio residents with real estate in multiple counties or multiple states, a revocable trust is particularly valuable. Without a trust, your family may need to open ancillary probate proceedings in each state where you own real property — a process that multiplies the cost and delay of settling your estate. A trust eliminates that problem because the trustee simply executes a new deed on behalf of the trust in each jurisdiction, without court involvement.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              The Three Parties: Grantor, Trustee, and Beneficiary
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Every revocable living trust involves three roles. The <strong>grantor</strong> (also called settlor or trustor) is the person who creates and funds the trust. The <strong>trustee</strong> holds legal title to the trust assets and manages them according to the trust terms; during your lifetime, you serve as your own trustee. The <strong>beneficiary</strong> is the person or entity who receives the economic benefit — during your life, you are the primary beneficiary, and after your death, your named heirs receive distributions. These roles can be held by the same person simultaneously, which is why a revocable trust feels seamless during your lifetime: nothing changes about how you use or access your property.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The successor trustee — the person who takes over when you die or become incapacitated — is arguably the most important decision in your estate plan. This individual must be willing to manage financial accounts, sell or transfer real estate, file tax returns, and distribute assets to beneficiaries in strict compliance with the trust document. Ohio law imposes fiduciary duties on trustees under ORC Chapter 5808, including duties of loyalty, prudent administration, and impartiality among beneficiaries. Choosing the right person and preparing clear, detailed instructions are critical steps we work through with every client.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Funding the Trust: The Step Most People Skip
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A revocable living trust that has not been funded is essentially a blank container — it provides no probate-avoidance benefit because there are no assets titled in the trust\'s name. Funding requires re-titling every significant asset: executing and recording new Ohio deeds for real property, updating account titles at banks and brokerage firms, assigning business interests (LLC membership interests, partnership interests), and changing beneficiary designations on accounts that pass outside of probate anyway (like life insurance and IRAs — these typically name the trust as beneficiary only if there is a specific planning reason to do so). Our firm handles deed preparation for Ohio real estate as part of our trust planning service and provides a comprehensive funding checklist to guide clients through every remaining asset.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Every client who establishes a revocable living trust with Jwayyed Law LLC also receives a <strong>pour-over will</strong> — a backup document that captures any assets inadvertently left outside the trust and directs them into the trust at death. Those assets will pass through a simplified probate process called summary release from administration if they are small enough, or a full probate otherwise, but the pour-over will ensures they are ultimately governed by your trust\'s distribution instructions. Think of the pour-over will as your safety net.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Common Misconceptions About Revocable Trusts
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Many Ohio families believe a revocable living trust protects assets from creditors or reduces estate taxes. Neither is true. Because you retain full power to revoke the trust and reclaim the assets, creditors — including nursing homes and Medicaid — can reach trust assets during your lifetime, and the IRS includes them in your taxable estate. Ohio eliminated its state estate tax in 2013, so estate tax is only a concern for estates exceeding the federal exemption ($13.99 million in 2025). Revocable trusts are primarily probate-avoidance and incapacity-planning tools. For creditor protection, you need a different structure — such as an <Link href="/trusts/asset-protection-trusts" className="text-[#b87333] underline hover:text-[#a06828]">Ohio Legacy Trust</Link> or a properly structured LLC. For Medicaid planning, an <Link href="/trusts/irrevocable-trusts" className="text-[#b87333] underline hover:text-[#a06828]">irrevocable trust</Link> with a five-year lookback consideration is the appropriate vehicle.
            </p>

            <LocationsWeServe title="Trusts" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/trusts/special-needs-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Special Needs Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Protecting benefits eligibility for disabled loved ones</span>
              </Link>
              <Link href="/trusts/irrevocable-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Irrevocable Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Estate tax planning and Medicaid planning options</span>
              </Link>
              <Link href="/trusts/asset-protection-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Asset Protection Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Ohio Legacy Trusts under ORC Chapter 5816</span>
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
