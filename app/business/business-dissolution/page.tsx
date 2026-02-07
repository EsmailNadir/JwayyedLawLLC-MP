import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Business Dissolution Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus business dissolution attorney helping you close your business properly. Skilled representation for business dissolution in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['business dissolution lawyer Columbus OH', 'business dissolution attorney Ohio', 'close business lawyer', 'Franklin County business dissolution attorney'],
  openGraph: {
    title: 'Business Dissolution Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/business/business-dissolution',
  },
  alternates: { canonical: '/business/business-dissolution' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Business Dissolution', href: '/business/business-dissolution' },
];

const faqs = [
  {
    question: 'What is business dissolution in Ohio?',
    answer: 'Business dissolution under Ohio Revised Code (current as of 2026) involves formally closing a business entity by filing dissolution documents with the Ohio Secretary of State, settling business debts and obligations, distributing remaining assets to owners, canceling licenses and permits, filing final tax returns, and complying with all winding-up requirements. Proper dissolution protects owners from ongoing liabilities.',
  },
  {
    question: 'How do I dissolve a business in Ohio?',
    answer: 'To dissolve a business in Ohio, file Articles of Dissolution with the Ohio Secretary of State, settle all business debts and obligations, distribute remaining assets according to ownership interests or operating agreements, cancel business licenses and permits, file final tax returns with state and federal tax authorities, notify creditors and stakeholders, and comply with all winding-up requirements. An attorney can help guide you through the process.',
  },
  {
    question: 'What are the consequences of not properly dissolving a business?',
    answer: 'Failing to properly dissolve a business in Ohio can result in ongoing filing requirements, tax obligations, potential personal liability for business owners, inability to close business accounts, and legal issues. Improper dissolution can also prevent business owners from starting new businesses or accessing business assets. An attorney can help ensure proper dissolution.',
  },
  {
    question: 'Can I dissolve a business if there are outstanding debts?',
    answer: 'Yes, you can dissolve a business with outstanding debts in Ohio, but you must properly notify creditors, settle debts to the extent possible, and comply with creditor claims procedures. Dissolution does not eliminate business debts, but proper dissolution procedures can protect owners from personal liability for business debts after dissolution. An attorney can help navigate debt settlement.',
  },
  {
    question: 'Do I need a business dissolution attorney?',
    answer: 'Business dissolution involves complex legal and tax requirements that must be completed properly to protect owners from ongoing liabilities. Business dissolution attorneys understand dissolution procedures, can guide you through the process, ensure compliance with all requirements, and protect your interests. Most attorneys work on hourly or flat fee arrangements.',
  },
];

export default function BusinessDissolutionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business Dissolution Lawyer in Columbus, OH"
        description="Experienced legal assistance with business dissolution. Helping you close your business properly and protect your interests."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Business Dissolution in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Business dissolution in Columbus or throughout Ohio requires following proper procedures to close your business and protect owners from ongoing liabilities. At Jwayyed Law LLC, we provide experienced assistance with business dissolution under Ohio Revised Code. Our attorney understands dissolution procedures and can help ensure proper dissolution while protecting your interests.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Business Dissolution Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Dissolution Process:</strong> Guide you through the dissolution process and file necessary documents</li>
              <li><strong>Debt Settlement:</strong> Help settle business debts and comply with creditor claims procedures</li>
              <li><strong>Asset Distribution:</strong> Assist with proper distribution of remaining assets</li>
              <li><strong>Compliance:</strong> Ensure compliance with all dissolution requirements</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated business dissolution assistance throughout Ohio. We understand that closing a business requires proper procedures to protect owners. Our attorney works diligently to guide you through dissolution, ensure compliance with all requirements, and protect your interests.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

