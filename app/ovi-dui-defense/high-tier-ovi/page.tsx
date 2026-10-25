import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import OVIReviews from '@/components/OVIReviews';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'High-Tier OVI Defense Lawyer in Ohio',
  description:
    'Charged with a high-tier OVI (BAC 0.17% or higher) in Ohio? Doubled mandatory jail minimums, penalties by offense and the defenses that apply.',
  keywords: ['high-tier OVI lawyer Ohio', 'high BAC DUI defense attorney Ohio', 'high-tier OVI attorney'],
  openGraph: {
    title: 'High-Tier OVI Defense Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Penalties, the 30-day ALS appeal and defenses for a high-tier OVI (BAC 0.17% or higher) in Ohio.',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/high-tier-ovi',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/ovi-dui-defense/high-tier-ovi' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'High-Tier OVI', href: '/ovi-dui-defense/high-tier-ovi' },
];

const faqs = [
  {
    question: 'What is high-tier OVI in Ohio?',
    answer:
      'High-tier OVI under Ohio Revised Code 4511.19 applies when your BAC (blood alcohol content) is 0.17% or higher at the time of testing. The mandatory minimum jail terms are double the standard OVI penalties. Even a first offense carries more severe penalties than a standard OVI.',
  },
  {
    question: 'What are the penalties for high-tier OVI in Ohio?',
    answer:
      'Under HB 37 (effective April 2025): a first high-tier OVI carries 6 days to 6 months in jail (6 days mandatory, against 3 days for a standard OVI), fines of $565 to $1,075 and a 1 to 3 year license suspension. A second carries 20 days to 1 year in jail (20 days mandatory), fines of $715 to $1,625 and a 1 to 7 year suspension. A third carries 60 days to 1 year in jail (60 days mandatory), fines of $850 to $2,750, a 2 to 12 year suspension and possible vehicle forfeiture. Every high-tier offense requires a mandatory alcohol assessment and treatment.',
  },
  {
    question: 'Can high-tier OVI charges be reduced?',
    answer:
      'Possibly. Challenges to breathalyzer accuracy, a rising BAC defense, improper testing procedures, or negotiation with the prosecutor can lead to a reduced charge. An attorney can review the evidence and the options to reduce the charge or the penalties.',
  },
  {
    question: 'What is the rising BAC defense for high-tier OVI?',
    answer:
      'It argues that your BAC was under 0.08% while you were driving and rose to 0.17% or higher by the time of the test. The defense needs expert testimony and a careful analysis of timing and consumption. An attorney can tell you whether it fits your case.',
  },
  {
    question: 'What should I do if I am charged with high-tier OVI?',
    answer:
      'Use your rights right away. Do not discuss the case without your attorney present, and contact an OVI defense attorney quickly. You have only 30 days to appeal an administrative license suspension.',
  },
  {
    question: 'What makes an OVI "high-tier" under ORC 4511.19 in Ohio?',
    answer:
      'A chemical test result at or above set thresholds. For a breath test, a BAC of 0.17% or higher. For a blood test, 0.17 grams or more per 100 milliliters of whole blood. For a urine test, 0.238 grams or more per 100 milliliters. These thresholds apply to alcohol; separate per se limits exist for controlled substances and metabolites. High-tier status doubles the mandatory minimum jail time and adds penalties compared with a standard low-tier OVI at the same offense number.',
  },
  {
    question: 'How does a high-tier OVI affect plea negotiations in Ohio?',
    answer:
      'It narrows them, because the mandatory minimums cannot be waived by the court. Prosecutors are generally less willing to reduce a high-tier charge to a standard low-tier OVI without a strong factual reason, such as a credible challenge to the breath result, a strong rising BAC defense, or a problem with the stop or arrest. A result close to the 0.17% threshold may leave more room to argue machine error or calibration. An attorney can weigh the test evidence, find procedural defects, and use them to seek a reduction to low-tier OVI, reckless operation, or alternative sentencing.',
  },
  {
    question: 'What is the difference between a high-tier OVI and a standard refusal OVI in Ohio?',
    answer:
      "Both trigger enhanced penalties under ORC 4511.19, but from different facts. A high-tier OVI means you took the chemical test and the result was 0.17% BAC or above. A refusal OVI means you declined the test after a lawful request, which triggers Ohio's implied consent law (ORC 4511.191) and an automatic license suspension. For a first offense, both carry a 6-day minimum jail term instead of the 3-day low-tier minimum. The ALS periods differ: a high-tier result usually brings a shorter initial ALS than a refusal, which carries a 1-year suspension for a first offense. Prosecutors may also argue that a refusal shows consciousness of guilt. An attorney can assess which designation applies and which defenses are available.",
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
  { href: '/ovi-dui-defense/second-ovi', title: 'Second OVI', subtitle: 'Higher penalties and mandatory jail for a second offense' },
  { href: '/ovi-dui-defense/refusal-ovi', title: 'Refusal OVI', subtitle: 'When you refused the breath or chemical test' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving legally during an OVI suspension' },
];

export default function HighTierOVIPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="High-tier OVI defense in Ohio"
        description="A BAC of 0.17% or higher makes an OVI high tier, and the mandatory minimum jail term doubles. Even on a first offense, the minimum is 6 days."
      />

      <KeyFacts
        facts={[
          { figure: '0.17%', label: 'BAC that makes an OVI high tier, more than double the 0.08% limit' },
          { figure: '6 days', label: 'mandatory jail on a first high-tier OVI, against 3 days for a standard OVI' },
          { figure: '20 days', label: 'mandatory jail on a second high-tier OVI (60 days on a third)' },
          { figure: '30 days', label: 'to appeal the administrative license suspension, counted from your arrest' },
        ]}
      />

      <OVIReviews />

      <Section
        title="What a high-tier OVI charge means"
        intro={
          <p>
            High-tier OVI under Ohio Revised Code 4511.19 applies when your BAC is 0.17% or higher at the time of testing. That is
            more than double the legal limit of 0.08%.
          </p>
        }
      >
        <p>
          High tier carries enhanced penalties, including mandatory minimum jail terms that are double the standard OVI penalties.
          This applies even to a first offense. The defenses that matter most, including the rising BAC defense, are covered below.
        </p>
        <p>
          The case runs on two tracks: criminal court and the administrative license suspension (ALS) hearing. They are separate and
          need different strategies. The ALS hearing must be requested within 30 days of arrest; the criminal case follows its own
          timeline. For costs, read{' '}
          <Link href="/our-law-firm/blog/how-much-does-dui-cost-ohio">how much a DUI costs in Ohio</Link>, part of the firm&rsquo;s{' '}
          <Link href="/ovi-dui-defense">OVI/DUI defense practice</Link>, or call (614) 285-5482 to{' '}
          <Link href="/contact">schedule a consultation</Link>.
        </p>
      </Section>

      <Section title="High-tier OVI penalties in Ohio" tone="ice">
        <p>Under Ohio Revised Code 4511.19, high-tier convictions carry penalties well above a standard OVI.</p>
        <FactTable
          title="First high-tier OVI (current 2026 Ohio law, HB 37)"
          rows={[
            { label: 'Jail', value: '6 days to 6 months (6 days mandatory, against 3 days for a standard OVI).' },
            { label: 'Fines', value: '$565 to $1,075 (the minimum rose from $375 under HB 37).' },
            { label: 'License suspension', value: '1 to 3 years (longer than a standard OVI).' },
            { label: 'Reinstatement fee', value: '$315 (reduced from $475).' },
            { label: 'Vehicle immobilization', value: '90 days (per ORC 4511.19).' },
            { label: 'Yellow plates', value: 'Required for 90 days.' },
            { label: 'Assessment and treatment', value: 'Mandatory alcohol assessment and treatment program.' },
          ]}
        />
        <FactTable
          title="Second high-tier OVI"
          rows={[
            { label: 'Jail', value: '20 days to 1 year (20 days mandatory, against 10 days standard).' },
            { label: 'Fines', value: '$715 to $1,625 (the minimum rose from $525 under HB 37).' },
            { label: 'License suspension', value: '1 to 7 years (longer than a standard OVI).' },
            { label: 'Vehicle immobilization', value: '90 days.' },
            { label: 'Yellow plates', value: 'Required for 90 days.' },
            { label: 'Assessment and treatment', value: 'Mandatory alcohol assessment and treatment program.' },
          ]}
        />
        <FactTable
          title="Third high-tier OVI"
          rows={[
            { label: 'Jail', value: '60 days to 1 year (60 days mandatory, against 30 days for a standard third OVI).' },
            { label: 'Fines', value: '$850 to $2,750 (enhanced under HB 37).' },
            { label: 'License suspension', value: '2 to 12 years.' },
            { label: 'Vehicle forfeiture', value: 'The vehicle may be subject to criminal forfeiture.' },
            { label: 'Yellow plates', value: 'Required.' },
            { label: 'Ignition interlock', value: 'Required upon license reinstatement.' },
            { label: 'Assessment and treatment', value: 'Mandatory alcohol assessment and treatment program.' },
          ]}
        />
        <h3>Consequences beyond the sentence</h3>
        <p>
          A high-tier conviction often raises insurance rates 4-5x for 7-10 years. It can create barriers to employment, restrict
          professional licenses, and leaves a permanent criminal record. High-tier status can also enhance the penalties on any future
          OVI charge.
        </p>
      </Section>

      <Section title="How a high-tier OVI case moves">
        <h3>The license suspension (ALS)</h3>
        <p>
          Within 30 days of arrest, you must file an appeal of the ALS or lose the right to challenge it. For high tier, the ALS
          suspension is longer than for a standard OVI. An attorney can file the appeal, request a stay of the suspension and
          represent you at the hearing. Winning the ALS appeal can restore your license and strengthen the criminal defense.
        </p>
        <h3>The criminal case</h3>
        <p>
          High-tier cases are heard in Municipal Court for first and second offenses, or Common Pleas Court for felony offenses.
        </p>
        <Steps
          steps={[
            { title: 'Arraignment', body: 'You enter a plea, usually not guilty.' },
            { title: 'Discovery', body: 'The prosecution must hand over all of its evidence.' },
            { title: 'Pretrial motions', body: 'Motions can challenge the evidence or ask for dismissal.' },
            { title: 'Resolution', body: 'Most cases resolve through plea negotiations. Trial is an option.' },
          ]}
        />
        <h3>Limited driving privileges</h3>
        <p>
          Limited privileges after a high-tier OVI are available but may require an ignition interlock. Eligibility depends on the
          circumstances and needs court approval, and the application must show necessity. An attorney can prepare it and present the
          evidence of need. See <Link href="/ovi-dui-defense/limited-driving-privileges">limited driving privileges</Link>.
        </p>
      </Section>

      <Section title="Defenses to a high-tier OVI" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Rising BAC',
              body: 'Your BAC may have been under 0.08% while driving and risen to 0.17% or higher by the time of the test. This needs expert testimony and analysis of timing and consumption, and it can reduce a high-tier charge to a standard OVI or lead to dismissal.',
            },
            {
              title: 'Inaccurate breathalyzer results',
              body: 'Breath machines must be calibrated, maintained and operated by trained officers. Medical conditions, recent drinking or improper procedure can affect the result. Maintenance records and operator qualifications can be challenged.',
            },
            {
              title: 'An illegal traffic stop',
              body: 'Police need reasonable suspicion of a traffic violation or crime to stop you. If the stop was illegal, the evidence that followed may be suppressed, which can end the case.',
            },
            {
              title: 'Field sobriety tests',
              body: 'These tests are subjective and can be affected by medical conditions, weather, road conditions or improper administration. Their administration, scoring and reliability can be challenged.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a high-tier OVI">
        <PointGrid
          points={[
            { title: 'Files the ALS appeal', body: 'Within the 30-day deadline, with a request to stay the suspension, and represents you at the ALS hearing.' },
            { title: 'Investigates the stop', body: 'Police reports, dashcam and bodycam footage, breathalyzer maintenance records, field sobriety test procedures and all other evidence.' },
            { title: 'Challenges the evidence', body: 'Breathalyzer maintenance and calibration, NHTSA protocol violations in field sobriety tests, blood test chain of custody, and improperly obtained evidence through pretrial motions.' },
            { title: 'Builds a rising BAC defense', body: 'When the facts support it, with expert testimony and analysis of the timing.' },
            { title: 'Raises other defenses', body: 'An illegal stop, lack of probable cause, medical conditions that affected testing, or insufficient evidence.' },
            { title: 'Negotiates', body: 'A reduction from high tier to standard OVI, a better plea agreement, alternative sentencing including treatment, or dismissal on completed conditions.' },
            { title: 'Gets you driving', body: 'Applies for limited privileges for work, school, treatment and other necessary driving, and represents you in court.' },
            { title: 'Tries the case', body: 'Cross-examines officers and expert witnesses and brings in toxicology experts if the case goes to trial.' },
          ]}
        />
      </Section>

      <Section title="High-tier OVI defense across Ohio" tone="ice">
        <p>Each county page covers its courts and what to expect locally.</p>
        <LinkGrid links={COURTS} />
        <h3>Related OVI pages</h3>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
