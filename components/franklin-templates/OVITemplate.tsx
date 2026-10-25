import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';
import { getSuburb, FCMC, OVI_PENALTIES, OVI_BAC_THRESHOLDS, FIRM_NAP } from '@/data/franklin-county-reference';
import { FcmcTable, ProsecutorNote, SuburbAtAGlance, localCourt, slugify, suburbLinks } from './shared';

interface Props {
  suburb: string;
}

export default function OVITemplate({ suburb }: Props) {
  const suburbData = getSuburb(suburb);
  if (!suburbData) throw new Error(`No reference data found for suburb: ${suburb}`);

  const { mayorsCourt, policeAgency, keyRoads, formerProsecutorTitle } = suburbData;
  const { hasMayorsCourt, courtName, courtAddress, courtPhone, courtSchedule } = localCourt(suburb, suburbData);

  const firstLow = OVI_PENALTIES.find((p) => p.offense === 1 && p.tier === 'low')!;
  const firstHigh = OVI_PENALTIES.find((p) => p.offense === 1 && p.tier === 'high')!;
  const secondLow = OVI_PENALTIES.find((p) => p.offense === 2 && p.tier === 'low')!;
  const thirdLow = OVI_PENALTIES.find((p) => p.offense === 3 && p.tier === 'low')!;

  const roadsText = keyRoads.slice(0, 3).join(', ');
  const slug = slugify(suburb);
  const tel = `tel:${FIRM_NAP.phoneRaw.replace('+', '')}`;

  const breadcrumbItems = [
    { label: 'Locations', href: '/locations' },
    { label: 'Franklin County', href: '/locations/franklin-county' },
    { label: `OVI Defense in ${suburb}`, href: `/locations/franklin-county/ovi-dui-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `What are the OVI penalties in ${suburb}, Ohio?`,
      answer: `Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction for a ${suburb} resident carries a mandatory minimum of ${firstLow.jailMin}, fines of ${firstLow.fine}, and a license suspension of ${firstLow.suspension}. A high-tier OVI (BAC ${OVI_BAC_THRESHOLDS.highTierBlood}) carries ${firstHigh.jailMin} mandatory. A second OVI within 10 years rises to ${secondLow.jailMin}, fines of ${secondLow.fine}, and a suspension of ${secondLow.suspension}. OVI charges from ${suburb} are heard in ${courtName}.`,
    },
    {
      question: `Where is my OVI case heard if I was arrested in ${suburb}?`,
      answer: hasMayorsCourt
        ? `OVI and traffic charges from ${suburb} are first heard in ${suburb} Mayor's Court at ${courtAddress}. Court schedule: ${courtSchedule}. A second OVI or higher, a high-tier OVI (BAC 0.17%+), or any matter the mayor's court cannot resolve transfers to Franklin County Municipal Court at ${FCMC.address}. First-offense OVI matters may be handled at ${suburb} Mayor's Court; repeat offenses must be heard in Franklin County Municipal Court. An attorney can appear at both courts for you.`
        : `${mayorsCourt.note} All OVI cases from ${suburb} are heard at ${FCMC.address}, ${FCMC.floors}. Franklin County Municipal Court handles every stage of an OVI case, including arraignments, ALS appeals, pleas, and trials.`,
    },
    {
      question: `How do I appeal my Administrative License Suspension (ALS) after an OVI arrest in ${suburb}?`,
      answer: `Under ORC 4511.191, you have exactly 30 days from the date of arrest to file an ALS appeal. Missing that deadline permanently forfeits your right to contest the suspension. The appeal is filed at Franklin County Municipal Court (${FCMC.address}), wherever in Franklin County the arrest happened. The firm treats every ALS appeal as an emergency: it files right away, asks for a stay of the suspension, and challenges whether the officer followed the procedural requirements of ORC 4511.191.`,
    },
    {
      question: `What OVI defenses are available for charges in ${suburb}?`,
      answer: `The defenses the firm checks in every ${suburb} OVI case are: whether the ${policeAgency} had reasonable articulable suspicion for the stop; whether the field sobriety tests (HGN, walk-and-turn, one-leg stand) followed NHTSA standards; whether breathalyzer maintenance and calibration records show the device was working properly; whether the blood draw followed chain-of-custody rules; and, where BAC is near the threshold, the rising BAC defense, which argues that BAC was below 0.08% while driving and rose to the tested level before the test.`,
    },
    {
      question: `Can I get limited driving privileges after an OVI in ${suburb}?`,
      answer: `Yes. Ohio courts, including ${hasMayorsCourt ? courtName : FCMC.name}, can grant limited driving privileges for work, school, medical appointments, and other essential purposes. Under HB 37, first-time defendants who agree to install a certified ignition interlock device may waive the standard 15-day hard suspension waiting period and get limited privileges almost immediately. The firm petitions quickly and helps you meet the court's requirements. The reinstatement fee after an OVI suspension is ${OVI_BAC_THRESHOLDS.licenseReinstatementFee}.`,
    },
    {
      question: `Will an OVI conviction in ${suburb} affect my professional license?`,
      answer: `OVI convictions are reportable to Ohio professional licensing boards and can lead to investigations by the State Medical Board, Ohio Board of Nursing, Ohio Bar Association, Ohio Real Estate Commission, and commercial driver licensing authorities. ${suburb} residents who work in healthcare, law, education, or trucking face these consequences on top of the criminal penalties. The firm weighs licensing exposure alongside the criminal case and works toward outcomes, such as a reduction to reckless operation under ORC 4511.20, that limit the long-term effect on your career.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for an OVI charge in ${suburb}?`,
      answer: `Jwayyed Law LLC defends OVI charges throughout Franklin County, including ${suburb}, in ${courtName} and Franklin County Municipal Court. The firm files the ALS appeal within the 30-day deadline under ORC 4511.191, and that deadline cannot be extended. Call (614) 285-5482 as soon as you can after your arrest.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`OVI / DUI defense attorney in ${suburb}, Ohio`}
        description={
          hasMayorsCourt
            ? `OVI charges from ${suburb} start in ${suburb} Mayor's Court. The license suspension appeal goes to Franklin County Municipal Court, and you have 30 days from the arrest to file it.`
            : `OVI charges from ${suburb} are heard in Franklin County Municipal Court. You have 30 days from the arrest to appeal the license suspension.`
        }
      />

      <Section
        title={`Where a ${suburb} OVI case is heard`}
        intro={
          <p>
            An OVI arrest in {suburb} usually starts with a stop by the {policeAgency} on {keyRoads[0]}, at a checkpoint, or on
            another road through the city. The case then goes to {courtName}.
          </p>
        }
      >
        <SuburbAtAGlance suburb={suburb} data={suburbData} />
        {hasMayorsCourt ? (
          <>
            <p>
              OVI and traffic charges from {suburb} are first processed in <strong>{suburb} Mayor&apos;s Court</strong> at{' '}
              {courtAddress} ({courtPhone}). A mayor&apos;s court is run by the municipal mayor or a
              designated magistrate and hears minor misdemeanor OVI and traffic offenses from inside the municipality.
            </p>
            <p>
              A high-tier OVI, a repeat offense, or any matter the mayor&apos;s court cannot resolve is transferred to Franklin
              County Municipal Court for arraignment on misdemeanor OVI charges, pretrial motions and trial. Your ALS appeal is always
              filed in Franklin County Municipal Court, whichever court has the criminal case.
            </p>
          </>
        ) : (
          <p>
            {mayorsCourt.note} OVI charges from {suburb} go straight to <strong>Franklin County Municipal Court</strong>, the
            busiest municipal court in Ohio, which handles OVI arraignments, ALS appeals, pretrial motions and trials for Columbus
            and the surrounding Franklin County communities. The firm appears in this court regularly.
          </p>
        )}
        <FcmcTable hears="OVI transfers from mayor's courts, all ALS appeals, and misdemeanor OVI arraignments, motions and trials" />
        <p>
          The {policeAgency} patrols {roadsText}, and Ohio State Highway Patrol units also work parts of Franklin County. Every
          OVI stop is a chain of police decisions: the reason for the stop, the field sobriety tests, the request for a breath or
          blood sample, and the paperwork. A misstep at any point can be the basis of a defense.
        </p>
        <ProsecutorNote title={formerProsecutorTitle} />
      </Section>

      <Section
        title="OVI penalties under HB 37"
        tone="ice"
        intro={
          <p>
            House Bill 37, effective April 9, 2025, restructured the mandatory minimum penalties for OVI under R.C. 4511.19. These
            are mandatory minimums: the court cannot impose less.
          </p>
        }
      >
        <FactTable
          title={`First OVI, low tier (BAC ${OVI_BAC_THRESHOLDS.lowTierBlood})`}
          rows={[
            { label: 'Mandatory minimum', value: firstLow.jailMin },
            { label: 'Fines', value: firstLow.fine },
            { label: 'License suspension', value: firstLow.suspension },
            { label: 'Reinstatement fee', value: OVI_BAC_THRESHOLDS.licenseReinstatementFee },
            {
              label: 'Limited privileges',
              value:
                'First-time defendants who agree to a certified ignition interlock may have the standard 15-day hard suspension waiting period waived under HB 37, allowing near-immediate privileges for work, school and medical purposes.',
            },
          ]}
        />
        <FactTable
          title={`First OVI, high tier (BAC ${OVI_BAC_THRESHOLDS.highTierBlood})`}
          rows={[
            { label: 'Mandatory minimum', value: firstHigh.jailMin },
            { label: 'Fines', value: firstHigh.fine },
            { label: 'License suspension', value: firstHigh.suspension },
          ]}
        />
        <FactTable
          title={`Repeat OVI within the ${OVI_BAC_THRESHOLDS.lookBackPeriod.split('(')[0].trim()} lookback`}
          rows={[
            {
              label: 'Second OVI',
              value: `Minimum ${secondLow.jailMin}; fines of ${secondLow.fine}; suspension of ${secondLow.suspension}; 90-day vehicle immobilization and 90-day plate impound.`,
            },
            {
              label: 'Third OVI within 10 years',
              value: `Minimum ${thirdLow.jailMin}; fines of ${thirdLow.fine}; suspension of ${thirdLow.suspension}; criminal forfeiture of the vehicle.`,
            },
            {
              label: 'Fourth or later within 10 years',
              value: 'A fourth-degree felony, heard in Franklin County Court of Common Pleas rather than municipal court.',
            },
          ]}
        />
        <h3>Consequences beyond the sentence</h3>
        <p>
          Ohio professional licensing boards, including the State Medical Board, Board of Nursing, Bar Association, Real Estate
          Commission, and the Bureau of Motor Vehicles for CDL holders, can investigate, sanction or revoke licenses after an OVI
          conviction. Auto insurance rates usually rise sharply, and many insurers require SR-22 certification for the length of
          the suspension.
        </p>
        <p>
          An OVI conviction is not eligible for expungement under Ohio law, so it stays on your record permanently. The firm weighs
          these consequences when advising on a plea offer against trial, and where appropriate pursues a reduction to reckless
          operation under ORC 4511.20, which can sometimes be sealed after the waiting periods under ORC 2953.32.
        </p>
      </Section>

      <Section title="The 30-day administrative license suspension appeal">
        <p>
          When a {suburb} driver is arrested for OVI, the officer serves a notice of Administrative License Suspension under ORC
          4511.191. The ALS is a civil action, separate from the criminal case. It takes effect the moment the notice is served and
          starts a 15-day hard suspension with no driving at all.
        </p>
        <Callout title="30 days from the date of arrest">
          That is how long you have to file the ALS appeal in Franklin County Municipal Court. No extension is available, and
          missing the window forfeits the right to challenge the suspension.
        </Callout>
        <Steps
          steps={[
            { title: 'File right away', body: 'The firm files the appeal as soon as it is retained, treating every ALS appeal as an emergency.' },
            { title: 'Ask for a stay', body: 'A stay of the suspension lets you keep driving while the appeal is pending.' },
            {
              title: 'Challenge the procedure',
              body: 'Whether the officer properly advised you of the consequences of refusal or submission, whether the testing device was maintained and calibrated, and whether the required paperwork was submitted on time.',
            },
            {
              title: 'Challenge the substance',
              body: 'Even a partial win, such as a shorter suspension or a stay, reduces the disruption while the criminal case moves forward.',
            },
          ]}
        />
      </Section>

      <Section title={`${suburb} OVI defense strategies`} tone="ice">
        <PointGrid
          points={[
            {
              title: 'The stop',
              body: `The Fourth Amendment and the Ohio Constitution require reasonable articulable suspicion of a traffic violation or crime before a stop. Weaving slightly within a lane, braking early or an overly cautious turn are sometimes not enough, and evidence from an invalid stop may be suppressed. The firm gets all body-cam and dash-cam footage from the ${policeAgency} stop.`,
            },
            {
              title: 'Field sobriety tests',
              body: 'NHTSA publishes standard procedures for the Horizontal Gaze Nystagmus, walk-and-turn and one-leg stand tests. The firm compares the recorded tests and the officer’s training records to those standards and challenges any deviation.',
            },
            {
              title: 'Breath tests',
              body: 'The firm subpoenas breathalyzer maintenance and calibration records to show whether the instrument was working properly.',
            },
            {
              title: 'Blood draws',
              body: 'Chain-of-custody documentation and laboratory records are checked for gaps and errors.',
            },
            {
              title: 'Rising BAC',
              body: 'Where BAC is near 0.08%, or close to 0.17% for high tier, the defense argues that blood alcohol was below the threshold while driving and rose by the time of the test. Ohio courts recognize this defense when the facts support it.',
            },
          ]}
        />
      </Section>

      <Section title={`What the firm handles in ${suburb} OVI cases`}>
        <PointGrid
          points={[
            { title: 'ALS appeal (30-day deadline)', body: 'Emergency filing, a stay of suspension, and procedural and substantive challenges under ORC 4511.191.' },
            { title: 'First OVI defense', body: 'Stop validity, field sobriety test administration, breathalyzer calibration records, rising BAC and diversion options.' },
            { title: 'Second and third OVI defense', body: 'Penalty mitigation, continuous alcohol monitoring alternatives and vehicle immobilization challenges.' },
            { title: 'High-tier OVI (BAC 0.17%+)', body: 'Defending high-tier OVI charges against the enhanced penalty mandatory minimums and the interlock requirements.' },
            { title: 'CDL OVI defense', body: 'Federal disqualification consequences and the effect on a commercial license.' },
            { title: 'Limited driving privileges', body: 'Privileges petitions to the court for work, school and medical driving during a suspension.' },
            { title: 'Reckless operation reduction', body: 'Negotiating an R.C. 4511.20 plea to preserve expungement eligibility.' },
          ]}
        />
        <p>
          If you were arrested for OVI in {suburb} or anywhere in Franklin County and need a DUI defense attorney, call <a href={tel}>{FIRM_NAP.phone}</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link>. The 30-day ALS deadline runs from the arrest and cannot be
          extended, so every day of waiting narrows your options. See the firm&apos;s{' '}
          <Link href="/ovi-dui-defense">OVI / DUI defense</Link> practice for more.
        </p>
      </Section>

      <Section title={`More for ${suburb} and Franklin County`} tone="ice">
        <LinkGrid links={suburbLinks(suburb, 'ovi-dui-defense')} />
        <h3>Franklin County courts</h3>
        <LinkGrid
          columns={2}
          links={[
            { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide: location, dockets and what to expect' },
            { href: '/locations/franklin-county/mayors-courts-franklin-county', title: 'Franklin County mayor’s courts', subtitle: 'Every suburb mayor’s court in the county' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
