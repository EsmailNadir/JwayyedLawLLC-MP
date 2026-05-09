import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Hilliard Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Hilliard? Lautenberg firearm consequences. Hilliard Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Hilliard domestic violence lawyer', 'Hilliard DV attorney', 'Hilliard Ohio domestic violence defense'],
  openGraph: {
    title: 'Hilliard Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-hilliard',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-hilliard' },
};

export default function HilliardDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Hilliard" />;
}
