import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'OVI / DUI Lawyer for Fairborn, Ohio | Fairborn Municipal Court | Greene County | Jwayyed Law LLC',
  description: 'OVI/DUI defense attorney for Fairborn and Greene County, Ohio. Fairborn Municipal Court. First OVI, second OVI, and misdemeanor OVI defense. Schedule consultation: (614) 285-5482',
  keywords: ['OVI lawyer Fairborn Ohio', 'DUI attorney Greene County', 'OVI defense Greene County', 'Fairborn Municipal Court OVI'],
  openGraph: {
    title: 'OVI / DUI Lawyer for Fairborn, Ohio | Greene County | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court',
  },
  alternates: { canonical: '/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'OVI/DUI Defense - Fairborn Municipal Court', href: '/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court' },
];

const faqs = [
  {
    question: 'What are the penalties for OVI in Fairborn Municipal Court?',
    answer: 'OVI penalties in Fairborn Municipal Court under Ohio Revised Code 4511.19 follow state law. First OVI carries 3-180 days jail (minimum 3 days mandatory), fines of $565-$1,075 (HB 37 effective April 2025), and 1 to 3 years license suspension. License reinstatement fee is $315. Subsequent offenses carry enhanced penalties. An experienced attorney can help minimize consequences.',
  },
  {
    question: 'Can I get limited driving privileges in Greene County?',
    answer: 'Limited driving privileges may be available in Greene County after OVI suspension depending on offense level and circumstances. Limited privileges may require ignition interlock devices. An attorney can help determine eligibility and apply for limited privileges.',
  },
  {
    question: 'How do I appeal an administrative license suspension in Greene County?',
    answer: 'To appeal an administrative license suspension in Greene County, file an appeal with Fairborn Municipal Court within 30 days of arrest. An attorney can help file appeals, request stays of suspension, and protect your driving privileges.',
  },
  {
    question: 'What should I do if I am charged with OVI in Greene County?',
    answer: 'If charged with OVI in Greene County, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced OVI defense attorney right away. You have only 30 days to appeal an administrative license suspension.',
  },
  {
    question: 'Do I need a local attorney for OVI in Fairborn Municipal Court?',
    answer: 'An attorney familiar with Fairborn Municipal Court procedures and local prosecutors can provide better representation. Local knowledge can help achieve favorable outcomes.',
  },
];

export default function GreeneOVIDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI / DUI Lawyer for Fairborn, Ohio"
        description="Fairborn Municipal Court. Experienced OVI/DUI defense for Fairborn and Greene County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">OVI/DUI Defense in Greene County, Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI/DUI charges in Greene County, particularly in Fairborn Municipal Court, require experienced defense representation to protect your rights and minimize consequences. At Jwayyed Law LLC, we provide experienced OVI/DUI defense representation in Greene County under Ohio Revised Code 4511.19. Our attorney understands Fairborn Municipal Court procedures, local prosecutor practices, and judicial preferences.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Greene County includes Fairborn and surrounding communities. Fairborn Municipal Court serves as the primary court for OVI/DUI cases in the area. Understanding the court&apos;s procedures and local practices is essential for achieving favorable outcomes in OVI cases.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Fairborn Municipal Court</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Fairborn Municipal Court is located in Fairborn, Ohio, and handles misdemeanor OVI/DUI cases in its jurisdiction. The court follows Ohio Revised Code 4511.19 for OVI penalties and procedures. Our attorney has experience representing clients in Fairborn Municipal Court and understands how OVI cases are handled in this jurisdiction.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">OVI Penalties and ALS in Greene County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI penalties in Greene County follow Ohio Revised Code 4511.19. First OVI carries mandatory minimum penalties under HB 37 (effective April 2025): 3 days in jail (or driver intervention program), fines of $565 to $1,075, and license suspension of 1 to 3 years. License reinstatement fee is $315. When arrested for OVI, you also face an administrative license suspension (ALS); you have only 30 days to appeal the ALS in Fairborn Municipal Court. Our firm files ALS appeals, requests stays of suspension, and challenges the suspension when appropriate.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing OVI charges in Greene County, contact Jwayyed Law LLC immediately to schedule a consultation. Time is critical—you have only 30 days to appeal an administrative license suspension. We will review your case, explain your rights, and develop a strategy tailored to Fairborn Municipal Court.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
