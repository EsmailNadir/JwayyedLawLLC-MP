import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, KeyFacts, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Will Contests Lawyer in Ohio | Columbus',
  description:
    'Contesting or defending a will in Ohio probate court: the four grounds, who has standing, and the three-month deadline under ORC 2107.76.',
  keywords: [
    'will contest lawyer Columbus OH',
    'will contest attorney Ohio',
    'contest a will Ohio',
    'undue influence will Ohio',
    'lack of testamentary capacity Ohio',
    'will contest deadline Ohio',
    'ORC 2107.71 will contest',
    'no-contest clause Ohio',
    'defending will contest Ohio',
  ],
  openGraph: {
    title: 'Will Contests Lawyer in Ohio | Columbus | Jwayyed Law LLC',
    description: 'Contesting and defending Ohio wills for lack of capacity, undue influence, fraud or improper execution. (614) 285-5482.',
    url: 'https://www.jjlawohio.com/other-services/will-contests',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/other-services/will-contests' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Probate', href: '/other-services/probate' },
  { label: 'Will Contests', href: '/other-services/will-contests' },
];

const faqs = [
  {
    question: 'What are the legal grounds to contest a will in Ohio?',
    answer:
      'Ohio recognizes four main grounds under ORC 2107.71. (1) Lack of testamentary capacity: the testator must have been "of sound mind" at signing, meaning they understood the nature and extent of their property, knew who their natural heirs were, understood they were making a will, and could hold these together in an orderly plan. (2) Undue influence: someone in a position of trust or authority over the testator overcame the testator\'s free will and substituted their own wishes. (3) Fraud: the testator was deceived about the document\'s contents or the circumstances of signing. (4) Improper execution: the will fails Ohio\'s formal requirements under ORC 2107.03 (the testator\'s signature and two competent witnesses who signed in the testator\'s presence). Any of these, if the contestant proves it, can make the will invalid.',
  },
  {
    question: 'Who has legal standing to contest a will in Ohio?',
    answer:
      "Under ORC 2107.71, any person with an interest in the outcome, meaning their financial interest would be affected if the will is found invalid. Contestants are usually people who would inherit more under a prior will, or who would inherit under Ohio's intestate succession statute (ORC 2105.06) if there were no valid will. Beneficiaries named in the contested will generally cannot contest it, unless a prior will would leave them more. An estate creditor generally lacks standing. Standing depends on the facts and should be checked by an attorney before filing.",
  },
  {
    question: "What is Ohio's deadline to contest a will?",
    answer:
      "Under ORC 2107.76, a will contest must be filed within three months after the will is admitted to probate. The period runs from the date the probate court enters the order admitting the will, not from the date of death or from when you learned of the will. Ohio courts treat it as a jurisdictional deadline that cannot be extended for mistake, ignorance or hardship, so missing it almost always ends the contest. If you believe a will is invalid, consult an attorney as soon as the will is admitted, before gathering more evidence, so the deadline is protected.",
  },
  {
    question: 'What is undue influence and how is it proven in an Ohio will contest?',
    answer:
      "Undue influence is when a person in a position of trust, confidence or authority over the testator uses it to substitute their own wishes in making or changing a will. Ohio courts have found it with caregivers who isolated the testator from family, adult children who controlled a parent's finances and communications, and romantic partners who moved in with a vulnerable older adult shortly before the will changed. Proof requires: the testator's susceptibility (illness, age, isolation or dependence); the influencer's opportunity; the influencer's disposition to influence for an improper purpose; and a result that would not have happened without the influence. Direct evidence is rare, so these cases rest on circumstantial evidence such as medical records, witness testimony, financial records and communications.",
  },
  {
    question: 'What is a no-contest clause in an Ohio will and is it enforceable?',
    answer:
      'A no-contest clause (also called an in terrorem clause) says that a beneficiary who contests the will forfeits their inheritance. Ohio expressly recognizes these clauses under ORC 2107.15, which provides that a condition that a devisee who contests the will receives nothing is valid and enforceable. Ohio courts have recognized an exception: if the contestant had probable cause, meaning a reasonable basis to believe the contest might succeed, the clause may not be enforced. A contest filed with strong evidence of incapacity or undue influence is therefore less likely to trigger forfeiture than one filed on weak or speculative grounds.',
  },
  {
    question: 'What happens if a will contest is successful in Ohio?',
    answer:
      "The estate is distributed as if that will never existed. If an earlier valid will exists, it governs. If not, the estate passes under Ohio's intestate succession statute (ORC 2105.06) in a fixed order: surviving spouse, then children and their descendants, then parents, then siblings and their descendants, and so on. The result depends on whether a prior will exists and who the heirs at law are. A successful contest does not automatically mean the contestant receives more; sometimes the shares change without growing.",
  },
  {
    question: 'How do you defend a will against a contest in Ohio?',
    answer:
      "By showing the testator had testamentary capacity and was free from undue influence at signing. Key evidence includes: the drafting attorney's notes and testimony (attorneys often record their observations of capacity and freedom from influence); medical records on the testator's cognitive status at the time; testimony from witnesses who saw the testator near the signing; evidence that the will matches the testator's stated wishes and earlier estate planning; and bank and financial records showing no unusual transfers. A will signed with safeguards such as a capacity assessment, a video of the signing or an independent attorney consultation is far easier to defend. Jwayyed Law LLC represents both those contesting wills and those defending wills and estates against unfounded challenges.",
  },
  {
    question: 'Is a will contest worth it financially?',
    answer:
      'Sometimes. Weigh: the value of the estate and the difference between what you receive under the current will and under a prior will or intestacy; the strength of your grounds (a clear case of incapacity or fraud differs from a weak suspicion of influence); the cost of litigation, including attorney fees, expert witness fees (medical experts on capacity are common) and depositions; the likelihood of success; and non-financial factors, such as vindicating a family member whose wishes you believe were overridden. Many will contest attorneys work on a contingency or hybrid fee basis for strong cases. The firm offers confidential consultations to assess whether you have grounds, what the process involves and whether the potential benefit justifies the cost.',
  },
];

const RELATED = [
  { href: '/other-services/probate', title: 'Probate administration', subtitle: 'Estate administration through Ohio probate court' },
  { href: '/other-services/estate-disputes', title: 'Estate disputes', subtitle: 'Executor misconduct, trust disputes and beneficiary claims' },
  { href: '/other-services/mediation', title: 'Mediation', subtitle: 'Resolving estate disputes without a full trial' },
  { href: '/other-services/guardianships', title: 'Guardianships', subtitle: 'Protecting vulnerable adults and minors' },
];

export default function WillContestsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Will contests in Ohio"
        description="A will contest must be filed within three months after the will is admitted to probate, under ORC 2107.76. Miss that window and the contest is lost, however strong the evidence."
      />

      <KeyFacts
        facts={[
          { figure: '3 months', label: 'after the will is admitted to probate to file a contest (ORC 2107.76)' },
          { figure: '4 grounds', label: 'lack of capacity, undue influence, fraud and improper execution (ORC 2107.71)' },
          { figure: '2 witnesses', label: "required for a properly executed Ohio will, signing in the testator's presence" },
        ]}
      />

      <Section
        title="What a will contest is"
        intro={
          <p>
            A will contest is a legal challenge to the validity of a deceased person&rsquo;s will, brought in the probate court of the
            county where the will was admitted. For Columbus residents that is usually the Franklin County Probate Court.
          </p>
        }
      >
        <p>
          Will contests are governed by ORC 2107.71 through 2107.76. The parties are almost always family members, and the evidence
          (medical records, witness testimony, financial transactions) is often incomplete and disputed.
        </p>
        <p>
          They arise when heirs or other interested parties believe the will being probated does not reflect the decedent&rsquo;s true
          wishes: the decedent lacked mental capacity, a caregiver, family member or romantic partner manipulated them into changing it,
          someone deceived them about what they were signing, or the will was not executed with the formalities Ohio law requires.
        </p>
        <p>
          Jwayyed Law LLC handles will contests on both sides: for contestants who want a will set aside, and for executors,
          beneficiaries and estates defending a properly executed will against unfounded challenges.
        </p>
      </Section>

      <Section title="Grounds to contest a will" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Lack of testamentary capacity',
              body: 'The most frequently litigated ground. Ohio requires the testator to be "of sound mind and memory" at signing (ORC 2107.02): to (1) understand the nature of making a will; (2) know the nature and extent of their property; (3) know the natural objects of their bounty, meaning who their family members are; and (4) understand how these relate and form an orderly plan.',
            },
            {
              title: 'Undue influence',
              body: "The free will of a vulnerable testator is overborne by someone with the opportunity and motive to exploit their weakness. It leaves little direct evidence and is often harder to prove.",
            },
            { title: 'Fraud', body: 'The testator was deceived about the contents of the document or the circumstances of signing.' },
            {
              title: 'Improper execution',
              body: "The will fails ORC 2107.03: the testator's signature and two competent witnesses who signed in the testator's presence.",
            },
          ]}
        />
        <h3>Capacity with a dementia diagnosis</h3>
        <p>
          A diagnosis of Alzheimer&rsquo;s disease, dementia or another cognitive condition does not automatically invalidate a will.
          Capacity is judged at the moment of signing, and a person can have &ldquo;lucid intervals&rdquo; of sufficient capacity even in
          later stages of dementia. Medical records from around the signing, the drafting attorney&rsquo;s notes and testimony from
          witnesses who saw the testator are the key evidence.
        </p>
        <h3>What undue influence looks like</h3>
        <p>
          A classic pattern: an adult child moves in with an elderly parent after the parent&rsquo;s health declines, controls all
          communications and accounts, drives the parent to attorney appointments and is present at the signing, and the new will cuts
          out every other sibling. Ohio courts look at the whole picture: the testator&rsquo;s physical and mental condition, isolation
          from other family, the beneficiary&rsquo;s role in starting and attending the estate planning, whether the will fits the
          testator&rsquo;s wishes expressed over the years, and financial transactions near the signing.
        </p>
      </Section>

      <Section title="The three-month deadline">
        <Callout title="ORC 2107.76: three months, no extensions">
          The clock starts when the probate court enters the order admitting the will: not when you receive notice, not when the estate
          attorney calls, and not when you first suspect a problem. Probate courts do not typically extend it for any reason short of
          fraud in obtaining the admission order itself. Consult an attorney as soon as you learn that a will you believe is invalid has
          been admitted.
        </Callout>
      </Section>

      <Section title="What happens if the contest succeeds" tone="ice">
        <p>
          The estate passes under the most recent prior valid will. If there is none, it passes under Ohio&rsquo;s intestate succession
          statute, ORC 2105.06.
        </p>
        <FactTable
          title="Ohio intestate order"
          rows={[
            { label: '1. Surviving spouse', value: 'First, with adjustments if there are also children from a prior relationship.' },
            { label: '2. Descendants', value: 'Children and grandchildren, in equal shares.' },
            { label: '3. Parents', value: 'If there is no spouse or descendant.' },
            { label: '4. Siblings', value: 'Siblings and their descendants, and so forth.' },
          ]}
        />
        <p>
          Who would benefit from setting the will aside, and how, decides whether a contest makes sense. The firm can map the intestate
          succession for your family and explain the likely result of a successful challenge.
        </p>
      </Section>

      <Section title="Related pages">
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <LocationsWeServe title="Other Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
