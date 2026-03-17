import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Case Results | Jwayyed Law LLC | Columbus, Ohio',
  description: 'Review our track record of successful outcomes for clients in criminal defense, OVI/DUI defense, personal injury, and civil matters throughout Ohio.',
  keywords: ['law firm case results', 'attorney success rate', 'Ohio law firm results'],
  openGraph: {
    title: 'Case Results | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/our-law-firm/case-results',
  },
  alternates: { canonical: '/our-law-firm/case-results' },
};

const breadcrumbItems = [
  { label: 'Our Law Firm', href: '/our-law-firm' },
  { label: 'Case Results', href: '/our-law-firm/case-results' },
];

const caseExamples = [
  {
    area: 'OVI/DUI Defense',
    title: 'First-Time OVI: Charges Reduced to Reckless Operation',
    summary: 'Client was stopped for a lane violation and arrested for OVI with BAC 0.12%. We challenged the legality of the traffic stop and identified issues with the breath test administration. Result: charges reduced to reckless operation. Client avoided OVI conviction, kept license with limited privileges, and avoided mandatory DIP program.',
    href: '/ovi-dui-defense/first-ovi',
  },
  {
    area: 'OVI/DUI Defense',
    title: 'ALS Appeal Won—License Reinstated',
    summary: 'Client refused the chemical test after arrest. We filed a timely ALS appeal and at the hearing, cross-examination revealed procedural gaps in the arrest documentation. Result: ALS reversed. Client retained driving privileges while the criminal case proceeded.',
    href: '/ovi-dui-defense',
  },
  {
    area: 'Criminal Defense',
    title: 'Assault Charges Dismissed After Self-Defense Evidence',
    summary: 'Client was charged with assault following a physical altercation. We gathered witness statements and surveillance footage showing the other party was the aggressor. Result: charges dismissed after presenting self-defense evidence to the prosecutor.',
    href: '/criminal-defense/assault-charges',
  },
  {
    area: 'Personal Injury',
    title: 'Rear-End Collision: Full Recovery for Client',
    summary: 'Client suffered neck and back injuries in a rear-end collision. The at-fault driver\'s insurer initially offered a low settlement. We documented medical treatment, lost wages, and ongoing limitations. Result: settlement covering medical bills, lost wages, and pain and suffering.',
    href: '/personal-injury/car-accidents',
  },
  {
    area: 'Personal Injury',
    title: 'Slip and Fall at Retail Store',
    summary: 'Client fell on a wet floor in a store with no warning signs. We established that the store had notice of the condition and failed to warn. Result: settlement for medical expenses and pain and suffering.',
    href: '/personal-injury/slip-and-fall',
  },
  {
    area: 'Civil / Landlord-Tenant',
    title: 'Tenant Recovers for Uninhabitable Conditions',
    summary: 'Client\'s landlord failed to provide heat and repair water damage. We helped document the violations and properly withhold rent under Ohio law. Result: negotiated release from lease with returned security deposit and compensation for displacement.',
    href: '/civil/landlord-tenant-disputes',
  },
];

export default function CaseResultsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Case Results"
        description="Successful outcomes for clients throughout Columbus and Ohio in criminal defense, OVI/DUI defense, personal injury, and civil matters. Past results do not guarantee future outcomes."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              While every case is unique and results depend on specific facts and circumstances, our track record demonstrates our commitment to aggressive advocacy. Below are anonymized examples of outcomes we have achieved for clients in <Link href="/criminal-defense">criminal defense</Link>, <Link href="/ovi-dui-defense">OVI/DUI defense</Link>, <Link href="/personal-injury">personal injury</Link>, and civil matters.
            </p>

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-12 mb-6">Representative Case Outcomes</h2>
            <div className="space-y-8">
              {caseExamples.map((c) => (
                <div key={c.title} className="border-l-4 border-[#b87333] pl-6 py-2">
                  <span className="text-sm font-semibold text-[#b87333] uppercase tracking-wider">{c.area}</span>
                  <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mt-2 mb-2">{c.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">{c.summary}</p>
                  <Link href={c.href} className="text-[#b87333] font-semibold hover:underline">Learn more about {c.area.toLowerCase()} →</Link>
                </div>
              ))}
            </div>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mt-12 leading-relaxed">
              If you are facing charges or need representation, <Link href="/contact">contact us</Link> for a free consultation. We will review your case and discuss your options.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

