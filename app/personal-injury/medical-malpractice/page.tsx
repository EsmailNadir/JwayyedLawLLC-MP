import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Medical Malpractice Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus medical malpractice attorney helping victims recover compensation. Skilled representation for medical malpractice injuries in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['medical malpractice lawyer Columbus OH', 'medical malpractice attorney Ohio', 'medical negligence lawyer', 'Franklin County medical malpractice attorney'],
  openGraph: {
    title: 'Medical Malpractice Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/medical-malpractice',
  },
  alternates: { canonical: '/personal-injury/medical-malpractice' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Medical Malpractice', href: '/personal-injury/medical-malpractice' },
];

const faqs = [
  {
    question: 'What is medical malpractice in Ohio?',
    answer: 'Medical malpractice under Ohio Revised Code Chapter 2305 involves healthcare providers\' failure to meet the standard of care, resulting in injury or death. Medical malpractice may include misdiagnosis, delayed diagnosis, surgical errors, medication errors, birth injuries, anesthesia errors, and other medical negligence. Proving medical malpractice requires expert testimony establishing that the healthcare provider breached the standard of care.',
  },
  {
    question: 'What is the statute of limitations for medical malpractice in Ohio?',
    answer: 'Under Ohio Revised Code 2305.113, the statute of limitations for medical malpractice claims in Ohio is generally 1 year from when the cause of action accrued (typically discovery of the injury), but no more than 4 years from the date of the act or omission. Written notice to the defendant before the 1-year period expires may extend the filing deadline by 180 days. Exceptions apply for minors and discovery of foreign objects. Missing the deadline bars recovery, making it crucial to act quickly and consult an attorney immediately.',
  },
  {
    question: 'What compensation can I recover from medical malpractice?',
    answer: 'Medical malpractice compensation in Ohio may include economic damages (medical expenses, lost wages, future medical costs, loss of earning capacity), non-economic damages (pain and suffering, emotional distress, loss of enjoyment, loss of consortium), subject to damage caps under Ohio law. Ohio law caps non-economic damages in medical malpractice cases, but economic damages are not capped.',
  },
  {
    question: 'What are damage caps for medical malpractice in Ohio?',
    answer: 'Under Ohio Revised Code 2323.43, non-economic damages (pain and suffering) in medical malpractice cases are capped at the greater of $250,000 or three times the plaintiff\'s economic loss, with a maximum of $350,000 per plaintiff or $500,000 per occurrence. For injuries involving permanent physical deformity, loss of use of a limb, loss of a bodily organ system, or permanent functional injury preventing self-care, the cap increases to $500,000 per plaintiff or $1,000,000 per occurrence. Economic damages are not capped. Caps do not apply to wrongful death (ORC Ch. 2125), Court of Claims cases, or claims against political subdivisions.',
  },
  {
    question: 'Do I need a medical malpractice attorney?',
    answer: 'Medical malpractice cases are complex and require experienced representation. Medical malpractice attorneys understand medical standards of care, can retain medical experts, understand damage caps, handle complex litigation, and maximize compensation within Ohio\'s damage cap limits. Most medical malpractice attorneys work on a contingency fee basis and offer consultations.',
  },
];

export default function MedicalMalpracticePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Medical Malpractice Lawyer in Columbus, OH"
        description="Experienced legal representation for medical malpractice victims seeking compensation. Fighting for the compensation you deserve."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Medical Malpractice Claims in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Medical malpractice in Columbus or throughout Ohio involves healthcare providers\' failure to meet the standard of care, resulting in injury or death. At Jwayyed Law LLC, we provide experienced representation for medical malpractice victims under Ohio Revised Code Chapter 2305. Our attorney understands medical malpractice law, damage caps, and the complex litigation process necessary to help you recover.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Medical Malpractice Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Case Investigation:</strong> Thoroughly investigate medical records, retain medical experts, and analyze standard of care issues</li>
              <li><strong>Expert Testimony:</strong> Retain medical experts to establish breach of standard of care</li>
              <li><strong>Complex Litigation:</strong> Handle complex medical malpractice litigation and maximize compensation within damage caps</li>
              <li><strong>Legal Strategy:</strong> Develop strategies to maximize compensation and protect your rights</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated medical malpractice representation throughout Ohio. We understand that medical malpractice cases are complex and require experienced representation. Our attorney works diligently to investigate cases, retain medical experts, handle complex litigation, and maximize compensation for our clients within Ohio\'s damage cap limits.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

