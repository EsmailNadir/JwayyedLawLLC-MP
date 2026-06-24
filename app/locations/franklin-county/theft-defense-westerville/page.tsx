import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Westerville Theft Defense Attorney | Jwayyed Law LLC',
  description: 'Theft charge in Westerville? Westerville Mayor\'s Court and FCMC. Otterbein University area and retail enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Westerville theft lawyer', 'Westerville shoplifting attorney', 'Westerville Ohio theft defense', 'Franklin County theft Westerville'],
  openGraph: {
    title: 'Westerville Theft Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-westerville',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-westerville' },
};

export default function WestervilleTheftPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Theft Defense in Westerville", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Westerville", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/theft-defense-westerville"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <TheftTemplate suburb="Westerville" />
    </>
  );
}
