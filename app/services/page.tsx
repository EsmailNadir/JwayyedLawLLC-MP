import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  criminalDefenseServices,
  oviServices,
  personalInjuryServices,
  civilServices,
  businessServices,
  otherServices,
  ServiceCard,
} from '@/data/services';

export const metadata: Metadata = {
  title: 'Our Legal Services | Jwayyed Law LLC',
  description:
    'Explore all legal services offered by Jwayyed Law LLC across Ohio, including criminal defense, OVI/DUI defense, personal injury, civil litigation, business law, and other services.',
  alternates: {
    canonical: '/services',
  },
};

const breadcrumbItems = [{ label: 'Our Services', href: '/services' }];

function ServicesSection({
  heading,
  intro,
  services,
}: {
  heading: string;
  intro: string;
  services: ServiceCard[];
}) {
  return (
    <section className="py-10 sm:py-12 border-b border-gray-100 last:border-b-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          {heading}
        </h2>
        <p className="font-['Inter',_'Arial',_sans-serif] text-sm sm:text-base text-gray-700 mb-5">
          {intro}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all"
            >
              <h3 className="font-['Inter',_'Arial',_sans-serif] font-semibold text-gray-900 mb-1">
                {service.title}
              </h3>
              {service.description && (
                <p className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">
                  {service.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Our Legal Services"
        description="Comprehensive legal representation across Ohio in criminal defense, OVI/DUI, personal injury, civil litigation, business law, and more."
      />

      <main className="bg-white py-10 sm:py-12">
        <ServicesSection
          heading="Criminal Defense"
          intro="Misdemeanor criminal defense throughout Ohio, including assault, theft, traffic-related offenses, and record sealing."
          services={criminalDefenseServices}
        />
        <ServicesSection
          heading="OVI / DUI Defense"
          intro="Strategic OVI/DUI defense for first, second, and third offenses, including high-tier OVI and license issues."
          services={oviServices}
        />
        <ServicesSection
          heading="Personal Injury"
          intro="Representation for injury victims in car, truck, and motorcycle crashes, falls, and other serious accidents."
          services={personalInjuryServices}
        />
        <ServicesSection
          heading="Civil Litigation"
          intro="Civil disputes involving contracts, real estate, landlord-tenant issues, debt collection defense, and more."
          services={civilServices}
        />
        <ServicesSection
          heading="Business Law"
          intro="Business formation, contracts, compliance, and dispute resolution for Ohio businesses."
          services={businessServices}
        />
        <ServicesSection
          heading="Other Legal Services"
          intro="Estate planning, probate, and dispute resolution services tailored to protect your family and assets."
          services={otherServices}
        />
      </main>
    </>
  );
}

