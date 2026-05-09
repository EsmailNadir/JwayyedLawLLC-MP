import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Marble Cliff Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Marble Cliff? Lautenberg firearm consequences. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Marble Cliff domestic violence lawyer', 'Marble Cliff DV attorney', 'Marble Cliff Ohio domestic violence defense'],
  openGraph: {
    title: 'Marble Cliff Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-marble-cliff',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-marble-cliff' },
};

export default function MarbleCliffDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Marble Cliff" />;
}
