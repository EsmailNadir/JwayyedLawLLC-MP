import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Reynoldsburg Assault Defense Attorney | Jwayyed Law LLC',
  description: 'Criminal defense attorney in Reynoldsburg, Ohio — assault, domestic violence, drug & theft charges. Franklin County Municipal Court. (614) 285-5482.',
  keywords: ['Reynoldsburg assault lawyer', 'Reynoldsburg assault attorney', 'Reynoldsburg Ohio assault defense'],
  openGraph: {
    title: 'Reynoldsburg Assault Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-reynoldsburg',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-reynoldsburg' },
};

export default function ReynoldsburgAssaultPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Assault Defense in Reynoldsburg", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Reynoldsburg", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/assault-defense-reynoldsburg"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <AssaultTemplate suburb="Reynoldsburg" />
    </>
  );
}
