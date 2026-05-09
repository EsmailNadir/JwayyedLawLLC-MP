import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Westerville Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Westerville? Lautenberg firearm consequences. Westerville Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Westerville domestic violence lawyer', 'Westerville DV attorney', 'Westerville Ohio domestic violence defense'],
  openGraph: {
    title: 'Westerville Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-westerville',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-westerville' },
};

export default function WestervilleDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Westerville" />;
}
