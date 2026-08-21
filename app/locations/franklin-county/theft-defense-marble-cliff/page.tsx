import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Marble Cliff Theft Defense Attorney | Jwayyed Law LLC',
  description: 'Theft & shoplifting defense attorney serving Marble Cliff, Ohio — Franklin County Municipal Court. Protect your record. Call (614) 285-5482.',
  keywords: ['Marble Cliff theft lawyer', 'Marble Cliff theft attorney', 'Marble Cliff Ohio theft defense', 'Franklin County theft Marble Cliff'],
  openGraph: {
    title: 'Marble Cliff Theft Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-marble-cliff',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-marble-cliff' },
};

export default function MarbleCliffTheftPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Theft Defense in Marble Cliff", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Marble Cliff", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/theft-defense-marble-cliff"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <TheftTemplate suburb="Marble Cliff" />
    </>
  );
}
