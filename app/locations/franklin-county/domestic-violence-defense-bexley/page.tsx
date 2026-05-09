import { Metadata } from 'next';
import DomesticViolenceTemplate from '@/components/franklin-templates/DomesticViolenceTemplate';

export const metadata: Metadata = {
  title: 'Bexley Domestic Violence Defense | Jwayyed Law',
  description: 'Domestic violence charge in Bexley? Lautenberg firearm consequences. Bexley Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Bexley domestic violence lawyer', 'Bexley DV attorney', 'Bexley Ohio domestic violence defense', 'Franklin County DV Bexley', 'Bexley domestic violence defense'],
  openGraph: {
    title: 'Bexley Domestic Violence Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-bexley',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-bexley' },
};

export default function BexleyDomesticViolencePage() {
  return <DomesticViolenceTemplate suburb="Bexley" />;
}
