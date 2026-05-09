import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Groveport Open Container Defense | Jwayyed Law',
  description: 'Open container citation in Groveport? R.C. 4301.62. Groveport Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Groveport open container lawyer', 'Groveport open container defense', 'Groveport Ohio open container'],
  openGraph: {
    title: 'Groveport Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-groveport',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-groveport' },
};

export default function GroveportOpenContainerPage() {
  return <OpenContainerTemplate suburb="Groveport" />;
}
