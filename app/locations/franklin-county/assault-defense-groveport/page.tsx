import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Groveport Assault Defense Attorney | Jwayyed Law',
  description: 'Assault charge in Groveport? R.C. 2903.13. Groveport Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Groveport assault lawyer', 'Groveport assault attorney', 'Groveport Ohio assault defense'],
  openGraph: {
    title: 'Groveport Assault Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-groveport',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-groveport' },
};

export default function GroveportAssaultPage() {
  return <AssaultTemplate suburb="Groveport" />;
}
