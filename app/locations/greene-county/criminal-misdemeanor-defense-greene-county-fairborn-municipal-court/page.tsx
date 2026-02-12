import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Criminal Misdemeanor Defense in Greene County - Fairborn Municipal Court | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced criminal misdemeanor defense attorney in Greene County - Fairborn Municipal Court. Skilled representation for misdemeanor charges in Greene County, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['criminal misdemeanor defense Greene County', 'misdemeanor attorney Fairborn Municipal Court', 'Greene County criminal lawyer', 'Fairborn Ohio misdemeanor defense'],
  openGraph: {
    title: 'Criminal Misdemeanor Defense in Greene County - Fairborn Municipal Court | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court',
  },
  alternates: { canonical: '/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'Criminal Misdemeanor Defense - Fairborn Municipal Court', href: '/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court' },
];

const faqs = [
  {
    question: 'What are misdemeanor penalties in Fairborn Municipal Court?',
    answer: 'Misdemeanor penalties in Fairborn Municipal Court under Ohio Revised Code depend on offense level: First-degree: up to 180 days jail, $1,000 fine. Second-degree: up to 90 days jail, $750 fine. Third-degree: up to 60 days jail, $500 fine. Fourth-degree: up to 30 days jail, $250 fine. An attorney can help negotiate reduced penalties.',
  },
  {
    question: 'What types of misdemeanor cases does Fairborn Municipal Court handle?',
    answer: 'Fairborn Municipal Court handles various misdemeanor cases including assault, domestic violence, theft, drug possession, disorderly conduct, and traffic violations occurring in its jurisdiction. An attorney can help understand court procedures and develop defense strategies.',
  },
  {
    question: 'Can I get a misdemeanor expunged in Greene County?',
    answer: 'Yes, many misdemeanors may be eligible for expungement in Greene County under Ohio Revised Code 2953.31 after completing sentence requirements and waiting periods. An attorney can help determine eligibility and file expungement petitions.',
  },
  {
    question: 'What should I do if I am charged with a misdemeanor in Greene County?',
    answer: 'If charged with a misdemeanor in Greene County, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced criminal defense attorney right away. An attorney can protect your rights and develop defense strategies.',
  },
  {
    question: 'Do I need a local attorney for misdemeanor defense in Fairborn Municipal Court?',
    answer: 'An attorney familiar with Fairborn Municipal Court procedures and local prosecutors can provide better representation. Local knowledge can help achieve favorable outcomes.',
  },
];

export default function GreeneCriminalMisdemeanorDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal Misdemeanor Defense in Greene County - Fairborn Municipal Court"
        description="Experienced legal defense for criminal misdemeanor charges in Greene County. Protecting your rights in Fairborn Municipal Court."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Criminal Misdemeanor Defense in Greene County, Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Criminal misdemeanor charges in Greene County, particularly in Fairborn Municipal Court, require experienced defense representation to protect your rights and minimize consequences. At Jwayyed Law LLC, we provide experienced criminal misdemeanor defense representation in Greene County under Ohio Revised Code. Our attorney understands Fairborn Municipal Court procedures, local prosecutor practices, and judicial preferences.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Greene County includes Fairborn and surrounding communities. Fairborn Municipal Court serves as the primary court for misdemeanor criminal cases in the area. Understanding the court&apos;s procedures is essential for achieving favorable outcomes.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Fairborn Municipal Court</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Fairborn Municipal Court is located in Fairborn, Ohio, and handles misdemeanor criminal cases in its jurisdiction. The court follows Ohio Revised Code for misdemeanor penalties and procedures. Our attorney has experience representing clients in Fairborn Municipal Court and understands how misdemeanor cases are handled in this jurisdiction.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Misdemeanor Cases and Penalties</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Fairborn Municipal Court handles assault, domestic violence, theft, drug possession, disorderly conduct, and other misdemeanor offenses. Penalties depend on offense degree: first-degree up to 180 days jail and $1,000 fine; second-degree up to 90 days and $750; third-degree up to 60 days and $500; fourth-degree up to 30 days and $250. Experienced defense representation can help negotiate reduced charges, alternative sentencing, or dismissal when appropriate.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing misdemeanor charges in Greene County, contact Jwayyed Law LLC immediately to schedule a consultation. We will review your case, explain your rights, discuss potential defenses, and develop a strategy tailored to Fairborn Municipal Court.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
