import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Upper Arlington Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Upper Arlington? Lautenberg firearm consequences. Upper Arlington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Upper Arlington domestic violence lawyer', 'Upper Arlington DV attorney', 'Upper Arlington Ohio domestic violence defense'],
  openGraph: {
    title: 'Upper Arlington Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-upper-arlington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-upper-arlington' },
};

export default function UpperArlingtonDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Upper Arlington" />;
}
