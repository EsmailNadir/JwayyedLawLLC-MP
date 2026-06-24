import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Pickerington Drug Possession Defense | Jwayyed Law LLC',
  description: 'Drug possession charge in Pickerington? ILC eligibility, suppression. Pickerington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Pickerington drug possession lawyer', 'Pickerington drug charge defense', 'Pickerington Ohio drug possession'],
  openGraph: {
    title: 'Pickerington Drug Possession Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-pickerington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-pickerington' },
};

export default function PickeringtonDrugPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Drug Possession Defense in Pickerington", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Pickerington", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-pickerington"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DrugPossessionTemplate suburb="Pickerington" />
    </>
  );
}
