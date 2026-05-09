import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Marble Cliff Open Container Defense | Jwayyed Law',
  description: 'Open container citation in Marble Cliff? R.C. 4301.62. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Marble Cliff open container lawyer', 'Marble Cliff open container defense', 'Marble Cliff Ohio open container'],
  openGraph: {
    title: 'Marble Cliff Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-marble-cliff',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-marble-cliff' },
};

export default function MarbleCliffOpenContainerPage() {
  return <OpenContainerTemplate suburb="Marble Cliff" />;
}
