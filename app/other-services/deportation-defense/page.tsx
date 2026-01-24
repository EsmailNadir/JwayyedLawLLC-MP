import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Deportation Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus deportation defense attorney protecting your rights. Skilled representation for deportation proceedings in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['deportation defense lawyer Columbus OH', 'deportation attorney Ohio', 'removal defense lawyer', 'Franklin County deportation attorney'],
  openGraph: {
    title: 'Deportation Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/deportation-defense',
  },
  alternates: { canonical: '/other-services/deportation-defense' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Immigration', href: '/other-services/immigration' },
  { label: 'Deportation Defense', href: '/other-services/deportation-defense' },
];

export default function DeportationDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Deportation Defense Lawyer in Columbus, OH"
        description="Experienced legal assistance with deportation defense. Protecting your rights and fighting deportation proceedings."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Deportation Defense in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Deportation defense in Columbus or throughout Ohio involves defending against removal proceedings brought by Immigration and Customs Enforcement (ICE). At Jwayyed Law LLC, we provide experienced representation for deportation defense under federal immigration law. Our attorney understands removal proceedings and can help you defend against deportation including seeking cancellation of removal, asylum, or other forms of relief.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated deportation defense representation in Columbus, Franklin County, and throughout Ohio. We understand that deportation proceedings can be life-changing. Our attorney works diligently to defend against deportation and protect your rights to remain in the United States.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

