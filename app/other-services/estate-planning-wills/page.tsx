import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Ohio Estate Planning & Wills Lawyer',
  description: 'Experienced Ohio estate planning attorney drafting wills, powers of attorney, and healthcare directives for Columbus-area families.',
  keywords: [
    'estate planning lawyer Columbus OH',
    'wills attorney Ohio',
    'Ohio will requirements ORC 2107',
    'holographic will Ohio',
    'self-proving will Ohio',
    'pour-over will Ohio',
    'guardian minor children Ohio',
    'estate planning attorney Franklin County',
    'intestate succession Ohio',
    'disinherit Ohio attorney',
  ],
  openGraph: {
    title: 'Ohio Estate Planning & Wills Lawyer',
    url: 'https://www.jjlawohio.com/other-services/estate-planning-wills',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/other-services/estate-planning-wills' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Planning & Wills', href: '/other-services/estate-planning-wills' },
];

const faqs = [
  {
    question: `Does Ohio require a will to be notarized?`,
    answer: `No. Ohio does not require notarization for a will to be valid under ORC 2107.02. A standard Ohio will must be signed by the testator (or by another person in the testator's presence and at their direction if the testator cannot sign) and witnessed by two competent adults who sign in the testator's presence. Notarization is not required for validity but is used to create a "self-proving" will under ORC 2107.52. A self-proving will includes a notarized affidavit from the witnesses attesting to the execution, which allows the Probate Court to admit the will without requiring witnesses to appear in person — a practical advantage when witnesses may be difficult to locate years after the will was signed.`,
  },
  {
    question: `Can I write my own will in Ohio?`,
    answer: `Ohio does recognize handwritten (holographic) wills under ORC 2107.03, but only under specific conditions — the will must be entirely in the testator's handwriting and signed by the testator. No witnesses are required for a holographic will. However, holographic wills are risky. They often fail to address important issues like residuary distribution, alternate beneficiaries, or executor powers. Ambiguous or incomplete language in a handwritten will frequently leads to probate disputes and litigation. An attorney-drafted will costs far less than a contested probate proceeding. While you can legally write your own will in Ohio, it is rarely the best choice for protecting your family.`,
  },
  {
    question: `What happens if you die without a will in Ohio?`,
    answer: `Dying without a valid will in Ohio means your estate is distributed according to the intestate succession statute at ORC 2105.06, regardless of your wishes. If you have a surviving spouse and no children (or all your children are also children of the surviving spouse), the spouse inherits everything. If you have children from a prior relationship, the estate is divided between the surviving spouse and children according to a formula. More distant relatives inherit only when there is no surviving spouse or descendants. Courts appoint an administrator — who may not be the person you would have chosen — to manage the process. Minor children have no named guardian in your estate documents, leaving that decision to a court. Dying intestate is the most common and most preventable estate planning mistake.`,
  },
  {
    question: `How often should I update my will in Ohio?`,
    answer: `Estate planning attorneys generally recommend reviewing your will every three to five years and after any major life event — marriage, divorce, the birth or death of a child or grandchild, a significant change in assets, the death of a named executor or beneficiary, or a move to or from Ohio. Ohio law automatically revokes a will's provisions to a former spouse after divorce under ORC 2107.33, but the rest of the will remains in effect. A new marriage does not automatically update your will. Named beneficiaries who predecease you may cause unintended consequences without an alternate beneficiary designation. Keeping your will current is as important as having one in the first place.`,
  },
  {
    question: `Can I disinherit my spouse in Ohio?`,
    answer: `Not entirely. Ohio gives a surviving spouse the right of election under ORC 2106.01, which allows the spouse to claim a share of the "augmented estate" — including both probate assets and certain non-probate transfers made during the marriage — regardless of what the will says. The elective share is calculated under a sliding scale based on the length of the marriage, up to a maximum of one-third of the augmented estate after fifteen or more years of marriage. A surviving spouse who is left nothing or very little in the will can choose to "take against the will" and claim this statutory share. Careful estate planning can legitimately minimize the elective share, but completely disinheriting a spouse is not possible under Ohio law.`,
  },
  {
    question: `What is a pour-over will and do I need one?`,
    answer: `A pour-over will is used in conjunction with a revocable living trust. Instead of distributing assets directly to named beneficiaries, the pour-over will directs that any assets remaining in the probate estate at death are "poured over" into the trust and distributed according to its terms. This ensures that assets you forgot to transfer into your trust during your lifetime, or assets that flow back into your estate for any reason, are ultimately governed by the trust's distribution plan rather than by a separate set of beneficiaries in the will. A pour-over will is an essential component of any estate plan that includes a revocable living trust.`,
  },
  {
    question: `Who should I name as executor of my Ohio will?`,
    answer: `Your executor (called a "personal representative" in some states) manages your estate through the probate process — collecting assets, paying debts, filing taxes, and distributing property to beneficiaries. A good executor is trustworthy, organized, willing to take on administrative responsibilities, and available to commit time to the process. It should be someone who will carry out your wishes even under family pressure, not necessarily the oldest child or the most financially successful family member. Ohio does not require executors to be Ohio residents, but a local executor avoids practical complications. Always name an alternate executor in case your first choice is unable or unwilling to serve when the time comes.`,
  },
  {
    question: `Does a will avoid probate in Ohio?`,
    answer: `No — having a will does not avoid probate. A will is a set of instructions for the Probate Court to follow in administering your estate, but assets that pass through your will must still go through the probate process. To avoid probate entirely, you need to use non-probate transfer mechanisms such as a revocable living trust, joint tenancy, payable-on-death designations, transfer-on-death registrations, or beneficiary designations on retirement accounts and life insurance. A will handles assets that are not covered by these mechanisms and is an important backstop, but alone it does not spare your family the time and expense of probate.`,
  },
];

export default function EstatePlanningWillsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Estate Planning & Wills Lawyer"
        description="Protecting your family with carefully drafted Ohio wills, powers of attorney, and healthcare directives — ensuring your wishes are honored and your loved ones are provided for."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Estate Planning and Wills in Ohio
            </h2>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A will is the foundation of any Ohio estate plan — the legal document that instructs the Probate Court who receives your property, who manages your estate, and who cares for your minor children when you are gone. But a comprehensive estate plan goes beyond a single document. It coordinates your will with beneficiary designations, powers of attorney, healthcare directives, and — where appropriate — a revocable living trust to ensure that every asset reaches the right person in the most efficient way possible. At Jwayyed Law LLC, we help Columbus-area individuals and families create complete, legally sound estate plans tailored to their actual goals and family circumstances.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio will law is governed primarily by ORC Chapter 2107. To execute a valid will in Ohio, the testator must be at least eighteen years old and of "sound mind and memory" — meaning they understand the nature and extent of their property, know the natural objects of their bounty (family members and close relationships), understand what a will does, and can form an orderly plan for distributing their estate. The will must be signed by the testator (or by someone else in the testator\'s presence and at their express direction) in the presence of two competent witnesses, who must also sign in the testator\'s presence. Meeting these formalities precisely is critical — a will that fails execution requirements cannot be admitted to probate regardless of how clearly it expresses the testator\'s wishes.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              At Jwayyed Law LLC, we approach every estate planning engagement with the goal of understanding what matters most to you — protecting a spouse, providing for children, minimizing probate, supporting a charity, or ensuring a business passes to the right hands — and building a plan around those priorities. Contact us at <a href="tel:6142855482" className="text-[#b87333] hover:underline">(614) 285-5482</a> to schedule a consultation.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              What Your Ohio Will Can and Cannot Do
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A will can direct who receives your individually owned probate assets — real estate, bank accounts, vehicles, personal property, and investments that do not have a beneficiary designation or joint owner. It can name an executor to manage the probate process, designate a guardian for minor children under ORC 2111.03, establish testamentary trusts for minor or special-needs beneficiaries, make specific bequests of particular items to particular people, and set out the residuary distribution for everything that is not specifically bequeathed. A will can disinherit any family member except a surviving spouse — Ohio law allows you to leave relatives with nothing so long as you do so clearly and the will is not the product of incapacity or undue influence.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              What a will cannot do is equally important. A will cannot override a valid beneficiary designation on a life insurance policy, retirement account, or payable-on-death bank account — those assets pass by contract to the named beneficiary regardless of what the will says. A will cannot transfer assets held in joint tenancy — those pass automatically to the surviving owner. A will cannot reduce a surviving spouse\'s right of election under ORC 2106.01. And critically, a will cannot avoid probate — all assets that pass through your will must go through the Franklin County Probate Court (or the probate court in whichever Ohio county you reside at death) before reaching your beneficiaries.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio recognizes self-proving wills under ORC 2107.52, in which the testator and witnesses sign a notarized affidavit at the time of execution attesting to the will\'s proper signing. A self-proving will can be admitted to probate without requiring the witnesses to testify or provide sworn statements — a significant practical advantage years later when witnesses may be deceased, moved away, or difficult to locate. We prepare all wills as self-proving wills as a standard practice. Ohio also permits "holographic" wills — entirely handwritten and signed by the testator without witnesses — under ORC 2107.03, but these are frequently ambiguous, incomplete, and disputed in probate. We do not recommend relying on a holographic will when proper estate planning is available.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              The Consequences of Dying Without a Will in Ohio
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If you die without a valid will — intestate — Ohio\'s intestate succession statute at ORC 2105.06 controls who inherits your estate. The statutory formula does not consider what you actually wanted or the specific circumstances of your family. A surviving spouse and children from prior relationships divide the estate according to a prescribed formula that may not reflect your intent at all. Unmarried partners, close friends, step-children, and charities receive nothing under the intestate succession rules regardless of your relationship or wishes. If you have minor children, no guardian is named in any legal document — the Probate Court appoints a guardian based on what it determines to be in the children\'s best interest, without guidance from you.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Dying intestate also typically means your estate will go through full probate — with all the time, expense, and public exposure that entails — because you will not have had the opportunity to set up the non-probate transfer mechanisms that can simplify or eliminate probate for planned estates. An estate plan created with an Ohio attorney is not just about distributing assets; it is about protecting your family from unnecessary court proceedings, administrative burdens, and family conflict at an already difficult time.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              A Complete Ohio Estate Plan: Beyond the Will
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A comprehensive Ohio estate plan includes several coordinated documents. A durable financial power of attorney designates someone to manage your financial affairs if you become incapacitated — paying bills, managing investments, handling real estate transactions, and conducting business on your behalf. Without a power of attorney, your family may need to petition the Probate Court for a guardianship or conservatorship to manage your affairs, which is expensive, time-consuming, and public. A healthcare power of attorney authorizes someone to make medical decisions for you when you cannot make them yourself. A living will (advance directive) states your wishes about end-of-life treatment, including whether you want life-sustaining treatment withheld under specific circumstances.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For clients with more substantial assets, privacy concerns, or complex family situations, we often recommend adding a revocable living trust to the estate plan. A trust allows your assets to be managed during your lifetime and distributed at death without going through probate — faster, cheaper, and privately compared to court administration. A pour-over will works alongside the trust to capture any assets that were not transferred into the trust during your lifetime and direct them into the trust at death. Finally, reviewing and updating beneficiary designations on all retirement accounts, life insurance policies, and financial accounts is essential — these designations are contract provisions that override whatever your will says, and outdated designations regularly cause assets to pass to former spouses, deceased individuals, or unintended recipients. We coordinate all elements of your plan to ensure they work together seamlessly.
            </p>

            <LocationsWeServe title="Other Services" />

            <div className="grid sm:grid-cols-2 gap-4 mt-8 mb-8">
              <Link href="/other-services" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                All Other Legal Services
              </Link>
              <Link href="/other-services/probate" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                Ohio Probate Administration
              </Link>
              <Link href="/other-services/powers-of-attorney" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                Powers of Attorney in Ohio
              </Link>
              <Link href="/trusts/revocable-living-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                Revocable Living Trusts
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
