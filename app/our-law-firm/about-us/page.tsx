import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'About Us | Jwayyed Law LLC | Columbus, Ohio Attorney',
  description: 'Learn about Jwayyed Law LLC, a dedicated law firm serving Columbus and throughout Ohio. Experienced attorneys providing criminal defense, OVI/DUI defense, personal injury, and civil representation.',
  keywords: ['Jwayyed Law LLC', 'Columbus law firm', 'Ohio attorney', 'criminal defense firm'],
  openGraph: {
    title: 'About Us | Jwayyed Law LLC',
    description: 'Dedicated legal representation in Columbus and throughout Ohio.',
    url: 'https://www.jjlawohio.com/our-law-firm/about-us',
  },
  alternates: { canonical: '/our-law-firm/about-us' },
};

const breadcrumbItems = [
  { label: 'Our Law Firm', href: '/our-law-firm' },
  { label: 'About Us', href: '/our-law-firm/about-us' },
];

export default function AboutUsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-4xl font-bold text-gray-900 mb-6">About Jwayyed Law LLC</h1>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Jwayyed Law LLC is a dedicated law firm serving clients throughout Columbus, Ohio, and surrounding areas. Our firm provides experienced legal representation in criminal defense, OVI/DUI defense, personal injury, civil litigation, business law, and related practice areas.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              With years of experience in Ohio courts, our attorney understands the complexities of Ohio law and provides personalized attention to each case. We are committed to protecting your rights, providing clear communication, and achieving the best possible outcomes for our clients.
            </p>
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our mission is to provide dedicated, experienced legal representation that protects our clients' rights and achieves favorable outcomes. We believe in personalized attention, clear communication, and aggressive advocacy for every client we represent.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

