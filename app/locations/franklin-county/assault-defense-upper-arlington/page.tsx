import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Upper Arlington Assault Defense | Jwayyed Law LLC',
  description: 'Criminal defense attorney serving Upper Arlington, Ohio. Assault, domestic violence, drug charges, theft, and more — Franklin County Municipal Court. Call (614) 285-5482.',
  keywords: ['Upper Arlington assault lawyer', 'Upper Arlington assault attorney', 'Upper Arlington Ohio assault defense'],
  openGraph: {
    title: 'Upper Arlington Assault Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-upper-arlington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-upper-arlington' },
};

export default function UpperArlingtonAssaultPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Assault Defense in Upper Arlington", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Upper Arlington", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/assault-defense-upper-arlington"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <AssaultTemplate suburb="Upper Arlington" />
    </>
  );
}
