import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Athens County Court Representation | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced legal representation in Athens County courts including Athens Municipal Court. Skilled representation in Athens County, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Athens County court attorney', 'Athens Municipal Court'],
  openGraph: {
    title: 'Athens County Court Representation | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/athens-county',
  },
  alternates: { canonical: '/courts/athens-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Athens County', href: '/courts/athens-county' },
];

export default function AthensCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Athens County Court Representation"
        description="Experienced legal representation in Athens County courts. Serving Athens County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Athens County Court Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Athens County courts handle various legal matters including criminal cases, OVI/DUI charges, civil disputes, and traffic violations. At Jwayyed Law LLC, we provide experienced representation in Athens County courts including Athens Municipal Court. Please note that we do not handle immigration matters, juvenile matters, or probate matters in these courts.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Athens County Courts</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/courts/athens-municipal-court" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Athens Municipal Court</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Misdemeanor cases, OVI/DUI, and traffic violations</p>
              </Link>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Practice Areas We Handle in Athens County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              We represent clients in the following practice areas in Athens County and Athens Municipal Court:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link href="/locations/athens-county/ovi-dui-defense-athens-municipal-court" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">OVI/DUI Defense</span>
                <span className="block text-sm text-gray-600 mt-1">Athens Municipal Court</span>
              </Link>
              <Link href="/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Criminal Misdemeanor Defense</span>
                <span className="block text-sm text-gray-600 mt-1">Athens Municipal Court</span>
              </Link>
              <Link href="/locations/athens-county/personal-injury-athens-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Personal Injury</span>
                <span className="block text-sm text-gray-600 mt-1">Athens County</span>
              </Link>
              <Link href="/locations/athens-county/business-formation-llc-athens-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Business & LLC Formation</span>
                <span className="block text-sm text-gray-600 mt-1">Athens County</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

