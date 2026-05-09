import { Metadata } from 'next';
import MayorsCourtTemplate from '@/components/franklin-templates/MayorsCourtTemplate';

export const metadata: Metadata = {
  title: "Hilliard Mayor's Court Attorney | Jwayyed Law",
  description: "Charged in Hilliard Mayor's Court? OVI, traffic, and misdemeanor defense. Jwayyed Law LLC appears in Hilliard Mayor's Court. Call (614) 285-5482.",
  keywords: ["Hilliard mayor's court lawyer", "Hilliard mayor's court attorney", "Hilliard Ohio mayor's court defense"],
  openGraph: {
    title: "Hilliard Mayor's Court Attorney | Jwayyed Law",
    url: "https://www.jjlawohio.com/locations/franklin-county/mayors-court-hilliard",
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/mayors-court-hilliard' },
};

export default function HilliardMayorsCourtPage() {
  return <MayorsCourtTemplate suburb="Hilliard" />;
}
