import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Land Trusts Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio land trusts attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Protect and manage real estate assets. Schedule a consultation: (614) 285-5482',
  keywords: ['land trusts Columbus OH', 'land trust attorney Ohio', 'real estate trust lawyer', 'property protection Ohio'],
  openGraph: {
    title: 'Land Trusts Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/trusts/land-trusts',
  },
  alternates: { canonical: '/trusts/land-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Land Trusts', href: '/trusts/land-trusts' },
];

const faqs = [
  {
    question: 'What is a land trust?',
    answer: 'A land trust is a type of trust where the title to real property is held by a trustee for the benefit of the trust’s beneficiaries. In Ohio, land trusts are often used to maintain privacy and protect property from creditors or legal disputes.',
  },
  {
    question: 'How does a land trust work in Ohio?',
    answer: 'In Ohio, a land trust allows the owner of real estate to transfer the title to a trustee, who then holds the property for the benefit of the beneficiaries. The trust can provide privacy for property owners, as the trustee’s name appears in public records instead of the beneficiary’s name.',
  },
  {
    question: 'What are the benefits of a land trust?',
    answer: 'The primary benefits of a land trust include privacy, asset protection, and easier transfer of real property. Property held in a land trust is shielded from certain legal claims, and it also avoids the probate process, providing a more seamless transfer of ownership.',
  },
  {
    question: 'How is a land trust different from other types of trusts?',
    answer: 'A land trust is specific to real estate property, whereas other trusts can hold a variety of assets. Unlike a typical revocable living trust, a land trust focuses solely on holding title to property and does not involve the management of other types of assets.',
  },
  {
    question: 'Do I need an attorney to set up a land trust?',
    answer: 'Yes, creating a land trust requires careful planning and legal knowledge to ensure it is set up correctly in Ohio. An experienced attorney can help you establish the trust, select a trustee, and ensure that the trust complies with Ohio law.',
  },
];

export default function LandTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Land Trusts Lawyer"
        description="Helping you protect real estate assets through land trusts. Ensure privacy and asset protection in Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Land Trusts in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Land trusts offer a unique way to protect real estate assets while maintaining privacy. By placing the title of property into a land trust, the beneficiary retains control while enjoying protection from legal claims and creditor actions. At Jwayyed Law LLC, we help clients navigate the process of setting up land trusts in Ohio to secure their real estate assets.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How Land Trusts Work</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Privacy Protection:</strong> Keeps property ownership anonymous by placing the title in the trustee’s name.</li>
              <li><strong>Asset Protection:</strong> Protects property from certain legal claims and creditors.</li>
              <li><strong>Probate Avoidance:</strong> Allows for easier transfer of property without going through the probate process.</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Jwayyed Law LLC offers professional legal services for land trusts in Ohio. Whether you're looking to maintain privacy, protect your real estate from creditors, or simplify the transfer of property, we can guide you through the legal steps to create a land trust tailored to your needs.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
