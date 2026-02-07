import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Debt Collection Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus debt collection defense attorney protecting your rights. Skilled representation for debt collection defense in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['debt collection defense lawyer Columbus OH', 'debt collection attorney Ohio', 'debt defense lawyer', 'Franklin County debt collection attorney'],
  openGraph: {
    title: 'Debt Collection Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/civil/debt-collection-defense',
  },
  alternates: { canonical: '/civil/debt-collection-defense' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Debt Collection Defense', href: '/civil/debt-collection-defense' },
];

const faqs = [
  {
    question: 'What is debt collection defense in Ohio?',
    answer: 'Debt collection defense in Ohio involves defending against debt collection lawsuits and challenging debt collection practices. Debt collection defense may include challenging debt validity, statute of limitations defenses, improper service defenses, debt collection harassment claims under the Fair Debt Collection Practices Act (FDCPA), and other defenses. Debt collection defense requires understanding of debt collection law and consumer protection laws.',
  },
  {
    question: 'What is the statute of limitations for debt collection in Ohio?',
    answer: 'Statute of limitations for debt collection in Ohio varies by contract type: 6 years for written contracts under ORC 2305.06 and 4 years for oral contracts under ORC 2305.07 (as amended June 2021). Open accounts with written agreements fall under the 6-year limit. Missing the deadline bars recovery, so creditors must file collection lawsuits within the statute of limitations. An attorney can help determine if debt is time-barred.',
  },
  {
    question: 'What is the Fair Debt Collection Practices Act (FDCPA)?',
    answer: 'The Fair Debt Collection Practices Act (FDCPA) is a federal law prohibiting debt collectors from using abusive, deceptive, or unfair practices including harassment, false statements, threats, and improper contact. Violations of the FDCPA may result in damages and attorney fees. Consumers can sue debt collectors for FDCPA violations. An attorney can help identify FDCPA violations.',
  },
  {
    question: 'Do I need a debt collection defense attorney?',
    answer: 'Debt collection defense requires experienced representation to protect your rights. Debt collection defense attorneys understand debt collection law, can challenge debt validity, raise statute of limitations defenses, identify FDCPA violations, negotiate settlements, and represent you in court if necessary. Most attorneys work on hourly fee arrangements and offer consultations.',
  },
  {
    question: 'Can I negotiate debt collection settlements?',
    answer: 'Yes, many debt collection cases can be resolved through negotiation and settlement. Debt collectors may be willing to settle for less than the full amount owed, especially if there are defenses or the debt is time-barred. An attorney can help negotiate settlements and protect your rights throughout the process.',
  },
];

export default function DebtCollectionDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Debt Collection Defense Lawyer in Columbus, OH"
        description="Experienced legal representation for debt collection defense. Protecting your rights and fighting unfair debt collection practices."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Debt Collection Defense in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Debt collection defense in Columbus or throughout Ohio involves defending against debt collection lawsuits and challenging debt collection practices. At Jwayyed Law LLC, we provide experienced representation for debt collection defense under Ohio Revised Code and the Fair Debt Collection Practices Act (FDCPA). Our attorney understands debt collection law and consumer protection laws necessary to protect your rights.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Debt Collection Defense Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Debt Challenges:</strong> Challenge debt validity and raise defenses including statute of limitations</li>
              <li><strong>FDCPA Violations:</strong> Identify and pursue FDCPA violations for damages</li>
              <li><strong>Negotiation:</strong> Negotiate settlements and work toward resolution</li>
              <li><strong>Court Representation:</strong> Represent you in court to defend against collection lawsuits</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated debt collection defense representation throughout Ohio. We understand that debt collection can be stressful and that debt collectors often violate consumer protection laws. Our attorney works diligently to defend against collection lawsuits, challenge debt validity, identify FDCPA violations, and protect your rights.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

