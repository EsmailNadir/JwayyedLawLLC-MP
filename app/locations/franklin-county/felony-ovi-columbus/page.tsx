import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';
import { FCMC } from '@/data/franklin-county-reference';

export const metadata: Metadata = {
  title: 'Columbus Felony OVI Defense Attorney',
  description:
    'A fourth OVI within 10 years is an F4 felony. Columbus cases start at Franklin County Municipal Court and move to the Court of Common Pleas.',
  keywords: ['Columbus felony OVI lawyer', 'felony DUI Columbus Ohio', '4th offense OVI Columbus', 'Columbus felony OVI attorney', 'Franklin County felony OVI defense'],
  openGraph: {
    title: 'Columbus Felony OVI Defense Attorney | Jwayyed Law LLC',
    description: 'Mandatory prison, the move to Common Pleas and the defenses for a felony OVI in Columbus.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/felony-ovi-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/felony-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Felony OVI in Columbus', href: '/locations/franklin-county/felony-ovi-columbus' },
];

const faqs = [
  {
    question: 'When does a Columbus OVI become a felony?',
    answer:
      'Under R.C. 4511.19(G)(1)(d), a fourth or subsequent OVI within 10 years is a fourth-degree felony (F4). Under R.C. 4511.19(G)(1)(e), a fourth OVI where a prior OVI resulted in a felony conviction is a third-degree felony (F3). After arraignment, a felony OVI moves from Franklin County Municipal Court to the Franklin County Court of Common Pleas for everything that follows, including trial.',
  },
  {
    question: 'What are the mandatory penalties for a felony OVI in Columbus?',
    answer:
      'An F4 felony OVI carries mandatory prison of 60 to 120 days, an optional additional 1 to 5 years, fines up to $5,000, and a license suspension of up to life. Criminal forfeiture of the vehicle is mandatory. The mandatory term is served in a state correctional facility, not the county jail. An F3 felony OVI carries mandatory prison of 60 to 120 days plus an additional 1 to 5 years of community control, fines up to $10,000, and a possible lifetime suspension.',
  },
  {
    question: 'Where is a Columbus felony OVI case heard?',
    answer:
      'The case is arraigned at Franklin County Municipal Court (375 S. High Street) and then moves to the Franklin County Court of Common Pleas for pretrial motions, plea hearings, trial and sentencing. Common Pleas follows different procedural rules and timelines than the Municipal Court. The firm represents you in both courts, so your lawyer does not change at the transfer.',
  },
  {
    question: 'Can a Columbus felony OVI still be challenged on constitutional grounds?',
    answer:
      'Yes. Every Fourth Amendment OVI defense applies to a felony OVI: the validity of the stop, how the field sobriety tests were given, breathalyzer calibration and the blood test chain of custody. The prior convictions also get close review. Each prior OVI must fall within the lookback period, and a defect in a prior conviction record can defeat the felony designation. These challenges have to be raised early at the Franklin County Court of Common Pleas.',
  },
  {
    question: 'Is there any alternative to prison for a Columbus felony OVI?',
    answer:
      'An F4 felony OVI carries a mandatory prison term of 60 to 120 days in a state correctional facility. It is not served in the county jail and cannot be suspended. After the mandatory term the court may add community control conditions. The mandatory term itself is not discretionary, but the length and conditions of post-release supervision can be negotiated. In some cases, suppressing the underlying evidence leads to a reduced charge that lowers or removes the mandatory prison requirement.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus felony OVI?',
    answer:
      'A felony OVI carries mandatory state prison, fines up to $5,000, a possible lifetime license suspension and a felony record. Jwayyed Law LLC defends felony OVI cases at both Franklin County Municipal Court and the Franklin County Court of Common Pleas. Call (614) 285-5482.',
  },
];

const RELATED = [
  { href: '/locations/franklin-county/third-ovi-columbus', title: 'Third OVI in Columbus', subtitle: 'The misdemeanor level below a felony' },
  { href: '/locations/franklin-county/ovi-dui-defense-columbus', title: 'OVI defense in Columbus', subtitle: 'Every OVI charge in Franklin County' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
  { href: '/courts/franklin-county', title: 'Franklin County courts', subtitle: 'Municipal, Common Pleas and mayor’s courts' },
  { href: '/ovi-dui-defense/third-ovi', title: 'Third OVI in Ohio', subtitle: 'Statewide penalties for a third offense' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving with an interlock during a suspension' },
];

export default function ColumbusFelonyOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Felony OVI Defense in Columbus", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/felony-ovi-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Felony OVI defense in Columbus"
        description="A fourth OVI within 10 years is a fourth-degree felony with 60 to 120 days of mandatory state prison. The case starts at Franklin County Municipal Court and moves to the Court of Common Pleas."
      />

      <KeyFacts
        facts={[
          { figure: '60 to 120 days', label: 'mandatory prison for an F4 felony OVI, in a state facility' },
          { figure: 'Up to $5,000', label: 'fine for an F4 felony OVI ($10,000 for an F3)' },
          { figure: 'Up to life', label: 'court-ordered license suspension' },
          { figure: '30 days', label: 'from arrest to appeal the ALS' },
        ]}
      />

      <Section
        title="Two Franklin County courts hear a felony OVI"
        intro={<p>A Columbus felony OVI is arraigned at {FCMC.name}, then bound over to the Franklin County Court of Common Pleas.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What happens here', value: 'Arraignment, the ALS appeal, and the preliminary hearing or its waiver.' },
          ]}
        />
        <FactTable
          title="Franklin County Court of Common Pleas"
          rows={[
            { label: 'Address', value: '373 S. High Street, two blocks from the Municipal Court.' },
            { label: 'Prosecutor', value: "The Franklin County Prosecutor's Office (the Columbus City Attorney's Office handles Municipal Court cases)." },
            { label: 'What happens here', value: 'Pretrial motions, plea, trial and sentencing.' },
          ]}
        />
        <p>
          After the preliminary hearing or its waiver, the case is bound over to Common Pleas. The case then runs under the Ohio Rules
          of Criminal Procedure for felonies, which can include grand jury indictment, formal discovery under Criminal Rule 16 and full
          suppression hearings. The Common Pleas arraignment usually comes within days of the bind-over, and motion deadlines start
          running from it. The firm represents you in both courts. Call <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <Section title="When an OVI becomes a felony" tone="ice">
        <p>
          R.C. 4511.19(G)(1)(d) makes an OVI a fourth-degree felony when it is your fourth or later OVI within a 10-year lookback.
          R.C. 4511.19(G)(1)(e) makes it a third-degree felony when you have three or more prior OVI convictions and one of them was
          itself a felony OVI.
        </p>
        <p>
          For the felony to stand, each prior conviction must count as an OVI equivalent, fall within the lookback period and be proven
          with competent evidence. The firm checks every prior conviction in the record.
        </p>
      </Section>

      <Section title="Felony OVI penalties in Franklin County">
        <FactTable
          title="F4 felony OVI"
          rows={[
            { label: 'Prison', value: '60 to 120 days mandatory, in a state correctional facility. Not county jail and not suspended.' },
            { label: 'Additional term', value: 'Optional additional prison or community control of 1 to 5 years.' },
            { label: 'Fine', value: 'Up to $5,000.' },
            { label: 'License', value: 'Suspension that may extend to a lifetime under R.C. 4511.19(G)(1)(d).' },
            { label: 'Vehicle', value: 'Criminal forfeiture, mandatory.' },
          ]}
          note="These are imposed on conviction and cannot be reduced below the mandatory minimums, whatever your circumstances."
        />
        <FactTable
          title="F3 felony OVI"
          rows={[
            { label: 'Prison', value: '60 to 120 days mandatory, plus an additional 1 to 5 years of community control.' },
            { label: 'Fine', value: 'Up to $10,000.' },
            { label: 'License', value: 'Possible lifetime suspension.' },
          ]}
        />
        <h3>The license and the ALS</h3>
        <p>
          A felony OVI arrest triggers the same Administrative License Suspension under R.C. 4511.191 as a misdemeanor, with the same
          30-day appeal deadline from the date of arrest. The firm files the appeal on retention and asks for a stay. Missing the deadline
          forfeits the only challenge to the administrative suspension, which runs three years for a test refusal on a fourth or later
          offense.
        </p>
        <p>
          Limited driving privileges, if granted at all, require an ignition interlock for the whole period. For anyone who drives for
          work, the suspension disrupts a career before the prison term begins, so interlock timing and privilege petitions are planned
          from the start.
        </p>
      </Section>

      <Section title="Defending a Columbus felony OVI" tone="ice">
        <PointGrid
          points={[
            {
              title: 'The prior convictions',
              body: 'Often the strongest defense. If one qualifying prior fails (a defective record, an out-of-state conviction that is not an equivalent, a conviction outside the lookback, or one that should have been a different offense), the charge may drop to a third-offense misdemeanor.',
            },
            { title: 'The traffic stop', body: 'Whether the stop was constitutionally valid.' },
            { title: 'Field sobriety tests', body: 'Whether they were given in line with NHTSA protocols.' },
            { title: 'Breath and blood tests', body: 'Whether the instrument was calibrated and maintained, and whether the BAC result is accurate.' },
          ]}
        />
        <Steps
          steps={[
            { title: 'Arraignment at Municipal Court', body: 'Plea, bond and the ALS appeal within 30 days of arrest.' },
            { title: 'Bind-over', body: 'After the preliminary hearing or waiver, the case moves to Common Pleas.' },
            { title: 'Suppression motions', body: 'Challenges to the stop, the tests and the priors are filed at Common Pleas.' },
            { title: 'Plea or trial', body: 'Then sentencing, with post-release supervision terms open to negotiation.' },
          ]}
        />
      </Section>

      <Section title="What a felony record costs">
        <p>
          A felony conviction generally bars you from possessing firearms under federal and state law. Most licensing boards in medicine,
          law, nursing, education, contracting and other fields treat a felony as grounds for suspension or revocation. Non-citizens may
          face immigration consequences, including deportability. Jobs that need a security clearance or bonding are usually closed off.
        </p>
        <p>
          A felony OVI is not eligible for expungement under R.C. 2953.32, so the conviction stays on the public record. Reducing the
          charge to a misdemeanor by defeating a prior conviction is a far better outcome than accepting the felony.
        </p>
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
