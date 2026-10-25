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
  title: 'Columbus Expungement Attorney',
  description:
    'Sealing a Columbus conviction under R.C. 2953.32: who qualifies after HB 96, the waiting periods, and filing at Franklin County Municipal Court or Common Pleas.',
  keywords: [
    'Columbus expungement lawyer',
    'Columbus record sealing attorney',
    'expungement Columbus Ohio',
    'Franklin County expungement attorney',
    'Ohio record sealing Columbus',
    'ORC 2953.32 Columbus attorney',
    'Columbus criminal record sealing',
  ],
  openGraph: {
    title: 'Columbus Expungement Attorney | Jwayyed Law LLC',
    description: 'Eligibility, waiting periods and the filing process for sealing a criminal record in Columbus.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/expungement-columbus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/expungement-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Expungement in Columbus', href: '/locations/franklin-county/expungement-columbus' },
];

const faqs = [
  {
    question: 'What is expungement in Ohio and what does it do?',
    answer:
      'Expungement under R.C. 2953.32 is a court order that seals a criminal record from public view. The conviction is removed from public court records, publicly accessible law enforcement databases and most background check systems, and it cannot be disclosed on most job, housing or professional license applications. The record is not destroyed: law enforcement and courts can still see it. For most practical purposes, though, the conviction drops out of your history.',
  },
  {
    question: 'Who is eligible for expungement in Columbus under Ohio law?',
    answer:
      'Under R.C. 2953.32, as amended by HB 96 (effective September 30, 2025), most misdemeanor convictions, F3, F4 and F5 felony convictions, and minor misdemeanor convictions can be expunged after the waiting period. You must have completed every term of your sentence. Ineligible offenses include domestic violence (R.C. 2919.25), most traffic violations under chapters 4506 to 4511, OVI convictions under R.C. 4511.19, first- or second-degree felonies generally, sexually oriented offenses that require registration, and offenses against victims under 13.',
  },
  {
    question: 'What are the waiting periods for expungement in Columbus?',
    answer:
      'Under R.C. 2953.32: a minor misdemeanor, 6 months after final discharge; an M1 through M4 misdemeanor, 1 year after final discharge; an F4 or F5 felony, 1 year after final discharge; an F3 felony, 3 years after final discharge. "Final discharge" means finishing every part of the sentence, including probation, paying all fines and costs, and completing any ordered treatment. The clock runs from final discharge, not from the conviction date.',
  },
  {
    question: 'Can an OVI or DUI conviction be expunged in Columbus?',
    answer:
      'No. OVI convictions under R.C. 4511.19 are listed as ineligible for expungement under Ohio law, no matter how much time passes or how clean the rest of your record is. If your OVI was reduced by plea agreement to reckless operation under R.C. 4511.20, the reckless operation conviction may be expunged after the waiting period. That is one reason the firm pursues reckless operation reductions in OVI cases.',
  },
  {
    question: 'How does the expungement process work in Franklin County?',
    answer:
      'You file an application in the court of conviction: Franklin County Municipal Court at 375 S. High Street for misdemeanors, or the Franklin County Court of Common Pleas for felonies. The application includes the conviction information, proof of eligibility and a statement of why expungement is in the interest of justice. The prosecutor is notified and may object. The court holds a hearing within 60 days of the application. If the court grants it, the order goes to the BMV, BCI and other agencies to seal the records.',
  },
  {
    question: 'Can multiple convictions be expunged at once in Columbus?',
    answer:
      'Yes. One application can seal several eligible convictions at once, as long as each one meets the eligibility rules. HB 96 (effective September 30, 2025) expanded multi-conviction eligibility, so some people with more prior convictions now qualify who did not before. The firm reviews your whole criminal history to find every eligible conviction and files one application where possible.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for Columbus expungement?',
    answer:
      'Jwayyed Law LLC handles expungement and record sealing in Franklin County Municipal Court, the Franklin County Court of Common Pleas and other Ohio courts. The firm checks your eligibility under the current R.C. 2953.32 rules (including HB 96), prepares the application, represents you at the hearing and makes sure every agency receives the sealing order. A sealed record matters for employment, housing and professional licensing. Call (614) 285-5482 to review your eligibility.',
  },
];

const RELATED = [
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing in Ohio', subtitle: 'The statewide rules' },
  { href: '/locations/franklin-county/expungement-franklin-county', title: 'Expungement across Franklin County', subtitle: 'Mayor’s court and suburban convictions' },
  { href: '/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court', title: 'Misdemeanor defense at FCMC', subtitle: 'Avoiding a conviction in the first place' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
];

export default function ColumbusExpungementPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Expungement and Record Sealing in Columbus", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/expungement-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Expungement and record sealing in Columbus"
        description="Most misdemeanors and F3 to F5 felonies can be sealed under R.C. 2953.32 after a waiting period. HB 96, effective September 30, 2025, widened who qualifies."
      />

      <KeyFacts
        facts={[
          { figure: '6 months', label: 'wait after final discharge for a minor misdemeanor' },
          { figure: '1 year', label: 'wait for an M1 to M4 misdemeanor, or an F4 or F5 felony' },
          { figure: '3 years', label: 'wait for an F3 felony' },
          { figure: '60 days', label: 'from application to the hearing' },
        ]}
      />

      <Section
        title="Where to file in Columbus"
        intro={
          <p>
            You file in the court that convicted you: {FCMC.name} for a Columbus misdemeanor, the Franklin County Court of Common Pleas
            for a felony.
          </p>
        }
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'Applications to seal misdemeanor convictions entered there.' },
          ]}
        />
        <p>
          A conviction in either court leaves a public record that employers, landlords and professional licensing boards see on
          background checks, often for years or decades. R.C. 2953.32 lets you seal eligible convictions so they drop out of the
          background check systems most employers and landlords use. The firm handles{' '}
          <Link href="/criminal-defense/expungement-record-sealing">expungement and record sealing</Link> petitions in both courts. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a> to review your eligibility.
        </p>
        <h3>What HB 96 changed</h3>
        <p>
          HB 96, effective September 30, 2025, widened eligibility. Some people with multiple prior convictions now qualify, as do some
          with F3 felonies that were previously ineligible. If you were told years ago that you could not seal your record, that answer
          may be out of date. The firm re-checks eligibility for anyone whose earlier assessment came before HB 96.
        </p>
      </Section>

      <Section title="What can and cannot be sealed" tone="ice">
        <FactTable
          title="Eligible after the waiting period"
          rows={[
            {
              label: 'Misdemeanors',
              value:
                'Most, including first-degree misdemeanor assault (R.C. 2903.13), petty theft (R.C. 2913.02), disorderly conduct (R.C. 2917.11), drug possession (R.C. 2925.11), driving under suspension, criminal damaging and obstructing official business.',
            },
            { label: 'Minor misdemeanors', value: 'Generally eligible after 6 months.' },
            { label: 'Felonies', value: 'Third-, fourth- and fifth-degree felony convictions, under the HB 96 amendments.' },
            { label: 'Reckless operation', value: 'An OVI reduced by plea to reckless operation (R.C. 4511.20) may be eligible.' },
          ]}
        />
        <FactTable
          title="Not eligible"
          rows={[
            { label: 'OVI', value: 'Convictions under R.C. 4511.19, no matter how long ago.' },
            { label: 'Domestic violence', value: 'Convictions under R.C. 2919.25.' },
            { label: 'Traffic', value: 'Most offenses under chapters 4506 to 4511 and 4549.' },
            { label: 'Serious felonies', value: 'First- and second-degree felonies, generally.' },
            { label: 'Sex offenses', value: 'Sexually oriented offenses with registration requirements.' },
            { label: 'Young victims', value: 'Offenses against victims under 13.' },
          ]}
        />
      </Section>

      <Section title="What sealing does, and what it does not">
        <p>
          The sealing order removes the records from the public parts of court databases, directs the Bureau of Criminal
          Identification to seal its statewide record, and directs the BMV to seal related entries. For most purposes the conviction
          then stops appearing in background checks by employers, landlords and private screening services. Ohio law lets people with
          sealed records answer &ldquo;no&rdquo; to questions about prior convictions on most applications.
        </p>
        <p>
          Sealing is not erasure. Law enforcement, prosecutors and courts can still see sealed records in later criminal cases. The
          conviction must also be disclosed when applying for law enforcement jobs, federal employment and some licensed professions
          whose licensing statute requires full disclosure. The firm explains what your sealed record will and will not affect before
          filing.
        </p>
      </Section>

      <Section title="How sealing works in Franklin County" tone="ice">
        <Steps
          steps={[
            {
              title: 'Apply',
              body: 'For a misdemeanor, at Franklin County Municipal Court, 375 S. High Street. The application includes the case number, the conviction information, certification that the waiting period has passed, and a statement of why sealing is in the interest of justice.',
            },
            {
              title: 'Prosecutor review',
              body: "The Franklin County prosecutor's office is served and has 60 days to object. Even with an objection, the court weighs your interest in rehabilitation against any interest in keeping the record public.",
            },
            { title: 'Hearing', body: 'An attorney can represent you and argue for the sealing order.' },
            { title: 'Notify the agencies', body: 'Once granted, the firm makes sure BCI, the BMV and every other agency holding the record receive the order.' },
          ]}
        />
        <p>
          A felony application is filed at the Franklin County Court of Common Pleas and follows the same steps: application, notice to
          the prosecutor, the 60-day period and a hearing. Felony applications get more scrutiny, and having an attorney argue for you
          at the hearing helps.
        </p>
      </Section>

      <Section title="What the firm does on a Columbus expungement">
        <PointGrid
          points={[
            { title: 'Eligibility review', body: 'Your full criminal history under the current R.C. 2953.32 rules, including HB 96.' },
            { title: 'Waiting period', body: 'Confirming the waiting period has run from final discharge.' },
            { title: 'The application', body: 'The application, supporting documents and the statement for the court.' },
            { title: 'The hearing', body: 'Appearing for you at Franklin County Municipal Court or Common Pleas.' },
            { title: 'After the order', body: 'Making sure BCI, the BMV and every relevant agency process the sealing order.' },
            { title: 'Several convictions', body: 'One application covering every eligible conviction in your history.' },
          ]}
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
