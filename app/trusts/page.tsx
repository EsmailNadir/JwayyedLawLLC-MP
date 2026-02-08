import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ohio Trusts Attorney | Columbus, Cincinnati, Dayton | Experienced Estate Planning Lawyer | Jwayyed Law LLC',
  description: 'Experienced Ohio trusts attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Revocable living trusts, special needs trusts, and more. Schedule consultation: (614) 285-5482',
  keywords: ['Ohio trusts attorney', 'Columbus trusts attorney', 'Cincinnati trusts attorney', 'Dayton trusts attorney', 'revocable living trusts', 'special needs trusts', 'trusts lawyer Ohio'],
  openGraph: {
    title: 'Ohio Trusts Attorney | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    description: 'Trusts and estate planning in Columbus, Cincinnati, Dayton, and throughout Ohio. Schedule a consultation today.',
    url: 'https://www.jjlawohio.com/trusts',
  },
  alternates: { canonical: '/trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
];

const faqs = [
  {
    question: 'What is a trust?',
    answer: 'A trust is a legal arrangement where a person (the grantor) transfers assets to a trustee, who manages and distributes the assets for the benefit of a beneficiary. Trusts are commonly used in estate planning to control how assets are distributed after death, minimize federal estate taxes (Ohio has no state estate tax since 2013), and avoid probate.',
  },
  {
    question: 'What is the difference between a revocable and irrevocable trust?',
    answer: 'A revocable trust can be altered or dissolved by the grantor at any time during their lifetime, while an irrevocable trust cannot be changed once it is established. Revocable trusts provide flexibility, while irrevocable trusts offer stronger asset protection and tax advantages.',
  },
  {
    question: 'Why should I create a trust?',
    answer: 'Trusts provide many benefits, including avoiding probate, controlling how assets are distributed, minimizing federal estate taxes (Ohio has no state estate tax since 2013), and protecting assets from creditors or lawsuits. They also allow for detailed planning, such as providing for minor children, charitable donations, or beneficiaries with special needs.',
  },
  {
    question: 'Do I need an attorney to create a trust?',
    answer: 'Yes, setting up a trust involves complex legal and tax considerations. An experienced attorney can help you choose the right type of trust, ensure it complies with Ohio laws, and draft the necessary documents to meet your estate planning goals.',
  },
  {
    question: 'What is the cost of setting up a trust in Ohio?',
    answer: 'The cost of setting up a trust varies depending on the complexity of the trust and the services provided by the attorney. Simple trusts may cost a few hundred dollars, while more complex estate plans could involve higher fees. The investment is worthwhile for the protection and control a trust provides.',
  },
];

export default function TrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Trusts Lawyer"
        description="Serving Columbus, Cincinnati, Dayton, and throughout Ohio. Trusts for estate planning, asset protection, and legacy preservation."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Trusts Representation in Columbus, Cincinnati, Dayton & Throughout Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Trusts are a core part of estate planning. They are powerful tools used to protect your assets, ensure your loved ones are taken care of, and avoid the lengthy and costly probate process. At Jwayyed Law LLC, we provide expert legal services for creating various types of trusts, including revocable living trusts, irrevocable trusts, special needs trusts, and more. Our attorneys are here to guide you through the process and help you make the best decisions for your future.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Trusts provide control and flexibility over your estate, ensuring your wishes are honored and protecting your assets from creditors and other risks. Whether you're looking to create a living trust, a special needs trust, or protect your legacy through an irrevocable trust, we are here to help you navigate the options.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              In Ohio, trusts are governed by state law, and it is crucial to work with an experienced attorney to ensure that your trust complies with legal requirements and meets your goals. Whether you want to protect your family home, reduce federal estate taxes (Ohio has no state estate tax since 2013), or ensure that a loved one with special needs is provided for, we can help.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Trusts We Help You Set Up</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              At Jwayyed Law LLC, we specialize in creating a wide range of trusts, including:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Link href="/trusts/revocable-living-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Revocable Living Trusts</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Maintain control over your assets while avoiding probate and ensuring a smooth transition for your heirs.</p>
              </Link>
              <Link href="/trusts/irrevocable-life-insurance-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Irrevocable Life Insurance Trusts (ILITs)</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Protect life insurance proceeds from federal estate taxes and ensure that your beneficiaries receive the benefit.</p>
              </Link>
              <Link href="/trusts/special-needs-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Special Needs Trusts</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Provide for a loved one with disabilities while maintaining their eligibility for government benefits.</p>
              </Link>
              <Link href="/trusts/dynasty-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Dynasty Trusts</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Preserve wealth across generations with long-term asset protection and federal estate tax minimization.</p>
              </Link>
              <Link href="/trusts/charitable-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Charitable Trusts</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Support charitable causes while receiving tax benefits and leaving a legacy of giving.</p>
              </Link>
              <Link href="/trusts/spendthrift-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Spendthrift Trusts</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Protect assets from creditors and ensure responsible distribution to beneficiaries.</p>
              </Link>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC for Your Trusts</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              At Jwayyed Law LLC, we provide personalized estate planning services to meet your unique needs. Our experienced attorneys understand Ohio’s trust laws and can help you create a trust that aligns with your goals, whether you want to ensure your family’s financial security, provide for a loved one with special needs, or reduce federal estate taxes (Ohio has no state estate tax since 2013). We are committed to helping you protect your legacy and ensure your wishes are carried out.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If you’re considering setting up a trust or need help with an existing one, contact Jwayyed Law LLC today to schedule a consultation. We will review your situation, explain your options, and help you create a plan that provides peace of mind for you and your family.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
