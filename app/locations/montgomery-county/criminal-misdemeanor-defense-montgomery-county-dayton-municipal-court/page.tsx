import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Criminal Defense Lawyer in Dayton, Ohio',
  description:
    'Misdemeanor defense at Dayton and Kettering Municipal Courts for Montgomery County: assault, drug, theft and domestic violence charges. (614) 285-5482.',
  keywords: ['criminal defense Dayton Ohio', 'misdemeanor attorney Montgomery County', 'Dayton Municipal Court criminal lawyer', 'Kettering misdemeanor defense', 'Montgomery County criminal defense attorney'],
  openGraph: {
    title: 'Montgomery County Criminal Defense | Jwayyed Law LLC',
    description: 'Misdemeanor defense in Dayton and Kettering Municipal Courts: which court hears your case, penalties and expungement.',
    url: 'https://www.jjlawohio.com/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Montgomery County', href: '/courts/montgomery-county' },
  { label: 'Criminal Misdemeanor Defense - Dayton Municipal Court', href: '/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court' },
];

const faqs = [
  {
    question: 'What are the misdemeanor penalties in Dayton Municipal Court and Kettering Municipal Court?',
    answer:
      'Both courts follow the Ohio Revised Code. First-degree misdemeanors: up to 180 days in jail and a $1,000 fine. Second-degree: up to 90 days and $750. Third-degree: up to 60 days and $500. Fourth-degree: up to 30 days and $250. Minor misdemeanors: no jail time, up to a $150 fine. A reduced charge, diversion, a suspended sentence or dismissal can often be negotiated.',
  },
  {
    question: 'Which court handles my misdemeanor in Montgomery County: Dayton or Kettering?',
    answer:
      'It depends on where the offense happened. Dayton Municipal Court, 301 W. Third St, Dayton, hears cases from Dayton, Trotwood, Huber Heights, Vandalia and Englewood. Kettering Municipal Court, 2325 Wilmington Pike, Kettering, hears cases from Kettering, Miamisburg, Centerville and surrounding areas. The firm practices in both and knows each court’s local rules, docketing and prosecutorial practice.',
  },
  {
    question: 'What types of misdemeanor cases do Montgomery County courts handle?',
    answer:
      'Both courts hear the full range: assault, domestic violence, theft and shoplifting, drug possession, disorderly conduct, criminal damaging, menacing, trespass, driving under suspension and traffic-related criminal charges. Dayton Municipal Court, a high-volume urban court, hears many disorderly conduct and petty theft cases. Kettering Municipal Court hears suburban cases with its own prosecutorial office and judicial practices.',
  },
  {
    question: 'Can a misdemeanor be expunged in Montgomery County?',
    answer:
      'Many misdemeanor convictions in Montgomery County are eligible for expungement under Ohio Revised Code 2953.31 once the sentence and waiting period are complete. Expungement seals the record from public view and removes it from most background checks. Some offenses, including domestic violence convictions and most OVI charges, cannot be expunged. The firm checks eligibility for every client and files petitions in Dayton or Kettering Municipal Court.',
  },
  {
    question: 'What is Intervention in Lieu of Conviction (ILC) in Montgomery County?',
    answer:
      "Ohio's ILC program lets eligible first-time offenders charged with drug-related offenses, or offenses driven by substance abuse or mental health issues, complete treatment instead of being convicted. Finishing ILC leads to dismissal. Both Dayton Municipal Court and Kettering Municipal Court may grant ILC at their discretion, and the firm checks eligibility for ILC and other diversion on every drug or substance-related charge.",
  },
  {
    question: 'How does a misdemeanor conviction affect CDL holders in Montgomery County?',
    answer:
      "Commercial driver's license holders in Montgomery County's large transportation sector can face CDL consequences from certain misdemeanor convictions, including driving-related offenses and drug charges. Some offenses trigger mandatory CDL disqualification under federal regulations whatever the sentence. The firm weighs CDL consequences in every case involving a commercial driver.",
  },
  {
    question: 'How are domestic violence cases handled in Dayton Municipal Court?',
    answer:
      "Domestic violence cases in Dayton and Kettering Municipal Courts are prosecuted by the Montgomery County prosecutor's office independently of the alleged victim. A conviction carries a mandatory firearm prohibition under federal law, possible immigration consequences and ineligibility for expungement. The firm investigates the facts, challenges the evidence and witness credibility, and pursues dismissal, reduction or ILC where appropriate.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for criminal defense in Montgomery County?',
    answer:
      "The firm defends misdemeanor charges in both Dayton Municipal Court and Kettering Municipal Court. Montgomery County is Ohio's fourth-largest county, and these courts handle a high volume of criminal cases with distinct procedures. The firm reviews all of the evidence, identifies constitutional violations and factual defenses, and works toward outcomes that protect your record. Call (614) 285-5482 to schedule a consultation.",
  },
];

const RELATED = [
  { href: '/courts/dayton-municipal-court', title: 'Dayton Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/montgomery-county', title: 'Montgomery County', subtitle: 'Every service the firm offers in the county' },
  {
    href: '/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court',
    title: 'OVI defense in Dayton',
    subtitle: 'Penalties and the 30-day ALS appeal',
  },
  { href: '/criminal-defense/domestic-violence', title: 'Domestic violence', subtitle: 'Firearm, immigration and record consequences' },
  { href: '/criminal-defense/petty-theft', title: 'Petty theft', subtitle: 'Shoplifting and low-value theft charges' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Clearing an eligible record' },
];

export default function MontgomeryCriminalMisdemeanorDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Criminal Defense in Montgomery County',
    serviceType: 'Criminal Defense',
    areaServed: { '@type': 'County', name: 'Montgomery County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal misdemeanor defense in Montgomery County"
        description="A Montgomery County misdemeanor goes to Dayton Municipal Court or Kettering Municipal Court, depending on where it happened. A first-degree misdemeanor carries up to 180 days in jail."
      />

      <Section
        title="Which court hears your case"
        intro={
          <p>
            Montgomery County is Ohio&rsquo;s fourth-largest county and Dayton is one of the state&rsquo;s major urban centers.
            Misdemeanor cases are heard in two primary municipal courts.
          </p>
        }
      >
        <FactTable
          title="Dayton Municipal Court"
          rows={[
            { label: 'Address', value: '301 W. Third St, Dayton, OH 45402' },
            { label: 'Cases from', value: 'Dayton, Trotwood, Huber Heights, Vandalia and Englewood' },
            { label: 'Character', value: 'A high-volume urban court with many disorderly conduct and petty theft cases' },
          ]}
        />
        <FactTable
          title="Kettering Municipal Court"
          rows={[
            { label: 'Address', value: '2325 Wilmington Pike, Kettering, OH 45420' },
            { label: 'Cases from', value: 'Kettering, Miamisburg, Centerville and surrounding suburbs' },
            { label: 'Character', value: 'Suburban cases, with its own prosecutorial office and judicial practices' },
          ]}
        />
        <p>
          The firm provides <Link href="/criminal-defense">criminal defense</Link> in both courts. A conviction in either creates a
          permanent Ohio record that employers, landlords and licensing boards can see. For the county&rsquo;s healthcare workers,
          commercial drivers, educators and government employees, that can put a license or a job at risk, so the firm weighs those
          consequences from the start.
        </p>
      </Section>

      <Section title="Charges the courts hear" tone="ice">
        <PointGrid
          points={[
            { title: 'Assault and aggravated assault', body: 'First-degree misdemeanor, up to 180 days in jail.' },
            { title: 'Domestic violence', body: 'First-degree misdemeanor, with federal firearm prohibition consequences.' },
            { title: 'Theft and shoplifting', body: 'The degree depends on the property value.' },
            { title: 'Drug possession', body: 'Controlled substances, marijuana and paraphernalia.' },
            { title: 'Menacing and criminal damaging', body: 'Menacing, aggravated menacing, criminal damaging and criminal trespass.' },
            { title: 'Driving offenses', body: 'Driving under suspension and other traffic-related criminal charges.' },
          ]}
        />
      </Section>

      <Section title="Misdemeanor penalties in Montgomery County">
        <FactTable
          title="Maximum penalties by degree"
          rows={[
            { label: 'First-degree misdemeanor', value: 'Up to 180 days in jail and a $1,000 fine.' },
            { label: 'Second-degree misdemeanor', value: 'Up to 90 days and $750.' },
            { label: 'Third-degree misdemeanor', value: 'Up to 60 days and $500.' },
            { label: 'Fourth-degree misdemeanor', value: 'Up to 30 days and $250.' },
            { label: 'Minor misdemeanor', value: 'No jail; up to a $150 fine.' },
          ]}
          note="These are ceilings. Community service, probation and treatment programs are commonly available in both courts."
        />
        <h3>Expungement</h3>
        <p>
          A misdemeanor conviction in either court may be eligible for expungement and record sealing under Ohio Revised Code 2953.31.
          It removes the record from public access and lets you truthfully answer &ldquo;no conviction&rdquo; on most applications.
          Eligibility depends on the offense, your record and the waiting period. Domestic violence convictions, OVI convictions and
          some other offenses are not eligible.
        </p>
      </Section>

      <Section title="How the firm defends the case" tone="ice">
        <PointGrid
          points={[
            { title: 'The arrest and search', body: 'Whether they were constitutionally valid.' },
            { title: 'Statements', body: 'Whether Miranda requirements were met.' },
            { title: 'The evidence', body: 'Whether it is legally sufficient on each element of the charge.' },
            { title: 'Witnesses', body: 'Credibility issues, and self-defense in assault and domestic violence cases.' },
            { title: 'Drug cases', body: 'Search and seizure, chain of custody and laboratory certification.' },
            { title: 'Diversion or trial', body: 'ILC and other diversion where eligible; full trial preparation where negotiation fails.' },
          ]}
        />
        <p>
          If you are facing a misdemeanor in Montgomery County, call (614) 285-5482. Talking to a defense attorney early is the most
          useful step you can take.
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
