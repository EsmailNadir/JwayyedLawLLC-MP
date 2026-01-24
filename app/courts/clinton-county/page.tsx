import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clinton County Court Representation | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced legal representation in Clinton County courts including Common Pleas and Wilmington Municipal Court. Skilled representation in Clinton County, Ohio. Free consultation: (614) 285-5482',
  keywords: ['Clinton County court attorney', 'Clinton County Common Pleas', 'Wilmington Municipal Court'],
  openGraph: {
    title: 'Clinton County Court Representation | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/clinton-county',
  },
  alternates: { canonical: '/courts/clinton-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Clinton County', href: '/courts/clinton-county' },
];

export default function ClintonCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Clinton County Court Representation"
        description="Experienced legal representation in Clinton County courts. Serving Clinton County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Clinton County Court Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Clinton County courts handle various legal matters including criminal cases, OVI/DUI charges, civil disputes, and traffic violations. At Jwayyed Law LLC, we provide experienced representation in Clinton County courts including Common Pleas Court and Wilmington Municipal Court.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Clinton County Courts</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/courts/clinton-county-court-of-common-pleas" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Clinton County Court of Common Pleas</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Felony cases and major civil disputes</p>
              </Link>
              <Link href="/courts/wilmington-municipal-court" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Wilmington Municipal Court</h4>
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

