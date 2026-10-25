import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';
import { criminalDefenseServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Ohio Criminal Defense Attorney',
  description:
    'Misdemeanor defense across Ohio: assault, domestic violence, theft, traffic and license charges, with penalties, the court process and defenses. Call (614) 285-5482.',
  keywords: [
    'Ohio criminal defense attorney',
    'Ohio criminal defense lawyer',
    'criminal defense Ohio',
    'assault defense attorney',
    'drug crimes attorney',
    'domestic violence lawyer',
    'theft defense attorney',
    'misdemeanor defense attorney',
    'Ohio criminal attorney',
  ],
  openGraph: {
    title: 'Ohio Criminal Defense Attorney | Jwayyed Law LLC',
    description: 'Criminal defense throughout Ohio, from arraignment through trial and record sealing. Schedule a consultation.',
    url: 'https://www.jjlawohio.com/criminal-defense',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/criminal-defense',
  },
};

const breadcrumbItems = [{ label: 'Criminal Defense', href: '/criminal-defense' }];

const faqs = [
  {
    question: 'What should I do if I am arrested in Ohio?',
    answer:
      'Stay calm and use your constitutional rights. You have the right to remain silent, and you should not answer questions without an attorney present. You have the right to an attorney, and if you cannot afford one, the court will appoint one. Contact a criminal defense attorney as soon as you can, and do not discuss your case with anyone except your attorney.',
  },
  {
    question: 'What is the difference between a misdemeanor and a felony in Ohio?',
    answer:
      'Misdemeanors are the less serious crimes, punishable by fines and up to 12 months in jail, and are classified as first, second, third or fourth degree. Felonies are more serious and carry prison terms from six months to life. Ohio felonies are first through fifth degree. The level of the charge shapes the penalties, your record and your future opportunities.',
  },
  {
    question: 'How much does a criminal defense attorney cost in Ohio?',
    answer:
      'Fees depend on how complex the case is, how serious the charges are, the attorney’s experience and the time the case needs. Many attorneys offer payment plans, and some cases qualify for court-appointed counsel if you cannot afford a lawyer. Fees and payment options for your case can be discussed at a consultation.',
  },
  {
    question: 'What are my rights during an arrest in Ohio?',
    answer:
      'Under the Fifth Amendment you have the right to remain silent and cannot be compelled to testify against yourself. Under the Sixth Amendment you have the right to an attorney, and you should ask for one right away. You have the right to know the charges against you, and the right to refuse a search without a warrant or probable cause, with limited exceptions. Anything you say can be used against you, so stay silent until you have a lawyer.',
  },
  {
    question: 'What is the difference between misdemeanor and felony charges in Ohio?',
    answer:
      'They are sentenced very differently. Under ORC 2929.21, a first-degree misdemeanor is capped at 180 days in jail and a $1,000 fine. Felonies fall under ORC 2929.14, with prison terms from 6-12 months for a fifth-degree felony (F5) up to 3-11 years (or more) for a first-degree felony (F1). A felony also brings long-term consequences: loss of voting rights, loss of gun rights and bigger barriers to work and housing. Jwayyed Law LLC represents clients in both misdemeanor and felony matters, reviews each case individually, and can refer clients to specialists when appropriate.',
  },
  {
    question: 'What happens at an arraignment in Ohio?',
    answer:
      'Arraignment is your first formal court appearance after a charge. The judge reads the charges, explains your rights and asks for your plea, which is usually not guilty at this stage. The court also sets bail or bond conditions. A not guilty plea preserves your rights and gives your attorney time to review discovery, investigate and build the defense. It is also your attorney’s first chance to argue for reasonable bail.',
  },
  {
    question: "How does Ohio's record sealing statute work after a conviction?",
    answer:
      'Under ORC 2953.32, eligible people can apply to seal a criminal record after a conviction. For most misdemeanors, the waiting period is one year after you complete your sentence (including probation). A sealed record is hidden from the public and most employers, though law enforcement and some licensing agencies can still see it. Not every offense is eligible; some violent offenses and sex offenses are excluded. An attorney can review your eligibility and handle the application.',
  },
  {
    question: 'What are the collateral consequences of a criminal conviction in Ohio beyond jail and fines?',
    answer:
      'A misdemeanor or felony conviction can cost you jobs, since employers routinely run background checks; professional licenses regulated by Ohio agencies; and rental housing. For non-citizens, some convictions trigger removal or inadmissibility proceedings. A felony conviction ends firearm rights under ORC 2923.13 and federal law, and a domestic violence misdemeanor conviction brings a lifetime federal firearms ban under 18 USC 922(g)(9). Limiting these consequences is part of the defense.',
  },
];

// Statutes as the firm's practice-area grid cited them.
const STATUTE: Record<string, string> = {
  '/criminal-defense/assault-charges': 'ORC 2903.13, simple through aggravated assault.',
  '/criminal-defense/domestic-violence': 'ORC 2919.25.',
  '/criminal-defense/criminal-mischief': 'ORC 2909.07.',
  '/criminal-defense/criminal-trespass': 'ORC 2911.21.',
  '/criminal-defense/petty-theft': 'ORC 2913.02.',
  '/criminal-defense/resisting-arrest': 'ORC 2921.33.',
  '/criminal-defense/obstruction-of-official-business': 'ORC 2921.31.',
  '/criminal-defense/speeding-tickets': 'ORC 4511.21, including points and CDL issues.',
  '/criminal-defense/driving-under-suspension': 'ORC 4510.11-4510.16, and license reinstatement.',
  '/criminal-defense/no-operators-license': 'ORC 4510.12.',
  '/criminal-defense/expungement-record-sealing': 'ORC Chapter 2953.',
};

const CHARGES = criminalDefenseServices.map((s) => ({
  href: s.href,
  title: s.title,
  subtitle: [s.description, STATUTE[s.href]].filter(Boolean).join(' '),
}));

const COUNTIES = [
  {
    href: '/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court',
    title: 'Franklin County',
    subtitle: 'Columbus and Franklin County Municipal Court',
  },
  {
    href: '/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court',
    title: 'Delaware County',
    subtitle: 'Delaware County Municipal Court',
  },
  {
    href: '/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts',
    title: 'Butler County',
    subtitle: 'Hamilton Municipal Court; Hamilton, Oxford, West Chester',
  },
  {
    href: '/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court',
    title: 'Greene County',
    subtitle: 'Fairborn Municipal Court and surrounding areas',
  },
  {
    href: '/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court',
    title: 'Montgomery County',
    subtitle: 'Dayton Municipal Court and surrounding areas',
  },
  {
    href: '/locations/pickaway-county/criminal-misdemeanor-defense-circleville-municipal-court',
    title: 'Pickaway County',
    subtitle: 'Circleville Municipal Court and surrounding areas',
  },
  {
    href: '/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court',
    title: 'Athens County',
    subtitle: 'Athens Municipal Court and surrounding areas',
  },
  {
    href: '/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court',
    title: 'Morrow County',
    subtitle: 'Morrow County Municipal Court; Mount Gilead, Cardington and surrounding areas',
  },
  {
    href: '/locations/clinton-county/criminal-misdemeanor-defense-clinton-county-wilmington-municipal-court',
    title: 'Clinton County',
    subtitle: 'Wilmington Municipal Court and surrounding areas',
  },
];

export default function CriminalDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio criminal defense"
        description="Misdemeanor charges in courts across Ohio, from assault and theft to traffic and license offenses. A first-degree misdemeanor alone carries up to 180 days in jail and a $1,000 fine."
      />

      <Section title="Find your charge" intro={<p>Each page covers the statute, the penalties, the process and the defenses for that charge.</p>}>
        <LinkGrid links={CHARGES} />
      </Section>

      <KeyFacts
        facts={[
          { figure: '180 days', label: 'maximum jail for a first-degree misdemeanor' },
          { figure: '$1,000', label: 'maximum fine for a first-degree misdemeanor' },
          { figure: '6-12 months', label: 'prison range for a fifth-degree felony' },
          { figure: '1 year', label: 'after most misdemeanor sentences end before you can apply to seal the record' },
        ]}
      />

      <Section
        title="What a criminal charge puts at stake"
        tone="ice"
        intro={
          <p>
            Jwayyed Law LLC defends people charged with misdemeanor crimes under the Ohio Revised Code, in courts across the state.
          </p>
        }
      >
        <p>
          Ohio classifies offenses as misdemeanors or felonies, each with its own sentencing structure. Beyond any jail time, a
          conviction can cost you a job, a professional license, housing and your reputation. The firm challenges the evidence,
          negotiates with prosecutors and tries the case when that is the better course.
        </p>
        <p>
          A criminal record follows you after the sentence is served. These collateral consequences last long after the jail time is
          finished and the fines are paid:
        </p>
        <PointGrid
          points={[
            {
              title: 'Employment',
              body: 'Many employers run background checks and may refuse to hire someone with a conviction, particularly a felony or an offense involving dishonesty.',
            },
            {
              title: 'Professional licenses',
              body: 'Licenses in healthcare, education, law enforcement, finance, real estate and other regulated fields may be denied or revoked.',
            },
            { title: 'Housing', body: 'Landlords often run background checks and may reject applications from people with a criminal record.' },
            {
              title: 'Education',
              body: 'A conviction can affect financial aid eligibility, admission to certain programs and professional school applications.',
            },
            {
              title: 'Gun rights',
              body: 'A felony conviction results in permanent loss of the right to possess firearms under federal law. Gun rights may be lost for certain other serious convictions.',
            },
            {
              title: 'Immigration',
              body: 'For non-citizens, a conviction can lead to deportation, denial of naturalization or inadmissibility.',
            },
            { title: 'Voting', body: 'A felony conviction results in loss of voting rights until they are restored.' },
            { title: 'Custody', body: 'A conviction can significantly affect custody and visitation decisions in family court.' },
            { title: 'Insurance', body: 'Certain convictions raise insurance premiums.' },
            {
              title: 'A lasting record',
              body: 'A criminal record stays visible to employers, landlords and anyone else running a background check unless it is sealed or expunged.',
            },
          ]}
        />
        <h3>Traffic and license charges are criminal cases too</h3>
        <p>
          A speeding ticket is a conviction once it is paid, and it adds 2 or 4 points to your Ohio driving record; 12 points within
          two years brings a six-month license suspension. For a CDL holder, two serious violations within three years mean a 60-day
          disqualification. Driving without a valid license under ORC 4510.12 carries a fine of up to $150 plus court costs on a first
          offense, and a conviction creates a criminal record. See{' '}
          <Link href="/criminal-defense/speeding-tickets">speeding tickets</Link> and{' '}
          <Link href="/criminal-defense/no-operators-license">no operator&apos;s license</Link> for the details.
        </p>
        <h3>Charges that arrive together</h3>
        <p>
          A single police encounter often produces several charges. Resisting arrest and obstruction of official business are
          commonly filed alongside the offense that started the encounter, and together they can mean stacked fines and several
          entries on your record. The firm defends all of them in one strategy, because the outcome on one charge affects the others.
        </p>
      </Section>

      <Section title="Ohio criminal penalties by degree">
        <p>
          Ohio Revised Code Chapter 2929 sets penalties by the degree of the offense. These are maximum sentences. Within them, your
          prior criminal history, the severity of the offense, the impact on any victim and the presence of a weapon can all affect
          the sentence a judge imposes.
        </p>
        <FactTable
          title="Misdemeanors"
          rows={[
            { label: 'First degree misdemeanor', value: 'Up to 180 days in jail, fines up to $1,000.' },
            { label: 'Second degree misdemeanor', value: 'Up to 90 days in jail, fines up to $750.' },
            { label: 'Third degree misdemeanor', value: 'Up to 60 days in jail, fines up to $500.' },
            { label: 'Fourth degree misdemeanor', value: 'Up to 30 days in jail, fines up to $250.' },
          ]}
        />
        <FactTable
          title="Felonies"
          rows={[
            {
              label: 'First degree felony (F-1)',
              value:
                '3-11 years indefinite imprisonment (for offenses after March 22, 2019, the maximum equals the minimum plus 50%), fines up to $20,000.',
            },
            { label: 'Second degree felony (F-2)', value: '2-8 years indefinite imprisonment (for offenses after March 22, 2019), fines up to $15,000.' },
            { label: 'Third degree felony (F-3)', value: '9-36 months imprisonment, fines up to $10,000.' },
            { label: 'Fourth degree felony', value: '6-18 months imprisonment, fines up to $5,000.' },
            { label: 'Fifth degree felony', value: '6-12 months imprisonment, fines up to $2,500.' },
          ]}
        />
        <p>
          Under Ohio Revised Code 2929.12, judges weigh aggravating and mitigating factors. Prior convictions, weapons, harm to victims,
          offenses committed in front of children and gang activity can raise a sentence. No prior record, real remorse, cooperation
          with authorities, or facts that make the offense less serious than usual can lower it.
        </p>
        <Callout title="Some sentences cannot be reduced">
          Certain offenses carry mandatory minimums that cannot be suspended or reduced. Some drug trafficking amounts trigger a
          mandatory 5-year minimum prison term, and some violent offenses carry mandatory prison. They matter when weighing a plea offer, and an attorney can explain how
          any mandatory minimum applies to your case and work to avoid or limit it where possible.
        </Callout>
      </Section>

      <Section
        title="What to do in the first days after a criminal charge in Ohio"
        tone="ice"
        intro={
          <p>
            Use your right to remain silent, keep your court date, write down what happened, and talk to a criminal defense attorney
            before you make any decision about a plea. Early action can lead to a dismissal, reduced penalties or a better plea.
          </p>
        }
      >
        <Steps
          steps={[
            {
              title: 'Stay silent and ask for an attorney',
              body: 'You have the right to remain silent and the right to an attorney, and if you cannot afford one the court will appoint one. Anything you say can be used against you, so do not answer questions about the case without an attorney present.',
            },
            {
              title: 'Do not discuss the case with anyone but your attorney',
              body: 'That includes friends, family, the other people involved, store security and social media. Statements you make outside court can become evidence.',
            },
            {
              title: 'Write down what happened',
              body: 'While your memory is fresh, note the time and place, what was said, the names and badge numbers of the officers, and anyone who saw it. Many defenses turn on details that are hard to recall weeks later.',
            },
            {
              title: 'Keep documents and evidence',
              body: 'Your citation or charging papers, bond paperwork, receipts, messages, photographs, and any video you or a witness recorded. If you were injured, get treatment and keep the medical records.',
            },
            {
              title: 'Note your court date and release conditions',
              body: 'Missing a court date can lead to a bench warrant and more charges. Follow any bond conditions the court set at arraignment.',
            },
            {
              title: 'Tell your attorney what else is at stake',
              body: 'If you hold a professional license, drive for a living, are not a U.S. citizen or have a prior record, say so at the start. Those facts shape which outcome matters most for you.',
            },
          ]}
        />
        <Callout title="An OVI charge has its own 30-day deadline">
          If you were arrested for OVI, the administrative license suspension runs separately from the criminal case, and the appeal
          must be filed within 30 days of the arrest. See <Link href="/ovi-dui-defense/first-ovi">first OVI defense in Ohio</Link>.
        </Callout>
      </Section>

      <Section
        title="How a criminal case moves through court"
        intro={
          <p>
            Most Ohio criminal cases move through the same stages: arraignment, discovery, pretrial motions, plea negotiations and, if
            the case does not resolve, trial and sentencing. Decisions at each stage shape the next.
          </p>
        }
      >
        <Steps
          steps={[
            {
              title: 'Arrest and arraignment',
              body: 'The charges are read, bail is set and you enter a plea, usually not guilty, which preserves your rights. An attorney can argue for lower bail, release on recognizance or house arrest, and request police reports, witness statements and other evidence early. The not guilty plea gives your attorney time to investigate and prepare the defense.',
            },
            {
              title: 'Discovery and investigation',
              body: 'The prosecution must hand over the evidence it plans to use. Your attorney reviews it, investigates independently, interviews witnesses and examines forensic evidence and surveillance footage. Forensic, medical or use-of-force experts may be consulted. This is where weaknesses in the prosecution’s case, constitutional violations and evidence that supports a defense usually come to light.',
            },
            {
              title: 'Pretrial motions',
              body: 'A motion to suppress if evidence was obtained illegally, your rights were violated at arrest or statements were coerced. A motion to dismiss for insufficient evidence, an expired statute of limitations or procedural error. A motion to compel discovery the prosecution has not provided. These motions can end in dismissal or keep damaging evidence out of the case.',
            },
            {
              title: 'Plea negotiations',
              body: 'Most criminal cases resolve here. Options include a reduced charge (for example, aggravated to simple), a better plea agreement, alternative sentencing such as diversion or treatment instead of jail, or dismissal once conditions are met. What is realistic depends on local court practice, the prosecutor’s policies and the strength of the case.',
            },
            {
              title: 'Trial',
              body: 'Your attorney presents the defense, cross-examines the prosecution’s witnesses, calls experts when needed and argues to the jury. A not guilty verdict ends the charges.',
            },
            {
              title: 'Sentencing',
              body: 'If there is a conviction, by plea or verdict, the judge weighs the aggravating and mitigating factors under ORC 2929.12. Your attorney presents mitigating evidence and argues for the minimum sentence or an alternative such as probation or treatment.',
            },
            {
              title: 'Record sealing and other relief',
              body: 'After the sentence, eligible records can be sealed or expunged under ORC Chapter 2953. Sentence modification and appeals are available in some cases.',
            },
          ]}
        />
      </Section>

      <Section
        title="How criminal cases in Ohio can end"
        tone="ice"
        intro={<p>Most criminal cases end through negotiation, not trial. A case can also end in dismissal, diversion or a verdict.</p>}
      >
        <PointGrid
          points={[
            {
              title: 'Dismissal',
              body: 'Through a pretrial motion for insufficient evidence, an expired statute of limitations or a procedural error, or after evidence is suppressed because it was obtained illegally.',
            },
            {
              title: 'A reduced charge',
              body: 'For example, an aggravated offense reduced to the simple version, which lowers the degree and the possible penalties.',
            },
            {
              title: 'Diversion or treatment',
              body: 'Diversion programs or treatment in place of jail, often with the charge dismissed once the conditions are completed.',
            },
            {
              title: 'A plea agreement',
              body: 'A negotiated plea that limits the penalties and the long-term consequences of the conviction.',
            },
            { title: 'A verdict at trial', body: 'A not guilty verdict ends the charges. A conviction moves the case to sentencing.' },
            {
              title: 'Alternative sentencing',
              body: 'If there is a conviction, probation, treatment programs or the minimum sentence in place of the maximum.',
            },
          ]}
        />
        <p>
          A conviction does not have to be permanent. Many misdemeanor records can be sealed after a waiting period; see{' '}
          <Link href="/criminal-defense/expungement-record-sealing">expungement and record sealing</Link> for the rules.
        </p>
      </Section>

      <Section title="Common defenses in criminal cases">
        <p>Which defense applies depends on the charge and the facts.</p>
        <PointGrid
          points={[
            {
              title: 'Constitutional defenses',
              body: 'An illegal search or seizure (Fourth Amendment), a coerced confession or violation of the right to remain silent (Fifth Amendment), or denial of counsel (Sixth Amendment) can lead to suppressed evidence or dismissal. An attorney identifies the violation and files the motion to suppress or dismiss.',
            },
            {
              title: 'Factual defenses',
              body: 'These challenge the prosecution’s version of events: alibi (you were elsewhere), self-defense (you acted to protect yourself), defense of others, lack of intent, mistaken identity or insufficient evidence. They depend on investigation, gathering evidence and how it is presented to the court or jury.',
            },
            {
              title: 'Procedural defenses',
              body: 'These challenge how the case was handled: the statute of limitations (charges filed too late), double jeopardy (being tried twice for the same offense) or prosecutorial misconduct. They can end in dismissal.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a criminal case" tone="ice">
        <PointGrid
          points={[
            { title: 'Protects your rights from arrest', body: 'The right to remain silent, the right to counsel and protection against illegal searches and seizures.' },
            { title: 'Reviews the case', body: 'Police reports, evidence, witness statements, forensic reports and all discovery, looking for weak points and violations.' },
            { title: 'Checks your constitutional rights', body: 'Fourth Amendment search and seizure, Fifth Amendment self-incrimination and due process, Sixth Amendment counsel and confrontation.' },
            { title: 'Challenges the evidence', body: 'Illegal searches, flawed forensic testing, unreliable witnesses, coerced statements and chain of custody problems, through pretrial motions.' },
            { title: 'Builds the defense', body: 'Self-defense, lack of intent, mistaken identity, alibi, insufficient evidence or false allegations, based on investigation.' },
            { title: 'Brings in experts', body: 'Forensic, medical, use-of-force and other specialists to test the prosecution’s evidence.' },
            { title: 'Negotiates', body: 'For reduced charges, a better plea, alternative sentencing or dismissal once conditions are met.' },
            { title: 'Tries the case', body: 'Cross-examination, expert testimony and argument at trial.' },
            { title: 'Argues at sentencing', body: 'Presents mitigating evidence and argues for minimum or alternative sentences such as treatment or probation.' },
            { title: 'Handles post-conviction relief', body: 'Record sealing, expungement, sentence modification and appeals when appropriate.' },
          ]}
        />
        <p>
          The firm handles cases from arrest through trial and post-conviction relief. If you are charged anywhere in Ohio,{' '}
          <Link href="/contact">schedule a consultation</Link> to go over your rights, the possible defenses and a plan for your case.
          Early action can lead to a dismissal, reduced penalties or a better plea.
        </p>
      </Section>

      <Section title="Criminal defense in your county">
        <p>Each county page covers its courts and local details.</p>
        <LinkGrid links={COUNTIES} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
