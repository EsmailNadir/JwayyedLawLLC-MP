import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Worthington Assault Defense Attorney | Jwayyed Law',
  description: 'Assault charge in Worthington? R.C. 2903.13. Worthington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Worthington assault lawyer', 'Worthington assault attorney', 'Worthington Ohio assault defense'],
  openGraph: {
    title: 'Worthington Assault Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-worthington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-worthington' },
};

export default function WorthingtonAssaultPage() {
  return <AssaultTemplate suburb="Worthington" />;
}
