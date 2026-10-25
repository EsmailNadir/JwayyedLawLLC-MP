import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Delaware County Criminal Defense Attorney',
  description:
    'Misdemeanor defense at Delaware County Municipal Court for Delaware, Powell and Dublin: assault, theft and license consequences. Call (614) 285-5482.',
  keywords: ['criminal defense Delaware Ohio', 'misdemeanor attorney Delaware County', 'Delaware County Municipal Court criminal lawyer', 'Powell Ohio misdemeanor defense', 'Dublin criminal defense attorney'],
  openGraph: {
    title: 'Delaware County Criminal Defense Attorney | Jwayyed Law LLC',
    description: 'Misdemeanor defense at Delaware County Municipal Court, with professional licensing consequences in view.',
    url: 'https://www.jjlawohio.com/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Delaware County', href: '/locations/delaware-county' },
  { label: 'Criminal Misdemeanor Defense - Delaware County Municipal Court', href: '/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court' },
];

const faqs = [
  {
    question: 'What are the misdemeanor penalties in Delaware County Municipal Court?',
    answer:
      'The court follows the Ohio Revised Code. First-degree misdemeanors (assault, domestic violence, certain theft charges): up to 180 days in jail and a $1,000 fine. Second-degree: up to 90 days and $750. Third-degree: up to 60 days and $500. Fourth-degree: up to 30 days and $250. Minor misdemeanors carry no jail time but up to a $150 fine. A reduced charge, diversion or dismissal is often possible.',
  },
  {
    question: 'What types of misdemeanor cases does Delaware County Municipal Court handle?',
    answer:
      'Delaware County Municipal Court, 70 N. Union St, Delaware, hears all misdemeanor criminal charges arising in the county, including assault, domestic violence, theft, shoplifting, drug possession, disorderly conduct, criminal damaging, menacing, driving under suspension, trespass and traffic-related criminal charges. As the county grows, cases from Powell, Lewis Center, Westerville and the Delaware County portion of Dublin are increasingly common.',
  },
  {
    question: 'Does a misdemeanor conviction affect professional licenses in Delaware County?',
    answer:
      "Yes. With Delaware County's large professional workforce, misdemeanor convictions can trigger licensing board reviews for medical professionals, attorneys, real estate agents, teachers, nurses and others. Ohio licensing boards have broad discretion to discipline or revoke licenses based on criminal convictions. The firm weighs licensing consequences alongside the criminal case and works toward dismissal, reduction or diversion.",
  },
  {
    question: 'What is Intervention in Lieu of Conviction (ILC) in Delaware County?',
    answer:
      "Ohio's Intervention in Lieu of Conviction (ILC) lets eligible first-time offenders charged with drug-related offenses, or offenses driven by substance abuse or mental health issues, complete treatment in lieu of conviction. Finishing it leads to dismissal. Delaware County Municipal Court has discretion to grant ILC, and the firm checks eligibility and asks for ILC or similar diversion where appropriate.",
  },
  {
    question: 'Can a misdemeanor be expunged in Delaware County?',
    answer:
      'Many misdemeanor convictions are eligible for expungement under Ohio Revised Code 2953.31 once the sentence and waiting period are complete. For first-degree misdemeanors the wait is generally one year after discharge; for lower degrees it may be shorter. Some charges are ineligible, including domestic violence and certain sexually oriented offenses. The firm files expungement petitions in Delaware County Municipal Court.',
  },
  {
    question: 'What should I do immediately after a misdemeanor arrest in Delaware County?',
    answer:
      'Use your right to remain silent and make no statements to law enforcement. Do not contact the alleged victim in a domestic violence or assault case. Ask for an attorney right away, and contact the firm so it can appear at your arraignment, address bond conditions, preserve evidence and start on the defense before pretrial deadlines pass.',
  },
  {
    question: 'How does Delaware County Municipal Court handle domestic violence charges?',
    answer:
      "Domestic violence charges in Delaware County Municipal Court are prosecuted by the Delaware County prosecutor's office independently of the alleged victim's wishes. Ohio law also imposes mandatory minimum penalties for domestic violence convictions and prohibits firearm possession after conviction. The firm challenges the evidence, the credibility of the accusation and procedural violations, and considers self-defense and diversion where appropriate.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for criminal defense in Delaware County?',
    answer:
      'The firm defends misdemeanor charges in Delaware County Municipal Court, knows its local procedures and prosecutor practices, and accounts for the professional licensing issues many Delaware County clients face. Call (614) 285-5482 to schedule a consultation.',
  },
];

const RELATED = [
  { href: '/courts/delaware-county-municipal-court', title: 'Delaware County Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/delaware-county', title: 'Delaware County', subtitle: 'Every service the firm offers in the county' },
  { href: '/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court', title: 'OVI defense in Delaware County', subtitle: 'Penalties and the 30-day ALS appeal' },
  { href: '/criminal-defense/domestic-violence', title: 'Domestic violence', subtitle: 'Mandatory minimums and firearm consequences' },
  { href: '/criminal-defense/petty-theft', title: 'Petty theft', subtitle: 'Retail theft and shoplifting charges' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Clearing an eligible record' },
];

export default function DelawareCriminalMisdemeanorDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Criminal Defense in Delaware County',
    serviceType: 'Criminal Defense',
    areaServed: { '@type': 'County', name: 'Delaware County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal misdemeanor defense in Delaware County"
        description="Every misdemeanor in Delaware County is heard at Delaware County Municipal Court in Delaware. For licensed professionals, a conviction there can also bring a board review."
      />

      <Section
        title="Where a Delaware County misdemeanor is heard"
        intro={
          <p>
            Delaware County is one of Ohio&rsquo;s fastest-growing counties, with communities expanding along US 23 and US 36 north
            of Columbus. One court hears every misdemeanor from them.
          </p>
        }
      >
        <FactTable
          title="Delaware County Municipal Court at a glance"
          rows={[
            { label: 'Address', value: '70 N. Union St, Delaware, OH 43015' },
            { label: 'Hears', value: 'All misdemeanor criminal charges arising in the county' },
            { label: 'Communities', value: 'Delaware, Powell, Westerville, Dublin portions in Delaware County, Lewis Center and Sunbury' },
            { label: 'Prosecution', value: 'The Delaware County prosecutor’s office in domestic violence cases' },
            { label: 'Diversion', value: 'The court has discretion to grant Intervention in Lieu of Conviction' },
          ]}
        />
        <p>
          New commercial areas in Powell and Lewis Center bring more retail theft, disorderly conduct and assault cases. A conviction
          creates a permanent record that can affect employment, professional licensing and housing. See the firm&rsquo;s{' '}
          <Link href="/criminal-defense">criminal defense</Link> practice for more.
        </p>
        <h3>Licensed professionals</h3>
        <p>
          Many residents work in healthcare, technology, finance and other licensed fields. Ohio boards for medical professionals,
          attorneys, nurses, real estate agents and teachers can investigate, suspend or revoke a license based on a criminal record,
          so the firm considers those consequences in every strategy.
        </p>
      </Section>

      <Section title="Charges the court hears" tone="ice">
        <PointGrid
          points={[
            { title: 'Assault and aggravated assault', body: 'First-degree misdemeanor, up to 180 days in jail and a $1,000 fine.' },
            { title: 'Domestic violence', body: 'First-degree misdemeanor, with consequences including a firearm prohibition.' },
            { title: 'Theft and shoplifting', body: 'The degree depends on value.' },
            { title: 'Drug possession', body: 'Controlled substances, marijuana and drug paraphernalia.' },
            { title: 'Menacing and criminal damaging', body: 'Menacing, aggravated menacing, criminal damaging or endangering and criminal trespass.' },
            { title: 'Driving offenses', body: 'Driving under suspension and other traffic-related criminal charges.' },
          ]}
        />
      </Section>

      <Section title="Misdemeanor penalties in Delaware County">
        <FactTable
          title="Maximum penalties by degree"
          rows={[
            { label: 'First-degree misdemeanor', value: 'Up to 180 days in jail and a $1,000 fine.' },
            { label: 'Second-degree misdemeanor', value: 'Up to 90 days and $750.' },
            { label: 'Third-degree misdemeanor', value: 'Up to 60 days and $500.' },
            { label: 'Fourth-degree misdemeanor', value: 'Up to 30 days and $250.' },
            { label: 'Minor misdemeanor', value: 'No jail; up to a $150 fine.' },
          ]}
          note="These are maximums and can often be reduced through diversion or a plea agreement."
        />
        <h3>Expungement</h3>
        <p>
          A misdemeanor conviction in Delaware County Municipal Court may qualify for expungement and sealing under Ohio Revised Code
          2953.31. The record is sealed from public view and removed from most background checks, and on most applications you can
          truthfully answer that you have no conviction. Waiting periods and eligibility depend on the offense and your record.
          Domestic violence convictions and most traffic offenses are not eligible.
        </p>
      </Section>

      <Section title="How the firm defends the case" tone="ice">
        <PointGrid
          points={[
            { title: 'The evidence', body: 'Police reports, body-cam and dash-cam footage, witness statements and physical evidence.' },
            { title: 'Suppression', body: 'Whether the arrest or search was valid under the Fourth Amendment and ORC 2935.26.' },
            { title: 'Assault cases', body: 'Self-defense arguments.' },
            { title: 'Drug cases', body: 'The search, chain of custody and laboratory procedures.' },
            { title: 'Domestic violence cases', body: 'The factual background, witness bias and exculpatory evidence.' },
            { title: 'Diversion', body: 'ILC, community diversion and other programs that can end in dismissal.' },
          ]}
        />
        <p>
          If you are facing a misdemeanor in Delaware County, call (614) 285-5482. What you say to police and whether you go to
          arraignment with counsel can shape the outcome.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
