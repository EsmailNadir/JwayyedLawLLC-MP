import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Pickerington Open Container Defense | Jwayyed Law',
  description: 'Open container citation in Pickerington? R.C. 4301.62. Pickerington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Pickerington open container lawyer', 'Pickerington open container defense', 'Pickerington Ohio open container'],
  openGraph: {
    title: 'Pickerington Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-pickerington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-pickerington' },
};

export default function PickeringtonOpenContainerPage() {
  return <OpenContainerTemplate suburb="Pickerington" />;
}
