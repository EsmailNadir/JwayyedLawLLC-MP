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
  title: 'Columbus Disorderly Conduct Defense',
  description:
    'Disorderly conduct in Columbus is a minor misdemeanor or an M4 under R.C. 2917.11, often from the Short North, OSU or the Arena District.',
  keywords: ['Columbus disorderly conduct lawyer', 'disorderly conduct Columbus Ohio', 'disorderly conduct attorney Franklin County', 'Short North disorderly Columbus', 'Columbus disorderly conduct defense'],
  openGraph: {
    title: 'Columbus Disorderly Conduct Defense | Jwayyed Law LLC',
    description: 'Penalties, defenses and diversion for disorderly conduct charges at Franklin County Municipal Court.',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-columbus',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-columbus' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: 'Disorderly Conduct in Columbus', href: '/locations/franklin-county/disorderly-conduct-defense-columbus' },
];

const faqs = [
  {
    question: 'What is disorderly conduct under Ohio law and how is it charged in Columbus?',
    answer:
      'Disorderly conduct is defined in R.C. 2917.11. It occurs when a person recklessly causes inconvenience, annoyance or alarm, or makes unreasonable noise, uses fighting words, creates a hazardous condition or behaves in other disruptive ways. The base offense is a minor misdemeanor: a $150 fine, no jail and no criminal record beyond the citation. It becomes a fourth-degree misdemeanor (up to 30 days in jail) if the person persists after a warning, if the conduct is near a school or emergency services, or if the person is intoxicated.',
  },
  {
    question: 'What areas in Columbus produce the most disorderly conduct arrests?',
    answer:
      'Arrests cluster in nightlife and event areas that draw crowds: the Short North arts district (especially High Street between I-670 and Clintonville), the OSU campus area (Lane Avenue and High Street near campus), the Arena District when Nationwide Arena events let out, and Easton Town Center. Ohio State home football games draw 100,000+ to Ohio Stadium and produce many citations, mostly for intoxication-related conduct in the nearby parking lots and residential streets.',
  },
  {
    question: 'Can a disorderly conduct charge in Columbus be expunged?',
    answer:
      'Yes. A minor misdemeanor disorderly conduct conviction can be expunged under R.C. 2953.32 after a 6-month waiting period from final discharge. A fourth-degree misdemeanor conviction is eligible after a 1-year waiting period. Under the expanded eligibility in H.B. 96 (effective September 30, 2025), many low-level misdemeanors, including disorderly conduct, qualify for sealing. The firm handles disorderly conduct expungement petitions at the Franklin County Court of Common Pleas.',
  },
  {
    question: 'Does a disorderly conduct conviction in Columbus affect employment?',
    answer:
      'It can. Even a minor misdemeanor conviction creates a criminal record that shows on background checks, and Ohio State University and many large Columbus employers screen applicants. Professional licenses in nursing, education, real estate and financial services may require disclosure of every conviction, minor misdemeanors included. The firm advises on these employment and licensing effects and pursues dismissal, diversion or a plea that keeps expungement possible.',
  },
  {
    question: 'Can a disorderly conduct plea resolve a more serious charge in Columbus?',
    answer:
      'Yes. Disorderly conduct pleas commonly resolve domestic violence charges (R.C. 2919.25) and some assault charges (R.C. 2903.13) when the facts do not clearly prove the more serious offense, or when a conviction on it would bring disproportionate consequences such as loss of firearm rights after a DV conviction. The prosecutor must agree, and the facts matter. A disorderly conduct resolution avoids the Lautenberg Amendment firearm prohibition that attaches to any misdemeanor DV conviction.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a Columbus disorderly conduct charge?',
    answer:
      'Even a minor misdemeanor creates a record, and the gap between a minor misdemeanor and an M4 matters for jail and for your record. Jwayyed Law LLC defends disorderly conduct charges at Franklin County Municipal Court, pursues diversion and dismissal, and advises on expungement afterward. When a DV or assault charge has been reduced to disorderly conduct, the firm guards against over-prosecution of the original charge. Call (614) 285-5482.',
  },
];

const RELATED = [
  { href: '/locations/franklin-county/open-container-defense-columbus', title: 'Open container in Columbus', subtitle: 'Often charged in the same districts' },
  { href: '/locations/franklin-county/assault-defense-columbus', title: 'Assault in Columbus', subtitle: 'When the charge started as assault' },
  { href: '/locations/franklin-county/domestic-violence-defense-columbus', title: 'Domestic violence in Columbus', subtitle: 'Reductions and firearm rights' },
  { href: '/locations/franklin-county/expungement-columbus', title: 'Expungement in Columbus', subtitle: 'Sealing a misdemeanor record' },
  { href: '/courts/franklin-county-municipal-court', title: 'Franklin County Municipal Court', subtitle: 'Court guide' },
  { href: '/criminal-defense/disorderly-conduct', title: 'Disorderly conduct in Ohio', subtitle: 'The statewide rules' },
];

export default function ColumbusDisorderlyConductPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Disorderly Conduct Defense in Columbus", "serviceType": "Criminal Defense", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-columbus"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Disorderly conduct defense in Columbus"
        description="Disorderly conduct under R.C. 2917.11 starts as a minor misdemeanor with a $150 fine, and becomes an M4 with up to 30 days in jail in some situations."
      />

      <Section
        title="Where a Columbus disorderly conduct charge is heard"
        intro={<p>Columbus Division of Police citations under R.C. 2917.11 go to {FCMC.name}.</p>}
      >
        <FactTable
          title={FCMC.name}
          rows={[
            { label: 'Address', value: FCMC.address },
            { label: 'Courtrooms', value: FCMC.floors },
            { label: 'Clerk', value: FCMC.clerkPhone },
            { label: 'What it hears', value: 'Disorderly conduct citations and the court’s pre-trial diversion program.' },
          ]}
        />
        <p>
          Columbus is Ohio&rsquo;s largest city and a major entertainment hub, with the Short North, the Arena District and Ohio State
          University. When crowds, games and late nights produce altercations, loud arguments or intoxicated behavior, the Columbus
          Division of Police regularly issues disorderly conduct citations. Call <a href="tel:6142855482">(614) 285-5482</a>.
        </p>
      </Section>

      <Section title="Where the citations come from" tone="ice">
        <PointGrid
          points={[
            {
              title: 'The Short North',
              body: "The arts and entertainment district along High Street from I-670 north through Victorian Village is the city's highest-volume area. Bars, crowded sidewalks and parking disputes regularly produce citations, and the Columbus Division of Police's Short North District is staffed for that volume.",
            },
            {
              title: 'Ohio State game days',
              body: 'Enforcement rises city-wide: I-270 and U.S. 23 tailgating, the Lane Avenue bar corridor and the post-game High Street scene are heavily patrolled.',
            },
            { title: 'The Arena District', body: 'Similar patterns on Jackets and Clippers game nights.' },
            { title: 'Easton Town Center', body: 'Another crowd area where arrests cluster.' },
          ]}
        />
        <p>
          Visitors charged during an event often have no other criminal history, and their cases are strong candidates for diversion or
          dismissal.
        </p>
      </Section>

      <Section title="What R.C. 2917.11 covers and what it costs">
        <p>
          A person commits disorderly conduct by recklessly causing inconvenience, annoyance or alarm to another through any of these:
          unreasonable noise or an offensively coarse utterance, gesture or display; abusive language to someone present; insulting,
          taunting or challenging someone in a way likely to provoke violence; creating a physically offensive or hazardous condition; or
          fighting, threatening or violent behavior.
        </p>
        <FactTable
          title="Disorderly conduct penalties (R.C. 2917.11)"
          rows={[
            { label: 'Base offense', value: 'Minor misdemeanor: a $150 fine, no jail, no suspension.' },
            {
              label: 'Elevated to M4',
              value:
                'Under R.C. 2917.11(E), a fourth-degree misdemeanor (30 days maximum jail, $250 fine) if the person persists after a reasonable warning, the offense is near a school, church or government facility, or the person is intoxicated.',
            },
          ]}
          note="Columbus nightlife arrests often involve alcohol, which turns many of these citations into an M4."
        />
        <p>
          A minor misdemeanor carries no jail but shows on background checks and can affect jobs, professional licenses and housing.
          At the M4 level, jail becomes a real possibility.
        </p>
      </Section>

      <Section title="Defenses to disorderly conduct" tone="ice">
        <p>Minor misdemeanor citations are often dismissed or reduced when challenged early.</p>
        <PointGrid
          points={[
            { title: 'Proof of the conduct', body: 'The "recklessly causes inconvenience, annoyance, or alarm" standard needs proof beyond a reasonable doubt. Mere presence at a disturbance is not disorderly conduct.' },
            { title: 'The video', body: 'Columbus dash-cam and body-cam footage often shows less than the citation describes.' },
            { title: 'The M4 escalation', body: 'Whether the officer had adequate grounds to find intoxication and whether the M4 was properly charged.' },
            { title: 'Diversion', body: "Franklin County Municipal Court's pre-trial diversion program is open to first-time offenders on minor charges and ends in dismissal once the conditions are met. The firm pursues it first in every eligible case." },
          ]}
        />
        <h3>Speech and the First Amendment</h3>
        <p>
          Many Columbus citations come from verbal confrontations. The bans on an &ldquo;offensively coarse utterance&rdquo; and
          &ldquo;abusive language likely to provoke a violent response&rdquo; reach only &ldquo;fighting words&rdquo;: speech that by its
          utterance inflicts immediate injury or tends to incite an immediate breach of the peace. Profanity, loud criticism of officers and
          angry words that offend without threatening are protected and cannot support a conviction. Ohio courts, including the Tenth
          District Court of Appeals, have reversed convictions where the conduct was protected expression.
        </p>
        <p>
          Citations that come from arguing with officers at a traffic stop or another scene often rest on questionable ground. If you were
          loud but not physically threatening, the First Amendment may be a defense, and the firm checks the constitutional basis of every
          speech-based charge.
        </p>
      </Section>

      <Section title="Disorderly conduct as a plea resolution">
        <p>
          A disorderly conduct plea can resolve a domestic violence, assault or criminal damaging charge whose consequences outweigh the
          actual conduct. A disorderly conduct conviction is a minor misdemeanor with no jail, no loss of civil rights and no mandatory
          reporting. It does not trigger the Lautenberg Amendment, the federal firearm ban that follows any misdemeanor &ldquo;crime of
          domestic violence&rdquo; conviction under 18 U.S.C. § 922(g)(9). For someone charged with domestic violence, a negotiated
          reduction can protect firearm rights that would otherwise be lost permanently.
        </p>
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>.
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
