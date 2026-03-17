import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LocationsWeServe from '@/components/LocationsWeServe';

export const metadata: Metadata = {
  title: 'Appeals Lawyer in Ohio | Columbus, Cincinnati, Dayton | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Ohio appeals attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Helping you appeal court decisions. Skilled representation for appeals in Ohio. Schedule consultation: (614) 285-5482',
  keywords: ['appeals lawyer Columbus OH', 'appeals attorney Ohio', 'appellate lawyer', 'Franklin County appeals attorney'],
  openGraph: {
    title: 'Appeals Lawyer in Ohio | Columbus, Cincinnati, Dayton | Jwayyed Law LLC',
    url: 'https://www.jjlawohio.com/civil/appeals',
  },
  alternates: { canonical: '/civil/appeals' },
};

const breadcrumbItems = [
  { label: 'Civil', href: '/civil' },
  { label: 'Appeals', href: '/civil/appeals' },
];

const faqs = [
  {
    question: `What is an appeal in Ohio?`,
    answer: `An appeal under Ohio Revised Code Chapter 2505 involves challenging a court decision by requesting a higher court to review the lower court's decision for legal errors. Appeals focus on legal issues rather than facts — appellate courts do not hear new testimony or evidence but instead review whether the lower court made legal errors that materially affected the outcome. Assignments of error must be precisely identified in your appellate brief, and errors not objected to at trial are generally waived. Experienced appellate representation is essential to identify and preserve viable issues.`,
  },
  {
    question: `What is the deadline for filing an appeal in Ohio?`,
    answer: `Under Ohio App.R. 4 and ORC 2505.07, the deadline to file a notice of appeal in Ohio is generally 30 days from the entry of the final judgment or order being appealed. Missing this deadline almost always bars the appeal entirely — courts have very limited authority to grant extensions. If you received an adverse ruling, you should consult an appellate attorney immediately. The 30-day clock begins when the judgment is journalized by the clerk, not when you receive notice of it.`,
  },
  {
    question: `What is the difference between de novo review and abuse of discretion?`,
    answer: `Ohio appellate courts apply different standards of review depending on the type of decision being challenged. De novo review applies to pure questions of law — the appellate court reviews the legal issue fresh, without deference to the trial court. Abuse of discretion review applies to discretionary trial court decisions such as evidentiary rulings, sentencing decisions, and case management orders; the appellate court will only reverse if the trial court acted unreasonably, arbitrarily, or unconscionably. Manifest weight of the evidence review applies when a party argues the jury or trial court's factual findings were against the weight of evidence. Understanding which standard applies is critical to building a viable appeal.`,
  },
  {
    question: `Which courts handle appeals in Ohio?`,
    answer: `Ohio has a three-tier appellate structure. Trial-level decisions from Municipal Courts and Common Pleas Courts are appealed to one of Ohio's 12 District Courts of Appeals. The 10th District Court of Appeals handles Franklin County; the 12th District covers Butler, Clinton, Greene, and Warren Counties; the 2nd District covers Montgomery County (Dayton area); the 4th District covers Athens and Pickaway Counties; and the 9th District covers Morrow County and several others. From the District Courts of Appeals, parties may seek discretionary review at the Ohio Supreme Court, which generally accepts only cases involving constitutional questions or significant issues of public or legal interest.`,
  },
  {
    question: `How are appellate briefs written in Ohio?`,
    answer: `Ohio App.R. 16 governs the content and format of appellate briefs. The appellant's brief must contain a table of contents, statement of facts, assignments of error, and argument sections that address each assignment of error with citations to the record and relevant legal authority. The appellee then files an answer brief. The appellant may file a reply brief. Word limits, formatting requirements, and filing deadlines are strict. A well-crafted brief that precisely identifies legal error with compelling legal analysis is the foundation of any successful appeal.`,
  },
  {
    question: `How long does an appeal take in Ohio?`,
    answer: `Ohio appellate cases typically take 12 to 24 months from the filing of the notice of appeal to a final decision, though this varies by district and case complexity. After the notice of appeal is filed, time is needed to assemble the record, brief the case, and schedule oral argument. Emergency appeals or interlocutory appeals may proceed faster. The Ohio Supreme Court, if it accepts review, may add another year or more. While appeals are pending, trial court judgments may or may not be stayed depending on the circumstances and whether a supersedeas bond is posted.`,
  },
  {
    question: `Can new evidence be introduced on appeal?`,
    answer: `Generally, no. Ohio appellate courts do not accept new evidence. The appellate court reviews only the record that was created in the trial court — the transcripts, exhibits, and pleadings filed below. This is why it is critical to preserve your arguments at the trial level by making timely and specific objections. Evidence or arguments not raised in the trial court are typically considered waived and cannot be raised for the first time on appeal, except in very limited circumstances such as plain error.`,
  },
  {
    question: `How much does an appeal cost in Ohio?`,
    answer: `Ohio appeals are generally handled on an hourly fee basis given the substantial professional time involved in assembling the record, researching legal issues, drafting briefs, and arguing before the court. Costs include filing fees, transcript preparation fees (which can be significant in long trials), and attorney fees. Because appeals require specialized skills distinct from trial practice, it is important to work with an attorney experienced in appellate procedure. Jwayyed Law LLC offers consultations to discuss your appellate options and fee structure.`,
  },
];

export default function AppealsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Appeals Lawyer"
        description="Experienced legal representation for appeals. Helping you challenge court decisions and protect your rights."
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">Understanding Appeals in Ohio</h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              When a trial court rules against you in Columbus, Cincinnati, Dayton, or anywhere in Ohio, you may have the right to appeal that decision to a higher court. Appeals under Ohio Revised Code Chapter 2505 and the Ohio Rules of Appellate Procedure allow parties to challenge legal errors that affected the outcome of their case. As part of our <Link href="/civil" className="text-[#b87333] underline hover:text-[#a06828]">civil litigation practice</Link>, Jwayyed Law LLC provides experienced appellate representation and understands that the appellate process demands a different skill set than trial practice — one focused on legal analysis, precise writing, and an in-depth understanding of standards of review.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Ohio's Appellate Court Structure</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's court system has three levels of appellate review. Trial-level decisions from Municipal Courts and Common Pleas Courts are first appealed to the appropriate District Court of Appeals. The 10th District Court of Appeals sits in Columbus and handles Franklin County cases. Neighboring districts include the 12th District (Butler, Warren, Greene, and Clinton Counties), the 2nd District (Montgomery County/Dayton area), the 4th District (Athens and Pickaway Counties), and the 9th District (Morrow County and others). From the District Courts of Appeals, parties may seek discretionary review at the Ohio Supreme Court under Ohio App.R. 26. The Ohio Supreme Court accepts only a fraction of cases and generally limits review to constitutional questions or cases of significant public interest.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Critical Deadlines and Preservation of Error</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio App.R. 4 requires that a notice of appeal be filed within 30 days of the trial court's final judgment entry. ORC 2505.07 codifies this deadline, and missing it almost always results in a complete loss of appellate rights. Beyond the filing deadline, a critical but often overlooked principle is the duty to preserve errors at trial. Ohio appellate courts will not review errors — including improper jury instructions, evidentiary rulings, or constitutional violations — that were not properly raised and objected to in the trial court. An appellate attorney can evaluate the trial record to identify which errors were preserved and which, if any, may qualify for plain error review despite the lack of a timely objection.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Standards of Review and Appellate Briefs</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Success on appeal depends heavily on identifying the correct standard of review for each issue raised. Ohio appellate courts apply de novo review to pure questions of law (giving no deference to the trial court), abuse of discretion review to discretionary rulings, and manifest weight of the evidence review to factual determinations. Appellate briefs are governed by Ohio App.R. 16, which requires a precise statement of assignments of error, a statement of facts supported by citations to the record, and legal arguments with authority. Oral argument, when allowed, provides one additional opportunity to address the panel's questions and reinforce the strongest arguments in your brief.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">When to Appeal vs. When to Accept</h3>
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Not every adverse judgment is worth appealing. Appeals are expensive, time-consuming, and succeed only when a genuine legal error affected the outcome. Before deciding to appeal, an experienced appellate attorney should review the trial record to identify preserved legal errors, assess the strength of available assignments of error, and weigh the likelihood of success against the cost of pursuing the appeal. In some cases — particularly where liability is clear but damages were reduced by a questionable legal ruling — an appeal may be strongly warranted. In others, negotiating a post-judgment settlement or seeking reconsideration in the trial court may be a more efficient path. <Link href="/contact" className="text-[#b87333] underline hover:text-[#a06828]">Contact Jwayyed Law LLC</Link> for an honest assessment of your appellate prospects. Appeals also arise in <Link href="/criminal-defense" className="text-[#b87333] underline hover:text-[#a06828]">criminal defense</Link> cases, where preserving trial-level objections is equally critical.
            </p>

            <LocationsWeServe title="Civil" />

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">How an Appeals Attorney Can Help</h3>
            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8">
              <li><strong>Appeal Evaluation:</strong> Review the trial record and identify preserved, meritorious assignments of error</li>
              <li><strong>Brief Preparation:</strong> Draft appellate briefs under Ohio App.R. 16 presenting compelling legal arguments</li>
              <li><strong>Oral Arguments:</strong> Present oral arguments before District Courts of Appeals or the Ohio Supreme Court</li>
              <li><strong>Appellate Procedure:</strong> Manage strict deadlines, record preparation, and all appellate filings</li>
              <li><strong>Strategic Advice:</strong> Provide an honest assessment of whether appealing is in your best interest</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">Related Civil Litigation Services</h3>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/civil/breach-of-contract" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Breach of Contract</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Enforce or defend contract obligations and recover damages for broken agreements</span>
              </Link>
              <Link href="/civil/employment-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Employment Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Wrongful termination, discrimination, and workplace retaliation claims</span>
              </Link>
              <Link href="/civil/real-estate-disputes" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Real Estate Disputes</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Title disputes, boundary issues, quiet title actions, and property litigation</span>
              </Link>
              <Link href="/criminal-defense" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] transition-colors">
                <span className="font-['Playfair_Display',_'Georgia',_serif] font-bold text-gray-900 block mb-1">Criminal Defense</span>
                <span className="font-['Inter',_'Arial',_sans-serif] text-sm text-gray-600">Criminal appeals and post-conviction relief in Ohio courts</span>
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
