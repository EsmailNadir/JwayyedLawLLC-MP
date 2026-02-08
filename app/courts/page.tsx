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
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Ohio Counties We Serve</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {counties.map((county) => (
                <Link key={county.href} href={county.href} className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                  <h4 className="font-semibold text-gray-900">{county.name}</h4>
                </Link>
              ))}
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated court representation in Ohio county and municipal courts. We understand that court proceedings require experienced representation. Our attorney works diligently to understand court procedures, develop strategies, and achieve favorable outcomes for our clients.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

