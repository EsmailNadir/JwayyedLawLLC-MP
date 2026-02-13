import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Case Results | Jwayyed Law LLC | Columbus, Ohio',
  description: 'Review our track record of successful outcomes for clients in criminal defense, OVI/DUI defense, personal injury, and civil matters throughout Ohio.',
  keywords: ['law firm case results', 'attorney success rate', 'Ohio law firm results'],
  openGraph: {
    title: 'Case Results | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/our-law-firm/case-results',
  },
  alternates: { canonical: '/our-law-firm/case-results' },
};

const breadcrumbItems = [
  { label: 'Our Law Firm', href: '/our-law-firm' },
  { label: 'Case Results', href: '/our-law-firm/case-results' },
];

export default function CaseResultsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-4xl font-bold text-gray-900 mb-6">Case Results</h1>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              At Jwayyed Law LLC, we have achieved successful outcomes for clients throughout Columbus and Ohio in criminal defense, OVI/DUI defense, personal injury, and civil matters.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              While every case is unique and results depend on specific facts and circumstances, our track record demonstrates our commitment to aggressive advocacy and achieving the best possible outcomes for our clients. We work diligently to protect our clients' rights and interests in every case we handle.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

