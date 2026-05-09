import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Obetz Theft Defense Attorney | Jwayyed Law',
  description: 'Theft charge in Obetz? Obetz Mayor\'s Court and Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Obetz theft lawyer', 'Obetz theft attorney', 'Obetz Ohio theft defense', 'Franklin County theft Obetz'],
  openGraph: {
    title: 'Obetz Theft Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-obetz',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-obetz' },
};

export default function ObetzTheftPage() {
  return <TheftTemplate suburb="Obetz" />;
}
