import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Business Formation Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus business formation attorney helping you start your business. Skilled representation for business formation in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['business formation lawyer Columbus OH', 'business formation attorney Ohio', 'LLC formation lawyer', 'Franklin County business formation attorney'],
  openGraph: {
    title: 'Business Formation Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/business/business-formation',
  },
  alternates: { canonical: '/business/business-formation' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Business Formation', href: '/business/business-formation' },
];

const faqs = [
  {
    question: 'What is required to form a business in Ohio?',
    answer: 'Business formation in Ohio requires filing articles of incorporation or organization with the Ohio Secretary of State, obtaining necessary licenses and permits, establishing operating agreements or bylaws, obtaining an EIN from the IRS, and complying with state and federal requirements. Business structure (LLC, corporation, partnership) affects formation requirements. An attorney can help determine the best structure and guide you through formation.',
  },
  {
    question: 'What is the difference between an LLC and corporation in Ohio?',
    answer: 'LLCs (Limited Liability Companies) and corporations in Ohio offer liability protection but differ in structure, taxation, and management. LLCs provide flexibility in management and taxation (can be taxed as pass-through entities), while corporations offer more formal structure and ability to raise capital through stock. Choosing between structures depends on your business needs, tax goals, and growth plans. An attorney can help determine the best structure for your business.',
  },
  {
    question: 'How long does business formation take in Ohio?',
    answer: 'Business formation in Ohio can take days to weeks depending on structure, filing method, and requirements. Online filings with the Ohio Secretary of State are typically processed faster than paper filings. Obtaining EINs, licenses, and permits can take additional time. An attorney can help expedite the process and ensure all requirements are met.',
  },
  {
    question: 'Do I need a business formation attorney?',
    answer: 'While you can form a business yourself, an experienced attorney can help determine the best business structure, ensure compliance with all requirements, draft operating agreements or bylaws, obtain necessary licenses and permits, and avoid costly mistakes. Business formation attorneys understand business law and can help set up your business correctly from the start.',
  },
  {
    question: 'What are the costs of business formation in Ohio?',
    answer: 'Business formation costs in Ohio include filing fees with the Ohio Secretary of State ($99 for LLCs, $99 for corporations), EIN fees (free from IRS), license and permit fees (vary), and attorney fees. Total costs vary depending on structure and services needed. An attorney can help understand costs and ensure you meet all requirements.',
  },
];

export default function BusinessFormationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Business Formation Lawyer in Columbus, OH"
        description="Experienced legal assistance with business formation. Helping you start your business the right way."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Business Formation in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Business formation in Columbus or throughout Ohio requires understanding of business structures, state requirements, and legal considerations. At Jwayyed Law LLC, we provide experienced assistance with business formation under Ohio Revised Code (current as of 2026). Our attorney understands business law and can help determine the best structure and guide you through the formation process.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Choosing the right business structure is one of the most important decisions when starting a business. Different structures (LLC, corporation, partnership, sole proprietorship) offer different benefits including liability protection, tax advantages, management flexibility, and ability to raise capital. Understanding these differences and selecting the best structure for your specific needs is essential for protecting your interests and setting up your business for success. Early consultation with a business formation attorney can help you make informed decisions and avoid costly mistakes.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Business formation requires filing articles of incorporation or organization with the Ohio Secretary of State, obtaining necessary licenses and permits, establishing operating agreements or bylaws, obtaining an EIN from the IRS, and complying with state and federal requirements. Each step requires proper documentation and compliance. An experienced business formation attorney can guide you through each step, ensure all requirements are met, and help set up your business correctly from the start.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Business Structure Options</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Limited Liability Company (LLC)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                LLCs offer liability protection for owners (members) while providing flexibility in management and taxation. LLCs can be taxed as pass-through entities (avoiding double taxation), offer flexible management structures, and require less formal record-keeping than corporations. LLCs are popular for small to medium-sized businesses seeking liability protection with operational flexibility.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Corporation (C-Corp or S-Corp)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Corporations offer liability protection and ability to raise capital through stock sales. C-Corporations are taxed separately from owners (double taxation), while S-Corporations are taxed as pass-through entities (with restrictions). Corporations require more formal structure including bylaws, board of directors, and shareholder meetings. Corporations are ideal for businesses planning to raise capital or go public.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Partnership</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Partnerships (general or limited) allow multiple owners to share profits and losses. General partnerships offer no liability protection, while limited partnerships offer limited liability for limited partners. Partnerships are taxed as pass-through entities and require partnership agreements. Partnerships are suitable for businesses with multiple owners who want simple structures.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Sole Proprietorship</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Sole proprietorships are the simplest business structure with no separate legal entity. Owners have unlimited personal liability and are taxed on personal income. Sole proprietorships require no formal formation but offer no liability protection. Sole proprietorships are suitable for very small businesses with minimal risk.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Business Formation Process</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the business formation process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Structure Selection and Planning</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                The first step is selecting the best business structure based on your needs, goals, tax situation, and plans for growth. An attorney can help evaluate options, explain differences, and recommend the best structure. This decision affects liability protection, taxation, management, and ability to raise capital.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Filing with Ohio Secretary of State</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                After selecting a structure, you must file articles of incorporation (for corporations) or articles of organization (for LLCs) with the Ohio Secretary of State. Filing requires business name, registered agent, business purpose, and other information. Online filings are typically processed faster than paper filings. An attorney can prepare and file documents, ensure compliance, and expedite processing.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Operating Agreements and Bylaws</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Operating agreements (for LLCs) or bylaws (for corporations) establish governance, management structure, ownership interests, profit distribution, and dispute resolution procedures. These documents are essential for protecting interests and avoiding disputes. An attorney can draft comprehensive operating agreements or bylaws tailored to your specific needs.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Licenses, Permits, and Compliance</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Businesses must obtain necessary licenses and permits (varies by industry and location), obtain an EIN from the IRS, register for state taxes if applicable, and comply with all state and federal requirements. An attorney can help identify required licenses and permits, ensure compliance, and avoid costly mistakes.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Business Formation Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced business formation attorney provides comprehensive assistance throughout the formation process:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Structure Selection:</strong> Help determine the best business structure for your needs by evaluating liability protection, taxation, management flexibility, and ability to raise capital</li>
              <li><strong>Formation Process Guidance:</strong> Guide you through the entire formation process, prepare and file necessary documents with the Ohio Secretary of State, and ensure all requirements are met</li>
              <li><strong>Operating Agreements and Bylaws:</strong> Draft comprehensive operating agreements (for LLCs) or bylaws (for corporations) that establish governance, management structure, ownership interests, and dispute resolution procedures</li>
              <li><strong>Compliance Assistance:</strong> Ensure compliance with all state and federal requirements including licenses, permits, tax registration, and ongoing compliance obligations</li>
              <li><strong>Name Availability and Trademark:</strong> Check business name availability, help register trademarks if needed, and protect your business name and brand</li>
              <li><strong>EIN and Tax Registration:</strong> Help obtain EINs from the IRS, register for state taxes if applicable, and ensure proper tax setup</li>
              <li><strong>Ongoing Support:</strong> Provide ongoing legal support for business operations, contract review, compliance, and other business law matters</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated business formation assistance throughout Ohio. We understand that starting a business requires proper formation to protect your interests. Our attorney works diligently to help you determine the best structure, complete formation requirements, and set up your business correctly from the start.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough understanding of business law, strategic planning, and practical guidance. We understand the different business structures, formation requirements, and ongoing compliance obligations. This knowledge allows us to help you make informed decisions about structure selection, complete formation requirements efficiently, and avoid costly mistakes. We work closely with clients to understand their goals, explain options, and set up businesses for success.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are starting a business in Columbus or anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation. We will review your business plans, explain different structure options, discuss formation requirements, and help you determine the best approach for your specific situation. Proper business formation from the start protects your interests, avoids costly mistakes, and sets your business up for success. Do not delay in seeking experienced legal assistance to ensure your business is properly formed and protected.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

