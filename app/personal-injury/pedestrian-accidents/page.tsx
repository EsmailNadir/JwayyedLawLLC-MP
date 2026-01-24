import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Pedestrian Accident Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus pedestrian accident attorney helping victims recover compensation. Skilled representation for pedestrian accident injuries in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['pedestrian accident lawyer Columbus OH', 'pedestrian accident attorney Ohio', 'pedestrian lawyer', 'Franklin County pedestrian accident attorney'],
  openGraph: {
    title: 'Pedestrian Accident Lawyer in Columbus, OH | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/pedestrian-accidents',
  },
  alternates: { canonical: '/personal-injury/pedestrian-accidents' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Pedestrian Accidents', href: '/personal-injury/pedestrian-accidents' },
];

const faqs = [
  {
    question: 'Who is at fault in pedestrian accidents in Ohio?',
    answer: 'Fault in pedestrian accidents in Ohio depends on the circumstances and is determined under Ohio\'s comparative negligence rule. Drivers have a duty to exercise reasonable care for pedestrians, but pedestrians also have a duty to exercise reasonable care. Fault may be shared, and your compensation is reduced by your percentage of fault. However, you can still recover if you are less than 51% at fault.',
  },
  {
    question: 'What compensation can I recover from a pedestrian accident?',
    answer: 'Pedestrian accident compensation in Ohio may include economic damages (medical expenses, lost wages, property damage, future medical costs, loss of earning capacity), non-economic damages (pain and suffering, emotional distress, loss of enjoyment, loss of consortium), and potentially punitive damages for egregious conduct. Pedestrian accidents often involve higher compensation due to severe injuries.',
  },
  {
    question: 'What should I do after a pedestrian accident in Ohio?',
    answer: 'After a pedestrian accident in Ohio, seek medical attention immediately if injured, call police to report the accident, document the scene with photos, gather witness contact information, report the accident to insurance companies, and contact a pedestrian accident attorney as soon as possible. Do not admit fault or make statements without your attorney present.',
  },
  {
    question: 'How long do pedestrian accident cases take?',
    answer: 'Pedestrian accident case duration varies significantly depending on case complexity, injury severity, insurance company cooperation, and whether the case goes to trial. Simple cases may resolve in months, while complex cases involving severe injuries may take years. An attorney can provide a realistic timeline based on your specific case circumstances.',
  },
  {
    question: 'Do I need a pedestrian accident attorney?',
    answer: 'While you can handle a pedestrian accident claim yourself, an experienced attorney can significantly improve your chances of recovery and maximize compensation. Attorneys understand insurance tactics, negotiation strategies, and legal requirements. They handle documentation, communicate with insurance companies, negotiate settlements, and represent you in court if necessary.',
  },
];

export default function PedestrianAccidentsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Pedestrian Accident Lawyer in Columbus, OH"
        description="Experienced legal representation for pedestrian accident victims seeking compensation. Fighting for the compensation you deserve."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Pedestrian Accident Claims in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Pedestrian accidents in Columbus or throughout Ohio often result in serious injuries, fatalities, and catastrophic injuries due to the vulnerability of pedestrians. At Jwayyed Law LLC, we provide experienced representation for pedestrian accident victims under Ohio Revised Code Chapter 2305. Our attorney understands the unique aspects of pedestrian accident cases and the compensation process necessary to help you recover.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Pedestrians lack the protection of a vehicle, making them extremely vulnerable to serious injuries including traumatic brain injury, spinal cord injury, severe fractures, and fatalities when struck by vehicles. Pedestrian accidents often result in higher medical costs, longer recovery periods, and greater pain and suffering than typical car accidents. Understanding your rights, the unique aspects of pedestrian accident cases, Ohio's comparative negligence rule, and the compensation process is essential for maximizing recovery. Early intervention by a skilled pedestrian accident attorney can significantly impact the outcome, ensuring proper documentation, investigation, and maximum compensation.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The statute of limitations for pedestrian accident personal injury claims in Ohio is 2 years from the date of injury, making it crucial to act quickly. Pedestrian accident cases often involve complex liability issues including driver negligence, pedestrian negligence, road conditions, and crosswalk violations. Insurance companies often attempt to minimize claims or argue that pedestrians are partially at fault, making experienced representation essential.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Pedestrian Accident Claims Process</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the pedestrian accident claims process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Immediate Investigation and Documentation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Immediately after a pedestrian accident, evidence must be preserved including photos of the scene, vehicles, your injuries, road conditions, crosswalk markings, traffic signals, witness contact information, police reports, and driver information. An attorney can coordinate investigation, gather evidence, interview witnesses, and ensure all documentation is properly preserved. This early documentation is crucial for establishing liability and damages.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Medical Treatment and Documentation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Seeking prompt medical treatment is essential both for your health and your claim. Pedestrian accidents often result in serious injuries requiring extensive medical treatment. Medical records document injuries, treatment, and prognosis. An attorney can help coordinate medical treatment, ensure all injuries are documented, and work with medical providers to establish causation and prognosis. Complete medical documentation is necessary to prove damages including future medical costs and loss of earning capacity.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Liability Determination</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Determining fault in pedestrian accidents requires analyzing driver negligence (failure to yield, distracted driving, speeding), pedestrian actions (crosswalk violations, jaywalking), road conditions, and traffic signal compliance. Under Ohio's modified comparative negligence rule (ORC 2315.33), your compensation is reduced by your percentage of fault, but you can still recover if you are less than 51% at fault. An attorney can analyze liability, gather evidence, and build a strong case.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Insurance Negotiation and Litigation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Most pedestrian accident claims are resolved through negotiation with insurance companies. Insurance adjusters often attempt to minimize claims, deny liability, or argue that pedestrians are partially at fault. An experienced attorney understands insurance tactics, can negotiate effectively, and knows when to push for fair compensation. If settlement negotiations fail, litigation may be necessary involving filing a lawsuit, discovery, depositions, expert testimony, and potentially trial.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Pedestrian Accident Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced pedestrian accident attorney provides comprehensive representation throughout every stage of your claim:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate Case Investigation:</strong> Thoroughly investigate the accident including gathering photos, witness statements, police reports, surveillance footage, and documenting all injuries and damages</li>
              <li><strong>Medical Coordination:</strong> Help coordinate medical treatment, ensure all injuries are properly documented, and work with medical providers to establish causation and prognosis</li>
              <li><strong>Liability Analysis:</strong> Analyze driver negligence, pedestrian actions, road conditions, and traffic signal compliance to determine fault and build a strong case</li>
              <li><strong>Insurance Negotiation:</strong> Handle all communication with insurance companies, negotiate fair settlements, and protect you from insurance tactics designed to minimize claims</li>
              <li><strong>Legal Strategy Development:</strong> Develop strategies to maximize compensation, establish liability, and protect your rights throughout the claims process</li>
              <li><strong>Comprehensive Documentation:</strong> Prepare all documentation, medical records, evidence, and expert reports necessary to support your claim and maximize compensation</li>
              <li><strong>Expert Consultation:</strong> Consult with medical experts, accident reconstruction experts, economic experts, or other specialists to establish causation, damages, and liability</li>
              <li><strong>Litigation Representation:</strong> File lawsuits when necessary, navigate the litigation process, conduct discovery, take depositions, and represent you in court if settlement negotiations fail</li>
              <li><strong>Maximize Recovery:</strong> Work to ensure you receive full compensation for all damages including medical expenses (past and future), lost wages, loss of earning capacity, pain and suffering, emotional distress, and other losses</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Compensation Available</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Pedestrian accident compensation in Ohio may include various types of damages, often higher than typical car accidents due to severe injuries:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Economic Damages</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Medical expenses (past and future including surgeries, rehabilitation, therapy, medications, long-term care)</li>
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
                In cases involving egregious conduct such as drunk driving, reckless driving, or intentional harm, punitive damages may be available to punish the wrongdoer and deter similar conduct. Punitive damages are rare and require clear and convincing evidence of malicious or reckless behavior.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated pedestrian accident representation in Columbus, Franklin County, and throughout Ohio. We understand that pedestrian accidents can be catastrophic and life-changing. Our attorney works diligently to investigate cases, document injuries, negotiate with insurance companies, and maximize compensation for our clients.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic case development, and aggressive advocacy. We understand the unique aspects of pedestrian accident cases, Ohio's comparative negligence rule, insurance company tactics, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and maximize compensation. We work closely with clients to understand their goals, explain legal options, and make informed decisions about settlement offers versus litigation.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have been injured in a pedestrian accident in Columbus or anywhere in Ohio, contact Jwayyed Law LLC for a schedule consultation. We will review your case, explain your rights, discuss potential compensation, analyze liability issues, and develop a strategy tailored to your situation. Time is critical in pedestrian accident cases—evidence must be preserved, medical treatment must be documented, and the statute of limitations must be met. Do not delay in seeking experienced legal representation to protect your rights and maximize your recovery.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

