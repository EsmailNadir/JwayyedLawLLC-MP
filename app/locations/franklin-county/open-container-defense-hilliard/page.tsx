import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Hilliard Open Container Defense | Jwayyed Law LLC',
  description: 'Open container defense attorney in Hilliard, Ohio — ORC 4301.62 charges at Franklin County Municipal Court. Jwayyed Law LLC. (614) 285-5482.',
  keywords: ['Hilliard open container lawyer', 'Hilliard open container defense', 'Hilliard Ohio open container'],
  openGraph: {
    title: 'Hilliard Open Container Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-hilliard',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-hilliard' },
};

export default function HilliardOpenContainerPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Open Container Defense in Hilliard", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Hilliard", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/open-container-defense-hilliard"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OpenContainerTemplate suburb="Hilliard" />
    </>
  );
}
