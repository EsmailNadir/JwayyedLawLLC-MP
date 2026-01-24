import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Vehicular Assault Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus vehicular assault defense attorney protecting your rights. Skilled representation for vehicular assault charges in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['vehicular assault lawyer Columbus OH', 'vehicular assault defense attorney Ohio', 'DUI assault attorney', 'Franklin County vehicular assault lawyer'],
  openGraph: {
    title: 'Vehicular Assault Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/vehicular-assault',
  },
  alternates: { canonical: '/ovi-dui-defense/vehicular-assault' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Vehicular Assault', href: '/ovi-dui-defense/vehicular-assault' },
];

const faqs = [
  {
    question: 'What is vehicular assault in Ohio?',
    answer: 'Vehicular assault under Ohio Revised Code 2903.08 involves causing serious physical harm to another person while operating a vehicle while under the influence of alcohol or drugs, or while recklessly operating a vehicle. Vehicular assault is a serious felony charge carrying substantial prison time, large fines, and permanent felony records. Vehicular assault involving OVI carries even more severe penalties.',
  },
  {
    question: 'What are the penalties for vehicular assault in Ohio?',
    answer: 'Vehicular assault penalties in Ohio depend on whether it involved OVI: Vehicular assault (reckless): Fourth-degree felony (6-18 months, $5,000 fine). Vehicular assault (OVI): Third-degree felony (1-5 years, $10,000 fine). Prior convictions or additional circumstances enhance penalties significantly. All vehicular assault convictions result in permanent felony records.',
  },
  {
    question: 'Can vehicular assault charges be reduced?',
    answer: 'Vehicular assault charges may potentially be reduced through legal challenges, procedural defenses, or negotiations with prosecutors. However, charges involving injury or death are difficult to reduce. An experienced vehicular assault attorney can evaluate your case, develop defense strategies, and explore all options to minimize consequences.',
  },
  {
    question: 'What is the difference between vehicular assault and vehicular homicide?',
    answer: 'Vehicular assault (ORC 2903.08) involves causing serious physical harm to another person, while vehicular homicide (ORC 2903.06) involves causing death. Vehicular homicide carries even more severe penalties including potential life imprisonment. Both charges can involve OVI or reckless operation and carry substantial prison time.',
  },
  {
    question: 'What should I do if I am charged with vehicular assault?',
    answer: 'If charged with vehicular assault, exercise your rights immediately. Do not discuss the case without your attorney present. Contact an experienced vehicular assault defense attorney right away. Vehicular assault charges carry severe consequences and require immediate experienced representation. An attorney can protect your rights and develop defense strategies.',
  },
];

export default function VehicularAssaultPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Vehicular Assault Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for vehicular assault charges. Protecting your rights and fighting for the best possible outcome."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Vehicular Assault Charges in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Vehicular assault charges in Columbus or throughout Ohio carry severe felony penalties including substantial prison time, large fines, and permanent felony records. At Jwayyed Law LLC, we provide experienced defense representation for vehicular assault charges under Ohio Revised Code 2903.08. Our attorney understands the severe consequences of vehicular assault convictions and defense strategies necessary to protect your rights and freedom.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Vehicular Assault Penalties in Ohio</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Vehicular Assault (Reckless) (ORC 2903.08)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">Fourth-degree felony: 6-18 months imprisonment, fines up to $5,000</p>
              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Vehicular Assault (OVI) (ORC 2903.08)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">Third-degree felony: 1-5 years imprisonment, fines up to $10,000</p>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Vehicular Assault Defense Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Case Investigation:</strong> Thoroughly investigate the accident and identify weaknesses</li>
              <li><strong>Evidence Challenges:</strong> Challenge evidence, testing procedures, and accident reconstruction</li>
              <li><strong>Defense Strategies:</strong> Develop defenses to challenge charges or minimize consequences</li>
              <li><strong>Negotiation:</strong> Work with prosecutors to negotiate plea agreements</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated vehicular assault defense representation in Columbus, Franklin County, and throughout Ohio. We understand that vehicular assault charges carry severe consequences including substantial prison time. Our attorney works diligently to investigate cases, develop defense strategies, and achieve favorable outcomes while protecting your rights and freedom.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

