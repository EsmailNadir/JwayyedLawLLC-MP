import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Obetz Open Container Defense | Jwayyed Law',
  description: 'Open container citation in Obetz? R.C. 4301.62. Obetz Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Obetz open container lawyer', 'Obetz open container defense', 'Obetz Ohio open container'],
  openGraph: {
    title: 'Obetz Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-obetz',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-obetz' },
};

export default function ObetzOpenContainerPage() {
  return <OpenContainerTemplate suburb="Obetz" />;
}
