import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Slip and Fall Lawyer in Ohio',
  description:
    'Slip and fall claims in Ohio: what you must prove about the hazard, the open and obvious defense, the 2-year deadline and what you can recover.',
  keywords: ['slip and fall lawyer Columbus OH', 'slip and fall attorney Ohio', 'premises liability lawyer', 'Franklin County slip and fall attorney'],
  openGraph: {
    title: 'Slip and Fall Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Slip and fall injury claims under Ohio premises liability law.',
    url: 'https://www.jjlawohio.com/personal-injury/slip-and-fall',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
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
    answer:
      "Premises liability in Ohio (current as of 2026) is the duty property owners and occupiers owe visitors to keep conditions safe and to warn of known dangers. Owners and occupiers may be liable for injuries caused by dangerous conditions on their property, including slip and fall hazards, inadequate lighting and broken stairs.",
  },
  {
    question: 'What compensation can I recover from a slip and fall accident?',
    answer:
      'Compensation can include economic damages (medical expenses, lost wages, property damage, future medical costs and loss of earning capacity), non-economic damages (pain and suffering, emotional distress, loss of enjoyment and loss of consortium) and possibly punitive damages for egregious conduct. The amount depends on how severe the injury is, how it affects your life, and what insurance coverage or assets are available.',
  },
  {
    question: 'How do I prove fault in a slip and fall case?',
    answer:
      'You have to show that the property owner or occupier knew or should have known about the dangerous condition and failed to fix it or warn about it. Evidence can include photos of the hazard, witness statements, maintenance records, incident reports and expert testimony.',
  },
  {
    question: 'What is the statute of limitations for slip and fall claims?',
    answer:
      'Under Ohio Revised Code 2305.10, you generally have 2 years from the date of injury to bring a slip and fall injury claim. Missing the deadline bars recovery, so talk to an attorney quickly.',
  },
  {
    question: 'Do I need a slip and fall attorney?',
    answer:
      'You can handle a claim yourself. An attorney knows premises liability law and how insurers handle these claims, and takes on the documentation, the communication with the insurance companies, the settlement negotiation and, if needed, the court case.',
  },
  {
    question: 'What is the "open and obvious" doctrine in Ohio premises liability cases and how can it be overcome?',
    answer:
      'Under Ohio law, a property owner generally has no duty to warn of or fix a hazard that is "open and obvious," meaning a reasonable person using ordinary care would readily see and appreciate it. Courts have held that open and obvious conditions break the chain of the owner\'s duty. The defense can be overcome if the owner should have expected visitors to be distracted or to miss the hazard despite how obvious it was (the "attendant circumstances" exception), or if the hazard was not truly open and obvious under the conditions at the time. An attorney can look at the facts of your fall and build the argument.',
  },
  {
    question: 'What evidence should I collect after a slip and fall accident?',
    answer:
      'As soon as you can: photograph the exact hazard (wet floor, uneven surface, broken step, poor lighting) and the area around it before it is fixed; report the incident to the owner or manager and ask for a copy of the incident report; get the names and contact details of witnesses; keep the clothing and footwear you were wearing; get medical treatment promptly so your injuries are documented; and save all medical records, bills and receipts. An attorney can send a spoliation letter demanding that the owner preserve surveillance video and maintenance logs before they are lost.',
  },
  {
    question: 'What is the difference between invitee, licensee and trespasser status in Ohio premises liability?',
    answer:
      "Ohio recognizes three kinds of entrants, and each is owed a different duty of care. An invitee is on the property for the owner's commercial benefit (a store customer, for example), and the owner owes the highest duty: reasonable care to inspect, maintain and warn. A licensee enters with permission but for their own purposes (a social guest, for example), and the owner must warn of known hidden dangers but need not inspect. A trespasser enters without permission, and the owner generally owes only a duty not to willfully or wantonly injure them, though ORC 2305.321 gives child trespassers special protection under the attractive nuisance doctrine. Your status at the time of the fall is one of the first things to establish.",
  },
];

const RELATED = [
  { href: '/personal-injury/premises-liability', title: 'Premises liability', subtitle: 'Property owner negligence and unsafe conditions' },
  { href: '/personal-injury/workplace-injuries', title: 'Workplace injuries', subtitle: "On-the-job injuries and workers' compensation" },
  { href: '/personal-injury/car-accidents', title: 'Car accidents', subtitle: 'Motor vehicle collision claims throughout Ohio' },
  { href: '/personal-injury/dog-bites', title: 'Dog bites', subtitle: 'Animal attack liability under Ohio law' },
];

export default function SlipAndFallPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Slip and fall claims in Ohio"
        description="To recover after a fall, you have to show the property owner knew or should have known about the hazard. You generally have 2 years from the date of injury to file."
      />

      <Section
        title="What a slip and fall claim covers"
        intro={
          <p>
            Ohio premises liability law requires property owners and occupiers to keep conditions safe for visitors and to warn of
            known dangers. Injury claims are brought under Ohio Revised Code 2305.10 (current as of 2026).
          </p>
        }
      >
        <p>
          Falls happen on wet floors, uneven surfaces, broken stairs and in poorly lit areas. They can cause broken bones, head
          injuries, spinal cord injuries and other injuries that need extensive medical treatment.
        </p>
        <p>Insurance companies often minimize these claims, deny liability, or argue that you were partly at fault.</p>
      </Section>

      <Section title="Deadlines and damages" tone="ice">
        <FactTable
          title="Filing deadline"
          rows={[{ label: 'Injury claims', value: '2 years from the date of injury, under ORC 2305.10. Missing it bars recovery.' }]}
        />
        <FactTable
          title="What you can recover"
          rows={[
            {
              label: 'Economic',
              value:
                'Medical expenses, past and future (surgeries, rehabilitation, therapy, medications); lost wages and loss of earning capacity; property damage (damaged clothing or personal items); home modifications for disabilities; and other financial losses tied to the fall.',
            },
            {
              label: 'Non-economic',
              value:
                'Pain and suffering, emotional distress, loss of enjoyment of life, loss of consortium (spousal relationship), disfigurement and scarring, and mental anguish.',
            },
            {
              label: 'Punitive',
              value:
                'For egregious conduct such as intentionally failing to fix a known hazard, or gross negligence. Rare, and requires clear and convincing evidence of malicious or reckless behavior.',
            },
          ]}
        />
      </Section>

      <Section title="What you have to prove">
        <PointGrid
          points={[
            {
              title: 'The owner knew or should have known',
              body: 'The owner or occupier knew, or should have known, about the dangerous condition and failed to fix it or warn about it.',
            },
            {
              title: 'Your status on the property',
              body: 'Invitees are owed reasonable care to inspect, maintain and warn. Licensees are owed a warning of known hidden dangers. Trespassers are generally owed only a duty not to be willfully or wantonly injured.',
            },
            {
              title: 'Beating the open and obvious defense',
              body: 'Owners generally have no duty over hazards a reasonable person would readily see. The "attendant circumstances" exception, or proof that the hazard was not truly obvious at the time, can overcome it.',
            },
            {
              title: 'The evidence',
              body: 'Photos of the hazard, witness statements, maintenance records, incident reports, expert testimony and evidence of similar prior incidents.',
            },
          ]}
        />
      </Section>

      <Section title="How a slip and fall claim moves forward" tone="ice">
        <Steps
          steps={[
            {
              title: 'Investigation and documentation',
              body: 'Photos of the hazard, the surrounding area, the lighting and your injuries; witness contacts; incident reports; and maintenance records if available.',
            },
            { title: 'Proving premises liability', body: 'Building the evidence that the owner knew or should have known of the condition.' },
            {
              title: 'Insurance negotiation',
              body: 'Most slip and fall claims resolve through negotiation. Preparing for litigation strengthens the negotiating position.',
            },
            {
              title: 'Litigation and trial',
              body: 'If talks fail: a lawsuit, discovery (exchanging evidence), depositions, expert testimony including safety experts, and possibly trial. Most cases settle before trial.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a slip and fall claim">
        <PointGrid
          points={[
            { title: 'Investigates', body: 'The hazard, the surrounding area, lighting, your injuries, witness statements, incident reports and maintenance records.' },
            { title: 'Analyzes liability', body: 'Determines fault, identifies every party that may be liable and establishes what the owner knew.' },
            { title: 'Coordinates medical documentation', body: 'Works with your providers to document every injury and establish causation and prognosis.' },
            { title: 'Handles the insurers', body: 'All communication and settlement negotiation with the insurance companies.' },
            { title: 'Brings in experts', body: 'Safety, medical and economic experts to establish causation, damages and liability.' },
            { title: 'Litigates when needed', body: 'Files suit, conducts discovery, takes depositions and represents you in court if settlement talks fail.' },
          ]}
        />
        <p>
          If you were hurt in a fall anywhere in Ohio, <Link href="/contact">contact Jwayyed Law LLC</Link> to schedule a
          consultation. See the firm&rsquo;s <Link href="/personal-injury">personal injury practice</Link>, or read about{' '}
          <Link href="/our-law-firm/blog/ohio-slip-and-fall-laws-property-owners">Ohio slip and fall laws</Link> and{' '}
          <Link href="/our-law-firm/blog/slipped-fell-at-store-can-i-sue">whether you can sue after slipping at a store</Link>.
        </p>
      </Section>

      <Section title="Related injury claims" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
