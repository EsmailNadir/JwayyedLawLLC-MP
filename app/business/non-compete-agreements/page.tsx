import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Non-Compete Agreement Lawyer Ohio',
  description: 'Ohio non-compete agreement attorney drafting, challenging, and enforcing restrictive covenants under the Raimonde reasonableness test.',
  keywords: ['non-compete agreement lawyer Columbus OH', 'non-compete attorney Ohio', 'Raimonde v Van Vlerah Ohio', 'trade secrets ORC 1333.61', 'non-solicitation agreement Ohio', 'blue pencil doctrine Ohio'],
  openGraph: {
    title: 'Non-Compete Agreement Lawyer Ohio',
    url: 'https://www.jjlawohio.com/business/non-compete-agreements',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
  alternates: { canonical: '/business/non-compete-agreements' },
};

const breadcrumbItems = [
  { label: 'Business', href: '/business' },
  { label: 'Non-Compete Agreements', href: '/business/non-compete-agreements' },
];

const faqs = [
  {
    question: `Are non-compete agreements enforceable in Ohio?`,
    answer: `Yes, non-compete agreements are enforceable in Ohio under the reasonableness standard established by the Ohio Supreme Court in Raimonde v. Van Vlerah (1975) and codified in subsequent case law. Ohio courts will enforce a non-compete agreement only if it: (1) is no greater than necessary to protect a legitimate employer interest; (2) does not impose undue hardship on the employee; and (3) is not injurious to the public. Courts look at the combination of time duration, geographic scope, and the types of activities restricted — no single factor is automatically dispositive. Unlike some states, Ohio has no statute that categorically bans non-competes. However, federal regulatory developments (see the 2024 FTC rule discussion) continue to create uncertainty.`,
  },
  {
    question: `What is the Raimonde reasonableness test and how do Ohio courts apply it?`,
    answer: `In Raimonde v. Van Vlerah, 325 N.E.2d 544 (Ohio 1975), the Ohio Supreme Court rejected both a "strict" approach (refusing to enforce any non-compete) and a "liberal" approach (enforcing the full agreement as written) in favor of a middle-ground reasonableness test. Courts consider multiple factors including: the length of the restriction (1–2 years is commonly upheld; longer periods face more scrutiny); the geographic territory (must bear a reasonable relationship to the area where the employee actually worked); the scope of activities prohibited (must track what the employee actually did); the nature of the employer's protectable interests (customer relationships, confidential information, specialized training); the employee's hardship; and the availability of equivalent employment. Courts balance all factors together — a very short duration might save an otherwise overbroad geographic restriction, or vice versa.`,
  },
  {
    question: `What is "blue penciling" and can Ohio courts modify an overbroad non-compete?`,
    answer: `Ohio courts follow the "blue pencil" doctrine, meaning a court has discretion to modify an overbroad non-compete rather than voiding it entirely. For example, if a non-compete prohibits competition for three years but the court finds two years is the maximum reasonable period, it can enforce the agreement at two years. Similarly, if the geographic scope is national but only a regional scope is reasonable, the court can narrow it. Critically, blue penciling is discretionary — courts are not required to save a poorly drafted agreement. This creates a strategic asymmetry: an employer who drafts an extremely overbroad non-compete risks having the court void it entirely, while a more carefully tailored agreement is more likely to be enforced (or blue-penciled to a lesser but still useful scope).`,
  },
  {
    question: `What is the difference between a non-compete agreement and a non-solicitation agreement in Ohio?`,
    answer: `A non-compete agreement prohibits a former employee from working for competitors or starting a competing business within a specified time and geography. A non-solicitation agreement is narrower: it prohibits the former employee from soliciting the employer's customers and/or employees, but does not restrict general competitive employment. Non-solicitation agreements are generally easier to enforce in Ohio because they impose less hardship on the employee while still protecting core employer interests (customer relationships and workforce stability). Ohio courts have upheld non-solicitation agreements that might seem broad in terms of geography, because the actual restriction — you cannot contact these specific customers — is more precisely tied to the employer's protectable interest than a blanket no-compete.`,
  },
  {
    question: `How does Ohio law protect trade secrets, and how do trade secrets relate to non-competes?`,
    answer: `Ohio adopted the Uniform Trade Secrets Act, codified at ORC 1333.61 through 1333.69. A "trade secret" under ORC 1333.61(D) is information — including formulas, patterns, compilations, programs, devices, methods, techniques, or processes — that derives independent economic value from not being generally known and is subject to reasonable efforts to maintain its secrecy. Misappropriation of trade secrets under ORC 1333.63 exposes a defendant to injunctive relief, damages (including unjust enrichment), and potentially attorney fees in cases of willful misappropriation. Non-compete agreements and trade secret claims often run in parallel: an employer may sue for both misappropriation of trade secrets and breach of a non-compete when a former employee takes confidential information to a competitor. Even without a non-compete, Ohio trade secret law independently restricts how former employees can use confidential business information.`,
  },
  {
    question: `What happened with the FTC non-compete rule and does it apply in Ohio?`,
    answer: `In April 2024, the Federal Trade Commission issued a rule that would have banned most non-compete agreements nationwide. However, in August 2024 a federal district court in Texas vacated the rule before it took effect, and as of early 2026 the rule is not in force. Ohio employers and employees should not rely on the FTC rule to override existing agreements. Ohio law — the Raimonde reasonableness standard — continues to govern the enforceability of non-compete agreements in Ohio. That said, the regulatory environment is evolving: consulting an attorney before signing or attempting to enforce a non-compete is more important than ever, because the legal landscape may shift.`,
  },
  {
    question: `What can happen if I violate a non-compete agreement in Ohio?`,
    answer: `If an Ohio court finds a non-compete agreement is enforceable and you have violated it, the remedies can be significant. Courts may issue a temporary restraining order or preliminary injunction under Ohio Rule of Civil Procedure 65 requiring you to stop the competing activity immediately — often before a full trial on the merits. The employer can also seek compensatory damages for provable lost profits and, if the agreement so provides, attorney fees. Some courts have applied the "discovery rule" to extend the non-compete period by the amount of time the violation occurred (the "tolling" doctrine). However, if the agreement is unenforceable under Raimonde, these remedies are unavailable. An experienced attorney can quickly assess your situation and develop a defensive strategy.`,
  },
  {
    question: `Should I sign a non-compete agreement as a condition of employment?`,
    answer: `Before signing any non-compete agreement in Ohio, you should have an attorney review it. Many employees sign these agreements without understanding their scope or consequences — and later find themselves restricted from working in their chosen field after leaving the employer. An attorney can assess whether the agreement is likely enforceable under Ohio's reasonableness standard, identify the riskiest provisions, and negotiate modifications before signing. Employers often have more flexibility in negotiating non-compete terms at the hiring stage than they acknowledge. Key things to push back on: excessively long durations (anything over two years warrants scrutiny), geographic areas that extend beyond where you actually work, and scope-of-activity clauses that are broader than your actual role.`,
  },
];

export default function NonCompeteAgreementsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Non-Compete Agreement Lawyer"
        description="Drafting enforceable non-competes, challenging overbroad restrictions, and protecting trade secrets under Ohio\'s Raimonde reasonableness standard."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Non-Compete Agreements in Ohio: Enforcement, Defense, and Trade Secret Protection
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Non-compete agreements are among the most litigated areas of Ohio business law, yet few legal topics are as misunderstood by both employers and employees. An employer who drafts an overbroad agreement may find it unenforceable when they need it most. An employee who signs without reading — or assumes the agreement is routine boilerplate — can find themselves barred from their chosen field for years. Ohio's approach to non-compete enforcement centers on the reasonableness standard first articulated by the Ohio Supreme Court in <strong>Raimonde v. Van Vlerah</strong>, 325 N.E.2d 544 (Ohio 1975), which remains the controlling framework today. Non-compete matters are a significant part of our <Link href="/business" className="text-[#b87333] underline hover:text-[#a06828]">Ohio business law practice</Link>. At Jwayyed Law LLC, we advise and represent employers and employees in Columbus and throughout Ohio on non-compete drafting, negotiation, enforcement, and defense.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under <em>Raimonde</em>, an Ohio court will enforce a non-compete agreement only if it is reasonable — meaning it is no greater than required to protect the employer's legitimate interests, does not impose undue hardship on the employee, and is not injurious to the public. Courts weigh multiple factors in combination: the duration of the restriction (agreements of one to two years are commonly upheld, while longer restrictions face greater scrutiny); the geographic scope (must bear a reasonable relationship to the territory the employee actually worked); the types of activities restricted (broadly worded "any competitive activity" clauses are more vulnerable than carefully tailored ones); the employee's access to confidential information or specialized training; and the availability of alternative employment. No single factor is automatically decisive — courts balance all of them together, which is why identical restrictions may be enforced against one employee and rejected as applied to another.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio follows the "blue pencil" doctrine, which gives courts discretion to modify an overbroad non-compete rather than voiding it in its entirety. A court can reduce an unreasonable three-year restriction to two years, or narrow a national geographic restriction to a regional one, and then enforce the agreement as modified. This is both an opportunity and a risk: it means Ohio employers can sometimes salvage a poorly drafted agreement, but it also means an employee challenging an overbroad non-compete faces a judge who may reform rather than void. Because blue penciling is entirely discretionary, the safest strategy — for both sides — is to have the agreement carefully drafted or reviewed by an attorney from the outset rather than relying on a court to fix it later.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Non-compete disputes frequently involve parallel claims under Ohio's trade secret statute. The Ohio Uniform Trade Secrets Act, codified at <strong>ORC 1333.61 through 1333.69</strong>, protects business information — formulas, customer lists, pricing data, methods, processes — that has independent economic value because it is not generally known and is subject to reasonable secrecy efforts. When a former employee takes confidential information to a competitor, the employer may have claims for both breach of the non-compete and misappropriation of trade secrets, which carry separate remedies including injunctive relief, damages for actual loss, disgorgement of unjust enrichment, and attorney fees for willful misappropriation under <strong>ORC 1333.65</strong>. Conversely, an employee accused of trade secret misappropriation needs counsel who understands both the statutory framework and the practical defenses — including that general skill and knowledge gained through employment is not a trade secret and may lawfully be used in competitive employment.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              Key Types of Restrictive Covenants in Ohio
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              Ohio employment and business contracts use several distinct types of restrictive covenants, each with different enforceability considerations:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6">
              <li><strong>Non-compete agreements:</strong> Prohibit working for competitors or operating a competing business within a specified time and geographic area. Subject to the full Raimonde reasonableness analysis.</li>
              <li><strong>Non-solicitation of customers:</strong> Prohibit contacting or soliciting the employer's clients after departure. Generally easier to enforce than broad non-competes because they are more narrowly targeted at protecting specific customer relationships.</li>
              <li><strong>Non-solicitation of employees:</strong> Prohibit recruiting or hiring the employer's workforce. Enforceable if reasonable in duration and scope; protect the employer's investment in its team.</li>
              <li><strong>Non-disclosure / confidentiality agreements:</strong> Prohibit disclosure or use of confidential information. Not subject to the same geographic and duration limitations as non-competes; remain enforceable as long as the information qualifies as confidential. May overlap substantially with trade secret protections under ORC 1333.61.</li>
              <li><strong>Non-disparagement clauses:</strong> Restrict negative public statements about the employer. Common in separation agreements; enforceability depends on specificity and whether they improperly restrict NLRA-protected activity.</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-10 mb-4">
              What Employers and Employees Should Know About Enforcement
            </h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4 leading-relaxed">
              When a non-compete dispute arises, time matters. For employers seeking to enforce a non-compete, the typical first step is a demand letter followed, if necessary, by a motion for a temporary restraining order (TRO) and preliminary injunction under Ohio Rule of Civil Procedure 65. To obtain a TRO, the employer must demonstrate a likelihood of success on the merits, irreparable harm without the injunction, that the balance of hardships favors the injunction, and that the public interest is not harmed. Ohio courts in Franklin County and other business-active counties are familiar with these motions and can act quickly — sometimes granting or denying a TRO within days of filing.
            </p>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              For employees facing a non-compete enforcement action, the defense strategy may involve challenging the agreement's validity under Raimonde, arguing changed circumstances that make enforcement unreasonable, demonstrating that the employer materially breached the underlying employment contract (potentially releasing the employee from the non-compete), or showing that the information the employer seeks to protect does not meet the legal definition of a protectable interest. Our firm provides representation on both sides of these disputes, with deep familiarity with Ohio non-compete law and the Franklin County courts. For related services, see our pages on <Link href="/business/employment-agreements" className="text-[#b87333] underline hover:text-[#a06828]">Ohio employment agreements</Link> and <Link href="/business/contract-drafting-review" className="text-[#b87333] underline hover:text-[#a06828]">contract drafting and review</Link>. To discuss your non-compete situation, <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">contact Jwayyed Law LLC</Link> for a consultation.
            </p>

            <LocationsWeServe title="Business Law" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/business/employment-agreements" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Employment Agreements</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Draft and review employment contracts with proper restrictive covenants</span>
              </Link>
              <Link href="/business/contract-drafting-review" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Contract Drafting & Review</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Comprehensive contract services for Ohio businesses</span>
              </Link>
              <Link href="/business/business-litigation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Business Litigation</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Litigate non-compete enforcement and defense in Ohio courts</span>
              </Link>
              <Link href="/business/partnership-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Partnership Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Resolve disputes between business partners and co-owners</span>
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
