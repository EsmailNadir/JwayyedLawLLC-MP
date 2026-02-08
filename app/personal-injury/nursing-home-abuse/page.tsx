import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Nursing Home Abuse Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio nursing home abuse attorney helping victims recover compensation. Skilled representation for nursing home abuse and neglect in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['nursing home abuse lawyer Columbus OH', 'nursing home abuse attorney Ohio', 'elder abuse lawyer', 'Franklin County nursing home abuse attorney'],
  openGraph: {
    title: 'Nursing Home Abuse Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/nursing-home-abuse',
  },
  alternates: { canonical: '/personal-injury/nursing-home-abuse' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Nursing Home Abuse', href: '/personal-injury/nursing-home-abuse' },
];

const faqs = [
  {
    question: 'What constitutes nursing home abuse in Ohio?',
    answer: 'Nursing home abuse in Ohio under Ohio Revised Code Chapter 3721 involves physical abuse, emotional abuse, sexual abuse, financial exploitation, neglect, abandonment, and other harm to nursing home residents. Nursing home facilities and staff have a duty to provide adequate care and protect residents from harm. Abuse and neglect may include failure to provide medical care, medication errors, bed sores, malnutrition, dehydration, and other forms of harm.',
  },
  {
    question: 'What compensation can I recover from nursing home abuse?',
    answer: 'Nursing home abuse compensation in Ohio may include economic damages (medical expenses, future medical costs, loss of earning capacity), non-economic damages (pain and suffering, emotional distress, loss of enjoyment), and potentially punitive damages for egregious conduct. Nursing home abuse cases often involve substantial compensation due to vulnerability of residents and severity of injuries.',
  },
  {
    question: 'What should I do if I suspect nursing home abuse?',
    answer: 'If you suspect nursing home abuse, document signs of abuse including photos of injuries, medical records, incident reports, and witness statements. Report abuse to the Ohio Department of Health and local law enforcement. Remove the resident from the facility if necessary for safety. Contact a nursing home abuse attorney immediately to protect the resident\'s rights and seek compensation.',
  },
  {
    question: 'What is the statute of limitations for nursing home abuse claims?',
    answer: 'Under Ohio Revised Code 2305.10, the statute of limitations for nursing home abuse personal injury claims in Ohio is generally 2 years from the date of injury. Claims involving medical diagnosis, care, or treatment may be subject to the medical malpractice statute of limitations (ORC 2305.113: 1 year from accrual, 4-year repose). Exceptions may apply for discovery of abuse. Missing the deadline bars recovery, so it is crucial to act quickly and consult an attorney immediately.',
  },
  {
    question: 'Do I need a nursing home abuse attorney?',
    answer: 'Nursing home abuse cases are complex and require experienced representation. Nursing home abuse attorneys understand nursing home regulations, can investigate facilities and staff, handle complex litigation, and maximize compensation for vulnerable residents. Most attorneys work on a contingency fee basis and offer consultations.',
  },
];

export default function NursingHomeAbusePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Nursing Home Abuse Lawyer"
        description="Experienced legal representation for nursing home abuse victims seeking compensation. Fighting for the rights of vulnerable residents."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Nursing Home Abuse Claims in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Nursing home abuse in Columbus, Cincinnati, Dayton, or throughout Ohio involves physical abuse, emotional abuse, sexual abuse, financial exploitation, neglect, and abandonment of vulnerable nursing home residents. At Jwayyed Law LLC, we provide experienced representation for nursing home abuse victims under Ohio Revised Code Chapter 3721. Our attorney understands nursing home regulations and the compensation process necessary to help residents recover and hold facilities accountable.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Nursing Home Abuse Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Case Investigation:</strong> Thoroughly investigate facilities, staff, medical records, and identify abuse and neglect</li>
              <li><strong>Regulatory Investigation:</strong> Investigate nursing home regulations and violations</li>
              <li><strong>Legal Strategy:</strong> Develop strategies to hold facilities accountable and maximize compensation</li>
              <li><strong>Protection:</strong> Work to protect vulnerable residents and prevent future abuse</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated nursing home abuse representation throughout Ohio. We understand that nursing home residents are vulnerable and deserve protection. Our attorney works diligently to investigate cases, hold facilities accountable, and maximize compensation for victims and their families while working to prevent future abuse.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

