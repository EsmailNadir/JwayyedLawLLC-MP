import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Whitehall Open Container Defense | Jwayyed Law',
  description: 'Open container citation in Whitehall? R.C. 4301.62. Whitehall Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Whitehall open container lawyer', 'Whitehall open container defense', 'Whitehall Ohio open container'],
  openGraph: {
    title: 'Whitehall Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-whitehall',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-whitehall' },
};

export default function WhitehallOpenContainerPage() {
  return <OpenContainerTemplate suburb="Whitehall" />;
}
