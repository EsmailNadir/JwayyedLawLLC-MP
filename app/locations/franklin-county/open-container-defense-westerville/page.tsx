import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Westerville Open Container Defense | Jwayyed Law',
  description: 'Open container citation in Westerville? R.C. 4301.62. Westerville Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Westerville open container lawyer', 'Westerville open container defense', 'Westerville Ohio open container'],
  openGraph: {
    title: 'Westerville Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-westerville',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-westerville' },
};

export default function WestervilleOpenContainerPage() {
  return <OpenContainerTemplate suburb="Westerville" />;
}
