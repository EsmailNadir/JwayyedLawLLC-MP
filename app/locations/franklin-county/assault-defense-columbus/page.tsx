import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section } from '@/components/practice';
import { FCMC } from '@/data/franklin-county-reference';

export const metadata: Metadata = {
  title: 'Columbus Assault Defense Attorney',
  description:
    'Assault in Columbus is a first-degree misdemeanor under R.C. 2903.13, heard at Franklin County Municipal Court. Self-defense and felony escalation explained.',
  keywords: [
    'Columbus assault lawyer',
    'assault defense attorney Columbus Ohio',
    'assault charge Columbus',
    'Franklin County assault defense',
    'Columbus Ohio assault attorney',
    'self defense Columbus assault',
    'ORC 2903.13 Columbus lawyer',
  ],
  openGraph: {
    title: 'Columbus Assault Defense Attorney | Jwayyed Law LLC',
    description: 'Assault charges at Franklin County Municipal Court: penalties, felony escalation, self-defense and expungement.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-columbus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Assault Defense in Columbus', href: '/locations/franklin-county/assault-defense-columbus' },
];

const faqs = [
  {
    question: 'What is assault under Ohio law and where are Columbus assault cases heard?',
    answer:
      'Ohio Revised Code 2903.13 defines assault as knowingly causing or attempting to cause physical harm to another, or recklessly causing serious physical harm. Basic assault is an M1 misdemeanor: up to 180 days in jail and a $1,000 fine. Columbus assault cases are heard at Franklin County Municipal Court, 375 S. High Street (floors 12 to 15). Felony assault charges, such as assault on a peace officer, EMS worker, teacher or hospital worker, are bound over to the Franklin County Court of Common Pleas.',
  },
  {
    question: 'What are the felony escalations for assault in Columbus?',
    answer:
      'R.C. 2903.13(C) makes assault a felony when the victim is in a protected category. Assault on a Columbus police officer, OSP trooper, firefighter or EMS worker during official duties is F4. Assault by a caretaker on a functionally impaired person is F4, or F3 with a prior. Assault on corrections officers or youth services employees at a state DRC institution is F3; on local jail staff and probation officers, F5. Assault on a teacher or school bus driver on school property is F5, or F4 with a prior. Assault on hospital employees, or on judges and prosecutors during official duties, is F5, or F4 with a prior.',
  },
  {
    question: 'Is self-defense a valid defense to assault charges in Columbus?',
    answer:
      'Yes. Under ORC 2901.05, self-defense is a complete affirmative defense to assault. Since the 2019 amendments, once the defendant presents evidence raising self-defense, the prosecution must disprove it beyond a reasonable doubt. The firm looks at who started the confrontation, whether the force matched the threat, and what video and physical evidence show about the order of events. Body-cam footage from the Columbus Division of Police often captures key moments.',
  },
  {
    question: 'Can a Columbus assault conviction be expunged?',
    answer:
      'Most first-offense M1 assault convictions under R.C. 2903.13 can be expunged under ORC 2953.32 after a 1-year waiting period from final discharge. An assault that arose from a situation close to domestic violence, even if not charged as DV, may get closer scrutiny on an expungement application. The firm considers expungement eligibility from the start of every assault case, because it shapes plea strategy.',
  },
  {
    question: 'What if the alleged victim in a Columbus assault case does not want to press charges?',
    answer:
      "The Columbus Division of Police and the Franklin County prosecutor decide whether an assault case goes forward, not the alleged victim. A victim who will not testify weakens the case but does not end it automatically. The state can sometimes proceed on body-cam footage, 911 recordings and other evidence. The firm weighs how strong that independent evidence is and uses the victim's lack of cooperation in negotiations.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus assault charge?',
    answer:
      'Jwayyed Law LLC defends assault charges throughout Columbus and Franklin County. Assault cases turn on facts: witness credibility, video, and whether self-defense applies. The firm gets all of the evidence, tests the prosecution\'s case and builds the defense on the actual record. Call (614) 285-5482 before your arraignment.',
  },
];

const RELATED = [
  { href: '/criminal-defense/assault-charges', title: 'Assault charges in Ohio', subtitle: 'The statewide rules for assault' },
  { href: '/locations/franklin-county/domestic-violence-defense-columbus', title: 'Domestic violence in Columbus', subtitle: 'When the alleged victim is a family or household member' },
  { href: '/locations/franklin-county/disorderly-conduct-defense-columbus', title: 'Disorderly conduct in Columbus', subtitle: 'A common reduced charge' },
  { href: '/locations/franklin-county/expungement-columbus', title: 'Expungement in Columbus', subtitle: 'Sealing a conviction after the waiting period' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
];

export default function ColumbusAssaultPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Assault Defense in Columbus", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/assault-defense-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Columbus assault defense attorney"
        description="Assault is a first-degree misdemeanor in Ohio, with up to 180 days in jail. Against a police officer or other protected person it becomes a felony."
      />

      <KeyFacts
        facts={[
          { figure: '180 days', label: 'maximum jail for M1 assault' },
          { figure: '$1,000', label: 'maximum fine for M1 assault' },
          { figure: 'F4', label: 'assault on a police officer, firefighter or EMS worker on duty' },
          { figure: '1 year', label: 'waiting period before most assault convictions can be expunged' },
        ]}
      />

      <Section
        title="Where a Columbus assault case is heard"
        intro={
          <p>
            Misdemeanor assault charged in Columbus goes to {FCMC.name}. Felony assault is bound over to the Franklin County Court of
            Common Pleas.
          </p>
        }
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'M1 assault and other misdemeanors charged in Columbus.' },
          ]}
        />
        <p>
          Columbus assault charges come from bar confrontations in the Short North, German Village and near campus, disputes at OSU
          game-day events, road rage on I-270, I-70 or High Street, and neighborhood altercations. Police sometimes call it assault
          even when the person charged acted in self-defense or did not start the contact. The defense depends on those facts, the
          evidence and who the alleged victim is.
        </p>
        <p>
          The firm defends <Link href="/criminal-defense/assault-charges">assault charges</Link> at Franklin County Municipal Court and
          throughout Columbus. Call <a href="tel:6142855482">(614) 285-5482</a> before your arraignment.
        </p>
      </Section>

      <Section title="Assault penalties and felony escalation" tone="ice">
        <FactTable
          title="Assault under R.C. 2903.13"
          rows={[
            { label: 'Degree', value: 'First-degree misdemeanor (M1).' },
            { label: 'Jail', value: 'Up to 180 days.' },
            { label: 'Fine', value: 'Up to $1,000.' },
            { label: 'Record', value: 'A criminal record that employers and landlords see on a background check.' },
          ]}
        />
        <FactTable
          title="Felony assault under R.C. 2903.13(C)"
          rows={[
            { label: 'Police, OSP, fire, EMS', value: 'F4 when the victim is on official duty.' },
            { label: 'Caretaker', value: 'F4 for assault on a functionally impaired person; F3 with a prior.' },
            { label: 'State DRC staff', value: 'F3 for corrections officers or youth services employees.' },
            { label: 'Jail and probation staff', value: 'F5.' },
            { label: 'Teachers and bus drivers', value: 'F5 on school property; F4 with a prior.' },
            { label: 'Hospital staff, judges, prosecutors', value: 'F5 during official duties; F4 with a prior.' },
          ]}
          note="Assault on a Columbus Division of Police officer or OSP trooper on duty is a fourth-degree felony, prosecuted in the Court of Common Pleas."
        />
        <p>
          The firm checks whether the alleged victim was actually acting in an official capacity. An officer who was off duty, acting
          outside the scope of the job, or responding personally rather than professionally may not qualify for the felony charge.
        </p>
      </Section>

      <Section title="What the prosecution must prove">
        <p>
          R.C. 2903.13 requires proof that you knowingly caused or attempted to cause physical harm to another person, or recklessly
          caused serious physical harm. &ldquo;Knowingly&rdquo; means you were aware your conduct would cause, or probably cause, that
          result. Accidental contact, involuntary reactions, and situations where you lacked that awareness do not meet the statute.
        </p>
        <h3>Self-defense</h3>
        <p>
          Self-defense under ORC 2901.05 is the most common defense in Columbus assault cases, especially bar fights, road rage and
          mutual altercations. Since the 2019 amendments, once you present enough evidence of self-defense, the prosecution must
          disprove it beyond a reasonable doubt. The questions are whether you reasonably believed force was necessary, whether you were
          the initial aggressor, and whether the force matched the threat.
        </p>
        <p>
          Columbus Division of Police body-cam footage is often the most important evidence. Officers usually arrive after the
          confrontation and record the aftermath: injuries, statements and the scene. The firm gets all body-cam footage, surveillance
          video from nearby businesses and witness information before recommending a strategy. When video shows who started it,
          self-defense may be the strongest argument.
        </p>
      </Section>

      <Section title="Expungement and how the charge is resolved" tone="ice">
        <p>
          Most first-offense misdemeanor assault convictions under R.C. 2903.13 can be expunged under R.C. 2953.32 one year after final
          discharge. Once sealed, the conviction no longer appears on standard employer or landlord background checks. Domestic
          violence convictions (R.C. 2919.25) cannot be expunged under Ohio law, while simple assault convictions generally can, which
          is why avoiding a DV charge matters.
        </p>
        <p>
          Whether the case ends as M1 assault, M4 disorderly conduct or DV has lasting expungement consequences. The firm weighs plea
          outcomes against the expungement timeline from the first hearing.
        </p>
      </Section>

      <Section title="What the firm does on Columbus assault charges">
        <PointGrid
          points={[
            { title: 'Evidence review', body: 'Body-cam footage, surveillance video, police reports and medical records before any hearing.' },
            { title: 'Self-defense investigation', body: 'A full look at who started the confrontation.' },
            { title: 'Felony escalation', body: 'Contesting protected-victim status when the facts do not support felony charges.' },
            { title: 'Mental state', body: 'Whether the prosecution can prove knowing conduct as R.C. 2903.13 requires.' },
            { title: 'Charge reduction', body: 'Negotiating a reduction to disorderly conduct or another lesser offense when the facts support it.' },
            { title: 'Diversion', body: 'First-offender diversion, which can end in dismissal without a conviction, where available.' },
          ]}
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
