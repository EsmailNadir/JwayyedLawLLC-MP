import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Revocable Living Trusts Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio attorney helping you set up a revocable living trust for efficient estate planning and asset management in Ohio. Protect your estate and avoid probate. Schedule a consultation: (614) 285-5482',
  keywords: ['revocable living trust Columbus OH', 'living trust attorney Ohio', 'estate planning lawyer', 'avoid probate Ohio'],
  openGraph: {
    title: 'Revocable Living Trusts Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/trusts/revocable-living-trusts',
  },
  alternates: { canonical: '/trusts/revocable-living-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Revocable Living Trusts', href: '/trusts/revocable-living-trusts' },
];

const faqs = [
  {
    question: 'What is a revocable living trust?',
    answer: 'A revocable living trust is an estate planning tool that allows you to transfer ownership of your assets into the trust while retaining control over them during your lifetime. Upon your death, the assets pass directly to your beneficiaries without the need for probate.',
  },
  {
    question: 'How does a revocable living trust work in Ohio?',
    answer: 'In Ohio, a revocable living trust allows you to manage your assets during your lifetime. You can make changes to the trust or dissolve it entirely. After your death, the assets held in the trust are distributed directly to your beneficiaries, avoiding the probate process.',
  },
  {
    question: 'What are the benefits of a revocable living trust?',
    answer: 'The primary benefit of a revocable living trust is that it allows your assets to pass directly to your beneficiaries without going through probate. It also provides more privacy than a will, as it does not become a public document after your death. Additionally, it provides flexibility, allowing you to amend the trust as needed during your lifetime.',
  },
  {
    question: 'How is a revocable living trust different from a will?',
    answer: 'Unlike a will, a revocable living trust does not go through probate. This means it can help save time and money for your beneficiaries. Additionally, a living trust offers more privacy, as it does not become a public record like a will does when probated.',
  },
  {
    question: 'Do I need an attorney to set up a revocable living trust?',
    answer: 'Yes, establishing a revocable living trust involves careful legal planning to ensure your assets are transferred properly and that your trust complies with Ohio law. An attorney can help you draft the trust, transfer assets into it, and ensure that your estate planning goals are met.',
  },
];

export default function RevocableLivingTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Revocable Living Trusts Lawyer"
        description="Helping you set up revocable living trusts for efficient estate planning, asset management, and avoiding probate in Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Revocable Living Trusts in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A revocable living trust allows you to maintain control of your assets while ensuring a smooth transfer to your beneficiaries upon your death. It helps avoid the probate process, saving time and money for your loved ones. Jwayyed Law LLC offers expert services to help you establish a revocable living trust that fits your estate planning needs in Ohio.
            </p>

            <LocationsWeServe title="Trusts" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How Revocable Living Trusts Work</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Probate Avoidance:</strong> Assets are transferred to beneficiaries without going through probate.</li>
              <li><strong>Control:</strong> You retain full control over your assets during your lifetime.</li>
              <li><strong>Flexibility:</strong> The trust can be amended or revoked at any time while you are alive.</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              At Jwayyed Law LLC, we specialize in revocable living trusts for estate planning in Ohio. Our attorneys work with you to craft a trust that aligns with your goals, ensuring that your assets are managed according to your wishes and passed on smoothly to your beneficiaries.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
