import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Obetz Drug Possession Defense | Jwayyed Law LLC',
  description: 'Drug possession charge in Obetz? ILC eligibility, suppression. Obetz Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Obetz drug possession lawyer', 'Obetz drug charge defense', 'Obetz Ohio drug possession'],
  openGraph: {
    title: 'Obetz Drug Possession Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-obetz',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-obetz' },
};

export default function ObetzDrugPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Drug Possession Defense in Obetz", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Obetz", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-obetz"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DrugPossessionTemplate suburb="Obetz" />
    </>
  );
}
