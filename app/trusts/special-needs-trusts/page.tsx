import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Special Needs Trusts Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus attorney helping you set up special needs trusts to protect assets for loved ones with disabilities. Ensure quality care without affecting eligibility for government benefits in Ohio. Schedule a consultation: (614) 285-5482',
  keywords: ['special needs trusts Columbus OH', 'special needs trust attorney Ohio', 'disability trust lawyer', 'estate planning Ohio'],
  openGraph: {
    title: 'Special Needs Trusts Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/trusts/special-needs-trusts',
  },
  alternates: { canonical: '/trusts/special-needs-trusts' },
};

const breadcrumbItems = [
  { label: 'Trusts', href: '/trusts' },
  { label: 'Special Needs Trusts', href: '/trusts/special-needs-trusts' },
];

const faqs = [
  {
    question: 'What is a special needs trust?',
    answer: 'A special needs trust is a type of trust designed to help provide for the financial needs of a person with disabilities without affecting their eligibility for government benefits such as Medicaid or Supplemental Security Income (SSI). These trusts allow the beneficiary to receive funds for non-essential expenses while maintaining access to crucial government programs.',
  },
  {
    question: 'How does a special needs trust work in Ohio?',
    answer: 'In Ohio, a special needs trust is typically set up by a parent, grandparent, or legal guardian to ensure that a disabled individual has financial support without jeopardizing their eligibility for state and federal assistance programs. The funds in the trust can be used for various needs such as medical care, education, and entertainment.',
  },
  {
    question: 'What are the benefits of a special needs trust?',
    answer: 'The primary benefit of a special needs trust is that it allows a person with disabilities to receive funds without losing access to critical government benefits. It ensures that the beneficiary can have a better quality of life while still qualifying for Medicaid, SSI, and other programs.',
  },
  {
    question: 'Who can set up a special needs trust?',
    answer: 'A special needs trust can be established by a family member, guardian, or a third party, such as a grandparent. It is essential to consult with an attorney to ensure the trust is structured properly to avoid disqualifying the beneficiary from government benefits.',
  },
  {
    question: 'Do I need an attorney to set up a special needs trust?',
    answer: 'Yes, setting up a special needs trust requires specialized legal knowledge to ensure compliance with both Ohio state laws and federal regulations. An experienced attorney can help ensure that the trust is properly funded, the beneficiary’s eligibility for benefits is protected, and the trust meets all legal requirements.',
  },
];

export default function SpecialNeedsTrustsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Special Needs Trusts Lawyer in Columbus, OH"
        description="Helping you establish special needs trusts to protect your loved ones with disabilities while preserving their eligibility for essential benefits in Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Special Needs Trusts in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              A special needs trust ensures that a loved one with disabilities is taken care of financially without losing access to vital government benefits such as Medicaid or SSI. At Jwayyed Law LLC, we help families in Ohio set up special needs trusts to protect their loved ones while meeting all legal requirements.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How Special Needs Trusts Work</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Protect Eligibility:</strong> Ensures the beneficiary remains eligible for Medicaid, SSI, and other government benefits.</li>
              <li><strong>Supplemental Care:</strong> Funds from the trust can be used for additional needs not covered by government programs, such as education, entertainment, and medical care.</li>
              <li><strong>Specialized Care:</strong> Provides the disabled person with financial support, improving their quality of life without compromising essential services.</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Jwayyed Law LLC specializes in special needs trusts for families in Ohio. Our attorneys help you establish a trust that not only protects your loved one’s future but also ensures their continued eligibility for government benefits, allowing them to lead a more comfortable life.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
