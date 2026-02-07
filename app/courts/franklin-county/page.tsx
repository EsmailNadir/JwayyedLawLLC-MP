import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Franklin County Court Representation | Columbus Attorney | Jwayyed Law LLC',
  description: 'Experienced legal representation in Franklin County courts including Municipal Courts. Skilled representation in Columbus, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Franklin County court attorney', 'Columbus court lawyer', 'Columbus Municipal Court'],
  openGraph: {
    title: 'Franklin County Court Representation | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/franklin-county',
  },
  alternates: { canonical: '/courts/franklin-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
];

export default function FranklinCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Court Representation"
        description="Experienced legal representation in Franklin County courts. Serving Columbus and throughout Franklin County."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Franklin County Court Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County courts in Columbus, Ohio, handle various legal matters including criminal cases, OVI/DUI, traffic, and civil disputes. At Jwayyed Law LLC, we provide experienced representation in Franklin County only for <strong>civil</strong>, <strong>business</strong>, and <strong>estate planning</strong> matters. We do not handle criminal defense, OVI/DUI, traffic violations, immigration, juvenile, or probate matters in Franklin County.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Franklin County Courts</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/courts/franklin-county-municipal-court" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Franklin County Municipal Court</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Civil, business, and estate planning representation. We do not handle criminal, OVI, or traffic matters in Franklin County.</p>
              </Link>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC for Franklin County Courts</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated civil, business, and estate planning representation in Franklin County Municipal Court. We understand that these matters require experienced representation. Our attorney works diligently to understand court procedures, develop strategies, and achieve favorable outcomes for our clients in Columbus and throughout Franklin County.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
