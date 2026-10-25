import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Assault Defense Attorney Ohio',
  description:
    'Charged with assault in Ohio? Penalties under ORC 2903.13, how the case moves through court, and the defenses that apply. Call (614) 285-5482.',
  keywords: [
    'assault charges lawyer Ohio',
    'assault defense attorney Ohio',
    'battery charges attorney',
    'simple assault attorney',
    'misdemeanor assault lawyer',
    'Ohio assault attorney',
    'Ohio assault lawyer'
  ],
  openGraph: {
    title: 'Assault Defense Attorney Ohio | Jwayyed Law LLC',
    description: 'Penalties, the court process and defenses for a misdemeanor assault charge in Ohio.',
    url: 'https://www.jjlawohio.com/criminal-defense/assault-charges',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/criminal-defense/assault-charges',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Assault Charges', href: '/criminal-defense/assault-charges' },
];

const faqs = [
  {
    question: 'What is the difference between assault and battery in Ohio?',
    answer:
      'Ohio charges what other states call battery as assault. Under Ohio Revised Code 2903.13, assault means knowingly causing physical harm to someone, or causing them to believe they will suffer physical harm. How serious the charge is depends on the harm caused, whether a weapon was involved, and the relationship between the people involved.',
  },
  {
    question: 'What are the penalties for assault in Ohio?',
    answer:
      'Simple assault (ORC 2903.13) is usually a first-degree misdemeanor, punishable by up to 180 days in jail and a fine of up to $1,000. Aggravated assault is a fourth-degree felony with up to 18 months in prison. Prior convictions and weapons can increase the penalties.',
  },
  {
    question: 'Can I defend against assault charges in Ohio?',
    answer:
      'Yes. Common defenses include self-defense (ORC 2901.05), defense of others, lack of intent to cause harm, mistaken identity, insufficient evidence and false allegations. Which one fits depends on the facts, so an attorney starts by reviewing the evidence and gathering your own.',
  },
  {
    question: 'Will an assault conviction appear on my criminal record in Ohio?',
    answer:
      'Yes. A misdemeanor assault conviction goes on your criminal record, where employers, landlords and others can see it. It may be eligible for expungement or record sealing after a waiting period if you meet the requirements of Ohio Revised Code Chapter 2953. An attorney can tell you whether you qualify.',
  },
  {
    question: 'What should I do if I am charged with assault in Ohio?',
    answer:
      'Stay calm and use your rights. Do not discuss the case with anyone except your attorney, and contact one right away. Avoid contact with the alleged victim. Keep any evidence that supports you, such as the names of witnesses, photos or documents. Early on, an attorney can protect your rights, challenge the evidence and open talks with the prosecutor.',
  },
  {
    question: 'What is the difference between assault and aggravated assault in Ohio?',
    answer:
      'Simple assault under ORC 2903.13 means knowingly causing or attempting to cause physical harm to another. It is generally a first-degree misdemeanor (M1), punishable by up to 180 days in jail and a fine of up to $1,000. Aggravated assault under ORC 2903.12 applies when a person causes serious physical harm, or uses a deadly weapon, while under the influence of sudden passion or rage brought on by serious provocation. It is a fourth-degree felony (F4) punishable by 6 to 18 months in prison. To discuss either charge, call Jwayyed Law LLC at (614) 285-5482.',
  },
  {
    question: 'Can self-defense be raised as a defense to assault in Ohio?',
    answer:
      'Yes. Under ORC 2901.05, self-defense is an affirmative defense in Ohio assault cases. As of 2019, the burden sits with the prosecution: once you raise evidence of self-defense, the state must disprove it beyond a reasonable doubt. The evidence must show that you did not create the situation, that you honestly and reasonably believed you were in imminent danger of bodily harm, and that the force you used matched the threat. An attorney can judge whether your facts support the claim and present it.',
  },
  {
    question: 'What are the collateral consequences of an assault conviction in Ohio?',
    answer:
      'An assault conviction can follow you well past the jail term and fine. Employers may reject your application, especially in healthcare, education, law enforcement or any job with a background check. Licensing boards, including those for nursing, teaching and real estate, can deny or revoke a license. Landlords may turn down a housing application. For non-citizens, a conviction may lead to immigration consequences, including removal proceedings. Even a misdemeanor assault tells anyone reading your record that violence was alleged, which is why the defense should start early.',
  },
];

const RELATED = [
  { href: '/criminal-defense/domestic-violence', title: 'Domestic violence defense', subtitle: 'Ohio DV charges and protection order defense' },
  { href: '/criminal-defense/resisting-arrest', title: 'Resisting arrest', subtitle: 'Defense for resisting arrest and obstruction charges' },
  { href: '/criminal-defense/criminal-trespass', title: 'Criminal trespass', subtitle: 'Trespass and unauthorized entry defense' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Clearing a criminal record under Ohio law' },
];

export default function AssaultChargesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Assault charges in Ohio"
        description="Simple assault under ORC 2903.13 is usually a first-degree misdemeanor: up to 180 days in jail and a fine of up to $1,000."
      />

      <KeyFacts
        facts={[
          { figure: '180 days', label: 'maximum jail for simple assault, a first-degree misdemeanor' },
          { figure: '$1,000', label: 'maximum fine for simple assault' },
          { figure: '6 to 18 months', label: 'prison range for aggravated assault, a fourth-degree felony' },
        ]}
      />

      <Section
        title="What an assault charge means"
        intro={
          <p>
            Under Ohio law, assault means knowingly causing physical harm to another person, or causing them to believe they will
            suffer physical harm. Ohio charges what other states call battery as assault.
          </p>
        }
      >
        <p>
          Jwayyed Law LLC defends people charged with simple assault under Ohio Revised Code 2903.13. The level of the charge depends
          on the harm caused, whether a weapon was involved, and the relationship between the people involved. It ranges from simple
          misdemeanor assault under ORC 2903.13 to the more serious charges under ORC 2903.12.
        </p>
        <p>
          Simple assault covers knowingly causing or attempting to cause physical harm to another, or negligently causing physical
          harm with a deadly weapon. Prosecutors press these cases hardest when they involve a domestic relationship, a law
          enforcement officer, or a serious injury. The firm handles simple (misdemeanor) assault charges throughout Ohio.
        </p>
        <LocationsWeServe title="Criminal Defense" />
      </Section>

      <Section title="Assault penalties in Ohio" tone="ice">
        <p>Sentencing for assault falls under Ohio Revised Code Chapter 2929. The degree of the charge sets the range.</p>
        <FactTable
          title="Simple assault (ORC 2903.13): first-degree misdemeanor"
          rows={[
            { label: 'Jail', value: 'Up to 180 days in county jail.' },
            { label: 'Fines', value: 'Up to $1,000, plus court costs and probation supervision fees.' },
            { label: 'Programs', value: 'Anger management or counseling may be ordered.' },
            { label: 'Record', value: 'A permanent criminal record unless it is later sealed or expunged.' },
            {
              label: 'Expungement',
              value: 'Under Ohio Revised Code 2953.32, a misdemeanor assault conviction may be eligible for expungement after a waiting period.',
            },
          ]}
        />
        <FactTable
          title="Aggravated assault (ORC 2903.12): fourth-degree felony"
          rows={[
            { label: 'Prison', value: '6 to 18 months.' },
            {
              label: 'When it applies',
              value:
                'Causing serious physical harm, or using a deadly weapon, while under the influence of sudden passion or rage brought on by serious provocation.',
            },
          ]}
        />
        <h3>Factors that raise the sentence</h3>
        <p>
          Under Ohio Revised Code 2929.12, a judge weighs factors that can push the sentence up: prior criminal history, use of a
          weapon, harm to a protected person (a child, an elderly or disabled person), gang-related activity, or an offense committed
          in front of children. These can lead to maximum sentences, consecutive prison terms and higher fines. In certain
          circumstances an assault conviction also carries a mandatory minimum sentence.
        </p>
        <h3>Consequences beyond the sentence</h3>
        <p>
          Employers who run background checks may refuse to hire. Professional licenses in healthcare, education, law enforcement and
          finance can be denied or revoked. Landlords may reject a housing application, and financial aid eligibility can be affected.
          Certain serious convictions cost you your gun rights. Non-citizens can face deportation. Child custody and visitation can be
          restricted. All of this lasts long after the sentence is served and the fines are paid.
        </p>
      </Section>

      <Section title="How an assault case moves through court">
        <Steps
          steps={[
            {
              title: 'Arrest and arraignment',
              body: 'A judge reads the charges, sets bail and takes your plea, usually not guilty, which preserves your rights and leaves time to investigate. Your attorney can argue for lower bail, release on recognizance or house arrest, and request discovery: police reports, witness statements, medical records and other evidence.',
            },
            {
              title: 'Discovery and investigation',
              body: "The prosecution must hand over the evidence it plans to use at trial. Your attorney reviews it, interviews witnesses, examines medical records and any surveillance footage, and looks for evidence of self-defense, lack of intent, mistaken identity or false allegations. Medical, forensic or use-of-force experts may be consulted to test the prosecution's evidence.",
            },
            {
              title: 'Pretrial motions',
              body: 'A motion to suppress can exclude evidence obtained illegally, through a violation of your rights at arrest, or from coerced statements. A motion to dismiss can be filed if the evidence is insufficient, the statute of limitations has run, or procedural errors occurred. A motion to compel makes the prosecution produce required discovery.',
            },
            {
              title: 'Plea negotiations',
              body: 'Most assault cases resolve through negotiation. Possible results include a reduced charge (aggravated to simple assault where it applies), a plea agreement with lighter penalties, diversion or treatment instead of jail, or dismissal once conditions are met.',
            },
            {
              title: 'Trial',
              body: "If the case goes to trial, your attorney presents your defense, cross-examines the prosecution's witnesses, calls experts where needed and argues to the jury. A not guilty verdict ends the case.",
            },
          ]}
        />
      </Section>

      <Section title="Defenses to an assault charge" tone="ice">
        <p>Which defense applies depends on what happened and what the evidence shows.</p>
        <PointGrid
          points={[
            {
              title: 'Self-defense',
              body: 'Under Ohio Revised Code 2901.05, you may use reasonable force if you reasonably believe you are in imminent danger of physical harm. The force must be proportional to the threat. Evidence of self-defense can lead to dismissal or acquittal.',
            },
            {
              title: 'Defense of others',
              body: 'You may use reasonable force to protect another person from imminent physical harm, if you reasonably believed they were in danger and your actions were necessary and proportional.',
            },
            {
              title: 'Lack of intent',
              body: 'Assault requires knowingly causing harm. If the contact was an accident, or you did not know your actions would cause harm, the charge may be reduced or dismissed.',
            },
            {
              title: 'False allegations',
              body: 'Assault accusations are sometimes made out of revenge, during a custody dispute, or for money. Investigation can expose inconsistencies in the story.',
            },
            {
              title: 'Consent',
              body: 'Where the other person consented to the contact, as in sports, mutual combat or other consensual activity, consent may be a defense. It must be genuine and informed, and not obtained through fraud or coercion.',
            },
            {
              title: 'Defense of property',
              body: 'You may use reasonable, proportional force to protect property from theft, damage or trespass. Deadly force is generally not permitted to protect property alone, unless there is also a threat of serious physical harm.',
            },
            {
              title: 'Mental state',
              body: 'If you lacked the required mental state (knowingly, recklessly or negligently), the charge may fail. That covers a truly accidental contact, not knowing harm would result, or reasonably believing your actions were necessary and lawful.',
            },
            {
              title: 'Alibi',
              body: 'Proof that you were somewhere else at the time can end the case. It needs strong evidence: witnesses, surveillance footage, receipts or other records of where you were.',
            },
            {
              title: 'Misconduct and procedural errors',
              body: 'Prosecutorial misconduct, violations of your constitutional rights, or a failure to provide required discovery can support a motion to dismiss or to suppress evidence.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on an assault case">
        <PointGrid
          points={[
            {
              title: 'Protects your rights from arrest',
              body: 'Your right to remain silent, your right to counsel and your protection against self-incrimination.',
            },
            {
              title: 'Investigates the case',
              body: 'Police reports, medical records, witness statements, surveillance footage and the rest of the evidence, looking for weaknesses and inconsistencies.',
            },
            {
              title: 'Builds the defense',
              body: 'Self-defense (ORC 2901.05), defense of others, lack of intent, mistaken identity, insufficient evidence or false allegations, based on what the investigation finds.',
            },
            {
              title: 'Challenges the evidence',
              body: 'Motions to suppress illegally obtained evidence and exclude prejudicial evidence, and cross-examination of unreliable witnesses.',
            },
            {
              title: 'Consults experts',
              body: 'Medical, forensic and use-of-force experts when the evidence calls for them.',
            },
            {
              title: 'Negotiates',
              body: 'For reduced charges, a better plea agreement, alternative sentencing, or dismissal once conditions are met.',
            },
            {
              title: 'Argues at sentencing',
              body: 'Presents mitigating evidence and argues for the minimum sentence or an alternative to jail if there is a conviction.',
            },
            {
              title: 'Helps after the case',
              body: 'Record sealing, expungement applications, sentence modifications or appeals for eligible clients.',
            },
          ]}
        />
        <Callout title="Represented at trial when it goes there">
          If the case does not resolve through negotiation or motions, the firm tries it.
        </Callout>
      </Section>

      <Section title="Related criminal defense pages" tone="ice">
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>. For more,
          see the firm&rsquo;s <Link href="/criminal-defense">criminal defense practice</Link> or read{' '}
          <Link href="/our-law-firm/blog/charged-with-assault-what-happens-next">what happens after being charged with assault in Ohio</Link>.
        </p>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
