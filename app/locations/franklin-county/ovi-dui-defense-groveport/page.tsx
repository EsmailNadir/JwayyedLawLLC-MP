import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Groveport OVI Defense Attorney | Jwayyed Law LLC',
  description: 'OVI arrest in Groveport? ALS appeal 30-day deadline. Groveport Mayor\'s Court and FCMC. Rickenbacker and I-270 enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Groveport OVI lawyer', 'Groveport DUI attorney', 'Groveport Ohio OVI defense', 'Franklin County OVI Groveport'],
  openGraph: {
    title: 'Groveport OVI Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-groveport',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-groveport' },
};

export default function GroveportOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — OVI/DUI Defense in Groveport", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Groveport", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-groveport"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OVITemplate suburb="Groveport" />
    </>
  );
}
