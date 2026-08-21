import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Grove City Disorderly Conduct Defense | Jwayyed Law LLC',
  description: 'Criminal defense attorney in Grove City, Ohio — assault, domestic violence, drug & theft charges. Franklin County Municipal Court. (614) 285-5482.',
  keywords: ['Grove City disorderly conduct lawyer', 'Grove City disorderly conduct defense', 'Grove City Ohio disorderly conduct'],
  openGraph: {
    title: 'Grove City Disorderly Conduct Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-grove-city',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-grove-city' },
};

export default function GroveCityDisorderlyPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Disorderly Conduct Defense in Grove City", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Grove City", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-grove-city"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DisorderlyConductTemplate suburb="Grove City" />
    </>
  );
}
