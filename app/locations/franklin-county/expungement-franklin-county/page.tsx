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
  title: 'Franklin County Expungement Attorney',
  description:
    'Sealing a Franklin County record under R.C. 2953.32 and H.B. 96: waiting periods, offenses that never qualify, and where to file.',
  keywords: ['Franklin County expungement attorney', 'seal criminal record Columbus Ohio', 'expungement Columbus lawyer', 'Ohio record sealing Franklin County', 'Franklin County expungement eligibility'],
  openGraph: {
    title: 'Franklin County Expungement Attorney | Jwayyed Law LLC',
    description: 'Expungement eligibility, waiting periods and the filing process in Franklin County Municipal Court and Common Pleas.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/expungement-franklin-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/expungement-franklin-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Expungement in Franklin County', href: '/locations/franklin-county/expungement-franklin-county' },
];

const faqs = [
  {
    question: 'What criminal records can be expunged in Franklin County under Ohio law?',
    answer:
      'Under R.C. 2953.32 as expanded by H.B. 96 (effective September 30, 2025), most misdemeanor and many felony convictions in Franklin County can be expunged. Minor misdemeanors qualify after six months; M4 through M1 misdemeanors after one year; F5 and F4 felonies after one year; F3 felonies after three years; and certain F2 felonies after seven years. Arrests that did not end in a conviction qualify immediately. Not eligible: murder, voluntary manslaughter, rape, gross sexual imposition, child abuse offenses, domestic violence (the R.C. 2953.36 exclusion), and offenses that require sex offender registration.',
  },
  {
    question: 'How long must I wait before filing for expungement in Franklin County?',
    answer:
      'Under R.C. 2953.32 and H.B. 96, the waiting period runs from completing your sentence, including probation and paying all fines. Minor misdemeanors: six months. M4 through M1 misdemeanors: one year. F5 and F4 felonies: one year. F3 felonies: three years. F2 felonies, where eligible: seven years. Arrests without a conviction have no waiting period. The clock starts on the date you completed every term of your sentence, not the conviction date.',
  },
  {
    question: 'Does expungement completely erase my record in Ohio?',
    answer:
      'No. Expungement under R.C. 2953.32 seals the conviction record. The general public, private employers and landlords cannot reach it through commercial background check services. Law enforcement and the court keep it, but it does not show in standard background checks, and once it is sealed you can generally answer "no" on most job and housing applications that ask about convictions. Sealing does not clear the record for firearm rights (for applicable offenses), immigration proceedings, licensing boards with statutory access to sealed records, or some sensitive government positions.',
  },
  {
    question: 'What is the Franklin County expungement process and where is it filed?',
    answer:
      "A petition for a Franklin County Municipal Court conviction is filed at Franklin County Municipal Court (375 S. High St., Columbus, OH 43215). A petition for a Franklin County Court of Common Pleas conviction is filed at the Common Pleas court. The petition needs an application and supporting materials, and in many cases there is a hearing where the prosecutor may object. The court weighs your interest in sealing against the public's interest in knowing the record. The firm handles the filing, the hearing preparation and any response to a prosecutor's objection.",
  },
  {
    question: 'How many convictions can be expunged in Ohio?',
    answer:
      "H.B. 96 (effective September 30, 2025) raised the number of convictions that can be sealed. Under current law, up to five felony convictions and an unlimited number of misdemeanor convictions may be eligible, subject to the court's discretion. Prior law set stricter limits, so some Franklin County residents who had too many convictions to qualify now can.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Franklin County expungement?',
    answer:
      'A petition has to be prepared correctly, and a prosecutor objection can defeat one that is otherwise eligible. Jwayyed Law LLC files petitions at both Franklin County Municipal Court and the Franklin County Court of Common Pleas, prepares the supporting statement for the hearing and responds to any objection. Under H.B. 96 many residents who were ineligible before now qualify. Call (614) 285-5482 to find out whether your record can be sealed.',
  },
];

const RELATED = [
  { href: '/locations/franklin-county/expungement-columbus', title: 'Expungement in Columbus', subtitle: 'Sealing a Columbus conviction' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement in Ohio', subtitle: 'The statewide rules' },
  { href: '/locations/franklin-county/mayors-courts-franklin-county', title: "Mayor's courts in Franklin County", subtitle: 'Where many suburban misdemeanors start' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
];

export default function FranklinCountyExpungementPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Expungement and Record Sealing in Franklin County", "serviceType": "Criminal Defense", "areaServed": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/expungement-franklin-county"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Expungement in Franklin County"
        description="H.B. 96, effective September 30, 2025, widened who can seal a record in Ohio. Most misdemeanors can be sealed one year after you finish your sentence."
      />

      <KeyFacts
        facts={[
          { figure: '6 months', label: 'wait for a minor misdemeanor' },
          { figure: '1 year', label: 'wait for M4 to M1 misdemeanors and F5 or F4 felonies' },
          { figure: '3 years', label: 'wait for an F3 felony' },
          { figure: 'Up to 5', label: 'felony convictions may now be sealed under H.B. 96' },
        ]}
      />

      <Section
        title="Where a Franklin County petition is filed"
        intro={<p>You file in the court that entered the conviction.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: '375 S. High St., Columbus, OH 43215' },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'Petitions to seal misdemeanor convictions entered at Franklin County Municipal Court.' },
          ]}
        />
        <FactTable
          title="Franklin County Court of Common Pleas"
          rows={[
            { label: 'Address', value: 'The Common Pleas court at the same address.' },
            { label: 'What it hears', value: 'Petitions to seal felony and other Common Pleas convictions.' },
          ]}
        />
        <p>
          A Franklin County record, whether a misdemeanor OVI, drug possession, theft or disorderly conduct conviction, follows you into
          job applications, housing searches, professional licensing and background checks for years after the sentence ends. R.C.
          2953.32 lets eligible residents ask the court to seal it from public view. Call <a href="tel:6142855482">(614) 285-5482</a> to
          find out whether your record qualifies.
        </p>
      </Section>

      <Section title="Who qualifies under H.B. 96" tone="ice">
        <p>
          H.B. 96, which took effect on September 30, 2025, was the largest recent expansion of Ohio&rsquo;s expungement law. Many
          residents who could not seal their records before now can, including people with several misdemeanor convictions and some with
          felony convictions.
        </p>
        <FactTable
          title="Waiting periods, counted from completion of the sentence"
          rows={[
            { label: 'Minor misdemeanor', value: 'Six months.' },
            { label: 'M4, M3, M2 or M1', value: 'One year.' },
            { label: 'F5 or F4 felony', value: 'One year.' },
            { label: 'F3 felony', value: 'Three years.' },
            { label: 'Certain F2 felonies', value: "Seven years, at the court's discretion." },
            { label: 'No conviction', value: 'Dismissed, no-billed or acquitted charges are eligible immediately.' },
          ]}
          note="Completion of the sentence includes probation and payment of all fines."
        />
        <h3>How many convictions</h3>
        <p>
          Prior law allowed only one felony conviction or a limited number of misdemeanors to be sealed. The new law allows up to five
          felony convictions and an essentially unlimited number of misdemeanor convictions, which opens relief for residents with
          several low-level convictions built up over time. Several eligible convictions can go in a single petition.
        </p>
      </Section>

      <Section title="Offenses that cannot be expunged">
        <p>R.C. 2953.36 lists the offenses excluded from expungement in Ohio.</p>
        <FactTable
          title="Excluded under R.C. 2953.36"
          rows={[
            { label: 'Homicide', value: 'Murder and aggravated murder; voluntary and involuntary manslaughter.' },
            {
              label: 'Sex offenses',
              value:
                'Rape, gross sexual imposition, sexual battery, unlawful sexual conduct with a minor, child pornography offenses, pandering obscenity involving a minor, and any conviction that requires sex offender registration.',
            },
            { label: 'Domestic violence', value: 'A misdemeanor DV conviction under R.C. 2919.25 cannot be sealed, however much time has passed.' },
          ]}
        />
        <p>
          Some traffic offenses, OVI among them, are excluded under R.C. 4510.35 and related provisions, so a standard R.C. 4511.19 OVI
          conviction cannot be sealed. A disorderly conduct or reckless operation conviction that resolved an underlying OVI is
          typically eligible, since the sealed conviction is for the reduced charge. The same reasoning is why the firm pursues non-DV
          pleas such as disorderly conduct in domestic violence cases where sealing matters.
        </p>
      </Section>

      <Section title="How a petition moves" tone="ice">
        <Steps
          steps={[
            {
              title: 'File the petition',
              body: "It includes the case number, the conviction to be sealed, and a statement about your rehabilitation and why sealing serves justice.",
            },
            { title: 'Prosecutor notice', body: 'The prosecutor receives notice and has 60 days to object.' },
            {
              title: 'Hearing',
              body: "If the prosecutor objects, the court schedules a hearing and weighs your interest in sealing (rehabilitation, employment, housing) against the state's interest in keeping public records. The judge can deny even an eligible petition.",
            },
          ]}
        />
        <p>
          When the prosecutor objects, a clear supporting statement matters: what led to the conviction, what you have done since, and
          why sealing serves justice. The firm prepares the petition to answer objections before they are made, and argues against them
          at the hearing when they are.
        </p>
      </Section>

      <Section title="What a sealed record means">
        <p>
          Once sealed, the record no longer shows up through commercial background check services or in standard employer and landlord
          queries. You can generally answer &ldquo;no&rdquo; on job, housing and professional licensing applications that ask whether
          you were convicted of the sealed offense. The record stays in secure court files, open to law enforcement and prosecutors and
          usable in any later criminal case, but not disclosed to employers, landlords or the public.
        </p>
        <p>
          Columbus employers, particularly in healthcare, finance and education, run background checks, and a sealed record does not
          appear in the results.
        </p>
      </Section>

      <Section title="What the firm does on a Franklin County expungement" tone="ice">
        <PointGrid
          points={[
            { title: 'Both courts', body: 'Files petitions at Franklin County Municipal Court and the Franklin County Court of Common Pleas.' },
            { title: 'The supporting statement', body: 'Prepares the narrative the court reads at the hearing.' },
            { title: 'Objections', body: "Responds to the prosecutor's objection and argues the petition at the hearing." },
            { title: 'H.B. 96 review', body: 'Re-checks eligibility for residents who were turned away under prior law.' },
          ]}
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>.
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
