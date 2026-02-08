import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Appeals Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio appeals attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Helping you appeal court decisions. Skilled representation for appeals in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['appeals lawyer Columbus OH', 'appeals attorney Ohio', 'appellate lawyer', 'Franklin County appeals attorney'],
  openGraph: {
    title: 'Appeals Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/civil/appeals',
  },
  alternates: { canonical: '/civil/appeals' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Appeals', href: '/civil/appeals' },
];

const faqs = [
  {
    question: 'What is an appeal in Ohio?',
    answer: 'An appeal under Ohio Revised Code Chapter 2505 involves challenging a court decision by requesting a higher court to review the lower court\'s decision for legal errors. Appeals focus on legal issues rather than facts, and appellate courts review whether the lower court made legal errors that affected the outcome. Appeals must be filed within strict deadlines and require experienced appellate representation.',
  },
  {
    question: 'What is the deadline for filing an appeal in Ohio?',
    answer: 'Under Ohio Revised Code 2505.07, the deadline for filing an appeal in Ohio is generally 30 days from the entry of the judgment or order being appealed. Missing the deadline bars appeal, so it is crucial to act quickly and consult an appellate attorney immediately after an adverse court decision. Extensions are rarely granted.',
  },
  {
    question: 'What can be appealed in Ohio?',
    answer: 'Most final judgments and orders can be appealed in Ohio, but some decisions may not be appealable. Final judgments resolving all issues in a case are generally appealable. Interlocutory orders (orders made before final judgment) may not be immediately appealable unless they meet certain exceptions. An appellate attorney can help determine if your case is appealable.',
  },
  {
    question: 'What is the appeals process in Ohio?',
    answer: 'The appeals process in Ohio involves filing a notice of appeal within 30 days, preparing the record of proceedings from the lower court, filing briefs (written arguments) with the appellate court, oral argument before the appellate court, and receiving the appellate court\'s decision. The appeals process can take months to years depending on court schedules and case complexity.',
  },
  {
    question: 'Do I need an appeals attorney?',
    answer: 'Appeals are complex and require experienced appellate representation. Appellate attorneys understand appellate procedure, can identify appealable issues, draft appellate briefs, present oral arguments, and maximize chances of success on appeal. Appellate practice differs significantly from trial practice and requires specialized skills. Most attorneys work on hourly fee arrangements.',
  },
];

export default function AppealsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Appeals Lawyer"
        description="Experienced legal representation for appeals. Helping you challenge court decisions and protect your rights."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Appeals in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Appeals in Columbus, Cincinnati, Dayton, or throughout Ohio involve challenging court decisions by requesting higher courts to review lower court decisions for legal errors. At Jwayyed Law LLC, we provide experienced representation for appeals under Ohio Revised Code Chapter 2505. Our attorney understands appellate procedure and can help challenge court decisions and protect your rights.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How an Appeals Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Appeal Evaluation:</strong> Evaluate whether your case is appealable and identify appealable issues</li>
              <li><strong>Brief Preparation:</strong> Draft appellate briefs presenting legal arguments</li>
              <li><strong>Oral Arguments:</strong> Present oral arguments before appellate courts</li>
              <li><strong>Appellate Procedure:</strong> Handle complex appellate procedure and deadlines</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated appeals representation throughout Ohio. We understand that appeals require specialized skills and experience. Our attorney works diligently to identify appealable issues, draft appellate briefs, present oral arguments, and maximize chances of success on appeal while protecting your rights.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

