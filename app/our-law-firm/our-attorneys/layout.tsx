import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com';

export const metadata: Metadata = {
  title: 'Attorney Jwayyed',
  description:
    'Meet Attorney Jwayyed of Jwayyed Law LLC, serving Ohio in criminal defense, OVI, personal injury, and business law. (614) 285-5482.',
  keywords: [
    'Attorney Jwayyed',
    'Columbus OVI attorney',
    'Ohio criminal defense lawyer',
    'Jwayyed Law LLC attorney',
    'Columbus attorney',
  ],
  openGraph: {
    title: 'Attorney Jwayyed | Jwayyed Law LLC',
    description:
      'Meet Attorney Jwayyed, serving clients throughout Ohio.',
    url: `${siteUrl}/our-law-firm/our-attorneys`,
  },
  alternates: {
    canonical: '/our-law-firm/our-attorneys',
  },
};

export default function OurAttorneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
