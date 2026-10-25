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
  title: 'Second OVI Defense Attorney Columbus Ohio',
  description:
    'Second OVI defense in Columbus. Under Ohio OVI law and HB 37, a second OVI within 10 years means 10 days in jail, 90-day immobilization and a 1 to 7 year license suspension.',
  keywords: ['second OVI Columbus Ohio', 'second offense DUI Columbus', 'Columbus second OVI lawyer', '2nd OVI defense Columbus', 'second OVI penalty Ohio 2025', 'second OVI defense attorney Columbus', 'Columbus OVI mandatory penalties', 'Ohio OVI law'],
  openGraph: {
    title: 'Second OVI Defense Attorney Columbus Ohio | Jwayyed Law LLC',
    description: 'Penalties, the monitoring alternative, immobilization hardship and defenses for a second OVI in Columbus.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/second-ovi-columbus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/second-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Second OVI in Columbus', href: '/locations/franklin-county/second-ovi-columbus' },
];

const faqs = [
  {
    question: 'What are the mandatory penalties for a second OVI in Columbus?',
    answer:
      'A second low-tier OVI within 10 years carries a mandatory minimum of 10 consecutive days in jail (or 5 days in jail plus 18 days of continuous electronic alcohol monitoring), fines of $715 to $1,625, a license suspension of 1 to 7 years, 90-day vehicle immobilization and 90-day license plate impound. A high-tier second OVI (BAC 0.17%+) carries a mandatory minimum of 20 consecutive days (or 10 days plus 36 days of monitoring). The 10-year lookback is counted from the sentence date of the prior OVI.',
  },
  {
    question: 'Does a second Columbus OVI still go to Franklin County Municipal Court?',
    answer:
      'Yes. A second OVI within 10 years is still a misdemeanor and is handled at Franklin County Municipal Court, 375 S. High Street. Only a fourth or later OVI within 10 years (or a third within 10 years in some circumstances) becomes a felony in the Franklin County Court of Common Pleas. The firm appears regularly at Franklin County Municipal Court and handles the added steps in a second OVI, including vehicle immobilization challenges.',
  },
  {
    question: 'What is continuous electronic alcohol monitoring as an alternative to jail for a second OVI in Columbus?',
    answer:
      'For a second low-tier OVI, Ohio law lets the court impose 5 days in jail plus 18 days of continuous electronic alcohol monitoring (CEAM) in place of the 10-day mandatory jail term. CEAM usually means a SCRAM ankle bracelet that tests for alcohol through perspiration. It lets you keep working and meet family responsibilities during the monitoring period. The firm assesses whether the alternative fits your case and whether the court is likely to grant it.',
  },
  {
    question: 'Can a 90-day vehicle immobilization for a second Columbus OVI be challenged?',
    answer:
      'Yes. Under ORC 4511.195, immobilization can be challenged when it would cause undue hardship to innocent family members who depend on the vehicle for work or medical care. Ohio courts have discretion to modify or waive the requirement in hardship cases. The firm looks for hardship grounds in every second OVI and files the motion when there is a credible argument.',
  },
  {
    question: 'What is the ALS for a second Columbus OVI?',
    answer:
      'The Administrative License Suspension applies to a second OVI arrest just as it does to a first. You have 30 days from the arrest to appeal at Franklin County Municipal Court. The suspension may be longer for a second OVI, and the hard suspension before limited privileges may be extended. The 30-day deadline does not move.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus second OVI?',
    answer:
      'A second OVI brings higher mandatory minimums, vehicle immobilization and longer suspensions. Jwayyed Law LLC defends second OVI charges at Franklin County Municipal Court with a full review of the case: the prior conviction, the stop, the field sobriety and breath tests, and the monitoring alternative. Call (614) 285-5482.',
  },
];

const RELATED = [
  { href: '/locations/franklin-county/ovi-dui-defense-columbus', title: 'OVI defense in Columbus', subtitle: 'Franklin County Municipal Court and every OVI charge' },
  { href: '/locations/franklin-county/first-ovi-columbus', title: 'First OVI in Columbus', subtitle: 'The penalties for a first offense' },
  { href: '/locations/franklin-county/third-ovi-columbus', title: 'Third OVI in Columbus', subtitle: '30 days and vehicle forfeiture' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
  { href: '/ovi-dui-defense/second-ovi', title: 'Second OVI in Ohio', subtitle: 'The statewide rules for a second offense' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving to work and school during a suspension' },
];

export default function ColumbusSecondOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Second OVI Defense in Columbus", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/second-ovi-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Second OVI defense in Columbus"
        description="A second OVI within 10 years carries 10 consecutive days in jail, a 1 to 7 year suspension and 90-day vehicle immobilization. Franklin County Municipal Court cannot go below those minimums."
      />

      <KeyFacts
        facts={[
          { figure: '10 days', label: 'mandatory jail for a low-tier second OVI (20 at high tier)' },
          { figure: '$715 to $1,625', label: 'fine range' },
          { figure: '1 to 7 years', label: 'license suspension' },
          { figure: '30 days', label: 'from arrest to appeal the ALS' },
        ]}
      />

      <Section
        title="Where a second Columbus OVI is heard"
        intro={<p>A second OVI within 10 years is still a misdemeanor, so the case stays at {FCMC.name}.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'The OVI charge, the ALS appeal, immobilization hardship motions and limited privileges.' },
          ]}
        />
        <p>
          The defense has to account for the prior conviction and everything that follows from it. Jwayyed Law LLC defends second OVI
          charges at <Link href="/locations/franklin-county/ovi-dui-defense-columbus">Franklin County Municipal Court</Link>. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a>: the ALS appeal deadline is 30 days.
        </p>
      </Section>

      <Section title="Columbus second OVI mandatory penalties under HB 37" tone="ice">
        <p>
          The 10-year lookback under the HB 37 amendments counts from the sentence date of the prior OVI, not the arrest date.
        </p>
        <FactTable
          title="Low-tier second OVI"
          rows={[
            { label: 'Jail', value: '10 consecutive days, or 5 days in jail plus 18 days of continuous electronic alcohol monitoring.' },
            { label: 'Fine', value: '$715 to $1,625.' },
            { label: 'License', value: '1 to 7 years suspension.' },
            { label: 'Vehicle', value: '90-day vehicle immobilization and 90-day plate impound.' },
          ]}
        />
        <FactTable
          title="High-tier second OVI (BAC 0.17%+)"
          rows={[
            { label: 'Jail', value: '20 days, or 10 days plus 36 days of monitoring.' },
            { label: 'Fine and license', value: 'The same fines and suspension as low tier.' },
          ]}
        />
      </Section>

      <Section title="Second OVI defense on two fronts">
        <PointGrid
          points={[
            {
              title: 'The current arrest',
              body: 'The stop, the field sobriety tests, breath instrument calibration and maintenance (or the blood draw chain of custody), and rising BAC. The prosecution still has to prove every element beyond a reasonable doubt.',
            },
            {
              title: 'The prior conviction',
              body: 'The higher minimums apply only if the prior was within the 10-year lookback and qualifies under R.C. 4511.19(G)(1)(b). A prior plea to reckless operation, incomplete records, or an out-of-state law that is not a statutory equivalent can mean the charge is treated as a first offense.',
            },
          ]}
        />
        <p>The firm requests the complete prior conviction record before advising on strategy.</p>
        <h3>Vehicle immobilization hardship</h3>
        <p>
          Ohio Revised Code 4511.195 requires 90-day immobilization for a second OVI but allows a hardship exception when it would harm
          innocent family members who rely on the vehicle for work, medical care or other essential needs. Columbus courts have granted the
          exception where a working spouse or dependent could not get to work or medical appointments without the vehicle. The firm
          prepares the motion when the evidence supports it.
        </p>
      </Section>

      <Section title="What a second conviction costs" tone="ice">
        <p>
          Licensing boards in nursing, medicine, law, education, contracting and other fields require disclosure of OVI convictions and
          treat a second one as a pattern. Insurance rates rise significantly; many carriers drop coverage and push the driver into the
          assigned risk pool. For CDL holders, a second OVI means lifetime federal CDL disqualification.
        </p>
        <p>
          A third OVI within 10 years of the second raises the mandatory minimum to 30 consecutive days and adds vehicle forfeiture. That
          is why fighting the second charge is worth weighing carefully before accepting a plea.
        </p>
      </Section>

      <Section title="How a second OVI defense attorney handles a Columbus case">
        <PointGrid
          points={[
            { title: 'ALS appeal', body: 'Filed within the 30-day deadline from arrest.' },
            { title: 'Prior conviction challenge', body: 'Whether the prior OVI qualifies within the 10-year lookback.' },
            { title: 'Stop and search analysis', body: 'The same constitutional review as any OVI case.' },
            { title: 'Monitoring alternative', body: 'Weighing the 5-day plus 18-day CEAM option against 10 days in jail.' },
            { title: 'Immobilization hardship', body: 'A hardship motion where innocent family members are affected.' },
            { title: 'Limited driving privileges', body: 'A petition for work, school and medical driving during the suspension.' },
          ]}
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation online</Link>.
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
