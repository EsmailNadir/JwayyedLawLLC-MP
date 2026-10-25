import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import { Callout, FactTable, LinkGrid, PointGrid, Section, Steps } from '@/components/practice';

export const metadata: Metadata = {
  title: 'Mediation Attorney in Ohio | Columbus',
  description:
    'Confidential mediation for civil, business, landlord-tenant and estate disputes in Ohio, under the Uniform Mediation Act, ORC Chapter 2710.',
  keywords: [
    'mediation attorney Columbus OH',
    'mediation services Ohio',
    'Ohio mediation attorney',
    'mediation costs Ohio',
    'Ohio Uniform Mediation Act',
    'civil mediation Columbus',
    'business mediation Ohio',
    'landlord tenant mediation Columbus',
    'estate mediation Ohio',
    'ORC 2710 mediation',
    'alternative dispute resolution Ohio',
  ],
  openGraph: {
    title: 'Mediation Attorney in Ohio | Columbus | Jwayyed Law LLC',
    description: 'Confidential mediation for civil, business, landlord-tenant and estate disputes in Ohio.',
    url: 'https://www.jjlawohio.com/other-services/mediation',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/other-services/mediation' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Dispute Resolution', href: '/other-services/dispute-resolution' },
  { label: 'Mediation', href: '/other-services/mediation' },
];

const faqs = [
  {
    question: 'What is mediation and how does it differ from going to court?',
    answer:
      "Mediation is a voluntary, confidential process in which a neutral third party, the mediator, helps the parties reach a resolution they both accept. A mediator does not decide who wins. The mediator helps each side understand the other's position, finds common ground, explores settlement options and drafts a written agreement if the parties settle. Court litigation is adversarial, public, expensive and slow: a civil case in Franklin County Common Pleas Court can take two to four years from filing to trial. Mediation is private, faster (often one day to several sessions) and much less expensive, and because both parties agreed to the result, it is more likely to be honored.",
  },
  {
    question: 'When do Ohio courts order mediation?',
    answer:
      'Ohio Rule of Civil Procedure 16 lets courts order parties to mediation and other ADR at any pretrial conference, and many Ohio courts have standing orders requiring mediation before trial in certain case types. Franklin County Common Pleas Court often orders mediation in business disputes, personal injury, real estate and breach of contract cases. The Franklin County Domestic Relations Court strongly encourages or requires it in divorce and custody cases. Probate courts order it in contested estate and guardianship matters. Parties can also agree to private mediation at any time: before a lawsuit, during it, or even during trial.',
  },
  {
    question: 'What happens during the mediation process?',
    answer:
      'The mediator opens by explaining the process, ground rules and confidentiality. Each party then presents its view of the dispute without interruption. In a joint session, everyone sits together while the mediator guides the discussion. In private caucuses, the mediator meets each party separately to discuss interests, concerns and possible terms in confidence, often moving back and forth between them. If the parties agree, the mediator helps draft a written settlement agreement for them to sign. If not, they keep all their legal rights and can go to court.',
  },
  {
    question: 'What confidentiality protections apply to Ohio mediation?',
    answer:
      "Ohio's Uniform Mediation Act (ORC Chapter 2710), which took effect in 2005, protects mediation communications. Under ORC 2710.06, statements made by any party, the mediator or another participant during mediation are confidential and may not be disclosed in a later legal proceeding. Admissions, offers and negotiating positions cannot be used against a party in court, and the mediator cannot be compelled to testify about what was said. Narrow exceptions cover threats of violence, evidence of criminal activity and information that mandatory reporting laws require.",
  },
  {
    question: 'What types of cases are suitable for mediation in Ohio?',
    answer:
      'Almost any civil dispute, especially where the parties have an ongoing relationship or want a faster, cheaper result than court. Common Ohio examples: business disputes (breach of contract, partnership and LLC dissolution, non-compete enforcement, vendor disputes); real estate disputes (purchase agreements, boundaries and easements, landlord-tenant); estate and probate disputes (will contests, trust disputes, executor misconduct); family law (divorce, custody, parenting time, child support, property division); personal injury; employment; and neighbor disputes. Cases involving domestic violence, ongoing criminal conduct or severe power imbalances may not suit mediation without added safeguards.',
  },
  {
    question: 'What can a mediator do, and what are they prohibited from doing?',
    answer:
      "A mediator facilitates communication, helps the parties find their underlying interests (as distinct from stated positions), explores creative solutions and helps draft a clear settlement agreement. A mediator can explain how Ohio courts have handled similar disputes, help the parties see the risks and costs of litigation, and reality-test extreme positions. A mediator cannot make binding decisions (that is arbitration), give legal advice to either party, force a party to accept a settlement, promise confidentiality beyond the statutory exceptions, or continue if a party withdraws. A mediator who is also an attorney must avoid forming an attorney-client relationship with either party and must stay strictly neutral.",
  },
  {
    question: 'How much does mediation cost in Ohio and how long does it take?',
    answer:
      "It depends on the mediator's hourly rate and the complexity of the dispute. Many private mediators in Columbus charge between $150 and $350 per hour, shared between the parties. A half-day session might cost each party $300 to $700; a full day, $500 to $1,200. A single day of litigation can run several thousand dollars per side in attorney fees alone, before expert witnesses, court costs and the two to four years of legal fees leading to trial. Court-connected programs, available in some Ohio courts for lower-stakes cases, may cost less or nothing. Most mediations resolve in one to three sessions; complex or multi-party cases may need more.",
  },
  {
    question: 'If we reach an agreement in mediation, is it legally binding?',
    answer:
      'Yes, once both parties sign it, because a mediation agreement is a contract. In a pending Ohio court case, it can be incorporated into a consent judgment entry, which gives it the force of a court order enforceable through contempt. Before a lawsuit, it is enforced as a contract under Ohio law. Under ORC 2710.07, a mediated agreement that is signed and not repudiated within 3 days is enforceable by a court. Each party should have its own attorney review the agreement before signing so it covers every issue and its terms are clear and enforceable. The firm represents parties going into mediation and reviews agreements already reached.',
  },
];

const RELATED = [
  { href: '/other-services/arbitration', title: 'Arbitration', subtitle: 'Binding alternative dispute resolution' },
  { href: '/other-services/will-contests', title: 'Will contests', subtitle: 'Contesting or defending the validity of a will' },
  { href: '/other-services/estate-disputes', title: 'Estate disputes', subtitle: 'Conflicts in estate and probate matters' },
  { href: '/other-services/dispute-resolution', title: 'Dispute resolution', subtitle: 'An overview of ADR options in Ohio' },
];

export default function MediationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Mediation in Ohio"
        description="A civil lawsuit in Ohio can take two to four years to reach trial. Mediation is confidential under ORC Chapter 2710 and most disputes that settle do so in one to three sessions."
      />

      <Section
        title="Why parties choose mediation"
        intro={
          <p>
            Litigation is expensive, slow and public. A civil lawsuit in Ohio can take two to four years from filing to trial and cost
            each side tens of thousands of dollars, even when it settles before a jury hears it.
          </p>
        }
      >
        <p>
          Under ORC Chapter 2710, Ohio&rsquo;s Uniform Mediation Act, and Ohio Rule of Civil Procedure 16, courts across the state
          routinely order parties to mediate before trial. Mediation also works when the parties choose it themselves, before or during
          a lawsuit, so they design the result instead of a judge or jury.
        </p>
        <p>
          Parties who set their own terms usually reach outcomes that fit their situation and last. A business dispute can end with a
          payment arrangement, a revised contract or a structured exit that neither side would have proposed in litigation. An estate
          dispute among siblings can be settled in a way that keeps the family speaking, which a court cannot order.
        </p>
      </Section>

      <Section title="Two roles the firm takes" tone="ice">
        <PointGrid
          points={[
            {
              title: 'Counsel for a party',
              body: 'Preparing your position, explaining your legal rights and evaluating any proposed settlement.',
            },
            {
              title: 'Neutral mediator',
              body: 'Facilitating resolution in civil, business, landlord-tenant and estate matters in Columbus and across Ohio.',
            },
          ]}
        />
        <p>
          Either way, the approach starts from Ohio law and from the fact that most clients would rather reach a workable agreement
          today than win a theoretical victory two years from now.
        </p>
      </Section>

      <Section title="How a mediation session runs">
        <Steps
          steps={[
            { title: 'Opening', body: 'The mediator explains the process, ground rules and confidentiality protections.' },
            { title: 'Each side speaks', body: 'Each party presents its view of the dispute without interruption.' },
            { title: 'Joint session', body: 'All parties sit together while the mediator guides the discussion of the issues.' },
            {
              title: 'Private caucuses',
              body: 'The mediator meets each party separately, in confidence, and moves between them to explore settlement terms.',
            },
            {
              title: 'Agreement or not',
              body: 'If the parties agree, the mediator helps draft a written settlement for signature. If not, all legal rights remain and the case can go to court.',
            },
          ]}
        />
      </Section>

      <Section title="Confidentiality under Ohio's Uniform Mediation Act" tone="ice">
        <p>
          Ohio enacted ORC Chapter 2710, effective in 2005, as a statewide framework for mediation confidentiality and procedure. ORC
          2710.06 creates a privilege protecting mediation communications from disclosure in any later legal proceeding. What a party
          says, any offer made and any admission cannot be introduced as evidence at a later trial, and the mediator may not testify
          about the mediation. The privilege belongs to the parties, the mediator and any non-party participants, and applies unless
          all privilege holders waive it.
        </p>
        <FactTable
          title="Exceptions under ORC 2710.06(B)"
          rows={[
            { label: 'Mediator misconduct', value: 'To prove or disprove a claim of professional misconduct by a mediator.' },
            { label: 'Abuse or neglect', value: 'To prove or disprove abuse, neglect or exploitation of a child or vulnerable adult.' },
            { label: 'Required by law', value: 'As otherwise required by law.' },
          ]}
          note="Within those limits, parties can acknowledge mistakes, voice concerns about litigation risk and explore compromises without that candor being used against them in court."
        />
      </Section>

      <Section title="Disputes the firm mediates">
        <PointGrid
          points={[
            {
              title: 'Business disputes',
              body: 'Breach of contract, partnership and LLC dissolution, non-compete and trade secret conflicts, vendor and customer disputes. A filed lawsuit and published judgment can damage reputations and expose confidential information; a mediated settlement can include confidentiality terms that litigation cannot.',
            },
            {
              title: 'Landlord-tenant disputes',
              body: "A significant share of the civil docket in Columbus and Franklin County: unpaid rent, security deposits, habitability, lease interpretation and eviction-related matters, often resolved in hours instead of weeks of court dates. The Housing Division of the Franklin County Municipal Court has used mediation programs to help parties reach agreements without full trials.",
            },
            {
              title: 'Estate and probate disputes',
              body: "Will contests, trust disputes, undue influence claims, executor misconduct and disagreements over distribution. A will contest tried to a jury produces a winner and a loser. A mediated settlement can divide assets to respect everyone's interests and keep sentimental property with the family members who value it most.",
            },
          ]}
        />
        <Callout title="Schedule a consultation">
          Whether you have been ordered to mediate or want to propose it, the firm can prepare you or serve as the neutral.
        </Callout>
        <LinkGrid links={RELATED} columns={2} />
      </Section>

      <LocationsWeServe title="Other Services" />

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
