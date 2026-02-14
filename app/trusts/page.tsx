import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ohio Trusts Attorney | Columbus, Cincinnati, Dayton | Experienced Estate Planning Lawyer | Jwayyed Law LLC',
  description: 'Experienced Ohio trusts attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Revocable living trusts, asset protection trusts, special needs trusts, and more. Schedule consultation: (614) 285-5482',
  keywords: ['Ohio trusts attorney', 'Columbus trusts attorney', 'Cincinnati trusts attorney', 'Dayton trusts attorney', 'revocable living trusts', 'asset protection trusts', 'asset protection trust Ohio', 'special needs trusts', 'trusts lawyer Ohio'],
  openGraph: {
    title: 'Ohio Trusts Attorney | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    description: 'Trusts and estate planning in Columbus, Cincinnati, Dayton, and throughout Ohio. Asset protection trusts, revocable living trusts, and more. Schedule a consultation today.',
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
  {
    question: 'What is an asset protection trust in Ohio?',
    answer: 'An asset protection trust is an irrevocable trust designed to shield assets from future creditors, lawsuits, and legal judgments. While Ohio does not have a domestic asset protection trust statute, Ohio residents can use irrevocable trusts with spendthrift provisions under Ohio Revised Code Chapter 5805 or establish asset protection trusts in jurisdictions with favorable laws. An experienced Ohio trusts attorney can help determine which approach best fits your situation.',
  },
  {
    question: 'Who should consider an asset protection trust?',
    answer: 'Asset protection trusts are especially valuable for business owners, physicians, real estate investors, and other professionals who face heightened exposure to lawsuits and liability claims. They are also used in Medicaid planning to protect assets while qualifying for long-term care benefits. The trust must be established before any known claims arise — timing and proper structuring are essential to avoid fraudulent transfer challenges.',
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

            <LocationsWeServe title="Trusts" />

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
              <Link href="/trusts/medicaid-asset-protection-trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Asset Protection Trusts</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Shield your wealth from creditors, lawsuits, and future claims while retaining indirect access to trust assets.</p>
              </Link>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Asset Protection Trusts in Ohio</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An <strong>asset protection trust</strong> is an irrevocable trust designed to shield your wealth from future creditors, lawsuits, and legal judgments. Unlike a standard revocable living trust — which offers probate avoidance but no creditor protection — an asset protection trust places assets beyond the reach of most claimants by transferring legal ownership to the trust. Once properly funded, the assets held inside an asset protection trust are generally no longer considered part of your personal estate for purposes of creditor claims, making this one of the most effective legal strategies available for preserving wealth.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio does not currently have a domestic asset protection trust statute like some states (such as Ohio's neighbors Delaware and Nevada). However, Ohio residents can still establish <strong>asset protection trusts</strong> through several recognized legal mechanisms. Irrevocable trusts with spendthrift provisions under Ohio Revised Code Chapter 5805 can provide meaningful protection against beneficiary creditors. Additionally, Ohio residents may create asset protection trusts in jurisdictions that have favorable domestic asset protection trust (DAPT) laws, provided the trust is properly structured, uses a qualified trustee in that jurisdiction, and complies with applicable state and federal requirements. An experienced Ohio trusts attorney can evaluate your specific circumstances and recommend whether an in-state irrevocable trust with spendthrift protections or an out-of-state asset protection trust is the best fit for your goals.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>Asset protection trusts</strong> are particularly valuable for business owners, physicians, real estate investors, and other professionals who face elevated exposure to lawsuits and liability claims. They are also used in Medicaid planning to protect assets while qualifying for long-term care benefits. It is important to note that asset protection trusts must be established before any known claims or legal actions arise — transferring assets into a trust to avoid an existing or reasonably anticipated creditor can be challenged as a fraudulent transfer under Ohio's Uniform Voidable Transactions Act (Ohio Revised Code Chapter 1336). Proper timing and structuring are essential, which is why working with an attorney who understands both Ohio law and trust planning strategy is critical.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-500 text-sm italic mb-6 leading-relaxed border-l-4 border-orange-300 pl-4">
              This information is for general educational purposes only and does not constitute legal advice. Asset protection planning involves complex legal and tax considerations that vary based on individual circumstances. Contact Jwayyed Law LLC to discuss your specific situation.
            </p>

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
