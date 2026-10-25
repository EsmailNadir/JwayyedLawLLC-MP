import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Delaware County OVI Attorney',
  description:
    'OVI/DUI defense at Delaware County Municipal Court for Delaware, Powell, Dublin and Westerville: US 23 and US 36 stops, HB 37, ALS appeals. (614) 285-5482.',
  keywords: ['OVI lawyer Delaware Ohio', 'DUI attorney Delaware County', 'OVI defense Powell Ohio', 'Delaware County Municipal Court OVI', 'OVI lawyer Dublin Ohio'],
  openGraph: {
    title: 'Delaware County OVI Attorney | Jwayyed Law LLC',
    description: 'OVI defense at Delaware County Municipal Court: penalties under HB 37, the 30-day ALS appeal and professional license consequences.',
    url: 'https://www.jjlawohio.com/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Delaware County', href: '/locations/delaware-county' },
  { label: 'OVI/DUI Defense - Delaware County Municipal Court', href: '/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court' },
];

const faqs = [
  {
    question: 'What are the OVI penalties in Delaware County Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Delaware County Municipal Court carries 3 to 180 days in jail (a 3-day mandatory minimum or a driver intervention program), fines of $565 to $1,075, and a license suspension of 1 to 3 years. The license reinstatement fee is $315. A high-tier OVI (BAC 0.17% or above) carries higher mandatory minimums. A second OVI within 10 years carries at least 10 days in jail and fines of $715 to $1,625.',
  },
  {
    question: 'How do I appeal an ALS in Delaware County?',
    answer:
      'Under ORC 4511.191, you have 30 days from the date of arrest to file an Administrative License Suspension appeal in Delaware County Municipal Court, 70 N. Union St, Delaware, OH 43015. The ALS takes effect immediately on arrest and is separate from the criminal case. An attorney can file the appeal, seek a stay and challenge the suspension on procedural or substantive grounds before the deadline passes.',
  },
  {
    question: 'Can the 15-day hard suspension be waived in Delaware County under HB 37?',
    answer:
      "Yes. HB 37 (effective April 9, 2025) lets Delaware County Municipal Court waive the 15-day hard suspension before limited driving privileges if a first-time OVI defendant agrees to install and use a certified ignition interlock device. A first offender may then be able to drive to work or medical appointments almost immediately, subject to the court's discretion and interlock compliance.",
  },
  {
    question: 'What makes OVI defense in Delaware County unique?',
    answer:
      "Delaware County is one of Ohio's fastest-growing counties, with the busy US 23 and US 36 corridors running through Delaware, Powell and Lewis Center. The Delaware County Sheriff and Ohio State Highway Patrol actively patrol these routes. Knowing which agency makes stops in which area, and the procedures each uses for field sobriety and chemical testing, shapes how a stop is reviewed.",
  },
  {
    question: 'What OVI defenses apply in Delaware County?',
    answer:
      'Challenging the stop for lack of reasonable suspicion; disputing Standardized Field Sobriety Test (SFST) administration under NHTSA guidelines; challenging breathalyzer or blood test accuracy and chain of custody; the rising BAC defense; and motions to suppress illegally obtained evidence under ORC 2935.26. The firm gets all videos, calibration records and police reports before evaluating any offer.',
  },
  {
    question: 'Can I get limited driving privileges in Delaware County after an OVI?',
    answer:
      'Yes. Delaware County Municipal Court can grant limited driving privileges for work, school, medical and other essential purposes after an OVI suspension. Under HB 37, first-time defendants who agree to ignition interlock may be able to skip the standard waiting period. For ALS suspensions, privileges may be granted once the hard suspension period passes. The firm petitions quickly and helps you meet the court’s requirements.',
  },
  {
    question: 'Will an OVI affect my professional license in Ohio?',
    answer:
      "It can. OVI convictions can affect licenses regulated by Ohio boards, including medical, nursing, legal, real estate and commercial driving licenses. Delaware County's higher-income professional population often faces these consequences, and the firm weighs them alongside the criminal case.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Delaware County OVI?',
    answer:
      'The firm defends OVI/DUI charges in Delaware County Municipal Court. It files ALS appeals within the 30-day deadline under ORC 4511.191, gets all of the evidence and builds the defense around your case and the court’s procedures. Call (614) 285-5482 to schedule a consultation.',
  },
];

const RELATED = [
  { href: '/courts/delaware-county-municipal-court', title: 'Delaware County Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/delaware-county', title: 'Delaware County', subtitle: 'Every service the firm offers in the county' },
  {
    href: '/locations/delaware-county/criminal-misdemeanor-defense-delaware-county-municipal-court',
    title: 'Misdemeanor defense in Delaware County',
    subtitle: 'Including professional license consequences',
  },
  { href: '/ovi-dui-defense/first-ovi', title: 'First OVI', subtitle: 'Penalties and defenses for a first offense' },
  { href: '/ovi-dui-defense/high-tier-ovi', title: 'High-tier OVI', subtitle: 'A BAC of 0.17% or higher' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving to work and school during a suspension' },
];

export default function DelawareOVIDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: OVI/DUI Defense in Delaware County',
    serviceType: 'OVI DUI Defense',
    areaServed: { '@type': 'County', name: 'Delaware County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/delaware-county/ovi-dui-defense-delaware-county-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI defense in Delaware County"
        description="Every misdemeanor OVI in Delaware County, from Powell and Lewis Center to Sunbury, is heard at Delaware County Municipal Court. You have 30 days from arrest to appeal the license suspension there."
      />

      <Section
        title="Where a Delaware County OVI is heard"
        intro={
          <p>
            Delaware County Municipal Court handles all misdemeanor OVI and DUI charges arising in the county, along the fast-growing
            US 23 and US 36 corridors.
          </p>
        }
      >
        <FactTable
          title="Delaware County Municipal Court at a glance"
          rows={[
            { label: 'Address', value: '70 N. Union St, Delaware, OH 43015' },
            { label: 'Hears', value: 'All misdemeanor OVI and DUI charges arising in the county' },
            { label: 'Communities', value: 'Delaware, Powell, Lewis Center, Dublin, Westerville and Sunbury' },
            { label: 'ALS appeal', value: 'Filed at this court within 30 days of the arrest' },
          ]}
        />
        <h3>Who makes OVI stops here</h3>
        <p>
          Growth has brought more enforcement on US 23, US 36, State Route 315 and the connector routes between suburbs. The Delaware
          County Sheriff&rsquo;s Office, Ohio State Highway Patrol and police in Powell, Westerville and Delaware City all make OVI
          arrests. On US 23 and US 36, officers sometimes run checkpoint-style enforcement, which makes the basis for the stop worth
          examining. Charges are brought under <Link href="/ovi-dui-defense">Ohio Revised Code 4511.19</Link>.
        </p>
      </Section>

      <Section title="OVI penalties under HB 37" tone="ice">
        <p>HB 37, effective April 9, 2025, revised the mandatory minimum penalties under ORC 4511.19.</p>
        <FactTable
          title="First OVI"
          rows={[
            { label: 'Jail', value: '3 to 180 days. At least 3 days in jail or 3 days in a certified driver intervention program.' },
            { label: 'Fines', value: '$565 to $1,075.' },
            { label: 'License', value: '1 to 3 years suspension; $315 reinstatement fee.' },
            {
              label: 'Limited privileges',
              value: 'Judges can waive the 15-day hard suspension when a first-time defendant agrees to an ignition interlock device.',
            },
          ]}
        />
        <FactTable
          title="High-tier and second OVI"
          rows={[
            {
              label: 'High tier',
              value: 'BAC of 0.17% or above, or certain drug concentrations: 6 mandatory days in jail, or 3 days in jail plus 3 days in a driver intervention program, even on a first offense.',
            },
            { label: 'Second OVI within 10 years', value: 'At least 10 days in jail, fines of $715 to $1,625 and a 1 to 7 year suspension.' },
          ]}
        />
      </Section>

      <Section title="The 30-day ALS deadline">
        <p>
          At an OVI arrest in Delaware County, the officer seizes your license and issues notice of an Administrative License
          Suspension under ORC 4511.191. It is a civil proceeding separate from the criminal case.
        </p>
        <Callout title="Appeal within 30 days at Delaware County Municipal Court">
          The deadline cannot be extended, and missing it permanently forfeits the right to contest the suspension. The firm files
          the appeal promptly and asks for a stay so you can keep driving while it is pending.
        </Callout>
        <p>
          ALS appeals can succeed when the officer did not properly advise you of the consequences of refusal or submission, the
          approved testing device was not properly maintained, or the procedures in ORC 4511.191 were not followed. Even a partial win
          can shorten the suspension and strengthen your position in the criminal case.
        </p>
      </Section>

      <Section title="Defenses in Delaware County" tone="ice">
        <PointGrid
          points={[
            { title: 'The stop', body: 'Whether it was supported by reasonable articulable suspicion.' },
            {
              title: 'Field sobriety tests',
              body: 'Body-cam and dash-cam footage of the walk-and-turn, one-leg stand and horizontal gaze nystagmus tests, checked against NHTSA standards.',
            },
            { title: 'The breath test', body: 'Maintenance and calibration logs for the instrument.' },
            { title: 'Blood tests', body: 'Chain-of-custody handling of the blood draw.' },
            { title: 'Rising BAC', body: 'BAC below 0.08% while driving that rose by the time of testing.' },
            { title: 'Suppression', body: 'Illegally obtained evidence under ORC 2935.26.' },
          ]}
        />
      </Section>

      <Section title="Professional licenses">
        <p>
          Many Delaware County defendants hold licenses. Ohio boards for physicians, nurses, attorneys, real estate agents, commercial
          drivers and others may investigate or sanction a license holder convicted of OVI. The firm weighs that when evaluating any
          plea. In some cases a reduction to reckless operation under ORC 4511.20 limits licensing board exposure, and expungement
          eligibility under ORC 2953.31 may follow after the waiting period.
        </p>
        <p>
          If you are facing an OVI in Delaware County, call (614) 285-5482. You have 30 days from arrest to appeal the suspension.
        </p>
      </Section>

      <Section title="Related pages" tone="ice">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
