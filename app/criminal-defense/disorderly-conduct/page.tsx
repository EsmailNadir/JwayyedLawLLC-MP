import RelatedArticles from '@/components/practice/RelatedArticles';
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Disorderly Conduct Defense Ohio',
  description:
    'Charged with disorderly conduct under R.C. 2917.11? Penalties, when it becomes an M4, diversion and defenses. Call Jwayyed Law LLC at (614) 285-5482.',
  keywords: [
    'disorderly conduct lawyer Ohio',
    'disorderly conduct defense attorney Columbus',
    'disorderly conduct ORC 2917.11',
    'Franklin County disorderly conduct lawyer',
    'public intoxication Ohio attorney',
    'disorderly conduct minor misdemeanor Ohio',
    'disorderly conduct M4 Ohio',
    'Ohio disorderly conduct charges',
    'facing disorderly conduct charges',
  ],
  openGraph: {
    title: 'Disorderly Conduct Defense Ohio | Jwayyed Law LLC',
    description: 'Penalties, M4 escalation, diversion and defenses for a disorderly conduct charge under R.C. 2917.11.',
    url: 'https://www.jjlawohio.com/criminal-defense/disorderly-conduct',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/criminal-defense/disorderly-conduct' },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Disorderly Conduct', href: '/criminal-defense/disorderly-conduct' },
];

const faqs = [
  {
    question: 'What is disorderly conduct under Ohio law?',
    answer:
      'Ohio Revised Code 2917.11 prohibits conduct that recklessly causes inconvenience, annoyance or alarm to another person. Common examples are fighting or threatening harm, making unreasonable noise, using offensively coarse language where it is likely to provoke violence, and creating a physically offensive condition with no legitimate purpose. Division (B) separately prohibits offensive conduct, or creating a risk of physical harm, while voluntarily intoxicated in a public place. The base offense is a minor misdemeanor (no jail, a fine of up to $150), rising to an M4 in certain circumstances.',
  },
  {
    question: 'When does disorderly conduct escalate to a fourth-degree misdemeanor in Ohio?',
    answer:
      'Under R.C. 2917.11 it becomes a fourth-degree misdemeanor (up to 30 days in jail and a $250 fine) in four situations: (1) you keep going after a reasonable warning from law enforcement to stop; (2) it happens near a school or in a school safety zone; (3) it happens in the presence of emergency personnel responding to an emergency; or (4) you have three or more prior convictions under the public intoxication subsection, R.C. 2917.11(B). Each escalation is a separate finding, and the firm challenges it case by case.',
  },
  {
    question: 'Does a disorderly conduct conviction go on my record?',
    answer:
      'Yes. A minor misdemeanor or M4 disorderly conduct conviction creates a permanent public criminal record in Ohio, visible on the background checks employers, landlords and licensing boards use. Even a $150 minor misdemeanor is worth contesting when there is a real path to dismissal or diversion. Many first-time disorderly conduct cases in Ohio end without a conviction through first-offender diversion programs.',
  },
  {
    question: 'Can disorderly conduct be expunged in Ohio?',
    answer:
      'Most disorderly conduct convictions can be expunged under Ohio Revised Code 2953.32 after the waiting period: 1 year from final discharge for minor misdemeanor and M4 convictions. Once sealed, the record comes out of public background check databases. Expungement only helps after a conviction, though, so the firm goes for dismissal or diversion first and treats expungement as the fallback.',
  },
  {
    question: 'What defenses apply to disorderly conduct charges in Ohio?',
    answer:
      'The main defenses are: the conduct was careless or impulsive rather than reckless; it did not cause actual inconvenience, annoyance or alarm to a specific person; the charge rests on speech or expression protected by the First Amendment; the warning relied on for the M4 escalation was not sufficient; or the conduct falls within an exception or is too minor to count. The firm reviews the body-cam footage, police reports and witness statements before advising on a defense.',
  },
  {
    question: 'Why hire Jwayyed Law LLC for a disorderly conduct charge in Ohio?',
    answer:
      'Jwayyed Law LLC defends disorderly conduct charges throughout Ohio, including Franklin County, Columbus and nearby communities. The charge can look minor, but a conviction leaves a permanent criminal record. Many first-time cases can be dismissed or diverted, and an attorney is in a better position to get there than someone representing themselves. The firm appears in mayor\'s courts, Franklin County Municipal Court and municipal courts across central Ohio. Call (614) 285-5482 to discuss your case.',
  },
];

export default function DisorderlyConductPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Disorderly conduct charges in Ohio"
        description="Disorderly conduct under R.C. 2917.11 starts as a minor misdemeanor with a fine of up to $150. In four situations it becomes an M4 with up to 30 days in jail."
      />

      <KeyFacts
        facts={[
          { figure: '$150', label: 'maximum fine for minor misdemeanor disorderly conduct, with no jail' },
          { figure: '30 days', label: 'maximum jail once the charge becomes a fourth-degree misdemeanor' },
          { figure: '$250', label: 'maximum fine for M4 disorderly conduct' },
        ]}
      />

      <Section
        title="What Ohio's disorderly conduct statute prohibits"
        intro={
          <p>
            Ohio Revised Code 2917.11 is one of the most broadly written misdemeanor statutes in the state. It can cover a shouting
            match in a parking lot, aggressive behavior at a community event, or public intoxication that creates a risk of harm.
          </p>
        }
      >
        <p>
          R.C. 2917.11(A) prohibits recklessly causing inconvenience, annoyance or alarm to another by:
        </p>
        <ul>
          <li>fighting, threatening harm, or violent or turbulent behavior;</li>
          <li>making unreasonable noise;</li>
          <li>using offensively coarse language or gestures where they are likely to provoke a violent response;</li>
          <li>creating a physically offensive condition with no legitimate purpose; or</li>
          <li>other behavior that creates a risk of physical harm.</li>
        </ul>
        <p>
          Division (B) separately prohibits being voluntarily intoxicated in a public place and, while in that condition, engaging in
          offensive conduct or creating a risk of physical harm. Being intoxicated alone is not the offense.
        </p>
        <h3>The recklessness requirement</h3>
        <p>
          The statute turns on the word &ldquo;reckless.&rdquo; Ohio law defines reckless conduct as conscious disregard of a
          substantial and unjustifiable risk. That is more culpable than negligence and less culpable than knowing or purposeful
          conduct. Behavior that was ill-advised, impulsive or disruptive does not meet the standard unless you consciously disregarded
          a risk of causing inconvenience or alarm. The firm looks at whether the prosecution can prove that state of mind, beyond
          proving the conduct happened.
        </p>
      </Section>

      <Section title="Disorderly conduct penalties" tone="ice">
        <FactTable
          title="Minor misdemeanor (base offense)"
          rows={[
            { label: 'Jail', value: 'None.' },
            { label: 'Fine', value: 'Up to $150.' },
            {
              label: 'Record',
              value: 'A permanent public criminal record, visible to employers, landlords and professional licensing boards.',
            },
          ]}
        />
        <FactTable
          title="Fourth-degree misdemeanor (R.C. 2917.11(C))"
          rows={[
            { label: 'Jail', value: 'Up to 30 days.' },
            { label: 'Fine', value: 'Up to $250.' },
            { label: 'Warning ignored', value: 'You keep going after a reasonable warning from law enforcement to stop. This is the most common escalation.' },
            { label: 'Near a school', value: 'The offense happens near a school or in a school safety zone.' },
            { label: 'Emergency scene', value: 'The offense happens in the presence of emergency personnel responding to an emergency.' },
            { label: 'Prior intoxication convictions', value: 'Three or more prior convictions under R.C. 2917.11(B).' },
          ]}
          note="Whether the warning was clearly given, whether you heard it, and whether the conduct actually continued afterward are all factual questions that can defeat the escalation. School and emergency-scene escalations are just as fact-specific."
        />
      </Section>

      <Section title="Diversion for a first offense">
        <p>
          Many first-time disorderly conduct charges in Ohio end without a conviction through a diversion program. An attorney is far
          more likely than a self-represented defendant to find out whether diversion is available and negotiate it. A dismissal is
          always better than a plea, even a plea to a minor misdemeanor.
        </p>
        <Steps
          steps={[
            { title: 'Enter the program', body: 'Diversion is negotiated with the prosecutor or offered by the court.' },
            {
              title: 'Meet the conditions',
              body: 'Typically brief community service, no new arrests during a probationary period, and payment of court costs.',
            },
            { title: 'Dismissal', body: 'When you complete the program, the charge is dismissed.' },
          ]}
        />
      </Section>

      <Section title="What a disorderly conduct defense attorney does" tone="ice">
        <PointGrid
          points={[
            { title: 'Diversion and dismissal', body: 'Pursues a conditional dismissal for first-time defendants.' },
            { title: 'Challenges the M4 escalation', body: 'Contests the "persists after warning" element and the other escalation grounds.' },
            { title: 'Tests the mental state', body: 'Whether the prosecution can prove the recklessness the statute requires.' },
            { title: 'First Amendment challenges', body: 'Raises speech and expression protections where they apply.' },
            {
              title: 'Defends companion charges',
              body: 'Coordinates the disorderly conduct defense with assault, OVI or other related charges.',
            },
            { title: 'Plans for expungement', body: 'Advises on record-sealing eligibility under R.C. 2953.32.' },
          ]}
        />
        <p>
          If you are facing disorderly conduct charges in <Link href="/locations/franklin-county">Franklin County</Link>,{' '}
          <Link href="/locations/delaware-county">Delaware County</Link> or anywhere in Ohio, call{' '}
          <a href="tel:6142855482">(614) 285-5482</a> or <Link href="/contact">schedule a consultation</Link>. Even a minor
          misdemeanor conviction leaves a permanent record, so talk to an attorney before you enter any plea.
        </p>
      </Section>

      <RelatedArticles category="Criminal Defense" title="Articles on Ohio criminal charges" slugs={["what-to-expect-first-court-appearance-ohio", "misdemeanor-vs-felony-ohio", "ohio-new-expungement-laws-clear-record"]} />
      <FAQ faqs={faqs} />
      <LocationsWeServe title="Areas We Serve" />
      <ContactCTA />
    </>
  );
}
