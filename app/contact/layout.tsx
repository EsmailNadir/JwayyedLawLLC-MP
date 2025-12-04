import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com';

export const metadata: Metadata = {
  title: 'Contact Us | Schedule Consultation | Ohio Law Firm',
  description: 'Contact Jwayyed Law LLC serving Ohio. Schedule a consultation for criminal defense, estate planning, immigration, or other legal services. Office located at 100 E. Campus View Boulevard, Suite #250, Columbus, OH. Call (614) 285-5482.',
  keywords: [
    'contact attorney Ohio',
    'schedule consultation Ohio',
    'Ohio law firm',
    'attorney consultation Ohio',
    'legal consultation Ohio'
  ],
  openGraph: {
    title: 'Contact Us | Jwayyed Law LLC',
    description: 'Schedule a consultation with Jwayyed Law LLC serving Ohio. Call (614) 285-5482.',
    url: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

