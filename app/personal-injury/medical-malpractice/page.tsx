import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Ohio Medical Malpractice Lawyer | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
  description: 'Ohio medical malpractice attorney handling misdiagnosis, surgical errors, and birth injuries under ORC 2305.113. Non-economic damage caps explained. Call (614) 285-5482.',
  keywords: ['medical malpractice lawyer Columbus OH', 'medical malpractice attorney Ohio', 'medical negligence lawyer', 'Franklin County medical malpractice attorney', 'ORC 2305.113 malpractice'],
  openGraph: {
    title: 'Ohio Medical Malpractice Lawyer | Columbus | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/medical-malpractice',
  },
  alternates: { canonical: '/personal-injury/medical-malpractice' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Medical Malpractice', href: '/personal-injury/medical-malpractice' },
];

const faqs = [
  {
    question: `What is medical malpractice in Ohio?`,
    answer: `Medical malpractice occurs when a healthcare provider — a physician, surgeon, nurse, hospital, or other licensed professional — fails to meet the accepted standard of care and that failure causes injury or death to a patient. The standard of care is what a reasonably competent healthcare provider in the same specialty would have done under the same circumstances. Common forms of malpractice include misdiagnosis or delayed diagnosis, surgical errors, medication errors, birth injuries, anesthesia errors, and failure to obtain informed consent. Not every bad medical outcome is malpractice — you must show the provider fell below the standard of care and that the breach caused your harm.`,
  },
  {
    question: `What is Ohio's statute of limitations for medical malpractice?`,
    answer: `Under Ohio Revised Code 2305.113, you generally have one year from the date the cause of action accrued — typically when you discovered or should have discovered the injury — to file a medical malpractice lawsuit. An absolute four-year outer limit (statute of repose) runs from the date of the act or omission, regardless of discovery. One important tool: if you send written notice of your intent to sue to the defendant before the one-year period expires, you can get a 180-day extension to file. Exceptions exist for minors and for cases involving foreign objects left inside the body. Given how short the one-year window is, you should consult an attorney immediately if you suspect malpractice.`,
  },
  {
    question: `What is the affidavit of merit requirement in Ohio medical malpractice cases?`,
    answer: `Ohio Civil Rule 10(D)(2) requires that when you file a medical malpractice complaint, you must attach an affidavit of merit signed by a qualified medical expert. The expert must review the medical records and attest that there is merit to your claim — specifically that the named defendant deviated from the applicable standard of care. Failure to attach the affidavit can result in dismissal of your case. This requirement exists to screen out frivolous claims and means that retaining a qualified expert early in the process is essential. An experienced malpractice attorney will identify and retain the right expert before the complaint is filed.`,
  },
  {
    question: `What are Ohio's damage caps for medical malpractice?`,
    answer: `Under Ohio Revised Code 2323.43, non-economic damages (pain and suffering, emotional distress, loss of consortium) in medical malpractice cases are capped at the greater of $250,000 or three times the plaintiff's economic damages, with a maximum of $350,000 per plaintiff or $500,000 per occurrence. For catastrophic injuries — defined as permanent physical deformity, loss of use of a limb, loss of a bodily organ system, or a permanent functional injury preventing the plaintiff from independently caring for themselves — the cap rises to $500,000 per plaintiff or $1,000,000 per occurrence. Economic damages (medical bills, lost wages, future care costs) are not capped and are fully recoverable.`,
  },
  {
    question: `What types of medical errors constitute malpractice?`,
    answer: `Common medical malpractice claims in Ohio include: misdiagnosis or delayed diagnosis of cancer, heart attack, stroke, or infection; surgical errors such as wrong-site surgery, retained surgical instruments ("never events"), or perforation of organs; medication errors including wrong drug, wrong dose, or dangerous drug interactions; birth injuries such as cerebral palsy or Erb's palsy caused by improper delivery techniques; anesthesia errors causing brain damage or death; and failure to obtain informed consent before a procedure. Hospital systems may be liable for employed physicians under respondeat superior, while independent contractor physicians are individually liable.`,
  },
  {
    question: `How do you prove medical malpractice in Ohio?`,
    answer: `Proving medical malpractice requires establishing four elements: (1) the defendant owed you a duty of care (a doctor-patient relationship existed); (2) the defendant breached that duty by deviating from the standard of care; (3) the breach caused your injury; and (4) you suffered damages as a result. Because medical standards are technical, Ohio requires expert testimony on the standard of care and breach. You must also obtain your medical records — you have a right to access them under HIPAA. Building a strong malpractice case requires a thorough review of all records, expert consultation, and often independent medical examinations.`,
  },
  {
    question: `What is the standard of care in Ohio medical malpractice?`,
    answer: `The standard of care is the level of care, skill, and treatment that a reasonably competent healthcare professional with similar training and experience would provide under the same or similar circumstances. It is not perfection — medicine involves judgment and uncertainty. The standard is evaluated within the relevant specialty: a cardiologist is held to the standard of a reasonably competent cardiologist, not a general practitioner. Expert witnesses — typically physicians in the same specialty — testify about what the standard required and how the defendant fell short. Ohio courts apply a statewide standard of care rather than a local community standard.`,
  },
  {
    question: `How long does a medical malpractice case take in Ohio?`,
    answer: `Medical malpractice cases in Ohio are typically among the longest personal injury cases to resolve. The process involves obtaining and reviewing extensive medical records, retaining expert witnesses, filing the complaint with the required affidavit of merit, completing discovery (depositions of experts and treating physicians), and often lengthy pretrial motions. Most malpractice cases take two to four years from filing to resolution — either settlement or trial. Cases involving disputed causation or complex medical issues take longer. Early consultation with an attorney is critical given Ohio's short one-year statute of limitations.`,
  },
];

export default function MedicalMalpracticePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Medical Malpractice Lawyer"
        description="When healthcare providers fall below the standard of care, the consequences can be devastating. We hold negligent doctors and hospitals accountable and fight for the full compensation you deserve."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Medical Malpractice in Ohio: Standards, Caps, and Your Rights
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Medical malpractice occurs when a physician, surgeon, hospital, or other licensed healthcare provider deviates from the accepted standard of care and that deviation causes harm to a patient. Ohio's primary medical malpractice statute is ORC 2305.113, which governs the statute of limitations and notice requirements. Ohio also imposes significant procedural requirements — including the affidavit of merit under Ohio Civil Rule 10(D)(2) — that make medical malpractice litigation among the most technically demanding areas of personal injury law. At Jwayyed Law LLC, we help victims navigate Ohio's complex malpractice framework to pursue the compensation they deserve.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              To succeed in a medical malpractice claim, you must prove that (1) a doctor-patient relationship existed, (2) the provider breached the applicable standard of care, (3) the breach directly caused your injury, and (4) you suffered measurable damages. Because medicine involves complex judgment, Ohio courts require expert testimony on the standard of care and its breach. Expert witnesses must be licensed healthcare professionals in the same specialty as the defendant. This expert requirement is why early attorney involvement is so important — finding and retaining qualified experts takes time, and the one-year statute of limitations under ORC 2305.113 leaves little margin for delay.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio imposes statutory caps on non-economic damages in medical malpractice cases under ORC 2323.43. For most claims, non-economic damages (pain and suffering, emotional distress, loss of consortium) are capped at the greater of $250,000 or three times the plaintiff's economic losses, with a maximum of $350,000 per plaintiff or $500,000 per occurrence. For catastrophic injuries — permanent physical deformity, loss of use of a limb, loss of a bodily organ system, or a permanent injury preventing self-care — the cap increases to $500,000 per plaintiff or $1,000,000 per occurrence. Critically, these caps do not limit economic damages: all past and future medical bills, lost income, and care costs remain fully recoverable without limit.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The statute of limitations under ORC 2305.113 is just one year from when the cause of action accrued, with an absolute four-year outer limit. If you send written notice of intent to sue before the one-year period expires, you may obtain a 180-day extension to file. These timelines are unforgiving — missing them permanently bars your claim. Special rules apply for minors and for "foreign object" cases (such as a surgical sponge left inside the body). Consulting an attorney promptly after discovering a potential malpractice injury is essential.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Common medical malpractice claims in Ohio include misdiagnosis and delayed diagnosis of cancer, cardiac events, strokes, and infections; surgical errors and "never events" such as wrong-site surgery or retained instruments; medication errors; birth injuries including cerebral palsy and Erb's palsy caused by negligent delivery; anesthesia errors; and failure to obtain informed consent. Hospitals may be liable for employed physicians under the doctrine of respondeat superior. Independent contractor physicians are individually liable. Understanding who to name as defendants — and why — requires careful review of hospital credentialing records and employment agreements.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Medical Malpractice Cases We Handle
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li>Misdiagnosis and delayed diagnosis (cancer, heart attack, stroke, infection)</li>
              <li>Surgical errors and "never events" (wrong-site surgery, retained instruments)</li>
              <li>Medication errors — wrong drug, wrong dose, dangerous interactions</li>
              <li>Birth injuries: cerebral palsy, Erb's palsy, hypoxic-ischemic encephalopathy</li>
              <li>Anesthesia errors causing brain injury, cardiac arrest, or death</li>
              <li>Failure to obtain informed consent before procedures</li>
              <li>Failure to order appropriate diagnostic tests</li>
              <li>Emergency room errors and delayed treatment</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Medical malpractice cases require meticulous preparation, qualified expert witnesses, and an attorney who understands both Ohio's procedural requirements and the medical facts underlying your claim. At Jwayyed Law LLC, we handle malpractice cases on a contingency fee basis — you pay nothing unless we recover for you. We work with qualified medical experts, obtain and analyze all relevant records, and pursue the maximum compensation available under Ohio law.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We also handle related matters including{' '}
              <Link href="/personal-injury/catastrophic-injuries" className="text-[#b87333] underline hover:opacity-80">catastrophic injury claims</Link>,{' '}
              <Link href="/personal-injury/nursing-home-abuse" className="text-[#b87333] underline hover:opacity-80">nursing home abuse and neglect</Link>, and other{' '}
              <Link href="/personal-injury" className="text-[#b87333] underline hover:opacity-80">personal injury matters</Link> throughout Ohio.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Call <a href="tel:6142855482" className="text-[#b87333] underline hover:text-[#a06828]">(614) 285-5482</a> or <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">schedule a consultation online</Link> to discuss your medical malpractice case.
            </p>

            <LocationsWeServe title="Personal Injury" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/personal-injury/nursing-home-abuse" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Nursing Home Abuse</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Elder abuse and neglect in care facilities</span>
              </Link>
              <Link href="/personal-injury/catastrophic-injuries" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Catastrophic Injuries</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Severe and life-altering injury claims</span>
              </Link>
              <Link href="/personal-injury/wrongful-death" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Wrongful Death</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Holding negligent parties accountable for fatal injuries</span>
              </Link>
              <Link href="/personal-injury/car-accidents" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Car Accidents</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Motor vehicle collision claims throughout Ohio</span>
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
