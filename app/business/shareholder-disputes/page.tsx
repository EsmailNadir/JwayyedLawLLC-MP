import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Shareholder Disputes Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus shareholder disputes attorney resolving corporate conflicts. Skilled representation for shareholder disputes in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['shareholder disputes lawyer Columbus OH', 'shareholder disputes attorney Ohio', 'corporate disputes lawyer', 'Franklin County shareholder attorney'],
  openGraph: {
    title: 'Shareholder Disputes Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/business/shareholder-disputes',
  },
  alternates: { canonical: '/business/shareholder-disputes' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Shareholder Disputes', href: '/business/shareholder-disputes' },
];

const faqs = [
  {
    question: 'What causes shareholder disputes in Ohio?',
    answer: 'Common causes of shareholder disputes in Ohio include disagreements over corporate governance, dividend distribution, business decisions, breach of fiduciary duties by directors or officers, minority shareholder oppression, breach of shareholder agreements, and disputes over corporate dissolution. Shareholder disputes can disrupt corporate operations and require legal resolution.',
  },
  {
    question: 'What are minority shareholder rights in Ohio?',
    answer: 'Minority shareholder rights in Ohio under Ohio Revised Code Chapter 1701 include the right to inspect corporate records, the right to receive dividends when declared, the right to vote on major corporate decisions, protection from oppression by majority shareholders, and the right to file derivative lawsuits for corporate wrongdoing. An attorney can help protect minority shareholder rights.',
  },
  {
    question: 'What is shareholder oppression in Ohio?',
    answer: 'Shareholder oppression in Ohio occurs when majority shareholders or corporate directors act in ways that unfairly harm minority shareholders, such as excluding minority shareholders from management, refusing to pay dividends, mismanaging corporate assets, or engaging in self-dealing. Minority shareholders may seek remedies including buyouts, corporate dissolution, or damages. An attorney can help identify oppression and seek remedies.',
  },
  {
    question: 'Can shareholders remove directors in Ohio?',
    answer: 'Shareholders can remove directors in Ohio under Ohio Revised Code 1701.58 by majority vote at a special meeting called for that purpose, unless corporate articles or bylaws provide otherwise. Removal procedures depend on corporate bylaws and articles of incorporation. An attorney can help understand removal procedures and protect shareholder rights.',
  },
  {
    question: 'Do I need a shareholder disputes attorney?',
    answer: 'Shareholder disputes are complex and require experienced representation. Shareholder disputes attorneys understand corporate law, can identify breaches of fiduciary duties, protect minority shareholder rights, negotiate resolutions, and represent shareholders in court if necessary. Most attorneys work on hourly fee arrangements and offer consultations.',
  },
];

export default function ShareholderDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Shareholder Disputes Lawyer in Columbus, OH"
        description="Experienced legal representation for shareholder disputes. Resolving conflicts and protecting your shareholder rights."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Shareholder Disputes in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Shareholder disputes in Columbus or throughout Ohio can disrupt corporate operations and threaten shareholder relationships. At Jwayyed Law LLC, we provide experienced representation for shareholder disputes under Ohio Revised Code Chapter 1701. Our attorney understands corporate law and can help resolve disputes while protecting shareholder rights.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Shareholder Disputes Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Dispute Resolution:</strong> Help resolve shareholder disputes through negotiation, mediation, or litigation</li>
              <li><strong>Minority Shareholder Protection:</strong> Protect minority shareholder rights and identify oppression</li>
              <li><strong>Fiduciary Duty Claims:</strong> Identify and pursue breach of fiduciary duty claims against directors or officers</li>
              <li><strong>Corporate Governance:</strong> Address corporate governance issues and protect shareholder rights</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated shareholder disputes representation throughout Ohio. We understand that shareholder disputes can disrupt corporate operations. Our attorney works diligently to resolve disputes, protect shareholder rights, and achieve favorable outcomes for our clients.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

