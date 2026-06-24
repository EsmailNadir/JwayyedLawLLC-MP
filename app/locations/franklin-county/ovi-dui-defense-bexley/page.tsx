import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Bexley OVI Defense Attorney | Jwayyed Law LLC',
  description: 'OVI/DUI arrest in Bexley? ALS appeal deadline 30 days. Bexley Mayor\'s Court and Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Bexley OVI lawyer', 'Bexley DUI attorney', 'Bexley Ohio OVI defense', 'Franklin County OVI Bexley', 'Bexley drunk driving defense'],
  openGraph: {
    title: 'Bexley OVI Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-bexley',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-bexley' },
};

export default function BexleyOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — OVI/DUI Defense in Bexley", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Bexley", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-bexley"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OVITemplate suburb="Bexley" />
    </>
  );
}
