import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Montgomery County Court Representation | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced legal representation in Montgomery County courts including Municipal Courts. Skilled representation in Montgomery County, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Montgomery County court attorney', 'Dayton Municipal Court'],
  openGraph: {
    title: 'Montgomery County Court Representation | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/montgomery-county',
  },
  alternates: { canonical: '/courts/montgomery-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
];

export default function MontgomeryCountyCourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Montgomery County Court Representation"
        description="Experienced legal representation in Montgomery County courts. Serving Montgomery County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Montgomery County Court Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Montgomery County courts handle various legal matters including criminal cases, OVI/DUI charges, civil disputes, and traffic violations. At Jwayyed Law LLC, we provide experienced representation in Montgomery County courts including Dayton Municipal Court. Please note that we do not handle immigration matters, juvenile matters, or probate matters in these courts.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              OVI in Ohio is defined and penalized under Ohio Revised Code 4511.19. Under House Bill 37 (effective April 9, 2025), minimum fines for first and repeat OVI convictions increased, and oral fluid testing is permitted as an additional testing method. First-offense defendants may in some cases receive limited driving privileges with an ignition interlock instead of the full 15-day hard suspension. License reinstatement fees are $315. Dayton Municipal Court handles OVI, misdemeanors, and traffic cases under these state laws and local procedures. If you were arrested for OVI, you have 30 days to request an administrative license suspension hearing. An attorney can help with ALS appeals, criminal defense, and sentencing mitigation.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Montgomery County Courts</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/courts/dayton-municipal-court" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Dayton Municipal Court</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Misdemeanor cases, OVI/DUI, and traffic violations</p>
              </Link>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC for Montgomery County</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              We represent clients in Dayton Municipal Court and throughout Montgomery County. Our attorney understands current Ohio OVI and criminal law, court procedures, and prosecutor practices. We work to protect your rights and achieve the best possible outcome. Contact us to schedule a consultation.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

