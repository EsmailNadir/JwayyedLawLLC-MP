import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Business & LLC Formation Lawyer in Morrow County, Ohio | Mount Gilead & Surrounding Areas | Jwayyed Law LLC',
  description: 'Experienced business attorney serving Morrow County, Mount Gilead, and surrounding Ohio communities. LLC formation, business formation, contracts. Schedule consultation: (614) 285-5482',
  keywords: ['business lawyer Morrow County', 'LLC formation Mount Gilead Ohio', 'Morrow County business attorney', 'business formation Ohio'],
  openGraph: {
    title: 'Business & LLC Formation Lawyer in Morrow County, Ohio | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/morrow-county/business-formation-llc-morrow-county',
  },
  alternates: { canonical: '/locations/morrow-county/business-formation-llc-morrow-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Morrow County', href: '/courts/morrow-county' },
  { label: 'Business & LLC Formation - Morrow County', href: '/locations/morrow-county/business-formation-llc-morrow-county' },
];

const faqs = [
  {
    question: 'How do I form an LLC in Ohio?',
    answer: 'LLC formation in Ohio requires filing Articles of Organization with the Ohio Secretary of State and paying the filing fee. You should also adopt an operating agreement and obtain an EIN if needed. An attorney can help you choose the right structure and complete formation correctly.',
  },
  {
    question: 'Do you help businesses in Morrow County and Mount Gilead?',
    answer: 'Yes. We assist clients in Morrow County, Mount Gilead, Cardington, and throughout Ohio with business formation, LLC formation, contracts, and business law matters. Business formation is done through the Ohio Secretary of State regardless of where in Ohio you are located.',
  },
  {
    question: 'What is the difference between an LLC and a corporation in Ohio?',
    answer: 'LLCs and corporations both offer liability protection but differ in structure, taxation, and management. LLCs are governed by Ohio Revised Code Chapter 1705 and offer flexibility; corporations are under Chapter 1701. An attorney can help you choose the best structure for your business.',
  },
];

export default function BusinessFormationLLCMorrowCountyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business & LLC Formation Lawyer in Morrow County, Ohio"
        description="Serving Mount Gilead, Cardington, and surrounding communities. Business formation, LLC formation, and business law."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Business & LLC Formation in Morrow County</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Starting a business in Morrow County, Mount Gilead, Cardington, or anywhere in Ohio requires choosing the right structure and filing with the Ohio Secretary of State. At Jwayyed Law LLC, we provide experienced assistance with business formation, LLC formation, contracts, and business law for clients throughout Morrow County and Ohio. Ohio&apos;s LLC law is now governed by the Ohio Revised Limited Liability Company Act, Ohio Revised Code Chapter 1706, which took effect in February 2022 and replaced the former Chapter 1705. Chapter 1706 provides greater flexibility in how LLCs are managed (including corporate-style governance), allows series LLCs so you can separate assets and liability within one entity, and clarifies what can be modified in operating agreements. Corporations remain under Chapter 1701. Our attorney can help you form your business correctly under current law.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Morrow County includes Mount Gilead (county seat), Cardington, Edison, Marengo, and other communities. Whether you are forming a new LLC, corporation, or need contract drafting or business compliance help, we serve clients in this area and throughout Ohio. Business formation is filed with the state, so we can assist you regardless of your location in Ohio. We can also help with statements of authority (which define who may bind the LLC), operating agreements, and foreign LLC registration if you are bringing an out-of-state LLC into Ohio.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How We Can Help</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We assist with business formation, LLC formation, contract drafting and review, operating agreements, employment agreements, and business compliance. Proper formation protects your personal assets and sets your business up for success. Contact us to discuss your business plans and get the right structure in place.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are starting or running a business in Morrow County or anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
