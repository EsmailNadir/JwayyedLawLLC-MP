import { Metadata } from 'next';
import MayorsCourtTemplate from '@/components/franklin-templates/MayorsCourtTemplate';

export const metadata: Metadata = {
  title: "Canal Winchester Mayor's Court Attorney | Jwayyed Law",
  description: "Charged in Canal Winchester Mayor's Court? OVI, traffic, misdemeanor defense. Jwayyed Law LLC. Call (614) 285-5482.",
  keywords: ["Canal Winchester mayor's court lawyer", "Canal Winchester mayor's court attorney", "Canal Winchester Ohio mayor's court defense"],
  openGraph: {
    title: "Canal Winchester Mayor's Court Attorney | Jwayyed Law",
    url: "https://www.jjlawohio.com/locations/franklin-county/mayors-court-canal-winchester",
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/mayors-court-canal-winchester' },
};

export default function CanalWinchesterMayorsCourtPage() {
  return <MayorsCourtTemplate suburb="Canal Winchester" />;
}
