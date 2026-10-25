import RelatedArticles from '@/components/practice/RelatedArticles';
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import OVIReviews from '@/components/OVIReviews';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Underage OVI Defense in Ohio',
  description:
    'Under 21 and charged with OVI or OVUAC in Ohio? The 0.02% BAC threshold, penalties compared with a full OVI, record sealing and defenses.',
  keywords: ['underage OVI attorney Ohio', 'underage DUI defense attorney Ohio', 'minor OVI attorney', 'OVUAC Ohio', 'underage OVI defense', 'OVI defense attorney', 'underage OVI charges'],
  openGraph: {
    title: 'Underage OVI Defense in Ohio | Jwayyed Law LLC',
    description: 'OVUAC and full OVI charges for drivers under 21 in Ohio: thresholds, penalties, long-term effects and defenses.',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/underage-ovi',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/ovi-dui-defense/underage-ovi' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Underage OVI', href: '/ovi-dui-defense/underage-ovi' },
];

const faqs = [
  {
    question: 'What is OVUAC in Ohio, and how is it different from OVI?',
    answer:
      'OVUAC stands for Operating a Vehicle After Underage Consumption, codified at ORC 4511.19(B). It applies to drivers under age 21 with a BAC of 0.02% to 0.079% and is a fourth-degree misdemeanor (M4). Full OVI under ORC 4511.19(A) applies when any driver, including someone under 21, has a BAC of 0.08% or higher or is impaired regardless of BAC. A driver under 21 who tests at 0.08% or higher faces a full adult OVI charge with the same mandatory minimums as an adult, not the lesser OVUAC charge. The 0.02% threshold reflects Ohio\'s "zero tolerance" policy for underage drinking and driving.',
  },
  {
    question: 'What BAC level triggers OVUAC for drivers under 21 in Ohio?',
    answer:
      'Under ORC 4511.19(B), a BAC of 0.02% or higher triggers OVUAC for drivers under 21. That is effectively zero tolerance: a single drink may push a young driver above 0.02%. The OVUAC range ends at 0.079%. At 0.08% or higher, the driver faces a full OVI charge under ORC 4511.19(A) regardless of age, with mandatory minimums including 3 to 180 days in jail and fines of $565 to $1,075 under HB 37 (effective April 9, 2025). Because the threshold is so low, a minor who drank even a small amount can face serious consequences.',
  },
  {
    question: 'What are the penalties for OVUAC compared to full OVI for drivers under 21?',
    answer:
      'A first OVUAC (ORC 4511.19(B)) carries a license suspension of 90 days to 2 years, a fine up to $250, up to 30 days in jail (with no mandatory minimum), and a mandatory alcohol assessment or treatment. A full OVI for a driver under 21 (BAC 0.08%+) carries adult penalties under HB 37: a mandatory minimum of 3 days in jail (or the driver intervention program), fines of $565 to $1,075, a 1 to 3 year license suspension and a $315 reinstatement fee. OVUAC is far less severe, which makes the line between 0.079% and 0.08% critical in any underage case.',
  },
  {
    question: 'How does an underage OVI or OVUAC affect college admission and scholarships?',
    answer:
      'Many college applications ask about criminal convictions or charges, and several institutions require disclosure of alcohol-related offenses even while charges are pending. A full OVI conviction is a misdemeanor on the criminal record and may have to be disclosed for college, graduate school, professional programs and study abroad. Some merit scholarships require a clean record and may be revoked after a conviction. ROTC and military service have strict standards. Federal student aid (FAFSA) drug conviction rules have been relaxed in recent years, but an OVI conviction can still affect institutional aid. A dismissal, diversion, or reduction to a non-criminal traffic offense can protect a young person\'s education.',
  },
  {
    question: 'Can an underage OVI or OVUAC be sealed in Ohio?',
    answer:
      "Ohio's record sealing statute (ORC 2953.32) may allow sealing of an OVUAC conviction after the waiting period, typically one year after final discharge. Full OVI convictions are generally not sealable, because OVI involves operating a vehicle while impaired and Ohio courts read the sealing statutes narrowly for traffic offenses. If the charge is reduced to a non-OVI offense through negotiation, that conviction may be sealable. Every case is different, and an attorney can review the offense and prior record. The outcome at disposition sets up any future sealing, so it pays to act early.",
  },
  {
    question: 'Does an underage OVI or OVUAC appear on background checks?',
    answer:
      'Yes. OVUAC and OVI convictions appear on Ohio criminal and driving records and show up on standard background checks. Employers, landlords, licensing boards and schools can all see them. OVI convictions stay on the Ohio BMV driving record for at least 10 years. Licensing boards for nursing, teaching, social work, law and pharmacy often require disclosure of any alcohol or drug-related conviction no matter when it happened. Military branches run background investigations that include OVI and OVUAC records. Early defense is the best way to limit the long-term footprint.',
  },
  {
    question: 'What defenses exist for an underage OVI or OVUAC charge in Ohio?',
    answer:
      'It depends on the facts. An attorney can challenge the traffic stop: was there reasonable suspicion to pull the vehicle over? The chemical test can be challenged: was the breathalyzer properly calibrated and certified, was the officer licensed to give the test, and was the 20-minute observation period followed? Field sobriety tests can be checked against National Highway Traffic Safety Administration (NHTSA) standards. For OVUAC, a reading at or very near 0.02% opens margin-of-error arguments. A rising blood alcohol defense, that the driver was below the limit while driving and only went over after the stop, may apply in some cases.',
  },
  {
    question: 'Should parents hire an attorney for their child facing an underage OVI charge?',
    answer:
      'Yes, and the sooner the better. Drivers aged 18 to 20 face OVI and OVUAC charges in adult criminal court, so a conviction goes on an adult criminal record. Drivers under 18 go to juvenile court, where records may be treated differently, but the consequences can still follow a young person into adulthood. An attorney can challenge the evidence, negotiate for a reduction (such as a non-criminal traffic offense), pursue diversion where available, and protect the driving record, education and career. Jwayyed Law LLC handles underage OVI and OVUAC cases throughout Ohio. Contact the firm to schedule a confidential consultation.',
  },
];

const RELATED = [
  { href: '/ovi-dui-defense/first-ovi', title: 'First OVI', subtitle: 'Penalties and defenses for a first offense' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving legally during an OVI suspension' },
  { href: '/ovi-dui-defense/refusal-ovi', title: 'Refusal OVI', subtitle: 'When you refused the breath or chemical test' },
  { href: '/ovi-dui-defense/driving-under-ovi-suspension', title: 'Driving under OVI suspension', subtitle: 'When you are charged with driving while suspended for an OVI' },
];

export default function UnderageOVIPage() {
  return (
    <>
      <OVIReviews />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Underage OVI and OVUAC defense in Ohio"
        description="Drivers under 21 can be charged at a BAC of just 0.02%. At 0.08% the charge becomes a full adult OVI with mandatory jail."
      />

      <KeyFacts
        facts={[
          { figure: '0.02%', label: 'BAC that triggers OVUAC for a driver under 21' },
          { figure: '0.08%', label: 'BAC at which the charge becomes a full OVI, at any age' },
          { figure: '90 days to 2 years', label: 'license suspension for a first OVUAC' },
          { figure: '3 days', label: 'mandatory minimum jail (or DIP) on a full OVI' },
        ]}
      />

      <Section
        title="Two charges for drivers under 21"
        intro={
          <p>
            Ohio applies two separate frameworks to drivers under 21 with alcohol in their system. Which one applies depends on the
            BAC reading.
          </p>
        }
      >
        <p>
          <strong>OVUAC</strong> (Operating a Vehicle After Underage Consumption) under ORC 4511.19(B) applies at a BAC of 0.02% to
          0.079%. This is Ohio&apos;s zero-tolerance policy: any measurable alcohol in a minor&apos;s system while driving can lead to
          criminal charges.
        </p>
        <p>
          <strong>Full OVI</strong> under ORC 4511.19(A) applies if the driver&apos;s BAC reaches 0.08% or higher regardless of age, or
          if the driver is impaired by alcohol or drugs regardless of BAC. The driver then faces full OVI charges and the same mandatory minimums as
          any adult.
        </p>
        <p>
          As an OVI defense attorney, the firm represents drivers under 21 and their families across Ohio on either charge, as part of its{' '}
          <Link href="/ovi-dui-defense">OVI/DUI defense practice</Link>. For a first offense at the adult level, read{' '}
          <Link href="/our-law-firm/blog/first-dui-ohio-will-i-go-to-jail">what to expect after a first DUI in Ohio</Link>.
        </p>
      </Section>

      <Section title="OVUAC and full OVI penalties compared" tone="ice">
        <p>
          The gap between the two is large, so the exact BAC reading, and any challenge to its accuracy, sits at the center of the
          defense. Even OVUAC is a criminal conviction with a lasting record.
        </p>
        <FactTable
          title="OVUAC: ORC 4511.19(B) (BAC 0.02% to 0.079%, under age 21)"
          rows={[
            { label: 'Offense level', value: 'Fourth-degree misdemeanor (M4).' },
            { label: 'License suspension', value: '90 days to 2 years.' },
            { label: 'Fine', value: 'Up to $250.' },
            { label: 'Jail', value: 'Up to 30 days, with no mandatory minimum.' },
            { label: 'Treatment', value: 'Mandatory alcohol assessment and any recommended treatment.' },
          ]}
        />
        <FactTable
          title="Full OVI: ORC 4511.19(A) (BAC 0.08%+, any age; HB 37 first offense)"
          rows={[
            { label: 'Offense level', value: 'M1 misdemeanor.' },
            { label: 'Jail', value: 'Mandatory minimum of 3 days in jail or the driver intervention program.' },
            { label: 'Fines', value: '$565 to $1,075 under HB 37 (effective April 9, 2025).' },
            { label: 'License suspension', value: '1 to 3 years.' },
            { label: 'Reinstatement fee', value: '$315.' },
          ]}
        />
      </Section>

      <Section title="Court, records and the long term">
        <p>
          Drivers aged 18, 19 and 20 face OVI and OVUAC charges in adult criminal court, the same as any adult defendant. Drivers under
          18 go through juvenile court, where proceedings and records are handled differently, though the consequences stay serious and
          may carry over to an adult record.
        </p>
        <p>
          In adult court, a conviction becomes part of the permanent criminal and BMV record and shows up on background checks for
          employers, landlords, schools and licensing boards. Ohio&apos;s record sealing statute (ORC 2953.32) may allow an OVUAC
          conviction to be sealed after a waiting period, but OVI convictions are generally not sealable. So the outcome now matters
          more than any plan to seal later.
        </p>
        <h3>School, scholarships and careers</h3>
        <p>
          College admissions often require disclosure of criminal charges or convictions. Many universities and professional programs
          (nursing, education, pharmacy and law among them) ask about alcohol-related convictions on applications and in licensing.
          Scholarships, ROTC commitments and study abroad programs may have clean-record requirements, and military service is harder
          with any alcohol-related conviction. For a young person, these effects can outweigh the criminal penalty. The firm looks for
          every way to reduce or dismiss the charge. Call (614) 285-5482 or <Link href="/contact">schedule a consultation</Link>.
        </p>
      </Section>

      <Section title="Underage OVI defense strategies" tone="ice">
        <p>
          Underage defenses overlap with standard OVI defenses, with extra weight on the low threshold. See the{' '}
          <Link href="/ovi-dui-defense">OVI defense overview</Link> for the full process.
        </p>
        <PointGrid
          points={[
            {
              title: 'Margin of error near 0.02%',
              body: 'Because OVUAC starts at just 0.02%, calibration and administration errors matter more. A reading of 0.022% may be within the instrument’s margin of error, which raises whether the result proves the threshold was met.',
            },
            { title: 'The traffic stop', body: 'Whether the officer had a lawful basis, reasonable suspicion, to stop the vehicle in the first place.' },
            { title: 'Field sobriety tests', body: 'Whether they were given correctly under NHTSA standards.' },
            { title: 'Constitutional rights', body: 'Whether any of your rights were violated during the encounter.' },
          ]}
        />
      </Section>

      <Section
        title="How an underage OVI or OVUAC case can end"
        intro={
          <p>
            An underage case can end in a dismissal, a reduction to a lesser charge, diversion or a conviction. For a young driver, the
            difference between these outcomes shows up for years on applications and background checks.
          </p>
        }
      >
        <PointGrid
          points={[
            {
              title: 'Dismissal',
              body: 'When the stop lacked reasonable suspicion, the test was not properly given or a constitutional right was violated, the evidence may not hold up.',
            },
            {
              title: 'OVI reduced to OVUAC',
              body: 'A full OVI at 0.08% or higher carries adult mandatory minimums. OVUAC is a fourth-degree misdemeanor with no mandatory jail, so a successful challenge to the reading near 0.08% matters.',
            },
            {
              title: 'OVUAC reduced to a traffic offense',
              body: 'A non-criminal traffic offense avoids a criminal conviction, which can protect college, scholarship and licensing applications.',
            },
            { title: 'Diversion', body: 'Where available, a program that may lead to dismissal once completed.' },
          ]}
        />
        <h3>What parents can do first</h3>
        <Steps
          steps={[
            { title: 'Act early', body: 'The outcome at disposition shapes the record, so bring in an attorney before the first court date.' },
            {
              title: 'Know which court',
              body: 'Drivers aged 18 to 20 go to adult criminal court. Drivers under 18 go to juvenile court, where records are handled differently.',
            },
            { title: 'Keep the young driver from discussing the case', body: 'With law enforcement or anyone else, unless the attorney is there.' },
            {
              title: 'Check disclosure rules',
              body: 'Find out what the school, scholarship, ROTC or study abroad program asks about pending charges and convictions.',
            },
          ]}
        />
      </Section>

      <Section title="How an OVI defense attorney handles an underage case" tone="ice">
        <PointGrid
          points={[
            { title: 'Challenges the stop', body: 'Whether law enforcement had lawful reasonable suspicion to pull the vehicle over.' },
            { title: 'Challenges the BAC result', body: 'Breathalyzer calibration, certification and operator licensure.' },
            { title: 'Reviews the field sobriety tests', body: 'Whether they were given in compliance with NHTSA standards.' },
            { title: 'Negotiates a reduction', body: 'From OVI to OVUAC, or from OVUAC to a non-criminal traffic offense.' },
            { title: 'Pursues diversion', body: 'Programs that may lead to dismissal once completed.' },
            { title: 'Protects the future', body: 'Structures outcomes to limit the effect on college, scholarships and professional licensing.' },
          ]}
        />
        <p>
          A suspension may also be eligible for <Link href="/ovi-dui-defense/limited-driving-privileges">limited driving privileges</Link>.
        </p>
      </Section>

      <LocationsWeServe title="OVI/DUI Defense" />

      <Section title="Related OVI pages">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <RelatedArticles category="OVI/DUI" title="Articles on Ohio OVI and DUI" slugs={["ovi-charges-ohio-university-students-athens", "can-ovi-be-expunged-ohio", "what-to-do-pulled-over-ovi-ohio"]} />
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
