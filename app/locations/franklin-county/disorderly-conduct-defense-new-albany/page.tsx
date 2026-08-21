import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'New Albany Disorderly Conduct Defense | Jwayyed Law LLC',
  description: 'Disorderly conduct defense attorney in New Albany, Ohio — ORC 2917.11 charges at Franklin County Municipal Court. Jwayyed Law LLC. (614) 285-5482.',
  keywords: ['New Albany disorderly conduct lawyer', 'New Albany disorderly conduct defense', 'New Albany Ohio disorderly conduct'],
  openGraph: {
    title: 'New Albany Disorderly Conduct Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-new-albany',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-new-albany' },
};

export default function NewAlbanyDisorderlyPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Disorderly Conduct Defense in New Albany", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "New Albany", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-new-albany"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DisorderlyConductTemplate suburb="New Albany" />
    </>
  );
}
