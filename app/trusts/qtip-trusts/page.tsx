import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'QTIP Trusts Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus attorney helping you set up QTIP Trusts (Qualified Terminable Interest Property Trusts) for estate planning. Ensure your spouse is provided for while preserving assets for heirs in Ohio. Schedule a consultation: (614) 285-5482',
  keywords: ['QTIP Trusts Columbus OH', 'QTIP trust attorney Ohio', 'estate planning lawyer', 'spouse support trust'],
  openGraph: {
    title: 'QTIP Trusts Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/trusts/qtip-trusts',
  },
  alternates: { canonical: '/trusts/qtip-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'QTIP Trusts', href: '/trusts/qtip-trusts' },
];

const faqs = [
  {
    question: 'What is a QTIP trust?',
    answer: 'A QTIP trust (Qualified Terminable Interest Property Trust) is an estate planning tool that allows the grantor to provide income to their spouse during their lifetime while preserving the principal for other beneficiaries (usually children) after the spouse’s death. This trust can be used to minimize estate taxes while ensuring a surviving spouse is cared for.',
  },
  {
    question: 'How does a QTIP trust work in Ohio?',
    answer: 'In Ohio, a QTIP trust provides income to the surviving spouse for their lifetime. After the spouse’s death, the principal of the trust is distributed to the designated beneficiaries, often children or other heirs. The QTIP election allows the surviving spouse to qualify for the marital deduction for estate tax purposes.',
  },
  {
    question: 'What are the benefits of a QTIP trust?',
    answer: 'The main benefit of a QTIP trust is that it allows you to provide for your spouse’s financial needs during their lifetime while ensuring that the remainder of the trust goes to other beneficiaries after their passing. It also allows for estate tax deferral until the surviving spouse’s death.',
  },
  {
    question: 'How is a QTIP trust different from other types of trusts?',
    answer: 'Unlike a typical revocable living trust, which allows full control over assets during the grantor’s lifetime, a QTIP trust is irrevocable and specifically designed to benefit the surviving spouse during their lifetime while preserving assets for other heirs. It also provides significant estate tax benefits.',
  },
  {
    question: 'Do I need an attorney to set up a QTIP trust?',
    answer: 'Yes, setting up a QTIP trust requires careful legal and tax planning. An attorney can help ensure that the trust meets all requirements, properly names beneficiaries, and is structured in a way that minimizes estate taxes while achieving your goals for your family.',
  },
];

export default function QTIPTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="QTIP Trusts Lawyer in Columbus, OH"
        description="Helping you set up QTIP Trusts for spouse support and preserving wealth for heirs. Protect your family and minimize taxes in Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding QTIP Trusts in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A QTIP trust allows you to provide financial support to your spouse after your death while preserving your estate for future generations. At Jwayyed Law LLC, we help clients in Ohio set up QTIP trusts as part of a comprehensive estate plan that ensures both tax efficiency and family security.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How QTIP Trusts Work</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Income for Spouse:</strong> The surviving spouse receives income from the trust during their lifetime.</li>
              <li><strong>Remainder to Heirs:</strong> After the spouse’s death, the remaining assets are passed on to other designated beneficiaries.</li>
              <li><strong>Estate Tax Benefits:</strong> The QTIP trust provides estate tax benefits by qualifying for the marital deduction, deferring taxes until the surviving spouse’s death.</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Jwayyed Law LLC provides expert legal guidance for establishing QTIP trusts in Ohio. Our attorneys will ensure your trust is structured to meet your specific needs, helping you balance financial support for your spouse while securing the legacy for your heirs.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
