import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Worthington Theft Defense Attorney | Jwayyed Law LLC',
  description: 'Theft charge in Worthington? Worthington Mayor\'s Court and FCMC. High Street and Old Worthington retail enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Worthington theft lawyer', 'Worthington shoplifting attorney', 'Worthington Ohio theft defense', 'Franklin County theft Worthington'],
  openGraph: {
    title: 'Worthington Theft Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-worthington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-worthington' },
};

export default function WorthingtonTheftPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Theft Defense in Worthington", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Worthington", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/theft-defense-worthington"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <TheftTemplate suburb="Worthington" />
    </>
  );
}
