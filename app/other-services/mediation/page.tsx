import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Mediation Attorney in Ohio | Columbus | Jwayyed Law LLC',
  description: 'Ohio attorney providing mediation services for civil, business, landlord-tenant, and estate disputes. Confidential, cost-effective conflict resolution under ORC Chapter 2710. Call (614) 285-5482.',
  keywords: [
    'mediation attorney Columbus OH',
    'mediation services Ohio',
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
    description: 'Ohio attorney providing mediation services for civil, business, landlord-tenant, and estate disputes. Confidential, cost-effective conflict resolution under ORC Chapter 2710. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/other-services/mediation',
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
    question: `What is mediation and how does it differ from going to court?`,
    answer: `Mediation is a voluntary, confidential process in which a neutral third party — the mediator — facilitates structured communication between disputing parties to help them reach a mutually acceptable resolution. Unlike a judge or arbitrator, a mediator does not decide who wins or loses. The mediator helps each side understand the other's position, identifies common ground, explores settlement options, and drafts a written agreement if the parties reach a resolution. Court litigation is adversarial, public, expensive, and slow — a civil case in Franklin County Common Pleas Court can take two to four years from filing to trial. Mediation is private, faster (often one day to several sessions), significantly less expensive, and produces agreements that both parties have voluntarily accepted, making them more likely to be honored.`,
  },
  {
    question: `When do Ohio courts order mediation?`,
    answer: `Ohio Rule of Civil Procedure 16 gives courts broad authority to order parties to attend mediation and other alternative dispute resolution processes at any pretrial conference. Many Ohio courts have standing orders requiring mediation before trial in specific case types. In Franklin County Common Pleas Court, mediation is frequently ordered in civil cases involving business disputes, personal injury, real estate, and breach of contract. The Franklin County Domestic Relations Court strongly encourages or requires mediation in divorce and custody cases. Probate courts order mediation in contested estate and guardianship matters. Even when not ordered by a court, parties can agree to private mediation at any time — before litigation is filed, during litigation, or even during trial.`,
  },
  {
    question: `What happens during the mediation process?`,
    answer: `A typical mediation session begins with an opening statement by the mediator explaining the process, ground rules, and confidentiality protections. Each party then has an opportunity to present their perspective on the dispute without interruption — the opening statements. In a joint session, all parties sit together and the mediator helps them discuss the issues. In private caucuses, the mediator meets separately with each party to discuss interests, concerns, and potential settlement terms in confidence. The mediator may shuttle back and forth between caucuses to explore options. If the parties reach agreement, the mediator helps draft a written settlement agreement that is then signed by the parties. If no agreement is reached, the parties retain all their legal rights and can proceed to litigation.`,
  },
  {
    question: `What confidentiality protections apply to Ohio mediation?`,
    answer: `Ohio's Uniform Mediation Act (ORC Chapter 2710), which took effect in 2005, provides strong confidentiality protections. Under ORC 2710.06, mediation communications — statements made by any party, mediator, or other participant during a mediation — are confidential and may not be disclosed in any subsequent legal proceeding. This means that admissions, offers, and negotiating positions made during mediation cannot be used against a party in court. The mediator also cannot be compelled to testify about what was said in mediation. There are narrow exceptions: threats of violence, evidence of criminal activity, and information required to be reported under mandatory reporting laws are not protected. These robust confidentiality protections encourage parties to speak frankly and explore settlement options without fear that their statements will be used against them.`,
  },
  {
    question: `What types of cases are suitable for mediation in Ohio?`,
    answer: `Mediation is appropriate for virtually any civil dispute where the parties have an ongoing relationship or simply want a faster, less expensive resolution than court. Common case types in Ohio include: business disputes (breach of contract, partnership and LLC dissolution, non-compete enforcement, vendor disputes); real estate disputes (purchase agreement disputes, boundary and easement conflicts, landlord-tenant disputes); estate and probate disputes (will contests, trust disputes, executor misconduct claims); family law matters (divorce, custody, parenting time, child support, property division); personal injury claims; employment disputes; and neighbor disputes. Cases involving domestic violence, ongoing criminal conduct, or severe power imbalances may not be suitable for mediation without additional safeguards.`,
  },
  {
    question: `What can a mediator do, and what are they prohibited from doing?`,
    answer: `A mediator's role is to facilitate communication, help parties identify their underlying interests (as opposed to stated positions), explore creative solutions, and assist in drafting a clear settlement agreement. A mediator can explain how Ohio courts have handled similar disputes, help parties understand the risks and costs of litigation, and reality-test extreme positions. What a mediator cannot do: make binding decisions for the parties (that is arbitration, not mediation); give legal advice to either party; compel a party to accept a settlement; guarantee confidentiality in situations exceeding the statutory exceptions; or continue the process if a party withdraws. A mediator who is also an attorney must be careful to avoid creating an attorney-client relationship with either party and must maintain strict neutrality.`,
  },
  {
    question: `How much does mediation cost in Ohio and how long does it take?`,
    answer: `Private mediation costs vary depending on the mediator's hourly rate and the complexity of the dispute. Many private mediators in Columbus charge between $150 and $350 per hour, with costs shared between the parties. A half-day mediation session might cost each party $300–$700; a full-day session $500–$1,200. Compare this to the cost of a day of litigation — attorney fees alone can exceed several thousand dollars per side, and that is before accounting for expert witnesses, court costs, and the two to four years of legal fees leading up to a trial. Court-connected mediation programs (available in some Ohio courts for lower-stakes cases) may be available at reduced or no cost. Most mediations are resolved in one to three sessions. Cases involving complex facts or multiple parties may require more sessions.`,
  },
  {
    question: `If we reach an agreement in mediation, is it legally binding?`,
    answer: `A mediation agreement is a contract — it becomes legally binding when signed by both parties. In Ohio, if a mediation agreement is reached in a pending court case, it can be incorporated into a consent judgment entry, giving it the force of a court order and making it enforceable through contempt proceedings if violated. In pre-litigation mediation, the agreement is enforced as a contract under Ohio contract law. Under ORC 2710.07, a mediated agreement that is signed and not repudiated within 3 days is enforceable by a court. It is generally advisable for each party to review any proposed agreement with their own attorney before signing, to ensure it addresses all relevant issues and that the terms are clear and enforceable. Our firm assists both parties seeking to mediate and clients who have reached a mediated agreement and need counsel to review its terms.`,
  },
];

export default function MediationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Mediation Attorney"
        description="Helping Ohio individuals and businesses resolve disputes efficiently and confidentially through mediation — a cost-effective alternative to prolonged court litigation."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Mediation in Ohio: A Smarter Path to Resolving Disputes
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Litigation is expensive, slow, emotionally draining, and public. A civil lawsuit in Ohio can take two to four years from filing to trial, costing each side tens of thousands of dollars in attorney fees, expert witness costs, and court expenses — even for cases that ultimately settle before a jury ever hears them. Ohio courts, recognizing these burdens, have broadly embraced mediation as a faster, more cost-effective path to resolution. Under ORC Chapter 2710 — Ohio\'s Uniform Mediation Act — and Ohio Rule of Civil Procedure 16, courts across the state routinely order parties to mediate before trial. But mediation is also available — and often most effective — when parties choose it voluntarily, before or during litigation, as a way to reach a resolution they design together rather than having a judge or jury decide for them.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              At Jwayyed Law LLC, we assist clients in Columbus and across Ohio with mediation in two ways: as counsel for a party in mediation (helping you prepare your position, understand your legal rights, and evaluate any proposed settlement), and as a neutral mediator facilitating resolution in civil, business, landlord-tenant, and estate matters. We bring a practical, problem-solving approach to conflict resolution that is grounded in knowledge of Ohio law and an understanding that most clients would rather reach a workable agreement today than win a theoretical victory two years from now.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Mediation is not a sign of weakness or capitulation — it is a strategic choice. Parties who control the terms of their own settlement typically reach more durable, tailored outcomes than those imposed by a court. A business dispute that could destroy a long-standing commercial relationship may be resolved with a creative payment arrangement, a revised contract, or a structured exit that neither side would have thought to propose in the adversarial heat of litigation. An estate dispute among siblings can be resolved in ways that preserve family relationships — something a court cannot order and litigation almost always damages.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Ohio\'s Uniform Mediation Act: Confidentiality and Legal Framework
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio enacted ORC Chapter 2710, the Ohio Uniform Mediation Act, effective in 2005, establishing a statewide legal framework for mediation confidentiality and procedure. The Act\'s most important provision — ORC 2710.06 — creates a privilege protecting all mediation communications from disclosure in any subsequent legal proceeding. This means that what a party says in mediation, any offers made, and any admissions disclosed cannot be introduced as evidence in a later trial. The mediator is also prohibited from testifying about the mediation. This privilege belongs to the parties, the mediator, and any non-party participants, and it applies unless all privilege holders waive it.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The confidentiality protections are robust but not absolute. ORC 2710.06(B) sets out specific exceptions: a court or administrative tribunal may admit evidence of a mediation communication to prove or disprove a claim of professional misconduct by a mediator; to prove or disprove abuse, neglect, or exploitation of a child or vulnerable adult; or as otherwise required by law. The practical effect is that parties can speak candidly in mediation — acknowledging mistakes, expressing concerns about risks in litigation, and exploring compromises — without worrying that their candor will be weaponized against them in court.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Mediation for Business, Landlord-Tenant, and Estate Disputes in Ohio
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>Business disputes</strong> — breach of contract claims, partnership and LLC dissolution disputes, non-compete and trade secret conflicts, vendor and customer disputes — are among the most fertile ground for mediation. Business parties often prefer private resolution because litigation is public: a filed lawsuit and a published judgment can damage business reputations, expose confidential business information to competitors, and poison relationships with customers, vendors, and employees. A mediated settlement can include confidentiality provisions that litigation cannot.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>Landlord-tenant disputes</strong> in Columbus and Franklin County are a significant portion of civil docket. Whether the issue is unpaid rent, security deposit disputes, habitability claims, lease interpretation, or eviction-related matters, mediation can often resolve these matters in hours rather than weeks of court dates. Columbus\'s Housing Division of the Franklin County Municipal Court has utilized mediation programs to help parties reach agreements without full trials, saving both sides time and money.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              <strong>Estate and probate disputes</strong> — will contests, trust disputes, claims of undue influence, executor misconduct, and family disagreements over asset distribution — are particularly well-suited for mediation because the parties are almost always family members whose relationship extends far beyond the present dispute. A will contest tried to a jury produces a winner and a loser, and often ends relationships permanently. Mediated estate settlements can distribute assets in ways that honor everyone\'s interests, preserve sentimental property for the family members who value it most, and allow siblings to maintain relationships through and after the loss of a parent.
            </p>

            <LocationsWeServe title="Other Services" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/other-services/arbitration" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Arbitration</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Binding alternative dispute resolution</span>
              </Link>
              <Link href="/other-services/will-contests" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Will Contests</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Contesting or defending the validity of a will</span>
              </Link>
              <Link href="/other-services/estate-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Estate Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Resolving conflicts in estate and probate matters</span>
              </Link>
              <Link href="/other-services/dispute-resolution" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Dispute Resolution</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Full overview of ADR options in Ohio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
