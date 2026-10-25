import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Criminal Defense Lawyer in Circleville',
  description:
    'Misdemeanor defense at Circleville Municipal Court for Pickaway County: assault, theft, drug and traffic charges. Call (614) 285-5482.',
  keywords: ['criminal misdemeanor defense Pickaway County', 'misdemeanor attorney Circleville Municipal Court', 'Pickaway County criminal lawyer', 'Circleville misdemeanor defense'],
  openGraph: {
    title: 'Criminal Defense Lawyer in Circleville | Jwayyed Law LLC',
    description: 'Misdemeanor defense at Circleville Municipal Court, from a former Circleville Municipal Prosecutor.',
    url: 'https://www.jjlawohio.com/locations/pickaway-county/criminal-misdemeanor-defense-circleville-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/pickaway-county/criminal-misdemeanor-defense-circleville-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Pickaway County', href: '/courts/pickaway-county' },
  { label: 'Criminal Misdemeanor Defense - Circleville Municipal Court', href: '/locations/pickaway-county/criminal-misdemeanor-defense-circleville-municipal-court' },
];

const faqs = [
  {
    question: 'What are misdemeanor penalties in Circleville Municipal Court?',
    answer:
      'Penalties under the Ohio Revised Code depend on the degree of the offense. First-degree misdemeanors: up to 180 days in jail and a $1,000 fine. Second-degree misdemeanors: up to 90 days and $750. Third-degree misdemeanors: up to 60 days and $500. Fourth-degree misdemeanors: up to 30 days and $250. Defense representation can sometimes reduce these penalties.',
  },
  {
    question: 'What types of misdemeanor cases does Circleville Municipal Court handle?',
    answer:
      'Assault, domestic violence, theft, drug possession, disorderly conduct, traffic violations and other misdemeanor offenses occurring in Pickaway County. The court follows the Ohio Revised Code for penalties and procedure.',
  },
  {
    question: 'Can I get a misdemeanor expunged in Pickaway County?',
    answer:
      'Yes, many misdemeanors may be eligible for expungement under Ohio Revised Code 2953.31 once the sentence is complete and the waiting period has passed. Eligibility depends on the offense, prior convictions and the circumstances. An attorney can check eligibility and file the petition.',
  },
  {
    question: 'What should I do if I am charged with a misdemeanor in Pickaway County?',
    answer:
      'Use your right to remain silent and do not discuss the case without your attorney present. Contact a criminal defense attorney right away, before your first court date.',
  },
  {
    question: 'Do I need a local attorney for misdemeanor defense in Pickaway County?',
    answer:
      'You can hire any Ohio attorney. An attorney who knows Circleville Municipal Court, its procedures and the local prosecutors understands how the court schedules cases, what it expects in filings and how pretrial conferences tend to run.',
  },
  {
    question: 'What misdemeanor charges are common in Pickaway County?',
    answer:
      'Circleville Municipal Court hears a broad range of misdemeanors from the urban and rural parts of the county. Common charges include misdemeanor assault under ORC 2903.13, domestic violence under ORC 2919.25, misdemeanor drug possession under ORC 2925.11, theft and petty theft under ORC 2913.02, and property crimes such as criminal damaging under ORC 2909.06. Traffic-related misdemeanors, including driving under suspension and reckless operation, are also prosecuted often. A conviction can affect background checks for jobs, professional licenses and housing applications in Pickaway County and beyond.',
  },
  {
    question: 'What are the penalties for misdemeanor offenses in Pickaway County under ORC 2929.21?',
    answer:
      'Under Ohio Revised Code 2929.21, penalties in Circleville Municipal Court depend on the degree: first-degree misdemeanors (M1) carry up to 180 days in jail and fines up to $1,000; second-degree misdemeanors (M2) up to 90 days and $750; third-degree misdemeanors (M3) up to 60 days and $500; and fourth-degree misdemeanors (M4) up to 30 days and $250. Judges may also impose community control, community service, restitution and treatment. These are maximums; a reduced charge, suspended sentence or alternative sentence is sometimes possible depending on your circumstances and history.',
  },
  {
    question: 'Can misdemeanor convictions from Circleville Municipal Court be sealed under ORC 2953.32?',
    answer:
      'Yes. Under Ohio Revised Code 2953.32, most misdemeanor convictions from Circleville Municipal Court can be sealed after a one-year waiting period following final discharge, meaning all jail time, probation, community service, fines and other conditions are complete. Most M1 through M4 convictions qualify, though some are excluded, including convictions involving minor victims and certain traffic offenses. A sealed record is not available to the general public, which helps with jobs, professional licenses and housing. An attorney can assess your eligibility, prepare the petition and represent you at the sealing hearing.',
  },
];

const RELATED = [
  { href: '/courts/circleville-municipal-court', title: 'Circleville Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/pickaway-county', title: 'Pickaway County', subtitle: 'Every service the firm offers in the county' },
  { href: '/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court', title: 'OVI defense in Circleville', subtitle: 'Penalties and the 30-day ALS appeal' },
  { href: '/criminal-defense/driving-under-suspension', title: 'Driving under suspension', subtitle: 'A common traffic misdemeanor' },
  { href: '/criminal-defense/criminal-damaging', title: 'Criminal damaging', subtitle: 'Property damage charges' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Clearing an eligible record' },
];

export default function PickawayCriminalMisdemeanorDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Criminal Defense in Pickaway County',
    serviceType: 'Criminal Defense',
    areaServed: { '@type': 'County', name: 'Pickaway County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/pickaway-county/criminal-misdemeanor-defense-circleville-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Misdemeanor defense at Circleville Municipal Court"
        description="Misdemeanor charges from anywhere in Pickaway County go to Circleville Municipal Court. A first-degree misdemeanor carries up to 180 days in jail and a $1,000 fine."
      />

      <Section
        title="Where a Pickaway County misdemeanor is heard"
        intro={
          <p>
            Circleville Municipal Court is the main court for misdemeanor criminal cases from Circleville, Ashville, Commercial Point,
            Orient and the rest of Pickaway County in central Ohio.
          </p>
        }
      >
        <FactTable
          title="Circleville Municipal Court at a glance"
          rows={[
            { label: 'Address', value: '115 E. Main St, Circleville, OH 43113' },
            { label: 'Hears', value: 'All misdemeanor criminal cases occurring in Pickaway County' },
            { label: 'Communities', value: 'Circleville, Ashville, Commercial Point and Orient' },
            { label: 'Hearings', value: 'Misdemeanor cases are usually set for arraignment, pretrial conferences and hearings' },
          ]}
        />
        <p>
          The court follows the Ohio Revised Code for penalties and procedure, but local practice, prosecutor policy and the
          judge&rsquo;s approach shape how a case resolves. The firm&rsquo;s attorney previously served as Municipal Prosecutor and
          Assistant Law Director for the City of Circleville, and the firm works with the clerk&rsquo;s office on the court&rsquo;s
          filing deadlines and motion requirements.
        </p>
        <h3>What the court sees most</h3>
        <p>
          The county mixes urban and rural communities, and the docket reflects it: assault, domestic violence, drug possession,
          theft and criminal damaging, along with traffic misdemeanors such as driving under suspension and reckless operation.
        </p>
      </Section>

      <Section title="Misdemeanor cases the court hears" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Assault and domestic violence',
              body: 'Serious misdemeanors that can bring jail time, protective orders and a permanent record. These cases need attention right away.',
            },
            {
              title: 'Theft and property crimes',
              body: 'Theft, shoplifting and vandalism can bring jail, fines and restitution. Penalties depend on the value of the property and prior convictions.',
            },
            {
              title: 'Drug possession',
              body: "Even small amounts can bring jail, fines and a driver's license suspension. First-time offenders may qualify for intervention in lieu of conviction or drug court.",
            },
            {
              title: 'Disorderly conduct',
              body: 'Disorderly conduct and disturbing the peace often grow out of disputes and can be challenged for lack of evidence, police conduct or constitutional issues.',
            },
          ]}
        />
      </Section>

      <Section title="Misdemeanor penalties in Ohio">
        <FactTable
          title="Maximum penalties by degree"
          rows={[
            { label: 'First-degree misdemeanor', value: 'Up to 180 days in jail and fines up to $1,000. Includes assault, domestic violence and certain theft charges.' },
            { label: 'Second-degree misdemeanor', value: 'Up to 90 days in jail and fines up to $750. Includes lesser assaults, certain theft charges and disorderly conduct.' },
            { label: 'Third-degree misdemeanor', value: 'Up to 60 days in jail and fines up to $500. Includes minor property crimes and certain traffic-related offenses.' },
            { label: 'Fourth-degree misdemeanor', value: 'Up to 30 days in jail and fines up to $250. Includes minor offenses and certain traffic violations.' },
          ]}
          note="These are maximums. Reduced charges, alternative sentencing, community service or dismissal are possible in some cases."
        />
        <h3>Expungement and record sealing</h3>
        <p>
          Misdemeanor convictions in Pickaway County may be eligible for expungement or sealing under Ohio Revised Code 2953.31 once
          the sentence is complete and the waiting period has passed. Eligibility depends on the offense, prior convictions and the
          circumstances.
        </p>
      </Section>

      <Section title="Defenses and what the firm does" tone="ice">
        <PointGrid
          points={[
            { title: 'Evidence challenges', body: 'Admissibility, police procedure, search and seizure, and witness credibility.' },
            { title: 'Constitutional challenges', body: 'Illegal stops, searches and arrests, and Miranda violations.' },
            { title: 'Self-defense', body: 'Self-defense or defense of others in assault cases.' },
            { title: 'Lack of intent', body: 'No criminal intent, or a mistake of fact.' },
            { title: 'Alibi', body: 'Evidence that you were somewhere else at the time.' },
            {
              title: 'Negotiation and alternatives',
              body: 'Reduced charges, alternative sentencing, community service, treatment or intervention in lieu of conviction.',
            },
          ]}
        />
        <p>
          On each case the firm reviews the evidence, police reports and charging documents, files pretrial motions to suppress
          evidence or dismiss charges, negotiates with Pickaway County prosecutors, tries the case when it cannot be resolved, and
          helps with expungement afterward.
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
