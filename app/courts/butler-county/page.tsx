import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Butler County Court Representation | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced legal representation in Butler County courts including Municipal Courts. Skilled representation in Butler County, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Butler County court attorney', 'Hamilton Municipal Court'],
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
              The greater Cincinnati area has multiple courts and counties. Butler County is served by three Area Courts (I, II, and III) located in Oxford, Hamilton, and West Chester, plus Hamilton Municipal Court in the city of Hamilton. Butler County courts handle various legal matters including criminal cases, OVI/DUI charges, civil disputes, and traffic violations. At Jwayyed Law LLC, we provide experienced representation in Butler County courts. Please note that we do not handle immigration matters, juvenile matters, or probate matters in these courts.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Butler County Area Courts I, II & III</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              Located in: <strong>Oxford</strong>, <strong>Hamilton</strong>, and <strong>West Chester</strong>. These three Area Courts handle misdemeanor and traffic cases, OVI, domestic violence, and civil matters within their jurisdictions. Each court has its own territorial jurisdiction—for example, Area I serves the City of Oxford and Hanover, Milford, Morgan, Oxford, Reily, and Wayne Townships. If your case is in one of these courts, having an attorney who knows the court, the judges, and local procedures can make a real difference. We represent clients in all three Area Courts and can help with misdemeanor criminal defense, OVI/DUI, traffic matters, and civil cases within the court&apos;s jurisdictional limits.
            </p>
            <div className="grid md:grid-cols-1 gap-6 mb-6">
              <div id="area-i-court" className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Butler County Area I Court</h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif]">118 West High Street, Oxford, OH 45056</p>
                <p className="text-sm text-gray-600 mt-1">Phone: (513) 523-4748</p>
                <p className="text-sm text-gray-600 mt-1">Serves: City of Oxford; Hanover, Milford, Morgan, Oxford, Reily, and Wayne Townships</p>
                <p className="text-sm mt-1">
                  <a href="https://www.google.com/maps?q=118+West+High+Street,+Oxford,+OH+45056" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Get directions (Google Maps)</a>
                </p>
              </div>
              <div id="area-ii-court" className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Butler County Area II Court</h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif]">101 High St, Hamilton, OH 45011</p>
                <p className="text-sm text-gray-600 mt-1">Phone: (513) 887-3459</p>
                <p className="text-sm mt-1">
                  <a href="https://www.google.com/maps?q=101+High+St,+Hamilton,+OH+45011" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Get directions (Google Maps)</a>
                </p>
              </div>
              <div id="area-iii-court" className="p-6 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Butler County Area III Court</h4>
                <p className="text-gray-700 font-['Inter',_'Arial',_sans-serif]">9577 Beckett Rd #300, West Chester, OH 45069</p>
                <p className="text-sm text-gray-600 mt-1">Phone: (513) 867-5070</p>
                <p className="text-sm mt-1">
                  <a href="https://www.google.com/maps?q=9577+Beckett+Rd,+West+Chester,+OH+45069" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Get directions (Google Maps)</a>
                </p>
              </div>
            </div>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-600 text-sm mb-8">
              For more information on jurisdiction and hours, visit the Butler County Area Courts at <a href="https://areacourts.bcohio.gov" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">areacourts.bcohio.gov</a> (<a href="https://areacourts.bcohio.gov/about/area_i_court.php" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Area I jurisdiction</a>).
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Hamilton Municipal Court (City of Hamilton)</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              The City of Hamilton has its own Municipal Court, separate from the Butler County Area II Court (which is also in Hamilton). Hamilton Municipal Court is located at 700 Hanover Street, Hamilton, OH 45011. If your case is in Hamilton Municipal Court, we can help with misdemeanor criminal defense, OVI/DUI, traffic violations, and civil matters within the court&apos;s jurisdiction. Our attorney is familiar with court procedures and can work to achieve the best possible outcome for your case.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/courts/hamilton-municipal-court" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Hamilton Municipal Court</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">700 Hanover Street, Hamilton, OH 45011. Misdemeanor cases, OVI/DUI, and traffic violations.</p>
              </Link>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC for Butler County Courts</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We represent clients in the Butler County Area Courts (I, II, and III) and in Hamilton Municipal Court. Whether your case is in Oxford, Hamilton, or West Chester, we can help with misdemeanor criminal defense, OVI/DUI charges, traffic matters, and civil cases within the court&apos;s jurisdictional limits. Our attorney understands local procedures and works to protect your rights and achieve the best possible outcome. Contact us to discuss your case and schedule a consultation.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

