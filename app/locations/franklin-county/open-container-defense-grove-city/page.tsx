import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Grove City Open Container Defense | Jwayyed Law LLC',
  description: 'Criminal defense attorney serving Grove City, Ohio. Assault, domestic violence, drug, and theft charges — Franklin County Municipal Court. (614) 285-5482.',
  keywords: ['Grove City open container lawyer', 'Grove City open container defense', 'Grove City Ohio open container'],
  openGraph: {
    title: 'Grove City Open Container Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-grove-city',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-grove-city' },
};

export default function GroveCityOpenContainerPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Open Container Defense in Grove City", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Grove City", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/open-container-defense-grove-city"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OpenContainerTemplate suburb="Grove City" />
    </>
  );
}
