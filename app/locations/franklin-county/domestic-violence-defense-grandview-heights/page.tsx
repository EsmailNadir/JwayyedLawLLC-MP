import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Grandview Heights Domestic Violence Defense | Jwayyed Law LLC',
  description: 'Domestic violence charge in Grandview Heights? Lautenberg firearm consequences. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grandview Heights domestic violence lawyer', 'Grandview Heights DV attorney', 'Grandview Heights Ohio domestic violence defense'],
  openGraph: {
    title: 'Grandview Heights Domestic Violence Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-grandview-heights',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-grandview-heights' },
};

export default function GrandviewHeightsDomesticViolencePage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Domestic Violence Defense in Grandview Heights", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Grandview Heights", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-grandview-heights"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DomesticViolenceTemplate suburb="Grandview Heights" />
    </>
  );
}
