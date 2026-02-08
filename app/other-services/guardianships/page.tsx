import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Guardianships Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio guardianships attorney protecting vulnerable individuals. Skilled representation for guardianship establishment and administration in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['guardianships lawyer Columbus OH', 'guardianship attorney Ohio', 'guardian lawyer', 'Franklin County guardianship attorney'],
  openGraph: {
    title: 'Guardianships Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/guardianships',
  },
  alternates: { canonical: '/other-services/guardianships' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Planning', href: '/other-services/estate-planning' },
  { label: 'Guardianships', href: '/other-services/guardianships' },
];

export default function GuardianshipsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Guardianships Lawyer"
        description="Experienced legal assistance with guardianships. Protecting vulnerable individuals through guardianship establishment and administration."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Guardianships in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Guardianships in Columbus, Cincinnati, Dayton, or throughout Ohio are legal arrangements that allow a guardian to make decisions for a ward who is unable to make decisions for themselves. At Jwayyed Law LLC, we provide experienced assistance with guardianship establishment and administration under Ohio Revised Code Chapter 2111 (current as of 2026). Our attorney understands guardianship law and can help you establish guardianships for minors or incapacitated adults.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated guardianship assistance throughout Ohio. We understand that guardianships are essential for protecting vulnerable individuals. Our attorney works diligently to establish guardianships when necessary and ensure proper administration.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

