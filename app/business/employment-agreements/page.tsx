import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Employment Agreements Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus employment agreements attorney protecting your interests. Skilled representation for employment agreements in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['employment agreements lawyer Columbus OH', 'employment agreements attorney Ohio', 'employment contract lawyer', 'Franklin County employment attorney'],
  openGraph: {
    title: 'Employment Agreements Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/business/employment-agreements',
  },
  alternates: { canonical: '/business/employment-agreements' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Employment Agreements', href: '/business/employment-agreements' },
];

const faqs = [
  {
    question: 'What should be included in an employment agreement in Ohio?',
    answer: 'Employment agreements in Ohio should include job duties and responsibilities, compensation and benefits, employment duration or at-will status, termination procedures, non-compete and non-disclosure provisions, intellectual property rights, dispute resolution procedures, and other relevant terms. Well-drafted employment agreements can prevent disputes and protect both employer and employee interests.',
  },
  {
    question: 'Are employment agreements required in Ohio?',
    answer: 'Employment agreements are not required by Ohio law, but they are recommended to clarify employment terms, protect business interests, and prevent disputes. At-will employment (employment that can be terminated at any time) is the default in Ohio unless an employment agreement specifies otherwise. An attorney can help draft employment agreements tailored to your needs.',
  },
  {
    question: 'Can employment agreements be modified in Ohio?',
    answer: 'Employment agreements in Ohio can be modified if both parties agree to the modification and the modification is supported by consideration (something of value). Modifications should be in writing to avoid disputes. An attorney can help negotiate modifications and ensure they are legally enforceable.',
  },
  {
    question: 'What happens if an employment agreement is breached?',
    answer: 'Breach of employment agreements in Ohio can result in legal action including damages for lost wages, benefits, or other harm, injunctions to enforce terms, and attorney fees if specified in the agreement. Remedies depend on the breach and agreement terms. An attorney can help evaluate breaches and seek remedies.',
  },
  {
    question: 'Do I need an employment agreements attorney?',
    answer: 'Employment agreements can significantly affect your rights and obligations. Whether you are an employer drafting employment agreements or an employee negotiating one, experienced representation is essential. Employment agreements attorneys understand employment law, can draft agreements, review terms, negotiate modifications, and protect your interests.',
  },
];

export default function EmploymentAgreementsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Employment Agreements Lawyer in Columbus, OH"
        description="Experienced legal representation for employment agreements. Protecting your interests whether you are an employer or employee."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Employment Agreements in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Employment agreements in Columbus or throughout Ohio define the terms and conditions of employment and can significantly affect employer and employee rights. At Jwayyed Law LLC, we provide experienced representation for employment agreements under Ohio Revised Code. Our attorney understands employment law and can help draft, review, and negotiate employment agreements.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How an Employment Agreements Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Agreement Drafting:</strong> Draft employment agreements that protect both employer and employee interests</li>
              <li><strong>Agreement Review:</strong> Review employment agreements to identify risks and negotiate favorable terms</li>
              <li><strong>Negotiation:</strong> Negotiate employment terms and modifications</li>
              <li><strong>Breach Enforcement:</strong> Enforce employment agreements and seek remedies for breaches</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated employment agreements representation throughout Ohio. We understand that employment agreements can significantly affect your rights. Our attorney works diligently to draft agreements, review terms, negotiate modifications, and protect your interests.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

