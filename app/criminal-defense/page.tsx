import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ohio Criminal Defense Attorney | Experienced Legal Representation | Jwayyed Law LLC',
  description: 'Experienced Ohio criminal defense attorney protecting your rights. Skilled representation for assault, drug crimes, domestic violence, theft, and all criminal charges. Schedule consultation: (614) 285-5482',
  keywords: [
    'Ohio criminal defense attorney',
    'Ohio criminal defense lawyer',
    'criminal defense Ohio',
    'assault defense attorney',
    'drug crimes attorney',
    'domestic violence lawyer',
    'theft defense attorney',
    'misdemeanor defense attorney',
    'Ohio criminal attorney'
  ],
  openGraph: {
    title: 'Ohio Criminal Defense Attorney | Jwayyed Law LLC',
    description: 'Experienced criminal defense representation throughout Ohio. Schedule consultation available.',
    url: 'https://www.jjlawohio.com/criminal-defense',
  },
  alternates: {
    canonical: '/criminal-defense',
  },
};

const breadcrumbItems = [
  { label: 'Criminal Defense', href: '/criminal-defense' },
];

const faqs = [
  {
    question: 'What should I do if I am arrested in Ohio?',
    answer: 'If you are arrested in Ohio, remain calm and exercise your constitutional rights. You have the right to remain silent and should not answer questions without an attorney present. You have the right to an attorney, and if you cannot afford one, the court will appoint one. Contact a criminal defense attorney as soon as possible to protect your rights and begin building your defense strategy. Do not discuss your case with anyone except your attorney.',
  },
  {
    question: 'What is the difference between a misdemeanor and a felony in Ohio?',
    answer: 'In Ohio, misdemeanors are less serious crimes punishable by fines and up to 12 months in jail. Misdemeanors are classified as first, second, third, or fourth degree. Felonies are more serious crimes punishable by substantial prison time, ranging from six months to life imprisonment. Felonies in Ohio include first, second, third, fourth, and fifth degree offenses. The severity of the charge significantly impacts potential penalties, your record, and future opportunities.',
  },
  {
    question: 'How much does a criminal defense attorney cost in Ohio?',
    answer: 'Criminal defense attorney fees vary based on case complexity, severity of charges, attorney experience, and required time commitment. We represent clients in misdemeanor matters only. Many attorneys offer payment plans. Some cases may qualify for court-appointed counsel if you cannot afford an attorney. During a schedule consultation, we can discuss fees and payment options tailored to your situation.',
  },
  {
    question: 'What are my rights during an arrest in Ohio?',
    answer: 'You have important constitutional rights during arrest in Ohio. You have the right to remain silent and cannot be compelled to testify against yourself under the Fifth Amendment. You have the right to an attorney under the Sixth Amendment and should request one immediately. You have the right to know the charges against you. You have the right to refuse searches without a warrant or probable cause, except in limited circumstances. Remember: anything you say can be used against you, so exercise your right to remain silent until you have legal counsel.',
  },
];

export default function CriminalDefensePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Ohio Criminal Defense Attorney"
        description="Experienced legal representation for all criminal charges throughout Ohio. Protecting your rights and fighting for the best possible outcome."
      />

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Experienced Criminal Defense Representation in Ohio
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed rounded-lg bg-amber-50 border border-amber-200 p-4">
              <strong>Our practice:</strong> Jwayyed Law LLC represents clients in <strong>misdemeanor</strong> criminal matters only. We do not handle felony cases. If you have been charged with a felony, you will need to consult an attorney who handles felony criminal defense.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Facing criminal charges throughout Ohio can be overwhelming and life-altering. At Jwayyed Law LLC, we provide dedicated criminal defense representation for individuals charged with misdemeanor crimes. Our attorney understands the Ohio Revised Code, local court procedures, and defense strategies necessary to protect your rights and achieve the best possible outcome.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Criminal charges carry serious consequences beyond potential jail time. A conviction can affect employment opportunities, professional licenses, housing, and your reputation. Under Ohio law, criminal offenses are classified as misdemeanors or felonies, each with different sentencing structures and long-term implications. Our firm works diligently to challenge evidence, negotiate with prosecutors, and defend your case at trial when necessary.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Ohio's criminal justice system is complex, with multiple stages from arrest through trial and sentencing. Understanding your rights at each stage is critical. The process begins with investigation and arrest, followed by initial court appearances, discovery, pretrial motions, plea negotiations, and potentially trial. Each stage requires strategic decision-making and experienced legal representation. Early intervention by a skilled criminal defense attorney can significantly impact the outcome, potentially resulting in reduced charges, dismissed cases, or favorable plea agreements that minimize consequences.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              The consequences of a criminal conviction extend far beyond the immediate penalties. A criminal record can create barriers to employment, as many employers conduct background checks and may refuse to hire individuals with criminal convictions. Professional licenses in fields such as healthcare, education, law enforcement, finance, and real estate may be denied or revoked. Housing applications may be rejected by landlords conducting background checks. Educational opportunities including financial aid eligibility can be affected. Gun rights may be lost for certain serious convictions. Immigration consequences can include deportation for non-citizens. These collateral consequences persist long after completing sentences and paying fines.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Criminal Court Process in Ohio
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Understanding the criminal court process helps you prepare for what lies ahead. The process typically involves several stages, each requiring strategic legal representation:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Arrest and Initial Court Proceedings</h4>
              <p className="text-gray-700 mb-4">
                After arrest, you will be taken before a judge for arraignment where charges are formally read, bail is set, and you enter a plea. This is a critical stage where an attorney can argue for reduced bail, release on recognizance, or house arrest. The initial plea (typically not guilty) preserves your rights and allows time for investigation and defense preparation. An attorney can also request discovery materials including police reports, witness statements, and evidence at this early stage.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Discovery and Investigation</h4>
              <p className="text-gray-700 mb-4">
                During discovery, prosecutors must provide all evidence they intend to use at trial. An experienced attorney will thoroughly review this evidence, conduct independent investigation, interview witnesses, examine forensic evidence, review surveillance footage if available, and identify weaknesses in the prosecution's case. This investigation may reveal evidence supporting defenses, constitutional violations, or insufficient evidence. Independent experts including forensic specialists, medical professionals, or use-of-force experts may be consulted to challenge the prosecution's evidence.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Pretrial Motions</h4>
              <p className="text-gray-700 mb-4">
                Strategic pretrial motions can significantly impact your case. Motions to suppress evidence may be filed if evidence was obtained illegally, if your constitutional rights were violated during arrest, or if statements were coerced. Motions to dismiss may be filed if charges lack sufficient evidence, if statutes of limitations have expired, or if procedural errors occurred. Motions to compel discovery ensure prosecutors provide all required evidence. These motions require legal expertise and can result in dismissal of charges or exclusion of damaging evidence.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Plea Negotiations</h4>
              <p className="text-gray-700 mb-4">
                Most criminal cases are resolved through plea negotiations rather than trial. An experienced attorney can negotiate with prosecutors to reduce charges where applicable (e.g., aggravated to simple), negotiate favorable plea agreements that minimize penalties, secure alternative sentencing options including diversion programs or treatment instead of jail, or arrange for charges to be dismissed upon completion of conditions. These negotiations require understanding of local court practices, prosecutor policies, and case strengths.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Trial Representation</h4>
              <p className="text-gray-700 mb-4">
                If your case proceeds to trial, experienced trial representation is essential. Your attorney will present evidence supporting your defense, cross-examine prosecution witnesses to expose weaknesses or inconsistencies, present expert testimony when appropriate, make compelling arguments to the jury, and protect your rights throughout the process. Trial requires extensive preparation, knowledge of evidence rules, and effective advocacy skills. A not guilty verdict results in complete dismissal of charges.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              How a Criminal Defense Attorney Can Help
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              An experienced criminal defense attorney provides comprehensive representation throughout every stage of your case:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
              <li><strong>Immediate Protection of Rights:</strong> Ensure your constitutional rights are protected from the moment of arrest, including right to remain silent, right to counsel, and protection against illegal searches and seizures</li>
              <li><strong>Comprehensive Case Evaluation:</strong> Thoroughly review police reports, evidence, witness statements, forensic reports, and all discovery materials to identify weaknesses in the prosecution's case, constitutional violations, or evidence supporting your defense</li>
              <li><strong>Constitutional Rights Protection:</strong> Ensure your Fourth Amendment (search and seizure), Fifth Amendment (self-incrimination, due process), and Sixth Amendment (right to counsel, confrontation) rights were not violated during investigation or arrest</li>
              <li><strong>Strategic Evidence Challenges:</strong> Challenge improperly obtained evidence through illegal searches, flawed forensic testing, unreliable witness testimony, coerced statements, or violations of chain of custody through pretrial motions</li>
              <li><strong>Defense Strategy Development:</strong> Develop and execute defense strategies including self-defense, lack of intent, mistaken identity, alibi, insufficient evidence, or false allegations based on thorough investigation</li>
              <li><strong>Expert Consultation:</strong> Consult with forensic experts, medical professionals, use-of-force experts, or other specialists to challenge prosecution evidence and support your defense</li>
              <li><strong>Skilled Negotiation:</strong> Work with prosecutors to reduce charges, negotiate favorable plea agreements, secure alternative sentencing options, or arrange dismissals upon completion of conditions</li>
              <li><strong>Aggressive Trial Advocacy:</strong> Provide effective trial representation with compelling arguments, strategic cross-examination, expert testimony, and protection of your rights throughout trial proceedings</li>
              <li><strong>Sentencing Advocacy:</strong> Present mitigating evidence, argue for minimum sentences, advocate for alternative sentencing options including treatment programs or probation, and work to minimize consequences if conviction occurs</li>
              <li><strong>Post-Conviction Relief:</strong> Help eligible clients with record sealing, expungement applications, sentence modifications, or appeals when appropriate</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Criminal Defense Practice Areas
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Our firm handles all types of criminal charges under Ohio law, providing experienced defense representation across the full spectrum of criminal offenses. We understand that each type of charge requires specific knowledge of the relevant statutes, common defenses, and sentencing structures. Our comprehensive practice includes:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Link href="/criminal-defense/assault-charges" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Assault Charges</h4>
                <p className="text-sm text-gray-600">Defense for misdemeanor assault (simple assault) and battery under ORC 2903.13. We do not handle felony assault.</p>
              </Link>
              <Link href="/criminal-defense/domestic-violence" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Domestic Violence</h4>
                <p className="text-sm text-gray-600">Protection for domestic violence charges and protection order matters under ORC 2919.25</p>
              </Link>
              <Link href="/criminal-defense/criminal-mischief" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Criminal Mischief</h4>
                <p className="text-sm text-gray-600">Defense for property damage and criminal mischief charges under ORC 2909.07</p>
              </Link>
              <Link href="/criminal-defense/criminal-trespass" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Criminal Trespass</h4>
                <p className="text-sm text-gray-600">Defense for trespass charges and unlawful entry allegations under ORC 2911.21</p>
              </Link>
              <Link href="/criminal-defense/petty-theft" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Petty Theft</h4>
                <p className="text-sm text-gray-600">Defense for shoplifting and petty theft charges under ORC 2913.02</p>
              </Link>
              <Link href="/criminal-defense/resisting-arrest" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Resisting Arrest</h4>
                <p className="text-sm text-gray-600">Defense for resisting arrest charges under ORC 2921.33</p>
              </Link>
              <Link href="/criminal-defense/obstruction-of-official-business" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Obstruction of Official Business</h4>
                <p className="text-sm text-gray-600">Defense for obstruction charges under ORC 2921.31</p>
              </Link>
              <Link href="/criminal-defense/speeding-tickets" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Speeding Tickets</h4>
                <p className="text-sm text-gray-600">Defense for speeding violations, point reduction, and CDL implications under ORC 4511.21</p>
              </Link>
              <Link href="/criminal-defense/driving-under-suspension" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Driving Under Suspension</h4>
                <p className="text-sm text-gray-600">Defense for DUS charges and license reinstatement under ORC 4510.11-4510.16</p>
              </Link>
              <Link href="/criminal-defense/no-operators-license" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">No Operator&apos;s License</h4>
                <p className="text-sm text-gray-600">Defense for driving without a valid license charges under ORC 4510.12</p>
              </Link>
              <Link href="/criminal-defense/expungement-record-sealing" className="block p-4 border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-2">Expungement & Record Sealing</h4>
                <p className="text-sm text-gray-600">Seal or expunge eligible criminal records under ORC Chapter 2953</p>
              </Link>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Each practice area requires specific knowledge of the relevant Ohio Revised Code sections, common defenses, sentencing structures, and case law. Our attorney stays current with changes in Ohio criminal law and understands how these laws are applied throughout Ohio courts. We develop defense strategies tailored to the specific type of charge you face, drawing on our experience with similar cases and knowledge of local court practices.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Understanding Ohio Criminal Penalties
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Ohio's criminal sentencing structure, defined in Ohio Revised Code Chapter 2929, establishes penalties based on offense degree:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Misdemeanor Penalties in Ohio</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>First Degree Misdemeanor:</strong> Up to 180 days in jail, fines up to $1,000</li>
                <li><strong>Second Degree Misdemeanor:</strong> Up to 90 days in jail, fines up to $750</li>
                <li><strong>Third Degree Misdemeanor:</strong> Up to 60 days in jail, fines up to $500</li>
                <li><strong>Fourth Degree Misdemeanor:</strong> Up to 30 days in jail, fines up to $250</li>
              </ul>

              <p className="text-gray-700 mt-4 mb-2 text-sm italic">We do not represent clients on felony charges. The following is general information only.</p>
              <h4 className="font-semibold text-gray-900 mt-6 mb-4">Felony Penalties in Ohio (Informational — We Do Not Handle Felony Cases)</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>First Degree Felony (F-1):</strong> 3-11 years indefinite imprisonment (for offenses after March 22, 2019, maximum equals minimum plus 50%), fines up to $20,000</li>
                <li><strong>Second Degree Felony (F-2):</strong> 2-8 years indefinite imprisonment (for offenses after March 22, 2019), fines up to $15,000</li>
                <li><strong>Third Degree Felony (F-3):</strong> 9-36 months imprisonment, fines up to $10,000</li>
                <li><strong>Fourth Degree Felony:</strong> 6-18 months imprisonment, fines up to $5,000</li>
                <li><strong>Fifth Degree Felony:</strong> 6-12 months imprisonment, fines up to $2,500</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              These penalties represent maximum sentences. Factors including prior criminal history, severity of the offense, victim impact, and presence of weapons can affect sentencing. Under Ohio Revised Code 2929.12, judges consider various aggravating and mitigating factors when determining sentences. Aggravating factors that can increase penalties include prior convictions, use of weapons, harm to victims, offenses committed in the presence of children, or gang-related activity. Mitigating factors that can reduce penalties include lack of prior record, genuine remorse, cooperation with authorities, or circumstances suggesting the offense was less serious than typical.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Certain offenses carry mandatory minimum sentences that cannot be suspended or reduced. For example, certain drug trafficking amounts trigger mandatory 5-year minimum prison sentences. Some violent offenses carry mandatory prison time. Understanding these mandatory minimums is essential when evaluating plea offers and defense strategies. An experienced attorney can explain how mandatory minimums apply to your case and work to avoid or minimize their impact when possible.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Collateral Consequences of Criminal Convictions</h4>
              <p className="text-gray-700 mb-4">
                Beyond the direct criminal penalties, convictions create lasting collateral consequences that persist long after completing sentences:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Employment Barriers:</strong> Many employers conduct background checks and may refuse to hire individuals with criminal convictions, particularly for felonies or offenses involving dishonesty</li>
                <li><strong>Professional License Restrictions:</strong> Convictions can result in denial or revocation of professional licenses in healthcare, education, law enforcement, finance, real estate, and other regulated fields</li>
                <li><strong>Housing Difficulties:</strong> Landlords often conduct background checks and may reject applications from individuals with criminal records</li>
                <li><strong>Educational Impact:</strong> Criminal convictions can affect financial aid eligibility, admission to certain programs, and professional school applications</li>
                <li><strong>Gun Rights Loss:</strong> Felony convictions result in permanent loss of the right to possess firearms under federal law</li>
                <li><strong>Immigration Consequences:</strong> Criminal convictions can result in deportation, denial of naturalization, or inadmissibility for non-citizens</li>
                <li><strong>Voting Rights:</strong> Felony convictions result in loss of voting rights until restoration</li>
                <li><strong>Child Custody Impact:</strong> Criminal convictions can significantly affect family court custody and visitation determinations</li>
                <li><strong>Insurance Rates:</strong> Certain convictions can result in increased insurance premiums</li>
                <li><strong>Permanent Record:</strong> Criminal records are permanent and accessible to employers, landlords, and others conducting background checks</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Common Defenses in Criminal Cases
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              The specific defenses available depend on the charges and circumstances, but common defenses include:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Constitutional Defenses</h4>
              <p className="text-gray-700 mb-4">
                Violations of your constitutional rights can result in suppression of evidence or dismissal of charges. These include illegal searches and seizures (Fourth Amendment), coerced confessions or violations of right to remain silent (Fifth Amendment), or denial of right to counsel (Sixth Amendment). An attorney can identify constitutional violations and file motions to suppress evidence or dismiss charges.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Factual Defenses</h4>
              <p className="text-gray-700 mb-4">
                Factual defenses challenge the prosecution's version of events. These include alibi (you were elsewhere), self-defense (you acted to protect yourself), defense of others, lack of intent, mistaken identity, or insufficient evidence. These defenses require investigation, evidence gathering, and effective presentation to the court or jury.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Procedural Defenses</h4>
              <p className="text-gray-700 mb-4">
                Procedural defenses challenge how the case was handled. These include statute of limitations (charges filed too late), double jeopardy (being tried twice for the same offense), or prosecutorial misconduct. These defenses can result in dismissal of charges.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Choose Jwayyed Law LLC for Criminal Defense
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Our firm provides personalized attention to each criminal case. We understand that every situation is unique, and we develop defense strategies tailored to your specific circumstances. With knowledge of Ohio criminal law and local court procedures, we work to protect your rights and achieve favorable outcomes. We maintain open communication throughout your case, ensuring you understand the process and your options.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Our approach combines thorough investigation, strategic defense development, and aggressive advocacy. We understand the local court systems, prosecutor policies, and judicial preferences throughout Ohio. This knowledge allows us to develop effective strategies tailored to your specific case and jurisdiction. We work closely with clients to understand their goals, explain legal options, and make informed decisions about defense strategies.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We recognize that criminal charges can have devastating consequences on your life, career, and future. Our firm is committed to providing personalized, dedicated representation focused on achieving the best possible outcome. Whether through negotiation, pretrial motions, or trial advocacy, we fight aggressively to protect your rights and minimize consequences. We handle cases from initial arrest through trial and post-conviction relief, providing comprehensive representation at every stage.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Our experience includes defending clients charged with misdemeanors across all practice areas. We have successfully negotiated reduced charges, secured dismissals, won trials, and helped clients seal or expunge records. We understand that each case is different and requires careful analysis of the facts, law, and available defenses. We invest the time and resources necessary to build strong defenses and achieve favorable outcomes.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              If you are facing criminal charges anywhere in Ohio, contact Jwayyed Law LLC to schedule a consultation. We will review your case, explain your rights, discuss potential defenses, and develop a strategy tailored to your situation. Time is critical in criminal cases—early intervention by experienced counsel can significantly impact the outcome, potentially resulting in dismissed charges, reduced penalties, or favorable plea agreements. Do not delay in seeking experienced legal representation to protect your rights, freedom, and future.
            </p>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <ContactCTA />
    </>
  );
}

