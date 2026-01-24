import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Estate Disputes Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus estate disputes attorney resolving conflicts. Skilled representation for estate distribution disputes in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['estate disputes lawyer Columbus OH', 'estate dispute attorney Ohio', 'estate distribution lawyer', 'Franklin County estate dispute attorney'],
  openGraph: {
    title: 'Estate Disputes Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/estate-disputes',
  },
  alternates: { canonical: '/other-services/estate-disputes' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Probate', href: '/other-services/probate' },
  { label: 'Estate Disputes', href: '/other-services/estate-disputes' },
];

export default function EstateDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Estate Disputes Lawyer in Columbus, OH"
        description="Experienced legal assistance with estate disputes. Resolving conflicts over estate distribution and administration."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Estate Disputes in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Estate disputes in Columbus or throughout Ohio involve conflicts over estate distribution, administration, or interpretation of wills or trusts. At Jwayyed Law LLC, we provide experienced representation for estate disputes under Ohio Revised Code. Our attorney understands estate law and can help you resolve disputes over estate distribution, executor or trustee conduct, or interpretation of estate documents.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated estate dispute representation in Columbus, Franklin County, and throughout Ohio. We understand that estate disputes can be complex and emotional. Our attorney works diligently to resolve disputes and protect your interests.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

