import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Worthington Open Container Defense | Jwayyed Law',
  description: 'Open container citation in Worthington? R.C. 4301.62. Worthington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Worthington open container lawyer', 'Worthington open container defense', 'Worthington Ohio open container'],
  openGraph: {
    title: 'Worthington Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-worthington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-worthington' },
};

export default function WorthingtonOpenContainerPage() {
  return <OpenContainerTemplate suburb="Worthington" />;
}
