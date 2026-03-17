import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dispute Resolution Lawyer in Ohio | Columbus, Cincinnati, Dayton | Mediation & Arbitration | Jwayyed Law LLC',
  description: 'Experienced Ohio dispute resolution attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Helping you resolve conflicts. Skilled representation for mediation and arbitration in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['dispute resolution lawyer Columbus OH', 'mediation attorney Ohio', 'arbitration lawyer', 'Franklin County dispute resolution attorney'],
  openGraph: {
    title: 'Dispute Resolution Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/other-services/dispute-resolution',
  },
  alternates: { canonical: '/other-services/dispute-resolution' },
};

const breadcrumbItems = [
  { label: 'Other Services', href: '/other-services' },
  { label: 'Dispute Resolution', href: '/other-services/dispute-resolution' },
];

const faqs = [
  {
    question: `What is the difference between mediation and arbitration?`,
    answer: `Mediation and arbitration are both forms of alternative dispute resolution (ADR), but they work very differently. In mediation, a neutral third-party mediator facilitates negotiations between the parties but has no authority to impose a decision — the parties retain full control over the outcome. Any settlement reached is voluntary. In arbitration, an arbitrator (or panel of arbitrators) hears evidence and arguments from both sides and issues a decision called an award. Under ORC 2711.09, a binding arbitration award can be confirmed by an Ohio court and enforced like a judgment. Arbitration resembles a private court proceeding, while mediation is a structured negotiation.`,
  },
  {
    question: `Is arbitration binding in Ohio?`,
    answer: `Arbitration in Ohio can be either binding or non-binding, depending on the agreement of the parties. When the parties agree to binding arbitration — often through a clause in a contract — the arbitrator's award is final and enforceable. Under ORC 2711.09, a party may apply to the court of common pleas to confirm a binding arbitration award, and the confirmed award carries the same force as a court judgment. Non-binding arbitration allows either party to reject the award and proceed to court. Ohio Revised Code Chapter 2711 governs the validity, enforcement, and vacatur of arbitration awards and agreements in Ohio.`,
  },
  {
    question: `Is mediation confidential in Ohio?`,
    answer: `Yes. Ohio Revised Code Chapter 2710 — the Ohio Mediation Act — provides strong confidentiality protections for mediation communications. Under ORC 2710.03, mediation communications are generally confidential and may not be disclosed or used as evidence in subsequent court or arbitration proceedings. This confidentiality encourages parties to speak openly during mediation without fear that their statements will be used against them later. There are narrow exceptions, such as when disclosure is necessary to prevent a crime or when all parties consent in writing. This confidentiality protection is one of the key advantages of mediation over public court litigation.`,
  },
  {
    question: `When is ADR a good option for resolving a dispute?`,
    answer: `Alternative dispute resolution is often a good option when the parties want to resolve a dispute faster and less expensively than through litigation, when confidentiality is important (court records are public; ADR proceedings are private), when preserving an ongoing business or personal relationship matters, or when the parties want more control over the process and outcome. ADR works well for business disputes, contract disagreements, employment conflicts, neighbor disputes, landlord-tenant issues, and family business disagreements. It may be less appropriate when a party needs the coercive power of a court order immediately, when important legal precedent needs to be established, or when one party is acting in bad faith.`,
  },
  {
    question: `Can a court order mediation in Ohio?`,
    answer: `Yes. Under Ohio Civil Rule 16, Ohio courts have authority to order the parties to a civil case to participate in mediation as part of pretrial case management. Many Ohio courts — including courts in Franklin County — have established court-connected ADR programs that routinely refer civil cases to mediation. Even when not ordered by the court, parties may voluntarily agree to mediate at any point in a dispute, before or after litigation begins. Participating in court-ordered or voluntary mediation does not waive any of your legal rights; if mediation fails, the case continues in court.`,
  },
  {
    question: `How long does mediation take?`,
    answer: `Most mediation sessions last between three and eight hours, though complex disputes may require multiple sessions over several days or weeks. The total time from scheduling to resolution varies widely. Simple two-party disputes involving straightforward facts can often be resolved in a single half-day or full-day session. Multi-party commercial disputes or cases with complicated damages calculations may require several sessions spread over weeks. The timeline is flexible — the parties control the schedule — which is a significant advantage over litigation, where court dockets and procedural rules control timing. Most mediated disputes that settle do so within one to three sessions.`,
  },
  {
    question: `What happens if mediation fails?`,
    answer: `If mediation does not result in a settlement, the parties retain all of their legal rights. Nothing said or offered during mediation can be used as an admission or introduced as evidence in subsequent court proceedings, thanks to the confidentiality protections of ORC Chapter 2710. The parties may proceed to arbitration (if agreed upon), pursue litigation in court, or attempt other forms of resolution. A failed mediation is not wasted effort — the process often helps the parties better understand each other's positions, narrow disputed issues, and evaluate the strengths and weaknesses of their respective cases, which can lead to settlement later in the litigation process.`,
  },
  {
    question: `Do I need an attorney for mediation or arbitration?`,
    answer: `Legal representation is not required in most mediation or arbitration proceedings, but it is strongly advisable in any dispute involving significant financial stakes, complex legal issues, or important business or personal interests. In mediation, an attorney can help you understand your legal rights, evaluate settlement proposals, and avoid agreeing to terms that are unfavorable or unenforceable. In arbitration, the rules of evidence and procedure — while less formal than in court — still apply, and an attorney can present your case effectively, cross-examine witnesses, and challenge the other side's evidence. At Jwayyed Law LLC, we represent clients in both mediation and arbitration proceedings throughout Ohio.`,
  },
];

export default function DisputeResolutionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Dispute Resolution Lawyer"
        description="Experienced legal assistance with dispute resolution. Helping you resolve conflicts through mediation and arbitration throughout Ohio."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Alternative Dispute Resolution in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When disputes arise — whether in a business relationship, a contract disagreement, an employment matter, or a neighbor conflict — litigation is not always the best path forward. Alternative dispute resolution (ADR) offers faster, less expensive, and more private alternatives that can preserve relationships and give the parties greater control over outcomes. At Jwayyed Law LLC, we assist clients in Columbus, Cincinnati, Dayton, and throughout Ohio with both mediation and arbitration under the framework established by the Ohio Revised Code. Ohio Revised Code Chapter 2711 governs arbitration agreements and the enforcement of arbitration awards, while ORC Chapter 2710 — the Ohio Mediation Act — establishes confidentiality protections for mediation communications. Our attorney can help you determine whether ADR is appropriate for your dispute and represent you effectively throughout the process.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Mediation is a voluntary, confidential process in which a neutral third-party mediator facilitates negotiations between disputing parties. The mediator does not decide the case — the parties retain full control over any settlement. Under ORC 2710.03, all mediation communications are confidential and generally cannot be introduced as evidence in subsequent court or arbitration proceedings. This confidentiality encourages candid discussion and creative problem-solving that rarely happens in adversarial litigation. Studies consistently show that mediation results in settlement in 70 to 85 percent of cases when both parties participate in good faith. Settling through mediation typically costs a fraction of what full litigation would require and can be completed in days or weeks rather than years.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Arbitration is a more formal ADR process in which an arbitrator — or a panel of arbitrators — acts as a private judge. The parties present evidence, call witnesses, and make legal arguments, and the arbitrator issues a written award. Under ORC 2711.01, agreements to arbitrate future disputes are valid and enforceable in Ohio, which is why arbitration clauses appear in many commercial contracts, employment agreements, and consumer contracts. When the parties have agreed to binding arbitration, the arbitrator's award is final and may be confirmed by an Ohio court under ORC 2711.09, making it as enforceable as a court judgment. Non-binding arbitration is also available and allows either party to reject the award and proceed to court if unsatisfied.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio courts actively encourage ADR as a means of reducing court caseloads and helping parties resolve disputes efficiently. Under Ohio Civil Rule 16, Ohio courts have broad authority to refer civil cases to mediation as part of pretrial case management. Many courts in Franklin County and across Ohio have established court-connected ADR programs and maintain rosters of certified mediators. Ohio Supreme Court Rule 16 sets standards for the certification of mediators in Ohio. Participation in court-referred mediation does not waive any legal rights — if mediation fails, the litigation continues. Many disputes that initially appear headed for a trial ultimately settle through this process.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              ADR is well-suited to a wide range of disputes. Business owners frequently use mediation and arbitration to resolve contract disputes, partnership disagreements, vendor conflicts, and employment matters — particularly when maintaining an ongoing business relationship is important. ADR is also appropriate for landlord-tenant disputes, neighbor conflicts, and construction disagreements. One major advantage over litigation is privacy: court proceedings are public record, while ADR proceedings and any settlements are confidential. For businesses that want to protect proprietary information or avoid publicity, this privacy benefit alone can make ADR the preferred option. If you have a dispute and want to explore whether mediation or arbitration is a good fit, contact Jwayyed Law LLC at (614) 285-5482 to schedule a consultation. You may also want to review our pages on <Link href="/other-services/mediation" className="text-[#b87333] underline hover:opacity-80">mediation</Link> and <Link href="/other-services/arbitration" className="text-[#b87333] underline hover:opacity-80">arbitration</Link> for more detail on each process.
            </p>

            <LocationsWeServe title="Other Services" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Dispute Resolution Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/other-services/mediation" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Mediation</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Confidential, facilitated negotiation to resolve disputes — parties control the outcome</p>
              </Link>
              <Link href="/other-services/arbitration" className="block p-6 border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Arbitration</h4>
                <p className="text-sm text-gray-600 font-['Inter',_'Arial',_sans-serif]">Private dispute resolution with a binding decision enforceable under ORC 2711.09</p>
              </Link>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Disputes Suitable for ADR</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Business and Commercial Disputes:</strong> Contract disagreements, partnership conflicts, vendor disputes, and business-to-business claims</li>
              <li><strong>Employment Disputes:</strong> Wrongful termination, wage and hour claims, non-compete enforcement, and workplace conflicts</li>
              <li><strong>Landlord-Tenant Disputes:</strong> Security deposit claims, lease disagreements, and property damage disputes</li>
              <li><strong>Construction Disputes:</strong> Contractor disputes, subcontractor claims, and construction defect claims</li>
              <li><strong>Neighbor and Property Disputes:</strong> Boundary disputes, easement disagreements, and nuisance claims</li>
              <li><strong>Family Business Disagreements:</strong> Succession planning disputes, buy-sell agreement conflicts, and ownership transition disagreements</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Jwayyed Law LLC for Dispute Resolution</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              Our firm provides dedicated dispute resolution assistance throughout Ohio. We understand the full range of ADR options available under Ohio law and can help you choose the right approach for your dispute. Whether you are entering into a mediation in hopes of preserving a business relationship, responding to an arbitration demand under a contract clause, or looking for an efficient way to resolve a conflict without the cost and stress of litigation, Jwayyed Law LLC is here to guide and represent you. Contact us at (614) 285-5482 to discuss your dispute and learn how ADR might help you reach a faster, more cost-effective resolution.
            </p>
          </div>
        </div>
      </section>
      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}
