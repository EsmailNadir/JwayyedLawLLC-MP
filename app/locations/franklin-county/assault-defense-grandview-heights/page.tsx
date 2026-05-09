import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Grandview Heights Assault Defense | Jwayyed Law',
  description: 'Assault charge in Grandview Heights? R.C. 2903.13. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grandview Heights assault lawyer', 'Grandview Heights assault attorney', 'Grandview Heights Ohio assault defense'],
  openGraph: {
    title: 'Grandview Heights Assault Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-grandview-heights',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-grandview-heights' },
};

export default function GrandviewHeightsAssaultPage() {
  return <AssaultTemplate suburb="Grandview Heights" />;
}
