import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Dublin Theft Defense Attorney | Jwayyed Law LLC',
  description: 'Theft or shoplifting charge in Dublin? Bridge Park, Easton-adjacent retail enforcement. Dublin Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Dublin theft lawyer', 'Dublin shoplifting attorney', 'Dublin Ohio theft defense', 'Dublin Ohio retail theft', 'Franklin County theft Dublin'],
  openGraph: {
    title: 'Dublin Theft Defense Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-dublin',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-dublin' },
};

export default function DublinTheftPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC — Theft Defense in Dublin", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Dublin", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/theft-defense-dublin"};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <TheftTemplate suburb="Dublin" />
    </>
  );
}
