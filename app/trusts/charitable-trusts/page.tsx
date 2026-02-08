import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Charitable Trusts Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio charitable trusts attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Charitable giving trusts. Schedule a consultation: (614) 285-5482',
  keywords: ['charitable trusts Columbus OH', 'charitable trust attorney Ohio', 'donor-advised funds', 'nonprofit trust lawyer'],
  openGraph: {
    title: 'Charitable Trusts Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/trusts/charitable-trusts',
  },
  alternates: { canonical: '/trusts/charitable-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Charitable Trusts', href: '/trusts/charitable-trusts' },
];

const faqs = [
  {
    question: 'What is a charitable trust?',
    answer: 'A charitable trust is a legal arrangement where assets are placed into a trust to benefit a charitable organization or cause. Charitable trusts are often used for estate planning and tax benefits. In Ohio, they must meet specific legal requirements to ensure they are recognized as charitable by the state and federal government.',
  },
  {
    question: 'What are the types of charitable trusts in Ohio?',
    answer: 'The two main types of charitable trusts in Ohio are the charitable remainder trust (CRT) and the charitable lead trust (CLT). CRTs allow the donor to retain income from the trust for a set period before the remainder is given to charity. CLTs provide a charity with income from the trust for a set period before the remaining assets are passed to the donor’s beneficiaries.',
  },
  {
    question: 'What are the tax benefits of charitable trusts in Ohio?',
    answer: 'Charitable trusts offer several tax benefits, including income tax deductions for charitable donations and potential federal estate tax benefits. Note: Ohio has no state estate tax (repealed January 1, 2013). Charitable trusts can reduce federal taxable estates, helping individuals pass on more of their wealth to loved ones while supporting charitable causes.',
  },
  {
    question: 'How can a charitable trust help my estate planning?',
    answer: 'A charitable trust can play a significant role in estate planning by allowing you to support a cause you care about while potentially reducing estate taxes. By designating a charitable organization as a beneficiary, you can leave a legacy, and the charitable donations may be deductible, reducing your estate’s overall tax burden.',
  },
  {
    question: 'Do I need a charitable trust attorney?',
    answer: 'Yes, working with an experienced charitable trust attorney is crucial. The process of setting up a charitable trust involves complex legal and tax considerations, and an attorney can help ensure your trust meets Ohio’s legal requirements while maximizing the benefits for you and your chosen charity.',
  },
];

export default function CharitableTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Charitable Trusts Lawyer"
        description="Experienced legal representation for charitable trusts. Helping you set up trusts to support your chosen causes and minimize tax burdens."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Charitable Trusts in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Charitable trusts in Columbus, Cincinnati, Dayton, and throughout Ohio allow individuals to support charitable causes while achieving tax benefits. These trusts are designed to provide a way to donate assets to charity in a structured manner while potentially reducing federal estate taxes. Note: Ohio has no state estate tax (repealed January 1, 2013), but federal estate tax may apply to large estates. At Jwayyed Law LLC, we can guide you through the process of establishing a charitable trust in Ohio to ensure that your philanthropic goals align with your estate planning needs.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Charitable Trusts</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Charitable Remainder Trust (CRT):</strong> Allows you to retain income from the trust for a period of time before the remainder is donated to charity.</li>
              <li><strong>Charitable Lead Trust (CLT):</strong> Provides income to the charity for a set period, after which the remainder goes to your heirs.</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Charitable Trust Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Trust Setup:</strong> Assist in drafting the trust and ensuring it meets all Ohio legal requirements.</li>
              <li><strong>Tax Strategy:</strong> Help maximize tax benefits through strategic planning and compliance with state and federal tax laws.</li>
              <li><strong>Legacy Planning:</strong> Work with you to ensure your trust supports your philanthropic goals while leaving a legacy for your family.</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Jwayyed Law LLC offers comprehensive charitable trust services in Columbus, Cincinnati, Dayton, and throughout Ohio. With our expertise in Ohio estate and trust law, we ensure that your charitable giving aligns with your goals and provides tax benefits. Whether you're looking to support a specific cause or reduce estate taxes, we can guide you through the process and help you establish a charitable trust that reflects your wishes.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
