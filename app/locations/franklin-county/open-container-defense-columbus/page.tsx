import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';
import { FCMC } from '@/data/franklin-county-reference';

export const metadata: Metadata = {
  title: 'Columbus Open Container Defense Attorney',
  description:
    'An open container citation in Columbus under R.C. 4301.62 is a minor misdemeanor with a fine up to $150, heard at Franklin County Municipal Court.',
  keywords: ['Columbus open container lawyer', 'open container Columbus Ohio', 'open container vehicle Columbus', 'R.C. 4301.62 Columbus defense', 'Franklin County open container attorney'],
  openGraph: {
    title: 'Columbus Open Container Defense Attorney | Jwayyed Law LLC',
    description: 'Vehicle and public-space open container charges, the downtown ORA and defenses in Columbus.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-columbus',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Open Container in Columbus', href: '/locations/franklin-county/open-container-defense-columbus' },
];

const faqs = [
  {
    question: 'What is the open container law in Ohio and Columbus?',
    answer:
      'R.C. 4301.62 prohibits having an open container of beer or intoxicating liquor in a motor vehicle, in public places and in certain other locations. An "open container" is any bottle, can or other container whose seal has been broken. A violation in a vehicle is a minor misdemeanor: a fine and no jail time. Open container charges often come out of OVI stops, as a citation added to the more serious charge.',
  },
  {
    question: 'Is there an open container exception for passengers in Columbus?',
    answer:
      'Ohio law (R.C. 4301.62(B)(3)) lets passengers in the living quarters of a motor home or recreational vehicle, or in a hired car such as a limousine or chartered bus, have an open container. There is no general passenger exception for ordinary vehicles: a passenger in the front or back seat of a car with an open container violates R.C. 4301.62. Rideshare vehicles (Uber, Lyft) in Columbus do not qualify for the hired-car exception unless they operate as a limousine-type service.',
  },
  {
    question: 'Can Columbus have open container areas or entertainment districts?',
    answer:
      'Yes. Columbus has designated areas where open containers are allowed under the outdoor refreshment area (ORA) exemption in R.C. 4301.82. Downtown Columbus has an ORA that lets patrons of participating establishments carry open drinks within the district during set hours. The exemption covers only that boundary and those hours, and never applies inside a vehicle, even within the ORA.',
  },
  {
    question: 'Does an open container citation in Columbus go on my criminal record?',
    answer:
      'Yes. A minor misdemeanor open container conviction under R.C. 4301.62 is a criminal conviction and shows on background checks. It is the lowest-level criminal offense in Ohio: no jail and a fine of up to $150. It can be expunged under R.C. 2953.32 after a 6-month waiting period from final discharge (the minor misdemeanor waiting period under H.B. 96, effective September 30, 2025). For someone with no other record it is more nuisance than career risk, but it is still worth defending to avoid even a minor record.',
  },
  {
    question: 'How does an open container charge relate to an OVI stop in Columbus?',
    answer:
      "In two ways. It is evidence that you had access to alcohol while driving, which supports the OVI charge, and it is a separate citation charged alongside the OVI. The firm handles it as part of the OVI defense, challenging whether the container's presence shows drinking while driving and whether the stop behind both charges was constitutional.",
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus open container charge?',
    answer:
      'Even a minor misdemeanor conviction creates a record, and when the citation comes from an OVI stop it is part of that defense. Jwayyed Law LLC defends open container charges at Franklin County Municipal Court and advises on expungement afterward. When the charge comes with an OVI, the firm handles both together. Call (614) 285-5482.',
  },
];

const RELATED = [
  { href: '/locations/franklin-county/ovi-dui-defense-columbus', title: 'OVI defense in Columbus', subtitle: 'When the citation came from an OVI stop' },
  { href: '/locations/franklin-county/disorderly-conduct-defense-columbus', title: 'Disorderly conduct in Columbus', subtitle: 'Another common entertainment-district charge' },
  { href: '/locations/franklin-county/expungement-columbus', title: 'Expungement in Columbus', subtitle: 'Sealing a minor misdemeanor' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
  { href: '/criminal-defense/open-container', title: 'Open container in Ohio', subtitle: 'The statewide rules' },
];

export default function ColumbusOpenContainerPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Open Container Defense in Columbus", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/open-container-defense-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Open container defense in Columbus"
        description="An open container in a vehicle or outside the downtown ORA is a minor misdemeanor under R.C. 4301.62, with a fine up to $150 and a criminal record."
      />

      <Section
        title="Where a Columbus open container citation is heard"
        intro={<p>Open container citations in Columbus go to {FCMC.name}.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'Open container citations, alone or with an OVI charge.' },
          ]}
        />
        <p>
          The citation usually comes up in one of two ways: on its own in an entertainment district or at a traffic stop, or alongside an
          OVI arrest. With an OVI it is evidence for the prosecution and part of the defense. On its own it still creates a record that
          can be expunged only after a 6-month waiting period from final discharge. Call <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <Section title="What R.C. 4301.62 prohibits in a vehicle" tone="ice">
        <FactTable
          title="Open container in a vehicle (R.C. 4301.62)"
          rows={[
            { label: 'Open container', value: 'Any container with a broken seal, whether full, half-empty or nearly empty.' },
            { label: 'Where', value: 'The passenger compartment. Not a locked trunk or locked glove compartment.' },
            {
              label: 'Sealed and stored',
              value: 'Under R.C. 4301.62(B)(4), a sealed container in the trunk, or in a locked area behind the last upright seat of a vehicle with no trunk (such as an SUV), is not a violation.',
            },
            { label: 'Who', value: 'Drivers and passengers.' },
            { label: 'When', value: 'Moving or parked on a public street. Not parked on private property, such as a private lot, though that line is sometimes disputed.' },
            { label: 'Penalty', value: 'First offense: minor misdemeanor, fine up to $150. A second violation within 1 year becomes an M4 misdemeanor.' },
          ]}
        />
      </Section>

      <Section title="The downtown Outdoor Refreshment Area">
        <p>
          Downtown Columbus is designated an Outdoor Refreshment Area (ORA) under R.C. 4301.82. Inside the boundary, participating licensed
          establishments can issue special cups that let patrons carry open drinks on public sidewalks and pedestrian areas during set
          hours. Outside the boundary, outside those hours, and in any vehicle, the exemption does not apply.
        </p>
        <p>
          Short North and Arena District events often take place in or next to ORA zones. Someone who does not know where the boundary
          runs can walk out of it with a drink they were carrying legally moments before. These citations are often defensible: unclear
          boundary markings, a good-faith belief you were inside the zone and the minor nature of the offense all favor dismissal or
          diversion.
        </p>
      </Section>

      <Section title="Open container at an OVI stop" tone="ice">
        <p>
          Columbus OVI stops often produce an open container citation too. A can on the center console or a bottle in the cup holder tends
          to show drinking in the vehicle, and prosecutors use it at trial to argue you drank while driving and not just before.
        </p>
        <p>
          The firm treats it as part of the OVI defense. If the stop was invalid, suppression of everything from it, including the
          container, can be sought. If the container was in the trunk or a locked area the officer could not see, the basis for the
          charge is open to question. If the OVI is defeated, the open container citation usually resolves with it.
        </p>
      </Section>

      <Section title="Defenses to an open container charge">
        <p>Most cases look simple: the officer saw a container and you were there. There are still questions to ask.</p>
        <PointGrid
          points={[
            { title: 'Was it open?', body: 'The statute needs a broken seal. A sealed bottle does not qualify.' },
            { title: 'Where was it?', body: 'The trunk, a locked glove compartment and the area behind the last upright seat of an SUV are excluded.' },
            { title: 'Whose was it?', body: 'With several people in the car, whether you were the one in possession.' },
            { title: 'Was the stop lawful?', body: 'A stop without reasonable suspicion produces suppressible evidence, and suppression usually ends the case.' },
          ]}
        />
        <p>
          For first-time defendants with no record, diversion is often available: a conditional dismissal that closes the case without a
          conviction after a short period of good behavior and possibly some community service. It is routinely reached through pretrial
          negotiation at Franklin County Municipal Court for minor misdemeanors, and the firm pursues it in every eligible case.
        </p>
      </Section>

      <Section title="Expunging an open container conviction" tone="ice">
        <p>
          A minor misdemeanor open container conviction can be expunged under R.C. 2953.32 after a 6-month waiting period from final
          discharge, the minor misdemeanor waiting period under H.B. 96 (effective September 30, 2025). First-time minor misdemeanors are
          among the most clearly eligible convictions for sealing. The firm handles expungement petitions at the Franklin County Court of
          Common Pleas and advises on timing and eligibility. If the waiting period has passed, you can start now.
        </p>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid links={RELATED} />
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
