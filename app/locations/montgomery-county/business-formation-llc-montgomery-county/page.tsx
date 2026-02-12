import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Business & LLC Formation Lawyer in Montgomery County, Ohio | Dayton & Surrounding Areas | Jwayyed Law LLC',
  description: 'Experienced business attorney serving Montgomery County, Dayton, and surrounding Ohio communities. LLC formation, business formation, contracts. Schedule consultation: (614) 285-5482',
  keywords: ['business lawyer Montgomery County', 'LLC formation Dayton Ohio', 'Montgomery County business attorney', 'business formation Ohio'],
  openGraph: {
    title: 'Business & LLC Formation Lawyer in Montgomery County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/montgomery-county/business-formation-llc-montgomery-county',
  },
  alternates: { canonical: '/locations/montgomery-county/business-formation-llc-montgomery-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
  { label: 'Business & LLC Formation - Montgomery County', href: '/locations/montgomery-county/business-formation-llc-montgomery-county' },
];

const faqs = [
  {
    question: 'How do I form an LLC in Ohio?',
    answer: 'LLC formation in Ohio requires filing Articles of Organization with the Ohio Secretary of State and paying the filing fee. You should also adopt an operating agreement and obtain an EIN if needed. An attorney can help you choose the right structure and complete formation correctly.',
  },
  {
    question: 'Do you help businesses in Montgomery County and Dayton?',
    answer: 'Yes. We assist clients in Montgomery County, Dayton, and throughout Ohio with business formation, LLC formation, contracts, and business law matters. Business formation is done through the Ohio Secretary of State regardless of where in Ohio you are located.',
  },
  {
    question: 'What is the difference between an LLC and a corporation in Ohio?',
    answer: 'LLCs and corporations both offer liability protection but differ in structure, taxation, and management. LLCs are governed by Ohio Revised Code Chapter 1706; corporations are under Chapter 1701. An attorney can help you choose the best structure for your business.',
  },
];

export default function BusinessFormationLLCMontgomeryCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business & LLC Formation Lawyer in Montgomery County, Ohio"
        description="Serving Dayton and surrounding communities. Business formation, LLC formation, and business law."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Business & LLC Formation in Montgomery County</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Starting a business in Montgomery County, Dayton, or anywhere in Ohio requires choosing the right structure and filing with the Ohio Secretary of State. At Jwayyed Law LLC, we provide experienced assistance with business formation, LLC formation, contracts, and business law for clients throughout Montgomery County and Ohio. Ohio&apos;s LLC law is governed by Ohio Revised Code Chapter 1706 (Revised LLC Act). Our attorney can help you form your business correctly under current law.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Montgomery County includes Dayton (the county seat) and surrounding communities. Whether you are forming a new LLC, corporation, or need contract drafting or business compliance help, we serve clients in this area and throughout Ohio. Business formation is filed with the state. We can also help with operating agreements and foreign LLC registration.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How We Can Help</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We assist with business formation, LLC formation, contract drafting and review, operating agreements, and business compliance. Proper formation protects your personal assets and sets your business up for success. Contact us to discuss your business plans.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are starting or running a business in Montgomery County or anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
