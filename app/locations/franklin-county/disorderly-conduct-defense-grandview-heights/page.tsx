import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Grandview Heights Disorderly Conduct | Jwayyed Law LLC',
  description: 'Disorderly conduct charge in Grandview Heights? R.C. 2917.11. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grandview Heights disorderly conduct lawyer', 'Grandview Heights disorderly conduct defense', 'Grandview Heights Ohio disorderly conduct'],
  openGraph: {
    title: 'Grandview Heights Disorderly Conduct | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-grandview-heights',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-grandview-heights' },
};

export default function GrandviewHeightsDisorderlyPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Disorderly Conduct Defense in Grandview Heights", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Grandview Heights", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-grandview-heights"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DisorderlyConductTemplate suburb="Grandview Heights" />
    </>
  );
}
