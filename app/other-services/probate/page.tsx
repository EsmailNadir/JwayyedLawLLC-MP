import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Ohio Probate Lawyer | Columbus Probate Attorney',
  description: 'Experienced Ohio probate attorney guiding executors and beneficiaries through Franklin County Probate Court. Estate administration, creditor claims.',
  keywords: [
    'probate lawyer Columbus OH',
    'probate attorney Ohio',
    'probate administration lawyer',
    'Franklin County probate attorney',
    'executor attorney Ohio',
    'estate administration Columbus',
    'intestate probate Ohio',
    'simplified estate Ohio',
    'release from administration Ohio',
    'ORC 2113 attorney',
  ],
  openGraph: {
    title: 'Ohio Probate Lawyer | Columbus Probate Attorney',
    url: 'https://www.jjlawohio.com/other-services/probate',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/other-services/probate' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Probate', href: '/other-services/probate' },
];

const faqs = [
  {
    question: `How long does Ohio probate take?`,
    answer: `Most Ohio probate estates take between six and eighteen months to close. The timeline depends on the size and complexity of the estate, whether creditors raise claims, whether real property must be sold, and whether any disputes arise among beneficiaries. Simple estates with minimal assets and no creditor disputes can sometimes close in six to nine months. Larger or contested estates routinely take well over a year. Ohio law gives creditors six months from the executor's appointment to file claims under ORC 2117.06, which establishes a hard floor on how quickly any estate can conclude.`,
  },
  {
    question: `What are the executor's duties in Ohio probate?`,
    answer: `An executor appointed under ORC Chapter 2113 must collect and protect estate assets, file an inventory and appraisal with the Probate Court within three months of appointment under ORC 2109.302, notify known creditors, publish a notice to creditors, pay valid debts and taxes, file an account of receipts and disbursements, and distribute the remaining assets to beneficiaries according to the will or intestate succession laws. The executor owes a fiduciary duty to all beneficiaries and can be held personally liable for losses caused by self-dealing or negligent administration.`,
  },
  {
    question: `What happens if someone dies without a will in Ohio?`,
    answer: `When a person dies without a valid will, they are said to die "intestate." Ohio Probate Court still must administer the estate, but distribution follows the intestate succession statute at ORC 2105.06 rather than the decedent's wishes. Under that statute, the surviving spouse typically receives the entire estate if there are no surviving children or if all children are also children of the surviving spouse. When a decedent leaves children from a prior relationship, the surviving spouse and children share the estate. The Probate Court appoints an administrator — rather than an executor — to manage the process.`,
  },
  {
    question: `Can you avoid probate in Ohio?`,
    answer: `Yes. Several strategies allow Ohio residents to transfer assets outside of probate entirely. Assets held in joint tenancy with right of survivorship pass automatically to the surviving owner. Accounts with payable-on-death (POD) or transfer-on-death (TOD) designations bypass probate. Life insurance and retirement accounts with named beneficiaries are not probate assets. A revocable living trust can hold virtually all your assets and distribute them at death without court involvement. Ohio also has a transfer-on-death deed for real estate, allowing homeowners to name a beneficiary who receives title automatically upon death.`,
  },
  {
    question: `What is the simplified release from administration in Ohio?`,
    answer: `Ohio offers a streamlined alternative to full probate for smaller estates under ORC 2113.03. A "release from administration" is available when the gross value of the estate does not exceed $35,000, or when assets do not exceed $100,000 and everything passes to the surviving spouse. Instead of opening a full probate estate, an authorized person files an application with the Probate Court, which can release assets to the proper parties without the expense and delay of formal administration. This procedure is particularly useful when the decedent owned a vehicle, a small bank account, or personal property but did not have significant real estate or business interests.`,
  },
  {
    question: `What rights do creditors have during Ohio probate?`,
    answer: `Under ORC 2117.06, creditors have six months from the date of the executor's or administrator's appointment to present claims against the estate. Claims not presented within this window are generally barred. The executor must publish a notice to creditors in a newspaper of general circulation and mail notice to known creditors. Valid creditor claims are paid in a statutory priority order before beneficiaries receive their distributions. Secured debts, funeral expenses, estate administration costs, and taxes take priority over general unsecured creditors.`,
  },
  {
    question: `Can an executor live out of state in Ohio?`,
    answer: `Ohio does not require an executor to be an Ohio resident, but a nonresident executor must appoint a statutory agent in Ohio to accept service of process on their behalf. Practically speaking, a nonresident executor may find administration more burdensome — attending Franklin County Probate Court hearings, managing local real property, and coordinating with local financial institutions can be challenging from a distance. If an out-of-state executor is not willing or able to fulfill these duties, beneficiaries may seek removal and appointment of an Ohio-based administrator.`,
  },
  {
    question: `What is the homestead or year's allowance in Ohio?`,
    answer: `Ohio law protects surviving spouses and minor children through several allowances. Under ORC 2106.13, a surviving spouse is entitled to a "year's allowance" of up to $40,000 from the estate to support the family during administration — this amount is paid before general creditors. The surviving spouse is also entitled to remain in the family home during the year of administration. These protections exist independently of what the will says and are designed to prevent a surviving spouse and dependent children from being left without resources while the estate winds through probate.`,
  },
];

export default function ProbatePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Probate Lawyer"
        description="Guiding executors, administrators, and beneficiaries through every stage of Ohio probate administration — from filing the will to final distribution."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Understanding Probate in Ohio
            </h2>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Probate is the court-supervised legal process through which a deceased person\'s estate is administered, debts are paid, and remaining assets are distributed to rightful heirs or beneficiaries. In Ohio, probate proceedings are governed primarily by Ohio Revised Code Title 21, with Chapters 2107 through 2117 controlling the most common estate administration tasks. Whether a person died with a carefully drafted will or without any estate plan at all, most individually owned assets must pass through Ohio Probate Court before title can legally transfer to anyone else.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio Probate Courts have exclusive jurisdiction over the administration of decedents' estates under ORC 2101.24. In Franklin County, that means the Franklin County Probate Court located at 373 South High Street in Columbus. Each county in Ohio has its own Probate Court with local filing requirements, forms, and procedures. An experienced Ohio probate attorney who regularly practices in the relevant county can navigate these local rules efficiently and avoid costly mistakes that delay estate closure.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              At Jwayyed Law LLC, we represent executors, administrators, surviving spouses, and beneficiaries in probate proceedings throughout central Ohio. Whether you need assistance opening a new estate, resolving a creditor dispute, preparing the required inventory and appraisal, or closing an estate that has stalled, our attorney provides practical, cost-conscious guidance tailored to your specific circumstances. Call us at <a href="tel:6142855482" className="text-[#b87333] hover:underline">(614) 285-5482</a> to discuss your situation.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Testate vs. Intestate: Two Paths Through Ohio Probate
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio probate follows one of two tracks depending on whether the decedent left a valid will. When a will exists, the estate is "testate." The executor named in the will petitions the Probate Court to admit the will and issue "letters testamentary," the official document authorizing the executor to act on behalf of the estate. Under ORC Chapter 2107, the court examines the will\'s execution — confirming it was signed by a testator of sound mind and witnessed by two competent adults — before admitting it to probate. Once the will is admitted, administration proceeds according to its terms, subject to Ohio\'s mandatory protections for surviving spouses and creditors.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When no valid will exists, the estate is "intestate" and distribution is controlled entirely by ORC 2105.06. Under Ohio\'s intestate succession statute, a surviving spouse with no surviving children or where all surviving children are also children of the surviving spouse inherits the entire estate. When the decedent had children from a prior relationship, the surviving spouse and children divide the estate according to a statutory formula. More distant relatives — parents, siblings, and their descendants — inherit only when there is no surviving spouse or children. The Probate Court appoints an administrator, often following the surviving spouse\'s or a child\'s preference, to manage the intestate estate with the same duties as an executor.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              The Ohio Probate Process: Step by Step
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio probate typically unfolds in several stages. First, the executor or a family member files a petition to open the estate with the county Probate Court, along with the original will (if any) and the decedent\'s death certificate. The court issues letters testamentary or letters of administration, giving the fiduciary authority to gather assets and act on the estate\'s behalf. Within thirty days of appointment, the executor must notify beneficiaries and heirs. Within three months, the executor must file an inventory and appraisal listing all probate assets at their fair market value as required by ORC 2109.302. Real estate, business interests, and unusual personal property typically require formal appraisal by a licensed appraiser.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Simultaneously, the executor publishes a notice to creditors in a local newspaper and mails notice to all known creditors. Under ORC 2117.06, creditors have six months from the executor\'s appointment to file claims. After the creditor window closes, the executor pays valid debts in the statutory priority order — secured creditors, funeral costs, administration expenses, taxes, and then general unsecured creditors. Once debts are satisfied, the executor files a final account with the Probate Court documenting all receipts and disbursements. After court approval of the account, the executor distributes remaining assets to beneficiaries and files a receipt for distribution. The court then closes the estate.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Executor compensation in Ohio is governed by ORC 2113.35, which sets a statutory fee schedule based on the value of assets administered — generally four percent on the first $100,000, three percent on the next $300,000, two percent on the next $600,000, and one percent or a court-determined reasonable fee on amounts above $1 million. Attorney fees for probate representation are reviewed by the Probate Court and must be reasonable given the work performed. Both executor and attorney fees are paid from estate assets before distribution to beneficiaries.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Simplified Procedures and Avoiding Probate in Ohio
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio offers relief from full probate for smaller estates through ORC 2113.03's release from administration procedure. When the gross estate does not exceed $35,000 — or does not exceed $100,000 and passes entirely to the surviving spouse — an authorized family member may apply to the Probate Court for a simplified release rather than opening a full estate. The court can release assets directly to the applicant without appointing an executor, publishing creditor notice, or filing a formal inventory. This procedure saves time and legal fees for families dealing with modest estates.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For assets that do not need to go through probate at all, Ohio law provides several mechanisms. Joint tenancy with right of survivorship allows co-owners to inherit each other\'s shares automatically at death. Payable-on-death designations on bank accounts and transfer-on-death registrations on brokerage accounts, vehicles, and real estate all allow assets to pass directly to named beneficiaries without probate. Life insurance proceeds and retirement account distributions to named beneficiaries never enter the probate estate. A revocable living trust — which we help clients establish through our estate planning practice — can hold the majority of a person\'s assets and distribute them at death with no court involvement, no public record, and no waiting period for creditors. Thoughtful use of these tools can dramatically reduce or eliminate the burden of probate on your family.
            </p>

            <LocationsWeServe title="Other Services" />

            <div className="grid sm:grid-cols-2 gap-4 mt-8 mb-8">
              <Link href="/other-services" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                All Other Legal Services
              </Link>
              <Link href="/other-services/will-contests" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                Will Contests in Ohio
              </Link>
              <Link href="/trusts/revocable-living-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                Revocable Living Trusts
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
