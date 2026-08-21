import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Obetz Theft Defense Attorney | Jwayyed Law LLC',
  description: 'Theft & shoplifting defense attorney serving Obetz, Ohio — Franklin County Municipal Court. Protect your record. Call (614) 285-5482.',
  keywords: ['Obetz theft lawyer', 'Obetz theft attorney', 'Obetz Ohio theft defense', 'Franklin County theft Obetz'],
  openGraph: {
    title: 'Obetz Theft Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-obetz',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-obetz' },
};

export default function ObetzTheftPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Theft Defense in Obetz", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Obetz", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/theft-defense-obetz"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <TheftTemplate suburb="Obetz" />
    </>
  );
}
