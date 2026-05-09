import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Canal Winchester Open Container Defense | Jwayyed Law',
  description: 'Open container citation in Canal Winchester? R.C. 4301.62 vehicle and public place charges. Canal Winchester Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Canal Winchester open container lawyer', 'Canal Winchester open container defense', 'Canal Winchester Ohio open container', 'Franklin County open container Canal Winchester'],
  openGraph: {
    title: 'Canal Winchester Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-canal-winchester',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-canal-winchester' },
};

export default function CanalWinchesterOpenContainerPage() {
  return <OpenContainerTemplate suburb="Canal Winchester" />;
}
