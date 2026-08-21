import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'New Albany Theft Defense Attorney | Jwayyed Law LLC',
  description: 'Theft & shoplifting defense attorney serving New Albany, Ohio — Franklin County Municipal Court. Protect your record. Call (614) 285-5482.',
  keywords: ['New Albany theft lawyer', 'New Albany shoplifting attorney', 'New Albany Ohio theft defense', 'Franklin County theft New Albany'],
  openGraph: {
    title: 'New Albany Theft Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-new-albany',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-new-albany' },
};

export default function NewAlbanyTheftPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Theft Defense in New Albany", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "New Albany", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/theft-defense-new-albany"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <TheftTemplate suburb="New Albany" />
    </>
  );
}
