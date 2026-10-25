import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import { LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Our Law Firm',
  description:
    'Jwayyed Law LLC is a full-service Ohio law firm in Columbus serving clients in Cincinnati, Dayton and every Ohio county. Call (614) 285-5482.',
  openGraph: {
    title: 'Our Law Firm | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/our-law-firm',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/our-law-firm' },
};

const breadcrumbItems = [{ label: 'Our Law Firm', href: '/our-law-firm' }];

const sections = [
  { title: 'Our attorney', subtitle: 'Attorney Jwayyed: credentials and how he can help.', href: '/our-law-firm/our-attorneys' },
  { title: 'About us', subtitle: 'His background, his years as a prosecutor, and the firm.', href: '/our-law-firm/about-us' },
  { title: 'Case results', subtitle: 'Anonymized outcomes in OVI, criminal defense and personal injury cases.', href: '/our-law-firm/case-results' },
  { title: 'Legal blog', subtitle: 'Articles on Ohio law, your rights and court procedure.', href: '/our-law-firm/blog' },
  {
    title: 'Document templates',
    subtitle: 'Free Ohio legal document templates (demand letters, repair requests and more) to use as a starting point.',
    href: '/our-law-firm/document-templates',
  },
];

export default function OurLawFirmPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="About Jwayyed Law LLC"
        description="A full-service Ohio law firm in Columbus, serving clients in Cincinnati, Dayton and throughout the state."
      />

      <Section
        title="The firm"
        intro={
          <p>
            Attorney Jwayyed founded Jwayyed Law LLC to represent individuals, families and businesses across Ohio, in Columbus,
            Cincinnati, Dayton and courts statewide.
          </p>
        }
      >
        <p>
          The practice covers the legal problems Ohioans most often face: criminal defense and OVI/DUI, personal injury, civil
          litigation, landlord-tenant disputes, business formation and commercial disputes, and estate planning, including wills,
          trusts and powers of attorney.
        </p>
        <p>
          Every client gets direct access to the attorney handling the case and a straight answer about it. The firm learns your
          situation before advising you, and builds the strategy around your goals.
        </p>
        <p>
          Call <a href="tel:+16142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>. The
          office is at 100 E. Campus View Boulevard, Suite 250, Columbus, Ohio 43235.
        </p>
      </Section>

      <Section title="Explore the firm" tone="ice">
        <LinkGrid links={sections} />
      </Section>

      <ContactCTA />
    </>
  );
}
