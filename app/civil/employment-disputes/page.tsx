import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Employment Disputes Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio employment disputes attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Protecting your rights. Skilled representation for employment disputes in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['employment disputes lawyer Columbus OH', 'employment attorney Ohio', 'wrongful termination lawyer', 'Franklin County employment attorney'],
  openGraph: {
    title: 'Employment Disputes Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/civil/employment-disputes',
  },
  alternates: { canonical: '/civil/employment-disputes' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Employment Disputes', href: '/civil/employment-disputes' },
];

const faqs = [
  {
    question: 'What types of employment disputes arise in Ohio?',
    answer: 'Employment disputes in Ohio may include wrongful termination, discrimination (race, gender, age, disability), harassment, retaliation, wage and hour violations, unpaid overtime, breach of employment contracts, non-compete agreements, severance agreements, whistleblower claims, and other employment law matters. Employment disputes require understanding of federal and state employment laws.',
  },
  {
    question: 'What is wrongful termination in Ohio?',
    answer: 'Wrongful termination in Ohio occurs when an employee is terminated in violation of employment contracts, public policy, or anti-discrimination laws. Ohio is an at-will employment state, meaning employers can generally terminate employees for any reason or no reason. However, termination may be wrongful if it violates contracts, public policy, or anti-discrimination laws. An attorney can help determine if termination was wrongful.',
  },
  {
    question: 'What is the statute of limitations for employment disputes?',
    answer: 'Statute of limitations for employment disputes in Ohio vary by claim type: Breach of employment contract: 6 years for written contracts, 4 years for oral contracts (ORC 2305.06, 2305.07 as amended June 2021). Discrimination: 180 days to file with EEOC, 6 years from date of discrimination. Wage and hour: Generally 2 years. Missing deadlines may bar recovery, so it is crucial to act quickly and consult an attorney immediately.',
  },
  {
    question: 'Do I need an employment disputes attorney?',
    answer: 'Employment disputes are complex and require experienced representation. Employment attorneys understand federal and state employment laws, can identify violations, file EEOC charges, negotiate settlements, and represent you in court if necessary. Most attorneys work on hourly or contingency fee arrangements and offer consultations.',
  },
  {
    question: 'Can I recover damages for employment disputes?',
    answer: 'Yes, damages for employment disputes in Ohio may include back pay, front pay, lost wages, emotional distress, punitive damages for egregious conduct, and attorney fees. Damages depend on claim type and circumstances. Discrimination claims may include compensatory and punitive damages. An attorney can help understand potential damages and maximize recovery.',
  },
];

export default function EmploymentDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Employment Disputes Lawyer"
        description="Experienced legal representation for employment disputes. Protecting your rights in the workplace."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Employment Disputes in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Employment disputes in Columbus, Cincinnati, Dayton, or throughout Ohio can involve wrongful termination, discrimination, harassment, wage and hour violations, and other complex employment law matters. At Jwayyed Law LLC, we provide experienced representation for employment disputes under Ohio Revised Code and federal employment laws. Our attorney understands employment law and can protect your rights in the workplace.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How an Employment Disputes Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Employment Law Analysis:</strong> Analyze employment issues and identify violations</li>
              <li><strong>EEOC Charges:</strong> File EEOC charges for discrimination and harassment</li>
              <li><strong>Negotiation:</strong> Negotiate settlements and severance agreements</li>
              <li><strong>Litigation:</strong> Represent you in court if necessary to protect your rights</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated employment disputes representation throughout Ohio. We understand that employment disputes can affect your career and rights. Our attorney works diligently to identify violations, protect your rights, negotiate settlements, and maximize recovery for our clients.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

