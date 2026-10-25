import type { Metadata } from 'next';
import AboutView from '@/components/about/AboutView';

export const metadata: Metadata = {
  title: 'About Attorney Jwayyed Jwayyed',
  description:
    'Ohio attorney Jwayyed Jwayyed: former prosecutor for eight Ohio communities, licensed since 2019, defending clients in Columbus and statewide.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Attorney Jwayyed Jwayyed | Jwayyed Law LLC',
    description: 'Former prosecutor for eight Ohio communities, now representing clients across Ohio.',
    url: 'https://www.jjlawohio.com/about',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

export default function AboutPage() {
  return <AboutView breadcrumbs={[{ label: 'About Attorney Jwayyed', href: '/about' }]} />;
}
