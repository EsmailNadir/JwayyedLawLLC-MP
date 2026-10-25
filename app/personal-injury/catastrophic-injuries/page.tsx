import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Catastrophic Injury Lawyer',
  description:
    'Catastrophic injury claims in Ohio for TBI, spinal cord injury, paralysis and severe burns: the ORC 2323.43 damage caps, life care plans and deadlines.',
  keywords: ['catastrophic injury lawyer Columbus OH', 'catastrophic injury attorney Ohio', 'spinal cord injury lawyer', 'TBI attorney Ohio', 'Franklin County catastrophic injury attorney'],
  openGraph: {
    title: 'Ohio Catastrophic Injury Lawyer | Columbus | Jwayyed Law LLC',
    description: 'Claims for brain injury, spinal cord injury, paralysis, burns and other catastrophic injuries in Ohio.',
    url: 'https://www.jjlawohio.com/personal-injury/catastrophic-injuries',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/personal-injury/catastrophic-injuries' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Catastrophic Injuries', href: '/personal-injury/catastrophic-injuries' },
];

const faqs = [
  {
    question: 'What is a catastrophic injury under Ohio law?',
    answer:
      'For the purpose of its higher non-economic damage caps, Ohio Revised Code 2323.43 treats as catastrophic an injury involving permanent and substantial physical deformity, loss of use of a limb, loss of a bodily organ system, or a permanent functional injury that prevents the plaintiff from independently caring for themselves and performing life-sustaining activities. Common examples are traumatic brain injury (TBI), spinal cord injury and paralysis (paraplegia and quadriplegia), severe burns over large areas of the body, limb amputations, multiple severe fractures with lasting disability, severe facial disfigurement, and permanent loss of sight or hearing. Damages in these cases are built very differently from a typical injury claim.',
  },
  {
    question: "What are Ohio's damage caps for catastrophic injuries under ORC 2323.43?",
    answer:
      'Ohio Revised Code 2323.43 limits non-economic damages (pain and suffering, emotional distress, loss of consortium) in most tort cases to the greater of $250,000 or three times economic damages, up to $350,000 per plaintiff or $500,000 per occurrence. When the injury qualifies as catastrophic (permanent physical deformity, loss of use of a limb, loss of a bodily organ system, or permanent inability to care for oneself), the cap rises to $500,000 per plaintiff or $1,000,000 per occurrence. Economic damages (medical bills, future care costs, lost earnings, home modifications, assistive devices) are never capped. In medical malpractice cases involving catastrophic injuries, the same higher caps apply under ORC 2323.43.',
  },
  {
    question: 'What is a life care plan and why is it important in a catastrophic injury case?',
    answer:
      'A life care plan is prepared by a certified life care planner, usually a nurse or rehabilitation specialist with specialized training. It projects every future medical, therapy and personal care need over the injured person\'s expected lifetime and itemizes the cost: future surgeries and hospital stays, physician and specialist visits, physical and occupational therapy, medications, durable medical equipment (wheelchairs, prosthetics, assistive technology), home health aides and personal care attendants, home modifications (ramps, lifts, accessible bathrooms) and transportation. It is the foundation of the future damages claim. Without it, the full scope of future economic losses cannot be shown to a jury or an adjuster.',
  },
  {
    question: 'How are future damages calculated in a catastrophic injury case?',
    answer:
      "Several experts contribute. A life care planner sets the projected cost and duration of all future care. An economist calculates the present value of those costs, accounting for inflation and the time value of money, since a lump sum paid today will be invested. A vocational rehabilitation expert assesses how the injury affects the ability to work and projects lifetime lost earnings. Medical experts testify about future surgeries, complications and effects on life expectancy. Their opinions have to be coordinated into a single, consistent damages presentation.",
  },
  {
    question: 'What expert witnesses are needed for a catastrophic injury case?',
    answer:
      'Usually a team: (1) treating and independent medical experts in the relevant specialties (neurology, orthopedics, rehabilitation medicine, physiatry) on the injury, its permanence and future medical needs; (2) a certified life care planner to project future care costs; (3) an economist to calculate the present value of future losses and lost earning capacity; (4) a vocational rehabilitation expert on employability and wage loss; and (5) liability experts suited to the case, such as accident reconstruction, engineering or, in malpractice cases, medical experts. The experts must be qualified and able to hold up on cross-examination.',
  },
  {
    question: 'How long does a catastrophic injury case take to resolve in Ohio?',
    answer:
      'Typically two to five years, and sometimes longer for the most complex cases. The timeline is driven by the need to understand the long-term prognosis before settling (you should not settle until your condition has stabilized and your future needs are clear), the time it takes to retain and prepare several experts, broad discovery in high-damages cases, and extended fights over liability and causation. Structured settlements, which pay part of the award in future periodic payments instead of a lump sum, are common in these cases and require more negotiation and, in some circumstances, court approval. Settling before the full extent of your damages is known can permanently reduce your recovery.',
  },
  {
    question: "What is Ohio's statute of limitations for catastrophic injury cases?",
    answer:
      'Under Ohio Revised Code 2305.10, the general deadline for personal injury claims, including catastrophic injuries, is 2 years from the date of the injury. The discovery rule may apply when the full extent of a latent injury is not known on the date of the incident, so the period runs from when the injury was or reasonably should have been discovered. For catastrophic injuries from medical malpractice, the 1-year statute of limitations in ORC 2305.113 applies instead. For injuries caused by an Ohio political subdivision (a city, county or school district), the immunity statute in ORC Chapter 2744 sets different rules and may require advance written notice. With this much at stake, talk to an attorney early.',
  },
  {
    question: 'Can I recover damages from a government entity that caused my catastrophic injury in Ohio?',
    answer:
      "Yes, but Ohio's Political Subdivision Tort Liability Act, ORC Chapter 2744, creates real hurdles. Political subdivisions (cities, counties, townships, school districts) are generally immune unless the injury falls within a statutory exception, such as the operation or maintenance of a motor vehicle, the subdivision's proprietary functions, or the negligent performance of a governmental function where immunity has been waived. Whether the activity was governmental or proprietary, the nature of the claim, and whether individual employees acted with malice or in bad faith all affect liability. Claims against state agencies (as opposed to political subdivisions) must be brought in the Ohio Court of Claims. An attorney needs to work out which exceptions apply before any deadline passes.",
  },
];

const RELATED = [
  { href: '/personal-injury/car-accidents', title: 'Car accidents', subtitle: 'Motor vehicle collision claims throughout Ohio' },
  { href: '/personal-injury/truck-accidents', title: 'Truck accidents', subtitle: 'Commercial vehicle and semi-truck collision claims' },
  { href: '/personal-injury/wrongful-death', title: 'Wrongful death', subtitle: 'Claims against negligent parties for fatal injuries' },
  { href: '/personal-injury/workplace-injuries', title: 'Workplace injuries', subtitle: "On-the-job injuries and workers' compensation" },
];

export default function CatastrophicInjuriesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Catastrophic injury claims in Ohio"
        description="Brain injury, spinal cord injury, paralysis and severe burns can need decades of care. Economic damages are never capped, and the non-economic cap for a catastrophic injury rises to $500,000 per plaintiff."
      />

      <KeyFacts
        facts={[
          { figure: '$500,000', label: 'non-economic cap per plaintiff for a catastrophic injury under ORC 2323.43' },
          { figure: '$1,000,000', label: 'non-economic cap per occurrence for a catastrophic injury' },
          { figure: 'No cap', label: 'on economic damages: medical bills, future care, lost earnings' },
          { figure: '2 years', label: 'to file, from the date of the injury (ORC 2305.10)' },
        ]}
      />

      <Section
        title="What makes an injury catastrophic"
        intro={
          <p>
            A traumatic brain injury, paralysis, a severe burn or an amputation changes every part of a person&rsquo;s life and can
            require decades of medical care, rehabilitation and personal support.
          </p>
        }
      >
        <p>
          ORC 2323.43 sets a higher non-economic damages cap for claims involving permanent physical deformity, loss of use of a limb,
          loss of a bodily organ system, or a permanent inability to care for oneself independently.
        </p>
        <PointGrid
          points={[
            { title: 'Traumatic brain injury', body: 'Mild, moderate and severe TBI, including diffuse axonal injury.' },
            { title: 'Spinal cord injury', body: 'Paraplegia, quadriplegia and incomplete spinal cord injuries.' },
            { title: 'Severe burns', body: 'Burns that need skin grafting, long hospital stays and reconstruction.' },
            { title: 'Amputation', body: 'Traumatic amputation and loss of a limb requiring prosthetics and long-term rehab.' },
            { title: 'Fractures and disfigurement', body: 'Multiple severe fractures with lasting disability, and severe facial disfigurement needing reconstructive surgery.' },
            {
              title: 'Sensory and birth injuries',
              body: 'Permanent loss of vision or hearing, and birth injuries causing permanent neurological impairment (cerebral palsy, HIE).',
            },
          ]}
        />
      </Section>

      <Section title="Damage caps and deadlines" tone="ice">
        <FactTable
          title="Non-economic damage caps (ORC 2323.43)"
          rows={[
            {
              label: 'Standard tort cap',
              value: 'The greater of $250,000 or three times economic damages, up to $350,000 per plaintiff or $500,000 per occurrence.',
            },
            { label: 'Catastrophic injury', value: '$500,000 per plaintiff or $1,000,000 per occurrence.' },
            { label: 'Medical malpractice', value: 'The same higher caps apply to catastrophic injuries under ORC 2323.43.' },
            {
              label: 'Economic damages',
              value: 'Never capped. Future medical expenses, lost earnings, personal care attendants, home modifications, prosthetics and wheelchairs are fully recoverable.',
            },
          ]}
        />
        <FactTable
          title="Filing deadlines"
          rows={[
            { label: 'Personal injury', value: '2 years from the date of the injury (ORC 2305.10).' },
            { label: 'Latent injuries', value: 'The discovery rule may start the clock when the injury was or reasonably should have been discovered.' },
            { label: 'Medical malpractice', value: '1 year under ORC 2305.113.' },
            {
              label: 'Government entities',
              value: 'ORC Chapter 2744 sets different rules for political subdivisions and may require advance written notice. Claims against state agencies go to the Ohio Court of Claims.',
            },
          ]}
        />
      </Section>

      <Section title="How the damages are proven">
        <Steps
          steps={[
            {
              title: 'Life care plan',
              body: 'A certified life care planner projects every future care need, from surgeries and hospitalizations to home health aides, assistive technology and home modifications.',
            },
            { title: 'Present value', body: 'An economist converts the projected costs to present value, accounting for inflation and investment returns.' },
            { title: 'Earning capacity', body: 'A vocational rehabilitation expert quantifies the lifetime effect on earnings.' },
            {
              title: 'Medical testimony',
              body: 'Specialists testify about the permanence of the injury, expected complications and effects on life expectancy.',
            },
          ]}
        />
        <p>Without this expert foundation, no jury or adjuster can accurately value a catastrophic injury, and the victim risks being badly undercompensated.</p>
      </Section>

      <Section title="Settlement: structures and liens" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Structured settlements',
              body: 'Part of the recovery is paid in future installments. This can bring tax advantages, guard against using up a large award over a lifetime of care, and match future expenses such as later surgeries or a move from parental care to residential placement. Life insurance companies issue the annuity policies.',
            },
            {
              title: 'Liens',
              body: "Medicare, Medicaid, private health insurers and Ohio BWC (in workers' comp cases) have a right to be repaid from the settlement. Medicare alone may have paid hundreds of thousands in bills. Ignoring liens can create legal liability for the plaintiff and attorney, and negotiating reductions, especially for Medicare liens governed by federal statute, can raise the net recovery.",
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a catastrophic injury claim">
        <PointGrid
          points={[
            { title: 'Retains the experts', body: 'Medical, life care planning, economic, vocational and liability experts.' },
            { title: 'Waits for stabilization', body: 'Evaluates settlement only once your medical condition has stabilized.' },
            { title: 'Analyzes structured settlements', body: 'Checks that any structure matches your actual long-term needs.' },
            { title: 'Resolves liens', body: 'Negotiates Medicare, Medicaid, private insurer and BWC liens.' },
          ]}
        />
        <Callout title="Fees">Jwayyed Law LLC handles catastrophic injury claims on a contingency fee basis.</Callout>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>. Read about{' '}
          <Link href="/our-law-firm/blog/personal-injury-ohio-statute-of-limitations">Ohio&rsquo;s statute of limitations for personal injury claims</Link>. The firm also
          handles <Link href="/personal-injury/medical-malpractice">medical malpractice</Link>,{' '}
          <Link href="/personal-injury/workplace-injuries">workplace injury claims</Link> and{' '}
          <Link href="/personal-injury/nursing-home-abuse">nursing home abuse and neglect</Link> throughout Ohio.
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
