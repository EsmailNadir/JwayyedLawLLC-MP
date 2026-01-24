import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fayette County Court Representation | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced legal representation in Fayette County courts including Common Pleas and Washington Court House Municipal Court. Skilled representation in Fayette County, Ohio. Free consultation: (614) 285-5482',
  keywords: ['Fayette County court attorney', 'Fayette County Common Pleas', 'Washington Court House Municipal Court'],
  openGraph: {
    title: 'Fayette County Court Representation | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/fayette-county',
  },
  alternates: { canonical: '/courts/fayette-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Fayette County', href: '/courts/fayette-county' },
];

export default function FayetteCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Fayette County Court Representation"
        description="Experienced legal representation in Fayette County courts. Serving Fayette County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Fayette County Court Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Fayette County courts handle various legal matters including criminal cases, OVI/DUI charges, civil disputes, and traffic violations. At Jwayyed Law LLC, we provide experienced representation in Fayette County courts including Common Pleas Court and Washington Court House Municipal Court.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Fayette County Courts</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/courts/fayette-county-court-of-common-pleas" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Fayette County Court of Common Pleas</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Felony cases and major civil disputes</p>
              </Link>
              <Link href="/courts/washington-court-house-municipal-court" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Washington Court House Municipal Court</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Misdemeanor cases, OVI/DUI, and traffic violations</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

