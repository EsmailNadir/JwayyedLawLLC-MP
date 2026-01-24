import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Construction Disputes Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus construction disputes attorney protecting your rights. Skilled representation for construction disputes in Ohio. Free consultation: (614) 285-5482',
  keywords: ['construction disputes lawyer Columbus OH', 'construction attorney Ohio', 'contractor disputes lawyer', 'Franklin County construction attorney'],
  openGraph: {
    title: 'Construction Disputes Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/civil/construction-disputes',
  },
  alternates: { canonical: '/civil/construction-disputes' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Construction Disputes', href: '/civil/construction-disputes' },
];

const faqs = [
  {
    question: 'What types of construction disputes arise in Ohio?',
    answer: 'Construction disputes in Ohio may include breach of construction contracts, defective workmanship, construction defects, payment disputes, delay disputes, change order disputes, mechanic\'s liens, contractor disputes, subcontractor disputes, material supplier disputes, and construction site injury claims. Construction disputes often involve complex contracts and require experienced representation.',
  },
  {
    question: 'What are mechanic\'s liens in Ohio?',
    answer: 'Mechanic\'s liens under Ohio Revised Code Chapter 1311 allow contractors, subcontractors, and material suppliers to secure payment for work performed or materials supplied on construction projects by placing a lien on the property. Mechanic\'s liens can cloud title and prevent property sale until resolved. Property owners and contractors may need to resolve mechanic\'s liens to clear title.',
  },
  {
    question: 'What is the statute of limitations for construction disputes?',
    answer: 'Statute of limitations for construction disputes in Ohio vary by claim type: Breach of construction contract: 15 years for written contracts, 6 years for oral contracts. Construction defects: Generally 10 years from completion. Property damage: 4 years. Missing deadlines may bar recovery, so it is crucial to act quickly and consult an attorney immediately.',
  },
  {
    question: 'Do I need a construction disputes attorney?',
    answer: 'Construction disputes are complex and require experienced representation. Construction attorneys understand construction law, can analyze construction contracts, resolve mechanic\'s liens, handle payment disputes, negotiate settlements, and represent you in court if necessary. Most attorneys work on hourly fee arrangements and provide free consultations.',
  },
  {
    question: 'Can construction disputes be resolved through mediation?',
    answer: 'Yes, many construction disputes can be resolved through mediation, arbitration, or negotiation without litigation. Alternative dispute resolution can save time and money while resolving disputes. However, some disputes including mechanic\'s liens or complex defects may require litigation. An attorney can help determine the best approach.',
  },
];

export default function ConstructionDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Construction Disputes Lawyer in Columbus, OH"
        description="Experienced legal representation for construction disputes. Protecting your rights and interests."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Construction Disputes in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Construction disputes in Columbus or throughout Ohio can involve breach of construction contracts, defective workmanship, payment disputes, mechanic\'s liens, and other complex construction law issues. At Jwayyed Law LLC, we provide experienced representation for construction disputes under Ohio Revised Code Chapter 1311. Our attorney understands construction law and the remedies necessary to protect your rights.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Construction Disputes Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Contract Analysis:</strong> Analyze construction contracts and identify breaches</li>
              <li><strong>Mechanic\'s Lien Resolution:</strong> Resolve mechanic\'s liens and clear title</li>
              <li><strong>Payment Disputes:</strong> Handle payment disputes and recover unpaid amounts</li>
              <li><strong>Defect Claims:</strong> Handle construction defect claims and recover damages</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated construction disputes representation in Columbus, Franklin County, and throughout Ohio. We understand that construction disputes can be complex and affect valuable construction projects. Our attorney works diligently to analyze contracts, resolve disputes, and protect your rights and interests.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

