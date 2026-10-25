import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';
import { getSuburb, FCMC, DISORDERLY_CONDUCT, MISDEMEANOR_SENTENCING, EXPUNGEMENT, FIRM_NAP } from '@/data/franklin-county-reference';
import { FcmcTable, ProsecutorNote, SuburbAtAGlance, localCourt, slugify, suburbLinks } from './shared';

interface Props {
  suburb: string;
}

export default function DisorderlyConductTemplate({ suburb }: Props) {
  const suburbData = getSuburb(suburb);
  if (!suburbData) throw new Error(`No reference data found for suburb: ${suburb}`);

  const { mayorsCourt, policeAgency, keyRoads, formerProsecutorTitle } = suburbData;
  const { hasMayorsCourt, courtName, courtAddress, courtPhone, courtSchedule } = localCourt(suburb, suburbData);
  const slug = slugify(suburb);
  const tel = `tel:${FIRM_NAP.phoneRaw.replace('+', '')}`;

  const breadcrumbItems = [
    { label: 'Locations', href: '/locations' },
    { label: 'Franklin County', href: '/locations/franklin-county' },
    { label: `Disorderly Conduct Defense in ${suburb}`, href: `/locations/franklin-county/disorderly-conduct-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `What is disorderly conduct under Ohio law?`,
      answer: `Ohio Revised Code 2917.11 prohibits conduct that recklessly causes inconvenience, annoyance, or alarm to another or creates a risk of harm. Common forms include fighting in a public place, making unreasonable noise, using offensive language likely to provoke a violent response, and threatening or tumultuous behavior. The base offense is a minor misdemeanor: no jail, up to $150 fine. It becomes a fourth-degree misdemeanor (up to ${MISDEMEANOR_SENTENCING.M4.maxJail} jail, ${MISDEMEANOR_SENTENCING.M4.maxFine} fine) if the person persists after a police warning, commits the offense near a school, or acts in the presence of emergency personnel at an emergency scene.`,
    },
    {
      question: `Where is a disorderly conduct charge from ${suburb} heard?`,
      answer: hasMayorsCourt
        ? `Disorderly conduct charges from ${suburb} are usually handled in ${suburb} Mayor's Court at ${courtAddress}, ${courtPhone}. Court schedule: ${courtSchedule}. Minor misdemeanor and M4 disorderly conduct cases can be fully resolved there, including arraignment, plea, and sentencing. More complex cases or repeat offenders may transfer to Franklin County Municipal Court at ${FCMC.address}.`
        : `${mayorsCourt.note} Disorderly conduct charges from ${suburb} are processed in Franklin County Municipal Court at ${FCMC.address} (${FCMC.floors}), ${FCMC.clerkPhone}. Both minor misdemeanor and M4 disorderly conduct cases are handled there.`,
    },
    {
      question: `Does a disorderly conduct conviction appear on a background check?`,
      answer: `Yes. Even a minor misdemeanor disorderly conduct conviction creates a public criminal record in Ohio. Employers, landlords, and professional licensing boards that run background checks will see it, and it can still affect work in security, healthcare, education, and licensed professions. The firm looks first at whether the charge can be diverted, dismissed, or resolved without a conviction.`,
    },
    {
      question: `Can a disorderly conduct conviction in ${suburb} be expunged?`,
      answer: `Minor misdemeanor and M4 disorderly conduct convictions are eligible for expungement under Ohio Revised Code 2953.32 after a waiting period of ${EXPUNGEMENT.waitingPeriods.minorMisdemeanor} from final discharge (for minor misdemeanors) or ${EXPUNGEMENT.waitingPeriods.misdemeanorOrF4F5} for M4 convictions. Once sealed, the record is removed from public background check databases for most purposes. The firm checks expungement eligibility at the start of every case.`,
    },
    {
      question: `What if I was intoxicated when I was cited for disorderly conduct in ${suburb}?`,
      answer: `R.C. 2917.11(B) covers disorderly conduct while voluntarily intoxicated in a public place: engaging in offensive conduct or creating a risk of physical harm. It is often used for public intoxication arrests in ${suburb} entertainment areas. The base offense is still a minor misdemeanor, but it reaches M4 faster with prior convictions under the intoxication subsection. The firm checks whether you were actually in a public place, whether the conduct actually created the risk alleged, and whether the charge can be dismissed or diverted.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for a disorderly conduct charge in ${suburb}?`,
      answer: `Disorderly conduct looks minor, but a conviction creates a criminal record that follows you. Jwayyed Law LLC defends disorderly conduct charges throughout Franklin County, including ${suburb}. Many first-time cases qualify for diversion or conditional dismissal, which avoid a permanent record. The firm reviews every option before advising on a plea, and appears for you in ${courtName} and Franklin County Municipal Court. Call (614) 285-5482 to talk it through.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`Disorderly conduct defense attorney in ${suburb}, Ohio`}
        description={`Facing disorderly conduct charges in ${suburb}? Disorderly conduct under R.C. 2917.11 is a minor misdemeanor with up to a $150 fine, or an M4 with up to ${MISDEMEANOR_SENTENCING.M4.maxJail} in jail. Charges from ${suburb} are heard in ${courtName}.`}
      />

      <Section
        title={`Where a ${suburb} disorderly conduct case is heard`}
        intro={
          <p>
            The {policeAgency} handles disorderly conduct calls in {suburb}&apos;s neighborhoods, along {keyRoads[0]}, and at
            community events. Citations go to {courtName}.
          </p>
        }
      >
        <SuburbAtAGlance suburb={suburb} data={suburbData} />
        {hasMayorsCourt ? (
          <p>
            Disorderly conduct charges from {suburb} are usually resolved in <strong>{suburb} Mayor&apos;s Court</strong> at{' '}
            {courtAddress}, {courtPhone}. Both minor misdemeanor and M4 matters can be handled there
            from citation through plea and sentencing. The firm appears in {suburb} Mayor&apos;s Court and at Franklin County
            Municipal Court for any case transferred there.
          </p>
        ) : (
          <p>
            {mayorsCourt.note} Disorderly conduct charges from {suburb} go directly to{' '}
            <strong>Franklin County Municipal Court</strong>, where both minor misdemeanor and M4 matters are handled from
            arraignment through resolution. The firm appears in this court regularly.
          </p>
        )}
        <FcmcTable hears="Minor misdemeanor and M4 disorderly conduct from arraignment through resolution, and transfers from mayor's courts" />
        <ProsecutorNote title={formerProsecutorTitle} />
        <h3>How these charges come up in {suburb}</h3>
        <p>
          Disorderly conduct is one of the most commonly issued citations in {suburb} and across Franklin County. Many disorderly conduct
          charges come out of a larger incident, such as a bar dispute, a neighborhood complaint or a traffic stop that became contentious, and
          are added alongside more serious allegations. The firm handles the related charges too.
        </p>
      </Section>

      <Section
        title="What R.C. 2917.11 prohibits"
        tone="ice"
        intro={
          <p>
            Disorderly conduct is recklessly causing inconvenience, annoyance, or alarm to another person by one of the acts listed
            in the statute.
          </p>
        }
      >
        <ul>
          <li>Fighting, threatening harm to persons or property, or violent or turbulent behavior.</li>
          <li>Unreasonable noise or an offensively coarse utterance, gesture, or display.</li>
          <li>Creating a physically offensive condition that serves no legitimate purpose.</li>
          <li>Other behavior that creates a risk of physical harm to persons or property.</li>
        </ul>
        <p>
          Division (B) separately prohibits public intoxication: a person who is voluntarily intoxicated in a public place and
          engages in offensive conduct or creates a risk of physical harm violates the section whether or not anyone complains.
        </p>
        <h3>The elements that matter for a defense</h3>
        <ul>
          <li>The conduct must be &ldquo;reckless,&rdquo; which is more than negligent or accidental.</li>
          <li>It must cause inconvenience, annoyance, or alarm to a specific person, not abstract or theoretical offense.</li>
          <li>
            The &ldquo;unreasonable noise&rdquo; and &ldquo;offensively coarse utterance&rdquo; provisions are read narrowly under
            the First Amendment, to reach conduct and not protected speech.
          </li>
        </ul>
      </Section>

      <Section title="Penalties and when they increase">
        <FactTable
          title="Disorderly conduct penalties"
          rows={[
            { label: 'Base offense', value: 'Minor misdemeanor: no jail, a maximum $150 fine.' },
            {
              label: 'Fourth-degree misdemeanor (M4)',
              value: (
                <>
                  Up to <strong>{MISDEMEANOR_SENTENCING.M4.maxJail}</strong> in jail and a{' '}
                  <strong>{MISDEMEANOR_SENTENCING.M4.maxFine}</strong> fine.
                </>
              ),
            },
            { label: 'Statute', value: DISORDERLY_CONDUCT.statute },
          ]}
        />
        <FactTable
          title="When disorderly conduct becomes an M4"
          rows={[
            { label: '1. After a warning', value: 'The offender keeps going after a reasonable request or warning by a law enforcement officer to stop.' },
            { label: '2. Near a school', value: 'The offense happens in the vicinity of a school or school safety zone.' },
            { label: '3. At an emergency', value: 'The offense happens in the presence of emergency service personnel responding to an emergency.' },
            { label: '4. Prior intoxication convictions', value: 'The offender has three or more prior convictions under the public intoxication subsection (R.C. 2917.11(B)).' },
          ]}
        />
        <p>
          The &ldquo;persists after warning&rdquo; escalation is the one charged most often. It depends on whether the
          officer&apos;s warning was clear, whether you actually heard and understood it, and whether you actually continued
          afterward. The firm goes through the sequence of events, including all body-cam footage from the {policeAgency} response.
        </p>
      </Section>

      <Section title="First Amendment limits on speech-based charges" tone="ice">
        <p>
          Ohio courts have consistently held that a disorderly conduct charge based on speech, rather than physical conduct, must
          clear a high First Amendment bar. The statute&apos;s &ldquo;offensively coarse utterance&rdquo; language reaches only
          &ldquo;fighting words&rdquo; under the standard from Chaplinsky v. New Hampshire: speech that by its very utterance
          inflicts injury or tends to incite an immediate breach of the peace.
        </p>
        <p>
          Profanity, offensive language, and statements that are upsetting or annoying but not threatening are protected and
          cannot lawfully support the charge. Ohio appellate courts have reversed convictions that rested on verbal confrontations
          with no actual violence and no genuine immediate threat.
        </p>
        <p>
          In {suburb}, a charge that comes out of an argument with an officer, a dispute with a neighbor, or a heated exchange at a
          traffic stop sometimes reflects the officer&apos;s reaction to being challenged rather than conduct that meets the legal
          threshold. When a speech-based disorderly conduct charge cannot survive a First Amendment challenge, the firm raises it before trial so the charge can be
          dismissed without a contested hearing.
        </p>
      </Section>

      <Section title="Expunging a disorderly conduct conviction">
        <p>
          Ohio&apos;s expanded expungement statute (R.C. 2953.32, as amended through HB 96 effective September 30, 2025) allows the
          record to be sealed.
        </p>
        <FactTable
          title="Waiting periods after final discharge"
          rows={[
            { label: 'Minor misdemeanor', value: EXPUNGEMENT.waitingPeriods.minorMisdemeanor },
            { label: 'Fourth-degree misdemeanor', value: EXPUNGEMENT.waitingPeriods.misdemeanorOrF4F5 },
          ]}
          note="Once sealed, the conviction is removed from public criminal record databases for most purposes and will not appear on standard employment or housing background checks."
        />
        <p>
          If the charge cannot be dismissed or diverted, sealing is the next best outcome, and the firm plans for it from
          arraignment.
        </p>
      </Section>

      <Section title="Defenses and diversion options" tone="ice">
        <p>
          Disorderly conduct cases in Franklin County often resolve without a conviction. First-time defendants with no record are
          frequently offered diversion: a conditional dismissal that requires community service or a short probationary period.
          Completing it means the charge is dismissed with no permanent conviction. The firm checks for diversion first in every
          case.
        </p>
        <PointGrid
          points={[
            { title: 'Reckless or ill-advised', body: 'Whether the conduct was actually reckless, or merely ill-advised.' },
            { title: 'An identified person', body: 'Whether the behavior caused inconvenience or alarm to an identified person, or the officer’s basis was general unease.' },
            { title: 'The M4 escalation', body: 'Whether a warning was actually communicated, heard and ignored before the charge was raised from a minor misdemeanor.' },
            { title: 'A lesser outcome', body: 'Whether the charge can be negotiated to an even lesser infraction that avoids a criminal record.' },
          ]}
        />
        <h3>What the firm does in {suburb} disorderly conduct cases</h3>
        <PointGrid
          points={[
            { title: 'Diversion and dismissal', body: 'Pursuing conditional dismissal or diversion for first-time defendants.' },
            { title: 'Evidence review', body: 'All body-cam footage, incident reports and witness statements before any hearing.' },
            { title: 'M4 escalation challenge', body: 'Contesting whether “persists after warning” or another escalation is supported by the evidence.' },
            { title: 'Charge reduction', body: 'Negotiating to a civil infraction or lesser offense where the facts support it.' },
            { title: 'Expungement planning', body: 'Advising on ORC 2953.32 sealing eligibility for any conviction.' },
            { title: 'Professional licensing impact', body: 'How a conviction would affect employment licenses and professional standing.' },
          ]}
        />
        <p>
          If you are charged with disorderly conduct in {suburb} or anywhere in Franklin County, call{' '}
          <a href={tel}>{FIRM_NAP.phone}</a> or <Link href="/contact">schedule a consultation online</Link>. Even a minor
          misdemeanor conviction can leave a permanent criminal record unless it is later sealed, so talk to an attorney before entering any plea.
        </p>
      </Section>

      <Section title={`More for ${suburb} and Franklin County`}>
        <LinkGrid links={suburbLinks(suburb, 'disorderly-conduct-defense')} />
        <h3>Related pages</h3>
        <LinkGrid
          columns={2}
          links={[
            { href: '/criminal-defense/disorderly-conduct', title: 'Disorderly conduct defense in Ohio', subtitle: 'The charge statewide' },
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
