import { Metadata } from 'next';
import MayorsCourtTemplate from '@/components/franklin-templates/MayorsCourtTemplate';

export const metadata: Metadata = {
  title: "Whitehall Mayor's Court Attorney | Jwayyed Law",
  description: "Charged in Whitehall Mayor's Court? OVI, traffic, misdemeanor defense. Jwayyed Law LLC. Call (614) 285-5482.",
  keywords: ["Whitehall mayor's court lawyer", "Whitehall mayor's court attorney", "Whitehall Ohio mayor's court defense"],
  openGraph: {
    title: "Whitehall Mayor's Court Attorney | Jwayyed Law",
    url: "https://www.jjlawohio.com/locations/franklin-county/mayors-court-whitehall",
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/mayors-court-whitehall' },
};

export default function WhitehallMayorsCourtPage() {
  return <MayorsCourtTemplate suburb="Whitehall" />;
}
