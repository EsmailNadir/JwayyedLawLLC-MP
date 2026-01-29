import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Irrevocable Life Insurance Trusts (ILIT) Lawyer in Columbus, OH | Jwayyed Law LLC',
  description: 'Experienced Columbus attorney helping you set up irrevocable life insurance trusts (ILITs) to protect life insurance proceeds and reduce estate taxes in Ohio. Schedule a consultation: (614) 285-5482',
  keywords: ['irrevocable life insurance trust Columbus OH', 'ILIT attorney Ohio', 'life insurance trust lawyer', 'estate planning Ohio'],
  openGraph: {
    title: 'Irrevocable Life Insurance Trusts (ILIT) Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/trusts/irrevocable-life-insurance-trusts',
  },
  alternates: { canonical: '/trusts/irrevocable-life-insurance-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Irrevocable Life Insurance Trusts', href: '/trusts/irrevocable-life-insurance-trusts' },
];

const faqs = [
  {
    question: 'What is an irrevocable life insurance trust (ILIT)?',
    answer: 'An irrevocable life insurance trust (ILIT) is a type of trust designed to hold a life insurance policy and remove it from your taxable estate. Once the policy is transferred to an ILIT, you no longer control it, and the proceeds from the policy are not subject to estate taxes upon your death.',
  },
  {
    question: 'How does an ILIT work in Ohio?',
    answer: 'In Ohio, an ILIT is used to ensure that life insurance proceeds are excluded from your estate for tax purposes. The trustee of the ILIT manages the life insurance policy and distributes the proceeds according to the terms of the trust, usually to beneficiaries other than the estate.',
  },
  {
    question: 'What are the benefits of an ILIT?',
    answer: 'The primary benefit of an ILIT is that it removes the life insurance proceeds from your taxable estate, potentially reducing estate taxes. It also allows you to designate beneficiaries and ensure that the proceeds are distributed according to your wishes without probate.',
  },
  {
    question: 'Can I change the beneficiaries of my ILIT?',
    answer: 'No, once an ILIT is established and the policy is transferred to it, you cannot change the beneficiaries. This is why it’s important to work with an attorney to ensure that the terms of the ILIT reflect your wishes and long-term planning goals.',
  },
  {
    question: 'Do I need an attorney to set up an ILIT?',
    answer: 'Yes, setting up an ILIT requires careful legal and tax planning. An experienced attorney can help you draft the trust, ensure it complies with Ohio state laws, and advise you on the most effective way to structure the trust to achieve your estate planning goals.',
  },
];

export default function IrrevocableLifeInsuranceTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Irrevocable Life Insurance Trusts Lawyer in Columbus, OH"
        description="Helping you establish irrevocable life insurance trusts to protect your assets and reduce estate taxes in Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Irrevocable Life Insurance Trusts in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An Irrevocable Life Insurance Trust (ILIT) is an estate planning tool used to hold a life insurance policy and keep its proceeds outside of your taxable estate. This helps reduce estate taxes while ensuring that your beneficiaries are provided for in Ohio. Let Jwayyed Law LLC guide you through the process of creating an ILIT that aligns with your estate planning goals.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How ILITs Work</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Estate Tax Reduction:</strong> Removes life insurance proceeds from your taxable estate, reducing estate taxes.</li>
              <li><strong>Controlled Distribution:</strong> Ensures the policy proceeds are distributed according to your wishes to the chosen beneficiaries.</li>
              <li><strong>Asset Protection:</strong> Provides protection against creditors and helps beneficiaries avoid probate.</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Jwayyed Law LLC has extensive experience with irrevocable life insurance trusts in Ohio. We help you navigate the complex legal and tax aspects of establishing an ILIT to minimize estate taxes and ensure that your life insurance proceeds are properly managed and distributed.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
