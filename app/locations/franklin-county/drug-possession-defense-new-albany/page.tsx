import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'New Albany Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in New Albany? ILC eligibility, suppression. New Albany Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['New Albany drug possession lawyer', 'New Albany drug charge defense', 'New Albany Ohio drug possession'],
  openGraph: {
    title: 'New Albany Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-new-albany',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-new-albany' },
};

export default function NewAlbanyDrugPage() {
  return <DrugPossessionTemplate suburb="New Albany" />;
}
