import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Drug Possession Defense Ohio',
  description:
    'Charged with drug possession under R.C. 2925.11? Penalties by substance, marijuana limits, suppression and ILC. Call Jwayyed Law LLC at (614) 285-5482.',
  keywords: [
    'drug possession lawyer Ohio',
    'drug possession defense attorney Columbus',
    'cocaine possession Ohio',
    'heroin possession attorney Ohio',
    'drug possession ORC 2925.11',
    'Franklin County drug possession lawyer',
    'drug possession defense Ohio',
    'controlled substance possession attorney',
  ],
  openGraph: {
    title: 'Drug Possession Defense Ohio | Jwayyed Law LLC',
    description: 'Penalties, marijuana limits, suppression and Intervention in Lieu of Conviction for drug possession charges in Ohio.',
    url: 'https://www.jjlawohio.com/criminal-defense/drug-possession',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/criminal-defense/drug-possession' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Drug Possession', href: '/criminal-defense/drug-possession' },
];

const faqs = [
  {
    question: 'What is drug possession under Ohio Revised Code 2925.11?',
    answer:
      'Ohio Revised Code 2925.11 prohibits knowingly obtaining, possessing or using a controlled substance or controlled substance analog. It applies to Schedule I through V controlled substances, including cocaine, heroin, fentanyl, methamphetamine, prescription drugs without a valid prescription, and marijuana above the adult-use legal limit. The charge depends on the substance (its Schedule) and the quantity. The prosecution must prove knowing possession, so accidental possession and drugs you did not know were there (in a borrowed car, for example) are defenses.',
  },
  {
    question: 'What are the penalties for drug possession in Ohio?',
    answer:
      'They vary widely by substance and quantity. Possession of most Schedule I or II controlled substances (cocaine, heroin, methamphetamine) starts as a fifth-degree felony (up to 12 months in prison and a $2,500 fine) and rises to F4, F3, F2 and F1 at higher quantities. Marijuana above the adult-use limit of 2.5 oz is a minor misdemeanor ($150 fine) up to the bulk amount (200g); bulk marijuana possession is an M4 (up to 30 days and a $250 fine). Drug paraphernalia under R.C. 2925.14 is an M4 on a first offense.',
  },
  {
    question: 'Is marijuana possession still a crime in Ohio?',
    answer:
      'For adults 21 and older, Ohio Issue 2 (effective December 7, 2023) and House Bill 86 legalized possession of up to 2.5 ounces of marijuana and up to 15 grams of marijuana concentrate, plus home cultivation of up to 6 plants. Possession within those limits is not a crime. Above 2.5 oz it is still a minor misdemeanor; 200 grams or more (the bulk amount) is an M4; and larger amounts become felonies under R.C. 2925.11(C)(3). People under 21 are not covered by the adult-use law.',
  },
  {
    question: 'Can drug evidence be suppressed if the search was unlawful?',
    answer:
      'Yes. Many drug cases turn on whether the search was legal. If police stopped you without reasonable suspicion, searched you or your car without valid consent or exigent circumstances, or used a warrant that lacked particularity or probable cause, a motion to suppress may exclude the drug evidence under the Fourth Amendment. Without that evidence, the prosecution often has no case. The firm examines the stop, the search and the chain-of-custody records in every drug possession case before evaluating any plea offer.',
  },
  {
    question: 'What is Intervention in Lieu of Conviction for drug possession in Ohio?',
    answer:
      'Ohio Revised Code 2951.041 authorizes Intervention in Lieu of Conviction (ILC), which lets eligible defendants charged with drug possession complete substance abuse treatment instead of being convicted. It is available to first-time offenders whose offense was related to substance dependency. Completing it leads to dismissal of the charges, with no conviction and no record. Probation follows a conviction; ILC avoids one. The firm checks ILC eligibility for every drug possession client and argues for placement where it fits.',
  },
  {
    question: 'Can a drug possession conviction in Ohio be expunged?',
    answer:
      'Most drug possession convictions can be expunged under Ohio Revised Code 2953.32 after the waiting period: 1 year for minor misdemeanor and M1/F4/F5 convictions, and 3 years for F3 convictions. HB 96 (effective September 30, 2025) widened the kinds of drug offenses that can be sealed. Drug trafficking and certain aggravated possession convictions may not be eligible. The firm checks expungement eligibility at the start of every case because it shapes plea strategy.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for drug possession defense in Ohio?',
    answer:
      'Jwayyed Law LLC defends drug possession charges throughout Ohio, including Franklin County, Columbus and nearby communities. Drug cases often raise suppression issues from unlawful stops or searches, and diversion options (ILC, HART Court) exist for many first-time defendants. A felony drug conviction affects jobs, housing and professional licenses for years. The firm looks at every option before you decide. Call (614) 285-5482 to discuss your case.',
  },
];

export default function DrugPossessionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Drug possession charges in Ohio"
        description="Possession of cocaine, heroin, fentanyl or methamphetamine under R.C. 2925.11 starts as a fifth-degree felony. Many cases turn on whether the search was legal."
      />

      <KeyFacts
        facts={[
          { figure: '12 months', label: 'maximum prison for fifth-degree felony possession, with a $2,500 fine' },
          { figure: '2.5 oz', label: 'marijuana an adult 21 or older may legally possess' },
          { figure: '200g', label: 'bulk amount of marijuana, where possession becomes an M4' },
        ]}
      />

      <Section
        title="What a drug possession charge means"
        intro={
          <p>
            Drug possession under Ohio Revised Code 2925.11 ranges from a minor misdemeanor marijuana citation to felony charges for
            cocaine, heroin, fentanyl or methamphetamine that can mean prison.
          </p>
        }
      >
        <p>
          The statute prohibits knowingly obtaining, possessing or using a controlled substance or controlled substance analog. The key
          element is <em>knowing</em> possession: the prosecution must prove you knew the substance was there and knew it was a
          controlled substance. Accidental possession, drugs you did not know were in a shared car or home, and situations where you
          had no reason to know the substance was illegal can all defeat that element. The degree of the charge depends on the
          substance&rsquo;s Schedule under Ohio law and the quantity.
        </p>
        <p>
          A felony drug conviction affects job applications, professional licenses, housing and, in some cases, federal benefits.
          Ohio&rsquo;s 2023 adult-use marijuana law changed the rules for cannabis, but larger amounts and other controlled substances
          are still crimes. Jwayyed Law LLC defends drug possession charges in Columbus, Franklin County and across central Ohio. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a> to discuss your situation.
        </p>
      </Section>

      <Section title="Drug possession penalties in Ohio" tone="ice">
        <FactTable
          title="Schedule I and II substances other than marijuana"
          rows={[
            {
              label: 'Base charge',
              value: 'Cocaine, heroin, fentanyl, methamphetamine and other Schedule I and II substances start as a fifth-degree felony under R.C. 2925.11 regardless of quantity: up to 12 months in prison and a $2,500 fine.',
            },
            { label: 'Bulk cocaine', value: '15 grams or more: F4.' },
            { label: 'Bulk heroin', value: '10 grams or more: F4.' },
            {
              label: 'Aggravated possession',
              value: 'Between the bulk amount and five times the bulk amount of any Schedule I or II substance: F5.',
            },
            { label: 'Larger amounts', value: 'F4 through F1 as the quantity rises.' },
            {
              label: 'Consequences',
              value: 'Prison is required in many felony cases. Collateral consequences include federal student loan restrictions, public housing eligibility and professional licensing.',
            },
          ]}
        />
        <FactTable
          title="Marijuana and paraphernalia"
          rows={[
            { label: 'Up to 2.5 oz (adults 21+)', value: 'Legal, along with up to 15 grams of concentrate.' },
            { label: '2.5 to 10 oz', value: 'Minor misdemeanor ($150 fine).' },
            { label: '200 grams or more (bulk)', value: 'M4 (up to 30 days and a $250 fine), rising to felony charges under R.C. 2925.11(C)(3) for larger amounts.' },
            { label: 'Paraphernalia (R.C. 2925.14)', value: 'M4 on a first offense.' },
          ]}
        />
      </Section>

      <Section title="What Ohio's marijuana law still makes a crime">
        <p>
          Ohio Issue 2, effective December 7, 2023, and implemented through House Bill 86, made Ohio the 24th state to legalize
          adult-use marijuana. Adults 21 and older may possess up to <strong>2.5 ounces</strong> of marijuana and up to{' '}
          <strong>15 grams</strong> of concentrate, and grow up to <strong>6 plants</strong> per adult at home.
        </p>
        <p>
          Possession above those amounts is still a crime, and people under 21 are not covered. Marijuana-impaired driving is still
          OVI under R.C. 4511.19.
        </p>
      </Section>

      <Section title="Suppression: was the search legal?" tone="ice">
        <p>
          The strongest defense in many drug cases is suppression. If the stop, search or seizure that produced the evidence was
          unlawful, a motion to suppress can exclude the drug evidence and leave the prosecution with nothing to prove the charge. In
          many cases the legal basis for the search is the most important issue in the case.
        </p>
        <PointGrid
          points={[
            { title: 'The stop', body: 'Whether police had a lawful basis to stop you.' },
            { title: 'The search', body: 'Its basis and scope, and whether it went beyond what was authorized.' },
            { title: 'Consent', body: 'Whether any consent you gave was truly voluntary.' },
            { title: 'Chain of custody', body: 'Whether the evidence was tracked and handled properly from seizure to lab.' },
          ]}
        />
      </Section>

      <Section title="Intervention in Lieu of Conviction and HART Court">
        <p>
          For eligible first-time defendants, Intervention in Lieu of Conviction (ILC) under ORC 2951.041 allows treatment instead of a
          conviction. Completing it leads to dismissal, with no conviction and no record.
        </p>
        <p>
          Franklin County Municipal Court also runs HART Court, an opioid and substance use recovery docket that offers structured
          treatment for eligible defendants as an alternative to traditional prosecution.
        </p>
        <Callout title="Dismissal beats any plea">
          The firm looks at ILC and HART Court at the start of every drug possession case, because a path to dismissal is better than
          any plea.
        </Callout>
      </Section>

      <Section title="What the firm does on a drug possession case" tone="ice">
        <PointGrid
          points={[
            { title: 'Suppression motions', body: 'Challenges unlawful stops, searches and seizures to exclude the drug evidence.' },
            { title: 'ILC and HART Court', body: 'Pursues treatment-based dismissal for eligible first-time defendants.' },
            { title: 'Marijuana limits', body: 'Confirms whether the possession was within the adult-use legal limits.' },
            { title: 'Knowledge challenges', body: 'Contests whether the prosecution can prove knowing possession.' },
            {
              title: 'Quantity and classification',
              body: 'Disputes lab-reported weights and the substance classification used to set the degree of the charge.',
            },
            { title: 'Expungement planning', body: 'Advises on ORC 2953.32 eligibility from the start of the case.' },
          ]}
        />
        <p>
          If you are charged in <Link href="/locations/franklin-county">Franklin County</Link>,{' '}
          <Link href="/locations/delaware-county">Delaware County</Link>,{' '}
          <Link href="/locations/greene-county">Greene County</Link> or elsewhere in Ohio, call{' '}
          <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>. Drug cases move
          quickly through Ohio courts, so start early.
        </p>
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Areas We Serve" />
      <ContactCTA />
    </>
  );
}
