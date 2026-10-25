import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Criminal Defense Lawyer in Morrow County',
  description:
    'Misdemeanor defense at Morrow County Municipal Court in Mount Gilead: trespass, assault, theft and drug charges. Call (614) 285-5482.',
  keywords: ['criminal misdemeanor defense Morrow County', 'misdemeanor attorney Morrow County Municipal Court', 'Morrow County criminal lawyer', 'Morrow County misdemeanor defense'],
  openGraph: {
    title: 'Criminal Defense Lawyer in Morrow County | Jwayyed Law LLC',
    description: 'Misdemeanor defense at Morrow County Municipal Court for Mount Gilead, Cardington, Edison and Marengo.',
    url: 'https://www.jjlawohio.com/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Morrow County', href: '/courts/morrow-county' },
  { label: 'Criminal Misdemeanor Defense - Morrow County Municipal Court', href: '/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court' },
];

const faqs = [
  {
    question: 'What are misdemeanor penalties in Morrow County Municipal Court?',
    answer:
      'Penalties under the Ohio Revised Code depend on the degree of the offense. First-degree misdemeanors: up to 180 days in jail and a $1,000 fine. Second-degree misdemeanors: up to 90 days and $750. Third-degree misdemeanors: up to 60 days and $500. Fourth-degree misdemeanors: up to 30 days and $250. Defense representation can sometimes reduce these penalties.',
  },
  {
    question: 'What types of misdemeanor cases does Morrow County Municipal Court handle?',
    answer:
      'Assault, domestic violence, theft, drug possession, disorderly conduct, traffic violations and other misdemeanor offenses occurring in Morrow County. The court follows the Ohio Revised Code for penalties and procedure.',
  },
  {
    question: 'Can I get a misdemeanor expunged in Morrow County?',
    answer:
      'Yes, many misdemeanors may be eligible for expungement under Ohio Revised Code 2953.31 once the sentence is complete and the waiting period has passed. Eligibility depends on the offense, prior convictions and the circumstances. An attorney can check eligibility and file the petition.',
  },
  {
    question: 'What should I do if I am charged with a misdemeanor in Morrow County?',
    answer:
      'Use your right to remain silent and do not discuss the case without your attorney present. Contact a criminal defense attorney right away, before your first court date.',
  },
  {
    question: 'Do I need a local attorney for misdemeanor defense in Morrow County?',
    answer:
      'You can hire any Ohio attorney. An attorney who knows Morrow County Municipal Court, its procedures and the local prosecutors understands how the court schedules cases, what it expects in filings and how pretrial conferences tend to run.',
  },
  {
    question: 'What types of misdemeanor charges are common in rural Morrow County?',
    answer:
      'Morrow County is largely rural and agricultural, and the charges Morrow County Municipal Court hears most reflect that. Common charges include agricultural trespass and criminal trespass under ORC 2911.21 (often disputes over farm boundaries or hunting rights), theft and criminal damaging under ORC 2909.06, misdemeanor assault under ORC 2903.13, and domestic violence under ORC 2919.25. Drug misdemeanors are also common in rural Ohio. In a small community the accused often knows the people and witnesses involved, which a defense attorney has to handle with care.',
  },
  {
    question: 'What are the penalties for a misdemeanor conviction in Morrow County under ORC 2929.21?',
    answer:
      'Under Ohio Revised Code 2929.21, penalties in Morrow County Municipal Court are set by degree: first-degree misdemeanors (M1) carry up to 180 days in jail and fines up to $1,000; second-degree misdemeanors (M2) up to 90 days and $750; third-degree misdemeanors (M3) up to 60 days and $500; and fourth-degree misdemeanors (M4) up to 30 days and $250. The court may also impose community control, community service and restitution. These are maximums; a reduced charge, alternative sentence or dismissal is sometimes possible depending on the facts.',
  },
  {
    question: 'Can misdemeanor convictions from Morrow County Municipal Court be sealed under ORC 2953.32?',
    answer:
      'Yes. Under Ohio Revised Code 2953.32, most misdemeanor convictions from Morrow County Municipal Court can be sealed after a one-year waiting period following final discharge, meaning all jail time, fines, probation and other conditions are complete. Most M1 through M4 convictions qualify. Some categories are excluded, including convictions involving minor victims and certain traffic offenses. A sealed record is not available to the general public, which removes barriers to jobs and housing in and around Morrow County. An attorney can review your history, confirm eligibility, prepare the petition and represent you at the sealing hearing.',
  },
];

const RELATED = [
  { href: '/courts/morrow-county-municipal-court', title: 'Morrow County Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/morrow-county', title: 'Morrow County', subtitle: 'Every service the firm offers in the county' },
  { href: '/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court', title: 'OVI defense in Morrow County', subtitle: 'Penalties and the 30-day ALS appeal' },
  { href: '/criminal-defense/criminal-trespass', title: 'Criminal trespass', subtitle: 'Including farm boundary and hunting disputes' },
  { href: '/criminal-defense/criminal-damaging', title: 'Criminal damaging', subtitle: 'Property damage charges' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Clearing an eligible record' },
];

export default function MorrowCriminalMisdemeanorDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Criminal Defense in Morrow County',
    serviceType: 'Criminal Defense',
    areaServed: { '@type': 'County', name: 'Morrow County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Misdemeanor defense at Morrow County Municipal Court"
        description="Misdemeanor charges from anywhere in Morrow County go to Morrow County Municipal Court in Mount Gilead. A first-degree misdemeanor carries up to 180 days in jail and a $1,000 fine."
      />

      <Section
        title="Where a Morrow County misdemeanor is heard"
        intro={
          <p>
            Morrow County Municipal Court is the main court for misdemeanor criminal cases from Mount Gilead, Cardington, Edison,
            Marengo and the rest of Morrow County in north-central Ohio.
          </p>
        }
      >
        <FactTable
          title="Morrow County Municipal Court at a glance"
          rows={[
            { label: 'Address', value: '48 E. High St, Mt. Gilead, OH 43338' },
            { label: 'Hears', value: 'All misdemeanor criminal cases occurring in Morrow County' },
            { label: 'Communities', value: 'Mount Gilead, Cardington, Edison and Marengo' },
            { label: 'Hearings', value: 'Misdemeanor cases are usually set for arraignment, pretrial conferences and hearings' },
          ]}
        />
        <p>
          The court follows the Ohio Revised Code for penalties and procedure, but local practice, prosecutor policy and the
          judge&rsquo;s approach shape how a case resolves. The firm works with the clerk&rsquo;s office and tracks the court&rsquo;s
          filing deadlines and motion requirements.
        </p>
        <h3>Charges in a rural county</h3>
        <p>
          Morrow County is largely agricultural. Trespass cases often grow out of farm boundary or hunting disputes, and theft,
          criminal damaging, assault and domestic violence fill much of the rest of the docket. In a small community the accused often
          knows the witnesses, and that shapes how a case is defended and negotiated.
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
          Misdemeanor convictions in Morrow County may be eligible for expungement or sealing under Ohio Revised Code 2953.31 once the
          sentence is complete and the waiting period has passed. Eligibility depends on the offense, prior convictions and the
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
          evidence or dismiss charges, negotiates with Morrow County prosecutors, tries the case when it cannot be resolved, and helps
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
