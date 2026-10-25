import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import OVIReviews from '@/components/OVIReviews';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';
import { oviServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Ohio OVI / DUI Defense Attorney',
  description:
    'Ohio OVI/DUI defense for first, second, third and felony OVI charges statewide: penalties, the 30-day license suspension appeal and defenses. Call (614) 285-5482.',
  keywords: [
    'Ohio OVI attorney',
    'Ohio DUI attorney',
    'Ohio OVI defense attorney',
    'OVI defense Ohio',
    'DUI defense attorney Ohio',
    'first OVI defense',
  ],
  openGraph: {
    title: 'Ohio OVI / DUI Defense Attorney | Jwayyed Law LLC',
    description: 'OVI/DUI defense throughout Ohio, from a first offense to a felony. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/ovi-dui-defense',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/ovi-dui-defense',
  },
};

const breadcrumbItems = [{ label: 'OVI / DUI Defense', href: '/ovi-dui-defense' }];

const faqs = [
  {
    question: 'What is the difference between OVI and DUI in Ohio?',
    answer:
      'Ohio uses the term OVI (Operating a Vehicle Impaired) instead of DUI (Driving Under the Influence). OVI under Ohio Revised Code 4511.19 means operating a vehicle while impaired by alcohol, drugs, or both. The terms are often used interchangeably, but OVI is the legal term in Ohio. An OVI can be charged on a BAC of 0.08% or higher, or on evidence of impairment whatever the BAC.',
  },
  {
    question: 'What are the penalties for a first OVI in Ohio?',
    answer:
      "A first OVI in Ohio is a first-degree misdemeanor. At the low level, jail is 3 days to 6 months (the court may allow a 3-day Driver Intervention Program instead, or waive jail with an ignition interlock). Fines are $565 to $1,075 and the license suspension is 1 to 3 years with a $315 reinstatement fee. Limited privileges come after 15 days (30 for a refusal), and the 15-day wait may be waived with no prior Physical Control conviction. Treatment and restricted plates are optional at the court's discretion. At the high level or for a refusal, the minimum jail is 6 days.",
  },
  {
    question: 'Can I refuse a breathalyzer test in Ohio?',
    answer:
      "You can, but refusing has serious consequences. Under Ohio's implied consent law (ORC 4511.191), refusing a chemical test brings an automatic license suspension of 1 year for a first offense, and longer for later offenses. The refusal can also be used as evidence against you and may lead to higher penalties. There are circumstances where a refusal may be legally justified. If you refused testing, talk to an attorney right away.",
  },
  {
    question: 'What is a high-tier OVI in Ohio?',
    answer:
      'A high-tier OVI under Ohio Revised Code 4511.19 is a BAC of 0.17% or higher. It carries higher penalties: mandatory jail (6 days minimum for a first offense), higher fines, longer license suspensions, and mandatory alcohol assessment and treatment. Prior convictions raise the penalties further.',
  },
  {
    question: 'Can I get limited driving privileges after an OVI suspension in Ohio?',
    answer:
      'Yes, depending on the offense. First OVI: after 15 days (30 for a refusal); the 15-day wait may be waived with no prior Physical Control conviction, and the interlock is optional unless you have that prior. Second OVI: after 45 days (90 for a refusal), interlock required. Third OVI: after 180 days (1 year for a refusal), interlock required. Privileges usually cover driving for work, school, treatment and other necessary trips. An attorney can request the ALS hearing (30-day deadline) and apply for privileges when you are eligible.',
  },
  {
    question: 'What are the OVI lookback periods in Ohio?',
    answer:
      'Ohio uses two lookback windows under ORC 4511.19. A 10-year lookback counts prior offenses for sentencing: a prior OVI conviction within 10 years of the current offense date decides whether you face first, second or third offense penalties. A 20-year lookback applies in limited situations, such as whether a refusal is treated as high tier when there is a prior OVI within 20 years. There is no separate "6-year" lookback in current Ohio OVI law for penalty enhancement. An attorney can review your record to see which convictions fall inside each window and whether any priors can be challenged.',
  },
  {
    question: 'What is an ALS and how do you appeal it in Ohio?',
    answer:
      "An Administrative License Suspension (ALS) is an automatic suspension imposed by the BMV under Ohio's implied consent law (ORC 4511.191) when you are arrested for OVI and fail or refuse a chemical test. It is separate from any court-ordered suspension and starts at arrest. To challenge it, a written appeal must be filed with the court within 30 days of the arrest. Missing that deadline permanently waives the right to contest the suspension. With the appeal, your attorney can ask for a stay, which lets you keep driving while the appeal is pending. At the hearing, the court looks at whether the officer had reasonable grounds to stop you and request testing, whether the arrest was lawful, and whether testing was done properly. Winning can restore your license and may help the criminal defense.",
  },
  {
    question: 'What changed under HB 37 (effective April 9, 2025) for Ohio OVI cases?',
    answer:
      "HB 37, known as Liv's Law, took effect on April 9, 2025, and changed several parts of Ohio OVI law under ORC 4511.19. It updated fine ranges at every offense level (a first OVI fine now starts at $565 instead of the prior $375 minimum). It authorized oral fluid (saliva) testing as a chemical test under implied consent, with results admissible in court. It clarified that the 15-day hard suspension can be waived for a non-refusal first OVI with no prior Physical Control conviction. And it updated the reinstatement fee ($315). The law is named after a victim of an OVI crash. An attorney who knows HB 37 can explain how it affects your charges.",
  },
];

const COUNTIES = [
  { href: '/locations/franklin-county/ovi-dui-defense-franklin-county-municipal-court', title: 'Franklin County', subtitle: 'Columbus and Franklin County Municipal Court' },
  { href: '/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court', title: 'Delaware County', subtitle: 'Delaware County Municipal Court' },
  { href: '/locations/butler-county/ovi-dui-defense-butler-county-area-courts', title: 'Butler County', subtitle: 'Area Courts and Hamilton Municipal Court' },
  { href: '/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court', title: 'Greene County', subtitle: 'Fairborn Municipal Court' },
  { href: '/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court', title: 'Montgomery County', subtitle: 'Dayton Municipal Court' },
  { href: '/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court', title: 'Pickaway County', subtitle: 'Circleville Municipal Court' },
  { href: '/locations/athens-county/ovi-dui-defense-athens-municipal-court', title: 'Athens County', subtitle: 'Athens Municipal Court' },
  { href: '/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court', title: 'Morrow County', subtitle: 'Morrow County Municipal Court' },
  { href: '/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court', title: 'Clinton County', subtitle: 'Wilmington Municipal Court' },
];

export default function OVIDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio OVI and DUI defense"
        description="OVI charges at every level, from a first offense to a felony, in courts across Ohio. An arrest starts two cases at once, and the license suspension appeal has a 30-day deadline."
      />

      <Section title="Find your charge" intro={<p>Each page covers the penalties, the process and the defenses for that charge.</p>}>
        <LinkGrid links={oviServices.map((s) => ({ href: s.href, title: s.title, subtitle: s.description }))} />
      </Section>

      <KeyFacts
        facts={[
          { figure: '0.08%', label: 'BAC at which an OVI can be charged; impairment alone can also support the charge' },
          { figure: '0.17%', label: 'BAC that makes it a high-tier OVI, with higher penalties even for a first offense' },
          { figure: '30 days', label: 'to appeal the administrative license suspension after the arrest' },
          { figure: '10 years', label: 'lookback for counting prior OVIs at sentencing' },
        ]}
      />

      <Section
        title="What OVI means in Ohio"
        tone="ice"
        intro={
          <p>
            OVI, Operating a Vehicle Impaired, is Ohio&rsquo;s term for DUI, charged under Ohio Revised Code 4511.19. The firm defends
            OVI cases under current law, including HB 37 (Liv&rsquo;s Law, effective April 2025; current as of 2026).
          </p>
        }
      >
        <p>
          An OVI covers impairment by alcohol, drugs (including marijuana, prescription drugs and controlled substances), or both. The
          charge can rest on a BAC of 0.08% or higher, on evidence of impairment, or on oral fluid or other chemical testing authorized
          under HB 37. The same penalties apply whether the offense involves alcohol, drugs or both, and they rise sharply with each
          later offense.
        </p>
        <p>
          A conviction brings criminal penalties, a license suspension, higher insurance and a permanent criminal record. Employers who
          run background checks may refuse to hire, particularly for driving jobs. Professional licenses in commercial driving,
          transportation and security may be denied or revoked. Insurance rates often rise 2 to 3 times for 3 to 5 years, and
          financial aid eligibility can be affected.
        </p>
      </Section>

      <Section title="Ohio OVI penalties by offense">
        <p>Offenses are counted within a 10-year lookback. Each level has its own mandatory minimums.</p>
        <FactTable
          title="First OVI (within 10 years)"
          rows={[
            {
              label: 'Jail',
              value:
                'Low level: 3 days to 6 months (the court may allow a 3-day DIP instead, or waive jail with an interlock). High level or refusal: 6 days to 6 months minimum.',
            },
            { label: 'Fines', value: '$565 to $1,075.' },
            { label: 'License', value: '1 to 3 years ($315 reinstatement fee).' },
            {
              label: 'Limited privileges',
              value:
                "After 15 days (30 for a refusal); the 15-day wait may be waived with no prior Physical Control. Interlock, treatment and restricted plates are optional at the court's discretion (interlock required with a prior Physical Control).",
            },
          ]}
        />
        <FactTable
          title="Second OVI (within 10 years)"
          rows={[
            {
              label: 'Jail',
              value:
                'Low level: 10 days to 6 months (alternative minimum 5 days jail plus 18 days monitored house arrest). High level or refusal: 20 days to 6 months (alternative 10 days jail plus 36 days house arrest).',
            },
            { label: 'Fines', value: '$715 to $1,625.' },
            {
              label: 'License',
              value:
                '1 to 7 years ($315 reinstatement fee). Mandatory alcohol/drug assessment. Restricted plates required. 90-day vehicle immobilization if the vehicle is registered to you.',
            },
            { label: 'Limited privileges', value: 'After 45 days (90 for a refusal). Ignition interlock required for an alcohol-related OVI.' },
          ]}
        />
        <FactTable
          title="Third OVI (within 10 years)"
          rows={[
            {
              label: 'Jail',
              value:
                'Low level: 30 days to 1 year (alternative 15 days jail plus 55 days house arrest). High level or refusal: 60 days to 1 year (alternative 30 days jail plus 110 days house arrest).',
            },
            { label: 'Fines', value: '$1,040 to $2,750.' },
            {
              label: 'License',
              value:
                '2 to 12 years ($315 reinstatement fee). Mandatory alcohol/drug addiction program. Restricted plates required. Vehicle forfeiture if the vehicle is registered to you.',
            },
            { label: 'Limited privileges', value: 'After 180 days (1 year for a refusal). Ignition interlock required.' },
            { label: 'Level', value: 'First-degree misdemeanor. A fourth OVI within 10 years becomes a felony.' },
          ]}
        />
        <Callout title="Fourth OVI within 10 years">
          A fourth OVI within 10 years is a fourth-degree felony with much higher penalties. Call the office to discuss your options.
        </Callout>
      </Section>

      <Section title="Two cases from one arrest" tone="ice">
        <h3>The administrative license suspension (ALS)</h3>
        <p>
          Within 30 days of the arrest, the ALS appeal must be filed or the right to challenge it is lost. The hearing asks whether the
          officer had reasonable grounds to believe you were impaired, whether the arrest was proper, and whether testing was done
          correctly. Winning can restore your license and can strengthen the criminal defense.
        </p>
        <h3>The criminal case</h3>
        <Steps
          steps={[
            { title: 'Arraignment', body: 'You enter a plea, usually not guilty.' },
            {
              title: 'Discovery',
              body: 'The prosecution must hand over its evidence, including police reports, breathalyzer maintenance records, dashcam footage and witness statements.',
            },
            { title: 'Pretrial motions', body: 'Motions can challenge the evidence or ask for dismissal.' },
            { title: 'Resolution', body: 'Most cases resolve through negotiation. Trial is an option.' },
          ]}
        />
      </Section>

      <Section title="License suspension and driving privileges">
        <p>
          Ohio&rsquo;s implied consent law, ORC 4511.191, requires an automatic license suspension when you are charged with OVI. It is
          separate from the criminal penalties and starts at arrest if you refuse testing or fail a chemical test. You have 30 days to
          appeal it and request a stay, and an attorney can challenge the suspension at the hearing.
        </p>
        <FactTable
          title="ALS suspension periods"
          rows={[
            { label: 'First offense, over the limit', value: 'Suspension per statute; limited privileges after 15 days (waiver possible with no prior Physical Control).' },
            { label: 'First offense, refusal', value: '1 year suspension; limited privileges after 30 days.' },
            { label: 'Second offense', value: '1 to 7 years; privileges after 45 days (90 for a refusal); interlock required.' },
            { label: 'Third offense', value: '2 to 12 years; privileges after 180 days (1 year for a refusal); interlock required.' },
            { label: 'Reinstatement fee', value: '$315 when eligible.' },
          ]}
          note="The ALS runs at the same time as any court-ordered suspension. Winning the ALS appeal can mean immediate reinstatement."
        />
        <p>
          Limited privileges usually allow driving for work, school, treatment, medical care and other necessary purposes. After a first
          OVI, the judge may waive the 15-day wait if you have no prior &ldquo;Physical Control&rdquo; conviction within 10 years; with
          one, an interlock is required. See <Link href="/ovi-dui-defense/limited-driving-privileges">limited driving privileges</Link>{' '}
          for the application.
        </p>
        <Callout title="New since 2025: oral fluid testing">
          Under HB 37 (Liv&rsquo;s Law), Ohio police may test drivers suspected of OVI with an oral fluid (saliva) swab that detects
          alcohol, drugs of abuse, controlled substances and metabolites. Results can support probable cause and be used in court.
          Refusing the swab brings Ohio&rsquo;s implied consent penalties, including automatic suspension. The testing procedure,
          accuracy and admissibility can all be challenged.
        </Callout>
      </Section>

      <Section title="Common OVI defenses" tone="ice">
        <PointGrid
          points={[
            {
              title: 'An illegal traffic stop',
              body: 'Police need reasonable suspicion of a traffic violation or crime to stop you. If the stop was unlawful, the evidence may be suppressed and the charges dismissed.',
            },
            {
              title: 'Inaccurate breath results',
              body: 'Breathalyzers must be calibrated, maintained and run by trained officers. Medical conditions, recent drinking or improper procedure can skew results, and maintenance records and operator qualifications can be challenged.',
            },
            {
              title: 'Rising BAC',
              body: 'BAC can keep rising after you stop drinking. If you were under 0.08% while driving but over it when tested, this defense may apply. It needs expert testimony and careful analysis of timing.',
            },
            {
              title: 'Field sobriety tests',
              body: 'The walk-and-turn, one-leg-stand and horizontal gaze nystagmus tests are subjective and can be thrown off by medical conditions, weather, the road surface or improper administration.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on an OVI case">
        <PointGrid
          points={[
            { title: 'Files the ALS appeal', body: 'Within the 30-day deadline, with a request to stay the suspension, and represents you at the hearing.' },
            {
              title: 'Investigates',
              body: 'Police reports, dashcam and bodycam footage, breathalyzer maintenance records and field sobriety procedures, looking for illegal stops and improper testing.',
            },
            {
              title: 'Challenges the evidence',
              body: 'Breath test calibration and maintenance, NHTSA protocol violations in field sobriety tests, chain of custody for blood tests, and anything obtained improperly.',
            },
            { title: 'Brings in experts', body: 'Toxicology, field sobriety and medical experts to test the prosecution’s evidence.' },
            {
              title: 'Negotiates',
              body: 'For reduced charges, a better plea, alternative sentencing including treatment programs, or dismissal once conditions are met.',
            },
            { title: 'Gets you driving', body: 'Prepares the application for limited privileges and represents you in court on it.' },
          ]}
        />
        <p>
          The firm handles OVI cases from arrest through trial and post-conviction relief, including first, second, third and felony
          offenses. If a case goes to trial, that means cross-examining the officers and the state&rsquo;s experts and calling experts of
          its own.
        </p>
      </Section>

      <OVIReviews />

      <Section title="OVI defense in your county" tone="ice">
        <p>Each county page covers its courts and local procedure.</p>
        <LinkGrid links={COUNTIES} />
        <h3>Related practice areas</h3>
        <LinkGrid
          columns={3}
          links={[
            { href: '/criminal-defense', title: 'Criminal defense', subtitle: 'Misdemeanor charges across Ohio' },
            { href: '/personal-injury/car-accidents', title: 'Car accident claims', subtitle: 'When you were the one injured' },
            { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement', subtitle: 'Sealing an eligible record' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
