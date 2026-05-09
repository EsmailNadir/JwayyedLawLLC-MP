import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'New Albany Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in New Albany? Lautenberg firearm consequences. New Albany Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['New Albany domestic violence lawyer', 'New Albany DV attorney', 'New Albany Ohio domestic violence defense'],
  openGraph: {
    title: 'New Albany Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-new-albany',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-new-albany' },
};

export default function NewAlbanyDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="New Albany" />;
}
