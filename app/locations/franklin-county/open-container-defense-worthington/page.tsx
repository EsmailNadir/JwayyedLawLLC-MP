import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Worthington Open Container Defense | Jwayyed Law LLC',
  description: 'Open container defense attorney serving Worthington, Ohio — Franklin County Municipal Court. Protect your record. Call (614) 285-5482.',
  keywords: ['Worthington open container lawyer', 'Worthington open container defense', 'Worthington Ohio open container'],
  openGraph: {
    title: 'Worthington Open Container Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-worthington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-worthington' },
};

export default function WorthingtonOpenContainerPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Open Container Defense in Worthington", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Worthington", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/open-container-defense-worthington"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OpenContainerTemplate suburb="Worthington" />
    </>
  );
}
