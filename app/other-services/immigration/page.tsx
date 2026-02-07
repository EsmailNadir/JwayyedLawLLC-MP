import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Immigration Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus immigration attorney helping you navigate the immigration system. Skilled representation for immigration matters in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['immigration lawyer Columbus OH', 'immigration attorney Ohio', 'green card lawyer', 'Franklin County immigration attorney'],
  openGraph: {
    title: 'Immigration Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/immigration',
  },
  alternates: { canonical: '/other-services/immigration' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Immigration', href: '/other-services/immigration' },
];

export default function ImmigrationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Immigration Lawyer in Columbus, OH"
        description="Experienced legal assistance with immigration matters. Helping you navigate the immigration system and protect your rights."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Immigration Services in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Immigration matters in Columbus or throughout Ohio involve complex federal laws and procedures (including the Immigration and Nationality Act and related regulations) that can significantly affect your ability to live and work in the United States. At Jwayyed Law LLC, we provide experienced assistance with immigration matters under federal immigration law. Our attorney understands immigration law and can help you navigate the immigration system.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Immigration Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/other-services/immigration-services" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Immigration Services</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Comprehensive immigration assistance</p>
              </Link>
              <Link href="/other-services/green-cards" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Green Cards</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Permanent residency applications</p>
              </Link>
              <Link href="/other-services/citizenship-naturalization" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Citizenship & Naturalization</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">U.S. citizenship applications</p>
              </Link>
              <Link href="/other-services/deportation-defense" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Deportation Defense</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Defending against deportation proceedings</p>
              </Link>
            </div>
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

