import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Criminal Misdemeanor Defense in Montgomery County - Dayton Municipal Court | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced criminal misdemeanor defense attorney in Montgomery County - Dayton Municipal Court. Skilled representation for misdemeanor charges in Montgomery County, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['criminal misdemeanor defense Montgomery County', 'misdemeanor attorney Dayton Municipal Court', 'Montgomery County criminal lawyer', 'Dayton Ohio misdemeanor defense'],
  openGraph: {
    title: 'Criminal Misdemeanor Defense in Montgomery County - Dayton Municipal Court | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court',
  },
  alternates: { canonical: '/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
  { label: 'Criminal Misdemeanor Defense - Dayton Municipal Court', href: '/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court' },
];

const faqs = [
  {
    question: 'What are misdemeanor penalties in Dayton Municipal Court?',
    answer: 'Misdemeanor penalties in Dayton Municipal Court under Ohio Revised Code depend on offense level: First-degree: up to 180 days jail, $1,000 fine. Second-degree: up to 90 days jail, $750 fine. Third-degree: up to 60 days jail, $500 fine. Fourth-degree: up to 30 days jail, $250 fine. An attorney can help negotiate reduced penalties.',
  },
  {
    question: 'What types of misdemeanor cases does Dayton Municipal Court handle?',
    answer: 'Dayton Municipal Court handles various misdemeanor cases including assault, domestic violence, theft, drug possession, disorderly conduct, and traffic violations occurring in its jurisdiction. An attorney can help understand court procedures and develop defense strategies.',
  },
  {
    question: 'Can I get a misdemeanor expunged in Montgomery County?',
    answer: 'Yes, many misdemeanors may be eligible for expungement in Montgomery County under Ohio Revised Code 2953.31 after completing sentence requirements and waiting periods. An attorney can help determine eligibility and file expungement petitions.',
  },
  {
    question: 'What should I do if I am charged with a misdemeanor in Montgomery County?',
    answer: 'If charged with a misdemeanor in Montgomery County, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced criminal defense attorney right away. An attorney can protect your rights and develop defense strategies.',
  },
  {
    question: 'Do I need a local attorney for misdemeanor defense in Dayton Municipal Court?',
    answer: 'An attorney familiar with Dayton Municipal Court procedures and local prosecutors can provide better representation. Local knowledge can help achieve favorable outcomes.',
  },
];

export default function MontgomeryCriminalMisdemeanorDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal Misdemeanor Defense in Montgomery County - Dayton Municipal Court"
        description="Experienced legal defense for criminal misdemeanor charges in Montgomery County. Protecting your rights in Dayton Municipal Court."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Criminal Misdemeanor Defense in Montgomery County, Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Criminal misdemeanor charges in Montgomery County, particularly in Dayton Municipal Court, require experienced defense representation to protect your rights and minimize consequences. At Jwayyed Law LLC, we provide experienced criminal misdemeanor defense representation in Montgomery County under Ohio Revised Code. Our attorney understands Dayton Municipal Court procedures, local prosecutor practices, and judicial preferences.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Montgomery County includes Dayton (the county seat) and surrounding communities. Dayton Municipal Court serves as the primary court for misdemeanor criminal cases in the area. Understanding the court&apos;s procedures is essential for achieving favorable outcomes.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Dayton Municipal Court</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Dayton Municipal Court is located in Dayton, Ohio, and handles misdemeanor criminal cases in its jurisdiction. The court follows Ohio Revised Code for misdemeanor penalties and procedures. Our attorney has experience representing clients in Dayton Municipal Court and understands how misdemeanor cases are handled in this jurisdiction.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Misdemeanor Cases and Penalties</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Dayton Municipal Court handles assault, domestic violence, theft, drug possession, disorderly conduct, and other misdemeanor offenses. Penalties depend on offense degree: first-degree up to 180 days jail and $1,000 fine; second-degree up to 90 days and $750; third-degree up to 60 days and $500; fourth-degree up to 30 days and $250. Experienced defense representation can help negotiate reduced charges, alternative sentencing, or dismissal when appropriate.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing misdemeanor charges in Montgomery County, contact Jwayyed Law LLC immediately to schedule a consultation. We will review your case, explain your rights, discuss potential defenses, and develop a strategy tailored to Dayton Municipal Court.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
