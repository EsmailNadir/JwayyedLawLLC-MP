import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Athens County, Ohio | Athens & Surrounding Areas | Jwayyed Law LLC',
  description: 'Experienced personal injury attorney serving Athens County, Athens, and surrounding Ohio communities. Car accidents, slip and fall, and injury claims. Schedule consultation: (614) 285-5482',
  keywords: ['personal injury Athens County', 'injury lawyer Athens Ohio', 'Athens County accident attorney', 'car accident lawyer Athens County'],
  openGraph: {
    title: 'Personal Injury Lawyer in Athens County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/athens-county/personal-injury-athens-county',
  },
  alternates: { canonical: '/locations/athens-county/personal-injury-athens-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Athens County', href: '/courts/athens-county' },
  { label: 'Personal Injury - Athens County', href: '/locations/athens-county/personal-injury-athens-county' },
];

const faqs = [
  {
    question: 'What is the statute of limitations for personal injury in Ohio?',
    answer: 'Under Ohio Revised Code 2305.10, the statute of limitations for personal injury claims in Ohio is generally 2 years from the date of injury. If you were injured in Athens County or elsewhere in Ohio, contact an attorney as soon as possible.',
  },
  {
    question: 'Do you handle car accident cases in Athens County?',
    answer: 'Yes. We represent clients injured in car accidents in Athens County, Athens, and surrounding communities. We help with medical bills, lost wages, and pain and suffering claims under Ohio law.',
  },
];

export default function PersonalInjuryAthensCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal Injury Lawyer in Athens County, Ohio"
        description="Serving Athens and surrounding communities. Experienced representation for accident and injury claims."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Personal Injury Representation in Athens County</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If you were injured in Athens County, Athens, or surrounding communities due to someone else&apos;s negligence, you may be entitled to compensation. At Jwayyed Law LLC, we provide experienced personal injury representation for clients throughout Athens County and Ohio. Under Ohio Revised Code 2305.10(A), most personal injury claims—including car accidents, slip and fall, and other negligence cases—must be filed within two years from the date the cause of action accrues (generally the date of injury). Medical malpractice has a one-year statute of limitations with a four-year statute of repose. Missing the deadline can bar your claim. Our attorney understands Ohio injury law and recovery for medical expenses, lost wages, and pain and suffering under ORC Chapters 2305 and 2315.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We handle car accidents, slip and fall, premises liability, dog bites, workplace injuries, wrongful death, and other injury cases in Athens County and throughout Ohio. Contact us to discuss your case.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you were injured in Athens County or anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
