import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';
import { getSuburb, FCMC, DRUG_POSSESSION, MISDEMEANOR_SENTENCING, EXPUNGEMENT, FIRM_NAP } from '@/data/franklin-county-reference';
import { FcmcTable, ProsecutorNote, SuburbAtAGlance, localCourt, slugify, suburbLinks } from './shared';

interface Props {
  suburb: string;
}

export default function DrugPossessionTemplate({ suburb }: Props) {
  const suburbData = getSuburb(suburb);
  if (!suburbData) throw new Error(`No reference data found for suburb: ${suburb}`);

  const { mayorsCourt, policeAgency, keyRoads, formerProsecutorTitle } = suburbData;
  const { hasMayorsCourt, courtName, courtAddress, courtPhone, courtSchedule } = localCourt(suburb, suburbData);
  const slug = slugify(suburb);
  const tel = `tel:${FIRM_NAP.phoneRaw.replace('+', '')}`;

  const breadcrumbItems = [
    { label: 'Locations', href: '/locations' },
    { label: 'Franklin County', href: '/locations/franklin-county' },
    { label: `Drug Possession Defense in ${suburb}`, href: `/locations/franklin-county/drug-possession-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `Is marijuana possession still illegal in ${suburb}, Ohio?`,
      answer: `Ohio's adult-use marijuana law (Issue 2, effective December 7, 2023, with implementing legislation under HB 86) allows adults 21 and older to legally possess up to 2.5 ounces of marijuana and up to 15 grams of marijuana concentrate. Home cultivation of up to 6 plants is also legal. Possession within these limits is not a crime. Possession above 2.5 oz (but below the bulk threshold of 200g) remains a minor misdemeanor. Possession of 200g or more is a fourth-degree misdemeanor, rising to felony levels at higher quantities. Possession by anyone under 21 remains illegal.`,
    },
    {
      question: `What are the penalties for drug possession in ${suburb}?`,
      answer: `Drug possession penalties in Ohio depend on the type and quantity of the controlled substance under R.C. 2925.11. Possession of most Schedule I and II controlled substances (cocaine, heroin, methamphetamine) starts as a fifth-degree felony and rises with quantity. Marijuana possession above the adult-use legal limit (70.87g to 99g) is a minor misdemeanor (no jail, up to $150 fine); 100g to 199g is an M4 (up to ${MISDEMEANOR_SENTENCING.M4.maxJail} jail, ${MISDEMEANOR_SENTENCING.M4.maxFine} fine); 200g or more (bulk amount) is aggravated possession, a fifth-degree felony. Drug paraphernalia under R.C. 2925.14 is an M4 on a first offense. Charges from ${suburb} are heard in ${courtName}.`,
    },
    {
      question: `Where is a drug possession case from ${suburb} heard?`,
      answer: hasMayorsCourt
        ? `It depends on the severity. Minor misdemeanor marijuana possession (2.5 to 10 oz) is handled in ${suburb} Mayor's Court at ${courtAddress}, ${courtPhone}. Court schedule: ${courtSchedule}. More serious charges (M4 marijuana or any felony drug possession) transfer to Franklin County Municipal Court at ${FCMC.address} for arraignment, and felony matters are bound over to Franklin County Court of Common Pleas.`
        : `${mayorsCourt.note} Drug possession charges from ${suburb} go directly to Franklin County Municipal Court at ${FCMC.address} (${FCMC.floors}), ${FCMC.clerkPhone}. Felony drug possession is bound over to Franklin County Court of Common Pleas.`,
    },
    {
      question: `What is Intervention in Lieu of Conviction (ILC) in Franklin County?`,
      answer: `Ohio's Intervention in Lieu of Conviction program (ORC 2951.041) lets eligible defendants charged with drug possession or offenses related to substance abuse complete treatment instead of being convicted. Completing ILC results in full dismissal of the charges, with no conviction and no record. Franklin County Municipal Court has discretion to grant ILC for eligible first-time offenders. The firm checks ILC eligibility and argues for placement where it fits, because a dismissal under ILC is far better than any conviction.`,
    },
    {
      question: `Can the evidence be suppressed in a drug possession case in ${suburb}?`,
      answer: `Yes. Many drug possession cases turn on whether the search or stop that produced the evidence was legal. If the ${policeAgency} made an unlawful traffic stop, searched without a warrant and without valid consent or exigent circumstances, or went beyond the scope of a valid warrant, the evidence may be suppressed under the Fourth Amendment. Without the drugs in evidence, the prosecution often cannot go forward. The firm examines the stop, the search, and the chain of custody before recommending a plea or trial.`,
    },
    {
      question: `Can a drug possession charge in ${suburb} be expunged?`,
      answer: `Most drug possession convictions, including felony drug possession of the third, fourth, or fifth degree, are eligible for expungement under ORC 2953.32 after the waiting periods (${EXPUNGEMENT.waitingPeriods.misdemeanorOrF4F5} for M1/F4/F5; ${EXPUNGEMENT.waitingPeriods.felonyThirdDegree} for F3). HB 96 (effective September 30, 2025) broadened the categories of offenses that can be sealed. The firm advises on expungement from day one so plea strategy accounts for the long-term record.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for a drug possession charge in ${suburb}?`,
      answer: `Jwayyed Law LLC defends drug possession charges throughout Franklin County, including ${suburb}. Drug cases often raise suppression issues about the stop or search, and diversion and ILC are open to many first-time defendants. A conviction, especially a felony drug conviction, has long-term consequences for employment, housing, and professional licensing. Call (614) 285-5482 to discuss your ${suburb} drug possession case.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`Drug possession defense attorney in ${suburb}, Ohio`}
        description={`Facing drug possession charges in ${suburb}? They range from a minor misdemeanor marijuana citation with a $150 maximum fine to felony charges, and they start in ${courtName}.`}
      />

      <Section
        title={`Where a ${suburb} drug possession case is heard`}
        intro={
          <p>
            Drug cases in {suburb} usually begin with a traffic stop by the {policeAgency} on {keyRoads[0]}, a search after an
            unrelated arrest, or a search of a home or vehicle under a warrant. Each starting point raises different legal issues.
          </p>
        }
      >
        <SuburbAtAGlance suburb={suburb} data={suburbData} />
        {hasMayorsCourt ? (
          <p>
            Minor misdemeanor marijuana possession citations from {suburb} may be handled in{' '}
            <strong>{suburb} Mayor&apos;s Court</strong> at {courtAddress}, {courtPhone} ({courtSchedule}). More serious misdemeanor
            drug charges and all felony drug possession transfer to Franklin County Municipal Court for arraignment, and felonies
            are then bound over to Franklin County Court of Common Pleas.
          </p>
        ) : (
          <p>
            {mayorsCourt.note} Drug possession charges from {suburb} go directly to{' '}
            <strong>Franklin County Municipal Court</strong>. Felony drug possession is bound over to Franklin County Court of
            Common Pleas.
          </p>
        )}
        <FcmcTable hears="Misdemeanor drug charges, felony drug arraignments, the HART Court recovery docket for opioid-involved defendants, and ILC (Intervention in Lieu of Conviction) for eligible first-time drug defendants" />
        <ProsecutorNote title={formerProsecutorTitle} />
        <p>
          The {policeAgency} enforces Ohio drug laws, and traffic stops on {keyRoads[0]} and elsewhere in {suburb} regularly produce
          drug possession charges when officers search incident to arrest or with claimed consent. The firm starts every drug case with the
          origin of the search or seizure, because a suppressed search often ends the whole case.
        </p>
      </Section>

      <Section
        title={`What is and is not legal for marijuana in ${suburb}`}
        tone="ice"
        intro={
          <p>
            Ohio Issue 2, effective December 7, 2023, and implemented through House Bill 86, set up a legal adult-use marijuana
            framework. Officers in {suburb} can no longer treat possession within these limits as a crime.
          </p>
        }
      >
        <FactTable
          title="Legal for adults 21 and older"
          rows={[
            { label: 'Usable marijuana', value: <>Up to <strong>2.5 ounces</strong></> },
            { label: 'Concentrate', value: <>Up to <strong>15 grams</strong></> },
            { label: 'Home cultivation', value: <>Up to <strong>6 marijuana plants</strong> per adult</> },
          ]}
          note="Persons under 21 are not covered and face the standard criminal possession laws. Consumption in public spaces, motor vehicles, or near schools is prohibited and subject to civil penalties."
        />
        <FactTable
          title="Marijuana possession above the legal limit"
          rows={[
            { label: 'Over 2.5 oz (70.87 grams) up to 100 grams', value: 'Minor misdemeanor: no jail, maximum $150 fine.' },
            { label: '100 to 199 grams', value: 'Fourth-degree misdemeanor: up to 30 days jail, $250 fine.' },
            {
              label: '200 grams or more',
              value: 'Bulk amount: aggravated possession, a fifth-degree felony carrying up to 12 months in prison and a $2,500 fine.',
            },
            { label: '1,000 to 4,999 grams', value: 'F3 felony.' },
            { label: '5,000 to 19,999 grams', value: 'F2 felony.' },
            { label: '20,000 grams or more', value: 'F1 felony.' },
          ]}
        />
      </Section>

      <Section
        title={`Other controlled substances under ${DRUG_POSSESSION.statute}`}
        intro={
          <p>
            Possession of cocaine, heroin, fentanyl, methamphetamine, or prescription drugs without a valid prescription carries
            felony penalties in most cases.
          </p>
        }
      >
        <FactTable
          title="Controlled substance possession"
          rows={[
            {
              label: 'Cocaine, heroin or methamphetamine, any amount',
              value: 'Base offense: a fifth-degree felony (up to 12 months in prison, $2,500 fine).',
            },
            { label: 'Bulk cocaine or bulk heroin', value: 'F4.' },
            { label: 'Higher quantities', value: 'F3, F2 and F1 felonies.' },
            {
              label: 'Drug paraphernalia (R.C. 2925.14)',
              value: `A fourth-degree misdemeanor on a first offense (up to ${MISDEMEANOR_SENTENCING.M4.maxJail} jail, ${MISDEMEANOR_SENTENCING.M4.maxFine} fine), rising to M2 on a second offense.`,
            },
          ]}
        />
      </Section>

      <Section title="Suppression and diversion in drug possession cases" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Suppressing the evidence',
              body: `If the ${policeAgency} stopped a vehicle without reasonable suspicion of a traffic violation, searched without valid consent, or exceeded the scope of a warrant, a Fourth Amendment motion to suppress may exclude all drug evidence. Without the drugs, the prosecution has no case. The firm reviews every stop for articulated probable cause, every consent search for voluntariness, and every warrant for particularity and probable cause.`,
            },
            {
              title: 'Intervention in Lieu of Conviction',
              body: 'ORC 2951.041 lets eligible first-time defendants charged with drug possession complete substance abuse treatment instead of being convicted. Completing ILC dismisses all charges, with no conviction and no record of guilt.',
            },
            {
              title: 'HART Court',
              body: 'Franklin County Municipal Court’s HART Court gives opioid-involved defendants a similar structured treatment path.',
            },
            {
              title: 'Why diversion comes first',
              body: 'The firm checks ILC eligibility at the start of every drug case and argues for placement when you qualify, because a dismissal through ILC beats any plea, even a plea to a reduced charge.',
            },
          ]}
        />
      </Section>

      <Section title={`How the firm handles ${suburb} drug possession cases`}>
        <PointGrid
          points={[
            { title: 'Suppression motions', body: 'Challenging the stop, search, or seizure that produced the drug evidence under the Fourth Amendment.' },
            { title: 'ILC and diversion', body: 'Pursuing Intervention in Lieu of Conviction or HART Court placement for eligible first-time defendants.' },
            { title: 'Marijuana law analysis', body: 'Confirming whether your possession was within Ohio’s adult-use limits before any plea.' },
            { title: 'Quantity challenges', body: 'Contesting the lab-reported weight that sets the degree of the offense.' },
            { title: 'Chain-of-custody review', body: 'Checking laboratory procedures and the handling of physical evidence.' },
            { title: 'Expungement planning', body: 'Advising on record-sealing eligibility under ORC 2953.32 from the start.' },
          ]}
        />
        <p>
          If you are charged with drug possession in {suburb} or elsewhere in Franklin County, call{' '}
          <a href={tel}>{FIRM_NAP.phone}</a> or <Link href="/contact">schedule a consultation online</Link>. Drug cases move through
          the Franklin County system quickly, and your options are widest before a plea is entered. More on the firm&apos;s{' '}
          <Link href="/criminal-defense">criminal defense</Link> practice.
        </p>
      </Section>

      <Section title={`More for ${suburb} and Franklin County`} tone="ice">
        <LinkGrid links={suburbLinks(suburb, 'drug-possession-defense')} />
        <h3>Related pages</h3>
        <LinkGrid
          columns={2}
          links={[
            { href: '/criminal-defense/drug-possession', title: 'Drug possession defense in Ohio', subtitle: 'The charge statewide' },
            { href: '/criminal-defense/marijuana-possession', title: 'Marijuana possession in Ohio', subtitle: 'Adult-use limits and what is still a crime' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
