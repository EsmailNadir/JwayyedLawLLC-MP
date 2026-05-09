import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Hilliard Assault Defense Attorney | Jwayyed Law',
  description: 'Assault charge in Hilliard? R.C. 2903.13. Hilliard Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Hilliard assault lawyer', 'Hilliard assault attorney', 'Hilliard Ohio assault defense'],
  openGraph: {
    title: 'Hilliard Assault Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-hilliard',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-hilliard' },
};

export default function HilliardAssaultPage() {
  return <AssaultTemplate suburb="Hilliard" />;
}
