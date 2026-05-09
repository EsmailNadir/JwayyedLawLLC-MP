import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Canal Winchester Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in Canal Winchester? ILC eligibility, suppression defenses. Canal Winchester Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Canal Winchester drug possession lawyer', 'Canal Winchester drug charge defense', 'Canal Winchester Ohio drug possession', 'Franklin County drug Canal Winchester'],
  openGraph: {
    title: 'Canal Winchester Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-canal-winchester',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-canal-winchester' },
};

export default function CanalWinchesterDrugPage() {
  return <DrugPossessionTemplate suburb="Canal Winchester" />;
}
