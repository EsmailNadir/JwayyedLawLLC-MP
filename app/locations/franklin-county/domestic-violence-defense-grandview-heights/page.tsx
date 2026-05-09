import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Grandview Heights Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Grandview Heights? Lautenberg firearm consequences. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grandview Heights domestic violence lawyer', 'Grandview Heights DV attorney', 'Grandview Heights Ohio domestic violence defense'],
  openGraph: {
    title: 'Grandview Heights Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-grandview-heights',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-grandview-heights' },
};

export default function GrandviewHeightsDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Grandview Heights" />;
}
