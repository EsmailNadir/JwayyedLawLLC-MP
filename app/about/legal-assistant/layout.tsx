import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Our Legal Assistant',
  description: 'Meet the legal assistant at Jwayyed Law LLC. Supporting our Ohio attorneys with exceptional organizational skills and client service.',
  alternates: {
    canonical: '/about/legal-assistant',
  },
};

export default function LegalAssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
