import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Greene County Court Representation | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced legal representation in Greene County courts including Municipal Courts. Skilled representation in Greene County, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Greene County court attorney', 'Fairborn Municipal Court'],
  openGraph: {
    title: 'Greene County Court Representation | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/greene-county',
  },
  alternates: { canonical: '/courts/greene-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
];

export default function GreeneCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Greene County Court Representation"
        description="Experienced legal representation in Greene County courts. Serving Greene County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Greene County Court Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Greene County courts handle various legal matters including criminal cases, OVI/DUI charges, civil disputes, and traffic violations. At Jwayyed Law LLC, we provide experienced representation in Greene County courts including Fairborn Municipal Court. Please note that we do not handle immigration matters, juvenile matters, or probate matters in these courts.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI cases in Ohio are prosecuted under Ohio Revised Code 4511.19. Under House Bill 37 (effective April 9, 2025), minimum fines for OVI convictions increased, and oral fluid testing is now an authorized testing method. First-time offenders may be eligible for limited driving privileges with an ignition interlock in lieu of the full 15-day hard suspension in some cases. License reinstatement fees were reduced to $315. Fairborn Municipal Court applies these state laws and local procedures for OVI, misdemeanors, and traffic cases. An experienced attorney can advise you on defenses, ALS appeals (must be requested within 30 days of arrest), and sentencing options.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Greene County Courts</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/courts/fairborn-municipal-court" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Fairborn Municipal Court</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Misdemeanor cases, OVI/DUI, and traffic violations</p>
              </Link>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC for Greene County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              We represent clients in Fairborn Municipal Court and understand Greene County court procedures, prosecutor practices, and current Ohio law. Whether you face OVI charges, a misdemeanor, or a traffic matter, we work to protect your rights and achieve the best possible outcome. Contact us to schedule a consultation.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

