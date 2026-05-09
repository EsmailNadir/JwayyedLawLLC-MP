import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Canal Winchester Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Canal Winchester? R.C. 2917.11. Canal Winchester Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Canal Winchester disorderly conduct lawyer', 'Canal Winchester disorderly conduct attorney', 'Canal Winchester Ohio disorderly conduct defense'],
  openGraph: {
    title: 'Canal Winchester Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-canal-winchester',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-canal-winchester' },
};

export default function CanalWinchesterDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Canal Winchester" />;
}
