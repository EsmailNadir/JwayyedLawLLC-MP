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
    url: 'https://www.jjlawohio.com/courts/franklin-county-juvenile-court',
  },
  alternates: { canonical: '/courts/franklin-county-juvenile-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Franklin County Juvenile Court', href: '/courts/franklin-county-juvenile-court' },
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
              Franklin County Juvenile Court in Columbus, Ohio, handles juvenile delinquency, dependency, and custody matters. At Jwayyed Law LLC, we provide experienced representation in Franklin County Juvenile Court under Ohio Revised Code Chapter 2151. Our attorney understands Juvenile Court procedures and can help protect children's rights and families.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Franklin County Juvenile Court is located at 373 S. High Street, Columbus, OH 43215, and serves as the primary court for all juvenile matters throughout Franklin County. Juvenile Court proceedings focus on rehabilitation and the best interests of children, but still require experienced representation to navigate complex legal procedures, understand judicial preferences, and achieve favorable outcomes. Understanding Juvenile Court procedures, filing requirements, and local court practices is essential for effective representation.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Court Services and Case Types</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Juvenile Delinquency Defense</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Juvenile Court handles all criminal charges against minors including theft, assault, drug possession, vandalism, and other offenses. Juvenile delinquency cases can result in probation, counseling, community service, placement in juvenile detention, or commitment to Department of Youth Services. Serious offenses may result in transfer to adult court. Experienced juvenile defense representation is essential to protect children's rights and achieve favorable outcomes emphasizing rehabilitation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Dependency Case Representation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Juvenile Court handles dependency cases involving abuse, neglect, and abandonment of children. Dependency proceedings can result in removal of children from homes, placement in foster care, termination of parental rights, and other serious consequences. Experienced representation is essential to protect families and children's best interests throughout dependency proceedings.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Custody Matters</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Juvenile Court handles custody matters including custody disputes, visitation, child support, and related family law issues. Custody proceedings require understanding of family law, negotiation skills, and court procedures to protect children's best interests and achieve favorable outcomes for families.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Guardianship Proceedings</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Juvenile Court handles guardianship proceedings including appointment of guardians for minors, guardianship disputes, and related matters. Guardianship proceedings require understanding of guardianship law, court procedures, and best interests of children to ensure proper guardianship arrangements.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How We Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides experienced representation in all types of cases handled by Franklin County Juvenile Court:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Juvenile Delinquency Defense:</strong> Experienced defense representation for all juvenile criminal charges including theft, assault, drug possession, and other offenses</li>
              <li><strong>Dependency Case Representation:</strong> Skilled representation for dependency cases including abuse, neglect, and abandonment matters</li>
              <li><strong>Custody Matters:</strong> Representation for custody disputes, visitation, child support, and related family law issues</li>
              <li><strong>Guardianship Proceedings:</strong> Assistance with guardianship appointments, disputes, and related matters</li>
              <li><strong>Court Procedure:</strong> Understanding of Juvenile Court procedures, filing requirements, and judicial preferences</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated representation in Franklin County Juvenile Court. We understand that Juvenile Court matters can significantly affect children's futures, families, and rights. Our attorney works diligently to navigate court procedures, develop strategies emphasizing rehabilitation, negotiate favorable outcomes, and represent clients in court when necessary.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have a matter in Franklin County Juvenile Court, contact Jwayyed Law LLC for a free consultation. We will review your case, explain court procedures, discuss your options, and develop a strategy tailored to your situation. Understanding Juvenile Court procedures and having experienced representation can significantly impact the outcome of your case and protect children's rights and futures.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

