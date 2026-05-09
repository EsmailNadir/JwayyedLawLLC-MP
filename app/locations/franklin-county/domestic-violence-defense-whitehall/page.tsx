import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Whitehall Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Whitehall? Lautenberg firearm consequences. Whitehall Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Whitehall domestic violence lawyer', 'Whitehall DV attorney', 'Whitehall Ohio domestic violence defense'],
  openGraph: {
    title: 'Whitehall Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-whitehall',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-whitehall' },
};

export default function WhitehallDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Whitehall" />;
}
