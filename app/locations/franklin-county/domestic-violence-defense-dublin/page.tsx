import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Dublin Domestic Violence Defense | Jwayyed Law LLC',
  description: 'Domestic violence charge in Dublin? Lautenberg firearm consequences. Dublin Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Dublin domestic violence lawyer', 'Dublin DV attorney', 'Dublin Ohio domestic violence defense', 'Franklin County DV Dublin'],
  openGraph: {
    title: 'Dublin Domestic Violence Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-dublin',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-dublin' },
};

export default function DublinDomesticViolencePage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Domestic Violence Defense in Dublin", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Dublin", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-dublin"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DomesticViolenceTemplate suburb="Dublin" />
    </>
  );
}
