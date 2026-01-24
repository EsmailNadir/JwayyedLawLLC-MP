import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Franklin County Municipal Court Attorney | Columbus Lawyer | Jwayyed Law LLC',
  description: 'Experienced legal representation in Franklin County Municipal Court. Skilled representation for misdemeanor cases, OVI/DUI, and traffic violations in Columbus, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Franklin County Municipal Court attorney', 'Columbus Municipal Court lawyer', 'OVI defense Columbus', 'misdemeanor defense Columbus'],
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
    question: 'What types of cases does Franklin County Municipal Court handle?',
    answer: 'Franklin County Municipal Court handles misdemeanor criminal cases, OVI/DUI charges, traffic violations, civil disputes involving amounts up to $15,000, small claims matters, landlord-tenant disputes, and other municipal court matters. The court has multiple locations throughout Franklin County including downtown Columbus.',
  },
  {
    question: 'Where is Franklin County Municipal Court located?',
    answer: 'Franklin County Municipal Court has multiple locations including the main courthouse at 375 S. High Street, Columbus, OH 43215, and branch locations throughout Franklin County. The court handles cases from Columbus and surrounding communities. An attorney can help determine which location handles your case.',
  },
  {
    question: 'What should I expect at a Municipal Court hearing?',
    answer: 'Municipal Court hearings are less formal than Common Pleas Court but still require proper preparation. Hearings may include arraignments, pretrial conferences, motions hearings, and trials. Understanding court procedures, dress codes, and expectations is essential. An attorney can help prepare you for hearings and represent you throughout the process.',
  },
  {
    question: 'Do I need an attorney for Municipal Court matters?',
    answer: 'Municipal Court matters can significantly affect your rights, driving privileges, and future. While you can represent yourself, an experienced attorney can protect your rights, develop defense strategies, negotiate settlements, and achieve better outcomes. Most attorneys provide schedule consultations and work on affordable fee arrangements.',
  },
  {
    question: 'How long do Municipal Court cases take?',
    answer: 'Municipal Court case duration varies depending on case complexity, court schedule, and whether the case goes to trial. Simple traffic violations may resolve quickly, while OVI/DUI and misdemeanor cases may take months. Most cases resolve through negotiations, but preparation and court appearances can take time. An attorney can provide a realistic timeline.',
  },
];

export default function FranklinCountyMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Municipal Court Attorney"
        description="Experienced legal representation in Franklin County Municipal Court. Serving Columbus and throughout Franklin County."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Franklin County Municipal Court Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Municipal Court in Columbus, Ohio, handles misdemeanor criminal cases, OVI/DUI charges, traffic violations, and civil disputes. At Jwayyed Law LLC, we provide experienced representation in Franklin County Municipal Court under Ohio Revised Code. Our attorney understands Municipal Court procedures and can help achieve favorable outcomes.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Franklin County Municipal Court is located at 375 S. High Street, Columbus, OH 43215, with branch locations throughout Franklin County. The court handles cases from Columbus and surrounding communities. Municipal Court proceedings are less formal than Common Pleas Court but still require proper preparation and experienced representation. Understanding court procedures, filing requirements, and judicial preferences is essential for successful representation.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Court Services and Case Types</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Misdemeanor Criminal Cases</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Municipal Court handles all misdemeanor criminal cases including assault, theft, drug possession, domestic violence, and other misdemeanor offenses. Misdemeanor convictions can result in jail time, fines, and permanent criminal records. Experienced representation is essential to protect your rights and achieve favorable outcomes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">OVI/DUI Defense</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Municipal Court handles first and second OVI/DUI charges (misdemeanor OVI). OVI convictions carry severe penalties including jail time, fines, license suspension, and vehicle immobilization. Experienced OVI defense representation is crucial to challenge evidence, develop defenses, and minimize consequences.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Traffic Violations</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Municipal Court handles traffic violations including speeding, reckless driving, driving under suspension, and other traffic offenses. Traffic violations can result in points on your license, fines, and license suspension. An attorney can help challenge violations, negotiate reductions, or minimize consequences.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Civil Disputes</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Municipal Court handles civil disputes involving amounts up to $15,000, including contract disputes, personal injury cases, property damage claims, and other civil matters. Civil cases require understanding of civil procedure, evidence rules, and negotiation strategies.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Landlord-Tenant Matters</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Municipal Court handles eviction proceedings, landlord-tenant disputes, and related matters. Eviction proceedings move quickly and can have immediate devastating effects. Experienced representation is essential to protect tenant rights or handle eviction proceedings for landlords.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How We Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides experienced representation in all types of cases handled by Franklin County Municipal Court:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Misdemeanor Criminal Defense:</strong> Experienced defense representation for all misdemeanor charges including assault, theft, drug possession, domestic violence, and other offenses</li>
              <li><strong>OVI/DUI Defense:</strong> Skilled OVI defense representation including challenging evidence, developing defenses, and minimizing consequences</li>
              <li><strong>Traffic Violation Defense:</strong> Representation for traffic violations including challenging violations, negotiating reductions, and minimizing consequences</li>
              <li><strong>Civil Dispute Resolution:</strong> Representation for civil disputes including contract disputes, personal injury cases, and property damage claims</li>
              <li><strong>Eviction Proceedings:</strong> Representation for eviction proceedings including defending tenants against eviction or handling eviction proceedings for landlords</li>
              <li><strong>Court Procedure:</strong> Understanding of Municipal Court procedures, filing requirements, and judicial preferences</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated representation in Franklin County Municipal Court. We understand that Municipal Court matters can significantly affect your rights, driving privileges, and future. Our attorney works diligently to navigate court procedures, develop strategies, negotiate settlements, and represent clients in court when necessary.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have a matter in Franklin County Municipal Court, contact Jwayyed Law LLC for a schedule consultation. We will review your case, explain court procedures, discuss your options, and develop a strategy tailored to your situation. Understanding court procedures and having experienced representation can significantly impact the outcome of your case.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

