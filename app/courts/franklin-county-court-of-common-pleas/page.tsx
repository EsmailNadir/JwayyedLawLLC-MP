import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Franklin County Court of Common Pleas Attorney | Columbus Lawyer | Jwayyed Law LLC',
  description: 'Experienced legal representation in Franklin County Court of Common Pleas. Skilled representation for civil disputes, probate matters, and domestic relations cases in Columbus, Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['Franklin County Common Pleas attorney', 'Columbus Common Pleas lawyer', 'civil disputes Franklin County', 'Franklin County probate attorney'],
  openGraph: {
    title: 'Franklin County Court of Common Pleas Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/franklin-county-court-of-common-pleas',
  },
  alternates: { canonical: '/courts/franklin-county-court-of-common-pleas' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Franklin County Court of Common Pleas', href: '/courts/franklin-county-court-of-common-pleas' },
];

const faqs = [
  {
    question: 'What types of cases does Franklin County Court of Common Pleas handle?',
    answer: 'Franklin County Court of Common Pleas handles felony criminal cases, major civil disputes involving amounts over $15,000, probate matters, and domestic relations cases. The court has multiple divisions including General Division, Probate Division, and Domestic Relations Division. Please note, while I currently do not handle criminal cases in Franklin County, I am available to handle civil, probate, and family law matters in this court.',
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
    answer: 'Common Pleas Court matters are complex and require experienced representation. Civil disputes, probate matters, and domestic relations cases involve complex legal issues and procedures. An experienced attorney can protect your rights, develop strategies, negotiate settlements, and represent you in court. Most attorneys provide schedule consultations.',
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
              Franklin County Court of Common Pleas in Columbus, Ohio, handles felony criminal cases, major civil disputes, probate matters, and domestic relations cases. However, please note that I do not currently handle criminal cases in Franklin County. At Jwayyed Law LLC, we provide experienced representation in civil, probate, and family law matters in this court under Ohio Revised Code.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Franklin County Court of Common Pleas is located at 345 S. High Street, Columbus, OH 43215. The court has multiple divisions including the General Division (felony criminal cases and major civil disputes), Probate Division (estate administration and will contests), and Domestic Relations Division (divorce, custody, and support matters). Understanding court procedures, filing requirements, and judicial preferences is essential for successful representation.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Court Services and Case Types</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">General Division</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                The General Division handles felony criminal cases (all degrees of felonies), major civil disputes involving amounts over $15,000, contract disputes, personal injury cases, business litigation, and other complex civil matters. While I do not currently handle felony criminal defense in Franklin County, I can represent clients in civil matters such as personal injury or business litigation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Probate Division</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                The Probate Division handles estate administration, will contests, guardianships, conservatorships, and trust matters. Probate proceedings require understanding of estate law, filing requirements, and court procedures. An experienced probate attorney can guide you through the process and protect your interests.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Domestic Relations Division</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                The Domestic Relations Division handles divorce, legal separation, custody, visitation, child support, spousal support, and domestic violence protection orders. These matters involve complex family law issues and require experienced representation to protect your rights and interests.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How We Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides experienced representation in all divisions of Franklin County Court of Common Pleas, excluding criminal cases:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Major Civil Litigation:</strong> Representation for complex civil disputes including contract disputes, personal injury cases, business litigation, and other civil matters</li>
              <li><strong>Probate Administration:</strong> Guidance through estate administration, will contests, and probate proceedings</li>
              <li><strong>Domestic Relations:</strong> Representation for divorce, custody, support, and domestic relations matters</li>
              <li><strong>Court Procedure:</strong> Understanding of Common Pleas Court procedures, filing requirements, and judicial preferences</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated representation in Franklin County Court of Common Pleas. We understand that Common Pleas Court matters are complex and require experienced representation. Our attorney works diligently to navigate court procedures, develop strategies, negotiate settlements, and represent clients in court when necessary.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have a matter in Franklin County Court of Common Pleas, contact Jwayyed Law LLC for a schedule consultation. We will review your case, explain court procedures, discuss your options, and develop a strategy tailored to your situation. Understanding court procedures and having experienced representation can significantly impact the outcome of your case.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
