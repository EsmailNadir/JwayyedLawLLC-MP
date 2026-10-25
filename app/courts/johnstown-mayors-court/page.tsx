import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  // Root layout applies the "%s | Jwayyed Law LLC" template, so no suffix here.
  title: "Johnstown Mayor's Court Lawyer, Licking County",
  description:
    "Cited into Johnstown Mayor's Court in Licking County, Ohio? OVI, traffic and misdemeanor ordinance defense. Court sits the 1st and 3rd Wednesday. Call (614) 285-5482.",
  keywords: [
    "Johnstown Mayor's Court attorney",
    "Johnstown Mayor's Court lawyer",
    'Johnstown Ohio traffic lawyer',
    'Johnstown Ohio OVI attorney',
    "Licking County mayor's court defense",
    'Johnstown Ohio speeding ticket lawyer',
    'Licking County Municipal Court appeal attorney',
  ],
  openGraph: {
    title: "Johnstown Mayor's Court Attorney | Jwayyed Law LLC",
    description: "OVI, traffic and ordinance defense in Johnstown Mayor's Court, which meets the 1st and 3rd Wednesday of each month.",
    url: 'https://www.jjlawohio.com/courts/johnstown-mayors-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/courts/johnstown-mayors-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: "Johnstown Mayor's Court", href: '/courts/johnstown-mayors-court' },
];

const courtFacts = [
  { label: 'Court', value: "Johnstown Mayor's Court (City of Johnstown, Licking County, Ohio)" },
  { label: 'Address', value: '599 S. Main Street, Johnstown, OH 43031. Sessions are held in Council Chambers.' },
  { label: 'Court sessions', value: 'The 1st and 3rd Wednesday of each month' },
  { label: 'Presiding officer', value: "A licensed attorney sitting as the mayor's court magistrate" },
  { label: 'Clerk of Court', value: '(740) 967-5961 · mayorscourt@johnstownohio.org' },
  { label: 'Clerk office hours', value: 'Monday to Friday, 8:00 a.m. to 4:00 p.m. (after-hours drop box on the south side of the building)' },
  { label: 'Charging agency', value: 'Johnstown Police Department, 599 S. Main Street; Ohio State Highway Patrol on state routes' },
  { label: 'Transfers and appeals go to', value: 'Licking County Municipal Court, 40 W. Main Street, 3rd Floor, Newark, OH 43055 · (740) 670-7800' },
];

const faqs = [
  {
    question: "Where is Johnstown Mayor's Court and when does it meet?",
    answer:
      "Johnstown Mayor's Court sits in the Council Chambers at 599 S. Main Street, Johnstown, OH 43031, in western Licking County. Court is held on the 1st and 3rd Wednesday of each month. The Mayor's Court Clerk can be reached at (740) 967-5961 or mayorscourt@johnstownohio.org, and the clerk's office is open Monday through Friday from 8:00 a.m. to 4:00 p.m., with an after-hours drop box on the south side of the building. Because the court only meets twice a month, a missed date can push your case out several weeks and may trigger a warrant. Call Jwayyed Law LLC at (614) 285-5482 before your date.",
  },
  {
    question: "What kinds of cases does Johnstown Mayor's Court handle?",
    answer:
      "Under R.C. 1905.01, an Ohio mayor's court has limited jurisdiction over violations of the municipality's own ordinances and over moving traffic violations of state law committed on streets and state highways inside the corporate limits. In Johnstown that means speeding, assured clear distance and failure-to-control citations, stop sign and traffic control device violations, driving under suspension and no-operator's-license charges, OVI under R.C. 4511.19 in qualifying first-offense cases, open container and other minor misdemeanor citations, and local code and nuisance violations. A mayor's court cannot hear felony charges, cannot hold a jury trial, and cannot hear state-law criminal offenses outside its statutory grant. Those cases go to Licking County Municipal Court in Newark.",
  },
  {
    question: "Can Johnstown Mayor's Court hear my OVI charge?",
    answer:
      "Only in a genuine first-offense posture. R.C. 1905.01 lets a mayor's court hear an OVI charge only if the defendant has not, within ten years of the date of the offense charged, been convicted of or pleaded guilty to a prior OVI under R.C. 4511.19 or an equivalent municipal, out-of-state or federal offense, including a reduced charge that arose out of a dismissed OVI. If a qualifying prior exists within that ten-year window, the statute requires the case to be transferred immediately to Licking County Municipal Court. The firm checks this look-back first, because it decides which courthouse resolves your case and the realistic sentencing exposure.",
  },
  {
    question: 'What are the penalties for a first OVI in Ohio in 2026?',
    answer:
      "Under R.C. 4511.19 as amended by House Bill 37 (effective April 9, 2025), a first OVI carries a mandatory minimum of 3 days in jail or a 3-day driver intervention program, fines of $565 to $1,075, a class five license suspension of 1 to 3 years, and 6 points on your Ohio driving record. A high-tier first offense (a breath test of .17 or higher, or a refusal with a prior refusal) carries 6 mandatory days. HB 37 eliminated the former 15-day hard suspension for non-refusal first offenses when an ignition interlock device is installed, so limited driving privileges can be sought sooner. The same penalties apply whether the case is resolved in Johnstown Mayor's Court or in Licking County Municipal Court.",
  },
  {
    question: "Is my Administrative License Suspension handled in Johnstown Mayor's Court?",
    answer:
      "No, and this is the deadline people most often miss. An Administrative License Suspension under R.C. 4511.191 takes effect at arrest when you test over the limit or refuse a chemical test, and it runs separately from the criminal case. The ALS appeal must be filed within 30 days, and it is heard by the court with jurisdiction over the underlying charge, not by the mayor's court. For a Johnstown arrest, the appeal is filed in Licking County Municipal Court at 40 W. Main Street in Newark. Waiting for your first Johnstown Mayor's Court date, which may be two to four weeks out, can use up most of that 30-day window.",
  },
  {
    question: "Can I get a jury trial in Johnstown Mayor's Court?",
    answer:
      "No. Ohio mayor's courts are not courts of record and do not seat juries. If you are entitled to and demand a jury trial, the case must move to Licking County Municipal Court. Separately, R.C. 1905.032 allows the mayor to transfer a case to municipal court, county court or common pleas at any time before final disposition, and requires transfer whenever the charge falls outside the mayor's court's jurisdiction. Whether to push for transfer or resolve the matter in Johnstown is a strategic call: the prosecutors, sentencing practices and diversion options differ between the two venues.",
  },
  {
    question: "How do I appeal a Johnstown Mayor's Court conviction?",
    answer:
      "You appeal to Licking County Municipal Court, and the deadline is short. Under R.C. 1905.22, an appeal from a mayor's court goes to the municipal or county court with jurisdiction over the municipality. Under R.C. 1905.23, the notice of appeal must be filed with the mayor's court within ten days of judgment. Under R.C. 1905.25, the appeal proceeds as a trial de novo: the case is tried again from the start in Newark, with no deference to what happened in Johnstown. If you were convicted or entered a plea at a Johnstown Mayor's Court session, call (614) 285-5482 right away.",
  },
  {
    question: "Does a Johnstown Mayor's Court conviction show up on a background check?",
    answer:
      "Yes. A conviction entered in Johnstown Mayor's Court is a valid Ohio conviction with the same legal effect as one entered in Licking County Municipal Court. It reports to the Ohio BMV, appears on criminal background checks, and an OVI conviction from a mayor's court counts as a prior for Ohio's ten-year OVI look-back. Many eligible misdemeanor convictions can later be sealed or expunged under R.C. 2953.32 after the waiting period, though OVI convictions are excluded from sealing by statute. The firm weighs long-term record consequences before advising on any plea.",
  },
  {
    question: "What happens if I miss my Johnstown Mayor's Court date?",
    answer:
      "Failing to appear on a citation can lead to a bench warrant, an added failure-to-appear charge, and a BMV registration or license block on unpaid traffic matters. Because the court meets only on the 1st and 3rd Wednesday of each month, rescheduling is not immediate. For many minor traffic and ordinance citations, an attorney can enter an appearance and handle the matter for you so you do not need to take time off work. For OVI and other charges carrying possible jail time, a personal appearance is generally required. Call the Mayor's Court Clerk at (740) 967-5961 to confirm your date, and call the firm at (614) 285-5482 before it arrives.",
  },
  {
    question: "Do I need a lawyer for Johnstown Mayor's Court?",
    answer:
      "You have the right to counsel for any charge carrying possible incarceration, and it is worth using for anything beyond a routine minor citation. Mayor's court sessions move quickly. Whether to seek transfer to Licking County Municipal Court, whether the ten-year OVI look-back applies, whether a plea will cost you points or a commercial license, and whether a de novo appeal is worth filing are decided in minutes if you are unrepresented. Jwayyed Law LLC handles OVI, traffic and misdemeanor defense in Johnstown Mayor's Court and in Licking County Municipal Court. Call (614) 285-5482 or schedule a consultation online.",
  },
];

export default function JohnstownMayorsCourtPage() {
  const courthouseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Courthouse',
    'name': "Johnstown Mayor's Court",
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '599 S. Main Street',
      'addressLocality': 'Johnstown',
      'addressRegion': 'OH',
      'postalCode': '43031',
      'addressCountry': 'US',
    },
    'telephone': '+17409675961',
    'email': 'mayorscourt@johnstownohio.org',
    'containedInPlace': {
      '@type': 'City',
      'name': 'Johnstown',
      'containedInPlace': {
        '@type': 'County',
        'name': 'Licking County',
        'containedInPlace': { '@type': 'State', 'name': 'Ohio' },
      },
    },
    'url': 'https://www.jjlawohio.com/courts/johnstown-mayors-court',
  };

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': "Jwayyed Law LLC: Johnstown Mayor's Court Defense",
    'serviceType': ['Criminal Defense', 'OVI/DUI Defense', 'Traffic Violation Defense'],
    'areaServed': {
      '@type': 'City',
      'name': 'Johnstown',
      'containedInPlace': {
        '@type': 'County',
        'name': 'Licking County',
        'containedInPlace': { '@type': 'State', 'name': 'Ohio' },
      },
    },
    'provider': {
      '@type': 'LegalService',
      '@id': 'https://www.jjlawohio.com',
      'name': 'Jwayyed Law LLC',
      'telephone': '(614) 285-5482',
      'url': 'https://www.jjlawohio.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '100 E. Campus View Blvd, Suite 250',
        'addressLocality': 'Columbus',
        'addressRegion': 'OH',
        'postalCode': '43235',
        'addressCountry': 'US',
      },
    },
    'url': 'https://www.jjlawohio.com/courts/johnstown-mayors-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courthouseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Johnstown Mayor's Court"
        description="Johnstown Mayor's Court meets only on the 1st and 3rd Wednesday of each month, at 599 S. Main Street. It hears traffic, ordinance and qualifying first-offense OVI cases from inside the city limits."
      />

      <KeyFacts
        facts={[
          { figure: '2 a month', label: 'court sessions: the 1st and 3rd Wednesday' },
          { figure: '30 days', label: 'to appeal an OVI license suspension, filed in Licking County Municipal Court, not here' },
          { figure: '10 days', label: "to appeal a mayor's court judgment, retried from scratch in Newark" },
          { figure: '10 years', label: 'OVI look-back that decides whether this court can hear the case' },
        ]}
      />

      <Section
        title="The court at a glance"
        intro={
          <p>
            A limited-jurisdiction court under R.C. Chapter 1905. You appear before a licensed attorney serving as the mayor&rsquo;s
            court magistrate.
          </p>
        }
      >
        <FactTable
          title="Johnstown Mayor's Court"
          rows={courtFacts}
          note="Court schedules and staffing change. Confirm your date with the Mayor's Court Clerk at (740) 967-5961 before relying on this listing."
        />
        <p>
          Nearly every citation the Johnstown Police Department writes inside the city limits starts here, and so do many written by
          the Ohio State Highway Patrol on U.S. 62 and S.R. 37 where those routes run through town. Jwayyed Law LLC represents drivers
          and defendants in Johnstown Mayor&rsquo;s Court and in <Link href="/courts">Ohio courts statewide</Link>. Call{' '}
          <a href="tel:+16142855482">(614) 285-5482</a>.
        </p>
        <p>
          Johnstown has grown. The 2020 census put its population at 5,182, enough to advance it to city status. Intel&rsquo;s{' '}
          <em>Ohio One</em> semiconductor campus in neighboring Jersey Township and the New Albany International Business Park
          build-out along S.R. 161 have put heavy commuter and construction traffic on U.S. 62, S.R. 37 and S.R. 310, and enforcement
          has grown with it. A routine speeding ticket can now be a points, CDL or insurance problem, and mayor&rsquo;s court moves fast
          enough that those consequences are often locked in before a defendant realizes a decision was made.
        </p>
      </Section>

      <Section title="What the court can and cannot decide" tone="ice">
        <p>
          <strong>R.C. 1905.01</strong> authorizes a mayor&rsquo;s court in an Ohio municipality with a population over 200 that does
          not have its own municipal court. Its jurisdiction covers violations of the municipality&rsquo;s ordinances, parking and
          standing violations, and moving traffic violations of state law on streets and state highways within the corporate limits.
        </p>
        <PointGrid
          points={[
            {
              title: 'It hears',
              body: 'Speeding and assured-clear-distance citations, traffic control device violations, driving under suspension and no-operator’s-license charges, open container and other minor misdemeanor citations, local code violations, and qualifying first-offense OVI charges.',
            },
            {
              title: 'It cannot',
              body: 'Hear felony charges, seat a jury, or keep a case outside its statutory grant. It is not a court of record.',
            },
            {
              title: 'Transfers',
              body: 'Under R.C. 1905.032, the mayor must transfer a case that exceeds the court’s jurisdiction and may transfer any case to municipal court, county court or common pleas before final disposition.',
            },
            {
              title: 'Where transfers go',
              body: 'Licking County Municipal Court, 40 W. Main Street, 3rd Floor, Newark, OH 43055.',
            },
          ]}
        />
      </Section>

      <Section title="OVI defense in Johnstown and the ten-year look-back">
        <p>
          An OVI charge can be heard here only in a clean first-offense posture. <strong>R.C. 1905.01</strong> permits the mayor&rsquo;s
          court to hear a charge under <strong>R.C. 4511.19</strong> only where the defendant has not, within ten years of the date of
          the offense charged, been convicted of or pleaded guilty to a prior OVI, an equivalent municipal ordinance, a substantially
          similar out-of-state or federal offense, or a reduced charge that arose out of a dismissed OVI. If a qualifying prior falls
          inside that window, the case must be transferred immediately. Checking the look-back is the first step in any Johnstown OVI
          case, because it decides the venue, the prosecutor and the realistic sentencing range.
        </p>
        <FactTable
          title="First OVI under House Bill 37 (effective April 9, 2025)"
          rows={[
            { label: 'Jail', value: 'Mandatory minimum 3 days, or a 3-day driver intervention program' },
            { label: 'Fines', value: '$565 to $1,075' },
            { label: 'License', value: 'Class five suspension of 1 to 3 years; 6 points' },
            { label: 'High-tier first offense', value: 'A breath test of .17 or higher, or a refusal with a prior refusal: 6 mandatory days' },
            {
              label: 'Hard suspension',
              value: 'HB 37 eliminated the former 15-day hard suspension for non-refusal first offenses where an ignition interlock device is installed',
            },
          ]}
          note="The penalties are the same whether the case stays in Johnstown or moves to Newark."
        />
        <p>
          Because of the HB 37 change, <Link href="/ovi-dui-defense/limited-driving-privileges">limited driving privileges</Link> can
          be sought earlier than under prior law. See the <Link href="/ovi-dui-defense/first-ovi">first OVI</Link> and{' '}
          <Link href="/ovi-dui-defense/high-tier-ovi">high-tier OVI</Link> pages for the full breakdown.
        </p>
        <Callout title="The license suspension appeal is not filed here">
          An Administrative License Suspension under <strong>R.C. 4511.191</strong> takes effect at arrest when a driver tests over the
          limit or refuses testing, and runs on its own clock. The appeal is due within 30 days and is filed with the court that has
          jurisdiction over the underlying charge: for a Johnstown arrest, Licking County Municipal Court in Newark. Because the
          mayor&rsquo;s court meets only twice a month, waiting for your first court date can use up most of that window.
        </Callout>
      </Section>

      <Section title="Traffic enforcement on U.S. 62 and S.R. 37" tone="ice">
        <p>
          U.S. 62 and S.R. 37 cross in downtown Johnstown, carrying traffic between Columbus, Newark, Mount Vernon and the New Albany
          corridor through a village-scale grid with abrupt speed-limit changes at the corporate limits. Construction convoys and shift
          traffic bound for the Intel <em>Ohio One</em> site and the business park add to it. Speed, assured clear distance, failure to
          yield and following-too-close citations dominate the docket.
        </p>
        <p>
          Under <strong>R.C. 4510.036</strong>, 12 points within two years triggers a mandatory license suspension, and each conviction
          reports to the BMV and your insurer. For CDL holders, a conviction a private motorist would absorb can end a commercial
          driving career. The firm works to keep the disposition off your record where it can: dismissal, amendment to a non-moving or
          zero-point violation, or a negotiated resolution that protects your license.
        </p>
        <LinkGrid
          links={[
            { href: '/criminal-defense/speeding-tickets', title: 'Speeding tickets', subtitle: 'Points and how to contest them' },
            { href: '/criminal-defense/driving-under-suspension', title: 'Driving under suspension', subtitle: 'Charges and defenses' },
            { href: '/ovi-dui-defense/commercial-dui-cdl', title: 'CDL OVI', subtitle: 'When a commercial license is at stake' },
          ]}
        />
      </Section>

      <Section title="Appealing a Johnstown Mayor's Court decision">
        <p>
          Ohio gives mayor&rsquo;s court defendants a strong second chance with a short deadline. A defendant who appeared without a
          lawyer, pleaded on the spot, and only later understood the license or job consequences may still have a path.
        </p>
        <Steps
          steps={[
            { title: 'Where it goes', body: 'Under R.C. 1905.22, to the municipal or county court with jurisdiction over the municipality: Licking County Municipal Court.' },
            { title: 'The deadline', body: "Under R.C. 1905.23, the notice of appeal must be filed with the mayor's court within ten days of judgment." },
            { title: 'A new trial', body: "Under R.C. 1905.25, the appeal is a trial de novo, retried in Newark from the beginning with no weight given to the mayor's court finding." },
          ]}
        />
        <p>If you were convicted or entered a plea at a recent session, contact the firm right away rather than waiting for the fine notice.</p>
      </Section>

      <Section title="Your record after Johnstown Mayor's Court" tone="ice">
        <p>
          A conviction here carries the same legal weight as one entered in any other Ohio court. It reports to the BMV, appears on
          background checks, and an OVI conviction from a mayor&rsquo;s court counts as a prior for Ohio&rsquo;s ten-year look-back.
          Many eligible misdemeanor convictions can later be sealed or expunged under <strong>R.C. 2953.32</strong> once the waiting
          period runs, though OVI convictions are excluded from sealing by statute. The firm weighs those consequences before advising
          on any plea. See <Link href="/criminal-defense/expungement-record-sealing">expungement and record sealing</Link>.
        </p>
        <p>
          Jwayyed Law LLC defends OVI, traffic and misdemeanor cases in Johnstown Mayor&rsquo;s Court and on appeal in Licking County
          Municipal Court. Call <a href="tel:+16142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>.
        </p>
        <LinkGrid
          columns={2}
          links={[
            { href: '/ovi-dui-defense', title: 'OVI/DUI defense', subtitle: 'Penalties and defenses across Ohio' },
            { href: '/criminal-defense', title: 'Criminal defense', subtitle: 'Misdemeanor charges across Ohio' },
          ]}
        />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
