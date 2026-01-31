import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Expungement & Record Sealing Lawyer in Columbus, OH | Jwayyed Law LLC',
  description: 'Experienced Columbus expungement attorney helping seal criminal records. Skilled representation for record sealing and expungement in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['expungement lawyer Columbus OH', 'record sealing attorney Ohio', 'expungement attorney', 'Franklin County expungement lawyer'],
  openGraph: {
    title: 'Expungement & Record Sealing Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/criminal-defense/expungement-record-sealing',
  },
  alternates: { canonical: '/criminal-defense/expungement-record-sealing' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Expungement / Record Sealing', href: '/criminal-defense/expungement-record-sealing' },
];

const faqs = [
  {
    question: 'What is expungement or record sealing in Ohio?',
    answer: 'Expungement or record sealing under Ohio Revised Code Chapter 2953 involves sealing criminal records from public view. Sealed records are not available to most employers, landlords, or the general public. However, sealed records remain available to law enforcement and certain government agencies. Expungement eligibility depends on offense type, prior record, completion of sentence, and required waiting periods.',
  },
  {
    question: 'Who is eligible for expungement in Ohio?',
    answer: 'Expungement eligibility in Ohio depends on several factors including offense type, prior record, completion of sentence, and required waiting periods. Generally, first-time offenders with certain misdemeanors or low-level felonies may be eligible after waiting periods ranging from one to five years. Certain offenses including violent crimes, sex crimes, or offenses involving minors are generally not eligible for expungement.',
  },
  {
    question: 'What is the waiting period for expungement in Ohio?',
    answer: 'Waiting periods for record sealing in Ohio under ORC 2953.32 (as amended 2025) vary by offense: Minor misdemeanors: 6 months after final discharge. Misdemeanors (all degrees) and fourth/fifth-degree felonies: 1 year after final discharge. Third-degree felonies (one or two convictions): 3 years after final discharge. Expungement requires additional waiting (10 years after sealing eligibility for felonies). All fines and costs must be paid. Certain offenses are ineligible. An attorney can help determine your eligibility.',
  },
  {
    question: 'Can felony records be sealed in Ohio?',
    answer: 'Yes, under Ohio Revised Code 2953.32, certain felony records may be sealed after required waiting periods. Eligibility depends on offense type, prior record, completion of sentence, and absence of additional convictions. First-degree felonies and most violent or sex offenses are generally not eligible for sealing. An attorney can help determine your eligibility and guide you through the process.',
  },
  {
    question: 'What should I do to get my record sealed in Ohio?',
    answer: 'To get your record sealed in Ohio, first determine your eligibility based on offense type, prior record, and waiting periods. Gather documentation of case resolution and payment of all fines and costs. File a motion for expungement in the court where you were convicted. An experienced expungement attorney can help determine eligibility, prepare the motion, and guide you through the process.',
  },
];

export default function ExpungementRecordSealingPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Expungement & Record Sealing Lawyer in Columbus, OH"
        description="Experienced legal assistance with criminal record sealing and expungement. Helping you move forward with a clean record."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Expungement and Record Sealing in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Expungement or record sealing in Columbus or throughout Ohio allows individuals with criminal records to seal their records from public view, improving employment, housing, and education opportunities. At Jwayyed Law LLC, we provide experienced assistance with expungement and record sealing under Ohio Revised Code Chapter 2953. Our attorney understands Ohio expungement laws and can help determine your eligibility and guide you through the process.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Expungement eligibility depends on offense type, prior record, completion of sentence, and required waiting periods ranging from one to five years. Certain offenses including violent crimes, sex crimes, or offenses involving minors are generally not eligible. Sealed records remain available to law enforcement but are not accessible to most employers, landlords, or the general public.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Ohio Record Sealing Waiting Periods (ORC 2953.32)</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">Waiting periods are measured from final discharge (completion of sentence, probation, parole, and all fines/restitution):</p>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Minor misdemeanors: 6 months</li>
                <li>Misdemeanors (all degrees): 1 year</li>
                <li>Fourth and fifth-degree felonies: 1 year</li>
                <li>Third-degree felonies (one or two convictions): 3 years</li>
              </ul>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mt-4">Expungement requires 10 years after sealing eligibility for felonies. Certain offenses including first/second-degree felonies, violent felonies, and sex offenses are ineligible. All fines and costs must be paid before filing.</p>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How an Expungement Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Eligibility Evaluation:</strong> Determine your eligibility for expungement based on offense type, prior record, and waiting periods</li>
              <li><strong>Documentation:</strong> Gather necessary documentation of case resolution and payment of all fines and costs</li>
              <li><strong>Motion Preparation:</strong> Prepare and file the motion for expungement in the appropriate court</li>
              <li><strong>Court Representation:</strong> Represent you at the expungement hearing and address any objections</li>
              <li><strong>Record Updates:</strong> Ensure all agencies are notified of the expungement order</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated expungement and record sealing assistance in Columbus, Franklin County, and throughout Ohio. We understand that criminal records can significantly impact employment, housing, and opportunities. Our attorney works diligently to determine eligibility, prepare expungement motions, and guide you through the process to help you move forward with a clean record.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

