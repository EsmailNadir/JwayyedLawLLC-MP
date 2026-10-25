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
  title: 'Columbus High-Tier OVI Defense: BAC 0.17%',
  description:
    'A BAC of 0.17% or above makes a Columbus OVI high tier, doubling the first-offense mandatory minimum to 6 days under HB 37.',
  keywords: ['Columbus high tier OVI lawyer', 'high BAC DUI Columbus Ohio', '0.17 OVI Columbus', 'aggravated OVI Columbus', 'high tier OVI Franklin County defense', 'high-tier OVI defense attorney Columbus', 'rising BAC defense', 'OVI defense attorney'],
  openGraph: {
    title: 'Columbus High-Tier OVI Defense: BAC 0.17% | Jwayyed Law LLC',
    description: 'Penalties, BAC challenges and the ALS appeal for a high-tier OVI at Franklin County Municipal Court.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/high-tier-ovi-columbus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/high-tier-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'High-Tier OVI in Columbus', href: '/locations/franklin-county/high-tier-ovi-columbus' },
];

const faqs = [
  {
    question: 'What is high-tier OVI in Columbus and when does it apply?',
    answer:
      "High-tier OVI applies when the BAC is 0.17% or above on a breath test, or an equivalent high concentration in blood or urine. Ohio's HB 37 (effective April 9, 2025) kept the high-tier designation and its higher mandatory minimums. High tier also covers certain drug concentrations in blood for Schedule I controlled substances and marijuana metabolites under R.C. 4511.19(A)(1)(h)-(j).",
  },
  {
    question: 'What are the mandatory penalties for a high-tier OVI in Columbus?',
    answer:
      'A first high-tier OVI (BAC 0.17%+) under HB 37 carries a mandatory minimum of 6 days: 3 days in jail plus 3 days in a certified Driver Intervention Program, or 6 days in jail if no DIP is available. Fines are $565 to $1,075 and the license suspension is 1 to 3 years. That is double the 3-day minimum for a standard first OVI, and the court cannot go below it.',
  },
  {
    question: 'Can a high-tier BAC result be challenged in Columbus?',
    answer:
      'Yes. Breath results above 0.17% can be challenged on accuracy and reliability. Ohio breath instruments have certified operating procedures and mandatory calibration intervals. Records showing improper calibration, irregular testing intervals or a malfunction can undermine a reading, especially one near the threshold (0.17% to 0.19%). Blood results can be challenged on chain of custody and lab procedure. The firm subpoenas the records before weighing the BAC evidence.',
  },
  {
    question: 'Is the DIP option available for a high-tier Columbus OVI?',
    answer:
      'Yes, in a different form. For a high-tier first OVI, the DIP alternative is 3 days in jail plus 3 days in a certified Driver Intervention Program, not the 3-day DIP alone that satisfies a low-tier case. If no DIP is available in Franklin County, the court must impose 6 days in jail. The firm checks DIP availability at the time of your case and advises on whether it fits.',
  },
  {
    question: 'Does a high-tier OVI in Columbus affect ignition interlock eligibility?',
    answer:
      'Under HB 37, a high-tier defendant who agrees to a certified ignition interlock can have the 15-day hard suspension waived for limited driving privileges, the same as a low-tier defendant. High-tier defendants may face stricter interlock requirements and longer interlock periods. The firm advises on the conditions that apply to your case.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus high-tier OVI?',
    answer:
      'A high-tier conviction is much more disruptive than a standard first OVI. Challenging a 0.17%+ result through calibration records, instrument error analysis and rising BAC is central to the defense. Jwayyed Law LLC files ALS appeals within the 30-day deadline and builds the defense around the BAC evidence in your case. Call (614) 285-5482.',
  },
];

const RELATED = [
  { href: '/locations/franklin-county/ovi-dui-defense-columbus', title: 'OVI defense in Columbus', subtitle: 'Every OVI charge in Franklin County' },
  { href: '/locations/franklin-county/first-ovi-columbus', title: 'First OVI in Columbus', subtitle: 'Low-tier penalties for comparison' },
  { href: '/locations/franklin-county/refusal-ovi-columbus', title: 'Refusal OVI in Columbus', subtitle: 'When no test was taken' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
  { href: '/ovi-dui-defense/high-tier-ovi', title: 'High-tier OVI in Ohio', subtitle: 'The statewide rules for a BAC of 0.17% or more' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Interlocks and driving during a suspension' },
];

export default function ColumbusHighTierOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: High-Tier OVI Defense in Columbus", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/high-tier-ovi-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="High-tier OVI defense in Columbus"
        description="A BAC of 0.17% or above doubles the mandatory minimum for a first OVI from 3 days to 6. The gap between 0.16% and 0.17% is why the accuracy of the test matters so much."
      />

      <KeyFacts
        facts={[
          { figure: '0.17%', label: 'BAC (or 0.17 grams per 210 liters of breath) that makes an OVI high tier' },
          { figure: '6 days', label: 'mandatory minimum for a first high-tier OVI' },
          { figure: '$565 to $1,075', label: 'fine range' },
          { figure: '30 days', label: 'from arrest to appeal the ALS' },
        ]}
      />

      <Section
        title="Where a Columbus high-tier OVI is heard"
        intro={<p>Columbus high-tier OVI charges are handled at {FCMC.name}.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'Breath instrument', value: 'Most commonly the Intoxilyzer 8000, used by the Columbus Division of Police and other Franklin County agencies.' },
          ]}
        />
        <p>
          Jwayyed Law LLC defends high-tier OVI charges at Franklin County Municipal Court. Call <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <Section title="What makes an OVI high tier" tone="ice">
        <p>
          Under R.C. 4511.19, the high tier applies at a breath result of 0.17 grams per 210 liters (the breath equivalent of 0.17% BAC) or
          above, or 0.17% in whole blood or the equivalent. It also applies to certain drug concentrations in blood under R.C.
          4511.19(A)(1)(h)-(j). The threshold is based on the tested result, which can be higher than your BAC while driving if it was still
          rising at the time of the test.
        </p>
        <FactTable
          title="First high-tier OVI under HB 37 (effective April 9, 2025)"
          rows={[
            { label: 'Jail', value: '6 days: 3 days in jail plus 3 days in a certified Driver Intervention Program, or 6 days in jail if no DIP is available.' },
            { label: 'Fine', value: '$565 to $1,075.' },
            { label: 'License', value: '1 to 3 years suspension.' },
            { label: 'Low tier, for comparison', value: '3 days, which can be met in a certified DIP with no jail time.' },
          ]}
        />
        <p>
          The difference between 0.16% and 0.17% is one one-hundredth of a percent (0.01%), and it decides whether the minimum is 3 days or 6.
          For results between 0.17% and 0.20%, the instrument&rsquo;s certified margin of error may span the threshold. A successful
          challenge can cut the mandatory minimum in half.
        </p>
      </Section>

      <Section title="High-tier OVI defense: challenging the BAC result">
        <PointGrid
          points={[
            {
              title: 'Calibration and maintenance',
              body: 'The Intoxilyzer 8000 has certified margins of error and mandatory calibration and maintenance requirements. A result of 0.17% to 0.19% may fall within the error margin. The firm subpoenas the logs for the specific instrument and compares them with Ohio Department of Health certification standards.',
            },
            {
              title: 'Rising BAC defense',
              body: 'If alcohol was still being absorbed, your BAC while driving may have been below 0.17%. This works best when there is a real gap between the stop and the test and the result is close to the threshold.',
            },
            { title: 'Blood tests', body: 'Chain of custody and laboratory procedure.' },
          ]}
        />
      </Section>

      <Section title="The license after a high-tier arrest" tone="ice">
        <FactTable
          title="Administrative License Suspension"
          rows={[
            { label: 'Test taken (BAC 0.08%+)', value: '90 days.' },
            { label: 'Refusal', value: '1 year.' },
            { label: 'Appeal', value: 'Within 30 days in Franklin County Municipal Court, with a stay requested.' },
          ]}
          note="The ALS starts at arrest and is separate from the criminal case."
        />
        <p>
          Under HB 37, a defendant who agrees to a certified ignition interlock may have the 15-day hard suspension waived for limited driving
          privileges. A high-tier defendant is also likely to need an interlock as a condition of privileges during a criminal suspension. The
          firm advises on how the ALS and any criminal suspension interact from the start.
        </p>
      </Section>

      <Section title="What a high-tier conviction costs">
        <p>
          An OVI conviction under R.C. 4511.19 is not eligible for expungement, so it stays on your criminal record and on background checks. It also
          appears on driving records reviewed by insurers, transportation and logistics employers, and agencies with security clearance
          requirements. Insurance rates often double or triple for years, and some carriers may decline coverage because of the high BAC.
        </p>
        <p>
          Attorneys, nurses, doctors, teachers and licensed contractors must disclose OVI convictions, and a high BAC adds weight before a
          licensing board. The 10-year lookback keeps a high-tier first conviction relevant if a second OVI follows within a decade.
        </p>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>. The 30-day ALS appeal
          deadline applies.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
