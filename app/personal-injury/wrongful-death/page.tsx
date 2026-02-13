import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Wrongful Death Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio wrongful death attorney helping families recover compensation. Skilled representation for wrongful death cases in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['wrongful death lawyer Columbus OH', 'wrongful death attorney Ohio', 'death claim lawyer', 'Franklin County wrongful death attorney'],
  openGraph: {
    title: 'Wrongful Death Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/wrongful-death',
  },
  alternates: { canonical: '/personal-injury/wrongful-death' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Wrongful Death', href: '/personal-injury/wrongful-death' },
];

const faqs = [
  {
    question: 'What is wrongful death in Ohio?',
    answer: 'Wrongful death under Ohio Revised Code Chapter 2125 (current as of 2026) occurs when someone\'s death is caused by another person\'s negligence, recklessness, or intentional misconduct. Wrongful death claims may arise from car accidents, truck accidents, medical malpractice, workplace accidents, nursing home abuse, defective products, and other incidents. Wrongful death claims are filed by the personal representative of the deceased person\'s estate on behalf of surviving family members.',
  },
  {
    question: 'Who can file a wrongful death claim in Ohio?',
    answer: 'Under Ohio Revised Code 2125.02, wrongful death claims in Ohio must be filed by the personal representative of the deceased person\'s estate on behalf of surviving family members including spouses, children, parents, and other dependents. The personal representative is typically named in the will or appointed by the probate court. An attorney can help determine who can file and guide you through the process.',
  },
  {
    question: 'What compensation can I recover from a wrongful death claim?',
    answer: 'Wrongful death compensation in Ohio may include economic damages (medical expenses, funeral expenses, lost wages, loss of future earnings, loss of services), non-economic damages (loss of consortium, loss of companionship, loss of guidance, mental anguish), and potentially punitive damages for egregious conduct. Compensation depends on the deceased person\'s earning capacity, age, health, and impact on surviving family members.',
  },
  {
    question: 'What is the statute of limitations for wrongful death claims?',
    answer: 'Under Ohio Revised Code 2125.02, the statute of limitations for wrongful death claims in Ohio is generally 2 years from the date of death. Missing the deadline bars recovery, so it is crucial to act quickly and consult an attorney immediately. The statute of limitations may be tolled in some circumstances.',
  },
  {
    question: 'Do I need a wrongful death attorney?',
    answer: 'Wrongful death cases are complex and require experienced representation. Wrongful death attorneys understand wrongful death law, can file claims on behalf of estates, handle complex litigation, and maximize compensation for surviving family members. Most attorneys work on a contingency fee basis and offer consultations. Experienced representation is essential to protect your rights and maximize recovery.',
  },
];

export default function WrongfulDeathPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Wrongful Death Lawyer"
        description="Experienced legal representation for wrongful death families seeking compensation. Fighting for the compensation your family deserves."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Wrongful Death Claims in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Wrongful death in Columbus, Cincinnati, Dayton, or throughout Ohio occurs when someone's death is caused by another person's negligence, recklessness, or intentional misconduct. At Jwayyed Law LLC, we provide experienced representation for wrongful death families under Ohio Revised Code Chapter 2125. Our attorney understands wrongful death law and the compensation process necessary to help families recover and hold responsible parties accountable.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Wrongful death claims may arise from car accidents, truck accidents, medical malpractice, workplace accidents, nursing home abuse, defective products, and other incidents. These cases are complex and require experienced representation to navigate the legal process, file claims on behalf of estates, and maximize compensation for surviving family members. Understanding your rights, the legal requirements, and the compensation process is essential for protecting your family's interests and holding responsible parties accountable.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The statute of limitations for wrongful death claims in Ohio is 2 years from the date of death under Ohio Revised Code 2125.02. Missing the deadline bars recovery entirely, making it crucial to act quickly. Wrongful death claims must be filed by the personal representative of the deceased person's estate on behalf of surviving family members. An experienced wrongful death attorney can help determine who can file, guide you through the process, and ensure all deadlines are met.
            </p>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">The Wrongful Death Claims Process</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the wrongful death claims process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Estate Administration</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Wrongful death claims must be filed by the personal representative of the deceased person's estate. If no personal representative exists, one must be appointed by the probate court. The personal representative is typically named in the will or appointed by the court. An attorney can help determine who can file, guide you through the probate process if necessary, and ensure the estate is properly established to file the claim.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Investigation and Evidence Gathering</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Thorough investigation is essential to identify all responsible parties and gather evidence. This includes reviewing police reports, medical records, accident reports, witness statements, surveillance footage, and other evidence. An attorney can coordinate investigation, identify all potentially liable parties, and ensure all evidence is properly preserved. This investigation may reveal multiple responsible parties including drivers, employers, manufacturers, or government entities.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Filing the Wrongful Death Claim</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Wrongful death claims must be filed within 2 years of the date of death. The claim is filed by the personal representative on behalf of surviving family members. The complaint must identify all responsible parties, allege negligence or misconduct, and seek compensation for damages. An attorney can draft and file the complaint, ensure all deadlines are met, and protect your family's interests throughout the process.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Litigation and Settlement</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Most wrongful death cases are resolved through settlement negotiations, but some proceed to trial. Litigation involves discovery (exchanging evidence), depositions, expert testimony, and potentially trial. An experienced attorney can navigate the litigation process, present compelling evidence, and advocate for maximum compensation. Most cases settle before trial, but preparation for trial strengthens negotiation position.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How a Wrongful Death Attorney Can Help</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced wrongful death attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Estate Administration Guidance:</strong> Help determine who can file the claim, guide you through probate if necessary, and ensure the estate is properly established to file the wrongful death claim</li>
              <li><strong>Comprehensive Case Investigation:</strong> Thoroughly investigate the incident including reviewing police reports, medical records, accident reports, witness statements, surveillance footage, and identifying all potentially liable parties</li>
              <li><strong>Estate Representation:</strong> File wrongful death claims on behalf of estates and surviving family members, ensuring all legal requirements are met and deadlines are satisfied</li>
              <li><strong>Legal Strategy Development:</strong> Develop strategies to maximize compensation for surviving family members, identify all responsible parties, and hold them accountable</li>
              <li><strong>Expert Consultation:</strong> Consult with medical experts, accident reconstruction experts, economic experts, or other specialists to establish causation, damages, and liability</li>
              <li><strong>Insurance Negotiation:</strong> Handle all communication with insurance companies, negotiate fair settlements, and protect you from insurance tactics designed to minimize claims</li>
              <li><strong>Complex Litigation:</strong> Handle complex wrongful death litigation including discovery, depositions, expert testimony, and trial representation if necessary</li>
              <li><strong>Maximize Recovery:</strong> Work to ensure surviving family members receive full compensation for all damages including medical expenses, funeral expenses, lost wages, loss of future earnings, loss of services, loss of consortium, and other damages</li>
            </ul>
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Compensation Available</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Wrongful death compensation in Ohio may include various types of damages for surviving family members:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Economic Damages</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Medical expenses (past medical expenses before death)</li>
                <li>Funeral and burial expenses</li>
                <li>Lost wages (from date of injury to date of death)</li>
                <li>Loss of future earnings (based on deceased person's earning capacity, age, health, and life expectancy)</li>
                <li>Loss of services (household services, childcare, etc.)</li>
                <li>Other financial losses directly related to the death</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Non-Economic Damages</h4>
              <ul className="list-disc pl-6 space-y-2 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li>Loss of consortium (spousal relationship)</li>
                <li>Loss of companionship</li>
                <li>Loss of guidance and support</li>
                <li>Mental anguish and emotional distress</li>
                <li>Loss of society and comfort</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Punitive Damages</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                In cases involving egregious conduct such as drunk driving, reckless behavior, or intentional harm, punitive damages may be available to punish the wrongdoer and deter similar conduct. Punitive damages are rare and require clear and convincing evidence of malicious or reckless behavior.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC</h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated wrongful death representation throughout Ohio. We understand that losing a loved one is devastating and that families need compensation and closure. Our attorney works diligently to investigate cases, hold responsible parties accountable, and maximize compensation for surviving family members while providing compassionate representation during this difficult time.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic case development, and aggressive advocacy with compassionate client service. We understand the complexities of wrongful death cases, the emotional toll on families, and the importance of holding responsible parties accountable. This knowledge allows us to develop effective strategies tailored to your specific case while providing the support and guidance your family needs during this difficult time.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you have lost a loved one due to someone else's negligence, recklessness, or intentional misconduct in Columbus, Cincinnati, Dayton, or anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation. We will review your case, explain your rights, discuss potential compensation, guide you through the estate administration process if necessary, and develop a strategy tailored to your situation. Time is critical in wrongful death cases—the statute of limitations is 2 years from the date of death, and early intervention ensures evidence is preserved and all deadlines are met. Do not delay in seeking experienced legal representation to protect your family's interests and hold responsible parties accountable.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

