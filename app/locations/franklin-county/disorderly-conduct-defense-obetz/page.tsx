import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Obetz Disorderly Conduct Defense | Jwayyed Law LLC',
  description: 'Criminal defense attorney serving Obetz, Ohio. Assault, domestic violence, drug charges, theft, and more — Franklin County Municipal Court. Call (614) 285-5482.',
  keywords: ['Obetz disorderly conduct lawyer', 'Obetz disorderly conduct defense', 'Obetz Ohio disorderly conduct'],
  openGraph: {
    title: 'Obetz Disorderly Conduct Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-obetz',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-obetz' },
};

export default function ObetzDisorderlyPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Disorderly Conduct Defense in Obetz", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Obetz", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-obetz"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DisorderlyConductTemplate suburb="Obetz" />
    </>
  );
}
