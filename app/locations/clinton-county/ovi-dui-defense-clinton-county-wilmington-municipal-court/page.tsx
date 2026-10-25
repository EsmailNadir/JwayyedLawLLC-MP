import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import { Callout, FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Clinton County OVI Attorney',
  description:
    'OVI/DUI defense at Wilmington Municipal Court, 69 N. South St, for Wilmington and Clinton County: HB 37 penalties and ALS appeals. Call (614) 285-5482.',
  keywords: ['OVI lawyer Wilmington Ohio', 'DUI attorney Clinton County', 'OVI defense Clinton County', 'Wilmington Municipal Court OVI'],
  openGraph: {
    title: 'Clinton County OVI Attorney | Jwayyed Law LLC',
    description: 'OVI defense at Wilmington Municipal Court: penalties under HB 37, the 30-day ALS appeal and defenses.',
    url: 'https://www.jjlawohio.com/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court' },
};

const breadcrumbItems = [
  { label: 'Locations', href: '/locations' },
  { label: 'Clinton County', href: '/locations/clinton-county' },
  { label: 'OVI/DUI Defense - Wilmington Municipal Court', href: '/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court' },
];

const faqs = [
  {
    question: 'What are the OVI penalties in Wilmington Municipal Court?',
    answer:
      'Under Ohio Revised Code 4511.19 and HB 37 (effective April 9, 2025), a first OVI conviction in Wilmington Municipal Court carries 3 to 180 days in jail (a 3-day mandatory minimum or a driver intervention program), fines of $565 to $1,075, and a license suspension of 1 to 3 years. The license reinstatement fee is $315. A high-tier OVI (BAC 0.17% or above) carries higher minimums. An OVI attorney can challenge the evidence and negotiate for reduced penalties.',
  },
  {
    question: 'How do I appeal an ALS suspension in Clinton County?',
    answer:
      'Under ORC 4511.191, you have 30 days from the date of your OVI arrest to file an Administrative License Suspension (ALS) appeal in Wilmington Municipal Court. The ALS is separate from the criminal case and takes effect immediately on arrest. An attorney can file the appeal, request a stay of the suspension and challenge it on procedural or substantive grounds.',
  },
  {
    question: 'Can the 15-day hard suspension be waived in Clinton County under HB 37?',
    answer:
      'Yes. Under HB 37 (effective April 9, 2025), Wilmington Municipal Court judges may waive the 15-day hard suspension before limited driving privileges if the defendant agrees to install and use an ignition interlock device. First-time OVI defendants in Clinton County can ask for this with an attorney’s help.',
  },
  {
    question: 'What OVI defenses apply in Wilmington Municipal Court?',
    answer:
      'Challenging the legality of the traffic stop, disputing how field sobriety tests were given under NHTSA standards, challenging breathalyzer calibration and maintenance records, a rising BAC defense (BAC was below 0.08% while driving), and motions to suppress unlawfully obtained evidence. Each case needs a full review of the police reports, videos and test records.',
  },
  {
    question: 'Can I get limited driving privileges in Clinton County after an OVI?',
    answer:
      'Limited driving privileges are usually available in Wilmington Municipal Court after an OVI suspension for work, school, medical and other essential purposes. For ALS suspensions, privileges may be granted after the hard suspension period ends, or sooner if it is waived under HB 37 with ignition interlock. An attorney can petition the court and keep you compliant with the interlock requirements.',
  },
  {
    question: 'What is the difference between low-tier and high-tier OVI in Ohio?',
    answer:
      'Low-tier OVI is a BAC of 0.08% to 0.169%. High-tier OVI is a BAC of 0.17% or above, or certain drug concentration levels. High-tier OVI carries higher minimum penalties under ORC 4511.19, including a mandatory 6 days in jail (or 3 days in jail plus 3 days in a driver intervention program) even for a first offense, which makes contesting the BAC result especially important.',
  },
  {
    question: 'Can an OVI be expunged in Ohio?',
    answer:
      'OVI convictions are generally not eligible for expungement or record sealing under ORC 2953.31 in Ohio, which is why fighting the charge from the start matters. Charges that are dismissed or reduced to a non-OVI offense such as reckless operation may be eligible for expungement after the applicable waiting periods. An attorney can check your eligibility once the case is resolved.',
  },
  {
    question: 'Why should I hire Jwayyed Law LLC for an OVI in Clinton County?',
    answer:
      'The firm handles OVI/DUI defense in Wilmington Municipal Court and throughout Clinton County. It files the ALS appeal within the 30-day deadline, reviews all of the evidence and builds the defense around the facts of your case. Call (614) 285-5482 to schedule a consultation.',
  },
];

const RELATED = [
  { href: '/courts/wilmington-municipal-court', title: 'Wilmington Municipal Court guide', subtitle: 'Where the court is and what to expect' },
  { href: '/locations/clinton-county', title: 'Clinton County', subtitle: 'Every service the firm offers in the county' },
  {
    href: '/locations/clinton-county/criminal-misdemeanor-defense-clinton-county-wilmington-municipal-court',
    title: 'Misdemeanor defense in Wilmington',
    subtitle: 'Assault, theft, drug and domestic violence charges',
  },
  { href: '/ovi-dui-defense/first-ovi', title: 'First OVI', subtitle: 'Penalties and defenses for a first offense' },
  { href: '/ovi-dui-defense/high-tier-ovi', title: 'High-tier OVI', subtitle: 'A BAC of 0.17% or higher' },
  { href: '/ovi-dui-defense/limited-driving-privileges', title: 'Limited driving privileges', subtitle: 'Driving to work and school during a suspension' },
];

export default function ClintonOVIDefensePage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Jwayyed Law LLC: OVI/DUI Defense in Clinton County',
    serviceType: 'OVI DUI Defense',
    areaServed: { '@type': 'County', name: 'Clinton County', containedInPlace: { '@type': 'State', name: 'Ohio' } },
    provider: { '@type': 'LegalService', '@id': 'https://www.jjlawohio.com', name: 'Jwayyed Law LLC', telephone: '(614) 285-5482', url: 'https://www.jjlawohio.com' },
    url: 'https://www.jjlawohio.com/locations/clinton-county/ovi-dui-defense-clinton-county-wilmington-municipal-court',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="OVI defense in Wilmington and Clinton County"
        description="Every misdemeanor OVI in Clinton County is heard at Wilmington Municipal Court, 69 N. South St. The license suspension starts at arrest, and you have 30 days to appeal it."
      />

      <Section
        title="Where a Clinton County OVI is heard"
        intro={
          <p>
            Wilmington Municipal Court handles all misdemeanor OVI and DUI cases arising in Clinton County, a close-knit agricultural
            county in southwestern Ohio.
          </p>
        }
      >
        <FactTable
          title="Wilmington Municipal Court at a glance"
          rows={[
            { label: 'Address', value: '69 N. South St, Wilmington, OH 45177' },
            { label: 'Hears', value: 'All misdemeanor OVI and DUI cases in Clinton County' },
            { label: 'Communities', value: 'Wilmington, Sabina, Blanchester, Clarksville and Port William' },
            { label: 'ALS appeal', value: 'Filed at this court within 30 days of the arrest' },
            { label: 'Prosecution', value: 'The Clinton County prosecutor' },
          ]}
        />
        <h3>Rural stops</h3>
        <p>
          Many Clinton County OVI stops happen on rural state routes and the US highways that cross the county. The officer still
          needs reasonable suspicion for the stop and still has to give field sobriety tests properly, and the firm checks both on
          every case. Charges are brought under{' '}
          <Link href="/ovi-dui-defense">Ohio Revised Code 4511.19</Link>.
        </p>
      </Section>

      <Section title="OVI penalties under HB 37" tone="ice">
        <p>HB 37, effective April 9, 2025, updated the mandatory minimum penalties under ORC 4511.19.</p>
        <FactTable
          title="First OVI"
          rows={[
            { label: 'Jail', value: '3 to 180 days. At least 3 days in jail or 3 days in a certified driver intervention program.' },
            { label: 'Fines', value: '$565 to $1,075.' },
            { label: 'License', value: '1 to 3 years suspension; $315 reinstatement fee.' },
            {
              label: 'Limited privileges',
              value: 'HB 37 lets the court waive the 15-day hard suspension before limited privileges if you agree to an ignition interlock.',
            },
          ]}
        />
        <FactTable
          title="Second OVI within 10 years"
          rows={[
            { label: 'Jail', value: 'At least 10 days.' },
            { label: 'Fines', value: '$715 to $1,625.' },
            { label: 'License', value: '1 to 7 years suspension.' },
          ]}
        />
        <FactTable
          title="Low tier and high tier"
          rows={[
            { label: 'Low tier', value: 'BAC of 0.08% to 0.169%.' },
            { label: 'High tier', value: 'BAC of 0.17% or above, or certain drug concentration levels.' },
            { label: 'High-tier jail', value: '6 days mandatory, or 3 days in jail plus 3 days in a driver intervention program, even on a first offense.' },
          ]}
          note="In high-tier cases the firm examines calibration records, operator certification and the testing procedure for grounds to suppress or reduce."
        />
        <h3>Your record</h3>
        <p>
          OVI convictions are generally not eligible for expungement or sealing under ORC 2953.31. A charge that is dismissed or
          reduced to a non-OVI offense such as reckless operation may be eligible after the waiting period.
        </p>
      </Section>

      <Section title="The 30-day ALS deadline">
        <p>
          At the arrest the officer takes your license and issues notice of an Administrative License Suspension under ORC 4511.191.
          It is separate from the criminal penalties and starts that day.
        </p>
        <Callout title="Appeal within 30 days at Wilmington Municipal Court">
          The deadline cannot be extended. Missing it forfeits the right to contest the suspension. The firm files the appeal right
          away and asks for a stay so you can keep driving while it is pending.
        </Callout>
        <p>
          ALS appeals can succeed on procedure: the officer did not properly advise you of your rights, the chemical test was not
          given properly, or the equipment was not maintained. Even partial success can shorten the time you cannot drive.
        </p>
      </Section>

      <Section title="Defenses in Wilmington Municipal Court" tone="ice">
        <PointGrid
          points={[
            { title: 'The stop', body: 'No reasonable suspicion for the traffic stop under the Fourth Amendment.' },
            { title: 'Field sobriety tests', body: 'Standardized Field Sobriety Tests not given according to NHTSA guidelines.' },
            { title: 'The breath test', body: 'The reliability and calibration of the breathalyzer instrument used.' },
            { title: 'Rising BAC', body: 'BAC below 0.08% at the time of driving.' },
            { title: 'Suppression', body: 'Evidence obtained in violation of ORC 2935.26 or constitutional rights.' },
            {
              title: 'Before any plea',
              body: 'The firm gets the dash-cam and body-cam footage, breathalyzer maintenance logs and all other records before evaluating an offer from the Clinton County prosecutor.',
            },
          ]}
        />
      </Section>

      <Section title="Limited driving privileges in Clinton County">
        <p>
          For rural Clinton County residents who depend on a vehicle for work, medical appointments or treatment, limited privileges
          matter. Wilmington Municipal Court can grant them for work, school, medical care and court-ordered programs. Under HB 37,
          first-time defendants who agree to ignition interlock may be eligible right away instead of after the standard 15-day wait.
          The firm petitions the court promptly and helps you meet the interlock requirements.
        </p>
        <p>
          If you are facing an OVI in Clinton County, call (614) 285-5482. Retaining counsel early can decide whether you keep your
          license.
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
