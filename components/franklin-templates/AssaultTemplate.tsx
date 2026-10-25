import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';
import { getSuburb, FCMC, ASSAULT, MISDEMEANOR_SENTENCING, EXPUNGEMENT, FIRM_NAP } from '@/data/franklin-county-reference';
import { FcmcTable, ProsecutorNote, SuburbAtAGlance, localCourt, slugify, suburbLinks } from './shared';

interface Props {
  suburb: string;
}

export default function AssaultTemplate({ suburb }: Props) {
  const suburbData = getSuburb(suburb);
  if (!suburbData) throw new Error(`No reference data found for suburb: ${suburb}`);

  const { mayorsCourt, policeAgency, keyRoads, formerProsecutorTitle } = suburbData;
  const { hasMayorsCourt, courtName, courtAddress, courtPhone, courtSchedule } = localCourt(suburb, suburbData);
  const slug = slugify(suburb);
  const tel = `tel:${FIRM_NAP.phoneRaw.replace('+', '')}`;

  const breadcrumbItems = [
    { label: 'Locations', href: '/locations' },
    { label: 'Franklin County', href: '/locations/franklin-county' },
    { label: `Assault Defense in ${suburb}`, href: `/locations/franklin-county/assault-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `What is assault under Ohio law?`,
      answer: `Under Ohio Revised Code 2903.13, assault is knowingly causing or attempting to cause physical harm to another person, or recklessly causing serious physical harm. Baseline assault is a first-degree misdemeanor carrying up to ${MISDEMEANOR_SENTENCING.M1.maxJail} in jail and a ${MISDEMEANOR_SENTENCING.M1.maxFine} fine. Assault against certain protected persons (law enforcement officers, emergency medical personnel, teachers, hospital staff) is a felony even when the same conduct would be a misdemeanor against anyone else, so the category of the alleged victim matters.`,
    },
    {
      question: `Where is an assault case from ${suburb} heard?`,
      answer: hasMayorsCourt
        ? `Misdemeanor assault charges from ${suburb} are first processed in ${suburb} Mayor's Court at ${courtAddress}, ${courtPhone}. Court schedule: ${courtSchedule}. A felony assault, for example an alleged assault on a law enforcement officer, transfers to Franklin County Municipal Court at ${FCMC.address} and then to Franklin County Court of Common Pleas.`
        : `${mayorsCourt.note} Assault charges from ${suburb} go directly to Franklin County Municipal Court at ${FCMC.address} (${FCMC.floors}), ${FCMC.clerkPhone}. Felony assault matters are bound over to Franklin County Court of Common Pleas.`,
    },
    {
      question: `Is self-defense a valid defense to assault charges in ${suburb}?`,
      answer: `Yes. Ohio Revised Code 2901.05 recognizes self-defense, defense of another, and defense of residence as complete affirmative defenses to assault. Under Ohio's 2019 self-defense amendments, once the defendant presents evidence raising self-defense, the prosecution must disprove it beyond a reasonable doubt. In a ${suburb} assault case the question is whether you reasonably believed force was necessary to protect against imminent unlawful physical harm. Evidence of the other person's aggression, prior threats, or threatening behavior is directly relevant.`,
    },
    {
      question: `Can an assault charge in ${suburb} be expunged?`,
      answer: `Most misdemeanor assault convictions under R.C. 2903.13 are eligible for expungement under ORC 2953.32 after a waiting period of ${EXPUNGEMENT.waitingPeriods.misdemeanorOrF4F5} from final discharge. If the assault arose from the same facts as a domestic violence allegation, or the charge was treated as a DV-equivalent offense, expungement may not be available. The firm checks expungement eligibility at the start of the case, because it shapes plea strategy and the realistic long-term outcome.`,
    },
    {
      question: `What happens if the alleged victim in a ${suburb} assault case does not want to press charges?`,
      answer: `In Ohio the state brings assault prosecutions, so the alleged victim cannot drop the charges alone. Once the ${policeAgency} submits a report and probable cause exists, the prosecutor decides whether to proceed. The alleged victim's cooperation is still often critical to proving the case. An attorney can weigh the prosecution's independent evidence and use the alleged victim's reluctance as a factor in negotiating a resolution.`,
    },
    {
      question: `What are the felony escalations for assault in Ohio?`,
      answer: `Under R.C. 2903.13(C), assault rises from a first-degree misdemeanor to a felony when the victim is in a protected category: a peace officer, firefighter, or EMS worker during official duties (F4); a caretaker's assault on a functionally impaired person (F4, or F3 with a prior); correctional or youth services employees (F3); a school teacher, administrator, or bus operator on school property (F5, or F4 with a prior); and hospital employees or judges and prosecutors during official duties (F5, or F4 with a prior). The same physical conduct that is a misdemeanor against a private citizen can be a felony against a protected public employee.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for an assault charge in ${suburb}?`,
      answer: `Jwayyed Law LLC defends assault charges throughout Franklin County, including ${suburb}. Assault cases in Ohio turn on witness credibility, the video and physical evidence, and whether self-defense or another defense fits the facts. The firm gathers all available evidence, tests the prosecution's case, and builds the defense around what happened. A misdemeanor assault conviction can leave a permanent criminal record unless it is later sealed, and it affects employment, housing, and professional licensing, so call (614) 285-5482 before your arraignment if you can.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`Assault defense attorney in ${suburb}, Ohio`}
        description={`Facing assault charges in ${suburb}? Assault under R.C. 2903.13 is a first-degree misdemeanor with up to ${MISDEMEANOR_SENTENCING.M1.maxJail} in jail. Charges from ${suburb} start in ${courtName}.`}
      />

      <Section
        title={`Where a ${suburb} assault case is heard`}
        intro={
          <p>
            Assault calls in {suburb} are handled by the {policeAgency}. Once a report is filed, the Franklin County prosecutorial
            system moves quickly, and the case starts in {courtName}.
          </p>
        }
      >
        <SuburbAtAGlance suburb={suburb} data={suburbData} />
        {hasMayorsCourt ? (
          <p>
            Misdemeanor assault charges from {suburb} are first processed in <strong>{suburb} Mayor&apos;s Court</strong> at{' '}
            {courtAddress}, {courtPhone}. Arraignment, pretrial negotiations and pleas on M1 assault
            charges may be handled there. A felony assault, where the victim is a law enforcement officer or another protected
            person, is transferred to Franklin County Municipal Court for arraignment and then bound over to Franklin County Court
            of Common Pleas for trial. The firm appears in all three.
          </p>
        ) : (
          <p>
            {mayorsCourt.note} Assault charges from {suburb} go directly to <strong>Franklin County Municipal Court</strong>, which
            handles misdemeanor assault from arraignment through trial. Felony assault matters are bound over to Franklin County
            Court of Common Pleas. The firm appears in this court regularly.
          </p>
        )}
        <FcmcTable hears="Misdemeanor assault from arraignment through trial, felony assault arraignments, and transfers from mayor's courts" />
        <ProsecutorNote title={formerProsecutorTitle} />
        <h3>How assault charges come up in {suburb}</h3>
        <p>
          Assault cases here come from the same situations as in any community: a bar fight, a neighborhood dispute that escalated,
          an altercation at a local event, road rage on {keyRoads[0]}, or a domestic-adjacent conflict the prosecution chooses not
          to charge as domestic violence. The firm looks at each case on its own facts, starting with who began the confrontation.
        </p>
      </Section>

      <Section
        title="Assault under Ohio Revised Code 2903.13"
        tone="ice"
        intro={
          <p>
            Assault is knowingly causing or attempting to cause physical harm to another person or to another person&apos;s
            unborn, or recklessly causing serious physical harm to another person.
          </p>
        }
      >
        <FactTable
          title="Baseline assault (first-degree misdemeanor)"
          rows={[
            { label: 'Statute', value: ASSAULT.statute },
            { label: 'Knowing conduct', value: ASSAULT.baseDegree },
            { label: 'Reckless conduct', value: ASSAULT.recklessDegree },
            { label: 'Maximum jail', value: MISDEMEANOR_SENTENCING.M1.maxJail },
            { label: 'Maximum fine', value: MISDEMEANOR_SENTENCING.M1.maxFine },
          ]}
          note="These are maximums. The actual sentence depends on the facts, your prior record and how the sentencing stage is argued."
        />
        <p>
          The offense includes <em>attempts</em>: Ohio does not require that harm was actually caused, only that the defendant
          knowingly tried to cause it. &ldquo;Knowingly&rdquo; matters. The prosecution must prove you were aware your conduct
          would cause or probably cause the result. Accidents, involuntary contact, and situations without that awareness are not
          criminal assault.
        </p>
        <FactTable
          title="When assault becomes a felony (R.C. 2903.13(C))"
          rows={[
            {
              label: 'Peace officer, firefighter or EMS',
              value: 'During official duties: a fourth-degree felony, and a third-degree felony with a prior assault conviction.',
            },
            { label: 'State DRC institution staff', value: 'Corrections officers or youth services employees: a third-degree felony.' },
            { label: 'Local jail staff or probation officers', value: 'A fifth-degree felony.' },
            { label: 'Teachers, administrators, bus operators', value: 'On school grounds: a fifth-degree felony (F4 with a prior).' },
            { label: 'Hospital staff, judges, prosecutors', value: 'During official duties: a fifth-degree felony (F4 with a prior).' },
          ]}
          note="Felony assault is processed in Franklin County Court of Common Pleas after arraignment and carries much greater penalties than misdemeanor assault."
        />
        <p>
          The firm checks whether the alleged victim&apos;s protected status was established, whether the victim was acting within
          official duties at the time, and whether the prosecution can prove those elements beyond a reasonable doubt.
        </p>
      </Section>

      <Section title="Self-defense and other defenses to assault charges">
        <p>
          Ohio Revised Code 2901.05 recognizes self-defense, defense of another, and defense of one&apos;s residence as complete
          affirmative defenses to assault. Under amendments effective in 2019, once the defendant produces evidence that the
          defense is at issue, the prosecution must disprove it beyond a reasonable doubt. Self-defense applies when you reasonably
          believed force was immediately necessary to protect against the use or imminent use of unlawful force.
        </p>
        <PointGrid
          points={[
            { title: 'Who started it', body: 'Evidence of the alleged victim’s threats, any attempt you made to retreat or avoid the confrontation, and video showing who made contact first.' },
            { title: 'Knowing or accidental', body: 'Whether the contact was knowing, as the statute requires, or accidental.' },
            { title: 'Identification', body: 'Whether the prosecution can identify the defendant with certainty.' },
            { title: 'Witness credibility', body: 'Whether witness accounts are consistent and believable.' },
            { title: 'Constitutional violations', body: 'Whether any evidence was obtained in violation of your rights.' },
          ]}
        />
        <p>
          The firm gets all body-cam and surveillance footage, police reports, medical records and forensic evidence before
          recommending a plea or trial.
        </p>
      </Section>

      <Section title={`How the firm handles ${suburb} assault defense`} tone="ice">
        <PointGrid
          points={[
            { title: 'Evidence analysis', body: 'Surveillance footage, body-cam video, police reports and medical records reviewed before any hearing.' },
            { title: 'Self-defense evaluation', body: 'A factual investigation into who started the confrontation and whether any force used was reasonable.' },
            { title: 'Felony escalation challenge', body: 'Contesting protected-victim status where the facts do not support felony charges.' },
            { title: 'Charge reduction', body: 'Negotiating down to lesser offenses (disorderly conduct, attempted assault) where the facts support it.' },
            { title: 'Diversion and dismissal', body: 'Checking first-offender diversion eligibility for a dismissal without conviction.' },
            { title: 'Expungement planning', body: 'Advising on ORC 2953.32 eligibility from the start to inform plea strategy.' },
          ]}
        />
        <p>
          If you were charged with assault in {suburb} or anywhere in Franklin County, call <a href={tel}>{FIRM_NAP.phone}</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link> before your arraignment. The choices made at that first
          court appearance shape the rest of the case. More on the firm&apos;s{' '}
          <Link href="/criminal-defense/assault-charges">assault defense</Link> practice.
        </p>
      </Section>

      <Section title={`More for ${suburb} and Franklin County`}>
        <LinkGrid links={suburbLinks(suburb, 'assault-defense')} />
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
