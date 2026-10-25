import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import { LinkGrid, Section } from '@/components/practice';
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
  title: 'Our Legal Services',
  description:
    'Legal services from Jwayyed Law LLC across Ohio: criminal defense, OVI/DUI, personal injury, civil litigation, business law, estate planning and probate.',
  openGraph: {
    title: 'Our Legal Services | Jwayyed Law LLC',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/services',
  },
};

const breadcrumbItems = [{ label: 'Our Services', href: '/services' }];


const AREAS: { id: string; heading: string; intro: string; href: string; services: ServiceCard[] }[] = [
  {
    id: 'criminal-defense',
    heading: 'Criminal defense',
    intro: 'Misdemeanor criminal defense throughout Ohio, including assault, theft, traffic-related offenses and record sealing.',
    href: '/criminal-defense',
    services: criminalDefenseServices,
  },
  {
    id: 'ovi-dui-defense',
    heading: 'OVI / DUI defense',
    intro: 'OVI/DUI defense for first, second and third offenses, including high-tier OVI and license issues.',
    href: '/ovi-dui-defense',
    services: oviServices,
  },
  {
    id: 'personal-injury',
    heading: 'Personal injury',
    intro: 'Representation for people injured in car, truck and motorcycle crashes, falls and other serious accidents.',
    href: '/personal-injury',
    services: personalInjuryServices,
  },
  {
    id: 'civil',
    heading: 'Civil litigation',
    intro: 'Civil disputes involving contracts, real estate, landlord-tenant issues, debt collection defense and more.',
    href: '/civil',
    services: civilServices,
  },
  {
    id: 'business',
    heading: 'Business law',
    intro: 'Business formation, contracts, compliance and dispute resolution for Ohio businesses.',
    href: '/business',
    services: businessServices,
  },
  {
    id: 'other-services',
    heading: 'Estate planning, probate and more',
    intro: 'Estate planning, probate and dispute resolution to protect your family and assets.',
    href: '/other-services',
    services: otherServices,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Legal services across Ohio"
        description="Criminal defense, OVI/DUI, personal injury, civil litigation, business law, and estate planning and probate."
      />

      {/* Jump list to each area */}
      <nav aria-label="Practice areas on this page" className="bg-navy-900 text-white">
        <ul className="max-w-[1440px] mx-auto px-5 sm:px-8 py-6 flex flex-wrap gap-x-8 gap-y-3">
          {AREAS.map((a) => (
            <li key={a.id}>
              <a href={`#${a.id}`} className="font-medium text-white/85 hover:text-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky">
                {a.heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {AREAS.map((a, i) => (
        <Section key={a.id} id={a.id} title={a.heading} tone={i % 2 ? 'ice' : 'white'} intro={<p>{a.intro}</p>}>
          <LinkGrid links={a.services.map((s) => ({ href: s.href, title: s.title, subtitle: s.description }))} />
          <p>
            <Link href={a.href}>Overview of {a.heading.toLowerCase()}</Link>
          </p>
        </Section>
      ))}

      <ContactCTA />
    </>
  );
}
