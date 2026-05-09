import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Canal Winchester OVI Defense | Jwayyed Law',
  description: 'OVI arrest in Canal Winchester? ALS appeal 30-day deadline. Canal Winchester Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Canal Winchester OVI lawyer', 'Canal Winchester DUI attorney', 'Canal Winchester Ohio OVI defense', 'Franklin County OVI Canal Winchester'],
  openGraph: {
    title: 'Canal Winchester OVI Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-canal-winchester',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-canal-winchester' },
};

export default function CanalWinchesterOVIPage() {
  return <OVITemplate suburb="Canal Winchester" />;
}
