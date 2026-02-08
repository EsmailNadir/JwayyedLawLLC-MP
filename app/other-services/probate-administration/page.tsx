import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Probate Administration Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio probate administration attorney helping you navigate probate. Skilled representation for probate administration in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['probate administration lawyer Columbus OH', 'probate attorney Ohio', 'probate administration', 'Franklin County probate attorney'],
  openGraph: {
    title: 'Probate Administration Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/probate-administration',
  },
  alternates: { canonical: '/other-services/probate-administration' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Probate', href: '/other-services/probate' },
  { label: 'Probate Administration', href: '/other-services/probate-administration' },
];

export default function ProbateAdministrationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Probate Administration Lawyer"
        description="Experienced legal assistance with probate administration. Helping you navigate the probate process."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Probate Administration in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Probate administration in Columbus, Cincinnati, Dayton, or throughout Ohio involves the legal process of administering a deceased person's estate, including validating wills, paying debts, and distributing assets to beneficiaries. At Jwayyed Law LLC, we provide experienced assistance with probate administration under Ohio Revised Code Title 21, which governs probate court procedures, estate administration, and fiduciary duties. Our attorney understands probate law and can help you navigate the probate process.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated probate administration assistance throughout Ohio. We understand that probate can be complex and emotional. Our attorney works diligently to guide you through probate, ensure compliance with all requirements, and protect your interests.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

