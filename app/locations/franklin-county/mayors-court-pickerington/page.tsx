import { Metadata } from 'next';
import MayorsCourtTemplate from '@/components/franklin-templates/MayorsCourtTemplate';

export const metadata: Metadata = {
  title: "Pickerington Mayor's Court Attorney | Jwayyed Law",
  description: "Charged in Pickerington Mayor's Court? OVI, traffic, misdemeanor defense. Jwayyed Law LLC. Call (614) 285-5482.",
  keywords: ["Pickerington mayor's court lawyer", "Pickerington mayor's court attorney", "Pickerington Ohio mayor's court defense"],
  openGraph: {
    title: "Pickerington Mayor's Court Attorney | Jwayyed Law",
    url: "https://www.jjlawohio.com/locations/franklin-county/mayors-court-pickerington",
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/mayors-court-pickerington' },
};

export default function PickeringtonMayorsCourtPage() {
  return <MayorsCourtTemplate suburb="Pickerington" />;
}
