import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Grove City Open Container Defense | Jwayyed Law',
  description: 'Open container citation in Grove City? R.C. 4301.62. Grove City Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grove City open container lawyer', 'Grove City open container defense', 'Grove City Ohio open container'],
  openGraph: {
    title: 'Grove City Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-grove-city',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-grove-city' },
};

export default function GroveCityOpenContainerPage() {
  return <OpenContainerTemplate suburb="Grove City" />;
}
