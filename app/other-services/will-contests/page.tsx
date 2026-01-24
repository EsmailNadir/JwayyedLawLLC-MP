import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Will Contests Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus will contests attorney protecting your inheritance. Skilled representation for contesting or defending will validity in Ohio. Free consultation: (614) 285-5482',
  keywords: ['will contests lawyer Columbus OH', 'will contest attorney Ohio', 'contest will lawyer', 'Franklin County will contest attorney'],
  openGraph: {
    title: 'Will Contests Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/will-contests',
  },
  alternates: { canonical: '/other-services/will-contests' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Probate', href: '/other-services/probate' },
  { label: 'Will Contests', href: '/other-services/will-contests' },
];

export default function WillContestsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Will Contests Lawyer in Columbus, OH"
        description="Experienced legal assistance with will contests. Protecting your inheritance by contesting or defending will validity."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Will Contests in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Will contests in Columbus or throughout Ohio involve challenging or defending the validity of a will. At Jwayyed Law LLC, we provide experienced representation for will contests under Ohio Revised Code Chapter 2107. Our attorney understands will contest law and can help you contest a will if there are grounds such as undue influence, fraud, lack of capacity, or improper execution, or defend a will against challenges.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated will contest representation in Columbus, Franklin County, and throughout Ohio. We understand that will contests can be complex and emotional. Our attorney works diligently to protect your inheritance and ensure your rights are protected.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

