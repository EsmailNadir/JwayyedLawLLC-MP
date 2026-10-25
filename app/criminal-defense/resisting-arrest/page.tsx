import RelatedArticles from '@/components/practice/RelatedArticles';
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Resisting Arrest Defense Ohio',
  description:
    'Resisting arrest under ORC 2921.33 is a second-degree misdemeanor, or first-degree if force is used. Penalties, defenses and the court process. Call (614) 285-5482.',
  keywords: [
    'resisting arrest lawyer Ohio',
    'resisting arrest defense attorney',
    'resisting arrest ORC 2921.33',
    'misdemeanor resisting arrest Ohio',
    'obstruction charges attorney',
    'resisting arrest penalties Ohio',
    'Ohio resisting arrest lawyer',
    'fleeing police charges attorney',
    'criminal defense resisting arrest',
  ],
  openGraph: {
    title: 'Resisting Arrest Defense Ohio | Jwayyed Law LLC',
    description: 'Resisting arrest defense throughout Ohio: what the state must prove, the penalties and the defenses. Schedule a consultation.',
    url: 'https://www.jjlawohio.com/criminal-defense/resisting-arrest',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/criminal-defense/resisting-arrest',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Resisting Arrest', href: '/criminal-defense/resisting-arrest' },
];

const faqs = [
  {
    question: 'What constitutes resisting arrest under Ohio law?',
    answer:
      'Under Ohio Revised Code 2921.33, resisting arrest is recklessly or by force resisting or interfering with the lawful arrest of yourself or someone else. It can include pulling away, struggling or going limp, and fleeing from an officer who is making an arrest. The arrest must be lawful, meaning the officer had proper authority and probable cause. Passive resistance, verbal objections or questioning the arrest do not usually count.',
  },
  {
    question: 'What are the penalties for resisting arrest in Ohio?',
    answer:
      'Resisting arrest is a second-degree misdemeanor under ORC 2921.33: up to 90 days in jail, a fine of up to $750, court costs, probation and a permanent criminal record. If you use force against the arresting officer, it becomes a first-degree misdemeanor with up to 180 days in jail and a fine of up to $1,000. If the officer is injured, the state may also file a charge such as assault on a peace officer.',
  },
  {
    question: 'Can I be charged with resisting arrest if the arrest was unlawful?',
    answer:
      'Resisting arrest under ORC 2921.33 requires a "lawful" arrest, but fighting the arrest at the scene is not recommended. Ohio courts have held that the proper remedy for an unlawful arrest is to challenge it in court afterward, not to resist physically. If your attorney shows the arrest was unlawful (no probable cause or no proper authority), that can be a defense to the resisting charge.',
  },
  {
    question: 'Can resisting arrest charges be expunged from my record in Ohio?',
    answer:
      'Resisting arrest convictions may be eligible for expungement or record sealing under Ohio Revised Code 2953.32. As a misdemeanor, the record can be sealed after the waiting period if you meet the eligibility rules. Sealing hides the conviction from most background checks. An attorney can review your eligibility and handle the application.',
  },
  {
    question: 'What should I do if I am charged with resisting arrest in Ohio?',
    answer:
      'Use your right to remain silent and do not discuss the incident with anyone but your attorney, including the police. Contact a criminal defense attorney right away. Write down everything you remember: officer names, badge numbers, witnesses and any injuries. If you were hurt, get medical attention and document the injuries. An attorney can then review how the arrest happened and build the defense.',
  },
  {
    question: 'What must the prosecution prove for a resisting arrest conviction in Ohio?',
    answer:
      'Under ORC 2921.33 the prosecution must prove beyond a reasonable doubt that (1) an arrest was being made; (2) the arrest was lawful, meaning the officer had proper authority and probable cause; (3) you recklessly or by force resisted or interfered with it; and (4) you were aware of a substantial risk that your conduct would hinder the arrest and consciously disregarded it. Each element can be challenged. If the arrest was unlawful, the conduct was not reckless resistance, or the reaction was involuntary, the charge may not hold up.',
  },
  {
    question: 'Does the lawfulness of the underlying arrest matter for a resisting arrest charge in Ohio?',
    answer:
      'Yes. ORC 2921.33 requires that the arrest be lawful. If the officer lacked probable cause, exceeded their authority or violated your constitutional rights, the arrest may be unlawful, which can be a defense. Ohio courts generally discourage physical resistance even to an unlawful arrest and say the remedy is a court challenge afterward. An attorney can investigate the arrest, move to suppress if your rights were violated, and argue the arrest was unlawful.',
  },
  {
    question: 'What are the penalties for resisting arrest versus obstructing official business in Ohio?',
    answer:
      'Resisting arrest under ORC 2921.33(A) is a second-degree misdemeanor (M2): up to 90 days in jail and a fine of up to $750. With force against the officer, it becomes a first-degree misdemeanor (M1): up to 180 days and up to $1,000. Obstructing official business under ORC 2921.31 is a second-degree misdemeanor for a first offense, the same range as standard resisting arrest, and becomes a fifth-degree felony (F5) if the obstruction creates a risk of physical harm to anyone. The two are often filed together after a confrontational police encounter, and an attorney can work to resolve or reduce both together.',
  },
];

const RELATED = [
  { href: '/criminal-defense/assault-charges', title: 'Assault charges', subtitle: 'Simple and aggravated assault in Ohio' },
  { href: '/criminal-defense/obstruction-of-official-business', title: 'Obstruction of official business', subtitle: 'Charges for interfering with police' },
  { href: '/criminal-defense/criminal-trespass', title: 'Criminal trespass', subtitle: 'Trespass and unauthorized entry' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Sealing an eligible record under Ohio law' },
];

export default function ResistingArrestPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Resisting arrest charges in Ohio"
        description="Resisting arrest under ORC 2921.33 is a second-degree misdemeanor with up to 90 days in jail. Using force against the officer makes it a first-degree misdemeanor."
      />

      <KeyFacts
        facts={[
          { figure: '90 days', label: 'maximum jail for standard resisting arrest, a second-degree misdemeanor' },
          { figure: '$750', label: 'maximum fine at the standard level' },
          { figure: '180 days', label: 'maximum jail when force is used against the officer' },
          { figure: '$1,000', label: 'maximum fine when force is used' },
        ]}
      />

      <Section
        title="What resisting arrest means in Ohio"
        intro={
          <p>
            Under Ohio Revised Code 2921.33, resisting arrest is recklessly or by force resisting or interfering with a lawful arrest.
            It usually comes with other charges, because it arises during an encounter with police.
          </p>
        }
      >
        <p>
          The line between exercising your rights and resisting can be blurry. Officers sometimes charge resisting arrest when someone
          only questioned the arrest, asserted their rights, or had a reflexive physical reaction in a stressful moment.
        </p>
        <p>
          You have constitutional rights during a police encounter: to remain silent, to refuse consent to a search, and to be free from
          unreasonable seizure. Using those rights is not resisting arrest. The defense starts by
          separating what you actually did from what the report calls resistance, and by testing whether the arrest itself was lawful. Because the charge usually travels with others, the defense
          has to address every charge together, from arraignment through discovery, pretrial motions, negotiation and, if needed, trial.
        </p>
      </Section>

      <Section title="The two levels of the offense" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Reckless resistance, ORC 2921.33(A)',
              body: '"Recklessly" means you were aware of a substantial risk that your conduct would hinder the arrest and disregarded it. Pulling away, tensing up to prevent handcuffing, going limp, running away or struggling can qualify. This is a second-degree misdemeanor.',
            },
            {
              title: 'Resistance with force, ORC 2921.33(B)',
              body: 'Using force against the arresting officer, such as pushing, hitting, kicking or biting, raises the charge to a first-degree misdemeanor with up to 180 days in jail and a fine of up to $1,000.',
            },
          ]}
        />
        <h3>What the prosecution must prove</h3>
        <p>
          Beyond a reasonable doubt: (1) an arrest was being made, (2) the arrest was lawful, (3) you resisted or interfered with it,
          and (4) the resistance was reckless or involved force. Each element can be challenged, and if one cannot be proven the charge
          should be dismissed. The lawfulness of the arrest is an element in its own right: the officer must have had proper authority
          and probable cause. The mental state matters too, because the prosecution must show you were aware of a substantial risk that
          your conduct would hinder the arrest and consciously disregarded it.
        </p>
      </Section>

      <Section title="Resisting arrest penalties">
        <p>
          Penalties are set under Ohio Revised Code Chapter 2929. Resisting arrest is a separate charge, so its penalties stack on top of
          whatever else you are charged with.
        </p>
        <FactTable
          title="Standard resisting arrest, ORC 2921.33(A): second-degree misdemeanor"
          rows={[
            { label: 'Jail', value: 'Up to 90 days.' },
            { label: 'Fine', value: 'Up to $750, plus court costs.' },
            { label: 'Other', value: 'Probation with conditions and a permanent criminal record.' },
          ]}
        />
        <FactTable
          title="Resistance with force: first-degree misdemeanor"
          rows={[
            { label: 'Jail', value: 'Up to 180 days.' },
            { label: 'Fine', value: 'Up to $1,000, plus court costs.' },
            { label: 'Other', value: 'Probation with conditions and a permanent criminal record.' },
            { label: 'If the officer is hurt', value: 'A separate charge such as assault on a peace officer under ORC 2903.13 may be filed.' },
          ]}
        />
        <h3>Charges that often come with it</h3>
        <p>
          Common companions are obstruction of official business (ORC 2921.31), assault on a peace officer (ORC 2903.13), disorderly
          conduct (ORC 2917.11) and the offense that led to the arrest. Together they can mean consecutive jail terms, stacked fines and
          several entries on your record.
        </p>
        <h3>Resisting arrest or obstruction?</h3>
        <p>
          The two are often filed together after a confrontational encounter. Resisting arrest needs an actual arrest, or the execution
          of a search warrant, and physical interference with it. Obstruction of official business (ORC 2921.31) is broader and covers
          interference with any public official&apos;s authorized act. It is a second-degree misdemeanor, the same range as standard
          resisting arrest, but it becomes a fifth-degree felony if it creates a risk of physical harm to any person.
        </p>
        <Callout title="It affects the other charges too">
          Prosecutors may be less willing to offer a good plea on the other charges when resisting arrest is in the case, and judges may
          hold resistance against you at sentencing. Winning the resisting charge can strengthen your position on the rest by casting
          doubt on how the arrest happened.
        </Callout>
      </Section>

      <Section title="What a conviction costs beyond the sentence" tone="ice">
        <p>
          A resisting arrest conviction can limit work in law enforcement, security, government and other jobs that call for cooperation
          with authorities, and it may affect professional licensing. Employers may read it as a sign of a confrontational disposition.
          For non-citizens, it may have immigration consequences. These effects outlast the sentence and the fines.
        </p>
      </Section>

      <Section
        title="What to do after a resisting arrest charge in Ohio"
        intro={
          <p>
            Stay silent about the arrest, write down what happened, and get any injuries treated and recorded. Then contact a criminal
            defense attorney before your first court date.
          </p>
        }
      >
        <Steps
          steps={[
            {
              title: 'Say nothing about the arrest',
              body: 'Use your right to remain silent. Make no statements to police about what happened, and do not discuss the incident with anyone except your attorney. Anything you say can be used against you on every charge in the case.',
            },
            {
              title: 'Write down what happened',
              body: 'Record everything you remember: the officers’ names and badge numbers, any witnesses, what was said, and what each person did and in what order. Resisting cases often turn on a few seconds of physical contact, so the sequence matters.',
            },
            {
              title: 'Treat and document any injuries',
              body: 'If you were hurt during the arrest, get medical attention and keep the records and photographs. Injuries can support a defense that your reaction was reflexive or a response to pain, and medical records are part of discovery.',
            },
            {
              title: 'Keep any video',
              body: 'If you or a bystander recorded the arrest, keep the original. It can be compared with the body camera and dash camera footage your attorney will request.',
            },
            {
              title: 'Talk to a criminal defense attorney',
              body: 'An attorney can review the circumstances of the arrest, ask for the footage before it is lost, and build one strategy for the resisting charge and the underlying charges.',
            },
          ]}
        />
        <Callout title="Challenge an unlawful arrest in court, not at the scene">
          Ohio courts have held that the proper remedy for an unlawful arrest is to challenge it through legal proceedings afterward, not
          by physically resisting. If the arrest was unlawful, that becomes a defense your attorney raises in motions and at trial.
        </Callout>
      </Section>

      <Section title="How a resisting arrest case moves through court" tone="ice">
        <p>Because resisting arrest usually comes with other charges, the court handles them together.</p>
        <Steps
          steps={[
            {
              title: 'Arrest and arraignment',
              body: 'All charges are read, bail is set and you enter a plea. A not guilty plea on every charge preserves your rights. Your attorney can argue for reasonable bail conditions and starts building the defense right away. If you were injured during the arrest, document it now.',
            },
            {
              title: 'Discovery and investigation',
              body: "The prosecution must hand over police reports, body camera and dash camera footage, witness statements, medical records of any injuries and other evidence. The video is often the most objective account and can show that the officer's version is inconsistent, the arrest was unlawful, or your conduct was not resistance.",
            },
            {
              title: 'Pretrial motions',
              body: 'A motion to suppress if the arrest was unlawful, your rights were violated or evidence was improperly obtained. A motion to dismiss if the arrest lacked probable cause. A motion to compel the body camera or dash camera footage, so the most objective evidence is available for your defense.',
            },
            {
              title: 'Negotiation',
              body: 'The resisting charge can be dismissed as part of a global resolution, reduced, or folded into a plea agreement. Prosecutors often agree to drop it in exchange for a plea on the underlying offense, especially when the resistance was minimal or the evidence is weak.',
            },
            {
              title: 'Trial',
              body: 'Your attorney cross-examines the arresting officer, plays the video, calls witnesses and argues for acquittal. The prosecution must prove every element beyond a reasonable doubt, including that the arrest was lawful and your conduct was reckless resistance. Your attorney presents the defense evidence and challenges each of those elements.',
            },
          ]}
        />
      </Section>

      <Section title="Defenses to resisting arrest">
        <PointGrid
          points={[
            {
              title: 'The arrest was unlawful',
              body: 'ORC 2921.33 requires a lawful arrest. If the officer lacked probable cause or proper authority, or violated your constitutional rights, the resisting charge may be invalid. The firm investigates how the arrest happened and raises this in pretrial motions and at trial.',
            },
            {
              title: 'There was no resistance',
              body: 'Asking why you are being arrested, protesting verbally or asserting your rights is not resisting arrest. The physical conduct must rise to reckless resistance or interference. If what you did was passive, verbal or an exercise of your constitutional rights, the charge may be invalid. Body camera footage often shows the alleged resistance was minimal or did not happen.',
            },
            {
              title: 'The reaction was reflexive',
              body: 'The offense requires reckless conduct: awareness of a substantial risk and conscious disregard of it. Pulling away when an officer grabs your arm, or flinching when force is applied, can be an involuntary response to pain that does not meet that mental state.',
            },
            {
              title: 'The officer used excessive force',
              body: 'Ohio law does not give a blanket right to resist excessive force. Evidence of it can still undercut the prosecution, create reasonable doubt, and support a defense that you were reacting to pain or acting in self-defense. The point is to show your actions were reactive rather than reckless.',
            },
            {
              title: 'The evidence is thin',
              body: "When the case rests only on the officer's testimony, with no video, independent witnesses or corroboration, the sufficiency of the proof can be challenged. Footage that contradicts the officer can be decisive.",
            },
          ]}
        />
      </Section>

      <Section
        title="How resisting arrest cases can end"
        tone="ice"
        intro={<p>Resisting arrest is usually resolved together with the charge that led to the arrest, and it does not have to end in a conviction.</p>}
      >
        <PointGrid
          points={[
            {
              title: 'Dropped for a plea on the underlying offense',
              body: 'Prosecutors often agree to dismiss the resisting charge in exchange for a plea on the underlying offense, especially when the resistance was minimal or the evidence is weak.',
            },
            {
              title: 'Dismissed in a global resolution',
              body: 'The resisting count can be dismissed as part of resolving all the charges at once.',
            },
            {
              title: 'Dismissed on a pretrial motion',
              body: 'If the arrest lacked probable cause, the resisting charge is invalid and can be dismissed. Winning on the arrest can also strengthen your position on the other charges.',
            },
            {
              title: 'Reduced or folded into a plea',
              body: 'A reduced charge or a plea agreement that covers every count can limit the stacked penalties.',
            },
            {
              title: 'Acquittal at trial',
              body: 'If the prosecution cannot prove a lawful arrest and reckless resistance beyond a reasonable doubt, the verdict is not guilty.',
            },
            {
              title: 'Sealing after a conviction',
              body: 'A misdemeanor resisting conviction is generally eligible for record sealing after the waiting period, as described below.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a resisting arrest case">
        <PointGrid
          points={[
            { title: 'Protects your rights early', body: 'Advises you on statements and starts the defense from the first meeting.' },
            { title: 'Gets the video', body: "Obtains and reviews every body camera and dash camera recording, looking for gaps against the officer's account." },
            { title: 'Tests the arrest', body: 'Whether the officer had probable cause and proper authority and followed correct procedure.' },
            { title: 'Investigates', body: 'Reviews the evidence, interviews witnesses and gets medical records of any injuries.' },
            { title: 'Builds the defense', body: 'Challenges the lawfulness of the arrest, shows the conduct was not resistance, or shows your actions were reflexive rather than intentional.' },
            { title: 'Defends every charge together', body: 'One strategy for the resisting charge and the underlying charges.' },
            { title: 'Negotiates', body: 'To dismiss the resisting charge, reduce charges or reach a better plea on all of them.' },
            { title: 'Tries the case', body: "With the video evidence and a cross-examination of the arresting officer." },
            { title: 'Seals the record', body: 'Handles record sealing and expungement applications under ORC 2953.32 for eligible clients.' },
          ]}
        />
        <p>
          If you are charged with resisting arrest anywhere in Ohio, <Link href="/contact">contact Jwayyed Law LLC</Link> to schedule a
          consultation. You can also read about the firm&apos;s <Link href="/criminal-defense">criminal defense practice</Link> or{' '}
          <Link href="/our-law-firm/blog/what-to-expect-first-court-appearance-ohio">what to expect at your first court appearance in Ohio</Link>.
        </p>
      </Section>

      <Section title="Record sealing and related charges" tone="ice">
        <p>
          Under Ohio Revised Code 2953.32, a resisting arrest conviction may be eligible for sealing or expungement. As a misdemeanor, it
          is generally eligible after the waiting period if you meet the requirements, and a sealed record is hidden from most background
          checks. That helps restore the employment opportunities and other areas a record affects. The firm can review your eligibility
          and handle the application.
        </p>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <LocationsWeServe title="Criminal Defense" />
      <RelatedArticles category="Criminal Defense" title="Articles on Ohio criminal charges" slugs={["protecting-rights-during-traffic-stop-ohio", "charged-with-assault-what-happens-next", "what-to-expect-first-court-appearance-ohio"]} />
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
