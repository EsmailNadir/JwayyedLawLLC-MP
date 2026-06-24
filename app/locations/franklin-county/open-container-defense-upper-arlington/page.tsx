import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Upper Arlington Open Container Defense | Jwayyed Law LLC',
  description: 'Open container citation in Upper Arlington? R.C. 4301.62. Upper Arlington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Upper Arlington open container lawyer', 'Upper Arlington open container defense', 'Upper Arlington Ohio open container'],
  openGraph: {
    title: 'Upper Arlington Open Container Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-upper-arlington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-upper-arlington' },
};

export default function UpperArlingtonOpenContainerPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Open Container Defense in Upper Arlington", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Upper Arlington", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/open-container-defense-upper-arlington"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OpenContainerTemplate suburb="Upper Arlington" />
    </>
  );
}
