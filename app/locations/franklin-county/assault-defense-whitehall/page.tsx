import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Whitehall Assault Defense Attorney | Jwayyed Law',
  description: 'Assault charge in Whitehall? R.C. 2903.13. Whitehall Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Whitehall assault lawyer', 'Whitehall assault attorney', 'Whitehall Ohio assault defense'],
  openGraph: {
    title: 'Whitehall Assault Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-whitehall',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-whitehall' },
};

export default function WhitehallAssaultPage() {
  return <AssaultTemplate suburb="Whitehall" />;
}
