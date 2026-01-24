import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Our Law Firm | About Jwayyed Law LLC | Columbus, Ohio',
  description: 'Learn about Jwayyed Law LLC, a dedicated law firm serving Columbus and throughout Ohio. Experienced attorneys providing criminal defense, OVI/DUI defense, personal injury, and civil representation.',
  keywords: [
    'Jwayyed Law LLC',
    'Columbus law firm',
    'Ohio attorney',
    'criminal defense firm',
    'law firm Columbus OH'
  ],
  openGraph: {
    title: 'Our Law Firm | Jwayyed Law LLC',
    description: 'Dedicated legal representation in Columbus and throughout Ohio.',
    url: 'https://www.jjlawohio.com/our-law-firm',
  },
  alternates: {
    canonical: '/our-law-firm',
  },
};

const breadcrumbItems = [
  { label: 'Our Law Firm', href: '/our-law-firm' },
];

export default function OurLawFirmPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Law Firm
            </h1>
            <p className="font-['Inter',_'Arial',_sans-serif] text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated legal representation in Columbus and throughout Ohio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Link
              href="/our-law-firm/about-us"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-orange-500"
            >
              <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-2">
                About Us
              </h2>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-600 text-sm">
                Learn about our firm's mission, values, and commitment to clients
              </p>
            </Link>

            <Link
              href="/our-law-firm/our-attorneys"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-orange-500"
            >
              <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-2">
                Our Attorneys
              </h2>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-600 text-sm">
                Meet our experienced legal team dedicated to your case
              </p>
            </Link>

            <Link
              href="/our-law-firm/case-results"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-orange-500"
            >
              <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-2">
                Case Results
              </h2>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-600 text-sm">
                Review our track record of successful outcomes for clients
              </p>
            </Link>

            <Link
              href="/our-law-firm/testimonials"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-orange-500"
            >
              <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-2">
                Testimonials
              </h2>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-600 text-sm">
                Read what our clients say about their experience with us
              </p>
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-4">
              Recent Blog Posts
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-600 mb-6">
              Stay informed with legal insights and updates from our team
            </p>
            <Link
              href="/our-law-firm/blog"
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold font-['Inter',_'Arial',_sans-serif]"
            >
              View All Blog Posts →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

