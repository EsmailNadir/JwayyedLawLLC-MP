import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Grandview Heights Open Container Defense | Jwayyed Law',
  description: 'Open container citation in Grandview Heights? R.C. 4301.62. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grandview Heights open container lawyer', 'Grandview Heights open container defense', 'Grandview Heights Ohio open container'],
  openGraph: {
    title: 'Grandview Heights Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-grandview-heights',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-grandview-heights' },
};

export default function GrandviewHeightsOpenContainerPage() {
  return <OpenContainerTemplate suburb="Grandview Heights" />;
}
