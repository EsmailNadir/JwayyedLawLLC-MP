import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Obetz Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Obetz? Lautenberg firearm consequences. Obetz Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Obetz domestic violence lawyer', 'Obetz DV attorney', 'Obetz Ohio domestic violence defense'],
  openGraph: {
    title: 'Obetz Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-obetz',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-obetz' },
};

export default function ObetzDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Obetz" />;
}
