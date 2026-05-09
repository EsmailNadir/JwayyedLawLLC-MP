import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Canal Winchester Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Canal Winchester? Lautenberg firearm consequences. Canal Winchester Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Canal Winchester domestic violence lawyer', 'Canal Winchester DV attorney', 'Canal Winchester Ohio domestic violence defense'],
  openGraph: {
    title: 'Canal Winchester Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-canal-winchester',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-canal-winchester' },
};

export default function CanalWinchesterDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Canal Winchester" />;
}
