import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Probate Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus probate attorney helping you navigate probate administration. Skilled representation for probate matters in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['probate lawyer Columbus OH', 'probate attorney Ohio', 'probate administration lawyer', 'Franklin County probate attorney'],
  openGraph: {
    title: 'Probate Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/probate',
  },
  alternates: { canonical: '/other-services/probate' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Probate', href: '/other-services/probate' },
];

export default function ProbatePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Probate Lawyer in Columbus, OH"
        description="Experienced legal assistance with probate administration. Helping you navigate the probate process."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Probate in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Probate in Columbus or throughout Ohio involves the legal process of administering a deceased person's estate, including validating wills, paying debts, and distributing assets to beneficiaries. At Jwayyed Law LLC, we provide experienced assistance with probate administration under Ohio Revised Code Chapter 2107. Our attorney understands probate law and can help you navigate the probate process.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Probate Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/other-services/probate/probate-administration" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Probate Administration</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Complete probate administration services</p>
              </Link>
              <Link href="/other-services/probate/will-contests" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Will Contests</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Contesting or defending will validity</p>
              </Link>
              <Link href="/other-services/probate/estate-disputes" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Estate Disputes</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Resolving estate distribution disputes</p>
              </Link>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated probate assistance in Columbus, Franklin County, and throughout Ohio. We understand that probate can be complex and emotional. Our attorney works diligently to guide you through probate, ensure compliance with all requirements, and protect your interests.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}

