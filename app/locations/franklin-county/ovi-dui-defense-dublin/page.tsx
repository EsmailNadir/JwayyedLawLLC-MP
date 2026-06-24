import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Dublin OVI Defense Attorney | Jwayyed Law LLC',
  description: 'OVI arrest in Dublin? ALS appeal 30-day deadline. Dublin Mayor\'s Court and FCMC. U.S. 33 and S.R. 161 enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Dublin OVI lawyer', 'Dublin DUI attorney', 'Dublin Ohio OVI defense', 'Dublin Ohio drunk driving', 'Franklin County OVI Dublin'],
  openGraph: {
    title: 'Dublin OVI Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-dublin',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-dublin' },
};

export default function DublinOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — OVI/DUI Defense in Dublin", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Dublin", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-dublin"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OVITemplate suburb="Dublin" />
    </>
  );
}
