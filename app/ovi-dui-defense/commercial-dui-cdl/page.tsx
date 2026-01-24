import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Commercial DUI (CDL) Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus commercial DUI defense attorney protecting your CDL. Skilled representation for CDL holders facing OVI/DUI charges in Ohio. Free consultation: (614) 285-5482',
  keywords: ['commercial DUI lawyer Columbus OH', 'CDL OVI defense attorney Ohio', 'CDL attorney', 'Franklin County commercial DUI lawyer'],
  openGraph: {
    title: 'Commercial DUI (CDL) Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/commercial-dui-cdl',
  },
  alternates: { canonical: '/ovi-dui-defense/commercial-dui-cdl' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Commercial DUI (CDL)', href: '/ovi-dui-defense/commercial-dui-cdl' },
];

const faqs = [
  {
    question: 'What is the BAC limit for CDL holders in Ohio?',
    answer: 'CDL holders in Ohio under ORC 4511.19 are subject to a 0.04% BAC limit while operating commercial vehicles, which is half the standard 0.08% limit for non-commercial drivers. CDL holders with BAC of 0.04% or higher while operating commercial vehicles face OVI charges and severe CDL consequences. CDL holders can also face OVI charges for BAC below 0.04% if impaired.',
  },
  {
    question: 'What happens to my CDL if I am convicted of OVI?',
    answer: 'CDL suspension consequences for OVI convictions in Ohio are severe: First OVI conviction: CDL disqualified for 1 year (3 years if carrying hazardous materials). Second OVI conviction: CDL disqualified for life. CDL disqualification is separate from standard license suspension and can end your commercial driving career permanently.',
  },
  {
    question: 'Can I get my CDL back after an OVI conviction?',
    answer: 'After a first OVI conviction, your CDL is disqualified for 1 year (3 years if carrying hazardous materials). After the disqualification period, you may be able to apply for CDL reinstatement. However, a second OVI conviction results in lifetime CDL disqualification with no possibility of reinstatement. An experienced CDL OVI attorney can help understand your options.',
  },
  {
    question: 'Does OVI in a personal vehicle affect my CDL?',
    answer: 'Yes, OVI convictions in personal vehicles also result in CDL disqualification under Ohio Revised Code 4506.16. CDL holders face the same disqualification periods whether the OVI occurred in a commercial or personal vehicle. First OVI results in 1-year CDL disqualification, second OVI results in lifetime disqualification.',
  },
  {
    question: 'What should I do if I am a CDL holder charged with OVI?',
    answer: 'If you are a CDL holder charged with OVI, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced CDL OVI defense attorney right away. Your commercial driving career is at stake. You have only 30 days to appeal an administrative license suspension. An attorney can protect your CDL and develop defense strategies.',
  },
];

export default function CommercialDUICDLPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Commercial DUI (CDL) Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for CDL holders facing OVI/DUI charges. Protecting your commercial driving career and rights."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Commercial DUI (CDL) Charges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Commercial DUI charges for CDL holders in Columbus or throughout Ohio carry severe consequences that can end your commercial driving career permanently. At Jwayyed Law LLC, we provide experienced defense representation for CDL holders facing OVI charges under Ohio Revised Code 4511.19 and 4506.16. Our attorney understands the severe CDL consequences of OVI convictions and defense strategies necessary to protect your commercial driving career.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">CDL OVI Penalties in Ohio</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">First OVI Conviction</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>CDL disqualified for 1 year (3 years if carrying hazardous materials)</li>
                <li>Standard OVI penalties (jail, fines, license suspension)</li>
                <li>May end your commercial driving career</li>
              </ul>
              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Second OVI Conviction</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>CDL disqualified for life with no possibility of reinstatement</li>
                <li>Permanent end to commercial driving career</li>
              </ul>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a CDL OVI Defense Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>CDL Protection:</strong> Work to protect your commercial driving career</li>
              <li><strong>License Suspension Appeals:</strong> Challenge administrative suspension within 30 days</li>
              <li><strong>Evidence Challenges:</strong> Challenge evidence and testing procedures</li>
              <li><strong>Defense Strategies:</strong> Develop defenses to challenge charges or minimize consequences</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated CDL OVI defense representation in Columbus, Franklin County, and throughout Ohio. We understand that your commercial driving career is at stake. Our attorney works diligently to protect your CDL, develop defense strategies, and achieve favorable outcomes while defending your rights and livelihood.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

