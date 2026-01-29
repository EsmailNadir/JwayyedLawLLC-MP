import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Butler County Court Representation | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced legal representation in Butler County courts including Common Pleas and Municipal Courts. Skilled representation in Butler County, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Butler County court attorney', 'Butler County Common Pleas', 'Hamilton Municipal Court'],
  openGraph: {
    title: 'Butler County Court Representation | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/butler-county',
  },
  alternates: { canonical: '/courts/butler-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Butler County', href: '/courts/butler-county' },
];

export default function ButlerCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Butler County Court Representation"
        description="Experienced legal representation in Butler County courts. Serving Butler County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Butler County Court Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Butler County courts handle various legal matters including criminal cases, OVI/DUI charges, civil disputes, and traffic violations. At Jwayyed Law LLC, we provide experienced representation in Butler County courts including Common Pleas Court and Municipal Courts.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Butler County Courts</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/courts/butler-county-court-of-common-pleas" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Butler County Court of Common Pleas</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Felony cases and major civil disputes</p>
              </Link>
              <Link href="/courts/hamilton-municipal-court" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Hamilton Municipal Court</h4>
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

