import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Obetz Assault Defense Attorney | Jwayyed Law',
  description: 'Assault charge in Obetz? R.C. 2903.13. Obetz Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Obetz assault lawyer', 'Obetz assault attorney', 'Obetz Ohio assault defense'],
  openGraph: {
    title: 'Obetz Assault Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-obetz',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-obetz' },
};

export default function ObetzAssaultPage() {
  return <AssaultTemplate suburb="Obetz" />;
}
