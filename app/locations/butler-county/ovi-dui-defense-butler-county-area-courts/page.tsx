import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'OVI / DUI Lawyer for Hamilton, Ohio | Butler County Area Courts | Jwayyed Law LLC',
  description: 'OVI/DUI defense attorney for Hamilton, Oxford, West Chester, and Butler County, Ohio. Butler County Area Courts and Hamilton Municipal Court. Schedule consultation: (614) 285-5482',
  keywords: ['OVI lawyer Hamilton Ohio', 'DUI attorney Butler County', 'OVI defense Butler County', 'Butler County Area Court OVI'],
  openGraph: {
    title: 'OVI / DUI Lawyer for Hamilton, Ohio | Butler County | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/butler-county/ovi-dui-defense-butler-county-area-courts',
  },
  alternates: { canonical: '/locations/butler-county/ovi-dui-defense-butler-county-area-courts' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Butler County', href: '/courts/butler-county' },
  { label: 'OVI/DUI Defense - Butler County Area Courts', href: '/locations/butler-county/ovi-dui-defense-butler-county-area-courts' },
];

const faqs = [
  {
    question: 'What are the penalties for OVI in Butler County courts?',
    answer: 'OVI penalties in Butler County Area Courts and Hamilton Municipal Court under Ohio Revised Code 4511.19 follow state law. First OVI carries 3-180 days jail (minimum 3 days mandatory), fines of $565-$1,075 (HB 37 effective April 2025), and 1 to 3 years license suspension. License reinstatement fee is $315. Subsequent offenses carry enhanced penalties. An experienced attorney can help minimize consequences.',
  },
  {
    question: 'Can I get limited driving privileges in Butler County?',
    answer: 'Limited driving privileges may be available in Butler County after OVI suspension depending on offense level and circumstances. Limited privileges may require ignition interlock devices. An attorney can help determine eligibility and apply for limited privileges.',
  },
  {
    question: 'How do I appeal an administrative license suspension in Butler County?',
    answer: 'To appeal an administrative license suspension in Butler County, file an appeal with the court of jurisdiction (Area Court or Hamilton Municipal Court) within 30 days of arrest. An attorney can help file appeals, request stays of suspension, and protect your driving privileges.',
  },
  {
    question: 'What should I do if I am charged with OVI in Butler County?',
    answer: 'If charged with OVI in Butler County, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced OVI defense attorney right away. You have only 30 days to appeal an administrative license suspension.',
  },
  {
    question: 'Do I need a local attorney for OVI in Butler County?',
    answer: 'An attorney familiar with Butler County Area Courts (Oxford, Hamilton, West Chester) and Hamilton Municipal Court procedures and local prosecutors can provide better representation. Local knowledge can help achieve favorable outcomes.',
  },
];

export default function ButlerOVIDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI / DUI Lawyer for Hamilton, Ohio"
        description="Butler County Area Courts and Hamilton Municipal Court. Experienced OVI/DUI defense for Hamilton, Oxford, West Chester, and Butler County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">OVI/DUI Defense in Butler County, Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI/DUI charges in Butler County, in the Butler County Area Courts (I, II, III) or Hamilton Municipal Court, require experienced defense representation to protect your rights and minimize consequences. At Jwayyed Law LLC, we provide experienced OVI/DUI defense representation in Butler County under Ohio Revised Code 4511.19. Our attorney understands court procedures in Oxford, Hamilton, and West Chester, local prosecutor practices, and judicial preferences.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Butler County is served by three Area Courts (Oxford, Hamilton, West Chester) and Hamilton Municipal Court in the city of Hamilton. Each court handles misdemeanor OVI/DUI cases within its jurisdiction. Understanding which court has your case and its specific procedures is essential for achieving favorable outcomes. We represent clients in all three Area Courts and Hamilton Municipal Court.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">OVI Penalties in Butler County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI penalties in Butler County follow Ohio Revised Code 4511.19 and depend on the offense level. First OVI carries mandatory minimum penalties under HB 37 (effective April 2025): 3 days in jail (or driver intervention program), fines of $565 to $1,075, and license suspension of 1 to 3 years. License reinstatement fee is $315. Second OVI and high-tier OVI carry enhanced penalties. Experienced representation can help negotiate reduced penalties or alternative sentencing.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Administrative License Suspension (ALS) in Butler County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When arrested for OVI in Butler County, you face the criminal OVI case and an administrative license suspension (ALS). You have only 30 days from the date of arrest to appeal the ALS suspension in the court of jurisdiction. Our firm immediately files ALS appeals, requests stays of suspension, and challenges the suspension based on procedural issues or testing procedures.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing OVI charges in Butler County, contact Jwayyed Law LLC immediately to schedule a consultation. Time is critical—you have only 30 days to appeal an administrative license suspension. We will review your case, explain your rights, and develop a strategy tailored to your court.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
