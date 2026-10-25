import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section } from '@/components/practice';
import { FCMC } from '@/data/franklin-county-reference';

export const metadata: Metadata = {
  title: 'Columbus Marijuana Possession Attorney',
  description:
    'Possession above the 2.5-ounce adult-use limit, or by anyone under 21, is still charged under R.C. 2925.11 in Columbus courts.',
  keywords: ['Columbus marijuana possession lawyer', 'cannabis possession Columbus Ohio', 'weed charge Columbus attorney', 'marijuana defense Franklin County', 'Columbus drug possession marijuana'],
  openGraph: {
    title: 'Columbus Marijuana Possession Attorney | Jwayyed Law LLC',
    description: 'Legal limits, penalty tiers, search defenses, ILC and expungement for marijuana charges in Columbus.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/marijuana-possession-columbus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/marijuana-possession-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Marijuana Possession in Columbus', href: '/locations/franklin-county/marijuana-possession-columbus' },
];

const faqs = [
  {
    question: 'How much marijuana can I legally possess in Columbus?',
    answer:
      "Under Ohio's adult-use law (Issue 2 / H.B. 86, effective December 7, 2023), adults 21 and over may possess up to 2.5 ounces (about 71 grams) of marijuana flower and up to 15 grams of extract or concentrate. Growing up to six plants at home is also allowed. Possession above these limits, or any possession by someone under 21, is still a criminal offense under R.C. 2925.11.",
  },
  {
    question: 'What are the penalties for marijuana possession above the legal limit in Columbus?',
    answer:
      'Possession above the adult-use limit is charged under R.C. 2925.11. More than 2.5 ounces (70.87g) up to 100 grams is a minor misdemeanor: a fine up to $150 and no jail. 100 to 199 grams is a fourth-degree misdemeanor (up to 30 days in jail, $250 fine). 200 to 999 grams (at or above the bulk amount) is a fifth-degree felony. 1,000 to 4,999 grams is a third-degree felony. 5,000 to 19,999 grams is a second-degree felony. 20,000 grams or more is a first-degree felony. All felony charges go to the Franklin County Court of Common Pleas.',
  },
  {
    question: 'Can a Columbus marijuana possession conviction be expunged?',
    answer:
      'Yes. Marijuana possession convictions can be expunged under R.C. 2953.32, as expanded by H.B. 96 (effective September 30, 2025). The waiting period is 6 months after final discharge for a minor misdemeanor and 1 year for a fourth-degree misdemeanor or felony. Under H.B. 96, many prior marijuana convictions for conduct no longer criminal after legalization may qualify for faster relief. The firm handles expungement petitions at the Franklin County Court of Common Pleas.',
  },
  {
    question: 'Does adult-use legalization affect older marijuana convictions in Columbus?',
    answer:
      'H.B. 86 does not automatically expunge or vacate prior marijuana convictions. H.B. 96 (effective 2025) expanded expungement eligibility and created a path to relief for some prior convictions for conduct that is no longer criminal. If you have a prior marijuana possession conviction, especially for an amount now within the legal limit, ask Jwayyed Law LLC whether H.B. 96 opens an expungement option.',
  },
  {
    question: "What if I'm under 21 and found with any amount of marijuana in Columbus?",
    answer:
      "The adult-use allowances do not apply under 21. Any marijuana possession by someone under 21 is a criminal offense under R.C. 2925.11, under the standard penalty structure. The conviction sits on your record like any other drug offense and can affect jobs, housing and education, so defend it even for a small amount.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus marijuana possession charge?',
    answer:
      'Marijuana charges still arise for amounts over the limit, for people under 21 and for conduct in school zones and other restricted areas. Jwayyed Law LLC challenges the constitutional validity of the search that found the marijuana, checks whether the weight was measured correctly, and pursues Intervention in Lieu of Conviction (ILC) and expungement where available. Call (614) 285-5482.',
  },
];

const RELATED = [
  { href: '/locations/franklin-county/drug-possession-defense-columbus', title: 'Drug possession in Columbus', subtitle: 'Other controlled substances' },
  { href: '/locations/franklin-county/marijuana-ovi-columbus', title: 'Marijuana OVI in Columbus', subtitle: 'Per se THC limits for drivers' },
  { href: '/locations/franklin-county/expungement-columbus', title: 'Expungement in Columbus', subtitle: 'Sealing a prior conviction' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
  { href: '/criminal-defense/marijuana-possession', title: 'Marijuana possession in Ohio', subtitle: 'The statewide rules' },
];

export default function ColumbusMarijuanaPossessionPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Marijuana Possession Defense in Columbus", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/marijuana-possession-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Columbus marijuana possession defense attorney"
        description="Adults 21 and over may possess up to 2.5 ounces in Ohio. Above that, or under 21, possession is still charged under R.C. 2925.11."
      />

      <KeyFacts
        facts={[
          { figure: '2.5 oz', label: 'legal limit for adults 21 and over, plus 15 grams of concentrate' },
          { figure: '100 g', label: 'where a minor misdemeanor becomes a fourth-degree misdemeanor' },
          { figure: '200 g', label: 'bulk amount, where possession becomes a felony' },
        ]}
      />

      <Section
        title="Which Columbus court hears your case"
        intro={<p>The amount decides the court: misdemeanor amounts stay in {FCMC.name}, felony amounts go to Common Pleas.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'Misdemeanor marijuana possession charges.' },
          ]}
        />
        <FactTable
          title="Franklin County Court of Common Pleas"
          rows={[
            { label: 'What it hears', value: 'Felony marijuana possession (200 grams or more), and expungement petitions handled by the firm.' },
          ]}
        />
        <p>
          Columbus has a large student population at OSU and other universities, where a drug charge can carry serious academic and
          professional consequences. Call <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <Section title="What Ohio's adult-use marijuana law covers" tone="ice">
        <p>
          Issue 2 and H.B. 86 (effective December 7, 2023) set up adult recreational use in Ohio. Adults 21 and over may possess up to 2.5
          ounces of flower or up to 15 grams of extract, buy from a licensed dispensary, and grow up to six plants at their primary
          residence for personal use. The plants must be out of public view, in an enclosed, locked space.
        </p>
        <FactTable
          title="Still illegal under the adult-use law"
          rows={[
            { label: 'Amount', value: 'Possession above the 2.5-ounce limit.' },
            { label: 'Age', value: 'Any possession by someone under 21.' },
            { label: 'Place of use', value: 'Use in public places, schools or workplaces (adult use is home-only).' },
            { label: 'Driving', value: 'Operating a vehicle under the influence of marijuana.' },
            { label: 'Federal property', value: 'Possession on federal property, such as National Guard facilities, post offices and VA hospitals in Columbus.' },
            { label: 'Sales', value: 'Sale or distribution without a license.' },
          ]}
          note="A Columbus driver stopped on I-670 with four ounces of marijuana in the car has three times the legal possession amount, a potential felony."
        />
      </Section>

      <Section title="Penalty tiers under R.C. 2925.11">
        <p>The charge depends on the total weight.</p>
        <FactTable
          title="Marijuana possession by weight"
          rows={[
            { label: 'Over 2.5 oz (70.87g) to 100g', value: 'Minor misdemeanor: a $150 fine, no jail, but still a criminal conviction.' },
            { label: '100 to 199g', value: 'Fourth-degree misdemeanor (M4): up to 30 days in jail and a $250 fine.' },
            { label: '200 to 999g', value: 'Bulk amount: F5 felony (aggravated possession), 6 to 12 months in prison and fines up to $2,500.' },
            { label: '1,000 to 4,999g', value: 'F3 felony: 9 to 36 months.' },
            { label: '5,000 to 19,999g', value: 'F2 felony.' },
            { label: '20,000g or more', value: 'F1 felony, the most serious degree.' },
          ]}
        />
        <p>
          Because every tier turns on weight, an inaccurate weight (a weighing error, included packaging or separate items combined) can
          lower the degree. The firm checks the laboratory weight report in every case.
        </p>
      </Section>

      <Section title="Defenses and alternatives to a marijuana possession charge" tone="ice">
        <PointGrid
          points={[
            {
              title: 'The search',
              body: 'Before legalization, the odor of marijuana alone gave Columbus police probable cause to search a vehicle. Whether it still does when the amount could be legal is an evolving question: courts in several states have said odor alone is not enough after legalization, and Ohio courts are still developing the rule.',
            },
            {
              title: 'The stop',
              body: 'If the stop lacked reasonable suspicion, or the search had no valid consent, probable cause or warrant, the marijuana can be suppressed, which usually ends the case.',
            },
            {
              title: 'Intervention in Lieu of Conviction',
              body: 'ILC under R.C. 2951.041 is a diversion program for possession driven by substance use. Completing treatment, drug testing and other conditions leads to dismissal without a conviction. The prosecutor must consent and the court must approve.',
            },
            { title: 'The weight', body: 'A challenge to the lab weight can move the charge to a lower tier.' },
          ]}
        />
        <h3>Expunging an older conviction</h3>
        <p>
          H.B. 96 (effective September 30, 2025) expanded expungement under R.C. 2953.32. Prior minor misdemeanor marijuana possession
          convictions may now be sealed after a 6-month waiting period from final discharge. The firm handles expungement petitions at the
          Franklin County Court of Common Pleas and can tell you whether your conviction qualifies.
        </p>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
