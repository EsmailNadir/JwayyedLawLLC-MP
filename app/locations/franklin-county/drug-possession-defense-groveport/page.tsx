import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Groveport Drug Possession Defense | Jwayyed Law LLC',
  description: 'Drug possession charge in Groveport? ILC eligibility, suppression. Groveport Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Groveport drug possession lawyer', 'Groveport drug charge defense', 'Groveport Ohio drug possession'],
  openGraph: {
    title: 'Groveport Drug Possession Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-groveport',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-groveport' },
};

export default function GroveportDrugPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Drug Possession Defense in Groveport", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Groveport", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-groveport"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DrugPossessionTemplate suburb="Groveport" />
    </>
  );
}
