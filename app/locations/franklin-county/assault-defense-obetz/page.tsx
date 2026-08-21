import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Obetz Assault Defense Attorney | Jwayyed Law LLC',
  description: 'Criminal defense attorney in Obetz, Ohio — assault, domestic violence, drug & theft charges. Franklin County Municipal Court. (614) 285-5482.',
  keywords: ['Obetz assault lawyer', 'Obetz assault attorney', 'Obetz Ohio assault defense'],
  openGraph: {
    title: 'Obetz Assault Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-obetz',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-obetz' },
};

export default function ObetzAssaultPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Assault Defense in Obetz", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Obetz", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/assault-defense-obetz"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <AssaultTemplate suburb="Obetz" />
    </>
  );
}
