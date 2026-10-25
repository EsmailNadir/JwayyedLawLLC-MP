import RelatedArticles from '@/components/practice/RelatedArticles';
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
  title: 'Limited Driving Privileges After an OVI in Ohio',
  description:
    'How to get limited driving privileges during an Ohio OVI suspension: the HB 37 hard suspension periods, ignition interlock rules and the court motion.',
  keywords: ['limited driving privileges attorney Ohio', 'driving privileges attorney Ohio', 'work privileges attorney', 'ORC 4510.021 Ohio', 'driving privileges after OVI suspension', 'OVI hard suspension', 'OVI defense attorney'],
  openGraph: {
    title: 'Limited Driving Privileges After an OVI in Ohio | Jwayyed Law LLC',
    description: 'Eligibility, hard suspension periods, ignition interlock conditions and the application process for limited driving privileges in Ohio.',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/limited-driving-privileges',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/ovi-dui-defense/limited-driving-privileges' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Limited Driving Privileges', href: '/ovi-dui-defense/limited-driving-privileges' },
];

const faqs = [
  {
    question: 'What are limited driving privileges in Ohio?',
    answer:
      "Limited driving privileges (LDP) are court permission for a driver whose Ohio license is suspended to drive for specific, listed purposes. They are governed by ORC 4510.021, which lets courts grant privileges to suspended drivers who show a need. Permitted purposes include getting to and from work or a job interview, school or educational programs, medical treatment (including alcohol or drug treatment), court proceedings, community service, and taking a minor to school or childcare. LDP are not automatic. They need a formal court order that sets the purposes, times and any conditions, such as an ignition interlock device. Driving outside the order is driving under suspension and can lead to criminal charges.",
  },
  {
    question: 'Who is eligible for limited driving privileges in Ohio?',
    answer:
      'It depends on the type of suspension, the offense and the waiting period. Most OVI-suspended drivers are eligible after serving the mandatory hard suspension under HB 37 (effective April 9, 2025). For a first-offense non-refusal OVI, the court may waive the 15-day hard suspension entirely if you agree to an ignition interlock, so LDP can start at sentencing. For a refusal, the 30-day hard suspension is mandatory and cannot be waived. A second OVI carries a 45-day hard suspension (test over) or 90 days (refusal). A third OVI carries 180 days. A felony OVI (fourth or later) means a 3-year wait. Prior convictions and other factors can also affect eligibility.',
  },
  {
    question: 'What purposes are allowed under limited driving privileges in Ohio?',
    answer:
      'Under ORC 4510.021, a court may grant LDP for: work or job search, including the commute; education, including college and vocational training; medical treatment or appointments, including mental health treatment; alcohol or drug counseling or treatment as ordered or recommended; court appearances in the OVI case or other proceedings; community service required by a sentence or diversion program; and taking minor children to school or childcare. The order must name each authorized purpose. The court may also limit LDP to specific hours, days, routes or vehicles. Driving outside those limits, even for a similar purpose, is driving under suspension.',
  },
  {
    question: 'How do I apply for limited driving privileges in Ohio?',
    answer:
      'By formal motion to the court that imposed the OVI suspension or, for an ALS, the court in the jurisdiction where the offense happened under ORC 4511.191(G)(5). The motion must describe the purposes, the proposed hours and days, and the conditions you will accept (such as an IID). Courts typically require proof of current auto insurance (often an SR-22 filed with the Ohio BMV), payment of any fees, and evidence of need such as an employer letter or school enrollment. An attorney can prepare the motion, ask for an expedited hearing once the hard suspension ends, and answer any objections from the prosecution.',
  },
  {
    question: 'What is the 15-day hard suspension under HB 37 and how can it be waived?',
    answer:
      'HB 37, effective April 9, 2025, changed the OVI suspension framework. A first-offense OVI with a test-over result (BAC at or above the limit, not a refusal) carries a mandatory 15-day hard suspension before any LDP, and you cannot drive for any reason during it. HB 37 also lets courts waive those 15 days if you agree to install a certified ignition interlock device (IID) in any vehicle you will drive. With the IID condition, the court may grant LDP immediately, from the day of sentencing or even the date of arrest if the ALS applies, with no gap. This option applies only to first-offense non-refusal cases.',
  },
  {
    question: 'Can I get LDP if I refused the breathalyzer test?',
    answer:
      'Yes, but it is harder and the wait is longer. For refusals, ORC 4511.191 as amended by HB 37 imposes a mandatory 30-day hard suspension before any LDP. Unlike the 15-day period in non-refusal cases, the court cannot waive it even if you agree to an ignition interlock. You serve the full 30 days with no driving at all. After that, the court can grant LDP subject to IID requirements and other conditions. The hard suspension is doubled and no agreement shortens it, which is one of the main practical costs of refusing a BAC test. The firm\'s refusal OVI page has more.',
  },
  {
    question: 'What is an ignition interlock device (IID) and how does it work?',
    answer:
      'An IID is a breath-testing instrument connected to the ignition. The vehicle will not start until you give a passing sample, below a set alcohol threshold. While you drive, it asks for "rolling retest" samples at random intervals. It records every result, including failures and tampering attempts, and sends the data to a monitoring authority. IIDs must be installed and serviced by providers certified by the Ohio BMV. You pay the installation fee (typically $75 to $150) and monthly monitoring (typically $60 to $80). A failed, refused or tampered test is reported to the court and may cost you your LDP. The requirement may last for the whole suspension or a set period after reinstatement.',
  },
  {
    question: 'What happens if I drive outside my limited driving privileges?',
    answer:
      'Driving outside your LDP (wrong hours, wrong purpose, wrong vehicle, or without the required IID) is driving under OVI suspension under ORC 4510.14. That is a first-degree misdemeanor (M1) with a mandatory minimum of 30 consecutive days in jail that the court cannot waive or suspend. The court may also revoke your LDP, leaving you no privileges for the rest of the suspension. Prosecutors treat these violations seriously as willful noncompliance with a court order. If you are unsure whether a trip is covered, do not drive; ask your attorney first. Jwayyed Law LLC handles LDP applications and DUOVIS defense throughout Ohio. Contact the firm to schedule a consultation.',
  },
];

const RELATED = [
  { href: '/ovi-dui-defense/first-ovi', title: 'First OVI', subtitle: 'Penalties and defenses for a first offense' },
  { href: '/ovi-dui-defense/second-ovi', title: 'Second OVI', subtitle: 'Higher penalties and mandatory jail for a second offense' },
  { href: '/ovi-dui-defense/driving-under-ovi-suspension', title: 'Driving under OVI suspension', subtitle: 'When you are charged with driving while suspended for an OVI' },
  { href: '/ovi-dui-defense/refusal-ovi', title: 'Refusal OVI', subtitle: 'When you refused the breath or chemical test' },
];

export default function LimitedDrivingPrivilegesPage() {
  return (
    <>
      <OVIReviews />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Limited driving privileges after an OVI in Ohio"
        description="Under ORC 4510.021 a court can let you drive for work, school and treatment during an OVI suspension. On a first non-refusal OVI, the 15-day wait can be waived with an interlock."
      />

      <KeyFacts
        facts={[
          { figure: '15 days', label: 'hard suspension on a first OVI, waivable with an ignition interlock' },
          { figure: '30 days', label: 'hard suspension after a refusal, with no waiver' },
          { figure: '45 days', label: 'hard suspension on a second OVI (90 days after a refusal)' },
          { figure: '30 days', label: 'mandatory jail for driving outside your privileges' },
        ]}
      />

      <Section
        title="Driving privileges after an OVI suspension"
        intro={
          <p>
            An OVI suspension does not always mean you cannot drive at all. ORC 4510.021 lets courts grant limited driving privileges
            (LDP) to suspended drivers who show a real need to drive for work, school, medical treatment or other listed purposes.
          </p>
        }
      >
        <p>
          LDP are not automatic, and they do not start immediately in every case. The court must issue a formal order that sets the
          purposes, days, hours and any conditions, such as an ignition interlock device (IID). Driving without a valid order, or
          outside it, is a separate crime under ORC 4510.14 with a mandatory 30-day jail minimum.
        </p>
        <p>
          The firm helps OVI clients get LDP as early as the law allows and stay within the rules during the suspension, as part of its{' '}
          <Link href="/ovi-dui-defense">OVI/DUI defense practice</Link>, so that one set of OVI charges does not become several.
        </p>
      </Section>

      <Section title="When you can apply: hard suspension periods" tone="ice">
        <p>
          HB 37, effective April 9, 2025, changed Ohio&apos;s OVI suspension rules for privileges. The biggest change for a first-time
          non-refusal offender is that courts can now waive the 15-day hard suspension entirely if you agree to install a certified IID.
          A first-time defendant with a test-over result and no prior alcohol-related arrests can potentially receive LDP on the day of
          sentencing, or even have the ALS period covered, once an IID is installed. Before HB 37, every suspended driver served a hard
          suspension with no driving before any LDP. Refusal cases keep a mandatory 30-day hard suspension that no IID agreement can
          waive.
        </p>
        <FactTable
          title="Hard suspension waiting periods under HB 37 (effective April 9, 2025)"
          rows={[
            { label: 'First OVI, test over (no prior alcohol arrests)', value: '15-day hard suspension. Waivable with an IID agreement, allowing immediate LDP.' },
            { label: 'First OVI, refusal', value: '30-day hard suspension. Not waivable; IID required for LDP after 30 days.' },
            { label: 'Second OVI, test over', value: '45-day hard suspension; mandatory IID for LDP.' },
            { label: 'Second OVI, refusal', value: '90-day hard suspension; mandatory IID for LDP.' },
            { label: 'Third OVI', value: '180-day hard suspension; mandatory IID for LDP.' },
            { label: 'Fourth or later OVI (felony)', value: '3-year waiting period before any LDP.' },
            { label: 'Before any driving', value: 'Proof of SR-22 insurance and payment of the $315 reinstatement fee.' },
            { label: 'Driving outside the order', value: 'DUOVIS, with a mandatory 30-day jail minimum under ORC 4510.14.' },
          ]}
          note="These periods run from the date of the ALS (administrative arrest) or the date of the criminal court suspension order, depending on the context."
        />
        <p>
          An attorney can calculate the exact dates and have the LDP motion filed and heard as soon as the waiting period ends. Read
          more about <Link href="/our-law-firm/blog/limited-driving-privileges-after-ovi-ohio">limited driving privileges after an OVI in Ohio</Link>,
          or call (614) 285-5482 to <Link href="/contact">schedule a consultation</Link>.
        </p>
      </Section>

      <Section
        title="What to do during the hard suspension"
        intro={
          <p>
            Do not drive at all, and use the waiting period to get the motion ready so it can be heard as soon as you are eligible.
          </p>
        }
      >
        <Steps
          steps={[
            {
              title: 'Do not drive for any reason',
              body: 'No driving is permitted during a hard suspension, not even for work or a medical emergency. Driving now is driving under OVI suspension under ORC 4510.14.',
            },
            {
              title: 'File the ALS appeal in time',
              body: 'A challenge to the administrative suspension within 30 days can shorten the overall suspension.',
            },
            {
              title: 'Collect the supporting documents',
              body: 'Proof of current insurance (often an SR-22 filed with the Ohio BMV), an employer letter, school enrollment or a treatment schedule: whatever shows why you need to drive and when.',
            },
            {
              title: 'Line up the interlock',
              body: 'If an ignition interlock will be a condition, it must come from a provider certified by the Ohio BMV and be installed in any vehicle you will drive.',
            },
            {
              title: 'Write down your schedule',
              body: 'The motion must list each purpose, the proposed days and hours, and the conditions you accept. Driving outside the limits the court sets, even for a similar purpose, is driving under suspension.',
            },
          ]}
        />
        <FactTable
          title="What driving on privileges costs"
          rows={[
            { label: 'Reinstatement fee', value: '$315, paid before any driving.' },
            { label: 'Proof of insurance', value: 'Current auto insurance, often an SR-22 financial responsibility form filed with the Ohio BMV.' },
            { label: 'Interlock installation', value: 'Typically $75 to $150, paid by the driver.' },
            { label: 'Interlock monitoring', value: 'Typically $60 to $80 a month, for as long as the requirement lasts.' },
          ]}
          note="Interlock costs are typical provider charges."
        />
      </Section>

      <Section title="How to apply for limited driving privileges" tone="ice">
        <Steps
          steps={[
            {
              title: 'File the motion in the right court',
              body: 'The court handling the criminal OVI case or, for an ALS-only situation, the court in the county where the arrest happened, as ORC 4511.191(G)(5) specifies.',
            },
            { title: 'State the need', body: 'The specific purposes for driving, the proposed schedule, and the conditions you accept.' },
            {
              title: 'Gather the documents',
              body: 'Courts typically require current proof of auto insurance, often an SR-22 financial responsibility form filed with the Ohio BMV, and may want an employer letter, school enrollment documentation or other support.',
            },
            {
              title: 'Attend the hearing',
              body: 'Where prosecutors review and comment on LDP motions, representation at the hearing lets you answer objections and make the case for privileges.',
            },
          ]}
        />
        <p>A complete motion with supporting documents speeds up approval.</p>
      </Section>

      <Section title="Conditions that come with privileges">
        <PointGrid
          points={[
            { title: 'Ignition interlock', body: 'Often required, and mandatory on repeat offenses.' },
            { title: 'Routes', body: 'The court may confine you to specific routes, such as between home and work.' },
            { title: 'Hours', body: 'Driving may be limited to certain hours and days.' },
            { title: 'GPS monitoring', body: 'Some courts require an ankle monitor or a vehicle GPS tracker.' },
            {
              title: 'Yellow plates',
              body: 'Ohio may require OVI-marked ("yellow plate") license plates in some circumstances, which publicly identify the vehicle as belonging to an OVI-suspended driver.',
            },
          ]}
        />
        <Callout title="Breaking a condition is a new charge">
          Driving outside authorized hours or routes, or breaking any other condition, is driving under OVI suspension under ORC
          4510.14, with the mandatory 30-day jail minimum. See{' '}
          <Link href="/ovi-dui-defense/driving-under-ovi-suspension">driving under OVI suspension</Link> and{' '}
          <Link href="/ovi-dui-defense/refusal-ovi">refusal OVI defense</Link>.
        </Callout>
      </Section>

      <Section title="How an OVI defense attorney handles a privileges application" tone="ice">
        <PointGrid
          points={[
            { title: 'Checks eligibility', body: 'Which hard suspension period applies and when LDP can first be sought.' },
            { title: 'Uses the IID waiver', body: 'For eligible first-offense cases, an IID agreement to waive the 15-day hard suspension and get immediate privileges.' },
            { title: 'Prepares the motion', body: 'A complete, supported LDP motion with all required documentation.' },
            { title: 'Represents you at the hearing', body: 'And answers any objections from the prosecutor.' },
            { title: 'Keeps you compliant', body: 'Advice on staying inside the LDP order to avoid a DUOVIS charge.' },
            { title: 'Files the ALS appeal', body: 'A challenge to the administrative suspension within 30 days, to shorten the overall suspension.' },
          ]}
        />
      </Section>

      <LocationsWeServe title="OVI/DUI Defense" />

      <Section title="Related OVI pages">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <RelatedArticles category="OVI/DUI" title="Articles on Ohio OVI and DUI" slugs={["limited-driving-privileges-after-ovi-ohio", "ohio-als-appeal-30-day-deadline", "how-much-does-dui-cost-ohio"]} />
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
