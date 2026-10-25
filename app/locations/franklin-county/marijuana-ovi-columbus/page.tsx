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
  title: 'Columbus Marijuana OVI Defense Attorney',
  description:
    'A marijuana OVI in Columbus can rest on a per se THC limit under R.C. 4511.19, with no proof of impairment. The case goes to Franklin County Municipal Court.',
  keywords: ['Columbus marijuana OVI lawyer', 'cannabis DUI Columbus Ohio', 'marijuana drug OVI Columbus', 'weed OVI Columbus attorney', 'Franklin County marijuana impaired driving defense'],
  openGraph: {
    title: 'Columbus Marijuana OVI Defense Attorney | Jwayyed Law LLC',
    description: 'Per se THC limits, DRE evaluations, blood and urine tests and the ALS appeal in a Columbus marijuana OVI.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/marijuana-ovi-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/marijuana-ovi-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Marijuana OVI in Columbus', href: '/locations/franklin-county/marijuana-ovi-columbus' },
];

const faqs = [
  {
    question: 'What are the per se marijuana limits for OVI in Columbus?',
    answer:
      "Under R.C. 4511.19(A)(1)(j), Ohio's per se marijuana OVI limits are 2 nanograms per milliliter (ng/mL) of marijuana (THC) in whole blood, or 10 ng/mL in urine. Ohio also sets per se limits for marijuana metabolites: 15 ng/mL in blood and 35 ng/mL in urine. The Ohio Supreme Court has ruled that a metabolite alone, without parent THC, does not establish per se impairment, which matters when defending a metabolite-only charge.",
  },
  {
    question: 'Is marijuana OVI a separate charge from alcohol OVI in Columbus?',
    answer:
      'No. Marijuana OVI is charged under the same statute, R.C. 4511.19. A Columbus driver can be charged on marijuana impairment under R.C. 4511.19(A)(1)(a), the general impairment provision, or under the per se provisions of R.C. 4511.19(A)(1)(j) if a blood or urine test shows THC or metabolite above the threshold. Both carry the same criminal penalties as a first-offense alcohol OVI.',
  },
  {
    question: "Can I be charged with marijuana OVI even if I wasn't impaired at the time of driving?",
    answer:
      "Yes. The per se provisions do not require proof of actual impairment, only that the threshold concentration was in your blood or urine when tested. THC can stay detectable in blood for hours and in urine for days to weeks after use, long after any effect has worn off. Regular cannabis users can test above the limit without being impaired while driving, so the timing and accuracy of the test are central to the defense.",
  },
  {
    question: 'How is marijuana OVI detected in Columbus?',
    answer:
      'There is no roadside breathalyzer for marijuana. The Columbus Division of Police uses Drug Recognition Experts (DREs), officers trained in a 12-step protocol to identify drug-impaired drivers. If the DRE evaluation points to marijuana, a blood or urine test is usually requested. Blood testing is more reliable for current THC; urine can show metabolites from use days or weeks earlier. The DRE protocol itself can be challenged, since each of the 12 steps has certification requirements.',
  },
  {
    question: "Does Ohio's adult-use marijuana law protect me from marijuana OVI in Columbus?",
    answer:
      "No. Ohio's adult-use law (Issue 2, effective December 7, 2023, implemented through H.B. 86) lets adults 21 and over possess and use marijuana, but it did not change the OVI laws. Driving under the influence of marijuana, or with THC above the per se limit, is still illegal, just as driving over the alcohol limit is. Legal use is not a defense to marijuana OVI.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus marijuana OVI?',
    answer:
      'A marijuana OVI defense turns on the science of per se concentrations, the DRE protocol and how cannabis is eliminated from the body. The 2 ng/mL blood threshold is contested, because habitual users may exceed it when not impaired. Jwayyed Law LLC challenges DRE compliance, the blood test chain of custody and the gap between the test result and the actual driving. Call (614) 285-5482: the 30-day ALS appeal deadline applies.',
  },
];

const RELATED = [
  { href: '/locations/franklin-county/ovi-dui-defense-columbus', title: 'OVI defense in Columbus', subtitle: 'Every OVI charge heard at Franklin County Municipal Court' },
  { href: '/locations/franklin-county/first-ovi-columbus', title: 'First OVI in Columbus', subtitle: 'Penalties and the ALS appeal for a first offense' },
  { href: '/locations/franklin-county/marijuana-possession-columbus', title: 'Marijuana possession in Columbus', subtitle: 'Possession limits and charges under adult-use law' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
];

export default function ColumbusMarijuanaOVIPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Marijuana OVI Defense in Columbus", "serviceType": "OVI DUI Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/marijuana-ovi-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Marijuana OVI defense in Columbus"
        description="Ohio's per se limit is 2 ng/mL of THC in whole blood, and a test over it supports an OVI charge without proof you were impaired when you drove."
      />

      <KeyFacts
        facts={[
          { figure: '2 ng/mL', label: 'THC in whole blood (10 ng/mL in urine) under R.C. 4511.19(A)(1)(j)' },
          { figure: '30 days', label: 'from arrest to appeal the ALS at Franklin County Municipal Court' },
          { figure: '$565 to $1,075', label: 'fine for a first OVI, the same as alcohol' },
        ]}
      />

      <Section
        title="Where a Columbus marijuana OVI is heard"
        intro={<p>A marijuana OVI arrest in Columbus goes to {FCMC.name}, along with the ALS appeal.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'The OVI charge and the ALS appeal.' },
          ]}
        />
        <p>
          Ohio&rsquo;s adult-use law (Issue 2, effective December 2023) made recreational cannabis legal for adults 21 and over, but it
          did not change the marijuana OVI laws. Driving with THC above the per se limit is still a crime, however the cannabis was
          obtained. A driver who used legally the day before and was not impaired at the wheel can still be charged under the per se
          statute.
        </p>
        <p>
          Drivers stopped near dispensary corridors, including along the I-270 outerbelt, High Street and the Short North, may draw more
          attention for marijuana impairment. Call <a href="tel:6142855482">(614) 285-5482</a>: the 30-day ALS appeal deadline applies.
        </p>
      </Section>

      <Section title="Ohio's per se marijuana limits" tone="ice">
        <p>
          These limits work like the alcohol BAC limit: a result above the threshold supports an OVI charge without other proof of
          impairment.
        </p>
        <FactTable
          title="Per se limits under R.C. 4511.19(A)(1)(j)"
          rows={[
            { label: 'Whole blood', value: '2 ng/mL of marijuana (THC); 15 ng/mL of marijuana metabolite.' },
            { label: 'Urine', value: '10 ng/mL of marijuana; 35 ng/mL of marijuana metabolite.' },
          ]}
        />
        <p>
          The 2 ng/mL blood threshold is scientifically contested. Research does not show a clear dose-response link between blood THC and
          driving impairment the way alcohol BAC does. THC is lipophilic: it builds up in fatty tissue and releases back into the blood
          over time, so habitual users can be above 2 ng/mL when not impaired. The Ohio Supreme Court in <em>State v. Ilg</em> addressed
          the metabolite-only question, distinguishing parent THC (which shows recent use) from metabolites alone (which show only past
          use). Using these points takes careful analysis of the test results in your case.
        </p>
      </Section>

      <Section title="Drug Recognition Expert evaluations">
        <p>
          With no roadside breathalyzer for marijuana, the Columbus Division of Police and Franklin County law enforcement rely on Drug
          Recognition Experts. The DRE evaluation is a 12-step protocol developed by the National Highway Traffic Safety Administration and
          the International Association of Chiefs of Police. The officer examines the eyes, vital signs, muscle tone and behavior, then
          gives an opinion on which category of drug is causing impairment.
        </p>
        <PointGrid
          points={[
            { title: 'Certification', body: "The DRE must be certified. The firm gets the officer's certification records." },
            { title: 'The protocol', body: 'All 12 steps must be followed in sequence, and a departure can undermine the opinion.' },
            { title: 'The science', body: 'Courts have not uniformly accepted DRE testimony as established science for detecting marijuana impairment.' },
            { title: 'The record', body: "The written DRE report and any video, checked against the officer's conclusions." },
          ]}
        />
      </Section>

      <Section title="Blood and urine test challenges" tone="ice">
        <p>
          The test in a Columbus marijuana OVI is usually a blood draw at a hospital or a law enforcement facility after the arrest. Blood is
          more defensible than urine for showing current impairment, since urine may show only metabolites. Both can be challenged.
        </p>
        <PointGrid
          points={[
            { title: 'Chain of custody', body: 'Every handoff of the blood sample from the draw to the analysis.' },
            { title: 'The laboratory', body: "The lab's certification, accreditation and method (gas chromatography-mass spectrometry is the standard)." },
            { title: 'Timing', body: 'A long delay between the stop and the draw bears on whether the result reflects the THC level while driving.' },
            { title: 'Metabolite-only urine', body: "Whether a result showing only breakdown products of THC establishes impairment, consistent with the Ohio Supreme Court's metabolite rulings." },
          ]}
        />
      </Section>

      <Section title="Penalties and the ALS">
        <p>A marijuana OVI carries the same criminal penalties as an alcohol OVI.</p>
        <FactTable
          title="First marijuana OVI"
          rows={[
            { label: 'Jail', value: 'Mandatory minimum 3 days in jail or 3 days in a Driver Intervention Program.' },
            { label: 'Fine', value: '$565 to $1,075.' },
            { label: 'License', value: '1 to 3 years suspension under HB 37.' },
            { label: 'ALS at arrest', value: '90 days after a test over the per se limit, or 1 year for a refusal.' },
            { label: 'ALS appeal', value: 'Filed in Franklin County Municipal Court within 30 days of the arrest date, with a request for a stay.' },
          ]}
        />
        <p>
          Like any OVI under R.C. 4511.19, a marijuana OVI conviction cannot be expunged in Ohio, whether the impairment came from
          marijuana, alcohol or another substance. Unless the charge is dismissed or reduced to an eligible offense, the conviction stays on
          your record permanently.
        </p>
        <h3>Adult-use law and the defense</h3>
        <p>
          Under Issue 2 and H.B. 86, adults 21 and over may possess up to 2.5 ounces of marijuana and 15 grams of concentrate and grow up to
          six plants, and dispensaries operate throughout Franklin County. Someone who uses legally at home in the evening may still have
          measurable blood THC the next morning, possibly above 2 ng/mL. Legal use is not a defense, but it supports the argument that a
          per se result does not show impaired driving.
        </p>
      </Section>

      <Section title="What the firm does on a Columbus marijuana OVI" tone="ice">
        <PointGrid
          points={[
            { title: 'ALS appeal', body: 'Filed as soon as the firm is retained, with a stay of the suspension requested.' },
            { title: 'DRE review', body: 'Certification records, the evaluation report and video, step by step.' },
            { title: 'Test challenges', body: 'Chain of custody, lab methods and the timing of the draw.' },
            { title: 'The per se result', body: 'Challenging what the number shows about your driving.' },
          ]}
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
