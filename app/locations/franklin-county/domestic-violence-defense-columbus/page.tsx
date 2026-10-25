import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';
import { FCMC } from '@/data/franklin-county-reference';

export const metadata: Metadata = {
  title: 'Columbus Domestic Violence Defense',
  description:
    'A DV conviction in Columbus cannot be expunged and triggers the federal Lautenberg firearm ban. How cases run at Franklin County Municipal Court.',
  keywords: [
    'Columbus domestic violence lawyer',
    'Columbus Ohio DV defense attorney',
    'domestic violence attorney Columbus',
    'Franklin County domestic violence defense',
    'Columbus domestic violence charge lawyer',
    'domestic violence ORC 2919.25 Columbus',
  ],
  openGraph: {
    title: 'Columbus Domestic Violence Defense | Jwayyed Law LLC',
    description: 'Domestic violence charges at Franklin County Municipal Court: penalties, protection orders, the Lautenberg Amendment and defenses.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-columbus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/domestic-violence-defense-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Domestic Violence Defense in Columbus', href: '/locations/franklin-county/domestic-violence-defense-columbus' },
];

const faqs = [
  {
    question: 'Where are Columbus domestic violence cases heard?',
    answer:
      'Domestic violence charges from Columbus go to Franklin County Municipal Court, 375 S. High Street, Columbus, OH 43215 (floors 12 to 15), (614) 645-8186. Misdemeanor DV charges, including first-offense M1 and M4 charges, are handled there from arraignment through resolution. Felony DV charges (prior convictions, a pregnant victim) are bound over to the Franklin County Court of Common Pleas. Temporary protection order (TPO) proceedings are also handled at Franklin County Municipal Court.',
  },
  {
    question: 'Can a Columbus DV charge be dropped if the alleged victim recants?',
    answer:
      "No. In Ohio the state decides whether to prosecute, not the alleged victim. Once the Columbus Division of Police submits an arrest report, the Franklin County prosecutor proceeds whether or not the alleged victim recants, refuses to cooperate or asks for dismissal. The state often goes forward on other evidence (police reports, 911 recordings, physical evidence) when the alleged victim will not testify. An attorney can make the case to the prosecutor and challenge the strength of the state's independent evidence.",
  },
  {
    question: 'What is the Lautenberg Amendment and why does it matter for a Columbus DV case?',
    answer:
      'The Lautenberg Amendment (18 U.S.C. § 922(g)(9)) permanently bars anyone convicted of a misdemeanor crime of domestic violence, including a first-offense M4 threat conviction, from possessing or buying firearms or ammunition under federal law. The ban is lifetime, applies in every occupation (law enforcement and military included), and cannot be restored under Ohio law. For Columbus residents who own firearms, work in law enforcement or security, or serve in the military, it is often the most severe consequence of a DV conviction.',
  },
  {
    question: 'Can a domestic violence conviction in Columbus be expunged?',
    answer:
      'No. Ohio Revised Code 2953.36 lists domestic violence convictions under R.C. 2919.25 as ineligible for expungement or record sealing. A DV conviction stays on your record no matter how long ago it happened or how clean the rest of your record is. A non-DV resolution, such as a plea to disorderly conduct, may be eligible for expungement. That is a central reason to contest a DV charge.',
  },
  {
    question: 'What are the penalties for domestic violence in Columbus?',
    answer:
      'Under R.C. 2919.25, a first-offense DV causing or attempting physical harm is an M1 (up to 180 days in jail, $1,000 fine). Threatening a family or household member with force is an M4 (up to 30 days in jail, $250 fine). A first-offense DV against a pregnant victim is an F5 felony. One prior DV conviction makes it an F4 felony; two or more make it an F3. On top of the criminal penalties come a mandatory temporary protection order, possible loss of firearms under the Lautenberg Amendment and permanent ineligibility for expungement, which is why a non-DV resolution matters so much.',
  },
  {
    question: 'What DV defenses are available in Columbus?',
    answer:
      "Defenses include self-defense under ORC 2901.05 (once raised, the prosecution must disprove it); testing the alleged victim's account against video, physical and medical evidence; finding inconsistencies between the first 911 call and later statements; looking at whether the alleged victim has recanted or given contrary information; and pursuing a plea to disorderly conduct or another non-DV offense, which avoids the Lautenberg firearm ban and keeps expungement possible.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus domestic violence charge?',
    answer:
      'Jwayyed Law LLC defends domestic violence cases at Franklin County Municipal Court in Columbus. The state prosecutes DV regardless of what the victim wants, and a conviction brings a permanent Lautenberg firearm ban and can never be expunged, so a dismissal or non-DV resolution matters. The firm investigates, challenges the evidence and credibility, and pursues every alternative to a DV conviction. Call (614) 285-5482 right away: decisions in the first 48 hours matter.',
  },
];

const RELATED = [
  { href: '/criminal-defense/domestic-violence', title: 'Domestic violence in Ohio', subtitle: 'The statewide rules for DV charges' },
  { href: '/locations/franklin-county/assault-defense-columbus', title: 'Assault in Columbus', subtitle: 'Assault charges outside a family or household' },
  { href: '/locations/franklin-county/disorderly-conduct-defense-columbus', title: 'Disorderly conduct in Columbus', subtitle: 'The most common non-DV resolution' },
  { href: '/locations/franklin-county/expungement-columbus', title: 'Expungement in Columbus', subtitle: 'What can and cannot be sealed' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
];

export default function ColumbusDomesticViolencePage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Domestic Violence Defense in Columbus", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/domestic-violence-defense-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Domestic violence defense in Columbus"
        description="A domestic violence conviction in Ohio cannot be expunged and brings a lifetime federal firearm ban. In Columbus the case is heard at Franklin County Municipal Court."
      />

      <KeyFacts
        facts={[
          { figure: '48 hours', label: 'after arrest, when arraignment, protection order terms and evidence preservation are decided' },
          { figure: '180 days', label: 'maximum jail for M1 domestic violence' },
          { figure: 'Never', label: 'a DV conviction cannot be expunged under R.C. 2953.36' },
          { figure: 'Lifetime', label: 'federal firearm ban under the Lautenberg Amendment' },
        ]}
      />

      <Section
        title="Where a Columbus DV case is heard"
        intro={
          <p>
            Domestic violence cases from Columbus are heard at {FCMC.name}. Felony DV is bound over to the Franklin County Court of
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
            { label: 'What it hears', value: 'Misdemeanor DV (M1 and M4) and temporary protection order proceedings.' },
          ]}
        />
        <p>
          Consequences start before any court date. The Columbus Division of Police arrests on the spot when there is probable cause, a
          temporary protection order is usually issued the same night, and the state prosecution, not the alleged victim, controls what
          happens next. Domestic disturbance calls are among the most common police responses in Columbus, and the Franklin County
          prosecutor&rsquo;s DV unit handles a high volume of cases. It proceeds on the state&rsquo;s evidence whether or not the
          alleged victim cooperates.
        </p>
        <p>
          In many Columbus DV cases the bigger issue is the classification: a resolution that is not domestic violence keeps your
          firearm rights and expungement eligibility. The firm defends{' '}
          <Link href="/criminal-defense/domestic-violence">domestic violence charges</Link> at Franklin County Municipal Court. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a> right away.
        </p>
      </Section>

      <Section title="Domestic violence under R.C. 2919.25" tone="ice">
        <FactTable
          title="Misdemeanor domestic violence"
          rows={[
            { label: 'Physical harm', value: 'Knowingly causing or attempting to cause physical harm to a family or household member: M1, up to 180 days in jail and a $1,000 fine.' },
            { label: 'Serious physical harm', value: 'Recklessly causing serious physical harm to a family or household member: also M1.' },
            { label: 'Threat of force', value: 'Threatening a family or household member with force so that they believe imminent harm is at risk: M4, up to 30 days in jail and a $250 fine.' },
          ]}
        />
        <FactTable
          title="Felony domestic violence"
          rows={[
            { label: 'Pregnant victim', value: 'F5 felony on a first offense.' },
            { label: 'One prior DV conviction', value: 'F4 felony.' },
            { label: 'Two or more prior DV convictions', value: 'F3 felony.' },
            { label: 'Court', value: 'Tried in the Franklin County Court of Common Pleas, not Franklin County Municipal Court.' },
          ]}
          note="These felony escalations carry mandatory incarceration."
        />
        <p>
          &ldquo;Family or household member&rdquo; is broad: spouses, former spouses, persons living as spouses, natural parents of
          shared children, relatives by blood or marriage, and current or former cohabitants within the preceding five years.
        </p>
        <p>
          The firm checks the prior conviction records behind every felony charge. Using an out-of-state or dissimilar prior to justify
          felony escalation can be challenged.
        </p>
      </Section>

      <Section title="The Lautenberg firearm ban">
        <p>
          The federal Lautenberg Amendment (18 U.S.C. § 922(g)(9)) permanently bars anyone convicted of a misdemeanor crime of domestic
          violence from possessing, buying or transporting firearms or ammunition under federal law. The ban is lifetime, does not lapse
          with time and cannot be restored by state law. Any DV conviction under R.C. 2919.25 triggers it, the M4 threat conviction as
          well as the M1. It applies to law enforcement officers, military personnel and civilians alike.
        </p>
        <p>
          For Columbus residents who keep firearms for home defense, current or aspiring officers and service members, and people in
          security or armed jobs, the ban can mean losing a career. A plea to disorderly conduct (R.C. 2917.11) does not trigger it and
          can be expunged.
        </p>
      </Section>

      <Section title="How a Columbus DV case moves" tone="ice">
        <Steps
          steps={[
            {
              title: 'Arraignment',
              body: 'Usually the morning after the arrest, at 375 S. High Street. The court sets bond conditions and issues or continues the temporary protection order (TPO).',
            },
            {
              title: 'Protection order terms',
              body: 'A TPO can bar you from the family home and from contact with anyone named in it, and in some cases affects custody arrangements. The firm argues for reasonable bond and properly scoped terms from the first appearance.',
            },
            {
              title: 'Discovery',
              body: "Prosecutors regularly proceed without the alleged victim, using 911 recordings, body-cam footage, medical records and prior police contacts. The firm gets all of it and weighs the state's independent case before advising on strategy.",
            },
            {
              title: 'Resolution',
              body: 'When the evidence is weak or inconsistent, the firm pushes for dismissal. When a resolution makes sense, it pursues a non-DV outcome.',
            },
          ]}
        />
      </Section>

      <Section title="Defenses in a Columbus DV case">
        <PointGrid
          points={[
            {
              title: 'Self-defense',
              body: "Available under ORC 2901.05 when you responded to the alleged victim's aggression. Since 2019, Ohio law puts the burden of disproving self-defense on the prosecution.",
            },
            {
              title: 'Credibility',
              body: "When the account in the police report does not match the body-cam footage, the 911 call or the alleged victim's later statements.",
            },
            {
              title: 'Recantation',
              body: "An alleged victim who recants or gives a written statement contradicting the police account does not end the case, but it weakens the state's position.",
            },
            {
              title: 'A non-DV plea',
              body: 'A plea to disorderly conduct under R.C. 2917.11 is still a conviction but not a DV conviction. It does not trigger the Lautenberg ban and can be expunged after a 1-year waiting period.',
            },
          ]}
        />
        <Callout title="When trial looks unlikely to succeed">
          For clients whose main concern is firearm rights or a clean record later, a disorderly conduct plea instead of a DV conviction
          is often the most valuable outcome available.
        </Callout>
      </Section>

      <Section title="What the firm does on a Columbus DV charge" tone="ice">
        <PointGrid
          points={[
            { title: 'Arraignment', body: 'Appears at arraignment to address bond conditions and the scope of the protection order from day one.' },
            { title: 'Evidence', body: 'Police reports, body-cam footage, 911 recordings and medical records, obtained before any hearing.' },
            { title: 'Self-defense', body: 'A full investigation of what happened.' },
            { title: 'Non-DV resolution', body: 'A disorderly conduct plea or dismissal that keeps firearm rights and expungement eligibility.' },
            { title: 'Protection orders', body: 'Contesting overly broad TPO terms that put you out of your home or affect your relationship with your children.' },
            { title: 'Felony escalation', body: 'Checking the prior conviction records used to support a felony DV charge.' },
          ]}
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>. Arraignment,
          protection order terms and early evidence preservation in the first 48 hours shape the rest of the case.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
