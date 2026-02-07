import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Dog Bite Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus dog bite attorney helping victims recover compensation. Skilled representation for dog bite injuries in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['dog bite lawyer Columbus OH', 'dog bite attorney Ohio', 'animal attack lawyer', 'Franklin County dog bite attorney'],
  openGraph: {
    title: 'Dog Bite Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/dog-bites',
  },
  alternates: { canonical: '/personal-injury/dog-bites' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Dog Bites', href: '/personal-injury/dog-bites' },
];

const faqs = [
  {
    question: 'What is Ohio\'s dog bite law?',
    answer: 'Ohio dog bite law under Ohio Revised Code 955.28 follows a strict liability standard, meaning dog owners are generally liable for injuries caused by their dogs regardless of whether the owner knew the dog was dangerous or had a history of aggressive behavior. However, victims who provoke dogs or trespass may be partially or completely barred from recovery under comparative negligence.',
  },
  {
    question: 'What compensation can I recover from a dog bite?',
    answer: 'Dog bite compensation in Ohio may include economic damages (medical expenses, lost wages, property damage, future medical costs, loss of earning capacity), non-economic damages (pain and suffering, emotional distress, scarring, disfigurement, loss of enjoyment), and potentially punitive damages for egregious conduct. Dog bite injuries often involve scarring and permanent disfigurement requiring substantial compensation.',
  },
  {
    question: 'What should I do after a dog bite in Ohio?',
    answer: 'After a dog bite in Ohio, seek medical attention immediately, identify the dog and owner, report the bite to animal control, document the injury with photos, gather witness contact information, report the bite to insurance companies, and contact a dog bite attorney as soon as possible. Do not delay seeking medical attention as dog bites can cause serious infections.',
  },
  {
    question: 'What is the statute of limitations for dog bite claims?',
    answer: 'Under Ohio Revised Code 2305.10, the statute of limitations for dog bite personal injury claims in Ohio is generally 2 years from the date of injury. Missing the deadline bars recovery, so it is crucial to act quickly and consult an attorney immediately.',
  },
  {
    question: 'Do I need a dog bite attorney?',
    answer: 'While you can handle a dog bite claim yourself, an experienced attorney can significantly improve your chances of recovery and maximize compensation. Attorneys understand dog bite law, insurance tactics, negotiation strategies, and legal requirements. They handle documentation, communicate with insurance companies, negotiate settlements, and represent you in court if necessary.',
  },
];

export default function DogBitesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Dog Bite Lawyer in Columbus, OH"
        description="Experienced legal representation for dog bite victims seeking compensation. Fighting for the compensation you deserve."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Dog Bite Claims in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Dog bites in Columbus or throughout Ohio can cause serious injuries including lacerations, scarring, disfigurement, infections, and permanent injuries requiring extensive medical treatment. At Jwayyed Law LLC, we provide experienced representation for dog bite victims under Ohio Revised Code 955.28 (current as of 2026). Our attorney understands Ohio dog bite law and the compensation process necessary to help you recover.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Dog Bite Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Case Investigation:</strong> Thoroughly investigate the incident, identify the dog owner, and document injuries</li>
              <li><strong>Liability Analysis:</strong> Analyze liability under Ohio\'s strict liability dog bite law</li>
              <li><strong>Insurance Negotiation:</strong> Handle communication with insurance companies and negotiate fair settlements</li>
              <li><strong>Legal Strategy:</strong> Develop strategies to maximize compensation for scarring and disfigurement</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated dog bite representation throughout Ohio. We understand that dog bites can cause serious injuries, scarring, and disfigurement requiring substantial compensation. Our attorney works diligently to investigate cases, document injuries, negotiate with insurance companies, and maximize compensation for our clients.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

