import RelatedArticles from '@/components/practice/RelatedArticles';
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Marijuana Possession Defense Ohio',
  description:
    'What is legal and what is still a crime under Ohio Issue 2 and HB 86, the penalties above the legal limit, and the defenses that apply. Call (614) 285-5482.',
  keywords: [
    'marijuana possession lawyer Ohio',
    'marijuana defense attorney Columbus',
    'Ohio marijuana possession law 2025',
    'Ohio Issue 2 marijuana possession',
    'marijuana possession ORC 2925.11',
    'Franklin County marijuana lawyer',
    'Ohio adult use marijuana possession',
  ],
  openGraph: {
    title: 'Marijuana Possession Defense Ohio | Jwayyed Law LLC',
    description: 'What Ohio Issue 2 and HB 86 made legal, what is still criminal, and how a marijuana possession charge is defended.',
    url: 'https://www.jjlawohio.com/criminal-defense/marijuana-possession',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/criminal-defense/marijuana-possession' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Marijuana Possession', href: '/criminal-defense/marijuana-possession' },
];

const faqs = [
  {
    question: 'Is marijuana legal in Ohio?',
    answer:
      'For adults 21 and older, yes, within limits. Ohio Issue 2 (effective December 7, 2023) and House Bill 86 set up a legal adult-use framework. Adults may possess up to 2.5 ounces of marijuana and up to 15 grams of concentrate, and may grow up to 6 plants per adult at home, without criminal liability. Possession above those amounts is still illegal. So is any possession by someone under 21, public consumption, and driving while impaired by marijuana.',
  },
  {
    question: 'What marijuana possession amounts are still criminal in Ohio?',
    answer:
      'Under R.C. 2925.11(C)(3), possession above the adult-use limit is graded by amount. 2.5 to 10 ounces (above the legal limit but below the bulk amount) is a minor misdemeanor: no jail and a $150 fine. 200 grams (the bulk amount) or more is a fourth-degree misdemeanor: up to 30 days in jail and a $250 fine. Bulk to 5 times bulk is a fifth-degree felony; 5 to 50 times bulk is F4; 50 to 1,000 times bulk is F3; above 1,000 times bulk is F2. Marijuana concentrate has its own quantity thresholds.',
  },
  {
    question: 'Does marijuana legalization in Ohio affect pending charges?',
    answer:
      'Issue 2 and HB 86 apply to new conduct. They do not automatically vacate prior convictions or dismiss pending charges. If a pending charge is for possession within the new legal limits (2.5 oz or less, adult 21 or older), the conduct is no longer criminal and the charge should be dismissed. Ohio law as of 2026 does not provide automatic vacatur for a prior conviction for an amount that is now legal, but expungement may be available for eligible convictions under ORC 2953.32.',
  },
  {
    question: 'Can I be fired or lose a professional license for marijuana possession in Ohio?',
    answer:
      'Yes, it is possible. Issue 2 does not affect private employer drug testing. Employers may still test for marijuana and discipline or fire employees who test positive, even for legal adult-use amounts. Federal contractors and safety-sensitive workers (commercial drivers, federal employees) remain under the federal prohibition whatever state law says. Ohio licensing boards may still consider marijuana-related convictions. Only conduct within the legal limits (below 2.5 oz, adults 21 and older) is free from state prosecution.',
  },
  {
    question: 'Can a marijuana possession conviction in Ohio be expunged?',
    answer:
      'Generally, yes. Marijuana possession convictions, including minor misdemeanor and M4 convictions, are usually eligible for expungement under Ohio Revised Code 2953.32 once the waiting period has passed. HB 96 (effective September 30, 2025) widened the drug offenses eligible for sealing. Prior convictions for amounts that are now legal under Issue 2 may be strong candidates. The firm reviews eligibility and handles the petition.',
  },
  {
    question: 'What if I was charged with marijuana OVI in Ohio?',
    answer:
      "Ohio's adult-use law does not legalize driving while impaired by marijuana. R.C. 4511.19 prohibits operating a vehicle under the influence of marijuana or any controlled substance, and Ohio has per se limits for marijuana metabolites and THC concentration in blood. A marijuana OVI carries the same mandatory minimum penalties as an alcohol OVI under HB 37. The science of marijuana impairment testing is less settled than breath alcohol testing, and the firm challenges both the per se limits and the evidence of actual impairment.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a marijuana possession charge in Ohio?',
    answer:
      'The firm defends marijuana possession charges throughout Ohio, including Franklin County and the surrounding communities. The first question is whether the charge should have been filed at all, because the possession was within the legal limits. For a valid charge, the firm pursues diversion and ILC for eligible clients and challenges the search that produced the evidence. Call (614) 285-5482 to discuss your case.',
  },
];

export default function MarijuanaPossessionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Marijuana possession defense in Ohio"
        description="Adults 21 and older may legally possess up to 2.5 ounces in Ohio. Above that amount, under 21, or behind the wheel, marijuana is still a crime."
      />

      <KeyFacts
        facts={[
          { figure: '2.5 oz', label: 'of marijuana an adult 21 or older may legally possess' },
          { figure: '15 grams', label: 'of marijuana concentrate allowed under the adult-use law' },
          { figure: '6 plants', label: 'per adult for home cultivation, no more than 12 per residence' },
          { figure: '200 grams', label: 'the bulk amount, where possession becomes a fourth-degree misdemeanor' },
        ]}
      />

      <Section
        title="What changed in Ohio marijuana law"
        intro={
          <p>
            Issue 2, effective December 7, 2023, and House Bill 86 created a legal adult-use framework. Adults 21 and older may possess
            up to 2.5 ounces and grow up to 6 plants at home without criminal liability.
          </p>
        }
      >
        <p>
          The law did not make all possession legal, and Ohio police still make marijuana arrests. Possession above the legal limit,
          possession by anyone under 21, and marijuana-impaired driving all remain crimes. Charges filed before the new law took effect,
          and charges for amounts above the limits, still need a defense.
        </p>
        <p>
          The first step in any case is to pin down what you had, how much, and whether the conduct fell inside the adult-use framework.
          If the possession was within the limits (under 2.5 oz, adult 21 or older, not in a vehicle on a public road or near a school),
          the charge should be dismissed. The firm checks for this at the start and challenges any charge built on conduct Ohio law now
          protects. To talk it through, call <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <Section title="What adults 21 and older may legally do" tone="ice">
        <p>Under Issue 2 and House Bill 86, an adult 21 or older may:</p>
        <ul>
          <li>
            possess up to <strong>2.5 ounces</strong> of marijuana
          </li>
          <li>
            possess up to <strong>15 grams</strong> of marijuana concentrate
          </li>
          <li>
            grow up to <strong>6 plants</strong> at home (no more than 12 plants per residence)
          </li>
          <li>buy marijuana at licensed dispensaries</li>
          <li>give marijuana to other adults in permitted amounts</li>
        </ul>
        <p>
          None of these expose you to prosecution under Ohio law. Cities may not criminalize them either, because state law preempts
          local ordinances in this area.
        </p>
        <h3>What is still prohibited</h3>
        <p>
          Smoking, vaping or consuming marijuana in public is prohibited and carries civil penalties. Consuming it in a motor vehicle is
          prohibited. Driving while impaired by marijuana is a crime under R.C. 4511.19, the same OVI statute that covers alcohol. People
          under 21 fall outside the framework and face the standard possession laws.
        </p>
        <Callout title="Federal law has not changed">
          Federal law still lists marijuana as a Schedule I controlled substance. Ohio&apos;s law gives no protection on federal property,
          for federal employees, or for anyone subject to federal licensing rules.
        </Callout>
      </Section>

      <Section title="Penalties above the legal limit">
        <p>
          Ohio Revised Code 2925.11(C)(3) grades possession above the adult-use limits by amount. Possession of any amount by a person
          under 21 is criminal under the juvenile marijuana offense provisions.
        </p>
        <FactTable
          title="Marijuana possession under R.C. 2925.11(C)(3)"
          rows={[
            { label: '2.5 to 10 ounces', value: 'Minor misdemeanor. No jail, $150 fine.' },
            { label: '200 grams (bulk) or more', value: 'Fourth-degree misdemeanor. Up to 30 days in jail, $250 fine.' },
            { label: 'Bulk to 5 times bulk', value: 'Fifth-degree felony (aggravated possession).' },
            { label: '5 to 50 times bulk', value: 'F4.' },
            { label: '50 to 1,000 times bulk', value: 'F3.' },
            { label: 'Above 1,000 times bulk', value: 'F2.' },
          ]}
          note="Marijuana concentrate has its own quantity thresholds."
        />
      </Section>

      <Section title="How a marijuana charge is defended" tone="ice">
        <Steps
          steps={[
            {
              title: 'Was it a crime at all?',
              body: 'If the possession was within the adult-use limits (2.5 oz or less, adult 21 or older), the charge is legally defective and should be dismissed.',
            },
            {
              title: 'Was the search lawful?',
              body: 'For above-limit possession, the case often turns on suppression. Ohio courts have held that the smell of marijuana, while possibly relevant, cannot by itself justify a search after legalization, because possession in legal amounts has a "fair probability" of being lawful. The firm follows Ohio case law on this issue and argues suppression where it applies.',
            },
            {
              title: 'Is there a diversion path?',
              body: (
                <>
                  For felony possession, Intervention in Lieu of Conviction (ILC) under ORC 2951.041 can lead to a full dismissal after
                  treatment. Franklin County Municipal Court also runs the HART Court recovery docket for substance-involved defendants. A
                  diversion path is usually a better outcome than any plea, so the firm checks eligibility at the start.
                </>
              ),
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a marijuana case">
        <PointGrid
          points={[
            { title: 'Checks the legal limits', body: "Whether the possession was within Ohio's adult-use limits and the charge should be dismissed." },
            { title: 'Moves to suppress', body: 'Challenges whether the smell of marijuana alone justified the search under post-legalization Ohio case law.' },
            { title: 'Pursues ILC and diversion', body: 'Treatment-based dismissal for eligible clients.' },
            { title: 'Contests the weight', body: 'Challenges the lab-reported weight used to set the degree of the offense.' },
            { title: 'Defends marijuana OVI', body: 'Challenges per se THC limits and the evidence of actual impairment.' },
            {
              title: 'Plans for expungement',
              body: 'Advises on ORC 2953.32 eligibility for any conviction, including prior convictions for amounts now within the legal limits.',
            },
          ]}
        />
        <p>
          If you are charged in <Link href="/locations/franklin-county">Franklin County</Link> or anywhere in Ohio, call{' '}
          <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>. Ohio&apos;s marijuana laws
          are still changing, and the defense depends on the current rules.
        </p>
      </Section>

      <RelatedArticles category="Criminal Defense" title="Articles on Ohio criminal charges" slugs={["protecting-rights-during-traffic-stop-ohio", "what-is-expungement-ohio-2024", "misdemeanor-vs-felony-ohio"]} />
      <FAQ faqs={faqs} />
      <LocationsWeServe title="Areas We Serve" />
      <ContactCTA />
    </>
  );
}
