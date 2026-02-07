import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Landlord-Tenant Disputes Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus landlord-tenant disputes attorney protecting your rights. Skilled representation for landlord-tenant matters in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['landlord tenant disputes lawyer Columbus OH', 'landlord tenant attorney Ohio', 'tenant rights lawyer', 'Franklin County landlord tenant attorney'],
  openGraph: {
    title: 'Landlord-Tenant Disputes Lawyer in Columbus, OH | Jwayyed Law LLC',
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
    question: 'What are common landlord-tenant disputes in Ohio?',
    answer: 'Common landlord-tenant disputes in Ohio under Ohio Revised Code Chapter 5321 may include security deposit disputes, rent disputes, lease violations, habitability issues (lack of heat, water, repairs), property damage disputes, eviction proceedings, tenant rights violations, landlord entry disputes, and lease termination disputes. Landlord-tenant disputes require understanding of Ohio landlord-tenant law.',
  },
  {
    question: 'What are tenant rights in Ohio?',
    answer: 'Tenant rights in Ohio under ORC Chapter 5321 include the right to habitable premises (heat, water, repairs), the right to privacy (notice before entry), the right to withhold rent for habitability violations, the right to security deposit return, protection from retaliatory eviction, and protection from illegal lockouts. Tenants also have obligations including paying rent, maintaining premises, and not causing damage.',
  },
  {
    question: 'What is the statute of limitations for landlord-tenant disputes?',
    answer: 'Statute of limitations for landlord-tenant disputes in Ohio vary by claim type: Breach of lease: 6 years for written leases, 4 years for oral leases (ORC 2305.06, 2305.07 as amended June 2021). Property damage: 4 years (ORC 2305.09). Security deposit disputes: Generally 2 years. Missing deadlines may bar recovery, so it is crucial to act quickly and consult an attorney immediately.',
  },
  {
    question: 'Do I need a landlord-tenant attorney?',
    answer: 'Landlord-tenant disputes can be complex and require experienced representation. Landlord-tenant attorneys understand Ohio landlord-tenant law, can protect tenant rights, handle eviction proceedings, negotiate disputes, and represent you in court if necessary. Most attorneys work on hourly fee arrangements and offer consultations.',
  },
  {
    question: 'Can landlords evict tenants without court proceedings?',
    answer: 'No, landlords cannot evict tenants without court proceedings in Ohio under ORC Chapter 1923. Self-help eviction (changing locks, removing property, cutting utilities) is illegal and may result in landlord liability for damages. Eviction requires filing an eviction action in court and obtaining a court order. An attorney can help protect tenant rights and defend against illegal eviction.',
  },
];

export default function LandlordTenantDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Landlord–Tenant Disputes Lawyer in Columbus, OH"
        description="Experienced legal representation for landlord-tenant disputes. Protecting your rights whether you are a landlord or tenant."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Landlord-Tenant Disputes in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Landlord-tenant disputes in Columbus or throughout Ohio can involve security deposits, rent, habitability issues, eviction proceedings, and other complex landlord-tenant law matters. At Jwayyed Law LLC, we provide experienced representation for landlord-tenant disputes under Ohio Revised Code Chapter 5321. Our attorney understands Ohio landlord-tenant law and can protect your rights whether you are a landlord or tenant.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio landlord-tenant law establishes rights and obligations for both landlords and tenants. Tenants have rights including habitable premises, privacy, security deposit return, and protection from retaliatory eviction. Landlords have rights including rent payment, property maintenance, and eviction for valid reasons. Understanding these rights and obligations is essential for resolving disputes and protecting your interests. Early intervention by a skilled landlord-tenant attorney can significantly impact the outcome, ensuring proper documentation, negotiation, and protection of your rights.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The statute of limitations for landlord-tenant disputes in Ohio varies by claim type: breach of lease (6 years for written leases, 4 years for oral leases under ORC 2305.06, 2305.07 as amended June 2021), property damage (4 years), and security deposit disputes (generally 2 years). Missing deadlines may bar recovery, making it crucial to act quickly. An experienced attorney can help identify applicable deadlines, preserve your rights, and resolve disputes efficiently.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Common Landlord-Tenant Disputes</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Security Deposit Disputes</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Security deposit disputes often arise when landlords withhold deposits for damages, cleaning, or unpaid rent. Under Ohio Revised Code 5321.16, landlords must return security deposits within 30 days of lease termination or provide an itemized list of deductions. Tenants can challenge improper deductions, and landlords can seek damages for property damage beyond normal wear and tear.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Habitability Issues</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Landlords must maintain habitable premises including heat, water, electricity, and necessary repairs. Under Ohio Revised Code 5321.04, tenants can withhold rent for habitability violations, make repairs and deduct costs, or terminate leases. Landlords must address habitability issues promptly or face liability for damages.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Rent Disputes</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Rent disputes may involve nonpayment, late fees, rent increases, or lease violations. Landlords can seek eviction for nonpayment, while tenants can challenge improper rent increases or lease violations. Understanding lease terms, rent payment obligations, and legal requirements is essential for resolving rent disputes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Eviction Proceedings</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Eviction proceedings require landlords to follow strict legal procedures under Ohio Revised Code Chapter 1923. Tenants can defend against eviction by raising defenses including lack of proper notice, habitability violations, retaliatory eviction, or payment of rent. An attorney can help protect tenant rights or handle eviction proceedings for landlords.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Landlord-Tenant Disputes Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced landlord-tenant disputes attorney provides comprehensive representation for both landlords and tenants:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Rights Protection:</strong> Protect tenant rights including habitability, privacy, security deposits, and protection from retaliatory eviction, or protect landlord rights including rent payment, property maintenance, and eviction for valid reasons</li>
              <li><strong>Eviction Defense:</strong> Defend tenants against eviction proceedings, raise defenses including lack of proper notice, habitability violations, or retaliatory eviction, and protect tenant rights throughout the process</li>
              <li><strong>Eviction Proceedings:</strong> Handle eviction proceedings for landlords following proper procedures, file eviction actions, and represent landlords in court</li>
              <li><strong>Dispute Resolution:</strong> Negotiate disputes including security deposits, habitability issues, rent disputes, and lease violations to work toward resolution without litigation</li>
              <li><strong>Documentation and Evidence:</strong> Prepare documentation, gather evidence, and build cases to support your position in disputes</li>
              <li><strong>Court Representation:</strong> Represent you in court if necessary to protect your rights, present evidence, and advocate for favorable outcomes</li>
              <li><strong>Lease Review:</strong> Review leases to identify rights, obligations, and potential issues, and draft or negotiate lease terms</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated landlord-tenant disputes representation throughout Ohio. We understand that landlord-tenant disputes can affect your housing and rights. Our attorney works diligently to protect your rights, resolve disputes, and achieve favorable outcomes whether you are a landlord or tenant.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough understanding of Ohio landlord-tenant law, strategic dispute resolution, and aggressive advocacy when necessary. We understand the local court systems, judicial preferences, and common issues in landlord-tenant disputes. This knowledge allows us to develop effective strategies tailored to your specific situation and protect your interests. We work closely with clients to understand their goals, explain legal options, and make informed decisions about dispute resolution strategies.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are involved in a landlord-tenant dispute in Columbus or anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation. We will review your case, explain your rights, discuss potential solutions, and develop a strategy tailored to your situation. Time is critical in landlord-tenant disputes—statutes of limitations must be met, evidence must be preserved, and early intervention can often prevent disputes from escalating. Do not delay in seeking experienced legal representation to protect your rights and interests.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

