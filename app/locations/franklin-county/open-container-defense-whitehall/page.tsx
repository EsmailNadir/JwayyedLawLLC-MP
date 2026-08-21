import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Whitehall Open Container Defense | Jwayyed Law LLC',
  description: 'Open container defense attorney serving Whitehall, Ohio — Franklin County Municipal Court. Protect your record. Call (614) 285-5482.',
  keywords: ['Whitehall open container lawyer', 'Whitehall open container defense', 'Whitehall Ohio open container'],
  openGraph: {
    title: 'Whitehall Open Container Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-whitehall',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-whitehall' },
};

export default function WhitehallOpenContainerPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Open Container Defense in Whitehall", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Whitehall", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/open-container-defense-whitehall"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OpenContainerTemplate suburb="Whitehall" />
    </>
  );
}
