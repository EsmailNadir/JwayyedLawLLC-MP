import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Marble Cliff Theft Defense Attorney | Jwayyed Law',
  description: 'Theft charge in Marble Cliff? Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Marble Cliff theft lawyer', 'Marble Cliff theft attorney', 'Marble Cliff Ohio theft defense', 'Franklin County theft Marble Cliff'],
  openGraph: {
    title: 'Marble Cliff Theft Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-marble-cliff',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-marble-cliff' },
};

export default function MarbleCliffTheftPage() {
  return <TheftTemplate suburb="Marble Cliff" />;
}
