import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'OVI / DUI Lawyer for Dayton, Ohio | Dayton Municipal Court | Montgomery County | Jwayyed Law LLC',
  description: 'OVI/DUI defense attorney for Dayton and Montgomery County, Ohio. Dayton Municipal Court. First OVI, second OVI, and misdemeanor OVI defense. Schedule consultation: (614) 285-5482',
  keywords: ['OVI lawyer Dayton Ohio', 'DUI attorney Montgomery County', 'OVI defense Dayton', 'Dayton Municipal Court OVI'],
  openGraph: {
    title: 'OVI / DUI Lawyer for Dayton, Ohio | Montgomery County | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court',
  },
  alternates: { canonical: '/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
  { label: 'OVI/DUI Defense - Dayton Municipal Court', href: '/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court' },
];

const faqs = [
  {
    question: 'What are the penalties for OVI in Dayton Municipal Court?',
    answer: 'OVI penalties in Dayton Municipal Court under Ohio Revised Code 4511.19 follow state law. First OVI carries 3-180 days jail (minimum 3 days mandatory), fines of $565-$1,075 (HB 37 effective April 2025), and 1 to 3 years license suspension. License reinstatement fee is $315. Subsequent offenses carry enhanced penalties. An experienced attorney can help minimize consequences.',
  },
  {
    question: 'Can I get limited driving privileges in Montgomery County?',
    answer: 'Limited driving privileges may be available in Montgomery County after OVI suspension depending on offense level and circumstances. Limited privileges may require ignition interlock devices. An attorney can help determine eligibility and apply for limited privileges.',
  },
  {
    question: 'How do I appeal an administrative license suspension in Montgomery County?',
    answer: 'To appeal an administrative license suspension in Montgomery County, file an appeal with Dayton Municipal Court within 30 days of arrest. An attorney can help file appeals, request stays of suspension, and protect your driving privileges.',
  },
  {
    question: 'What should I do if I am charged with OVI in Dayton?',
    answer: 'If charged with OVI in Dayton or Montgomery County, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced OVI defense attorney right away. You have only 30 days to appeal an administrative license suspension.',
  },
  {
    question: 'Do I need a local attorney for OVI in Dayton Municipal Court?',
    answer: 'An attorney familiar with Dayton Municipal Court procedures and local prosecutors can provide better representation. Local knowledge can help achieve favorable outcomes.',
  },
];

export default function MontgomeryOVIDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI / DUI Lawyer for Dayton, Ohio"
        description="Dayton Municipal Court. Experienced OVI/DUI defense for Dayton and Montgomery County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">OVI/DUI Defense in Montgomery County, Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI/DUI charges in Montgomery County, particularly in Dayton Municipal Court, require experienced defense representation to protect your rights and minimize consequences. At Jwayyed Law LLC, we provide experienced OVI/DUI defense representation in Montgomery County under Ohio Revised Code 4511.19. Our attorney understands Dayton Municipal Court procedures, local prosecutor practices, and judicial preferences.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Montgomery County includes Dayton (the county seat) and surrounding communities. Dayton Municipal Court serves as the primary court for OVI/DUI cases in the area. Understanding the court&apos;s procedures and local practices is essential for achieving favorable outcomes in OVI cases.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Dayton Municipal Court</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Dayton Municipal Court is located in Dayton, Ohio, and handles misdemeanor OVI/DUI cases in its jurisdiction. The court follows Ohio Revised Code 4511.19 for OVI penalties and procedures. Our attorney has experience representing clients in Dayton Municipal Court and understands how OVI cases are handled in this jurisdiction.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">OVI Penalties and ALS in Montgomery County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI penalties in Montgomery County follow Ohio Revised Code 4511.19. First OVI carries mandatory minimum penalties under HB 37 (effective April 2025): 3 days in jail (or driver intervention program), fines of $565 to $1,075, and license suspension of 1 to 3 years. License reinstatement fee is $315. When arrested for OVI, you also face an administrative license suspension (ALS); you have only 30 days to appeal the ALS in Dayton Municipal Court. Our firm files ALS appeals, requests stays of suspension, and challenges the suspension when appropriate.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing OVI charges in Montgomery County, contact Jwayyed Law LLC immediately to schedule a consultation. Time is critical—you have only 30 days to appeal an administrative license suspension. We will review your case, explain your rights, and develop a strategy tailored to Dayton Municipal Court.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
