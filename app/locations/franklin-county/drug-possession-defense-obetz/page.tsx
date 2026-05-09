import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Obetz Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in Obetz? ILC eligibility, suppression. Obetz Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Obetz drug possession lawyer', 'Obetz drug charge defense', 'Obetz Ohio drug possession'],
  openGraph: {
    title: 'Obetz Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-obetz',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-obetz' },
};

export default function ObetzDrugPage() {
  return <DrugPossessionTemplate suburb="Obetz" />;
}
