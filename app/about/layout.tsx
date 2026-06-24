import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com';

export const metadata: Metadata = {
  title: 'About Jwayyed Law LLC | Ohio Attorney',
  description: 'Meet Attorney Jwayyed Jwayyed — OVI & criminal defense, estate planning, and business law throughout Ohio. Former Prosecutor. Call (614) 285-5482.',
  keywords: [
    'Ohio attorney',
    'attorney Jwayyed',
    'attorney in Ohio',
    'experienced attorney Ohio',
    'criminal defense attorney Ohio',
    'estate planning attorney Ohio'
  ],
  openGraph: {
    title: 'About Jwayyed Law LLC | Ohio Attorney',
    description: 'Meet Attorney Jwayyed Jwayyed — experienced Ohio attorney dedicated to protecting your rights throughout the state.',
    url: `${siteUrl}/about`,
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

