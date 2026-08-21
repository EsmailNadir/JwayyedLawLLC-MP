import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Groveport Disorderly Conduct Defense | Jwayyed Law LLC',
  description: 'Disorderly conduct defense attorney in Groveport, Ohio — ORC 2917.11 charges at Franklin County Municipal Court. Jwayyed Law LLC. (614) 285-5482.',
  keywords: ['Groveport disorderly conduct lawyer', 'Groveport disorderly conduct defense', 'Groveport Ohio disorderly conduct'],
  openGraph: {
    title: 'Groveport Disorderly Conduct Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-groveport',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-groveport' },
};

export default function GroveportDisorderlyPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Disorderly Conduct Defense in Groveport", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Groveport", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-groveport"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DisorderlyConductTemplate suburb="Groveport" />
    </>
  );
}
