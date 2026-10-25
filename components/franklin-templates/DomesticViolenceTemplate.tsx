import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';
import { getSuburb, FCMC, MISDEMEANOR_SENTENCING, FIRM_NAP } from '@/data/franklin-county-reference';
import { FcmcTable, ProsecutorNote, SuburbAtAGlance, slugify, suburbLinks } from './shared';

interface Props {
  suburb: string;
}

export default function DomesticViolenceTemplate({ suburb }: Props) {
  const suburbData = getSuburb(suburb);
  if (!suburbData) throw new Error(`No reference data found for suburb: ${suburb}`);

  const { policeAgency, formerProsecutorTitle } = suburbData;
  const slug = slugify(suburb);
  const tel = `tel:${FIRM_NAP.phoneRaw.replace('+', '')}`;

  const breadcrumbItems = [
    { label: 'Locations', href: '/locations' },
    { label: 'Franklin County', href: '/locations/franklin-county' },
    { label: `Domestic Violence Defense in ${suburb}`, href: `/locations/franklin-county/domestic-violence-defense-${slug}` },
  ];

  const faqs = [
    {
      question: `What is domestic violence under Ohio law?`,
      answer: `Under Ohio Revised Code 2919.25, domestic violence is knowingly causing or attempting to cause physical harm to a family or household member (first-degree misdemeanor), or recklessly causing serious physical harm to a family or household member (also M1). Threatening a family or household member with force that causes fear of imminent physical harm is a fourth-degree misdemeanor. A first M1 DV conviction carries up to ${MISDEMEANOR_SENTENCING.M1.maxJail} in jail and a ${MISDEMEANOR_SENTENCING.M1.maxFine} fine. Prior DV convictions can raise the charge to a felony.`,
    },
    {
      question: `Can a domestic violence charge in ${suburb} be dropped if the alleged victim does not want to press charges?`,
      answer: `In Ohio the decision to prosecute belongs to the state, not to the alleged victim. Once the ${policeAgency} makes an arrest and submits a report, the Franklin County prosecutor or the Franklin County Municipal Court prosecutor goes forward with the case even if the alleged victim recants, refuses to cooperate, or asks for the charges to be dropped. An attorney can advocate with the prosecutor and present legal defenses, but the alleged victim alone cannot dismiss the case.`,
    },
    {
      question: `What is the Lautenberg Amendment and how does it affect a DV conviction in ${suburb}?`,
      answer: `The Lautenberg Amendment (18 U.S.C. § 922(g)(9)) permanently prohibits anyone convicted of a misdemeanor crime of domestic violence from possessing or purchasing firearms or ammunition under federal law. It applies to every misdemeanor DV conviction, including a first-offense M4 threat conviction, with no exception for law enforcement officers or military personnel. For ${suburb} residents who own firearms for self-defense, hunting, or work, this lifetime federal ban is often the most severe consequence of a DV conviction. The firm accounts for it in every case.`,
    },
    {
      question: `Where is a domestic violence case from ${suburb} heard?`,
      answer: `Domestic violence is a first-degree misdemeanor under Ohio Revised Code 2919.25 and cannot be processed at the mayor's court level. All DV cases from ${suburb} are handled in Franklin County Municipal Court at ${FCMC.address} (${FCMC.floors}), ${FCMC.clerkPhone}. A mayor's court may receive the initial citation but must transfer all DV proceedings to Franklin County Municipal Court. Felony DV (with prior DV convictions) is bound over to Franklin County Court of Common Pleas.`,
    },
    {
      question: `What happens if a protective order is violated in ${suburb}?`,
      answer: `Violating a temporary protection order (TPO) or civil protection order (CPO) in ${suburb} is a separate crime under Ohio Revised Code 2919.27: an M1 misdemeanor for a first offense, rising to an F5 felony for later violations or violations involving prior DV convictions. A violation arrest by the ${policeAgency} often brings both the violation charge and a new underlying DV charge. The firm defends both at the same time.`,
    },
    {
      question: `Can a domestic violence conviction in ${suburb} be expunged?`,
      answer: `No. Ohio Revised Code 2953.36 lists domestic violence convictions under R.C. 2919.25 as ineligible for expungement or record sealing. Unlike many misdemeanor convictions, a DV conviction cannot be removed from your record no matter how much time passes or how clean the rest of your record is. That matters when weighing any plea offer, and the firm works to avoid a DV conviction where an alternative charge or dismissal is possible.`,
    },
    {
      question: `Why hire Jwayyed Law LLC for a domestic violence charge in ${suburb}?`,
      answer: `Jwayyed Law LLC defends domestic violence charges throughout Franklin County, including ${suburb}. DV cases are prosecuted in Ohio regardless of the alleged victim's wishes, and the permanent Lautenberg firearm ban and the bar on expungement make a dismissal or non-DV resolution critically important. The firm investigates the factual basis of the accusation and evaluates self-defense and credibility issues. Call (614) 285-5482 to discuss your case.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title={`Domestic violence charges in ${suburb}, Ohio`}
        description={`Domestic violence charges from ${suburb} are heard in Franklin County Municipal Court. A conviction carries a permanent federal firearm ban and cannot be expunged.`}
      />

      <Section
        title={`Where a ${suburb} domestic violence case is heard`}
        intro={
          <p>
            Domestic violence is a first-degree misdemeanor under Ohio Revised Code 2919.25 and{' '}
            <strong>cannot be processed at the mayor&apos;s court level</strong>: Ohio law requires DV charges to be handled by a
            court of record. Every DV case from {suburb} goes to Franklin County Municipal Court.
          </p>
        }
      >
        <SuburbAtAGlance suburb={suburb} data={suburbData} />
        <p>
          If a {suburb} citation is issued first, it is transferred to Franklin County Municipal Court for all proceedings:
          arraignment, pretrial hearings, pleas and trial. Temporary protection order (TPO) proceedings are also heard there. Felony
          DV is bound over to Franklin County Court of Common Pleas. The firm appears regularly at Franklin County Municipal Court
          on its domestic violence docket.
        </p>
        <FcmcTable hears="Every domestic violence case from the suburbs, from arraignment through trial, and temporary protection order proceedings" />
        <ProsecutorNote title={formerProsecutorTitle} />
        <h3>What happens after a {suburb} DV arrest</h3>
        <p>
          When the <strong>{policeAgency}</strong> responds to a domestic disturbance call, Ohio mandatory arrest policies mean an
          officer who finds probable cause that domestic violence occurred will make an arrest. A temporary protection order is
          often issued the same night, barring contact with your family home and possibly your children. The prosecution then runs
          on the state&apos;s timeline, not yours and not the alleged victim&apos;s.
        </p>
        <p>
          Domestic disturbance calls and arrests happen in every neighborhood and economic group. In many cases the facts are
          genuinely disputed, shaped by a difficult relationship, or driven by circumstances the responding officer had no time or
          information to evaluate. The firm learns the complete factual picture before advising on strategy.
        </p>
      </Section>

      <Section title="Domestic violence under Ohio Revised Code 2919.25" tone="ice">
        <FactTable
          title="The three forms of domestic violence"
          rows={[
            {
              label: 'Knowingly causing or attempting physical harm',
              value: (
                <>
                  To a family or household member. A first-degree misdemeanor: up to{' '}
                  <strong>{MISDEMEANOR_SENTENCING.M1.maxJail}</strong> in jail and a{' '}
                  <strong>{MISDEMEANOR_SENTENCING.M1.maxFine}</strong> fine.
                </>
              ),
            },
            { label: 'Recklessly causing serious physical harm', value: 'To a family or household member. Also M1.' },
            {
              label: 'Threat of force',
              value: `Threatening a family or household member with force so that the person believes imminent harm is at risk. A fourth-degree misdemeanor: up to ${MISDEMEANOR_SENTENCING.M4.maxJail} in jail.`,
            },
          ]}
          note="“Family or household member” includes spouses, former spouses, persons living as spouses, natural parents of shared children, other blood or marriage relatives, and current and former cohabitants within the preceding five years."
        />
        <FactTable
          title="When DV becomes a felony (R.C. 2919.25(D))"
          rows={[
            { label: 'Victim is pregnant', value: 'A first-offense DV under division (A) or (B) becomes a fifth-degree felony.' },
            { label: 'One prior DV conviction', value: 'Involving a family or household member: a fourth-degree felony.' },
            { label: 'Two or more prior DV convictions', value: 'A third-degree felony.' },
          ]}
          note="Felony DV is processed in Franklin County Court of Common Pleas after arraignment and carries mandatory incarceration and much higher fines."
        />
        <p>
          The firm checks whether a prior-conviction escalation is properly charged and challenges overcharging where the prior
          record is incomplete or disputed.
        </p>
      </Section>

      <Section title="The federal firearm ban (Lautenberg Amendment)">
        <p>
          Under 18 U.S.C. § 922(g)(9), the Lautenberg Amendment, anyone convicted of a misdemeanor crime of domestic violence is
          permanently prohibited from possessing, purchasing, or transporting firearms or ammunition under federal law. It applies
          to every misdemeanor DV conviction, including a first-offense M4 threat charge. There is no exception and no path to
          restoring firearm rights under federal law; Ohio restoration does not override federal law.
        </p>
        <Callout title="Law enforcement and military are not exempt">
          The ban applies to police officers and military members, and a DV conviction can end a career in law enforcement.
        </Callout>
        <p>
          For {suburb} residents who own firearms for home defense, hunting, work, or as a condition of employment, the Lautenberg
          ban is often the main reason to contest a DV charge with every available defense. DV convictions are also not eligible
          for expungement under Ohio law, so the record is permanent even for a first offense that looks minor.
        </p>
      </Section>

      <Section title="Defenses to a domestic violence charge" tone="ice">
        <p>
          The firm starts with a factual investigation before any hearing: police reports, body-cam footage, 911 recordings, any
          medical records and photographs. Witnesses are interviewed independently of the police investigation.
        </p>
        <PointGrid
          points={[
            {
              title: 'Contradicting the arrest narrative',
              body: 'Other explanations for any injuries, evidence of the alleged victim’s own aggression, inconsistencies in the arrest account, and any prior false accusations.',
            },
            {
              title: 'Self-defense',
              body: 'If you were attacked first and responded, self-defense under ORC 2901.05 may apply. Once you present evidence raising it, the prosecution must disprove it.',
            },
            {
              title: 'Recanted or changed statements',
              body: 'When the alleged victim later recants or gives a statement that differs from the first police report, the inconsistency goes to whether the case can be proved beyond a reasonable doubt.',
            },
            {
              title: 'A non-DV resolution',
              body: 'A plea to disorderly conduct, for example, does not carry the firearm ban or the bar on expungement. The firm pursues that outcome where it is possible.',
            },
          ]}
        />
      </Section>

      <Section title={`What the firm does in ${suburb} DV cases`}>
        <PointGrid
          points={[
            { title: 'Emergency representation', body: 'Attending the arraignment to address bond conditions and protection order terms from day one.' },
            { title: 'Evidence investigation', body: 'Body-cam footage, 911 recordings, police reports and witness statements obtained before any hearing.' },
            { title: 'Self-defense and credibility challenges', body: 'Testing the factual basis of the accusation and any inconsistencies in the alleged victim’s account.' },
            { title: 'Non-DV resolution', body: 'Pursuing pleas to disorderly conduct or other charges that avoid the Lautenberg firearm ban.' },
            { title: 'Protection order defense', body: 'Contesting overly broad TPO or CPO conditions that affect your home, job or relationship with your children.' },
            { title: 'Professional licensing impact', body: 'How a DV charge or conviction affects employment licenses, security clearances and professional standing.' },
          ]}
        />
        <p>
          If you were arrested for domestic violence in {suburb} or anywhere in Franklin County, call{' '}
          <a href={tel}>{FIRM_NAP.phone}</a> or <Link href="/contact">schedule a consultation online</Link>. Decisions in the first
          48 hours after a DV arrest, including whether to make any statement and how to respond to the temporary protection order,
          have a lasting effect on the outcome. More on the firm&apos;s{' '}
          <Link href="/criminal-defense/domestic-violence">domestic violence defense</Link> practice.
        </p>
      </Section>

      <Section title={`More for ${suburb} and Franklin County`} tone="ice">
        <LinkGrid links={suburbLinks(suburb, 'domestic-violence-defense')} />
        <h3>Franklin County courts</h3>
        <LinkGrid
          columns={2}
          links={[
            { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide: location, dockets and what to expect' },
            { href: '/locations/franklin-county/domestic-violence-defense-columbus', title: 'Domestic violence defense in Columbus', subtitle: 'DV cases from the city of Columbus' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
