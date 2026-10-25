import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import { COUNTIES } from '@/components/LocationsWeServe';
import { LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Counties We Serve',
  description:
    'Jwayyed Law LLC represents clients in Franklin, Delaware, Butler, Greene, Montgomery, Pickaway, Athens, Morrow and Clinton counties, with local court guides for each.',
  alternates: { canonical: '/locations' },
  openGraph: {
    title: 'Ohio Counties We Serve | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

/**
 * The index every location breadcrumb points to ("Locations"). It did not
 * exist, so that crumb on 191 pages was a 404. Counties come from the same
 * list LocationsWeServe uses.
 */
export default function LocationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Locations', href: '/locations' }]} />
      <PageHero
        title="Ohio counties we serve"
        description="The firm is based in Columbus and represents clients in courts across nine Ohio counties. Each county page covers its courts and what to expect locally."
      />
      <Section title="Choose your county">
        <LinkGrid links={COUNTIES.map((c) => ({ href: `/locations/${c.slug}`, title: c.name, subtitle: c.subtitle }))} />
        <p>
          Looking for a specific court? See the <Link href="/courts">Ohio court guides</Link>.
        </p>
      </Section>
      <ContactCTA />
    </>
  );
}
