import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Partnership Disputes Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus partnership disputes attorney resolving business partnership conflicts. Skilled representation for partnership disputes in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['partnership disputes lawyer Columbus OH', 'partnership disputes attorney Ohio', 'business partnership lawyer', 'Franklin County partnership attorney'],
  openGraph: {
    title: 'Partnership Disputes Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/business/partnership-disputes',
  },
  alternates: { canonical: '/business/partnership-disputes' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Partnership Disputes', href: '/business/partnership-disputes' },
];

const faqs = [
  {
    question: 'What causes partnership disputes in Ohio?',
    answer: 'Common causes of partnership disputes in Ohio include disagreements over management decisions, profit distribution, business direction, breach of partnership agreements, breach of fiduciary duties, unequal contributions, personality conflicts, and disputes over partnership dissolution. Partnership disputes can disrupt business operations and require legal resolution.',
  },
  {
    question: 'How are partnership disputes resolved in Ohio?',
    answer: 'Partnership disputes in Ohio under Ohio Revised Code Chapter 1775 may be resolved through negotiation, mediation, arbitration, or litigation. Partnership agreements often include dispute resolution procedures. If disputes cannot be resolved, partners may seek court intervention to enforce partnership agreements, remove partners, or dissolve partnerships. An attorney can help resolve disputes.',
  },
  {
    question: 'What are fiduciary duties in partnerships?',
    answer: 'Fiduciary duties in partnerships under Ohio law require partners to act in the best interests of the partnership and other partners, avoid conflicts of interest, disclose material information, and act with loyalty and good faith. Breach of fiduciary duties may result in liability for damages. An attorney can help identify breaches and seek remedies.',
  },
  {
    question: 'Can I remove a partner from a partnership?',
    answer: 'Removing a partner from a partnership in Ohio depends on partnership agreements and circumstances. Partnership agreements may include procedures for partner removal. If no agreement exists or procedures are not followed, partners may need court intervention to remove partners. An attorney can help understand removal procedures and protect your rights.',
  },
  {
    question: 'Do I need a partnership disputes attorney?',
    answer: 'Partnership disputes can be complex and require experienced representation. Partnership disputes attorneys understand partnership law, can interpret partnership agreements, identify breaches of fiduciary duties, negotiate resolutions, and represent partners in court if necessary. Most attorneys work on hourly fee arrangements and offer consultations.',
  },
];

export default function PartnershipDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Partnership Disputes Lawyer in Columbus, OH"
        description="Experienced legal representation for partnership disputes. Resolving conflicts and protecting your partnership interests."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Partnership Disputes in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Partnership disputes in Columbus or throughout Ohio can disrupt business operations and threaten partnership relationships. At Jwayyed Law LLC, we provide experienced representation for partnership disputes under Ohio Revised Code Chapter 1775. Our attorney understands partnership law and can help resolve disputes while protecting partnership interests.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Partnership Disputes Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Dispute Resolution:</strong> Help resolve partnership disputes through negotiation, mediation, or litigation</li>
              <li><strong>Partnership Agreement Analysis:</strong> Interpret partnership agreements and identify breaches</li>
              <li><strong>Fiduciary Duty Claims:</strong> Identify and pursue breach of fiduciary duty claims</li>
              <li><strong>Partnership Dissolution:</strong> Handle partnership dissolution if necessary</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated partnership disputes representation in Columbus, Franklin County, and throughout Ohio. We understand that partnership disputes can disrupt business operations. Our attorney works diligently to resolve disputes, protect partnership interests, and achieve favorable outcomes for our clients.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

