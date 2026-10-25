import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Open Container Defense Ohio',
  description:
    'An open container citation under R.C. 4301.62 is a minor misdemeanor with a fine of up to $150 and a permanent record. Call (614) 285-5482.',
  keywords: [
    'open container lawyer Ohio',
    'open container defense attorney Columbus',
    'open container ORC 4301.62',
    'Franklin County open container lawyer',
    'open container in vehicle Ohio',
    'open container minor misdemeanor Ohio',
  ],
  openGraph: {
    title: 'Open Container Defense Ohio | Jwayyed Law LLC',
    description: 'What R.C. 4301.62 prohibits, the exceptions, and how diversion can keep an open container citation off your record.',
    url: 'https://www.jjlawohio.com/criminal-defense/open-container',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/criminal-defense/open-container' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Open Container', href: '/criminal-defense/open-container' },
];

const faqs = [
  {
    question: "What does Ohio's open container law prohibit?",
    answer:
      'Ohio Revised Code 4301.62 prohibits having an open container of beer or intoxicating liquor in four places: an agency store; the premises of a liquor permit holder licensed for off-premises consumption; a public place; or a motor vehicle on a public road or highway. A violation is a minor misdemeanor under R.C. 4301.99(A), with no jail time and a fine of up to $150. It applies to drivers and passengers alike: any occupant with an open container in a vehicle may be cited.',
  },
  {
    question: 'What is an "open container" under Ohio law?',
    answer:
      'Under R.C. 4301.62, an open container is any bottle, can or other receptacle holding any amount of beer or intoxicating liquor that is open, has a broken seal, or has had some of its contents removed. A bottle with an intact seal is not an open container. A wine bottle with the cork pushed back in but the seal broken may qualify. When the nature of the container is disputed, these distinctions matter, and the firm checks them in every case.',
  },
  {
    question: "What are the exceptions to Ohio's open container law?",
    answer:
      'R.C. 4301.62 has exceptions for passengers in chauffeured limousines (rear passenger compartment only); passengers on licensed commercial quadricycles (up to 36 oz of beer or 18 oz of wine); people in designated outdoor refreshment areas (ORAs) authorized by the city; and wine bottles properly resealed before leaving a licensed premises under R.C. 4301.62(B)(5). The exceptions are narrow. They do not cover ordinary passenger vehicles, taxis, rideshares or open containers in public spaces.',
  },
  {
    question: 'Does an open container conviction appear on a criminal record?',
    answer:
      'Yes. A conviction under R.C. 4301.62 is a minor misdemeanor conviction and creates a permanent public criminal record in Ohio. It shows up on criminal background checks, though most employers and licensing boards treat it less seriously than other misdemeanors. Before recommending any plea, the firm looks at whether the charge can be dismissed, diverted or avoided, because no conviction is better than even a minor one.',
  },
  {
    question: 'Can an open container conviction in Ohio be expunged?',
    answer:
      'It depends on how the charge is classified under ORC 2953.32. An open container violation charged as a general criminal minor misdemeanor (R.C. 4301.62 / R.C. 4301.99) may be eligible for sealing after a 1-year waiting period. If the citation is classified as a traffic violation under the motor vehicle chapters (4506 to 4511), it is not eligible for expungement under Ohio law. The firm checks the classification of your charge to answer the question.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for an open container charge in Ohio?',
    answer:
      "The firm handles open container cases throughout Ohio, including Franklin County and central Ohio, and appears in mayor's courts, Franklin County Municipal Court and municipal courts across the region. The penalties are the lightest in the code, but a conviction is a permanent criminal record, and many first-time cases can be diverted or dismissed without one. Call (614) 285-5482 to discuss your options.",
  },
];

export default function OpenContainerPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Open container charges in Ohio"
        description="An open container citation under R.C. 4301.62 is a minor misdemeanor: no jail and a fine of up to $150. A guilty plea still leaves a permanent criminal record."
      />

      <Section
        title="Why a minor citation is worth contesting"
        intro={
          <p>
            A guilty plea to an open container violation creates a permanent public criminal record, the same as any other misdemeanor
            conviction.
          </p>
        }
      >
        <p>
          That record can raise a flag on a background check for a job, a housing application or certain occupational licenses. The
          firm handles open container cases throughout Ohio, including <Link href="/locations/franklin-county">Franklin County</Link> and
          the surrounding communities. In many first-offense cases, a dismissal or diversion avoids a conviction entirely. Call{' '}
          <a href="tel:6142855482">(614) 285-5482</a> to discuss your options.
        </p>
      </Section>

      <Section title="What R.C. 4301.62 prohibits" tone="ice">
        <FactTable
          title="Open container violation"
          rows={[
            { label: 'Statute', value: 'Ohio Revised Code 4301.62' },
            {
              label: 'Where it applies',
              value:
                'An agency store; the premises of a liquor permit holder licensed for off-premises consumption; a public place; a motor vehicle on a public road or highway.',
            },
            { label: 'Who can be cited', value: 'Any occupant of the vehicle with an open container, passengers as well as the driver.' },
            { label: 'Offense level', value: 'Minor misdemeanor under R.C. 4301.99(A).' },
            { label: 'Penalty', value: 'No jail. Fine of up to $150.' },
          ]}
        />
        <p>
          The rule depends on location. A container that is prohibited in a car or on a public street may be allowed in an outdoor
          refreshment area or on licensed premises.
        </p>
        <h3>What counts as an open container</h3>
        <p>
          An open container is a bottle, can or other receptacle that is open, has a broken seal, or has had some of its contents
          removed. A bottle with an intact factory seal is not one. A wine bottle with the cork put back but the seal broken is. A bottle
          a restaurant properly reseals for a patron under R.C. 4301.62(B)(5) is exempt if the patron follows the statutory
          requirements. When the container is in dispute, these distinctions are part of the defense.
        </p>
        <Callout title="The exceptions are narrow">
          The statute exempts rear passengers in chauffeured limousines, passengers on licensed commercial quadricycles (up to 36 oz of
          beer or 18 oz of wine), people in designated outdoor refreshment areas, and properly resealed wine bottles. Ordinary cars,
          taxis and rideshares are not covered.
        </Callout>
      </Section>

      <Section title="Open containers found at a traffic stop">
        <p>
          Most open container citations in Ohio come from traffic stops. When an officer sees an open container in the passenger
          compartment, any occupant in possession of it may be cited. If the container is loose in the passenger area, the officer may
          cite everyone in the car or the person closest to it.
        </p>
        <p>
          When the citation comes from an OVI stop, it is usually one of several charges that need a coordinated defense. A stop without
          reasonable suspicion can make the open container evidence suppressible as the fruit of an unlawful stop, the same as any OVI
          or drug evidence from that stop. The firm defends the companion charges together.
        </p>
        <PointGrid
          points={[
            { title: 'Possession', body: "Whether the container was actually in your constructive possession, as the statute requires." },
            { title: 'The stop', body: 'Whether the traffic stop was lawful in the first place.' },
            { title: 'The container', body: 'Whether it met the statutory definition of "open."' },
            { title: 'An exception', body: 'Whether one of the statutory exceptions applies.' },
          ]}
        />
      </Section>

      <Section title="Diversion and dismissal" tone="ice">
        <p>
          If this is your first offense and you have no prior record, diversion (a conditional dismissal) is often available in Ohio
          municipal and mayor&apos;s courts. A typical agreement looks like this:
        </p>
        <Steps
          steps={[
            { title: 'Community service', body: 'Usually brief, often 8 to 16 hours.' },
            { title: 'A clean probationary period', body: 'No new arrests during a 90-day period.' },
            { title: 'Court costs', body: 'Paid as part of the agreement.' },
            { title: 'Dismissal', body: 'When you complete the terms, the citation is dismissed.' },
          ]}
        />
        <p>The firm checks whether diversion is available in every open container case.</p>
      </Section>

      <Section title="What the firm does on an open container case">
        <PointGrid
          points={[
            { title: 'Seeks diversion or dismissal', body: 'Conditional dismissal for eligible first-time defendants.' },
            { title: 'Tests the definition', body: 'Whether the container meets the statutory "open container" definition.' },
            { title: 'Challenges possession', body: 'Whether you, specifically, possessed the container.' },
            { title: 'Reviews the stop', body: 'Whether the traffic stop was lawfully conducted.' },
            { title: 'Checks the exceptions', body: 'Whether any statutory exception applies.' },
            { title: 'Coordinates companion charges', body: 'Defends the open container citation alongside an OVI or other charges from the same stop.' },
          ]}
        />
        <p>
          If you have an open container citation in <Link href="/locations/franklin-county">Franklin County</Link> or anywhere in Ohio,
          call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>.
        </p>
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Areas We Serve" />
      <ContactCTA />
    </>
  );
}
