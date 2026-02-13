import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Greene County, Ohio | Fairborn & Surrounding Areas | Jwayyed Law LLC',
  description: 'Experienced personal injury attorney serving Greene County, Fairborn, and surrounding Ohio communities. Car accidents, slip and fall, and injury claims. Schedule consultation: (614) 285-5482',
  keywords: ['personal injury Greene County', 'injury lawyer Fairborn Ohio', 'Greene County accident attorney', 'car accident lawyer Greene County'],
  openGraph: {
    title: 'Personal Injury Lawyer in Greene County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/greene-county/personal-injury-greene-county',
  },
  alternates: { canonical: '/locations/greene-county/personal-injury-greene-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'Personal Injury - Greene County', href: '/locations/greene-county/personal-injury-greene-county' },
];

const faqs = [
  {
    question: 'What is the statute of limitations for personal injury in Ohio?',
    answer: 'Under Ohio Revised Code 2305.10, the statute of limitations for personal injury claims in Ohio is generally 2 years from the date of injury. If you were injured in Greene County or elsewhere in Ohio, contact an attorney as soon as possible.',
  },
  {
    question: 'Do you handle car accident cases in Greene County?',
    answer: 'Yes. We represent clients injured in car accidents in Greene County, Fairborn, and surrounding communities. We help with medical bills, lost wages, and pain and suffering claims under Ohio law.',
  },
  {
    question: 'What types of personal injury cases do you handle in Greene County?',
    answer: 'We handle car accidents, truck accidents, slip and fall, premises liability, dog bites, workplace injuries, and other injury cases for clients in Greene County and throughout Ohio. Contact us to discuss your specific situation.',
  },
];

export default function PersonalInjuryGreeneCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal Injury Lawyer in Greene County, Ohio"
        description="Serving Fairborn and surrounding communities. Experienced representation for accident and injury claims."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Personal Injury Representation in Greene County</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If you were injured in Greene County, Fairborn, or surrounding communities due to someone else&apos;s negligence, you may be entitled to compensation. At Jwayyed Law LLC, we provide experienced personal injury representation for clients throughout Greene County and Ohio. Under Ohio Revised Code 2305.10(A), most personal injury claims must be filed within two years from the date the cause of action accrues. Missing the deadline can bar your claim. Our attorney understands Ohio injury law and recovering for medical expenses, lost wages, and pain and suffering.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Greene County includes Fairborn, Xenia (county seat), and other communities. Whether your injury occurred in a car accident, a slip and fall, or another incident, we can help you understand your rights and pursue a claim. We serve clients in Greene County and throughout Ohio.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Injury Cases We Handle</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We represent injury victims in Greene County and Ohio for car accidents, truck accidents, slip and fall, premises liability, dog bites, workplace injuries, wrongful death, and other negligence claims. The statute of limitations is generally 2 years from the date of injury—do not delay in contacting an attorney.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you were injured in Greene County or anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation. We will review your case, explain your rights, and help you pursue the compensation you deserve.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
