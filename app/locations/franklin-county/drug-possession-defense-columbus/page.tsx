import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';
import { FCMC } from '@/data/franklin-county-reference';

export const metadata: Metadata = {
  title: 'Columbus Drug Possession Defense Attorney',
  description:
    'Drug possession charges under R.C. 2925.11 in Columbus start at Franklin County Municipal Court, with suppression, ILC and HART Court as defense paths.',
  keywords: [
    'Columbus drug possession lawyer',
    'Columbus drug defense attorney',
    'drug possession Columbus Ohio',
    'Franklin County drug possession defense',
    'Columbus drug charge attorney',
    'Columbus Ohio cocaine possession lawyer',
    'heroin possession Columbus attorney',
  ],
  openGraph: {
    title: 'Columbus Drug Possession Defense Attorney | Jwayyed Law LLC',
    description: 'Courts, penalties, suppression, ILC and HART Court for drug possession charges in Columbus.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-columbus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Drug Possession Defense in Columbus', href: '/locations/franklin-county/drug-possession-defense-columbus' },
];

const faqs = [
  {
    question: 'Where are Columbus drug possession cases heard?',
    answer:
      'Drug possession charges from Columbus are processed at Franklin County Municipal Court, 375 S. High Street (floors 12 to 15), (614) 645-8186. Misdemeanor marijuana possession and minor misdemeanor drug citations are handled there. Felony drug possession, meaning any amount of cocaine, heroin, methamphetamine or other Schedule I/II substances, is arraigned at the Municipal Court and bound over to the Franklin County Court of Common Pleas. The Municipal Court also runs HART Court for opioid-involved defendants.',
  },
  {
    question: "What drug possession is still criminal in Columbus under Ohio's marijuana law?",
    answer:
      'Ohio Issue 2 (effective December 7, 2023) and HB 86 legalized adult-use possession of up to 2.5 oz of marijuana and 15g of concentrate for adults 21+. Above those limits, 2.5 oz (70.87g) to 100g is a minor misdemeanor ($150 fine, no jail); 100 to 199g is an M4 (up to 30 days, $250 fine); 200g or more (the bulk amount) is an F5 felony, and larger amounts go higher. Cocaine, heroin, fentanyl, methamphetamine and other Schedule I/II substances are felonies in any amount. Drug paraphernalia (R.C. 2925.14) is an M4 for a first offense.',
  },
  {
    question: 'Can drug evidence in a Columbus case be suppressed?',
    answer:
      'Yes. Many Columbus drug cases turn on the legality of the stop or search. If the Columbus Division of Police, OSP or another agency stopped you without reasonable suspicion or searched without valid consent, exigent circumstances or a proper warrant, a suppression motion can exclude the drug evidence, and without it the prosecution usually has no case. Since legalization, searches based on the smell of marijuana alone face growing challenges in Ohio courts, and the firm follows that case law.',
  },
  {
    question: 'What is Intervention in Lieu of Conviction (ILC) in Columbus?',
    answer:
      'Ohio Revised Code 2951.041 authorizes ILC, which lets eligible first-time defendants complete substance abuse treatment instead of being convicted. Completing ILC leads to full dismissal of the charges. Franklin County Municipal Court has discretion to grant ILC and also runs HART Court, a recovery docket for opioid-involved defendants. The firm assesses ILC eligibility at the start of every Columbus drug case, because a dismissal through ILC beats any plea.',
  },
  {
    question: 'Can a Columbus drug conviction be expunged?',
    answer:
      'Most drug possession convictions, from misdemeanors through F3 felonies, can be expunged under ORC 2953.32 after the waiting period (1 year for a misdemeanor, F4 or F5; 3 years for an F3). HB 96 (effective September 30, 2025) expanded eligibility. The firm looks at expungement from the start of the case, because some plea outcomes keep it available and others do not.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus drug possession charge?',
    answer:
      'Jwayyed Law LLC defends drug possession charges in Columbus and throughout Franklin County. Drug cases often have workable suppression arguments, and ILC or HART Court is open to many eligible first-time defendants. A drug conviction, especially a felony, affects jobs, housing and professional licenses long after the sentence ends. Call (614) 285-5482 to discuss your case.',
  },
];

const RELATED = [
  { href: '/criminal-defense/drug-possession', title: 'Drug possession defense in Ohio', subtitle: 'The statewide rules' },
  { href: '/locations/franklin-county/marijuana-possession-columbus', title: 'Marijuana possession in Columbus', subtitle: 'Limits and tiers under adult-use law' },
  { href: '/locations/franklin-county/expungement-columbus', title: 'Expungement in Columbus', subtitle: 'Sealing a drug conviction' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
];

export default function ColumbusDrugPossessionPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Drug Possession Defense in Columbus", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Drug possession defense in Columbus"
        description="Drug charges from Columbus start at Franklin County Municipal Court. Felonies are bound over to Common Pleas, and HART Court and ILC can end a case without a conviction."
      />

      <Section
        title="Where a Columbus drug case is heard"
        intro={<p>Every Columbus drug charge starts at {FCMC.name}. Felonies then move to Common Pleas.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'Misdemeanor marijuana and minor misdemeanor drug citations, and the arraignment of felony drug charges.' },
            { label: 'Specialized dockets', value: FCMC.specializedDockets.join('; ') },
          ]}
        />
        <FactTable
          title="Franklin County Court of Common Pleas"
          rows={[
            { label: 'What it hears', value: 'Felony drug possession, after bind-over from the Municipal Court, for all further proceedings.' },
            { label: 'Specialty dockets', value: 'Including a drug court for eligible defendants.' },
          ]}
        />
        <p>
          Columbus sits where I-70 and I-71 meet, two major national drug-transit corridors, and the Columbus Division of Police, Ohio
          State Highway Patrol and DEA task forces enforce drug laws in the neighborhoods and on the highways. Arrests come from traffic
          stops on I-70, I-71, US-40 and other corridors, searches incident to arrest for other offenses, consent searches at Columbus
          addresses and warrant searches. Each raises its own constitutional issues. Call <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <Section title="What is legal and what is charged" tone="ice">
        <p>
          Ohio Issue 2 (effective December 7, 2023) and House Bill 86 let adults 21 and older possess up to 2.5 ounces of marijuana and up
          to 15 grams of concentrate, and grow up to 6 plants per adult. Possession within these limits is not criminal and cannot support a
          prosecution.
        </p>
        <FactTable
          title="Marijuana above the legal limit (R.C. 2925.11)"
          rows={[
            { label: '2.5 oz to 99g (about 3.5 oz)', value: 'Minor misdemeanor: no jail, maximum $150 fine.' },
            { label: '100 to 199g', value: 'Fourth-degree misdemeanor: up to 30 days in jail, $250 fine.' },
            { label: '200g or more', value: 'Bulk amount: aggravated possession, a fifth-degree felony (up to 12 months in prison, $2,500 fine), rising to F3, F2 and F1 at higher amounts.' },
          ]}
        />
        <FactTable
          title="Other controlled substances (R.C. 2925.11)"
          rows={[
            { label: 'Cocaine, heroin, methamphetamine', value: 'A felony from the first detectable amount: a fifth-degree felony at baseline (up to 12 months in prison, $2,500 fine).' },
            { label: 'Bulk amounts', value: 'Cocaine at 10 grams and heroin at 5 grams become F4; higher amounts rise to F3, F2 and F1.' },
            { label: 'Fentanyl', value: 'Fentanyl and related compounds carry enhanced penalties, with lower bulk thresholds than heroin.' },
            { label: 'Paraphernalia (R.C. 2925.14)', value: 'Syringes, pipes, scales, packaging and similar items: a fourth-degree misdemeanor on a first offense (up to 30 days, $250 fine), an M2 on a second.' },
          ]}
        />
      </Section>

      <Section title="Defense paths">
        <p>Most Columbus drug cases are resolved through one of two paths: suppression or diversion.</p>
        <Steps
          steps={[
            {
              title: 'Test the search',
              body: 'Every stage of the encounter (the stop, the frisk, the search, the warrant) is reviewed under the Fourth Amendment. An unlawful search leads to suppression, and suppression usually leads to dismissal.',
            },
            {
              title: 'Check the marijuana law',
              body: 'Since legalization, the smell of marijuana alone as probable cause is contested. The firm researches current Ohio Supreme Court and Tenth District decisions in every marijuana-related case, and confirms whether the amount was within the legal limits before any plea.',
            },
            {
              title: 'Pursue diversion',
              body: 'ILC under ORC 2951.041 offers a treatment-based path to full dismissal for eligible first-time defendants. HART Court offers structured recovery programming as an alternative to prosecution. Completing either ends in dismissal of the charges with no conviction.',
            },
            { title: 'Plan the record', body: 'The plea is chosen with expungement in mind, because the right plea can keep it available.' },
          ]}
        />
      </Section>

      <Section title="What a drug conviction costs" tone="ice">
        <p>
          A felony drug conviction ends your right to possess a firearm under federal law. Jobs in healthcare, transportation, education,
          finance and any licensed field become much harder to get. Non-citizens face deportation risk. Financial aid, scholarships and
          academic standing at Columbus colleges can all be affected.
        </p>
        <p>
          Most drug possession convictions, from misdemeanors through F3 felonies, can be expunged under R.C. 2953.32 after the waiting
          period, so the long-term record is part of planning the defense.
        </p>
      </Section>

      <Section title="What the firm does on a Columbus drug charge">
        <PointGrid
          points={[
            { title: 'Suppression motions', body: 'A Fourth Amendment analysis of every stop, search and seizure behind the evidence.' },
            { title: 'Marijuana law', body: 'Whether the possession was within the adult-use limits.' },
            { title: 'ILC and HART Court', body: 'Treatment-based dismissal for eligible first-time defendants, plus specialty docket options in Common Pleas.' },
            { title: 'Quantity and classification', body: 'Challenges to the weight and the substance classification that set the degree.' },
            { title: 'Knowledge', body: 'Whether the prosecution can prove you knowingly possessed the drugs.' },
            { title: 'Paraphernalia', body: 'Whether the item meets the statutory definition and was intended for drug use.' },
            { title: 'Expungement planning', body: 'ORC 2953.32 eligibility from the start of the case.' },
          ]}
        />
        <p>
          Drug cases move quickly through the Franklin County system. Call <a href="tel:6142855482">(614) 285-5482</a> or{' '}
          <Link href="/contact">schedule a consultation</Link>.
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
