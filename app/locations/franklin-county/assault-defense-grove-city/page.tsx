import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Grove City Assault Defense Attorney | Jwayyed Law',
  description: 'Assault charge in Grove City? R.C. 2903.13 M1 misdemeanor. Grove City Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grove City assault lawyer', 'Grove City assault attorney', 'Grove City Ohio assault defense'],
  openGraph: {
    title: 'Grove City Assault Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-grove-city',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-grove-city' },
};

export default function GroveCityAssaultPage() {
  return <AssaultTemplate suburb="Grove City" />;
}
