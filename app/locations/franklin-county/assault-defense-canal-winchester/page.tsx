import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Canal Winchester Assault Defense | Jwayyed Law',
  description: 'Assault charge in Canal Winchester? R.C. 2903.13 M1 misdemeanor. Canal Winchester Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Canal Winchester assault lawyer', 'Canal Winchester assault attorney', 'Canal Winchester Ohio assault defense', 'Franklin County assault Canal Winchester'],
  openGraph: {
    title: 'Canal Winchester Assault Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-canal-winchester',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-canal-winchester' },
};

export default function CanalWinchesterAssaultPage() {
  return <AssaultTemplate suburb="Canal Winchester" />;
}
