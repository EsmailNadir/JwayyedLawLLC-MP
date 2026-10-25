import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Motorcycle Accident Lawyer in Ohio',
  description:
    'Motorcycle accident claims in Ohio: the 2-year deadline, how helmet use and lane filtering affect fault, and the damages riders can recover.',
  keywords: ['motorcycle accident lawyer Columbus OH', 'motorcycle accident attorney Ohio', 'motorcycle lawyer', 'Franklin County motorcycle accident attorney'],
  openGraph: {
    title: 'Motorcycle Accident Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Injury claims for motorcycle riders and passengers throughout Ohio.',
    url: 'https://www.jjlawohio.com/personal-injury/motorcycle-accidents',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/personal-injury/motorcycle-accidents' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Motorcycle Accidents', href: '/personal-injury/motorcycle-accidents' },
];

const faqs = [
  {
    question: 'Why are motorcycle accidents more serious than car accidents?',
    answer:
      'Riders have no vehicle around them, so they are more exposed to serious, catastrophic and fatal injuries, including traumatic brain injury, spinal cord injury and severe fractures. Motorcycle crashes often mean higher medical costs, longer recovery and more pain and suffering.',
  },
  {
    question: 'What compensation can I recover from a motorcycle accident?',
    answer:
      'Compensation can include economic damages (medical expenses, lost wages, property damage, future medical costs and loss of earning capacity), non-economic damages (pain and suffering, emotional distress, loss of enjoyment and loss of consortium) and possibly punitive damages for egregious conduct. Because rider injuries are often severe, the damages are often higher.',
  },
  {
    question: "What is Ohio's helmet law for motorcycles?",
    answer:
      'Under Ohio Revised Code 4511.53, riders 18 years or older are not required to wear a helmet. Riders under 18 must wear one. Not wearing a helmet does not prevent you from recovering for your injuries, though insurance companies may try to use it to reduce your compensation.',
  },
  {
    question: 'How long do motorcycle accident cases take?',
    answer:
      'It depends on how complex the case is, how severe the injuries are, how the insurance company responds and whether the case goes to trial. Simple cases may resolve in months; complex cases with severe injuries may take years. An attorney can give you a realistic timeline once they know the facts.',
  },
  {
    question: 'Do I need a motorcycle accident attorney?',
    answer:
      'You can handle a claim yourself. An attorney knows the legal requirements and how insurers handle claims, and takes on the documentation, the communication with the insurance companies, the settlement negotiation and, if needed, the court case.',
  },
  {
    question: "Does Ohio's helmet law affect a motorcycle accident injury claim?",
    answer:
      "Under ORC 4511.53, riders age 18 or older do not have to wear a helmet; riders under 18 do. Riding without a helmet does not automatically bar your claim, and Ohio's modified comparative negligence system (ORC 2315.33) still applies. Insurers and defense attorneys routinely argue that the missing helmet contributed to head or brain injuries and try to assign you a percentage of fault. An attorney can work with medical experts to show that the collision itself caused your injuries.",
  },
  {
    question: 'What is lane filtering and how does it affect fault in a motorcycle accident in Ohio?',
    answer:
      'Lane filtering means riding between lanes of slow or stopped traffic. Ohio law does not explicitly authorize it. Ohio Revised Code 4511.272 permits two motorcycles to ride side by side in the same lane, but does not permit a motorcycle to pass between lanes of moving or stopped vehicles. If you were filtering when the crash happened, expect the insurer or defense to argue you were at least partly at fault, which could reduce your recovery under ORC 2315.33. An attorney can work out exactly what happened and how the traffic laws apply.',
  },
  {
    question: 'Why are motorcycle accident injuries often more severe and how does that affect damages?',
    answer:
      'Riders have no vehicle structure, airbags or seatbelts to absorb the force of a crash. Common injuries include traumatic brain injury (TBI), spinal cord injuries, road rash that leaves permanent scarring, multiple fractures and internal injuries. These often need extensive surgery, long hospital stays and long-term or lifelong rehabilitation. That severity raises every category of damages: medical expenses past and future, lost wages and loss of earning capacity if you cannot return to your prior work, and non-economic damages for pain, suffering and loss of enjoyment of life. An attorney can retain medical and economic experts to document and quantify these losses.',
  },
];

const RELATED = [
  { href: '/personal-injury/car-accidents', title: 'Car accidents', subtitle: 'Motor vehicle collision claims throughout Ohio' },
  { href: '/personal-injury/truck-accidents', title: 'Truck accidents', subtitle: 'Commercial vehicle and semi-truck collision claims' },
  { href: '/personal-injury/pedestrian-accidents', title: 'Pedestrian accidents', subtitle: 'Claims for pedestrians struck by vehicles' },
  { href: '/personal-injury/catastrophic-injuries', title: 'Catastrophic injuries', subtitle: 'Severe and life-altering injury claims' },
];

export default function MotorcycleAccidentsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Motorcycle accident claims in Ohio"
        description="Riding without a helmet does not bar an injury claim in Ohio, though insurers will use it to argue fault. You generally have 2 years from the date of injury to file."
      />

      <KeyFacts
        facts={[
          { figure: '2 years', label: 'to file an injury claim, from the date of injury' },
          { figure: '18', label: 'the age under which Ohio riders must wear a helmet (ORC 4511.53)' },
          { figure: 'ORC 2315.33', label: 'reduces your recovery by your share of fault' },
        ]}
      />

      <Section
        title="What a motorcycle accident claim covers"
        intro={
          <p>
            Motorcycle crashes in Columbus, Cincinnati, Dayton and across Ohio often cause catastrophic or fatal injuries. Claims are
            brought under Ohio Revised Code Chapter 2305.
          </p>
        }
      >
        <p>
          Riders face traumatic brain injury, spinal cord injury and severe fractures, with higher medical costs, longer recovery and
          more pain and suffering than a typical car accident.
        </p>
        <p>
          Liability can involve driver negligence, road conditions and motorcycle-specific factors. Insurers often argue that the
          rider was partly at fault.
        </p>
      </Section>

      <Section title="Deadlines and damages" tone="ice">
        <FactTable title="Filing deadline" rows={[{ label: 'Injury claims', value: '2 years from the date of injury.' }]} />
        <FactTable
          title="What you can recover"
          rows={[
            {
              label: 'Economic',
              value:
                'Medical expenses, past and future (surgeries, rehabilitation, therapy, medications, long-term care); lost wages and loss of earning capacity; property damage (motorcycle repair or replacement, damaged gear); home modifications for disabilities; and other financial losses tied to the accident.',
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

      <Section title="Rider issues that affect fault">
        <PointGrid
          points={[
            {
              title: 'Helmet use (ORC 4511.53)',
              body: 'Not required at 18 or older; required under 18. Riding without one does not bar the claim, but insurers argue it contributed to head injuries.',
            },
            {
              title: 'Lane filtering',
              body: 'Not explicitly authorized in Ohio. ORC 4511.272 allows two motorcycles side by side in one lane, not passing between lanes of vehicles.',
            },
            { title: 'Comparative fault (ORC 2315.33)', body: 'Any share of fault assigned to you reduces your recovery.' },
            { title: 'Driver negligence and road conditions', body: 'The other driver’s conduct and the condition of the road are investigated alongside the rider’s.' },
          ]}
        />
      </Section>

      <Section title="How a motorcycle claim moves forward" tone="ice">
        <Steps
          steps={[
            {
              title: 'Investigation and documentation',
              body: 'Photos of the scene, vehicles, motorcycle damage, your injuries and road conditions; witness contacts; police reports; and helmet condition if applicable.',
            },
            {
              title: 'Medical treatment and records',
              body: 'Records document the injury, treatment and prognosis, and prove damages such as future medical costs and loss of earning capacity.',
            },
            {
              title: 'Insurance negotiation',
              body: 'Most motorcycle claims resolve through negotiation. Preparing for litigation strengthens the negotiating position.',
            },
            {
              title: 'Litigation and trial',
              body: 'If talks fail: a lawsuit, discovery (exchanging evidence), depositions, expert testimony including accident reconstruction, and possibly trial. Most cases settle before trial.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a motorcycle claim">
        <PointGrid
          points={[
            { title: 'Investigates', body: 'Photos, witness statements, police reports and surveillance footage, plus documentation of every injury and loss.' },
            { title: 'Coordinates medical documentation', body: 'Works with your providers to document every injury and establish causation and prognosis.' },
            { title: 'Handles the insurers', body: 'All communication and settlement negotiation with the insurance companies.' },
            { title: 'Brings in experts', body: 'Medical, accident reconstruction and economic experts to establish causation, damages and liability.' },
            { title: 'Answers fault arguments', body: 'Responds to helmet and lane-filtering arguments with the evidence of what caused the injuries.' },
            { title: 'Litigates when needed', body: 'Files suit, conducts discovery, takes depositions and represents you in court if settlement talks fail.' },
          ]}
        />
        <p>
          If you were hurt in a motorcycle accident anywhere in Ohio, <Link href="/contact">contact Jwayyed Law LLC</Link> to schedule
          a consultation, or see the firm&rsquo;s <Link href="/personal-injury">personal injury practice</Link>.
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
