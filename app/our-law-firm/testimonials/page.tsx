import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Testimonials | Jwayyed Law LLC | Client Reviews',
  description: 'Read what our clients say about their experience with Jwayyed Law LLC. Real reviews from clients we have helped throughout Columbus and Ohio.',
  keywords: ['law firm reviews', 'attorney testimonials', 'client reviews Columbus'],
  openGraph: {
    title: 'Testimonials | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/our-law-firm/testimonials',
  },
  alternates: { canonical: '/our-law-firm/testimonials' },
};

const breadcrumbItems = [
  { label: 'Our Law Firm', href: '/our-law-firm' },
  { label: 'Testimonials', href: '/our-law-firm/testimonials' },
];

export default function TestimonialsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-4xl font-bold text-gray-900 mb-6">Client Testimonials</h1>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Read what our clients say about their experience with Jwayyed Law LLC. We are committed to providing exceptional legal representation and personalized service to every client we serve.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our clients' success is our priority, and we appreciate their trust in us to handle their legal matters. These testimonials reflect our commitment to aggressive advocacy, clear communication, and achieving the best possible outcomes.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

