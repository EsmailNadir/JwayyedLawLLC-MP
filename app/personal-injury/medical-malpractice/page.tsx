import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Medical Malpractice Lawyer',
  description:
    'Ohio medical malpractice claims under ORC 2305.113: the 1-year deadline, the affidavit of merit, damage caps and what you must prove.',
  keywords: ['medical malpractice lawyer Columbus OH', 'medical malpractice attorney Ohio', 'medical negligence lawyer', 'Franklin County medical malpractice attorney', 'medical malpractice lawsuit Ohio', 'common medical malpractice claims', 'ORC 2305.113 malpractice'],
  openGraph: {
    title: 'Ohio Medical Malpractice Lawyer | Columbus | Jwayyed Law LLC',
    description: 'Claims for misdiagnosis, surgical errors, birth injuries and other medical negligence in Ohio.',
    url: 'https://www.jjlawohio.com/personal-injury/medical-malpractice',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/personal-injury/medical-malpractice' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Medical Malpractice', href: '/personal-injury/medical-malpractice' },
];

const faqs = [
  {
    question: 'What is medical malpractice in Ohio?',
    answer:
      'Medical malpractice happens when a healthcare provider (a physician, surgeon, nurse, hospital or other licensed professional) fails to meet the accepted standard of care and that failure injures or kills a patient. The standard of care is what a reasonably competent provider in the same specialty would have done in the same circumstances. Common forms include misdiagnosis or delayed diagnosis, surgical errors, medication errors, birth injuries, anesthesia errors and failure to obtain informed consent. A bad outcome alone is not malpractice: you must show the provider fell below the standard of care and that this caused your harm.',
  },
  {
    question: "What is Ohio's statute of limitations for medical malpractice?",
    answer:
      'Under Ohio Revised Code 2305.113, you generally have 1 year from the date the cause of action accrued, usually when you discovered or should have discovered the injury, to file. An absolute 4-year outer limit (statute of repose) runs from the date of the act or omission, regardless of discovery. If you send the defendant written notice of your intent to sue before the 1-year period runs out, you can get a 180-day extension to file. Exceptions exist for minors and for foreign objects left inside the body. The window is short, so talk to an attorney right away if you suspect malpractice.',
  },
  {
    question: 'What is the affidavit of merit requirement in Ohio medical malpractice cases?',
    answer:
      'Ohio Civil Rule 10(D)(2) requires a medical malpractice complaint to include an affidavit of merit signed by a qualified medical expert. The expert reviews the medical records and attests that the claim has merit, specifically that the named defendant deviated from the standard of care. Without it, the case can be dismissed. The rule exists to screen out frivolous claims, and it means the right expert has to be retained before the complaint is filed.',
  },
  {
    question: "What are Ohio's damage caps for medical malpractice?",
    answer:
      "Under Ohio Revised Code 2323.43, non-economic damages (pain and suffering, emotional distress, loss of consortium) in malpractice cases are capped at the greater of $250,000 or three times the plaintiff's economic damages, up to $350,000 per plaintiff or $500,000 per occurrence. For catastrophic injuries (permanent physical deformity, loss of use of a limb, loss of a bodily organ system, or a permanent functional injury that prevents the plaintiff from independently caring for themselves), the cap rises to $500,000 per plaintiff or $1,000,000 per occurrence. Economic damages (medical bills, lost wages, future care costs) are not capped.",
  },
  {
    question: 'What types of medical errors constitute malpractice?',
    answer:
      'Common claims in Ohio include misdiagnosis or delayed diagnosis of cancer, heart attack, stroke or infection; surgical errors such as wrong-site surgery, retained surgical instruments ("never events") or organ perforation; medication errors including wrong drug, wrong dose or dangerous interactions; birth injuries such as cerebral palsy or Erb\'s palsy from improper delivery; anesthesia errors causing brain damage or death; and failure to obtain informed consent. Hospital systems may be liable for employed physicians under respondeat superior, while independent contractor physicians are individually liable.',
  },
  {
    question: 'How do you prove medical malpractice in Ohio?',
    answer:
      'You must establish four elements: (1) the defendant owed you a duty of care (a doctor-patient relationship existed); (2) the defendant breached it by deviating from the standard of care; (3) the breach caused your injury; and (4) you suffered damages. Because medical standards are technical, Ohio requires expert testimony on the standard of care and breach. You will also need your medical records, which you have a right to access under HIPAA. A strong case needs a full records review, expert consultation and often independent medical examinations.',
  },
  {
    question: 'What is the standard of care in Ohio medical malpractice?',
    answer:
      'It is the level of care, skill and treatment a reasonably competent healthcare professional with similar training and experience would provide in the same or similar circumstances. It is not perfection, because medicine involves judgment and uncertainty. The standard is set within the specialty: a cardiologist is held to the standard of a reasonably competent cardiologist, not a general practitioner. Expert witnesses, usually physicians in the same specialty, testify about what the standard required and how the defendant fell short. Ohio courts apply a statewide standard of care rather than a local community standard.',
  },
  {
    question: 'How long does a medical malpractice case take in Ohio?',
    answer:
      "Malpractice cases are among the longest personal injury cases. They involve getting and reviewing extensive medical records, retaining experts, filing the complaint with the affidavit of merit, discovery (depositions of experts and treating physicians) and often long pretrial motions. Most take two to four years from filing to settlement or trial, and longer when causation is disputed or the medicine is complex. With Ohio's 1-year statute of limitations, talk to an attorney early.",
  },
];

const RELATED = [
  { href: '/personal-injury/nursing-home-abuse', title: 'Nursing home abuse', subtitle: 'Elder abuse and neglect in care facilities' },
  { href: '/personal-injury/catastrophic-injuries', title: 'Catastrophic injuries', subtitle: 'Severe and life-altering injury claims' },
  { href: '/personal-injury/wrongful-death', title: 'Wrongful death', subtitle: 'Claims against negligent parties for fatal injuries' },
  { href: '/personal-injury/car-accidents', title: 'Car accidents', subtitle: 'Motor vehicle collision claims throughout Ohio' },
];

export default function MedicalMalpracticePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Medical malpractice claims in Ohio"
        description="Ohio gives you 1 year to file most medical malpractice claims under ORC 2305.113, and the complaint must include an expert's affidavit of merit."
      />

      <KeyFacts
        facts={[
          { figure: '1 year', label: 'to file, from when the claim accrued (ORC 2305.113)' },
          { figure: '4 years', label: 'absolute outer limit from the act or omission' },
          { figure: '180 days', label: 'extension available by sending notice of intent to sue in time' },
          { figure: '$350,000', label: 'standard per-plaintiff cap on non-economic damages (ORC 2323.43)' },
        ]}
      />

      <Section
        title="What counts as medical malpractice"
        intro={
          <p>
            Malpractice is when a physician, surgeon, hospital or other licensed healthcare provider deviates from the accepted standard
            of care and that deviation harms a patient.
          </p>
        }
      >
        <p>
          ORC 2305.113 is Ohio&rsquo;s main malpractice statute and governs the statute of limitations and notice requirements. Ohio
          also has procedural rules, including the affidavit of merit under Ohio Civil Rule 10(D)(2), that make malpractice one of the
          most technically demanding areas of personal injury law.
        </p>
        <PointGrid
          points={[
            { title: 'Diagnosis', body: 'Misdiagnosis and delayed diagnosis (cancer, heart attack, stroke, infection), and failure to order appropriate tests.' },
            { title: 'Surgery', body: 'Surgical errors and "never events" such as wrong-site surgery and retained instruments.' },
            { title: 'Medication', body: 'Wrong drug, wrong dose and dangerous interactions.' },
            { title: 'Birth injuries', body: "Cerebral palsy, Erb's palsy and hypoxic-ischemic encephalopathy from negligent delivery." },
            { title: 'Anesthesia', body: 'Errors causing brain injury, cardiac arrest or death.' },
            { title: 'Consent and emergencies', body: 'Failure to obtain informed consent, and emergency room errors and delayed treatment.' },
          ]}
        />
      </Section>

      <Section title="Deadlines and damage caps" tone="ice">
        <FactTable
          title="Filing deadlines (ORC 2305.113)"
          rows={[
            { label: 'Statute of limitations', value: '1 year from when the cause of action accrued, usually when you discovered or should have discovered the injury.' },
            { label: 'Statute of repose', value: 'An absolute 4-year outer limit from the date of the act or omission.' },
            { label: 'Notice of intent', value: 'Written notice sent before the 1-year period expires can extend the time to file by 180 days.' },
            { label: 'Exceptions', value: 'Special rules for minors and "foreign object" cases, such as a surgical sponge left inside the body.' },
          ]}
          note="Missing these deadlines permanently bars the claim."
        />
        <FactTable
          title="Non-economic damage caps (ORC 2323.43)"
          rows={[
            {
              label: 'Most claims',
              value: "The greater of $250,000 or three times the plaintiff's economic losses, up to $350,000 per plaintiff or $500,000 per occurrence.",
            },
            {
              label: 'Catastrophic injuries',
              value:
                '$500,000 per plaintiff or $1,000,000 per occurrence, for permanent physical deformity, loss of use of a limb, loss of a bodily organ system, or a permanent injury preventing self-care.',
            },
            { label: 'Economic damages', value: 'Not capped. Past and future medical bills, lost income and care costs are fully recoverable.' },
          ]}
        />
      </Section>

      <Section title="What you have to prove">
        <PointGrid
          points={[
            { title: 'A duty of care', body: 'A doctor-patient relationship existed.' },
            { title: 'A breach', body: 'The provider deviated from the standard of a reasonably competent provider in the same specialty.' },
            { title: 'Causation', body: 'The breach directly caused your injury.' },
            { title: 'Damages', body: 'You suffered measurable damages as a result.' },
          ]}
        />
        <p>
          Ohio courts require expert testimony on the standard of care and its breach, and the experts must be licensed healthcare
          professionals in the same specialty as the defendant. Finding and retaining them takes time, and the 1-year deadline leaves
          little margin.
        </p>
      </Section>

      <Section title="How a medical malpractice lawsuit moves forward" tone="ice">
        <Steps
          steps={[
            { title: 'Get the records', body: 'Obtain and review all of your medical records. You have a right to them under HIPAA.' },
            { title: 'Expert review', body: 'A qualified expert in the same specialty reviews the records.' },
            { title: 'Name the right defendants', body: 'Hospital credentialing records and employment agreements show who is liable: hospitals for employed physicians under respondeat superior, independent contractor physicians individually.' },
            { title: 'File with an affidavit of merit', body: 'The complaint must include the expert affidavit required by Civil Rule 10(D)(2).' },
            { title: 'Discovery and resolution', body: 'Depositions of experts and treating physicians, pretrial motions, then settlement or trial. Most cases take two to four years from filing.' },
          ]}
        />
      </Section>

      <Section title="What a medical malpractice lawyer does on your claim">
        <PointGrid
          points={[
            { title: 'Works with medical experts', body: 'Qualified experts to review the care and support the affidavit of merit.' },
            { title: 'Analyzes the records', body: 'Obtains and analyzes all relevant medical records.' },
            { title: 'Meets the procedural rules', body: "Ohio's deadlines, notice requirements and filing rules." },
            { title: 'Pursues full compensation', body: 'Every category of damages available under Ohio law.' },
          ]}
        />
        <Callout title="Fees">Jwayyed Law LLC handles malpractice cases on a contingency fee basis.</Callout>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>. The firm also
          handles <Link href="/personal-injury/catastrophic-injuries">catastrophic injury claims</Link>,{' '}
          <Link href="/personal-injury/nursing-home-abuse">nursing home abuse and neglect</Link> and other{' '}
          <Link href="/personal-injury">personal injury matters</Link> throughout Ohio.
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
