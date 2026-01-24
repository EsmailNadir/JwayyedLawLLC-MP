import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Gun & Weapons Charges Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
  description: 'Experienced Columbus gun and weapons defense attorney protecting your rights. Skilled representation for weapons charges and firearm violations in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['gun charges lawyer Columbus OH', 'weapons defense attorney Ohio', 'firearm attorney', 'Franklin County weapons lawyer'],
  openGraph: {
    title: 'Gun & Weapons Charges Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/criminal-defense/gun-weapons-charges',
  },
  alternates: { canonical: '/criminal-defense/gun-weapons-charges' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Gun / Weapons Charges', href: '/criminal-defense/gun-weapons-charges' },
];

const faqs = [
  {
    question: 'What constitutes carrying a concealed weapon in Ohio?',
    answer: 'Carrying a concealed weapon (CCW) under Ohio Revised Code 2923.12 involves knowingly carrying or having a deadly weapon or handgun concealed on your person or readily accessible while in a motor vehicle. CCW charges range from misdemeanors to felonies depending on whether you have a valid concealed carry permit and prior convictions.',
  },
  {
    question: 'What are the penalties for weapons charges in Ohio?',
    answer: 'Weapons charge penalties in Ohio depend on the specific offense. Carrying a concealed weapon without a permit is a first-degree misdemeanor (up to 180 days jail, $1,000 fine) or fifth-degree felony for prior convictions (6-12 months, $2,500 fine). Having weapons while under disability is a third-degree felony (1-5 years, $10,000 fine). Prior convictions significantly enhance penalties.',
  },
  {
    question: 'Can weapons charges be reduced in Ohio?',
    answer: 'Weapons charges may be reduced through defenses including valid permit, lack of knowledge, insufficient evidence, or mistaken identity. Negotiations with prosecutors may result in reduced charges or diversion programs for first-time offenders. An experienced weapons defense attorney can evaluate your case and develop defense strategies.',
  },
  {
    question: 'What is having weapons while under disability in Ohio?',
    answer: 'Having weapons while under disability (ORC 2923.13) involves possessing firearms or dangerous ordnance while prohibited due to prior felony conviction, domestic violence conviction, drug dependency, or other disqualifying factors. This is a serious felony charge carrying substantial prison time and permanent criminal record.',
  },
  {
    question: 'What should I do if I am charged with weapons offenses in Ohio?',
    answer: 'If charged with weapons offenses in Ohio, exercise your rights immediately. Do not discuss the case with anyone except your attorney. Contact an experienced weapons defense attorney right away. Avoid contact with witnesses. Do not make statements without your attorney present. An attorney can protect your rights and develop defense strategies.',
  },
];

export default function GunWeaponsChargesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Gun & Weapons Charges Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for weapons charges and firearm violations. Protecting your rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Gun and Weapons Charges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Gun and weapons charges in Columbus or throughout Ohio carry serious criminal penalties that can result in substantial prison time and permanent felony records. At Jwayyed Law LLC, we provide experienced defense representation for all weapons charges under Ohio Revised Code Chapter 2923. Our attorney understands Ohio weapons laws and defense strategies necessary to protect your rights.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Weapons charges in Ohio range from misdemeanor carrying a concealed weapon without a permit to serious felony having weapons while under disability. Prior convictions, use of weapons in commission of crimes, or weapons in certain locations result in enhanced penalties including mandatory prison time.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Ohio Weapons Charge Penalties</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Carrying Concealed Weapon (ORC 2923.12)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">First-degree misdemeanor (first offense): Up to 180 days jail, fines up to $1,000</p>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">Fifth-degree felony (prior conviction): 6-12 months imprisonment, fines up to $2,500</p>
              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Having Weapons While Under Disability (ORC 2923.13)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">Third-degree felony: 1-5 years imprisonment, fines up to $10,000</p>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Weapons Defense Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Case Investigation:</strong> Review evidence and identify weaknesses in the prosecution's case</li>
              <li><strong>Defense Strategies:</strong> Develop defenses including valid permit, lack of knowledge, or insufficient evidence</li>
              <li><strong>Negotiation:</strong> Work with prosecutors to reduce charges or negotiate plea agreements</li>
              <li><strong>Trial Representation:</strong> Provide aggressive trial advocacy with effective defense strategies</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated weapons defense representation in Columbus, Franklin County, and throughout Ohio. We understand that weapons charges require immediate attention and experienced defense. Our attorney works diligently to investigate cases, develop strong defenses, and achieve favorable outcomes.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

