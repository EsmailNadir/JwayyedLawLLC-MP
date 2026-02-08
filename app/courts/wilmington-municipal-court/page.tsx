import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Wilmington Municipal Court Attorney | Clinton County Lawyer | Jwayyed Law LLC',
  description: 'Experienced legal representation in Wilmington Municipal Court. Skilled representation for misdemeanor cases, OVI/DUI, and traffic violations in Clinton County, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Wilmington Municipal Court attorney', 'Clinton County OVI lawyer', 'Wilmington misdemeanor defense'],
  openGraph: {
    title: 'Wilmington Municipal Court Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/wilmington-municipal-court',
  },
  alternates: { canonical: '/courts/wilmington-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Clinton County', href: '/courts/clinton-county' },
  { label: 'Wilmington Municipal Court', href: '/courts/wilmington-municipal-court' },
];

const faqs = [
  {
    question: 'What types of cases does Wilmington Municipal Court handle?',
    answer: 'Wilmington Municipal Court handles misdemeanor criminal cases, OVI/DUI charges, traffic violations, civil disputes involving amounts up to $15,000, small claims matters, and landlord-tenant disputes occurring in Clinton County. The court follows Ohio Revised Code for procedures and penalties. Please note that our firm does not handle immigration matters, juvenile matters, probate matters, or felony cases in this court.',
  },
  {
    question: 'Where is Wilmington Municipal Court located?',
    answer: 'Wilmington Municipal Court is located in Wilmington, Ohio, the county seat of Clinton County. The court handles all misdemeanor cases, OVI/DUI charges, and traffic violations occurring in Clinton County. An attorney familiar with the court can help navigate procedures and achieve favorable outcomes.',
  },
  {
    question: 'Do I need an attorney for Municipal Court matters?',
    answer: 'Municipal Court matters can significantly affect your rights, driving privileges, and future. While you can represent yourself, an experienced attorney can protect your rights, develop defense strategies, negotiate settlements, and achieve better outcomes. Most attorneys offer consultations.',
  },
  {
    question: 'How long do Municipal Court cases take?',
    answer: 'Municipal Court case duration varies depending on case complexity, court schedule, and whether the case goes to trial. Simple traffic violations may resolve quickly, while OVI/DUI and misdemeanor cases may take months. An attorney can provide a realistic timeline.',
  },
  {
    question: 'What should I expect at a Municipal Court hearing?',
    answer: 'Municipal Court hearings are less formal than Common Pleas Court but still require proper preparation. Hearings may include arraignments, pretrial conferences, motions hearings, and trials. Understanding court procedures and expectations is essential. An attorney can help prepare you.',
  },
];

export default function WilmingtonMunicipalCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Wilmington Municipal Court Attorney"
        description="Experienced legal representation in Wilmington Municipal Court. Serving Clinton County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Wilmington Municipal Court Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Wilmington Municipal Court in Wilmington, Ohio, handles misdemeanor criminal cases, OVI/DUI charges, traffic violations, and civil disputes occurring in Clinton County. At Jwayyed Law LLC, we provide experienced representation in Wilmington Municipal Court under Ohio Revised Code. Our attorney understands Municipal Court procedures and can help achieve favorable outcomes. Please note that we do not handle immigration matters, juvenile matters, probate matters, or felony cases in this court.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Wilmington Municipal Court (Clinton County Municipal Court) is located in Wilmington, Ohio, the county seat of Clinton County. It serves all of Clinton County and surrounding communities. Municipal Court proceedings are less formal than Common Pleas Court but still require proper preparation and experienced representation. Understanding court procedures, filing requirements, and judicial preferences is essential for successful representation.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Location &amp; Directions</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-2">
                <strong>Clinton County Municipal Court</strong><br />
                69 N South Street, Wilmington, OH 45177
              </p>
              <p className="text-sm mt-2">
                <a href="https://www.google.com/maps?q=69+N+South+Street,+Wilmington,+OH+45177" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Get directions (Google Maps)</a>
              </p>
            </div>

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
                Municipal Court handles first, second, and third OVI/DUI charges (misdemeanor OVI). Fourth and subsequent OVI offenses are felonies handled in Common Pleas Court. OVI convictions carry severe penalties including jail time, fines, license suspension, and vehicle immobilization. Experienced OVI defense representation is crucial to challenge evidence, develop defenses, and minimize consequences.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Traffic Violations</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Municipal Court handles traffic violations including speeding, reckless driving, driving under suspension, and other traffic offenses. Traffic violations can result in points on your license, fines, and license suspension. An attorney can help challenge violations, negotiate reductions, or minimize consequences.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Civil Disputes</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Municipal Court handles civil disputes involving amounts up to $15,000, including contract disputes, personal injury cases, property damage claims, and other civil matters. Civil cases require understanding of civil procedure, evidence rules, and negotiation strategies.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How We Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides experienced representation in all types of cases handled by Wilmington Municipal Court:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Misdemeanor Criminal Defense:</strong> Experienced defense representation for all misdemeanor charges including assault, theft, drug possession, domestic violence, and other offenses</li>
              <li><strong>OVI/DUI Defense:</strong> Skilled OVI defense representation including challenging evidence, developing defenses, and minimizing consequences</li>
              <li><strong>Traffic Violation Defense:</strong> Representation for traffic violations including challenging violations, negotiating reductions, and minimizing consequences</li>
              <li><strong>Civil Dispute Resolution:</strong> Representation for civil disputes including contract disputes, personal injury cases, and property damage claims</li>
              <li><strong>Court Procedure:</strong> Understanding of Municipal Court procedures, filing requirements, and judicial preferences</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated representation in Wilmington Municipal Court. We understand that Municipal Court matters can significantly affect your rights, driving privileges, and future. Our attorney works diligently to navigate court procedures, develop strategies, negotiate settlements, and represent clients in court when necessary.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have a matter in Wilmington Municipal Court, contact Jwayyed Law LLC to schedule a consultation. We will review your case, explain court procedures, discuss your options, and develop a strategy tailored to your situation. Understanding court procedures and having experienced representation can significantly impact the outcome of your case.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
