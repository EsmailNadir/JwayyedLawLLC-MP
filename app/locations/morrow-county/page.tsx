import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Morrow County OVI & Criminal Defense',
  description:
    'OVI, criminal and personal injury cases in Morrow County: Mt. Gilead, Cardington and Marengo, at Morrow County Municipal Court. Call (614) 285-5482.',
  keywords: [
    'Morrow County OVI attorney',
    'Morrow County criminal defense lawyer',
    'OVI lawyer Mt Gilead Ohio',
    'Morrow County Municipal Court attorney',
    'Cardington OVI defense Ohio',
    'Morrow County misdemeanor lawyer',
    'personal injury Morrow County Ohio',
    'Mt Gilead criminal defense attorney',
  ],
  openGraph: {
    title: 'Morrow County OVI & Criminal Defense | Jwayyed Law LLC',
    description: 'OVI, criminal, injury and business matters in Morrow County, at Morrow County Municipal Court in Mt. Gilead.',
    url: 'https://www.jjlawohio.com/locations/morrow-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/morrow-county' },
};

const breadcrumbItems = [{ label: 'Morrow County', href: '/locations/morrow-county' }];

const faqs = [
  {
    question: 'What areas of Morrow County does Jwayyed Law LLC serve?',
    answer:
      'The firm serves clients throughout Morrow County, including Mt. Gilead, Cardington, Marengo, Edison and nearby communities. It appears at Morrow County Municipal Court (48 E. High St, Mt. Gilead, OH 43338) and the Morrow County Court of Common Pleas.',
  },
  {
    question: 'What practice areas does the firm handle in Morrow County?',
    answer:
      'The Morrow County practice covers OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Morrow County Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Morrow County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. A high-tier OVI (BAC 0.17% or above) carries higher mandatory minimums. A second OVI within 10 years requires at least 10 consecutive days in jail, fines of $715 to $1,625 and a 1 to 7 year suspension with vehicle immobilization.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Morrow County?',
    answer:
      'After an OVI arrest in Morrow County, the officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have 30 days from the date of the ALS to appeal it at Morrow County Municipal Court. Missing the deadline permanently waives your right to contest the suspension, even if the underlying OVI charge is later reduced or dismissed. Call the office as soon as you can after an OVI arrest.',
  },
  {
    question: 'Where is Morrow County Municipal Court located?',
    answer:
      'Morrow County Municipal Court is at 48 E. High Street, Mt. Gilead, OH 43338. It hears misdemeanor criminal cases, OVI/DUI charges and traffic violations for Morrow County communities. The Morrow County Court of Common Pleas (48 E. High St, Mt. Gilead, OH 43338) hears felony cases and civil matters over $15,000.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Morrow County legal matters?',
    answer:
      'Jwayyed Law LLC is a Columbus-based firm that regularly serves clients in surrounding counties, including Morrow County. On each case the firm reviews all of the evidence, looks for constitutional issues and works within local procedure. Call (614) 285-5482 to schedule a consultation.',
  },
];

const SERVICES = [
  {
    href: '/locations/morrow-county/ovi-dui-defense-morrow-county-municipal-court',
    title: 'OVI / DUI defense at Morrow County Municipal Court',
    subtitle: 'First through felony OVI, high-tier, refusal, ALS appeals',
  },
  {
    href: '/locations/morrow-county/criminal-misdemeanor-defense-morrow-county-municipal-court',
    title: 'Criminal misdemeanor defense in Morrow County',
    subtitle: 'Theft, domestic violence, assault, drug possession, disorderly conduct',
  },
  {
    href: '/locations/morrow-county/personal-injury-morrow-county',
    title: 'Personal injury in Morrow County',
    subtitle: 'Car accidents, slip and fall, wrongful death, premises liability',
  },
  {
    href: '/locations/morrow-county/business-formation-llc-morrow-county',
    title: 'Business formation and LLCs in Morrow County',
    subtitle: 'LLC formation, operating agreements, business planning',
  },
];

export default function MorrowCountyLocationsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Morrow County criminal defense and OVI attorney"
        description="OVI and misdemeanor charges in Morrow County are heard at Morrow County Municipal Court, 48 E. High St in Mt. Gilead, the county seat north of Columbus."
      />

      <Section
        title="What we handle in Morrow County"
        intro={
          <p>
            Morrow County lies north of Columbus with Mt. Gilead as the county seat. The firm represents clients throughout the county
            at Municipal Court and the Court of Common Pleas.
          </p>
        }
      >
        <LinkGrid links={SERVICES} columns={2} />
      </Section>

      <Section title="Morrow County courts" tone="ice">
        <FactTable
          title="Morrow County Municipal Court"
          rows={[
            { label: 'Address', value: '48 E. High St, Mt. Gilead, OH 43338' },
            { label: 'Hears', value: 'Misdemeanor criminal cases, OVI/DUI charges and traffic violations' },
            { label: 'Covers', value: 'Mt. Gilead, Cardington, Marengo, Edison and the rest of Morrow County' },
            { label: 'ALS appeals', value: 'Filed here within 30 days' },
          ]}
        />
        <FactTable
          title="Morrow County Court of Common Pleas"
          rows={[
            { label: 'Address', value: '48 E. High St, Mt. Gilead, OH 43338' },
            { label: 'Hears', value: 'Felony cases and civil matters over $15,000' },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[
            { href: '/courts/morrow-county-municipal-court', title: 'Morrow County Municipal Court guide', subtitle: 'What to expect at the court' },
            { href: '/courts/morrow-county', title: 'Morrow County courts', subtitle: 'Every court in the county' },
          ]}
        />
      </Section>

      <Section title="After an arrest in Morrow County">
        <Callout title="After an OVI arrest, the clock is 30 days">
          The administrative license suspension must be appealed at Morrow County Municipal Court within 30 days, or the right to
          challenge it is lost. Call <a href="tel:6142855482">(614) 285-5482</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link>.
        </Callout>
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
