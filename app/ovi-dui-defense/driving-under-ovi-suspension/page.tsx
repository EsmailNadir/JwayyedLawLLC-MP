import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import OVIReviews from '@/components/OVIReviews';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Driving Under OVI Suspension',
  description:
    'Charged with driving under an OVI suspension in Ohio? ORC 4510.14, the 30-day mandatory jail minimum, vehicle immobilization and your defenses.',
  keywords: ['driving under suspension attorney Ohio', 'driving under OVI suspension attorney Ohio', 'suspended license attorney', 'ORC 4510.14 defense'],
  openGraph: {
    title: 'Driving Under OVI Suspension | Jwayyed Law LLC',
    description: 'Penalties, the two kinds of OVI suspension, HB 37 privilege rules and defenses for a DUOVIS charge in Ohio.',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/driving-under-ovi-suspension',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/ovi-dui-defense/driving-under-ovi-suspension' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Driving Under OVI Suspension', href: '/ovi-dui-defense/driving-under-ovi-suspension' },
];

const faqs = [
  {
    question: 'What is driving under OVI suspension in Ohio?',
    answer:
      'Driving under OVI suspension (DUOVIS) is a specific offense under ORC 4510.14. It applies when you drive while your license is suspended because of an OVI conviction or an OVI-related Administrative License Suspension (ALS) under ORC 4511.191. The legislature treats it more harshly than general driving under suspension (ORC 4510.11). A first offense is a first-degree misdemeanor (M1), punishable by up to 180 days in jail and a fine up to $1,000. ORC 4510.14 also carries a mandatory minimum 30-day jail sentence, which makes it one of the most serious traffic misdemeanors in Ohio for guaranteed jail time.',
  },
  {
    question: 'What are the mandatory jail penalties for driving under OVI suspension?',
    answer:
      "ORC 4510.14 requires a minimum of 30 consecutive days in jail on a first conviction. The court cannot waive or suspend it or convert it to community service. The maximum is 180 days, the full M1 ceiling. Later convictions within the look-back period bring higher penalties and a greater chance of felony charges. The minimum reflects the General Assembly's view that drivers who ignore an OVI suspension are a heightened risk to public safety. The main way to avoid it is to challenge the underlying facts or the validity of the suspension itself.",
  },
  {
    question: 'Can I get limited driving privileges during my OVI suspension?',
    answer:
      'Yes, but you must get them from the court before you drive. Limited driving privileges (LDP) under ORC 4510.021 let a person under OVI suspension drive for set purposes: work, school, medical appointments, alcohol treatment, court appearances and community service. Driving is lawful only once the court has granted LDP in a formal order. Driving without a valid order, even for work or a medical emergency, is driving under OVI suspension and brings the mandatory 30-day jail minimum. If you already have an OVI suspension, apply for LDP now through counsel, not after you are caught. The firm\'s limited driving privileges page covers the full process.',
  },
  {
    question: 'What is an ignition interlock device (IID) and when is it required in Ohio?',
    answer:
      "An IID is a breath-testing instrument wired into the vehicle's ignition. The car will not start without a clean breath sample, and it asks for more samples at random while you drive. Under HB 37 (effective April 9, 2025), courts may require an IID as a condition of limited privileges during an OVI suspension. In a first-offense non-refusal case, a defendant who agrees to an IID may have the mandatory 15-day hard suspension waived, so privileges can start immediately. IIDs are typically required for second and later OVI offenses. A certified provider installs it, and the driver pays for installation and monthly monitoring. A failed test or tampering is reported to the court and may cost you your privileges.",
  },
  {
    question: 'What is the difference between an ALS suspension and a court-ordered OVI suspension?',
    answer:
      'Ohio has two. The Administrative License Suspension (ALS) under ORC 4511.191 is imposed at arrest, before any conviction, when a driver fails or refuses a BAC test. It is an administrative action by the Ohio BMV. A court-ordered suspension under ORC 4511.19 is imposed by the criminal court at sentencing after an OVI conviction. Both are OVI-related, and driving under either is DUOVIS under ORC 4510.14. The ALS can be appealed within 30 days of arrest; the court-ordered suspension generally can be challenged only on direct appeal of the conviction. Knowing which suspension is in effect, or whether both are, decides when limited privileges may be available.',
  },
  {
    question: 'Can driving under OVI suspension affect my underlying OVI case?',
    answer:
      'Yes. A DUOVIS arrest while the OVI case is still pending shows the court you are not complying with the suspension, which can hurt bail conditions, plea negotiations and sentencing in the original case. Judges notice defendants who drive in defiance of a court order. A DUOVIS conviction within the look-back period can also count toward repeat-offender penalties on any future OVI charge. The safest course is to deal with the original OVI promptly, including getting LDP before you drive.',
  },
  {
    question: 'What happens if I am caught driving while suspended in Ohio?',
    answer:
      'You will typically be arrested and charged with DUOVIS under ORC 4510.14, and the vehicle may be immobilized or towed. Under ORC 4503.233, Ohio allows vehicle immobilization for 30 days (first offense) or forfeiture (later offenses). A conviction brings the mandatory 30-day jail minimum, and the court may also extend the underlying OVI suspension. With multiple prior DUOVIS convictions, prosecutors may seek felony charges under repeat-offender enhancement statutes.',
  },
  {
    question: 'How does an attorney help with a driving under OVI suspension charge?',
    answer:
      'An attorney can check whether the underlying suspension was validly imposed; if the ALS appeal was never filed or the suspension had a procedural defect, the suspension itself may be open to challenge. The attorney can check whether you actually held valid limited privileges that law enforcement misread, and argue that driving within the limits of a valid LDP order was lawful. The attorney can also negotiate for a reduced charge or look for any legal basis for an alternative to the mandatory 30-day minimum. Jwayyed Law LLC handles DUOVIS charges alongside OVI defense throughout Ohio. Contact the firm to schedule a confidential consultation.',
  },
];

const RELATED = [
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving legally during an OVI suspension' },
  { href: '/ovi-dui-defense/first-ovi', title: 'First OVI', subtitle: 'Penalties and defenses for a first offense' },
  { href: '/ovi-dui-defense/second-ovi', title: 'Second OVI', subtitle: 'Higher penalties and mandatory jail for a second offense' },
  { href: '/ovi-dui-defense/third-ovi', title: 'Third OVI', subtitle: 'Mandatory jail and vehicle forfeiture for a third offense' },
];

export default function DrivingUnderOVISuspensionPage() {
  return (
    <>
      <OVIReviews />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Driving under OVI suspension in Ohio"
        description="Driving on an OVI suspension is a first-degree misdemeanor under ORC 4510.14 with a mandatory 30 consecutive days in jail on a first conviction."
      />

      <KeyFacts
        facts={[
          { figure: '30 days', label: 'mandatory consecutive jail on a first DUOVIS conviction' },
          { figure: '180 days', label: 'maximum jail' },
          { figure: '$1,000', label: 'maximum fine' },
          { figure: '30 days', label: 'vehicle immobilization on a first offense (forfeiture after that)' },
        ]}
      />

      <Section
        title="What a DUOVIS charge means"
        intro={
          <p>
            ORC 4510.14 makes it a separate offense, distinct from general driving under suspension, to drive while your license is
            suspended because of an OVI conviction or an OVI-related ALS under ORC 4511.191.
          </p>
        }
      >
        <p>
          The General Assembly deliberately set harsher penalties for OVI-related driving under suspension than for other
          suspended-license driving, on the view that OVI offenders who keep driving are a higher public safety risk. A first
          conviction is a first-degree misdemeanor (M1) with a mandatory minimum of 30 consecutive days in jail, which the court cannot
          waive, suspend or reduce.
        </p>
        <p>
          By comparison, a first-offense OVI under ORC 4511.19 carries a mandatory minimum of only 3 days in jail (or the driver
          intervention program). That makes the DUOVIS minimum among the most severe attached to any misdemeanor in the Ohio Revised
          Code. The firm defends DUOVIS charges as part of its <Link href="/ovi-dui-defense">OVI/DUI defense practice</Link>, and helps
          current OVI clients get lawful limited driving privileges before it comes to this.
        </p>
      </Section>

      <Section
        title="What to do after a driving under OVI suspension charge"
        tone="ice"
        intro={
          <p>
            Stop driving until a court order allows it, and find out exactly which suspensions are in effect. Most defenses to this
            charge start with the suspension paperwork.
          </p>
        }
      >
        <Steps
          steps={[
            {
              title: 'Stop driving until a court allows it',
              body: 'Until a court grants limited driving privileges in a formal order, any driving, even for work or a medical emergency, is driving under OVI suspension. Each new violation creates its own record.',
            },
            {
              title: 'Find out which suspensions are in effect',
              body: 'An ALS, a court-ordered suspension or both, when each started and ends, and what privileges, if any, the court has authorized. Confusion about your status is not a defense; the exact dates and terms are what the defense works from.',
            },
            {
              title: 'Gather the paperwork',
              body: 'The paper ALS notice from the officer, the court order imposing any suspension, and any limited privileges order. Driving within the limits of a valid privileges order was lawful.',
            },
            {
              title: 'Deal with the vehicle',
              body: 'The vehicle may be immobilized or towed, even if it belongs to a family member or employer. An immobilization or forfeiture order can be contested.',
            },
            {
              title: 'Tell your attorney about the OVI case',
              body: 'If the original OVI is still pending, a new charge can hurt bail conditions, plea negotiations and sentencing there. Both cases should be handled together.',
            },
          ]}
        />
      </Section>

      <Section title="Driving under OVI suspension penalties">
        <FactTable
          title="Penalties under ORC 4510.14"
          rows={[
            { label: 'Classification', value: 'First-degree misdemeanor (M1).' },
            { label: 'Mandatory minimum jail', value: '30 consecutive days. It cannot be waived, suspended or converted.' },
            { label: 'Maximum jail', value: '180 days.' },
            { label: 'Maximum fine', value: '$1,000.' },
            { label: 'Vehicle immobilization', value: '30 days (first offense); forfeiture for later offenses under ORC 4503.233.' },
            { label: 'Suspension extension', value: 'The court may extend the underlying OVI suspension.' },
            { label: 'Repeat offenses', value: 'Escalating penalties and possible felony exposure for a pattern of offenses.' },
          ]}
        />
        <h3>Repeat offenses</h3>
        <p>
          Under ORC 4503.233, a court may order the vehicle driven during a DUOVIS offense immobilized for 30 days on a first offense, or
          forfeited on later offenses, even if it belongs to a family member or employer. A pattern of DUOVIS convictions also shows
          willful noncompliance and can affect sentencing in a later OVI case. Prosecutors and judges treat repeat offenders very
          differently from first-time offenders. With a prior DUOVIS record and a new charge, contact the firm right away.
        </p>
      </Section>

      <Section title="The two kinds of OVI suspension" tone="ice">
        <p>Two types of OVI-related suspension can lead to a DUOVIS charge, and both can be in effect at once.</p>
        <PointGrid
          points={[
            {
              title: 'Administrative License Suspension (ALS)',
              body: 'Imposed under ORC 4511.191 at the time of arrest, because you refused chemical testing or tested at or above the legal limit. It starts immediately, and the officer gives you a paper ALS notice.',
            },
            {
              title: 'Court-ordered suspension',
              body: 'Imposed under ORC 4511.19 by the criminal court as part of the sentence for an OVI conviction.',
            },
          ]}
        />
        <p>
          Both are &ldquo;OVI-related&rdquo; for ORC 4510.14. Know exactly which suspensions are in effect, when they start and end,
          and what limited privileges, if any, the court has authorized. Confusion about your suspension status is not a defense. Call
          (614) 285-5482 or <Link href="/contact">schedule a consultation</Link>.
        </p>
      </Section>

      <Section title="HB 37 and staying legal on the road">
        <p>
          HB 37, effective April 9, 2025, changed how limited privileges interact with OVI suspensions. In a first-offense non-refusal
          case, a court may now waive the mandatory 15-day hard suspension and grant privileges immediately if you agree to install a
          certified ignition interlock device (IID). In a refusal case, the 30-day hard suspension cannot be waived regardless of an IID
          agreement. Repeat offenders face a mandatory IID and longer hard suspensions.
        </p>
        <p>
          In many first-offense non-refusal cases, retaining counsel promptly and agreeing to an IID can avoid any gap in driving
          privileges, and with it any risk of a DUOVIS charge. Read about{' '}
          <Link href="/our-law-firm/blog/limited-driving-privileges-after-ovi-ohio">limited driving privileges after an OVI in Ohio</Link>{' '}
          or see <Link href="/ovi-dui-defense/limited-driving-privileges">limited driving privileges</Link> for the full process.
        </p>
        <Callout title="Get privileges before you drive">
          Driving without a valid LDP order, even for work or a medical emergency, is driving under OVI suspension.
        </Callout>
      </Section>

      <Section title="Defenses to a DUOVIS charge" tone="ice">
        <p>
          Courts have very little room to depart from the mandatory minimum. The ways to avoid it are to defeat the charge or to
          negotiate a reduction to a non-DUOVIS offense where the minimum does not apply.
        </p>
        <PointGrid
          points={[
            { title: 'The underlying suspension', body: 'Whether it was validly imposed. A procedural defect may open the suspension itself to challenge.' },
            { title: 'Identity of the driver', body: 'Whether the state can prove you were the person driving.' },
            { title: 'A valid privileges order', body: 'Whether the driving fell within the scope of a valid limited driving privileges order.' },
            { title: 'A reduced charge', body: 'A non-DUOVIS offense that does not carry the 30-day mandatory minimum.' },
          ]}
        />
      </Section>

      <Section title="What the firm does on a DUOVIS charge">
        <PointGrid
          points={[
            { title: 'Challenges the underlying suspension', body: 'Checks that the ALS or court suspension was validly imposed and procedurally proper.' },
            { title: 'Verifies your privileges', body: 'Whether valid limited driving privileges were in effect and covered the driving in question.' },
            { title: 'Negotiates a reduction', body: 'To a non-DUOVIS offense, avoiding the mandatory 30-day minimum.' },
            { title: 'Contests the vehicle order', body: 'Any order to immobilize or forfeit the vehicle.' },
            { title: 'Files for privileges early', body: 'For current OVI clients, an immediate LDP application to prevent DUOVIS exposure going forward.' },
            { title: 'Plans IID compliance', body: 'Ignition interlock requirements and how to keep driving lawfully under HB 37.' },
          ]}
        />
        <p>
          See also the general <Link href="/ovi-dui-defense">OVI defense overview</Link>.
        </p>
      </Section>

      <LocationsWeServe title="OVI/DUI Defense" />

      <Section title="Related OVI pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
