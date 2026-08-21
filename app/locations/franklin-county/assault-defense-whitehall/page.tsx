import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Whitehall Assault Defense Attorney | Jwayyed Law LLC',
  description: 'Criminal defense attorney in Whitehall, Ohio — assault, domestic violence, drug & theft charges. Franklin County Municipal Court. (614) 285-5482.',
  keywords: ['Whitehall assault lawyer', 'Whitehall assault attorney', 'Whitehall Ohio assault defense'],
  openGraph: {
    title: 'Whitehall Assault Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-whitehall',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-whitehall' },
};

export default function WhitehallAssaultPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Assault Defense in Whitehall", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Whitehall", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/assault-defense-whitehall"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <AssaultTemplate suburb="Whitehall" />
    </>
  );
}
