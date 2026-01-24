import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Green Cards Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus green cards attorney helping you obtain permanent residency. Skilled representation for green card applications in Ohio. Free consultation: (614) 285-5482',
  keywords: ['green cards lawyer Columbus OH', 'green card attorney Ohio', 'permanent residency lawyer', 'Franklin County green card attorney'],
  openGraph: {
    title: 'Green Cards Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/green-cards',
  },
  alternates: { canonical: '/other-services/green-cards' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Immigration', href: '/other-services/immigration' },
  { label: 'Green Cards', href: '/other-services/green-cards' },
];

export default function GreenCardsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Green Cards Lawyer in Columbus, OH"
        description="Experienced legal assistance with green card applications. Helping you obtain permanent residency in the United States."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Green Cards in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Green cards, or permanent resident cards, in Columbus or throughout Ohio provide legal permanent residency in the United States. At Jwayyed Law LLC, we provide experienced assistance with green card applications under federal immigration law. Our attorney understands green card processes and can help you apply for permanent residency through family sponsorship, employment, investment, or other pathways.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated green card assistance in Columbus, Franklin County, and throughout Ohio. We understand that obtaining permanent residency is a significant step. Our attorney works diligently to help you navigate the green card application process and protect your rights.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

