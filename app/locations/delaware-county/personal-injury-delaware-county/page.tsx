import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer in Delaware County, Ohio | Delaware & Surrounding Areas | Jwayyed Law LLC',
  description: 'Experienced personal injury attorney serving Delaware County, Delaware, and surrounding Ohio communities. Car accidents, slip and fall, and injury claims. Schedule consultation: (614) 285-5482',
  keywords: ['personal injury Delaware County', 'injury lawyer Delaware Ohio', 'Delaware County accident attorney', 'car accident lawyer Delaware County'],
  openGraph: {
    title: 'Personal Injury Lawyer in Delaware County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/delaware-county/personal-injury-delaware-county',
  },
  alternates: { canonical: '/locations/delaware-county/personal-injury-delaware-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Delaware County', href: '/courts/delaware-county' },
  { label: 'Personal Injury - Delaware County', href: '/locations/delaware-county/personal-injury-delaware-county' },
];

const faqs = [
  {
    question: 'What is the statute of limitations for personal injury in Ohio?',
    answer: 'Under Ohio Revised Code 2305.10, the statute of limitations for personal injury claims in Ohio is generally 2 years from the date of injury. Missing this deadline can bar your claim. If you were injured in Delaware County or elsewhere in Ohio, contact an attorney as soon as possible.',
  },
  {
    question: 'Do you handle car accident cases in Delaware County?',
    answer: 'Yes. We represent clients injured in car accidents in Delaware County, Delaware, and surrounding communities. We help with medical bills, lost wages, and pain and suffering claims under Ohio law.',
  },
  {
    question: 'What types of personal injury cases do you handle in Delaware County?',
    answer: 'We handle car accidents, truck accidents, slip and fall, premises liability, dog bites, workplace injuries, and other injury cases for clients in Delaware County and throughout Ohio. Contact us to discuss your specific situation.',
  },
];

export default function PersonalInjuryDelawareCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Personal Injury Lawyer in Delaware County, Ohio"
        description="Serving Delaware and surrounding communities. Experienced representation for accident and injury claims."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Personal Injury Representation in Delaware County</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If you were injured in Delaware County, Delaware, or surrounding communities due to someone else&apos;s negligence, you may be entitled to compensation. At Jwayyed Law LLC, we provide experienced personal injury representation for clients throughout Delaware County and Ohio. Under Ohio Revised Code 2305.10(A), most personal injury claims must be filed within two years from the date the cause of action accrues. Missing the deadline can bar your claim. Our attorney understands Ohio injury law, insurance claims, and recovering for medical expenses, lost wages, and pain and suffering.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County includes Delaware (the county seat) and surrounding communities north of Columbus. Whether your injury occurred in a car accident, a slip and fall, or another incident, we can help you understand your rights and pursue a claim. We serve clients in Delaware County and throughout Ohio.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Injury Cases We Handle</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We represent injury victims in Delaware County and Ohio for car accidents, truck accidents, slip and fall, premises liability, dog bites, workplace injuries, wrongful death, and other negligence claims. The statute of limitations is generally 2 years from the date of injury—do not delay in contacting an attorney.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you were injured in Delaware County or anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation. We will review your case, explain your rights, and help you pursue the compensation you deserve.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
