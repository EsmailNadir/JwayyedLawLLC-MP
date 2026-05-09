import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Westerville Assault Defense Attorney | Jwayyed Law',
  description: 'Assault charge in Westerville? R.C. 2903.13. Westerville Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Westerville assault lawyer', 'Westerville assault attorney', 'Westerville Ohio assault defense'],
  openGraph: {
    title: 'Westerville Assault Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-westerville',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-westerville' },
};

export default function WestervilleAssaultPage() {
  return <AssaultTemplate suburb="Westerville" />;
}
