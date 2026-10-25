import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Theft Defense Attorney Ohio',
  description:
    'Petty theft and shoplifting charges under ORC 2913.02: penalties by value, the court process, defenses and record sealing. Call (614) 285-5482.',
  keywords: [
    'petty theft lawyer Ohio',
    'shoplifting defense attorney',
    'petty theft ORC 2913.02',
    'misdemeanor theft Ohio',
    'theft charges attorney',
    'shoplifting charges lawyer',
    'Ohio theft defense lawyer',
    'petty theft penalties Ohio',
    'first offense theft attorney',
  ],
  openGraph: {
    title: 'Theft Defense Attorney Ohio | Jwayyed Law LLC',
    description: 'Petty theft and shoplifting defense throughout Ohio: penalties, defenses and diversion. Schedule a consultation.',
    url: 'https://www.jjlawohio.com/criminal-defense/petty-theft',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/criminal-defense/petty-theft',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Petty Theft', href: '/criminal-defense/petty-theft' },
];

const faqs = [
  {
    question: 'What is petty theft under Ohio law?',
    answer:
      "Petty theft under Ohio Revised Code 2913.02 is theft of property or services worth less than $1,000. It is a first-degree misdemeanor punishable by up to 180 days in jail and a fine of up to $1,000. Theft happens when a person knowingly obtains or exerts control over someone else's property or services without consent, by deception, by threat or by intimidation. It includes shoplifting, taking someone's personal property and obtaining services without paying.",
  },
  {
    question: 'What are the penalties for petty theft in Ohio?',
    answer:
      "Petty theft (under $1,000) is a first-degree misdemeanor: up to 180 days in jail, a fine of up to $1,000, restitution to the victim, court costs and a permanent criminal record. If the value is under $150, it is generally a minor misdemeanor with a maximum $150 fine and no jail. Penalties can be raised by prior theft convictions, the type of property or the victim's status. A conviction can also make it harder to find work, rent housing or hold a professional license.",
  },
  {
    question: 'Is shoplifting the same as petty theft in Ohio?',
    answer:
      'Shoplifting is a common form of petty theft and is charged under the same statute, ORC 2913.02. Ohio has no separate shoplifting statute. Shoplifting means knowingly concealing, taking or exerting control over store merchandise without paying full retail value. The value sets the charge: under $150 is generally a minor misdemeanor, $150 to $999 is a first-degree misdemeanor, and $1,000 or more is felony theft.',
  },
  {
    question: 'Can petty theft charges be expunged from my record in Ohio?',
    answer:
      'Petty theft convictions may be eligible for expungement or record sealing under Ohio Revised Code 2953.32. As a misdemeanor, the record can be sealed after the waiting period if you meet the eligibility rules. Theft convictions do particular damage on background checks because they suggest dishonesty, and sealing hides the conviction from most background searches. An attorney can review your eligibility.',
  },
  {
    question: 'What should I do if I am charged with petty theft or shoplifting in Ohio?',
    answer:
      'Use your right to remain silent. Do not make statements to police, store security or loss prevention officers without an attorney present, and do not sign an admission of guilt or a civil demand letter. Contact a criminal defense attorney right away. Keep anything that may support your defense, such as receipts, text messages or witness information. An attorney can challenge the evidence and work toward the best outcome available, including dismissal.',
  },
  {
    question: 'What is the value threshold between petty theft and felony theft in Ohio?',
    answer:
      'Under ORC 2913.02, the value of what was taken sets the degree of the offense. Under $1,000 is petty theft, a first-degree misdemeanor (M1) punishable by up to 180 days in jail and a fine of up to $1,000, or a minor misdemeanor if under $150 with no prior theft convictions. At $1,000 to $7,499 it becomes a fifth-degree felony (F5) punishable by 6 to 12 months in prison, and the degree rises with higher values. Valuation is often a central issue, and an attorney can challenge an inflated value to lower the charge.',
  },
  {
    question: 'Can a petty theft conviction be sealed in Ohio?',
    answer:
      'In most cases, yes, under ORC 2953.32. One year after you complete your sentence (including any probation), you may petition the court to seal the record. A sealed record is hidden from most employers and landlords running background checks, though law enforcement and some licensing agencies can still see it. Because a theft conviction weighs heavily with employers, it makes sense to apply as soon as you are eligible. An attorney can review your eligibility and file the petition.',
  },
  {
    question: 'Does a petty theft conviction affect professional licensing in Ohio?',
    answer:
      'Yes, it can. Many licensing boards, including those for nursing, pharmacy, education, real estate, insurance and financial services, run background checks and can deny, suspend or revoke a license over a criminal conviction. Boards often take theft seriously even when the amount is small, because it involves dishonesty. If you hold or are pursuing a license, an attorney can work to avoid a conviction through diversion, a reduced charge or dismissal, and advise you on any licensing board inquiry.',
  },
];

const RELATED = [
  { href: '/criminal-defense/criminal-damaging', title: 'Criminal damaging', subtitle: 'Property damage and destruction charges' },
  { href: '/criminal-defense/criminal-mischief', title: 'Criminal mischief', subtitle: 'Property interference and tampering charges' },
  { href: '/criminal-defense/expungement-record-sealing', title: 'Expungement and record sealing', subtitle: 'Sealing an eligible record under Ohio law' },
  { href: '/criminal-defense/obstruction-of-official-business', title: 'Obstruction of official business', subtitle: 'Charges for interfering with police' },
];

export default function PettyTheftPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Petty theft and shoplifting charges in Ohio"
        description="Theft of property worth less than $1,000 is a first-degree misdemeanor in Ohio, with up to 180 days in jail and a fine of up to $1,000."
      />

      <KeyFacts
        facts={[
          { figure: 'Under $1,000', label: 'value that makes a theft petty theft, a first-degree misdemeanor' },
          { figure: '180 days', label: 'maximum jail for petty theft' },
          { figure: '$1,000', label: 'maximum fine, plus restitution and court costs' },
          { figure: '$1,000 to $7,499', label: 'value range that makes it a fifth-degree felony' },
        ]}
      />

      <Section
        title="What petty theft means in Ohio"
        intro={
          <p>
            Petty theft is knowingly obtaining or exerting control over someone else&apos;s property or services without consent, where
            the value is less than $1,000. It is charged under Ohio Revised Code 2913.02.
          </p>
        }
      >
        <p>
          It covers shoplifting from stores, taking personal property, using services without paying and other kinds of theft. Ohio&apos;s
          theft laws sit in Revised Code Chapter 2913. The value of the property mostly decides the penalty, and the type of property,
          the victim&apos;s status and your prior record can raise it.
        </p>
        <p>
          Petty theft is a misdemeanor, but a theft conviction can follow you for years, especially with employers who weigh honesty
          and trustworthiness. Many petty theft cases resolve before trial, particularly for first-time offenders, through diversion,
          a reduced charge or a dismissal.
        </p>
      </Section>

      <Section title="Forms of petty theft" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Shoplifting and retail theft',
              body: 'Concealing store merchandise, leaving without paying, altering price tags, moving merchandise into other containers, or otherwise depriving a store of the full retail value. Ohio has no separate shoplifting statute; these are charged under ORC 2913.02.',
            },
            {
              title: 'Theft of personal property',
              body: "Taking someone's property without consent from a home, vehicle, workplace or anywhere else. Items worth under $1,000 are charged as petty theft, a misdemeanor.",
            },
            {
              title: 'Theft of services',
              body: 'Knowingly obtaining services without paying, or intending to avoid payment: leaving a restaurant without paying, illegal utility connections, professional services obtained by deception, or riding transit without paying the fare.',
            },
            {
              title: 'Theft by deception',
              body: 'Obtaining property or services through a false representation, misleading conduct or concealing material facts, such as using false identification to get goods. It can overlap with fraud offenses but is charged as petty theft when the value is under $1,000.',
            },
          ]}
        />
      </Section>

      <Section title="Petty theft penalties by value">
        <FactTable
          title="Minor misdemeanor: value under $150, no prior theft conviction"
          rows={[
            { label: 'Jail', value: 'None.' },
            { label: 'Fine', value: 'Up to $150, plus court costs and restitution.' },
            { label: 'Record', value: 'A conviction still creates a criminal record. This is the lowest classification and may resolve quickly.' },
          ]}
        />
        <FactTable
          title="First-degree misdemeanor: value $150 to $999"
          rows={[
            { label: 'Jail', value: 'Up to 180 days.' },
            { label: 'Fine', value: 'Up to $1,000.' },
            { label: 'Other penalties', value: 'Restitution to the victim, court costs, probation with conditions, community service.' },
            { label: 'Record', value: 'A permanent criminal record.' },
            { label: 'Also applies to', value: 'A theft under $150 when you have a prior theft conviction.' },
          ]}
        />
        <h3>Enhancements</h3>
        <p>
          Prior theft convictions raise the penalty. A second theft of property under $150 becomes a first-degree misdemeanor, and
          several priors can lift even a small theft to a felony. The court counts every prior theft-related conviction when setting the
          charge level, so a first theft charge is worth defending to avoid a later enhancement.
        </p>
        <p>
          Some thefts are raised regardless of value. Theft from an elderly person or disabled adult under ORC 2913.02(B)(3) is raised in
          degree. Theft of a firearm is a felony regardless of value, theft of a motor vehicle is a felony, and theft of drugs is
          enhanced.
        </p>
        <Callout title="Stores can also come after you civilly">
          Under ORC 2307.61, a retail merchant can seek the retail value of the merchandise, a civil penalty of up to $150 and attorney
          fees. Parents of a minor who shoplifts can also be held civilly liable. These civil demands are separate from the criminal case.
        </Callout>
      </Section>

      <Section title="What a theft conviction costs beyond the sentence" tone="ice">
        <p>
          A theft conviction speaks to honesty, so it weighs heavily in a background check. Many employers will not hire someone with a
          theft conviction, especially for jobs handling money, merchandise or sensitive information. Licenses in accounting, finance,
          law, healthcare and education may be denied or revoked. Housing applications are often rejected, banks may refuse to open
          accounts, and security clearances can be denied. For non-citizens, a theft conviction can trigger deportation as a crime
          involving moral turpitude. These effects last long after the sentence is served and the fines are paid.
        </p>
      </Section>

      <Section title="How a petty theft case moves through court">
        <Steps
          steps={[
            {
              title: 'Citation, arrest or summons, then arraignment',
              body: 'The case can start with a citation at the scene, an arrest or a summons. At arraignment the charges are read, bond conditions are set and you enter a plea. Misdemeanor theft defendants are often released on their own recognizance. A not guilty plea preserves your rights and leaves time to investigate.',
            },
            {
              title: 'Discovery and investigation',
              body: 'The prosecution must hand over its evidence: police reports, loss prevention reports, surveillance footage, witness statements and any statements you made. Reviewing it can expose gaps in the footage, a weak valuation, chain of custody problems, or support for defenses like lack of intent, mistaken identity or consent.',
            },
            {
              title: 'Negotiation and diversion',
              body: 'Most petty theft cases resolve before trial. Options include dismissal, a theft diversion program, a reduction to a minor misdemeanor or a plea that limits the consequences. Many Ohio courts offer diversion or intervention for first-time theft offenders, usually with theft prevention education, community service, restitution and a probationary period, followed by dismissal.',
            },
            {
              title: 'Trial',
              body: 'The prosecution must prove every element beyond a reasonable doubt, including that you knowingly obtained or exerted control over the property without consent and with the purpose to deprive the owner. At trial your attorney cross-examines the state’s witnesses, challenges the surveillance evidence and disputes the valuation.',
            },
          ]}
        />
      </Section>

      <Section title="Defenses to petty theft" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Lack of intent',
              body: 'Theft requires acting "knowingly" with the purpose to deprive the owner. If the taking was accidental, came from confusion or forgetfulness (an item left in a cart or pocket), or you did not intend to permanently deprive the owner, this defense may apply. Many shoplifting charges involve someone who forgot to pay or was distracted.',
            },
            {
              title: 'Consent or claim of right',
              body: 'A good-faith belief that you had permission, or a legitimate claim to the property, can defeat the charge. It comes up with shared property, property you believed was abandoned, or property you reasonably believed you were entitled to.',
            },
            {
              title: 'Mistaken identity',
              body: 'Identification in retail theft cases can be unreliable, especially when it rests only on surveillance footage. Challenging footage quality and witness identifications, or presenting alibi evidence, can lead to dismissal or acquittal.',
            },
            {
              title: 'Insufficient evidence',
              body: 'If the evidence does not prove beyond a reasonable doubt that you knowingly took the property without consent and with the purpose to deprive the owner, the charge should be dismissed. Footage may be unclear, testimony inconsistent, or the chain of custody flawed.',
            },
            {
              title: 'Disputing the value',
              body: 'Not a complete defense, but an overstated value can be challenged with independent valuations. A successful challenge can reduce a first-degree misdemeanor to a minor misdemeanor.',
            },
          ]}
        />
      </Section>

      <Section title="What the firm does on a theft case">
        <PointGrid
          points={[
            { title: 'Protects your rights early', body: 'Advises you on dealing with police and loss prevention, and on avoiding self-incriminating statements.' },
            { title: 'Investigates', body: 'Police reports, loss prevention reports, surveillance footage, witness statements and the rest of the evidence.' },
            { title: 'Reviews the footage', body: 'Looks for gaps, poor quality, inconsistencies or anything that contradicts the prosecution.' },
            { title: 'Disputes the value', body: 'To bring a first-degree misdemeanor down to a minor misdemeanor, or a charge down a classification.' },
            { title: 'Seeks diversion', body: 'Programs that end in dismissal when completed.' },
            { title: 'Negotiates', body: 'For dismissal, a reduced charge, alternative sentencing or a better plea agreement.' },
            { title: 'Tries the case', body: 'Challenges every element at trial, including intent, identification and ownership of the property.' },
            { title: 'Answers civil demands', body: 'Advises you on civil demand letters from retailers alongside the criminal case.' },
            { title: 'Seals the record', body: 'Handles record sealing and expungement applications under ORC 2953.32 for eligible clients.' },
          ]}
        />
        <p>
          The firm handles theft cases throughout Ohio, from shoplifting to more serious misdemeanor theft, and knows which courts offer
          diversion for first-time offenders. If you are charged anywhere in Ohio, <Link href="/contact">contact Jwayyed Law LLC</Link> to
          schedule a consultation. You can also read about the firm&apos;s <Link href="/criminal-defense">criminal defense practice</Link>{' '}
          or the article on <Link href="/our-law-firm/blog/shoplifting-ohio-first-offense">shoplifting charges for a first offense in Ohio</Link>.
        </p>
      </Section>

      <Section title="Record sealing after a theft conviction" tone="ice">
        <p>
          Under Ohio Revised Code 2953.32, a petty theft conviction may be eligible for sealing or expungement. As a misdemeanor, it is
          generally eligible after the waiting period if you meet the requirements. Sealing hides the conviction from most background
          checks, which matters more for theft than for most offenses. See{' '}
          <Link href="/criminal-defense/expungement-record-sealing">expungement and record sealing</Link> for the process.
        </p>
        <h3>Related charges</h3>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <LocationsWeServe title="Criminal Defense" />
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
