import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Driving Under OVI Suspension Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
  description: 'Experienced Columbus driving under OVI suspension defense attorney protecting your rights. Skilled representation for driving under suspension charges in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['driving under suspension lawyer Columbus OH', 'driving under OVI suspension attorney Ohio', 'suspended license attorney', 'Franklin County driving under suspension lawyer'],
  openGraph: {
    title: 'Driving Under OVI Suspension Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/driving-under-ovi-suspension',
  },
  alternates: { canonical: '/ovi-dui-defense/driving-under-ovi-suspension' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Driving Under OVI Suspension', href: '/ovi-dui-defense/driving-under-ovi-suspension' },
];

const faqs = [
  {
    question: 'What is driving under OVI suspension in Ohio?',
    answer: 'Driving under OVI suspension under Ohio Revised Code 4510.14 involves operating a vehicle while your license is suspended for an OVI conviction or administrative suspension. Driving under OVI suspension is a first-degree misdemeanor punishable by up to 180 days in jail and fines up to $1,000. Prior convictions for driving under suspension enhance penalties significantly.',
  },
  {
    question: 'What are the penalties for driving under OVI suspension?',
    answer: 'Driving under OVI suspension penalties in Ohio: First offense: First-degree misdemeanor (up to 180 days jail, $1,000 fine). Subsequent offenses: Enhanced penalties including potential felony charges. Additional license suspension extensions. Prior convictions significantly enhance penalties and may result in felony charges.',
  },
  {
    question: 'Can I get limited driving privileges while under OVI suspension?',
    answer: 'Yes, limited driving privileges may be available while under OVI suspension for work, school, treatment, and necessary activities. Limited privileges typically require ignition interlock devices. An attorney can help apply for limited privileges and guide you through the process to legally drive while under suspension.',
  },
  {
    question: 'What should I do if I am charged with driving under OVI suspension?',
    answer: 'If charged with driving under OVI suspension, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced driving under suspension defense attorney right away. Prior convictions can result in felony charges, making experienced representation essential.',
  },
  {
    question: 'Can driving under OVI suspension charges be reduced?',
    answer: 'Driving under OVI suspension charges may potentially be reduced through legal challenges, procedural defenses, or negotiations with prosecutors. An experienced attorney can evaluate your case, develop defense strategies, and explore all options to minimize consequences.',
  },
];

export default function DrivingUnderOVISuspensionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Driving Under OVI Suspension Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for driving under OVI suspension charges. Protecting your rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Driving Under OVI Suspension Charges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Driving under OVI suspension charges in Columbus or throughout Ohio carry criminal penalties including jail time, fines, and additional license suspension extensions. At Jwayyed Law LLC, we provide experienced defense representation for driving under OVI suspension charges under Ohio Revised Code 4510.14. Our attorney understands the consequences of driving under suspension convictions and defense strategies necessary to protect your rights.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Driving Under OVI Suspension Penalties in Ohio</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>First offense: First-degree misdemeanor (up to 180 days jail, $1,000 fine)</li>
                <li>Subsequent offenses: Enhanced penalties including potential felony charges</li>
                <li>Additional license suspension extensions</li>
              </ul>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Driving Under Suspension Defense Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Defense Strategies:</strong> Develop defenses to challenge charges or minimize penalties</li>
              <li><strong>Limited Privileges:</strong> Help obtain limited driving privileges if available</li>
              <li><strong>Negotiation:</strong> Work with prosecutors to negotiate plea agreements</li>
              <li><strong>Case Evaluation:</strong> Evaluate your case and explore all options</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated driving under OVI suspension defense representation in Columbus, Franklin County, and throughout Ohio. We understand that driving under suspension charges can result in additional penalties and license suspension extensions. Our attorney works diligently to develop defense strategies and achieve favorable outcomes while protecting your rights and driving privileges.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

