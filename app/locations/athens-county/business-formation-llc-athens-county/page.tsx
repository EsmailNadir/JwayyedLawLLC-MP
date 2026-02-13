import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Business & LLC Formation Lawyer in Athens County, Ohio | Athens & Surrounding Areas | Jwayyed Law LLC',
  description: 'Experienced business attorney serving Athens County, Athens, and surrounding Ohio communities. LLC formation, business formation, contracts. Schedule consultation: (614) 285-5482',
  keywords: ['business lawyer Athens County', 'LLC formation Athens Ohio', 'Athens County business attorney', 'business formation Ohio'],
  openGraph: {
    title: 'Business & LLC Formation Lawyer in Athens County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/athens-county/business-formation-llc-athens-county',
  },
  alternates: { canonical: '/locations/athens-county/business-formation-llc-athens-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Athens County', href: '/courts/athens-county' },
  { label: 'Business & LLC Formation - Athens County', href: '/locations/athens-county/business-formation-llc-athens-county' },
];

const faqs = [
  {
    question: 'How do I form an LLC in Ohio?',
    answer: 'LLC formation in Ohio requires filing Articles of Organization with the Ohio Secretary of State. An attorney can help you choose the right structure and complete formation correctly for your Athens County or Ohio business.',
  },
  {
    question: 'Do you help businesses in Athens County?',
    answer: 'Yes. We assist clients in Athens County, Athens, and throughout Ohio with business formation, LLC formation, contracts, and business law matters. Formation is filed with the Ohio Secretary of State.',
  },
];

export default function BusinessFormationLLCAthensCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business & LLC Formation Lawyer in Athens County, Ohio"
        description="Serving Athens and surrounding communities. Business formation, LLC formation, and business law."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Business & LLC Formation in Athens County</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Starting a business in Athens County, Athens, or anywhere in Ohio requires choosing the right structure and filing with the Ohio Secretary of State. At Jwayyed Law LLC, we provide experienced assistance with business formation, LLC formation, and business law for clients throughout Athens County and Ohio. Ohio LLCs are governed by the Ohio Revised Limited Liability Company Act, Ohio Revised Code Chapter 1706 (effective February 2022), which replaced the former Chapter 1705. Chapter 1706 allows series LLCs, flexible management structures, and clearer operating agreement rules; corporations remain under Chapter 1701. Our attorney can help you form your business correctly under current law.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are starting or running a business in Athens County or anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation. We assist with Articles of Organization, operating agreements, statements of authority, and foreign LLC registration when needed.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
