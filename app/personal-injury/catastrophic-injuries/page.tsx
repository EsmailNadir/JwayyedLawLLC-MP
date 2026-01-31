import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Catastrophic Injury Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus catastrophic injury attorney helping victims recover compensation. Skilled representation for catastrophic injuries in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['catastrophic injury lawyer Columbus OH', 'catastrophic injury attorney Ohio', 'spinal cord injury lawyer', 'Franklin County catastrophic injury attorney'],
  openGraph: {
    title: 'Catastrophic Injury Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/catastrophic-injuries',
  },
  alternates: { canonical: '/personal-injury/catastrophic-injuries' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Catastrophic Injuries', href: '/personal-injury/catastrophic-injuries' },
];

const faqs = [
  {
    question: 'What constitutes a catastrophic injury in Ohio?',
    answer: 'Catastrophic injuries in Ohio are severe, permanent injuries that result in long-term or permanent disability including traumatic brain injury, spinal cord injury, paralysis, amputation, severe burns, multiple fractures, organ damage, and other life-altering injuries. Catastrophic injuries often require extensive medical treatment, long-term care, and result in permanent disability requiring substantial compensation.',
  },
  {
    question: 'What compensation can I recover for catastrophic injuries?',
    answer: 'Catastrophic injury compensation in Ohio may include economic damages (medical expenses, future medical costs, lost wages, loss of future earnings, loss of earning capacity, long-term care costs, home modifications, assistive devices), non-economic damages (pain and suffering, emotional distress, loss of enjoyment, loss of consortium), and potentially punitive damages for egregious conduct. Catastrophic injuries often involve substantial compensation due to long-term needs.',
  },
  {
    question: 'What is the statute of limitations for catastrophic injury claims?',
    answer: 'Under Ohio Revised Code 2305.10, the statute of limitations for catastrophic injury personal injury claims in Ohio is generally 2 years from the date of injury. However, exceptions may apply for discovery of injuries or for individuals with disabilities. Missing the deadline bars recovery, so it is crucial to act quickly and consult an attorney immediately.',
  },
  {
    question: 'Do catastrophic injury cases require expert testimony?',
    answer: 'Yes, catastrophic injury cases often require expert testimony from medical professionals, life care planners, economists, and vocational experts to establish injury severity, future medical needs, long-term care costs, loss of earning capacity, and damages. Expert testimony is essential to maximize compensation for catastrophic injuries. An attorney can help retain appropriate experts.',
  },
  {
    question: 'Do I need a catastrophic injury attorney?',
    answer: 'Catastrophic injury cases are complex and require experienced representation. Catastrophic injury attorneys understand catastrophic injuries, can retain experts, handle complex litigation, and maximize compensation for long-term needs. Most attorneys work on a contingency fee basis and offer consultations. Experienced representation is essential to protect your rights and maximize recovery.',
  },
];

export default function CatastrophicInjuriesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Catastrophic Injury Lawyer in Columbus, OH"
        description="Experienced legal representation for catastrophic injury victims seeking compensation. Fighting for the compensation you deserve for your long-term needs."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Catastrophic Injury Claims in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Catastrophic injuries in Columbus or throughout Ohio are severe, permanent injuries that result in long-term or permanent disability requiring extensive medical treatment, long-term care, and substantial compensation. At Jwayyed Law LLC, we provide experienced representation for catastrophic injury victims under Ohio Revised Code Chapter 2305. Our attorney understands catastrophic injuries, long-term needs, and the compensation process necessary to help victims recover.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Catastrophic Injuries</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Traumatic brain injury (TBI)</li>
                <li>Spinal cord injury and paralysis</li>
                <li>Amputation and loss of limbs</li>
                <li>Severe burns and disfigurement</li>
                <li>Multiple fractures and organ damage</li>
                <li>Vision and hearing loss</li>
                <li>Permanent disability</li>
              </ul>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Catastrophic Injury Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Expert Retention:</strong> Retain medical experts, life care planners, and economists to establish long-term needs and damages</li>
              <li><strong>Case Investigation:</strong> Thoroughly investigate the incident and identify all responsible parties</li>
              <li><strong>Compensation Maximization:</strong> Maximize compensation for long-term medical needs, care, and loss of earning capacity</li>
              <li><strong>Complex Litigation:</strong> Handle complex catastrophic injury litigation and maximize recovery</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated catastrophic injury representation in Columbus, Franklin County, and throughout Ohio. We understand that catastrophic injuries are life-altering and require substantial compensation for long-term needs. Our attorney works diligently to investigate cases, retain experts, handle complex litigation, and maximize compensation for victims and their families.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

