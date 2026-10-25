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
  title: 'Criminal Damaging Defense Ohio',
  description:
    'Charged with criminal damaging under ORC 2909.06? Penalties, when it becomes a felony, and the defenses that apply. Call (614) 285-5482.',
  keywords: [
    'criminal damaging lawyer Ohio',
    'criminal damaging ORC 2909.06',
    'criminal endangering defense attorney',
    'property damage defense Ohio',
    'second degree misdemeanor Ohio',
    'Ohio criminal damaging lawyer',
    'criminal damaging penalties Ohio',
    'property crime defense attorney'
  ],
  openGraph: {
    title: 'Criminal Damaging Defense Ohio | Jwayyed Law LLC',
    description: 'Penalties, felony thresholds and defenses for a criminal damaging charge under ORC 2909.06.',
    url: 'https://www.jjlawohio.com/criminal-defense/criminal-damaging',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/criminal-defense/criminal-damaging',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Criminal Damaging', href: '/criminal-defense/criminal-damaging' },
];

const faqs = [
  {
    question: 'What is criminal damaging under Ohio law?',
    answer:
      'Criminal damaging or endangering under Ohio Revised Code 2909.06 means knowingly causing physical harm to another person\'s property, or creating a substantial risk of physical harm to property by fire, explosion, flood or other means. It is generally a second-degree misdemeanor, punishable by up to 90 days in jail and a fine of up to $750. The value of the property or the circumstances can raise it to a felony.',
  },
  {
    question: 'What are the penalties for criminal damaging in Ohio?',
    answer:
      'Criminal damaging under ORC 2909.06 is usually a second-degree misdemeanor: up to 90 days in jail, a fine of up to $750, restitution, court costs and a permanent criminal record. If the damage passes certain thresholds or involves specific kinds of property (government property or safety equipment, for example), the charge may become a felony under ORC 2909.05 (vandalism) or another provision, with much higher penalties.',
  },
  {
    question: 'What is the difference between criminal damaging and criminal mischief in Ohio?',
    answer:
      'Criminal damaging (ORC 2909.06) is knowingly causing physical harm to property, or creating a substantial risk of it by fire, explosion or flood. It is usually a second-degree misdemeanor. Criminal mischief (ORC 2909.07) is tampering with, defacing or improperly handling property, and is usually a third-degree misdemeanor. Criminal damaging is the more serious charge and carries the higher penalties.',
  },
  {
    question: 'Can criminal damaging charges be expunged from my record in Ohio?',
    answer:
      'Yes. A misdemeanor criminal damaging conviction may be eligible for record sealing under Ohio Revised Code 2953.32. Eligibility depends on the waiting period, whether you completed your sentence, and your criminal history. An attorney can check your eligibility and handle the application.',
  },
  {
    question: 'What should I do if I am charged with criminal damaging in Ohio?',
    answer:
      'Use your right to remain silent and contact a criminal defense attorney right away. Do not talk to police without your attorney present. Keep any evidence that supports your side. An attorney can protect your rights, challenge the evidence and negotiate with the prosecutor for a dismissal or a reduced charge.',
  },
  {
    question: 'What are the elements of criminal damaging under ORC 2909.06?',
    answer:
      'The prosecution must prove that you knowingly caused physical harm to another person\'s property without their consent, or knowingly created a substantial risk of physical harm to that property by fire, explosion, flood or other means. The base offense is a second-degree misdemeanor (M2), punishable by up to 90 days in jail and a fine of up to $750. "Knowingly" is the required mental state, so accidental damage is not enough for a conviction.',
  },
  {
    question: 'How do criminal damaging and criminal mischief compare in Ohio?',
    answer:
      'They are related but separate offenses. Criminal damaging under ORC 2909.06 covers knowingly causing physical harm to another\'s property, or creating a substantial risk of harm by fire, explosion or flood. Its base offense is a second-degree misdemeanor (M2). Criminal mischief under ORC 2909.07 covers tampering with, defacing or improperly handling property, including safety devices and boundary markers. Its base offense is a third-degree misdemeanor (M3). Criminal damaging sits in the more serious penalty tier.',
  },
  {
    question: 'Can criminal damaging be charged as a felony in Ohio?',
    answer:
      'Yes. The base offense under ORC 2909.06 is a second-degree misdemeanor, but it can become a felony when the damage exceeds $1,000 to certain types of property, or when fire or explosion was the means of harm. Prosecutors may instead charge vandalism under ORC 2909.05, a felony, when the damage passes the thresholds or involves government property or critical infrastructure. A felony conviction carries prison time and higher fines under Ohio\'s felony sentencing structure.',
  },
];

const RELATED = [
  { href: '/criminal-defense/criminal-mischief', title: 'Criminal mischief', subtitle: 'Property interference and tampering defense' },
  { href: '/criminal-defense/criminal-trespass', title: 'Criminal trespass', subtitle: 'Trespass and unauthorized entry defense' },
  { href: '/criminal-defense/petty-theft', title: 'Petty theft', subtitle: 'Shoplifting and theft defense in Ohio' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Clearing a criminal record under Ohio law' },
];

export default function CriminalDamagingPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal damaging charges in Ohio"
        description="Criminal damaging under ORC 2909.06 is usually a second-degree misdemeanor: up to 90 days in jail, a fine of up to $750, and restitution for the damage."
      />

      <KeyFacts
        facts={[
          { figure: '90 days', label: 'maximum jail for criminal damaging, a second-degree misdemeanor' },
          { figure: '$750', label: 'maximum fine, plus restitution and court costs' },
          { figure: '$1,000', label: 'damage level at which the charge can become a felony for certain property' },
        ]}
      />

      <Section
        title="What a criminal damaging charge means"
        intro={
          <p>
            Criminal damaging or endangering under Ohio Revised Code 2909.06 means knowingly causing physical harm to someone
            else&rsquo;s property, or creating a substantial risk of physical harm to it by fire, explosion, flood or other means.
          </p>
        }
      >
        <p>
          The state must prove you acted knowingly. &quot;Physical harm&quot; means any tangible or material damage. The charge is
          usually a second-degree misdemeanor, but the circumstances can raise it to a felony. A conviction can affect jobs, housing and
          professional licenses.
        </p>
        <p>
          Jwayyed Law LLC defends criminal damaging and endangering charges under ORC 2909.06 throughout Ohio.
        </p>
        <h3>What the prosecution has to prove</h3>
        <FactTable
          title="Elements of criminal damaging (ORC 2909.06)"
          rows={[
            { label: 'Mental state', value: 'You acted knowingly. Accidental damage is not enough for a conviction.' },
            {
              label: 'The harm',
              value:
                'You caused physical harm to the property, or created a substantial risk of physical harm to it by fire, explosion, flood or other means.',
            },
            { label: 'Property of another', value: "The property belonged to someone else, and they did not consent." },
            { label: 'Identity', value: 'You were the person who did it, proved beyond a reasonable doubt.' },
          ]}
        />
      </Section>

      <LocationsWeServe title="Criminal Defense" />

      <Section title="Criminal damaging penalties in Ohio" tone="ice">
        <FactTable
          title="Criminal damaging (ORC 2909.06): second-degree misdemeanor"
          rows={[
            { label: 'Jail', value: 'Up to 90 days.' },
            { label: 'Fines', value: 'Up to $750, plus court costs.' },
            { label: 'Restitution', value: 'The court may order you to pay to repair or replace the damaged property.' },
            { label: 'Probation', value: 'May be ordered.' },
            { label: 'Record', value: 'A permanent criminal record. Record sealing under ORC 2953.32 may be available after the waiting period.' },
          ]}
        />
        <FactTable
          title="When the charge becomes a felony"
          rows={[
            {
              label: 'Property value',
              value: 'Damage over $1,000 to certain types of property, or damage that passes other value thresholds.',
            },
            { label: 'Means of harm', value: 'Fire or explosion used to cause the damage.' },
            {
              label: 'Type of property',
              value: 'Government property, critical infrastructure, or damage that creates a risk of serious harm.',
            },
            { label: 'Possible charge', value: 'Vandalism under ORC 2909.05, or another felony offense.' },
            { label: 'Penalties', value: "Prison time and much higher fines under Ohio's felony sentencing law." },
          ]}
        />
        <h3>Restitution and civil liability</h3>
        <p>
          Courts routinely order restitution. The property owner can also sue you for damages in civil court, so a single incident can
          cost you twice.
        </p>
      </Section>

      <Section
        title="What to do after a criminal damaging charge"
        intro={
          <p>
            Stay silent, keep the evidence that supports you, and talk to an attorney before the arraignment. Do not try to settle it
            with the owner yourself.
          </p>
        }
      >
        <Steps
          steps={[
            { title: 'Use your right to remain silent', body: 'Do not talk to police about the damage without your attorney present.' },
            {
              title: 'Leave restitution to your attorney',
              body: 'Restitution is routinely ordered, and the owner can also sue in civil court. Offers to pay are better negotiated through your attorney than made directly.',
            },
            {
              title: 'Keep the evidence',
              body: 'Photographs of the property, the names of witnesses, and anything that shows the damage was accidental, authorized or done by someone else.',
            },
            {
              title: 'Gather proof of value',
              body: 'Repair estimates or receipts. The amount of damage can decide whether the charge stays a misdemeanor or becomes a felony.',
            },
          ]}
        />
      </Section>

      <Section title="How a criminal damaging case moves" tone="ice">
        <Steps
          steps={[
            {
              title: 'Arraignment',
              body: 'You hear the charge and enter a plea, usually not guilty, which preserves your rights and gives your attorney time to investigate.',
            },
            {
              title: 'Discovery',
              body: 'The prosecution hands over its evidence, such as police reports, witness statements, photographs of the damage and any surveillance footage, and your attorney reviews it.',
            },
            {
              title: 'Pretrial negotiations',
              body: 'Your attorney challenges the evidence and negotiates for dismissal, a reduced charge or alternative sentencing, and for reasonable restitution.',
            },
            {
              title: 'Trial',
              body: 'If the case does not resolve, it goes to trial, where the state must prove every element beyond a reasonable doubt.',
            },
          ]}
        />
        <h3>How these cases usually end</h3>
        <p>
          Through dismissal when intent, consent or identity cannot be proved, a reduced charge, alternative sentencing, or a verdict
          at trial. When the damage is close to a felony threshold, the repair estimates and the value of the property matter as much
          as the facts of the incident.
        </p>
      </Section>

      <Section title="Defenses to criminal damaging">
        <PointGrid
          points={[
            {
              title: 'Lack of intent',
              body: 'The offense requires that you acted knowingly. Accidental damage, or not knowing the property belonged to someone else, may defeat the charge.',
            },
            {
              title: 'Consent or authorization',
              body: 'If the owner consented, or you reasonably believed you were authorized, that can be a complete defense.',
            },
            {
              title: 'Mistaken identity or insufficient evidence',
              body: 'The state must prove every element beyond a reasonable doubt. Identification, proof of intent and the overall strength of the case can all be challenged.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a criminal damaging case" tone="ice">
        <p>
          The firm investigates the case, builds the defense, negotiates with the prosecutor and represents you at trial when the case
          goes there. If you are charged anywhere in Ohio, <Link href="/contact">contact Jwayyed Law LLC</Link> to schedule a
          consultation.
        </p>
        <p>
          For more, see the firm&rsquo;s <Link href="/criminal-defense">criminal defense practice</Link> or read{' '}
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
