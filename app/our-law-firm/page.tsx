import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'About Our Law Firm | Jwayyed Law LLC — Columbus, Ohio',
  description:
    'Learn about Jwayyed Law LLC — an Ohio law firm serving Columbus, Cincinnati, Dayton, and statewide. Meet our attorneys, read case results, and explore our legal blog.',
  openGraph: {
    title: 'About Our Law Firm | Jwayyed Law LLC — Columbus, Ohio',
    url: 'https://www.jjlawohio.com/our-law-firm',
  },
  alternates: { canonical: '/our-law-firm' },
};

const breadcrumbItems = [{ label: 'Our Law Firm', href: '/our-law-firm' }];

const sections = [
  {
    title: 'Our Attorneys & Staff',
    description:
      'Meet the legal team at Jwayyed Law LLC — experienced Ohio attorneys dedicated to protecting your rights and achieving results.',
    href: '/our-law-firm/our-attorneys',
    icon: '⚖',
  },
  {
    title: 'About Us',
    description:
      'Learn about our firm\'s history, values, and commitment to providing aggressive, client-focused legal representation throughout Ohio.',
    href: '/our-law-firm/about-us',
    icon: '🏛',
  },
  {
    title: 'Case Results',
    description:
      'Review our track record of successful outcomes in criminal defense, OVI/DUI, personal injury, civil litigation, and more.',
    href: '/our-law-firm/case-results',
    icon: '📋',
  },
  {
    title: 'Legal Blog',
    description:
      'Stay informed with articles on Ohio law, your legal rights, court procedures, and updates relevant to our practice areas.',
    href: '/our-law-firm/blog',
    icon: '📝',
  },
  {
    title: 'Document Templates',
    description:
      'Free Ohio legal document templates — demand letters, repair requests, and more — to use as a starting point for common legal situations.',
    href: '/our-law-firm/document-templates',
    icon: '📄',
  },
];

export default function OurLawFirmPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="About Jwayyed Law LLC"
        description="A full-service Ohio law firm serving Columbus, Cincinnati, Dayton, and clients throughout the state."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-5 leading-relaxed text-lg">
            Jwayyed Law LLC is a full-service Ohio law firm founded by Attorney Jwayyed to provide
            aggressive, results-driven legal representation to individuals, families, and businesses
            throughout the state. We serve clients in Columbus, Cincinnati, Dayton, and all Ohio
            courts — bringing local knowledge and courtroom experience to every case we handle.
          </p>
          <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-5 leading-relaxed">
            Our practice spans the full range of legal needs that Ohioans encounter: criminal
            defense and OVI/DUI, personal injury, civil litigation, landlord-tenant disputes,
            business formation and commercial disputes, and estate planning including wills, trusts,
            and powers of attorney. Whether you are facing criminal charges that threaten your
            freedom, recovering from an accident caused by someone else\'s negligence, or working to
            protect your business or legacy, our attorneys are ready to stand beside you.
          </p>
          <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-5 leading-relaxed">
            At Jwayyed Law LLC, we believe every client deserves direct access to their attorney,
            straightforward answers, and a legal strategy tailored to their goals. We take the time
            to understand your situation before advising you — and we fight for outcomes that make a
            real difference in your life. Our firm has built its reputation on honest communication,
            thorough preparation, and tenacious advocacy both inside and outside the courtroom.
          </p>
          <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-10 leading-relaxed">
            Ready to speak with an attorney? Call us at{' '}
            <a
              href="tel:6142855482"
              className="text-[#b87333] font-semibold hover:underline"
            >
              (614) 285-5482
            </a>{' '}
            or{' '}
            <Link href="/contact" className="text-[#b87333] font-semibold hover:underline">
              schedule a free consultation online
            </Link>
            . Our office is located at 100 E. Campus View Boulevard, Suite #250, Columbus, Ohio
            43235.
          </p>

          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
            Explore Our Firm
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#b87333]/50 hover:shadow-sm transition-all"
              >
                <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-bold text-gray-900 group-hover:text-[#b87333] transition-colors mb-2">
                  {s.title}
                </h3>
                <p className="font-['Inter',_'Arial',_sans-serif] text-gray-600 text-sm leading-relaxed">
                  {s.description}
                </p>
                <span className="inline-block mt-3 text-sm font-semibold text-[#b87333] group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
