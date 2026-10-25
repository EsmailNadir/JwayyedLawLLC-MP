import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';
import { SUBURBS } from '@/data/franklin-county-reference';

export const metadata: Metadata = {
  title: "Franklin County Mayor's Courts Defense",
  description:
    "Fourteen Franklin County suburbs run mayor's courts for OVI, traffic and misdemeanor charges. Where each one sits, when it meets, and how cases transfer.",
  keywords: ["Franklin County mayor's court lawyer", "Franklin County mayor's court OVI", "Columbus suburb mayor's court attorney", "Franklin County municipal court suburbs", "Ohio mayor's court defense"],
  openGraph: {
    title: "Franklin County Mayor's Courts Defense | Jwayyed Law LLC",
    description: "Addresses, schedules, jurisdiction and de novo appeals for Franklin County's suburban mayor's courts.",
    url: "https://www.jjlawohio.com/locations/franklin-county/mayors-courts-franklin-county",
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/mayors-courts-franklin-county' },
};

const breadcrumbItems = [
  { label: 'Courts', href: '/courts' },
  { label: 'Franklin County', href: '/courts/franklin-county' },
  { label: "Mayor's Courts in Franklin County", href: '/locations/franklin-county/mayors-courts-franklin-county' },
];

const faqs = [
  {
    question: "What is a mayor's court in Ohio?",
    answer:
      "Ohio's mayor's courts operate under R.C. Chapter 1905. They are limited-jurisdiction courts run by the mayor of a municipality or, more often, by a licensed attorney appointed as the mayor's court magistrate. They hear minor misdemeanor and unclassified misdemeanor violations of municipal ordinances and state traffic laws that happen inside the municipality. They have no jurisdiction over felonies, and only a narrow scope over state criminal misdemeanors. Cases beyond that are transferred to Franklin County Municipal Court.",
  },
  {
    question: "What charges are handled at Franklin County mayor's courts?",
    answer:
      "Suburban mayor's courts usually handle minor misdemeanor traffic violations; first-offense OVI citations under R.C. 4511.19 (a first OVI can be heard at mayor's court, but a second or later OVI must transfer to Franklin County Municipal Court at 375 S. High St, Columbus, OH 43215); minor misdemeanor disorderly conduct; open container violations; minor drug paraphernalia citations; and municipal ordinance violations such as noise, parking and code violations. If a charge is raised above a minor misdemeanor during the case, it must transfer to Franklin County Municipal Court.",
  },
  {
    question: "Does a mayor's court decision have the same legal effect as a Municipal Court decision?",
    answer:
      "Yes. A conviction at a suburban mayor's court is a valid Ohio criminal conviction with the same legal weight as one at Franklin County Municipal Court. A mayor's court OVI conviction counts as a prior OVI for Ohio's 10-year lookback. Fines are enforced the same way. The main difference is that appeals from a mayor's court go to Franklin County Municipal Court rather than straight to the Court of Appeals, which adds a layer of appeal.",
  },
  {
    question: "Can I appeal a mayor's court conviction in Franklin County?",
    answer:
      "Yes. Under R.C. 1905.27, a mayor's court conviction can be appealed to Franklin County Municipal Court, where the case is retried de novo: from scratch, with no deference to the mayor's court's finding. That gives you a second chance to contest the charge in a full Municipal Court proceeding. The firm files de novo appeals from Franklin County mayor's court convictions and handles the retrial.",
  },
  {
    question: "Which Franklin County suburbs operate active mayor's courts?",
    answer:
      "As of 2026, these suburbs operate active mayor's courts where Jwayyed Law LLC appears: Bexley, Canal Winchester, Dublin, Grove City, Groveport, Hilliard, New Albany (held at Gahanna City Hall, 200 S. Hamilton Road, Gahanna), Obetz, Pickerington, Reynoldsburg, Upper Arlington, Westerville, Whitehall and Worthington. Grandview Heights closed its mayor's court on December 31, 2023, and Marble Cliff has no independent court; both route directly to Franklin County Municipal Court. Shawnee Hills and Valleyview also have no active mayor's courts.",
  },
  {
    question: "Why hire Jwayyed Law LLC for a Franklin County mayor's court case?",
    answer:
      "Suburban mayor's courts move quickly, and arraignments and hearings often follow a set schedule with little public notice. An attorney who appears for you means you do not have to take time off work for court dates, and can judge whether a transfer to Franklin County Municipal Court or a de novo appeal would help your case. Jwayyed Law LLC appears in all Franklin County mayor's courts. Call (614) 285-5482.",
  },
];

const mayorsCourts = [
  { suburb: 'Bexley', slug: 'bexley', description: "Bexley Mayor's Court handles OVI, traffic and misdemeanor matters for this inner-ring Columbus suburb." },
  { suburb: 'Canal Winchester', slug: 'canal-winchester', description: "Canal Winchester Mayor's Court serves this growing southeastern Franklin County community." },
  { suburb: 'Dublin', slug: 'dublin', description: "Dublin Mayor's Court serves one of Franklin County's largest suburbs, with heavy OVI enforcement on U.S. 33 and S.R. 161." },
  { suburb: 'Grove City', slug: 'grove-city', description: "Grove City Mayor's Court handles traffic and misdemeanor matters along the Southwest Boulevard and S.R. 665 corridors." },
  { suburb: 'Groveport', slug: 'groveport', description: "Groveport Mayor's Court serves this southeastern logistics hub near I-270 and Rickenbacker." },
  { suburb: 'Hilliard', slug: 'hilliard', description: "Hilliard Mayor's Court handles charges from this northwest suburb along Cemetery Road and I-270." },
  { suburb: 'New Albany', slug: 'new-albany', description: "New Albany Mayor's Court (held at Gahanna City Hall) handles OVI, traffic and misdemeanor matters for this northeast Franklin County community." },
  { suburb: 'Obetz', slug: 'obetz', description: "Obetz Mayor's Court handles matters for this small south Franklin County municipality near Rickenbacker." },
  { suburb: 'Pickerington', slug: 'pickerington', description: "Pickerington Mayor's Court serves this eastern suburb where I-270 and S.R. 256 meet." },
  { suburb: 'Reynoldsburg', slug: 'reynoldsburg', description: "Reynoldsburg Mayor's Court handles charges from this eastern suburb along I-70 and U.S. 40." },
  { suburb: 'Upper Arlington', slug: 'upper-arlington', description: "Upper Arlington Mayor's Court serves this inner-ring suburb next to OSU, with active neighborhood enforcement." },
  { suburb: 'Westerville', slug: 'westerville', description: "Westerville Mayor's Court handles matters in this north suburb along I-270 and S.R. 3." },
  { suburb: 'Whitehall', slug: 'whitehall', description: "Whitehall Mayor's Court serves this east Columbus suburb along I-270 and Main Street." },
  { suburb: 'Worthington', slug: 'worthington', description: "Worthington Mayor's Court handles matters for this north Columbus suburb along High Street and U.S. 23." },
];

// New Albany has no dedicated mayor's court page yet; its card links to the New Albany OVI page instead.
const courtHref = (slug: string) =>
  slug === 'new-albany' ? '/locations/franklin-county/ovi-dui-defense-new-albany' : `/locations/franklin-county/mayors-court-${slug}`;

const activeCourts = SUBURBS.filter((s) => s.mayorsCourt.active);

export default function FranklinCountyMayorsCourtHubPage() {
  const locationSchema = {"@context": "https://schema.org", "@type": "LegalService", "name": "Jwayyed Law LLC: Mayor's Court Representation in Franklin County", "serviceType": "Criminal Defense", "areaServed": {"@type": "County", "name": "Franklin County", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "provider": {"@type": "LegalService", "@id": "https://www.jjlawohio.com", "name": "Jwayyed Law LLC", "telephone": "(614) 285-5482", "url": "https://www.jjlawohio.com"}, "url": "https://www.jjlawohio.com/locations/franklin-county/mayors-courts-franklin-county"};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Mayor's courts in Franklin County"
        description="Fourteen Franklin County suburbs run their own mayor's courts. A conviction there carries the same weight as one at Franklin County Municipal Court."
      />

      <Section
        title="Find your mayor's court"
        intro={
          <p>
            As of 2026, fourteen suburbs operate active mayor&rsquo;s courts, and Jwayyed Law LLC appears in all of them. Each page covers
            that court and the charges it hears.
          </p>
        }
      >
        <LinkGrid
          links={mayorsCourts.map(({ suburb, slug, description }) => ({
            href: courtHref(slug),
            title: `${suburb} Mayor's Court`,
            subtitle: description,
          }))}
        />
      </Section>

      <Section title="Where each court meets" tone="ice">
        <FactTable
          title="Active mayor's courts in Franklin County"
          rows={activeCourts.map((s) => ({
            label: s.name,
            value: (
              <>
                {s.mayorsCourt.address}
                {s.mayorsCourt.phone ? `, ${s.mayorsCourt.phone}` : ''}
                {s.mayorsCourt.schedule ? <><br />{s.mayorsCourt.schedule}</> : null}
              </>
            ),
          }))}
          note="Schedules change. Check with the court before your date."
        />
        <h3>Suburbs that route to Franklin County Municipal Court</h3>
        <p>
          Grandview Heights closed its mayor&rsquo;s court effective December 31, 2023, and Marble Cliff has never operated an independent
          court. OVI, traffic and misdemeanor charges from inside those two municipalities are heard at Franklin County Municipal Court,
          375 S. High Street, Columbus, OH 43215. The firm defends{' '}
          <Link href="/locations/franklin-county/criminal-misdemeanor-defense-franklin-county-municipal-court">
            criminal and misdemeanor cases at Franklin County Municipal Court
          </Link>{' '}
          as well as at every suburban mayor&rsquo;s court.
        </p>
      </Section>

      <Section title="What a mayor's court can hear">
        <p>
          Franklin County is home to Columbus and 42 other municipalities. Under R.C. Chapter 1905, a municipality below the population
          threshold for a municipal court may set up a mayor&rsquo;s court for minor misdemeanors, traffic violations and local ordinance
          matters inside its limits. The mayor presides, or, more often in Franklin County, the municipality appoints a licensed attorney
          as magistrate.
        </p>
        <FactTable
          title="Mayor's court jurisdiction"
          rows={[
            { label: 'Hears', value: 'Minor misdemeanor violations of municipal ordinances and of state statutes, including traffic laws.' },
            { label: 'First appearances', value: 'First appearances and bail hearings for more serious charges that will be transferred.' },
            {
              label: 'Transfers',
              value:
                'A fourth-degree misdemeanor or higher, or a contested charge beyond what the court can try, goes to Franklin County Municipal Court at 375 S. High Street, Columbus.',
            },
            { label: 'OVI', value: 'OVI charges (R.C. 4511.19) often start at the mayor’s court for arraignment, then transfer for trial and disposition.' },
            { label: 'Record', value: 'Mayor’s courts are not courts of record.' },
          ]}
        />
        <Callout title="A mayor's court conviction is a real conviction">
          It carries the same legal weight as a Franklin County Municipal Court conviction and counts in your criminal history, including
          for the OVI lookback.
        </Callout>
      </Section>

      <Section title="De novo appeals" tone="ice">
        <p>
          Under R.C. 1905.27, anyone convicted at a Franklin County mayor&rsquo;s court can appeal to Franklin County Municipal Court for a
          completely new hearing. The case is retried from scratch, with no weight given to the mayor&rsquo;s court&rsquo;s findings, so a
          person who took a plea or was found guilty can, in some circumstances, try the case again.
        </p>
        <Steps
          steps={[
            { title: 'Conviction at mayor’s court', body: 'By plea or after a hearing.' },
            { title: 'File the appeal', body: 'The deadline under Ohio rules is 30 days, so contact counsel promptly.' },
            { title: 'Retrial at Franklin County Municipal Court', body: 'A full proceeding with no deference to the first result.' },
          ]}
        />
        <p>
          The firm uses the de novo appeal when it can change the outcome: new evidence has come out, witnesses have become available, or
          the original defense fell short.
        </p>
      </Section>

      <Section title="What the firm does in mayor's court">
        <PointGrid
          points={[
            { title: 'Appears for you', body: 'So you do not have to take time off work for each court date.' },
            { title: 'Weighs a transfer', body: 'Whether moving the case to Franklin County Municipal Court helps.' },
            { title: 'Files de novo appeals', body: 'And handles the retrial at the Municipal Court.' },
            { title: 'Every active court', body: "Appears in all fourteen active Franklin County mayor's courts." },
          ]}
        />
        <p>
          Call <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link> if you were cited in any
          Franklin County suburb.
        </p>
      </Section>

      <FAQ faqs={faqs} />
      <LocationsWeServe title="Franklin County & Ohio" />
      <ContactCTA />
    </>
  );
}
