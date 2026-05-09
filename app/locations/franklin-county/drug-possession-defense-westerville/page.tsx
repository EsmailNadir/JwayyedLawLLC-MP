import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Westerville Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in Westerville? ILC eligibility, suppression. Westerville Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Westerville drug possession lawyer', 'Westerville drug charge defense', 'Westerville Ohio drug possession'],
  openGraph: {
    title: 'Westerville Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-westerville',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-westerville' },
};

export default function WestervilleDrugPage() {
  return <DrugPossessionTemplate suburb="Westerville" />;
}
