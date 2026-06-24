import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Pickerington OVI Defense Attorney | Jwayyed Law LLC',
  description: 'OVI arrest in Pickerington? ALS appeal 30-day deadline. Pickerington Mayor\'s Court and FCMC. I-270 and S.R. 256 enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Pickerington OVI lawyer', 'Pickerington DUI attorney', 'Pickerington Ohio OVI defense', 'Franklin County OVI Pickerington'],
  openGraph: {
    title: 'Pickerington OVI Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-pickerington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-pickerington' },
};

export default function PickeringtonOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — OVI/DUI Defense in Pickerington", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Pickerington", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-pickerington"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OVITemplate suburb="Pickerington" />
    </>
  );
}
