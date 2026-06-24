import { Metadata } from 'next';
import MayorsCourtTemplate from '@/components/franklin-templates/MayorsCourtTemplate';

export const metadata: Metadata = {
  title: "Worthington Mayor's Court Attorney | Jwayyed Law LLC",
  description: "Charged in Worthington Mayor's Court? OVI, traffic, misdemeanor defense. Jwayyed Law LLC. Call (614) 285-5482.",
  keywords: ["Worthington mayor's court lawyer", "Worthington mayor's court attorney", "Worthington Ohio mayor's court defense"],
  openGraph: {
    title: "Worthington Mayor's Court Attorney | Jwayyed Law LLC",
    url: "https://www.jjlawohio.com/locations/franklin-county/mayors-court-worthington",
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/mayors-court-worthington' },
};

export default function WorthingtonMayorsCourtPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Mayor's Court Representation in Worthington", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Worthington", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/mayors-court-worthington"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <MayorsCourtTemplate suburb="Worthington" />
    </>
  );
}
