import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Medicaid Asset Protection Trusts Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Medicaid Asset Protection Trusts, asset protection, Medicaid qualification. Schedule a consultation: (614) 285-5482',
  keywords: ['medicaid asset protection trusts Columbus OH', 'medicaid planning attorney Ohio', 'medicaid trust lawyer', 'asset protection Ohio'],
  openGraph: {
    title: 'Medicaid Asset Protection Trusts Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/trusts/medicaid-asset-protection-trusts',
  },
  alternates: { canonical: '/trusts/medicaid-asset-protection-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Medicaid Asset Protection Trusts', href: '/trusts/medicaid-asset-protection-trusts' },
];

const faqs = [
  {
    question: 'What is a Medicaid Asset Protection Trust?',
    answer: 'A Medicaid Asset Protection Trust (MAPT) is a type of irrevocable trust designed to protect assets from being counted toward Medicaid eligibility. The trust holds assets such as homes or investments, and by transferring assets into the trust, individuals can potentially qualify for Medicaid while preserving wealth for future generations.',
  },
  {
    question: 'How does a Medicaid Asset Protection Trust work in Ohio?',
    answer: 'In Ohio, a Medicaid Asset Protection Trust allows you to transfer assets into an irrevocable trust to protect them from being counted in your Medicaid eligibility assessment. Once assets are transferred to the trust, they are no longer considered part of your estate, helping you qualify for Medicaid long-term care benefits.',
  },
  {
    question: 'What are the benefits of a Medicaid Asset Protection Trust?',
    answer: 'The key benefit of a Medicaid Asset Protection Trust is that it helps you qualify for Medicaid while preserving your assets for heirs. It ensures that assets such as your home or savings are protected from Medicaid spend-down requirements, allowing you to access necessary healthcare coverage without losing all your wealth.',
  },
  {
    question: 'Are there any restrictions on Medicaid Asset Protection Trusts?',
    answer: 'Yes, Medicaid Asset Protection Trusts must be set up well in advance of needing Medicaid coverage. There is a five-year “look-back” period in Ohio, meaning that assets transferred to the trust within five years of applying for Medicaid may be subject to penalties or disqualification from coverage.',
  },
  {
    question: 'Do I need an attorney to set up a Medicaid Asset Protection Trust?',
    answer: 'Yes, it’s essential to work with an experienced Medicaid planning attorney to establish a Medicaid Asset Protection Trust. The process is complex and requires knowledge of Ohio Medicaid laws and regulations. An attorney can help ensure that your assets are properly protected and that you qualify for Medicaid without losing your wealth.',
  },
];

export default function MedicaidAssetProtectionTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Medicaid Asset Protection Trusts Lawyer"
        description="Helping you protect assets and qualify for Medicaid with Medicaid Asset Protection Trusts. Secure your healthcare and legacy in Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Medicaid Asset Protection Trusts in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Medicaid Asset Protection Trusts (MAPTs) are designed to help individuals protect their assets while qualifying for Medicaid coverage in Ohio. These trusts allow you to transfer assets into an irrevocable trust to reduce your countable assets, helping you access the care you need while preserving wealth for your family.
            </p>

            <LocationsWeServe title="Trusts" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How Medicaid Asset Protection Trusts Work</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Asset Protection:</strong> Helps you protect your home, savings, and other assets from Medicaid spend-down requirements.</li>
              <li><strong>Medicaid Eligibility:</strong> Allows you to qualify for Medicaid while ensuring your assets remain protected for future generations.</li>
              <li><strong>Irrevocable Trust:</strong> Once assets are placed in the trust, they cannot be removed, ensuring the protection of assets.</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Jwayyed Law LLC specializes in Medicaid planning and asset protection in Ohio. Our team can help you establish a Medicaid Asset Protection Trust that ensures you qualify for Medicaid benefits while protecting your assets. We guide you through the complex process, ensuring compliance with Ohio’s Medicaid regulations.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
