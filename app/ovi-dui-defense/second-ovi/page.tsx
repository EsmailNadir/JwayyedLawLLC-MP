import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import OVIReviews from '@/components/OVIReviews';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Second OVI Defense in Ohio',
  description:
    'Charged with a second OVI in Ohio? Mandatory jail, the 1 to 7 year suspension, ignition interlock rules and the defenses that apply.',
  keywords: ['second OVI attorney Ohio', 'second DUI defense attorney Ohio', 'repeat OVI attorney'],
  openGraph: {
    title: 'Second OVI Defense in Ohio | Jwayyed Law LLC',
    description: 'Penalties, the 30-day ALS appeal, driving privileges and defenses for a second OVI charge in Ohio.',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/second-ovi',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/ovi-dui-defense/second-ovi' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Second OVI', href: '/ovi-dui-defense/second-ovi' },
];

const faqs = [
  {
    question: 'What are the penalties for a second OVI in Ohio?',
    answer:
      'A second OVI within 10 years carries mandatory jail: 10 days to 6 months at the low level, or 20 days to 6 months at the high level or for a refusal. The court may allow alternative minimums of 5 days in jail plus 18 days of house arrest (low) or 10 days in jail plus 36 days of house arrest (high or refusal). Fines are $715 to $1,625, and the license suspension is 1 to 7 years with a $315 reinstatement fee. A mandatory alcohol/drug assessment, restricted (yellow) plates and 90-day vehicle immobilization also apply. Limited driving privileges require an ignition interlock and are available only after 45 days (test over) or 90 days (refusal).',
  },
  {
    question: 'Can I get limited driving privileges after a second OVI?',
    answer:
      'Yes, after a hard suspension of 45 days if you took the test and were over the limit, or 90 days if you refused. You can then apply for privileges for work, school, treatment and other necessary driving. For an alcohol-related second OVI, an ignition interlock is required on any vehicle you drive. An attorney can request the ALS hearing within the 30-day deadline and apply for privileges once you are eligible.',
  },
  {
    question: 'Is a second OVI a felony in Ohio?',
    answer:
      'No. A second OVI within 10 years is a first-degree misdemeanor. The offense becomes a fourth-degree felony at a fourth OVI within 10 years, or 5 OVIs within 20 years. A second offense still carries mandatory jail, a 1 to 7 year license suspension, a mandatory interlock for privileges and 90-day immobilization. An attorney can explain your exposure and your options.',
  },
  {
    question: 'What should I do if I am charged with a second OVI?',
    answer:
      'Do not discuss the case with law enforcement or anyone else without your attorney, and contact an OVI defense attorney right away. You have only 30 days from the arrest to request an administrative license suspension hearing. Miss it and you lose the chance to fight the suspension. An attorney can file the ALS appeal, ask for a stay and defend you in criminal court.',
  },
  {
    question: 'Can a second OVI be reduced to a first offense?',
    answer:
      'Sometimes. If the prior OVI that makes this a "second" offense is invalid, outside the lookback period or not properly documented, the charge may be reduced to a first offense. That can mean less jail, a shorter suspension and different rules for privileges and the interlock. An attorney can review your prior record and argue for a reduction where the law supports it.',
  },
  {
    question: 'What are the mandatory minimum jail sentences for a second OVI in Ohio under HB 37?',
    answer:
      'For a low-level second OVI (BAC .08% to under .17%), the mandatory minimum is 10 consecutive days in jail. When permitted, the court may substitute 5 consecutive days in jail plus 18 days of house arrest with electronic monitoring. For a high-level or refusal second OVI (BAC .17% or higher, or a refused chemical test), the minimum doubles to 20 consecutive days, with an alternative of 10 days in jail plus 36 days of house arrest. Fines under HB 37 (effective April 9, 2025) range from $850 to $2,750 for a second offense. The court cannot waive or suspend these minimums.',
  },
  {
    question: 'What is the lookback period for a second OVI in Ohio?',
    answer:
      'Under ORC 4511.19, Ohio uses a 10-year lookback to decide whether a prior OVI counts for sentencing. If your prior OVI falls within 10 years of the current offense date, prosecutors can charge you as a second offender and the higher mandatory minimums apply. A prior from more than 10 years ago generally does not count for mandatory sentencing, though the court may still consider it. An attorney can check the dates on your prior conviction records.',
  },
  {
    question: 'Can a second OVI be reduced or dismissed in Ohio?',
    answer:
      'Sometimes it can be reduced, and in rare cases dismissed. A reduction to a first offense is possible if the prior conviction is successfully challenged: for example, it falls outside the 10-year lookback, was not a qualifying OVI conviction, or came from another state and was not properly counted under Ohio law. Dismissal may follow if evidence is suppressed because of an illegal stop, defective chemical testing or another constitutional violation. Even without a dismissal, negotiated outcomes such as jail plus house arrest can reduce the time actually served. An attorney can review your case and tell you which path is realistic.',
  },
];

const COURTS = [
  { href: '/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court', title: 'Franklin County', subtitle: 'Franklin County Municipal Court' },
  { href: '/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court', title: 'Delaware County', subtitle: 'Delaware County Municipal Court' },
  { href: '/locations/butler-county/ovi-dui-defense-butler-county-area-courts', title: 'Butler County', subtitle: 'Area Courts and Hamilton Municipal Court' },
  { href: '/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court', title: 'Greene County', subtitle: 'Fairborn Municipal Court' },
  { href: '/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court', title: 'Montgomery County', subtitle: 'Dayton Municipal Court' },
  { href: '/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court', title: 'Pickaway County', subtitle: 'Circleville Municipal Court' },
  { href: '/locations/athens-county/ovi-dui-defense-athens-municipal-court', title: 'Athens County', subtitle: 'Athens Municipal Court' },
  { href: '/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court', title: 'Morrow County', subtitle: 'Morrow County Municipal Court' },
  { href: '/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court', title: 'Clinton County', subtitle: 'Wilmington Municipal Court' },
];

const RELATED = [
  { href: '/ovi-dui-defense/first-ovi', title: 'First OVI', subtitle: 'Penalties and defenses for a first offense' },
  { href: '/ovi-dui-defense/third-ovi', title: 'Third OVI', subtitle: 'Mandatory jail and vehicle forfeiture for a third offense' },
  { href: '/ovi-dui-defense/high-tier-ovi', title: 'High-tier OVI', subtitle: 'A BAC of 0.17% or higher and the higher mandatory penalties' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving legally during an OVI suspension' },
];

export default function SecondOVIPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Second OVI defense in Ohio"
        description="A second OVI within 10 years means mandatory jail, a 1 to 7 year license suspension and an ignition interlock before you can drive. You have 30 days to appeal the suspension."
      />

      <KeyFacts
        facts={[
          { figure: '10 days', label: 'minimum jail for a low-level second OVI (20 days at the high level or for a refusal)' },
          { figure: '1 to 7 years', label: 'license suspension' },
          { figure: '45 days', label: 'hard suspension before limited privileges (90 days after a refusal)' },
          { figure: '30 days', label: 'to request the ALS hearing, counted from your arrest' },
        ]}
      />

      <OVIReviews />

      <Section
        title="What a second OVI charge means"
        intro={
          <p>
            A second OVI is operating a vehicle under the influence of alcohol, drugs, or both under Ohio Revised Code 4511.19, with
            a prior OVI inside the lookback period. The penalties are much heavier than for a first offense.
          </p>
        }
      >
        <p>
          A second offense brings mandatory jail time, a long license suspension, a mandatory alcohol or drug assessment, vehicle
          immobilization, restricted (yellow) plates, and an ignition interlock before limited driving privileges are allowed.
        </p>
        <p>
          Ohio sorts the charge into levels. <strong>Low level</strong> means a BAC at or above .08% but below .17%.{' '}
          <strong>High level</strong> means a BAC of .17% or higher. A <strong>refusal</strong> of the chemical test is often treated
          like a high-level test, especially with a prior OVI within 20 years. The level sets the minimum jail term and how long you
          wait before you can apply for limited privileges.
        </p>
        <p>
          Two cases run at once: the criminal case in court and the administrative license suspension (ALS) through the BMV. You have
          only 30 days from the date of arrest to request an ALS hearing. An attorney can handle both, seek a stay of the suspension
          where possible, and work on the result for your license and your record. Read{' '}
          <Link href="/our-law-firm/blog/what-happens-after-ovi-arrest-ohio">what happens after an OVI arrest in Ohio</Link>, part of
          the firm&rsquo;s <Link href="/ovi-dui-defense">OVI/DUI defense practice</Link>, or call (614) 285-5482 to{' '}
          <Link href="/contact">schedule a consultation</Link>.
        </p>
      </Section>

      <Section title="Second OVI penalties in Ohio" tone="ice">
        <p>
          The following reflects current Ohio law as of 2026. Penalties for a second OVI within 10 years are set by the Ohio Revised
          Code and were updated by HB 37 (effective April 2025). They apply whether the offense is alcohol-only, drug-only, or both.
        </p>
        <FactTable
          title="Low-level second OVI (BAC .08% to under .17%)"
          rows={[
            {
              label: 'Jail',
              value:
                '10 days to 6 months. The court may allow an alternative minimum of 5 days in jail plus 18 days of house arrest with electronic monitoring when the law and court allow it.',
            },
            { label: 'Fines', value: '$715 to $1,625, plus court costs.' },
            { label: 'License', value: '1 to 7 years suspension; $315 reinstatement fee when eligible.' },
            { label: 'Limited privileges', value: 'Not available until after 45 days of hard suspension (90 days for a refusal).' },
            { label: 'Ignition interlock', value: 'Required for any alcohol-related second OVI before limited privileges can be granted.' },
            { label: 'Treatment', value: 'Mandatory alcohol/drug assessment, plus any treatment the court orders.' },
            { label: 'Restricted plates', value: 'Required: distinctive yellow/red plates on any vehicle you drive during the suspension.' },
            { label: 'Vehicle', value: '90-day immobilization if the vehicle is registered to you. Six points are added to your license.' },
          ]}
        />
        <FactTable
          title="High-level or refusal second OVI (BAC .17% or higher, or a refused test)"
          rows={[
            {
              label: 'Jail',
              value: '20 days to 6 months. The court may allow an alternative minimum of 10 days in jail plus 36 days of house arrest with electronic monitoring when permitted.',
            },
            { label: 'Fines', value: '$715 to $1,625.' },
            { label: 'License', value: '1 to 7 years suspension; $315 reinstatement fee.' },
            { label: 'Limited privileges', value: 'After 90 days (not 45) if you refused the chemical test.' },
            {
              label: 'Other penalties',
              value: 'Ignition interlock for alcohol-related cases, restricted plates, mandatory assessment and treatment, and 90-day immobilization all still apply.',
            },
          ]}
          note="A refusal is often treated as high level, especially when there is a prior OVI within 20 years."
        />
        <FactTable
          title="Administrative license suspension (ALS)"
          rows={[
            { label: 'Hard suspension', value: '45 days if you took the test and were over the limit; 90 days if you refused. You cannot drive at all during this period.' },
            { label: 'Length', value: 'For a second OVI, the suspension served at arrest can last 1 to 7 years.' },
            { label: 'Privileges', value: 'After the hard suspension, only with an ignition interlock installed (for an alcohol-related OVI).' },
            { label: 'Appeal deadline', value: 'Request the ALS hearing within 30 days of arrest or give up the right to contest the suspension.' },
          ]}
        />
        <h3>Consequences beyond the sentence</h3>
        <p>
          Many employers are reluctant to hire or keep someone with multiple OVIs, and jobs that require driving or a clean record are
          most at risk. Professional licenses (for example nursing, law and aviation) may need to be reported and can face discipline.
          Auto insurance often rises sharply or is dropped, which forces high-risk coverage. Canada may treat OVI as serious criminality
          and deny entry even for an arrest without a conviction. With a commercial driver&apos;s license, a second OVI conviction can
          mean lifetime CDL disqualification. These consequences can last for years.
        </p>
      </Section>

      <Section title="How a second OVI case moves">
        <p>Second OVI cases move on two fronts: the BMV&apos;s administrative license suspension and the criminal case in municipal or county court.</p>
        <h3>The license suspension (ALS)</h3>
        <p>
          At arrest, the officer usually serves an immediate suspension based on a test over the limit or a refusal. You have 30 days
          to request an ALS hearing. At the hearing, your attorney can argue that the stop, arrest or testing was improper and ask for
          the suspension to be set aside or reduced. Your attorney can also ask the court to stay (delay) the suspension until the
          hearing so you can keep driving. Winning the ALS appeal can restore your license sooner and help the criminal case.
        </p>
        <h3>The criminal case</h3>
        <Steps
          steps={[
            { title: 'Arraignment', body: 'You enter a plea, usually not guilty, so your attorney can review discovery and explore defenses.' },
            { title: 'Discovery', body: 'The state must turn over its evidence: reports, video, test results, and calibration and maintenance records.' },
            { title: 'Pretrial motions', body: 'Motions to suppress evidence (an illegal stop, faulty testing) or to dismiss the case.' },
            {
              title: 'Resolution',
              body: 'Many second OVI cases resolve through negotiation: reduced charges, alternative sentencing (jail plus house arrest, treatment), or dismissal under certain conditions. Without an acceptable offer, the case goes to trial before a judge or jury.',
            },
          ]}
        />
      </Section>

      <Section title="Defenses to a second OVI" tone="ice">
        <p>Which defense applies depends on your prior record and on what happened at the stop and the test.</p>
        <PointGrid
          points={[
            {
              title: 'Challenging the prior conviction',
              body: 'The state must prove a qualifying prior OVI within the lookback period (10 years for penalty purposes). If the prior is invalid, misclassified, or from another state and not properly counted, the charge may be treated as a first offense: less jail, a shorter suspension and no mandatory interlock. An attorney can get the prior case file and argue it should not count.',
            },
            {
              title: 'An illegal stop or arrest',
              body: 'Officers need reasonable suspicion to stop your car and probable cause to arrest you for OVI. If either was missing, the court may suppress the evidence that followed, including field sobriety and chemical test results, which can lead to dismissal.',
            },
            {
              title: 'Problems with chemical testing',
              body: 'Breath machines must be maintained and calibrated under state rules, and blood draws must follow proper procedure and chain of custody. Medical conditions, mouth alcohol and operator error can also affect results.',
            },
            {
              title: 'Field sobriety test issues',
              body: 'Standardized tests must be given and scored to approved protocols. Weather, surface, lighting, health or mobility issues, and improper instructions or scoring can make results unreliable. Training manuals and video can show it.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a second OVI">
        <PointGrid
          points={[
            { title: 'Files the ALS appeal', body: 'Before the 30-day deadline, with a request to stay the suspension when appropriate, and represents you at the ALS hearing.' },
            { title: 'Investigates the case', body: 'Police reports, dash and body camera video, breath or blood test records, calibration and maintenance logs, and field sobriety documentation.' },
            { title: 'Challenges the evidence', body: 'Motions to suppress when the stop lacked reasonable suspicion, the arrest lacked probable cause, or testing was flawed (improper calibration, a broken chain of custody, or procedures not followed).' },
            { title: 'Reviews the prior conviction', body: 'Checks whether the prior OVI can make this a second offense. If it cannot, the charge may be reduced to a first offense.' },
            { title: 'Negotiates', body: 'Reduced charges, alternative sentencing (jail plus monitored house arrest, or treatment in place of some jail), or dismissal on completed conditions where the law allows.' },
            { title: 'Gets you driving', body: 'Explains when you become eligible (45 or 90 days), helps with the ignition interlock requirement, and prepares and argues the privilege application.' },
            { title: 'Tries the case', body: 'If it does not settle: challenges the state’s evidence and cross-examines officers and experts at trial.' },
          ]}
        />
      </Section>

      <Section title="Limited driving privileges after a second OVI" tone="ice">
        <p>
          Limited privileges let you drive for specific purposes (work, school, treatment, medical care) during the suspension. First
          you serve a hard suspension with no driving: 45 days if you took the test and were over the limit, or 90 days if you refused.
          For an alcohol-related second OVI, the law requires an ignition interlock on any vehicle you drive, and the court will not
          grant privileges without it.
        </p>
        <p>
          The application goes through the court and must show need and compliance with the interlock and other conditions. See{' '}
          <Link href="/ovi-dui-defense/limited-driving-privileges">limited driving privileges</Link> for the full process.
        </p>
      </Section>

      <Section title="Second OVI defense across Ohio">
        <p>The firm represents clients facing second OVI charges in these counties. Each county page covers its courts.</p>
        <LinkGrid links={COURTS} />
        <h3>Related OVI pages</h3>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
