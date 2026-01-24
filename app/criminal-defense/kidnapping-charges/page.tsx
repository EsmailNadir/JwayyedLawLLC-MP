import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Kidnapping Charges Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
  description: 'Experienced Columbus kidnapping defense attorney protecting your rights. Skilled representation for kidnapping and abduction charges in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['kidnapping lawyer Columbus OH', 'kidnapping defense attorney Ohio', 'abduction attorney', 'Franklin County kidnapping lawyer'],
  openGraph: {
    title: 'Kidnapping Charges Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/criminal-defense/kidnapping-charges',
  },
  alternates: { canonical: '/criminal-defense/kidnapping-charges' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Kidnapping Charges', href: '/criminal-defense/kidnapping-charges' },
];

const faqs = [
  {
    question: 'What constitutes kidnapping in Ohio?',
    answer: 'Kidnapping under Ohio Revised Code 2905.01 involves restraining another person\'s liberty by force, threat, or deception with intent to hold for ransom, use as shield or hostage, engage in sexual activity, commit a felony, or terrorize the victim or another. Aggravated kidnapping involves additional circumstances and carries more severe penalties.',
  },
  {
    question: 'What are the penalties for kidnapping in Ohio?',
    answer: 'Kidnapping in Ohio is a first-degree felony punishable by 3-11 years to life imprisonment and fines up to $20,000. Aggravated kidnapping is an unclassified felony punishable by life imprisonment or death penalty in some cases. Prior convictions or aggravating circumstances enhance penalties significantly.',
  },
  {
    question: 'Can kidnapping charges be reduced in Ohio?',
    answer: 'Kidnapping charges may be reduced through defenses including lack of intent, consent, insufficient evidence, or mistaken identity. Negotiations with prosecutors may result in reduced charges in some cases. An experienced kidnapping defense attorney can evaluate your case and develop defense strategies.',
  },
  {
    question: 'What defenses are available to kidnapping charges?',
    answer: 'Common kidnapping defenses include lack of intent to restrain, consent, insufficient evidence, mistaken identity, or false allegations. An attorney can challenge evidence, develop defense strategies, and defend your case at trial when necessary.',
  },
  {
    question: 'What should I do if I am charged with kidnapping in Ohio?',
    answer: 'If charged with kidnapping in Ohio, exercise your rights immediately. Do not discuss the case with anyone except your attorney. Contact an experienced kidnapping defense attorney right away. Avoid contact with alleged victims or witnesses. Do not make statements without your attorney present.',
  },
];

export default function KidnappingChargesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Kidnapping Charges Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for kidnapping and abduction charges. Protecting your rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Kidnapping Charges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Kidnapping charges in Columbus or throughout Ohio carry severe felony penalties including potential life imprisonment. At Jwayyed Law LLC, we provide experienced defense representation for kidnapping charges under Ohio Revised Code 2905.01. Our attorney understands Ohio kidnapping laws and defense strategies necessary to protect your rights.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Kidnapping in Ohio involves restraining another person's liberty by force, threat, or deception with intent to hold for ransom, use as shield, engage in sexual activity, commit a felony, or terrorize. Aggravated kidnapping involves additional circumstances and carries even more severe penalties including potential life imprisonment.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Ohio Kidnapping Penalties</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Kidnapping (ORC 2905.01)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">First-degree felony: 3-11 years to life imprisonment, fines up to $20,000</p>
              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Aggravated Kidnapping (ORC 2905.01)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">Unclassified felony: Life imprisonment or death penalty in some cases</p>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Kidnapping Defense Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Case Investigation:</strong> Review evidence and identify weaknesses in the prosecution's case</li>
              <li><strong>Defense Strategies:</strong> Develop defenses including lack of intent, consent, or insufficient evidence</li>
              <li><strong>Negotiation:</strong> Work with prosecutors to reduce charges or negotiate plea agreements</li>
              <li><strong>Trial Representation:</strong> Provide aggressive trial advocacy with effective defense strategies</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated kidnapping defense representation in Columbus, Franklin County, and throughout Ohio. We understand that kidnapping charges require immediate attention and experienced defense. Our attorney works diligently to investigate cases, develop strong defenses, and achieve favorable outcomes.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

