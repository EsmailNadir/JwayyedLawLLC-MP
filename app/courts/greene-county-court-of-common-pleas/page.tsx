import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Greene County Court of Common Pleas Attorney | Experienced Lawyer | Jwayyed Law LLC',
  description: 'Experienced legal representation in Greene County Court of Common Pleas. Skilled representation for felony cases and major civil disputes in Greene County, Ohio. Free consultation: (614) 285-5482',
  keywords: ['Greene County Common Pleas attorney', 'Greene County felony lawyer', 'Greene County civil attorney'],
  openGraph: {
    title: 'Greene County Court of Common Pleas Attorney | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/courts/greene-county-court-of-common-pleas',
  },
  alternates: { canonical: '/courts/greene-county-court-of-common-pleas' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'Greene County Court of Common Pleas', href: '/courts/greene-county-court-of-common-pleas' },
];

const faqs = [
  {
    question: 'What types of cases does Greene County Court of Common Pleas handle?',
    answer: 'Greene County Court of Common Pleas handles felony criminal cases, major civil disputes involving amounts over $15,000, probate matters, and domestic relations cases. The court follows Ohio Revised Code for procedures and penalties. Understanding court procedures is essential for effective representation.',
  },
  {
    question: 'Where is Greene County Court of Common Pleas located?',
    answer: 'Greene County Court of Common Pleas is located in Xenia, Ohio. The court handles all felony cases and major civil disputes in Greene County. An attorney familiar with the court can help navigate procedures and achieve favorable outcomes.',
  },
  {
    question: 'Do I need an attorney for Common Pleas Court matters?',
    answer: 'Common Pleas Court matters are complex and require experienced representation. Felony cases, major civil disputes, and probate matters involve complex legal issues and procedures. An experienced attorney can protect your rights, develop strategies, and represent you in court.',
  },
  {
    question: 'How long do Common Pleas Court cases take?',
    answer: 'Common Pleas Court case duration varies significantly depending on case complexity, court schedule, and whether the case goes to trial. Simple cases may resolve in months, while complex cases may take years. An attorney can provide a realistic timeline based on your specific case circumstances.',
  },
  {
    question: 'What should I expect at a Common Pleas Court hearing?',
    answer: 'Common Pleas Court hearings involve formal proceedings with judges, prosecutors, and attorneys. Hearings may include arraignments, pretrial conferences, motions hearings, and trials. Understanding court procedures and expectations is essential. An attorney can help prepare you for hearings.',
  },
];

export default function GreeneCountyCommonPleasPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Greene County Court of Common Pleas Attorney"
        description="Experienced legal representation in Greene County Court of Common Pleas. Serving Greene County, Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Greene County Court of Common Pleas Representation</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Greene County Court of Common Pleas in Xenia, Ohio, handles felony criminal cases, major civil disputes, probate matters, and domestic relations cases. At Jwayyed Law LLC, we provide experienced representation in Greene County Court of Common Pleas under Ohio Revised Code. Our attorney understands Common Pleas Court procedures and can help achieve favorable outcomes.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The Greene County Court of Common Pleas is located in Xenia, Ohio, and serves as the primary court for serious criminal and civil matters throughout Greene County. Common Pleas Court proceedings are formal and require experienced representation to navigate complex legal procedures, understand judicial preferences, and achieve favorable outcomes. Understanding court procedures, filing requirements, and local court practices is essential for effective representation.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Court Services and Case Types</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Felony Criminal Defense</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Common Pleas Court handles all felony criminal cases including drug trafficking, theft, assault, burglary, robbery, and other serious offenses. Felony convictions can result in substantial prison time, large fines, and permanent felony records. Experienced felony defense representation is essential to protect your rights, develop defense strategies, and achieve favorable outcomes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Major Civil Litigation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Common Pleas Court handles major civil disputes involving amounts over $15,000, including contract disputes, personal injury cases, business litigation, real estate disputes, and other complex civil matters. Civil litigation requires understanding of civil procedure, evidence rules, and negotiation strategies to protect your interests.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Probate Administration</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Common Pleas Court handles probate matters including estate administration, will contests, guardianship proceedings, and trust administration. Probate proceedings require understanding of probate law, estate planning, and court procedures to ensure proper administration and protect beneficiaries' interests.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Domestic Relations Matters</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Common Pleas Court handles domestic relations cases including divorce, child custody, child support, spousal support, and property division. Domestic relations matters require understanding of family law, negotiation skills, and court procedures to protect your interests and achieve favorable outcomes for families.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How We Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides experienced representation in all types of cases handled by Greene County Court of Common Pleas:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Felony Criminal Defense:</strong> Experienced defense representation for all felony charges including drug crimes, theft, assault, burglary, and other serious offenses</li>
              <li><strong>Major Civil Litigation:</strong> Skilled representation for complex civil disputes including contract disputes, personal injury cases, and business litigation</li>
              <li><strong>Probate Administration:</strong> Experienced assistance with estate administration, will contests, and guardianship proceedings</li>
              <li><strong>Domestic Relations:</strong> Representation for divorce, child custody, child support, and property division matters</li>
              <li><strong>Court Procedure:</strong> Understanding of Common Pleas Court procedures, filing requirements, and judicial preferences</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated representation in Greene County Court of Common Pleas. We understand that Common Pleas Court matters can significantly affect your rights, freedom, and future. Our attorney works diligently to navigate court procedures, develop strategies, negotiate settlements, and represent clients in court when necessary.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have a matter in Greene County Court of Common Pleas, contact Jwayyed Law LLC for a free consultation. We will review your case, explain court procedures, discuss your options, and develop a strategy tailored to your situation. Understanding court procedures and having experienced representation can significantly impact the outcome of your case.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

