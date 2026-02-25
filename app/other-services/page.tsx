import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';
import { otherServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Other Legal Services | Estate Planning, Probate, Dispute Resolution | Jwayyed Law LLC',
  description: 'Comprehensive legal services including estate planning, probate, and dispute resolution in Columbus, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['estate planning Columbus OH', 'probate attorney Ohio', 'dispute resolution attorney'],
  openGraph: {
    title: 'Other Legal Services | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services',
  },
  alternates: { canonical: '/other-services' },
};

const breadcrumbItems = [{ label: 'Other Services', href: '/other-services' }];

export default function OtherServicesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Other Legal Services"
        description="Comprehensive legal services including estate planning, probate, and dispute resolution."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Additional Legal Services</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              At Jwayyed Law LLC, we provide comprehensive legal services beyond criminal defense, OVI/DUI defense, personal injury, civil litigation, and business law. Our additional services include estate planning, probate administration, and dispute resolution.
            </p>

            <LocationsWeServe title="Other Services" />

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {otherServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all"
                >
                  <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">{service.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

