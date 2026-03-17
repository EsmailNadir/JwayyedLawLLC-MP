import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Ohio Nursing Home Abuse Lawyer | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
  description: 'Ohio nursing home abuse and neglect attorney protecting vulnerable residents under ORC Chapter 3721. Pressure ulcers, physical abuse, financial exploitation. Call (614) 285-5482.',
  keywords: ['nursing home abuse lawyer Columbus OH', 'nursing home abuse attorney Ohio', 'elder abuse lawyer', 'Franklin County nursing home abuse attorney', 'ORC 3721 nursing home neglect'],
  openGraph: {
    title: 'Ohio Nursing Home Abuse Lawyer | Columbus | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/personal-injury/nursing-home-abuse',
  },
  alternates: { canonical: '/personal-injury/nursing-home-abuse' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Nursing Home Abuse', href: '/personal-injury/nursing-home-abuse' },
];

const faqs = [
  {
    question: `What constitutes nursing home abuse in Ohio?`,
    answer: `Under Ohio Revised Code Chapter 3721 and federal nursing home regulations (42 U.S.C. § 1396r, the Nursing Home Reform Act), nursing home residents have legally protected rights to safe, adequate care. Abuse includes physical abuse (hitting, restraining improperly, rough handling), sexual abuse, emotional or psychological abuse (threats, humiliation, isolation), financial exploitation (theft or misuse of a resident's money or assets), neglect (failure to provide adequate food, hydration, hygiene, medical care, or supervision), and abandonment. Any of these forms of mistreatment can give rise to civil liability against the facility and responsible staff.`,
  },
  {
    question: `How do I report nursing home abuse in Ohio?`,
    answer: `You can report nursing home abuse through several channels. The Ohio Department of Health investigates complaints against licensed nursing facilities — you can file online at odh.ohio.gov or call their complaint hotline. The Ohio Long-Term Care Ombudsman program advocates for residents and investigates complaints at no cost. Under ORC 5101.61, certain professionals (including healthcare workers) are mandatory reporters of suspected adult abuse and neglect. You should also report to local law enforcement if the abuse involves physical assault or financial crimes. Documenting everything — injuries, dates, names, and what you observed — before reporting strengthens any subsequent civil claim.`,
  },
  {
    question: `What are the signs of nursing home neglect I should watch for?`,
    answer: `Warning signs of nursing home abuse and neglect include unexplained injuries (bruises, cuts, fractures), pressure ulcers (bedsores) that are worsening or not being treated, sudden and unexplained weight loss or dehydration, poor hygiene and unsanitary living conditions, unchanged incontinence garments, withdrawal from activities or sudden personality changes, fearfulness around certain staff members, missing personal belongings or unexplained financial transactions, and failure to receive prescribed medications. Any single sign warrants investigation — multiple signs together are a serious red flag.`,
  },
  {
    question: `What are pressure ulcers and do they indicate neglect?`,
    answer: `Pressure ulcers (bedsores) develop when sustained pressure cuts off blood supply to skin and underlying tissue — most often on bony areas like the heels, tailbone, and hips. They are staged from 1 (redness of intact skin) through 4 (full-thickness tissue loss exposing muscle or bone). Stage 3 and Stage 4 pressure ulcers are widely recognized as indicators of inadequate care in nursing homes. With proper repositioning every two hours, adequate nutrition and hydration, and skin monitoring, most pressure ulcers are preventable. When a bedridden or chair-bound resident develops Stage 3 or 4 ulcers, it strongly suggests staff failed to follow basic care protocols — which constitutes negligence.`,
  },
  {
    question: `What is Ohio's statute of limitations for nursing home abuse claims?`,
    answer: `Under Ohio Revised Code 2305.10, personal injury claims — including nursing home abuse and neglect — must generally be filed within two years of the date of the injury. If the claim involves medical diagnosis, treatment, or care decisions, it may also be characterized as medical malpractice subject to ORC 2305.113's one-year statute of limitations (with a four-year outer limit). If a resident dies as a result of abuse or neglect, a wrongful death claim must be filed within two years under ORC Chapter 2125. Because the applicable statute can depend on the specific facts, you should consult an attorney as soon as possible after discovering potential abuse.`,
  },
  {
    question: `What damages can I recover in a nursing home abuse case?`,
    answer: `Recoverable damages in Ohio nursing home abuse and neglect cases include: medical expenses for treating injuries caused by the abuse or neglect (wound care, hospitalization, surgical procedures); future care costs if ongoing treatment is needed; pain and suffering endured by the resident; emotional distress; and loss of enjoyment of life. In cases of particularly egregious conduct — such as deliberate physical abuse or gross understaffing that the facility knew about and ignored — punitive damages may also be available. In wrongful death cases under ORC Chapter 2125, survivors can recover for the resident's conscious pain and suffering, funeral expenses, and the loss of the decedent's companionship and support.`,
  },
  {
    question: `Can I sue a nursing home for a family member's injuries?`,
    answer: `Yes. Family members can file a lawsuit on behalf of a nursing home resident who lacks capacity to sue on their own, either as a legal guardian, power of attorney, or as personal representative of the estate if the resident has passed. Ohio law allows both the resident and certain family members to bring claims for damages resulting from abuse and neglect. Nursing home facilities are liable for the actions of their staff under respondeat superior, and also directly liable for negligent hiring, supervision, and retention of staff, as well as for systemic failures like chronic understaffing. Federal law under the Nursing Home Reform Act establishes a baseline of residents' rights that Ohio facilities must meet.`,
  },
  {
    question: `How is nursing home negligence proven?`,
    answer: `Proving nursing home negligence requires establishing that the facility owed the resident a duty of care (which is established by admission into the facility), that the facility breached that duty by falling below the applicable standard of care, and that the breach caused the resident's injuries. Evidence typically includes the resident's medical records and care plans, nursing notes and incident reports, the facility's staffing records (which can show dangerous understaffing), Ohio Department of Health inspection and survey reports, testimony from current or former staff, and expert testimony from geriatric care specialists or nursing home administrators who can explain industry standards. Facility records often reveal patterns of neglect — obtaining and preserving these records early is critical.`,
  },
];

export default function NursingHomeAbusePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Nursing Home Abuse Lawyer"
        description="Nursing home residents deserve dignity, safety, and proper care. When facilities fail vulnerable Ohioans through abuse or neglect, we hold them accountable and fight for justice."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Nursing Home Abuse and Neglect in Ohio: Legal Rights and Remedies
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio nursing home residents are protected by both state law — primarily Ohio Revised Code Chapter 3721 — and federal law under the Nursing Home Reform Act (42 U.S.C. § 1396r). These laws establish minimum standards of care, guarantee residents a bill of rights, and impose obligations on facilities to maintain adequate staffing, provide appropriate medical care, and protect residents from harm. When nursing homes fail to meet these obligations, the consequences for vulnerable residents can be catastrophic: severe infections, fractures, malnutrition, dehydration, bedsores, psychological trauma, and death. At Jwayyed Law LLC, we help families hold negligent nursing home facilities accountable.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Nursing home abuse takes many forms. Physical abuse includes hitting, slapping, improper physical restraint, and rough handling. Sexual abuse — which is unfortunately not rare in institutional settings — includes any non-consensual sexual contact. Emotional and psychological abuse includes threats, intimidation, humiliation, and isolation. Financial exploitation involves theft or unauthorized use of a resident's money, credit cards, or property. Neglect — perhaps the most common form — occurs when staff fail to provide adequate nutrition, hydration, hygiene, wound care, medication, or supervision. Abandonment occurs when a facility discharges a resident without adequate notice or arranging for alternative care. Under ORC 5101.61, healthcare workers and certain other professionals are mandatory reporters of suspected adult abuse and neglect.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              One of the clearest indicators of nursing home neglect is the development of Stage 3 or Stage 4 pressure ulcers (bedsores). Pressure ulcers are staged from 1 (skin redness) through 4 (full-thickness tissue loss exposing muscle, tendon, or bone). Stage 3 and 4 bedsores are largely preventable with basic nursing care: regular repositioning of immobile patients, adequate nutrition and hydration, and routine skin assessments. When a nursing home resident develops advanced bedsores, it is widely accepted in the nursing care industry as evidence of neglect. These wounds can cause severe pain, systemic infection (sepsis), osteomyelitis (bone infection), and death. Facilities that allow bedsores to progress to advanced stages without intervention have typically failed in their fundamental duty of care.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understaffing is a root cause of nursing home neglect in Ohio and across the country. When facilities fail to maintain adequate staff-to-resident ratios to cut costs, residents go unattended for dangerously long periods — unable to call for help, not being repositioned, not receiving medications on schedule. Ohio Department of Health nursing home inspections and survey reports often document staffing violations and care deficiencies that are publicly available. These records can be powerful evidence in a negligence claim. Facilities have a direct liability for negligent staffing decisions, not just for the individual actions of their employees.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The statute of limitations under ORC 2305.10 gives two years to file a personal injury claim for nursing home abuse. If the resident died as a result of the abuse or neglect, a wrongful death claim under ORC Chapter 2125 must also be brought within two years of the date of death. Because some claims may be characterized as medical malpractice (subject to ORC 2305.113's one-year statute), consulting an attorney promptly is essential to identify the correct deadline. The Ohio Long-Term Care Ombudsman program can help investigate complaints and is a free resource for families — but its involvement does not toll the statute of limitations for civil claims.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Nursing Home Abuse and Neglect Cases We Handle
            </h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li>Pressure ulcers (Stage 3 and Stage 4 bedsores) caused by failure to reposition</li>
              <li>Physical abuse by nursing home staff</li>
              <li>Malnutrition and dehydration due to failure to provide adequate nutrition</li>
              <li>Falls resulting from inadequate supervision or defective equipment</li>
              <li>Medication errors — wrong medication, missed doses, dangerous overdoses</li>
              <li>Financial exploitation and theft of resident assets</li>
              <li>Wrongful death resulting from nursing home negligence (ORC Chapter 2125)</li>
              <li>Systemic neglect due to chronic understaffing</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Jwayyed Law LLC
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              At Jwayyed Law LLC, we understand that nursing home abuse cases are deeply personal. Families trust these facilities with their most vulnerable loved ones, and a betrayal of that trust is devastating. We investigate facilities thoroughly — reviewing medical records, staffing logs, state inspection reports, and care plans — to build the strongest possible case. We represent nursing home abuse victims and their families on a contingency fee basis, meaning no fees unless we recover.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We also handle related matters including{' '}
              <Link href="/personal-injury/medical-malpractice" className="text-[#b87333] underline hover:opacity-80">medical malpractice claims</Link>,{' '}
              <Link href="/personal-injury/catastrophic-injuries" className="text-[#b87333] underline hover:opacity-80">catastrophic injury cases</Link>, and other{' '}
              <Link href="/personal-injury" className="text-[#b87333] underline hover:opacity-80">personal injury matters</Link> across Ohio.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Call <a href="tel:6142855482" className="text-[#b87333] underline hover:text-[#a06828]">(614) 285-5482</a> or <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">schedule a consultation online</Link> to discuss your nursing home abuse case.
            </p>

            <LocationsWeServe title="Personal Injury" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/personal-injury/medical-malpractice" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Medical Malpractice</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Healthcare provider negligence claims</span>
              </Link>
              <Link href="/personal-injury/wrongful-death" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Wrongful Death</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Holding negligent parties accountable for fatal injuries</span>
              </Link>
              <Link href="/personal-injury/catastrophic-injuries" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Catastrophic Injuries</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Severe and life-altering injury claims</span>
              </Link>
              <Link href="/personal-injury/premises-liability" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Premises Liability</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Property owner negligence and unsafe conditions</span>
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
