import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Estate Planning Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus estate planning attorney protecting your legacy. Skilled representation for wills, trusts, and estate planning in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['estate planning lawyer Columbus OH', 'estate planning attorney Ohio', 'wills trusts lawyer', 'Franklin County estate planning attorney'],
  openGraph: {
    title: 'Estate Planning Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/estate-planning',
  },
  alternates: { canonical: '/other-services/estate-planning' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Planning', href: '/other-services/estate-planning' },
];

export default function EstatePlanningPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Estate Planning Lawyer in Columbus, OH"
        description="Experienced legal assistance with estate planning. Protecting your legacy and ensuring your wishes are carried out."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Estate Planning in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Estate planning in Columbus or throughout Ohio involves creating legal documents to protect your assets, provide for your loved ones, and ensure your wishes are carried out after your death. At Jwayyed Law LLC, we provide experienced assistance with estate planning under Ohio Revised Code. Our attorney understands estate planning law and can help you create a comprehensive estate plan.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Estate Planning Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/other-services/estate-planning-wills" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Estate Planning & Wills</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Comprehensive estate planning and will preparation</p>
              </Link>
              <Link href="/trusts" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Trusts</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Trust creation and administration</p>
              </Link>
              <Link href="/other-services/powers-of-attorney" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Powers of Attorney</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Financial and healthcare powers of attorney</p>
              </Link>
              <Link href="/other-services/guardianships" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Guardianships</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Guardianship establishment and administration</p>
              </Link>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated estate planning assistance in Columbus, Franklin County, and throughout Ohio. We understand that estate planning is essential for protecting your legacy. Our attorney works diligently to create comprehensive estate plans tailored to your needs and ensure your wishes are carried out.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

