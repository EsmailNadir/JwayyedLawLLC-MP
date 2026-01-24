import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Slip and Fall Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus slip and fall attorney helping victims recover compensation. Skilled representation for slip and fall injuries in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['slip and fall lawyer Columbus OH', 'slip and fall attorney Ohio', 'premises liability lawyer', 'Franklin County slip and fall attorney'],
  openGraph: {
    title: 'Slip and Fall Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/slip-and-fall',
  },
  alternates: { canonical: '/personal-injury/slip-and-fall' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Slip and Fall', href: '/personal-injury/slip-and-fall' },
];

const faqs = [
  {
    question: 'What is premises liability in Ohio?',
    answer: 'Premises liability under Ohio Revised Code Chapter 2305 involves property owners\' and occupiers\' duty to maintain safe conditions for visitors and to warn of known dangers. Property owners and occupiers may be liable for injuries caused by dangerous conditions on their property including slip and fall hazards, inadequate lighting, broken stairs, and other hazards.',
  },
  {
    question: 'What compensation can I recover from a slip and fall accident?',
    answer: 'Slip and fall accident compensation in Ohio may include economic damages (medical expenses, lost wages, property damage, future medical costs, loss of earning capacity), non-economic damages (pain and suffering, emotional distress, loss of enjoyment, loss of consortium), and potentially punitive damages for egregious conduct. Compensation depends on injury severity, impact on your life, and available insurance coverage or assets.',
  },
  {
    question: 'How do I prove fault in a slip and fall case?',
    answer: 'Proving fault in slip and fall cases requires demonstrating that the property owner or occupier knew or should have known of the dangerous condition and failed to remedy it or warn of it. Evidence may include photos of the hazard, witness statements, maintenance records, incident reports, and expert testimony. An attorney can help gather evidence and build your case.',
  },
  {
    question: 'What is the statute of limitations for slip and fall claims?',
    answer: 'Under Ohio Revised Code 2305.10, the statute of limitations for slip and fall personal injury claims in Ohio is generally 2 years from the date of injury. Missing the deadline bars recovery, so it is crucial to act quickly and consult an attorney immediately.',
  },
  {
    question: 'Do I need a slip and fall attorney?',
    answer: 'While you can handle a slip and fall claim yourself, an experienced attorney can significantly improve your chances of recovery and maximize compensation. Attorneys understand premises liability law, insurance tactics, negotiation strategies, and legal requirements. They handle documentation, communicate with insurance companies, negotiate settlements, and represent you in court if necessary.',
  },
];

export default function SlipAndFallPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Slip and Fall Lawyer in Columbus, OH"
        description="Experienced legal representation for slip and fall accident victims seeking compensation. Fighting for the compensation you deserve."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Slip and Fall Claims in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Slip and fall accidents in Columbus or throughout Ohio can result in serious injuries including broken bones, head injuries, spinal cord injuries, and other injuries requiring extensive medical treatment. At Jwayyed Law LLC, we provide experienced representation for slip and fall accident victims under Ohio Revised Code Chapter 2305. Our attorney understands premises liability law and the compensation process necessary to help you recover.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Premises liability law in Ohio requires property owners and occupiers to maintain safe conditions for visitors and to warn of known dangers. Slip and fall accidents often occur due to wet floors, uneven surfaces, inadequate lighting, broken stairs, or other hazards. Understanding your rights, the legal requirements for proving fault, and the compensation process is essential for maximizing recovery. Early intervention by a skilled slip and fall attorney can significantly impact the outcome, ensuring proper documentation, investigation, and maximum compensation.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The statute of limitations for slip and fall personal injury claims in Ohio is 2 years from the date of injury, making it crucial to act quickly. Slip and fall cases require thorough investigation, documentation of hazards, and evidence that the property owner knew or should have known of the dangerous condition. Insurance companies often attempt to minimize claims or deny liability, making experienced representation essential.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Slip and Fall Claims Process</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the slip and fall claims process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Immediate Investigation and Documentation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Immediately after a slip and fall accident, evidence must be preserved including photos of the hazard, surrounding area, lighting conditions, your injuries, witness contact information, incident reports, and maintenance records if available. An attorney can coordinate investigation, gather evidence, interview witnesses, and ensure all documentation is properly preserved. This early documentation is crucial for establishing liability and damages.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Proving Premises Liability</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Proving fault in slip and fall cases requires demonstrating that the property owner or occupier knew or should have known of the dangerous condition and failed to remedy it or warn of it. Evidence may include photos of the hazard, witness statements, maintenance records, incident reports, expert testimony, and evidence of similar prior incidents. An attorney can help gather evidence and build your case.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Insurance Negotiation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Most slip and fall claims are resolved through negotiation with insurance companies. Insurance adjusters often attempt to minimize claims, deny liability, or argue that you were partially at fault. An experienced attorney understands insurance tactics, can negotiate effectively, and knows when to push for fair compensation. Most cases settle during negotiation, but preparation for litigation strengthens negotiation position.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Litigation and Trial</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If settlement negotiations fail, litigation may be necessary. This involves filing a lawsuit, discovery (exchanging evidence), depositions, expert testimony including safety experts, and potentially trial. An experienced attorney can navigate the litigation process, present compelling evidence, and advocate for maximum compensation at trial. Most cases settle before trial, but preparation for trial strengthens negotiation position.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Slip and Fall Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced slip and fall attorney provides comprehensive representation throughout every stage of your claim:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate Case Investigation:</strong> Thoroughly investigate the accident including gathering photos of the hazard, surrounding area, lighting conditions, your injuries, witness statements, incident reports, and maintenance records</li>
              <li><strong>Premises Liability Analysis:</strong> Analyze premises liability issues, determine fault, identify all potentially liable parties, and establish that the property owner knew or should have known of the dangerous condition</li>
              <li><strong>Medical Coordination:</strong> Help coordinate medical treatment, ensure all injuries are properly documented, and work with medical providers to establish causation and prognosis</li>
              <li><strong>Insurance Negotiation:</strong> Handle all communication with insurance companies, negotiate fair settlements, and protect you from insurance tactics designed to minimize claims</li>
              <li><strong>Legal Strategy Development:</strong> Develop strategies to maximize compensation, establish liability, and protect your rights throughout the claims process</li>
              <li><strong>Expert Consultation:</strong> Consult with safety experts, medical experts, economic experts, or other specialists to establish causation, damages, and liability</li>
              <li><strong>Litigation Representation:</strong> File lawsuits when necessary, navigate the litigation process, conduct discovery, take depositions, and represent you in court if settlement negotiations fail</li>
              <li><strong>Maximize Recovery:</strong> Work to ensure you receive full compensation for all damages including medical expenses (past and future), lost wages, loss of earning capacity, pain and suffering, emotional distress, and other losses</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Compensation Available</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Slip and fall accident compensation in Ohio may include various types of damages:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Economic Damages</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Medical expenses (past and future including surgeries, rehabilitation, therapy, medications)</li>
                <li>Lost wages and loss of earning capacity</li>
                <li>Property damage (damaged clothing or personal items)</li>
                <li>Rehabilitation and therapy costs</li>
                <li>Home modifications for disabilities</li>
                <li>Other financial losses directly related to the accident</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Non-Economic Damages</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Pain and suffering</li>
                <li>Emotional distress</li>
                <li>Loss of enjoyment of life</li>
                <li>Loss of consortium (spousal relationship)</li>
                <li>Disfigurement and scarring</li>
                <li>Mental anguish</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Punitive Damages</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                In cases involving egregious conduct such as intentional failure to remedy known hazards or gross negligence, punitive damages may be available to punish the wrongdoer and deter similar conduct. Punitive damages are rare and require clear and convincing evidence of malicious or reckless behavior.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated slip and fall accident representation in Columbus, Franklin County, and throughout Ohio. We understand that slip and fall accidents can cause serious injuries and financial losses. Our attorney works diligently to investigate cases, document hazards, negotiate with insurance companies, and maximize compensation for our clients.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, premises liability expertise, strategic case development, and aggressive advocacy. We understand the complexities of slip and fall cases, insurance company tactics, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and maximize compensation. We work closely with clients to understand their goals, explain legal options, and make informed decisions about settlement offers versus litigation.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have been injured in a slip and fall accident in Columbus or anywhere in Ohio, contact Jwayyed Law LLC for a schedule consultation. We will review your case, explain your rights, discuss potential compensation, analyze premises liability issues, and develop a strategy tailored to your situation. Time is critical in slip and fall cases—evidence must be preserved, hazards must be documented, and the statute of limitations must be met. Do not delay in seeking experienced legal representation to protect your rights and maximize your recovery.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

