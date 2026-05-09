import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Marble Cliff Assault Defense Attorney | Jwayyed Law',
  description: 'Assault charge in Marble Cliff? R.C. 2903.13. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Marble Cliff assault lawyer', 'Marble Cliff assault attorney', 'Marble Cliff Ohio assault defense'],
  openGraph: {
    title: 'Marble Cliff Assault Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-marble-cliff',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-marble-cliff' },
};

export default function MarbleCliffAssaultPage() {
  return <AssaultTemplate suburb="Marble Cliff" />;
}
