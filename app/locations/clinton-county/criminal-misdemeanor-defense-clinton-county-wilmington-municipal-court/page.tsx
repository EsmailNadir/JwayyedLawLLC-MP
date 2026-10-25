import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Clinton County Criminal Defense Attorney',
  description:
    'Misdemeanor defense at Wilmington Municipal Court for Clinton County: assault, theft, drug and domestic violence charges. Call (614) 285-5482.',
  keywords: ['criminal defense Wilmington Ohio', 'misdemeanor attorney Clinton County', 'Wilmington Municipal Court criminal lawyer', 'Clinton County misdemeanor defense'],
  openGraph: {
    title: 'Clinton County Criminal Defense Attorney | Jwayyed Law LLC',
    description: 'Misdemeanor defense at Wilmington Municipal Court for Wilmington, Sabina, Blanchester, Clarksville and Port William.',
    url: 'https://www.jjlawohio.com/locations/clinton-county/criminal-misdemeanor-defense-clinton-county-wilmington-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/clinton-county/criminal-misdemeanor-defense-clinton-county-wilmington-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Clinton County', href: '/locations/clinton-county' },
  { label: 'Criminal Misdemeanor Defense - Wilmington Municipal Court', href: '/locations/clinton-county/criminal-misdemeanor-defense-clinton-county-wilmington-municipal-court' },
];

const faqs = [
  {
    question: 'What are the misdemeanor penalties in Wilmington Municipal Court?',
    answer:
      'The court follows the Ohio Revised Code. First-degree misdemeanors (for example domestic violence, assault and certain theft charges): up to 180 days in jail and a $1,000 fine. Second-degree: up to 90 days and $750. Third-degree: up to 60 days and $500. Fourth-degree: up to 30 days and $250. Minor misdemeanors carry no jail time but up to a $150 fine.',
  },
  {
    question: 'What types of misdemeanor cases does Wilmington Municipal Court handle?',
    answer:
      'All misdemeanor criminal cases arising in Clinton County, including assault, domestic violence, theft and shoplifting, drug possession, disorderly conduct, criminal damaging, menacing, and traffic-related criminal charges such as driving under suspension. It also hears protective order violations and criminal trespass.',
  },
  {
    question: 'What is Intervention in Lieu of Conviction (ILC) in Clinton County?',
    answer:
      "Ohio's Intervention in Lieu of Conviction (ILC) lets eligible first-time offenders charged with drug-related misdemeanors, or offenses driven by substance abuse or mental health issues, complete treatment instead of being convicted. If they finish, the charge is dismissed. Wilmington Municipal Court has discretion to grant ILC, and the firm can assess your eligibility and ask for it.",
  },
  {
    question: 'Can a misdemeanor be expunged in Clinton County?',
    answer:
      'Many misdemeanor convictions in Clinton County are eligible for expungement (record sealing) under Ohio Revised Code 2953.31 once the sentence is complete and the waiting period has passed. For first-degree misdemeanors the wait is generally one year after discharge; for lower degrees it may be shorter. Some offenses are not eligible, including domestic violence convictions. The firm files expungement petitions in Wilmington Municipal Court.',
  },
  {
    question: 'What should I do first if I am charged with a misdemeanor in Clinton County?',
    answer:
      'Do not make statements to law enforcement without an attorney present; use your right to remain silent. Do not contact the alleged victim in a domestic violence or assault case, which can lead to more charges. Contact the firm right away so it can appear at your arraignment, address bond conditions, review the evidence and start on the defense.',
  },
  {
    question: 'Can domestic violence charges be dropped in Clinton County?',
    answer:
      "Domestic violence charges in Wilmington Municipal Court are prosecuted by the Clinton County prosecutor's office, not the alleged victim. The prosecution can go forward even if the alleged victim does not want to press charges. A defense attorney can still challenge the evidence, raise credibility issues, present self-defense and negotiate for a reduced charge or dismissal when the facts support it.",
  },
  {
    question: 'How does a misdemeanor conviction affect employment in Clinton County?',
    answer:
      'A misdemeanor conviction in Wilmington Municipal Court creates a permanent public criminal record in Ohio that shows up on background checks and can affect jobs, professional licenses, housing applications and federal benefits. That is why pleading guilty for convenience is rarely the right move. The firm works toward outcomes that protect your record: dismissal, a reduction, diversion and, later, expungement.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for criminal defense in Clinton County?',
    answer:
      'The firm defends misdemeanor charges in Wilmington Municipal Court and throughout Clinton County. It reviews all of the evidence, looks for constitutional violations and defenses, and works within local court procedure. Call (614) 285-5482 to schedule a consultation.',
  },
];

const RELATED = [
  { href: '/courts/wilmington-municipal-court', title: 'Wilmington Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/clinton-county', title: 'Clinton County', subtitle: 'Every service the firm offers in the county' },
  {
    href: '/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court',
    title: 'OVI defense in Wilmington',
    subtitle: 'Penalties and the 30-day ALS appeal',
  },
  { href: '/criminal-defense/domestic-violence', title: 'Domestic violence', subtitle: 'Charges the prosecutor brings, not the victim' },
  { href: '/criminal-defense/drug-possession', title: 'Drug possession', subtitle: 'Including intervention in lieu of conviction' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Clearing an eligible record' },
];

export default function ClintonCriminalMisdemeanorDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: Criminal Defense in Clinton County',
    serviceType: 'Criminal Defense',
    areaServed: { '@type': 'County', name: 'Clinton County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/clinton-county/criminal-misdemeanor-defense-clinton-county-wilmington-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal misdemeanor defense in Clinton County"
        description="Every misdemeanor in Clinton County is heard at Wilmington Municipal Court, 69 N. South St. A conviction there creates a permanent record that can follow you to jobs and housing."
      />

      <Section
        title="Where a Clinton County misdemeanor is heard"
        intro={
          <p>
            Wilmington Municipal Court hears misdemeanor charges from Wilmington, Sabina, Blanchester, Clarksville and Port William.
            The Clinton County prosecutor&rsquo;s office handles every misdemeanor case there.
          </p>
        }
      >
        <FactTable
          title="Wilmington Municipal Court at a glance"
          rows={[
            { label: 'Address', value: '69 N. South St, Wilmington, OH 45177' },
            { label: 'Hears', value: 'All misdemeanor criminal cases arising in Clinton County' },
            { label: 'Communities', value: 'Wilmington, Sabina, Blanchester, Clarksville and Port William' },
            { label: 'Prosecution', value: 'The Clinton County prosecutor’s office' },
            { label: 'Diversion', value: 'The court has discretion to grant Intervention in Lieu of Conviction' },
          ]}
        />
        <p>
          Clinton County is a rural agricultural community where a criminal charge can damage personal and professional
          relationships quickly. Local prosecutor practice and the judges&rsquo; preferences affect outcomes, and the firm plans each
          defense with that in mind. See the firm&rsquo;s <Link href="/criminal-defense">criminal defense</Link> practice for more.
        </p>
      </Section>

      <Section title="Charges the court hears" tone="ice">
        <PointGrid
          points={[
            { title: 'Assault and aggravated assault', body: 'First-degree misdemeanor, up to 180 days in jail.' },
            { title: 'Domestic violence', body: 'First-degree misdemeanor, with mandatory minimum jail time on repeat offenses.' },
            { title: 'Theft and shoplifting', body: 'The degree depends on the value of the property.' },
            { title: 'Drug possession', body: 'Marijuana, controlled substances and drug paraphernalia.' },
            { title: 'Criminal damaging and menacing', body: 'Criminal damaging or endangering, menacing and aggravated menacing.' },
            {
              title: 'Other charges',
              body: 'Disorderly conduct, criminal trespass, driving under suspension and violation of protection orders.',
            },
          ]}
        />
      </Section>

      <Section title="Misdemeanor penalties under Ohio law">
        <FactTable
          title="Maximum penalties by degree"
          rows={[
            { label: 'First-degree misdemeanor', value: 'Up to 180 days in jail and a fine of up to $1,000.' },
            { label: 'Second-degree misdemeanor', value: 'Up to 90 days in jail and a $750 fine.' },
            { label: 'Third-degree misdemeanor', value: 'Up to 60 days in jail and a $500 fine.' },
            { label: 'Fourth-degree misdemeanor', value: 'Up to 30 days in jail and a $250 fine.' },
            { label: 'Minor misdemeanor', value: 'No jail time; a fine of up to $150.' },
          ]}
          note="These maximums can often be reduced or avoided through plea negotiation, alternative sentencing or diversion."
        />
        <h3>Expungement and record sealing</h3>
        <p>
          Even after a conviction in Wilmington Municipal Court, you may be eligible for expungement and sealing under Ohio Revised
          Code 2953.31 once the sentence and waiting period are complete. A sealed record is hidden from public view and most
          background checks, and on most job and housing applications you can lawfully answer &ldquo;no conviction.&rdquo; The firm
          checks expungement eligibility for every client.
        </p>
      </Section>

      <Section title="How the firm defends a Clinton County misdemeanor" tone="ice">
        <PointGrid
          points={[
            { title: 'The arrest and search', body: 'Whether they were constitutional under the Fourth Amendment and ORC 2935.26.' },
            { title: 'Statements', body: 'Whether Miranda rights were given before any statement.' },
            { title: 'The evidence', body: 'Whether it proves each element of the offense beyond a reasonable doubt.' },
            { title: 'Witness credibility', body: 'Issues with witnesses or the alleged victim that can be challenged.' },
            { title: 'Self-defense', body: 'In assault and domestic violence cases, self-defense and defense of others are complete defenses when the facts support them.' },
            { title: 'Drug cases', body: 'Search and seizure, chain of custody and lab certification, plus ILC and other diversion.' },
          ]}
        />
        <p>
          If you are facing a misdemeanor in Clinton County, call (614) 285-5482. Retaining counsel before arraignment is the most
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
