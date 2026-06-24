import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Bexley Open Container Defense Attorney | Jwayyed Law LLC',
  description: 'Open container citation in Bexley? R.C. 4301.62 vehicle and public place charges. Bexley Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Bexley open container lawyer', 'Bexley open container attorney', 'Bexley Ohio open container defense', 'Franklin County open container Bexley'],
  openGraph: {
    title: 'Bexley Open Container Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-bexley',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-bexley' },
};

export default function BexleyOpenContainerPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Open Container Defense in Bexley", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Bexley", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/open-container-defense-bexley"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <OpenContainerTemplate suburb="Bexley" />
    </>
  );
}
