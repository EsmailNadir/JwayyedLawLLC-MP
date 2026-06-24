import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Whitehall OVI Defense Attorney | Jwayyed Law LLC',
  description: 'OVI arrest in Whitehall? ALS appeal 30-day deadline. Whitehall Mayor\'s Court and FCMC. I-270 and Main Street enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Whitehall OVI lawyer', 'Whitehall DUI attorney', 'Whitehall Ohio OVI defense', 'Franklin County OVI Whitehall'],
  openGraph: {
    title: 'Whitehall OVI Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-whitehall',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-whitehall' },
};

export default function WhitehallOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — OVI/DUI Defense in Whitehall", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Whitehall", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-whitehall"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OVITemplate suburb="Whitehall" />
    </>
  );
}
