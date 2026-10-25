import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Wrongful Death Lawyer in Ohio',
  description:
    'Ohio wrongful death claims under ORC Chapter 2125: who files, the 2-year deadline from the date of death, and the damages families can recover.',
  keywords: ['wrongful death lawyer Columbus OH', 'wrongful death attorney Ohio', 'death claim lawyer', 'Franklin County wrongful death attorney'],
  openGraph: {
    title: 'Wrongful Death Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Wrongful death claims for families throughout Ohio.',
    url: 'https://www.jjlawohio.com/personal-injury/wrongful-death',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
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
    answer:
      "Under Ohio Revised Code Chapter 2125 (current as of 2026), a wrongful death is a death caused by another person's negligence, recklessness or intentional misconduct. Claims can arise from car accidents, truck accidents, medical malpractice, workplace accidents, nursing home abuse, defective products and other incidents. The claim is filed by the personal representative of the deceased person's estate on behalf of the surviving family.",
  },
  {
    question: 'Who can file a wrongful death claim in Ohio?',
    answer:
      "Under Ohio Revised Code 2125.02, the claim must be filed by the personal representative of the deceased person's estate, on behalf of surviving family members including spouses, children, parents and other dependents. The personal representative is usually named in the will or appointed by the probate court. An attorney can work out who can file and take you through the process.",
  },
  {
    question: 'What compensation can I recover from a wrongful death claim?',
    answer:
      "Compensation can include economic damages (medical expenses, funeral expenses, lost wages, loss of future earnings and loss of services), non-economic damages (loss of consortium, companionship and guidance, and mental anguish) and possibly punitive damages for egregious conduct. The amount depends on the deceased person's earning capacity, age and health, and on the effect of the death on the surviving family.",
  },
  {
    question: 'What is the statute of limitations for wrongful death claims?',
    answer:
      'Under Ohio Revised Code 2125.02, a wrongful death claim generally must be filed within 2 years from the date of death. Missing the deadline bars recovery, so talk to an attorney quickly. The deadline may be tolled in some circumstances.',
  },
  {
    question: 'Do I need a wrongful death attorney?',
    answer:
      'Wrongful death cases are complex. An attorney who knows wrongful death law can file the claim for the estate, handle the litigation and pursue full compensation for the surviving family. Most attorneys work on a contingency fee basis and offer consultations.',
  },
  {
    question: 'Who can bring a wrongful death claim in Ohio?',
    answer:
      "Under ORC 2125.02, the claim must be brought by the personal representative of the deceased person's estate, not directly by family members. The personal representative is usually named in the will. If there is no will, or no personal representative has been appointed, the probate court appoints one. The claim is brought for the surviving beneficiaries entitled to share in the recovery, which under ORC 2125.02 includes the surviving spouse, children and parents. Other next of kin or dependents may also qualify. An attorney can help the family open the estate in probate and file the claim within the deadline.",
  },
  {
    question: 'What is the statute of limitations for wrongful death claims in Ohio?',
    answer:
      "Under ORC 2125.02, the deadline is 2 years from the date of the decedent's death, not from the date of the accident or injury. If the personal representative does not file within 2 years of the death, the claim is permanently barred and the family loses the right to compensation. Unlike some personal injury statutes, there is generally no discovery rule extension for wrongful death. Opening an estate and investigating take time, so contact an attorney as soon as you can.",
  },
  {
    question: 'What damages are available in an Ohio wrongful death claim?',
    answer:
      "ORC 2125.02 sets out the recoverable damages: funeral and burial expenses; medical expenses incurred before death; lost support (the economic support the deceased would have provided to the beneficiaries); loss of services (household, childcare and other services the deceased provided); loss of society, meaning the loss of the deceased's companionship, care, assistance, attention, protection, advice, guidance and education to each beneficiary; and the mental anguish of the surviving beneficiaries. Lost support and lost services are calculated from the deceased's earning history, life expectancy and the family's needs. The jury decides non-economic damages such as loss of society and mental anguish from the evidence. An attorney can retain economic and life-care experts to document every category of loss.",
  },
];

const RELATED = [
  { href: '/personal-injury/catastrophic-injuries', title: 'Catastrophic injuries', subtitle: 'Severe and life-altering injury claims' },
  { href: '/personal-injury/car-accidents', title: 'Car accidents', subtitle: 'Motor vehicle collision claims throughout Ohio' },
  { href: '/personal-injury/truck-accidents', title: 'Truck accidents', subtitle: 'Commercial vehicle and semi-truck collision claims' },
  { href: '/personal-injury/medical-malpractice', title: 'Medical malpractice', subtitle: 'Healthcare provider negligence claims' },
];

export default function WrongfulDeathPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Wrongful death claims in Ohio"
        description="An Ohio wrongful death claim is filed by the personal representative of the estate, and it generally must be filed within 2 years of the date of death."
      />

      <KeyFacts
        facts={[
          { figure: '2 years', label: 'to file, counted from the date of death (ORC 2125.02)' },
          { figure: 'Chapter 2125', label: 'the Ohio Revised Code chapter that governs wrongful death' },
          { figure: 'Probate court', label: 'appoints the personal representative who files, if the will names none' },
        ]}
      />

      <Section
        title="What a wrongful death claim is"
        intro={
          <p>
            A wrongful death claim arises when someone&rsquo;s death is caused by another person&rsquo;s negligence, recklessness or
            intentional misconduct. Ohio Revised Code Chapter 2125 governs these claims.
          </p>
        }
      >
        <p>
          These claims come from car accidents, truck accidents, medical malpractice, workplace accidents, nursing home abuse,
          defective products and other incidents. The investigation may turn up several responsible parties, including drivers,
          employers, manufacturers or government entities.
        </p>
        <p>
          Family members do not file the claim themselves. The personal representative of the deceased person&rsquo;s estate files it
          on behalf of the surviving spouse, children, parents and other dependents.
        </p>
      </Section>

      <Section title="Deadlines, who files and damages" tone="ice">
        <FactTable
          title="Deadline and filing (ORC 2125.02)"
          rows={[
            { label: 'Deadline', value: '2 years from the date of death, not from the date of the accident or injury.' },
            { label: 'Discovery rule', value: 'Generally no discovery rule extension. The deadline may be tolled in some circumstances.' },
            {
              label: 'Who files',
              value:
                'The personal representative of the estate, usually named in the will. If there is none, the probate court appoints one.',
            },
            {
              label: 'Beneficiaries',
              value: 'The surviving spouse, children and parents. Other next of kin or dependents may also qualify.',
            },
          ]}
          note="Missing the deadline permanently bars the claim."
        />
        <FactTable
          title="What the family can recover"
          rows={[
            {
              label: 'Economic',
              value:
                "Medical expenses before death; funeral and burial expenses; lost wages from the date of injury to the date of death; loss of future earnings and lost support (based on the deceased's earning capacity, age, health and life expectancy); loss of services (household services, childcare and similar); and other financial losses tied to the death.",
            },
            {
              label: 'Non-economic',
              value:
                'Loss of consortium (spousal relationship), loss of companionship, loss of guidance and support, loss of society and comfort, and mental anguish and emotional distress. The jury decides these from the evidence.',
            },
            {
              label: 'Punitive',
              value:
                'For egregious conduct such as drunk driving, reckless behavior or intentional harm. Rare, and requires clear and convincing evidence of malicious or reckless behavior.',
            },
          ]}
        />
      </Section>

      <Section title="How a wrongful death claim moves forward">
        <Steps
          steps={[
            {
              title: 'Estate administration',
              body: 'The estate is opened and a personal representative is in place to file. If none exists, the probate court appoints one.',
            },
            {
              title: 'Investigation and evidence',
              body: 'Police reports, medical records, accident reports, witness statements and surveillance footage are gathered and preserved to identify every responsible party.',
            },
            {
              title: 'Filing the claim',
              body: 'Within 2 years of the date of death. The complaint names every responsible party, alleges the negligence or misconduct, and seeks damages for the family.',
            },
            {
              title: 'Settlement or trial',
              body: 'Most wrongful death cases settle. Litigation involves discovery (exchanging evidence), depositions, expert testimony and possibly trial.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a wrongful death claim" tone="ice">
        <PointGrid
          points={[
            { title: 'Guides the estate', body: 'Works out who can file, takes you through probate if needed and makes sure the estate is set up to bring the claim.' },
            {
              title: 'Investigates',
              body: 'Police reports, medical records, accident reports, witness statements and surveillance footage, and identifies every party that may be liable.',
            },
            { title: 'Files for the estate', body: 'Brings the claim for the estate and the surviving family, meeting every legal requirement and deadline.' },
            { title: 'Brings in experts', body: 'Medical, accident reconstruction, economic and life-care experts to establish causation, damages and liability.' },
            { title: 'Handles the insurers', body: 'All communication and settlement negotiation with the insurance companies.' },
            { title: 'Litigates', body: 'Discovery, depositions, expert testimony and trial representation if needed.' },
          ]}
        />
        <Callout title="The 2-year deadline runs from the date of death">
          Opening an estate and investigating both take time. Evidence is easier to preserve early.
        </Callout>
        <p>
          If you lost a loved one because of someone else&rsquo;s negligence, <Link href="/contact">contact Jwayyed Law LLC</Link> to
          schedule a consultation. See the firm&rsquo;s <Link href="/personal-injury">personal injury practice</Link> or read about{' '}
          <Link href="/our-law-firm/blog/how-long-sue-after-injury-ohio">Ohio&rsquo;s statute of limitations for injury claims</Link>.
        </p>
      </Section>

      <Section title="Related injury claims">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
