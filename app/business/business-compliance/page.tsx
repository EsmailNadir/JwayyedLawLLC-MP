import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Business Compliance Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus business compliance attorney ensuring regulatory compliance. Skilled representation for business compliance in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['business compliance lawyer Columbus OH', 'business compliance attorney Ohio', 'regulatory compliance lawyer', 'Franklin County business compliance attorney'],
  openGraph: {
    title: 'Business Compliance Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/business/business-compliance',
  },
  alternates: { canonical: '/business/business-compliance' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Business Compliance', href: '/business/business-compliance' },
];

const faqs = [
  {
    question: 'What is business compliance in Ohio?',
    answer: 'Business compliance in Ohio involves ensuring your business complies with all applicable federal, state, and local laws and regulations including business licensing, tax obligations, employment law, environmental regulations, industry-specific regulations, and ongoing reporting requirements. Non-compliance can result in fines, penalties, lawsuits, and business closure. Compliance is essential for business operations.',
  },
  {
    question: 'What licenses and permits does my business need in Ohio?',
    answer: 'Business licenses and permits required in Ohio depend on your business type, location, and industry. Common requirements include business licenses from cities or counties, state professional licenses for certain industries, federal licenses for regulated industries, sales tax permits, and industry-specific permits. An attorney can help identify required licenses and permits.',
  },
  {
    question: 'What are ongoing compliance requirements in Ohio?',
    answer: 'Ongoing compliance requirements in Ohio include annual report filings with the Ohio Secretary of State, tax filings and payments, employment law compliance, maintaining business licenses, updating business registrations, complying with industry regulations, and other periodic requirements. Non-compliance can result in penalties and business closure. An attorney can help ensure ongoing compliance.',
  },
  {
    question: 'What happens if my business is not in compliance?',
    answer: 'Non-compliance in Ohio can result in fines, penalties, license suspension or revocation, lawsuits, business closure, personal liability for business owners, and criminal charges in severe cases. Compliance issues can also damage business reputation and relationships. An attorney can help identify compliance issues and develop compliance programs.',
  },
  {
    question: 'Do I need a business compliance attorney?',
    answer: 'Business compliance is complex and requires ongoing attention. Business compliance attorneys understand regulatory requirements, can identify compliance obligations, develop compliance programs, handle compliance issues, and ensure ongoing compliance. Compliance attorneys can help prevent costly violations and protect your business.',
  },
];

export default function BusinessCompliancePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business Compliance Lawyer in Columbus, OH"
        description="Experienced legal assistance with business compliance. Ensuring your business complies with all regulations."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Business Compliance in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Business compliance in Columbus or throughout Ohio is essential for protecting your business from fines, penalties, and legal issues. At Jwayyed Law LLC, we provide experienced assistance with business compliance under Ohio Revised Code and federal regulations. Our attorney understands regulatory requirements and can help ensure your business complies with all applicable laws.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Business Compliance Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Compliance Evaluation:</strong> Evaluate your business to identify compliance obligations</li>
              <li><strong>Compliance Programs:</strong> Develop compliance programs tailored to your business</li>
              <li><strong>License and Permit Assistance:</strong> Help obtain necessary licenses and permits</li>
              <li><strong>Ongoing Compliance:</strong> Ensure ongoing compliance with all regulations</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated business compliance assistance in Columbus, Franklin County, and throughout Ohio. We understand that compliance is essential for business operations. Our attorney works diligently to identify compliance obligations, develop compliance programs, and ensure ongoing compliance to protect your business.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

