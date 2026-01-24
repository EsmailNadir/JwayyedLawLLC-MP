import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Trusts Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus trusts attorney protecting your assets. Skilled representation for trust creation and administration in Ohio. Free consultation: (614) 285-5482',
  keywords: ['trusts lawyer Columbus OH', 'trust attorney Ohio', 'trust creation lawyer', 'Franklin County trust attorney'],
  openGraph: {
    title: 'Trusts Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/trusts',
  },
  alternates: { canonical: '/other-services/trusts' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Planning', href: '/other-services/estate-planning' },
  { label: 'Trusts', href: '/other-services/trusts' },
];

export default function TrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Trusts Lawyer in Columbus, OH"
        description="Experienced legal assistance with trust creation and administration. Protecting your assets and providing for your loved ones."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Trusts in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Trusts in Columbus or throughout Ohio are legal arrangements that allow you to transfer assets to a trustee for the benefit of beneficiaries. At Jwayyed Law LLC, we provide experienced assistance with trust creation and administration under Ohio Revised Code Chapter 1335. Our attorney understands trust law and can help you create trusts tailored to your needs including revocable trusts, irrevocable trusts, and special needs trusts.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated trust assistance in Columbus, Franklin County, and throughout Ohio. We understand that trusts can provide asset protection, tax benefits, and control over asset distribution. Our attorney works diligently to create trusts tailored to your needs and ensure proper administration.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

