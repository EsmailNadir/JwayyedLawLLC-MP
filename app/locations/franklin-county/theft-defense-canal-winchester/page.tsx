import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Canal Winchester Theft Defense | Jwayyed Law',
  description: 'Theft or shoplifting charge in Canal Winchester? Canal Winchester Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Canal Winchester theft lawyer', 'Canal Winchester shoplifting attorney', 'Canal Winchester Ohio theft defense', 'Franklin County theft Canal Winchester'],
  openGraph: {
    title: 'Canal Winchester Theft Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-canal-winchester',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-canal-winchester' },
};

export default function CanalWinchesterTheftPage() {
  return <TheftTemplate suburb="Canal Winchester" />;
}
