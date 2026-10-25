import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Athens County Criminal Defense & OVI',
  description:
    'OVI, misdemeanor, personal injury and business cases in Athens County, from Athens and the Ohio University area to Nelsonville. Call (614) 285-5482.',
  keywords: [
    'Athens County OVI attorney',
    'Athens County criminal defense lawyer',
    'OVI lawyer Athens Ohio',
    'Athens Municipal Court attorney',
    'Ohio University OVI defense',
    'Athens County misdemeanor lawyer',
    'personal injury Athens County Ohio',
    'Athens Ohio criminal defense attorney',
  ],
  openGraph: {
    title: 'Athens County Criminal Defense & OVI | Jwayyed Law LLC',
    description: 'OVI, criminal, injury and business matters in Athens County, at Athens Municipal Court and the Court of Common Pleas.',
    url: 'https://www.jjlawohio.com/locations/athens-county',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/athens-county' },
};

const breadcrumbItems = [{ label: 'Athens County', href: '/locations/athens-county' }];

const faqs = [
  {
    question: 'What areas of Athens County does Jwayyed Law LLC serve?',
    answer:
      'The firm serves clients throughout Athens County, including the City of Athens, the Ohio University area, Nelsonville, Albany, Glouster and nearby communities. It appears at Athens Municipal Court (8 E. Washington St, Athens, OH 45701) and the Athens County Court of Common Pleas.',
  },
  {
    question: 'What practice areas does the firm handle in Athens County?',
    answer:
      'OVI/DUI defense, criminal misdemeanor defense (theft, domestic violence, assault, drug possession, disorderly conduct, open container), personal injury (car accidents, premises liability, wrongful death), and business formation and disputes. Call (614) 285-5482 to discuss your matter.',
  },
  {
    question: 'What are the OVI penalties in Athens Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Athens County carries a mandatory minimum of 3 days in jail or a certified Driver Intervention Program, fines of $565 to $1,075, and a license suspension of 1 to 3 years. A high-tier OVI (BAC 0.17% or above) carries higher mandatory minimums. A second OVI within 10 years requires at least 10 consecutive days in jail, fines of $715 to $1,625 and a 1 to 7 year suspension.',
  },
  {
    question: 'What is the 30-day ALS deadline for OVI arrests in Athens County?',
    answer:
      'After an OVI arrest in Athens County, the officer issues an Administrative License Suspension (ALS) under ORC 4511.191. You have 30 days from the date of the ALS to appeal it at Athens Municipal Court. Missing the deadline permanently waives your right to contest the suspension, even if the OVI charge is later reduced or dismissed. Call the office as soon as you can after an OVI arrest.',
  },
  {
    question: 'Where is Athens Municipal Court located?',
    answer:
      'Athens Municipal Court is at 8 E. Washington Street, Athens, OH 45701. It hears misdemeanor criminal cases, OVI/DUI charges and traffic violations for the City of Athens and surrounding Athens County communities. The Athens County Court of Common Pleas (1 South Court St, Athens, OH 45701) hears felony cases and civil matters over $15,000.',
  },
  {
    question: 'Does the firm handle cases involving Ohio University students in Athens?',
    answer:
      "Yes. The firm represents Ohio University students and all Athens County residents facing criminal charges, OVI or other legal matters. Athens County sees a high volume of OVI, open container, disorderly conduct and drug charges. A conviction can affect a student's academic standing, scholarships, on-campus housing and future career. Early representation can sometimes lead to diversion, dismissal or a reduced charge that protects the student's record. Call (614) 285-5482.",
  },
];

const SERVICES = [
  {
    href: '/locations/athens-county/ovi-dui-defense-athens-municipal-court',
    title: 'OVI / DUI defense at Athens Municipal Court',
    subtitle: 'First through felony OVI, high-tier, refusal, ALS appeals',
  },
  {
    href: '/locations/athens-county/criminal-misdemeanor-defense-athens-municipal-court',
    title: 'Criminal misdemeanor defense in Athens County',
    subtitle: 'Theft, domestic violence, assault, drug possession, disorderly conduct, open container',
  },
  {
    href: '/locations/athens-county/personal-injury-athens-county',
    title: 'Personal injury in Athens County',
    subtitle: 'Car accidents, slip and fall, wrongful death, premises liability',
  },
  {
    href: '/locations/athens-county/business-formation-llc-athens-county',
    title: 'Business formation and LLCs in Athens County',
    subtitle: 'LLC formation, operating agreements, business planning',
  },
];

export default function AthensCountyLocationsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Athens County criminal defense and OVI"
        description="Criminal and OVI cases in Athens County are heard at Athens Municipal Court, 8 E. Washington St. The firm represents Athens residents and Ohio University students there and at the Court of Common Pleas."
      />

      <Section
        title="What we handle in Athens County"
        intro={
          <p>
            Athens County is in southeast Ohio and is home to Ohio University, which makes it one of Ohio&rsquo;s most active counties
            for OVI, open container and disorderly conduct charges.
          </p>
        }
      >
        <LinkGrid links={SERVICES} columns={2} />
      </Section>

      <Section title="Athens County courts" tone="ice">
        <FactTable
          title="Athens Municipal Court"
          rows={[
            { label: 'Address', value: '8 E. Washington St, Athens, OH 45701' },
            { label: 'Hears', value: 'Misdemeanor criminal cases, OVI/DUI charges and traffic violations' },
            { label: 'Covers', value: 'The City of Athens and surrounding Athens County communities' },
            { label: 'ALS appeals', value: 'Filed here within 30 days' },
          ]}
        />
        <FactTable
          title="Athens County Court of Common Pleas"
          rows={[
            { label: 'Address', value: '1 South Court St, Athens, OH 45701' },
            { label: 'Hears', value: 'Felony cases and civil matters over $15,000' },
          ]}
        />
        <LinkGrid
          columns={2}
          links={[
            { href: '/courts/athens-municipal-court', title: 'Athens Municipal Court guide', subtitle: 'What to expect at the court' },
            { href: '/courts/athens-county', title: 'Athens County courts', subtitle: 'Every court in the county' },
          ]}
        />
      </Section>

      <Section title="Charges near Ohio University">
        <p>
          The firm represents Ohio University students as well as long-time Athens County residents. For a student, a conviction can
          reach academic standing, scholarships, on-campus housing and later job applications, so the outcome of a misdemeanor or OVI
          case matters beyond the fine. Diversion, dismissal or a reduced charge are sometimes available when the case is handled
          early.
        </p>
        <Callout title="After an OVI arrest, the clock is 30 days">
          The administrative license suspension must be appealed at Athens Municipal Court within 30 days, or the right to challenge
          it is lost. Call <a href="tel:6142855482">(614) 285-5482</a> or{' '}
          <Link href="/contact">schedule a consultation online</Link>.
        </Callout>
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
