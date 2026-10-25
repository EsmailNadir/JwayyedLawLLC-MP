import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Car Accident Lawyer in Ohio',
  description:
    'Hurt in a car accident in Ohio? The 2-year injury deadline, the fault rule, what you can recover and how claims move from insurance to court.',
  keywords: ['car accident lawyer Columbus OH', 'car accident attorney Ohio', 'automobile accident lawyer', 'Franklin County car accident attorney'],
  openGraph: {
    title: 'Car Accident Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Car accident injury claims in Columbus, Cincinnati, Dayton and throughout Ohio.',
    url: 'https://www.jjlawohio.com/personal-injury/car-accidents',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
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
    answer:
      'Get medical attention right away if you are hurt, call the police to report the accident, photograph the scene, exchange information with the other drivers, collect witness contact details, report the accident to your insurance company, and contact a car accident attorney as soon as possible. Do not admit fault or make statements to insurance adjusters without your attorney present.',
  },
  {
    question: 'What compensation can I recover from a car accident in Ohio?',
    answer:
      'Compensation can include economic damages (medical expenses, lost wages, property damage, future medical costs and loss of earning capacity), non-economic damages (pain and suffering, emotional distress, loss of enjoyment and loss of consortium) and, in rare cases, punitive damages for egregious conduct. The amount depends on how severe the injury is, how it affects your life, and what insurance coverage or assets are available.',
  },
  {
    question: 'What is the statute of limitations for car accident claims in Ohio?',
    answer:
      'Under Ohio Revised Code 2305.10, you generally have 2 years from the date of injury to bring a car accident injury claim. Missing the deadline bars recovery, so talk to an attorney quickly. Property damage claims have a 4-year statute of limitations.',
  },
  {
    question: 'What is comparative negligence in Ohio car accidents?',
    answer:
      'Ohio follows a modified comparative negligence rule under ORC 2315.33 (current as of 2026). If you were partly at fault, your compensation is reduced by your percentage of fault. If your fault exceeds 50%, you cannot recover. At 50% or less, you may recover reduced compensation.',
  },
  {
    question: 'Do I need a car accident attorney for my claim?',
    answer:
      'You can handle a claim yourself. An attorney handles the documentation, communicates with the insurance companies, negotiates the settlement and represents you in court if needed, and knows the legal requirements and how insurers handle claims. Most personal injury attorneys work on a contingency fee basis.',
  },
  {
    question: 'What is the deadline to file a car accident lawsuit in Ohio?',
    answer:
      'Under ORC 2305.10, you generally have 2 years from the date of the accident to file a personal injury lawsuit. Miss it and your case will almost certainly be dismissed, and the right to compensation lost for good. A few narrow exceptions can extend the deadline, for example when the injured person is a minor. Property damage claims carry a 4-year statute of limitations. Evidence fades and witnesses become unavailable, so act early.',
  },
  {
    question: 'How does uninsured motorist coverage work after an Ohio car accident?',
    answer:
      'Under ORC 3937.18, Ohio insurers must offer uninsured motorist (UM) and underinsured motorist (UIM) coverage with every auto policy, though you can reject it in writing. If the at-fault driver has no insurance, or not enough to cover your injuries, you may file a UM/UIM claim against your own policy. It can pay for medical expenses, lost wages, and pain and suffering. An attorney can review your policy and find every source of coverage.',
  },
  {
    question: "Should I accept the insurance company's first settlement offer after a car accident?",
    answer:
      'In almost all cases, no. Early offers usually come before you finish treatment and before the full extent of your injuries, including long-term or permanent effects, is known. Accepting a low offer releases the insurer from all future liability, even if your condition gets worse. An attorney can judge whether an offer covers all your economic and non-economic losses, negotiate for more, and advise you on when to settle and when to go to litigation.',
  },
];

const RELATED = [
  { href: '/personal-injury/slip-and-fall', title: 'Slip and fall injuries', subtitle: 'Premises liability claims for unsafe conditions' },
  { href: '/personal-injury/truck-accidents', title: 'Truck accidents', subtitle: 'Commercial vehicle and semi-truck collision claims' },
  { href: '/personal-injury/motorcycle-accidents', title: 'Motorcycle accidents', subtitle: 'Claims for injured motorcyclists across Ohio' },
  { href: '/personal-injury/pedestrian-accidents', title: 'Pedestrian accidents', subtitle: 'Claims for pedestrians struck by vehicles' },
];

export default function CarAccidentsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Car accident claims in Ohio"
        description="You generally have 2 years from the date of injury to bring a car accident injury claim in Ohio, and 4 years for property damage. Insurers often make low offers before you know the full extent of your injuries."
      />

      <KeyFacts
        facts={[
          { figure: '2 years', label: 'to file an injury claim, from the date of injury (ORC 2305.10)' },
          { figure: '4 years', label: 'to file a property damage claim' },
          { figure: '50%', label: 'fault above this bars recovery (ORC 2315.33)' },
        ]}
      />

      <Section
        title="What a car accident claim covers"
        intro={
          <p>
            A crash in Columbus, Cincinnati, Dayton or anywhere in Ohio can mean serious injuries, property damage and real financial
            losses. Claims are brought under Ohio Revised Code Chapter 2305.
          </p>
        }
      >
        <p>
          Common injuries include broken bones, head injuries, spinal cord injuries, internal injuries and soft tissue damage. Many need
          long medical treatment and rehabilitation, and some leave permanent disabilities.
        </p>
        <p>
          Ohio uses modified comparative negligence. Your compensation can be reduced by your share of fault, and you can still recover
          if you are less than 51% at fault. Insurance companies often try to settle quickly for low amounts, before you understand the
          full extent of your injuries and damages.
        </p>
      </Section>

      <Section title="Deadlines and damages" tone="ice">
        <FactTable
          title="Filing deadlines"
          rows={[
            { label: 'Injury claims', value: '2 years from the date of injury, under ORC 2305.10.' },
            { label: 'Property damage', value: '4 years.' },
            { label: 'Exceptions', value: 'Narrow, for example when the injured person is a minor.' },
          ]}
          note="Missing these deadlines bars recovery entirely."
        />
        <FactTable
          title="What you can recover"
          rows={[
            {
              label: 'Economic',
              value:
                'Medical expenses, past and future (surgeries, rehabilitation, therapy, medications); lost wages and loss of earning capacity; property damage (vehicle repair or replacement); home modifications for disabilities; and other financial losses tied to the accident.',
            },
            {
              label: 'Non-economic',
              value:
                'Pain and suffering, emotional distress, loss of enjoyment of life, loss of consortium (spousal relationship), disfigurement and scarring, and mental anguish.',
            },
            {
              label: 'Punitive',
              value:
                'For egregious conduct such as drunk driving, reckless driving or intentional harm. Rare, and requires clear and convincing evidence of malicious or reckless behavior.',
            },
          ]}
        />
      </Section>

      <Section title="How a car accident claim moves forward">
        <Steps
          steps={[
            {
              title: 'At the scene',
              body: 'Get medical attention if you are hurt, call the police, photograph the vehicles, damage, injuries and road conditions, exchange information, collect witness contacts and report the accident to your insurer. Do not admit fault or talk to adjusters without your attorney.',
            },
            {
              title: 'Medical treatment and records',
              body: 'Records document the injury, treatment and prognosis and link them to the crash. They are how future medical costs and loss of earning capacity are proven.',
            },
            {
              title: 'Insurance negotiation',
              body: 'Most car accident claims resolve through negotiation. Adjusters often minimize claims, deny liability or make low early offers. Preparing for litigation strengthens the negotiating position.',
            },
            {
              title: 'Litigation and trial',
              body: 'If talks fail, a lawsuit is filed: discovery (exchanging evidence), depositions, expert testimony including accident reconstruction, and possibly trial. Most cases settle before trial.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a car accident claim" tone="ice">
        <PointGrid
          points={[
            { title: 'Investigates', body: 'Photos, witness statements, police reports and surveillance footage, plus documentation of every injury and loss.' },
            { title: 'Coordinates medical documentation', body: 'Works with your providers to document every injury and establish causation and prognosis.' },
            { title: 'Handles the insurers', body: 'Takes over all communication with the insurance companies and negotiates the settlement.' },
            { title: 'Brings in experts', body: 'Medical, accident reconstruction and economic experts to establish causation, damages and liability.' },
            { title: 'Litigates when needed', body: 'Files suit, conducts discovery, takes depositions and represents you in court if settlement talks fail.' },
            { title: 'Explains your options', body: 'Helps you decide between a settlement offer and litigation.' },
          ]}
        />
        <p>
          If you were hurt in a car accident anywhere in Ohio, <Link href="/contact">contact Jwayyed Law LLC</Link> to schedule a
          consultation. Read the firm&rsquo;s guide on{' '}
          <Link href="/our-law-firm/blog/steps-after-car-accident-ohio">what to do after a car accident in Ohio</Link>, or see all{' '}
          <Link href="/personal-injury">personal injury services</Link>.
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
