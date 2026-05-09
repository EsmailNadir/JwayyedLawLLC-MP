import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Pickerington Assault Defense Attorney | Jwayyed Law',
  description: 'Assault charge in Pickerington? R.C. 2903.13. Pickerington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Pickerington assault lawyer', 'Pickerington assault attorney', 'Pickerington Ohio assault defense'],
  openGraph: {
    title: 'Pickerington Assault Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-pickerington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-pickerington' },
};

export default function PickeringtonAssaultPage() {
  return <AssaultTemplate suburb="Pickerington" />;
}
