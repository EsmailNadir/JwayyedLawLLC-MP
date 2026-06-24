import type { Metadata } from 'next';
import LegalAssistantClient from './LegalAssistantClient';

export const metadata: Metadata = {
  title: 'Legal Assistant Team | Jwayyed Law LLC',
  description: 'Meet the legal assistant team at Jwayyed Law LLC — dedicated professionals supporting Ohio clients in OVI, criminal defense, and civil matters from our Columbus office.',
  alternates: { canonical: '/about/legal-assistant' },
  openGraph: {
    title: 'Legal Assistant Team | Jwayyed Law LLC',
    description: 'Meet the legal assistant team at Jwayyed Law LLC — dedicated professionals supporting Ohio clients from our Columbus office.',
    url: 'https://www.jjlawohio.com/about/legal-assistant',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

export default function LegalAssistantPage() {
  return <LegalAssistantClient />;
}
