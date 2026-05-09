import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Dublin Assault Defense Attorney | Jwayyed Law',
  description: 'Assault charge in Dublin? R.C. 2903.13 M1 misdemeanor. Dublin Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Dublin assault lawyer', 'Dublin assault attorney', 'Dublin Ohio assault defense', 'Franklin County assault Dublin'],
  openGraph: {
    title: 'Dublin Assault Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-dublin',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-dublin' },
};

export default function DublinAssaultPage() {
  return <AssaultTemplate suburb="Dublin" />;
}
