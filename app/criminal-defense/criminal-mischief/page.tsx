import RelatedArticles from '@/components/practice/RelatedArticles';
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Criminal Mischief Defense Ohio',
  description:
    'Charged with criminal mischief under ORC 2909.07? Penalties, the types of the offense, criminal mischief defense and record sealing. Call (614) 285-5482.',
  keywords: [
    'criminal mischief lawyer Ohio',
    'property damage defense attorney',
    'criminal mischief ORC 2909.07',
    'misdemeanor criminal mischief Ohio',
    'vandalism charges attorney',
    'criminal damaging defense lawyer',
    'Ohio property damage lawyer',
    'criminal mischief penalties Ohio',
    'property crime defense attorney',
    'criminal mischief defense attorney',
    'facing criminal mischief charges',
  ],
  openGraph: {
    title: 'Criminal Mischief Defense Ohio | Jwayyed Law LLC',
    description: 'Penalties, defenses and record sealing for a criminal mischief charge under ORC 2909.07.',
    url: 'https://www.jjlawohio.com/criminal-defense/criminal-mischief',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/criminal-defense/criminal-mischief',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Criminal Mischief', href: '/criminal-defense/criminal-mischief' },
];

const faqs = [
  {
    question: 'What is criminal mischief under Ohio law?',
    answer:
      'Criminal mischief under Ohio Revised Code 2909.07 means knowingly moving, defacing, damaging, destroying or otherwise improperly tampering with another person\'s property without the owner\'s consent. Examples include graffiti, breaking windows, slashing tires, damaging mailboxes and tampering with utility equipment. It is usually charged as a third-degree misdemeanor, punishable by up to 60 days in jail and a fine of up to $500.',
  },
  {
    question: 'What are the penalties for criminal mischief in Ohio?',
    answer:
      'Criminal mischief is generally a third-degree misdemeanor under ORC 2909.07: up to 60 days in jail, a fine of up to $500, restitution to the property owner, court costs and a criminal record. If the property is an occupied aircraft, it becomes a first-degree misdemeanor punishable by up to 180 days in jail and a fine of up to $1,000. Repeat offenses or significant damage can also lead to a more serious charge such as criminal damaging under ORC 2909.06.',
  },
  {
    question: 'What is the difference between criminal mischief and criminal damaging in Ohio?',
    answer:
      'Criminal mischief under ORC 2909.07 is tampering with, defacing or otherwise improperly handling property, and is usually a third-degree misdemeanor. Criminal damaging or endangering under ORC 2909.06 is more serious: knowingly causing physical harm to property, or creating a substantial risk of it through fire, explosion, flood or other means. Criminal damaging is generally a second-degree misdemeanor, but the circumstances and the value of the property can raise it to a felony.',
  },
  {
    question: 'Can criminal mischief charges be expunged from my record in Ohio?',
    answer:
      'Yes. A criminal mischief conviction may be eligible for expungement or record sealing under Ohio Revised Code 2953.32. Because it is a misdemeanor, you may apply after the waiting period if you meet the requirements, including having no more than the allowed number of prior convictions. An attorney can check your eligibility and handle the application.',
  },
  {
    question: 'What should I do if I am charged with criminal mischief in Ohio?',
    answer:
      'Use your right to remain silent and contact a criminal defense attorney right away. Do not talk to police without your attorney present. Do not contact the property owner or try to settle the matter yourself, because that can be used against you. Keep any evidence that helps you, such as an alibi, witness names or photographs. An attorney can protect your rights and negotiate with the prosecutor for a dismissal or a reduced charge.',
  },
  {
    question: 'What conduct does criminal mischief cover in Ohio?',
    answer:
      'Criminal mischief under Ohio Revised Code 2909.07 covers knowingly tampering with safety devices or equipment, defacing or damaging property, interfering with boundary markers, or otherwise improperly handling another person\'s property without consent. It includes tampering with fire hydrants, extinguishers and other safety equipment. The base offense is a third-degree misdemeanor (M3), punishable by up to 60 days in jail and a fine of up to $500. When an occupied aircraft is involved, it becomes a first-degree misdemeanor.',
  },
  {
    question: 'How does criminal mischief differ from vandalism under Ohio law?',
    answer:
      'Ohio has no standalone misdemeanor called vandalism. What people call vandalism may be charged as criminal mischief (ORC 2909.07, M3 base) for minor damage such as graffiti or defacement; criminal damaging (ORC 2909.06, M2) for knowingly causing physical harm to property; or vandalism (ORC 2909.05, a felony) when the damage passes the value thresholds or involves government property or critical infrastructure. The charge depends on the value of the damage, the kind of property and how the harm was caused.',
  },
  {
    question: 'What are the penalties for criminal mischief and can it be sealed in Ohio?',
    answer:
      'A standard criminal mischief conviction under ORC 2909.07 is a third-degree misdemeanor (M3): up to 60 days in jail, a fine of up to $500, restitution and a permanent criminal record. If an occupied aircraft is involved, it becomes a first-degree misdemeanor. Under Ohio Revised Code 2953.32, a criminal mischief conviction is generally eligible for sealing after a one-year waiting period from the end of your sentence, if you meet the requirements, including having no more than the allowed number of prior convictions. An attorney can check your eligibility and handle the process.',
  },
];

const RELATED = [
  { href: '/criminal-defense/criminal-damaging', title: 'Criminal damaging', subtitle: 'Property damage and destruction charges' },
  { href: '/criminal-defense/criminal-trespass', title: 'Criminal trespass', subtitle: 'Trespass and unauthorized entry defense' },
  { href: '/criminal-defense/petty-theft', title: 'Petty theft', subtitle: 'Shoplifting and theft defense in Ohio' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Clearing a criminal record under Ohio law' },
];

export default function CriminalMischiefPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal mischief charges in Ohio"
        description="Criminal mischief under ORC 2909.07 is usually a third-degree misdemeanor: up to 60 days in jail and a fine of up to $500, plus restitution."
      />

      <KeyFacts
        facts={[
          { figure: '60 days', label: 'maximum jail for criminal mischief, a third-degree misdemeanor' },
          { figure: '$500', label: 'maximum fine, plus restitution and court costs' },
          { figure: '180 days', label: 'maximum jail when an occupied aircraft is involved (first-degree misdemeanor)' },
        ]}
      />

      <Section
        title="What a criminal mischief charge means"
        intro={
          <p>
            Criminal mischief is a misdemeanor under Ohio Revised Code 2909.07. It covers tampering with, defacing, damaging or
            destroying another person&rsquo;s property without permission.
          </p>
        }
      >
        <p>
          The conduct ranges from graffiti and vandalism to tampering with utility equipment or moving boundary markers. The facts of
          each case set the charge and the penalties. It can look like a minor charge, but a conviction leaves a permanent criminal
          record that can affect jobs, housing and professional licenses.
        </p>
        <p>Jwayyed Law LLC defends criminal mischief charges under ORC 2909.07 throughout Ohio.</p>
        <h3>What the prosecution has to prove</h3>
        <FactTable
          title="Elements of criminal mischief (ORC 2909.07)"
          rows={[
            { label: 'Mental state', value: 'You acted knowingly. Accidental damage does not meet this element.' },
            {
              label: 'The act',
              value: 'You moved, defaced, damaged, destroyed or otherwise improperly tampered with the property.',
            },
            { label: 'Property of another', value: 'The property belonged to someone else, not to you.' },
            { label: 'No consent', value: "The owner did not give permission, written, verbal or implied." },
            { label: 'Identity', value: 'You were the person who did it, proved beyond a reasonable doubt.' },
          ]}
        />
      </Section>

      <LocationsWeServe title="Criminal Defense" />

      <Section title="Types of criminal mischief under ORC 2909.07" tone="ice">
        <FactTable
          title="What the statute covers"
          rows={[
            {
              label: 'Tampering with property (2909.07(A)(1))',
              value:
                'Knowingly moving, defacing, damaging, destroying or otherwise improperly tampering with property of another without consent: graffiti, scratched vehicles, broken windows, damaged fences, defaced public property. Usually a third-degree misdemeanor.',
            },
            {
              label: 'Boundary markers (2909.07(A)(2))',
              value:
                'Knowingly moving, removing or tampering with boundary markers, survey stakes or monuments without authorization. These charges often grow out of property line disputes that belonged in civil court. A third-degree misdemeanor.',
            },
            {
              label: 'Safety devices (2909.07(A)(3))',
              value:
                'Knowingly tampering with fire hydrants, fire extinguishers, safety devices or other emergency equipment without authorization. Treated seriously because it can endanger the public; the charge may be raised depending on the circumstances.',
            },
            {
              label: 'Occupied aircraft (2909.07(B))',
              value: 'A first-degree misdemeanor: up to 180 days in jail and a fine of up to $1,000.',
            },
          ]}
        />
      </Section>

      <Section
        title="Criminal mischief, criminal damaging or vandalism"
        intro={
          <p>
            Ohio has no standalone misdemeanor called vandalism. What people call vandalism is charged under one of three statutes,
            depending on the value of the damage, the kind of property and how the harm was caused.
          </p>
        }
      >
        <FactTable
          title="Which charge applies"
          rows={[
            {
              label: 'Criminal mischief (ORC 2909.07)',
              value: 'Tampering, defacement and minor damage such as graffiti. A third-degree misdemeanor: up to 60 days in jail and a fine of up to $500.',
            },
            {
              label: 'Criminal damaging (ORC 2909.06)',
              value:
                'Knowingly causing physical harm to property, or creating a substantial risk of it by fire, explosion, flood or other means. A second-degree misdemeanor: up to 90 days in jail and a fine of up to $750.',
            },
            {
              label: 'Vandalism (ORC 2909.05)',
              value: 'A felony, when the damage passes the value thresholds or involves government property or critical infrastructure.',
            },
          ]}
        />
        <p>
          Which statute fits sets the penalty range. Showing that the conduct was tampering rather than physical harm, or that the
          damage falls under the threshold, keeps the case at the lower level. See{' '}
          <Link href="/criminal-defense/criminal-damaging">criminal damaging</Link> for that charge.
        </p>
      </Section>

      <Section title="Criminal mischief penalties in Ohio" tone="ice">
        <p>Sentencing falls under Ohio Revised Code Chapter 2929. The type of mischief decides the degree.</p>
        <FactTable
          title="Standard criminal mischief: third-degree misdemeanor"
          rows={[
            { label: 'Jail', value: 'Up to 60 days.' },
            { label: 'Fines', value: 'Up to $500, plus court costs.' },
            { label: 'Restitution', value: 'Payment to the owner, including cleanup or repair of the damaged property.' },
            { label: 'Other terms', value: 'Probation with conditions and community service.' },
            { label: 'Record', value: 'A permanent criminal record.' },
          ]}
        />
        <FactTable
          title="Occupied aircraft: first-degree misdemeanor"
          rows={[
            { label: 'Jail', value: 'Up to 180 days.' },
            { label: 'Fines', value: 'Up to $1,000, plus court costs.' },
            { label: 'Restitution', value: 'Often significant.' },
            { label: 'Record', value: 'A permanent criminal record.' },
          ]}
        />
        <FactTable
          title="When significant damage brings a more serious charge"
          rows={[
            {
              label: 'Criminal damaging (ORC 2909.06)',
              value: 'A second-degree misdemeanor: up to 90 days in jail and a fine of up to $750.',
            },
            {
              label: 'Further escalation',
              value: 'Possible when the damage involves government property or fire safety equipment, or creates a risk of physical harm.',
            },
            { label: 'Vandalism (ORC 2909.05)', value: 'A felony that applies when the damage passes certain thresholds.' },
          ]}
        />
        <h3>Restitution and civil liability</h3>
        <p>
          Courts usually order restitution to cover repair or replacement. The owner can also file a separate civil suit for damages,
          possibly including treble damages under Ohio law.
        </p>
        <h3>Consequences beyond criminal penalties</h3>
        <p>
          Employers running background checks may view a property crime conviction unfavorably. Housing applications may be rejected,
          professional licenses in some fields may be affected, and educational opportunities and financial aid can suffer. For
          juveniles, a conviction can affect college admissions and scholarships.
        </p>
      </Section>

      <Section
        title="Common situations behind criminal mischief charges"
        intro={
          <p>
            The same statute covers very different conduct, and each kind of case tends to turn on a different question.
          </p>
        }
      >
        <PointGrid
          points={[
            {
              title: 'Graffiti and defacement',
              body: 'Often done with no witnesses, so the charge may rest on circumstantial evidence, surveillance footage or a shaky identification. Identity is usually the fight.',
            },
            {
              title: 'Cars, windows, tires and mailboxes',
              body: 'Scratched vehicles, broken windows, slashed tires and damaged mailboxes. The amount of damage drives restitution and whether the charge stays at mischief.',
            },
            {
              title: 'Boundary markers and survey stakes',
              body: 'Usually a property line dispute. If you have a legitimate claim to the land, or the dispute belonged in civil court, that is the defense.',
            },
            {
              title: 'Fire hydrants and safety equipment',
              body: 'Tampering with hydrants, extinguishers or other emergency equipment is treated seriously because it can endanger the public, and the charge may be raised.',
            },
            {
              title: 'Utility equipment',
              body: 'Tampering with utility equipment is also covered. Whether you had authorization, or a reasonable belief that you did, is the key question.',
            },
            {
              title: 'Shared or disputed property',
              body: 'Property you own or have a legitimate claim to, or that you believed you were allowed to move or change. The property must belong to another, and consent is a complete defense.',
            },
          ]}
        />
      </Section>

      <Section
        title="What to do after a criminal mischief citation"
        tone="ice"
        intro={
          <p>
            Stay silent, do not contact the property owner, and keep the evidence that helps you. Trying to settle it yourself can be
            used against you.
          </p>
        }
      >
        <Steps
          steps={[
            {
              title: 'Use your right to remain silent',
              body: 'Do not talk to police about the damage without your attorney present.',
            },
            {
              title: 'Do not contact the owner',
              body: 'Apologizing, offering to pay or trying to settle the matter yourself can be used against you. Restitution is better negotiated through your attorney.',
            },
            {
              title: 'Keep the evidence',
              body: 'Anything that shows an alibi, the names of witnesses, and photographs of the property and the scene.',
            },
            {
              title: 'Note any permission',
              body: 'If the owner allowed you to move, change or handle the property, write down when and how. Written, verbal and implied consent all count.',
            },
            {
              title: 'Go to the arraignment with an attorney',
              body: 'On a misdemeanor, release on your own recognizance or a low bond is common, and your attorney can argue for good release terms.',
            },
          ]}
        />
      </Section>

      <Section title="The criminal court process for criminal mischief">
        <Steps
          steps={[
            {
              title: 'Citation or arrest, then arraignment',
              body: 'The case may start with a citation at the scene or an arrest. At arraignment the charges are read, bond conditions are set and you enter a plea. On a misdemeanor, release on your own recognizance or a low bond is common, and your attorney can argue for good release terms.',
            },
            {
              title: 'Discovery and investigation',
              body: "The prosecution must turn over its evidence: police reports, witness statements, photos of the damage and surveillance footage. Your attorney reviews it, interviews witnesses and looks for evidence of lack of intent, mistaken identity or consent.",
            },
            {
              title: 'Pretrial negotiations',
              body: 'Most misdemeanor mischief cases resolve here. Options include a reduced or dismissed charge, a diversion program, community service instead of jail, or a plea with lighter consequences. Prosecutors may offer first-time offenders alternatives to a conviction.',
            },
            {
              title: 'Trial',
              body: 'A misdemeanor trial in Ohio can be in front of a judge (a bench trial) or a jury. Your attorney presents your defense, cross-examines the witnesses and argues for acquittal.',
            },
          ]}
        />
      </Section>

      <Section
        title="How criminal mischief cases end in Ohio"
        tone="ice"
        intro={<p>Most misdemeanor mischief cases resolve before trial. These are the usual outcomes.</p>}
      >
        <PointGrid
          points={[
            { title: 'Dismissal', body: 'When the state cannot prove intent, identity, lack of consent or that the property belonged to someone else.' },
            { title: 'A reduced charge', body: 'A plea to a lesser offense, negotiated with the prosecutor.' },
            { title: 'Diversion', body: 'A diversion program. Prosecutors may offer first-time offenders alternatives to a conviction.' },
            { title: 'Community service instead of jail', body: 'Restitution amounts and payment terms are negotiated alongside it.' },
            { title: 'A plea with lighter consequences', body: 'A plea agreement that limits the sentence and the record.' },
            { title: 'Acquittal', body: 'At a bench trial or a jury trial, if the state does not prove every element beyond a reasonable doubt.' },
          ]}
        />
      </Section>

      <Section title="Criminal mischief defense strategies">
        <PointGrid
          points={[
            {
              title: 'Lack of intent',
              body: 'The offense requires that you acted knowingly. Accidental damage, or not knowing the property belonged to someone else, can lead to a reduced or dismissed charge.',
            },
            {
              title: 'Consent or authorization',
              body: "The owner's permission, written, verbal or implied, is a complete defense. So is a reasonable belief that you had permission to move, change or handle the property.",
            },
            {
              title: 'Mistaken identity',
              body: 'Mischief often happens with no witnesses, and charges may rest on circumstantial evidence or a shaky identification. An alibi or a challenge to the identification can end the case.',
            },
            {
              title: 'Ownership or a right to the property',
              body: 'The property must belong to someone else. If it is yours, or you have a legitimate claim to it, that can be a defense. Some property disputes are charged as crimes when they belong in civil court.',
            },
            {
              title: 'Insufficient evidence',
              body: 'The prosecution must prove every element beyond a reasonable doubt. If it cannot show that you knowingly tampered with, defaced, damaged or destroyed property of another, the charge should be dismissed.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a criminal mischief case" tone="ice">
        <PointGrid
          points={[
            { title: 'Protects your rights', body: 'From citation or arrest: your right to remain silent and your right to counsel.' },
            {
              title: 'Investigates',
              body: 'Police reports, photographs, surveillance footage and witness statements, looking for weaknesses and inconsistencies.',
            },
            {
              title: 'Builds the defense',
              body: 'Lack of intent, mistaken identity, consent, insufficient evidence or constitutional violations, based on what the investigation finds.',
            },
            {
              title: 'Challenges the evidence',
              body: 'Motions to suppress illegally obtained evidence, challenges to unreliable identifications, and motions to exclude prejudicial evidence.',
            },
            {
              title: 'Negotiates',
              body: 'For reduced charges, a better plea, diversion, or dismissal once conditions are met, and for reasonable restitution amounts and payment terms.',
            },
            {
              title: 'Tries the case',
              body: 'Represents you at trial and, if there is a conviction, argues at sentencing for alternatives such as community service.',
            },
          ]}
        />
      </Section>

      <Section title="Clearing your criminal record after a criminal mischief conviction">
        <p>
          Under Ohio Revised Code 2953.32, a criminal mischief conviction may be sealed or expunged. As a misdemeanor it is generally
          eligible after the waiting period if you meet the requirements. A sealed record is hidden from most background checks, which
          helps with jobs, housing and anything else a record has held back. The firm can check your eligibility and file the
          application. See <Link href="/criminal-defense/expungement-record-sealing">expungement and record sealing</Link>.
        </p>
        <p>
          If you are facing criminal mischief charges anywhere in Ohio, <Link href="/contact">contact Jwayyed Law LLC</Link> to schedule a consultation. For
          more, see the firm&rsquo;s <Link href="/criminal-defense">criminal defense practice</Link> or read{' '}
          <Link href="/our-law-firm/blog/misdemeanor-vs-felony-ohio">misdemeanor vs. felony charges in Ohio</Link>.
        </p>
        <h3>Related pages</h3>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <RelatedArticles category="Criminal Defense" title="Articles on Ohio criminal charges" slugs={["what-to-expect-first-court-appearance-ohio", "misdemeanor-vs-felony-ohio", "what-is-expungement-ohio-2024"]} />
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
