import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clinton County Court Representation | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced legal representation in Clinton County courts including Wilmington Municipal Court. Skilled representation in Clinton County, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Clinton County court attorney', 'Wilmington Municipal Court'],
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
              Clinton County is served by the Clinton County Municipal Court, located in Wilmington, Ohio (the county seat). The court handles misdemeanor criminal cases, OVI/DUI charges, traffic violations, civil disputes up to $15,000, small claims, and landlord-tenant matters. At Jwayyed Law LLC, we provide experienced representation in Clinton County courts including Wilmington Municipal Court. Please note that we do not handle immigration matters, juvenile matters, probate matters, or felony cases in this court.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Clinton County Courts</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Link href="/courts/wilmington-municipal-court" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Wilmington Municipal Court (Clinton County Municipal Court)</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">69 N South Street, Wilmington, OH 45177. Misdemeanor cases, OVI/DUI, traffic violations, and civil matters.</p>
              </Link>
            </div>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio OVI law (Ohio Revised Code 4511.19) and House Bill 37 (effective April 9, 2025) set mandatory minimums for fines, license suspension, and in some cases ignition interlock. First-offense OVI in Ohio is a first-degree misdemeanor with a minimum fine of $565 and possible jail time. You have 30 days from arrest to request an administrative license suspension (ALS) hearing. Wilmington Municipal Court follows state law and local rules; having an attorney who knows the court and current penalties can make a significant difference in your case.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC for Clinton County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our attorney represents clients in Wilmington Municipal Court (Clinton County Municipal Court) for misdemeanor criminal defense, OVI/DUI defense, traffic matters, and civil cases within the court&apos;s jurisdiction. We stay current on Ohio law and work to protect your rights and achieve the best possible outcome. Contact us to schedule a consultation.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

