import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Non-Compete Agreements Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus non-compete agreements attorney protecting your interests. Skilled representation for non-compete agreements in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['non-compete agreements lawyer Columbus OH', 'non-compete attorney Ohio', 'non-compete lawyer', 'Franklin County non-compete attorney'],
  openGraph: {
    title: 'Non-Compete Agreements Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/business/non-compete-agreements',
  },
  alternates: { canonical: '/business/non-compete-agreements' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Non-Compete Agreements', href: '/business/non-compete-agreements' },
];

const faqs = [
  {
    question: 'Are non-compete agreements enforceable in Ohio?',
    answer: 'Non-compete agreements in Ohio are enforceable under Ohio common law if they are reasonable in scope, duration, and geographic area, protect legitimate business interests, and do not impose undue hardship on employees. Courts will not enforce overbroad non-compete agreements. An attorney can help determine if a non-compete agreement is enforceable.',
  },
  {
    question: 'What makes a non-compete agreement reasonable in Ohio?',
    answer: 'A non-compete agreement in Ohio is reasonable if it: protects legitimate business interests (trade secrets, customer relationships, confidential information), has a reasonable duration (typically 1-2 years), covers a reasonable geographic area (relevant to the business), and does not impose undue hardship on employees. Courts consider all factors when determining reasonableness.',
  },
  {
    question: 'Can I challenge a non-compete agreement in Ohio?',
    answer: 'Yes, you can challenge a non-compete agreement in Ohio by arguing it is unreasonable in scope, duration, or geographic area, does not protect legitimate business interests, imposes undue hardship, or violates public policy. An attorney can help evaluate your non-compete agreement and develop strategies to challenge it if necessary.',
  },
  {
    question: 'What happens if I violate a non-compete agreement?',
    answer: 'Violating a non-compete agreement in Ohio can result in legal action including injunctions to stop your competition, monetary damages for harm to the employer, and attorney fees. However, if the non-compete agreement is unenforceable, you may be able to defend against enforcement. An attorney can help evaluate your situation and protect your rights.',
  },
  {
    question: 'Do I need a non-compete agreements attorney?',
    answer: 'Non-compete agreements can significantly affect your ability to work and earn a living. Whether you are an employer drafting non-compete agreements or an employee subject to one, experienced representation is essential. Non-compete attorneys understand the law, can evaluate enforceability, negotiate terms, and defend against enforcement if necessary.',
  },
];

export default function NonCompeteAgreementsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Non-Compete Agreements Lawyer in Columbus, OH"
        description="Experienced legal representation for non-compete agreements. Protecting your interests whether you are an employer or employee."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Non-Compete Agreements in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Non-compete agreements in Columbus or throughout Ohio can significantly affect your ability to work and compete. At Jwayyed Law LLC, we provide experienced representation for non-compete agreements under Ohio common law. Our attorney understands non-compete law and can help whether you are an employer drafting agreements or an employee subject to one.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Non-Compete Agreements Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Agreement Drafting:</strong> Draft enforceable non-compete agreements that protect business interests</li>
              <li><strong>Agreement Review:</strong> Review non-compete agreements to evaluate enforceability and negotiate terms</li>
              <li><strong>Enforcement Defense:</strong> Defend against enforcement of unenforceable non-compete agreements</li>
              <li><strong>Negotiation:</strong> Negotiate reasonable terms that protect both employer and employee interests</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated non-compete agreements representation throughout Ohio. We understand that non-compete agreements can significantly affect your ability to work. Our attorney works diligently to draft enforceable agreements, evaluate enforceability, negotiate terms, and protect your interests.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

