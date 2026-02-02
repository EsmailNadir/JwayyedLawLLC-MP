import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Franklin County Municipal Court Attorney | Civil & Business Representation | Jwayyed Law LLC',
  description: 'Experienced civil and business representation in Franklin County Municipal Court. Skilled representation for civil disputes, landlord-tenant matters, and evictions in Columbus, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Franklin County Municipal Court attorney', 'Columbus Municipal Court civil lawyer', 'eviction attorney Columbus', 'landlord tenant lawyer Columbus'],
  openGraph: {
    title: 'Franklin County Municipal Court Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/franklin-county-municipal-court',
  },
  alternates: { canonical: '/courts/franklin-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Franklin County Municipal Court', href: '/courts/franklin-county-municipal-court' },
];

const faqs = [
  {
    question: 'What types of cases does your firm handle in Franklin County Municipal Court?',
    answer: 'Our firm handles civil disputes involving amounts up to $15,000, small claims matters, landlord-tenant disputes, eviction proceedings, and other civil matters in Franklin County Municipal Court. Please note that our firm does not handle criminal defense, OVI/DUI, traffic violations, immigration matters, juvenile matters, or probate matters in Franklin County at this time.',
  },
  {
    question: 'Where is Franklin County Municipal Court located?',
    answer: 'Franklin County Municipal Court has multiple locations including the main courthouse at 375 S. High Street, Columbus, OH 43215, and branch locations throughout Franklin County. The court handles cases from Columbus and surrounding communities. An attorney can help determine which location handles your case.',
  },
  {
    question: 'Do I need an attorney for Municipal Court civil matters?',
    answer: 'Municipal Court civil matters can significantly affect your rights and finances. While you can represent yourself, an experienced attorney can protect your rights, develop strategies, negotiate settlements, and achieve better outcomes. Civil disputes, eviction proceedings, and landlord-tenant matters all benefit from experienced legal representation.',
  },
  {
    question: 'How long do Municipal Court civil cases take?',
    answer: 'Municipal Court civil case duration varies depending on case complexity, court schedule, and whether the case goes to trial. Simple disputes may resolve quickly, while contested cases may take months. Most civil cases resolve through negotiations, but preparation and court appearances can take time. An attorney can provide a realistic timeline.',
  },
  {
    question: 'What civil matters can be filed in Municipal Court?',
    answer: 'Franklin County Municipal Court handles civil disputes up to $15,000 including contract disputes, property damage claims, landlord-tenant disputes, eviction proceedings, small claims, and other civil matters. An experienced attorney can help evaluate your case and determine the appropriate court and strategy.',
  },
];

export default function FranklinCountyMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Municipal Court Attorney"
        description="Experienced civil and business representation in Franklin County Municipal Court. Serving Columbus and throughout Franklin County."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Franklin County Municipal Court Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court in Columbus, Ohio, handles a wide range of civil matters including civil disputes, landlord-tenant cases, eviction proceedings, and small claims. At Jwayyed Law LLC, we provide experienced civil and business representation in Franklin County Municipal Court. Our attorney understands Municipal Court procedures and can help achieve favorable outcomes. Please note that our firm does not handle criminal defense, OVI/DUI, traffic violations, immigration matters, juvenile matters, or probate matters in Franklin County at this time.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Franklin County Municipal Court is located at 375 S. High Street, Columbus, OH 43215, with branch locations throughout Franklin County. The court handles cases from Columbus and surrounding communities. Municipal Court proceedings require proper preparation and experienced representation. Understanding court procedures, filing requirements, and judicial preferences is essential for successful representation.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Our Services in Franklin County Municipal Court</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Civil Disputes</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Municipal Court handles civil disputes involving amounts up to $15,000, including contract disputes, personal injury cases, property damage claims, and other civil matters. Civil cases require understanding of civil procedure, evidence rules, and negotiation strategies to protect your interests.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Landlord-Tenant Matters</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Municipal Court handles eviction proceedings, landlord-tenant disputes, and related matters. Eviction proceedings move quickly and can have immediate devastating effects. Experienced representation is essential to protect tenant rights or handle eviction proceedings for landlords.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Small Claims</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Small claims court provides a simplified process for resolving disputes involving smaller amounts. An attorney can help you navigate the process, prepare your case, and present your arguments effectively to achieve the best possible outcome.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Business-Related Civil Matters</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Municipal Court handles business-related civil matters including contract disputes, business debt collection, and other commercial litigation within the court&apos;s jurisdiction. Experienced representation helps protect your business interests and achieve favorable resolutions.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How We Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides experienced civil and business representation in Franklin County Municipal Court:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Civil Dispute Resolution:</strong> Representation for civil disputes including contract disputes, personal injury cases, and property damage claims</li>
              <li><strong>Eviction Proceedings:</strong> Representation for eviction proceedings including defending tenants against eviction or handling eviction proceedings for landlords</li>
              <li><strong>Landlord-Tenant Disputes:</strong> Skilled representation for lease disputes, security deposit matters, habitability issues, and other landlord-tenant matters</li>
              <li><strong>Small Claims:</strong> Assistance with small claims matters including case preparation and court representation</li>
              <li><strong>Business Civil Matters:</strong> Representation for business-related civil disputes within Municipal Court jurisdiction</li>
              <li><strong>Court Procedure:</strong> Understanding of Municipal Court procedures, filing requirements, and judicial preferences</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated civil and business representation in Franklin County Municipal Court. We understand that civil disputes can significantly affect your rights and finances. Our attorney works diligently to navigate court procedures, develop strategies, negotiate settlements, and represent clients in court when necessary.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have a civil or business matter in Franklin County Municipal Court, contact Jwayyed Law LLC to schedule a consultation. We will review your case, explain court procedures, discuss your options, and develop a strategy tailored to your situation. Understanding court procedures and having experienced representation can significantly impact the outcome of your case.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

