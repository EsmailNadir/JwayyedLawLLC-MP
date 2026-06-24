import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Upper Arlington Drug Possession Defense | Jwayyed Law LLC',
  description: 'Drug possession charge in Upper Arlington? ILC eligibility, suppression. Upper Arlington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Upper Arlington drug possession lawyer', 'Upper Arlington drug charge defense', 'Upper Arlington Ohio drug possession'],
  openGraph: {
    title: 'Upper Arlington Drug Possession Defense | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-upper-arlington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-upper-arlington' },
};

export default function UpperArlingtonDrugPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Drug Possession Defense in Upper Arlington", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Upper Arlington", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-upper-arlington"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <DrugPossessionTemplate suburb="Upper Arlington" />
    </>
  );
}
