import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Powers of Attorney Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus powers of attorney attorney protecting your interests. Skilled representation for financial and healthcare powers of attorney in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['powers of attorney lawyer Columbus OH', 'power of attorney attorney Ohio', 'financial power of attorney', 'Franklin County power of attorney attorney'],
  openGraph: {
    title: 'Powers of Attorney Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/powers-of-attorney',
  },
  alternates: { canonical: '/other-services/powers-of-attorney' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Estate Planning', href: '/other-services/estate-planning' },
  { label: 'Powers of Attorney', href: '/other-services/powers-of-attorney' },
];

export default function PowersOfAttorneyPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Powers of Attorney Lawyer in Columbus, OH"
        description="Experienced legal assistance with powers of attorney. Protecting your interests through financial and healthcare powers of attorney."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Powers of Attorney in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Powers of attorney in Columbus or throughout Ohio are legal documents that allow you to appoint someone to make decisions on your behalf if you become unable to do so. At Jwayyed Law LLC, we provide experienced assistance with powers of attorney under Ohio Revised Code Chapter 1337 (current as of 2026). Our attorney understands power of attorney law and can help you create financial powers of attorney and healthcare powers of attorney tailored to your needs.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated powers of attorney assistance in Columbus, Franklin County, and throughout Ohio. We understand that powers of attorney are essential for protecting your interests if you become incapacitated. Our attorney works diligently to create powers of attorney tailored to your needs and ensure your wishes are carried out.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

