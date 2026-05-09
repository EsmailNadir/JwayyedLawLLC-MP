import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Grove City Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Grove City? Lautenberg firearm consequences. Grove City Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grove City domestic violence lawyer', 'Grove City DV attorney', 'Grove City Ohio domestic violence defense'],
  openGraph: {
    title: 'Grove City Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-grove-city',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-grove-city' },
};

export default function GroveCityDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Grove City" />;
}
