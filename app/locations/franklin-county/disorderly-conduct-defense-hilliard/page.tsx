import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Hilliard Disorderly Conduct Defense | Jwayyed Law LLC',
  description: 'Criminal defense attorney serving Hilliard, Ohio. Assault, domestic violence, drug charges, theft, and more — Franklin County Municipal Court. Call (614) 285-5482.',
  keywords: ['Hilliard disorderly conduct lawyer', 'Hilliard disorderly conduct defense', 'Hilliard Ohio disorderly conduct'],
  openGraph: {
    title: 'Hilliard Disorderly Conduct Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-hilliard',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-hilliard' },
};

export default function HilliardDisorderlyPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Disorderly Conduct Defense in Hilliard", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Hilliard", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-hilliard"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DisorderlyConductTemplate suburb="Hilliard" />
    </>
  );
}
