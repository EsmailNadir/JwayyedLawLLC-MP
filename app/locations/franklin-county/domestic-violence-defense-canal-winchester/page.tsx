import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Canal Winchester Domestic Violence Defense | Jwayyed Law LLC',
  description: 'Domestic violence charge in Canal Winchester? Lautenberg firearm consequences. Canal Winchester Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Canal Winchester domestic violence lawyer', 'Canal Winchester DV attorney', 'Canal Winchester Ohio domestic violence defense'],
  openGraph: {
    title: 'Canal Winchester Domestic Violence Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-canal-winchester',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-canal-winchester' },
};

export default function CanalWinchesterDomesticViolencePage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Domestic Violence Defense in Canal Winchester", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Canal Winchester", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-canal-winchester"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DomesticViolenceTemplate suburb="Canal Winchester" />
    </>
  );
}
