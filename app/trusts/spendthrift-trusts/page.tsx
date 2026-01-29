import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Spendthrift Trusts Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus attorney helping you set up spendthrift trusts to protect your assets from creditors and beneficiaries with poor financial management. Secure your wealth in Ohio. Schedule a consultation: (614) 285-5482',
  keywords: ['spendthrift trusts Columbus OH', 'spendthrift trust attorney Ohio', 'asset protection trust lawyer', 'wealth protection Ohio'],
  openGraph: {
    title: 'Spendthrift Trusts Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/trusts/spendthrift-trusts',
  },
  alternates: { canonical: '/trusts/spendthrift-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Spendthrift Trusts', href: '/trusts/spendthrift-trusts' },
];

const faqs = [
  {
    question: 'What is a spendthrift trust?',
    answer: 'A spendthrift trust is a type of trust designed to protect the assets from the beneficiary’s creditors. It limits the beneficiary’s access to the trust’s assets, typically allowing only the trustee to distribute funds for the beneficiary’s support, care, and maintenance. This helps prevent irresponsible spending or misuse of trust funds.',
  },
  {
    question: 'How does a spendthrift trust work in Ohio?',
    answer: 'In Ohio, a spendthrift trust can be used to protect the trust’s assets from creditors, preventing them from seizing funds to satisfy a beneficiary’s debts. The trust can limit how and when assets are distributed, ensuring that funds are used responsibly and only for the beneficiary’s needs.',
  },
  {
    question: 'What are the benefits of a spendthrift trust?',
    answer: 'The main benefit of a spendthrift trust is asset protection. It helps shield the trust assets from creditors, ensuring that the funds are used for the beneficiary’s benefit rather than squandered or seized. It also provides a structure for the trustee to manage funds responsibly for the beneficiary.',
  },
  {
    question: 'Who can set up a spendthrift trust?',
    answer: 'Anyone wishing to protect assets from being misused or taken by creditors can set up a spendthrift trust. This is particularly useful for individuals with beneficiaries who may be financially irresponsible or who are at risk of debt-related issues.',
  },
  {
    question: 'Do I need an attorney to set up a spendthrift trust?',
    answer: 'Yes, creating a spendthrift trust requires legal expertise to ensure it is structured properly and complies with Ohio laws. An attorney can help draft the trust, select a suitable trustee, and ensure that the terms of the trust are clearly defined and enforceable.',
  },
];

export default function SpendthriftTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Spendthrift Trusts Lawyer in Columbus, OH"
        description="Helping you establish spendthrift trusts to protect assets from creditors and manage funds for beneficiaries with financial concerns in Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Spendthrift Trusts in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A spendthrift trust can be a valuable tool to protect your assets from creditors and to ensure that funds are used responsibly by beneficiaries. At Jwayyed Law LLC, we help you set up spendthrift trusts to safeguard your wealth and manage it in accordance with your wishes.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How Spendthrift Trusts Work</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Asset Protection:</strong> Protects the trust’s assets from creditors, ensuring they are used only for the beneficiary’s needs.</li>
              <li><strong>Controlled Distribution:</strong> Distributes funds at the trustee’s discretion to ensure responsible use by the beneficiary.</li>
              <li><strong>Financial Security:</strong> Provides a stable financial foundation for beneficiaries who may be prone to financial mismanagement or debt issues.</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Jwayyed Law LLC offers expert services in setting up spendthrift trusts in Ohio. Our attorneys will work with you to create a trust that meets your financial protection goals and ensures the responsible management of your assets for the benefit of your beneficiaries.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
