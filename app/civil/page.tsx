import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Columbus Civil Attorney | Experienced Civil Litigation Lawyer | Jwayyed Law LLC',
  description: 'Experienced Columbus civil attorney handling contract disputes, real estate matters, landlord-tenant disputes, evictions, and more. Schedule consultation: (614) 285-5482',
  keywords: ['Columbus civil attorney', 'Ohio civil lawyer', 'civil litigation attorney', 'contract disputes lawyer', 'Franklin County civil attorney'],
  openGraph: {
    title: 'Columbus Civil Attorney | Jwayyed Law LLC',
    description: 'Experienced civil litigation representation in Columbus and throughout Ohio. Schedule consultation available.',
    url: 'https://www.jjlawohio.com/civil',
  },
  alternates: { canonical: '/civil' },
};

const breadcrumbItems = [{ label: 'Civil', href: '/civil' }];

const faqs = [
  {
    question: 'What is civil litigation in Ohio?',
    answer: 'Civil litigation in Ohio involves legal disputes between parties seeking monetary damages or other remedies, as opposed to criminal charges. Common civil cases include contract disputes, real estate disputes, landlord-tenant disputes, evictions, debt collection defense, employment disputes, and defamation. Civil cases are decided based on preponderance of evidence rather than beyond a reasonable doubt.',
  },
  {
    question: 'What is the statute of limitations for civil cases in Ohio?',
    answer: 'Statute of limitations for civil cases in Ohio under ORC Chapter 2305 vary by case type: Contract disputes: 6 years for written contracts, 4 years for oral contracts (ORC 2305.06, 2305.07 as amended June 2021). Property damage: 4 years. Personal injury: 2 years. Defamation: 1 year. Missing the deadline bars recovery, so it is crucial to act quickly and consult an attorney immediately.',
  },
  {
    question: 'Do I need a civil attorney for my dispute?',
    answer: 'While you can represent yourself in civil cases, an experienced civil attorney can significantly improve your chances of success and maximize recovery. Attorneys understand civil procedure, evidence rules, negotiation strategies, and court requirements. They handle documentation, communicate with opposing parties, negotiate settlements, and represent you in court if necessary. Most civil attorneys work on hourly or contingency fee arrangements.',
  },
  {
    question: 'What is the difference between civil and criminal cases?',
    answer: 'Civil cases involve disputes between parties seeking monetary damages or other remedies, while criminal cases involve the state prosecuting individuals for crimes. Civil cases are decided based on preponderance of evidence, while criminal cases require proof beyond a reasonable doubt. Civil cases result in monetary judgments, while criminal cases can result in fines, probation, or incarceration.',
  },
  {
    question: 'How long does a civil case take?',
    answer: 'Civil case duration varies significantly depending on case complexity, court schedule, and whether the case goes to trial. Simple cases may resolve in months, while complex cases may take years. Most cases settle before trial, but preparation and negotiation can take substantial time. An attorney can provide a realistic timeline based on your specific case circumstances.',
  },
];

export default function CivilPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Columbus Civil Attorney"
        description="Experienced legal representation for civil disputes including contracts, real estate, landlord-tenant matters, and more."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Experienced Civil Litigation Representation in Columbus, Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Civil litigation in Columbus or throughout Ohio involves legal disputes between parties seeking monetary damages or other remedies. At Jwayyed Law LLC, we provide experienced civil representation for various civil matters under Ohio Revised Code. Our attorney understands Ohio civil laws, court procedures, and strategies necessary to protect your rights and achieve favorable outcomes.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Civil cases differ from criminal cases in that they involve disputes between private parties rather than the state prosecuting individuals. Civil litigation can involve contract disputes, real estate matters, landlord-tenant disputes, evictions, debt collection, employment disputes, defamation, and other civil wrongs. Understanding the civil litigation process, available remedies, and strategies for resolution is essential for protecting your rights and interests.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The civil litigation process in Ohio involves filing complaints, discovery (exchanging evidence), pretrial motions, settlement negotiations, and potentially trial. Each stage requires strategic decision-making and experienced legal representation. Early intervention by a skilled civil attorney can significantly impact the outcome, potentially resulting in favorable settlements, dismissed cases, or successful trial verdicts. Most civil cases settle before trial, but preparation for trial strengthens negotiation position.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Civil cases are decided based on preponderance of evidence (more likely than not) rather than beyond a reasonable doubt required in criminal cases. This lower standard means civil cases can be won even when evidence is not overwhelming. However, civil litigation requires thorough preparation, strategic planning, and effective advocacy. An experienced civil attorney can navigate the complex civil procedure rules, develop winning strategies, and maximize your chances of success.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Civil Litigation Process</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the civil litigation process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Filing the Complaint</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                The process begins with filing a complaint stating your claims and the relief sought. The defendant must be properly served with the complaint and has a limited time to respond. An attorney can draft the complaint, ensure proper service, and respond to any counterclaims or defenses raised by the defendant.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Discovery Phase</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                During discovery, both parties exchange evidence, take depositions, request documents, and conduct investigations. This phase is crucial for building your case and understanding the other party's position. An experienced attorney can conduct effective discovery, protect against improper discovery requests, and use discovery to strengthen your case.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Pretrial Motions and Settlement Negotiations</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Pretrial motions can resolve issues, dismiss claims, or limit evidence. Most civil cases settle during this phase through negotiation or mediation. An attorney can file strategic motions, negotiate effectively, and evaluate settlement offers to determine if they are in your best interest.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Trial and Judgment</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If settlement negotiations fail, the case proceeds to trial where a judge or jury decides the outcome. An experienced attorney can present compelling evidence, cross-examine witnesses effectively, and argue for maximum recovery. After trial, judgments can be enforced through various collection methods.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Civil Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced civil attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Case Evaluation:</strong> Thoroughly evaluate your case, assess strengths and weaknesses, identify legal claims, and determine potential recovery or exposure</li>
              <li><strong>Legal Strategy Development:</strong> Develop comprehensive strategies to achieve your goals, whether that's recovering damages, defending against claims, or resolving disputes</li>
              <li><strong>Document Preparation:</strong> Draft complaints, answers, motions, discovery requests, and other legal documents necessary for your case</li>
              <li><strong>Discovery Management:</strong> Conduct effective discovery including depositions, document requests, and interrogatories to build your case and understand the opposition</li>
              <li><strong>Negotiation and Settlement:</strong> Negotiate with opposing parties to reach favorable settlements, participate in mediation or alternative dispute resolution, and evaluate settlement offers</li>
              <li><strong>Trial Representation:</strong> Provide effective trial advocacy with compelling arguments, strategic presentation of evidence, and protection of your rights throughout trial</li>
              <li><strong>Post-Trial Enforcement:</strong> Enforce judgments through various collection methods including wage garnishment, bank levies, or property liens when necessary</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Civil Practice Areas</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm handles all types of civil litigation matters, providing experienced representation across the full spectrum of civil disputes:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Link href="/civil/breach-of-contract" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Breach of Contract</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Representation for contract disputes and breaches under ORC Chapter 1301</p>
              </Link>
              <Link href="/civil/real-estate-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Real Estate Disputes</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Legal assistance for real estate and property disputes</p>
              </Link>
              <Link href="/civil/landlord-tenant-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Landlord-Tenant Disputes</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Legal assistance for landlord and tenant matters under ORC Chapter 5321</p>
              </Link>
              <Link href="/civil/evictions" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Evictions</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Eviction representation for landlords and tenants</p>
              </Link>
              <Link href="/civil/construction-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Construction Disputes</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Representation for construction and contractor disputes</p>
              </Link>
              <Link href="/civil/debt-collection-defense" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Debt Collection Defense</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Defense against debt collection and creditor claims</p>
              </Link>
              <Link href="/civil/employment-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Employment Disputes</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Representation for employment-related disputes</p>
              </Link>
              <Link href="/civil/defamation" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Defamation</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Claims for libel, slander, and defamation</p>
              </Link>
              <Link href="/civil/civil-protection-orders" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Civil Protection Orders</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Assistance with protection orders and restraining orders</p>
              </Link>
              <Link href="/civil/appeals" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Appeals</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Appellate representation for civil cases</p>
              </Link>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Ohio Civil Law</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Statute of Limitations</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Statute of limitations for civil cases in Ohio under ORC Chapter 2305 vary by case type: Written contracts: 6 years (ORC 2305.06 as amended June 2021). Oral contracts: 4 years (ORC 2305.07 as amended June 2021). Property damage: 4 years. Personal injury: 2 years. Defamation: 1 year. Missing the deadline bars recovery, so it is crucial to act quickly and consult an attorney immediately.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Burden of Proof</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Civil cases require proof by preponderance of evidence (more likely than not), which is a lower standard than criminal cases requiring proof beyond a reasonable doubt. This means civil cases can be won even when evidence is not overwhelming, but thorough preparation and effective presentation are still essential.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Available Remedies</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Civil cases can result in monetary damages (compensatory and punitive), injunctive relief (court orders requiring or prohibiting certain actions), specific performance (requiring contract performance), or declaratory judgments (determining rights). The appropriate remedy depends on the type of case and circumstances.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated civil representation in Columbus, Franklin County, and throughout Ohio. We understand that civil disputes require experienced representation. Our attorney works diligently to investigate cases, develop strategies, negotiate settlements, and represent clients in court when necessary.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic case development, and aggressive advocacy. We understand the local court systems, civil procedure rules, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and maximize your chances of success. We work closely with clients to understand their goals, explain legal options, and make informed decisions about settlement versus litigation.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are involved in a civil dispute in Columbus or anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation. We will review your case, explain your rights, discuss potential outcomes, and develop a strategy tailored to your situation. Time is critical in civil cases—statutes of limitations must be met, evidence must be preserved, and early intervention can often prevent disputes from escalating. Do not delay in seeking experienced legal representation to protect your rights and interests.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

