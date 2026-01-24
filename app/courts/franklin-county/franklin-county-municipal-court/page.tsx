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
    url: 'https://www.jjlawohio.com/courts/franklin-county/franklin-county-municipal-court',
  },
  alternates: { canonical: '/courts/franklin-county/franklin-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Franklin County Municipal Court', href: '/courts/franklin-county/franklin-county-municipal-court' },
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
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Court Services</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Misdemeanor criminal defense</li>
                <li>OVI/DUI defense</li>
                <li>Traffic violation defense</li>
                <li>Civil dispute resolution</li>
                <li>Landlord-tenant matters</li>
              </ul>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated representation in Franklin County Municipal Court. We understand that Municipal Court matters can significantly affect your rights and future. Our attorney works diligently to understand court procedures, develop defense strategies, and achieve favorable outcomes for our clients.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

