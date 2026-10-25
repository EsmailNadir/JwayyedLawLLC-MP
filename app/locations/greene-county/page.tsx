import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Greene County OVI & Criminal Defense',
  description:
    'OVI, criminal defense and personal injury across Greene County: Fairborn, Xenia, Beavercreek and nearby, at Fairborn Municipal Court. (614) 285-5482.',
  keywords: [
    'Greene County OVI attorney',
    'Greene County criminal defense lawyer',
    'OVI lawyer Fairborn Ohio',
    'Fairborn Municipal Court attorney',
    'Xenia OVI defense Ohio',
    'Beavercreek criminal defense attorney',
    'Greene County misdemeanor lawyer',
    'personal injury Greene County Ohio',
  ],
  openGraph: {
    title: 'Greene County OVI & Criminal Defense | Jwayyed Law LLC',
    description: 'OVI, criminal, injury and business matters in Greene County, at Fairborn Municipal Court and the Court of Common Pleas in Xenia.',
    url: 'https://www.jjlawohio.com/locations/greene-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/greene-county' },
};

const breadcrumbItems = [{ label: 'Greene County', href: '/locations/greene-county' }];

const faqs = [
  {
    question: 'What areas of Greene County does Jwayyed Law LLC serve?',
    answer:
      'The firm serves clients throughout Greene County, including Fairborn, Xenia, Beavercreek, Kettering (Greene County portion), Yellow Springs, Cedarville and nearby communities. It appears at Fairborn Municipal Court and the Greene County Court of Common Pleas in Xenia.',
  },
  {
    question: 'What practice areas does the firm handle in Greene County?',
    answer:
      'OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Greene County?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Greene County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. A high-tier OVI (BAC 0.17% or above) carries higher mandatory minimums. A second OVI within 10 years requires at least 10 consecutive days in jail, fines of $715 to $1,625 and a 1 to 7 year suspension with 90-day vehicle immobilization.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Greene County?',
    answer:
      'After an OVI arrest in Greene County, the officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have 30 days from the date of the ALS to appeal it at Fairborn Municipal Court or the Greene County court that has your case. Missing the deadline permanently waives your right to contest the suspension, even if the OVI charge is later reduced or dismissed. Call the office as soon as you can after an OVI arrest.',
  },
  {
    question: 'Where is Fairborn Municipal Court located?',
    answer:
      'Fairborn Municipal Court is at 1 W. Main Street, Fairborn, OH 45324. It hears misdemeanor criminal cases, OVI/DUI charges and traffic violations for Fairborn and surrounding Greene County communities. The Greene County Court of Common Pleas, which hears felony cases and civil matters over $15,000, is at 45 N. Detroit St, Xenia, OH 45385.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Greene County legal matters?',
    answer:
      'Jwayyed Law LLC is an Ohio firm that practices throughout the state, including in Greene County courts. On each case the firm reviews all of the evidence, looks for constitutional issues and works within local court procedure. Call (614) 285-5482 to schedule a consultation.',
  },
];

const SERVICES = [
  {
    href: '/locations/greene-county/ovi-dui-defense-greene-county-fairborn-municipal-court',
    title: 'OVI / DUI defense at Fairborn Municipal Court',
    subtitle: 'First through felony OVI, high-tier, refusal, ALS appeals',
  },
  {
    href: '/locations/greene-county/criminal-misdemeanor-defense-greene-county-fairborn-municipal-court',
    title: 'Criminal misdemeanor defense in Greene County',
    subtitle: 'Theft, domestic violence, assault, drug possession, disorderly conduct',
  },
  {
    href: '/locations/greene-county/personal-injury-greene-county',
    title: 'Personal injury in Greene County',
    subtitle: 'Car accidents, slip and fall, wrongful death, premises liability',
  },
  {
    href: '/locations/greene-county/business-formation-llc-greene-county',
    title: 'Business formation and LLCs in Greene County',
    subtitle: 'LLC formation, operating agreements, business planning',
  },
];

export default function GreeneCountyLocationsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Greene County criminal defense and OVI"
        description="OVI arrests and criminal charges in Greene County are heard at Fairborn Municipal Court, 1 W. Main St, and the Greene County Court of Common Pleas in Xenia."
      />

      <Section
        title="What we handle in Greene County"
        intro={
          <p>
            Greene County lies east of Dayton and is home to Fairborn, Xenia, Beavercreek and Yellow Springs. The firm represents
            clients across all Greene County courts.
          </p>
        }
      >
        <LinkGrid links={SERVICES} columns={2} />
      </Section>

      <Section title="Greene County courts" tone="ice">
        <FactTable
          title="Fairborn Municipal Court"
          rows={[
            { label: 'Address', value: '1 W. Main St, Fairborn, OH 45324' },
            { label: 'Hears', value: 'Misdemeanor criminal cases, OVI/DUI charges and traffic violations' },
            { label: 'Covers', value: 'Fairborn and surrounding Greene County communities' },
          ]}
        />
        <FactTable
          title="Greene County Court of Common Pleas"
          rows={[
            { label: 'Address', value: '45 N. Detroit St, Xenia, OH 45385' },
            { label: 'Hears', value: 'Felony cases and civil matters over $15,000' },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[
            { href: '/courts/fairborn-municipal-court', title: 'Fairborn Municipal Court guide', subtitle: 'What to expect at the court' },
            { href: '/courts/greene-county', title: 'Greene County courts', subtitle: 'Every court in the county' },
          ]}
        />
      </Section>

      <Section title="After an arrest in Greene County">
        <Callout title="After an OVI arrest, the clock is 30 days">
          The administrative license suspension must be appealed within 30 days at the court that has your case, or the right to
          challenge it is lost. Call <a href="tel:6142855482">(614) 285-5482</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link>.
        </Callout>
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
