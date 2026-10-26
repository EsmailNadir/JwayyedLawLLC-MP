import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Ohio Arbitration Lawyer | Columbus',
  description:
    'Arbitration in Ohio under ORC Chapter 2711: enforcing or challenging arbitration clauses, AAA and JAMS hearings, and confirming or vacating awards.',
  keywords: [
    'arbitration lawyer Columbus OH',
    'arbitration attorney Ohio',
    'Ohio arbitration lawyer',
    'ORC 2711 arbitration attorney',
    'AAA arbitration Columbus Ohio',
    'JAMS arbitration Ohio',
    'binding arbitration lawyer Ohio',
    'arbitration agreement review Columbus',
    'vacate arbitration award Ohio',
    'business arbitration attorney Columbus',
    'employment arbitration lawyer Ohio',
  ],
  openGraph: {
    title: 'Ohio Arbitration Lawyer | Columbus | Jwayyed Law LLC',
    description: 'AAA, JAMS and private arbitration in Ohio, from the clause to confirming or vacating the award.',
    url: 'https://www.jjlawohio.com/other-services/arbitration',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/other-services/arbitration' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Arbitration', href: '/other-services/arbitration' },
];

const faqs = [
  {
    question: 'What is binding arbitration and how is it different from litigation?',
    answer:
      'Binding arbitration is a private process in which a neutral arbitrator hears evidence and arguments from both sides and issues a final, enforceable decision called an award. Unlike a court judgment, an award is almost impossible to appeal on the merits. Ohio courts will confirm a binding award under ORC 2711.09 and vacate it only on very narrow grounds, such as fraud, corruption or an arbitrator exceeding their authority, under ORC 2711.10. Litigation is public, creates a full appellate record and gives both parties broader rights to challenge adverse rulings.',
  },
  {
    question: 'Can you refuse to arbitrate even if your contract has an arbitration clause?',
    answer:
      'Generally no. Ohio and federal courts enforce a valid arbitration clause under ORC 2711.01 and the Federal Arbitration Act. There are limited defenses: a court may refuse to enforce a clause that is unconscionable, was induced by fraud, does not cover the dispute, or involves a claim that is not arbitrable by law (such as certain statutory discrimination claims). Ohio courts apply both federal and state unconscionability standards, looking at whether the clause is one-sided, whether the costs are prohibitive and whether there was a meaningful choice at signing.',
  },
  {
    question: 'How is an arbitrator chosen?',
    answer:
      'It depends on the rules that govern the arbitration. Under the AAA Commercial Rules, each party receives a list of proposed arbitrators, strikes names it objects to and ranks the rest; the AAA appoints the highest-ranked candidate acceptable to both. JAMS uses a similar list-and-strike process. A privately drafted agreement can set any method the parties choose. In high-stakes commercial disputes, parties often agree on a three-arbitrator panel: each side appoints one, and those two choose the neutral chair.',
  },
  {
    question: 'How long does arbitration take in Ohio?',
    answer:
      'Usually less time than litigation, but it varies with complexity and the governing rules. A straightforward consumer or employment matter under streamlined AAA rules might take three to six months from demand to award. A complex commercial arbitration with extensive discovery, several hearings and expert witnesses can take eighteen months or more. Discovery is usually narrower than in court, which shortens the timeline but also limits what evidence each side can compel.',
  },
  {
    question: 'Can you appeal an arbitration award in Ohio?',
    answer:
      "Only in very limited ways. Under ORC 2711.10, an Ohio court may vacate an award only if it was procured by corruption, fraud or undue means; if an arbitrator showed evident partiality or corruption; if the arbitrators committed misconduct that prejudiced a party's rights; or if they exceeded their powers. A legal error or a result you disagree with is generally not enough. That finality is the point of arbitration, so before entering it, expect the award to be the end of the road.",
  },
  {
    question: 'What does arbitration cost compared to litigation?',
    answer:
      'Arbitration has filing fees and arbitrator compensation that can make it more expensive than court for small claims. AAA filing fees for commercial disputes run from several hundred dollars for claims under $10,000 to thousands for larger claims, and arbitrators typically charge $300 to $600 per hour or more. In employment and consumer cases, AAA rules require the business, not the employee or consumer, to pay most of the costs. Court filing fees are modest, but attorney fees and the length of litigation can far exceed arbitration costs in complex cases. Which is cheaper depends on the size and complexity of the dispute.',
  },
  {
    question: 'Is arbitration confidential?',
    answer:
      'Usually. Court proceedings in Ohio are public record, but arbitration hearings, evidence and awards are typically private. Most institutional rules, including AAA and JAMS, have confidentiality provisions that stop parties from disclosing the arbitration or its outcome without consent. If a party moves to confirm or vacate the award in Ohio court under ORC 2711.09 or 2711.10, those filings become public. Some employers and businesses use arbitration specifically to keep precedent-setting decisions out of public view.',
  },
  {
    question: 'What happens if the other party refuses to participate in arbitration?',
    answer:
      "The other side may petition an Ohio court to compel arbitration under ORC 2711.03. The court checks whether a valid arbitration agreement exists and whether the dispute falls within it. If both are true, it orders the reluctant party to arbitrate. If that party still refuses, most institutional rules let the arbitrator issue an award on the participating party's evidence after proper notice.",
  },
];

const RELATED = [
  { href: '/other-services', title: 'All other legal services', subtitle: 'Estate planning, probate and dispute resolution' },
  { href: '/other-services/mediation', title: 'Mediation in Ohio', subtitle: 'Confidential negotiation with a neutral mediator' },
  { href: '/business/contract-drafting-review', title: 'Contract drafting and review', subtitle: 'Arbitration clauses and the contracts around them' },
  { href: '/business/business-litigation', title: 'Business litigation', subtitle: 'Business disputes that go to court' },
];

export default function ArbitrationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Arbitration in Ohio"
        description="A binding arbitration award can be confirmed as a court judgment under ORC 2711.09 and vacated only on narrow grounds. A petition to vacate generally has to be filed within ninety days."
      />

      <Section
        title="How arbitration works in Ohio"
        intro={
          <p>
            In arbitration, the parties submit their dispute to one or more neutral arbitrators who issue a binding or non-binding
            decision called an award.
          </p>
        }
      >
        <p>
          ORC Chapter 2711, the Ohio Arbitration Act, sets when arbitration agreements are enforceable, how arbitrators are appointed
          and the narrow grounds for a court to vacate or modify an award. The Federal Arbitration Act, 9 U.S.C. &sect; 1 et seq.,
          applies to contracts involving interstate commerce and generally preempts conflicting state rules.
        </p>
        <p>
          Arbitration clauses appear in employment contracts, consumer product terms, credit card agreements, franchise agreements,
          residential leases and most other commercial contracts, and most people sign dozens each year without noticing. When a dispute
          arises, the clause often means it must be resolved outside court under rules set by the American Arbitration Association (AAA)
          or JAMS.
        </p>
        <p>
          Jwayyed Law LLC explains clients&rsquo; rights under arbitration agreements, represents them at hearings before AAA, JAMS and
          private arbitrators, and handles court proceedings to confirm or challenge awards, for businesses defending a claim and for
          individuals required to arbitrate with an employer or corporation. Call <a href="tel:6142855482">(614) 285-5482</a> to discuss
          your situation.
        </p>
      </Section>

      <Section title="Arbitration, mediation and litigation" tone="ice">
        <FactTable
          title="How the three compare"
          rows={[
            {
              label: 'Litigation',
              value: 'In Ohio Common Pleas Court or federal court. Formal discovery, rules of evidence, the right to a jury trial and a full appeal. The most public path, and often the slowest and most expensive.',
            },
            {
              label: 'Mediation',
              value: 'A neutral mediator helps the parties negotiate a voluntary settlement but cannot impose a decision. Entirely confidential.',
            },
            {
              label: 'Arbitration',
              value: 'A binding decision, like litigation, from a private proceeding, like mediation, with narrower discovery and very limited appeal rights.',
            },
          ]}
        />
        <p>
          A binding award is confirmed and enforced as a judgment under ORC 2711.09. Non-binding arbitration, used in some insurance and
          consumer settings, lets either party reject the award and go to trial. Most commercial clauses require binding arbitration.
          Disputes end quickly and conclusively, but the arbitrator&rsquo;s errors of fact or law cannot be corrected on appeal absent
          extraordinary circumstances.
        </p>
      </Section>

      <Section title="When an arbitration clause can be enforced">
        <p>
          Under ORC 2711.01, a written agreement to arbitrate is valid, irrevocable and enforceable except on grounds that exist at law
          or in equity for revoking any contract. Courts apply ordinary contract principles (offer, acceptance, consideration and mutual
          assent) to decide whether the clause binds you.
        </p>
        <PointGrid
          points={[
            { title: 'Fraud', body: 'The agreement to arbitrate was induced by fraud.' },
            { title: 'Duress', body: 'The clause was accepted under duress.' },
            { title: 'Lack of consideration', body: 'There was no consideration for the agreement.' },
            {
              title: 'Unconscionability',
              body: 'Procedural (buried in fine print with no chance to negotiate) and substantive (terms so one-sided they shock the conscience).',
            },
          ]}
        />
        <Callout title="Class action waivers">
          Many clauses require each party to arbitrate only individual claims and bar class or collective proceedings. The U.S. Supreme
          Court has broadly upheld these waivers under federal law, so consumers and employees bound by them generally cannot join
          together to challenge widespread corporate conduct, even where small individual harms are only worth pursuing as a class. The
          firm identifies the scope of the arbitration clause and any class action waiver when it reviews a contract.
        </Callout>
      </Section>

      <Section title="The arbitration process" tone="ice">
        <Steps
          steps={[
            {
              title: 'Demand',
              body: 'One party files a demand with the arbitration organization (typically AAA or JAMS), or directly with the other party when no institutional rules apply. It sets out the claims, the amount sought and the basis for arbitration.',
            },
            { title: 'Answer', body: 'The respondent answers and may assert counterclaims.' },
            { title: 'Arbitrator selection', body: 'Usually a list-and-strike process managed by the institution.' },
            {
              title: 'Scheduling order',
              body: 'Covers the exchange of documents, any limited depositions, pre-hearing briefs and the hearing date.',
            },
            {
              title: 'Hearing',
              body: 'A streamlined trial: opening statements, examination and cross-examination of witnesses, documents and closing arguments. Formal rules of evidence do not apply in most arbitrations, so the arbitrator may consider any relevant evidence.',
            },
            { title: 'Award', body: 'A written award, typically within thirty days under AAA rules.' },
          ]}
        />
        <FactTable
          title="After the award"
          rows={[
            {
              label: 'Confirm (ORC 2711.09)',
              value: 'The prevailing party moves in Ohio court to confirm the award, turning it into a judgment enforceable through the full range of collection remedies.',
            },
            {
              label: 'Vacate (ORC 2711.10)',
              value: 'A narrow window, generally ninety days from service of the award, to petition for vacatur.',
            },
            { label: 'Compel (ORC 2711.03)', value: 'If a bound party refuses to arbitrate, the other side can ask the court to order it.' },
          ]}
        />
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
