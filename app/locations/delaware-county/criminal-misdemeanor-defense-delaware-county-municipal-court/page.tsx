import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Criminal Misdemeanor Defense in Delaware County - Delaware County Municipal Court | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced criminal misdemeanor defense attorney in Delaware County - Delaware County Municipal Court. Skilled representation for misdemeanor charges in Delaware County, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['criminal misdemeanor defense Delaware County', 'misdemeanor attorney Delaware County Municipal Court', 'Delaware County criminal lawyer', 'Delaware County misdemeanor defense'],
  openGraph: {
    title: 'Criminal Misdemeanor Defense in Delaware County - Delaware County Municipal Court | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court',
  },
  alternates: { canonical: '/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Delaware County', href: '/courts/delaware-county' },
  { label: 'Criminal Misdemeanor Defense - Delaware County Municipal Court', href: '/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court' },
];

const faqs = [
  {
    question: 'What are misdemeanor penalties in Delaware County Municipal Court?',
    answer: 'Misdemeanor penalties in Delaware County Municipal Court under Ohio Revised Code depend on offense level: First-degree: up to 180 days jail, $1,000 fine. Second-degree: up to 90 days jail, $750 fine. Third-degree: up to 60 days jail, $500 fine. Fourth-degree: up to 30 days jail, $250 fine. An attorney can help negotiate reduced penalties.',
  },
  {
    question: 'What types of misdemeanor cases does Delaware County Municipal Court handle?',
    answer: 'Delaware County Municipal Court handles various misdemeanor cases including assault, domestic violence, theft, drug possession, disorderly conduct, traffic violations, and other misdemeanor offenses occurring in Delaware County. An attorney can help understand court procedures and develop defense strategies.',
  },
  {
    question: 'Can I get a misdemeanor expunged in Delaware County?',
    answer: 'Yes, many misdemeanors may be eligible for expungement in Delaware County under Ohio Revised Code 2953.31 after completing sentence requirements and waiting periods. Eligibility depends on offense type, prior convictions, and circumstances. An attorney can help determine eligibility and file expungement petitions.',
  },
  {
    question: 'What should I do if I am charged with a misdemeanor in Delaware County?',
    answer: 'If charged with a misdemeanor in Delaware County, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced criminal defense attorney right away. An attorney can protect your rights and develop defense strategies.',
  },
  {
    question: 'Do I need a local attorney for misdemeanor defense in Delaware County?',
    answer: 'While you can hire any Ohio attorney, an attorney familiar with Delaware County Municipal Court procedures and local prosecutors can provide better representation. Local knowledge of court practices can help achieve favorable outcomes.',
  },
];

export default function DelawareCriminalMisdemeanorDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal Misdemeanor Defense in Delaware County - Delaware County Municipal Court"
        description="Experienced legal defense for criminal misdemeanor charges in Delaware County. Protecting your rights in Delaware County Municipal Court."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Criminal Misdemeanor Defense in Delaware County, Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Criminal misdemeanor charges in Delaware County, particularly in Delaware County Municipal Court, require experienced defense representation to protect your rights and minimize consequences. At Jwayyed Law LLC, we provide experienced criminal misdemeanor defense representation in Delaware County under Ohio Revised Code. Our attorney understands Delaware County Municipal Court procedures, local prosecutor practices, and judicial preferences, enabling us to provide effective representation tailored to this specific court.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County includes Delaware (the county seat) and surrounding communities. The Delaware County Municipal Court serves as the primary court for misdemeanor criminal cases occurring throughout Delaware County. Understanding the unique characteristics of this court is essential for achieving favorable outcomes.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Delaware County Municipal Court</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County Municipal Court is located in Delaware, Ohio, and handles all misdemeanor criminal cases occurring in Delaware County. The court follows Ohio Revised Code for misdemeanor penalties and procedures. Our attorney has extensive experience representing clients in Delaware County Municipal Court and understands how misdemeanor cases are handled in this jurisdiction.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Misdemeanor Cases in Delaware County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County Municipal Court handles assault, domestic violence, theft, drug possession, disorderly conduct, and other misdemeanor offenses. Penalties depend on offense degree: first-degree up to 180 days jail and $1,000 fine; second-degree up to 90 days and $750; third-degree up to 60 days and $500; fourth-degree up to 30 days and $250. Experienced defense representation can help negotiate reduced charges, alternative sentencing, or dismissal when appropriate.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Criminal Defense Attorney Can Help in Delaware County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides comprehensive misdemeanor defense representation: case review, motion practice, negotiation with Delaware County prosecutors, trial representation when needed, alternative sentencing advocacy, expungement assistance, and local court knowledge. We work diligently to challenge evidence, develop defense strategies, and achieve favorable outcomes while protecting your rights and future.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing misdemeanor charges in Delaware County, contact Jwayyed Law LLC immediately to schedule a consultation. We will review your case, explain your rights, discuss potential defenses, and develop a strategy tailored to Delaware County Municipal Court procedures.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
