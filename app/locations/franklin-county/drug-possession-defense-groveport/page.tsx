import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Groveport Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in Groveport? ILC eligibility, suppression. Groveport Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Groveport drug possession lawyer', 'Groveport drug charge defense', 'Groveport Ohio drug possession'],
  openGraph: {
    title: 'Groveport Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-groveport',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-groveport' },
};

export default function GroveportDrugPage() {
  return <DrugPossessionTemplate suburb="Groveport" />;
}
