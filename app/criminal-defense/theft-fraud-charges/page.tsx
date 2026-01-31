import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Theft & Fraud Charges Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus theft and fraud defense attorney protecting your rights. Skilled representation for theft, fraud, embezzlement, and identity theft charges in Ohio. Schedule consultation: (614) 285-5482',
  keywords: [
    'theft charges lawyer Columbus OH',
    'fraud defense attorney Ohio',
    'theft attorney',
    'fraud charges lawyer',
    'embezzlement attorney',
    'identity theft lawyer',
    'Franklin County theft attorney'
  ],
  openGraph: {
    title: 'Theft & Fraud Charges Lawyer in Columbus, OH | Jwayyed Law LLC',
    description: 'Experienced theft and fraud defense representation in Columbus and throughout Ohio. Schedule consultation available.',
    url: 'https://www.jjlawohio.com/criminal-defense/theft-fraud-charges',
  },
  alternates: {
    canonical: '/criminal-defense/theft-fraud-charges',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Theft & Fraud Charges', href: '/criminal-defense/theft-fraud-charges' },
];

const faqs = [
  {
    question: 'What constitutes theft in Ohio?',
    answer: 'Theft under Ohio Revised Code 2913.02 involves knowingly obtaining or exerting control over property of another without consent, with intent to deprive the owner of the property. Theft can be charged as a misdemeanor or felony depending on the value of property stolen. Property valued under $1,000 is typically a first-degree misdemeanor, while higher values result in felony charges. Theft of certain items like firearms or credit cards is charged as felonies regardless of value.',
  },
  {
    question: 'What are the penalties for theft in Ohio?',
    answer: 'Theft penalties in Ohio depend on property value and prior convictions (per ORC 2913.02 as amended by HB 366, current as of 2026). Property valued under $1,000 is a first-degree misdemeanor punishable by up to 180 days in jail and fines up to $1,000. Property valued $1,000 to less than $7,500 is a fifth-degree felony (6-12 months, $2,500 fine). Property $7,500 to less than $150,000 is a fourth-degree felony; $150,000 to $750,000 is a third-degree felony; $750,000 to $1.5 million is a second-degree felony; $1.5 million or more is a first-degree felony. Prior theft convictions significantly enhance penalties.',
  },
  {
    question: 'What is the difference between theft and fraud in Ohio?',
    answer: 'Theft (ORC 2913.02) involves taking property of another without consent. Fraud (ORC 2913.41) involves knowingly deceiving another to obtain property or services. Both are theft-related offenses, but fraud specifically involves deception, false pretenses, or misrepresentation. Fraud charges often involve false documents, identity theft, credit card fraud, or insurance fraud. Penalties for fraud are similar to theft and depend on value obtained.',
  },
  {
    question: 'Can I get theft charges reduced or dismissed in Ohio?',
    answer: 'Yes, theft charges may be reduced or dismissed through various defenses including lack of intent, mistaken identity, consent, or insufficient evidence. Restitution and repayment may help negotiate reduced charges or diversion programs for first-time offenders. An experienced theft defense attorney can evaluate your case, develop defense strategies, negotiate with prosecutors, and work toward the best possible outcome.',
  },
  {
    question: 'What should I do if I am charged with theft or fraud in Ohio?',
    answer: 'If charged with theft or fraud in Ohio, exercise your rights immediately. Do not discuss the case with anyone except your attorney. Contact an experienced theft defense attorney right away. Avoid contact with alleged victims or witnesses. Do not make statements to police or prosecutors without your attorney present. Gather any evidence that supports your defense including receipts, witnesses, or documents. An attorney can protect your rights, develop defense strategies, and work toward the best possible outcome.',
  },
];

export default function TheftFraudChargesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Theft & Fraud Charges Lawyer in Columbus, OH"
        description="Experienced legal defense for theft, fraud, embezzlement, and identity theft charges. Protecting your rights and fighting for the best possible outcome."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Understanding Theft and Fraud Charges in Ohio
            </h2>
            
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Theft and fraud charges in Columbus or throughout Ohio carry serious criminal penalties that escalate based on property value, type of property, and prior convictions. At Jwayyed Law LLC, we provide experienced defense representation for all theft-related charges under Ohio Revised Code Chapter 2913. Our attorney understands Ohio theft and fraud laws, sentencing structures, and defense strategies necessary to protect your rights and achieve favorable outcomes.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Theft offenses in Ohio range from misdemeanor shoplifting to serious felony fraud and embezzlement charges carrying substantial prison time. Under Ohio law, theft convictions can result in jail time, large fines, restitution, and permanent criminal records affecting employment, professional licenses, and housing opportunities. Fraud charges often involve additional complications including identity theft, credit card fraud, or insurance fraud with enhanced penalties.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's theft and fraud laws are complex, and prosecutors aggressively pursue these charges, particularly for fraud involving multiple victims, elderly victims, or large amounts. Understanding the specific elements prosecutors must prove, available defenses, and the court process is essential for building an effective defense. Early intervention by an experienced theft and fraud defense attorney can significantly impact the outcome, potentially resulting in reduced charges, dismissed cases, or favorable plea agreements that minimize consequences.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The legal process for theft and fraud charges begins with arrest and initial court appearances, followed by discovery, pretrial motions, plea negotiations, and potentially trial. Each stage requires strategic decision-making and experienced legal representation. Property valuation is particularly important in theft cases, as it determines charge severity and penalties. An attorney can challenge valuations, develop defenses, and work toward the best possible outcome.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Types of Theft and Fraud Charges in Ohio
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Theft (ORC 2913.02)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Theft involves knowingly obtaining or exerting control over property of another without consent, with intent to deprive the owner. Penalties range from first-degree misdemeanors for property under $1,000 to first-degree felonies for property $1.5 million or more (per ORC 2913.02 as amended by HB 366 effective April 2025). Theft of firearms, credit cards, or motor vehicles is charged as felonies regardless of value.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Fraud (ORC 2913.41)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Fraud involves knowingly deceiving another or using deception to obtain property or services. Fraud charges include credit card fraud, check fraud, insurance fraud, or identity theft. Penalties are similar to theft and depend on value obtained, with enhanced penalties for fraud involving elderly victims or vulnerable adults.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Embezzlement (ORC 2913.02)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Embezzlement involves misappropriating property entrusted to you, typically in employment or business relationships. Embezzlement is charged as theft and penalties depend on amount misappropriated. Embezzlement by public officials or from employers carries enhanced penalties and may involve additional charges.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Identity Theft (ORC 2913.49)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Identity theft involves using another person's identifying information without authorization to obtain credit, property, or services. Identity theft is a felony charge punishable by substantial prison time and fines. Multiple counts or identity theft involving multiple victims carries enhanced penalties.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ohio Theft and Fraud Penalties
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code Chapter 2929, theft and fraud penalties depend on property value, type of property, and prior convictions. Understanding the full scope of consequences is essential:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Penalty Structure by Property Value</h4>
              <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li><strong>First-Degree Misdemeanor:</strong> Property under $1,000 - Up to 180 days jail, fines up to $1,000, court costs, probation fees, and permanent criminal record</li>
                <li><strong>Fifth-Degree Felony:</strong> Property $1,000 to less than $7,500 - 6-12 months imprisonment, fines up to $2,500, court costs, and permanent felony record</li>
                <li><strong>Fourth-Degree Felony:</strong> Property $7,500 to less than $150,000 - 6-18 months imprisonment, fines up to $5,000, court costs, and permanent felony record (per ORC 2913.02 as amended by HB 366 effective April 2025)</li>
                <li><strong>Third-Degree Felony (F-3):</strong> Property $150,000 to $750,000 - 9-36 months imprisonment, fines up to $10,000, court costs, and permanent serious felony record</li>
                <li><strong>Second-Degree Felony (F-2):</strong> Property $750,000 to $1.5 million - 2-8 years indefinite imprisonment, fines up to $15,000, court costs, and permanent serious felony record</li>
                <li><strong>First-Degree Felony (F-1):</strong> Property $1.5 million or more - 3-11 years indefinite imprisonment, fines up to $20,000, court costs, and permanent serious felony record</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Enhanced Penalties</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Theft of certain items is charged as felonies regardless of value including firearms, credit cards, motor vehicles, or dangerous drugs. Theft from elderly victims (65+) or vulnerable adults carries enhanced penalties. Prior theft convictions significantly increase penalties, often elevating charges by one degree. Theft by public officials or employees from employers may involve additional charges and enhanced penalties.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Restitution Requirements</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Courts typically order restitution requiring repayment of stolen property value plus any damages. Restitution is mandatory and can be substantial, particularly for high-value thefts. Restitution must be paid even if you serve jail time, and failure to pay can result in additional penalties. An attorney can negotiate reasonable restitution amounts and payment plans to make repayment manageable.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Collateral Consequences</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Beyond criminal penalties, theft and fraud convictions create lasting consequences including employment barriers (many employers refuse to hire individuals with theft convictions), professional license restrictions (especially for positions involving money or trust), housing difficulties (landlords often reject applications), educational impact (financial aid eligibility), permanent criminal records accessible to employers and others, and immigration consequences for non-citizens. These consequences persist long after completing sentences.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Legal Process for Theft and Fraud Charges
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the criminal court process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Arrest and Initial Court Proceedings</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                After arrest, you will be arraigned where charges are formally read, bail is set, and you enter a plea. This is a critical stage where an attorney can argue for reduced bail, release on recognizance, or house arrest. The initial plea (typically not guilty) preserves your rights and allows time for investigation and defense preparation. An attorney can also request discovery materials including police reports, witness statements, and evidence at this early stage.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Discovery and Investigation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                During discovery, prosecutors must provide all evidence including police reports, witness statements, surveillance footage, financial records, and documentation. An experienced attorney will thoroughly review this evidence, conduct independent investigation, examine property valuations, interview witnesses, review surveillance footage, and identify weaknesses in the prosecution's case. This investigation may reveal evidence supporting defenses, valuation issues, or insufficient evidence.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Plea Negotiations and Diversion Programs</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Most theft and fraud cases are resolved through plea negotiations rather than trial. An experienced attorney can negotiate with prosecutors to reduce charges (felony to misdemeanor, higher value to lower value), negotiate favorable plea agreements that minimize penalties, explore eligibility for diversion programs for first-time offenders, or arrange for charges to be dismissed upon completion of conditions including restitution. First-time offenders may qualify for diversion programs that avoid conviction entirely.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How a Theft and Fraud Defense Attorney Can Help
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced theft and fraud defense attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate Protection of Rights:</strong> Ensure your constitutional rights are protected from the moment of arrest, including right to remain silent, right to counsel, and protection against illegal searches</li>
              <li><strong>Comprehensive Case Investigation:</strong> Thoroughly review police reports, evidence, witness statements, surveillance footage, financial records, and all discovery materials to identify weaknesses, valuation issues, or evidence supporting your defense</li>
              <li><strong>Strategic Property Valuation Challenges:</strong> Challenge property valuations that determine charge severity and penalties, as even small valuation differences can change charge levels significantly</li>
              <li><strong>Defense Strategy Development:</strong> Develop and execute defense strategies including lack of intent, mistaken identity, consent, insufficient evidence, or false allegations based on thorough investigation</li>
              <li><strong>Evidence Challenges:</strong> Challenge improperly obtained evidence, flawed investigations, unreliable witnesses, or insufficient evidence through pretrial motions</li>
              <li><strong>Skilled Negotiation:</strong> Work with prosecutors to reduce charges, negotiate favorable plea agreements, secure alternative sentencing options including diversion programs, or arrange dismissals upon completion of conditions</li>
              <li><strong>Restitution Negotiations:</strong> Negotiate reasonable restitution amounts and payment plans to make repayment manageable and avoid additional penalties</li>
              <li><strong>Aggressive Trial Advocacy:</strong> Provide effective trial representation with compelling arguments, strategic cross-examination, and protection of your rights throughout trial proceedings if your case proceeds to trial</li>
              <li><strong>Record Sealing:</strong> Help eligible clients seal misdemeanor theft records after case resolution and required waiting periods under Ohio Revised Code Chapter 2953</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Common Defenses to Theft and Fraud Charges
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Lack of Intent</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Theft requires intent to deprive the owner of property. If you lacked intent, made an honest mistake, or believed you had a right to the property, this defense may apply. Evidence of mistake, misunderstanding, or lack of knowledge can result in reduced or dismissed charges.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Consent</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If the owner consented to your taking or use of property, theft charges may not apply. This defense requires evidence of actual consent, permission, or authorization to take or use the property in question.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Mistaken Identity</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                If you were misidentified as the person who committed theft, this defense may apply. Surveillance footage, witness statements, or alibi evidence can support mistaken identity defenses.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Insufficient Evidence</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Prosecutors must prove theft beyond a reasonable doubt. If evidence is weak, inconsistent, or insufficient, charges may be dismissed or reduced. An attorney can challenge evidence quality, witness credibility, and prosecution arguments to protect your rights.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Choose Jwayyed Law LLC for Theft and Fraud Defense
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated theft and fraud defense representation in Columbus, Franklin County, and throughout Ohio. We understand that theft charges can arise from various circumstances including misunderstandings, mistakes, or false allegations. Our attorney works diligently to investigate cases, develop strong defenses, and achieve favorable outcomes while protecting your rights and reputation.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We handle all types of theft and fraud cases, from misdemeanor shoplifting to serious felony fraud and embezzlement charges. Our firm also assists with restitution negotiations, diversion programs for first-time offenders, and working with prosecutors to secure alternative sentencing options when appropriate. We maintain open communication with clients, ensuring you understand the charges, potential consequences, and defense strategies throughout your case.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic defense development, and aggressive advocacy. We understand the local court systems, prosecutor policies, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and jurisdiction. We work closely with clients to understand their goals, explain legal options, and make informed decisions about defense strategies including whether to pursue diversion programs, negotiate pleas, or proceed to trial.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing theft or fraud charges in Columbus or anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation. We will review your case, explain your rights, discuss potential defenses including valuation challenges, evaluate eligibility for diversion programs, and develop a strategy tailored to your situation. Time is critical in theft cases—early intervention by experienced counsel can significantly impact the outcome, potentially resulting in dismissed charges, reduced penalties, or eligibility for treatment programs. Do not delay in seeking experienced legal representation to protect your rights and future.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">Related Practice Areas</h4>
              <div className="flex flex-wrap gap-3 font-['Inter',_'Arial',_sans-serif]">
                <Link href="/criminal-defense/burglary-charges" className="text-orange-500 hover:underline">Burglary Defense</Link>
                <Link href="/criminal-defense/robbery-charges" className="text-orange-500 hover:underline">Robbery Defense</Link>
                <Link href="/criminal-defense/felony-charges" className="text-orange-500 hover:underline">Felony Defense</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

