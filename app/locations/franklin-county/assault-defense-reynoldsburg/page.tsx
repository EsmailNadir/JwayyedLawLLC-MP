import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Reynoldsburg Assault Defense Attorney | Jwayyed Law',
  description: 'Assault charge in Reynoldsburg? R.C. 2903.13. Reynoldsburg Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Reynoldsburg assault lawyer', 'Reynoldsburg assault attorney', 'Reynoldsburg Ohio assault defense'],
  openGraph: {
    title: 'Reynoldsburg Assault Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-reynoldsburg',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-reynoldsburg' },
};

export default function ReynoldsburgAssaultPage() {
  return <AssaultTemplate suburb="Reynoldsburg" />;
}
