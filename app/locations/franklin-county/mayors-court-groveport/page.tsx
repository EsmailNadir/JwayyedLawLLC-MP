import { Metadata } from 'next';
import MayorsCourtTemplate from '@/components/franklin-templates/MayorsCourtTemplate';

export const metadata: Metadata = {
  title: "Groveport Mayor's Court Attorney | Jwayyed Law LLC",
  description: "Charged in Groveport Mayor's Court? OVI, traffic, and misdemeanor defense. Jwayyed Law LLC appears in Groveport Mayor's Court. Call (614) 285-5482.",
  keywords: ["Groveport mayor's court lawyer", "Groveport mayor's court attorney", "Groveport Ohio mayor's court defense"],
  openGraph: {
    title: "Groveport Mayor's Court Attorney | Jwayyed Law LLC",
    url: "https://www.jjlawohio.com/locations/franklin-county/mayors-court-groveport",
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/mayors-court-groveport' },
};

export default function GroveportMayorsCourtPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Mayor's Court Representation in Groveport", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Groveport", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/mayors-court-groveport"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <MayorsCourtTemplate suburb="Groveport" />
    </>
  );
}
