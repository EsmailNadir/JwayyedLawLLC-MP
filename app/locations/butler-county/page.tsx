import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Butler County Criminal Defense & OVI',
  description:
    'OVI, misdemeanor and personal injury cases in Butler County: Hamilton, Middletown, Fairfield and Oxford, at every area court. Call (614) 285-5482.',
  keywords: [
    'Butler County OVI attorney',
    'Butler County criminal defense lawyer',
    'OVI lawyer Hamilton Ohio',
    'Middletown criminal defense attorney',
    'Butler County misdemeanor lawyer',
    'Fairfield OVI defense Ohio',
    'personal injury Butler County Ohio',
    'Butler County area courts attorney',
  ],
  openGraph: {
    title: 'Butler County Criminal Defense & OVI | Jwayyed Law LLC',
    description: 'OVI, criminal, injury and business matters in Butler County, at Hamilton, Middletown and Fairfield Municipal Courts and Common Pleas.',
    url: 'https://www.jjlawohio.com/locations/butler-county',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/butler-county' },
};

const breadcrumbItems = [{ label: 'Butler County', href: '/locations/butler-county' }];

const faqs = [
  {
    question: 'What areas of Butler County does Jwayyed Law LLC serve?',
    answer:
      'The firm serves clients throughout Butler County, including Hamilton, Middletown, Fairfield, Oxford, West Chester, Liberty Township, Mason and nearby communities. It appears at the Butler County area courts, including Hamilton Municipal Court, Middletown Municipal Court and Fairfield Municipal Court, and at the Butler County Court of Common Pleas.',
  },
  {
    question: 'What practice areas does the firm handle in Butler County?',
    answer:
      'The Butler County practice covers OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Butler County?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Butler County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. A high-tier OVI (BAC 0.17% or above) carries higher mandatory minimums. A second OVI within 10 years raises the minimum to 10 consecutive days in jail, fines of $715 to $1,625 and a 1 to 7 year license suspension with vehicle immobilization.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Butler County?',
    answer:
      'After an OVI arrest in Butler County, the officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have 30 days from the date of the ALS to file an appeal at the Butler County area court that has your case. Missing the deadline permanently waives your right to contest the suspension, even if the underlying OVI charge is later reduced or dismissed. Call the office as soon as you can after an OVI arrest.',
  },
  {
    question: 'Which courts handle OVI and criminal cases in Butler County?',
    answer:
      'Several municipal courts serve Butler County. Hamilton Municipal Court (345 High St, Hamilton, OH 45011) serves the City of Hamilton and surrounding areas. Middletown Municipal Court (1 Donham Plaza, Middletown, OH 45042) serves Middletown and Monroe. Fairfield Municipal Court (5350 Pleasant Ave, Fairfield, OH 45014) serves Fairfield and surrounding communities. The Butler County Court of Common Pleas (315 High St, Hamilton, OH 45011) hears felony cases and civil matters over $15,000.',
  },
  {
    question: 'Why choose Jwayyed Law LLC for Butler County legal matters?',
    answer:
      'Jwayyed Law LLC is an Ohio firm that practices throughout the state, including in the Butler County area courts. On each case the firm reviews all of the evidence, looks for constitutional issues and works within local court procedure. Call (614) 285-5482 to schedule a consultation.',
  },
];

const SERVICES = [
  {
    href: '/locations/butler-county/ovi-dui-defense-butler-county-area-courts',
    title: 'OVI / DUI defense in the Butler County area courts',
    subtitle: 'First through felony OVI, high-tier, refusal, ALS appeals, in every Butler County court',
  },
  {
    href: '/locations/butler-county/criminal-misdemeanor-defense-butler-county-area-courts',
    title: 'Criminal misdemeanor defense in Butler County',
    subtitle: 'Theft, domestic violence, assault, drug possession, disorderly conduct',
  },
  {
    href: '/locations/butler-county/personal-injury-butler-county',
    title: 'Personal injury in Butler County',
    subtitle: 'Car accidents, slip and fall, wrongful death, premises liability',
  },
  {
    href: '/locations/butler-county/business-formation-llc-butler-county',
    title: 'Business formation and LLCs in Butler County',
    subtitle: 'LLC formation, operating agreements, business planning',
  },
];

export default function ButlerCountyLocationsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Butler County criminal defense and OVI attorney"
        description="Butler County OVI and criminal charges are heard at Hamilton, Middletown or Fairfield Municipal Court, or another area court, depending on where the offense happened."
      />

      <Section
        title="What we handle in Butler County"
        intro={
          <p>
            Butler County sits southwest of Columbus between Dayton and Cincinnati, and takes in Hamilton, Middletown, Fairfield,
            Oxford and West Chester Township. The firm represents clients across all Butler County area courts and the Court of
            Common Pleas.
          </p>
        }
      >
        <LinkGrid links={SERVICES} columns={2} />
      </Section>

      <Section title="Butler County courts" tone="ice">
        <p>Which court hears a case depends on where the offense occurred.</p>
        <FactTable
          title="Hamilton Municipal Court"
          rows={[
            { label: 'Address', value: '345 High St, Hamilton, OH 45011' },
            { label: 'Covers', value: 'The City of Hamilton and surrounding areas' },
          ]}
        />
        <FactTable
          title="Middletown Municipal Court"
          rows={[
            { label: 'Address', value: '1 Donham Plaza, Middletown, OH 45042' },
            { label: 'Covers', value: 'Middletown and Monroe' },
          ]}
        />
        <FactTable
          title="Fairfield Municipal Court"
          rows={[
            { label: 'Address', value: '5350 Pleasant Ave, Fairfield, OH 45014' },
            { label: 'Covers', value: 'Fairfield and surrounding communities' },
          ]}
        />
        <FactTable
          title="Butler County Court of Common Pleas"
          rows={[
            { label: 'Address', value: '315 High St, Hamilton, OH 45011' },
            { label: 'Hears', value: 'Felony cases and civil matters over $15,000' },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[
            { href: '/courts/hamilton-municipal-court', title: 'Hamilton Municipal Court guide', subtitle: 'What to expect at the court' },
            { href: '/courts/butler-county', title: 'Butler County courts', subtitle: 'Every court in the county' },
          ]}
        />
      </Section>

      <Section title="After an arrest in Butler County">
        <Callout title="After an OVI arrest, the clock is 30 days">
          The administrative license suspension must be appealed within 30 days at the area court that has your case, or the right
          to challenge it is lost. Call <a href="tel:6142855482">(614) 285-5482</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link>.
        </Callout>
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
