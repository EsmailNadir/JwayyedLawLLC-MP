import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Pickaway County OVI & Criminal Defense',
  description:
    'OVI, criminal and personal injury cases in Pickaway County: Circleville, Ashville and Williamsport, at Circleville Municipal Court. Call (614) 285-5482.',
  keywords: [
    'Pickaway County OVI attorney',
    'Pickaway County criminal defense lawyer',
    'OVI lawyer Circleville Ohio',
    'Circleville Municipal Court attorney',
    'Ashville OVI defense Ohio',
    'Pickaway County misdemeanor lawyer',
    'personal injury Pickaway County Ohio',
    'Circleville OVI defense attorney',
  ],
  openGraph: {
    title: 'Pickaway County OVI & Criminal Defense | Jwayyed Law LLC',
    description: 'OVI, criminal, injury and business matters in Pickaway County, from a former Circleville Municipal Prosecutor.',
    url: 'https://www.jjlawohio.com/locations/pickaway-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/pickaway-county' },
};

const breadcrumbItems = [{ label: 'Pickaway County', href: '/locations/pickaway-county' }];

const faqs = [
  {
    question: 'What areas of Pickaway County does Jwayyed Law LLC serve?',
    answer:
      "The firm serves clients throughout Pickaway County, including Circleville, Ashville, Williamsport, South Bloomfield and nearby communities. It appears at Circleville Municipal Court (115 E. Main St, Circleville, OH 43113) and the Pickaway County Court of Common Pleas. The firm's attorney previously served as Municipal Prosecutor and Assistant Law Director for the City of Circleville.",
  },
  {
    question: 'What practice areas does the firm handle in Pickaway County?',
    answer:
      'OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Circleville Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Pickaway County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. A high-tier OVI (BAC 0.17% or above) carries higher mandatory minimums. A second OVI within 10 years requires at least 10 consecutive days in jail, fines of $715 to $1,625 and a 1 to 7 year suspension.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Pickaway County?',
    answer:
      'After an OVI arrest in Pickaway County, the officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have 30 days from the date of the ALS to appeal it at Circleville Municipal Court. Missing the deadline permanently waives your right to contest the suspension. Call the office as soon as you can after an OVI arrest.',
  },
  {
    question: 'Where is Circleville Municipal Court located?',
    answer:
      'Circleville Municipal Court is at 115 E. Main Street, Circleville, OH 43113. It hears misdemeanor criminal cases, OVI/DUI charges and traffic violations for Circleville and surrounding Pickaway County communities. The Pickaway County Court of Common Pleas (207 S. Court St, Circleville, OH 43113) hears felony cases and civil matters over $15,000.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Pickaway County legal matters?',
    answer:
      "The firm's attorney previously served as Municipal Prosecutor and Assistant Law Director for the City of Circleville, and has seen from the inside how Pickaway County cases are prosecuted, what local prosecutors look for and how Circleville Municipal Court operates. Call (614) 285-5482 to schedule a consultation.",
  },
];

const SERVICES = [
  {
    href: '/locations/pickaway-county/ovi-dui-defense-circleville-municipal-court',
    title: 'OVI / DUI defense at Circleville Municipal Court',
    subtitle: 'First through felony OVI, high-tier, refusal, ALS appeals',
  },
  {
    href: '/locations/pickaway-county/criminal-misdemeanor-defense-circleville-municipal-court',
    title: 'Criminal misdemeanor defense in Pickaway County',
    subtitle: 'Theft, domestic violence, assault, drug possession, disorderly conduct',
  },
  {
    href: '/locations/pickaway-county/personal-injury-pickaway-county',
    title: 'Personal injury in Pickaway County',
    subtitle: 'Car accidents, slip and fall, wrongful death, premises liability',
  },
  {
    href: '/locations/pickaway-county/business-formation-llc-pickaway-county',
    title: 'Business formation and LLCs in Pickaway County',
    subtitle: 'LLC formation, operating agreements, business planning',
  },
];

export default function PickawayCountyLocationsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Pickaway County criminal defense and OVI"
        description="Criminal and OVI cases in Pickaway County are heard at Circleville Municipal Court, 115 E. Main St. The firm's attorney previously served as Circleville's Municipal Prosecutor."
      />

      <Section
        title="What we handle in Pickaway County"
        intro={
          <p>
            Pickaway County sits directly south of Columbus, with Circleville as the county seat. The firm represents defendants
            throughout the county in criminal defense and civil matters.
          </p>
        }
      >
        <LinkGrid links={SERVICES} columns={2} />
      </Section>

      <Section title="Pickaway County courts" tone="ice">
        <FactTable
          title="Circleville Municipal Court"
          rows={[
            { label: 'Address', value: '115 E. Main St, Circleville, OH 43113' },
            { label: 'Hears', value: 'Misdemeanor criminal cases, OVI/DUI charges and traffic violations' },
            { label: 'Covers', value: 'Circleville and surrounding Pickaway County communities' },
            { label: 'ALS appeals', value: 'Filed here within 30 days' },
          ]}
        />
        <FactTable
          title="Pickaway County Court of Common Pleas"
          rows={[
            { label: 'Address', value: '207 S. Court St, Circleville, OH 43113' },
            { label: 'Hears', value: 'Felony cases and civil matters over $15,000' },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[
            { href: '/courts/circleville-municipal-court', title: 'Circleville Municipal Court guide', subtitle: 'What to expect at the court' },
            { href: '/courts/pickaway-county', title: 'Pickaway County courts', subtitle: 'Every court in the county' },
          ]}
        />
      </Section>

      <Section title="A former Circleville prosecutor">
        <p>
          The firm&rsquo;s attorney previously served as Municipal Prosecutor and Assistant Law Director for the City of Circleville.
          That work gives the firm direct familiarity with how OVI and criminal cases are handled at Circleville Municipal Court.
        </p>
        <Callout title="After an OVI arrest, the clock is 30 days">
          The administrative license suspension must be appealed at Circleville Municipal Court within 30 days, or the right to
          challenge it is lost. Call <a href="tel:6142855482">(614) 285-5482</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link>.
        </Callout>
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
