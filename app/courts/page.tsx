import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ohio Courts | County & Municipal Court Representation | Jwayyed Law LLC',
  description: 'Experienced legal representation in Ohio county and municipal courts. Skilled representation for criminal, OVI, and civil matters in courts throughout Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Ohio courts attorney', 'county court lawyer', 'municipal court attorney', 'Franklin County court lawyer'],
  openGraph: {
    title: 'Ohio Courts | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts',
  },
  alternates: { canonical: '/courts' },
};

const breadcrumbItems = [{ label: 'Courts', href: '/courts' }];

const counties = [
  { name: 'Franklin County', href: '/courts/franklin-county' },
  { name: 'Delaware County', href: '/courts/delaware-county' },
  { name: 'Butler County', href: '/courts/butler-county' },
  { name: 'Greene County', href: '/courts/greene-county' },
  { name: 'Montgomery County', href: '/courts/montgomery-county' },
  { name: 'Pickaway County', href: '/courts/pickaway-county' },
  { name: 'Athens County', href: '/courts/athens-county' },
  { name: 'Morrow County', href: '/courts/morrow-county' },
  { name: 'Clinton County', href: '/courts/clinton-county' },
];

export default function CourtsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Courts Representation"
        description="Experienced legal representation in county and municipal courts throughout Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Ohio Courts Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              At Jwayyed Law LLC, we provide experienced legal representation in county and municipal courts throughout Ohio. Our attorney understands court procedures, prosecutor practices, and local court expectations necessary to achieve favorable outcomes for our clients. Major metro areas such as Columbus and the greater Cincinnati area have multiple courts and counties—we represent clients in the Ohio counties and courts listed below. Please note that individual courts may have local rules, procedures, or filing requirements that differ from general Ohio practice.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio county and municipal courts handle misdemeanor criminal cases, OVI/DUI charges under Ohio Revised Code 4511.19 (including changes under House Bill 37 effective April 2025), traffic offenses, civil disputes within jurisdictional limits, and in some courts small claims and landlord-tenant matters. Each county may have one or more municipal courts; knowing which court has jurisdiction over your case and how that court operates is important. We represent clients in the counties listed below—click any county for court-specific information, addresses, and the practice areas we handle in that jurisdiction.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Courts &amp; Counties We Serve</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              Select a county or court below to view court information, local procedures, and how we can help with OVI/DUI defense, criminal defense, personal injury, business matters, or other services in that jurisdiction.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {counties.map((county) => (
                <Link key={county.href} href={county.href} className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                  <h4 className="font-semibold text-gray-900">{county.name}</h4>
                </Link>
              ))}
            </div>
            <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mt-8 mb-4">Municipal Courts</h4>
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              <Link href="/courts/franklin-county-municipal-court" className="block p-3 border border-gray-200 rounded-lg hover:border-orange-500 transition-all text-gray-700">Franklin County Municipal Court</Link>
              <Link href="/courts/delaware-county-municipal-court" className="block p-3 border border-gray-200 rounded-lg hover:border-orange-500 transition-all text-gray-700">Delaware County Municipal Court</Link>
              <Link href="/courts/circleville-municipal-court" className="block p-3 border border-gray-200 rounded-lg hover:border-orange-500 transition-all text-gray-700">Circleville Municipal Court</Link>
              <Link href="/courts/athens-municipal-court" className="block p-3 border border-gray-200 rounded-lg hover:border-orange-500 transition-all text-gray-700">Athens Municipal Court</Link>
              <Link href="/courts/morrow-county-municipal-court" className="block p-3 border border-gray-200 rounded-lg hover:border-orange-500 transition-all text-gray-700">Morrow County Municipal Court</Link>
              <Link href="/courts/wilmington-municipal-court" className="block p-3 border border-gray-200 rounded-lg hover:border-orange-500 transition-all text-gray-700">Wilmington Municipal Court</Link>
              <Link href="/courts/hamilton-municipal-court" className="block p-3 border border-gray-200 rounded-lg hover:border-orange-500 transition-all text-gray-700">Hamilton Municipal Court</Link>
              <Link href="/courts/fairborn-municipal-court" className="block p-3 border border-gray-200 rounded-lg hover:border-orange-500 transition-all text-gray-700">Fairborn Municipal Court</Link>
              <Link href="/courts/dayton-municipal-court" className="block p-3 border border-gray-200 rounded-lg hover:border-orange-500 transition-all text-gray-700">Dayton Municipal Court</Link>
            </div>
            <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mt-8 mb-4">Location-Specific Practice Areas</h4>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              We serve clients in these counties for criminal defense, OVI/DUI, personal injury, and business formation. Select a practice area and county below:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 mb-8 text-sm">
              <Link href="/locations/franklin-county/personal-injury-franklin-county" className="text-accent hover:underline">Franklin County – Personal Injury</Link>
              <Link href="/locations/franklin-county/business-formation-llc-franklin-county" className="text-accent hover:underline">Franklin County – Business Formation</Link>
              <Link href="/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court" className="text-accent hover:underline">Delaware – Criminal Defense</Link>
              <Link href="/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court" className="text-accent hover:underline">Delaware – OVI/DUI Defense</Link>
              <Link href="/locations/delaware-county/personal-injury-delaware-county" className="text-accent hover:underline">Delaware – Personal Injury</Link>
              <Link href="/locations/delaware-county/business-formation-llc-delaware-county" className="text-accent hover:underline">Delaware – Business Formation</Link>
              <Link href="/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts" className="text-accent hover:underline">Butler – Criminal Defense</Link>
              <Link href="/locations/butler-county/ovi-dui-defense-butler-county-area-courts" className="text-accent hover:underline">Butler – OVI/DUI Defense</Link>
              <Link href="/locations/butler-county/personal-injury-butler-county" className="text-accent hover:underline">Butler – Personal Injury</Link>
              <Link href="/locations/butler-county/business-formation-llc-butler-county" className="text-accent hover:underline">Butler – Business Formation</Link>
              <Link href="/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court" className="text-accent hover:underline">Greene – Criminal Defense</Link>
              <Link href="/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court" className="text-accent hover:underline">Greene – OVI/DUI Defense</Link>
              <Link href="/locations/greene-county/personal-injury-greene-county" className="text-accent hover:underline">Greene – Personal Injury</Link>
              <Link href="/locations/greene-county/business-formation-llc-greene-county" className="text-accent hover:underline">Greene – Business Formation</Link>
              <Link href="/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court" className="text-accent hover:underline">Montgomery – Criminal Defense</Link>
              <Link href="/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court" className="text-accent hover:underline">Montgomery – OVI/DUI Defense</Link>
              <Link href="/locations/montgomery-county/personal-injury-montgomery-county" className="text-accent hover:underline">Montgomery – Personal Injury</Link>
              <Link href="/locations/montgomery-county/business-formation-llc-montgomery-county" className="text-accent hover:underline">Montgomery – Business Formation</Link>
              <Link href="/locations/pickaway-county/criminal-misdemeanor-defense-circleville-municipal-court" className="text-accent hover:underline">Pickaway – Criminal Defense</Link>
              <Link href="/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court" className="text-accent hover:underline">Pickaway – OVI/DUI Defense</Link>
              <Link href="/locations/pickaway-county/personal-injury-pickaway-county" className="text-accent hover:underline">Pickaway – Personal Injury</Link>
              <Link href="/locations/pickaway-county/business-formation-llc-pickaway-county" className="text-accent hover:underline">Pickaway – Business Formation</Link>
              <Link href="/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court" className="text-accent hover:underline">Athens – Criminal Defense</Link>
              <Link href="/locations/athens-county/ovi-dui-defense-athens-municipal-court" className="text-accent hover:underline">Athens – OVI/DUI Defense</Link>
              <Link href="/locations/athens-county/personal-injury-athens-county" className="text-accent hover:underline">Athens – Personal Injury</Link>
              <Link href="/locations/athens-county/business-formation-llc-athens-county" className="text-accent hover:underline">Athens – Business Formation</Link>
              <Link href="/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court" className="text-accent hover:underline">Morrow – Criminal Defense</Link>
              <Link href="/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court" className="text-accent hover:underline">Morrow – OVI/DUI Defense</Link>
              <Link href="/locations/morrow-county/personal-injury-morrow-county" className="text-accent hover:underline">Morrow – Personal Injury</Link>
              <Link href="/locations/morrow-county/business-formation-llc-morrow-county" className="text-accent hover:underline">Morrow – Business Formation</Link>
              <Link href="/locations/clinton-county/criminal-misdemeanor-defense-clinton-county-wilmington-municipal-court" className="text-accent hover:underline">Clinton – Criminal Defense</Link>
              <Link href="/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court" className="text-accent hover:underline">Clinton – OVI/DUI Defense</Link>
              <Link href="/locations/clinton-county/personal-injury-clinton-county" className="text-accent hover:underline">Clinton – Personal Injury</Link>
              <Link href="/locations/clinton-county/business-formation-llc-clinton-county" className="text-accent hover:underline">Clinton – Business Formation</Link>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated court representation in Ohio county and municipal courts. We understand that court proceedings require experienced representation. Our attorney works diligently to understand court procedures, develop strategies, and achieve favorable outcomes for our clients.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              We stay current on Ohio law—including OVI and criminal penalties, administrative license suspension rules, and civil procedure—so you get accurate advice. We represent clients in Columbus, Cincinnati, Dayton, and throughout the state. If you have a case in one of the counties above or need guidance on which court applies to your situation, contact us to schedule a consultation.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

