import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Pedestrian Accident Lawyer in Ohio',
  description:
    'Hit by a vehicle in Ohio? Driver yield rules under ORC 4511.46, how shared fault works, the 2-year deadline and what you can recover.',
  keywords: ['pedestrian accident lawyer Columbus OH', 'pedestrian accident attorney Ohio', 'pedestrian lawyer', 'Franklin County pedestrian accident attorney'],
  openGraph: {
    title: 'Pedestrian Accident Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Injury claims for pedestrians struck by vehicles in Ohio.',
    url: 'https://www.jjlawohio.com/personal-injury/pedestrian-accidents',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
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
    answer:
      "It depends on the circumstances, and fault is decided under Ohio's comparative negligence rule. Drivers must use reasonable care for pedestrians, and pedestrians must use reasonable care too. Fault can be shared, and your compensation is reduced by your percentage of fault. You can still recover if you are less than 51% at fault.",
  },
  {
    question: 'What compensation can I recover from a pedestrian accident?',
    answer:
      'Compensation can include economic damages (medical expenses, lost wages, property damage, future medical costs and loss of earning capacity), non-economic damages (pain and suffering, emotional distress, loss of enjoyment and loss of consortium) and possibly punitive damages for egregious conduct. Because pedestrian injuries are often severe, the damages are often higher.',
  },
  {
    question: 'What should I do after a pedestrian accident in Ohio?',
    answer:
      'Get medical attention right away if you are hurt, call the police to report the accident, photograph the scene, collect witness contact details, report the accident to the insurance companies, and contact a pedestrian accident attorney as soon as possible. Do not admit fault or make statements without your attorney present.',
  },
  {
    question: 'How long do pedestrian accident cases take?',
    answer:
      'It depends on how complex the case is, how severe the injuries are, how the insurance company responds and whether the case goes to trial. Simple cases may resolve in months; complex cases with severe injuries may take years. An attorney can give you a realistic timeline once they know the facts.',
  },
  {
    question: 'Do I need a pedestrian accident attorney?',
    answer:
      'You can handle a claim yourself. An attorney knows the legal requirements and how insurers handle claims, and takes on the documentation, the communication with the insurance companies, the settlement negotiation and, if needed, the court case.',
  },
  {
    question: 'What are Ohio pedestrian right-of-way laws?',
    answer:
      'ORC 4511.46 sets the duty of drivers at crosswalks. Drivers must yield to a pedestrian crossing within any marked crosswalk, or within any unmarked crosswalk at an intersection, and may not pass a vehicle that has stopped at a crosswalk to let a pedestrian cross. Pedestrians have duties too: ORC 4511.48 requires them to obey traffic control signals, and ORC 4511.50 prohibits jaywalking where signals or marked crosswalks are available. A driver who fails to yield in violation of ORC 4511.46 has given you strong evidence of negligence.',
  },
  {
    question: 'Can a pedestrian recover compensation if they were jaywalking when they were hit?',
    answer:
      "Yes, in many cases. Ohio applies modified comparative negligence under ORC 2315.33, so a pedestrian who was partly at fault, including by jaywalking, can still recover as long as their fault does not exceed 50%. If a jury finds the pedestrian 40% at fault and the driver 60% at fault, the pedestrian recovers 60% of their total damages. Insurers will argue that a jaywalking pedestrian carries most of the fault. An attorney can investigate the driver's conduct, speed, visibility and other factors to show the driver bears the majority of the fault.",
  },
  {
    question: 'What compensation is available for pedestrian accident victims in Ohio?',
    answer:
      'Pedestrians have no vehicle around them, so their injuries are among the most severe in personal injury law and the compensation available is broad. Economic damages include past and future medical expenses (emergency care, surgeries, hospitalization, rehabilitation, long-term care, assistive devices), lost wages, loss of future earning capacity and other out-of-pocket losses. Non-economic damages include pain and suffering, emotional distress, disfigurement, loss of enjoyment of life and loss of consortium. Where a drunk driver, distracted driving or other egregious conduct was involved, punitive damages may also be available. An attorney can work with medical and economic experts to value every category of loss.',
  },
];

const RELATED = [
  { href: '/personal-injury/car-accidents', title: 'Car accidents', subtitle: 'Motor vehicle collision claims throughout Ohio' },
  { href: '/personal-injury/motorcycle-accidents', title: 'Motorcycle accidents', subtitle: 'Claims for injured motorcyclists across Ohio' },
  { href: '/personal-injury/catastrophic-injuries', title: 'Catastrophic injuries', subtitle: 'Severe and life-altering injury claims' },
  { href: '/personal-injury/wrongful-death', title: 'Wrongful death', subtitle: 'Claims against negligent parties for fatal injuries' },
];

export default function PedestrianAccidentsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Pedestrian accident claims in Ohio"
        description="Ohio drivers must yield to pedestrians in crosswalks under ORC 4511.46. Even if you were partly at fault, you can recover as long as your share of fault does not exceed 50%."
      />

      <KeyFacts
        facts={[
          { figure: '2 years', label: 'to file an injury claim, from the date of injury' },
          { figure: '50%', label: 'your fault must not exceed this to recover (ORC 2315.33)' },
          { figure: 'ORC 4511.46', label: 'requires drivers to yield to pedestrians in crosswalks' },
        ]}
      />

      <Section
        title="What a pedestrian accident claim covers"
        intro={
          <p>
            Pedestrians struck by vehicles in Columbus, Cincinnati, Dayton and across Ohio often suffer catastrophic or fatal injuries.
            Claims are brought under Ohio Revised Code Chapter 2305.
          </p>
        }
      >
        <p>
          With no vehicle around you, a collision can cause traumatic brain injury, spinal cord injury and severe fractures. These
          cases tend to mean higher medical costs, longer recovery and more pain and suffering than a typical car accident.
        </p>
        <p>
          Liability can turn on driver negligence, pedestrian conduct, road conditions and crosswalk violations. Insurers often argue
          that the pedestrian was partly at fault.
        </p>
      </Section>

      <Section title="Deadlines, fault and damages" tone="ice">
        <FactTable
          title="Filing deadline and fault"
          rows={[
            { label: 'Injury claims', value: '2 years from the date of injury.' },
            {
              label: 'Shared fault (ORC 2315.33)',
              value: 'Your compensation is reduced by your percentage of fault. You can still recover if you are less than 51% at fault.',
            },
            { label: 'Example', value: 'Pedestrian 40% at fault, driver 60% at fault: the pedestrian recovers 60% of total damages.' },
          ]}
        />
        <FactTable
          title="What you can recover"
          rows={[
            {
              label: 'Economic',
              value:
                'Medical expenses, past and future (surgeries, rehabilitation, therapy, medications, long-term care); lost wages and loss of earning capacity; property damage (damaged clothing or personal items); home modifications for disabilities; and other financial losses tied to the accident.',
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

      <Section title="Right-of-way rules that decide fault">
        <PointGrid
          points={[
            {
              title: 'Drivers must yield (ORC 4511.46)',
              body: 'To a pedestrian in any marked crosswalk, or any unmarked crosswalk at an intersection. A driver may not pass a vehicle stopped at a crosswalk for a pedestrian.',
            },
            { title: 'Pedestrians must obey signals (ORC 4511.48)', body: 'Pedestrians must follow traffic control signals.' },
            {
              title: 'Jaywalking (ORC 4511.50)',
              body: 'Prohibited where signals or marked crosswalks are available. It reduces a recovery but does not end it unless your fault exceeds 50%.',
            },
            {
              title: 'Driver negligence',
              body: 'Failure to yield, distracted driving and speeding, along with road conditions and signal compliance.',
            },
          ]}
        />
      </Section>

      <Section title="How a pedestrian claim moves forward" tone="ice">
        <Steps
          steps={[
            {
              title: 'Investigation and documentation',
              body: 'Photos of the scene, vehicles, your injuries, road conditions, crosswalk markings and traffic signals; witness contacts; police reports; and driver information.',
            },
            {
              title: 'Medical treatment and records',
              body: 'Records document the injury, treatment and prognosis, and prove damages such as future medical costs and loss of earning capacity.',
            },
            { title: 'Deciding liability', body: 'Driver negligence, pedestrian actions, road conditions and signal compliance are analyzed to set each side’s share of fault.' },
            {
              title: 'Negotiation and litigation',
              body: 'Most claims resolve through negotiation. If talks fail: a lawsuit, discovery, depositions, expert testimony and possibly trial.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a pedestrian claim">
        <PointGrid
          points={[
            { title: 'Investigates', body: 'Photos, witness statements, police reports and surveillance footage, plus documentation of every injury and loss.' },
            { title: 'Coordinates medical documentation', body: 'Works with your providers to document every injury and establish causation and prognosis.' },
            { title: 'Analyzes liability', body: 'Driver negligence, pedestrian actions, road conditions and traffic signal compliance.' },
            { title: 'Handles the insurers', body: 'All communication and settlement negotiation with the insurance companies.' },
            { title: 'Brings in experts', body: 'Medical, accident reconstruction and economic experts to establish causation, damages and liability.' },
            { title: 'Litigates when needed', body: 'Files suit, conducts discovery, takes depositions and represents you in court if settlement talks fail.' },
          ]}
        />
        <p>
          If you were struck by a vehicle anywhere in Ohio, <Link href="/contact">contact Jwayyed Law LLC</Link> to schedule a
          consultation, or see the firm&rsquo;s <Link href="/personal-injury">personal injury practice</Link>.
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
