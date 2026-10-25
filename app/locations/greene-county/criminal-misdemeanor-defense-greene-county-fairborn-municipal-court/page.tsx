import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Criminal Defense Lawyer for Fairborn & Xenia',
  description:
    'Misdemeanor defense at Fairborn and Xenia Municipal Courts for Greene County, including military personnel near Wright-Patterson AFB. (614) 285-5482.',
  keywords: ['criminal defense Fairborn Ohio', 'misdemeanor attorney Greene County', 'Fairborn Municipal Court criminal lawyer', 'Xenia misdemeanor defense', 'military criminal defense Ohio'],
  openGraph: {
    title: 'Criminal Defense Lawyer for Fairborn & Xenia | Jwayyed Law LLC',
    description: 'Misdemeanor defense in Fairborn and Xenia Municipal Courts: which court hears your case, penalties and military consequences.',
    url: 'https://www.jjlawohio.com/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Greene County', href: '/courts/greene-county' },
  { label: 'Criminal Misdemeanor Defense - Greene County Courts', href: '/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court' },
];

const faqs = [
  {
    question: 'What are the misdemeanor penalties in Fairborn Municipal Court and Xenia Municipal Court?',
    answer:
      'Both courts follow the Ohio Revised Code. First-degree misdemeanors (assault, domestic violence, certain theft): up to 180 days in jail and a $1,000 fine. Second-degree: up to 90 days and $750. Third-degree: up to 60 days and $500. Fourth-degree: up to 30 days and $250. Minor misdemeanors carry no jail time but up to a $150 fine. A reduced charge, diversion or dismissal is often possible.',
  },
  {
    question: 'Which court handles my misdemeanor in Greene County: Fairborn or Xenia?',
    answer:
      'It depends on where the offense happened. Fairborn Municipal Court, 1 W. Main St, Fairborn, hears cases from Fairborn, Beavercreek and surrounding areas. Xenia Municipal Court, 101 N. Detroit St, Xenia, hears cases from Xenia, Yellow Springs, Centerville portions and other areas of Greene County. The firm practices in both courts.',
  },
  {
    question: 'How does a misdemeanor charge affect military personnel in Greene County?',
    answer:
      'Military personnel at Wright-Patterson Air Force Base charged with a misdemeanor in Fairborn or Xenia Municipal Court face the Ohio case and possible military discipline under the UCMJ. A conviction can affect security clearances, promotions, re-enlistment eligibility and discharge status. The firm pursues outcomes (dismissal, reduction, ILC) that limit both civilian and military consequences.',
  },
  {
    question: 'Can a misdemeanor be expunged in Greene County?',
    answer:
      'Many misdemeanor convictions in Greene County are eligible for expungement (record sealing) under Ohio Revised Code 2953.31 once the sentence and waiting period are complete. Expungement seals the record from public view, and on most applications you can truthfully answer that you have no conviction. Domestic violence convictions, certain traffic offenses and some other charges are not eligible.',
  },
  {
    question: 'What is Intervention in Lieu of Conviction (ILC) in Greene County?',
    answer:
      "Ohio's Intervention in Lieu of Conviction (ILC) lets eligible first-time offenders charged with drug-related or substance-abuse-driven offenses complete treatment instead of prosecution. Finishing it leads to dismissal. Both Fairborn Municipal Court and Xenia Municipal Court have discretion to grant ILC, and the firm checks eligibility and asks for diversion that leaves no conviction on your record.",
  },
  {
    question: 'What should I do immediately after a misdemeanor arrest in Greene County?',
    answer:
      'Use your right to remain silent and make no statements to law enforcement without an attorney present. Do not contact the alleged victim in a domestic violence or assault case, which can lead to more charges. Contact the firm right away so it can attend your arraignment, address bond conditions, preserve evidence and start on the defense.',
  },
  {
    question: 'How are domestic violence cases handled in Greene County courts?',
    answer:
      "Domestic violence cases in Fairborn and Xenia Municipal Courts are prosecuted by the Greene County prosecutor's office, not the alleged victim, and can go forward even if the alleged victim does not cooperate. A conviction carries a mandatory firearm prohibition, possible immigration consequences and ineligibility for expungement. The firm investigates the facts, challenges credibility and evidence, and considers self-defense and diversion where appropriate.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for criminal defense in Greene County?',
    answer:
      'The firm defends misdemeanor charges in both Fairborn Municipal Court and Xenia Municipal Court, accounts for the military consequences facing personnel near Wright-Patterson AFB, reviews all of the evidence and identifies the constitutional and factual defenses. Call (614) 285-5482 to schedule a consultation.',
  },
];

const RELATED = [
  { href: '/courts/fairborn-municipal-court', title: 'Fairborn Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/greene-county', title: 'Greene County', subtitle: 'Every service the firm offers in the county' },
  {
    href: '/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court',
    title: 'OVI defense in Fairborn and Xenia',
    subtitle: 'Penalties and the 30-day ALS appeal',
  },
  { href: '/criminal-defense/domestic-violence', title: 'Domestic violence', subtitle: 'Firearm and record consequences' },
  { href: '/criminal-defense/assault-charges', title: 'Assault charges', subtitle: 'Self-defense and defense of others' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Clearing an eligible record' },
];

export default function GreeneCriminalMisdemeanorDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Criminal Defense in Greene County',
    serviceType: 'Criminal Defense',
    areaServed: { '@type': 'County', name: 'Greene County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal misdemeanor defense in Greene County"
        description="A Greene County misdemeanor goes to Fairborn Municipal Court or Xenia Municipal Court, depending on where it happened. For Wright-Patterson personnel, a conviction can also reach a clearance."
      />

      <Section
        title="Which court hears your case"
        intro={
          <p>
            Misdemeanor charges in Greene County are handled in two courts, and the place of the offense decides which. The firm
            represents clients in both, from Fairborn, Beavercreek, Xenia, Yellow Springs and Centerville.
          </p>
        }
      >
        <FactTable
          title="Fairborn Municipal Court"
          rows={[
            { label: 'Address', value: '1 W. Main St, Fairborn, OH 45324' },
            { label: 'Cases from', value: 'Fairborn, Beavercreek and surrounding areas' },
            { label: 'Common cases', value: 'Retail theft, disorderly conduct and assault from the commercial areas and near the base' },
          ]}
        />
        <FactTable
          title="Xenia Municipal Court"
          rows={[
            { label: 'Address', value: '101 N. Detroit St, Xenia, OH 45385' },
            { label: 'Cases from', value: 'Xenia, Yellow Springs, Centerville portions and other areas of Greene County' },
          ]}
        />
        <p>
          Both courts are served by the Greene County prosecutor&rsquo;s office in domestic violence cases. See the firm&rsquo;s{' '}
          <Link href="/criminal-defense">criminal defense</Link> practice for more on each charge.
        </p>
      </Section>

      <Section title="Charges for military personnel" tone="ice">
        <p>
          Wright-Patterson Air Force Base sets Greene County apart. Active-duty members, reservists, veterans and civilian base
          employees charged in Fairborn or Xenia face security clearance questions, UCMJ proceedings and career consequences on top of
          Ohio penalties. Clearance adjudicators look at arrests, charges and convictions whatever the civilian sentence. A domestic
          violence conviction triggers the federal firearm prohibition under the Lautenberg Amendment, which can mean immediate
          disqualification from military service.
        </p>
        <p>
          The firm aims for dismissal, a reduction to a non-conviction or ILC, and coordinates with military defense counsel when
          appropriate.
        </p>
      </Section>

      <Section title="Charges the courts hear">
        <PointGrid
          points={[
            { title: 'Assault and aggravated assault', body: 'Including self-defense and defense-of-others claims.' },
            { title: 'Domestic violence', body: 'Prosecuted by the county, with firearm and immigration consequences.' },
            { title: 'Theft and shoplifting', body: 'Common in the Fairborn and Beavercreek commercial areas.' },
            { title: 'Drug possession', body: 'Controlled substances and marijuana.' },
            { title: 'Disorderly conduct and menacing', body: 'Also criminal damaging or endangering and criminal trespass.' },
            { title: 'Driving offenses', body: 'Driving under suspension and other traffic-related criminal charges.' },
          ]}
        />
        <FactTable
          title="Maximum penalties by degree"
          rows={[
            { label: 'First-degree misdemeanor', value: 'Up to 180 days in jail and a $1,000 fine.' },
            { label: 'Second-degree misdemeanor', value: 'Up to 90 days and $750.' },
            { label: 'Third-degree misdemeanor', value: 'Up to 60 days and $500.' },
            { label: 'Fourth-degree misdemeanor', value: 'Up to 30 days and $250.' },
            { label: 'Minor misdemeanor', value: 'No jail; up to a $150 fine.' },
          ]}
          note="These maximums are not imposed automatically. Reduced charges, suspended sentences, community service, diversion or dismissal are often possible."
        />
      </Section>

      <Section title="How the firm defends the case" tone="ice">
        <PointGrid
          points={[
            { title: 'The evidence', body: 'Police reports, body-cam footage, witness statements and physical evidence.' },
            { title: 'The arrest and search', body: 'Compliance with constitutional requirements and ORC 2935.26.' },
            { title: 'Assault cases', body: 'Self-defense and defense of others under Ohio law.' },
            { title: 'Drug cases', body: 'The basis for the search, chain of custody and laboratory procedures.' },
            { title: 'Domestic violence cases', body: 'The factual background, all communications and witness credibility.' },
            { title: 'Diversion', body: 'Eligibility for ILC, which can end in dismissal after treatment.' },
          ]}
        />
        <p>
          If you are facing a misdemeanor in Greene County, call (614) 285-5482. The firm will explain every option, including
          diversion and expungement.
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
