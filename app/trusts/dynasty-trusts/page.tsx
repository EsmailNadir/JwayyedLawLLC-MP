import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Dynasty Trusts Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus dynasty trusts attorney helping you establish multi-generational wealth through trusts. Protect your legacy and minimize taxes in Ohio. Schedule a consultation: (614) 285-5482',
  keywords: ['dynasty trusts Columbus OH', 'dynasty trust attorney Ohio', 'multi-generational wealth', 'estate planning lawyer Ohio'],
  openGraph: {
    title: 'Dynasty Trusts Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/trusts/dynasty-trusts',
  },
  alternates: { canonical: '/trusts/dynasty-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Dynasty Trusts', href: '/trusts/dynasty-trusts' },
];

const faqs = [
  {
    question: 'What is a dynasty trust?',
    answer: 'A dynasty trust is a long-term trust designed to preserve wealth across multiple generations while minimizing estate and gift taxes. It can continue for many years, often lasting for several generations, providing asset protection for heirs in Ohio.',
  },
  {
    question: 'How does a dynasty trust work in Ohio?',
    answer: 'In Ohio, a dynasty trust can last indefinitely, or for up to 90 years, depending on state laws. It allows you to transfer assets to future generations without triggering estate taxes at each generational level, thus preserving family wealth.',
  },
  {
    question: 'What are the benefits of a dynasty trust?',
    answer: 'The main benefit of a dynasty trust is the ability to pass wealth from one generation to the next without triggering estate taxes on each transfer. It also provides asset protection from creditors and ensures that wealth is managed and passed according to your wishes.',
  },
  {
    question: 'How is a dynasty trust different from a regular trust?',
    answer: 'A dynasty trust differs from a regular trust in that it is designed to last for multiple generations, whereas regular trusts typically expire after a specific period or when a beneficiary reaches a certain age. Dynasty trusts also offer greater asset protection and tax advantages.',
  },
  {
    question: 'Do I need a dynasty trust attorney?',
    answer: 'Yes, establishing a dynasty trust requires careful legal planning and consideration of Ohio state laws. An experienced attorney can help you create a trust that meets your long-term financial and estate planning goals while ensuring compliance with state regulations.',
  },
];

export default function DynastyTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Dynasty Trusts Lawyer in Columbus, OH"
        description="Helping you establish dynasty trusts for long-term wealth preservation and generational planning."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Dynasty Trusts in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Dynasty trusts are an effective tool for passing wealth across generations while minimizing estate taxes. In Ohio, these trusts can provide a secure way to protect and grow family assets over time. Jwayyed Law LLC can guide you through the process of setting up a dynasty trust to ensure your wealth is preserved and passed on according to your wishes.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How Dynasty Trusts Work</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Wealth Transfer:</strong> Dynasty trusts allow you to transfer wealth to your heirs over multiple generations without incurring estate taxes.</li>
              <li><strong>Asset Protection:</strong> These trusts offer protection from creditors, ensuring your assets remain within the family.</li>
              <li><strong>Long-Term Legacy:</strong> Dynasty trusts can last for decades or even centuries, preserving your legacy for future generations.</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm specializes in creating long-term estate plans that protect family wealth for generations to come. With experience in Ohio law and a deep understanding of dynasty trusts, we are well-equipped to help you achieve your wealth preservation goals.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
