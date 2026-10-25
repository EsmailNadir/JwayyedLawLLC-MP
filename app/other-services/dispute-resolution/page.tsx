import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { FactTable, LinkGrid, PointGrid, Section } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Dispute Resolution Lawyer in Ohio',
  description:
    'Mediation under ORC Chapter 2710 and arbitration under ORC Chapter 2711: how each works in Ohio and which disputes suit them.',
  keywords: ['dispute resolution lawyer Columbus OH', 'mediation attorney Ohio', 'arbitration lawyer', 'Franklin County dispute resolution attorney'],
  openGraph: {
    title: 'Dispute Resolution Lawyer in Ohio | Jwayyed Law LLC',
    description: 'Mediation and arbitration in Ohio, and when each one fits.',
    url: 'https://www.jjlawohio.com/other-services/dispute-resolution',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/other-services/dispute-resolution' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Dispute Resolution', href: '/other-services/dispute-resolution' },
];

const faqs = [
  {
    question: 'What is the difference between mediation and arbitration?',
    answer:
      'Both are alternative dispute resolution (ADR), but they work differently. In mediation, a neutral mediator helps the parties negotiate but cannot impose a decision, so any settlement is voluntary. In arbitration, an arbitrator (or a panel) hears evidence and arguments and issues a decision called an award. Under ORC 2711.09, a binding award can be confirmed by an Ohio court and enforced like a judgment. Arbitration is a private court proceeding; mediation is a structured negotiation.',
  },
  {
    question: 'Is arbitration binding in Ohio?',
    answer:
      "It can be either, depending on what the parties agreed. With binding arbitration, often set by a contract clause, the award is final and enforceable. Under ORC 2711.09, a party may apply to the court of common pleas to confirm it, and the confirmed award has the same force as a court judgment. Non-binding arbitration lets either party reject the award and go to court. ORC Chapter 2711 governs the validity, enforcement and vacatur of arbitration agreements and awards in Ohio.",
  },
  {
    question: 'Is mediation confidential in Ohio?',
    answer:
      'Yes. ORC Chapter 2710, the Ohio Mediation Act, protects mediation communications. Under ORC 2710.03 they are generally confidential and may not be disclosed or used as evidence in later court or arbitration proceedings, so parties can speak openly. Narrow exceptions apply, such as when disclosure is needed to prevent a crime or when all parties consent in writing. Court litigation, by contrast, is public.',
  },
  {
    question: 'When is ADR a good option for resolving a dispute?',
    answer:
      'When the parties want a faster, cheaper result than litigation; when confidentiality matters (court records are public, ADR is private); when an ongoing business or personal relationship is worth keeping; or when the parties want more control over the process and outcome. It works well for business disputes, contract disagreements, employment conflicts, neighbor disputes, landlord-tenant issues and family business disagreements. It may fit less well when a party needs a court order immediately, when legal precedent needs to be set, or when one party is acting in bad faith.',
  },
  {
    question: 'Can a court order mediation in Ohio?',
    answer:
      'Yes. Under Ohio Civil Rule 16, Ohio courts can order the parties in a civil case to mediate as part of pretrial case management. Many Ohio courts, including courts in Franklin County, run court-connected ADR programs that routinely refer civil cases to mediation. Parties can also agree to mediate at any point, before or after a lawsuit starts. Mediating, whether ordered or voluntary, does not waive your legal rights; if it fails, the case continues in court.',
  },
  {
    question: 'How long does mediation take?',
    answer:
      'Most sessions last between three and eight hours. Simple two-party disputes with straightforward facts can often be resolved in one half-day or full-day session. Multi-party commercial disputes or cases with complicated damages may need several sessions over days or weeks. The parties control the schedule, unlike litigation, where court dockets and procedural rules set the timing. Most mediated disputes that settle do so within one to three sessions.',
  },
  {
    question: 'What happens if mediation fails?',
    answer:
      "You keep all your legal rights. Under the confidentiality protections of ORC Chapter 2710, nothing said or offered in mediation can be used as an admission or as evidence later. The parties may go to arbitration (if agreed), litigate, or try other ways to resolve it. Mediation that does not settle often still narrows the disputed issues and shows each side the strengths and weaknesses of its case, which can lead to a settlement later.",
  },
  {
    question: 'Do I need an attorney for mediation or arbitration?',
    answer:
      "Representation is not required in most mediation or arbitration proceedings, but it is strongly advisable when significant money, complex legal issues or important business or personal interests are involved. In mediation, an attorney explains your rights, evaluates settlement proposals and keeps you from agreeing to unfavorable or unenforceable terms. In arbitration, rules of evidence and procedure still apply, if less formally than in court, and an attorney presents your case, cross-examines witnesses and challenges the other side's evidence. Jwayyed Law LLC represents clients in both mediation and arbitration throughout Ohio.",
  },
];

const SERVICES = [
  { href: '/other-services/mediation', title: 'Mediation', subtitle: 'Confidential, facilitated negotiation where the parties control the outcome' },
  { href: '/other-services/arbitration', title: 'Arbitration', subtitle: 'Private dispute resolution with a binding decision enforceable under ORC 2711.09' },
];

export default function DisputeResolutionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Dispute resolution in Ohio"
        description="Mediation and arbitration resolve disputes outside a public courtroom. Ohio protects mediation communications under ORC Chapter 2710 and enforces arbitration awards under ORC Chapter 2711."
      />

      <Section
        title="Two ways to resolve a dispute outside court"
        intro={
          <p>
            For a business relationship, a contract, an employment matter or a neighbor conflict, alternative dispute resolution (ADR)
            can be faster, cheaper and more private than litigation, and leaves the parties more control over the outcome.
          </p>
        }
      >
        <p>
          Jwayyed Law LLC handles mediation and arbitration for clients in Columbus, Cincinnati, Dayton and throughout Ohio, and can help
          you decide whether ADR suits your dispute.
        </p>
        <LinkGrid links={SERVICES} columns={2} />
      </Section>

      <Section title="Mediation and arbitration compared" tone="ice">
        <FactTable
          title="Mediation (ORC Chapter 2710, the Ohio Mediation Act)"
          rows={[
            { label: 'Who decides', value: 'The parties. A neutral mediator facilitates the negotiation but does not decide the case.' },
            {
              label: 'Confidentiality',
              value: 'Under ORC 2710.03, mediation communications are confidential and generally cannot be introduced as evidence in later court or arbitration proceedings.',
            },
            {
              label: 'Settlement rate',
              value: 'Studies consistently show settlement in 70 to 85 percent of cases when both parties participate in good faith.',
            },
            { label: 'Cost and time', value: 'Typically a fraction of full litigation, completed in days or weeks instead of years.' },
          ]}
        />
        <FactTable
          title="Arbitration (ORC Chapter 2711)"
          rows={[
            {
              label: 'Who decides',
              value: 'An arbitrator, or a panel, acting as a private judge. The parties present evidence, call witnesses and argue, and the arbitrator issues a written award.',
            },
            {
              label: 'Agreements to arbitrate',
              value: 'Under ORC 2711.01, agreements to arbitrate future disputes are valid and enforceable, which is why the clauses appear in many commercial, employment and consumer contracts.',
            },
            { label: 'Binding awards', value: 'Final, and may be confirmed by an Ohio court under ORC 2711.09, making them as enforceable as a court judgment.' },
            { label: 'Non-binding awards', value: 'Either party may reject the award and go to court.' },
          ]}
        />
      </Section>

      <Section title="Court-referred mediation">
        <p>
          Under Ohio Civil Rule 16, Ohio courts have broad authority to refer civil cases to mediation as part of pretrial case
          management. Many courts in Franklin County and across Ohio run court-connected ADR programs and keep rosters of certified
          mediators. Ohio Supreme Court Rule 16 sets standards for certifying mediators in Ohio. Court-referred mediation does not waive
          any legal rights: if it fails, the litigation continues. Many disputes that look headed for trial settle this way.
        </p>
      </Section>

      <Section title="Disputes suited to ADR" tone="ice">
        <PointGrid
          points={[
            { title: 'Business and commercial', body: 'Contract disagreements, partnership conflicts, vendor disputes and business-to-business claims.' },
            { title: 'Employment', body: 'Wrongful termination, wage and hour claims, non-compete enforcement and workplace conflicts.' },
            { title: 'Landlord and tenant', body: 'Security deposit claims, lease disagreements and property damage disputes.' },
            { title: 'Construction', body: 'Contractor disputes, subcontractor claims and construction defect claims.' },
            { title: 'Neighbor and property', body: 'Boundary disputes, easement disagreements and nuisance claims.' },
            { title: 'Family business', body: 'Succession planning disputes, buy-sell agreement conflicts and ownership transitions.' },
          ]}
        />
        <p>
          Privacy is a major reason businesses choose ADR. Court proceedings are public record, while ADR proceedings and settlements are
          confidential, which protects proprietary information and avoids publicity.
        </p>
      </Section>

      <Section title="What the firm does">
        <p>
          Jwayyed Law LLC represents clients going into mediation to keep a business relationship intact, responding to an arbitration
          demand under a contract clause, or looking for a way to resolve a conflict without litigation. Call (614) 285-5482 to schedule
          a consultation. For more detail on each process, see <Link href="/other-services/mediation">mediation</Link> and{' '}
          <Link href="/other-services/arbitration">arbitration</Link>.
        </p>
      </Section>

      <LocationsWeServe title="Other Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
