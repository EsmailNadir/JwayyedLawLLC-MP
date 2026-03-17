import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Will Contests Lawyer in Ohio | Columbus | Jwayyed Law LLC',
  description: 'Ohio attorney handling will contests — contesting and defending wills on grounds of lack of capacity, undue influence, fraud, and improper execution. Serving Columbus and all of Ohio. Call (614) 285-5482.',
  keywords: [
    'will contest lawyer Columbus OH',
    'will contest attorney Ohio',
    'contest a will Ohio',
    'undue influence will Ohio',
    'lack of testamentary capacity Ohio',
    'will contest deadline Ohio',
    'ORC 2107.71 will contest',
    'no-contest clause Ohio',
    'defending will contest Ohio',
  ],
  openGraph: {
    title: 'Will Contests Lawyer in Ohio | Columbus | Jwayyed Law LLC',
    description: 'Ohio attorney handling will contests — contesting and defending wills on grounds of lack of capacity, undue influence, fraud, and improper execution. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/other-services/will-contests',
  },
  alternates: { canonical: '/other-services/will-contests' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Probate', href: '/other-services/probate' },
  { label: 'Will Contests', href: '/other-services/will-contests' },
];

const faqs = [
  {
    question: `What are the legal grounds to contest a will in Ohio?`,
    answer: `Ohio law recognizes four main grounds to contest a will under ORC 2107.71. First, lack of testamentary capacity: the testator (will-maker) must have been "of sound mind" at the time of signing — meaning they understood the nature and extent of their property, knew who their natural heirs were, understood that they were making a will, and could hold these elements together in an orderly plan. Second, undue influence: someone in a position of trust or authority over the testator improperly overcame the testator's free will and substituted their own wishes for those of the testator. Third, fraud: the testator was deceived about the contents of the document or circumstances surrounding its execution. Fourth, improper execution: the will fails to satisfy Ohio's formal requirements under ORC 2107.03 — the testator's signature, two competent witnesses who signed in the testator's presence, and proper formalities. Any of these grounds, if proven by the contestant, can result in the will being declared invalid.`,
  },
  {
    question: `Who has legal standing to contest a will in Ohio?`,
    answer: `Under ORC 2107.71, a will contest may be filed by any person who would have an interest in the outcome — meaning their financial interest would be affected if the will is found invalid. Typically, contestants are individuals who would inherit more under a prior will, or who would inherit under Ohio's intestate succession statute (ORC 2105.06) if there were no valid will at all. Beneficiaries named in the will being contested generally cannot contest it (unless they were also beneficiaries of a prior will that would leave them more). A creditor of the estate generally lacks standing. Standing is fact-specific and should be evaluated by a will contest attorney before filing.`,
  },
  {
    question: `What is Ohio's deadline to contest a will?`,
    answer: `The deadline to file a will contest action in Ohio is strict and unforgiving. Under ORC 2107.76, a will contest must be filed within three months after the will is admitted to probate. The three-month period runs from the date the probate court enters the order admitting the will, not from the date of the decedent's death or from when you learned of the will. Missing this deadline is almost always fatal to the contest — Ohio courts treat it as a jurisdictional deadline that cannot be extended for mistake, ignorance, or hardship. If you believe a will is invalid, you must act immediately after the will is admitted to probate. Do not wait to gather more evidence before consulting an attorney — consult an attorney first and preserve your deadline.`,
  },
  {
    question: `What is undue influence and how is it proven in an Ohio will contest?`,
    answer: `Undue influence occurs when a person in a position of trust, confidence, or authority over the testator improperly uses that position to substitute their own wishes for those of the testator in making or changing a will. Ohio courts have found undue influence in cases involving caregivers who isolated the testator from family, adult children who controlled a parent's finances and communications, and romantic partners who moved in with a vulnerable older adult shortly before the will was changed. Proving undue influence requires evidence of: the testator's susceptibility (vulnerability due to illness, age, isolation, or dependence); the influencer's opportunity to exert influence; the influencer's disposition to exert influence for an improper purpose; and a resulting disposition that would not have been made but for the influence. Direct evidence is rarely available — undue influence cases are built on circumstantial evidence, often including medical records, witness testimony, financial records, and communications.`,
  },
  {
    question: `What is a no-contest clause in an Ohio will and is it enforceable?`,
    answer: `A no-contest clause (also called an in terrorem clause) is a provision in a will that states that any beneficiary who contests the will forfeits their inheritance. These clauses are intended to deter will contests by giving potential contestants something to lose. In Ohio, no-contest clauses are expressly recognized under ORC 2107.15, which provides that a condition in a will that a devisee who contests the will shall receive nothing from the estate is valid and enforceable. However, Ohio courts have recognized an exception: if the contestant had probable cause to bring the contest — meaning a reasonable basis for believing the contest might succeed — the no-contest clause may not be enforced against them. The practical effect is that a will contest filed with strong evidence of incapacity or undue influence is less likely to trigger the forfeiture than a contest filed on weak or speculative grounds.`,
  },
  {
    question: `What happens if a will contest is successful in Ohio?`,
    answer: `If a will is successfully contested and declared invalid, the estate is distributed as if that will never existed. If a prior valid will exists — one that predates the invalid will — that prior will governs distribution. If no prior valid will exists, the estate passes under Ohio's intestate succession statute (ORC 2105.06), which distributes property in a fixed priority order: surviving spouse, then children and their descendants, then parents, then siblings and their descendants, and so forth. The outcome of invalidating a will can therefore look very different depending on whether a prior will exists and who the decedent's heirs at law are. A successful will contest does not automatically mean the contestant receives more — in some cases, invalidating a will benefits the estate generally or results in different but not necessarily larger shares.`,
  },
  {
    question: `How do you defend a will against a contest in Ohio?`,
    answer: `Defending a will contest requires assembling evidence that the testator had testamentary capacity and was free from undue influence at the time of signing. Key defensive evidence includes: the drafting attorney's notes and testimony (attorneys who draft wills often document their observations about the testator's capacity and freedom from influence); medical records showing the testator's cognitive status at the time of execution; testimony from witnesses who observed the testator near the time of signing; evidence that the will's terms are consistent with the testator's stated wishes and prior estate planning history; and bank and financial records showing no unusual transfers. If the will was executed with careful procedural safeguards — a mental capacity assessment, a recorded video of the signing, or an independent attorney consultation — it is far more defensible. Jwayyed Law LLC represents both plaintiffs contesting wills and defendants protecting wills and estates from unfounded challenges.`,
  },
  {
    question: `Is a will contest worth it financially?`,
    answer: `Will contests are expensive, time-consuming, and emotionally difficult — but sometimes they are the right choice. A practical cost-benefit analysis should consider: the value of the estate and the difference between what you would receive under the current will versus a prior will or intestacy; the strength of your legal grounds (a clear case of incapacity or fraud is different from a weak suspicion of influence); the cost of litigation, including attorney fees, expert witness fees (medical experts to testify about capacity are common), and deposition costs; the likelihood of success; and non-financial factors, such as vindicating a family member whose wishes you believe were overridden. Many will contest attorneys work on a contingency or hybrid fee basis for strong cases. We offer confidential consultations to help you evaluate whether you have grounds to contest, what the process will involve, and whether the potential benefit justifies the investment.`,
  },
];

export default function WillContestsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Will Contests Lawyer"
        description="Helping Ohio families contest and defend wills in probate court — with experienced representation on grounds of lack of capacity, undue influence, fraud, and improper execution."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Will Contests in Ohio: Challenging and Defending a Will\'s Validity
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A will contest is a legal challenge to the validity of a deceased person\'s will, brought in the probate court of the county where the will was admitted — most commonly the Franklin County Probate Court for Columbus residents. Will contests are governed by ORC 2107.71 through 2107.76 and must be initiated within a strict three-month deadline after the will is admitted to probate. They are among the most complex and emotionally charged matters in Ohio estate law: the parties are almost always family members, the stakes involve a loved one\'s final wishes, and the evidence — medical records, witness testimony, financial transactions — is often incomplete, disputed, and deeply personal.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Will contests arise when heirs or other interested parties believe that the will being probated does not reflect the decedent\'s true wishes — because the decedent lacked the mental capacity to make a will, because a caregiver, family member, or romantic partner manipulated the decedent into changing their will, because someone deceived the decedent about the document they were signing, or because the will was not executed with the formalities required by Ohio law. These are serious legal claims that require substantial evidence, strategic litigation planning, and a thorough understanding of Ohio probate procedure.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Jwayyed Law LLC handles will contests from both sides of the dispute: representing contestants who believe a will is invalid and seeking to have it set aside, and representing executors, beneficiaries, and estates defending the validity of a properly executed will against unfounded challenges. Our firm understands that behind every will contest is a family in grief, and we approach these matters with both the legal rigor they demand and the sensitivity they deserve.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Testamentary Capacity and Undue Influence: The Two Most Common Grounds
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>Lack of testamentary capacity</strong> is the most frequently litigated will contest ground in Ohio. Ohio law requires that a testator be "of sound mind and memory" at the time of executing a will (ORC 2107.02). Courts have interpreted this to mean that the testator must: (1) understand the nature of making a will; (2) know the nature and extent of their property; (3) know the natural objects of their bounty (i.e., who their family members are); and (4) understand the relationship of these elements and form an orderly plan for distributing property. A diagnosis of Alzheimer\'s disease, dementia, or another cognitive condition does not automatically invalidate a will — capacity is evaluated at the specific moment of execution, and a person can have "lucid intervals" of sufficient capacity even in the later stages of dementia. Medical records from around the time of signing, the drafting attorney\'s notes, and testimony from witnesses who observed the testator are critical evidence.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>Undue influence</strong> is the second major ground and is often harder to prove because it leaves little direct evidence. Undue influence occurs when the free will of a vulnerable testator is overborne by someone with the opportunity and motive to exploit the testator\'s weakness. Classic scenarios include an adult child who moves in with an elderly parent after health declines, controls all communications and financial accounts, drives the parent to attorney appointments, and is present during the signing — resulting in a will that cuts out all other siblings. Ohio courts examine the totality of the circumstances: the testator\'s physical and mental condition, isolation from other family members, the beneficiary\'s role in initiating and attending the estate planning, the content of the will itself (does it make sense given the testator\'s expressed wishes over the years?), and financial transactions near the time of execution.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              The Three-Month Deadline and Intestate Succession
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The three-month deadline under ORC 2107.76 is absolute. The clock starts when the probate court enters the order admitting the will — not when you receive notice, not when the estate attorney calls you, and not when you first suspect a problem. Probate courts do not typically extend this deadline for any reason short of fraud in obtaining the admission order itself. If you miss the three-month window, you lose the ability to contest the will regardless of how strong your evidence is. This urgency makes it critical to consult a will contest attorney immediately upon learning that a will you believe is invalid has been admitted to probate.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If a will contest succeeds and the will is invalidated, the estate passes under the most recent prior valid will — or, if none exists, under Ohio\'s intestate succession statute at ORC 2105.06. Ohio intestacy distributes property as follows: first, to a surviving spouse (with adjustments if there are also children from a prior relationship); then to descendants (children, grandchildren) in equal shares; then to parents; then to siblings and their descendants; and so forth. Understanding who would benefit from invalidating the will — and how — is an essential part of analyzing whether a will contest makes sense. Our firm can map the intestate succession analysis for your family\'s specific circumstances and help you understand the likely outcome of a successful challenge.
            </p>

            <LocationsWeServe title="Other Services" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/other-services/probate" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Probate Administration</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Estate administration through Ohio probate court</span>
              </Link>
              <Link href="/other-services/estate-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Estate Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Executor misconduct, trust disputes, and beneficiary claims</span>
              </Link>
              <Link href="/other-services/mediation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Mediation</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Resolve estate disputes without a full trial</span>
              </Link>
              <Link href="/other-services/guardianships" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Guardianships</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Protecting vulnerable adults and minors</span>
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
