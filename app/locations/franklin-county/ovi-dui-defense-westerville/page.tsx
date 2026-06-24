import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Westerville OVI Defense Attorney | Jwayyed Law LLC',
  description: 'OVI arrest in Westerville? ALS appeal 30-day deadline. Westerville Mayor\'s Court and FCMC. I-270 and S.R. 3 enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Westerville OVI lawyer', 'Westerville DUI attorney', 'Westerville Ohio OVI defense', 'Franklin County OVI Westerville'],
  openGraph: {
    title: 'Westerville OVI Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-westerville',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-westerville' },
};

export default function WestervilleOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — OVI/DUI Defense in Westerville", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Westerville", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-westerville"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OVITemplate suburb="Westerville" />
    </>
  );
}
