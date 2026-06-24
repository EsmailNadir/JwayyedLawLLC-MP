import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Worthington OVI Defense Attorney | Jwayyed Law LLC',
  description: 'OVI arrest in Worthington? ALS appeal 30-day deadline. Worthington Mayor\'s Court and FCMC. High Street and U.S. 23 enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Worthington OVI lawyer', 'Worthington DUI attorney', 'Worthington Ohio OVI defense', 'Franklin County OVI Worthington'],
  openGraph: {
    title: 'Worthington OVI Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-worthington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-worthington' },
};

export default function WorthingtonOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — OVI/DUI Defense in Worthington", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Worthington", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-worthington"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OVITemplate suburb="Worthington" />
    </>
  );
}
