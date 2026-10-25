import RelatedArticles from '@/components/practice/RelatedArticles';
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import OVIReviews from '@/components/OVIReviews';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Third OVI Attorney in Ohio',
  description:
    'Facing third OVI charges in Ohio? A third OVI defense attorney on mandatory jail, the 2 to 12 year suspension, the ALS hearing, vehicle forfeiture and defenses.',
  keywords: ['third OVI attorney Ohio', 'third OVI defense attorney Ohio', 'third DUI attorney', 'OVI attorney', 'third OVI charges', 'ALS hearing', 'Ohio OVI laws'],
  openGraph: {
    title: 'Third OVI Attorney in Ohio | Jwayyed Law LLC',
    description: 'Penalties, vehicle forfeiture, the 30-day ALS appeal and defenses for a third OVI charge in Ohio.',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/third-ovi',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/ovi-dui-defense/third-ovi' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Third OVI', href: '/ovi-dui-defense/third-ovi' },
];

const faqs = [
  {
    question: 'What are the penalties for a third OVI in Ohio?',
    answer:
      'A third OVI within 10 years is a first-degree misdemeanor. At the low level: 30 days to 1 year in jail (alternative minimum of 15 days in jail plus 55 days of house arrest), fines of $1,040 to $2,750, a 2 to 12 year license suspension ($315 reinstatement fee), a mandatory alcohol/drug addiction program, restricted plates, an ignition interlock for limited privileges, and criminal forfeiture of the vehicle if it is registered to you. At the high level or for a refusal: 60 days to 1 year in jail (alternative of 30 days in jail plus 110 days of house arrest), and limited privileges only after 180 days (test over) or one year (refusal).',
  },
  {
    question: 'Is a third OVI a felony in Ohio?',
    answer:
      'No. A third OVI within 10 years is still a first-degree misdemeanor. The offense becomes a fourth-degree felony at a fourth OVI within 10 years, or 5 OVIs within 20 years. A third offense still carries mandatory jail (30 to 60 days minimum depending on the level), a 2 to 12 year license suspension, vehicle forfeiture and strict rules for limited privileges. An attorney can explain your exposure and your options.',
  },
  {
    question: 'Can I get limited driving privileges after a third OVI?',
    answer:
      'Yes, after a hard suspension of 180 days if you took the test and were over the limit, or one year if you refused. You can then apply for privileges for work, school, treatment and other necessary driving. For an alcohol-related third OVI, an ignition interlock is required on any vehicle you drive. An attorney can request the ALS hearing within the 30-day deadline and apply for privileges once you are eligible.',
  },
  {
    question: 'What should I do if I am charged with a third OVI?',
    answer:
      'Do not discuss the case with law enforcement or anyone else without your attorney, and contact an OVI defense attorney right away. You have only 30 days from the arrest to request an administrative license suspension hearing. Miss it and you lose the chance to fight the suspension. An attorney can file the ALS appeal, ask for a stay and defend you in criminal court.',
  },
  {
    question: 'Can a third OVI be reduced to a second or first offense?',
    answer:
      'Sometimes. If one or both of the prior OVIs that make this a "third" offense are invalid, outside the lookback period or not properly documented, the charge may be reduced to a second or first offense. That can mean less jail, a shorter suspension, no vehicle forfeiture and different rules for privileges. An attorney can review your prior record and argue for a reduction where the law supports it.',
  },
  {
    question: 'What are the jail and fine penalties for a third OVI in Ohio under HB 37?',
    answer:
      'Under ORC 4511.19 as updated by HB 37 (effective April 9, 2025), a low-level third OVI (BAC .08% to under .17%) carries a mandatory minimum of 30 consecutive days in jail, or an alternative of 15 consecutive days in jail plus 55 days of house arrest with electronic monitoring. A high-level or refusal third OVI (BAC .17% or higher, or a test refusal) requires 60 consecutive days minimum, or 30 days in jail plus 110 days of house arrest. Fines range from $850 to $2,750. The license suspension is 2 to 10 years, and the vehicle may be subject to criminal forfeiture if it is registered to you. The court cannot waive these minimums.',
  },
  {
    question: 'Are ignition interlock devices required for a third OVI in Ohio?',
    answer:
      'Yes. For any alcohol-related third OVI, an ignition interlock device (IID) is required before the court will grant limited driving privileges, and it must be installed on every vehicle you drive during the privilege period. You cannot apply until after a hard suspension of 180 days (test over the limit) or one year (refusal). Then you must show proof of the IID installation and get court approval. The IID requirement lasts for the whole privilege period. An attorney can help with the installation process and prepare the privilege application.',
  },
  {
    question: 'How does the 10-year lookback period affect a third OVI charge in Ohio?',
    answer:
      "Ohio's 10-year lookback under ORC 4511.19 means only prior OVI convictions within 10 years of the current offense date count toward enhanced sentencing. For third-offense minimums (30 or 60 days in jail, a 2 to 10 year suspension, vehicle forfeiture), prosecutors must show two qualifying prior OVIs inside that 10-year window. If one or both fall outside it, the mandatory penalties are lower. An attorney reviews the dates and records of each prior conviction and whether any can be challenged as improperly counted.",
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
  { href: '/ovi-dui-defense/second-ovi', title: 'Second OVI', subtitle: 'Higher penalties and mandatory jail for a second offense' },
  { href: '/ovi-dui-defense/high-tier-ovi', title: 'High-tier OVI', subtitle: 'A BAC of 0.17% or higher and the higher mandatory penalties' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving legally during an OVI suspension' },
  { href: '/ovi-dui-defense/driving-under-ovi-suspension', title: 'Driving under OVI suspension', subtitle: 'When you are charged with driving while suspended for an OVI' },
];

export default function ThirdOVIPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Third OVI defense in Ohio"
        description="A third OVI within 10 years is still a first-degree misdemeanor, but it carries mandatory jail, a 2 to 12 year suspension and forfeiture of a vehicle registered to you."
      />

      <KeyFacts
        facts={[
          { figure: '30 days', label: 'minimum jail for a low-level third OVI (60 days at the high level or for a refusal)' },
          { figure: '2 to 12 years', label: 'license suspension' },
          { figure: '180 days', label: 'hard suspension before limited privileges (one year after a refusal)' },
          { figure: '30 days', label: 'to request the ALS hearing, counted from your arrest' },
        ]}
      />

      <OVIReviews />

      <Section
        title="Understanding third OVI charges"
        intro={
          <p>
            A third OVI within 10 years, under Ohio OVI laws in Ohio Revised Code 4511.19, is still a first-degree misdemeanor. The penalties are much
            heavier than for a first or second offense.
          </p>
        }
      >
        <p>
          They include mandatory jail (30 days to one year, more at the high level or for a refusal), large fines, a 2 to 12 year
          license suspension, a mandatory alcohol/drug addiction program, restricted (yellow) plates, a mandatory ignition interlock
          for limited driving privileges, and criminal forfeiture of the vehicle if it is registered to you.
        </p>
        <p>
          Ohio sorts the charge into levels. <strong>Low level</strong> means a BAC at or above .08% but below .17%.{' '}
          <strong>High level</strong> means a BAC of .17% or higher. A <strong>refusal</strong> of the chemical test is often treated
          like a high-level test. High level or refusal means a higher minimum jail term and a longer wait for limited privileges. A
          fourth OVI within 10 years (or 5 OVIs within 20 years) becomes a fourth-degree felony.
        </p>
        <p>
          Two cases run at once: the criminal case in municipal or county court and the administrative license suspension (ALS)
          through the BMV. You have only 30 days from the date of arrest to request an ALS hearing. Read{' '}
          <Link href="/our-law-firm/blog/what-happens-after-ovi-arrest-ohio">what happens after an OVI arrest in Ohio</Link>, part of
          the firm&rsquo;s <Link href="/ovi-dui-defense">OVI/DUI defense practice</Link>, or call (614) 285-5482 to{' '}
          <Link href="/contact">schedule a consultation</Link>.
        </p>
      </Section>

      <Section
        title="What to do after a third OVI arrest"
        tone="ice"
        intro={
          <p>
            File the ALS appeal before its 30-day deadline, and start checking both prior OVIs right away. A third offense needs two
            qualifying priors inside the 10-year lookback, and if either one fails, the penalties drop.
          </p>
        }
      >
        <Steps
          steps={[
            {
              title: 'Mark the 30-day ALS deadline',
              body: 'The suspension served at arrest stays in place unless it is appealed. An appeal filed in time, with a request for a stay, can let you keep driving until the hearing. Miss the deadline and the right to contest the suspension is gone.',
            },
            {
              title: 'Do not discuss the case',
              body: 'Do not talk about the arrest with law enforcement or anyone else unless your attorney is there.',
            },
            {
              title: 'Gather what you know about both priors',
              body: 'The dates of the earlier offenses, the courts that handled them and any paperwork you kept. A prior outside the 10-year window, from another state and not properly counted, or not a qualifying OVI conviction may not count toward a third offense.',
            },
            {
              title: 'Plan for a long hard suspension',
              body: 'You cannot drive at all for 180 days after a test over the limit, or one year after a refusal. Driving on the suspension is a separate charge under ORC 4510.14, so arrange transport to work and court now.',
            },
            {
              title: 'Think about the vehicle',
              body: 'A vehicle registered to you faces criminal forfeiture on a third OVI conviction. Forfeiture applies only to a third offense, so a successful challenge to a prior can keep the vehicle.',
            },
          ]}
        />
      </Section>

      <Section title="Third OVI penalties in Ohio">
        <p>
          The following reflects current Ohio law as of 2026. Penalties for a third OVI within 10 years are set by the Ohio Revised
          Code and were updated by HB 37 (effective April 2025). They apply whether the offense is alcohol-only, drug-only, or both.
        </p>
        <FactTable
          title="Low-level third OVI (BAC .08% to under .17%)"
          rows={[
            {
              label: 'Jail',
              value:
                '30 days to 1 year. The court may allow an alternative minimum of 15 days in jail plus 55 days of house arrest with electronic monitoring when the law and court allow it.',
            },
            { label: 'Fines', value: '$1,040 to $2,750, plus court costs.' },
            { label: 'License', value: '2 to 12 years suspension; $315 reinstatement fee when eligible.' },
            { label: 'Limited privileges', value: 'Not available until after 180 days of hard suspension (one year for a refusal).' },
            { label: 'Ignition interlock', value: 'Required for any alcohol-related third OVI before limited privileges can be granted.' },
            { label: 'Treatment', value: 'Mandatory alcohol/drug addiction program.' },
            { label: 'Restricted plates', value: 'Required: distinctive yellow/red plates on any vehicle you drive during the suspension.' },
            { label: 'Vehicle', value: 'Criminal forfeiture of the vehicle if it is registered to you. Six points are added to your license.' },
          ]}
        />
        <FactTable
          title="High-level or refusal third OVI (BAC .17% or higher, or a refused test)"
          rows={[
            {
              label: 'Jail',
              value: '60 days to 1 year. The court may allow an alternative minimum of 30 days in jail plus 110 days of house arrest with electronic monitoring when permitted.',
            },
            { label: 'Fines', value: '$1,040 to $2,750.' },
            { label: 'License', value: '2 to 12 years suspension; $315 reinstatement fee.' },
            { label: 'Limited privileges', value: 'After one full year (not 180 days) if you refused the chemical test.' },
            {
              label: 'Other penalties',
              value: 'Ignition interlock for alcohol-related cases, restricted plates, the mandatory alcohol/drug addiction program, and vehicle forfeiture (if registered to you) all still apply.',
            },
          ]}
          note="A refusal is often treated as high level, especially when there is a prior OVI within 20 years."
        />
        <FactTable
          title="Administrative license suspension (ALS)"
          rows={[
            { label: 'Hard suspension', value: '180 days if you took the test and were over the limit; one year if you refused. You cannot drive at all during this period.' },
            { label: 'Length', value: 'For a third OVI, the suspension served at arrest can last 2 to 12 years.' },
            { label: 'Privileges', value: 'After the hard suspension, only with an ignition interlock installed (for an alcohol-related OVI).' },
            { label: 'Appeal deadline', value: 'Request the ALS hearing within 30 days of arrest or give up the right to contest the suspension.' },
          ]}
        />
        <h3>Consequences for your job, license and your record</h3>
        <p>
          Many employers are reluctant to hire or keep someone with multiple OVIs, and jobs that require driving or a clean record are
          most at risk. Professional licenses (for example nursing, law and aviation) may need to be reported and can face discipline.
          Auto insurance often rises sharply or is dropped, which forces high-risk coverage. Canada may treat OVI as serious criminality
          and deny entry even for an arrest without a conviction. With a commercial driver&apos;s license, a second OVI conviction
          (including a third overall) can mean lifetime CDL disqualification. These consequences can last for years.
        </p>
      </Section>

      <Section
        title="What a third OVI can cost"
        tone="ice"
        intro={
          <p>
            On a third OVI the vehicle itself is at stake, on top of fines, fees, interlock charges and high-risk insurance.
          </p>
        }
      >
        <FactTable
          title="Costs that follow a third OVI conviction"
          rows={[
            { label: 'Fine', value: '$1,040 to $2,750, plus court costs.' },
            { label: 'Reinstatement fee', value: '$315 when you are eligible to get your license back.' },
            { label: 'Vehicle', value: 'Criminal forfeiture if it is registered to you, and restricted (yellow) plates on any vehicle you drive.' },
            {
              label: 'Ignition interlock',
              value:
                'Required for privileges after an alcohol-related third OVI. Installation typically $75 to $150, and monthly monitoring typically $60 to $80, paid by the driver.',
            },
            { label: 'Insurance', value: 'Coverage often rises sharply or is dropped, which forces high-risk coverage.' },
            { label: 'Proof of insurance', value: 'Courts typically require current insurance, often an SR-22, before you drive on privileges.' },
            { label: 'Treatment', value: 'A mandatory alcohol/drug addiction program.' },
            {
              label: 'Time',
              value: 'At least 30 consecutive days in jail (60 at the high level or for a refusal), or the jail plus house arrest alternative, and 180 days or one year with no driving.',
            },
          ]}
          note="Fine and fee figures are the statutory amounts. Interlock costs are typical provider charges."
        />
      </Section>

      <Section title="What happens at each stage of a third OVI case">
        <p>
          Third OVI cases move on two fronts: the BMV&apos;s administrative license suspension and the criminal case. As a first-degree
          misdemeanor, a third OVI is heard in municipal or county court.
        </p>
        <h3>The ALS license suspension process</h3>
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
              title: 'Plea or trial',
              body: 'Many third OVI cases resolve through negotiation: reduced charges (to a second or first offense if a prior is successfully challenged), alternative sentencing (jail plus house arrest, treatment), or dismissal under certain conditions. Without an acceptable offer, the case goes to trial before a judge or jury.',
            },
            {
              title: 'Sentencing',
              body: 'After a conviction, the court must impose at least the mandatory minimum jail term (30 or 60 consecutive days, or the jail plus house arrest alternative when allowed) and cannot waive it. It also sets the fine, the 2 to 12 year suspension, the addiction program, the yellow plates and forfeiture of a vehicle registered to you.',
            },
          ]}
        />
      </Section>

      <Section
        title="How a third OVI case can end"
        tone="ice"
        intro={
          <p>
            A third OVI can be dismissed, reduced to a second or first offense, resolved by a negotiated plea or tried. The two priors
            and the evidence from the stop decide which is realistic.
          </p>
        }
      >
        <PointGrid
          points={[
            {
              title: 'Reduction to a second or first offense',
              body: 'If one or both priors are invalid, outside the lookback or not properly documented, the charge may drop a level: less jail, a shorter suspension, no vehicle forfeiture and different rules for privileges.',
            },
            {
              title: 'Dismissal',
              body: 'Possible when the stop lacked reasonable suspicion, the arrest lacked probable cause or the testing was flawed, and the court suppresses the evidence that followed.',
            },
            {
              title: 'A negotiated sentence',
              body: 'Alternative sentencing, such as jail plus monitored house arrest or treatment, can reduce the time actually served even when the charge stands.',
            },
            {
              title: 'Trial',
              body: 'Without an acceptable offer, a judge or jury decides. The defense challenges the state’s evidence and cross-examines the officers and experts.',
            },
          ]}
        />
        <p>
          The firm works through each path with you: whether to fight the ALS, push for a reduction to a second or first offense,
          accept a negotiated resolution or go to trial, and the pros and cons of each.
        </p>
        <Callout title="Where the felony line sits">
          A fourth OVI within 10 years, or 5 OVIs within 20 years, becomes a fourth-degree felony. How a third case ends also sets
          what any later charge would be.
        </Callout>
      </Section>

      <Section title="Third OVI defense strategies">
        <p>Which defense applies depends on your prior record and on what happened at the stop and the test.</p>
        <PointGrid
          points={[
            {
              title: 'Challenging the prior convictions',
              body: 'The state must prove two qualifying prior OVIs within the lookback period. If one or both are invalid, misclassified, or from another state and not properly counted, the charge may be treated as a second or first offense: less jail, a shorter suspension, no vehicle forfeiture (which applies only to a third offense) and different privilege rules.',
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

      <Section title="How a third OVI defense attorney handles your case" tone="ice">
        <PointGrid
          points={[
            { title: 'Files the ALS appeal', body: 'Before the 30-day deadline, with a request to stay the suspension when appropriate, and represents you at the ALS hearing.' },
            { title: 'Investigates the case', body: 'Police reports, dash and body camera video, breath or blood test records, calibration and maintenance logs, and field sobriety documentation.' },
            { title: 'Reviews the prior convictions', body: 'Checks whether each prior OVI can make this a third offense. If one cannot, the charge may drop to a second or first offense and forfeiture may be avoided.' },
            { title: 'Challenges the evidence', body: 'Motions to suppress when the stop lacked reasonable suspicion, the arrest lacked probable cause, or testing was flawed (improper calibration, a broken chain of custody, or procedures not followed).' },
            { title: 'Negotiates', body: 'Reduced charges (for example to a second offense), alternative sentencing (jail plus monitored house arrest, or treatment), or dismissal on completed conditions where the law allows.' },
            { title: 'Gets you driving', body: 'Explains when you become eligible (180 days or one year), helps with the ignition interlock requirement, and prepares and argues the privilege application.' },
            { title: 'Tries the case', body: 'If it does not settle: challenges the state’s evidence and cross-examines officers and experts at trial.' },
          ]}
        />
      </Section>

      <Section title="Limited driving privileges after a third OVI">
        <p>
          Limited privileges let you drive for specific purposes (work, school, treatment, medical care) during the suspension. First
          you serve a hard suspension with no driving: 180 days if you took the test and were over the limit, or one year if you
          refused. For an alcohol-related third OVI, the law requires an ignition interlock on any vehicle you drive, and the court will
          not grant privileges without it.
        </p>
        <p>
          The application goes through the court and must show need and compliance with the interlock and other conditions. See{' '}
          <Link href="/ovi-dui-defense/limited-driving-privileges">limited driving privileges</Link> for the full process.
        </p>
      </Section>

      <Section title="Third OVI defense across Ohio" tone="ice">
        <p>The firm represents clients facing third OVI charges in these counties. Each county page covers its courts.</p>
        <LinkGrid links={COURTS} />
        <h3>Related OVI pages</h3>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <RelatedArticles category="OVI/DUI" title="Articles on Ohio OVI and DUI" slugs={["can-ovi-be-expunged-ohio", "limited-driving-privileges-after-ovi-ohio", "how-much-does-dui-cost-ohio"]} />
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
