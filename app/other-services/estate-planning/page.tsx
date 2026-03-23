import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Estate Planning Lawyer in Ohio',
  description: 'Experienced Ohio estate planning attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Protecting your legacy.',
  keywords: ['estate planning lawyer Columbus OH', 'estate planning attorney Ohio', 'wills trusts lawyer', 'Franklin County estate planning attorney'],
  openGraph: {
    title: 'Estate Planning Lawyer in Ohio',
    url: 'https://www.jjlawohio.com/other-services/estate-planning',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/other-services/estate-planning' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Planning', href: '/other-services/estate-planning' },
];

const faqs = [
  {
    question: `Do I need a will in Ohio?`,
    answer: `You are not legally required to have a will, but dying without one — called dying intestate — means Ohio law, not you, decides who inherits your property. Under ORC 2105.06, your assets are distributed to your closest surviving relatives in a statutory order: surviving spouse and children, then parents, then siblings, and so on. This default distribution may not reflect your actual wishes, especially if you want to leave property to a friend, a charity, or a non-traditional family member. A valid Ohio will under ORC Chapter 2107 lets you name beneficiaries, select a trusted executor, establish trusts for minor children, and name a guardian for your minor children — decisions that can have enormous consequences for your family.`,
  },
  {
    question: `What happens if I die without a will in Ohio?`,
    answer: `If you die without a valid will in Ohio, your estate is distributed according to the intestate succession statutes in ORC Chapter 2105. Under ORC 2105.06, your surviving spouse's share depends on whether you have surviving children: if all children are also children of the surviving spouse, the spouse typically inherits the entire estate; if there are children from a prior relationship, the estate is divided between the spouse and those children. If you have no surviving spouse, your estate passes to your children equally, or to your parents if you have no children. Assets distributed under the intestate statute must still go through the Ohio probate process, which can be time-consuming and expensive.`,
  },
  {
    question: `What is a living trust and how does it differ from a will?`,
    answer: `A revocable living trust is a legal document you create during your lifetime that holds title to your assets and directs their distribution after your death — without going through probate. Unlike a will, which only takes effect at death and must be administered through the probate court, a living trust is effective immediately and allows assets to transfer to your beneficiaries privately and without court supervision. Ohio living trusts are governed by ORC Chapter 5801, the Ohio Uniform Trust Code (OUTC). A "pour-over will" is typically used alongside a trust to capture any assets not transferred into the trust during your lifetime and direct them into the trust at death. Trust-based planning can reduce probate costs, protect privacy, and facilitate management of assets if you become incapacitated.`,
  },
  {
    question: `What is a durable power of attorney in Ohio?`,
    answer: `A durable power of attorney (POA) is a legal document under ORC Chapter 1337 that authorizes a trusted person (your agent) to manage your financial affairs on your behalf. The word "durable" means the POA remains effective even if you become incapacitated — a crucial feature for estate planning purposes. Without a durable POA, if you become unable to manage your affairs, your family may need to petition the probate court for a guardianship or conservatorship to handle your finances, which is a costly and time-consuming court process. Ohio's Revised Uniform Power of Attorney Act (RUPOAA), codified at ORC 1337.21 et seq., governs the execution requirements and scope of durable POAs in Ohio. A separate healthcare power of attorney lets your agent make medical decisions on your behalf if you cannot.`,
  },
  {
    question: `What documents does a comprehensive Ohio estate plan include?`,
    answer: `A comprehensive Ohio estate plan typically includes: (1) a Last Will and Testament under ORC Chapter 2107; (2) a revocable living trust under ORC Chapter 5801, if appropriate; (3) a durable financial power of attorney under ORC 1337.21 et seq.; (4) a healthcare power of attorney designating someone to make medical decisions on your behalf; (5) a living will / advance healthcare directive stating your wishes for end-of-life care; (6) POLST (Physician Orders for Life-Sustaining Treatment) if you have a serious illness; (7) properly updated beneficiary designations on life insurance, retirement accounts, and POD/TOD accounts; and (8) transfer-on-death deeds for real estate under ORC 5302.22, where appropriate. Each document serves a distinct purpose, and together they form a complete plan.`,
  },
  {
    question: `What is a TOD deed in Ohio?`,
    answer: `A transfer-on-death (TOD) affidavit — sometimes called a TOD deed — is authorized by ORC 5302.22 and allows an Ohio property owner to designate a beneficiary who will automatically inherit the real estate upon the owner's death, without going through probate. The TOD designation does not affect the owner's rights during their lifetime: the owner can sell, mortgage, or change the beneficiary at any time. At death, the beneficiary simply records an affidavit of survivorship and a certified death certificate to take title. TOD deeds are a simple and cost-effective way to keep real estate out of probate, and they work well for straightforward situations such as leaving a home to an adult child.`,
  },
  {
    question: `When should I update my estate plan?`,
    answer: `You should review and update your estate plan after any major life event, including: marriage or divorce; the birth or adoption of a child or grandchild; the death of a named beneficiary, executor, or agent; a significant change in assets (such as buying or selling a home or business); relocation to another state; a change in tax laws; or any change in your wishes regarding who should inherit your property or make decisions on your behalf. As a general rule, reviewing your estate plan every three to five years — even without a major life event — is a good practice to ensure your documents still reflect your current wishes and comply with current Ohio law.`,
  },
  {
    question: `How much does estate planning cost in Ohio?`,
    answer: `The cost of estate planning in Ohio varies depending on the complexity of your situation. A basic will may cost a few hundred dollars in attorney fees. A more comprehensive plan that includes a revocable living trust, durable power of attorney, healthcare power of attorney, and advance directive will generally cost more, reflecting the additional drafting and legal analysis involved. Complex plans involving business succession, special needs trusts, or advanced tax planning strategies will cost more still. At Jwayyed Law LLC, we discuss fees transparently during the initial consultation so you understand the cost before proceeding. Most people find that the cost of a well-drafted estate plan is modest compared to the potential cost of probate, guardianship proceedings, or family disputes that proper planning prevents.`,
  },
];

export default function EstatePlanningPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Estate Planning Lawyer"
        description="Experienced legal assistance with estate planning. Protecting your legacy and ensuring your wishes are carried out throughout Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Estate Planning in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Estate planning is the process of creating legal documents that protect your assets, provide for your loved ones, and ensure your wishes are carried out — both during your lifetime if you become incapacitated and after your death. At Jwayyed Law LLC, we help individuals and families in Columbus, Cincinnati, Dayton, and throughout Ohio develop comprehensive estate plans under Ohio law. Ohio's estate and probate framework is set out in Title 21 of the Ohio Revised Code: descent and distribution (intestate succession) in ORC Chapter 2105, wills in ORC Chapter 2107, fiduciaries in ORC Chapter 2109, and executors and administrators in ORC Chapter 2113. The Ohio Uniform Trust Code (OUTC) governing trusts is codified at ORC Chapter 5801. Powers of attorney — both financial and healthcare — are governed by ORC Chapter 1337 and the Ohio Revised Uniform Power of Attorney Act (RUPOAA) at ORC 1337.21 et seq. Guardianships for incapacitated adults and minors are addressed in ORC Chapter 2111. Together, these statutes form the foundation of Ohio estate planning.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A foundational element of any Ohio estate plan is a valid Last Will and Testament. Under ORC 2107.03, a valid Ohio will must be in writing, signed by the testator (the person making the will), and attested and subscribed in the testator's conscious presence by two or more competent witnesses. Your will directs how your probate assets are distributed at death, names the executor who will administer your estate, establishes trusts for minor or disabled beneficiaries, and — critically — names a guardian for any minor children you may have. Without a will, Ohio's intestate succession statutes under ORC 2105.06 control who inherits your property, which may not match your actual wishes, particularly if you have a blended family, a non-traditional relationship, or wishes to benefit a charity or friend.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For many clients, a revocable living trust is a powerful complement or alternative to a will. A living trust — governed by ORC Chapter 5801, the Ohio Uniform Trust Code — is a legal entity created during your lifetime to hold title to your assets. Because a trust is not part of your estate for probate purposes, assets held in trust pass directly to your beneficiaries after your death without court supervision, avoiding the time and expense of probate. A "pour-over will" is typically used alongside a trust to capture any assets not transferred into the trust during your lifetime and direct them into the trust at death. Living trusts also provide built-in incapacity planning: if you become unable to manage your affairs, your successor trustee steps in immediately without any court involvement — a significant advantage over probate-based alternatives.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Incapacity planning is just as important as planning for death. A durable financial power of attorney under ORC 1337.21 et seq. authorizes your chosen agent to manage your financial affairs — pay bills, manage investments, handle real estate — even if you become incapacitated. A separate healthcare power of attorney allows your agent to make medical decisions on your behalf. A living will (advance healthcare directive) records your wishes about life-sustaining treatment and other end-of-life care decisions. If you have a serious illness, an Ohio POLST (Physician Orders for Life-Sustaining Treatment) form translates your wishes into medical orders that follow you through care settings. Without these documents in place, your family may need to pursue a costly and time-consuming guardianship proceeding in the probate court under ORC Chapter 2111 to gain the legal authority to act on your behalf.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Thoughtful use of non-probate assets is another key component of Ohio estate planning. Many assets pass automatically outside the probate process through beneficiary designations, titling, or transfer-on-death (TOD) features. Life insurance policies, IRAs, 401(k) plans, and annuities pass to named beneficiaries upon death without probate. Bank accounts can be set up as payable-on-death (POD) accounts. Brokerage accounts can have transfer-on-death designations. Real estate can be conveyed by a TOD affidavit under ORC 5302.22, which allows you to designate a beneficiary who will inherit the property at death without probate — while you retain full ownership and control during your lifetime. Joint and survivorship ownership is another option. Coordinating your estate plan documents with proper beneficiary designations and asset titling is essential to ensure all of your assets pass as intended and that no assets are inadvertently left outside your plan. Contact us today to learn more about <Link href="/other-services/estate-planning-wills" className="text-[#b87333] underline hover:opacity-80">wills and estate planning documents</Link>, <Link href="/other-services/powers-of-attorney" className="text-[#b87333] underline hover:opacity-80">powers of attorney</Link>, and <Link href="/other-services/guardianships" className="text-[#b87333] underline hover:opacity-80">guardianships</Link> in Ohio.
            </p>

            <LocationsWeServe title="Other Services" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Estate Planning Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/other-services/estate-planning-wills" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Estate Planning & Wills</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Comprehensive estate planning and will preparation under ORC Chapter 2107</p>
              </Link>
              <Link href="/trusts" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Trusts</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Revocable living trusts and trust administration under ORC Chapter 5801</p>
              </Link>
              <Link href="/other-services/powers-of-attorney" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Powers of Attorney</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Financial and healthcare powers of attorney under ORC 1337.21 et seq.</p>
              </Link>
              <Link href="/other-services/guardianships" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Guardianships</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Guardianship establishment and administration under ORC Chapter 2111</p>
              </Link>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC for Estate Planning</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated estate planning assistance throughout Ohio. We understand that estate planning is not a one-size-fits-all exercise — your plan should reflect your unique family situation, financial circumstances, and personal values. Our attorney works closely with each client to understand their goals, explain the options under Ohio law, and draft documents that are clear, legally sound, and tailored to their needs. Whether you need a straightforward will and power of attorney or a more complex trust-based plan, we are here to help you protect your legacy and give your family peace of mind. Contact Jwayyed Law LLC at (614) 285-5482 to schedule your estate planning consultation.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
