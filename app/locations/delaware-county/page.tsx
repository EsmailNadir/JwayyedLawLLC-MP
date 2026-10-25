import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Delaware County Criminal Defense & OVI',
  description:
    'OVI, misdemeanor and personal injury cases in Delaware County: Delaware, Powell, Dublin and Sunbury, at Delaware County Municipal Court. Call (614) 285-5482.',
  keywords: [
    'Delaware County OVI attorney',
    'Delaware County criminal defense lawyer',
    'OVI lawyer Delaware Ohio',
    'Delaware County Municipal Court attorney',
    'Powell OVI defense',
    'Lewis Center criminal defense',
    'Delaware County misdemeanor lawyer',
    'personal injury Delaware County Ohio',
  ],
  openGraph: {
    title: 'Delaware County Criminal Defense & OVI | Jwayyed Law LLC',
    description: 'OVI, criminal, injury and business matters in Delaware County, at Delaware County Municipal Court and the Court of Common Pleas.',
    url: 'https://www.jjlawohio.com/locations/delaware-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/delaware-county' },
};

const breadcrumbItems = [{ label: 'Delaware County', href: '/locations/delaware-county' }];

const faqs = [
  {
    question: 'What areas of Delaware County does Jwayyed Law LLC serve?',
    answer:
      'All of Delaware County, including the City of Delaware, Powell, Lewis Center, Sunbury, Westerville (Delaware County portion), Dublin (Delaware County portion) and nearby communities. The firm appears at Delaware County Municipal Court (1 W. Winter St, Delaware, OH 43015) and the Delaware County Court of Common Pleas.',
  },
  {
    question: 'What practice areas does the firm handle in Delaware County?',
    answer:
      'The Delaware County practice covers OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Delaware County Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Delaware County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. A high-tier OVI (BAC 0.17% or above) carries higher mandatory minimums. A second OVI within 10 years requires at least 10 consecutive days in jail, fines of $715 to $1,625 and a 1 to 7 year suspension with 90-day vehicle immobilization.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Delaware County?',
    answer:
      'After an OVI arrest in Delaware County, the officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have 30 days from the date of the ALS to appeal it at Delaware County Municipal Court. Missing the deadline permanently waives your right to contest the suspension, even if the underlying OVI charge is later reduced or dismissed. Call the office as soon as you can after an OVI arrest.',
  },
  {
    question: 'Where is Delaware County Municipal Court located?',
    answer:
      'Delaware County Municipal Court is at 1 W. Winter Street, Delaware, OH 43015. It hears misdemeanor criminal cases, OVI/DUI charges, traffic violations and civil claims up to $15,000 for residents and incidents within Delaware County.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Delaware County legal matters?',
    answer:
      'Jwayyed Law LLC is a Columbus-based firm that regularly practices in Delaware County Municipal Court and the Delaware County Court of Common Pleas, and knows the local prosecutors, court procedures and sentencing practices there. Call (614) 285-5482 to schedule a consultation.',
  },
];

const SERVICES = [
  {
    href: '/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court',
    title: 'OVI / DUI defense at Delaware County Municipal Court',
    subtitle: 'First through felony OVI, high-tier, refusal, ALS appeals',
  },
  {
    href: '/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court',
    title: 'Criminal misdemeanor defense in Delaware County',
    subtitle: 'Theft, domestic violence, assault, drug possession, disorderly conduct',
  },
  {
    href: '/locations/delaware-county/personal-injury-delaware-county',
    title: 'Personal injury in Delaware County',
    subtitle: 'Car accidents, slip and fall, wrongful death, premises liability',
  },
  {
    href: '/locations/delaware-county/business-formation-llc-delaware-county',
    title: 'Business formation and LLCs in Delaware County',
    subtitle: 'LLC formation, operating agreements, business planning',
  },
];

export default function DelawareCountyLocationsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Delaware County criminal defense and OVI attorney"
        description="OVI arrests along US-23, US-36 and SR-315 go first to Delaware County Municipal Court, 1 W. Winter St in Delaware. The court also hears misdemeanors and civil claims up to $15,000."
      />

      <Section
        title="What we handle in Delaware County"
        intro={
          <p>
            Delaware County is one of Ohio&rsquo;s fastest-growing counties, stretching north of Columbus through Powell, Lewis Center
            and the City of Delaware. The firm represents clients at Municipal Court, the Court of Common Pleas and throughout the
            county.
          </p>
        }
      >
        <LinkGrid links={SERVICES} columns={2} />
      </Section>

      <Section title="Delaware County courts" tone="ice">
        <FactTable
          title="Delaware County Municipal Court"
          rows={[
            { label: 'Address', value: '1 W. Winter St, Delaware, OH 43015' },
            { label: 'Hears', value: 'Misdemeanor criminal cases, OVI/DUI charges, traffic violations and civil claims up to $15,000' },
            { label: 'Covers', value: 'Residents and incidents within Delaware County' },
            { label: 'ALS appeals', value: 'Filed here within 30 days' },
          ]}
        />
        <p>The firm also appears at the Delaware County Court of Common Pleas.</p>
        <LinkGrid
          columns={2}
          links={[
            { href: '/courts/delaware-county-municipal-court', title: 'Delaware County Municipal Court guide', subtitle: 'What to expect at the court' },
            { href: '/courts/delaware-county', title: 'Delaware County courts', subtitle: 'Every court in the county' },
          ]}
        />
      </Section>

      <Section title="After an arrest in Delaware County">
        <Callout title="After an OVI arrest, the clock is 30 days">
          The administrative license suspension must be appealed at Delaware County Municipal Court within 30 days, or the right to
          challenge it is lost. Call <a href="tel:6142855482">(614) 285-5482</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link>.
        </Callout>
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
