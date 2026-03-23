import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Powers of Attorney Lawyer in Ohio | Columbus',
  description: 'Ohio attorney drafting durable financial and healthcare powers of attorney under ORC Chapter 1337. Protect yourself and your family from the need for guard.',
  keywords: [
    'power of attorney attorney Columbus OH',
    'durable power of attorney Ohio',
    'healthcare power of attorney Ohio',
    'financial power of attorney Ohio',
    'ORC 1337 power of attorney',
    'springing power of attorney Ohio',
    'hot powers Ohio',
    'healthcare proxy Ohio',
    'living will Ohio',
  ],
  openGraph: {
    title: 'Powers of Attorney Lawyer in Ohio | Columbus',
    description: 'Ohio attorney drafting durable financial and healthcare powers of attorney under ORC Chapter 1337. Protect yourself and your family from the need for guardianship. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/other-services/powers-of-attorney',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/other-services/powers-of-attorney' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Planning', href: '/other-services/estate-planning' },
  { label: 'Powers of Attorney', href: '/other-services/powers-of-attorney' },
];

const faqs = [
  {
    question: `What is the Ohio Uniform Power of Attorney Act and when did it take effect?`,
    answer: `Ohio enacted the Uniform Power of Attorney Act (UPOAA), codified at ORC 1337.01 through 1337.64, effective March 22, 2012. Before the UPOAA, Ohio's power of attorney statutes were fragmented and inconsistent across the state. The UPOAA established a comprehensive, uniform framework for financial (general) powers of attorney that: defines the duties of agents; expands the list of default powers available to agents; introduces "hot powers" requiring explicit authorization for sensitive transactions; establishes third-party acceptance obligations; and provides clear rules for durable and springing powers of attorney. The UPOAA dramatically strengthened both the usability of powers of attorney in Ohio and the legal protections surrounding them.`,
  },
  {
    question: `What is the difference between a durable and a non-durable power of attorney?`,
    answer: `A non-durable power of attorney is effective only while the principal has legal capacity. It automatically terminates if the principal becomes incapacitated — the opposite of what most people want. A durable power of attorney (DPOA) survives the principal's incapacity and remains effective even after the principal can no longer make decisions. Under ORC 1337.07, a power of attorney is durable if it contains language indicating that the principal's incapacity does not terminate the agent's authority. For estate planning and incapacity planning purposes, virtually all financial powers of attorney drafted in Ohio today should be durable. A non-durable POA is typically used for a specific, temporary purpose — such as authorizing a real estate closing when the principal cannot attend.`,
  },
  {
    question: `What is a springing power of attorney and should I use one?`,
    answer: `A springing power of attorney "springs" into effect only upon a triggering event — typically the principal's incapacity — rather than being immediately effective upon signing. The advantage is that it limits the agent's authority until the principal truly needs assistance. The disadvantage is that third parties often require documentation of the triggering event — typically a physician's certification of incapacity — before they will honor the POA, which can create practical delays and difficulties at exactly the moment when quick action is needed (such as managing finances during a sudden hospitalization). Many estate planning attorneys, including Jwayyed Law LLC, recommend an immediately effective durable POA in most circumstances, often paired with a letter of instruction directing the agent not to use their authority until the principal becomes incapacitated or requests assistance.`,
  },
  {
    question: `What are "hot powers" in an Ohio financial power of attorney?`,
    answer: `The Ohio UPOAA (ORC 1337.34) identifies a set of sensitive powers — called "hot powers" — that an agent does NOT automatically receive unless the principal explicitly grants them in the POA document. These include: making gifts of the principal's property (which can affect estate tax planning and Medicaid eligibility); creating, amending, or revoking a trust on the principal's behalf; changing beneficiary designations on life insurance, retirement accounts, or other financial accounts; exercising fiduciary powers the principal holds as trustee; making or revoking a survivorship arrangement; and delegating the agent's authority. Because these powers can significantly alter the principal's estate plan and financial situation — and because they are most susceptible to abuse — they require explicit language in the POA document. Standard POA templates that omit these provisions can leave an agent unable to take necessary planning steps during the principal's incapacity.`,
  },
  {
    question: `What is a healthcare power of attorney in Ohio and how is it different from a living will?`,
    answer: `A healthcare power of attorney (also called a healthcare proxy) under ORC 1337.12 appoints an agent — called a healthcare proxy — to make medical decisions on your behalf if you become unable to make or communicate those decisions. The agent can authorize or refuse treatment, consent to surgery, select or discharge healthcare providers, and arrange for care in a hospital, nursing facility, or at home. A living will (also called an advance directive for healthcare) under ORC 2133.02 is different: it is a document stating your own specific instructions about life-sustaining treatment in end-of-life situations, rather than appointing someone to decide for you. In Ohio, both documents are recommended as part of a complete estate plan. A healthcare proxy gives you the most flexibility — a trusted person who knows your values and wishes can respond to specific clinical circumstances — while a living will provides direct guidance for the specific situations it addresses.`,
  },
  {
    question: `Are third parties required to accept an Ohio power of attorney?`,
    answer: `Under ORC 1337.52, a person presented with a valid Ohio power of attorney is required to accept it — meaning they cannot simply refuse to honor it without legal justification. Banks, financial institutions, title companies, and government agencies can request a certification from the agent (a signed statement that the POA is still in effect and that the principal has not died or revoked it) and a reasonable time to review the document, but they may not require their own form or simply decline to honor a properly executed Ohio UPOAA-compliant POA without a permissible reason. A person who refuses to accept a valid POA without good cause may be subject to attorney fees and costs under ORC 1337.52(E). In practice, some institutions still push back; having a POA drafted by an attorney with explicit statutory citations often helps overcome resistance.`,
  },
  {
    question: `How can I revoke a power of attorney in Ohio?`,
    answer: `A principal who has legal capacity may revoke a power of attorney at any time under ORC 1337.08. Revocation should be: (1) in writing, signed by the principal; (2) delivered to the agent and any known third parties relying on the POA (banks, financial institutions, healthcare providers). For real estate transactions, a revocation should be recorded with the county recorder. If a new POA is executed, it should expressly revoke all prior powers of attorney to avoid confusion about which document controls. The agent's authority also terminates automatically upon the principal's death; upon the principal's divorce, if the agent was the principal's spouse (under ORC 1337.11, unless the POA provides otherwise); or upon the agent's death, incapacity, or resignation if no successor agent is named.`,
  },
  {
    question: `Why do I need a power of attorney if I already have a revocable living trust?`,
    answer: `A revocable living trust handles assets that are titled in the trust's name — and a successor trustee takes over management of those assets seamlessly at incapacity. However, a trust does not cover every situation. A power of attorney is needed for: assets that were not funded into the trust (tax returns, government benefit programs, Social Security, Medicare/Medicaid applications); actions that require personal authority rather than trustee authority (filing a lawsuit on the principal's behalf, managing retirement accounts, making gifts); and healthcare decisions (a trust cannot authorize medical treatment). A complete estate plan should include both a revocable living trust (for probate avoidance and asset management) and durable financial and healthcare powers of attorney (for situations the trust does not reach). Jwayyed Law LLC always drafts both as part of every comprehensive estate plan.`,
  },
];

export default function PowersOfAttorneyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Powers of Attorney Lawyer"
        description="Helping Ohio individuals and families establish durable financial and healthcare powers of attorney to protect their interests during incapacity — without the cost and delay of guardianship."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Powers of Attorney in Ohio: Planning for Incapacity Under ORC Chapter 1337
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A power of attorney (POA) is a legal document in which one person (the principal) grants another person (the agent or attorney-in-fact) the authority to act on the principal\'s behalf. Powers of attorney are among the most important and most underutilized documents in estate planning. Without a durable financial power of attorney, if you become incapacitated due to illness, accident, or cognitive decline, no one — not your spouse, not your adult children, not your closest friend — has legal authority to manage your finances, pay your bills, file your tax returns, or handle your business affairs without going to probate court and obtaining a guardianship. A healthcare power of attorney provides the same protection for medical decisions. With these documents in place, your chosen person can act immediately when needed, privately, and without court involvement.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio\'s modern power of attorney framework is codified at ORC 1337.01 through 1337.64 — the Ohio Uniform Power of Attorney Act, effective since March 22, 2012. The UPOAA standardized the law across Ohio, clarified the duties of agents, established which powers require explicit authorization (so-called "hot powers"), created third-party acceptance obligations to reduce institutional resistance to honoring POAs, and provided a statutory short form that simplifies drafting while ensuring legal adequacy. Despite the existence of a statutory form, a power of attorney drafted without legal guidance often lacks crucial provisions — hot powers for Medicaid planning or gifting, specific authority for digital accounts, or healthcare-specific directives — that become critically important exactly when the document needs to be used.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Jwayyed Law LLC prepares financial (general) powers of attorney and healthcare powers of attorney for clients throughout Columbus, Franklin County, and Ohio as part of comprehensive estate plans. We tailor every POA to your specific circumstances — the size and composition of your estate, your healthcare preferences, the trustworthiness and capabilities of your chosen agent, and your goals for Medicaid planning and estate planning. A power of attorney is not a form you fill out online; it is a carefully drafted legal instrument that determines who will care for you and your finances if you cannot care for yourself.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Types of Powers of Attorney in Ohio
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>General (Financial) Durable Power of Attorney:</strong> Grants your agent broad authority to manage your financial affairs — banking, investments, real estate, taxes, business operations, government benefit programs, and more. Under the UPOAA, a general POA grants a wide range of default powers, but certain sensitive powers (gifts, trust modifications, beneficiary changes) require explicit language. This document becomes critically important during incapacity, when your agent must pay your bills, file your taxes, and manage your estate without the ability to consult you.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>Limited (Special) Power of Attorney:</strong> Grants authority to do one specific thing — sign documents at a real estate closing, manage a specific bank account, sell a particular vehicle. A limited POA is typically non-durable and terminates upon completion of the specified task or at a stated expiration date. It is not a substitute for an estate planning POA.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>Healthcare Power of Attorney (Healthcare Proxy):</strong> Governed by ORC 1337.12, this document appoints a healthcare proxy to make medical decisions — treatment choices, surgery consent, end-of-life care decisions, facility selection — if you are unable to communicate or make decisions for yourself. Your healthcare proxy should know your values, your preferences for aggressive versus comfort-focused care, and your wishes regarding life-sustaining treatment.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              POA vs. Guardianship: The Cost of Not Planning
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The most compelling reason to execute powers of attorney is to avoid <Link href="/other-services/guardianships" className="text-[#b87333] underline hover:text-[#a06828]">guardianship</Link>. If you become incapacitated without these documents in place, your family must petition the probate court — a process that takes weeks, costs thousands of dollars in attorney fees and court costs, and removes your autonomy entirely by placing your affairs under court supervision indefinitely. An appointed guardian must file annual reports and accountings with the court, seek prior court approval for major decisions, and continue to incur legal fees throughout the guardianship. A durable power of attorney and healthcare proxy, prepared in advance, allow your chosen person to act without any of this — immediately, privately, and at far lower cost. These documents cost a fraction of what a single year of guardianship administration costs.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              One critical point: powers of attorney can only be executed while the principal has legal capacity. If a person has already lost the cognitive ability to understand and execute legal documents, it is too late to create a POA — guardianship becomes the only option. This is why estate planning attorneys consistently emphasize that these documents should be prepared well before any health crisis, not in response to one. Young adults benefit from these documents too — an 18-year-old in a car accident may need their parents to access medical and financial information that they could not access without a POA, because adult children are legally independent persons.
            </p>

            <LocationsWeServe title="Other Services" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/other-services/guardianships" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Guardianships</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">When a POA is no longer available — court-supervised protection</span>
              </Link>
              <Link href="/trusts/revocable-living-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Revocable Living Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Comprehensive incapacity and probate planning</span>
              </Link>
              <Link href="/other-services/estate-planning" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Estate Planning</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Wills, trusts, and a complete estate plan</span>
              </Link>
              <Link href="/trusts/special-needs-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Special Needs Trusts</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Planning for loved ones with disabilities</span>
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
