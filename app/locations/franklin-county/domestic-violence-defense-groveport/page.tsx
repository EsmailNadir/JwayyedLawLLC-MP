import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Groveport Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Groveport? Lautenberg firearm consequences. Groveport Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Groveport domestic violence lawyer', 'Groveport DV attorney', 'Groveport Ohio domestic violence defense'],
  openGraph: {
    title: 'Groveport Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-groveport',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-groveport' },
};

export default function GroveportDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Groveport" />;
}
