import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Car Accident Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus car accident attorney helping you recover compensation. Skilled representation for car accident injuries and damages in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['car accident lawyer Columbus OH', 'car accident attorney Ohio', 'automobile accident lawyer', 'Franklin County car accident attorney'],
  openGraph: {
    title: 'Car Accident Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/car-accidents',
  },
  alternates: { canonical: '/personal-injury/car-accidents' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Car Accidents', href: '/personal-injury/car-accidents' },
];

const faqs = [
  {
    question: 'What should I do after a car accident in Ohio?',
    answer: 'After a car accident in Ohio, seek medical attention immediately if injured, call police to report the accident, document the scene with photos, exchange information with other drivers, gather witness contact information, report the accident to your insurance company, and contact a car accident attorney as soon as possible. Do not admit fault or make statements to insurance adjusters without your attorney present.',
  },
  {
    question: 'What compensation can I recover from a car accident in Ohio?',
    answer: 'Car accident compensation in Ohio may include economic damages (medical expenses, lost wages, property damage, future medical costs, loss of earning capacity), non-economic damages (pain and suffering, emotional distress, loss of enjoyment, loss of consortium), and in rare cases, punitive damages for egregious conduct. Compensation depends on injury severity, impact on your life, and available insurance coverage or assets.',
  },
  {
    question: 'What is the statute of limitations for car accident claims in Ohio?',
    answer: 'Under Ohio Revised Code 2305.10, the statute of limitations for car accident personal injury claims in Ohio is generally 2 years from the date of injury. Missing the deadline bars recovery, so it is crucial to act quickly and consult an attorney immediately. Property damage claims have a 4-year statute of limitations.',
  },
  {
    question: 'What is comparative negligence in Ohio car accidents?',
    answer: 'Ohio follows a modified comparative negligence rule under ORC 2315.33. If you are partially at fault for the accident, your compensation is reduced by your percentage of fault. However, if you are 51% or more at fault, you cannot recover compensation. This means even if you were partially negligent, you may still recover compensation if you are less than 51% at fault.',
  },
  {
    question: 'Do I need a car accident attorney for my claim?',
    answer: 'While you can handle a car accident claim yourself, an experienced attorney can significantly improve your chances of recovery and maximize compensation. Attorneys understand insurance tactics, negotiation strategies, and legal requirements. They handle documentation, communicate with insurance companies, negotiate settlements, and represent you in court if necessary. Most personal injury attorneys work on a contingency fee basis.',
  },
];

export default function CarAccidentsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Car Accident Lawyer in Columbus, OH"
        description="Experienced legal representation for car accident victims seeking compensation. Fighting for the compensation you deserve."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Car Accident Claims in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Car accidents in Columbus or throughout Ohio can result in serious injuries, property damage, and significant financial losses. At Jwayyed Law LLC, we provide experienced representation for car accident victims under Ohio Revised Code Chapter 2305. Our attorney understands Ohio personal injury laws, insurance requirements, and the compensation process necessary to help you recover.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio follows a modified comparative negligence rule, meaning your compensation may be reduced by your percentage of fault, but you can still recover if you are less than 51% at fault. Insurance companies often minimize claims, making experienced representation essential to protect your rights and maximize compensation.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Car accidents can result in serious injuries including broken bones, head injuries, spinal cord injuries, internal injuries, and soft tissue damage. These injuries often require extensive medical treatment, rehabilitation, and may result in permanent disabilities. Understanding your rights, the claims process, and available compensation is essential for maximizing recovery. Early intervention by a skilled car accident attorney can significantly impact the outcome, ensuring proper documentation, maximizing compensation, and protecting your rights throughout the process.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The statute of limitations for car accident personal injury claims in Ohio is 2 years from the date of injury, making it crucial to act quickly. Property damage claims have a 4-year statute of limitations. Missing these deadlines bars recovery entirely. An experienced attorney can ensure all deadlines are met, evidence is preserved, and your claim is properly documented and pursued. Insurance companies often attempt to settle quickly for low amounts before you understand the full extent of your injuries and damages.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Car Accident Claims Process</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the car accident claims process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Immediate Steps After an Accident</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Immediately after an accident, seek medical attention if injured, call police to report the accident, document the scene with photos of vehicles, damage, injuries, and road conditions, exchange information with other drivers, gather witness contact information, and report the accident to your insurance company. Do not admit fault or make statements to insurance adjusters without your attorney present. This early documentation is crucial for establishing liability and damages.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Medical Treatment and Documentation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Seeking prompt medical treatment is essential both for your health and your claim. Medical records document injuries, treatment, and prognosis. An attorney can help coordinate medical treatment, ensure all injuries are documented, and work with medical providers to establish causation between the accident and injuries. Complete medical documentation is necessary to prove damages including future medical costs and loss of earning capacity.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Insurance Negotiation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Most car accident claims are resolved through negotiation with insurance companies. Insurance adjusters often attempt to minimize claims, deny liability, or offer low settlements before you understand the full extent of injuries. An experienced attorney understands insurance tactics, can negotiate effectively, and knows when to push for fair compensation. Most cases settle during negotiation, but preparation for litigation strengthens negotiation position.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Litigation and Trial</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If settlement negotiations fail, litigation may be necessary. This involves filing a lawsuit, discovery (exchanging evidence), depositions, expert testimony including accident reconstruction experts, and potentially trial. An experienced attorney can navigate the litigation process, present compelling evidence, and advocate for maximum compensation at trial. Most cases settle before trial, but preparation for trial strengthens negotiation position.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Car Accident Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced car accident attorney provides comprehensive representation throughout every stage of your claim:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate Case Investigation:</strong> Thoroughly investigate your accident including gathering photos, witness statements, police reports, surveillance footage, and documenting all injuries and damages</li>
              <li><strong>Medical Coordination:</strong> Help coordinate medical treatment, ensure all injuries are properly documented, and work with medical providers to establish causation and prognosis</li>
              <li><strong>Insurance Negotiation:</strong> Handle all communication with insurance companies, negotiate fair settlements, and protect you from insurance tactics designed to minimize claims</li>
              <li><strong>Legal Strategy Development:</strong> Develop strategies to maximize compensation, establish liability, and protect your rights throughout the claims process</li>
              <li><strong>Comprehensive Documentation:</strong> Prepare all documentation, medical records, evidence, and expert reports necessary to support your claim and maximize compensation</li>
              <li><strong>Expert Consultation:</strong> Consult with medical experts, accident reconstruction experts, economic experts, or other specialists to establish causation, damages, and liability</li>
              <li><strong>Litigation Representation:</strong> File lawsuits when necessary, navigate the litigation process, conduct discovery, take depositions, and represent you in court if settlement negotiations fail</li>
              <li><strong>Maximize Recovery:</strong> Work to ensure you receive full compensation for all damages including medical expenses (past and future), lost wages, loss of earning capacity, pain and suffering, emotional distress, and property damage</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Compensation Available</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Car accident compensation in Ohio may include various types of damages:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Economic Damages</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Medical expenses (past and future including surgeries, rehabilitation, therapy, medications)</li>
                <li>Lost wages and loss of earning capacity</li>
                <li>Property damage (vehicle repair or replacement)</li>
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
                In cases involving egregious conduct such as drunk driving, reckless driving, or intentional harm, punitive damages may be available to punish the wrongdoer and deter similar conduct. Punitive damages are rare and require clear and convincing evidence of malicious or reckless behavior.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated car accident representation in Columbus, Franklin County, and throughout Ohio. We understand that car accidents can be life-changing and that insurance companies often minimize claims. Our attorney works diligently to investigate cases, document injuries, negotiate with insurance companies, and maximize compensation for our clients.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic case development, and aggressive advocacy. We understand the local court systems, insurance company tactics, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and maximize compensation. We work closely with clients to understand their goals, explain legal options, and make informed decisions about settlement offers versus litigation.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have been injured in a car accident in Columbus or anywhere in Ohio, contact Jwayyed Law LLC for a schedule consultation. We will review your case, explain your rights, discuss potential compensation, and develop a strategy tailored to your situation. Time is critical in car accident cases—evidence must be preserved, medical treatment must be documented, and the statute of limitations must be met. Do not delay in seeking experienced legal representation to protect your rights and maximize your recovery.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

