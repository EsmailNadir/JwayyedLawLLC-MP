import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Reynoldsburg Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Reynoldsburg? Lautenberg firearm consequences. Reynoldsburg Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Reynoldsburg domestic violence lawyer', 'Reynoldsburg DV attorney', 'Reynoldsburg Ohio domestic violence defense'],
  openGraph: {
    title: 'Reynoldsburg Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-reynoldsburg',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-reynoldsburg' },
};

export default function ReynoldsburgDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Reynoldsburg" />;
}
