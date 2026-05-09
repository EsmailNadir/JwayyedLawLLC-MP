import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Whitehall Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in Whitehall? ILC eligibility, suppression. Whitehall Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Whitehall drug possession lawyer', 'Whitehall drug charge defense', 'Whitehall Ohio drug possession'],
  openGraph: {
    title: 'Whitehall Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-whitehall',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-whitehall' },
};

export default function WhitehallDrugPage() {
  return <DrugPossessionTemplate suburb="Whitehall" />;
}
