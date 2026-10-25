import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';
import { FCMC } from '@/data/franklin-county-reference';

export const metadata: Metadata = {
  title: 'Columbus Theft & Shoplifting Defense',
  description:
    'Theft under $1,000 in Columbus is petty theft, an M1 under R.C. 2913.02 heard at Franklin County Municipal Court. Larger amounts are felonies.',
  keywords: [
    'Columbus theft lawyer',
    'Columbus shoplifting attorney',
    'theft defense Columbus Ohio',
    'Franklin County theft defense',
    'Columbus Ohio shoplifting defense',
    'petty theft lawyer Columbus',
    'theft charge attorney Columbus',
  ],
  openGraph: {
    title: 'Columbus Theft & Shoplifting Defense | Jwayyed Law LLC',
    description: 'Courts, penalty tiers, diversion and defenses for theft and shoplifting charges in Columbus.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-columbus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Theft Defense in Columbus', href: '/locations/franklin-county/theft-defense-columbus' },
];

const faqs = [
  {
    question: 'Where are Columbus theft cases heard?',
    answer:
      'Misdemeanor theft and shoplifting charges from Columbus are heard at Franklin County Municipal Court, 375 S. High Street (floors 12 to 15), (614) 645-8186. Petty theft (under $1,000) is tried there as an M1 misdemeanor. Felony theft ($1,000 or more) is arraigned at the Municipal Court and then bound over to the Franklin County Court of Common Pleas for trial. An attorney can appear in both.',
  },
  {
    question: 'What is petty theft in Columbus and what are the penalties?',
    answer:
      'Under R.C. 2913.02, petty theft is theft of property or services worth under $1,000: a first-degree misdemeanor with up to 180 days in jail and a $1,000 fine. It is the most common charge for Columbus shoplifting. Theft of $1,000 to $7,499 is an F5 felony (up to 12 months in prison, $2,500 fine). Above $7,500 the charge rises through F4, F3, F2 and F1. The degree depends on the fair market value of the property at the time of the offense.',
  },
  {
    question: 'Can a Columbus theft charge be dismissed or diverted?',
    answer:
      'Often, yes. Many first-time defendants, especially on low-value shoplifting charges, qualify for diversion or conditional dismissal. Franklin County prosecutor programs usually require restitution, community service and no new arrests during a probationary period. Completing the program leads to dismissal with no conviction on your record. The firm pursues diversion before recommending any other resolution.',
  },
  {
    question: 'Does a theft conviction in Columbus affect employment?',
    answer:
      'Yes. Theft convictions, even a first misdemeanor petty theft, show up on the background checks nearly every employer runs. Retail, financial services, healthcare and government employers often disqualify applicants with theft records outright, and many Ohio licensing boards treat theft as grounds for investigation or license denial. That is why the firm looks at diversion and dismissal before any plea.',
  },
  {
    question: 'Can a Columbus theft conviction be expunged?',
    answer:
      'Misdemeanor theft convictions can be expunged under ORC 2953.32 after a 1-year waiting period from final discharge, if you meet the other eligibility rules. F4 and F5 theft convictions may also qualify after their waiting periods. The firm checks expungement eligibility at the start of the case, because a plea that keeps it available is worth more than one that does not.',
  },
  {
    question: 'What defenses apply to Columbus theft charges?',
    answer:
      "Defenses include challenging intent to permanently deprive the owner (the mental state R.C. 2913.02 requires), challenging the property valuation that sets the degree, challenging video or witness identification, looking at whether a civil demand settlement was paid and what it means, and Fourth Amendment challenges to any search. The first step is getting all surveillance footage, loss prevention reports and police documentation.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus theft charge?',
    answer:
      'Jwayyed Law LLC defends theft and shoplifting charges in Columbus and throughout Franklin County. A theft conviction affects jobs and licenses long after the sentence. The firm looks for a diversion, reduction or dismissal before any plea is entered. Call (614) 285-5482 to discuss your situation.',
  },
];

const RELATED = [
  { href: '/criminal-defense/petty-theft', title: 'Theft and shoplifting defense in Ohio', subtitle: 'The statewide rules' },
  { href: '/locations/franklin-county/expungement-columbus', title: 'Expungement in Columbus', subtitle: 'Sealing a theft conviction' },
  { href: '/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court', title: 'Misdemeanor defense at FCMC', subtitle: 'How misdemeanor cases move in this court' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
];

export default function ColumbusTheftPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Theft Defense in Columbus", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/theft-defense-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Theft and shoplifting defense in Columbus"
        description="Theft of property worth under $1,000 is petty theft, a first-degree misdemeanor with up to 180 days in jail. At $1,000 it becomes a felony."
      />

      <KeyFacts
        facts={[
          { figure: '$1,000', label: 'the line between petty theft (M1) and felony theft' },
          { figure: '180 days', label: 'maximum jail for petty theft, with a $1,000 fine' },
          { figure: '1 year', label: 'wait from final discharge to expunge a misdemeanor theft' },
        ]}
      />

      <Section
        title="Where a Columbus theft case is heard"
        intro={<p>Every Columbus theft charge starts at {FCMC.name}. Felony theft then moves to Common Pleas.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'M1 petty theft from arraignment through pretrial, plea and sentencing; the arraignment of felony theft.' },
          ]}
        />
        <FactTable
          title="Franklin County Court of Common Pleas"
          rows={[{ label: 'What it hears', value: 'Felony theft ($1,000 or more), bound over from the Municipal Court for trial.' }]}
        />
        <p>
          The firm handles both courts and keeps the same representation across them. Call <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <Section title="How Columbus theft arrests happen" tone="ice">
        <p>
          Columbus is Ohio&rsquo;s largest retail market, with shopping districts at Easton Town Center, Polaris Fashion Place, the Short
          North, the Continent and Westland, and loss prevention at every major retailer leads to hundreds of theft and shoplifting
          arrests each year. Arrests also come from theft from employers, from vehicles and from persons, and from property taken by
          deception.
        </p>
        <p>
          Loss prevention officers at Easton, Polaris and other retail areas can detain a suspected shoplifter and call the Columbus
          Division of Police to make the arrest. The case then goes to Franklin County Municipal Court, and if it is not handled well it
          ends in a permanent public record that employers, landlords and licensing boards can see.
        </p>
      </Section>

      <Section title="Theft degrees and penalties under R.C. 2913.02">
        <p>
          Theft is knowingly obtaining or exerting control over another&rsquo;s property or services without consent, or by deception,
          threat or intimidation. The prosecution must prove <em>purposeful deprivation</em>: that you took the property intending to
          deprive the owner of it permanently.
        </p>
        <FactTable
          title="Theft by value of the property"
          rows={[
            { label: 'Under $1,000', value: 'Petty theft, a first-degree misdemeanor (M1): up to 180 days in jail, $1,000 fine.' },
            { label: '$1,000 to $7,499', value: 'F5: up to 12 months in prison, $2,500 fine.' },
            { label: '$7,500 to $149,999', value: 'F4.' },
            { label: '$150,000 to $749,999', value: 'F3.' },
            { label: '$750,000 to $1,499,999', value: 'F2.' },
            { label: '$1,500,000 or more', value: 'F1.' },
          ]}
          note="Some property raises the degree whatever its value: a firearm, a motor vehicle, an elderly person's property and other categories under R.C. 2913.02(B)."
        />
      </Section>

      <Section title="How the firm defends a theft case" tone="ice">
        <Steps
          steps={[
            {
              title: 'Gather the evidence',
              body: 'Store surveillance footage (often from several angles), loss prevention incident reports, police body-cam footage and receipts or payment records, before any hearing.',
            },
            {
              title: 'Pursue diversion',
              body: 'Franklin County prosecutors consider diversion for first-time offenders, especially on low-value misdemeanor theft. It usually requires restitution, community service and no new arrests, and ends in dismissal with no conviction.',
            },
            { title: 'Challenge the case', body: 'If diversion is not available, the defenses below decide whether to negotiate or go to trial.' },
          ]}
        />
        <PointGrid
          points={[
            {
              title: 'Intent',
              body: 'An absent-minded walk out of the store, a pricing dispute or taking something believed abandoned is not theft. Theft needs purposeful deprivation, not negligence, and where intent is truly in question, trial or dismissal may beat any offer.',
            },
            { title: 'Value', body: 'Even a modest cut in the assessed value can drop a felony to a misdemeanor.' },
            { title: 'Identification', body: 'Retail surveillance images can be clear or contested, and the basis for identifying you is tested.' },
            { title: 'Expungement planning', body: 'ORC 2953.32 sealing eligibility is part of the plan from the start.' },
          ]}
        />
        <p>
          The best time to act is before a plea and before the record is permanent. Call <a href="tel:6142855482">(614) 285-5482</a> or{' '}
          <Link href="/contact">schedule a consultation</Link>.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
