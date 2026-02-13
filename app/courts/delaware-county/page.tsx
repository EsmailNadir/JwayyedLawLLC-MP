import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Delaware County Court Representation | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced legal representation in Delaware County courts including Municipal Courts. Skilled representation in Delaware County, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Delaware County court attorney', 'Delaware County Municipal Court'],
  openGraph: {
    title: 'Delaware County Court Representation | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/delaware-county',
  },
  alternates: { canonical: '/courts/delaware-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Delaware County', href: '/courts/delaware-county' },
];

export default function DelawareCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Delaware County Court Representation"
        description="Experienced legal representation in Delaware County courts. Serving Delaware County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Delaware County Court Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Delaware County courts handle various legal matters including criminal cases, OVI/DUI charges, civil disputes, and traffic violations. At Jwayyed Law LLC, we provide experienced representation in Delaware County courts including Delaware County Municipal Court. Please note that we do not handle immigration matters, juvenile matters, or probate matters in these courts.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s OVI laws are governed by Ohio Revised Code 4511.19 and related provisions. Under changes effective April 9, 2025 (House Bill 37), first-offense OVI carries increased minimum fines, and courts may waive the 15-day hard license suspension if the defendant agrees to an ignition interlock device. Administrative license suspension (ALS) appeals must be requested within 30 days of arrest. Delaware County Municipal Court follows these state laws and local rules for arraignments, pretrials, and sentencing. For misdemeanor criminal charges, Ohio Revised Code sets maximum penalties (e.g., up to 180 days jail for first-degree misdemeanors); an attorney can help negotiate outcomes and protect your record.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Delaware County Courts</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/courts/delaware-county-municipal-court" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Delaware County Municipal Court</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Misdemeanor cases, OVI/DUI, and traffic violations</p>
              </Link>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC for Delaware County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our attorney understands Delaware County Municipal Court procedures, local prosecutor practices, and current Ohio law. We represent clients in OVI/DUI defense, misdemeanor criminal defense, traffic cases, and civil matters within the court&apos;s jurisdiction. If you have a case in Delaware County, contact us to schedule a consultation and discuss your options.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

