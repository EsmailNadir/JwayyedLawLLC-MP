import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';
import { getSuburb, FCMC, THEFT_DEGREES, EXPUNGEMENT, FIRM_NAP } from '@/data/franklin-county-reference';
import { FcmcTable, ProsecutorNote, SuburbAtAGlance, localCourt, slugify, suburbLinks } from './shared';

interface Props {
  suburb: string;
}

export default function TheftTemplate({ suburb }: Props) {
  const suburbData = getSuburb(suburb);
  if (!suburbData) throw new Error(`No reference data found for suburb: ${suburb}`);

  const { mayorsCourt, policeAgency, keyRoads, formerProsecutorTitle } = suburbData;
  const { hasMayorsCourt, courtName, courtAddress, courtPhone, courtSchedule } = localCourt(suburb, suburbData);

  const pettyTheft = THEFT_DEGREES[0];
  const slug = slugify(suburb);
  const tel = `tel:${FIRM_NAP.phoneRaw.replace('+', '')}`;

  const breadcrumbItems = [
    { label: 'Locations', href: '/locations' },
    { label: 'Franklin County', href: '/locations/franklin-county' },
    { label: `Theft Defense in ${suburb}`, href: `/locations/franklin-county/theft-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `What is the penalty for theft and shoplifting in ${suburb}, Ohio?`,
      answer: `Under Ohio Revised Code 2913.02, theft of property valued under $1,000 is petty theft, a first-degree misdemeanor carrying up to ${pettyTheft.maxJail} in jail and a ${pettyTheft.maxFine} fine. Theft of $1,000 to $7,499 is a fifth-degree felony (up to 12 months prison, $2,500 fine). Amounts above $7,500 rise through fourth, third, second, and first-degree felonies. Shoplifting in ${suburb} retail stores is most often charged as petty theft. The degree depends on the value of the item at the time of the offense.`,
    },
    {
      question: `Where is a theft or shoplifting case from ${suburb} heard?`,
      answer: hasMayorsCourt
        ? `Misdemeanor theft and shoplifting charges from ${suburb} are first heard in ${suburb} Mayor's Court at ${courtAddress}, ${courtPhone}. Court schedule: ${courtSchedule}. Felony theft charges (property valued $1,000 or more) are bound over to Franklin County Court of Common Pleas after arraignment. A misdemeanor theft that cannot be resolved at the mayor's court may also be transferred to Franklin County Municipal Court at ${FCMC.address}.`
        : `${mayorsCourt.note} Theft and shoplifting charges from ${suburb} are handled directly by Franklin County Municipal Court at ${FCMC.address}, ${FCMC.clerkPhone}. Felony theft matters are bound over to Franklin County Court of Common Pleas.`,
    },
    {
      question: `Does a theft conviction show up on a background check?`,
      answer: `Yes. A theft or shoplifting conviction in Ohio, even a first-degree misdemeanor, creates a permanent public criminal record that employers, landlords, and professional licensing boards can see. Background checks routinely flag theft convictions, and many employers automatically turn down applicants with them. A dismissal, a diversion, or even a reduction to a lesser charge can make a real difference to your job and housing prospects. An attorney can check whether you qualify for a first-offender diversion program in ${suburb}.`,
    },
    {
      question: `Can a theft charge in ${suburb} be reduced or dismissed?`,
      answer: `Many first-time theft and shoplifting cases in Franklin County resolve through diversion programs, community service agreements, or plea negotiations that avoid a conviction. The Franklin County prosecutor's office and some mayor's courts in the county offer first-offender programs for eligible defendants, typically those with no prior theft record, a small-value offense, and restitution paid. The firm looks at every option before accepting any plea offer.`,
    },
    {
      question: `Is a theft conviction in ${suburb} eligible for expungement?`,
      answer: `Misdemeanor theft convictions may be eligible for expungement under Ohio Revised Code 2953.32 after a waiting period of ${EXPUNGEMENT.waitingPeriods.misdemeanorOrF4F5} from final discharge, if you meet the other eligibility criteria. Felony theft convictions of the third, fourth, or fifth degree may also be eligible after longer waiting periods. Some offenses, and defendants with multiple prior convictions, may not qualify. The firm reviews eligibility and handles the petition in Franklin County.`,
    },
    {
      question: `What defenses apply to theft charges in ${suburb}?`,
      answer: `Common theft defenses in ${suburb} and Franklin County include: whether you intended to permanently deprive the owner of the property (an element of R.C. 2913.02); the valuation of the property used to set the degree of the offense; identification where store surveillance is unclear; whether a civil demand settlement affects the prosecution; and whether the arrest or search violated your Fourth Amendment rights. The firm gets all surveillance footage, police reports, and loss prevention documentation before advising on strategy.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for a theft charge in ${suburb}?`,
      answer: `Jwayyed Law LLC defends theft and shoplifting charges throughout Franklin County, including ${suburb}. A theft conviction follows you into job applications, housing searches, and professional licensing reviews. The firm sorts out whether a case can be dismissed, diverted, or reduced, or needs to be tried, and moves quickly to preserve evidence. Call (614) 285-5482 to discuss your ${suburb} theft case.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`Theft and shoplifting charges in ${suburb}, Ohio`}
        description={`Petty theft (property under $1,000) is a first-degree misdemeanor; $1,000 or more is a felony. Charges from ${suburb} start in ${courtName}.`}
      />

      <Section
        title={`Where a ${suburb} theft case is heard`}
        intro={
          <p>
            Retail businesses along {keyRoads[0]} and nearby commercial areas generate many of the theft and shoplifting complaints
            handled by the {policeAgency}. The case then starts in {courtName}.
          </p>
        }
      >
        <SuburbAtAGlance suburb={suburb} data={suburbData} />
        {hasMayorsCourt ? (
          <p>
            Misdemeanor theft and shoplifting charges from {suburb} are first processed in{' '}
            <strong>{suburb} Mayor&apos;s Court</strong> at {courtAddress}, {courtPhone}. The
            mayor&apos;s court can accept pleas and impose sentences on minor misdemeanor and first-degree misdemeanor theft
            charges. Felony theft (any amount of $1,000 or more) must be transferred to Franklin County Municipal Court for
            arraignment and then bound over to Franklin County Court of Common Pleas for trial. The firm can appear at each stage,
            so you do not need separate lawyers.
          </p>
        ) : (
          <p>
            {mayorsCourt.note} Theft and shoplifting charges from {suburb} go directly to{' '}
            <strong>Franklin County Municipal Court</strong>. Misdemeanor theft cases are resolved there, and felony theft is bound
            over to Franklin County Court of Common Pleas after arraignment. The firm appears in this court regularly.
          </p>
        )}
        <FcmcTable hears="Misdemeanor theft cases, felony theft arraignments, and transfers from mayor's courts" />
        <ProsecutorNote title={formerProsecutorTitle} />
        <p>
          Loss prevention officers at major retailers can detain shoplifting suspects and call police, and the resulting charges
          are prosecuted even for first-time offenders. The firm handles these cases from early negotiation with the prosecutor
          through trial.
        </p>
      </Section>

      <Section
        title="Theft charges under Ohio Revised Code 2913.02"
        tone="ice"
        intro={
          <p>
            Ohio theft law covers shoplifting, taking property without consent, and obtaining property by deception or threat. The
            charge is set by the value of the property.
          </p>
        }
      >
        <FactTable
          title="Theft penalties by value"
          rows={THEFT_DEGREES.map((d) => ({
            label: d.degree,
            value: `${d.valueRange}. Up to ${d.maxJail}; fine up to ${d.maxFine}.`,
          }))}
          note="Petty theft (under $1,000) is a first-degree misdemeanor and the most common charge for shoplifting in local retail stores. Once the value reaches $1,000, the charge is a fifth-degree felony (up to 12 months in prison and a $2,500 fine), and it rises with value: F4 for $7,500 to $149,999, F3 for $150,000 to $749,999, then F2 and F1 for higher amounts."
        />
        <p>
          Some kinds of property (firearms, motor vehicles, credit cards, and property taken from elderly or disabled persons)
          trigger enhanced charges regardless of dollar value.
        </p>
        <p>
          The critical element is intent: the prosecution must prove you purposely deprived the owner of property without consent
          or by deception, threat, or intimidation. Accidentally walking out with merchandise, a good-faith payment dispute, or a
          mistaken belief of ownership may defeat it. The firm goes through the surveillance footage, loss prevention reports,
          witness statements and receipt records before evaluating any plea.
        </p>
      </Section>

      <Section title="Diversion and plea options">
        <p>
          Many first-time theft defendants in Franklin County, especially in low-value shoplifting cases, qualify for diversion or
          a conditional dismissal. These programs usually require restitution, a short community service commitment, and no new
          arrests during a probationary period. Completing one dismisses the charge with no conviction on the record. The firm
          checks diversion eligibility for every new client, because a dismissed charge is better than any conviction.
        </p>
        <p>
          Where diversion is not available, for defendants with prior theft records or higher-value charges, the firm pursues
          charge reductions (from M1 to M2, or from felony to misdemeanor where the valuation can be challenged) and plea agreements
          that limit the effect on employment and professional licensing. Some theft convictions are eligible for expungement under
          ORC 2953.32 after the waiting periods, which the firm evaluates at the outset to inform plea strategy.
        </p>
      </Section>

      <Section title="Consequences beyond the sentence" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Employment',
              body: `Employers routinely run background checks, and theft convictions carry particular weight in retail, healthcare, finance, education and government jobs that involve money, property or customer trust. For ${suburb} residents already working in these fields, a conviction can cost a current job.`,
            },
            {
              title: 'Professional licenses',
              body: 'Ohio boards governing nursing, real estate, cosmetology, contracting and securities require disclosure of convictions and may deny, suspend or revoke a license over a theft offense.',
            },
            { title: 'Firearms', body: 'A felony theft conviction means a convicted felon cannot possess firearms under federal law.' },
            { title: 'Immigration', body: 'For non-citizens, even a misdemeanor theft conviction can trigger immigration consequences, including removal proceedings.' },
          ]}
        />
        <p>The firm weighs these consequences when advising whether to fight a charge, accept a plea or pursue diversion.</p>
      </Section>

      <Section title={`What the firm does in ${suburb} theft cases`}>
        <PointGrid
          points={[
            { title: 'Evidence review', body: 'Surveillance footage, loss prevention reports, witness statements and all police documentation.' },
            { title: 'Intent challenges', body: 'Whether the prosecution can prove purposeful deprivation under R.C. 2913.02.' },
            { title: 'Diversion programs', body: 'First-offender diversion where available, for a dismissal without conviction.' },
            { title: 'Valuation challenges', body: 'Contesting the stated value of the property to reduce the degree of the charge.' },
            { title: 'Expungement planning', body: 'Advising on expungement eligibility under R.C. 2953.32 from the start of the case.' },
            { title: 'Trial representation', body: `Jury or bench trial defense in ${courtName} or Franklin County Municipal Court if the case cannot be resolved.` },
          ]}
        />
        <p>
          If you are charged with theft or shoplifting in {suburb} or elsewhere in Franklin County, call{' '}
          <a href={tel}>{FIRM_NAP.phone}</a> or <Link href="/contact">schedule a consultation</Link>. An attorney can do the most
          before a plea is entered. More on the firm&apos;s <Link href="/criminal-defense">criminal defense</Link> practice.
        </p>
      </Section>

      <Section title={`More for ${suburb} and Franklin County`} tone="ice">
        <LinkGrid links={suburbLinks(suburb, 'theft-defense')} />
        <h3>Related pages</h3>
        <LinkGrid
          columns={2}
          links={[
            { href: '/criminal-defense/petty-theft', title: 'Petty theft defense in Ohio', subtitle: 'Misdemeanor theft and shoplifting statewide' },
            { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide: location, dockets and what to expect' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
