import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Premises Liability Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus premises liability attorney helping victims recover compensation. Skilled representation for premises liability injuries in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['premises liability lawyer Columbus OH', 'premises liability attorney Ohio', 'negligent security lawyer', 'Franklin County premises liability attorney'],
  openGraph: {
    title: 'Premises Liability Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/premises-liability',
  },
  alternates: { canonical: '/personal-injury/premises-liability' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Premises Liability', href: '/personal-injury/premises-liability' },
];

const faqs = [
  {
    question: 'What is premises liability in Ohio?',
    answer: 'Premises liability in Ohio (current as of 2026) involves property owners\' and occupiers\' duty to maintain safe conditions for visitors and to warn of known dangers. Property owners and occupiers may be liable for injuries caused by dangerous conditions including slip and fall hazards, inadequate lighting, broken stairs, negligent security, swimming pool accidents, and other hazards.',
  },
  {
    question: 'Who can be liable for premises liability injuries?',
    answer: 'Multiple parties may be liable for premises liability injuries in Ohio including property owners, property occupiers, property managers, landlords, tenants, maintenance companies, and contractors. Liability depends on who had control over the property, who knew or should have known of the dangerous condition, and who failed to remedy it or warn of it. An attorney can help identify all potentially liable parties.',
  },
  {
    question: 'What compensation can I recover from premises liability injuries?',
    answer: 'Premises liability compensation in Ohio may include economic damages (medical expenses, lost wages, property damage, future medical costs, loss of earning capacity), non-economic damages (pain and suffering, emotional distress, loss of enjoyment, loss of consortium), and potentially punitive damages for egregious conduct. Compensation depends on injury severity and impact on your life.',
  },
  {
    question: 'What is negligent security in premises liability?',
    answer: 'Negligent security involves property owners\' failure to provide adequate security measures to protect visitors from foreseeable criminal acts. Property owners may be liable for injuries caused by criminal acts if they knew or should have known of the risk and failed to provide adequate security including lighting, security cameras, security guards, locks, and other security measures.',
  },
  {
    question: 'Do I need a premises liability attorney?',
    answer: 'While you can handle a premises liability claim yourself, an experienced attorney can significantly improve your chances of recovery and maximize compensation. Attorneys understand premises liability law, insurance tactics, negotiation strategies, and legal requirements. They handle documentation, communicate with insurance companies, negotiate settlements, and represent you in court if necessary.',
  },
];

export default function PremisesLiabilityPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Premises Liability Lawyer in Columbus, OH"
        description="Experienced legal representation for premises liability injuries. Fighting for the compensation you deserve."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Premises Liability Claims in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Premises liability injuries in Columbus or throughout Ohio can result from dangerous conditions on property including slip and fall hazards, inadequate lighting, broken stairs, negligent security, and other hazards. At Jwayyed Law LLC, we provide experienced representation for premises liability injuries under Ohio Revised Code 2305.10 (current as of 2026). Our attorney understands premises liability law and the compensation process necessary to help you recover.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Premises Liability Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Case Investigation:</strong> Thoroughly investigate the accident and identify all potentially liable parties</li>
              <li><strong>Premises Liability Analysis:</strong> Analyze premises liability issues and determine fault</li>
              <li><strong>Insurance Negotiation:</strong> Handle communication with insurance companies and negotiate fair settlements</li>
              <li><strong>Legal Strategy:</strong> Develop strategies to maximize compensation and protect your rights</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated premises liability representation in Columbus, Franklin County, and throughout Ohio. We understand that premises liability injuries can cause serious injuries and financial losses. Our attorney works diligently to investigate cases, identify liable parties, negotiate with insurance companies, and maximize compensation for our clients.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

