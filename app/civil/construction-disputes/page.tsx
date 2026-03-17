import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Construction Disputes Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio construction disputes attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Protecting your rights. Skilled representation for construction disputes in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['construction disputes lawyer Columbus OH', 'construction attorney Ohio', 'contractor disputes lawyer', 'Franklin County construction attorney'],
  openGraph: {
    title: 'Construction Disputes Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
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
    question: `What is a mechanics' lien in Ohio?`,
    answer: `A mechanics' lien under Ohio Revised Code Chapter 1311 is a security interest placed on real property by contractors, subcontractors, laborers, or material suppliers who have not been paid for work performed or materials furnished on that property. A mechanics' lien clouds the title to the property, making it difficult or impossible to sell or refinance until the lien is resolved. Ohio's mechanics' lien law applies to both residential and commercial projects and is one of the most powerful collection tools available to unpaid construction professionals.`,
  },
  {
    question: `How do you file a mechanics' lien in Ohio?`,
    answer: `Properly filing an Ohio mechanics' lien requires strict compliance with ORC Chapter 1311. A general contractor must serve a Notice of Furnishing on the property owner under ORC 1311.06 before filing. Subcontractors and material suppliers must serve a Notice of Commencement under ORC 1311.04 and a Notice of Furnishing to preserve lien rights. The lien claim itself must be filed with the county recorder's office where the property is located within 75 days after the last day work was performed or materials were furnished (ORC 1311.09). After filing, the lien claimant must file a lawsuit to enforce the lien within 6 years under ORC 1311.15.`,
  },
  {
    question: `What is the deadline to file a mechanics' lien in Ohio?`,
    answer: `Under ORC 1311.09, the deadline to file a mechanics' lien in Ohio is 75 days after the last day the lien claimant performed work or furnished materials on the project. This deadline is strictly enforced — missing it extinguishes your lien rights entirely, and courts do not have discretion to extend it. For this reason, contractors and suppliers who suspect they will not be paid should consult an attorney well before the 75-day deadline approaches. Once the lien is filed, the claimant must bring an action to enforce it within 6 years under ORC 1311.15, or the lien will expire.`,
  },
  {
    question: `What are my options if a contractor did defective work on my property?`,
    answer: `Property owners have several legal remedies when a contractor performs defective work. Under Ohio common law and the Ohio Construction Industry Licensing Board (OCILB) regulations, contractors must perform work in a workmanlike manner. If a contractor fails to meet this standard, you may pursue breach of contract claims and tort claims for property damage. Under ORC 4722.02, the Home Construction Service Suppliers Act requires contractors performing residential construction services to be registered and to provide written contracts for work over $25. Contractors who violate these requirements may face additional liability. The statute of limitations for construction defect claims depends on whether the claim sounds in contract or tort, generally ranging from 4 to 10 years from the date of completion.`,
  },
  {
    question: `How do payment disputes between contractors and owners get resolved?`,
    answer: `Payment disputes in Ohio construction projects can be resolved through negotiation, mediation, arbitration, or litigation, depending on the contract terms and the nature of the dispute. Contractors who are not paid may file mechanics' liens and bring breach of contract claims. Owners who dispute charges may raise defenses including breach of contract, failure to perform in a workmanlike manner, change order disputes, and delay claims. Many construction contracts contain arbitration clauses that require disputes to be resolved through arbitration rather than court. Review of the contract terms is the essential first step in any payment dispute.`,
  },
  {
    question: `What is a payment bond claim on a public construction project in Ohio?`,
    answer: `On Ohio public construction projects, general contractors are required to provide a payment bond under ORC 153.57. The payment bond protects subcontractors and material suppliers who are not paid — they can file a claim against the bond rather than a mechanics' lien (which cannot be filed against public property). To preserve bond rights, claimants must typically provide timely notice and file their claim within 90 days after the last date of work or furnishing of materials. Payment bond claims on public projects are an important alternative remedy when mechanics' liens are not available.`,
  },
  {
    question: `What is the statute of limitations for construction disputes in Ohio?`,
    answer: `Ohio's statutes of limitations for construction disputes vary by claim type. Breach of a written construction contract must be filed within 6 years under ORC 2305.06. Breach of an oral construction contract must be filed within 6 years under ORC 2305.07. Property damage claims arising from construction defects must generally be filed within 4 years of discovery under ORC 2305.09. Ohio also has a 10-year statute of repose for improvements to real property under ORC 2305.131, meaning that claims arising more than 10 years after substantial completion are generally barred regardless of when the defect was discovered. Missing these deadlines can permanently bar your claims.`,
  },
  {
    question: `Do I need an attorney for a construction dispute in Ohio?`,
    answer: `Construction disputes involve complex factual and legal issues including contract interpretation, lien law, licensing requirements, and technical questions about workmanship standards. An attorney experienced in Ohio construction law can evaluate your contracts, ensure lien rights are preserved before deadlines expire, identify the strongest claims and defenses, and guide you through negotiation, mediation, or litigation. Given the strict and unforgiving nature of Ohio's mechanics' lien deadlines under ORC 1311.09, consulting an attorney early — before you lose your lien rights — is strongly advised.`,
  },
];

export default function ConstructionDisputesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Construction Disputes Lawyer"
        description="Experienced legal representation for construction disputes. Protecting your rights and interests."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Construction Disputes in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Construction disputes in Columbus, Cincinnati, Dayton, or throughout Ohio can involve breach of contract, defective workmanship, payment disputes, delay claims, change order disagreements, and the complex mechanics&apos; lien process under ORC Chapter 1311. Whether you are a property owner, general contractor, subcontractor, or material supplier, unresolved construction disputes can stall projects, cloud real estate titles, and result in significant financial losses. As part of our <Link href="/civil" className="text-[#b87333] underline hover:text-[#a06828]">civil litigation practice</Link>, Jwayyed Law LLC provides experienced representation for construction disputes and helps clients understand and exercise their legal rights under Ohio law.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Ohio Mechanics&apos; Liens Under ORC Chapter 1311</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio&apos;s mechanics&apos; lien statute (ORC Chapter 1311) provides contractors, subcontractors, laborers, and material suppliers with a powerful remedy when they are not paid for work on a construction project. A properly filed mechanics&apos; lien attaches to the real property and clouds the title, preventing the owner from selling or refinancing until the lien is released or resolved. The process requires strict compliance with notice requirements and filing deadlines: the lien claim must be filed with the county recorder within 75 days of the last date of work under ORC 1311.09. After filing, the claimant must bring an action to enforce the lien in court within 6 years under ORC 1311.15. Failure to comply with any of these requirements can result in complete loss of lien rights.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Contractor Licensing and the Home Construction Service Suppliers Act</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio regulates construction contractors through the Ohio Construction Industry Licensing Board (OCILB) and through the Home Construction Service Suppliers Act (ORC 4722.02). Residential contractors performing services valued at $25 or more are required to provide written contracts that include specific disclosures. Contractors must also be properly registered. Failure to comply with these requirements can have significant legal consequences — including providing homeowners with additional grounds for recovery. When evaluating a construction dispute, an attorney will examine not only the contract terms but also whether the contractor complied with applicable licensing and registration requirements. If you are facing a construction dispute, <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">contact Jwayyed Law LLC</Link> to schedule a consultation.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Construction Disputes We Handle</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Construction disputes take many forms. Payment disputes arise when owners refuse to pay for completed work or when contractors dispute the owner&apos;s right to withhold payment. Defective workmanship claims arise when a contractor&apos;s work fails to meet applicable standards, causes property damage, or requires costly remediation. Delay claims can arise from either side when a project runs over schedule due to alleged fault of the other party. Change order disputes are common when the scope of work expands without written authorization and the parties disagree about who owes what. Subcontractor vs. owner disputes can be particularly complex when the subcontractor has no direct contract with the owner and must rely on lien rights or bond claims to recover payment.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Public Projects and Payment Bond Claims</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              On Ohio public construction projects, mechanics&apos; liens cannot be filed against publicly owned property. Instead, ORC 153.57 requires general contractors on public projects to provide a payment bond, which protects subcontractors and material suppliers. Claimants on public projects must carefully follow notice and claim deadline requirements to preserve bond rights. An attorney experienced in Ohio public construction law can help evaluate whether a bond claim is available and ensure all procedural requirements are met before deadlines expire.
            </p>

            <LocationsWeServe title="Civil" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Construction Disputes Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Contract Analysis:</strong> Analyze construction contracts, identify breaches, and assess the strength of claims and defenses</li>
              <li><strong>Mechanics&apos; Lien Filing:</strong> Prepare and file mechanics&apos; liens before the 75-day deadline under ORC 1311.09</li>
              <li><strong>Lien Enforcement:</strong> Bring actions to enforce mechanics&apos; liens within the 6-year deadline under ORC 1311.15</li>
              <li><strong>Payment Bond Claims:</strong> File payment bond claims on public projects under ORC 153.57</li>
              <li><strong>Defect Claims:</strong> Handle construction defect claims and pursue damages for defective workmanship</li>
              <li><strong>Alternative Dispute Resolution:</strong> Represent clients in mediation and arbitration to resolve disputes efficiently</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Related Civil Litigation Services</h3>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/civil/breach-of-contract" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Breach of Contract</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Enforce or defend contract obligations and recover damages for broken agreements</span>
              </Link>
              <Link href="/civil/real-estate-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Real Estate Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Title disputes, boundary issues, quiet title actions, and property litigation</span>
              </Link>
              <Link href="/civil/debt-collection-defense" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Debt Collection Defense</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Defend against unfair debt collection practices and protect your rights</span>
              </Link>
              <Link href="/civil/employment-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Employment Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Wrongful termination, discrimination, and workplace retaliation claims</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
