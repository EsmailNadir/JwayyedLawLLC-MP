import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Landlord-Tenant Disputes Lawyer Ohio | ORC Chapter 5321 | Columbus | Jwayyed Law LLC',
  description: 'Ohio landlord-tenant disputes attorney representing landlords and tenants in eviction defense, security deposit claims, habitability issues, and lease disputes under ORC Chapter 5321. Columbus and statewide. Call (614) 285-5482.',
  keywords: ['landlord tenant disputes lawyer Columbus OH', 'landlord tenant attorney Ohio', 'tenant rights lawyer', 'Ohio eviction defense attorney', 'ORC 5321 landlord tenant'],
  openGraph: {
    title: 'Landlord-Tenant Disputes Lawyer Ohio | ORC Chapter 5321 | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/civil/landlord-tenant-disputes',
  },
  alternates: { canonical: '/civil/landlord-tenant-disputes' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Landlord–Tenant Disputes', href: '/civil/landlord-tenant-disputes' },
];

const faqs = [
  {
    question: `What are common landlord-tenant disputes handled under Ohio law?`,
    answer: `Common landlord-tenant disputes in Ohio under ORC Chapter 5321 include security deposit withholding disputes, habitability claims (lack of heat, water, or required repairs), lease violations, retaliatory eviction defenses, landlord entry disputes, illegal lockout claims, and rent withholding situations. Both landlords and tenants have rights and obligations defined by statute — landlords must maintain habitable premises under ORC 5321.04, while tenants must pay rent and maintain the property. An attorney can protect your rights and pursue appropriate remedies on either side of the dispute.`,
  },
  {
    question: `What are tenant rights under Ohio's Landlord-Tenant Act (ORC Chapter 5321)?`,
    answer: `Under ORC Chapter 5321, Ohio tenants have the right to habitable premises including functioning heat, water, and plumbing; the right to reasonable privacy (landlords must give at least 24 hours notice before entry under ORC 5321.04 except in emergencies); the right to receive their security deposit with an itemized statement within 30 days of move-out under ORC 5321.16; protection from retaliatory eviction under ORC 5321.02; and the right to rent escrow or repair-and-deduct remedies when landlords fail to maintain habitable conditions. These protections apply to residential tenancies throughout Ohio.`,
  },
  {
    question: `What is the statute of limitations for landlord-tenant disputes in Ohio?`,
    answer: `Statutes of limitations for Ohio landlord-tenant claims vary by claim type. Breach of a written lease: 6 years under ORC 2305.06. Breach of an oral lease: 4 years under ORC 2305.07 (as amended June 2021). Property damage claims: 4 years under ORC 2305.09. Security deposit disputes under ORC 5321.16: generally 2 years as a civil claim for wrongful withholding. Missing these deadlines can permanently bar recovery. Acting quickly — before evidence is lost and while witnesses are available — is always advisable.`,
  },
  {
    question: `What must Ohio landlords do before evicting a tenant?`,
    answer: `Ohio landlords cannot evict tenants without going through the court process under ORC Chapter 1923. Self-help eviction — changing locks, removing property, shutting off utilities, or otherwise forcing a tenant out without a court order — is illegal and exposes the landlord to liability for damages. Before filing an eviction action, the landlord must provide proper written notice: a 3-day notice for nonpayment of rent, and a notice consistent with the lease or statute for other violations. After proper notice, the landlord files an eviction (forcible entry and detainer) action in the appropriate municipal or county court.`,
  },
  {
    question: `Can a tenant withhold rent for habitability problems in Ohio?`,
    answer: `Yes, with conditions. Under ORC 5321.07, a tenant may deposit rent with the court (rent escrow) or terminate the lease if the landlord has been given written notice of a habitability condition and has failed to remedy it within a reasonable time (not less than 30 days for most conditions). This remedy is not available if the condition was caused by the tenant or their guests. Improper rent withholding — simply stopping payment without following the statutory process — can expose the tenant to eviction. An attorney can advise on the correct procedure to protect your rights.`,
  },
  {
    question: `What damages can a tenant recover for wrongful security deposit withholding?`,
    answer: `Under ORC 5321.16, if a landlord wrongfully withholds a security deposit or fails to provide an itemized statement of deductions within 30 days of the tenant vacating, the tenant may recover the wrongfully withheld amount plus damages in an amount equal to twice the withheld portion, plus reasonable attorney fees. This double-damages remedy incentivizes landlord compliance and can make security deposit disputes worthwhile to litigate even when the deposit amount is relatively small. Our attorney pursues the full statutory remedy on behalf of tenants whose deposits are wrongfully withheld.`,
  },
  {
    question: `What defenses are available against eviction in Ohio Municipal Court?`,
    answer: `Common defenses to eviction in Ohio include: (1) improper or defective notice — the landlord failed to give the correct notice period or method required under ORC Chapter 1923; (2) retaliatory eviction under ORC 5321.02 — the landlord is evicting in response to the tenant complaining about habitability conditions; (3) habitability defenses — the landlord's failure to maintain the property renders the eviction unconscionable; (4) acceptance of rent after the notice was given, which may waive the notice; and (5) payment of all overdue rent. An attorney can evaluate which defenses apply to your specific situation.`,
  },
  {
    question: `Does Jwayyed Law LLC represent both landlords and tenants in Ohio?`,
    answer: `Yes. Jwayyed Law LLC represents both landlords and tenants in Ohio landlord-tenant disputes. For landlords, we handle eviction proceedings under ORC Chapter 1923, security deposit disputes, lease enforcement, and damage claims. For tenants, we defend against eviction, pursue security deposit recovery under ORC 5321.16, assert habitability rights, and challenge illegal landlord conduct. Our attorney brings a thorough understanding of Ohio landlord-tenant law to each representation, regardless of which side of the dispute our client is on.`,
  },
];

export default function LandlordTenantDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Landlord–Tenant Disputes Lawyer"
        description="Representing landlords and tenants in eviction proceedings, security deposit disputes, habitability claims, and lease enforcement under ORC Chapter 5321. Columbus and throughout Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Ohio Landlord-Tenant Disputes Under ORC Chapter 5321
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s Landlord-Tenant Act, codified in <strong>ORC Chapter 5321</strong>, establishes a detailed framework of rights and obligations governing residential tenancies throughout the state. Landlords must maintain habitable premises — functioning heat, water, plumbing, and necessary structural elements — under ORC 5321.04. Tenants must pay rent, maintain the property in a clean and safe condition, and refrain from causing damage beyond normal wear and tear under ORC 5321.05. When either side fails to meet its obligations, disputes arise — and prompt legal action is often necessary to protect your rights. As part of our <Link href="/civil" className="text-[#b87333] underline hover:text-[#a06828]">civil litigation practice</Link>, Jwayyed Law LLC represents both landlords and tenants in Ohio landlord-tenant matters. For more on this topic, read our articles on <Link href="/our-law-firm/blog/landlord-duty-repair-ohio-tenant-rights" className="text-[#b87333] underline hover:text-[#a06828]">Ohio landlord repair duties and tenant rights</Link> and <Link href="/our-law-firm/blog/ohio-landlord-tenant-security-deposit-laws" className="text-[#b87333] underline hover:text-[#a06828]">Ohio security deposit laws</Link>.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Security deposit disputes are among the most common landlord-tenant matters. Under <strong>ORC 5321.16</strong>, landlords must return the security deposit with an itemized statement of deductions within 30 days after the tenant vacates. Failure to comply can expose the landlord to the wrongfully withheld amount plus twice that amount in damages, plus attorney fees — a significant statutory penalty. On the other side, tenants who cause damage beyond normal wear and tear may face claims by the landlord for unpaid rent or excess damage.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Eviction proceedings in Ohio are governed by <strong>ORC Chapter 1923</strong>. Ohio strictly prohibits self-help eviction — a landlord cannot change locks, remove a tenant&apos;s belongings, or shut off utilities to force a tenant out without a court order. Doing so exposes the landlord to significant liability. The statutory eviction process requires proper written notice, filing in the correct court, and service on the tenant. Tenants facing eviction have the right to appear and raise defenses, including improper notice, habitability violations, and retaliatory eviction under <strong>ORC 5321.02</strong>. For more on the eviction process, see our <Link href="/civil/evictions" className="text-[#b87333] underline hover:text-[#a06828]">evictions</Link> page.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The statutes of limitations for landlord-tenant claims vary by claim type. Breach of a written lease is subject to a 6-year limitations period under ORC 2305.06; breach of an oral lease carries a 4-year period under ORC 2305.07 (as amended June 2021); and property damage claims are subject to a 4-year period under ORC 2305.09. Acting quickly after a dispute arises preserves both the legal claims and the underlying evidence.
            </p>

            <LocationsWeServe title="Civil" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Landlord and Tenant Representation: How We Help
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Eviction proceedings (landlords):</strong> Proper notice drafting, filing eviction actions under ORC Chapter 1923, pursuing judgment for possession and back rent.</li>
              <li><strong>Eviction defense (tenants):</strong> Raising habitability defenses, challenging defective notice, asserting retaliatory eviction under ORC 5321.02.</li>
              <li><strong>Security deposit recovery (tenants):</strong> Pursuing the double-damages remedy under ORC 5321.16 for wrongful withholding.</li>
              <li><strong>Habitability claims:</strong> Advising tenants on rent escrow under ORC 5321.07 and proper procedures for withholding rent or terminating a lease.</li>
              <li><strong>Lease review and enforcement:</strong> Reviewing residential leases for enforceability, analyzing rights and obligations, and enforcing lease terms in court.</li>
            </ul>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have a landlord-tenant dispute in Columbus, Cincinnati, Dayton, or anywhere in Ohio, <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">contact Jwayyed Law LLC</Link> at (614) 285-5482. Related practice areas include{' '}
              <Link href="/civil/debt-collection-defense" className="text-[#b87333] underline hover:text-[#a06828]">debt collection defense</Link> and{' '}
              <Link href="/civil/breach-of-contract" className="text-[#b87333] underline hover:text-[#a06828]">breach of contract</Link>.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Related Civil Litigation Services</h3>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/civil/evictions" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Evictions</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Landlord eviction proceedings and tenant eviction defense in Ohio</span>
              </Link>
              <Link href="/civil/real-estate-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Real Estate Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Title disputes, boundary issues, quiet title actions, and property litigation</span>
              </Link>
              <Link href="/civil/breach-of-contract" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Breach of Contract</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Enforce or defend contract obligations and recover damages for broken agreements</span>
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
