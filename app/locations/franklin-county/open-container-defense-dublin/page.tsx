import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Dublin Open Container Defense | Jwayyed Law',
  description: 'Open container citation in Dublin? R.C. 4301.62. Dublin Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Dublin open container lawyer', 'Dublin open container attorney', 'Dublin Ohio open container defense'],
  openGraph: {
    title: 'Dublin Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-dublin',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-dublin' },
};

export default function DublinOpenContainerPage() {
  return <OpenContainerTemplate suburb="Dublin" />;
}
