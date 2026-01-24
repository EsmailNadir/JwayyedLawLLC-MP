import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Drug Crimes Defense Lawyer in Columbus, OH | Experienced Attorney | Jwayyed Law LLC',
  description: 'Experienced Columbus drug crimes defense attorney protecting your rights. Skilled representation for drug possession, trafficking, manufacturing, and distribution charges in Ohio. Free consultation: (614) 285-5482',
  keywords: [
    'drug crimes lawyer Columbus OH',
    'drug defense attorney Ohio',
    'drug possession attorney',
    'drug trafficking lawyer',
    'drug manufacturing attorney',
    'Ohio drug crimes lawyer',
    'Franklin County drug attorney'
  ],
  openGraph: {
    title: 'Drug Crimes Defense Lawyer in Columbus, OH | Jwayyed Law LLC',
    description: 'Experienced drug crimes defense representation in Columbus and throughout Ohio. Free consultation available.',
    url: 'https://www.jjlawohio.com/criminal-defense/drug-crimes',
  },
  alternates: {
    canonical: '/criminal-defense/drug-crimes',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
  { label: 'Drug Crimes', href: '/criminal-defense/drug-crimes' },
];

const faqs = [
  {
    question: 'What are the penalties for drug possession in Ohio?',
    answer: 'Drug possession penalties in Ohio under ORC 2925.11 vary based on drug type, amount, and prior convictions. Marijuana possession under 100 grams is typically a minor misdemeanor with fines only. Possession of other controlled substances ranges from fifth-degree felonies (6-12 months, $2,500 fine) to first-degree felonies (3-11 years, $20,000 fine) depending on the schedule and amount. Prior convictions enhance penalties significantly.',
  },
  {
    question: 'What is the difference between drug possession and drug trafficking in Ohio?',
    answer: 'Drug possession (ORC 2925.11) involves possessing controlled substances for personal use. Drug trafficking (ORC 2925.03) involves selling, distributing, or preparing controlled substances for sale. Trafficking charges are generally more severe, with higher penalties and mandatory prison sentences for certain amounts. The prosecution must prove intent to distribute, which can be established through quantity, packaging, scales, cash, or other evidence.',
  },
  {
    question: 'Can I get drug charges dismissed in Ohio?',
    answer: 'Drug charges may be dismissed or reduced through various defenses including illegal search and seizure, insufficient evidence, improper chain of custody, lack of intent, entrapment, or challenging the legality of the search warrant. Some first-time offenders may qualify for diversion programs or treatment in lieu of conviction under ORC 2951.041. An experienced drug crimes attorney can evaluate your case and develop the strongest defense strategy.',
  },
  {
    question: 'What is Ohio\'s Treatment in Lieu of Conviction program?',
    answer: 'Under Ohio Revised Code 2951.041, certain first-time drug offenders may qualify for Treatment in Lieu of Conviction (TILC). This program allows eligible defendants to complete drug treatment and rehabilitation instead of facing criminal conviction. Successful completion results in dismissal of charges, while failure can result in conviction and sentencing. Eligibility depends on the offense, prior record, and court determination. An attorney can help determine eligibility and guide you through the process.',
  },
  {
    question: 'What should I do if I am charged with a drug crime in Ohio?',
    answer: 'If charged with a drug crime in Ohio, exercise your rights immediately. Do not discuss the case with anyone except your attorney. Contact an experienced drug crimes defense attorney right away. Avoid contact with co-defendants or others involved. Do not consent to additional searches. Gather any evidence that supports your defense. An attorney can protect your rights, challenge evidence including search warrants, develop defense strategies, and work toward the best possible outcome.',
  },
];

export default function DrugCrimesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Drug Crimes Defense Lawyer in Columbus, OH"
        description="Experienced legal defense for drug possession, trafficking, manufacturing, and distribution charges. Protecting your rights and fighting for the best possible outcome."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl font-bold text-gray-900 mb-6">
              Understanding Drug Crimes in Ohio
            </h2>
            
            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Drug crimes in Columbus or throughout Ohio carry severe criminal penalties that escalate based on drug type, amount, prior convictions, and whether charges involve possession, trafficking, or manufacturing. At Jwayyed Law LLC, we provide experienced defense representation for all drug-related charges under Ohio Revised Code Chapter 2925. Our attorney understands Ohio drug laws, sentencing structures, and defense strategies necessary to protect your rights and achieve favorable outcomes.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio classifies controlled substances into five schedules based on potential for abuse and accepted medical use. Drug offenses range from minor misdemeanor marijuana possession to serious felony trafficking and manufacturing charges carrying mandatory prison sentences. Under Ohio law, drug convictions can result in substantial jail time, large fines, driver's license suspension, and permanent criminal records affecting employment, education, and housing opportunities.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Ohio's drug laws are among the strictest in the nation, and prosecutors aggressively pursue drug charges, particularly for trafficking and manufacturing offenses. Understanding the complex sentencing structures, mandatory minimum sentences, and available defenses is essential for building an effective defense. Early intervention by an experienced drug crimes defense attorney can significantly impact the outcome, potentially resulting in reduced charges, dismissed cases, or eligibility for diversion programs that avoid conviction.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              The legal process for drug charges involves arrest, initial court appearances, discovery, pretrial motions challenging evidence, plea negotiations, and potentially trial. Each stage requires strategic decision-making and experienced legal representation. Search and seizure challenges are particularly important in drug cases, as illegal searches can result in suppression of evidence and dismissal of charges. An attorney experienced in Fourth Amendment law can identify search violations and file appropriate motions to protect your rights.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Types of Drug Crimes in Ohio
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Drug Possession (ORC 2925.11)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Drug possession involves knowingly obtaining, possessing, or using controlled substances. Penalties vary from minor misdemeanors for small amounts of marijuana to first-degree felonies for large amounts of Schedule I or II substances. Possession of under 100 grams of marijuana is typically a minor misdemeanor with fines only, while possession of other controlled substances can result in felony charges with mandatory prison sentences.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Drug Trafficking (ORC 2925.03)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Drug trafficking involves selling, preparing for sale, shipping, transporting, delivering, preparing, packaging, labeling, or distributing controlled substances. Trafficking charges are generally more severe than possession, with penalties ranging from fourth-degree felonies to first-degree felonies depending on drug type and amount. Certain amounts trigger mandatory prison sentences and large fines.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Drug Manufacturing (ORC 2925.04)</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Drug manufacturing involves producing, cultivating, or creating controlled substances. Manufacturing charges are serious felonies carrying substantial penalties. Manufacturing methamphetamine, fentanyl, or large amounts of controlled substances results in first or second-degree felony charges with mandatory prison sentences. Prior convictions significantly enhance penalties.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ohio Drug Crime Penalties and Sentencing
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code Chapter 2925, drug crime penalties depend on several factors. Understanding the full scope of consequences is essential:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Penalty Factors</h4>
              <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <li><strong>Drug Schedule:</strong> Schedule I and II substances (heroin, cocaine, methamphetamine, fentanyl) carry the highest penalties with first-degree felony charges for large amounts</li>
                <li><strong>Amount:</strong> Larger amounts result in enhanced charges and mandatory prison sentences. For example, trafficking 100+ grams of cocaine triggers mandatory 5-year minimum prison sentence</li>
                <li><strong>Prior Convictions:</strong> Prior drug convictions significantly increase penalties, often elevating charges by one degree and triggering mandatory minimum sentences</li>
                <li><strong>Location Enhancements:</strong> Offenses within 1,000 feet of schools, within 100 feet of juveniles, or near treatment facilities enhance penalties and can double fines</li>
                <li><strong>Type of Offense:</strong> Trafficking and manufacturing carry more severe penalties than possession, with trafficking typically charged one degree higher than equivalent possession amounts</li>
                <li><strong>Mandatory Sentences:</strong> Certain amounts trigger mandatory minimum prison sentences that cannot be suspended, including 5-year minimums for large-scale trafficking</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Specific Penalty Examples</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <strong>Marijuana Possession:</strong> Under 100 grams is a minor misdemeanor (fines only). Over 100 grams but under 200 grams is a minor misdemeanor for first offense. Over 200 grams is a fourth-degree felony (6-18 months, $5,000 fine). Trafficking marijuana carries felony penalties based on amount.
              </p>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <strong>Cocaine/Heroin/Methamphetamine:</strong> Possession is typically a fifth-degree felony (6-12 months, $2,500 fine) but can be enhanced based on amount. Trafficking 5-10 grams is a fourth-degree felony. Trafficking 10-20 grams is a third-degree felony (9-36 months, $10,000 fine). Trafficking 20-27 grams is a second-degree felony (2-8 years, $15,000 fine). Trafficking 27+ grams is a first-degree felony (3-11 years, $20,000 fine) with mandatory 5-year minimum.
              </p>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                <strong>Fentanyl:</strong> Possession of any amount is a felony. Trafficking even small amounts carries severe penalties, with trafficking 1-5 grams being a first-degree felony with mandatory prison time due to fentanyl's extreme danger.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Collateral Consequences</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Beyond criminal penalties, drug convictions create lasting consequences including driver's license suspension (6 months to 5 years depending on offense), loss of federal financial aid eligibility for students, employment restrictions (especially for government, healthcare, education, and security jobs), professional license revocation or denial, housing application rejections, immigration consequences including deportation for non-citizens, and permanent felony records accessible to employers and others. These consequences persist long after completing sentences.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Legal Process for Drug Charges
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Understanding the criminal court process helps you prepare for what lies ahead:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Arrest and Initial Court Proceedings</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                After arrest, you will be arraigned where charges are formally read, bail is set, and you enter a plea (typically not guilty to preserve rights). This is a critical stage where an attorney can argue for reduced bail, release on recognizance, or house arrest. The initial plea preserves your rights and allows time for investigation and defense preparation. An attorney can also request discovery materials including police reports, search warrants, lab reports, and evidence at this early stage.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Discovery and Investigation</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                During discovery, prosecutors must provide all evidence including search warrants, police reports, lab test results, chain of custody documentation, witness statements, and any exculpatory evidence. An experienced attorney will thoroughly review this evidence, conduct independent investigation, examine search warrant affidavits for defects, review lab testing procedures, interview witnesses, and identify weaknesses in the prosecution's case. This investigation may reveal illegal searches, chain of custody issues, testing errors, or insufficient evidence of trafficking intent.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Pretrial Motions</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Strategic pretrial motions are crucial in drug cases. Motions to suppress evidence may be filed if searches were illegal, if search warrants lacked probable cause, if warrants were improperly executed, or if your constitutional rights were violated. Motions to dismiss may be filed if charges lack sufficient evidence, if statutes of limitations have expired, or if procedural errors occurred. Motions to compel discovery ensure prosecutors provide all required evidence. These motions require legal expertise in Fourth Amendment law and can result in dismissal of charges or exclusion of damaging evidence.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Plea Negotiations and Diversion Programs</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Most drug cases are resolved through plea negotiations rather than trial. An experienced attorney can negotiate with prosecutors to reduce charges (trafficking to possession, felony to misdemeanor), negotiate favorable plea agreements that minimize penalties, explore eligibility for Treatment in Lieu of Conviction (TILC) or other diversion programs, or arrange for charges to be dismissed upon completion of conditions. First-time offenders may qualify for diversion programs that avoid conviction entirely if they complete treatment and other requirements.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              How a Drug Crimes Defense Attorney Can Help
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              An experienced drug crimes defense attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
              <li><strong>Immediate Protection of Rights:</strong> Ensure your constitutional rights are protected from the moment of arrest, including right to remain silent, right to counsel, and protection against illegal searches</li>
              <li><strong>Search and Seizure Challenges:</strong> Challenge illegal searches, defective warrants, lack of probable cause, warrantless searches, or violations of Fourth Amendment rights under the U.S. Constitution and Ohio Constitution through pretrial motions</li>
              <li><strong>Comprehensive Case Investigation:</strong> Thoroughly review police reports, search warrants, lab reports, chain of custody documentation, witness statements, and all evidence to identify weaknesses, illegal searches, or evidence supporting your defense</li>
              <li><strong>Evidence Challenges:</strong> Challenge improper chain of custody, flawed lab testing procedures, unreliable witnesses, insufficient evidence, or illegally obtained evidence through pretrial motions</li>
              <li><strong>Strategic Defense Development:</strong> Develop and execute defense strategies including lack of knowledge, lack of possession, entrapment, insufficient evidence of trafficking intent, or illegal search and seizure based on thorough investigation</li>
              <li><strong>Expert Consultation:</strong> Consult with forensic experts, lab testing experts, or other professionals to challenge prosecution evidence including drug identification, quantity determinations, or testing procedures</li>
              <li><strong>Diversion Program Assistance:</strong> Explore eligibility for Treatment in Lieu of Conviction (TILC) or other diversion programs for first-time offenders, prepare applications, and guide you through program requirements</li>
              <li><strong>Skilled Negotiation:</strong> Work with prosecutors to reduce charges, negotiate favorable plea agreements, secure alternative sentencing options, or arrange dismissals upon completion of conditions</li>
              <li><strong>Aggressive Trial Advocacy:</strong> Provide effective trial representation with compelling arguments, strategic cross-examination, expert testimony, and protection of your rights throughout trial proceedings if your case proceeds to trial</li>
              <li><strong>Sentencing Advocacy:</strong> Present mitigating evidence, argue for minimum sentences, advocate for treatment programs instead of incarceration, and work to minimize consequences if conviction occurs</li>
            </ul>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Common Defenses to Drug Charges
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Illegal Search and Seizure</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                The Fourth Amendment protects against unreasonable searches and seizures. If police conducted an illegal search, lacked probable cause, or violated search warrant requirements, evidence may be suppressed. Suppressed evidence often results in dismissed charges. An attorney can challenge search legality, warrant validity, and seizure procedures.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Lack of Possession</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Ohio requires actual or constructive possession of controlled substances. If drugs were not in your physical possession or control, or you lacked knowledge of their presence, this defense may apply. Evidence of shared spaces, lack of exclusive control, or lack of knowledge can result in dismissed or reduced charges.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Insufficient Evidence of Trafficking</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Trafficking charges require proof of intent to sell or distribute. If evidence only shows possession for personal use, trafficking charges may be reduced to possession. An attorney can challenge trafficking allegations by demonstrating lack of intent, insufficient evidence, or alternative explanations for quantities or packaging.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Chain of Custody Issues</h4>
              <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-4">
                Proper chain of custody is required for drug evidence. If evidence was improperly handled, stored, or tested, it may be excluded. An attorney can challenge chain of custody documentation, testing procedures, and evidence reliability to protect your rights.
              </p>
            </div>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Treatment in Lieu of Conviction (TILC) Program
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Under Ohio Revised Code 2951.041, certain first-time drug offenders may qualify for Treatment in Lieu of Conviction (TILC). This program allows eligible defendants to complete drug treatment and rehabilitation instead of facing criminal conviction. Eligibility typically requires being a first-time offender, having a substance abuse problem, and the court determining that treatment would be more appropriate than conviction. Successful completion results in dismissal of charges, while failure can result in conviction and sentencing. An attorney can help determine eligibility, prepare the application, present evidence of substance abuse issues, and guide you through the program requirements.
            </p>

            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Choose Jwayyed Law LLC for Drug Crimes Defense
            </h3>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our firm provides dedicated drug crimes defense representation in Columbus, Franklin County, and throughout Ohio. We understand that drug charges can arise from various circumstances and that every case requires careful analysis of evidence, search procedures, and potential defenses. Our attorney works diligently to challenge evidence, develop strong defenses, and achieve favorable outcomes.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              We handle all types of drug cases, from minor marijuana possession to serious trafficking and manufacturing charges. Our firm also assists with diversion programs, Treatment in Lieu of Conviction (TILC), and working with prosecutors to secure alternative sentencing options when appropriate. We maintain open communication with clients, ensuring you understand the charges, potential consequences, and defense strategies throughout your case.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic defense development, and aggressive advocacy. We understand the local court systems, prosecutor policies, and judicial preferences in Columbus and throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and jurisdiction. We work closely with clients to understand their goals, explain legal options, and make informed decisions about defense strategies including whether to pursue diversion programs, negotiate pleas, or proceed to trial.
            </p>

            <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 mb-8 leading-relaxed">
              If you are facing drug charges in Columbus or anywhere in Ohio, contact Jwayyed Law LLC for a free consultation. We will review your case, explain your rights, discuss potential defenses including search challenges, evaluate eligibility for diversion programs, and develop a strategy tailored to your situation. Time is critical in drug cases—early intervention by experienced counsel can significantly impact the outcome, potentially resulting in dismissed charges, reduced penalties, or eligibility for treatment programs. Do not delay in seeking experienced legal representation to protect your rights and freedom.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">Related Practice Areas</h4>
              <div className="flex flex-wrap gap-3 font-['Inter',_'Arial',_sans-serif]">
                <Link href="/criminal-defense/felony-charges" className="text-orange-500 hover:underline">Felony Defense</Link>
                <Link href="/criminal-defense/expungement-record-sealing" className="text-orange-500 hover:underline">Record Sealing</Link>
                <Link href="/criminal-defense/federal-crimes" className="text-orange-500 hover:underline">Federal Drug Crimes</Link>
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

