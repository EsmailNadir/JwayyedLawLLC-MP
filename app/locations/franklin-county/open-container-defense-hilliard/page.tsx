import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Hilliard Open Container Defense | Jwayyed Law',
  description: 'Open container citation in Hilliard? R.C. 4301.62. Hilliard Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Hilliard open container lawyer', 'Hilliard open container defense', 'Hilliard Ohio open container'],
  openGraph: {
    title: 'Hilliard Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-hilliard',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-hilliard' },
};

export default function HilliardOpenContainerPage() {
  return <OpenContainerTemplate suburb="Hilliard" />;
}
