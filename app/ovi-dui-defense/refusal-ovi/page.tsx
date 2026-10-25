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
  title: 'OVI Refusal Attorney in Ohio',
  description:
    'Refused the breath or chemical test in Ohio? The 1-year license suspension, the 30-day appeal deadline, HB 37 refusal rules and your defenses.',
  keywords: ['refusal OVI attorney Ohio', 'OVI refusal defense attorney Ohio', 'breathalyzer refusal attorney'],
  openGraph: {
    title: 'OVI Refusal Attorney in Ohio | Jwayyed Law LLC',
    description: 'License suspension, the 30-day ALS appeal, penalties and defenses after refusing an OVI chemical test in Ohio.',
    url: 'https://www.jjlawohio.com/ovi-dui-defense/refusal-ovi',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/ovi-dui-defense/refusal-ovi' },
};

const breadcrumbItems = [
  { label: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { label: 'Refusal OVI', href: '/ovi-dui-defense/refusal-ovi' },
];

const faqs = [
  {
    question: 'What happens when you refuse the breathalyzer in Ohio?',
    answer:
      "Refusing a breath, blood, urine or oral fluid test triggers Ohio's implied consent law under ORC 4511.191. The officer takes your license on the spot and issues a paper ALS (Administrative License Suspension). A first refusal brings a one year ALS; a second refusal within ten years brings two years. You have only 30 days from the date of arrest to appeal it in court. Under HB 37 (effective April 9, 2025), the court also cannot waive the mandatory 15-day hard suspension after a refusal. In non-refusal cases a judge may allow immediate limited driving privileges with an ignition interlock device.",
  },
  {
    question: 'How long is my license suspended for refusing a BAC test in Ohio?',
    answer:
      'Under ORC 4511.191, the ALS for a first refusal is one year, and a second refusal within ten years brings a two-year ALS. These suspensions run from the date of arrest, independent of any criminal OVI conviction. For refusal cases, HB 37 imposes a mandatory 30-day hard suspension before any limited driving privileges. Agreeing to an ignition interlock does not shorten it. In non-refusal OVI cases, the 15-day hard suspension can be waived.',
  },
  {
    question: 'Can a refusal be used against you in court?',
    answer:
      'Yes. Ohio courts allow prosecutors to comment on your refusal at trial, and a jury may draw an adverse inference from it: that you refused because you knew you were impaired. This is sometimes called the "consciousness of guilt" inference. An attorney can challenge it by offering other explanations for the refusal and by cross-examining officers on whether you were properly advised of your rights under ORC 4511.191 before the test was requested. Challenging whether the refusal evidence is admissible is a key part of a refusal defense.',
  },
  {
    question: 'What is the difference between refusing a BAC test and refusing field sobriety tests?',
    answer:
      'They are legally distinct. Refusing a chemical BAC test (breath, blood, urine or oral fluid) under ORC 4511.191 triggers the automatic ALS described above. Refusing standardized field sobriety tests (SFSTs), such as the walk-and-turn, one-leg-stand or horizontal gaze nystagmus test, does not. Ohio attaches no legal penalty to declining field sobriety tests. Officers may still use that refusal as one factor to justify an arrest, and it may be commented on at trial. Talk to an attorney about how to respond to either kind of request.',
  },
  {
    question: 'What is the 30-day deadline to appeal an ALS suspension in Ohio?',
    answer:
      'Under ORC 4511.197, you have exactly 30 days from the date of your OVI arrest to file a petition with the court challenging the ALS. Miss it and the suspension usually stays in full effect for its whole length with no further chance to contest it. An attorney can file the appeal, ask for a stay while it is pending, and argue grounds such as: the officer lacked reasonable grounds to stop your vehicle, you were not properly advised of the consequences of refusal, or the refusal itself was not valid. Act right after the arrest.',
  },
  {
    question: 'Can you be convicted of OVI without a breathalyzer result?',
    answer:
      'Yes. ORC 4511.19(A)(1)(a) allows a conviction on evidence that you were "under the influence of alcohol," whatever the chemical test shows. Officers can testify about slurred speech, bloodshot eyes, the odor of alcohol, erratic driving and poor field sobriety performance. Prosecutors regularly win OVI convictions without chemical test evidence. In refusal cases they may argue that the refusal plus the officer\'s observations is enough. Refusing a BAC test does not guarantee you avoid an OVI charge or conviction.',
  },
  {
    question: 'Are the penalties enhanced if I am convicted of OVI after refusing the test?',
    answer:
      'Yes. Under Ohio law as updated by HB 37 (effective April 9, 2025), a first OVI conviction after a refused chemical test carries a mandatory minimum of 3 days in jail, and the driver intervention program (DIP) cannot replace jail time as it can in a standard first OVI. Standard first OVI penalties under HB 37 include fines of $565 to $1,075, a 1 to 3 year license suspension and a $315 reinstatement fee. The refusal also changes the hard suspension before limited privileges, as described above. An attorney may be able to challenge the evidence, negotiate with the prosecutor, or contest the refusal designation itself.',
  },
  {
    question: 'Do I need an attorney if I refused the breathalyzer test?',
    answer:
      "Yes, especially in a refusal case. There are two parallel proceedings: the administrative ALS process and the criminal OVI case. You have only 30 days to challenge the ALS. The criminal case may involve enhanced penalties, refusal evidence at trial and possible adverse jury instructions. An OVI defense attorney at Jwayyed Law LLC can file the ALS appeal, challenge the stop and the refusal, and prepare a trial strategy that answers the prosecutor's use of the refusal. Contact the firm right after a refusal OVI arrest.",
  },
];

const RELATED = [
  { href: '/ovi-dui-defense/first-ovi', title: 'First OVI', subtitle: 'Penalties and defenses for a first offense' },
  { href: '/ovi-dui-defense/high-tier-ovi', title: 'High-tier OVI', subtitle: 'A BAC of 0.17% or higher and the higher mandatory penalties' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving legally during an OVI suspension' },
  { href: '/ovi-dui-defense/ovi-with-accident', title: 'OVI with accident', subtitle: 'OVI charges involving a crash or injuries' },
];

export default function RefusalOVIPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI refusal defense in Ohio"
        description="Refusing the chemical test brings a one year license suspension that starts at arrest, separate from the criminal case. You have 30 days to appeal it."
      />

      <KeyFacts
        facts={[
          { figure: '1 year', label: 'administrative license suspension for a first refusal (2 years for a second within 10 years)' },
          { figure: '30 days', label: 'to appeal the suspension under ORC 4511.197, counted from your arrest' },
          { figure: '30 days', label: 'hard suspension before limited privileges, even with an interlock' },
          { figure: '3 days', label: 'mandatory jail on a first refusal OVI conviction, with no DIP substitute' },
        ]}
      />

      <Section
        title="What refusing the test means"
        intro={
          <p>
            When an officer suspects OVI, they will ask for a chemical test (breath, blood, urine or oral fluid) under Ohio&apos;s
            implied consent law, ORC 4511.191. Refusing it has automatic consequences separate from any criminal charge.
          </p>
        }
      >
        <p>
          Implied consent rests on the idea that by driving on Ohio&apos;s roads, every driver has already agreed to testing if lawfully
          arrested on suspicion of OVI. A refusal therefore puts you in two systems at once: the Administrative License Suspension and
          the criminal OVI case. The firm defends refusal cases across Ohio as part of its{' '}
          <Link href="/ovi-dui-defense">OVI/DUI defense practice</Link>.
        </p>
        <p>
          A refusal does not prevent a conviction. ORC 4511.19(A)(1)(a) allows an OVI conviction on observed impairment alone: officer
          testimony about driving, physical appearance, the odor of alcohol and field sobriety performance. Prosecutors can also comment
          on the refusal at trial and argue it shows consciousness of guilt, and Ohio courts have consistently upheld this practice. A
          refusal conviction carries a mandatory 3-day jail minimum, and the driver intervention program (DIP) available in standard
          first OVI cases cannot replace it. So a refusal OVI, even on a first offense, means jail if you are convicted.
        </p>
        <h3>Field sobriety tests are different</h3>
        <p>
          Declining standardized field sobriety tests (SFSTs) such as the walk-and-turn or horizontal gaze nystagmus does not trigger
          an automatic ALS. There is no statutory penalty for declining SFSTs. An officer may still use that refusal as part of the
          probable cause for the arrest.
        </p>
      </Section>

      <Section title="The license suspension and HB 37" tone="ice">
        <p>
          An ALS for refusal under ORC 4511.191 is one year for a first offense and two years for a second refusal within ten years.
          The clock starts at arrest, not at conviction.
        </p>
        <p>
          HB 37, which took effect on April 9, 2025, changed how refusal suspensions are handled compared with test-over results. In
          non-refusal cases, a judge may now waive the mandatory 15-day hard suspension if you agree to install a certified ignition
          interlock device (IID), so limited privileges can start immediately. In refusal cases, no court can waive the 30-day hard
          suspension, whatever you agree to about an IID. That makes a refusal far more disruptive to daily life, and it makes a prompt
          ALS appeal more important.
        </p>
        <FactTable
          title="Refusal OVI penalties in Ohio (HB 37, effective April 9, 2025)"
          rows={[
            { label: 'ALS suspension', value: '1 year (first refusal); 2 years (second refusal within 10 years).' },
            { label: 'Jail (first offense)', value: 'Mandatory 3-day minimum. The driver intervention program (DIP) is not available as an alternative in refusal cases.' },
            { label: 'Fines', value: '$565 to $1,075 (first OVI offense under HB 37).' },
            { label: 'License suspension', value: '1 to 3 years, court-ordered and separate from the ALS.' },
            { label: 'Reinstatement fee', value: '$315.' },
            { label: 'Hard suspension', value: '30 days before limited driving privileges. It cannot be waived, even with an IID agreement.' },
            { label: 'At trial', value: 'Refusal evidence is admissible, and the jury may draw an adverse inference.' },
          ]}
        />
        <Callout title="The 30-day appeal deadline">
          The ALS appeal under ORC 4511.197 must be filed within 30 days in the court with jurisdiction over the offense. A timely
          appeal can bring a stay of the suspension, so you may be able to drive legally while the challenge is pending. Missing the
          window usually forfeits your right to contest the ALS. Read more about the{' '}
          <Link href="/our-law-firm/blog/ohio-als-appeal-30-day-deadline">30-day ALS appeal deadline in Ohio</Link>.
        </Callout>
      </Section>

      <Section title="Defenses after a refusal">
        <p>
          The firm reviews the whole sequence: the traffic stop, the officer&apos;s observations, the SFST request, the chemical test
          request and any advisements given.
        </p>
        <PointGrid
          points={[
            { title: 'No reasonable grounds', body: 'The officer lacked reasonable grounds to stop or arrest you.' },
            { title: 'Improper advisement', body: 'The officer did not properly advise you of the consequences of refusal before asking for the test.' },
            { title: 'Not a valid refusal', body: 'The refusal itself was not knowing and voluntary.' },
            { title: 'The refusal evidence', body: 'Other explanations for the refusal, and cross-examination on the advisement, can answer the consciousness of guilt argument.' },
          ]}
        />
      </Section>

      <Section
        title="What happens in court after a refusal arrest"
        tone="ice"
        intro={
          <p>
            A refusal case moves on two tracks at once: the ALS appeal and the criminal OVI case. In the criminal case, the refusal
            itself becomes part of the evidence.
          </p>
        }
      >
        <Steps
          steps={[
            {
              title: 'The ALS appeal',
              body: 'Filed within 30 days under ORC 4511.197 in the court with jurisdiction over the offense, with a request for a stay. The grounds include no reasonable grounds for the stop, an improper advisement, or a refusal that was not valid.',
            },
            { title: 'Arraignment', body: 'You enter a plea in the criminal case, usually not guilty, so the evidence can be reviewed.' },
            {
              title: 'Discovery',
              body: 'Police reports and video of the stop and the test request. They can show what the officer observed and whether you were properly advised of the consequences of refusal.',
            },
            {
              title: 'Pretrial motions',
              body: 'Challenges to the stop and the arrest, and to whether the refusal evidence should be admitted at all.',
            },
            {
              title: 'Plea or trial',
              body: 'Negotiation can aim for a reduced charge or a plea that avoids the mandatory jail tied to a refusal conviction. At trial, prosecutors may comment on the refusal, and the defense answers with other explanations and cross-examination on the advisement.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a refusal OVI">
        <PointGrid
          points={[
            { title: 'Files the ALS appeal', body: 'A timely challenge to the administrative suspension, with a request for a stay, within 30 days of arrest.' },
            { title: 'Challenges the stop and arrest', body: 'Whether the officer had reasonable grounds to stop your vehicle and probable cause to arrest you.' },
            { title: 'Checks the implied consent advisement', body: 'Whether you were properly advised of the consequences of refusal before the test was requested.' },
            { title: 'Challenges the refusal evidence', body: 'Argues against its admission, or its weight, at trial.' },
            { title: 'Negotiates', body: 'Charge reductions or plea agreements that avoid the mandatory jail tied to a refusal conviction.' },
            { title: 'Gets you driving', body: 'Limited privileges for work, school or medical needs during the suspension.' },
          ]}
        />
        <p>
          Charged with refusal OVI in Columbus, Franklin County or anywhere in Ohio? Call (614) 285-5482,{' '}
          <Link href="/contact">schedule a consultation</Link> or <Link href="/contact">contact the firm</Link>. See also{' '}
          <Link href="/ovi-dui-defense">the full OVI defense practice</Link> and{' '}
          <Link href="/ovi-dui-defense/limited-driving-privileges">limited driving privileges options</Link> during your suspension.
        </p>
      </Section>

      <LocationsWeServe title="OVI/DUI Defense" />

      <Section title="Related OVI pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <OVIReviews />
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
