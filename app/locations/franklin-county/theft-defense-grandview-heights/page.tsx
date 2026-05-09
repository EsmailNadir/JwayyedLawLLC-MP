import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Grandview Heights Theft Defense | Jwayyed Law',
  description: 'Theft or shoplifting charge in Grandview Heights? Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grandview Heights theft lawyer', 'Grandview Heights shoplifting attorney', 'Grandview Heights Ohio theft defense', 'Franklin County theft Grandview Heights'],
  openGraph: {
    title: 'Grandview Heights Theft Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-grandview-heights',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-grandview-heights' },
};

export default function GrandviewHeightsTheftPage() {
  return <TheftTemplate suburb="Grandview Heights" />;
}
