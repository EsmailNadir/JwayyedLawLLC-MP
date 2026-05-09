import { Metadata } from 'next';
import MayorsCourtTemplate from '@/components/franklin-templates/MayorsCourtTemplate';

export const metadata: Metadata = {
  title: "Bexley Mayor's Court Attorney | Jwayyed Law",
  description: "Charged in Bexley Mayor's Court? OVI, traffic, misdemeanor defense. Jwayyed Law LLC appears in Bexley Mayor's Court. Call (614) 285-5482.",
  keywords: ["Bexley mayor's court lawyer", "Bexley mayor's court attorney", "Bexley Ohio mayor's court defense", "Bexley municipal court defense"],
  openGraph: {
    title: "Bexley Mayor's Court Attorney | Jwayyed Law",
    url: "https://www.jjlawohio.com/locations/franklin-county/mayors-court-bexley",
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/mayors-court-bexley' },
};

export default function BexleyMayorsCourtPage() {
  return <MayorsCourtTemplate suburb="Bexley" />;
}
