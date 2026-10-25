import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Montgomery County OVI & Criminal Defense',
  description:
    'OVI, criminal defense and personal injury across Montgomery County: Dayton, Kettering, Huber Heights and nearby, at Dayton Municipal Court. (614) 285-5482.',
  keywords: [
    'Montgomery County OVI attorney',
    'Montgomery County criminal defense lawyer',
    'OVI lawyer Dayton Ohio',
    'Dayton Municipal Court attorney',
    'Kettering OVI defense Ohio',
    'Huber Heights criminal defense attorney',
    'Montgomery County misdemeanor lawyer',
    'personal injury Montgomery County Ohio',
  ],
  openGraph: {
    title: 'Montgomery County OVI & Criminal Defense | Jwayyed Law LLC',
    description: 'OVI, criminal, injury and business matters in Montgomery County, at Dayton and Kettering Municipal Courts and Common Pleas.',
    url: 'https://www.jjlawohio.com/locations/montgomery-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/montgomery-county' },
};

const breadcrumbItems = [{ label: 'Montgomery County', href: '/locations/montgomery-county' }];

const faqs = [
  {
    question: 'What areas of Montgomery County does Jwayyed Law LLC serve?',
    answer:
      'The firm serves clients throughout Montgomery County, including Dayton, Kettering, Huber Heights, Trotwood, Miamisburg, West Carrollton, Brookville and nearby communities. It appears at Dayton Municipal Court, Kettering Municipal Court and the Montgomery County Court of Common Pleas.',
  },
  {
    question: 'What practice areas does the firm handle in Montgomery County?',
    answer:
      'The Montgomery County practice covers OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Montgomery County?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Montgomery County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. A high-tier OVI (BAC 0.17% or above) carries higher mandatory minimums. A second OVI within 10 years requires at least 10 consecutive days in jail, fines of $715 to $1,625 and a 1 to 7 year suspension with 90-day vehicle immobilization.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Montgomery County?',
    answer:
      'After an OVI arrest in Montgomery County, the officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have 30 days from the date of the ALS to appeal it at the Montgomery County court that has your case. Missing the deadline permanently waives your right to contest the suspension, even if the underlying OVI charge is later reduced or dismissed. Call the office as soon as you can after an OVI arrest.',
  },
  {
    question: 'Where is Dayton Municipal Court located?',
    answer:
      'Dayton Municipal Court is at 301 W. Third Street, Dayton, OH 45402. It hears misdemeanor criminal cases, OVI/DUI charges and traffic violations for the City of Dayton. The Montgomery County Court of Common Pleas (41 N. Perry St, Dayton, OH 45422) hears felony cases and civil matters over $15,000 for all of Montgomery County.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Montgomery County legal matters?',
    answer:
      'Jwayyed Law LLC is an Ohio firm that practices throughout the state, including in Montgomery County courts. On each case the firm reviews all of the evidence, looks for constitutional issues and works within local court procedure. Call (614) 285-5482 to schedule a consultation.',
  },
];

const SERVICES = [
  {
    href: '/locations/montgomery-county/ovi-dui-defense-montgomery-county-dayton-municipal-court',
    title: 'OVI / DUI defense at Dayton Municipal Court',
    subtitle: 'First through felony OVI, high-tier, refusal, ALS appeals',
  },
  {
    href: '/locations/montgomery-county/criminal-misdemeanor-defense-montgomery-county-dayton-municipal-court',
    title: 'Criminal misdemeanor defense in Montgomery County',
    subtitle: 'Theft, domestic violence, assault, drug possession, disorderly conduct',
  },
  {
    href: '/locations/montgomery-county/personal-injury-montgomery-county',
    title: 'Personal injury in Montgomery County',
    subtitle: 'Car accidents, slip and fall, wrongful death, premises liability',
  },
  {
    href: '/locations/montgomery-county/business-formation-llc-montgomery-county',
    title: 'Business formation and LLCs in Montgomery County',
    subtitle: 'LLC formation, operating agreements, business planning',
  },
];

export default function MontgomeryCountyLocationsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Montgomery County criminal defense and OVI attorney"
        description="OVI arrests on I-75, I-675, US-35 and SR-4 are heard at Dayton Municipal Court, Kettering Municipal Court or another area court, depending on where the arrest happened."
      />

      <Section
        title="What we handle in Montgomery County"
        intro={
          <p>
            Montgomery County is Ohio&rsquo;s sixth-largest county by population, anchored by Dayton, the county seat. The firm
            represents clients across all Montgomery County courts.
          </p>
        }
      >
        <LinkGrid links={SERVICES} columns={2} />
      </Section>

      <Section title="Montgomery County courts" tone="ice">
        <FactTable
          title="Dayton Municipal Court"
          rows={[
            { label: 'Address', value: '301 W. Third St, Dayton, OH 45402' },
            { label: 'Hears', value: 'Misdemeanor criminal cases, OVI/DUI charges and traffic violations for the City of Dayton' },
          ]}
        />
        <FactTable
          title="Kettering Municipal Court"
          rows={[
            { label: 'Address', value: '2325 Wilmington Pike, Kettering, OH 45420' },
            { label: 'Hears', value: 'Cases from Kettering and surrounding communities, depending on jurisdiction' },
          ]}
        />
        <FactTable
          title="Montgomery County Court of Common Pleas"
          rows={[
            { label: 'Address', value: '41 N. Perry St, Dayton, OH 45422' },
            { label: 'Hears', value: 'Felony cases and civil matters over $15,000 for all of Montgomery County' },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[
            { href: '/courts/dayton-municipal-court', title: 'Dayton Municipal Court guide', subtitle: 'What to expect at the court' },
            { href: '/courts/montgomery-county', title: 'Montgomery County courts', subtitle: 'Every court in the county' },
          ]}
        />
      </Section>

      <Section title="After an arrest in Montgomery County">
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
