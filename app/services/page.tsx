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
    'Explore legal services offered by Jwayyed Law LLC across Ohio: criminal defense, OVI/DUI, personal injury, civil litigation, business law, and more.',
  openGraph: {
    title: 'Our Legal Services | Jwayyed Law LLC',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
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
    <section className="py-10 sm:py-12 border-b border-navy-950/10 last:border-b-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="jw-serif text-2xl sm:text-3xl font-bold text-navy-950 mb-3">
          {heading}
        </h2>
        <p className="text-sm sm:text-base text-navy-950/80 mb-5">
          {intro}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block p-4 bg-white border border-navy-950/10 hover:shadow-[inset_4px_0_0_#1f5fa8] transition-all group"
            >
              <h3 className="font-semibold text-navy-950 mb-1">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-sm text-navy-950/70">
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

