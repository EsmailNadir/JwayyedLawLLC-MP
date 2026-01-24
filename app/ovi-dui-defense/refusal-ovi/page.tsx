import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Refusal OVI Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus refusal OVI defense attorney protecting your rights. Skilled representation for OVI refusal charges in Ohio. Free consultation: (614) 285-5482',
  keywords: ['refusal OVI lawyer Columbus OH', 'OVI refusal defense attorney Ohio', 'breathalyzer refusal attorney', 'Franklin County refusal OVI lawyer'],
  openGraph: {
    title: 'Refusal OVI Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/refusal-ovi',
  },
  alternates: { canonical: '/ovi-dui-defense/refusal-ovi' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Refusal OVI', href: '/ovi-dui-defense/refusal-ovi' },
];

const faqs = [
  {
    question: 'What happens if I refuse a breathalyzer test in Ohio?',
    answer: 'Refusing a breathalyzer test in Ohio under the implied consent law (ORC 4511.191) results in automatic administrative license suspension for 1 year (first refusal) or longer for subsequent refusals. Refusal can also be used as evidence against you in court and may result in enhanced penalties if convicted. However, there are circumstances where refusal may be legally justified.',
  },
  {
    question: 'Can I be charged with OVI for refusing a breathalyzer?',
    answer: 'You cannot be charged with OVI solely for refusing a breathalyzer test. However, refusal results in automatic administrative license suspension separate from any criminal OVI charges. If you are also charged with OVI, refusal can be used as evidence against you, and prosecutors may argue it shows consciousness of guilt.',
  },
  {
    question: 'What are the penalties for refusing a breathalyzer in Ohio?',
    answer: 'Breathalyzer refusal penalties in Ohio include: Administrative license suspension of 1 year (first refusal) or 2 years (second or subsequent refusal), separate from any criminal OVI penalties. Refusal can be used as evidence in court and may result in enhanced penalties if convicted of OVI. You have only 30 days to appeal the administrative suspension.',
  },
  {
    question: 'Can I challenge a breathalyzer refusal suspension?',
    answer: 'Yes, you can challenge an administrative license suspension for breathalyzer refusal within 30 days of arrest. An attorney can file an appeal, request a stay of suspension, and challenge the suspension at a BMV hearing. Challenging the suspension requires demonstrating that the refusal was not valid or that proper procedures were not followed.',
  },
  {
    question: 'What should I do if I refused a breathalyzer and am charged with OVI?',
    answer: 'If you refused a breathalyzer and are charged with OVI, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced OVI defense attorney right away. You have only 30 days to appeal the administrative suspension. An attorney can protect your rights, challenge the suspension, and develop defense strategies.',
  },
];

export default function RefusalOVIPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Refusal OVI Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for OVI refusal charges. Protecting your rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Refusal OVI Charges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Refusing a breathalyzer test in Columbus or throughout Ohio results in automatic administrative license suspension and can be used as evidence against you in court. At Jwayyed Law LLC, we provide experienced defense representation for OVI refusal cases under Ohio Revised Code 4511.191. Our attorney understands the implications of breathalyzer refusal and defense strategies necessary to protect your rights.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Refusal OVI Penalties in Ohio</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Administrative license suspension: 1 year (first refusal) or 2 years (subsequent)</li>
                <li>Refusal can be used as evidence in court</li>
                <li>May result in enhanced penalties if convicted of OVI</li>
                <li>Separate from any criminal OVI penalties</li>
              </ul>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Refusal OVI Defense Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>License Suspension Appeals:</strong> Challenge administrative suspension within 30 days</li>
              <li><strong>Evidence Challenges:</strong> Challenge the validity of refusal or proper procedures</li>
              <li><strong>Defense Strategies:</strong> Develop defenses to challenge charges or minimize penalties</li>
              <li><strong>Negotiation:</strong> Work with prosecutors to negotiate plea agreements</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated refusal OVI defense representation in Columbus, Franklin County, and throughout Ohio. We understand that refusal cases require immediate attention and experienced defense. Our attorney works diligently to challenge suspensions, develop defense strategies, and achieve favorable outcomes while protecting your rights and driving privileges.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

