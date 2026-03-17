import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Ohio Estate Disputes Lawyer | Columbus Estate Litigation Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio estate disputes attorney representing beneficiaries, heirs, and trustees in will contests, executor misconduct, trust disputes, and fiduciary litigation in Franklin County Probate Court. Call (614) 285-5482.',
  keywords: [
    'estate disputes lawyer Columbus OH',
    'estate dispute attorney Ohio',
    'executor misconduct attorney Ohio',
    'will contest lawyer Columbus',
    'trust dispute attorney Ohio',
    'remove executor Ohio',
    'fiduciary breach Ohio attorney',
    'beneficiary rights Ohio probate',
    'ORC 2109 fiduciary attorney',
    'Franklin County estate dispute attorney',
  ],
  openGraph: {
    title: 'Ohio Estate Disputes Lawyer | Columbus Estate Litigation Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/estate-disputes',
  },
  alternates: { canonical: '/other-services/estate-disputes' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Disputes', href: '/other-services/estate-disputes' },
];

const faqs = [
  {
    question: `What are valid grounds to remove an executor in Ohio?`,
    answer: `Under ORC 2109.24, an Ohio Probate Court may remove an executor or administrator for good cause. Recognized grounds include neglect to perform duties, failure to file a required inventory or account, wasting or mismanaging estate assets, breach of fiduciary duty, conviction of a felony after appointment, becoming mentally incompetent, or demonstrating a conflict of interest that makes faithful administration impossible. Merely disagreeing with the executor's decisions is generally not enough — courts look for concrete evidence of actual or threatened harm to the estate or its beneficiaries. A petition for removal is filed in the Probate Court where the estate is pending.`,
  },
  {
    question: `How do you challenge a trust in Ohio?`,
    answer: `Trust disputes in Ohio are handled differently from will contests. Ohio adopted the Uniform Trust Code (UTC), codified in ORC Chapter 5806, which governs trust modification, termination, and judicial oversight. A trust can be challenged on grounds including lack of capacity at the time of creation, undue influence, fraud or duress, failure to comply with execution formalities, and impossibility of the trust purpose. Trust disputes may be litigated in the county Common Pleas Court or, if the trust is a testamentary trust created within a will, in the Probate Court. Unlike will contests, which have a strict filing deadline, trust challenges may be subject to different limitation periods depending on the basis for the claim.`,
  },
  {
    question: `What if I believe the executor is stealing from the estate?`,
    answer: `Executor theft or self-dealing is a serious breach of fiduciary duty under ORC 2113.61. If you have reason to believe an executor is converting estate assets for personal use, making improper payments to themselves or family members, or failing to account for assets that should be in the estate, you can petition the Franklin County Probate Court for a surcharge — an order requiring the executor to repay the estate for losses caused by the misconduct. You can also petition for the executor's removal and for appointment of a successor fiduciary. In egregious cases, executor theft can also be prosecuted criminally under Ohio theft and theft in office statutes.`,
  },
  {
    question: `Can a beneficiary demand an accounting from the executor?`,
    answer: `Yes. Under ORC 2109.301, an executor is required to file periodic accounts with the Probate Court showing all receipts, disbursements, and distributions. Beneficiaries have the right to examine these accounts and object to specific items. Beyond the formal court account, beneficiaries can also request informal accountings and documentation from the executor at any reasonable time. If an executor refuses to provide information or delays filing required accounts, beneficiaries can petition the Probate Court to compel an accounting. In trust disputes, beneficiaries of irrevocable trusts have statutory rights to trustee information and annual reports under the Ohio UTC.`,
  },
  {
    question: `How long do you have to contest a will in Ohio?`,
    answer: `Under ORC 2107.76, a will contest in Ohio must be filed within three months after the will is admitted to probate. This is a strict deadline — courts rarely grant extensions, and missing it generally bars any challenge to the will's validity regardless of how strong your grounds may be. This is why it is critical to consult with an estate disputes attorney as soon as you learn that a will has been admitted to probate. The contest is filed as a civil action in the Common Pleas Court of the county where the will was probated, not in the Probate Court itself.`,
  },
  {
    question: `What is undue influence in an Ohio estate dispute?`,
    answer: `Undue influence occurs when someone substitutes their own will for the testator's free choice, typically by exploiting a position of trust or a vulnerability of the testator. Ohio courts look at several factors: whether the influencer had an opportunity to exert influence; whether they had a motive (such as standing to benefit from the document); whether the testator was susceptible due to age, illness, cognitive decline, or emotional dependence; and whether the resulting document reflects the influencer's wishes rather than the testator's own. Undue influence is often difficult to prove directly and is typically established through circumstantial evidence — sudden changes to estate documents, isolation of the testator from other family members, and the influencer's active participation in the drafting process.`,
  },
  {
    question: `Can I sue a trustee personally for breach of fiduciary duty?`,
    answer: `Yes. A trustee who breaches a fiduciary duty can be held personally liable for losses to the trust. Under Ohio's UTC and ORC 5808.01 et seq., a trustee must act in the best interests of beneficiaries, invest prudently, avoid self-dealing, keep trust property separate from personal assets, and provide accurate information. If a trustee breaches these duties — for example, by investing trust assets in their own business, failing to distribute required amounts, or commingling funds — beneficiaries may seek a surcharge (damages), removal of the trustee, disgorgement of profits, and in some cases punitive damages if the breach was egregious. An experienced Ohio estate disputes attorney can evaluate the strength of a claim and the available remedies.`,
  },
  {
    question: `What if I was left out of a will in Ohio?`,
    answer: `Being omitted from a will does not by itself give you legal grounds to contest the will or claim a share of the estate. Ohioans have broad freedom to dispose of their property as they choose, and a will can disinherit most family members entirely. There are limited exceptions: a surviving spouse has a right of election under ORC 2106.01 to claim a statutory share of the estate regardless of what the will says; a "pretermitted heir" statute under ORC 2107.34 may protect children who were accidentally omitted from a will due to a drafting oversight; and children born after the will was executed may have rights under certain circumstances. If you believe you were omitted due to undue influence, fraud, or the testator's incapacity, those grounds may support a will contest.`,
  },
];

export default function EstateDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Estate Disputes Lawyer"
        description="Protecting beneficiaries, heirs, and trustees in will contests, executor misconduct cases, trust disputes, and fiduciary litigation throughout Ohio Probate Court."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Estate Disputes in Ohio: Types, Rights, and Remedies
            </h2>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When a loved one dies, the estate administration process is supposed to carry out their final wishes and provide for their heirs and beneficiaries in an orderly way. Too often, however, disputes arise — over the validity of the will itself, the conduct of the executor or trustee, the fair distribution of assets, or the interpretation of ambiguous estate documents. Estate disputes are among the most emotionally charged legal matters because they occur at a time of grief and often involve family members on opposite sides. At Jwayyed Law LLC, we represent beneficiaries, heirs, executors, and trustees in estate and probate disputes throughout Ohio, providing clear-headed legal advocacy in the Franklin County Probate Court and beyond.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio estate disputes are governed by a web of statutes including ORC Chapter 2107 (wills), ORC Chapter 2109 (fiduciary duties), ORC Chapter 2113 (estate administration and fiduciary misconduct), and ORC Chapter 2105 (intestate succession). Depending on the nature of the dispute, proceedings may take place in the Probate Court, the Common Pleas Court, or both. Understanding which court has jurisdiction over your specific claim — and the applicable filing deadlines — is critical to protecting your rights. Contact us at <a href="tel:6142855482" className="text-[#b87333] hover:underline">(614) 285-5482</a> as soon as a dispute arises so that we can assess your situation before time-sensitive deadlines expire.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Will Contests and Challenges to Estate Documents
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A will contest under ORC 2107.71 is a legal challenge to the validity of a will that has been admitted to probate. Grounds for contesting a will in Ohio include: lack of testamentary capacity (the testator did not understand the nature and extent of their property, who their natural heirs were, or what a will does); undue influence (someone with power over the testator substituted their wishes for the testator\'s own); fraud (the testator was deceived about the nature of what they signed); and failure to meet Ohio\'s execution formalities (the will was not signed or witnessed as required by ORC 2107.02). A will contest must be filed as a civil action in the Common Pleas Court of the county where probate is pending within three months after the will is admitted, under ORC 2107.76.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Undue influence is the most frequently litigated ground in Ohio will contests. Ohio courts do not require direct evidence of influence — circumstantial factors like the testator\'s advanced age or illness, isolation from family members, dependency on the alleged influencer, the influencer\'s active involvement in procuring or drafting the will, and a sudden dramatic change from prior testamentary plans can collectively establish undue influence. Disputes over the competency of elderly testators who suffered from dementia or Alzheimer\'s disease are particularly common and often turn on medical records, witness testimony, and expert psychiatric opinion evidence about the testator\'s mental state at the time the will was executed.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Estate disputes can also arise from conflicts over the meaning of will provisions (ambiguous bequests, disputes over which assets are included in the residuary estate, or disagreements about how specific property should be valued), disputes over whether a decedent\'s beneficiary designations on non-probate assets correctly reflect their intent, and challenges to the validity of pre-death transfers that may have been made under duress or while the decedent lacked capacity. Digital assets — cryptocurrency, online financial accounts, intellectual property, and social media accounts — have added a new dimension to estate disputes as families struggle to access, value, and distribute assets that did not exist in prior generations.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Executor and Trustee Misconduct: Breach of Fiduciary Duty
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An executor or administrator serves as a fiduciary — a person legally bound to act in the best interests of the estate and its beneficiaries, not their own interests. Ohio imposes strict fiduciary duties under ORC Chapter 2109, including the duty of loyalty, the duty to administer the estate prudently, the duty to account, and the duty to treat all beneficiaries impartially. When an executor breaches these duties — by self-dealing, making improper distributions, failing to pay creditors in the correct priority order, neglecting to file required court accounts, or allowing estate assets to waste — beneficiaries have legal remedies available in Probate Court.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under ORC 2113.61, an executor who wastes or converts estate assets is liable to be charged with the assets and surcharged for any losses caused by the misconduct. The Probate Court can order an executor to repay amounts wrongfully taken or paid, restore assets improperly transferred, and reimburse the estate for costs incurred as a result of the breach. In serious cases, the court can remove the executor under ORC 2109.24 and appoint a successor. Removal petitions require showing actual harm or a serious threat of harm — courts are reluctant to remove executors who are simply making decisions that some beneficiaries disagree with but have not yet caused injury to the estate.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Trust disputes follow a similar framework but are governed by Ohio\'s Uniform Trust Code rather than the probate statutes. A trustee who breaches a fiduciary duty can be surcharged for losses, ordered to disgorge profits, removed from office, and in some cases held personally liable for damages beyond the amount taken. Beneficiaries of irrevocable trusts have statutory rights to annual accountings, information about the trust\'s assets and administration, and notice of significant transactions. If a trustee refuses to provide information or file proper accounts, the court can compel disclosure and impose sanctions. We also handle disputes involving the surviving spouse\'s right of election under ORC 2106.01, which allows a surviving spouse to claim a share of the augmented estate even when the will leaves them less.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Other Estate Dispute Issues: Medicaid Recovery, Digital Assets, and Real Property
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio\'s Medicaid estate recovery program requires the Ohio Department of Medicaid to seek reimbursement from a deceased Medicaid recipient\'s estate for benefits paid on their behalf. Families sometimes dispute the scope of Medicaid\'s claim, the value of assets subject to recovery, or whether certain assets qualify for exemptions — particularly when the decedent\'s home is the primary asset. Challenging a Medicaid estate recovery claim or negotiating a compromise requires understanding both estate law and Medicaid regulations, and the stakes can be significant for families expecting to inherit a family home.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Real property disputes in Ohio estates are particularly contentious. When the estate includes a family home, farm, or investment property, disagreements often arise over whether the property should be sold or distributed in-kind, how it should be valued for purposes of an equal distribution among multiple beneficiaries, and whether one beneficiary who lived in or managed the property has a superior claim. Partition actions — in which co-owners ask the court to divide or sell jointly owned property — are sometimes necessary when estate beneficiaries who inherit jointly cannot agree on disposition. We help families navigate these difficult decisions and, when litigation is unavoidable, represent clients in partition proceedings and estate real property disputes.
            </p>

            <LocationsWeServe title="Other Services" />

            <div className="grid sm:grid-cols-2 gap-4 mt-8 mb-8">
              <Link href="/other-services" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                All Other Legal Services
              </Link>
              <Link href="/other-services/will-contests" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                Will Contests in Ohio
              </Link>
              <Link href="/other-services/probate" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900 font-['Inter',_'Arial',_sans-serif]">
                Ohio Probate Administration
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
