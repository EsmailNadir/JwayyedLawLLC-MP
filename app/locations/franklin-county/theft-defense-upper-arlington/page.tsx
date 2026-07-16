import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Upper Arlington Theft Defense | Jwayyed Law LLC',
  description: 'Theft & shoplifting defense attorney serving Upper Arlington, Ohio — Franklin County Municipal Court. Protect your record. Call (614) 285-5482.',
  keywords: ['Upper Arlington theft lawyer', 'Upper Arlington shoplifting attorney', 'Upper Arlington Ohio theft defense', 'Franklin County theft Upper Arlington'],
  openGraph: {
    title: 'Upper Arlington Theft Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-upper-arlington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-upper-arlington' },
};

export default function UpperArlingtonTheftPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Theft Defense in Upper Arlington", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Upper Arlington", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/theft-defense-upper-arlington"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <TheftTemplate suburb="Upper Arlington" />
    </>
  );
}
