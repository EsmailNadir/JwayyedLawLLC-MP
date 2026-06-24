import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'New Albany OVI Defense Attorney | Jwayyed Law LLC',
  description: 'OVI arrest in New Albany? ALS appeal 30-day deadline. New Albany Mayor\'s Court and FCMC. Johnstown Rd and I-270 enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['New Albany OVI lawyer', 'New Albany DUI attorney', 'New Albany Ohio OVI defense', 'Franklin County OVI New Albany'],
  openGraph: {
    title: 'New Albany OVI Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-new-albany',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-new-albany' },
};

export default function NewAlbanyOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — OVI/DUI Defense in New Albany", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "New Albany", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-new-albany"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OVITemplate suburb="New Albany" />
    </>
  );
}
