import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Estate Planning & Wills Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus estate planning and wills attorney protecting your legacy. Skilled representation for wills and estate planning in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['estate planning lawyer Columbus OH', 'wills attorney Ohio', 'estate planning attorney', 'Franklin County estate planning lawyer'],
  openGraph: {
    title: 'Estate Planning & Wills Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/estate-planning-wills',
  },
  alternates: { canonical: '/other-services/estate-planning-wills' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Planning', href: '/other-services/estate-planning' },
  { label: 'Estate Planning & Wills', href: '/other-services/estate-planning-wills' },
];

export default function EstatePlanningWillsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Estate Planning & Wills Lawyer in Columbus, OH"
        description="Experienced legal assistance with estate planning and wills. Protecting your legacy and ensuring your wishes are carried out."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Estate Planning & Wills in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Estate planning and wills in Columbus or throughout Ohio involve creating legal documents to protect your assets, provide for your loved ones, and ensure your wishes are carried out after your death. At Jwayyed Law LLC, we provide experienced assistance with estate planning and wills under Ohio Revised Code Chapter 2107 (current as of 2026). Our attorney understands estate planning law and can help you create a comprehensive estate plan including wills, trusts, and powers of attorney.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated estate planning and wills assistance in Columbus, Franklin County, and throughout Ohio. We understand that estate planning is essential for protecting your legacy. Our attorney works diligently to create comprehensive estate plans tailored to your needs and ensure your wishes are carried out.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

