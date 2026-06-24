import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Bexley Disorderly Conduct Defense | Jwayyed Law LLC',
  description: 'Disorderly conduct charge in Bexley? R.C. 2917.11 minor misdemeanor to M4. Bexley Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Bexley disorderly conduct lawyer', 'Bexley disorderly conduct attorney', 'Bexley Ohio disorderly conduct defense', 'Franklin County disorderly Bexley'],
  openGraph: {
    title: 'Bexley Disorderly Conduct Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-bexley',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-bexley' },
};

export default function BexleyDisorderlyPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Disorderly Conduct Defense in Bexley", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Bexley", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-bexley"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DisorderlyConductTemplate suburb="Bexley" />
    </>
  );
}
