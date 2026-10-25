import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Criminal Trespass Defense Ohio',
  description:
    'Charged with criminal trespass under ORC 2911.21? Penalties, the notice rule, defenses and record sealing. Call Jwayyed Law LLC at (614) 285-5482.',
  keywords: [
    'criminal trespass lawyer Ohio',
    'trespassing defense attorney',
    'criminal trespass ORC 2911.21',
    'misdemeanor trespass Ohio',
    'trespassing charges attorney',
    'unlawful entry defense lawyer',
    'Ohio trespass lawyer',
    'criminal trespass penalties Ohio',
    'property crime defense attorney'
  ],
  openGraph: {
    title: 'Criminal Trespass Defense Ohio | Jwayyed Law LLC',
    description: 'Penalties, the notice requirement and defenses for a criminal trespass charge under ORC 2911.21.',
    url: 'https://www.jjlawohio.com/criminal-defense/criminal-trespass',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/criminal-defense/criminal-trespass',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Criminal Trespass', href: '/criminal-defense/criminal-trespass' },
];

const faqs = [
  {
    question: 'What is criminal trespass under Ohio law?',
    answer:
      'Under Ohio Revised Code 2911.21, criminal trespass means knowingly entering or staying on someone else\'s land or premises without privilege, when notice against unauthorized access was given by actual communication, posting or fencing. It also covers recklessly entering or staying on another\'s land after such notice, and negligently failing to leave after the owner or occupant tells you to. It is generally a fourth-degree misdemeanor punishable by up to 30 days in jail and a fine of up to $250.',
  },
  {
    question: 'What are the penalties for criminal trespass in Ohio?',
    answer:
      'It depends on the degree. A fourth-degree misdemeanor carries up to 30 days in jail and a fine of up to $250. Trespass involving an occupied structure becomes a first-degree misdemeanor, punishable by up to 180 days in jail and a fine of up to $1,000. Restitution, court costs, probation and a permanent criminal record can follow. Prior convictions and aggravating factors can raise the penalties further.',
  },
  {
    question: 'What is the difference between criminal trespass and breaking and entering in Ohio?',
    answer:
      'Criminal trespass under ORC 2911.21 is knowingly entering or staying on property without permission, and it is a misdemeanor. Breaking and entering under ORC 2911.13 is trespassing by force, stealth or deception in an unoccupied structure to commit a theft or felony, and it is a felony. Burglary under ORC 2911.12 is trespassing in an occupied structure with intent to commit a criminal offense. The differences come down to how you got in, what kind of structure it was, and what you meant to do there.',
  },
  {
    question: 'Can criminal trespass charges be expunged from my record in Ohio?',
    answer:
      'Yes. A criminal trespass conviction may be eligible for expungement or record sealing under Ohio Revised Code 2953.32. Because it is a misdemeanor, you may apply after the waiting period if you meet the requirements. A sealed record is hidden from most background checks, which helps with jobs and housing. An attorney can check your eligibility and handle the process.',
  },
  {
    question: 'What should I do if I am charged with criminal trespass in Ohio?',
    answer:
      'Stay calm and use your right to remain silent. Do not argue with police or try to explain why you were on the property, because your statements can be used against you. Contact a criminal defense attorney right away. Write down anything that supports your side, such as permission you were given, missing signs, or why you believed you had a right to be there. An attorney can work toward a dismissal or a reduced charge.',
  },
  {
    question: 'What are the elements of criminal trespass in Ohio?',
    answer:
      'Under Ohio Revised Code 2911.21, the state must show that you knowingly entered or stayed on another\'s land or premises without privilege, after notice against unauthorized access was given by actual communication, by posting in a way reasonably calculated to inform intruders, or by fencing or another enclosure. The base offense is a fourth-degree misdemeanor (M4), punishable by up to 30 days in jail and a fine of up to $250. The prosecution must prove both the knowing entry without privilege and that proper notice was given.',
  },
  {
    question: 'What is aggravated trespass in Ohio and how does it differ from criminal trespass?',
    answer:
      'Aggravated trespass under Ohio Revised Code 2911.211 means entering or staying on another\'s land or premises in order to commit a misdemeanor that is likely to cause physical harm, or to make someone believe you will cause physical harm. Standard criminal trespass (ORC 2911.21) is an M4. Aggravated trespass is a first-degree misdemeanor (M1), punishable by up to 180 days in jail and a fine of up to $1,000. The intent to commit a harmful misdemeanor is what raises the offense two full misdemeanor levels.',
  },
  {
    question: 'How long until a criminal trespass conviction can be sealed in Ohio?',
    answer:
      'A criminal trespass conviction under ORC 2911.21 is a fourth-degree misdemeanor (M4). It is generally eligible for record sealing under Ohio Revised Code 2953.32 after a one-year waiting period from the end of your sentence, if you meet the requirements. Sealing removes the conviction from most background checks. An attorney can check your eligibility, spot any obstacles and handle the application.',
  },
];

const RELATED = [
  { href: '/criminal-defense/criminal-damaging', title: 'Criminal damaging', subtitle: 'Property damage and destruction charges' },
  { href: '/criminal-defense/criminal-mischief', title: 'Criminal mischief', subtitle: 'Property interference and tampering defense' },
  { href: '/criminal-defense/resisting-arrest', title: 'Resisting arrest', subtitle: 'Defense for resisting arrest and obstruction charges' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Clearing a criminal record under Ohio law' },
];

export default function CriminalTrespassPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Criminal trespass charges in Ohio"
        description="Criminal trespass under ORC 2911.21 is generally a fourth-degree misdemeanor. Trespass involving an occupied structure is a first-degree misdemeanor with up to 180 days in jail."
      />

      <KeyFacts
        facts={[
          { figure: '30 days', label: 'maximum jail for standard criminal trespass, a fourth-degree misdemeanor' },
          { figure: '$250', label: 'maximum fine for standard criminal trespass' },
          { figure: '180 days', label: 'maximum jail for trespass in an occupied structure (first-degree misdemeanor)' },
        ]}
      />

      <Section
        title="What a criminal trespass charge means"
        intro={
          <p>
            Criminal trespass under Ohio Revised Code 2911.21 means knowingly entering or staying on someone else&rsquo;s property
            without permission or privilege to be there.
          </p>
        }
      >
        <p>
          The law covers a wide range of situations, from walking onto posted private property to refusing to leave a business after
          being asked. Many charges grow out of confusion about property lines, disputes between neighbors, or a real belief that you
          had a right to be there. When the trespass involves an occupied structure, the charge rises to a first-degree misdemeanor.
        </p>
        <p>Jwayyed Law LLC defends criminal trespass charges under ORC 2911.21 throughout Ohio.</p>
        <h3>What the prosecution has to prove</h3>
        <p>The state must prove each element beyond a reasonable doubt. Most defenses attack one of them.</p>
        <FactTable
          title="Elements of criminal trespass (ORC 2911.21)"
          rows={[
            {
              label: 'Mental state',
              value: 'You entered or stayed knowingly, or recklessly for the forms that require only recklessness.',
            },
            { label: 'Property of another', value: "The land or premises belonged to someone else." },
            {
              label: 'Without privilege',
              value: 'You had no permission or right to be there. Express or implied permission defeats this element.',
            },
            {
              label: 'Notice',
              value:
                'Notice against unauthorized access was given by actual communication, by posting reasonably calculated to inform intruders, or by fencing or another enclosure. For failure to leave, the owner, occupant or an authorized agent told you to go.',
            },
          ]}
        />
      </Section>

      <LocationsWeServe title="Criminal Defense" />

      <Section title="Types of criminal trespass under ORC 2911.21" tone="ice">
        <FactTable
          title="What the statute covers"
          rows={[
            {
              label: 'Knowing entry without privilege (2911.21(A)(1))',
              value:
                'The most common form: knowingly entering or staying on the land or premises of another without privilege, when notice against unauthorized access was given by actual communication, posting reasonably calculated to inform intruders, or fencing or another enclosure. A fourth-degree misdemeanor.',
            },
            {
              label: 'Reckless entry after notice (2911.21(A)(2))',
              value:
                'Entering or staying on the land or premises of another after notice by communication, posting or fencing, while recklessly disregarding that notice: being aware of a substantial risk that you lacked permission and ignoring it. A fourth-degree misdemeanor.',
            },
            {
              label: 'Failure to leave (2911.21(A)(3))',
              value:
                'Recklessly entering or staying on the land or premises of another and negligently failing or refusing to leave after the owner, occupant or an authorized agent gives notice by signage, fencing or other posting. Examples: refusing to leave a business when management asks, staying on private property after the owner tells you to go, or staying in a public area after hours. A fourth-degree misdemeanor.',
            },
            {
              label: 'Occupied structure (2911.21(B))',
              value:
                'Trespass in a permanent or temporary habitation of any person, when someone other than the offender is present or likely to be present, such as a home or apartment. A first-degree misdemeanor.',
            },
          ]}
        />
      </Section>

      <Section
        title="Common situations that lead to trespass charges"
        intro={
          <p>
            Most trespass charges come from a handful of everyday situations. Each one tends to turn on a different question:
            permission, notice or what you reasonably believed.
          </p>
        }
      >
        <PointGrid
          points={[
            {
              title: 'Refusing to leave a business',
              body: 'Management asks you to leave and you stay. This is the failure-to-leave form, and the question is whether you were actually told to go and had the chance to do it.',
            },
            {
              title: 'Staying after the owner says go',
              body: 'A guest or visitor stays on private property after the owner or occupant tells them to leave. What was said, and by whom, matters.',
            },
            {
              title: 'Posted or fenced land',
              body: 'Walking onto private land marked with signs or fencing. The defense often turns on whether the signs were visible and placed to inform intruders, or the fencing was complete.',
            },
            {
              title: 'Property lines and neighbor disputes',
              body: 'Confusion about where a boundary sits, or a feud with a neighbor that turns into a police call. A reasonable belief that you were on your own or public land can negate the mental state.',
            },
            {
              title: 'Public places after hours',
              body: 'Staying in a park or other public area after it closes. Whether closing hours were posted is part of the notice question.',
            },
            {
              title: 'Protests and assemblies',
              body: 'Charges that arise from peaceful protest or assembly can raise First Amendment questions, especially on property that is a public forum.',
            },
          ]}
        />
      </Section>

      <Section title="Criminal trespass penalties in Ohio" tone="ice">
        <p>Sentencing falls under Ohio Revised Code Chapter 2929. The form of the trespass sets the degree.</p>
        <FactTable
          title="Standard criminal trespass: fourth-degree misdemeanor"
          rows={[
            { label: 'Jail', value: 'Up to 30 days.' },
            { label: 'Fines', value: 'Up to $250, plus court costs.' },
            { label: 'Probation', value: 'Possible, with conditions such as staying away from the property.' },
            { label: 'Record', value: 'A permanent criminal record that can affect jobs, housing and other opportunities.' },
          ]}
        />
        <FactTable
          title="Trespass in an occupied structure: first-degree misdemeanor"
          rows={[
            { label: 'Jail', value: 'Up to 180 days.' },
            { label: 'Fines', value: 'Up to $1,000, plus court costs.' },
            { label: 'Other terms', value: 'Probation with conditions and possible no-contact orders.' },
            { label: 'Record', value: 'A permanent criminal record. This is the same classification as simple assault.' },
          ]}
        />
        <FactTable
          title="Related felony charges"
          rows={[
            {
              label: 'Aggravated trespass (ORC 2911.211)',
              value:
                'A first-degree misdemeanor: entering or staying on land or premises to commit a misdemeanor likely to cause physical harm, or to make someone believe you will cause it. Up to 180 days in jail and a fine of up to $1,000.',
            },
            {
              label: 'Breaking and entering (ORC 2911.13)',
              value: 'A fifth-degree felony: entering an unoccupied structure to commit a theft or a felony.',
            },
            {
              label: 'Burglary (ORC 2911.12)',
              value: 'From a fourth-degree felony to a first-degree felony: entering an occupied structure with criminal intent.',
            },
            {
              label: 'Aggravated burglary (ORC 2911.11)',
              value: 'A first-degree felony: entering an occupied structure with a deadly weapon or causing physical harm.',
            },
          ]}
        />
        <h3>Consequences beyond the sentence</h3>
        <p>
          Employers may view a trespass conviction unfavorably, especially for jobs involving property access, security or trust.
          Landlords may reject a housing application, and licensing in some fields may be affected. A court can also issue a
          no-trespass order barring you from a property, which matters when that property is a business, workplace or public place you
          visit often.
        </p>
      </Section>

      <Section
        title="What to do after a trespass citation or arrest"
        intro={
          <p>
            Stay quiet, follow any order to stay away from the property, and write down why you thought you could be there. Those
            notes and photographs often decide a trespass case.
          </p>
        }
      >
        <Steps
          steps={[
            {
              title: 'Do not argue or explain',
              body: 'Use your right to remain silent. Explaining to police why you were on the property gives them statements that can be used against you.',
            },
            {
              title: 'Stay away from the property',
              body: 'The court may order you to stay away, and a no-trespass order can bar you from a business or place you use often. Going back can bring a new charge.',
            },
            {
              title: 'Write down your side',
              body: 'Who gave you permission and when, why you believed you had a right to be there, and whether anyone told you to leave and how.',
            },
            {
              title: 'Document the notice, or the lack of it',
              body: 'Photographs of where signs were or were not posted, gaps in fencing and the property line. The state has to prove proper notice.',
            },
            {
              title: 'Contact an attorney before arraignment',
              body: 'Your attorney can argue for better release terms and start working toward a dismissal or a reduced charge.',
            },
          ]}
        />
      </Section>

      <Section title="How a criminal trespass case moves" tone="ice">
        <Steps
          steps={[
            {
              title: 'Citation or arrest, then arraignment',
              body: 'The case may start with a citation at the scene or an arrest. At arraignment the charges are read, bond conditions are set and you enter a plea. Most people charged with misdemeanor trespass are released on their own recognizance or a low bond. The court may order no contact or order you to stay away from the property. Your attorney can argue for better release terms.',
            },
            {
              title: 'Discovery and investigation',
              body: "The prosecution must turn over its evidence: police reports, witness statements, photos of posted signs or fencing, and surveillance footage. Your attorney reviews it, checks whether proper notice was given, and looks for evidence of implied consent, lack of notice or a privilege to be there.",
            },
            {
              title: 'Pretrial negotiations',
              body: 'Most misdemeanor trespass cases resolve here. Options include dismissal, diversion, community service instead of jail, or a plea with lighter consequences. First-time offenders without a significant record may be offered a conditional dismissal.',
            },
            {
              title: 'Trial',
              body: 'The prosecution must prove every element beyond a reasonable doubt, including that you knowingly entered without privilege and that proper notice was given. Your attorney challenges the notice, cross-examines the witnesses and argues for acquittal.',
            },
          ]}
        />
      </Section>

      <Section
        title="How criminal trespass cases end in Ohio"
        intro={
          <p>
            Most misdemeanor trespass cases resolve before trial, and several of the usual outcomes avoid a conviction.
          </p>
        }
      >
        <PointGrid
          points={[
            { title: 'Dismissal', body: 'When the state cannot prove notice, privilege or the required mental state, or the evidence was obtained illegally.' },
            {
              title: 'Conditional dismissal',
              body: 'For first-time offenders without a significant record, a dismissal once conditions are met, which protects the record.',
            },
            { title: 'Diversion', body: 'A diversion program instead of a conviction.' },
            { title: 'Community service instead of jail', body: 'A negotiated sentence that keeps you out of jail.' },
            { title: 'A plea with lighter consequences', body: 'A plea agreement that limits the penalties and the effect on your record.' },
            { title: 'Acquittal', body: 'At trial, if the state does not prove every element beyond a reasonable doubt.' },
          ]}
        />
      </Section>

      <Section title="Defenses to criminal trespass" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Privilege or consent',
              body: 'Trespass requires entry without privilege. Permission from the owner or an authorized person is a complete defense. It can be express (direct permission) or implied (open business hours, a public invitation, customary access).',
            },
            {
              title: 'Lack of proper notice',
              body: 'The prosecution must prove notice by actual communication, posting or fencing. Signs that were inadequate, hidden or badly placed, or fencing that was incomplete or ambiguous, may not meet the requirement.',
            },
            {
              title: 'Mistake of fact',
              body: 'A reasonable belief that you had a right to be there can negate the required mental state: confusion about boundaries, believing you were on public land, or being sent there by someone you thought had authority.',
            },
            {
              title: 'Necessity',
              body: 'Entering to avoid a greater harm, such as seeking shelter in a medical emergency, escaping danger or helping someone in distress. You must show the entry was needed to prevent imminent harm and that no reasonable legal alternative existed.',
            },
            {
              title: 'Constitutional challenges',
              body: 'Charges can touch First Amendment rights to peaceful protest or assembly on public property. A charge brought in retaliation for exercising those rights, or on property that is a public forum, may be open to a constitutional defense.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a trespass case">
        <PointGrid
          points={[
            { title: 'Protects your rights', body: 'From citation or arrest, including advice on statements and dealings with police.' },
            {
              title: 'Investigates',
              body: 'Police reports, photographs, witness statements and property records, looking for weaknesses and inconsistencies.',
            },
            {
              title: 'Checks the notice',
              body: 'Whether the signs, fencing or communications met the legal requirement for notice.',
            },
            {
              title: 'Builds the defense',
              body: 'Privilege or consent, lack of notice, mistake of fact, necessity or constitutional violations.',
            },
            {
              title: 'Challenges the evidence',
              body: 'Motions to suppress illegally obtained evidence, challenges to identifications, and motions to exclude prejudicial evidence.',
            },
            {
              title: 'Negotiates and tries the case',
              body: 'For dismissal, reduced penalties, diversion or a conditional dismissal that protects your record, and represents you at trial and sentencing.',
            },
          ]}
        />
      </Section>

      <Section title="Sealing a criminal trespass conviction" tone="ice">
        <p>
          Under Ohio Revised Code 2953.32, a criminal trespass conviction may be sealed or expunged. As a misdemeanor it is generally
          eligible after the waiting period if you meet the requirements, including having no more than the allowed number of prior
          convictions. A sealed record is hidden from most background checks. See{' '}
          <Link href="/criminal-defense/expungement-record-sealing">expungement and record sealing</Link>.
        </p>
        <p>
          If you are charged anywhere in Ohio, <Link href="/contact">contact Jwayyed Law LLC</Link> to schedule a consultation. For
          more, see the firm&rsquo;s <Link href="/criminal-defense">criminal defense practice</Link> or read about{' '}
          <Link href="/our-law-firm/blog/what-to-expect-first-court-appearance-ohio">what to expect at your first court appearance in Ohio</Link>.
        </p>
        <h3>Related pages</h3>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
