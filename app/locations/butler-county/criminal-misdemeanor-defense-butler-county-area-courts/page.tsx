import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Criminal Misdemeanor Defense in Butler County - Area Courts | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced criminal misdemeanor defense attorney in Butler County - Area Courts and Hamilton Municipal Court. Skilled representation for misdemeanor charges in Butler County, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['criminal misdemeanor defense Butler County', 'misdemeanor attorney Butler County Area Court', 'Butler County criminal lawyer', 'Hamilton Ohio misdemeanor defense'],
  openGraph: {
    title: 'Criminal Misdemeanor Defense in Butler County - Area Courts | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts',
  },
  alternates: { canonical: '/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Butler County', href: '/courts/butler-county' },
  { label: 'Criminal Misdemeanor Defense - Butler County Area Courts', href: '/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts' },
];

const faqs = [
  {
    question: 'What are misdemeanor penalties in Butler County courts?',
    answer: 'Misdemeanor penalties in Butler County Area Courts and Hamilton Municipal Court under Ohio Revised Code depend on offense level: First-degree: up to 180 days jail, $1,000 fine. Second-degree: up to 90 days jail, $750 fine. Third-degree: up to 60 days jail, $500 fine. Fourth-degree: up to 30 days jail, $250 fine. An attorney can help negotiate reduced penalties.',
  },
  {
    question: 'What types of misdemeanor cases do Butler County Area Courts handle?',
    answer: 'Butler County Area Courts (Oxford, Hamilton, West Chester) and Hamilton Municipal Court handle various misdemeanor cases including assault, domestic violence, theft, drug possession, disorderly conduct, and traffic violations. An attorney can help understand court procedures and develop defense strategies.',
  },
  {
    question: 'Can I get a misdemeanor expunged in Butler County?',
    answer: 'Yes, many misdemeanors may be eligible for expungement in Butler County under Ohio Revised Code 2953.31 after completing sentence requirements and waiting periods. An attorney can help determine eligibility and file expungement petitions.',
  },
  {
    question: 'What should I do if I am charged with a misdemeanor in Butler County?',
    answer: 'If charged with a misdemeanor in Butler County, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced criminal defense attorney right away. An attorney can protect your rights and develop defense strategies.',
  },
  {
    question: 'Do I need a local attorney for misdemeanor defense in Butler County?',
    answer: 'An attorney familiar with Butler County Area Courts and Hamilton Municipal Court procedures and local prosecutors can provide better representation. Local knowledge can help achieve favorable outcomes.',
  },
];

export default function ButlerCriminalMisdemeanorDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal Misdemeanor Defense in Butler County - Area Courts"
        description="Experienced legal defense for criminal misdemeanor charges in Butler County. Protecting your rights in Area Courts and Hamilton Municipal Court."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Criminal Misdemeanor Defense in Butler County, Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Criminal misdemeanor charges in Butler County, in the Butler County Area Courts (Oxford, Hamilton, West Chester) or Hamilton Municipal Court, require experienced defense representation to protect your rights and minimize consequences. At Jwayyed Law LLC, we provide experienced criminal misdemeanor defense representation in Butler County under Ohio Revised Code. Our attorney understands court procedures in each jurisdiction, local prosecutor practices, and judicial preferences.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Butler County is served by three Area Courts (I, II, III) in Oxford, Hamilton, and West Chester, plus Hamilton Municipal Court in the city of Hamilton. Each court handles misdemeanor criminal cases within its jurisdiction. We represent clients in all three Area Courts and Hamilton Municipal Court.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Misdemeanor Cases in Butler County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Butler County courts handle assault, domestic violence, theft, drug possession, disorderly conduct, and other misdemeanor offenses. Penalties depend on offense degree: first-degree up to 180 days jail and $1,000 fine; second-degree up to 90 days and $750; third-degree up to 60 days and $500; fourth-degree up to 30 days and $250. Experienced defense representation can help negotiate reduced charges, alternative sentencing, or dismissal when appropriate.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Criminal Defense Attorney Can Help in Butler County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides comprehensive misdemeanor defense representation: case review, motion practice, negotiation with prosecutors, trial representation when needed, alternative sentencing advocacy, expungement assistance, and local court knowledge. We work diligently to challenge evidence, develop defense strategies, and achieve favorable outcomes while protecting your rights and future.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing misdemeanor charges in Butler County, contact Jwayyed Law LLC immediately to schedule a consultation. We will review your case, explain your rights, discuss potential defenses, and develop a strategy tailored to your court.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
