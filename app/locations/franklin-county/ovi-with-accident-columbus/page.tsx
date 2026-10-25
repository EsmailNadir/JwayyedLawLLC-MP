import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';
import { FCMC } from '@/data/franklin-county-reference';

export const metadata: Metadata = {
  title: 'Columbus OVI With Accident Defense',
  description:
    'An OVI with an accident in Columbus can bring felony vehicular assault charges in Common Pleas and a civil lawsuit alongside the OVI case.',
  keywords: ['Columbus OVI with accident lawyer', 'OVI accident Columbus Ohio', 'vehicular assault Columbus attorney', 'aggravated vehicular assault Columbus', 'drunk driving accident Columbus defense'],
  openGraph: {
    title: 'Columbus OVI With Accident Defense | Jwayyed Law LLC',
    description: 'Felony charges, civil exposure and the 30-day ALS appeal after an OVI accident in Columbus.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-with-accident-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-with-accident-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'OVI With Accident in Columbus', href: '/locations/franklin-county/ovi-with-accident-columbus' },
];

const faqs = [
  {
    question: 'What additional charges arise from an OVI with an accident in Columbus?',
    answer:
      'An OVI after an accident can bring charges beyond the R.C. 4511.19 OVI. If the accident caused serious physical harm to another person, the charge may become aggravated vehicular assault under R.C. 2903.08: an F4 felony at baseline, rising to F3 if you have a prior OVI conviction or the victim is a law enforcement officer or firefighter. If someone died, the charge becomes aggravated vehicular homicide under R.C. 2903.06, an F2 felony. These felony charges go to the Franklin County Court of Common Pleas.',
  },
  {
    question: 'Where is an OVI with accident case in Columbus heard?',
    answer:
      'The OVI charge from a Columbus accident is arraigned at Franklin County Municipal Court (375 S. High Street). If the injuries support aggravated vehicular assault (R.C. 2903.08) or vehicular homicide (R.C. 2903.06) charges, those felonies go to the Franklin County Court of Common Pleas. Both can be pending at the same time. The firm handles the related charges in both courts and coordinates the defense across the criminal case and any civil case.',
  },
  {
    question: 'Does an OVI accident in Columbus create civil liability?',
    answer:
      'Yes. An OVI accident that injures someone creates criminal liability and possible civil liability through a personal injury lawsuit. The civil case is separate and runs on its own timeline. Evidence from the criminal case, including the BAC result, the police report and any conviction, can be used against you in the civil lawsuit. The firm advises on how the criminal defense and the civil exposure affect each other.',
  },
  {
    question: 'Does leaving the scene of an OVI accident create additional charges in Columbus?',
    answer:
      'Yes. Ohio Revised Code 4549.02 requires a driver in an accident that causes injury or property damage to stop, give identification and render reasonable assistance. Leaving the scene of an accident with injury is a fifth-degree felony; with serious injury or death it is an F4 or F3 felony. When a Columbus OVI arrest also involves leaving the scene, the hit-and-run felony may be more serious than the OVI, and both need a defense right away.',
  },
  {
    question: 'How does OVI accident defense differ from standard OVI defense?',
    answer:
      'An accident case adds evidence: accident reconstruction reports, witness accounts of the collision, medical records of anyone injured and sometimes forensic analysis of the crash. Injuries or property damage usually make the prosecution push harder and affect plea negotiations. The firm builds the OVI evidence challenges and the accident defense together, with the injury allegations in view.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus OVI with accident?',
    answer:
      'An OVI with an accident adds possible felony vehicular assault charges, civil liability and accident reconstruction evidence to the usual OVI defense. Jwayyed Law LLC defends these cases at Franklin County Municipal Court and the Franklin County Court of Common Pleas. Call (614) 285-5482 soon: the 30-day ALS deadline applies, and the OVI, the accident charges and any civil case need one strategy from the start.',
  },
];

const RELATED = [
  { href: '/locations/franklin-county/ovi-dui-defense-columbus', title: 'OVI defense in Columbus', subtitle: 'Every OVI charge heard at Franklin County Municipal Court' },
  { href: '/locations/franklin-county/felony-ovi-columbus', title: 'Felony OVI in Columbus', subtitle: 'OVI charges heard in Common Pleas' },
  { href: '/locations/franklin-county/refusal-ovi-columbus', title: 'Refusal OVI in Columbus', subtitle: 'When you refused the breath or blood test' },
  { href: '/courts/franklin-county', title: 'Franklin County courts', subtitle: 'Municipal Court and Common Pleas' },
  { href: '/ovi-dui-defense/ovi-with-accident', title: 'OVI with accident in Ohio', subtitle: 'The statewide rules' },
];

export default function ColumbusOVIWithAccidentPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: OVI with Accident Defense in Columbus", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/ovi-with-accident-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI with an accident in Columbus"
        description="When a Columbus OVI involves a crash that hurt someone, the case can become a felony in Common Pleas, with a civil lawsuit running alongside it."
      />

      <Section
        title="Where a Columbus OVI accident case is heard"
        intro={<p>An accident case can run in two courts at once.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'The OVI charge, its arraignment and the ALS appeal.' },
          ]}
        />
        <FactTable
          title="Franklin County Court of Common Pleas"
          rows={[{ label: 'What it hears', value: 'Felony charges from the accident: aggravated vehicular assault (R.C. 2903.08) and aggravated vehicular homicide (R.C. 2903.06).' }]}
        />
        <p>
          A felony vehicular charge carries mandatory prison time and civil exposure that can last for years. Jwayyed Law LLC defends
          OVI accident cases in Columbus and coordinates the OVI and the accident charges as one defense. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <Section title="Charges that can follow a Columbus OVI accident" tone="ice">
        <p>The charge depends on how badly anyone was hurt.</p>
        <FactTable
          title="Charges by result of the accident"
          rows={[
            { label: 'Property damage only', value: 'The OVI, plus a failure to control or reckless operation charge.' },
            {
              label: 'Physical harm',
              value:
                'Aggravated vehicular assault under R.C. 2903.08 may be charged: an F4 felony at baseline (a fourth-degree felony), rising to F3 with a prior OVI or a protected victim.',
            },
            { label: 'Serious physical harm', value: 'The F3 charge applies from the start.' },
            { label: 'Death', value: 'Aggravated vehicular homicide under R.C. 2903.06 may be charged, an F2 felony (a second-degree felony).' },
            {
              label: 'Leaving the scene',
              value:
                'Under R.C. 4549.02, leaving the scene of an accident with injury is a fifth-degree felony; with serious injury or death it is an F4 or F3 felony.',
            },
          ]}
        />
        <p>
          Ohio Revised Code 4549.02 requires any driver in an accident that causes injury or property damage to stop, give identification
          and insurance information, and render reasonable assistance. When a driver left and was identified later, the hit-and-run charge
          often has heavier practical consequences than the OVI.
        </p>
      </Section>

      <Section title="How the defense is built">
        <p>An accident case raises several issues at once, and each needs its own answer.</p>
        <Steps
          steps={[
            { title: 'The stop and the investigation', body: 'Whether the traffic stop and the OVI investigation that followed were constitutional.' },
            { title: 'The BAC evidence', body: 'The accuracy of the breathalyzer or blood test.' },
            {
              title: 'Causation',
              body: 'The prosecution must show your impairment, and not road conditions, a mechanical failure or the other driver, was the proximate cause of the collision.',
            },
            {
              title: 'The injuries',
              body: 'Whether the injuries meet the R.C. 2901.01 definition of "serious physical harm," which decides the degree of a vehicular assault charge.',
            },
          ]}
        />
        <p>
          Causation does not come up in an ordinary traffic-stop OVI. The firm brings in accident reconstruction where the facts support it,
          compares the physical evidence at the scene with the police reconstruction report, and looks for causation arguments that weaken
          the vehicular assault charge even if the OVI itself stands.
        </p>
      </Section>

      <Section title="The civil case runs alongside" tone="ice">
        <p>
          An OVI accident that injures someone usually leads to a civil lawsuit as well as the prosecution. The civil case is separate but
          runs in parallel, and evidence from the criminal case (the BAC reading, the police report, the field sobriety results and any
          conviction) can be used in it. A conviction, especially a guilty plea, can remove your ability to contest liability.
        </p>
        <p>
          The injured person will likely pursue your liability insurance and, if coverage falls short, a judgment against you. A guilty plea
          to OVI and aggravated vehicular assault creates a civil presumption of negligence that makes a large verdict more likely, so plea
          and admission decisions in the criminal case have to account for the civil exposure.
        </p>
      </Section>

      <Section title="What the firm does on a Columbus OVI accident">
        <PointGrid
          points={[
            { title: 'ALS appeal', body: 'Filed within the 30-day deadline as soon as the firm is retained.' },
            { title: 'Stop and BAC challenges', body: 'The constitutional validity of the stop and the accuracy of every chemical test.' },
            { title: 'Causation analysis', body: 'Whether impairment caused the collision, or road conditions, mechanical failure or another driver did.' },
            { title: 'Injury severity', body: 'Whether the injuries meet the R.C. 2901.01 "serious physical harm" standard needed for an F3 vehicular assault charge.' },
            { title: 'Civil coordination', body: 'Advice on pleas and admissions with the civil liability in view.' },
            { title: 'Hit-and-run defense', body: 'Any leaving-the-scene charge that comes with the OVI and the accident.' },
          ]}
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>.
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
