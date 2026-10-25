import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Clinton County Criminal Defense & OVI',
  description:
    'OVI, misdemeanor and personal injury cases in Clinton County: Wilmington, Blanchester and Sabina, at Wilmington Municipal Court. Call (614) 285-5482.',
  keywords: [
    'Clinton County OVI attorney',
    'Clinton County criminal defense lawyer',
    'OVI lawyer Wilmington Ohio',
    'Wilmington Municipal Court attorney',
    'Clinton County misdemeanor lawyer',
    'Blanchester OVI defense Ohio',
    'personal injury Clinton County Ohio',
    'Wilmington Ohio criminal defense attorney',
  ],
  openGraph: {
    title: 'Clinton County Criminal Defense & OVI | Jwayyed Law LLC',
    description: 'OVI, criminal, injury and business matters in Clinton County, at Wilmington Municipal Court and the Court of Common Pleas.',
    url: 'https://www.jjlawohio.com/locations/clinton-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/clinton-county' },
};

const breadcrumbItems = [{ label: 'Clinton County', href: '/locations/clinton-county' }];

const faqs = [
  {
    question: 'What areas of Clinton County does Jwayyed Law LLC serve?',
    answer:
      'The firm serves clients throughout Clinton County, including Wilmington, Blanchester, Sabina, Midland and nearby communities. It appears at Wilmington Municipal Court (69 N. South St, Wilmington, OH 45177) and the Clinton County Court of Common Pleas.',
  },
  {
    question: 'What practice areas does the firm handle in Clinton County?',
    answer:
      'The Clinton County practice covers OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Wilmington Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Clinton County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. A high-tier OVI (BAC 0.17% or above) carries higher mandatory minimums. A second OVI within 10 years requires at least 10 consecutive days in jail, fines of $715 to $1,625 and a 1 to 7 year suspension with 90-day vehicle immobilization.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Clinton County?',
    answer:
      'After an OVI arrest in Clinton County, the officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have 30 days from the date of the ALS to appeal it at Wilmington Municipal Court. Missing the deadline permanently waives your right to contest the suspension, even if the underlying OVI charge is later reduced or dismissed. Call the office as soon as you can after an OVI arrest.',
  },
  {
    question: 'Where is Wilmington Municipal Court located?',
    answer:
      'Wilmington Municipal Court is at 69 N. South Street, Wilmington, OH 45177. It hears misdemeanor criminal cases, OVI/DUI charges and traffic violations for Wilmington and surrounding Clinton County communities. The Clinton County Court of Common Pleas (46 S. South St, Wilmington, OH 45177) hears felony cases and civil matters over $15,000.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Clinton County legal matters?',
    answer:
      'Jwayyed Law LLC is a Columbus-based firm that regularly serves clients in surrounding counties, including Clinton County. On each case the firm reviews all of the evidence, looks for constitutional issues and works within local court procedure. Call (614) 285-5482 to schedule a consultation.',
  },
];

const SERVICES = [
  {
    href: '/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court',
    title: 'OVI / DUI defense at Wilmington Municipal Court',
    subtitle: 'First through felony OVI, high-tier, refusal, ALS appeals',
  },
  {
    href: '/locations/clinton-county/criminal-misdemeanor-defense-clinton-county-wilmington-municipal-court',
    title: 'Criminal misdemeanor defense in Clinton County',
    subtitle: 'Theft, domestic violence, assault, drug possession, disorderly conduct',
  },
  {
    href: '/locations/clinton-county/personal-injury-clinton-county',
    title: 'Personal injury in Clinton County',
    subtitle: 'Car accidents, slip and fall, wrongful death, premises liability',
  },
  {
    href: '/locations/clinton-county/business-formation-llc-clinton-county',
    title: 'Business formation and LLCs in Clinton County',
    subtitle: 'LLC formation, operating agreements, business planning',
  },
];

export default function ClintonCountyLocationsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Clinton County criminal defense and OVI attorney"
        description="OVI and criminal charges in Clinton County are heard at Wilmington Municipal Court, 69 N. South St in Wilmington, the county seat southwest of Columbus."
      />

      <Section
        title="What we handle in Clinton County"
        intro={
          <p>
            Clinton County is southwest of Columbus, with Wilmington as the county seat. The firm represents clients throughout the
            county at Wilmington Municipal Court and the Clinton County Court of Common Pleas.
          </p>
        }
      >
        <LinkGrid links={SERVICES} columns={2} />
      </Section>

      <Section title="Clinton County courts" tone="ice">
        <FactTable
          title="Wilmington Municipal Court"
          rows={[
            { label: 'Address', value: '69 N. South St, Wilmington, OH 45177' },
            { label: 'Hears', value: 'Misdemeanor criminal cases, OVI/DUI charges and traffic violations' },
            { label: 'Covers', value: 'Wilmington and surrounding Clinton County communities' },
            { label: 'ALS appeals', value: 'Filed here within 30 days' },
          ]}
        />
        <FactTable
          title="Clinton County Court of Common Pleas"
          rows={[
            { label: 'Address', value: '46 S. South St, Wilmington, OH 45177' },
            { label: 'Hears', value: 'Felony cases and civil matters over $15,000' },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[
            { href: '/courts/wilmington-municipal-court', title: 'Wilmington Municipal Court guide', subtitle: 'What to expect at the court' },
            { href: '/courts/clinton-county', title: 'Clinton County courts', subtitle: 'Every court in the county' },
          ]}
        />
      </Section>

      <Section title="After an arrest in Clinton County">
        <Callout title="After an OVI arrest, the clock is 30 days">
          The administrative license suspension must be appealed at Wilmington Municipal Court within 30 days, or the right to
          challenge it is lost. Call <a href="tel:6142855482">(614) 285-5482</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link>.
        </Callout>
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
