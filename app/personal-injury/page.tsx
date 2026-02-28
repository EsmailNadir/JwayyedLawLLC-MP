import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { personalInjuryServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Ohio Personal Injury Attorney | Columbus, Cincinnati, Dayton & Throughout Ohio | Jwayyed Law LLC',
  description: 'Experienced personal injury attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Car accidents, slip and fall, workplace injuries, and more. Schedule consultation: (614) 285-5482',
  keywords: [
    'Ohio personal injury attorney',
    'Columbus personal injury attorney',
    'Cincinnati personal injury attorney',
    'Dayton personal injury attorney',
    'Ohio personal injury lawyer',
    'car accident lawyer Ohio',
    'slip and fall attorney',
    'workplace injury lawyer',
    'wrongful death attorney'
  ],
  openGraph: {
    title: 'Ohio Personal Injury Attorney | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    description: 'Personal injury representation in Columbus, Cincinnati, Dayton, and throughout Ohio. Schedule consultation available.',
    url: 'https://www.jjlawohio.com/personal-injury',
  },
  alternates: {
    canonical: '/personal-injury',
  },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
];

const faqs = [
  {
    question: 'What is the statute of limitations for personal injury claims in Ohio?',
    answer: 'Under Ohio Revised Code 2305.10, the statute of limitations for personal injury claims in Ohio is generally 2 years from the date of injury. However, exceptions may apply for medical malpractice claims (1 year from discovery), claims against government entities (2 years with special notice requirements), or claims involving minors. Missing the deadline bars recovery, so it is crucial to act quickly and consult an attorney immediately.',
  },
  {
    question: 'What types of compensation are available in personal injury cases?',
    answer: 'Personal injury compensation in Ohio may include economic damages (medical expenses, lost wages, property damage, future medical costs, loss of earning capacity), non-economic damages (pain and suffering, emotional distress, loss of enjoyment, loss of consortium), and in rare cases, punitive damages for egregious conduct. Compensation depends on injury severity, impact on your life, and available insurance coverage or assets.',
  },
  {
    question: 'What is comparative negligence in Ohio?',
    answer: 'Ohio follows a modified comparative negligence rule under ORC 2315.33. If you are partially at fault for your injury, your compensation is reduced by your percentage of fault. However, if you are 51% or more at fault, you cannot recover compensation. This means even if you were partially negligent, you may still recover compensation if you are less than 51% at fault. An attorney can help protect your rights and maximize your recovery.',
  },
  {
    question: 'Do I need a personal injury attorney for my claim?',
    answer: 'While you can handle a personal injury claim yourself, an experienced attorney can significantly improve your chances of recovery and maximize compensation. Attorneys understand insurance tactics, negotiation strategies, and legal requirements. They handle documentation, communicate with insurance companies, negotiate settlements, and represent you in court if necessary. Most personal injury attorneys work on a contingency fee basis, meaning you only pay if you recover compensation.',
  },
  {
    question: 'How long does a personal injury case take?',
    answer: 'Personal injury case duration varies significantly depending on case complexity, injury severity, insurance company cooperation, and whether the case goes to trial. Simple cases may resolve in months, while complex cases may take years. Most cases settle before trial, but preparation and negotiation can take substantial time. An attorney can provide a realistic timeline based on your specific case circumstances.',
  },
];

export default function PersonalInjuryPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Personal Injury Attorney"
        description="Serving Columbus, Cincinnati, Dayton, and throughout Ohio. Experienced representation for accident victims seeking compensation."
      />

      {/* Sub-Services Grid */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mb-6">
            Personal Injury Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {personalInjuryServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-medium text-gray-900"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Personal Injury Representation in Columbus, Cincinnati, Dayton & Throughout Ohio
            </h2>
            
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              If you have been injured in an accident in Columbus, Cincinnati, Dayton, or throughout Ohio due to someone else's negligence, you may be entitled to compensation for your injuries, medical expenses, lost wages, and pain and suffering. At Jwayyed Law LLC, we provide experienced personal injury representation for accident victims under Ohio Revised Code Chapter 2305. Our attorney understands Ohio personal injury laws, insurance requirements, and the compensation process necessary to help you recover.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Personal injury claims arise from various accidents including car accidents, truck accidents, motorcycle accidents, slip and fall incidents, workplace injuries, medical malpractice, and wrongful death. Ohio follows a modified comparative negligence rule, meaning your compensation may be reduced by your percentage of fault, but you can still recover if you are less than 51% at fault.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The personal injury claims process in Ohio involves investigation, documentation, negotiation with insurance companies, and potentially litigation. Understanding your rights, the claims process, and available compensation is essential for maximizing recovery. Insurance companies often minimize claims or deny liability, making experienced legal representation crucial. Early intervention by a skilled personal injury attorney can significantly impact the outcome, ensuring proper documentation, maximizing compensation, and protecting your rights throughout the process.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Personal injury cases require thorough investigation, medical documentation, expert testimony, and strategic negotiation or litigation. The statute of limitations for most personal injury claims in Ohio is 2 years from the date of injury, making it crucial to act quickly. Medical malpractice claims have a 1-year statute of limitations from discovery. Missing these deadlines bars recovery entirely. An experienced attorney can ensure all deadlines are met, evidence is preserved, and your claim is properly documented and pursued.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_sans-serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Personal Injury – Locations We Serve
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              We represent injury victims in the following Ohio counties and communities. Each county has its own page; click through for more information.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link href="/locations/franklin-county/personal-injury-franklin-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Franklin County</span>
                <span className="block text-sm text-gray-600 mt-1">Columbus & surrounding areas</span>
              </Link>
              <Link href="/locations/delaware-county/personal-injury-delaware-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Delaware County</span>
                <span className="block text-sm text-gray-600 mt-1">Delaware & surrounding areas</span>
              </Link>
              <Link href="/locations/butler-county/personal-injury-butler-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Butler County</span>
                <span className="block text-sm text-gray-600 mt-1">Hamilton, Oxford, West Chester</span>
              </Link>
              <Link href="/locations/greene-county/personal-injury-greene-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Greene County</span>
                <span className="block text-sm text-gray-600 mt-1">Fairborn & surrounding areas</span>
              </Link>
              <Link href="/locations/montgomery-county/personal-injury-montgomery-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Montgomery County</span>
                <span className="block text-sm text-gray-600 mt-1">Dayton & surrounding areas</span>
              </Link>
              <Link href="/locations/pickaway-county/personal-injury-pickaway-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Pickaway County</span>
                <span className="block text-sm text-gray-600 mt-1">Circleville & surrounding areas</span>
              </Link>
              <Link href="/locations/athens-county/personal-injury-athens-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Athens County</span>
                <span className="block text-sm text-gray-600 mt-1">Athens & surrounding areas</span>
              </Link>
              <Link href="/locations/morrow-county/personal-injury-morrow-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Morrow County</span>
                <span className="block text-sm text-gray-600 mt-1">Mount Gilead, Cardington & surrounding areas</span>
              </Link>
              <Link href="/locations/clinton-county/personal-injury-clinton-county" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all font-['Inter',_'Arial',_sans-serif]">
                <span className="font-semibold text-gray-900">Clinton County</span>
                <span className="block text-sm text-gray-600 mt-1">Wilmington & surrounding areas</span>
              </Link>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_sans-serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Personal Injury Claims Process
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the personal injury claims process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Initial Investigation and Documentation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Immediately after an accident, evidence must be preserved including photos of the scene, vehicles, and injuries, witness contact information, police reports, and medical records. An attorney can coordinate investigation, gather evidence, interview witnesses, and ensure all documentation is properly preserved. This early documentation is crucial for establishing liability and damages.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Medical Treatment and Documentation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Seeking prompt medical treatment is essential both for your health and your claim. Medical records document injuries, treatment, and prognosis. An attorney can help coordinate medical treatment, ensure all injuries are documented, and work with medical providers to establish causation between the accident and injuries. Complete medical documentation is necessary to prove damages.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Insurance Negotiation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Most personal injury claims are resolved through negotiation with insurance companies. Insurance adjusters often attempt to minimize claims or deny liability. An experienced attorney understands insurance tactics, can negotiate effectively, and knows when to push for fair compensation. Most cases settle during negotiation, but preparation for litigation strengthens negotiation position.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Litigation and Trial</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If settlement negotiations fail, litigation may be necessary. This involves filing a lawsuit, discovery (exchanging evidence), depositions, expert testimony, and potentially trial. An experienced attorney can navigate the litigation process, present compelling evidence, and advocate for maximum compensation at trial. Most cases settle before trial, but preparation for trial strengthens negotiation position.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How a Personal Injury Attorney Can Help
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced personal injury attorney provides comprehensive representation throughout every stage of your claim:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate Case Investigation:</strong> Thoroughly investigate your accident, gather evidence including photos, witness statements, police reports, and surveillance footage, and document all injuries and damages</li>
              <li><strong>Medical Coordination:</strong> Help coordinate medical treatment, ensure all injuries are properly documented, and work with medical providers to establish causation and prognosis</li>
              <li><strong>Insurance Negotiation:</strong> Handle all communication with insurance companies, negotiate fair settlements, and protect you from insurance tactics designed to minimize claims</li>
              <li><strong>Legal Strategy Development:</strong> Develop strategies to maximize compensation, establish liability, and protect your rights throughout the claims process</li>
              <li><strong>Comprehensive Documentation:</strong> Prepare all documentation, medical records, evidence, and expert reports necessary to support your claim and maximize compensation</li>
              <li><strong>Expert Consultation:</strong> Consult with medical experts, accident reconstruction experts, economic experts, or other specialists to establish causation, damages, and liability</li>
              <li><strong>Litigation Representation:</strong> File lawsuits when necessary, navigate the litigation process, conduct discovery, take depositions, and represent you in court if settlement negotiations fail</li>
              <li><strong>Maximize Recovery:</strong> Work to ensure you receive full compensation for all damages including medical expenses (past and future), lost wages, loss of earning capacity, pain and suffering, emotional distress, and property damage</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Personal Injury Practice Areas
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm handles all types of personal injury cases, providing experienced representation across the full spectrum of accident and injury claims. We understand that each type of case requires specific knowledge of relevant laws, insurance requirements, and compensation structures:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Link href="/personal-injury/car-accidents" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Car Accidents</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Compensation for car accident injuries, property damage, and related losses</p>
              </Link>
              <Link href="/personal-injury/truck-accidents" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Truck Accidents</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Representation for commercial truck accident victims involving complex liability</p>
              </Link>
              <Link href="/personal-injury/motorcycle-accidents" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Motorcycle Accidents</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Compensation for motorcycle accident injuries and damages</p>
              </Link>
              <Link href="/personal-injury/pedestrian-accidents" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Pedestrian Accidents</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Representation for pedestrians injured by vehicles</p>
              </Link>
              <Link href="/personal-injury/slip-and-fall" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Slip and Fall</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Premises liability claims for slip and fall injuries</p>
              </Link>
              <Link href="/personal-injury/premises-liability" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Premises Liability</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Claims for injuries on unsafe property</p>
              </Link>
              <Link href="/personal-injury/dog-bites" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Dog Bites</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Compensation for dog bite and animal attack injuries</p>
              </Link>
              <Link href="/personal-injury/medical-malpractice" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Medical Malpractice</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Claims for medical negligence and malpractice</p>
              </Link>
              <Link href="/personal-injury/workplace-injuries" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Workplace Injuries</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Third-party claims for workplace accidents</p>
              </Link>
              <Link href="/personal-injury/wrongful-death" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Wrongful Death</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Compensation for families who lost loved ones due to negligence</p>
              </Link>
              <Link href="/personal-injury/catastrophic-injuries" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Catastrophic Injuries</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Representation for severe, life-altering injuries</p>
              </Link>
            </div>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Each practice area requires specific knowledge of relevant Ohio Revised Code sections, insurance requirements, and case law. Our attorney stays current with changes in Ohio personal injury law and understands how these laws are applied throughout Ohio courts. We develop strategies tailored to the specific type of accident or injury you suffered, drawing on our experience with similar cases and knowledge of local court practices.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Understanding Ohio Personal Injury Laws
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio personal injury law is complex and includes several important legal principles that affect your claim:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Statute of Limitations</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Under Ohio Revised Code 2305.10, personal injury claims must generally be filed within 2 years of the injury. Medical malpractice claims have a 1-year statute of limitations from discovery. Claims against government entities require special notice within 2 years. Missing the deadline bars recovery entirely, making it crucial to act quickly and consult an attorney immediately. The statute of limitations begins running from the date of injury or discovery of injury, depending on the circumstances.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Modified Comparative Negligence</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Ohio follows a modified comparative negligence rule under ORC 2315.33. If you are partially at fault for your injury, your compensation is reduced by your percentage of fault. However, if you are 51% or more at fault, you cannot recover any compensation. This means even if you were partially negligent, you may still recover compensation if you are less than 51% at fault. An attorney can help protect your rights, establish the other party's fault, and maximize your recovery even when you share some fault.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Damage Caps and Compensation Types</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Ohio law generally does not cap non-economic damages (pain and suffering, emotional distress) in most personal injury cases. However, medical malpractice cases have damage caps. Economic damages are not capped and can include all medical expenses (past and future), lost wages, loss of earning capacity, property damage, and other financial losses. Punitive damages may be available in cases involving egregious conduct. An attorney can help identify all available damages and maximize your compensation.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Insurance Requirements and Coverage</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Ohio requires minimum auto insurance coverage of $25,000 per person and $50,000 per accident for bodily injury, and $25,000 for property damage. However, many drivers carry higher coverage or have umbrella policies. Understanding available insurance coverage, uninsured/underinsured motorist coverage, and how to access multiple insurance policies is crucial for maximizing recovery. An attorney can identify all available insurance coverage and pursue claims against all responsible parties.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Types of Compensation Available
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Personal injury compensation in Ohio may include various types of damages:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Economic Damages</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Medical expenses (past and future)</li>
                <li>Lost wages and loss of earning capacity</li>
                <li>Property damage</li>
                <li>Rehabilitation and therapy costs</li>
                <li>Home modifications for disabilities</li>
                <li>Other financial losses directly related to the injury</li>
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
                In cases involving egregious conduct, recklessness, or intentional harm, punitive damages may be available to punish the wrongdoer and deter similar conduct. Punitive damages are rare and require clear and convincing evidence of malicious or reckless behavior.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Choose Jwayyed Law LLC for Personal Injury
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated personal injury representation throughout Ohio. We understand that accidents can be life-changing and that insurance companies often minimize claims. Our attorney works diligently to investigate cases, document injuries, negotiate with insurance companies, and maximize compensation for our clients.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We handle all types of personal injury cases, from car accidents to workplace injuries to wrongful death. Our firm works on a contingency fee basis, meaning you only pay attorney fees if we recover compensation for you. This arrangement ensures our interests are aligned with yours—we only succeed when you succeed. We maintain open communication with clients, ensuring you understand the process, your options, and case progress throughout your claim.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic case development, and aggressive advocacy. We understand the local court systems, insurance company tactics, and judicial preferences throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and maximize compensation. We work closely with clients to understand their goals, explain legal options, and make informed decisions about settlement offers versus litigation.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have been injured in an accident in Columbus, Cincinnati, Dayton, or anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation. We will review your case, explain your rights, discuss potential compensation, and develop a strategy tailored to your situation. Time is critical in personal injury cases—evidence must be preserved, medical treatment must be documented, and the statute of limitations must be met. Do not delay in seeking experienced legal representation to protect your rights and maximize your recovery.
            </p>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

