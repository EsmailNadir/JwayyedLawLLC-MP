import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Eviction Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio eviction attorney representing landlords and tenants. Skilled representation for eviction proceedings in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['eviction lawyer Columbus OH', 'eviction attorney Ohio', 'landlord eviction lawyer', 'Franklin County eviction attorney'],
  openGraph: {
    title: 'Eviction Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/civil/evictions',
  },
  alternates: { canonical: '/civil/evictions' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Evictions', href: '/civil/evictions' },
];

const faqs = [
  {
    question: 'What is the eviction process in Ohio?',
    answer: 'Eviction process in Ohio under Ohio Revised Code Chapter 1923 requires landlords to file an eviction action (forcible entry and detainer) in court, serve notice on tenants, obtain a court order, and have the sheriff execute the eviction. Self-help eviction (changing locks, removing property) is illegal. Eviction proceedings move quickly and require immediate legal representation to protect tenant rights.',
  },
  {
    question: 'What are grounds for eviction in Ohio?',
    answer: 'Grounds for eviction in Ohio under ORC Chapter 1923 include nonpayment of rent, lease violations, property damage, illegal activity, expiration of lease term, and holdover tenancy. Landlords must have legal grounds for eviction and follow proper procedures. Retaliatory eviction (eviction in retaliation for exercising tenant rights) is illegal and may result in landlord liability.',
  },
  {
    question: 'Can tenants fight eviction in Ohio?',
    answer: 'Yes, tenants can fight eviction in Ohio by raising defenses including lack of proper notice, defective eviction proceedings, habitability violations, retaliatory eviction, discrimination, payment of rent, or other legal defenses. Tenants have the right to defend against eviction and protect their rights. An attorney can help identify defenses and protect tenant rights.',
  },
  {
    question: 'What is the timeline for eviction in Ohio?',
    answer: 'Eviction timeline in Ohio depends on circumstances: Landlords must provide proper notice (3 days for nonpayment, 30 days for lease violations), file eviction action in court, serve notice on tenants, obtain court order, and have sheriff execute eviction. Eviction proceedings can take weeks to months depending on defenses raised. An attorney can help understand timeline and protect rights.',
  },
  {
    question: 'Do I need an eviction attorney?',
    answer: 'Eviction proceedings move quickly and require experienced representation. Eviction attorneys understand Ohio eviction law, can protect tenant rights, defend against eviction, handle eviction proceedings for landlords, negotiate settlements, and represent you in court. Most attorneys work on hourly fee arrangements and offer consultations. Experienced representation is essential to protect your rights.',
  },
  {
    question: `What notice is required before filing an eviction in Ohio?`,
    answer: `Under Ohio Revised Code 1923.04, landlords must provide written notice to tenants before filing an eviction action. For nonpayment of rent, the landlord must provide a three-day written notice to vacate. For other lease violations, the required notice period is governed by the lease terms or applicable statute—commonly 30 days for month-to-month tenancies. The notice must be properly served on the tenant, either by personal delivery, leaving a copy at the residential unit, or mailing. Defective notice—whether incorrect content, improper service, or insufficient time—can result in dismissal of the eviction action.`,
  },
  {
    question: `What is the eviction timeline in Ohio from filing to writ of possession?`,
    answer: `After proper notice expires, an Ohio landlord files a forcible entry and detainer action in the municipal or county court. A hearing is typically scheduled within seven to ten days of filing. If the court rules in the landlord's favor, a judgment is entered and a writ of execution (writ of possession) can be issued after the applicable appeal period. The sheriff then executes the writ and removes the tenant. From the date of filing, the entire process commonly takes three to six weeks in uncontested cases, but can take longer if the tenant raises defenses, requests continuances, or appeals the judgment.`,
  },
  {
    question: `What are tenant defenses to eviction in Ohio?`,
    answer: `Ohio tenants have several recognized defenses to eviction. Improper or defective notice under ORC 1923.04 can result in dismissal. Retaliatory eviction is prohibited under ORC 5321.02—a landlord may not evict a tenant in retaliation for reporting code violations, joining a tenant organization, or exercising other protected rights. Habitability violations under ORC 5321.07 may provide a defense or counterclaim when the landlord has failed to maintain the premises in a fit and habitable condition. A landlord's acceptance of rent after serving a notice to vacate may waive the notice and require the process to start over. An attorney can identify applicable defenses and present them effectively in court.`,
  },
];

export default function EvictionsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Eviction Lawyer"
        description="Experienced legal representation for eviction proceedings. Protecting your rights whether you are a landlord or tenant."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Eviction Proceedings in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Eviction proceedings in Columbus, Cincinnati, Dayton, or throughout Ohio require landlords to follow strict legal procedures under Ohio Revised Code Chapter 1923. As part of our <Link href="/civil" className="text-[#b87333] underline hover:text-[#a06828]">civil litigation practice</Link>, Jwayyed Law LLC provides experienced representation for eviction proceedings representing both landlords and tenants. Our attorney understands Ohio eviction law and can protect your rights whether you are seeking eviction or defending against eviction. Evictions are closely related to <Link href="/civil/landlord-tenant-disputes" className="text-[#b87333] underline hover:text-[#a06828]">landlord-tenant disputes</Link>, and understanding your rights under ORC Chapter 5321 is essential.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Eviction proceedings move quickly and can have immediate devastating effects on tenants including loss of housing, removal of property, and damage to credit. Landlords must follow proper procedures including providing proper notice, filing eviction actions in court, and obtaining court orders. Self-help eviction (changing locks, removing property, cutting utilities) is illegal and may result in landlord liability. Understanding eviction procedures, available defenses, and your rights is essential for protecting your interests. For more on tenant rights, read our articles on <Link href="/our-law-firm/blog/landlord-duty-repair-ohio-tenant-rights" className="text-[#b87333] underline hover:text-[#a06828]">Ohio landlord repair duties</Link> and <Link href="/our-law-firm/blog/ohio-landlord-tenant-security-deposit-laws" className="text-[#b87333] underline hover:text-[#a06828]">Ohio security deposit laws</Link>.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The eviction process begins with proper notice (3 days for nonpayment, 30 days for lease violations), followed by filing an eviction action in court, serving notice on tenants, obtaining a court order, and having the sheriff execute the eviction. Tenants can defend against eviction by raising defenses including lack of proper notice, habitability violations, retaliatory eviction, or payment of rent. Early intervention by an experienced eviction attorney can significantly impact the outcome, potentially preventing eviction or minimizing consequences. <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">Contact Jwayyed Law LLC</Link> immediately if you are facing an eviction proceeding.
            </p>

            <LocationsWeServe title="Civil" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Eviction Process</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the eviction process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Proper Notice Requirements</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Landlords must provide proper notice before filing eviction actions. Under Ohio Revised Code 1923.04, notice requirements vary: 3 days for nonpayment of rent, 30 days for lease violations, or other periods depending on circumstances. Notice must be properly served and contain required information. Defective notice can result in dismissal of eviction actions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Filing Eviction Actions</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                After providing proper notice, landlords must file eviction actions (forcible entry and detainer) in the appropriate court (Municipal Court or Common Pleas Court depending on jurisdiction). The complaint must allege grounds for eviction and be properly served on tenants. Tenants have the right to respond and raise defenses.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Court Proceedings</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Eviction proceedings move quickly with hearings typically scheduled within days or weeks. Tenants can raise defenses including lack of proper notice, habitability violations, retaliatory eviction, discrimination, payment of rent, or other legal defenses. An attorney can help identify defenses, prepare responses, and represent you in court.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Execution of Eviction</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If the court orders eviction, the sheriff executes the eviction by removing tenants and property. Self-help eviction (changing locks, removing property without court order) is illegal and may result in landlord liability for damages. Tenants have limited time to remove property after eviction orders.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How an Eviction Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced eviction attorney provides comprehensive representation for both landlords and tenants:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Eviction Proceedings for Landlords:</strong> Handle eviction proceedings following proper procedures, draft and file eviction actions, serve notice properly, and represent landlords in court to obtain eviction orders</li>
              <li><strong>Eviction Defense for Tenants:</strong> Defend tenants against eviction, raise defenses including lack of proper notice, habitability violations, retaliatory eviction, discrimination, or payment of rent, and protect tenant rights throughout the process</li>
              <li><strong>Negotiation and Settlement:</strong> Negotiate settlements including payment plans, lease modifications, or move-out agreements to resolve disputes without eviction when possible</li>
              <li><strong>Court Representation:</strong> Represent you in court to protect your rights, present evidence, raise defenses, and advocate for favorable outcomes</li>
              <li><strong>Documentation and Evidence:</strong> Prepare documentation, gather evidence, and build cases to support your position in eviction proceedings</li>
              <li><strong>Appeals:</strong> Handle appeals of eviction orders if necessary to protect your rights</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Common Eviction Defenses</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Lack of Proper Notice</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Landlords must provide proper notice before filing eviction actions. If notice is defective, improperly served, or lacks required information, eviction actions may be dismissed. An attorney can challenge notice defects and protect tenant rights.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Habitability Violations</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If landlords fail to maintain habitable premises (lack of heat, water, necessary repairs), tenants can raise habitability violations as defenses to eviction. Tenants may also be able to withhold rent or make repairs and deduct costs. An attorney can help identify habitability violations and raise them as defenses.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Retaliatory Eviction</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Retaliatory eviction (eviction in retaliation for exercising tenant rights such as reporting code violations or joining tenant organizations) is illegal under Ohio Revised Code 5321.02. Tenants can raise retaliatory eviction as a defense, and landlords may face liability for damages.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Payment of Rent</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If tenants pay rent or cure lease violations before eviction orders are issued, eviction actions may be dismissed. Tenants can raise payment of rent as a defense, and landlords must accept proper payment. An attorney can help ensure rent is properly paid and raise payment as a defense.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated eviction representation throughout Ohio. We understand that eviction proceedings move quickly and can affect your housing and rights. Our attorney works diligently to handle eviction proceedings for landlords, defend tenants against eviction, and protect your rights throughout the process.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough understanding of Ohio eviction law, strategic defense development, and aggressive advocacy when necessary. We understand the local court systems, judicial preferences, and common issues in eviction proceedings. This knowledge allows us to develop effective strategies tailored to your specific situation and protect your interests. We work closely with clients to understand their goals, explain legal options, and make informed decisions about defense strategies.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing eviction proceedings in Columbus, Cincinnati, Dayton, or anywhere in Ohio, contact Jwayyed Law LLC immediately to schedule a consultation. We will review your case, explain your rights, discuss potential defenses, and develop a strategy tailored to your situation. Time is critical in eviction cases—proceedings move quickly, and early intervention by experienced counsel can significantly impact the outcome, potentially preventing eviction or minimizing consequences. Do not delay in seeking experienced legal representation to protect your housing and rights.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Related Civil Litigation Services</h3>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/civil/landlord-tenant-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Landlord-Tenant Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Security deposit claims, habitability issues, and lease enforcement</span>
              </Link>
              <Link href="/civil/breach-of-contract" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Breach of Contract</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Enforce or defend contract obligations and recover damages for broken agreements</span>
              </Link>
              <Link href="/civil/real-estate-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Real Estate Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Title disputes, boundary issues, quiet title actions, and property litigation</span>
              </Link>
              <Link href="/civil/debt-collection-defense" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Debt Collection Defense</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Defend against unfair debt collection practices and protect your rights</span>
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
