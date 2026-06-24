import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Worthington Domestic Violence Defense | Jwayyed Law LLC',
  description: 'Domestic violence charge in Worthington? Lautenberg firearm consequences. Worthington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Worthington domestic violence lawyer', 'Worthington DV attorney', 'Worthington Ohio domestic violence defense'],
  openGraph: {
    title: 'Worthington Domestic Violence Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-worthington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-worthington' },
};

export default function WorthingtonDomesticViolencePage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Domestic Violence Defense in Worthington", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Worthington", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-worthington"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DomesticViolenceTemplate suburb="Worthington" />
    </>
  );
}
