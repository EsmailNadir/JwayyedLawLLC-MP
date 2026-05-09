import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Worthington Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Worthington? Lautenberg firearm consequences. Worthington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Worthington domestic violence lawyer', 'Worthington DV attorney', 'Worthington Ohio domestic violence defense'],
  openGraph: {
    title: 'Worthington Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-worthington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-worthington' },
};

export default function WorthingtonDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Worthington" />;
}
