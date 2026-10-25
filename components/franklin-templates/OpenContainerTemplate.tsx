import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';
import { getSuburb, FCMC, OPEN_CONTAINER, MISDEMEANOR_SENTENCING, EXPUNGEMENT, FIRM_NAP } from '@/data/franklin-county-reference';
import { FcmcTable, ProsecutorNote, SuburbAtAGlance, localCourt, slugify, suburbLinks } from './shared';

interface Props {
  suburb: string;
}

export default function OpenContainerTemplate({ suburb }: Props) {
  const suburbData = getSuburb(suburb);
  if (!suburbData) throw new Error(`No reference data found for suburb: ${suburb}`);

  const { mayorsCourt, policeAgency, keyRoads, formerProsecutorTitle } = suburbData;
  const { hasMayorsCourt, courtName, courtAddress, courtPhone, courtSchedule } = localCourt(suburb, suburbData);
  const slug = slugify(suburb);
  const tel = `tel:${FIRM_NAP.phoneRaw.replace('+', '')}`;

  const breadcrumbItems = [
    { label: 'Locations', href: '/locations' },
    { label: 'Franklin County', href: '/locations/franklin-county' },
    { label: `Open Container Defense in ${suburb}`, href: `/locations/franklin-county/open-container-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `What is the open container law in Ohio?`,
      answer: `Ohio Revised Code 4301.62 prohibits possessing an open container of beer or intoxicating liquor in an agency store, on the premises of a liquor permit holder for consumption off-premises, in a public place, or in a motor vehicle on a public road, street, or highway. A violation is a minor misdemeanor under R.C. 4301.99(A), with no jail time and a maximum $150 fine. The most common citation is open container in a vehicle, which applies to the driver and all passengers.`,
    },
    {
      question: `Where is an open container charge from ${suburb} heard?`,
      answer: hasMayorsCourt
        ? `Open container citations from ${suburb} are handled in ${suburb} Mayor's Court at ${courtAddress}, ${courtPhone}. Court schedule: ${courtSchedule}. Minor misdemeanor open container cases can be fully resolved there.`
        : `${mayorsCourt.note} Open container charges from ${suburb} are processed in Franklin County Municipal Court at ${FCMC.address} (${FCMC.floors}), ${FCMC.clerkPhone}. Minor misdemeanor matters are resolved there without a transfer.`,
    },
    {
      question: `Does an open container conviction appear on a background check?`,
      answer: `Yes. Even a minor misdemeanor conviction, including an open container citation, creates a public criminal record in Ohio that shows up on background checks. It is a low-severity entry for most purposes, but it can appear on employment applications, tenant screening reports, and professional licensing reviews. The firm checks whether the charge can be dismissed, diverted, or otherwise avoided before any plea.`,
    },
    {
      question: `Can an open container conviction in ${suburb} be expunged?`,
      answer: `Most minor misdemeanor convictions, including open container violations under R.C. 4301.62, are eligible for expungement under Ohio Revised Code 2953.32 after a waiting period of ${EXPUNGEMENT.waitingPeriods.minorMisdemeanor} from final discharge. Open container violations that come out of a traffic stop, and are classified as traffic violations under chapters 4506–4511, may be ineligible. The classification of the charge decides eligibility, and the firm reviews it case by case.`,
    },
    {
      question: `What are the exceptions to Ohio's open container law?`,
      answer: `R.C. 4301.62 has several exceptions. Passengers in chauffeured limousines may possess and drink alcohol in the rear passenger compartment. Passengers on licensed commercial quadricycles may drink up to 36 oz of beer or 18 oz of wine. In designated outdoor refreshment areas (ORAs) authorized by a municipality, open containers are allowed inside the zone. Wine bottles resealed under R.C. 4301.62(B)(5) before leaving a licensed premises are also exempt. These exceptions are narrow, and relying on one that does not apply can complicate a defense.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for an open container charge in ${suburb}?`,
      answer: `Jwayyed Law LLC handles open container defense throughout Franklin County, including ${suburb}. These charges are minor misdemeanors, but a conviction still creates a criminal record. Many open container cases end without a conviction through diversion, dismissal on technical grounds, or an informal agreement with the prosecutor. The firm appears in ${courtName} and Franklin County Municipal Court. Call (614) 285-5482 to discuss your options.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`Open container defense attorney in ${suburb}, Ohio`}
        description={`An open container citation under R.C. 4301.62 is a minor misdemeanor with a $150 maximum fine, and a conviction can leave a permanent public criminal record unless it is later sealed. Citations from ${suburb} are heard in ${courtName}.`}
      />

      <Section
        title={`Where a ${suburb} open container case is heard`}
        intro={
          <p>
            Most open container citations in {suburb} are written by the {policeAgency} during traffic stops on {keyRoads[0]} and
            nearby roads, and at community events and commercial areas.
          </p>
        }
      >
        <SuburbAtAGlance suburb={suburb} data={suburbData} />
        {hasMayorsCourt ? (
          <p>
            Open container citations from {suburb} are handled in <strong>{suburb} Mayor&apos;s Court</strong> at {courtAddress},{' '}
            {courtPhone}. Minor misdemeanor open container matters can be fully resolved there, from
            citation through plea and payment of any fine. In most cases the firm can handle the matter there without you taking
            time off work for a court appearance.
          </p>
        ) : (
          <p>
            {mayorsCourt.note} Open container charges from {suburb} go to <strong>Franklin County Municipal Court</strong>, where
            minor misdemeanor matters are resolved. The firm appears in this court regularly.
          </p>
        )}
        <FcmcTable hears="Open container and other minor misdemeanor charges from suburbs without a mayor's court, and cases transferred from mayor's courts" />
        <ProsecutorNote title={formerProsecutorTitle} />
        <p>
          At a vehicle stop, an open container citation is often written alongside OVI or other traffic charges, and it is
          sometimes the least serious item on a citation that needs a coordinated defense.
        </p>
      </Section>

      <Section title="Ohio's open container law, R.C. 4301.62" tone="ice">
        <FactTable
          title="The offense"
          rows={[
            { label: 'Statute', value: `${OPEN_CONTAINER.statute}; penalty under ${OPEN_CONTAINER.penaltyStatute}` },
            {
              label: 'Where it applies',
              value: 'An agency store; the premises of a liquor permit holder for off-premises consumption; a public place; or a motor vehicle on a public road, street, or highway open to public traffic.',
            },
            { label: 'Degree', value: 'Minor misdemeanor: no jail time is permitted, and the maximum fine is $150.' },
            { label: 'Who can be cited', value: 'Everyone in possession of the open container, so the driver and passengers can all be cited for one container found in a vehicle.' },
          ]}
        />
        <p>
          An &ldquo;open container&rdquo; is any bottle, can, or other receptacle holding any amount of beer or intoxicating liquor
          that (a) is open, (b) has a broken seal, or (c) has had some of its contents removed. A closed bottle with an intact seal
          is not an open container, whatever the quantity of alcohol in it. These definitions matter when the nature of the
          container is disputed.
        </p>
      </Section>

      <Section title={`Open containers in vehicles in ${suburb}`}>
        <p>
          The most frequent open container citation in {suburb} is for an open container in a motor vehicle during a traffic stop.
          When the {policeAgency} observes, or claims to observe, an open container anywhere in the vehicle other than a locked glove
          compartment or locked trunk, any occupant the container can be attributed to may be cited. If the container is loose in
          the passenger compartment, every occupant may be cited, and the prosecutor must determine who possessed it.
        </p>
        <p>
          These citations are sometimes issued improperly: for a container in the trunk, a sealed bottle, a container no occupant
          could reach, or a vehicle on private property. The firm reviews the police report and all available footage. If the
          officer lacked reasonable suspicion for the stop, the citation may be suppressed as fruit of an unlawful stop.
        </p>
      </Section>

      <Section title="Exceptions to the open container law" tone="ice">
        <FactTable
          title="Where an open container is allowed"
          rows={[
            { label: 'Chauffeured limousines', value: 'Passengers may possess and drink alcohol in the rear passenger compartment.' },
            {
              label: 'Commercial quadricycles',
              value: 'Passengers on a licensed, pedal-powered vehicle served by a licensed operator may drink up to 36 ounces of beer or 18 ounces of wine during the ride.',
            },
            {
              label: 'Outdoor refreshment areas',
              value: 'Where a municipality has designated an ORA under R.C. 4301.821, open containers are allowed inside the zone during operating hours.',
            },
            {
              label: 'Resealed wine',
              value: 'A partly finished bottle from a licensed restaurant or retailer may be resealed and transported in a part of the vehicle the driver cannot reach.',
            },
          ]}
          note="These exceptions are narrow. A citation issued to a rideshare passenger, a visitor carrying a carry-out cup in a permitted area, or a driver with a resealed bottle stored properly often misapplies the statute."
        />
      </Section>

      <Section title="What an open container conviction actually costs">
        <p>
          The $150 fine is the smallest part. An open container conviction under R.C. 4301.62 is a criminal misdemeanor and leaves a
          permanent public record in Ohio that employers, landlords, and professional licensing boards see on background checks.
          For people working in or entering healthcare, education, social services, law enforcement, or any state-licensed
          profession, even a low-level misdemeanor can lead to adverse licensing decisions or delayed credentialing. For CDL
          holders, any misdemeanor conviction tied to a traffic stop appears on the commercial driver record reviewed by employers
          and the FMCSA Drug and Alcohol Clearinghouse.
        </p>
        <p>
          In most {suburb} open container cases the facts are simple: the officer saw the container and you were in the vehicle.
          The outcome then depends on how the case is resolved. An attorney who appears in {courtName} and negotiates with the
          prosecutor can often get a conditional dismissal or diversion that closes the case without a conviction.
        </p>
      </Section>

      <Section title="Avoiding a conviction" tone="ice">
        <p>
          For a first-time citation, an attorney can often negotiate a conditional dismissal or diversion agreement. Typical
          conditions are a small community service requirement, no new arrests during a short probationary period, and payment of
          court costs. Completing them dismisses the charge. The firm pursues this in every suitable first-offense case, because a
          $150 fine is not worth the permanent record a guilty plea creates.
        </p>
        <p>
          Where the evidence itself is contestable (a disputed container, a questionable stop, or unclear possession among several
          occupants), the firm evaluates the charge on its merits. Sometimes the prosecution cannot prove beyond a reasonable doubt
          that the specific defendant possessed the container.
        </p>
        <h3>What the firm does in {suburb} open container cases</h3>
        <PointGrid
          points={[
            { title: 'Diversion and dismissal', body: 'Pursuing conditional dismissal for first-time defendants to avoid a permanent conviction.' },
            { title: 'Stop validity review', body: 'Checking whether the traffic stop was lawful.' },
            { title: 'Possession challenge', body: 'Contesting attribution of the container to one defendant when several occupants were present.' },
            { title: 'Definition challenge', body: 'Confirming the container actually met the statutory definition of “open container.”' },
            { title: 'Expungement planning', body: 'Advising on R.C. 2953.32 eligibility for any conviction.' },
            { title: 'Companion charge defense', body: 'Coordinating open container defense with any OVI, drug possession or other charges from the same stop.' },
          ]}
        />
        <p>
          If you received an open container citation in {suburb} or anywhere in Franklin County, call{' '}
          <a href={tel}>{FIRM_NAP.phone}</a> or <Link href="/contact">schedule a consultation online</Link>. Most first-offense
          open container cases can be resolved without a conviction.
        </p>
      </Section>

      <Section title={`More for ${suburb} and Franklin County`}>
        <LinkGrid links={suburbLinks(suburb, 'open-container-defense')} />
        <h3>Related pages</h3>
        <LinkGrid
          columns={2}
          links={[
            { href: '/criminal-defense/open-container', title: 'Open container defense in Ohio', subtitle: 'The charge statewide' },
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
