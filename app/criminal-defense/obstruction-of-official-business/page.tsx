import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Obstruction of Official Business Ohio',
  description:
    'Obstruction of official business under ORC 2921.31 is a second-degree misdemeanor, or a felony if it risks physical harm. Penalties and defenses. Call (614) 285-5482.',
  keywords: [
    'obstruction of official business lawyer Ohio',
    'obstruction defense attorney',
    'obstruction ORC 2921.31',
    'misdemeanor obstruction Ohio',
    'obstructing justice charges attorney',
    'obstruction penalties Ohio',
    'Ohio obstruction lawyer',
    'interfering with police charges',
    'criminal defense obstruction attorney',
  ],
  openGraph: {
    title: 'Obstruction of Official Business Ohio | Jwayyed Law LLC',
    description: 'Obstruction of official business defense throughout Ohio: the elements, the felony enhancement and the defenses. Schedule a consultation.',
    url: 'https://www.jjlawohio.com/criminal-defense/obstruction-of-official-business',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/criminal-defense/obstruction-of-official-business',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Obstruction of Official Business', href: '/criminal-defense/obstruction-of-official-business' },
];

const faqs = [
  {
    question: 'What is obstruction of official business under Ohio law?',
    answer:
      'Under Ohio Revised Code 2921.31, obstruction of official business is doing any act, without privilege and with the purpose to prevent, obstruct or delay a public official’s authorized act, that hampers or impedes the official in their lawful duty. Examples include giving police false information, hiding evidence, warning a suspect that police are coming, physically blocking an officer, or interfering with an investigation. It is usually a second-degree misdemeanor.',
  },
  {
    question: 'What are the penalties for obstruction of official business in Ohio?',
    answer:
      'Obstruction of official business is a second-degree misdemeanor under ORC 2921.31: up to 90 days in jail, a fine of up to $750, court costs, probation and a permanent criminal record. If the violation creates a risk of physical harm to anyone, it becomes a fifth-degree felony punishable by 6 to 12 months in prison and a fine of up to $2,500.',
  },
  {
    question: 'What is the difference between obstruction of official business and resisting arrest?',
    answer:
      'Obstruction of official business (ORC 2921.31) is broader than resisting arrest (ORC 2921.33). Obstruction covers interference with any public official performing any authorized act, not only police making arrests. Resisting arrest is physically resisting or interfering with a lawful arrest. You could be charged with obstruction for giving false information during an investigation, interfering with a traffic stop or impeding a fire inspector; resisting arrest requires resistance during an actual arrest.',
  },
  {
    question: 'Can obstruction of official business charges be expunged from my record in Ohio?',
    answer:
      'Obstruction of official business convictions may be eligible for expungement or record sealing under Ohio Revised Code 2953.32. As a misdemeanor, the record can be sealed after the waiting period if you meet the eligibility rules. If the charge was raised to a fifth-degree felony, the rules may differ. Sealing hides the conviction from most background checks. An attorney can review your eligibility and handle the application.',
  },
  {
    question: 'What should I do if I am charged with obstruction of official business in Ohio?',
    answer:
      'Use your right to remain silent and make no further statements to police. Do not try to explain or justify what you did without an attorney present. Contact a criminal defense attorney right away. Write down everything you remember about the encounter: the officers’ names and badge numbers, any witnesses and what happened. An attorney can then judge whether your conduct was actually obstruction and build the defense.',
  },
  {
    question: 'What are the elements of obstruction of official business in Ohio?',
    answer:
      'Under Ohio Revised Code 2921.31 the prosecution must prove four elements beyond a reasonable doubt: (1) you did an affirmative act; (2) without privilege to do so; (3) with the purpose to prevent, obstruct or delay a public official’s authorized act; and (4) the act actually hampered or impeded the official in their lawful duties. The base offense is a second-degree misdemeanor (M2), punishable by up to 90 days in jail and a fine of up to $750. Ohio courts have held that passive non-cooperation alone does not meet the affirmative act requirement.',
  },
  {
    question: 'How is obstruction of official business different from resisting arrest in Ohio?',
    answer:
      'Obstruction of official business (ORC 2921.31) covers interference with any public official, including police officers, fire inspectors and code enforcement officers, performing any authorized act. Resisting arrest (ORC 2921.33) covers physically resisting, obstructing or interfering with a lawful arrest or the execution of a search warrant. Giving false information to investigators or blocking access to a scene can be obstruction with no physical resistance at all. When the conduct overlaps, both can be charged at once.',
  },
  {
    question: 'What are common defenses to obstruction of official business charges in Ohio?',
    answer:
      'Common defenses to an ORC 2921.31 charge are (1) no affirmative act, since Ohio courts require active conduct and silence or passive non-cooperation is not enough; (2) the exercise of constitutional rights, since remaining silent, refusing consent to a search or recording police in public cannot be obstruction; (3) no purpose to obstruct, where your conduct had another purpose and any obstruction was incidental; (4) the official was not performing an authorized act because they exceeded their authority; and (5) a challenge to the felony enhancement showing no actual risk of physical harm. Body camera footage is often central to all of these.',
  },
];

const RELATED = [
  { href: '/criminal-defense/resisting-arrest', title: 'Resisting arrest', subtitle: 'Charges for resisting or interfering with an arrest' },
  { href: '/criminal-defense/assault-charges', title: 'Assault charges', subtitle: 'Simple and aggravated assault in Ohio' },
  { href: '/criminal-defense/criminal-trespass', title: 'Criminal trespass', subtitle: 'Trespass and unauthorized entry' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Sealing an eligible record under Ohio law' },
];

export default function ObstructionOfficialBusinessPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Obstruction of official business charges in Ohio"
        description="Obstruction under ORC 2921.31 is a second-degree misdemeanor with up to 90 days in jail. If it creates a risk of physical harm, it becomes a fifth-degree felony."
      />

      <KeyFacts
        facts={[
          { figure: '90 days', label: 'maximum jail for standard obstruction, a second-degree misdemeanor' },
          { figure: '$750', label: 'maximum fine at the misdemeanor level' },
          { figure: '6 to 12 months', label: 'prison range when the charge is a fifth-degree felony' },
          { figure: '$2,500', label: 'maximum fine for felony obstruction' },
        ]}
      />

      <Section
        title="What obstruction of official business means"
        intro={
          <p>
            Ohio Revised Code 2921.31 covers any act done with the purpose to prevent, obstruct or delay a public official from
            performing an authorized act. That reaches from giving police false information to physically interfering with an officer.
          </p>
        }
      >
        <p>
          The charge is broader than most people expect. It protects any public official performing an authorized act, not only police
          officers making an arrest. Fire inspectors and code enforcement officers count, and so does an officer in the middle of a
          traffic stop or an investigation. Giving false information to investigators or blocking access to a scene can be charged as
          obstruction without any physical resistance at all.
        </p>
        <p>
          Many obstruction charges come out of police encounters where the person was using constitutional rights. Remaining silent,
          refusing consent to a search and recording police are all protected and are not obstruction, yet police sometimes charge
          obstruction when people assert them. Separating protected conduct from actual obstruction is the center of most defenses.
        </p>
        <p>
          The charge often comes with others, so the defense has to cover all of them, from arraignment through discovery, pretrial
          motions, negotiation and, if needed, trial. If the obstruction created a risk of physical harm to anyone, the charge becomes a
          fifth-degree felony.
        </p>
      </Section>

      <Section title="What the prosecution must prove" tone="ice">
        <p>
          Under ORC 2921.31, beyond a reasonable doubt: (1) you did an act, (2) without privilege to do so, (3) with the purpose to
          prevent, obstruct or delay a public official&apos;s authorized act, and (4) the act hampered or impeded the official in their
          lawful duty. Each element can be challenged, and the state loses if it cannot prove any one of them.
        </p>
        <h3>Common forms of obstruction</h3>
        <ul>
          <li>giving police false identifying information</li>
          <li>making a false statement during an investigation</li>
          <li>hiding or destroying evidence</li>
          <li>warning a suspect about police action</li>
          <li>physically blocking an officer from reaching a location</li>
          <li>interfering with emergency personnel</li>
          <li>refusing a lawful order in a way that impedes an investigation</li>
          <li>creating a disturbance that keeps officers from their duties</li>
        </ul>
        <Callout title="Silence is not obstruction">
          Ohio courts have held that obstruction requires an affirmative act. Failing to act, passive non-cooperation or refusing to
          answer questions generally does not qualify. Remaining silent, refusing consent to a search or declining to help police cannot
          be charged as obstruction.
        </Callout>
        <h3>The felony enhancement, ORC 2921.31(B)</h3>
        <p>
          If the obstruction creates a risk of physical harm to anyone, the offense rises from a second-degree misdemeanor to a
          fifth-degree felony. That can happen when someone physically interferes with an officer in a way that could cause injury,
          creates a distraction in a dangerous situation, or forces officers to turn away from a safety-critical task. The
          enhancement applies only when the conduct put someone in danger, and the prosecution has to prove that risk, not assume it.
        </p>
      </Section>

      <Section title="Obstruction penalties">
        <p>Penalties are set under Ohio Revised Code Chapter 2929.</p>
        <FactTable
          title="Standard obstruction: second-degree misdemeanor"
          rows={[
            { label: 'Jail', value: 'Up to 90 days.' },
            { label: 'Fine', value: 'Up to $750, plus court costs.' },
            { label: 'Other', value: 'Probation with conditions, community service and a permanent criminal record. Courts may add conditions such as anger management classes.' },
          ]}
        />
        <FactTable
          title="Obstruction creating a risk of physical harm: fifth-degree felony"
          rows={[
            { label: 'Prison', value: '6 to 12 months.' },
            { label: 'Fine', value: 'Up to $2,500, plus court costs.' },
            { label: 'Post-release control', value: 'Mandatory.' },
            { label: 'Record', value: 'A permanent felony record.' },
            {
              label: 'Other consequences',
              value: 'Possible loss of voting rights while incarcerated, a federal ban on possessing firearms, and serious employment restrictions.',
            },
          ]}
        />
        <h3>Charges that often come with it</h3>
        <p>
          Resisting arrest (ORC 2921.33), falsification (ORC 2921.13), tampering with evidence (ORC 2921.12), disorderly conduct (ORC
          2917.11) and the offense that started the encounter. Because obstruction so often comes with other charges, the combined penalties can be
          heavier than any one charge suggests, so the firm defends them together.
        </p>
        <h3>Obstruction or resisting arrest?</h3>
        <p>
          The two are often charged together but are not the same offense. Resisting arrest under ORC 2921.33 requires physically
          resisting or interfering with a lawful arrest or the execution of a search warrant. Obstruction under ORC 2921.31 covers
          interference with any public official&apos;s authorized act, with or without physical resistance. When the conduct overlaps,
          both can be filed at once, and each has to be proven separately.
        </p>
      </Section>

      <Section title="What a conviction costs beyond the sentence" tone="ice">
        <p>
          An obstruction conviction limits work in government, law enforcement, security, education and other positions of public trust,
          and professional licenses may be denied or revoked. Employers, landlords and others will see it on a background check. A felony
          conviction goes further: possible loss of gun rights, licensing restrictions across many fields, and barriers to housing and
          education. For non-citizens, a felony conviction can carry serious immigration consequences, including deportation.
        </p>
      </Section>

      <Section
        title="What to do after an obstruction charge in Ohio"
        intro={
          <p>
            Stop talking about the encounter, write down everything you remember, and contact a criminal defense attorney. What you say
            and keep in the first days can decide whether the conduct is shown to be protected.
          </p>
        }
      >
        <Steps
          steps={[
            {
              title: 'Use your right to remain silent',
              body: 'Make no further statements to law enforcement, and do not try to explain or justify what you did without an attorney present. Anything you say can be used against you.',
            },
            {
              title: 'Write down the encounter',
              body: 'The names and badge numbers of the officers involved, any witnesses, what was said and the order things happened in. Obstruction cases turn on exactly what you did and whether it hampered the official, so write it down while you still remember it clearly.',
            },
            {
              title: 'Keep your own recording',
              body: 'If you or someone nearby recorded the encounter, keep the original. Recording police in public is protected, and an independent video can be compared with the body camera and dash camera footage the prosecution must hand over.',
            },
            {
              title: 'Follow your release conditions and court date',
              body: 'Note the arraignment date and any bond conditions. On a misdemeanor most people are released on their own recognizance or a small bond, and keeping to those conditions keeps it that way.',
            },
            {
              title: 'Talk to a criminal defense attorney',
              body: 'An attorney can evaluate whether your conduct actually was obstruction, request the footage early and address any companion charges in one strategy.',
            },
          ]}
        />
      </Section>

      <Section title="How an obstruction case moves through court" tone="ice">
        <Steps
          steps={[
            {
              title: 'Citation or arrest, then arraignment',
              body: 'The charges are read, bond conditions are set and you enter a plea. On a misdemeanor, defendants are usually released on their own recognizance or a small bond. At the felony level, bail may be higher. Your attorney can argue for favorable release conditions and starts building the defense from this first appearance.',
            },
            {
              title: 'Discovery and investigation',
              body: "The prosecution must hand over police reports, body camera and dash camera footage, witness statements and other evidence. Your attorney reviews all of it, and the video most closely, because it shows the encounter from an objective point of view. Body camera footage often decides these cases, because it can show you were exercising your rights or that nothing actually hampered the official's duties.",
            },
            {
              title: 'Pretrial motions',
              body: 'A motion to dismiss can argue the conduct was protected by the First Amendment, that there was no affirmative act, or that the official was not performing an authorized act. A motion to suppress can challenge the encounter itself. A separate motion can attack the felony enhancement where no real risk of physical harm existed.',
            },
            {
              title: 'Negotiation',
              body: 'The charge can be dismissed, a felony enhancement reduced to a misdemeanor, or a better plea reached. Prosecutors often agree to dismiss obstruction as part of a global resolution when the evidence is weak or the conduct arguably fell within constitutional protections.',
            },
            {
              title: 'Trial',
              body: 'Your attorney presents the defense evidence, cross-examines the official about their account, plays the video, calls witnesses and holds the prosecution to every element beyond a reasonable doubt. These cases often turn on the specific details of the encounter and whether your conduct was an affirmative act that actually hampered the official.',
            },
          ]}
        />
      </Section>

      <Section title="Defenses to obstruction">
        <PointGrid
          points={[
            {
              title: 'You were exercising your rights',
              body: 'Remaining silent, refusing consent to a search, asking whether you are free to leave and recording police in public are constitutionally protected and cannot be obstruction. If you were charged for doing one of these things, the defense is strong.',
            },
            {
              title: 'There was no affirmative act',
              body: 'Passive non-cooperation, not volunteering information or refusing to help police is not obstruction. If you only declined to answer questions, refused consent to a search or did not actively assist an investigation, your conduct likely did not meet the affirmative act requirement. Police often misunderstand it.',
            },
            {
              title: 'Nothing was actually hampered',
              body: 'If the officer still completed the investigation, made the arrest or performed the duty despite your conduct, that element is not met, even if what you did was an affirmative act.',
            },
            {
              title: 'No purpose to obstruct',
              body: 'Obstruction requires the specific purpose to prevent, obstruct or delay. Protecting your rights, recording for your own protection or asking legitimate questions is a different purpose. The prosecution must prove your purpose was to obstruct, not only that some obstruction resulted from other conduct.',
            },
            {
              title: 'The act was not authorized',
              body: 'The prosecution must prove the official was performing an authorized act. If the official was acting outside their authority or jurisdiction, the charge may be invalid, so the firm investigates what authority the official actually had.',
            },
            {
              title: 'No risk of physical harm',
              body: 'To keep the felony enhancement, the prosecution must prove the conduct created a risk of physical harm. Without it, the charge should drop to a second-degree misdemeanor, which can mean the difference between prison and a misdemeanor sentence.',
            },
          ]}
        />
      </Section>

      <Section
        title="How obstruction cases can end"
        tone="ice"
        intro={<p>Many obstruction charges end without a conviction for obstruction, through dismissal or a global resolution of the case.</p>}
      >
        <PointGrid
          points={[
            {
              title: 'Dismissal on a pretrial motion',
              body: 'When the conduct was protected, there was no affirmative act, or the official was not performing an authorized act, a motion to dismiss can end the charge.',
            },
            {
              title: 'Dismissal in a global resolution',
              body: 'Prosecutors often agree to dismiss the obstruction count as part of resolving the whole case, particularly when the evidence of actual obstruction is weak.',
            },
            {
              title: 'Felony reduced to a misdemeanor',
              body: 'If the risk of physical harm cannot be proven, the charge drops from a fifth-degree felony to a second-degree misdemeanor, which can mean the difference between prison and a misdemeanor sentence.',
            },
            {
              title: 'A better plea agreement',
              body: 'A negotiated plea can limit the penalties on obstruction and any companion charges.',
            },
            {
              title: 'Acquittal at trial',
              body: 'If the prosecution cannot prove every element beyond a reasonable doubt, the verdict is not guilty.',
            },
            {
              title: 'Sealing after a conviction',
              body: 'If a conviction cannot be avoided, it may later be eligible for sealing or expungement, as described below.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on an obstruction case">
        <PointGrid
          points={[
            { title: 'Protects your rights early', body: 'Advises you against further statements and starts the defense right away.' },
            { title: 'Checks constitutional protections', body: 'Whether the First Amendment or another right covered what you did, including staying silent, refusing a search or recording police.' },
            { title: 'Gets the video', body: "Obtains and reviews all available footage for gaps against the prosecution's account." },
            { title: 'Tests the affirmative act', body: 'Whether your conduct was an act that actually hampered the official, or passive non-cooperation.' },
            { title: 'Fights the felony enhancement', body: 'Shows that no actual risk of physical harm was created.' },
            { title: 'Investigates', body: 'Reviews the evidence and interviews witnesses.' },
            { title: 'Defends every charge together', body: 'One strategy for obstruction and any companion charges.' },
            { title: 'Negotiates', body: 'To dismiss charges, reduce a felony enhancement to a misdemeanor or reach a better plea.' },
            { title: 'Tries the case', body: 'Focused on constitutional protections, the video and every element the state must prove.' },
            { title: 'Seals the record', body: 'Handles record sealing and expungement applications under ORC 2953.32 for eligible clients.' },
          ]}
        />
        <p>
          The firm handles obstruction cases throughout Ohio, from standard misdemeanors to fifth-degree felonies. If you are charged,{' '}
          <Link href="/contact">contact Jwayyed Law LLC</Link> to schedule a consultation. You can also read about the firm&apos;s{' '}
          <Link href="/criminal-defense">criminal defense practice</Link> or the article on{' '}
          <Link href="/our-law-firm/blog/misdemeanor-vs-felony-ohio">misdemeanor vs. felony charges in Ohio</Link>.
        </p>
      </Section>

      <Section title="Record sealing and related charges" tone="ice">
        <p>
          Under Ohio Revised Code 2953.32, an obstruction conviction may be eligible for sealing or expungement. A standard second-degree
          misdemeanor conviction is generally eligible after the waiting period if you meet the requirements. A fifth-degree felony
          conviction has different criteria, but sealing may still be available. A sealed record is hidden from most background checks, which helps restore the job,
          housing and licensing opportunities a record can block. The firm can review your eligibility and handle the application.
        </p>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <LocationsWeServe title="Criminal Defense" />
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
