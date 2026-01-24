import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Our Attorneys | Jwayyed Law LLC | Columbus, Ohio',
  description: 'Meet our experienced legal team dedicated to protecting your rights and achieving favorable outcomes in Columbus and throughout Ohio.',
  keywords: ['Columbus attorneys', 'Ohio lawyers', 'Jwayyed Law attorneys'],
  openGraph: {
    title: 'Our Attorneys | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/our-law-firm/our-attorneys',
  },
  alternates: { canonical: '/our-law-firm/our-attorneys' },
};

const breadcrumbItems = [
  { label: 'Our Law Firm', href: '/our-law-firm' },
  { label: 'Our Attorneys', href: '/our-law-firm/our-attorneys' },
];

export default function OurAttorneysPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-4xl font-bold text-gray-900 mb-6">Our Attorneys</h1>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our experienced legal team is dedicated to protecting your rights and achieving favorable outcomes in criminal defense, OVI/DUI defense, personal injury, civil litigation, and business law matters.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              With years of experience in Ohio courts, our attorneys understand the complexities of Ohio law and provide personalized attention to each case. We are committed to aggressive advocacy, clear communication, and achieving the best possible results for our clients.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

