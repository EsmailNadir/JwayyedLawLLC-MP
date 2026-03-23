import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franklin County Court Representation',
  description: 'Civil, business, estate planning, and probate representation in Franklin County courts including Franklin County Municipal Court and Common Pleas Court.',
  keywords: [
    'Franklin County court attorney',
    'Columbus civil attorney',
    'Franklin County probate court',
    'Franklin County Common Pleas civil',
    'Columbus estate planning attorney',
    'Franklin County business attorney',
    'Columbus landlord tenant attorney',
    'Franklin County small claims court',
  ],
  openGraph: {
    title: 'Franklin County Court Representation',
    url: 'https://www.jjlawohio.com/courts/franklin-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/courts/franklin-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
];

const faqs = [
  {
    question: `What courts handle civil cases in Franklin County, Ohio?`,
    answer: `Franklin County has two principal trial-level courts for civil matters. The Franklin County Municipal Court (375 S. High St, Columbus, OH 43215) handles civil claims up to $15,000, small claims up to $6,000, evictions, and certain injunctions. The Franklin County Court of Common Pleas (369 S. High St, Columbus, OH 43215) has a Civil Division for cases exceeding $15,000, a Domestic Relations Division, and a Probate Division for estate and guardianship matters. The 10th District Court of Appeals hears appeals from both courts. Knowing which court is correct for your matter affects filing fees, procedures, and timelines—Jwayyed Law LLC can help you file in the right venue from the start.`,
  },
  {
    question: `How does probate work in the Franklin County Probate Court?`,
    answer: `The Franklin County Probate Court is a division of the Court of Common Pleas located at 373 S. High St, Columbus, OH 43215. When someone dies, their estate typically must pass through probate unless assets were held in a trust, joint tenancy, or with a designated beneficiary. Under Ohio Revised Code Chapter 2113, the executor named in the will—or an administrator appointed by the court if there is no will—files an application to open the estate, inventories assets, notifies creditors, pays debts, and ultimately distributes remaining assets to heirs. Franklin County Probate Court also handles guardianships and name changes. The probate process in Ohio generally takes six months to a year for straightforward estates, though complex estates with disputes or creditor claims can take longer. Hiring an attorney familiar with Franklin County Probate Court procedures can prevent costly procedural errors.`,
  },
  {
    question: `Do I need an estate plan even if I live in Columbus or Franklin County?`,
    answer: `Yes. Ohio law—specifically ORC Chapter 2105—governs intestate succession, meaning if you die without a will, the state decides who inherits your assets. A comprehensive estate plan typically includes a last will and testament, a durable power of attorney (ORC 1337.21 et seq.), a healthcare power of attorney, and potentially a revocable living trust to avoid probate altogether. Franklin County residents with children should also designate a guardian in their will. Estate planning is not just for the wealthy—anyone with property, minor children, or specific wishes about their healthcare decisions benefits from having these documents in place. Jwayyed Law LLC drafts estate planning documents tailored to Ohio law and your individual circumstances.`,
  },
  {
    question: `How can Jwayyed Law LLC help with business formation in Columbus and Franklin County?`,
    answer: `Columbus is one of the fastest-growing business markets in the Midwest, and Franklin County is home to thousands of LLCs, corporations, and partnerships. Ohio's primary business formation statutes are found in ORC Chapter 1706 (LLCs) and ORC Chapter 1701 (corporations). Choosing the right entity type affects taxation, liability, and operational flexibility. Jwayyed Law LLC assists clients with drafting and filing articles of organization or articles of incorporation with the Ohio Secretary of State, drafting operating agreements and shareholder agreements, and advising on governance structures. We also assist with buy-sell agreements and business contract drafting to protect your interests in the Columbus market.`,
  },
  {
    question: `How does the landlord-tenant process work in Franklin County?`,
    answer: `Franklin County Municipal Court handles eviction (forcible entry and detainer) proceedings under Ohio Revised Code 1923. A landlord must first provide proper written notice—typically a 3-day notice for nonpayment of rent or lease violations—before filing an eviction complaint at Franklin County Municipal Court (375 S. High St). Hearings are typically scheduled within 10–30 days. If the court grants a judgment for possession, the landlord may then obtain a writ of restitution to remove the tenant. Tenants also have rights: landlords must maintain habitable premises under ORC 5321.02, and retaliatory evictions are prohibited. Whether you are a Columbus landlord dealing with a non-paying tenant or a tenant facing an unjust eviction, legal representation can protect your interests and ensure proper procedure is followed.`,
  },
  {
    question: `What is the civil litigation process in Franklin County Common Pleas Court?`,
    answer: `Civil litigation in the Franklin County Court of Common Pleas follows Ohio Rules of Civil Procedure. The process typically begins with the plaintiff filing a complaint and paying filing fees. The defendant is served and has 28 days to file an answer (ORC 2309.01). The case then enters discovery, where parties exchange documents, interrogatories, and depositions. Most cases settle before trial through negotiation or mediation; Franklin County Common Pleas Court encourages early mediation in many case types. If the case proceeds to trial, it may be tried to a judge (bench trial) or a jury. Appeals from Common Pleas Court go to the 10th District Court of Appeals. Cases can take one to three years from filing to trial in complex civil matters. An experienced civil litigation attorney can help manage timelines and develop effective strategies.`,
  },
  {
    question: `Why should I hire an attorney for civil or business matters in Franklin County rather than representing myself?`,
    answer: `While Ohio allows individuals to represent themselves (pro se) in civil matters, doing so carries significant risks. Civil procedure rules—including Ohio Rules of Civil Procedure, local Franklin County Common Pleas rules, and Franklin County Municipal Court rules—are technical and unforgiving. Missing deadlines for filing a complaint, responding to a motion, or serving the opposing party can result in dismissal of your case or a default judgment against you. In business disputes, the stakes are often high: contract interpretation, damages calculations, and injunctive relief require legal knowledge and strategic thinking. An attorney also helps evaluate whether a case is worth pursuing and what outcome is realistic, saving clients time and money in the long run.`,
  },
  {
    question: `How does small claims court work in Franklin County Municipal Court?`,
    answer: `The Small Claims Division of Franklin County Municipal Court handles money disputes of $6,000 or less. There are no attorneys required (though you may bring one), the filing fee is modest, and hearings are typically scheduled relatively quickly. To file, you submit a Small Claims complaint at 375 S. High St, Columbus, OH 43215, pay the filing fee, and serve the defendant. Common small claims cases include unpaid debts, security deposit disputes, and minor property damage. The magistrate hears both sides and issues a judgment. If the other party does not pay voluntarily, you may need to pursue collection through wage garnishment or bank attachment under ORC 2329. For disputes closer to the $6,000 limit or involving legal complexity, consulting with an attorney before filing can significantly improve your chances.`,
  },
];

export default function FranklinCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Court Representation"
        description="Civil, business, estate planning, and probate representation in Columbus and throughout Franklin County, Ohio. Call (614) 285-5482."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Franklin County Court Representation
            </h2>

            <div className="rounded-lg bg-amber-50 border border-amber-200 p-5 mb-6">
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-800 leading-relaxed m-0">
                <strong>Important Notice:</strong> Due to a conflict of interest, Jwayyed Law LLC handles only{' '}
                <strong>civil</strong>, <strong>business</strong>, <strong>estate planning</strong>, and{' '}
                <strong>probate</strong> matters in Franklin County. We do <strong>not</strong> handle criminal
                defense, OVI/DUI, or traffic violations in Franklin County courts. If you need criminal or OVI
                defense in Franklin County, please seek another attorney. For criminal and OVI matters in{' '}
                <Link href="/courts/delaware-county" className="text-[#b87333] underline hover:opacity-80">Delaware County</Link>,{' '}
                <Link href="/courts/pickaway-county" className="text-[#b87333] underline hover:opacity-80">Pickaway County</Link>,
                or other surrounding counties, we are available to assist.
              </p>
            </div>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County is the most populous county in Ohio and home to the state capital, Columbus. The county
              is served by a multi-tiered court system handling everything from small claims disputes to major civil
              litigation, complex business disputes, and probate administration. Jwayyed Law LLC represents individuals,
              families, and businesses in Franklin County for civil, business, estate planning, and probate matters—
              bringing focused attention and practical Ohio law knowledge to every case.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Whether you are a Columbus small-business owner needing a shareholder agreement, a resident of Dublin
              or Westerville planning your estate, a landlord in Hilliard pursuing an eviction, or an executor
              navigating Franklin County Probate Court, having experienced local counsel matters. Franklin County
              Municipal Court and Franklin County Common Pleas Court each have their own local rules, filing
              procedures, and judicial practices. Our firm is familiar with these courts and works efficiently within
              their systems to advance your interests.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s probate system is governed primarily by ORC Chapters 2101–2131. When a Franklin County
              resident dies, most assets titled in the deceased&apos;s name alone must pass through the Franklin County
              Probate Court before they can be distributed to heirs. Proper estate planning—including wills, trusts,
              and powers of attorney—can streamline or even eliminate the need for probate. Our firm drafts estate
              plans designed to reflect your wishes, protect your family, and minimize the burden on your loved ones
              during an already difficult time.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For business clients, Columbus and Franklin County represent a dynamic economic environment with
              significant opportunity. Whether you are forming a new LLC under ORC Chapter 1706, resolving a
              partnership dispute in Franklin County Common Pleas Court, or enforcing a commercial contract, sound
              legal counsel from the outset protects your investment. Our firm also handles landlord-tenant matters
              under Ohio&apos;s Landlord-Tenant Act (ORC Chapter 5321), including drafting lease agreements and
              representing landlords and tenants in Franklin County Municipal Court eviction proceedings.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Courts We Appear In
            </h3>

            <div className="grid md:grid-cols-1 gap-6 mb-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Franklin County Municipal Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">375 S. High St, Columbus, OH 43215</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Civil claims up to $15,000 &bull; Small Claims (up to $6,000) &bull; Evictions &bull; Civil injunctions
                </p>
                <p className="text-sm text-gray-500 font-['Inter',_'Arial',_sans-serif] mt-1">
                  Note: We appear here for civil and landlord-tenant matters only—not for criminal or OVI cases.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Franklin County Court of Common Pleas – Civil Division
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">369 S. High St, Columbus, OH 43215</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Civil cases over $15,000 &bull; Business disputes &bull; Contract litigation &bull; Domestic Relations
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  Franklin County Probate Court
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">373 S. High St, Columbus, OH 43215</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Estate administration &bull; Guardianships &bull; Trust matters &bull; Will contests (ORC Ch. 2101–2131)
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
                  10th District Court of Appeals
                </h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif] mb-1">373 S. High St, Columbus, OH 43215</p>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">
                  Appeals from Franklin County trial courts in civil and business matters
                </p>
              </div>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Practice Areas in Franklin County
            </h3>
            <ul className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 space-y-2 leading-relaxed">
              <li><strong>Estate Planning:</strong> Wills, revocable and irrevocable trusts, powers of attorney, healthcare directives (ORC Chapter 1337)</li>
              <li><strong>Probate Administration:</strong> Estate opening and closing, executor representation, creditor claims, asset distribution (ORC Chapter 2113)</li>
              <li><strong>Business Formation &amp; Disputes:</strong> LLC formation (ORC Chapter 1706), corporation formation (ORC Chapter 1701), operating agreements, shareholder disputes</li>
              <li><strong>Civil Litigation:</strong> Contract disputes, breach of contract, civil money claims in Franklin County Municipal Court and Common Pleas Court</li>
              <li><strong>Landlord-Tenant Law:</strong> Lease drafting, evictions, security deposit disputes, habitability issues (ORC Chapter 5321)</li>
              <li><strong>Small Claims Representation:</strong> Advising and representing clients in Franklin County Municipal Court Small Claims Division</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Communities We Serve in Franklin County
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Jwayyed Law LLC serves clients throughout Franklin County for civil and business matters, including
              Columbus (county seat), Dublin, Westerville, Hilliard, Gahanna, Grove City, Reynoldsburg, Worthington,
              Bexley, and Upper Arlington. If you live or do business anywhere in Franklin County and need civil,
              business, estate planning, or probate representation, we are ready to help. Learn more about our work
              in neighboring counties: {' '}
              <Link href="/courts/delaware-county" className="text-[#b87333] underline hover:opacity-80">Delaware County</Link>,{' '}
              <Link href="/courts/pickaway-county" className="text-[#b87333] underline hover:opacity-80">Pickaway County</Link>, and{' '}
              <Link href="/courts/morrow-county" className="text-[#b87333] underline hover:opacity-80">Morrow County</Link>.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC for Franklin County Civil &amp; Business Matters
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm brings practical, Ohio-focused legal knowledge to every civil, business, and estate matter in
              Franklin County. We understand the local court culture, how Franklin County judges approach civil motions,
              and the procedural nuances that can make or break a case. We communicate clearly, set realistic
              expectations, and fight for the best possible outcome—whether that means negotiating a favorable
              business settlement, successfully probating an estate, or protecting a landlord&apos;s investment.
              Contact us at <strong>(614) 285-5482</strong> to schedule a consultation.
            </p>

            <LocationsWeServe title="Franklin County Legal Services" />

          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
