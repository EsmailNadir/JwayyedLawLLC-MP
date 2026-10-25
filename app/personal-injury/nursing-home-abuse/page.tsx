import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Nursing Home Abuse Lawyer',
  description:
    'Nursing home abuse and neglect claims in Ohio under ORC Chapter 3721: warning signs, how to report it, the filing deadlines and what families can recover.',
  keywords: ['nursing home abuse lawyer Columbus OH', 'nursing home abuse attorney Ohio', 'elder abuse lawyer', 'Franklin County nursing home abuse attorney', 'ORC 3721 nursing home neglect'],
  openGraph: {
    title: 'Ohio Nursing Home Abuse Lawyer | Columbus | Jwayyed Law LLC',
    description: 'Abuse and neglect claims against Ohio nursing homes under ORC Chapter 3721 and federal law.',
    url: 'https://www.jjlawohio.com/personal-injury/nursing-home-abuse',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/personal-injury/nursing-home-abuse' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Nursing Home Abuse', href: '/personal-injury/nursing-home-abuse' },
];

const faqs = [
  {
    question: 'What constitutes nursing home abuse in Ohio?',
    answer:
      "Under Ohio Revised Code Chapter 3721 and federal nursing home regulations (42 U.S.C. § 1396r, the Nursing Home Reform Act), residents have legally protected rights to safe, adequate care. Abuse includes physical abuse (hitting, improper restraint, rough handling), sexual abuse, emotional or psychological abuse (threats, humiliation, isolation), financial exploitation (theft or misuse of a resident's money or assets), neglect (failing to provide adequate food, hydration, hygiene, medical care or supervision) and abandonment. Any of these can create civil liability for the facility and the staff responsible.",
  },
  {
    question: 'How do I report nursing home abuse in Ohio?',
    answer:
      'There are several channels. The Ohio Department of Health investigates complaints against licensed nursing facilities; you can file online at odh.ohio.gov or call its complaint hotline. The Ohio Long-Term Care Ombudsman program advocates for residents and investigates complaints at no cost. Under ORC 5101.61, certain professionals, including healthcare workers, are mandatory reporters of suspected adult abuse and neglect. Report to local law enforcement too if the abuse involves physical assault or financial crimes. Write down everything (injuries, dates, names and what you saw) before you report; it strengthens any later civil claim.',
  },
  {
    question: 'What are the signs of nursing home neglect I should watch for?',
    answer:
      'Watch for unexplained injuries (bruises, cuts, fractures), pressure ulcers (bedsores) that are getting worse or going untreated, sudden weight loss or dehydration, poor hygiene and unsanitary conditions, unchanged incontinence garments, withdrawal or sudden personality changes, fear around certain staff members, missing belongings or unexplained financial transactions, and missed prescribed medications. Any one sign is worth investigating. Several together are a serious red flag.',
  },
  {
    question: 'What are pressure ulcers and do they indicate neglect?',
    answer:
      'Pressure ulcers (bedsores) form when sustained pressure cuts off blood supply to the skin and tissue underneath, most often over bony areas like the heels, tailbone and hips. They are staged from 1 (redness of intact skin) through 4 (full-thickness tissue loss exposing muscle or bone). Stage 3 and Stage 4 ulcers are widely recognized as signs of inadequate care. With repositioning every 2 hours, adequate nutrition and hydration, and skin monitoring, most are preventable. When a bedridden or chair-bound resident develops a Stage 3 or 4 ulcer, it strongly suggests staff failed to follow basic care protocols, which is negligence.',
  },
  {
    question: "What is Ohio's statute of limitations for nursing home abuse claims?",
    answer:
      "Under Ohio Revised Code 2305.10, personal injury claims, including nursing home abuse and neglect, generally must be filed within 2 years of the date of the injury. If the claim involves medical diagnosis, treatment or care decisions, it may be treated as medical malpractice under ORC 2305.113, with a 1-year statute of limitations (and a 4-year outer limit). If the resident died from the abuse or neglect, a wrongful death claim must be filed within 2 years under ORC Chapter 2125. The right deadline depends on the facts, so talk to an attorney as soon as you discover possible abuse.",
  },
  {
    question: 'What damages can I recover in a nursing home abuse case?',
    answer:
      "Damages include medical expenses for treating the injuries (wound care, hospitalization, surgery), future care costs if treatment continues, the resident's pain and suffering, emotional distress and loss of enjoyment of life. Where the conduct was especially egregious, such as deliberate physical abuse or gross understaffing the facility knew about and ignored, punitive damages may be available. In wrongful death cases under ORC Chapter 2125, survivors can recover for the resident's conscious pain and suffering, funeral expenses, and the loss of the decedent's companionship and support.",
  },
  {
    question: "Can I sue a nursing home for a family member's injuries?",
    answer:
      "Yes. Family members can sue on behalf of a resident who lacks capacity to sue, as legal guardian, under a power of attorney, or as personal representative of the estate if the resident has died. Ohio law lets both the resident and certain family members bring claims for abuse and neglect. Facilities are liable for their staff's actions under respondeat superior, and directly liable for negligent hiring, supervision and retention and for systemic failures such as chronic understaffing. The federal Nursing Home Reform Act sets a baseline of residents' rights that Ohio facilities must meet.",
  },
  {
    question: 'How is nursing home negligence proven?',
    answer:
      "You must show that the facility owed the resident a duty of care (established by admission), that it breached that duty by falling below the standard of care, and that the breach caused the injuries. Evidence usually includes the resident's medical records and care plans, nursing notes and incident reports, staffing records (which can show dangerous understaffing), Ohio Department of Health inspection and survey reports, testimony from current or former staff, and expert testimony from geriatric care specialists or nursing home administrators on industry standards. Facility records often show patterns of neglect, so get them and preserve them early.",
  },
];

const RELATED = [
  { href: '/personal-injury/medical-malpractice', title: 'Medical malpractice', subtitle: 'Healthcare provider negligence claims' },
  { href: '/personal-injury/wrongful-death', title: 'Wrongful death', subtitle: 'Claims against negligent parties for fatal injuries' },
  { href: '/personal-injury/catastrophic-injuries', title: 'Catastrophic injuries', subtitle: 'Severe and life-altering injury claims' },
  { href: '/personal-injury/premises-liability', title: 'Premises liability', subtitle: 'Property owner negligence and unsafe conditions' },
];

export default function NursingHomeAbusePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Nursing home abuse and neglect claims in Ohio"
        description="Ohio nursing home residents are protected by ORC Chapter 3721 and the federal Nursing Home Reform Act. Most injury claims must be filed within 2 years, and some within 1."
      />

      <KeyFacts
        facts={[
          { figure: '2 years', label: 'to file most abuse and neglect claims (ORC 2305.10)' },
          { figure: '1 year', label: 'if the claim is treated as medical malpractice (ORC 2305.113), with a 4-year outer limit' },
          { figure: 'Stage 3 or 4', label: 'pressure ulcers widely recognized as signs of inadequate care' },
          { figure: 'Every 2 hours', label: 'repositioning that makes most pressure ulcers preventable' },
        ]}
      />

      <Section
        title="The law that protects residents"
        tone="ice"
        intro={
          <p>
            Ohio nursing home residents are protected by state law, mainly Ohio Revised Code Chapter 3721, and by the federal Nursing
            Home Reform Act (42 U.S.C. § 1396r).
          </p>
        }
      >
        <p>
          These laws set minimum standards of care, give residents a bill of rights, and require facilities to keep adequate staffing,
          provide appropriate medical care and protect residents from harm. When facilities fall short, the results can include severe
          infections, fractures, malnutrition, dehydration, bedsores, psychological trauma and death.
        </p>
        <p>
          Under ORC 5101.61, healthcare workers and certain other professionals are mandatory reporters of suspected adult abuse and
          neglect.
        </p>
      </Section>

      <Section title="Forms of abuse and neglect">
        <PointGrid
          points={[
            { title: 'Physical abuse', body: 'Hitting, slapping, improper physical restraint and rough handling.' },
            { title: 'Sexual abuse', body: 'Any non-consensual sexual contact.' },
            { title: 'Emotional abuse', body: 'Threats, intimidation, humiliation and isolation.' },
            { title: 'Financial exploitation', body: "Theft or unauthorized use of a resident's money, credit cards or property." },
            {
              title: 'Neglect',
              body: 'Failing to provide adequate nutrition, hydration, hygiene, wound care, medication or supervision. Perhaps the most common form.',
            },
            { title: 'Abandonment', body: 'Discharging a resident without adequate notice or without arranging other care.' },
          ]}
        />
      </Section>

      <Section title="Deadlines and damages" tone="ice">
        <FactTable
          title="Filing deadlines"
          rows={[
            { label: 'Personal injury', value: '2 years from the date of the injury, under ORC 2305.10.' },
            {
              label: 'Medical malpractice',
              value: 'Claims involving medical diagnosis, treatment or care decisions may fall under ORC 2305.113: 1 year, with a 4-year outer limit.',
            },
            { label: 'Wrongful death', value: '2 years from the date of death, under ORC Chapter 2125.' },
          ]}
          note="A complaint to the Ohio Long-Term Care Ombudsman does not toll the statute of limitations for a civil claim."
        />
        <FactTable
          title="What you can recover"
          rows={[
            {
              label: 'Medical and care costs',
              value: 'Treatment for the injuries (wound care, hospitalization, surgery) and future care costs if treatment continues.',
            },
            { label: 'Non-economic', value: "The resident's pain and suffering, emotional distress and loss of enjoyment of life." },
            {
              label: 'Punitive',
              value: 'May be available for egregious conduct, such as deliberate physical abuse or gross understaffing the facility knew about.',
            },
            {
              label: 'Wrongful death',
              value: "The resident's conscious pain and suffering, funeral expenses, and the loss of companionship and support.",
            },
          ]}
        />
      </Section>

      <Section title="Pressure ulcers and understaffing">
        <p>
          Stage 3 or Stage 4 pressure ulcers (bedsores) are one of the clearest signs of neglect. Ulcers are staged from 1 (skin
          redness) through 4 (full-thickness tissue loss exposing muscle, tendon or bone). Advanced bedsores are largely preventable with
          basic nursing care: regular repositioning, adequate nutrition and hydration, and routine skin checks. They can cause severe
          pain, sepsis, osteomyelitis (bone infection) and death.
        </p>
        <p>
          Understaffing is a root cause of neglect. When a facility keeps too few staff to cut costs, residents go unattended for long
          periods: unable to call for help, not repositioned, not given medications on schedule. Ohio Department of Health inspection
          and survey reports often document staffing violations and care deficiencies, are publicly available, and can be strong
          evidence. Facilities are directly liable for negligent staffing decisions, not only for the acts of their employees.
        </p>
      </Section>

      <Section title="How a nursing home claim moves forward" tone="ice">
        <Steps
          steps={[
            { title: 'Document what you see', body: 'Injuries, dates, names and what you observed, before you report.' },
            {
              title: 'Report it',
              body: 'To the Ohio Department of Health, the Long-Term Care Ombudsman, and law enforcement if there was physical assault or a financial crime.',
            },
            {
              title: 'Preserve the records',
              body: 'Medical records, care plans, nursing notes, incident reports, staffing logs and state inspection reports, obtained early.',
            },
            {
              title: 'Prove duty, breach and causation',
              body: 'With the records, staff testimony and experts in geriatric care or nursing home administration.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a nursing home claim">
        <PointGrid
          points={[
            {
              title: 'Investigates the facility',
              body: 'Reviews medical records, staffing logs, state inspection reports and care plans.',
            },
            {
              title: 'Neglect cases',
              body: 'Stage 3 and 4 bedsores from failure to reposition, malnutrition and dehydration, falls from inadequate supervision or defective equipment, and systemic neglect from chronic understaffing.',
            },
            { title: 'Abuse and exploitation', body: 'Physical abuse by nursing home staff, and financial exploitation and theft of resident assets.' },
            {
              title: 'Medication errors and deaths',
              body: 'Wrong medication, missed doses and dangerous overdoses, and wrongful death from nursing home negligence (ORC Chapter 2125).',
            },
          ]}
        />
        <Callout title="Fees">Jwayyed Law LLC represents nursing home abuse victims and their families on a contingency fee basis.</Callout>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>. The firm also
          handles <Link href="/personal-injury/medical-malpractice">medical malpractice claims</Link>,{' '}
          <Link href="/personal-injury/catastrophic-injuries">catastrophic injury cases</Link> and other{' '}
          <Link href="/personal-injury">personal injury matters</Link> across Ohio.
        </p>
      </Section>

      <Section title="Related injury claims" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <LocationsWeServe title="Personal Injury" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
