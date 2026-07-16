import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Dublin Open Container Defense | Jwayyed Law LLC',
  description: 'Criminal defense attorney serving Dublin, Ohio. Assault, domestic violence, drug, and theft charges — Franklin County Municipal Court. (614) 285-5482.',
  keywords: ['Dublin open container lawyer', 'Dublin open container attorney', 'Dublin Ohio open container defense'],
  openGraph: {
    title: 'Dublin Open Container Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-dublin',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-dublin' },
};

export default function DublinOpenContainerPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Open Container Defense in Dublin", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Dublin", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/open-container-defense-dublin"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OpenContainerTemplate suburb="Dublin" />
    </>
  );
}
