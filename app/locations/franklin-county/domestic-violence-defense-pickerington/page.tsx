import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Pickerington Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Pickerington? Lautenberg firearm consequences. Pickerington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Pickerington domestic violence lawyer', 'Pickerington DV attorney', 'Pickerington Ohio domestic violence defense'],
  openGraph: {
    title: 'Pickerington Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-pickerington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-pickerington' },
};

export default function PickeringtonDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Pickerington" />;
}
