import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Domestic Violence Defense Ohio',
  description:
    'Charged with domestic violence in Ohio? Penalties under ORC 2919.25, protection orders, gun rights and defenses. Call Jwayyed Law LLC at (614) 285-5482.',
  keywords: [
    'domestic violence lawyer Ohio',
    'domestic violence defense attorney Ohio',
    'domestic violence attorney',
    'protection order defense',
    'domestic violence charges Ohio',
    'Ohio domestic violence lawyer',
    'Ohio domestic violence attorney'
  ],
  openGraph: {
    title: 'Domestic Violence Defense Ohio | Jwayyed Law LLC',
    description: 'Penalties, protection orders, firearm restrictions and defenses for a domestic violence charge in Ohio.',
    url: 'https://www.jjlawohio.com/criminal-defense/domestic-violence',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/criminal-defense/domestic-violence',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Domestic Violence', href: '/criminal-defense/domestic-violence' },
];

const faqs = [
  {
    question: 'What constitutes domestic violence in Ohio?',
    answer:
      'Under Ohio Revised Code 2919.25, domestic violence means causing or attempting to cause physical harm to a family or household member, or recklessly causing them serious physical harm. Family or household members include spouses, former spouses, parents, children, people related by blood or marriage, people living together as spouses, and people who have a child together. It can be charged as a misdemeanor or a felony depending on the harm and any prior convictions.',
  },
  {
    question: 'What are the penalties for domestic violence in Ohio?',
    answer:
      'Penalties depend on prior convictions. A first offense is usually a first-degree misdemeanor punishable by up to 180 days in jail and a fine of up to $1,000. Second and later offenses are fourth-degree felonies punishable by 6-18 months in prison and a fine of up to $5,000. If the offense causes serious physical harm, it may be charged as a felony regardless of prior convictions. A conviction also brings firearm restrictions under federal law.',
  },
  {
    question: 'Can I get a domestic violence charge dropped in Ohio?',
    answer:
      'The alleged victim cannot drop the charge, because the state prosecutes it. A defense attorney can still work toward a dismissal or a reduced charge by challenging the evidence, showing the allegations are false, establishing self-defense, or negotiating with the prosecutor. An attorney can also deal with any protection order and aim for a resolution that limits the long-term consequences.',
  },
  {
    question: 'What happens if I violate a protection order in Ohio?',
    answer:
      'Violating a protection order or civil protection order under ORC 2919.27 is a first-degree misdemeanor for a first violation, punishable by up to 180 days in jail and a fine of up to $1,000. A second violation within five years is a fifth-degree felony punishable by 6-12 months in prison and a fine of up to $2,500. Later violations, or violations involving weapons or prior felony convictions, carry higher penalties. A violation that involves another crime can bring separate charges too.',
  },
  {
    question: 'How can a domestic violence defense attorney help my case?',
    answer:
      'An attorney can investigate the case, test the evidence and the credibility of witnesses, build a defense such as self-defense or false allegations, negotiate for a reduced charge or dismissal, handle protection orders, protect your rights in court, and work to limit the long-term consequences. Contact one as soon as you can so the defense can start early.',
  },
  {
    question: 'Can the alleged victim drop domestic violence charges in Ohio?',
    answer:
      'No. The state prosecutes domestic violence, not the alleged victim. Once police are called and charges are filed, the prosecutor decides whether to proceed. Even if the alleged victim recants, refuses to cooperate or asks for the charges to be dropped, the prosecutor can and often does continue with other evidence: 911 recordings, medical records, photographs and officer observations. A defense attorney can challenge that evidence, offer other explanations and negotiate with the prosecutor even when the alleged victim is not cooperating.',
  },
  {
    question: 'What is the impact of a domestic violence conviction on gun rights?',
    answer:
      'Under federal law, 18 U.S.C. 922(g)(9), it is a federal crime for anyone convicted of a misdemeanor crime of domestic violence to possess, buy or receive a firearm or ammunition. The ban covers misdemeanor convictions as well as felonies, with no exception for hunters, sport shooters or people who rely on a firearm for self-defense. Unlike many collateral consequences, this federal prohibition is permanent and cannot be restored, which is why the charge needs to be fought before there is a conviction.',
  },
  {
    question: 'What is a civil protection order (CPO) and how does it relate to a domestic violence criminal case?',
    answer:
      'A civil protection order (CPO) is a court order under ORC 3113.31 that bars someone from contacting, approaching or harassing a family or household member. It is a civil case, separate from the criminal case, but it is often filed at the same time or soon after charges are brought. Often within days of the alleged incident, an ex parte (one-sided) emergency hearing can produce a CPO that removes you from your home, restricts contact with your children and affects custody. Violating a CPO is a crime under ORC 2919.27. An attorney can represent you at the CPO hearing, challenge the order, protect your parental rights, and work to modify or end the order while the criminal case goes on.',
  },
];

const RELATED = [
  { href: '/criminal-defense/assault-charges', title: 'Assault charges', subtitle: 'Simple and aggravated assault defense in Ohio' },
  { href: '/civil/civil-protection-orders', title: 'Civil protection orders', subtitle: 'CPO defense and modification in Ohio courts' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Clearing a criminal record under Ohio law' },
  { href: '/criminal-defense/criminal-trespass', title: 'Criminal trespass', subtitle: 'Trespass and unauthorized entry defense' },
];

export default function DomesticViolencePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Domestic violence charges in Ohio"
        description="A first domestic violence offense under ORC 2919.25 is usually a first-degree misdemeanor. A protection order can remove you from your home within days, and a conviction brings a federal firearms ban."
      />

      <KeyFacts
        facts={[
          { figure: '180 days', label: 'maximum jail for a first-offense, first-degree misdemeanor domestic violence charge' },
          { figure: '6-18 months', label: 'prison range for felony domestic violence (fourth-degree felony)' },
          { figure: '$5,000', label: 'maximum fine for a fourth-degree felony' },
        ]}
      />

      <Section
        title="What a domestic violence charge means"
        intro={
          <p>
            Domestic violence under Ohio Revised Code 2919.25 is an allegation of physical harm, attempted harm or threats against a
            family or household member.
          </p>
        }
      >
        <p>
          The prosecution must prove the family or household relationship, the physical harm or threat, and intent. These charges can
          grow out of domestic disputes, misunderstandings, false allegations or self-defense. A conviction brings enhanced penalties,
          firearm restrictions and a permanent criminal record that affects jobs, housing and custody.
        </p>
        <p>
          The case usually starts with an arrest and a protection order that can take effect right away, removing you from your home,
          limiting contact with family and affecting custody. The firm challenges protection orders, deals with alleged violations, and
          works to modify or end orders where appropriate while defending the criminal charge.
        </p>
        <LocationsWeServe title="Criminal Defense" />
      </Section>

      <Section title="Domestic violence penalties in Ohio" tone="ice">
        <p>Sentencing falls under Ohio Revised Code Chapter 2929. Prior convictions and the harm caused decide the degree.</p>
        <FactTable
          title="First offense (ORC 2919.25): first-degree misdemeanor"
          rows={[
            { label: 'Conduct', value: 'Knowingly causing or attempting to cause physical harm to a family or household member.' },
            { label: 'Jail', value: 'Up to 180 days.' },
            { label: 'Fines', value: 'Up to $1,000.' },
            { label: 'Programs', value: 'Mandatory counseling or treatment.' },
            { label: 'Record and firearms', value: 'A permanent criminal record and federal firearm restrictions.' },
          ]}
        />
        <FactTable
          title="Felony domestic violence (ORC 2919.25): fourth-degree felony"
          rows={[
            { label: 'When it applies', value: 'A prior domestic violence conviction, or an offense that causes serious physical harm.' },
            { label: 'Prison', value: '6-18 months.' },
            { label: 'Fines', value: 'Up to $5,000.' },
            { label: 'Supervision', value: 'Mandatory post-release control.' },
          ]}
          note="Prior convictions significantly raise the penalties and often turn the charge into a felony."
        />
        <FactTable
          title="Violating a protection order (ORC 2919.27)"
          rows={[
            { label: 'First violation', value: 'First-degree misdemeanor: up to 180 days in jail and a fine of up to $1,000.' },
            { label: 'Second within five years', value: 'Fifth-degree felony: 6-12 months in prison and a fine of up to $2,500.' },
            { label: 'Later violations', value: 'Higher penalties, as do violations involving weapons or prior felony convictions.' },
          ]}
        />
        <h3>Firearm restrictions</h3>
        <p>
          Federal law, 18 U.S.C. 922(g)(9), bars anyone convicted of domestic violence from possessing a firearm, including after a
          misdemeanor conviction. The restriction is permanent and cannot be restored. It applies immediately on conviction and covers
          hunting, sport shooting and self-defense.
        </p>
        <h3>Consequences beyond the sentence</h3>
        <p>
          Many employers refuse to hire people with a domestic violence conviction. Professional licenses can be restricted, housing
          gets harder, and non-citizens face immigration consequences. The largest effect is often in family court, which weighs a
          domestic violence conviction heavily and can restrict visitation or remove custody.
        </p>
      </Section>

      <Section title="Protection orders and the criminal case">
        <p>
          Domestic violence charges often come with temporary or permanent protection orders under Ohio Revised Code 3113.31. An order
          can restrict contact, remove you from your home, affect custody and limit firearms. It can last for years. Violating one is a
          separate crime with its own penalties. For more, read the firm&rsquo;s guide to{' '}
          <Link href="/our-law-firm/blog/ohio-civil-protection-order-guide">Ohio civil protection orders</Link>.
        </p>
        <Callout title="A protection order can take effect within days">
          An ex parte emergency hearing can produce an order before you have told your side. The firm represents you at the full
          hearing and while the criminal case runs.
        </Callout>
      </Section>

      <Section title="How a domestic violence case moves" tone="ice">
        <Steps
          steps={[
            {
              title: 'Arrest, arraignment and protection orders',
              body: 'At arraignment the charges are read, bail is set and you enter a plea. A temporary protection order is often issued right away and can remove you from your home, restrict contact with family, affect custody and limit firearms.',
            },
            {
              title: 'Discovery and investigation',
              body: "The prosecution must turn over its evidence: police reports, medical records, witness statements, 911 recordings and other documents. Your attorney reviews it, interviews witnesses and looks for evidence of a defense, false allegations or gaps in the case.",
            },
            {
              title: 'Plea negotiations and diversion',
              body: 'Most domestic violence cases resolve without trial. Options include reducing a felony to a misdemeanor, a plea with lighter penalties, diversion for first-time offenders that avoids a conviction, or dismissal once conditions such as counseling are met.',
            },
            {
              title: 'Trial',
              body: 'If the case goes to trial, your attorney cross-examines the witnesses, presents your defense and protects your rights throughout.',
            },
          ]}
        />
      </Section>

      <Section title="Defenses to a domestic violence charge">
        <PointGrid
          points={[
            {
              title: 'Self-defense',
              body: 'Under Ohio Revised Code 2901.05 you may use reasonable force if you reasonably believe you are in imminent danger of physical harm. In a domestic case that means showing you were not the initial aggressor and that your actions were necessary and proportional.',
            },
            {
              title: 'False allegations',
              body: 'Accusations are sometimes made during custody disputes, out of revenge, for money, or to gain leverage. Investigation can find false statements and inconsistencies.',
            },
            {
              title: 'Lack of intent',
              body: 'Domestic violence requires knowingly causing harm. An accident, or not knowing your actions would cause harm, can lead to a reduced or dismissed charge.',
            },
            {
              title: 'Insufficient evidence',
              body: 'The prosecution must prove the charge beyond a reasonable doubt. Weak or inconsistent evidence can lead to dismissal or a reduction.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a domestic violence case" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Protects your rights from arrest',
              body: 'Your right to remain silent, your right to counsel and your protection against illegal searches.',
            },
            {
              title: 'Defends against the protection order',
              body: 'Challenges the order, deals with alleged violations, and works to modify or end it so you can return home and contact your family.',
            },
            {
              title: 'Investigates',
              body: 'Police reports, medical records, witness statements, 911 recordings and the rest of the evidence.',
            },
            {
              title: 'Builds the defense',
              body: 'Self-defense, false allegations, lack of intent, mistaken identity or insufficient evidence.',
            },
            {
              title: 'Challenges the evidence',
              body: 'Pretrial motions against improperly obtained evidence, coerced statements and unreliable witnesses.',
            },
            {
              title: 'Negotiates',
              body: 'For a felony reduced to a misdemeanor, a better plea, diversion, or dismissal once conditions are met.',
            },
            {
              title: 'Tries the case',
              body: 'Cross-examines the witnesses and presents your defense if the case goes to trial.',
            },
            {
              title: 'Seals the record',
              body: 'Helps eligible clients seal misdemeanor domestic violence records after the waiting period under Ohio Revised Code Chapter 2953.',
            },
          ]}
        />
      </Section>

      <Section title="Related pages">
        <p>
          If you are charged with domestic violence anywhere in Ohio, <Link href="/contact">contact Jwayyed Law LLC</Link> right away.
          See the firm&rsquo;s <Link href="/criminal-defense">criminal defense practice</Link> for other charges.
        </p>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
