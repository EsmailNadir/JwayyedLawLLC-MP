import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Morrow County Court Representation | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced legal representation in Morrow County courts including Municipal Court. Skilled representation in Morrow County, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Morrow County court attorney', 'Morrow County Municipal Court'],
  openGraph: {
    title: 'Morrow County Court Representation | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/morrow-county',
  },
  alternates: { canonical: '/courts/morrow-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Morrow County', href: '/courts/morrow-county' },
];

export default function MorrowCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Morrow County Court Representation"
        description="Experienced legal representation in Morrow County courts. Serving Morrow County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Morrow County Court Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Morrow County courts handle various legal matters including criminal cases, OVI/DUI charges, civil disputes, and traffic violations. At Jwayyed Law LLC, we provide experienced representation in Morrow County courts including Morrow County Municipal Court. Please note that we do not handle immigration matters, juvenile matters, or probate matters in these courts.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Morrow County Courts</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/courts/morrow-county-municipal-court" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Morrow County Municipal Court</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Misdemeanor cases, OVI/DUI, and traffic violations</p>
              </Link>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Practice Areas We Handle in Morrow County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              We represent clients in the following practice areas in Morrow County and Morrow County Municipal Court:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link href="/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">OVI/DUI Defense</span>
                <span className="block text-sm text-gray-600 mt-1">Morrow County Municipal Court</span>
              </Link>
              <Link href="/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Criminal Misdemeanor Defense</span>
                <span className="block text-sm text-gray-600 mt-1">Morrow County Municipal Court</span>
              </Link>
              <Link href="/locations/morrow-county/personal-injury-morrow-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Personal Injury</span>
                <span className="block text-sm text-gray-600 mt-1">Morrow County</span>
              </Link>
              <Link href="/locations/morrow-county/business-formation-llc-morrow-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Business & LLC Formation</span>
                <span className="block text-sm text-gray-600 mt-1">Morrow County</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

