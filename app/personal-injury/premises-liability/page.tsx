import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Premises Liability Lawyer',
  description:
    'Premises liability in Ohio: the duty owed to invitees, the open and obvious doctrine, landlord duties under ORC Chapter 5321 and the 2-year deadline.',
  keywords: ['premises liability lawyer Columbus OH', 'slip and fall attorney Ohio', 'negligent security lawyer', 'Franklin County premises liability attorney', 'Ohio premises liability lawyer', 'ORC 2315.33 comparative fault Ohio'],
  openGraph: {
    title: 'Ohio Premises Liability Lawyer | Columbus | Jwayyed Law LLC',
    description: 'Injury claims against property owners, businesses and landlords in Ohio.',
    url: 'https://www.jjlawohio.com/personal-injury/premises-liability',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/personal-injury/premises-liability' },
};

const breadcrumbItems = [
  { label: 'Personal Injury', href: '/personal-injury' },
  { label: 'Premises Liability', href: '/personal-injury/premises-liability' },
];

const faqs = [
  {
    question: 'What is premises liability in Ohio?',
    answer:
      "Premises liability is the area of Ohio law that holds property owners and occupiers responsible for injuries caused by unsafe conditions on their property. Ohio follows a common law framework, largely shaped by case law and ORC 2315.19 comparative negligence principles, in which the duty owed depends on the visitor's legal status. Invitees (customers, business visitors, members of the public invited onto the property) are owed the highest duty. Licensees (social guests) are owed a warning of known hidden dangers. Trespassers are generally owed only a duty to refrain from willful or wanton conduct. To prove a claim, you must show the owner knew or should have known of the hazard and failed to fix it or warn of it.",
  },
  {
    question: 'What duty do Ohio property owners owe visitors?',
    answer:
      "It depends on the visitor's status. For invitees, such as store customers, restaurant patrons or members of the public on government property, the owner owes reasonable care: to inspect the property, discover dangerous conditions, and fix them or adequately warn visitors. For licensees (social guests), the owner must warn of known hidden hazards but need not inspect. For trespassers, the duty is limited to avoiding willful or wanton misconduct, with an important exception for discovered trespassers. Landlords owe tenants specific duties under ORC Chapter 5321 to keep rental premises habitable and safe.",
  },
  {
    question: "What is Ohio's open and obvious doctrine?",
    answer:
      'When a hazard is open and obvious, meaning a reasonable person using ordinary care would have noticed and avoided it, the owner generally has no duty to warn of it and may avoid liability. The Ohio Supreme Court has reinforced the doctrine in several decisions, reasoning that an open and obvious hazard is its own warning. The doctrine is not absolute. Courts consider attendant circumstances (distractions, crowds, the design of the property) that could have kept you from noticing or avoiding the hazard. An attorney can evaluate whether it applies to your facts.',
  },
  {
    question: 'Is a property owner liable for snow and ice injuries in Ohio?',
    answer:
      'Ohio traditionally followed a "natural accumulation rule": owners were generally not liable for injuries from naturally accumulated ice and snow. Ohio courts have moved away from a blanket rule and apply comparative fault principles. Owners, particularly commercial businesses, may have a duty to clear walkways and parking lots within a reasonable time after precipitation stops, and they can be liable for an unnatural accumulation they created (for example, drainage that channels water onto a walkway where it freezes). Residential landlords have specific duties under ORC 5321.02 to maintain safe conditions. If you slipped on ice outside a business or apartment complex, an attorney can assess whether the natural accumulation defense applies.',
  },
  {
    question: 'What if I slipped and fell in a commercial property like a store or restaurant?',
    answer:
      'Businesses owe customers (invitees) the highest standard of care. A business is liable if it knew or should have known of a hazard, such as a wet floor or spilled liquid, and failed to fix it or post adequate warnings within a reasonable time. The key issue is usually notice: did the business create the condition, or was it there long enough that a reasonable inspection would have found it? Evidence of how long the liquid had been on the floor, footprints or other signs of an established hazard, or the lack of any cleaning or inspection protocol can establish constructive notice. Document the scene, get an incident report and get medical attention right away.',
  },
  {
    question: 'What about slip and fall injuries in a rental property? Can I sue my landlord?',
    answer:
      "Yes, in some circumstances. Ohio Revised Code Chapter 5321 requires residential landlords to keep rental premises safe and habitable, and ORC 5321.02 prohibits landlords from retaliating against tenants who report unsafe conditions. If a tenant or guest is hurt because the landlord failed to repair a known dangerous condition (broken stairs, defective handrails, poor lighting in common areas), the landlord may be liable. Landlords are generally responsible for common areas under their control, such as hallways, parking lots and stairwells. Report unsafe conditions to the landlord in writing before anyone is hurt; that also establishes the landlord's actual notice.",
  },
  {
    question: 'How do I prove a premises liability claim in Ohio?',
    answer:
      "You must establish that (1) the defendant owned or controlled the property; (2) you were a lawful visitor (invitee or licensee); (3) there was a dangerous condition on the property; (4) the defendant knew or should have known of it; (5) the defendant failed to fix it or warn of it; and (6) that failure caused your injury. Key evidence includes photos of the hazard taken right after the incident, incident reports filed with the owner, security camera footage (which must be preserved quickly before it is overwritten), witness statements, medical records, and maintenance records showing whether the owner knew of the condition. Under Ohio's comparative fault rule, ORC 2315.33, your recovery is reduced if you are found partly at fault.",
  },
  {
    question: "What is Ohio's statute of limitations for premises liability and slip and fall claims?",
    answer:
      'Under Ohio Revised Code 2305.10, personal injury claims, including premises liability and slip and fall cases, must be filed within 2 years of the date of the injury. Missing the deadline permanently bars the claim, however strong it is. ORC 2305.321 provides recreational user immunity for landowners who allow recreational use of their property at no charge, which may affect injuries on farms, trails or open land. Government-owned property adds complications: the political subdivision immunity statutes in ORC Chapter 2744 may limit or change the usual liability rules, and shorter notice deadlines may apply. Talk to an attorney promptly after a premises injury.',
  },
];

const RELATED = [
  { href: '/personal-injury/slip-and-fall', title: 'Slip and fall injuries', subtitle: 'Premises liability claims for unsafe conditions' },
  { href: '/personal-injury/dog-bites', title: 'Dog bites', subtitle: 'Animal attack liability under Ohio law' },
  { href: '/personal-injury/workplace-injuries', title: 'Workplace injuries', subtitle: "On-the-job injuries and workers' compensation" },
  { href: '/personal-injury/car-accidents', title: 'Car accidents', subtitle: 'Motor vehicle collision claims throughout Ohio' },
];

export default function PremisesLiabilityPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Premises liability claims in Ohio"
        description="Property owners in Ohio owe visitors a duty that depends on why the visitor was there. You generally have 2 years from the date of the injury to file."
      />

      <KeyFacts
        facts={[
          { figure: '2 years', label: 'to file most premises liability claims (ORC 2305.10)' },
          { figure: '50%', label: 'more fault than this bars recovery (ORC 2315.33)' },
          { figure: 'Days', label: 'before surveillance footage is routinely overwritten' },
        ]}
      />

      <Section
        title="Who owes you what on someone else's property"
        intro={
          <p>
            Ohio premises liability law holds property owners and occupiers responsible when dangerous conditions on their property
            injure lawful visitors. The duty depends on the visitor&rsquo;s legal status.
          </p>
        }
      >
        <FactTable
          title="Duty of care by visitor status"
          rows={[
            {
              label: 'Invitees',
              value: 'Customers and business visitors. The highest duty: reasonable care to inspect, discover dangerous conditions, and fix them or warn within a reasonable time.',
            },
            { label: 'Licensees', value: 'Social guests. The owner must warn of known hidden dangers.' },
            { label: 'Trespassers', value: 'Generally owed only a duty to avoid willful or wanton conduct.' },
            {
              label: 'Tenants',
              value:
                'Under ORC Chapter 5321, landlords must keep rental units and common areas fit, habitable, safe and sanitary, and keep electrical, plumbing, heating and other systems in good working order.',
            },
          ]}
        />
      </Section>

      <Section title="Deadlines and fault" tone="ice">
        <FactTable
          title="Rules that limit a claim"
          rows={[
            { label: 'Filing deadline', value: '2 years under ORC 2305.10 for most premises liability claims.' },
            {
              label: 'Comparative fault (ORC 2315.33)',
              value: 'Your recovery is reduced by your percentage of fault, and barred entirely if you are more than 50% responsible.',
            },
            { label: 'Recreational land', value: 'Under ORC 2305.321, recreational user immunity may protect some landowners.' },
            {
              label: 'Government property',
              value: 'Injuries under ORC Chapter 2744 have special notice and filing requirements that differ from standard civil cases.',
            },
          ]}
        />
      </Section>

      <Section title="Defenses in premises liability cases and how they are answered">
        <PointGrid
          points={[
            {
              title: 'Open and obvious',
              body: 'An owner generally has no duty over a hazard any reasonable person would see, such as a clearly visible step-down or a wet floor with a prominent sign.',
            },
            {
              title: 'Attendant circumstances',
              body: 'A crowded store, a distraction the owner created (like a prominent display) or a design that diverted your attention can defeat the open and obvious defense.',
            },
            {
              title: 'Notice in store spills',
              body: 'You must show the store created the spill, or that it was there long enough to be found by reasonable inspection. Employees nearby, the cleaning schedule, and footprints, dried edges or a cart stationed nearby all count.',
            },
            {
              title: "A landlord's notice",
              body: 'When a landlord knew of a broken handrail, deteriorating stairs or poor exterior lighting and did not repair it in a reasonable time, the landlord can be liable. Written reports from tenants prove actual notice.',
            },
          ]}
        />
      </Section>

      <Section title="What to do after a premises injury" tone="ice">
        <Steps
          steps={[
            { title: 'Photograph the hazard', body: 'Before it is cleaned up or repaired.' },
            { title: 'Get an incident report', body: 'Request one from the owner or manager and keep a copy.' },
            { title: 'Collect witnesses', body: 'Names and contact information for anyone who saw it.' },
            { title: 'Get medical care', body: 'Even if your injuries seem minor. Some get worse over time.' },
            { title: 'Talk to an attorney first', body: "Before giving a recorded statement to the property owner's insurer." },
          ]}
        />
      </Section>

      <Section title="What a premises liability attorney does on your case">
        <PointGrid
          points={[
            { title: 'Preserves evidence fast', body: 'Surveillance footage is routinely overwritten within days, so preservation comes first.' },
            { title: 'Identifies every liable party', body: 'Property owners, management companies and maintenance contractors.' },
            {
              title: 'Falls and hazards',
              body: 'Slips on wet floors and spills, trips on uneven pavement and broken sidewalks, ice and snow falls, and falls from defective handrails, broken steps or structural defects.',
            },
            {
              title: 'Security, pools and rentals',
              body: 'Inadequate lighting and negligent security, swimming pool accidents and drownings, apartment and rental injuries (ORC Chapter 5321), and government property claims (ORC Chapter 2744).',
            },
          ]}
        />
        <Callout title="Fees">Jwayyed Law LLC represents premises liability clients throughout Ohio on a contingency fee basis.</Callout>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>. Read the
          firm&rsquo;s article on <Link href="/our-law-firm/blog/ohio-slip-and-fall-laws-property-owners">Ohio slip and fall laws for property owners</Link>.
          The firm also handles <Link href="/personal-injury/workplace-injuries">workplace injuries</Link>,{' '}
          <Link href="/personal-injury/dog-bites">dog bite claims</Link> and other{' '}
          <Link href="/personal-injury">personal injury cases</Link> across Ohio.
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
