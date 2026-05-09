import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Bexley Assault Defense Attorney | Jwayyed Law',
  description: 'Assault charge in Bexley? R.C. 2903.13 M1 misdemeanor. Bexley Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Bexley assault lawyer', 'Bexley assault attorney', 'Bexley Ohio assault defense', 'Franklin County assault Bexley', 'Bexley assault misdemeanor'],
  openGraph: {
    title: 'Bexley Assault Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-bexley',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-bexley' },
};

export default function BexleyAssaultPage() {
  return <AssaultTemplate suburb="Bexley" />;
}
