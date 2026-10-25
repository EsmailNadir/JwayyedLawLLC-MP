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
  title: 'Columbus CDL OVI Defense Attorney',
  description:
    'Commercial drivers face a 0.04% BAC limit, and an OVI in any vehicle brings a 1-year federal CDL disqualification. Defense for Columbus CDL holders.',
  keywords: ['Columbus CDL OVI lawyer', 'commercial driver DUI Columbus', 'CDL OVI defense Ohio', 'truck driver OVI Columbus', 'Franklin County CDL OVI attorney', 'CDL OVI defense Columbus', 'CDL OVI charges'],
  openGraph: {
    title: 'Columbus CDL OVI Defense Attorney | Jwayyed Law LLC',
    description: 'The 0.04% threshold, federal disqualification and the ALS appeal for CDL holders charged in Columbus.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/cdl-ovi-columbus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/cdl-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'CDL OVI in Columbus', href: '/locations/franklin-county/cdl-ovi-columbus' },
];

const faqs = [
  {
    question: 'What is the BAC threshold for CDL drivers in Columbus?',
    answer:
      'Under federal regulations (49 CFR § 392.5) and Ohio law, commercial motor vehicle (CMV) drivers face a 0.04% BAC threshold while operating a commercial vehicle, half the standard 0.08% threshold. CDL holders can also be disqualified for an OVI or DUI conviction in a personal vehicle. A Columbus CDL holder arrested in their own car can face CDL consequences from a standard OVI.',
  },
  {
    question: 'What are the CDL disqualification consequences from a Columbus OVI?',
    answer:
      "A first OVI conviction, even in a personal vehicle, brings a 1-year federal CDL disqualification (3 years if the driver was transporting hazardous materials). A second OVI conviction brings lifetime CDL disqualification under federal law (49 U.S.C. § 31311). For truck drivers, bus drivers and other commercial operators, disqualification means losing the job. These federal consequences come on top of Ohio's criminal OVI penalties.",
  },
  {
    question: 'Can a Columbus CDL OVI be fought on the same grounds as a standard OVI?',
    answer:
      'Yes. Every standard OVI defense applies: the validity of the stop, how the field sobriety tests were given, breathalyzer calibration and blood test chain of custody. At a 0.04% threshold, instrument accuracy and the margin of error matter even more, and a near-threshold result combined with instrument error can be a strong challenge. The firm subpoenas calibration records in every CDL OVI case.',
  },
  {
    question: 'Does a CDL holder have to report an OVI arrest to their employer?',
    answer:
      'Federal regulations (49 CFR § 383.31) require CDL holders to notify their employer within 30 days of an OVI conviction. The trigger is the conviction, not the arrest, though some employer policies also require notice of an arrest. Failing to notify after a conviction is a separate federal violation. The firm advises on notification duties alongside the criminal defense.',
  },
  {
    question: 'What is the ALS consequence for a CDL holder in Columbus?',
    answer:
      "The Administrative License Suspension from a Columbus OVI arrest affects both regular driving and commercial driving. During the ALS, CDL holders usually cannot operate commercial vehicles even if they get limited privileges for regular driving. That makes the 30-day ALS appeal deadline especially important: a longer suspension means a longer stretch without work.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus CDL OVI?',
    answer:
      'A CDL OVI threatens a career as well as a license. Jwayyed Law LLC defends CDL OVI cases with the federal disqualification rules in view: the firm files the ALS appeal within the 30-day deadline, reviews every standard defense with close attention to near-threshold BAC accuracy, and advises on federal employer notification. Call (614) 285-5482.',
  },
];

const RELATED = [
  { href: '/locations/franklin-county/ovi-dui-defense-columbus', title: 'OVI defense in Columbus', subtitle: 'Every OVI charge in Franklin County' },
  { href: '/locations/franklin-county/second-ovi-columbus', title: 'Second OVI in Columbus', subtitle: 'The lifetime disqualification scenario' },
  { href: '/locations/franklin-county/refusal-ovi-columbus', title: 'Refusal OVI in Columbus', subtitle: 'Implied consent and the refusal suspension' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
  { href: '/ovi-dui-defense/commercial-dui-cdl', title: 'Commercial DUI in Ohio', subtitle: 'The statewide rules for CDL holders' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'What they cover, and what they do not' },
];

export default function ColumbusCDLOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: CDL OVI Defense in Columbus", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/cdl-ovi-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="CDL and commercial driver OVI defense in Columbus"
        description="A first OVI conviction, even in your own car, brings a 1-year federal CDL disqualification. A second brings lifetime disqualification."
      />

      <KeyFacts
        facts={[
          { figure: '0.04%', label: 'BAC limit while operating a commercial vehicle' },
          { figure: '1 year', label: 'federal CDL disqualification for a first OVI (3 years with hazardous materials)' },
          { figure: 'Lifetime', label: 'disqualification for a second OVI conviction' },
          { figure: '30 days', label: 'to appeal the ALS, and to notify your employer after a conviction' },
        ]}
      />

      <Section
        title="CDL OVI stops in Columbus"
        intro={
          <p>
            Columbus sits where I-70 (east-west) and I-71 (northeast-southwest) meet, two of the most heavily trafficked freight corridors in
            the Midwest, and it is a major logistics hub.
          </p>
        }
      >
        <p>
          The Ohio State Highway Patrol and local police run commercial vehicle inspection stations and OVI enforcement along these corridors
          in Franklin County. Columbus is also the hub of Ohio&rsquo;s Amazon, FedEx and UPS distribution network, which employs large numbers
          of truck drivers, bus operators, delivery drivers and other CDL holders. A Columbus OVI charge is heard at {FCMC.name}.
        </p>
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'The OVI charge and the ALS appeal. Federal disqualification runs separately.' },
          ]}
        />
        <p>
          Jwayyed Law LLC defends CDL OVI cases for Columbus commercial drivers. Call <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <Section title="The 0.04% limit and federal disqualification" tone="ice">
        <p>
          49 CFR § 392.5 prohibits operating a commercial motor vehicle with a BAC of 0.04% or above, and Ohio law adopts that threshold. A
          driver in a semi-truck, bus or delivery vehicle can be charged at half the standard limit.
        </p>
        <FactTable
          title="Federal CDL disqualification"
          rows={[
            { label: 'First conviction', value: '1 year (3 years if hazardous materials were being transported).' },
            { label: 'Second conviction', value: 'Lifetime, under 49 U.S.C. § 31311, whichever state the offense occurred in.' },
            { label: 'Personal vehicle', value: 'Disqualification applies to an OVI in any motor vehicle, commercial or personal.' },
          ]}
        />
        <p>
          A Columbus truck driver stopped for OVI in a personal car on I-270 on a weekend faces the same CDL consequences as one stopped in a
          commercial vehicle.
        </p>
      </Section>

      <Section title="Two separate suspension tracks">
        <p>
          Ohio&rsquo;s Administrative License Suspension and any criminal license suspension on the underlying OVI charge affect all driving under your Ohio privileges. Federal CDL
          disqualification, imposed by the Federal Motor Carrier Safety Administration under 49 U.S.C. § 31311, stops commercial driving
          regardless of your Ohio privileges. You can lift the ALS and avoid a criminal suspension and still be disqualified if convicted, so
          both tracks are handled at once.
        </p>
        <p>
          During the ALS, before the appeal is decided, CDL holders usually cannot drive commercially, so an uncontested suspension means lost
          work. The firm files the ALS appeal once retained, asks for a stay so you can keep working, and challenges every procedural and
          substantive ground.
        </p>
      </Section>

      <Section title="CDL OVI defense in Columbus" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Near-threshold BAC',
              body: 'Ohio breath instruments have certified margins of error, and a reading near 0.04% may fall within them. The firm subpoenas the calibration and maintenance records and checks them against Ohio Department of Health standards.',
            },
            { title: 'Standard OVI defenses', body: 'The stop, the field sobriety tests, breath calibration and blood chain of custody all apply.' },
            {
              title: 'A second offense',
              body: 'With lifetime disqualification at stake, the firm checks the prior conviction record for accuracy and challenges the current arrest on every constitutional ground.',
            },
            { title: 'Each outcome on both licenses', body: 'Advice on how a plea or verdict affects the Ohio license and the federal CDL.' },
          ]}
        />
      </Section>

      <Section title="Federal notification duties">
        <p>
          49 CFR § 383.31 requires you to notify your employer of an OVI conviction within 30 days of the conviction, not the arrest, even if
          the OVI happened in a personal vehicle. Some employers require notice of an arrest by contract. You must also notify the state that
          issued your CDL. Failing to notify after a conviction is a separate federal violation with its own CDL consequences. The firm advises
          on these duties from the start.
        </p>
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
