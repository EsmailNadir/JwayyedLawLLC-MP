import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';
import { personalInjuryServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Ohio Personal Injury Attorney',
  description:
    'Personal injury claims in Columbus, Cincinnati, Dayton and across Ohio: the 2-year filing deadline, fault rules and the damages you can recover.',
  keywords: [
    'Ohio personal injury attorney',
    'Columbus personal injury attorney',
    'Cincinnati personal injury attorney',
    'Dayton personal injury attorney',
    'Ohio personal injury lawyer',
    'car accident lawyer Ohio',
    'slip and fall attorney',
    'workplace injury lawyer',
    'wrongful death attorney',
  ],
  openGraph: {
    title: 'Ohio Personal Injury Attorney | Jwayyed Law LLC',
    description: 'Personal injury representation in Columbus, Cincinnati, Dayton and throughout Ohio. Schedule a consultation.',
    url: 'https://www.jjlawohio.com/personal-injury',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/personal-injury',
  },
};

const breadcrumbItems = [{ label: 'Personal Injury', href: '/personal-injury' }];

const faqs = [
  {
    question: 'What is the statute of limitations for personal injury claims in Ohio?',
    answer:
      'Under Ohio Revised Code 2305.10, you generally have 2 years from the date of injury to file. Exceptions apply to medical malpractice claims (1 year from discovery), claims against government entities (2 years, with special notice requirements) and claims involving minors. Missing the deadline bars recovery, so talk to an attorney as soon as you can.',
  },
  {
    question: 'What types of compensation are available in personal injury cases?',
    answer:
      'Compensation in Ohio can include economic damages (medical expenses, lost wages, property damage, future medical costs and loss of earning capacity), non-economic damages (pain and suffering, emotional distress, loss of enjoyment and loss of consortium) and, in rare cases, punitive damages for egregious conduct. How much you recover depends on how severe the injury is, how it affects your life, and what insurance coverage or assets are available.',
  },
  {
    question: 'What is comparative negligence in Ohio?',
    answer:
      'Ohio follows a modified comparative negligence rule under ORC 2315.33. If you were partly at fault, your compensation is reduced by your percentage of fault. If you are 51% or more at fault, you cannot recover. So you can still recover if you are less than 51% at fault. An attorney can push back on fault arguments and protect your recovery.',
  },
  {
    question: 'Do I need a personal injury attorney for my claim?',
    answer:
      'You can handle a claim yourself. An attorney handles the documentation, deals with the insurance companies, negotiates the settlement and represents you in court if it comes to that, and knows the legal requirements and how insurers handle claims. Most personal injury attorneys work on a contingency fee basis.',
  },
  {
    question: 'How long does a personal injury case take?',
    answer:
      'It depends on how complex the case is, how severe the injury is, how the insurance company responds and whether the case goes to trial. Simple cases may resolve in months; complex cases may take years. Most cases settle before trial, but preparation and negotiation still take time. An attorney can give you a realistic timeline once they know the facts.',
  },
  {
    question: "What is Ohio's modified comparative negligence rule and how does it affect my case?",
    answer:
      'Under ORC 2315.33, if you share some fault for your injury, your total compensation is reduced by your percentage of fault. The 50% bar applies: if your fault is greater than 50%, you cannot recover any damages. For example, if a jury awards $100,000 and finds you 30% at fault, you recover $70,000. An attorney can gather evidence and counter inflated fault claims from the defense.',
  },
  {
    question: 'What damages are available in Ohio personal injury cases?',
    answer:
      'There are two broad categories. Economic damages, such as past and future medical expenses, lost wages and loss of earning capacity, are not capped. Non-economic damages (pain and suffering, emotional distress, loss of consortium) are also generally uncapped in standard negligence cases, but ORC 2323.43 caps non-economic damages in medical malpractice cases. Punitive damages may be awarded where there was actual malice or egregious conduct. An attorney can identify every category that applies and build the documentation for each.',
  },
  {
    question: 'Why should I avoid giving a recorded statement to the insurance adjuster?',
    answer:
      "Adjusters use recorded statements to reduce or deny claims. If you give one before you know the full extent of your injuries, it can be used to argue that you downplayed symptoms, admitted partial fault or contradicted later medical findings. Ohio law does not require you to give a recorded statement to the at-fault party's insurer. Speak with a personal injury attorney first. Your attorney can communicate with the insurer for you.",
  },
];

const COUNTIES = [
  { href: '/locations/franklin-county/personal-injury-franklin-county', title: 'Franklin County', subtitle: 'Columbus and surrounding areas' },
  { href: '/locations/delaware-county/personal-injury-delaware-county', title: 'Delaware County', subtitle: 'Delaware and Powell' },
  { href: '/locations/butler-county/personal-injury-butler-county', title: 'Butler County', subtitle: 'Hamilton, Oxford and West Chester' },
  { href: '/locations/greene-county/personal-injury-greene-county', title: 'Greene County', subtitle: 'Fairborn and Xenia' },
  { href: '/locations/montgomery-county/personal-injury-montgomery-county', title: 'Montgomery County', subtitle: 'Dayton and surrounding areas' },
  { href: '/locations/pickaway-county/personal-injury-pickaway-county', title: 'Pickaway County', subtitle: 'Circleville and surrounding areas' },
  { href: '/locations/athens-county/personal-injury-athens-county', title: 'Athens County', subtitle: 'Athens and surrounding areas' },
  { href: '/locations/morrow-county/personal-injury-morrow-county', title: 'Morrow County', subtitle: 'Mount Gilead, Cardington and surrounding areas' },
  { href: '/locations/clinton-county/personal-injury-clinton-county', title: 'Clinton County', subtitle: 'Wilmington and surrounding areas' },
];

export default function PersonalInjuryPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio personal injury claims"
        description="If someone else's negligence injured you in Ohio, you generally have 2 years from the date of injury to file. The firm represents injury victims in Columbus, Cincinnati, Dayton and across the state."
      />

      <Section title="Find your claim" intro={<p>Each page covers the deadlines, the damages and the process for that kind of claim.</p>}>
        <LinkGrid links={personalInjuryServices.map((s) => ({ href: s.href, title: s.title, subtitle: s.description }))} />
      </Section>

      <KeyFacts
        facts={[
          { figure: '2 years', label: 'to file most personal injury claims, from the date of injury (ORC 2305.10)' },
          { figure: '1 year', label: 'for medical malpractice claims, from discovery' },
          { figure: '51%', label: 'share of fault at which you can no longer recover (ORC 2315.33)' },
          { figure: '$25,000', label: "Ohio's minimum bodily injury coverage per person" },
        ]}
      />

      <Section
        title="What a personal injury claim covers"
        tone="ice"
        intro={
          <p>
            If you were hurt because someone else was negligent, you may be entitled to compensation for your injuries, medical
            expenses, lost wages, and pain and suffering. Claims are brought under Ohio Revised Code Chapter 2305.
          </p>
        }
      >
        <p>
          Claims arise from car, truck and motorcycle accidents, slip and fall incidents, workplace injuries, medical malpractice and
          wrongful death. Each type has its own Ohio Revised Code sections, insurance rules and case law.
        </p>
        <p>
          Insurance companies often minimize claims or deny liability. Early work on a claim matters because evidence has to be
          preserved, treatment has to be documented, and the filing deadline keeps running.
        </p>
      </Section>

      <Section title="Ohio rules that shape your claim">
        <FactTable
          title="Filing deadlines (statute of limitations)"
          rows={[
            { label: 'Most injury claims', value: '2 years from the date of injury, under ORC 2305.10.' },
            { label: 'Medical malpractice', value: '1 year from discovery.' },
            { label: 'Government entities', value: 'Special notice required within 2 years.' },
            { label: 'Minors', value: 'Exceptions may apply.' },
          ]}
          note="The clock starts on the date of injury or the date the injury was discovered, depending on the circumstances. Missing the deadline bars recovery entirely."
        />
        <FactTable
          title="Fault: modified comparative negligence (ORC 2315.33)"
          rows={[
            { label: 'Partly at fault', value: 'Your compensation is reduced by your percentage of fault.' },
            { label: '51% or more at fault', value: 'You cannot recover. Put another way, fault greater than 50% bars recovery.' },
            { label: 'Example', value: 'A jury awards $100,000 and finds you 30% at fault. You recover $70,000.' },
          ]}
        />
        <FactTable
          title="Ohio minimum auto insurance"
          rows={[
            { label: 'Bodily injury', value: '$25,000 per person and $50,000 per accident.' },
            { label: 'Property damage', value: '$25,000.' },
          ]}
          note="Many drivers carry higher limits or umbrella policies. Uninsured/underinsured motorist coverage and other policies may also apply."
        />
      </Section>

      <Section title="Damages you can recover" tone="ice">
        <FactTable
          title="Types of compensation"
          rows={[
            {
              label: 'Economic',
              value:
                'Medical expenses (past and future), lost wages and loss of earning capacity, property damage, rehabilitation and therapy, home modifications for disabilities, and other financial losses tied to the injury. Not capped.',
            },
            {
              label: 'Non-economic',
              value:
                'Pain and suffering, emotional distress, loss of enjoyment of life, loss of consortium (spousal relationship), disfigurement and scarring, and mental anguish. Generally not capped, except in medical malpractice cases (ORC 2323.43).',
            },
            {
              label: 'Punitive',
              value:
                'For egregious conduct, recklessness or intentional harm, to punish the wrongdoer and deter similar conduct. Rare, and requires clear and convincing evidence of malicious or reckless behavior.',
            },
          ]}
        />
      </Section>

      <Section title="How an injury claim moves forward">
        <Steps
          steps={[
            {
              title: 'Investigation and evidence',
              body: 'Photos of the scene, vehicles and injuries, witness contact information, police reports and medical records are preserved right away. This evidence establishes liability and damages.',
            },
            {
              title: 'Medical treatment and records',
              body: 'Prompt treatment matters for your health and your claim. Medical records document the injury, the treatment and the prognosis, and link the injury to the accident.',
            },
            {
              title: 'Insurance negotiation',
              body: 'Most claims are resolved by negotiating with the insurance companies. Preparing the case for litigation strengthens the negotiating position.',
            },
            {
              title: 'Litigation and trial',
              body: 'If negotiation fails, a lawsuit is filed. Litigation involves discovery (exchanging evidence), depositions, expert testimony and possibly trial. Most cases settle before trial.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on an injury claim" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Investigates',
              body: 'Gathers photos, witness statements, police reports and surveillance footage, and documents every injury and loss.',
            },
            {
              title: 'Coordinates medical documentation',
              body: 'Makes sure every injury is documented and works with your providers to establish causation and prognosis.',
            },
            {
              title: 'Handles the insurers',
              body: 'Takes over all communication with the insurance companies and negotiates the settlement.',
            },
            {
              title: 'Brings in experts',
              body: 'Medical, accident reconstruction, economic and other experts to establish causation, damages and liability.',
            },
            {
              title: 'Litigates when needed',
              body: 'Files the lawsuit, conducts discovery, takes depositions and represents you in court if settlement talks fail.',
            },
            {
              title: 'Pursues every source of coverage',
              body: 'Identifies the available insurance policies and brings claims against every responsible party.',
            },
          ]}
        />
        <Callout title="Fees">The firm works on a contingency fee basis.</Callout>
      </Section>

      <Section title="Personal injury claims in your county">
        <p>The firm represents injury victims in these Ohio counties. Each county has its own page.</p>
        <LinkGrid links={COUNTIES} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
