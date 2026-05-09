import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Grove City Theft Defense Attorney | Jwayyed Law',
  description: 'Theft or shoplifting charge in Grove City? Grove City Marketplace and retail enforcement. Grove City Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grove City theft lawyer', 'Grove City shoplifting attorney', 'Grove City Ohio theft defense', 'Franklin County theft Grove City'],
  openGraph: {
    title: 'Grove City Theft Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-grove-city',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-grove-city' },
};

export default function GroveCityTheftPage() {
  return <TheftTemplate suburb="Grove City" />;
}
