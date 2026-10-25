import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Athens County Criminal Defense Attorney',
  description:
    'Misdemeanor defense at Athens Municipal Court: assault, theft, drug and disorderly conduct charges near Ohio University. Call (614) 285-5482.',
  keywords: ['criminal misdemeanor defense Athens County', 'misdemeanor attorney Athens Municipal Court', 'Athens County criminal lawyer', 'Athens misdemeanor defense', 'Athens criminal misdemeanor defense attorney', 'sealing criminal records Athens County'],
  openGraph: {
    title: 'Athens County Criminal Defense Attorney | Jwayyed Law LLC',
    description: 'Misdemeanor defense at Athens Municipal Court, from disorderly conduct near campus to assault and theft.',
    url: 'https://www.jjlawohio.com/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Athens County', href: '/locations/athens-county' },
  { label: 'Criminal Misdemeanor Defense - Athens Municipal Court', href: '/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court' },
];

const faqs = [
  {
    question: 'What are misdemeanor penalties in Athens Municipal Court?',
    answer:
      'Penalties under the Ohio Revised Code depend on the degree of the offense. First-degree misdemeanors: up to 180 days in jail and a $1,000 fine. Second-degree misdemeanors: up to 90 days and $750. Third-degree misdemeanors: up to 60 days and $500. Fourth-degree misdemeanors: up to 30 days and $250. Defense representation can sometimes reduce these penalties.',
  },
  {
    question: 'What types of misdemeanor cases does Athens Municipal Court handle?',
    answer:
      'Assault, domestic violence, theft, drug possession, disorderly conduct, traffic violations and other misdemeanor offenses occurring in Athens County. The court follows the Ohio Revised Code for penalties and procedure.',
  },
  {
    question: 'Can I get a misdemeanor expunged in Athens County?',
    answer:
      'Yes, many misdemeanors may be eligible for expungement under Ohio Revised Code 2953.31 once the sentence is complete and the waiting period has passed. Eligibility depends on the offense, prior convictions and the circumstances. An attorney can check eligibility and file the petition.',
  },
  {
    question: 'What should I do if I am charged with a misdemeanor in Athens County?',
    answer:
      'Use your right to remain silent and do not discuss the case without your attorney present. Contact a criminal defense attorney right away, before your first court date.',
  },
  {
    question: 'Do I need a local attorney for misdemeanor defense in Athens County?',
    answer:
      'You can hire any Ohio attorney. An attorney who knows Athens Municipal Court, its procedures and the local prosecutors understands how the court schedules cases, what it expects in filings and how pretrial conferences tend to run.',
  },
  {
    question: 'What misdemeanor offenses are most common in Athens Municipal Court near Ohio University?',
    answer:
      'Athens is a college town, so the court sees many alcohol-related misdemeanors. The most common are disorderly conduct under ORC 2917.11 (often from public intoxication or disturbances near campus), criminal trespass under ORC 2911.21, underage consumption, and petty theft under ORC 2913.02. These charges spike around university events, homecoming weekends and the Court Street bar district. Even a misdemeanor conviction can affect academic standing, campus housing eligibility and future jobs. A defense attorney can pursue dismissal, a reduced charge or a diversion program for students and residents.',
  },
  {
    question: 'What are the penalties for a first-degree misdemeanor in Ohio under ORC 2929.21?',
    answer:
      'Under Ohio Revised Code 2929.21, a first-degree misdemeanor (M1) carries up to 180 days in jail and a fine of up to $1,000. In Athens Municipal Court, M1 offenses include misdemeanor assault under ORC 2903.13, domestic violence under ORC 2919.25 and certain theft offenses. Judges can impose less than the maximum, or community control, community service or treatment instead of jail. A conviction, even without jail, creates a permanent criminal record that can affect jobs, professional licenses and housing.',
  },
  {
    question: 'Can misdemeanor convictions from Athens Municipal Court be sealed under ORC 2953.32?',
    answer:
      'Yes. Under Ohio Revised Code 2953.32, most misdemeanor convictions from Athens Municipal Court can be sealed (often called expungement) after a one-year waiting period following final discharge, meaning after any jail time, probation, fines and other conditions are complete. Most M1 through M4 misdemeanors qualify. Some offenses do not, including offenses with victims who are minors and certain traffic offenses. A sealed record is not available to the general public, which helps with jobs and housing. An attorney can check your eligibility, prepare the petition and represent you at the sealing hearing.',
  },
];

const RELATED = [
  { href: '/courts/athens-municipal-court', title: 'Athens Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/athens-county', title: 'Athens County', subtitle: 'Every service the firm offers in the county' },
  { href: '/locations/athens-county/ovi-dui-defense-athens-municipal-court', title: 'OVI defense in Athens', subtitle: 'Penalties and the 30-day ALS appeal' },
  { href: '/criminal-defense/disorderly-conduct', title: 'Disorderly conduct', subtitle: 'The most common charge near campus' },
  { href: '/criminal-defense/open-container', title: 'Open container', subtitle: 'Alcohol charges in public and in vehicles' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Clearing an eligible record' },
];

export default function AthensCriminalMisdemeanorDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Criminal Defense in Athens County',
    serviceType: 'Criminal Defense',
    areaServed: { '@type': 'County', name: 'Athens County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Athens County criminal defense attorney at Athens Municipal Court"
        description="Misdemeanor charges from anywhere in Athens County go to Athens Municipal Court. A first-degree misdemeanor carries up to 180 days in jail and a $1,000 fine."
      />

      <Section
        title="Where an Athens County misdemeanor is heard"
        intro={
          <p>
            Athens Municipal Court is the main court for misdemeanor criminal cases from Athens, Nelsonville, The Plains, Albany and
            the rest of Athens County in southeastern Ohio.
          </p>
        }
      >
        <FactTable
          title="Athens Municipal Court at a glance"
          rows={[
            { label: 'Address', value: '8 E. Washington St, Athens, OH 45701' },
            { label: 'Hears', value: 'All misdemeanor criminal cases occurring in Athens County' },
            { label: 'Communities', value: 'Athens, Nelsonville, The Plains, Albany and the Ohio University area' },
            { label: 'Hearings', value: 'Misdemeanor cases are usually set for arraignment, pretrial conferences and hearings' },
          ]}
        />
        <p>
          The court follows the Ohio Revised Code for penalties and procedure, but local practice, prosecutor policy and the
          judge&rsquo;s approach shape how a case resolves. The firm works with the clerk&rsquo;s office and tracks the court&rsquo;s
          filing deadlines and motion requirements.
        </p>
        <h3>Charges near Ohio University</h3>
        <p>
          Athens is a college town, and alcohol-related charges such as disorderly conduct, criminal trespass, underage consumption
          and petty theft rise around university events, homecoming weekends and the Court Street bar district. For a student, even a
          misdemeanor conviction can reach academic standing and campus housing.
        </p>
      </Section>

      <Section title="Criminal misdemeanor charges the court hears" tone="ice">
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

      <Section title="Municipal court misdemeanor penalties in Ohio">
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
        <h3>Expungement or record sealing</h3>
        <p>
          Misdemeanor convictions in Athens County may be eligible for expungement or sealing under Ohio Revised Code 2953.31 once
          the sentence is complete and the waiting period has passed. Eligibility depends on the offense, prior convictions and the
          circumstances.
        </p>
      </Section>

      <Section title="Athens County criminal defense strategies" tone="ice">
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
          On each case, the firm&rsquo;s criminal misdemeanor defense attorney reviews the evidence, police reports and charging documents, files pretrial motions to suppress
          evidence or dismiss charges, negotiates with Athens County prosecutors, tries the case when it cannot be resolved, and helps
          with expungement afterward.
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
