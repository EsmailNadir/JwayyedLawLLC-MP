import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Grandview Heights Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in Grandview Heights? ILC eligibility, suppression. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grandview Heights drug possession lawyer', 'Grandview Heights drug charge defense', 'Grandview Heights Ohio drug possession'],
  openGraph: {
    title: 'Grandview Heights Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-grandview-heights',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-grandview-heights' },
};

export default function GrandviewHeightsDrugPage() {
  return <DrugPossessionTemplate suburb="Grandview Heights" />;
}
