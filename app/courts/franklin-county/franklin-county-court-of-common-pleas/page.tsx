import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Franklin County Court of Common Pleas Attorney | Columbus Lawyer | Jwayyed Law LLC',
  description: 'Experienced legal representation in Franklin County Court of Common Pleas. Skilled representation for felony cases, major civil disputes, and probate matters in Columbus, Ohio. Free consultation: (614) 285-5482',
  keywords: ['Franklin County Common Pleas attorney', 'Columbus Common Pleas lawyer', 'felony defense Columbus', 'Franklin County probate attorney'],
  openGraph: {
    title: 'Franklin County Court of Common Pleas Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/franklin-county/franklin-county-court-of-common-pleas',
  },
  alternates: { canonical: '/courts/franklin-county/franklin-county-court-of-common-pleas' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Franklin County Court of Common Pleas', href: '/courts/franklin-county/franklin-county-court-of-common-pleas' },
];

const faqs = [
  {
    question: 'What types of cases does Franklin County Court of Common Pleas handle?',
    answer: 'Franklin County Court of Common Pleas handles felony criminal cases, major civil disputes involving amounts over $15,000, probate matters including estate administration and will contests, domestic relations matters, and appeals from Municipal Court. The court has multiple divisions including General Division, Probate Division, and Domestic Relations Division.',
  },
  {
    question: 'Where is Franklin County Court of Common Pleas located?',
    answer: 'Franklin County Court of Common Pleas is located at 345 S. High Street, Columbus, OH 43215. The General Division handles felony criminal cases and major civil disputes. The Probate Division handles estate administration and will contests. The Domestic Relations Division handles divorce, custody, and support matters.',
  },
  {
    question: 'What should I expect at a Common Pleas Court hearing?',
    answer: 'Common Pleas Court hearings involve formal proceedings with judges, prosecutors, and attorneys. Hearings may include arraignments, pretrial conferences, motions hearings, and trials. Understanding court procedures, dress codes, and expectations is essential. An attorney can help prepare you for hearings and represent you throughout the process.',
  },
  {
    question: 'Do I need an attorney for Common Pleas Court matters?',
    answer: 'Common Pleas Court matters are complex and require experienced representation. Felony cases, major civil disputes, and probate matters involve complex legal issues and procedures. An experienced attorney can protect your rights, develop strategies, negotiate settlements, and represent you in court. Most attorneys provide free consultations.',
  },
  {
    question: 'How long do Common Pleas Court cases take?',
    answer: 'Common Pleas Court case duration varies significantly depending on case complexity, court schedule, and whether the case goes to trial. Simple cases may resolve in months, while complex cases may take years. Most cases settle before trial, but preparation and negotiation can take substantial time. An attorney can provide a realistic timeline.',
  },
];

export default function FranklinCountyCommonPleasPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Court of Common Pleas Attorney"
        description="Experienced legal representation in Franklin County Court of Common Pleas. Serving Columbus and throughout Franklin County."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Franklin County Court of Common Pleas Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Court of Common Pleas in Columbus, Ohio, handles felony criminal cases, major civil disputes, probate matters, and domestic relations cases. At Jwayyed Law LLC, we provide experienced representation in Franklin County Court of Common Pleas under Ohio Revised Code. Our attorney understands Common Pleas Court procedures and can help achieve favorable outcomes.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Court Services</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Felony criminal defense</li>
                <li>Major civil litigation</li>
                <li>Probate administration</li>
                <li>Will contests</li>
                <li>Domestic relations matters</li>
              </ul>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated representation in Franklin County Court of Common Pleas. We understand that Common Pleas Court matters are complex and require experienced representation. Our attorney works diligently to understand court procedures, develop strategies, and achieve favorable outcomes for our clients.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

