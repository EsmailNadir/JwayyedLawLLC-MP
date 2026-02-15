import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Immigration Services Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio immigration services attorney helping you navigate the immigration system. Skilled representation for immigration matters in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['immigration services lawyer Columbus OH', 'immigration attorney Ohio', 'immigration lawyer', 'Franklin County immigration attorney'],
  openGraph: {
    title: 'Immigration Services Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/immigration-services',
  },
  alternates: { canonical: '/other-services/immigration-services' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Immigration', href: '/other-services/immigration' },
  { label: 'Immigration Services', href: '/other-services/immigration-services' },
];

export default function ImmigrationServicesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Immigration Services Lawyer"
        description="Experienced legal assistance with immigration matters. Helping you navigate the immigration system and protect your rights."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Immigration Services in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Immigration matters in Columbus, Cincinnati, Dayton, or throughout Ohio involve complex federal laws and procedures that can significantly affect your ability to live and work in the United States. At Jwayyed Law LLC, we provide experienced assistance with immigration matters under federal immigration law. Our attorney understands immigration law and can help you navigate the immigration system including visa applications, green cards, citizenship, and deportation defense.
            </p>

            <LocationsWeServe title="Other Services" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated immigration assistance throughout Ohio. We understand that immigration matters can be complex and life-changing. Our attorney works diligently to help you navigate the immigration system, complete applications, and protect your rights.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
