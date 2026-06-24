import { Metadata } from 'next';
import MayorsCourtTemplate from '@/components/franklin-templates/MayorsCourtTemplate';

export const metadata: Metadata = {
  title: "Reynoldsburg Mayor's Court Attorney | Jwayyed Law LLC",
  description: "Charged in Reynoldsburg Mayor's Court? OVI, traffic, misdemeanor defense. Jwayyed Law LLC. Call (614) 285-5482.",
  keywords: ["Reynoldsburg mayor's court lawyer", "Reynoldsburg mayor's court attorney", "Reynoldsburg Ohio mayor's court defense"],
  openGraph: {
    title: "Reynoldsburg Mayor's Court Attorney | Jwayyed Law LLC",
    url: "https://www.jjlawohio.com/locations/franklin-county/mayors-court-reynoldsburg",
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/mayors-court-reynoldsburg' },
};

export default function ReynoldsburgMayorsCourtPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Mayor's Court Representation in Reynoldsburg", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Reynoldsburg", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/mayors-court-reynoldsburg"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <MayorsCourtTemplate suburb="Reynoldsburg" />
    </>
  );
}
