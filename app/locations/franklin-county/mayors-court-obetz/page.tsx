import { Metadata } from 'next';
import MayorsCourtTemplate from '@/components/franklin-templates/MayorsCourtTemplate';

export const metadata: Metadata = {
  title: "Obetz Mayor's Court Attorney | Jwayyed Law",
  description: "Charged in Obetz Mayor's Court? OVI, traffic, and misdemeanor defense. Jwayyed Law LLC appears in Obetz Mayor's Court. Call (614) 285-5482.",
  keywords: ["Obetz mayor's court lawyer", "Obetz mayor's court attorney", "Obetz Ohio mayor's court defense"],
  openGraph: {
    title: "Obetz Mayor's Court Attorney | Jwayyed Law",
    url: "https://www.jjlawohio.com/locations/franklin-county/mayors-court-obetz",
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/mayors-court-obetz' },
};

export default function ObetzMayorsCourtPage() {
  return <MayorsCourtTemplate suburb="Obetz" />;
}
