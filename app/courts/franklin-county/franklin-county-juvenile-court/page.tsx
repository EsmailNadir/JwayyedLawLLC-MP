import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Franklin County Juvenile Court Attorney | Columbus Lawyer | Jwayyed Law LLC',
  description: 'Experienced legal representation in Franklin County Juvenile Court. Skilled representation for juvenile delinquency, dependency, and custody matters in Columbus, Ohio. Free consultation: (614) 285-5482',
  keywords: ['Franklin County Juvenile Court attorney', 'juvenile defense Columbus', 'juvenile delinquency lawyer', 'Franklin County custody attorney'],
  openGraph: {
    title: 'Franklin County Juvenile Court Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/franklin-county/franklin-county-juvenile-court',
  },
  alternates: { canonical: '/courts/franklin-county/franklin-county-juvenile-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Franklin County Juvenile Court', href: '/courts/franklin-county/franklin-county-juvenile-court' },
];

const faqs = [
  {
    question: 'What types of cases does Franklin County Juvenile Court handle?',
    answer: 'Franklin County Juvenile Court handles juvenile delinquency cases (criminal charges against minors), dependency cases (abuse and neglect), custody matters, guardianship proceedings, and other juvenile-related matters. Juvenile Court procedures differ from adult criminal courts and focus on rehabilitation and best interests of children.',
  },
  {
    question: 'Where is Franklin County Juvenile Court located?',
    answer: 'Franklin County Juvenile Court is located at 373 S. High Street, Columbus, OH 43215. The court handles all juvenile matters in Franklin County including delinquency, dependency, and custody cases. Understanding Juvenile Court procedures is essential for effective representation.',
  },
  {
    question: 'What should I expect at a Juvenile Court hearing?',
    answer: 'Juvenile Court hearings are less formal than adult criminal courts but still require proper preparation. Hearings focus on rehabilitation and best interests of children. Parents and guardians may be involved in proceedings. Understanding court procedures, expectations, and rights is essential. An attorney can help prepare you for hearings.',
  },
  {
    question: 'Do I need an attorney for Juvenile Court matters?',
    answer: 'Juvenile Court matters can significantly affect children\'s futures, custody, and families. Whether your child is facing delinquency charges or you are involved in dependency or custody matters, experienced representation is essential. Juvenile Court attorneys understand juvenile law, court procedures, and can protect children\'s rights.',
  },
  {
    question: 'How long do Juvenile Court cases take?',
    answer: 'Juvenile Court case duration varies depending on case type, complexity, and court schedule. Delinquency cases may resolve quickly through diversion programs or take months through court proceedings. Dependency and custody cases may take longer. An attorney can provide a realistic timeline based on your specific case circumstances.',
  },
];

export default function FranklinCountyJuvenileCourtPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Franklin County Juvenile Court Attorney"
        description="Experienced legal representation in Franklin County Juvenile Court. Protecting children's rights and families in Columbus."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Franklin County Juvenile Court Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Franklin County Juvenile Court in Columbus, Ohio, handles juvenile delinquency, dependency, and custody matters. At Jwayyed Law LLC, we provide experienced representation in Franklin County Juvenile Court under Ohio Revised Code. Our attorney understands Juvenile Court procedures and can help protect children's rights and families.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Court Services</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Juvenile delinquency defense</li>
                <li>Dependency case representation</li>
                <li>Custody matters</li>
                <li>Guardianship proceedings</li>
              </ul>
            </div>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated representation in Franklin County Juvenile Court. We understand that juvenile matters can significantly affect children's futures and families. Our attorney works diligently to protect children's rights, understand court procedures, and achieve favorable outcomes for families.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

